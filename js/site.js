var isMobile = !1;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0), window.onload = function() {
    function t(t) {
        return document.getElementsByClassName(t)[0]
    }

    function e(t) {
        return document.getElementsByClassName(t)
    }

    function o() {
        return (window.pageYOffset || c.scrollTop) - (c.clientTop || 0)
    }

    function i(t) {
        window.scrollTo(0, t)
    }

    function a(t, e, o, i, a, n) {
        var s = new Date,
            l = function() {
                var r = Math.min(1, Math.max(0, (new Date - s) / 1e3 * (1 / o))),
                    c = t + (e - t) * i(r);
                a(c), r < 1 ? requestAnimationFrame(l) : void 0 != n && n()
            };
        l()
    }

    function n(t) {
        return t * t * t
    }

    function s(t) {
        return 1 - n(1 - t)
    }

    function l(t) {
        return t <= .5 ? n(2 * t) / 2 : s(2 * t - 1) / 2 + .5
    }

    function r(t) {
        if (d.getElementsByClassName("work-" + t).length > 0) {
            if (w = o(), d.style.top = Math.max(0, w - m.offsetTop) + "px", d.style.display = "block", isMobile || (window.location.hash = "#" + t), a(100, 0, .5, l, function(t) {
                    d.style.left = t + "%", p.style.left = t - 100 + "%"
                }, function() {
                    p.style.display = "none", d.style.top = "0px", o() >= m.offsetTop && i(m.offsetTop)
                }), a(0, 1, 1, l, function(t) {
                    g.style.opacity = t, g.style.left = 24 * t
                }), null != f) {
                f.style.display = "none";
                var e = f.getElementsByClassName("disqus")[0];
                void 0 != e && (e.innerHTML = "", e.setAttribute("id", ""))
            }
            f = d.getElementsByClassName("work-" + t)[0], f.style.display = "block";
            var n = f.getElementsByClassName("postcard")[0];
            n.style.backgroundImage = "url(" + n.getAttribute("data-bg") + ")";
            for (var s = f.getElementsByTagName("img"), r = 0; r < s.length; r++) void 0 != s[r].getAttribute("data-toload") && (s[r].src = s[r].getAttribute("data-toload"));
            var c = f.getElementsByClassName("disqus")[0];
            if (void 0 != c) {
                c.setAttribute("id", "disqus_thread");
                var u = "romulosan-portfolio",
                    b = c.getAttribute("data-disqus");
                if (!window.DISQUS) {
                    var v = document.createElement("script");
                    v.type = "text/javascript", v.async = !0, v.src = "//" + u + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(v)
                }
                var y = function() {
                    return void 0 == window.DISQUS ? void requestAnimationFrame(y) : void window.DISQUS.reset({
                        reload: !0,
                        config: function() {
                            this.page.identifier = b, this.page.url = window.location.href
                        }
                    })
                };
                y()
            }
        }
    }
    var c = document.documentElement,
        d = t("works"),
        m = t("content"),
        p = t("portfolio"),
        u = e("link"),
        g = t("back"),
        f = null,
        w = 0;
    g.addEventListener("click", function() {
        isMobile || (window.location.hash = "#portfolio"), p.style.display = "block", o() >= m.offsetTop && i(w), d.style.top = Math.max(0, o() - m.offsetTop) + "px", a(0, 100, .5, l, function(t) {
            d.style.left = t + "%", p.style.left = t - 100 + "%"
        }, function() {
            d.style.display = "none"
        })
    });
    for (var b = 0; b < u.length; b++) ! function() {
        var t = u[b],
            e = t.getAttribute("data-id");
        t.addEventListener("click", function() {
            r(e)
        })
    }();
    var v = window.location.hash;
    v.length > 2 && r(v.replace("#", ""));
    for (var y = window.location.pathname, h = document.getElementsByClassName("full-article"), b = 0; b < h.length; b++) {
        var k = h[b].getAttribute("data-oldurl");
        if (void 0 != k && y.toLowerCase().indexOf(k.toLowerCase()) >= 0) {
            window.history.pushState({}, window.pageTitle, baseurl), r(h[b].getAttribute("data-id"));
            break
        }
    }
};