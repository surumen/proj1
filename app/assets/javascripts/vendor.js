! function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Handlebars = t.Handlebars || e()
}(this, function() {
    var t = function() {
            "use strict";

            function t(t) {
                this.string = t
            }
            var e;
            return t.prototype.toString = function() {
                return "" + this.string
            }, e = t
        }(),
        e = function(t) {
            "use strict";

            function e(t) {
                return l[t]
            }

            function n(t) {
                for (var e = 1; e < arguments.length; e++)
                    for (var n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
                return t
            }

            function i(t) {
                return t instanceof a ? t.toString() : null == t ? "" : t ? (t = "" + t, c.test(t) ? t.replace(u, e) : t) : t + ""
            }

            function r(t) {
                return !t && 0 !== t || !(!p(t) || 0 !== t.length)
            }

            function s(t, e) {
                return (t ? t + "." : "") + e
            }
            var o = {},
                a = t,
                l = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                u = /[&<>"'`]/g,
                c = /[&<>"'`]/;
            o.extend = n;
            var h = Object.prototype.toString;
            o.toString = h;
            var f = function(t) {
                return "function" == typeof t
            };
            f(/x/) && (f = function(t) {
                return "function" == typeof t && "[object Function]" === h.call(t)
            });
            var f;
            o.isFunction = f;
            var p = Array.isArray || function(t) {
                return !(!t || "object" != typeof t) && "[object Array]" === h.call(t)
            };
            return o.isArray = p, o.escapeExpression = i, o.isEmpty = r, o.appendContextPath = s, o
        }(t),
        n = function() {
            "use strict";

            function t(t, e) {
                var i;
                e && e.firstLine && (i = e.firstLine, t += " - " + i + ":" + e.firstColumn);
                for (var r = Error.prototype.constructor.call(this, t), s = 0; s < n.length; s++) this[n[s]] = r[n[s]];
                i && (this.lineNumber = i, this.column = e.firstColumn)
            }
            var e, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return t.prototype = new Error, e = t
        }(),
        i = function(t, e) {
            "use strict";

            function n(t, e) {
                this.helpers = t || {}, this.partials = e || {}, i(this)
            }

            function i(t) {
                t.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length) throw new o("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                }), t.registerHelper("blockHelperMissing", function(e, n) {
                    var i = n.inverse,
                        r = n.fn;
                    if (e === !0) return r(this);
                    if (e === !1 || null == e) return i(this);
                    if (c(e)) return e.length > 0 ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n)) : i(this);
                    if (n.data && n.ids) {
                        var o = g(n.data);
                        o.contextPath = s.appendContextPath(n.data.contextPath, n.name), n = {
                            data: o
                        }
                    }
                    return r(e, n)
                }), t.registerHelper("each", function(t, e) {
                    if (!e) throw new o("Must pass iterator to #each");
                    var n, i, r = e.fn,
                        a = e.inverse,
                        l = 0,
                        u = "";
                    if (e.data && e.ids && (i = s.appendContextPath(e.data.contextPath, e.ids[0]) + "."), h(t) && (t = t.call(this)), e.data && (n = g(e.data)), t && "object" == typeof t)
                        if (c(t))
                            for (var f = t.length; f > l; l++) n && (n.index = l, n.first = 0 === l, n.last = l === t.length - 1, i && (n.contextPath = i + l)), u += r(t[l], {
                                data: n
                            });
                        else
                            for (var p in t) t.hasOwnProperty(p) && (n && (n.key = p, n.index = l, n.first = 0 === l, i && (n.contextPath = i + p)), u += r(t[p], {
                                data: n
                            }), l++);
                    return 0 === l && (u = a(this)), u
                }), t.registerHelper("if", function(t, e) {
                    return h(t) && (t = t.call(this)), !e.hash.includeZero && !t || s.isEmpty(t) ? e.inverse(this) : e.fn(this)
                }), t.registerHelper("unless", function(e, n) {
                    return t.helpers["if"].call(this, e, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                }), t.registerHelper("with", function(t, e) {
                    h(t) && (t = t.call(this));
                    var n = e.fn;
                    if (s.isEmpty(t)) return e.inverse(this);
                    if (e.data && e.ids) {
                        var i = g(e.data);
                        i.contextPath = s.appendContextPath(e.data.contextPath, e.ids[0]), e = {
                            data: i
                        }
                    }
                    return n(t, e)
                }), t.registerHelper("log", function(e, n) {
                    var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                    t.log(i, e)
                }), t.registerHelper("lookup", function(t, e) {
                    return t && t[e]
                })
            }
            var r = {},
                s = t,
                o = e,
                a = "2.0.0";
            r.VERSION = a;
            var l = 6;
            r.COMPILER_REVISION = l;
            var u = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1"
            };
            r.REVISION_CHANGES = u;
            var c = s.isArray,
                h = s.isFunction,
                f = s.toString,
                p = "[object Object]";
            r.HandlebarsEnvironment = n, n.prototype = {
                constructor: n,
                logger: d,
                log: m,
                registerHelper: function(t, e) {
                    if (f.call(t) === p) {
                        if (e) throw new o("Arg not supported with multiple helpers");
                        s.extend(this.helpers, t)
                    } else this.helpers[t] = e
                },
                unregisterHelper: function(t) {
                    delete this.helpers[t]
                },
                registerPartial: function(t, e) {
                    f.call(t) === p ? s.extend(this.partials, t) : this.partials[t] = e
                },
                unregisterPartial: function(t) {
                    delete this.partials[t]
                }
            };
            var d = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(t, e) {
                    if (d.level <= t) {
                        var n = d.methodMap[t];
                        "undefined" != typeof console && console[n] && console[n].call(console, e)
                    }
                }
            };
            r.logger = d;
            var m = d.log;
            r.log = m;
            var g = function(t) {
                var e = s.extend({}, t);
                return e._parent = t, e
            };
            return r.createFrame = g, r
        }(e, n),
        r = function(t, e, n) {
            "use strict";

            function i(t) {
                var e = t && t[0] || 1,
                    n = f;
                if (e !== n) {
                    if (n > e) {
                        var i = p[n],
                            r = p[e];
                        throw new h("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                    }
                    throw new h("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                }
            }

            function r(t, e) {
                if (!e) throw new h("No environment passed to template");
                if (!t || !t.main) throw new h("Unknown template object: " + typeof t);
                e.VM.checkRevision(t.compiler);
                var n = function(n, i, r, s, o, a, l, u, f) {
                        o && (s = c.extend({}, s, o));
                        var p = e.VM.invokePartial.call(this, n, r, s, a, l, u, f);
                        if (null == p && e.compile) {
                            var d = {
                                helpers: a,
                                partials: l,
                                data: u,
                                depths: f
                            };
                            l[r] = e.compile(n, {
                                data: void 0 !== u,
                                compat: t.compat
                            }, e), p = l[r](s, d)
                        }
                        if (null != p) {
                            if (i) {
                                for (var m = p.split("\n"), g = 0, _ = m.length; _ > g && (m[g] || g + 1 !== _); g++) m[g] = i + m[g];
                                p = m.join("\n")
                            }
                            return p
                        }
                        throw new h("The partial " + r + " could not be compiled when running in runtime-only mode")
                    },
                    i = {
                        lookup: function(t, e) {
                            for (var n = t.length, i = 0; n > i; i++)
                                if (t[i] && null != t[i][e]) return t[i][e]
                        },
                        lambda: function(t, e) {
                            return "function" == typeof t ? t.call(e) : t
                        },
                        escapeExpression: c.escapeExpression,
                        invokePartial: n,
                        fn: function(e) {
                            return t[e]
                        },
                        programs: [],
                        program: function(t, e, n) {
                            var i = this.programs[t],
                                r = this.fn(t);
                            return e || n ? i = s(this, t, r, e, n) : i || (i = this.programs[t] = s(this, t, r)), i
                        },
                        data: function(t, e) {
                            for (; t && e--;) t = t._parent;
                            return t
                        },
                        merge: function(t, e) {
                            var n = t || e;
                            return t && e && t !== e && (n = c.extend({}, e, t)), n
                        },
                        noop: e.VM.noop,
                        compilerInfo: t.compiler
                    },
                    r = function(e, n) {
                        n = n || {};
                        var s = n.data;
                        r._setup(n), !n.partial && t.useData && (s = l(e, s));
                        var o;
                        return t.useDepths && (o = n.depths ? [e].concat(n.depths) : [e]), t.main.call(i, e, i.helpers, i.partials, s, o)
                    };
                return r.isTop = !0, r._setup = function(n) {
                    n.partial ? (i.helpers = n.helpers, i.partials = n.partials) : (i.helpers = i.merge(n.helpers, e.helpers), t.usePartial && (i.partials = i.merge(n.partials, e.partials)))
                }, r._child = function(e, n, r) {
                    if (t.useDepths && !r) throw new h("must pass parent depths");
                    return s(i, e, t[e], n, r)
                }, r
            }

            function s(t, e, n, i, r) {
                var s = function(e, s) {
                    return s = s || {}, n.call(t, e, t.helpers, t.partials, s.data || i, r && [e].concat(r))
                };
                return s.program = e, s.depth = r ? r.length : 0, s
            }

            function o(t, e, n, i, r, s, o) {
                var a = {
                    partial: !0,
                    helpers: i,
                    partials: r,
                    data: s,
                    depths: o
                };
                if (void 0 === t) throw new h("The partial " + e + " could not be found");
                return t instanceof Function ? t(n, a) : void 0
            }

            function a() {
                return ""
            }

            function l(t, e) {
                return e && "root" in e || (e = e ? d(e) : {}, e.root = t), e
            }
            var u = {},
                c = t,
                h = e,
                f = n.COMPILER_REVISION,
                p = n.REVISION_CHANGES,
                d = n.createFrame;
            return u.checkRevision = i, u.template = r, u.program = s, u.invokePartial = o, u.noop = a, u
        }(e, n, i),
        s = function(t, e, n, i, r) {
            "use strict";
            var s, o = t,
                a = e,
                l = n,
                u = i,
                c = r,
                h = function() {
                    var t = new o.HandlebarsEnvironment;
                    return u.extend(t, o), t.SafeString = a, t.Exception = l, t.Utils = u, t.escapeExpression = u.escapeExpression, t.VM = c, t.template = function(e) {
                        return c.template(e, t)
                    }, t
                },
                f = h();
            return f.create = h, f["default"] = f, s = f
        }(i, t, n, e, r);
    return s
}), ! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function n(t, e) {
        e = e || et;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = dt.type(t);
        return "function" !== n && !dt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e, n) {
        return dt.isFunction(e) ? dt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? dt.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? dt.grep(t, function(t) {
            return ot.call(e, t) > -1 !== n
        }) : Pt.test(e) ? dt.filter(e, t, n) : (e = dt.filter(e, t), dt.grep(t, function(t) {
            return ot.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return dt.each(t.match(Rt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function u(t, e, n) {
        var i;
        try {
            t && dt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && dt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }

    function c() {
        et.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), dt.ready()
    }

    function h() {
        this.expando = dt.expando + h.uid++
    }

    function f(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : jt.test(t) ? JSON.parse(t) : t)
    }

    function p(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(It, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = f(n)
                } catch (r) {}
                Ft.set(t, e, n)
            } else n = void 0;
        return n
    }

    function d(t, e, n, i) {
        var r, s = 1,
            o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return dt.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
            c = (dt.cssNumber[e] || "px" !== u && +l) && qt.exec(dt.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do s = s || ".5", c /= s, dt.style(t, e, c + u); while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function m(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = $t[i];
        return r ? r : (e = n.body.appendChild(n.createElement(i)), r = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), $t[i] = r, r)
    }

    function g(t, e) {
        for (var n, i, r = [], s = 0, o = t.length; s < o; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (r[s] = Lt.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && Bt(i) && (r[s] = m(i))) : "none" !== n && (r[s] = "none", Lt.set(i, "display", n)));
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }

    function _(t, e) {
        var n;
        return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], n) : n
    }

    function v(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Lt.set(t[n], "globalEval", !e || Lt.get(e[n], "globalEval"))
    }

    function y(t, e, n, i, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
            if (s = t[p], s || 0 === s)
                if ("object" === dt.type(s)) dt.merge(f, s.nodeType ? [s] : s);
                else if (Gt.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (Yt.exec(s) || ["", ""])[1].toLowerCase(), l = Vt[a] || Vt._default, o.innerHTML = l[1] + dt.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            dt.merge(f, o.childNodes), o = h.firstChild, o.textContent = ""
        } else f.push(e.createTextNode(s));
        for (h.textContent = "", p = 0; s = f[p++];)
            if (i && dt.inArray(s, i) > -1) r && r.push(s);
            else if (u = dt.contains(s.ownerDocument, s), o = _(h.appendChild(s), "script"), u && v(o), n)
            for (c = 0; s = o[c++];) Ut.test(s.type || "") && n.push(s);
        return h
    }

    function x() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function T(t, e, n, i, r, s) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) T(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
        else if (!r) return t;
        return 1 === s && (o = r, r = function(t) {
            return dt().off(t), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = dt.guid++)), t.each(function() {
            dt.event.add(this, e, r, i, n)
        })
    }

    function P(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function S(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function C(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function k(t, e) {
        var n, i, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (Lt.hasData(t) && (s = Lt.access(t), o = Lt.set(e, s), u = s.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) dt.event.add(e, r, u[r][n])
            }
            Ft.hasData(t) && (a = Ft.access(t), l = dt.extend({}, a), Ft.set(e, l))
        }
    }

    function O(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Wt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function A(t, e, i, r) {
        e = rt.apply([], e);
        var s, o, a, l, u, c, h = 0,
            f = t.length,
            p = f - 1,
            d = e[0],
            m = dt.isFunction(d);
        if (m || f > 1 && "string" == typeof d && !ft.checkClone && ne.test(d)) return t.each(function(n) {
            var s = t.eq(n);
            m && (e[0] = d.call(this, n, s.html())), A(s, e, i, r)
        });
        if (f && (s = y(e, t[0].ownerDocument, !1, t, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
            for (a = dt.map(_(s, "script"), S), l = a.length; h < f; h++) u = s, h !== p && (u = dt.clone(u, !0, !0), l && dt.merge(a, _(u, "script"))), i.call(t[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, dt.map(a, C), h = 0; h < l; h++) u = a[h], Ut.test(u.type || "") && !Lt.access(u, "globalEval") && dt.contains(c, u) && (u.src ? dt._evalUrl && dt._evalUrl(u.src) : n(u.textContent.replace(re, ""), c))
        }
        return t
    }

    function R(t, e, n) {
        for (var i, r = e ? dt.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || dt.cleanData(_(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && v(_(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function E(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || ae(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || dt.contains(t.ownerDocument, t) || (o = dt.style(t, e)), !ft.pixelMarginRight() && oe.test(o) && se.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function N(t) {
        if (t in fe) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = he.length; n--;)
            if (t = he[n] + e, t in fe) return t
    }

    function M(t, e, n) {
        var i = qt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function L(t, e, n, i, r) {
        var s, o = 0;
        for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (o += dt.css(t, n + Ht[s], !0, r)), i ? ("content" === n && (o -= dt.css(t, "padding" + Ht[s], !0, r)), "margin" !== n && (o -= dt.css(t, "border" + Ht[s] + "Width", !0, r))) : (o += dt.css(t, "padding" + Ht[s], !0, r), "padding" !== n && (o += dt.css(t, "border" + Ht[s] + "Width", !0, r)));
        return o
    }

    function F(t, e, n) {
        var i, r = !0,
            s = ae(t),
            o = "border-box" === dt.css(t, "boxSizing", !1, s);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
            if (i = E(t, e, s), (i < 0 || null == i) && (i = t.style[e]), oe.test(i)) return i;
            r = o && (ft.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + L(t, e, n || (o ? "border" : "content"), r, s) + "px"
    }

    function j(t, e, n, i, r) {
        return new j.prototype.init(t, e, n, i, r)
    }

    function I() {
        de && (t.requestAnimationFrame(I), dt.fx.tick())
    }

    function z() {
        return t.setTimeout(function() {
            pe = void 0
        }), pe = dt.now()
    }

    function q(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Ht[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function H(t, e, n) {
        for (var i, r = ($.tweeners[e] || []).concat($.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, e, t)) return i
    }

    function B(t, e, n) {
        var i, r, s, o, a, l, u, c, h = "width" in e || "height" in e,
            f = this,
            p = {},
            d = t.style,
            m = t.nodeType && Bt(t),
            _ = Lt.get(t, "fxshow");
        n.queue || (o = dt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
            o.unqueued || a()
        }), o.unqueued++, f.always(function() {
            f.always(function() {
                o.unqueued--, dt.queue(t, "fx").length || o.empty.fire()
            })
        }));
        for (i in e)
            if (r = e[i], me.test(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !_ || void 0 === _[i]) continue;
                    m = !0
                }
                p[i] = _ && _[i] || dt.style(t, i)
            }
        if (l = !dt.isEmptyObject(e), l || !dt.isEmptyObject(p)) {
            h && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = _ && _.display, null == u && (u = Lt.get(t, "display")), c = dt.css(t, "display"), "none" === c && (u ? c = u : (g([t], !0), u = t.style.display || u, c = dt.css(t, "display"), g([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === dt.css(t, "float") && (l || (f.done(function() {
                d.display = u
            }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), l = !1;
            for (i in p) l || (_ ? "hidden" in _ && (m = _.hidden) : _ = Lt.access(t, "fxshow", {
                display: u
            }), s && (_.hidden = !m), m && g([t], !0), f.done(function() {
                m || g([t]), Lt.remove(t, "fxshow");
                for (i in p) dt.style(t, i, p[i])
            })), l = H(m ? _[i] : 0, i, f), i in _ || (_[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function X(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = dt.camelCase(n), r = e[i], s = t[n], dt.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = dt.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = r)
            } else e[i] = r
    }

    function $(t, e, n) {
        var i, r, s = 0,
            o = $.prefilters.length,
            a = dt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = pe || z(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, n]), s < 1 && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: dt.extend({}, e),
                opts: dt.extend(!0, {
                    specialEasing: {},
                    easing: dt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pe || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = dt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (X(c, u.opts.specialEasing); s < o; s++)
            if (i = $.prefilters[s].call(u, t, c, u.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(i.stop, i)), i;
        return dt.map(c, H, u), dt.isFunction(u.opts.start) && u.opts.start.call(t, u), dt.fx.timer(dt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(t) {
        var e = t.match(Rt) || [];
        return e.join(" ")
    }

    function Y(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function U(t, e, n, i) {
        var r;
        if (dt.isArray(e)) dt.each(e, function(e, r) {
            n || Ce.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== dt.type(e)) i(t, e);
        else
            for (r in e) U(t + "[" + r + "]", e[r], n, i)
    }

    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                s = e.toLowerCase().match(Rt) || [];
            if (dt.isFunction(n))
                for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function G(t, e, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, dt.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            o = t === Ie;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function Q(t, e) {
        var n, i, r = dt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && dt.extend(!0, t, i), t
    }

    function Z(t, e, n) {
        for (var i, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) s = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        if (s) return s !== l[0] && l.unshift(s), n[s]
    }

    function J(t, e, n, i) {
        var r, s, o, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function K(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var tt = [],
        et = t.document,
        nt = Object.getPrototypeOf,
        it = tt.slice,
        rt = tt.concat,
        st = tt.push,
        ot = tt.indexOf,
        at = {},
        lt = at.toString,
        ut = at.hasOwnProperty,
        ct = ut.toString,
        ht = ct.call(Object),
        ft = {},
        pt = "3.1.1",
        dt = function(t, e) {
            return new dt.fn.init(t, e)
        },
        mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        _t = /-([a-z])/g,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    dt.fn = dt.prototype = {
        jquery: pt,
        constructor: dt,
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return dt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(dt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: tt.sort,
        splice: tt.splice
    }, dt.extend = dt.fn.extend = function() {
        var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || dt.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], i = t[e], o !== i && (u && i && (dt.isPlainObject(i) || (r = dt.isArray(i))) ? (r ? (r = !1, s = n && dt.isArray(n) ? n : []) : s = n && dt.isPlainObject(n) ? n : {}, o[e] = dt.extend(u, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }, dt.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === dt.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = dt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== lt.call(t) || (e = nt(t)) && (n = ut.call(e, "constructor") && e.constructor, "function" != typeof n || ct.call(n) !== ht))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            n(t)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(_t, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(mt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : ot.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; s < o; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, n) {
            var r, s, o = 0,
                a = [];
            if (i(t))
                for (r = t.length; o < r; o++) s = e(t[o], o, n), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && a.push(s);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t)) return i = it.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(it.call(arguments)))
            }, r.guid = t.guid = t.guid || dt.guid++, r
        },
        now: Date.now,
        support: ft
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = tt[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
        function e(t, e, n, i) {
            var r, s, o, a, l, u, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((e ? e.ownerDocument || e : H) !== N && D(e), e = e || N, L)) {
                if (11 !== d && (l = _t.exec(t)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(o = e.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (f && (o = f.getElementById(r)) && z(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && !Y[t + " "] && (!F || !F.test(t))) {
                    if (1 !== d) f = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, wt) : e.setAttribute("id", a = q), u = C(t), s = u.length; s--;) u[s] = "#" + a + " " + p(u[s]);
                        c = u.join(","), f = vt.test(t) && h(e.parentNode) || e
                    }
                    if (c) try {
                        return J.apply(n, f.querySelectorAll(c)), n
                    } catch (m) {} finally {
                        a === q && e.removeAttribute("id")
                    }
                }
            }
            return O(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = N.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
        }

        function o(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Pt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function f() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function d(t, e, n) {
            var i = e.dir,
                r = e.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = X++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r);
                return !1
            } : function(e, n, l) {
                var u, c, h, f = [B, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (h = e[q] || (e[q] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((u = c[s]) && u[0] === B && u[1] === a) return f[2] = u[2];
                                if (c[s] = f, f[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function m(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
            return i
        }

        function _(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function v(t, e, n, r, s, o) {
            return r && !r[q] && (r = v(r)), s && !s[q] && (s = v(s, o)), i(function(i, o, a, l) {
                var u, c, h, f = [],
                    p = [],
                    d = o.length,
                    m = i || g(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !i && e ? m : _(m, f, t, a, l),
                    y = n ? s || (i ? t : d || r) ? [] : o : v;
                if (n && n(v, y, a, l), r)
                    for (u = _(y, p), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(v[p[c]] = h));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                            s(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(h = y[c]) && (u = s ? tt(i, h) : f[c]) > -1 && (i[u] = !(o[u] = h))
                    }
                } else y = _(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, s = T.relative[t[0].type], o = s || T.relative[" "], a = s ? 1 : 0, l = d(function(t) {
                    return t === e
                }, o, !0), u = d(function(t) {
                    return tt(e, t) > -1
                }, o, !0), c = [function(t, n, i) {
                    var r = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; a < r; a++)
                if (n = T.relative[t[a].type]) c = [d(m(c), n)];
                else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (i = ++a; i < r && !T.relative[t[i].type]; i++);
                        return v(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < r && y(t = t.slice(i)), i < r && p(t))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function x(t, n) {
            var r = n.length > 0,
                s = t.length > 0,
                o = function(i, o, a, l, u) {
                    var c, h, f, p = 0,
                        d = "0",
                        m = i && [],
                        g = [],
                        v = A,
                        y = i || s && T.find.TAG("*", u),
                        x = B += null == v ? 1 : Math.random() || .1,
                        b = y.length;
                    for (u && (A = o === N || o || u); d !== b && null != (c = y[d]); d++) {
                        if (s && c) {
                            for (h = 0, o || c.ownerDocument === N || (D(c), a = !L); f = t[h++];)
                                if (f(c, o || N, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (B = x)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += d, r && d !== p) {
                        for (h = 0; f = n[h++];) f(m, g, o, a);
                        if (i) {
                            if (p > 0)
                                for (; d--;) m[d] || g[d] || (g[d] = Q.call(l));
                            g = _(g)
                        }
                        J.apply(l, g), u && !i && g.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (B = x, A = v), m
                };
            return r ? i(o) : o
        }
        var b, w, T, P, S, C, k, O, A, R, E, D, N, M, L, F, j, I, z, q = "sizzle" + 1 * new Date,
            H = t.document,
            B = 0,
            X = 0,
            $ = n(),
            W = n(),
            Y = n(),
            U = function(t, e) {
                return t === e && (E = !0), 0
            },
            V = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            Z = G.push,
            J = G.push,
            K = G.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(st),
            ft = new RegExp("^" + it + "$"),
            pt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Tt = function() {
                D()
            },
            Pt = d(function(t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(G = K.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (St) {
            J = {
                apply: G.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : H;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, M = N.documentElement, L = !S(N), H !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(N.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = gt.test(N.getElementsByClassName), w.getById = r(function(t) {
                return M.appendChild(t).id = q, !N.getElementsByName || !N.getElementsByName(q).length
            }), w.getById ? (T.filter.ID = function(t) {
                var e = t.replace(yt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function(t) {
                var e = t.replace(yt, xt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var n, i, r, s = e.getElementById(t);
                    if (s) {
                        if (n = s.getAttributeNode("id"), n && n.value === t) return [s];
                        for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                            if (n = s.getAttributeNode("id"), n && n.value === t) return [s]
                    }
                    return []
                }
            }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && L) return e.getElementsByClassName(t)
            }, j = [], F = [], (w.qsa = gt.test(N.querySelectorAll)) && (r(function(t) {
                M.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || F.push(".#.+[+~]")
            }), r(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = N.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), M.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = gt.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = I.call(t, "*"), I.call(t, "[s!='']:x"), j.push("!=", st)
            }), F = F.length && new RegExp(F.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(M.compareDocumentPosition), z = e || gt.test(M.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return E = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === N || t.ownerDocument === H && z(H, t) ? -1 : e === N || e.ownerDocument === H && z(H, e) ? 1 : R ? tt(R, t) - tt(R, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return E = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !s) return t === N ? -1 : e === N ? 1 : r ? -1 : s ? 1 : R ? tt(R, t) - tt(R, e) : 0;
                if (r === s) return o(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? o(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
            }, N) : N
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== N && D(t), n = n.replace(ct, "='$1']"), w.matchesSelector && L && !Y[n + " "] && (!j || !j.test(n)) && (!F || !F.test(n))) try {
                var i = I.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, N, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== N && D(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== N && D(t);
            var n = T.attrHandle[e.toLowerCase()],
                i = n && V.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i : w.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function(t) {
            return (t + "").replace(bt, wt)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (E = !w.detectDuplicates, R = !w.sortStable && t.slice(0), t.sort(U), E) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return R = null, t
        }, P = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += P(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += P(e);
            return n
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && $(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, h, f, p, d, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            _ = a && e.nodeName.toLowerCase(),
                            v = !l && !a,
                            y = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (f = e; f = f[m];)
                                        if (a ? f.nodeName.toLowerCase() === _ : 1 === f.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? g.firstChild : g.lastChild], o && v) {
                                for (f = g, h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], p = u[0] === B && u[1], y = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                                    if (1 === f.nodeType && ++y && f === e) {
                                        c[t] = [B, p, y];
                                        break
                                    }
                            } else if (v && (f = e, h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], p = u[0] === B && u[1], y = p), y === !1)
                                for (;
                                    (f = ++p && f && f[m] || (y = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== _ : 1 !== f.nodeType) || !++y || (v && (h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[t] = [B, y]), f !== e)););
                            return y -= r, y === i || y % i === 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[q] ? s(n) : s.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = s(t, n), o = r.length; o--;) i = tt(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(at, "$1"));
                    return r[q] ? i(function(t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, i, s) {
                        return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(yt, xt),
                        function(e) {
                            return (e.textContent || e.innerText || P(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, xt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return dt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = l(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, C = e.tokenize = function(t, n) {
            var i, r, s, o, a, l, u, c = W[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (o in T.filter) !(r = pt[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                s = Y[t + " "];
            if (!s) {
                for (e || (e = C(t)), n = e.length; n--;) s = y(e[n]), s[q] ? i.push(s) : r.push(s);
                s = Y(t, x(r, i)), s.selector = t
            }
            return s
        }, O = e.select = function(t, e, n, i) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                c = !i && C(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && 9 === e.nodeType && L && T.relative[s[1].type]) {
                    if (e = (T.find.ID(o.matches[0].replace(yt, xt), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = pt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !T.relative[a = o.type]);)
                    if ((l = T.find[a]) && (i = l(o.matches[0].replace(yt, xt), vt.test(s[0].type) && h(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && p(s), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || k(t, c))(i, e, !L, n, !e || vt.test(t) && h(e.parentNode) || e), n
        }, w.sortStable = q.split("").sort(U).join("") === q, w.detectDuplicates = !!E, D(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(N.createElement("fieldset"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, n) {
            var i;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    dt.find = yt, dt.expr = yt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = yt.uniqueSort, dt.text = yt.getText, dt.isXMLDoc = yt.isXML, dt.contains = yt.contains, dt.escapeSelector = yt.escape;
    var xt = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && dt(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        bt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = dt.expr.match.needsContext,
        Tt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Pt = /^.[^:#\[\.,]*$/;
    dt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (dt.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) dt.find(t, r[e], n);
            return i > 1 ? dt.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && wt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var St, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        kt = dt.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || St, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Tt.test(i[1]) && dt.isPlainObject(e))
                        for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = et.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : dt.makeArray(t, this)
        };
    kt.prototype = dt.fn, St = dt(et);
    var Ot = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    dt.fn.extend({
        has: function(t) {
            var e = dt(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (dt.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && dt(t);
            if (!wt.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(s.length > 1 ? dt.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ot.call(dt(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return xt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return xt(t, "parentNode", n)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return xt(t, "nextSibling")
        },
        prevAll: function(t) {
            return xt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return xt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return xt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return bt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || dt.merge([], t.childNodes)
        }
    }, function(t, e) {
        dt.fn[t] = function(n, i) {
            var r = dt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (At[t] || dt.uniqueSort(r), Ot.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var Rt = /[^\x20\t\r\n\f]+/g;
    dt.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : dt.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            u = function() {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        dt.each(e, function(e, n) {
                            dt.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return dt.each(arguments, function(t, e) {
                        for (var n;
                            (n = dt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(t) {
                    return t ? dt.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], n || e || (s = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, dt.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2],
                    ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return dt.Deferred(function(e) {
                            dt.each(n, function(n, i) {
                                var r = dt.isFunction(t[i[4]]) && t[i[4]];
                                s[i[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, r) {
                        function s(e, n, i, r) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    h = function() {
                                        var t, h;
                                        if (!(e < o)) {
                                            if (t = i.apply(u, c), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then, dt.isFunction(h) ? r ? h.call(t, s(o, n, a, r), s(o, n, l, r)) : (o++, h.call(t, s(o, n, a, r), s(o, n, l, r), s(o, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [t]), (r || n.resolveWith)(u, c))
                                        }
                                    },
                                    f = r ? h : function() {
                                        try {
                                            h()
                                        } catch (t) {
                                            dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, f.stackTrace), e + 1 >= o && (i !== l && (u = void 0, c = [t]), n.rejectWith(u, c))
                                        }
                                    };
                                e ? f() : (dt.Deferred.getStackHook && (f.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(f))
                            }
                        }
                        var o = 0;
                        return dt.Deferred(function(t) {
                            n[0][3].add(s(0, t, dt.isFunction(r) ? r : a, t.notifyWith)), n[1][3].add(s(0, t, dt.isFunction(e) ? e : a)), n[2][3].add(s(0, t, dt.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? dt.extend(t, r) : r
                    }
                },
                s = {};
            return dt.each(n, function(t, e) {
                var o = e[2],
                    a = e[5];
                r[e[1]] = o.add, a && o.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock), o.add(e[3].fire), s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = o.fireWith
            }), r.promise(s), e && e.call(s, s), s
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                r = it.call(arguments),
                s = dt.Deferred(),
                o = function(t) {
                    return function(n) {
                        i[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : n, --e || s.resolveWith(i, r)
                    }
                };
            if (e <= 1 && (u(t, s.done(o(n)).resolve, s.reject), "pending" === s.state() || dt.isFunction(r[n] && r[n].then))) return s.then();
            for (; n--;) u(r[n], o(n), s.reject);
            return s.promise()
        }
    });
    var Et = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    dt.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && Et.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, dt.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var Dt = dt.Deferred();
    dt.fn.ready = function(t) {
        return Dt.then(t)["catch"](function(t) {
            dt.readyException(t)
        }), this
    }, dt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? dt.readyWait++ : dt.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || Dt.resolveWith(et, [dt]))
        }
    }), dt.ready.then = Dt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(dt.ready) : (et.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var Nt = function(t, e, n, i, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === dt.type(n)) {
                r = !0;
                for (a in n) Nt(t, e, a, n[a], !0, s, o)
            } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(dt(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
        },
        Mt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Mt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[dt.camelCase(e)] = n;
            else
                for (i in e) r[dt.camelCase(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in i ? [e] : e.match(Rt) || []), n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || dt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !dt.isEmptyObject(e)
        }
    };
    var Lt = new h,
        Ft = new h,
        jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        It = /[A-Z]/g;
    dt.extend({
        hasData: function(t) {
            return Ft.hasData(t) || Lt.hasData(t)
        },
        data: function(t, e, n) {
            return Ft.access(t, e, n)
        },
        removeData: function(t, e) {
            Ft.remove(t, e)
        },
        _data: function(t, e, n) {
            return Lt.access(t, e, n)
        },
        _removeData: function(t, e) {
            Lt.remove(t, e)
        }
    }), dt.fn.extend({
        data: function(t, e) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = Ft.get(s), 1 === s.nodeType && !Lt.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), p(s, i, r[i])));
                    Lt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                Ft.set(this, t)
            }) : Nt(this, function(e) {
                var n;
                if (s && void 0 === e) {
                    if (n = Ft.get(s, t), void 0 !== n) return n;
                    if (n = p(s, t), void 0 !== n) return n
                } else this.each(function() {
                    Ft.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ft.remove(this, t)
            })
        }
    }), dt.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Lt.get(t, e), n && (!i || dt.isArray(n) ? i = Lt.access(t, e, dt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = dt.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = dt._queueHooks(t, e),
                o = function() {
                    dt.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Lt.get(t, n) || Lt.access(t, n, {
                empty: dt.Callbacks("once memory").add(function() {
                    Lt.remove(t, [e + "queue", n])
                })
            })
        }
    }), dt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                dt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = dt.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Lt.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qt = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
        Ht = ["Top", "Right", "Bottom", "Left"],
        Bt = function(t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
        },
        Xt = function(t, e, n, i) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = n.apply(t, i || []);
            for (s in e) t.style[s] = o[s];
            return r
        },
        $t = {};
    dt.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Bt(this) ? dt(this).show() : dt(this).hide()
            })
        }
    });
    var Wt = /^(?:checkbox|radio)$/i,
        Yt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td;
    var Gt = /<|&#?\w+;/;
    ! function() {
        var t = et.createDocumentFragment(),
            e = t.appendChild(et.createElement("div")),
            n = et.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ft.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ft.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Qt = et.documentElement,
        Zt = /^key/,
        Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, u, c, h, f, p, d, m, g = Lt.get(t);
            if (g)
                for (n.handler && (s = n, n = s.handler, r = s.selector), r && dt.find.matchesSelector(Qt, r), n.guid || (n.guid = dt.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(Rt) || [""], u = e.length; u--;) a = Kt.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (h = dt.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = dt.event.special[p] || {}, c = dt.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && dt.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, s), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, h.setup && h.setup.call(t, i, d, o) !== !1 || t.addEventListener && t.addEventListener(p, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), dt.event.global[p] = !0)
        },
        remove: function(t, e, n, i, r) {
            var s, o, a, l, u, c, h, f, p, d, m, g = Lt.hasData(t) && Lt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(Rt) || [""], u = e.length; u--;)
                    if (a = Kt.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (h = dt.event.special[p] || {}, p = (i ? h.delegateType : h.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) c = f[s], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !f.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || dt.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) dt.event.remove(t, p + e[u], n, i, !0);
                dt.isEmptyObject(l) && Lt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, s, o, a = dt.event.fix(t),
                l = new Array(arguments.length),
                u = (Lt.get(this, "events") || {})[a.type] || [],
                c = dt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                for (o = dt.event.handlers.call(this, a, u), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((dt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, s, o, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
                        for (s = [], o = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? dt(r, this).index(u) > -1 : dt.find(r, this, null, [u]).length), o[r] && s.push(i);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    }
            return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(dt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: dt.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[dt.expando] ? t : new dt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && dt.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return dt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, dt.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, dt.Event = function(t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? x : b, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = x, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = x, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = x, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Jt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, dt.event.addProp), dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        dt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return r && (r === i || dt.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.fn.extend({
        on: function(t, e, n, i) {
            return T(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return T(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                dt.event.remove(this, t, n, e)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ee = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    dt.extend({
        htmlPrefilter: function(t) {
            return t.replace(te, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, s, o, a = t.cloneNode(!0),
                l = dt.contains(t.ownerDocument, t);
            if (!(ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                for (o = _(a), s = _(t), i = 0, r = s.length; i < r; i++) O(s[i], o[i]);
            if (e)
                if (n)
                    for (s = s || _(t), o = o || _(a), i = 0, r = s.length; i < r; i++) k(s[i], o[i]);
                else k(t, a);
            return o = _(a, "script"), o.length > 0 && v(o, !l && _(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, r = dt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (Mt(n)) {
                    if (e = n[Lt.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                        n[Lt.expando] = void 0
                    }
                    n[Ft.expando] && (n[Ft.expando] = void 0)
                }
        }
    }), dt.fn.extend({
        detach: function(t) {
            return R(this, t, !0)
        },
        remove: function(t) {
            return R(this, t)
        },
        text: function(t) {
            return Nt(this, function(t) {
                return void 0 === t ? dt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = P(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = P(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(_(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return dt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ee.test(t) && !Vt[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(_(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return A(this, arguments, function(e) {
                var n = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(_(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        dt.fn[t] = function(t) {
            for (var n, i = [], r = dt(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), dt(r[o])[e](n), st.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var se = /^margin/,
        oe = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
        ae = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
    ! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(o);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Qt.removeChild(o), a = null
            }
        }
        var n, i, r, s, o = et.createElement("div"),
            a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ft.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), dt.extend(ft, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return e(), i
            },
            pixelMarginRight: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), s
            }
        }))
    }();
    var le = /^(none|table(?!-c[ea]).+)/,
        ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ce = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        he = ["Webkit", "Moz", "ms"],
        fe = et.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = E(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = dt.camelCase(e),
                    l = t.style;
                return e = dt.cssProps[a] || (dt.cssProps[a] = N(a) || a), o = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = qt.exec(n)) && r[1] && (n = d(t, e, r), s = "number"), void(null != n && n === n && ("number" === s && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), ft.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, s, o, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = N(a) || a), o = dt.cssHooks[e] || dt.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = E(t, e, i)), "normal" === r && e in ce && (r = ce[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
        }
    }), dt.each(["height", "width"], function(t, e) {
        dt.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !le.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, e, i) : Xt(t, ue, function() {
                    return F(t, e, i)
                })
            },
            set: function(t, n, i) {
                var r, s = i && ae(t),
                    o = i && L(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, s), s);
                return o && (r = qt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), M(t, n, o)
            }
        }
    }), dt.cssHooks.marginLeft = D(ft.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        dt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Ht[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, se.test(t) || (dt.cssHooks[t + e].set = M)
    }), dt.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, n) {
                var i, r, s = {},
                    o = 0;
                if (dt.isArray(e)) {
                    for (i = ae(t), r = e.length; o < r; o++) s[e[o]] = dt.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), dt.Tween = j, j.prototype = {
        constructor: j,
        init: function(t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (dt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, dt.fx = j.prototype.init, dt.fx.step = {};
    var pe, de, me = /^(?:toggle|show|hide)$/,
        ge = /queueHooks$/;
    dt.Animation = dt.extend($, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return d(n.elem, t, qt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Rt);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(e)
            },
            prefilters: [B],
            prefilter: function(t, e) {
                e ? $.prefilters.unshift(t) : $.prefilters.push(t)
            }
        }), dt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return dt.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in dt.fx.speeds ? i.duration = dt.fx.speeds[i.duration] : i.duration = dt.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
            }, i
        }, dt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Bt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = dt.isEmptyObject(t),
                    s = dt.speed(e, n, i),
                    o = function() {
                        var e = $(this, dt.extend({}, t), s);
                        (r || Lt.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = dt.timers,
                        o = Lt.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && ge.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                    !e && n || dt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = Lt.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = dt.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), dt.each(["toggle", "show", "hide"], function(t, e) {
            var n = dt.fn[e];
            dt.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, r)
            }
        }), dt.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            dt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), dt.timers = [], dt.fx.tick = function() {
            var t, e = 0,
                n = dt.timers;
            for (pe = dt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || dt.fx.stop(), pe = void 0
        }, dt.fx.timer = function(t) {
            dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
        }, dt.fx.interval = 13, dt.fx.start = function() {
            de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(I) : t.setInterval(dt.fx.tick, dt.fx.interval))
        }, dt.fx.stop = function() {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null
        }, dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, dt.fn.delay = function(e, n) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = et.createElement("input"),
                e = et.createElement("select"),
                n = e.appendChild(et.createElement("option"));
            t.type = "checkbox", ft.checkOn = "" !== t.value, ft.optSelected = n.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", ft.radioValue = "t" === t.value
        }();
    var _e, ve = dt.expr.attrHandle;
    dt.fn.extend({
        attr: function(t, e) {
            return Nt(this, dt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === s && dt.isXMLDoc(t) || (r = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? _e : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ft.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                r = e && e.match(Rt);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), _e = {
        set: function(t, e, n) {
            return e === !1 ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ve[e] || dt.find.attr;
        ve[e] = function(t, e, i) {
            var r, s, o = e.toLowerCase();
            return i || (s = ve[o], ve[o] = r, r = null != n(t, e, i) ? o : null, ve[o] = s), r
        }
    });
    var ye = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function(t, e) {
            return Nt(this, dt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[dt.propFix[t] || t]
            })
        }
    }), dt.extend({
        prop: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ft.optSelected || (dt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        dt.propFix[this.toLowerCase()] = this
    }), dt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).addClass(t.call(this, e, Y(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Rt) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + W(r) + " ") {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = W(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).removeClass(t.call(this, e, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Rt) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + W(r) + " ") {
                        for (o = 0; s = e[o++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        a = W(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(n) {
                dt(this).toggleClass(t.call(this, n, Y(this), e), e)
            }) : this.each(function() {
                var e, i, r, s;
                if ("string" === n)
                    for (i = 0, r = dt(this), s = t.match(Rt) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = Y(this), e && Lt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Lt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + W(Y(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g;
    dt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = dt.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(be, "") : null == n ? "" : n)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : W(dt.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = dt(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, s = dt.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = dt.inArray(dt.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function() {
        dt.valHooks[this] = {
            set: function(t, e) {
                if (dt.isArray(e)) return t.checked = dt.inArray(dt(t).val(), e) > -1
            }
        }, ft.checkOn || (dt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var we = /^(?:focusinfocus|focusoutblur)$/;
    dt.extend(dt.event, {
        trigger: function(e, n, i, r) {
            var s, o, a, l, u, c, h, f = [i || et],
                p = ut.call(e, "type") ? e.type : e,
                d = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[dt.expando] ? e : new dt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), h = dt.event.special[p] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !dt.isWindow(i)) {
                    for (l = h.delegateType || p, we.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (i.ownerDocument || et) && f.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || p, c = (Lt.get(o, "events") || {})[e.type] && Lt.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && Mt(o) && (e.result = c.apply(o, n), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || h._default && h._default.apply(f.pop(), n) !== !1 || !Mt(i) || u && dt.isFunction(i[p]) && !dt.isWindow(i) && (a = i[u], a && (i[u] = null), dt.event.triggered = p, i[p](), dt.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(i, null, e)
        }
    }), dt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                dt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return dt.event.trigger(t, e, n, !0)
        }
    }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        dt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ft.focusin = "onfocusin" in t, ft.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Lt.access(i, e);
                r || i.addEventListener(t, n, !0), Lt.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Lt.access(i, e) - 1;
                r ? Lt.access(i, e, r) : (i.removeEventListener(t, n, !0), Lt.remove(i, e))
            }
        }
    });
    var Te = t.location,
        Pe = dt.now(),
        Se = /\?/;
    dt.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
    };
    var Ce = /\[\]$/,
        ke = /\r?\n/g,
        Oe = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    dt.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                var n = dt.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) U(n, t[n], e, r);
        return i.join("&")
    }, dt.fn.extend({
        serialize: function() {
            return dt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && Ae.test(this.nodeName) && !Oe.test(t) && (this.checked || !Wt.test(t))
            }).map(function(t, e) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    });
    var Re = /%20/g,
        Ee = /#.*$/,
        De = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Me = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Le = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        je = {},
        Ie = {},
        ze = "*/".concat("*"),
        qe = et.createElement("a");
    qe.href = Te.href, dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: Me.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Q(Q(t, dt.ajaxSettings), e) : Q(dt.ajaxSettings, t)
        },
        ajaxPrefilter: V(je),
        ajaxTransport: V(Ie),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var u, f, p, x, b, w = n;
                c || (c = !0, l && t.clearTimeout(l), r = void 0, o = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (x = Z(d, T, i)), x = J(d, x, T, u), u ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (dt.lastModified[s] = b), b = T.getResponseHeader("etag"), b && (dt.etag[s] = b)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state, f = x.data, p = x.error, u = !p)) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || w) + "", u ? _.resolveWith(m, [f, w, T]) : _.rejectWith(m, [T, w, p]), T.statusCode(y), y = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? f : p]), v.fireWith(m, [T, w]), h && (g.trigger("ajaxComplete", [T, d]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, s, o, a, l, u, c, h, f, p, d = dt.ajaxSetup({}, n),
                m = d.context || d,
                g = d.context && (m.nodeType || m.jquery) ? dt(m) : dt.event,
                _ = dt.Deferred(),
                v = dt.Callbacks("once memory"),
                y = d.statusCode || {},
                x = {},
                b = {},
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Ne.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) T.always(t[T.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (_.promise(T), d.url = ((e || d.url || Te.href) + "").replace(Fe, Te.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(Rt) || [""], null == d.crossDomain) {
                u = et.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = qe.protocol + "//" + qe.host != u.protocol + "//" + u.host
                } catch (P) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = dt.param(d.data, d.traditional)), G(je, d, n, T), c) return T;
            h = dt.event && d.global, h && 0 === dt.active++ && dt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Le.test(d.type), s = d.url.replace(Ee, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Re, "+")) : (p = d.url.slice(s.length), d.data && (s += (Se.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (s = s.replace(De, "$1"), p = (Se.test(s) ? "&" : "?") + "_=" + Pe++ +p), d.url = s + p), d.ifModified && (dt.lastModified[s] && T.setRequestHeader("If-Modified-Since", dt.lastModified[s]), dt.etag[s] && T.setRequestHeader("If-None-Match", dt.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(m, T, d) === !1 || c)) return T.abort();
            if (w = "abort", v.add(d.complete), T.done(d.success), T.fail(d.error), r = G(Ie, d, n, T)) {
                if (T.readyState = 1, h && g.trigger("ajaxSend", [T, d]), c) return T;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    c = !1, r.send(x, i)
                } catch (P) {
                    if (c) throw P;
                    i(-1, P)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function(t, e) {
        dt[e] = function(t, n, i, r) {
            return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function(t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, dt.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return dt.isFunction(t) ? this.each(function(e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = dt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = dt.isFunction(t);
            return this.each(function(n) {
                dt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                dt(this).replaceWith(this.childNodes)
            }), this
        }
    }), dt.expr.pseudos.hidden = function(t) {
        return !dt.expr.pseudos.visible(t)
    }, dt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, dt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var He = {
            0: 200,
            1223: 204
        },
        Be = dt.ajaxSettings.xhr();
    ft.cors = !!Be && "withCredentials" in Be, ft.ajax = Be = !!Be, dt.ajaxTransport(function(e) {
        var n, i;
        if (ft.cors || Be && !e.crossDomain) return {
            send: function(r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(He[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), dt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), dt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = dt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Xe = [],
        $e = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Xe.pop() || dt.expando + "_" + Pe++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($e, "$1" + r) : e.jsonp !== !1 && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || dt.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === s ? dt(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Xe.push(r)), o && dt.isFunction(s) && s(o[0]), o = s = void 0
        }), "script"
    }), ft.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), dt.parseHTML = function(t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, r, s;
        return e || (ft.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), r = Tt.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = y([t], e, s), s && s.length && dt(s).remove(), dt.merge([], r.childNodes))
    }, dt.fn.load = function(t, e, n) {
        var i, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (i = W(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && dt.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            o.each(function() {
                n.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        dt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), dt.expr.pseudos.animated = function(t) {
        return dt.grep(dt.timers, function(e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function(t, e, n) {
            var i, r, s, o, a, l, u, c = dt.css(t, "position"),
                h = dt(t),
                f = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = dt.css(t, "top"), l = dt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
        }
    }, dt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, n, i, r, s = this[0];
            return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (r = s.ownerDocument, n = K(r), e = r.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + dt.css(t[0], "borderTopWidth", !0),
                    left: i.left + dt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - dt.css(n, "marginTop", !0),
                    left: e.left - i.left - dt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || Qt
            })
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        dt.fn[t] = function(i) {
            return Nt(this, function(t, i, r) {
                var s = K(t);
                return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), dt.each(["top", "left"], function(t, e) {
        dt.cssHooks[e] = D(ft.pixelPosition, function(t, n) {
            if (n) return n = E(t, e), oe.test(n) ? dt(t).position()[e] + "px" : n
        })
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        dt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            dt.fn[i] = function(r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || s === !0 ? "margin" : "border");
                return Nt(this, function(e, n, r) {
                    var s;
                    return dt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? dt.css(e, n, a) : dt.style(e, n, r, a)
                }, e, o ? r : void 0, o)
            }
        })
    }), dt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), dt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return dt
    });
    var We = t.jQuery,
        Ye = t.$;
    return dt.noConflict = function(e) {
        return t.$ === dt && (t.$ = Ye), e && t.jQuery === dt && (t.jQuery = We), dt
    }, e || (t.jQuery = t.$ = dt), dt
}),
function(t) {
    function e(t, e, n, i, r) {
        this._listener = e, this._isOnce = n, this.context = i, this._signal = t, this._priority = r || 0
    }

    function n(t, e) {
        if ("function" != typeof t) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
    }

    function i() {
        this._bindings = [], this._prevParams = null;
        var t = this;
        this.dispatch = function() {
            i.prototype.dispatch.apply(t, arguments)
        }
    }
    e.prototype = {
        active: !0,
        params: null,
        execute: function(t) {
            var e;
            return this.active && this._listener && (t = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, t), this._isOnce && this.detach()), e
        },
        detach: function() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null
        },
        isBound: function() {
            return !!this._signal && !!this._listener
        },
        isOnce: function() {
            return this._isOnce
        },
        getListener: function() {
            return this._listener
        },
        getSignal: function() {
            return this._signal
        },
        _destroy: function() {
            delete this._signal, delete this._listener, delete this.context
        },
        toString: function() {
            return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    }, i.prototype = {
        VERSION: "1.0.0",
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _registerListener: function(t, n, i, r) {
            var s = this._indexOfListener(t, i);
            if (s !== -1) {
                if (t = this._bindings[s], t.isOnce() !== n) throw Error("You cannot add" + (n ? "" : "Once") + "() then add" + (n ? "Once" : "") + "() the same listener without removing the relationship first.")
            } else t = new e(this, t, n, i, r), this._addBinding(t);
            return this.memorize && this._prevParams && t.execute(this._prevParams), t
        },
        _addBinding: function(t) {
            var e = this._bindings.length;
            do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
            this._bindings.splice(e + 1, 0, t)
        },
        _indexOfListener: function(t, e) {
            for (var n, i = this._bindings.length; i--;)
                if (n = this._bindings[i], n._listener === t && n.context === e) return i;
            return -1
        },
        has: function(t, e) {
            return this._indexOfListener(t, e) !== -1
        },
        add: function(t, e, i) {
            return n(t, "add"), this._registerListener(t, !1, e, i)
        },
        addOnce: function(t, e, i) {
            return n(t, "addOnce"), this._registerListener(t, !0, e, i)
        },
        remove: function(t, e) {
            n(t, "remove");
            var i = this._indexOfListener(t, e);
            return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t
        },
        removeAll: function() {
            for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
            this._bindings.length = 0
        },
        getNumListeners: function() {
            return this._bindings.length
        },
        halt: function() {
            this._shouldPropagate = !1
        },
        dispatch: function(t) {
            if (this.active) {
                var e, n = Array.prototype.slice.call(arguments),
                    i = this._bindings.length;
                if (this.memorize && (this._prevParams = n), i) {
                    e = this._bindings.slice(), this._shouldPropagate = !0;
                    do i--; while (e[i] && this._shouldPropagate && e[i].execute(n) !== !1)
                }
            }
        },
        forget: function() {
            this._prevParams = null
        },
        dispose: function() {
            this.removeAll(), delete this._bindings, delete this._prevParams
        },
        toString: function() {
            return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    };
    var r = i;
    r.Signal = i, "function" == typeof define && define.amd ? define(function() {
        return r
    }) : "undefined" != typeof module && module.exports ? module.exports = r : t.signals = r
}(this);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                var i = function(t) {
                        var e, n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n
                    },
                    r = function(t, e, n) {
                        var i, r, s = t.cycle;
                        for (i in s) r = s[i], t[i] = "function" == typeof r ? r(n, e[n]) : r[n % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, i) {
                        n.call(this, t, e, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = n._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    c = s.prototype = n.to({}, .1, {}),
                    h = [];
                s.version = "1.19.0", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = n.killTweensOf, s.getTweensOf = n.getTweensOf, s.lagSmoothing = n.lagSmoothing, s.ticker = n.ticker, s.render = n.render, c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var i, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (i in t) this.vars[i] = t[i];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                    return this
                }, c.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var i, r, s, l, u, c, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        _ = this._duration,
                        v = this._rawPrevTime;
                    if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === o && "isPause" !== this.data) && v !== t && (n = !0, v > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && v > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), this._rawPrevTime = f = !e || t || v === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / _, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / _ < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)), d === this._time && !n && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / _) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === _ && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                }, s.to = function(t, e, n) {
                    return new s(t, e, n)
                }, s.from = function(t, e, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new s(t, e, n)
                }, s.fromTo = function(t, e, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new s(t, e, i)
                }, s.staggerTo = s.allTo = function(t, e, o, a, c, f, p) {
                    a = a || 0;
                    var d, m, g, _, v = 0,
                        y = [],
                        x = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || o.callbackScope || this, f || h)
                        },
                        b = o.cycle,
                        w = o.startAt && o.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = n.selector(t) || t), l(t) && (t = i(t))), t = t || [], 0 > a && (t = i(t), t.reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
                        m = {};
                        for (_ in o) m[_] = o[_];
                        if (b && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w) {
                            w = m.startAt = {};
                            for (_ in o.startAt) w[_] = o.startAt[_];
                            r(m.startAt, t, g)
                        }
                        m.delay = v + (m.delay || 0), g === d && c && (m.onComplete = x), y[g] = new s(t[g], e, m), v += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, n, i, r, o, a) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, s.staggerTo(t, e, n, i, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, n, i, r, o, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, s.staggerTo(t, e, i, r, o, a, l)
                }, s.delayedCall = function(t, e, n, i, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: e,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return n.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var i = [], r = 0, s = t._first; s;) s instanceof n ? i[r++] = s : (e && (i[r++] = s), i = i.concat(f(s, e)), r = i.length), s = s._next;
                        return i
                    },
                    p = s.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, n, i, r) {
                    null == n && (n = !0), null == i && (i = !0);
                    var s, o, a, l = p(0 != r),
                        u = l.length,
                        c = n && i && r;
                    for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && i || n && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, c, h, f, p = a.tweenLookup;
                        if ("string" == typeof t && (t = n.selector(t) || t), l(t) && (t = i(t)), u(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else {
                            r = [];
                            for (c in p)
                                for (o = p[c].target.parentNode; o;) o === t && (r = r.concat(p[c].tweens)), o = o.parentNode;
                            for (f = r.length, h = 0; f > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, n, i, r) {
                    n = n !== !1, i = i !== !1, r = r !== !1;
                    for (var s, o, a = p(r), l = n && i && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && i || n && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, n) {
                    d(!0, t, e, n)
                }, s.resumeAll = function(t, e, n) {
                    d(!1, t, e, n)
                }, s.globalTimeScale = function(e) {
                    var i = t._rootTimeline,
                        r = n.ticker.time;
                    return arguments.length ? (e = e || o, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                var i = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var n, i, r = this.vars;
                        for (i in r) n = r[i], l(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = n._internals,
                    o = i._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    c = s.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, n = {};
                        for (e in t) n[e] = t[e];
                        return n
                    },
                    p = function(t, e, n) {
                        var i, r, s = t.cycle;
                        for (i in s) r = s[i], t[i] = "function" == typeof r ? r.call(e[n], n) : r[n % r.length];
                        delete t.cycle
                    },
                    d = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n
                    },
                    g = i.prototype = new e;
                return i.version = "1.19.0", g.constructor = i, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, i, r) {
                    var s = i.repeat && h.TweenMax || n;
                    return e ? this.add(new s(t, e, i), r) : this.set(t, i, r)
                }, g.from = function(t, e, i, r) {
                    return this.add((i.repeat && h.TweenMax || n).from(t, e, i), r)
                }, g.fromTo = function(t, e, i, r, s) {
                    var o = r.repeat && h.TweenMax || n;
                    return e ? this.add(o.fromTo(t, e, i, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, u, c) {
                    var h, d, g = new i({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        _ = r.cycle;
                    for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), d = 0; d < t.length; d++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && p(h.startAt, t, d)), _ && (p(h, t, d), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[d], e, h, d * s);
                    return this.add(g, o)
                }, g.staggerFrom = function(t, e, n, i, r, s, o, a) {
                    return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, s, o, a)
                }, g.staggerFromTo = function(t, e, n, i, r, s, o, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, s, o, a, l)
                }, g.call = function(t, e, i, r) {
                    return this.add(n.delayedCall(0, t, e, i), r)
                }, g.set = function(t, e, i) {
                    return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
                }, i.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new i(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof n && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var u, c, h, f, p, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new i({
                                tweens: f
                            })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = n.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var n = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : n._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, n) {
                    e.prototype._remove.call(this, t, n);
                    var i = this._last;
                    return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, n, i) {
                    return this.add(t, e || 0, n, i)
                }, g.appendMultiple = function(t, e, n, i) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, i, r) {
                    var s = n.delayedCall(0, d, i, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, n, i, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, i);
                    if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
                        n = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, i) : this.duration()
                    }
                    return Number(e) + n
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, s, o, a, l, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._startTime,
                        g = this._timeScale,
                        _ = this._paused;
                    if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (s = !1), i = i._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= d)
                                for (i = this._first; i && i._startTime <= t && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= t && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== d && this._first || n || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= d)
                            for (i = this._first; i && (o = i._next, f === this._time && (!this._paused || _));)(i._active || i._startTime <= f && !i._paused && !i._gc) && (h === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                        else
                            for (i = this._last; i && (o = i._prev, f === this._time && (!this._paused || _));) {
                                if (i._active || i._startTime <= d && !i._paused && !i._gc) {
                                    if (h === i) {
                                        for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, n), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                                }
                                i = o
                            }
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, i, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof n ? e !== !1 && (s[a++] = o) : (i !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, i)), a = s.length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var i, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (o[a++] = i[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, n) {
                    n = n || 0;
                    for (var i, r = this._first, s = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
                    if (e)
                        for (i in s) s[i] >= n && (s[i] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        n = e.length;
                    for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, n) {
                    if (t === this._gc)
                        for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                    return e.prototype._enabled.call(this, t, n)
                }, g.totalTime = function(e, n, i) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, n, i = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = e;
                            this._duration = this._totalDuration = i, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!e)
                        for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, i
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
                var i = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    u = new n(null, null, 1, 0),
                    c = i.prototype = new t;
                return c.constructor = i, c.kill()._gc = !1, i.version = "1.19.0", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, n, i, r) {
                    return this.add(e.delayedCall(0, t, i, r), n)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, n) {
                    n = n || {};
                    var i, r, s, o = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = n.repeat && l.TweenMax || e;
                    for (r in n) o[r] = n[r];
                    return o.time = this._parseTimeOrLabel(t), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, i, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && i === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), n.onStart && s._callback("onStart")
                    }, s
                }, c.tweenFromTo = function(t, e, n) {
                    n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, n.immediateRender = n.immediateRender !== !1;
                    var i = this.tweenTo(e, n);
                    return i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, s, l, u, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._time,
                        _ = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        x = this._rawPrevTime,
                        b = this._paused,
                        w = this._cycle;
                    if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === r) && x !== t && this._first && (c = !0, x > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && x !== r && (x > 0 || 0 > t && x >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (s = !1), i = i._next;
                            t = 0, this._initted || (c = !0)
                        } else if (0 === m && 0 > x && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= g)
                            for (i = this._first; i && i._startTime <= t && !f;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (f = i), i = i._next;
                        else
                            for (i = this._last; i && i._startTime >= t && !f;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (f = i), i = i._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & w),
                            P = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            S = this._totalTime,
                            C = this._cycle,
                            k = this._rawPrevTime,
                            O = this._time;
                        if (this._totalTime = w * m, this._cycle < w ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? x - 1e-4 : x, this._cycle = w, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
                        if (P && (g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = O, this._totalTime = S, this._cycle = C, this._rawPrevTime = k
                    }
                    if (!(this._time !== g && this._first || n || c || f)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p = this._time, p >= g)
                        for (i = this._first; i && (l = i._next, p === this._time && (!this._paused || b));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (f === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = l;
                    else
                        for (i = this._last; i && (l = i._prev, p === this._time && (!this._paused || b));) {
                            if (i._active || i._startTime <= g && !i._paused && !i._gc) {
                                if (f === i) {
                                    for (f = i._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, n), f = f._prev;
                                    f = null, this.pause()
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                            }
                            i = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, c.getActive = function(t, e, n) {
                    null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
                    var i, r, s = [],
                        o = this.getChildren(t, e, n),
                        a = 0,
                        l = o.length;
                    for (i = 0; l > i; i++) r = o[i], r.isActive() && (s[a++] = r);
                    return s
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, n = this.getLabelsArray(),
                        i = n.length;
                    for (e = 0; i > e; e++)
                        if (n[e].time > t) return n[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
                        if (e[n].time < t) return e[n].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        n = 0;
                    for (t in this._labels) e[n++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, i
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    n = [],
                    i = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, n, i) {
                        n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, n, i) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: i
                            },
                            l = (t + e) / 2,
                            u = (e + n) / 2,
                            c = (n + i) / 2,
                            h = (l + u) / 2,
                            f = (u + c) / 2,
                            p = (f - h) / 8;
                        return r.b = l + (t - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + f) / 2, o.b = f - p, a.b = c + (i - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    u = function(t, r, s, o, a) {
                        var u, c, h, f, p, d, m, g, _, v, y, x, b, w = t.length - 1,
                            T = 0,
                            P = t[0].a;
                        for (u = 0; w > u; u++) p = t[T], c = p.a, h = p.d, f = t[T + 1].d, a ? (y = e[u], x = n[u], b = (x + y) * r * .25 / (o ? .5 : i[u] || .5), d = h - (h - c) * (o ? .5 * r : 0 !== y ? b / y : 0), m = h + (f - h) * (o ? .5 * r : 0 !== x ? b / x : 0), g = h - (d + ((m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = h - (h - c) * r * .5, m = h + (f - h) * r * .5, g = h - (d + m) / 2), d += g, m += g, p.c = _ = d, 0 !== u ? p.b = P : p.b = P = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = _ - c, p.ba = P - c, s ? (v = l(c, P, _, h), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, P = m;
                        p = t[T], p.b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, s && (v = l(p.a, P, p.c, p.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function(t, i, r, s) {
                        var a, l, u, c, h, f, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][i]) && "=" === f.charAt(1) && (t[l][i] = s[i] + Number(f.charAt(0) + f.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][i], 0, 0, t[-1 > a ? 0 : 1][i]), p;
                        for (l = 0; a > l; l++) u = t[l][i], c = t[l + 1][i], p[l] = new o(u, 0, 0, c), r && (h = t[l + 2][i], e[l] = (e[l] || 0) + (c - u) * (c - u), n[l] = (n[l] || 0) + (h - c) * (h - c));
                        return p[l] = new o(t[l][i], 0, 0, t[l + 1][i]), p
                    },
                    h = function(t, s, o, l, h, f) {
                        var p, d, m, g, _, v, y, x, b = {},
                            w = [],
                            T = f || t[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
                        for (d in t[0]) w.push(d);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], y = !0, p = w.length; --p > -1;)
                                if (d = w[p],
                                    Math.abs(T[d] - x[d]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = n.length = i.length = 0, p = w.length; --p > -1;) d = w[p], r[d] = -1 !== h.indexOf("," + d + ","), b[d] = c(t, d, r[d], f);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), n[p] = Math.sqrt(n[p]);
                        if (!l) {
                            for (p = w.length; --p > -1;)
                                if (r[d])
                                    for (m = b[w[p]], v = m.length - 1, g = 0; v > g; g++) _ = m[g + 1].da / n[g] + m[g].da / e[g] || 0, i[g] = (i[g] || 0) + _ * _;
                            for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
                        }
                        for (p = w.length, g = o ? 4 : 1; --p > -1;) d = w[p], m = b[d], u(m, s, o, l, r[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    f = function(t, e, n) {
                        e = e || "soft";
                        var i, r, s, a, l, u, c, h, f, p, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            _ = "soft" === e,
                            v = [];
                        if (_ && n && (t = [n].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (u = v.length; --u > -1;) {
                            for (f = v[u], m[f] = l = [], p = 0, h = t.length, c = 0; h > c; c++) i = null == n ? t[c][f] : "string" == typeof(d = t[c][f]) && "=" === d.charAt(1) ? n[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && c > 1 && h - 1 > c && (l[p++] = (i + l[p - 2]) / 2), l[p++] = i;
                            for (h = p - g + 1, p = 0, c = 0; h > c; c += g) i = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[p++] = d = 3 === g ? new o(i, r, s, a) : new o(i, (2 * r + i) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function(t, e, n) {
                        for (var i, r, s, o, a, l, u, c, h, f, p, d = 1 / n, m = t.length; --m > -1;)
                            for (f = t[m], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, i = r = 0, c = 1; n >= c; c++) u = d * c, h = 1 - u, i = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), p = m * n + c - 1, e[p] = (e[p] || 0) + i * i
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var n, i, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = e - 1,
                            h = [],
                            f = [];
                        for (n in t) p(t[n], o, e);
                        for (r = o.length, i = 0; r > i; i++) l += Math.sqrt(o[i]), s = i % e, f[s] = l, s === c && (u += l, s = i / e >> 0, h[s] = f, a[s] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function(t, e, n) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var i, r, s, o, a, l = e.values || [],
                                u = {},
                                c = l[0],
                                p = e.autoRotate || n.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (i in c) this._props.push(i);
                            for (s = this._props.length; --s > -1;) i = this._props[s], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || u[i] !== l[0][i] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) i = p[s][o], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                    i = p[s][2], this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                                }
                            return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var n, i, r, s, o, a, l, u, c, h, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (u = f - 1; u > r && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (n = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                    for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
                                    this._s1 = h[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else n = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - n * (1 / f)) * f;
                            for (i = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][n], l = (a * a * o.da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, _, v, y, x, b, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], b = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[n], g = g[n], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, v += (x - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - v, y - _) * w + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, n) {
                    return new o(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            n = e._parseToProxy,
                            i = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, c, h, f = e.values,
                                    p = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > p) return a;
                                for (u = 0; p >= u; u++) h = n(t, f[u], o, a, l, p !== u), d[u] = h.end;
                                for (c in e) g[c] = e[c];
                                return g.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = i, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x && [
                                    ["x", "y", "rotation", u, !1]
                                ]), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._mod = function(t) {
                    for (var e, n = this._overwriteProps, i = n.length; --i > -1;) e = t[n[i]], e && "function" == typeof e && (this._mod[n[i]] = e)
                }, g._kill = function(t) {
                    var e, n, i = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
                    if (i = this._autoRotate)
                        for (n = i.length; --n > -1;) t[i[n][2]] && i.splice(n, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var n, i, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.19.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, f, p, d, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    P = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    C = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    O = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    R = function(t, e) {
                        return e.toUpperCase()
                    },
                    E = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    F = Math.PI / 180,
                    j = 180 / Math.PI,
                    I = {},
                    z = document,
                    q = function(t) {
                        return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", t) : z.createElement(t)
                    },
                    H = q("div"),
                    B = q("img"),
                    X = o._internals = {
                        _specialProps: l
                    },
                    $ = navigator.userAgent,
                    W = function() {
                        var t = $.indexOf("Android"),
                            e = q("a");
                        return f = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === t || Number($.substr(t + 8, 1)) > 3), d = f && Number($.substr($.indexOf("Version/") + 8, 1)) < 6, p = -1 !== $.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    Y = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    Q = function(t, e) {
                        e = e || H;
                        var n, i, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
                        return i >= 0 ? (G = 3 === i ? "ms" : n[i], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = z.defaultView ? z.defaultView.getComputedStyle : function() {},
                    J = o.getStyle = function(t, e, n, i, r) {
                        var s;
                        return W || "opacity" !== e ? (!i && t.style[e] ? s = t.style[e] : (n = n || Z(t)) ? s = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Y(t)
                    },
                    K = X.convertToPixels = function(t, n, i, r, s) {
                        if ("px" === r || !r) return i;
                        if ("auto" === r || !i) return 0;
                        var a, l, u, c = E.test(n),
                            h = t,
                            f = H.style,
                            p = 0 > i,
                            d = 1 === i;
                        if (p && (i = -i), d && (i *= 100), "%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                            else {
                                if (h = t.parentNode || z.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * i / 100;
                                f[c ? "width" : "height"] = i + r
                            }
                            h.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(H), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / i * 100), 0 !== a || s || (a = K(t, n, i, r, !0))
                        }
                        return d && (a /= 100), p ? -a : a
                    },
                    tt = X.calculateOffset = function(t, e, n) {
                        if ("absolute" !== J(t, "position", n)) return 0;
                        var i = "left" === e ? "Left" : "Top",
                            r = J(t, "margin" + i, n);
                        return t["offset" + i] - (K(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    et = function(t, e) {
                        var n, i, r, s = {};
                        if (e = e || Z(t, null))
                            if (n = e.length)
                                for (; --n > -1;) r = e[n], (-1 === r.indexOf("-transform") || Ot === r) && (s[r.replace(O, R)] = e.getPropertyValue(r));
                            else
                                for (n in e)(-1 === n.indexOf("Transform") || kt === n) && (s[n] = e[n]);
                        else if (e = t.currentStyle || t.style)
                            for (n in e) "string" == typeof n && void 0 === s[n] && (s[n.replace(O, R)] = e[n]);
                        return W || (s.opacity = Y(t)), i = Ht(t, e, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, Rt && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
                    },
                    nt = function(t, e, n, i, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = n[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : tt(t, o), void 0 !== u[o] && (a = new _t(u, o, u[o], a)));
                        if (i)
                            for (o in i) "className" !== o && (l[o] = i[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    it = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    st = function(t, e, n) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (n || Z(t))[e] || 0;
                        if (t.getBBox && It(t)) return t.getBBox()[e] || 0;
                        var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = it[e],
                            s = r.length;
                        for (n = n || Z(t, null); --s > -1;) i -= parseFloat(J(t, "padding" + r[s], n, !0)) || 0, i -= parseFloat(J(t, "border" + r[s] + "Width", n, !0)) || 0;
                        return i
                    },
                    ot = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var n, i = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        if (i.length > 3 && !e) {
                            for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(ot(i[n]));
                            return t.join(",")
                        }
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
                    },
                    at = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ut = function(t, e, n, i) {
                        var r, s, o, a, l, u = 1e-6;
                        return "function" == typeof t && (t = t(_, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (l ? 0 : e), s.length && (i && (i[n] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    },
                    ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ht = function(t, e, n) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ft = o.parseColor = function(t, e) {
                        var n, i, r, s, o, a, l, u, c, h, f;
                        if (t)
                            if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) n = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + i + i + r + r + s + s), t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (n = f = t.match(v), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else o = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, l = Number(n[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, i = 2 * l - r, n.length > 3 && (n[3] = Number(t[3])), n[0] = ht(o + 1 / 3, i, r), n[1] = ht(o, i, r), n[2] = ht(o - 1 / 3, i, r);
                                else n = t.match(v) || ct.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                            } else n = ct.black;
                        return e && !f && (i = n[0] / 255, r = n[1] / 255, s = n[2] / 255, u = Math.max(i, r, s), c = Math.min(i, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === i ? (r - s) / h + (s > r ? 6 : 0) : u === r ? (s - i) / h + 2 : (i - r) / h + 4, o *= 60), n[0] = o + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                    },
                    pt = function(t, e) {
                        var n, i, r, s = t.match(dt) || [],
                            o = 0,
                            a = s.length ? "" : t;
                        for (n = 0; n < s.length; n++) i = s[n], r = t.substr(o, t.indexOf(i, o) - o), o += r.length + i.length, i = ft(i, e), 3 === i.length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return a + t.substr(o)
                    },
                    dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in ct) dt += "|" + u + "\\b";
                dt = new RegExp(dt + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, n = t[0] + t[1];
                    dt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), dt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var mt = function(t, e, n, i) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(dt) || [""])[0] : "",
                            o = t.split(s).join("").match(x) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(v, "") : "";
                        return c ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += h;
                            else if (i && M.test(t)) {
                                for (d = t.replace(M, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (e = (t.match(dt) || [s])[0], f = t.split(e).join("").match(x) || [], p = f.length, c > p--)
                                for (; ++p < c;) f[p] = n ? f[(p - 1) / 2 | 0] : o[p];
                            return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, f;
                            if ("number" == typeof t) t += h;
                            else if (i && M.test(t)) {
                                for (s = t.replace(M, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                return s.join(",")
                            }
                            if (e = t.match(x) || [], f = e.length, c > f--)
                                for (; ++f < c;) e[f] = n ? e[(f - 1) / 2 | 0] : o[f];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    gt = function(t) {
                        return t = t.split(","),
                            function(e, n, i, r, s, o, a) {
                                var l, u = (n + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    _t = (X._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, n, i, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if (n = l.t, n.type) {
                                    if (1 === n.type) {
                                        for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                        n[s] = r
                                    }
                                } else n[s] = n.s + n.xs0;
                                l = l._next
                            }
                    }, function(t, e, n, i, r) {
                        this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                    }),
                    vt = (X._parseToProxy = function(t, e, n, i, r, s) {
                        var o, a, l, u, c, h = i,
                            f = {},
                            p = {},
                            d = n._transform,
                            m = I;
                        for (n._transform = null, I = e, i = c = n.parse(t, e, i, r), I = m, s && (n._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
                            if (i.type <= 1 && (a = i.p, p[a] = i.s + i.c, f[a] = i.s, s || (u = new _t(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                                for (o = i.l; --o > 0;) l = "xn" + o, a = i.p + "_" + l, p[a] = i.data[l], f[a] = i[l], s || (u = new _t(i, l, a, u, i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: u,
                            pt: c
                        }
                    }, X.CSSPropTween = function(t, e, i, r, o, a, l, u, c, h, f) {
                        this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof vt || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === f ? i + r : f, o && (this._next = o, o._prev = this)
                    }),
                    yt = function(t, e, n, i, r, s) {
                        var o = new vt(t, e, n, i - n, r, (-1), s);
                        return o.b = n, o.e = o.xs0 = i, o
                    },
                    xt = o.parseComplex = function(t, e, n, i, r, s, a, l, u, h) {
                        n = n || s || "", "function" == typeof i && (i = i(_, g)), a = new vt(t, e, 0, 0, a, h ? 2 : 1, null, (!1), l, n, i), i += "", r && dt.test(i + n) && (i = [n, i], o.colorStringFilter(i), n = i[0], i = i[1]);
                        var f, p, d, m, x, b, w, T, P, S, C, k, O, A = n.split(", ").join(",").split(" "),
                            R = i.split(", ").join(",").split(" "),
                            E = A.length,
                            D = c !== !1;
                        for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (A = A.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), E = A.length), E !== R.length && (A = (s || "").split(" "), E = A.length), a.plugin = u, a.setRatio = h, dt.lastIndex = 0, f = 0; E > f; f++)
                            if (m = A[f], x = R[f], T = parseFloat(m), T || 0 === T) a.appendXtra("", T, at(x, T), x.replace(y, ""), D && -1 !== x.indexOf("px"), !0);
                            else if (r && dt.test(m)) k = x.indexOf(")") + 1, k = ")" + (k ? x.substr(k) : ""), O = -1 !== x.indexOf("hsl") && W, m = ft(m, O), x = ft(x, O), P = m.length + x.length > 6, P && !W && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[f]).join("transparent")) : (W || (P = !1), O ? a.appendXtra(P ? "hsla(" : "hsl(", m[0], at(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(x[1], m[1]), "%,", !1).appendXtra("", m[2], at(x[2], m[2]), P ? "%," : "%" + k, !1) : a.appendXtra(P ? "rgba(" : "rgb(", m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], P ? "," : k, !0), P && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, k, !1))), dt.lastIndex = 0;
                        else if (b = m.match(v)) {
                            if (w = x.match(y), !w || w.length !== b.length) return a;
                            for (d = 0, p = 0; p < b.length; p++) C = b[p], S = m.indexOf(C, d), a.appendXtra(m.substr(d, S - d), Number(C), at(w[p], C), "", D && "px" === m.substr(S + C.length, 2), 0 === p), d = S + C.length;
                            a["xs" + a.l] += m.substr(d)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                        if (-1 !== i.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, f = 1; f < a.l; f++) k += a["xs" + f] + a.data["xn" + f];
                            a.e = k + a["xs" + f]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    bt = 9;
                for (u = vt.prototype, u.l = u.pr = 0; --bt > 0;) u["xn" + bt] = 0, u["xs" + bt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, n, i, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", n || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = i || "", a > 0 ? (o.data["xn" + a] = e + n, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new vt(o, "xn" + a, e, n, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + n
                    }, o.rxp = {}, o.s = e, o.c = n, o.r = r, o)) : (o["xs" + a] += e + (i || ""), o)
                };
                var wt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Tt = X._registerComplexSpecialProp = function(t, e, n) {
                        "object" != typeof e && (e = {
                            parser: n
                        });
                        var i, r, s = t.split(","),
                            o = e.defaultValue;
                        for (n = n || [o], i = 0; i < s.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || o, r = new wt(s[i], e)
                    },
                    Pt = X._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Tt(t, {
                                parser: function(t, n, i, r, s, o, u) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[i].parse(t, n, i, r, s, o, u)) : (U("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                u = wt.prototype, u.parseComplex = function(t, e, n, i, r, s) {
                    var o, a, l, u, c, h, f = this.keyword;
                    if (this.multi && (M.test(n) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = n.replace(M, "|").split("|")) : f && (a = [e], l = [n])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, n = l[o] = l[o] || this.dflt, f && (c = e.indexOf(f), h = n.indexOf(f), c !== h && (-1 === h ? a[o] = a[o].split(f).join("") : -1 === c && (a[o] += " " + f)));
                        e = a.join(", "), n = l.join(", ")
                    }
                    return xt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, s)
                }, u.parse = function(t, e, n, i, s, o, a) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, n) {
                    Tt(t, {
                        parser: function(t, i, r, s, o, a, l) {
                            var u = new vt(t, r, 0, 0, o, 2, r, (!1), n);
                            return u.plugin = a, u.setRatio = e(t, i, s._tween, r), u
                        },
                        priority: n
                    })
                }, o.useSVGTransformAttr = f || p;
                var St, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = Q("transform"),
                    Ot = V + "transform",
                    At = Q("transformOrigin"),
                    Rt = null !== Q("perspective"),
                    Et = X.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !Rt) && (o.defaultForce3D || "auto")
                    },
                    Dt = window.SVGElement,
                    Nt = function(t, e, n) {
                        var i, r = z.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
                        return e.appendChild(r), r
                    },
                    Mt = z.documentElement,
                    Lt = function() {
                        var t, e, n, i = m || /Android/i.test($) && !window.chrome;
                        return z.createElementNS && !i && (t = Nt("svg", Mt), e = Nt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), n = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[kt] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(p && Rt), Mt.removeChild(t)), i
                    }(),
                    Ft = function(t, e, n, i, r, s) {
                        var a, l, u, c, h, f, p, d, m, g, _, v, y, x, b = t._gsTransform,
                            w = qt(t, !0);
                        b && (y = b.xOrigin, x = b.yOrigin), (!i || (a = i.split(" ")).length < 2) && (p = t.getBBox(), e = ot(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), n.xOrigin = c = parseFloat(a[0]), n.yOrigin = h = parseFloat(a[1]), i && w !== zt && (f = w[0], p = w[1], d = w[2], m = w[3], g = w[4], _ = w[5], v = f * m - p * d, l = c * (m / v) + h * (-d / v) + (d * _ - m * g) / v, u = c * (-p / v) + h * (f / v) - (f * _ - p * g) / v, c = n.xOrigin = a[0] = l, h = n.yOrigin = a[1] = u), b && (s && (n.xOffset = b.xOffset, n.yOffset = b.yOffset, b = n), r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (l = c - y, u = h - x, b.xOffset += l * w[0] + u * w[2] - l, b.yOffset += l * w[1] + u * w[3] - u) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    jt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (t) {}
                    },
                    It = function(t) {
                        return !!(Dt && t.getBBox && t.getCTM && jt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    zt = [1, 0, 0, 1, 0, 0],
                    qt = function(t, e) {
                        var n, i, r, s, o, a, l = t._gsTransform || new Et,
                            u = 1e5,
                            c = t.style;
                        if (kt ? i = J(t, Ot, null, !0) : t.currentStyle && (i = t.currentStyle.filter.match(D), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, n && kt && ((a = "none" === Z(t).display) || !t.parentNode) && (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, Mt.appendChild(t)), i = J(t, Ot, null, !0), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? c.display = s : a && Wt(c, "display"), o && Mt.removeChild(t)), (l.svg || t.getBBox && It(t)) && (n && -1 !== (c[kt] + "").indexOf("matrix") && (i = c[kt], n = 0), r = t.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return zt;
                        for (r = (i || "").match(v) || [], bt = r.length; --bt > -1;) s = Number(r[bt]), r[bt] = (o = s - (s |= 0)) ? (o * u + (0 > o ? -.5 : .5) | 0) / u + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ht = X.getTransform = function(t, n, i, r) {
                        if (t._gsTransform && i && !r) return t._gsTransform;
                        var s, a, l, u, c, h, f = i ? t._gsTransform || new Et : new Et,
                            p = f.scaleX < 0,
                            d = 2e-5,
                            m = 1e5,
                            g = Rt ? parseFloat(J(t, At, n, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            _ = parseFloat(o.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !It(t)), f.svg && (Ft(t, J(t, At, n, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), St = o.useSVGTransformAttr || Lt), s = qt(t), s !== zt) {
                            if (16 === s.length) {
                                var v, y, x, b, w, T = s[0],
                                    P = s[1],
                                    S = s[2],
                                    C = s[3],
                                    k = s[4],
                                    O = s[5],
                                    A = s[6],
                                    R = s[7],
                                    E = s[8],
                                    D = s[9],
                                    N = s[10],
                                    M = s[12],
                                    L = s[13],
                                    F = s[14],
                                    I = s[11],
                                    z = Math.atan2(A, N);
                                f.zOrigin && (F = -f.zOrigin, M = E * F - s[12], L = D * F - s[13], F = N * F + f.zOrigin - s[14]), f.rotationX = z * j, z && (b = Math.cos(-z), w = Math.sin(-z), v = k * b + E * w, y = O * b + D * w, x = A * b + N * w, E = k * -w + E * b, D = O * -w + D * b, N = A * -w + N * b, I = R * -w + I * b, k = v, O = y, A = x), z = Math.atan2(-S, N), f.rotationY = z * j, z && (b = Math.cos(-z), w = Math.sin(-z), v = T * b - E * w, y = P * b - D * w, x = S * b - N * w, D = P * w + D * b, N = S * w + N * b, I = C * w + I * b, T = v, P = y, S = x), z = Math.atan2(P, T), f.rotation = z * j, z && (b = Math.cos(-z), w = Math.sin(-z), T = T * b + k * w, y = P * b + O * w, O = P * -w + O * b, A = S * -w + A * b, P = y), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(T * T + P * P) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(O * O + D * D) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(A * A + N * N) * m + .5 | 0) / m, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || O ? Math.atan2(k, O) * j + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = I ? 1 / (0 > I ? -I : I) : 0, f.x = M, f.y = L, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * O))
                            } else if (!Rt || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                var q = s.length >= 6,
                                    H = q ? s[0] : 1,
                                    B = s[1] || 0,
                                    X = s[2] || 0,
                                    $ = q ? s[3] : 1;
                                f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(H * H + B * B), u = Math.sqrt($ * $ + X * X), c = H || B ? Math.atan2(B, H) * j : f.rotation || 0, h = X || $ ? Math.atan2(X, $) * j + c : f.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (p ? (l *= -1, h += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, h += 0 >= h ? 180 : -180)), f.scaleX = l, f.scaleY = u, f.rotation = c, f.skewX = h, Rt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = _, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * H + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * $))
                            }
                            f.zOrigin = g;
                            for (a in f) f[a] < d && f[a] > -d && (f[a] = 0)
                        }
                        return i && (t._gsTransform = f, f.svg && (St && t.style[kt] ? e.delayedCall(.001, function() {
                            Wt(t.style, kt)
                        }) : !St && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Bt = function(t) {
                        var e, n, i = this.data,
                            r = -i.rotation * F,
                            s = r + i.skewX * F,
                            o = 1e5,
                            a = (Math.cos(r) * i.scaleX * o | 0) / o,
                            l = (Math.sin(r) * i.scaleX * o | 0) / o,
                            u = (Math.sin(s) * -i.scaleY * o | 0) / o,
                            c = (Math.cos(s) * i.scaleY * o | 0) / o,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            n = l, l = -u, u = -n, e = f.filter, h.filter = "";
                            var p, d, g = this.t.offsetWidth,
                                _ = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                x = i.x + g * i.xPercent / 100,
                                b = i.y + _ * i.yPercent / 100;
                            if (null != i.ox && (p = (i.oxp ? g * i.ox * .01 : i.ox) - g / 2, d = (i.oyp ? _ * i.oy * .01 : i.oy) - _ / 2, x += p - (p * a + d * l), b += d - (p * u + d * c)), v ? (p = g / 2, d = _ / 2, y += ", Dx=" + (p - (p * a + d * l) + x) + ", Dy=" + (d - (p * u + d * c) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(N, y) : h.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                                var P, S, C, k = 8 > m ? 1 : -1;
                                for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + x), i.ieOffsetY = Math.round((_ - ((0 > c ? -c : c) * _ + (0 > u ? -u : u) * g)) / 2 + b), bt = 0; 4 > bt; bt++) S = rt[bt], P = f[S], n = -1 !== P.indexOf("px") ? parseFloat(P) : K(this.t, S, parseFloat(P), P.replace(w, "")) || 0, C = n !== i[S] ? 2 > bt ? -i.ieOffsetX : -i.ieOffsetY : 2 > bt ? p - i.ieOffsetX : d - i.ieOffsetY, h[S] = (i[S] = Math.round(n - C * (0 === bt || 2 === bt ? 1 : k))) + "px"
                            }
                        }
                    },
                    Xt = X.set3DTransformRatio = X.setTransformRatio = function(t) {
                        var e, n, i, r, s, o, a, l, u, c, h, f, d, m, g, _, v, y, x, b, w, T, P, S = this.data,
                            C = this.t.style,
                            k = S.rotation,
                            O = S.rotationX,
                            A = S.rotationY,
                            R = S.scaleX,
                            E = S.scaleY,
                            D = S.scaleZ,
                            N = S.x,
                            M = S.y,
                            L = S.z,
                            j = S.svg,
                            I = S.perspective,
                            z = S.force3D;
                        if (((1 === t || 0 === t) && "auto" === z && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !z) && !L && !I && !A && !O && 1 === D || St && j || !Rt) return void(k || S.skewX || j ? (k *= F, T = S.skewX * F, P = 1e5, e = Math.cos(k) * R, r = Math.sin(k) * R, n = Math.sin(k - T) * -E, s = Math.cos(k - T) * E, T && "simple" === S.skewType && (v = Math.tan(T - S.skewY * F), v = Math.sqrt(1 + v * v), n *= v, s *= v, S.skewY && (v = Math.tan(S.skewY * F), v = Math.sqrt(1 + v * v), e *= v, r *= v)), j && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * n) + S.xOffset, M += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset, St && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), N += .01 * S.xPercent * m.width, M += .01 * S.yPercent * m.height), m = 1e-6, m > N && N > -m && (N = 0), m > M && M > -m && (M = 0)), x = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (n * P | 0) / P + "," + (s * P | 0) / P + "," + N + "," + M + ")", j && St ? this.t.setAttribute("transform", "matrix(" + x) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + E + "," + N + "," + M + ")");
                        if (p && (m = 1e-4, m > R && R > -m && (R = D = 2e-5), m > E && E > -m && (E = D = 2e-5), !I || S.z || S.rotationX || S.rotationY || (I = 0)), k || S.skewX) k *= F, g = e = Math.cos(k), _ = r = Math.sin(k), S.skewX && (k -= S.skewX * F, g = Math.cos(k), _ = Math.sin(k), "simple" === S.skewType && (v = Math.tan((S.skewX - S.skewY) * F), v = Math.sqrt(1 + v * v), g *= v, _ *= v, S.skewY && (v = Math.tan(S.skewY * F), v = Math.sqrt(1 + v * v), e *= v, r *= v))), n = -_, s = g;
                        else {
                            if (!(A || O || 1 !== D || I || j)) return void(C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + M + "px," + L + "px)" + (1 !== R || 1 !== E ? " scale(" + R + "," + E + ")" : ""));
                            e = s = 1, n = r = 0
                        }
                        u = 1, i = o = a = l = c = h = 0, f = I ? -1 / I : 0, d = S.zOrigin, m = 1e-6, b = ",", w = "0", k = A * F, k && (g = Math.cos(k), _ = Math.sin(k), a = -_, c = f * -_, i = e * _, o = r * _, u = g, f *= g, e *= g, r *= g), k = O * F, k && (g = Math.cos(k), _ = Math.sin(k), v = n * g + i * _, y = s * g + o * _, l = u * _, h = f * _, i = n * -_ + i * g, o = s * -_ + o * g, u *= g, f *= g, n = v, s = y), 1 !== D && (i *= D, o *= D, u *= D, f *= D), 1 !== E && (n *= E, s *= E, l *= E, h *= E), 1 !== R && (e *= R, r *= R, a *= R, c *= R), (d || j) && (d && (N += i * -d, M += o * -d, L += u * -d + d), j && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * n) + S.xOffset, M += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset), m > N && N > -m && (N = w), m > M && M > -m && (M = w), m > L && L > -m && (L = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > a && a > -m ? w : a), x += b + (m > c && c > -m ? w : c) + b + (m > n && n > -m ? w : n) + b + (m > s && s > -m ? w : s), O || A || 1 !== D ? (x += b + (m > l && l > -m ? w : l) + b + (m > h && h > -m ? w : h) + b + (m > i && i > -m ? w : i), x += b + (m > o && o > -m ? w : o) + b + (m > u && u > -m ? w : u) + b + (m > f && f > -m ? w : f) + b) : x += ",0,0,0,0,1,0,", x += N + b + M + b + L + b + (I ? 1 + -L / I : 1) + ")", C[kt] = x
                    };
                u = Et.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, n, i, s, a, l) {
                        if (i._lastParsedTransform === l) return s;
                        i._lastParsedTransform = l;
                        var u;
                        "function" == typeof l[n] && (u = l[n], l[n] = e);
                        var c, h, f, p, d, m, v, y, x, b = t._gsTransform,
                            w = t.style,
                            T = 1e-6,
                            P = Ct.length,
                            S = l,
                            C = {},
                            k = "transformOrigin",
                            O = Ht(t, r, !0, S.parseTransform),
                            A = S.transform && ("function" == typeof S.transform ? S.transform(_, g) : S.transform);
                        if (i._transform = O, A && "string" == typeof A && kt) h = H.style, h[kt] = A, h.display = "block", h.position = "absolute", z.body.appendChild(H), c = Ht(H, null, !1), O.svg && (m = O.xOrigin, v = O.yOrigin, c.x -= O.xOffset, c.y -= O.yOffset, (S.transformOrigin || S.svgOrigin) && (A = {}, Ft(t, ot(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), m = A.xOrigin, v = A.yOrigin, c.x -= A.xOffset - O.xOffset, c.y -= A.yOffset - O.yOffset), (m || v) && (y = qt(H, !0), c.x -= m - (m * y[0] + v * y[2]), c.y -= v - (m * y[1] + v * y[3]))), z.body.removeChild(H), c.perspective || (c.perspective = O.perspective),
                            null != S.xPercent && (c.xPercent = lt(S.xPercent, O.xPercent)), null != S.yPercent && (c.yPercent = lt(S.yPercent, O.yPercent));
                        else if ("object" == typeof S) {
                            if (c = {
                                    scaleX: lt(null != S.scaleX ? S.scaleX : S.scale, O.scaleX),
                                    scaleY: lt(null != S.scaleY ? S.scaleY : S.scale, O.scaleY),
                                    scaleZ: lt(S.scaleZ, O.scaleZ),
                                    x: lt(S.x, O.x),
                                    y: lt(S.y, O.y),
                                    z: lt(S.z, O.z),
                                    xPercent: lt(S.xPercent, O.xPercent),
                                    yPercent: lt(S.yPercent, O.yPercent),
                                    perspective: lt(S.transformPerspective, O.perspective)
                                }, d = S.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (h in d) S[h] = d[h];
                                else S.rotation = d;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = lt(S.x, O.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = lt(S.y, O.yPercent)), c.rotation = ut("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : O.rotation - O.skewY, O.rotation - O.skewY, "rotation", C), Rt && (c.rotationX = ut("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", C), c.rotationY = ut("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", C)), c.skewX = ut(S.skewX, O.skewX - O.skewY), (c.skewY = ut(S.skewY, O.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                        }
                        for (Rt && null != S.force3D && (O.force3D = S.force3D, p = !0), O.skewType = S.skewType || O.skewType || o.defaultSkewType, f = O.force3D || O.z || O.rotationX || O.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == S.scale || (c.scaleZ = 1); --P > -1;) x = Ct[P], A = c[x] - O[x], (A > T || -T > A || null != S[x] || null != I[x]) && (p = !0, s = new vt(O, x, O[x], A, s), x in C && (s.e = C[x]), s.xs0 = 0, s.plugin = a, i._overwriteProps.push(s.n));
                        return A = S.transformOrigin, O.svg && (A || S.svgOrigin) && (m = O.xOffset, v = O.yOffset, Ft(t, ot(A), c, S.svgOrigin, S.smoothOrigin), s = yt(O, "xOrigin", (b ? O : c).xOrigin, c.xOrigin, s, k), s = yt(O, "yOrigin", (b ? O : c).yOrigin, c.yOrigin, s, k), (m !== O.xOffset || v !== O.yOffset) && (s = yt(O, "xOffset", b ? m : O.xOffset, O.xOffset, s, k), s = yt(O, "yOffset", b ? v : O.yOffset, O.yOffset, s, k)), A = St ? null : "0px 0px"), (A || Rt && f && O.zOrigin) && (kt ? (p = !0, x = At, A = (A || J(t, x, r, !1, "50% 50%")) + "", s = new vt(w, x, 0, 0, s, (-1), k), s.b = w[x], s.plugin = a, Rt ? (h = O.zOrigin, A = A.split(" "), O.zOrigin = (A.length > 2 && (0 === h || "0px" !== A[2]) ? parseFloat(A[2]) : h) || 0, s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px", s = new vt(O, "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = O.zOrigin) : s.xs0 = s.e = A) : ot(A + "", O)), p && (i._transformType = O.svg && St || !f && 3 !== this._transformType ? 2 : 3), u && (l[n] = u), s
                    },
                    prefix: !0
                }), Tt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Tt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, n, s, o, a) {
                        e = this.format(e);
                        var l, u, c, h, f, p, d, m, g, _, v, y, x, b, w, T, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < P.length; u++) this.p.indexOf("border") && (P[u] = Q(P[u])), f = h = J(t, P[u], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), p = c = l[u], d = parseFloat(f), y = f.substr((d + "").length), x = "=" === p.charAt(1), x ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = i[n] || y), v !== y && (b = K(t, "borderLeft", d, y), w = K(t, "borderTop", d, y), "%" === v ? (f = b / g * 100 + "%", h = w / _ * 100 + "%") : "em" === v ? (T = K(t, "borderLeft", 1, "em"), f = b / T + "em", h = w / T + "em") : (f = b + "px", h = w + "px"), x && (p = parseFloat(f) + m + v, c = parseFloat(h) + m + v)), o = xt(S, P[u], f + " " + h, p + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: mt("0px 0px 0px 0px", !1, !0)
                }), Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, n, i, s, o) {
                        return xt(t.style, n, this.format(J(t, n, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: mt("0px 0px", !1, !0)
                }), Tt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, n, i, s, o) {
                        var a, l, u, c, h, f, p = "background-position",
                            d = r || Z(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            _ = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (f = J(t, "backgroundImage").replace(A, ""), f && "none" !== f)) {
                            for (a = g.split(" "), l = _.split(" "), B.setAttribute("src", f), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, _, s, o)
                    },
                    formatter: ot
                }), Tt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", ot(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), Tt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Tt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Tt("transformStyle", {
                    prefix: !0
                }), Tt("backfaceVisibility", {
                    prefix: !0
                }), Tt("userSelect", {
                    prefix: !0
                }), Tt("margin", {
                    parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                }), Tt("padding", {
                    parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Tt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, n, i, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(J(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), Tt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Tt("autoRound,strictUnits", {
                    parser: function(t, e, n, i, r) {
                        return r
                    }
                }), Tt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, n, i, s, o) {
                        var a = J(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            u = l[0].replace(w, "");
                        return "px" !== u && (a = parseFloat(a) / K(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                    }
                }), Tt("borderWidth", {
                    parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Tt("float,cssFloat,styleFloat", {
                    parser: function(t, e, n, i, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new vt(o, a, 0, 0, r, (-1), n, (!1), 0, o[a], e)
                    }
                });
                var $t = function(t) {
                    var e, n = this.t,
                        i = n.filter || J(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !J(this.data, "filter")) : (n.filter = i.replace(S, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(T, "opacity=" + r))
                };
                Tt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, n, i, s, o) {
                        var a = parseFloat(J(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === n;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === J(t, "visibility", r) && 0 !== e && (a = 0), W ? s = new vt(l, "opacity", a, e - a, s) : (s = new vt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = $t), u && (s = new vt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", i._overwriteProps.push(s.n), i._overwriteProps.push(n)), s
                    }
                });
                var Wt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Yt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Wt(n, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Tt("className", {
                    parser: function(t, e, i, s, o, a, l) {
                        var u, c, h, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new vt(t, i, 0, 0, o, 2), o.setRatio = Yt, o.pr = -11, n = !0, o.b = d, c = et(t, r), h = t._gsClassPT) {
                            for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = nt(t, c, et(t), l, f), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var Ut = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, n, i, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? At : l[n].p), Wt(o, n);
                        r && (Wt(o, kt), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Tt("clearProps", {
                        parser: function(t, e, i, r, s) {
                            return s = new vt(t, i, 0, 0, s, 2), s.setRatio = Ut, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), bt = u.length; bt--;) Pt(u[bt]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, u) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = a, this._vars = e, _ = u, c = e.autoRound, n = !1, i = e.suffixMap || o.suffixMap, r = Z(t, ""), s = this._overwriteProps;
                    var p, m, v, y, x, b, w, T, S, C = t.style;
                    if (h && "" === C.zIndex && (p = J(t, "zIndex", r), ("auto" === p || "" === p) && this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (y = C.cssText, p = et(t, r), C.cssText = y + ";" + e, p = nt(t, p, et(t)).difs, !W && P.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, C.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (S = 3 === this._transformType, kt ? f && (h = !0, "" === C.zIndex && (w = J(t, "zIndex", r), ("auto" === w || "" === w) && this._addLazySet(C, "zIndex", 0)), d && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : C.zoom = 1, v = m; v && v._next;) v = v._next;
                        T = new vt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = kt ? Xt : Bt, T.data = this._transform || Ht(t, r, !0), T.tween = a, T.pr = -1, s.pop()
                    }
                    if (n) {
                        for (; m;) {
                            for (b = m._next, v = y; v && v.pr > m.pr;) v = v._next;
                            (m._prev = v ? v._prev : x) ? m._prev._next = m: y = m, (m._next = v) ? v._prev = m : x = m, m = b
                        }
                        this._firstPT = y
                    }
                    return !0
                }, u.parse = function(t, e, n, s) {
                    var o, a, u, h, f, p, d, m, v, y, x = t.style;
                    for (o in e) p = e[o], "function" == typeof p && (p = p(_, g)), a = l[o], a ? n = a.parse(t, p, o, this, n, s, e) : (f = J(t, o, r) + "", v = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && C.test(p) ? (v || (p = ft(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = xt(x, o, f, p, !0, "transparent", n, 0, s)) : v && L.test(p) ? n = xt(x, o, f, p, !0, null, n, 0, s) : (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (u = st(t, o, r), d = "px") : "left" === o || "top" === o ? (u = tt(t, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), y = v && "=" === p.charAt(1), y ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(w, "")) : (h = parseFloat(p), m = v ? p.replace(w, "") : ""), "" === m && (m = o in i ? i[o] : d), p = h || 0 === h ? (y ? h + u : h) + m : e[o], d !== m && "" !== m && (h || 0 === h) && u && (u = K(t, o, u, d), "%" === m ? (u /= K(t, o, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= K(t, o, 1, m) : "px" !== m && (h = K(t, o, h, m), m = "px"), y && (h || 0 === h) && (p = h + u + m)), y && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== x[o] && (p || p + "" != "NaN" && null != p) ? (n = new vt(x, o, h || u || 0, 0, n, (-1), o, (!1), 0, f, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : U("invalid " + o + " tween value: " + e[o]) : (n = new vt(x, o, u, h - u, n, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, f, p), n.xs0 = m))), s && n && !n.plugin && (n.plugin = s);
                    return n
                }, u.setRatio = function(t) {
                    var e, n, i, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3
                };
                var Vt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, n) {
                    var i = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
                    i.e = n, i.setRatio = Vt, i.data = this
                }, u._linkCSSP = function(t, e, n, i) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
                }, u._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, u._kill = function(e) {
                    var n, i, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (i in e) s[i] = e[i];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    for (e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(e), i = n.plugin), n = n._next;
                    return t.prototype._kill.call(this, s)
                };
                var Gt = function(t, e, n) {
                    var i, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Gt(t[r], e, n);
                    else
                        for (i = t.childNodes, r = i.length; --r > -1;) s = i[r], o = s.type, s.style && (e.push(et(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Gt(s, e, n)
                };
                return o.cascadeTo = function(t, n, i) {
                    var r, s, o, a, l = e.to(t, n, i),
                        u = [l],
                        c = [],
                        h = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Gt(t, c, f), l.render(n, !0, !0), Gt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (s = nt(f[r], c[r], h[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in i) p[o] && (s[o] = i[o]);
                            a = {};
                            for (o in s) a[o] = c[r][o];
                            u.push(e.fromTo(f[r], n, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, n) {
                            return this._tween = n, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    n = t.prototype;
                n._onInitAllProps = function() {
                    for (var t, n, i, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], n = r._firstPT; n;) i = n._next, n.pg ? n.t._mod(a) : n.n === t && (2 === n.f && n.t ? e(n.t._firstPT) : (this._add(n.t, t, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : r._firstPT === n && (r._firstPT = i), n._next = n._prev = null, r._propLookup[t] = l)), n = i;
                    return !1
                }, n._add = function(t, e, n, i) {
                    this._addTween(t, e, n, n + i, e, Math.round), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.0",
                    init: function(t, e, n, i) {
                        var r, s;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (r in e) s = e[r], "function" == typeof s && (s = s(i, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function(t, e, n, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, s, o, a, l, u, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(i, t)), u = (a + "").split("_"), s = u[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, u.length && (s = u.join("_"), -1 !== s.indexOf("short") && (l %= c, l !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > h || -h > l) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, n, i, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, n) {
                        var i = l("easing." + e, function() {}, !0),
                            r = i.prototype = new t;
                        return r.constructor = i, r.getRatio = n, i
                    },
                    c = t.register || function() {},
                    h = function(t, e, n, i, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new n,
                            easeInOut: new i
                        }, !0);
                        return c(s, t), s
                    },
                    f = function(t, e, n) {
                        this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
                    },
                    p = function(e, n) {
                        var i = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = i.prototype = new t;
                        return r.constructor = i, r.getRatio = n, r.config = function(t) {
                            return new i(t)
                        }, i
                    },
                    d = h("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, n) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, n) {
                    return new m(t, e, n)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, n = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var n, i, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) n = d ? Math.random() : 1 / h * p, i = g ? g.getRatio(n) : n, "none" === l ? r = _ : "out" === l ? (s = 1 - n, r = s * s * _) : "in" === l ? r = n * n * _ : .5 > n ? (s = 2 * n, r = s * s * .5 * _) : (s = 2 * (1 - n), r = s * s * .5 * _), d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), u[c++] = {
                        x: n,
                        y: i
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), p = h; --p > -1;) o = u[p], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = n.prototype = new t, g.constructor = n, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new n(t)
                }, n.ease = new n, h("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), i = function(e, n, i) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = n, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", i("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), i("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), i("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var n = {},
            i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var r, s, o, a, l, u = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                c = u("com.greensock"),
                h = 1e-10,
                f = function(t) {
                    var e, n = [],
                        i = t.length;
                    for (e = 0; e !== i; n.push(t[e++]));
                    return n
                },
                p = function() {},
                d = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(n) {
                        return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
                    }
                }(),
                m = {},
                g = function(r, s, o, a) {
                    this.sc = m[r] ? m[r].sc : [], m[r] = this, this.gsClass = null, this.func = o;
                    var l = [];
                    this.check = function(c) {
                        for (var h, f, p, d, _, v = s.length, y = v; --v > -1;)(h = m[s[v]] || new g(s[v], [])).gsClass ? (l[v] = h.gsClass, y--) : c && h.sc.push(this);
                        if (0 === y && o) {
                            if (f = ("com.greensock." + r).split("."), p = f.pop(), d = u(f.join("."))[p] = this.gsClass = o.apply(o, l), a)
                                if (i[p] = n[p] = d, _ = "undefined" != typeof module && module.exports, !_ && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return d
                                });
                                else if (_)
                                if (r === e) {
                                    module.exports = n[e] = d;
                                    for (v in n) d[v] = n[v]
                                } else n[e] && (n[e][p] = d);
                            for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                        }
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, n, i) {
                    return new g(t, e, n, i)
                },
                v = c._class = function(t, e, n) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, n), e
                };
            _.globals = i;
            var y = [0, 0, 1, 1],
                x = v("easing.Ease", function(t, e, n, i) {
                    this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? y.concat(e) : y
                }, !0),
                b = x.map = {},
                w = x.register = function(t, e, n, i) {
                    for (var r, s, o, a, l = e.split(","), u = l.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (s = l[u], r = i ? v("easing." + s, null, !0) : c.easing[s] || {}, o = h.length; --o > -1;) a = h[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        n = this._power,
                        i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;) o = r[s] + ",Power" + s, w(new x(null, null, 1, s), o, "easeOut", !0), w(new x(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), w(new x(null, null, 3, s), o, "easeInOut");
            b.linear = c.easing.Linear.easeIn, b.swing = c.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, n, i, r) {
                r = r || 0;
                var s, o, u = this._listeners[t],
                    c = 0;
                for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = []), o = u.length; --o > -1;) s = u[o], s.c === e && s.s === n ? u.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
                u.splice(c, 0, {
                    c: e,
                    s: n,
                    up: i,
                    pr: r
                })
            }, o.removeEventListener = function(t, e) {
                var n, i = this._listeners[t];
                if (i)
                    for (n = i.length; --n > -1;)
                        if (i[n].c === e) return void i.splice(n, 1)
            }, o.dispatchEvent = function(t) {
                var e, n, i, r = this._listeners[t];
                if (r)
                    for (e = r.length, e > 1 && (r = r.slice(0)), n = this._eventTarget; --e > -1;) i = r[e], i && (i.up ? i.c.call(i.s || n, {
                        type: t,
                        target: n
                    }) : i.c.call(i.s || n))
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                k = C();
            for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !P;) P = t[r[s] + "RequestAnimationFrame"], S = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var n, i, r, s, o, u = this,
                    c = C(),
                    f = !(e === !1 || !P) && "auto",
                    d = 500,
                    m = 33,
                    g = "tick",
                    _ = function(t) {
                        var e, a, l = C() - k;
                        l > d && (c += l - m), k += l, u.time = (k - c) / 1e3, e = u.time - o, (!n || e > 0 || t === !0) && (u.frame++, o += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = i(_)), a && u.dispatchEvent(g)
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    _(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / h, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (f && S ? S(r) : clearTimeout(r), i = p, r = null, u === a && (l = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -k + (k = C()) : u.frame > 10 && (k = C() - d + 5), i = 0 === n ? p : f && P ? P : function(t) {
                        return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
                    }, u === a && (l = !0), _(2)
                }, u.fps = function(t) {
                    return arguments.length ? (n = t, s = 1 / (n || 60), o = this.time + s, void u.wake()) : n
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(n)) : f
                }, u.fps(t), setTimeout(function() {
                    "auto" === f && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
                }, 1500)
            }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
            var O = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    l || a.wake();
                    var n = this.vars.useFrames ? Y : U;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new c.Ticker, o = O.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var A = function() {
                l && C() - k > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, n) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    n = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
            }, o._enabled = function(t, e) {
                return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
                return n
            }, o._callback = function(t) {
                var e = this.vars,
                    n = e[t],
                    i = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this,
                    s = i ? i.length : 0;
                switch (s) {
                    case 0:
                        n.call(r);
                        break;
                    case 1:
                        n.call(r, i[0]);
                        break;
                    case 2:
                        n.call(r, i[0], i[1]);
                        break;
                    default:
                        n.apply(r, i)
                }
            }, o.eventCallback = function(t, e, n, i) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, n) {
                if (l || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var i = this._totalDuration,
                            r = this._timeline;
                        if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (M.length && G(), this.render(t, e, !1), M.length && G())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var n = this.duration();
                return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        n = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = n - (n - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, n, i = this._timeline;
                return t != this._paused && i && (l || t || a.wake(), e = i.rawTime(), n = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var R = v("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = R.prototype = new O, o.constructor = R, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, n, i) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, n) {
                var i, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
            }, o.rawTime = function() {
                return l || a.wake(), this._totalTime
            };
            var E = v("TweenLite", function(e, n, i) {
                    if (O.call(this, n, i), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                        for (this._targets = o = f(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(f(s))) : (this._siblings[r] = Q(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = o[r--] = E.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
                }, !0),
                D = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                N = function(t, e) {
                    var n, i = {};
                    for (n in t) $[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!H[n] || H[n] && H[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                    t.css = i
                };
            o = E.prototype = new O, o.constructor = E, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, E.version = "1.19.0", E.defaultEase = o._ease = new x(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = a, E.autoSleep = 120, E.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, E.selector = t.$ || t.jQuery || function(e) {
                var n = t.$ || t.jQuery;
                return n ? (E.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [],
                L = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                j = function(t) {
                    for (var e, n = this._firstPT, i = 1e-6; n;) e = n.blob ? t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m(e, this._target || n.t) : i > e && e > -i && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                },
                I = function(t, e, n, i) {
                    var r, s, o, a, l, u, c, h = [t, e],
                        f = 0,
                        p = "",
                        d = 0;
                    for (h.start = t, n && (n(h), t = h[0], e = h[1]), h.length = 0, r = t.match(F) || [], s = e.match(F) || [], i && (i._next = null, i.blob = 1, h._firstPT = h._applyPT = i), l = s.length, a = 0; l > a; a++) c = s[a], u = e.substr(f, e.indexOf(c, f) - f), p += u || !a ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? p += c : (p && (h.push(p), p = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: d && 4 > d ? Math.round : 0
                    }), f += c.length;
                    return p += e.substr(f), p && h.push(p), h.setRatio = j, h
                },
                z = function(t, e, n, i, r, s, o, a, l) {
                    "function" == typeof i && (i = i(l || 0, t));
                    var u, c, h = "get" === n ? t[e] : n,
                        f = typeof t[e],
                        p = "string" == typeof i && "=" === i.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === f,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - h || 0
                        };
                    return "number" !== f && ("function" === f && "get" === n && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), d.s = h = o ? t[c](o) : t[c]()), "string" == typeof h && (o || isNaN(h)) ? (d.fp = o, u = I(h, i, a || E.defaultStringFilter, d), d = {
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : p || (d.s = parseFloat(h), d.c = parseFloat(i) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                q = E._internals = {
                    isArray: d,
                    isSelector: D,
                    lazyTweens: M,
                    blobDif: I
                },
                H = E._plugins = {},
                B = q.tweenLookup = {},
                X = 0,
                $ = q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Y = O._rootFramesTimeline = new R,
                U = O._rootTimeline = new R,
                V = 30,
                G = q.lazyRender = function() {
                    var t, e = M.length;
                    for (L = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            U._startTime = a.time, Y._startTime = a.frame, U._active = Y._active = !0, setTimeout(G, 1), O._updateRoot = E.render = function() {
                var t, e, n;
                if (M.length && G(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), Y.render((a.frame - Y._startTime) * Y._timeScale, !1, !1), M.length && G(), a.frame >= V) {
                    V = a.frame + (parseInt(E.autoSleep, 10) || 120);
                    for (n in B) {
                        for (e = B[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[n]
                    }
                    if (n = U._first, (!n || n._paused) && E.autoSleep && !Y._first && 1 === a._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var Q = function(t, e, n) {
                    var i, r, s = t._gsTweenID;
                    if (B[s || (t._gsTweenID = s = "t" + X++)] || (B[s] = {
                            target: t,
                            tweens: []
                        }), e && (i = B[s].tweens, i[r = i.length] = e, n))
                        for (; --r > -1;) i[r] === e && i.splice(r, 1);
                    return B[s].tweens
                },
                Z = function(t, e, n, i) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, n, i)), o = E.onOverwrite, o && (s = o(t, e, n, i)), r !== !1 && s !== !1
                },
                J = function(t, e, n, i, r) {
                    var s, o, a, l;
                    if (1 === i || i >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === i) break;
                        return o
                    }
                    var u, c = e._startTime + h,
                        f = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(a, u, d) && (f[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (f[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = f[s], 2 === i && a._kill(n, t, e) && (o = !0), 2 !== i || !a._firstPT && a._initted) {
                            if (2 !== i && !Z(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                K = function(t, e, n) {
                    for (var i = t._timeline, r = i._timeScale, s = t._startTime; i._timeline;) {
                        if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
                        i = i._timeline
                    }
                    return s /= r, s > e ? s - e : n && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
                };
            o._init = function() {
                var t, e, n, i, r, s, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    u = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (i in o.startAt) r[i] = o.startAt[i];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), u)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (u = !1), n = {};
                        for (i in o) $[i] && "autoCSS" !== i || (n[i] = o[i]);
                        if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && o.lazy !== !1, n.immediateRender = u, this._startAt = E.to(this.target, 0, n), u) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || E.defaultEase : E.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && E._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, n, i, r, s) {
                var o, a, l, u, c, h;
                if (null == e) return !1;
                L[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && N(this.vars, e);
                for (o in this.vars)
                    if (h = this.vars[o], $[o]) h && (h instanceof Array || h.push && d(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (H[o] && (u = new H[o])._onInitTween(e, this.vars[o], this, s)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: u._priority,
                            m: 0
                        }, a = u._overwriteProps.length; --a > -1;) n[u._overwriteProps[a]] = this._firstPT;
                    (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else n[o] = z.call(this, e, o, "get", h, o, 0, null, this.vars.stringFilter, s);
                return r && this._kill(r, e) ? this._initProps(e, n, i, r, s) : this._overwrite > 1 && this._firstPT && i.length > 1 && J(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), l)
            }, o.render = function(t, e, n) {
                var i, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === h && "isPause" !== this.data) && u !== t && (n = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== h || "isPause" !== this.data) && (n = !0), this._rawPrevTime = o = !e || t || u === t ? t : h)), this._initted || (n = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === f ? this.ratio = 1 - c : 2 === f ? this.ratio = c : .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || n) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void(this._lazy = [t, e]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== a || i || n) && this._callback("onUpdate")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, n) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var i, r, s, o, a, l, u, c, h, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                if ((d(e) || D(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i], n) && (l = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), n && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !Z(this, n, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
            }, o._enabled = function(t, e) {
                if (l || a.wake(), t && this._gc) {
                    var n, i = this._targets;
                    if (i)
                        for (n = i.length; --n > -1;) this._siblings[n] = Q(i[n], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, E.to = function(t, e, n) {
                return new E(t, e, n)
            }, E.from = function(t, e, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new E(t, e, n)
            }, E.fromTo = function(t, e, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new E(t, e, i)
            }, E.delayedCall = function(t, e, n, i, r) {
                return new E(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, E.set = function(t, e) {
                return new E(t, 0, e)
            }, E.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : E.selector(t) || t;
                var n, i, r, s;
                if ((d(t) || D(t)) && "number" != typeof t[0]) {
                    for (n = t.length, i = []; --n > -1;) i = i.concat(E.getTweensOf(t[n], e));
                    for (n = i.length; --n > -1;)
                        for (s = i[n], r = n; --r > -1;) s === i[r] && i.splice(n, 1)
                } else
                    for (i = Q(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                return i
            }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, n) {
                "object" == typeof e && (n = e, e = !1);
                for (var i = E.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
            };
            var tt = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (o = tt.prototype, tt.version = "1.19.0", tt.API = 2, o._firstPT = null, o._addTween = z, o.setRatio = j, o._kill = function(t) {
                    var e, n = this._overwriteProps,
                        i = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
                    for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, o._mod = o._roundProps = function(t) {
                    for (var e, n = this._firstPT; n;) e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
                }, E._onPluginEvent = function(t, e) {
                    var n, i, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                            (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
                    return n
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, n = t.propName,
                        i = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            tt.call(this, n, i), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new tt(n);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, r = t._gsQueue) {
                for (s = 0; s < r.length; s++) r[s]();
                for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), ! function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function() {
        "use strict";
        var t = function() {};
        t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(i) {
            var s, o, a = "ScrollMagic.Controller",
                l = "FORWARD",
                u = "REVERSE",
                c = "PAUSED",
                h = n.defaults,
                f = this,
                p = r.extend({}, h, i),
                d = [],
                m = !1,
                g = 0,
                _ = c,
                v = !0,
                y = 0,
                x = !0,
                b = function() {
                    for (var t in p) h.hasOwnProperty(t) || delete p[t];
                    if (p.container = r.get.elements(p.container)[0], !p.container) throw a + " init failed.";
                    v = p.container === window || p.container === document.body || !document.body.contains(p.container), v && (p.container = window), y = P(), p.container.addEventListener("resize", O), p.container.addEventListener("scroll", O), p.refreshInterval = parseInt(p.refreshInterval) || h.refreshInterval, w()
                },
                w = function() {
                    p.refreshInterval > 0 && (o = window.setTimeout(A, p.refreshInterval))
                },
                T = function() {
                    return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
                },
                P = function() {
                    return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
                },
                S = this._setScrollPos = function(t) {
                    p.vertical ? v ? window.scrollTo(r.get.scrollLeft(), t) : p.container.scrollTop = t : v ? window.scrollTo(t, r.get.scrollTop()) : p.container.scrollLeft = t
                },
                C = function() {
                    if (x && m) {
                        var t = r.type.Array(m) ? m : d.slice(0);
                        m = !1;
                        var e = g;
                        g = f.scrollPos();
                        var n = g - e;
                        0 !== n && (_ = n > 0 ? l : u), _ === u && t.reverse(), t.forEach(function(t) {
                            t.update(!0)
                        })
                    }
                },
                k = function() {
                    s = r.rAF(C)
                },
                O = function(t) {
                    "resize" == t.type && (y = P(), _ = c), m !== !0 && (m = !0, k())
                },
                A = function() {
                    if (!v && y != P()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        p.container.dispatchEvent(t)
                    }
                    d.forEach(function(t) {
                        t.refresh()
                    }), w()
                };
            this._options = p;
            var R = function(t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function(e) {
                if (r.type.Array(e)) e.forEach(function(t) {
                    f.addScene(t)
                });
                else if (e instanceof t.Scene)
                    if (e.controller() !== f) e.addTo(f);
                    else if (d.indexOf(e) < 0) {
                    d.push(e), d = R(d), e.on("shift.controller_sort", function() {
                        d = R(d)
                    });
                    for (var n in p.globalSceneOptions) e[n] && e[n].call(e, p.globalSceneOptions[n])
                }
                return f
            }, this.removeScene = function(t) {
                if (r.type.Array(t)) t.forEach(function(t) {
                    f.removeScene(t)
                });
                else {
                    var e = d.indexOf(t);
                    e > -1 && (t.off("shift.controller_sort"), d.splice(e, 1), t.remove())
                }
                return f
            }, this.updateScene = function(e, n) {
                return r.type.Array(e) ? e.forEach(function(t) {
                    f.updateScene(t, n)
                }) : n ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = R(m), k()), f
            }, this.update = function(t) {
                return O({
                    type: "resize"
                }), t && C(), f
            }, this.scrollTo = function(n, i) {
                if (r.type.Number(n)) S.call(p.container, n, i);
                else if (n instanceof t.Scene) n.controller() === f && f.scrollTo(n.scrollOffset(), i);
                else if (r.type.Function(n)) S = n;
                else {
                    var s = r.get.elements(n)[0];
                    if (s) {
                        for (; s.parentNode.hasAttribute(e);) s = s.parentNode;
                        var o = p.vertical ? "top" : "left",
                            a = r.get.offset(p.container),
                            l = r.get.offset(s);
                        v || (a[o] -= f.scrollPos()), f.scrollTo(l[o] - a[o], i)
                    }
                }
                return f
            }, this.scrollPos = function(t) {
                return arguments.length ? (r.type.Function(t) && (T = t), f) : T.call(f)
            }, this.info = function(t) {
                var e = {
                    size: y,
                    vertical: p.vertical,
                    scrollPos: g,
                    scrollDirection: _,
                    container: p.container,
                    isDocument: v
                };
                return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
            }, this.loglevel = function() {
                return f
            }, this.enabled = function(t) {
                return arguments.length ? (x != t && (x = !!t, f.updateScene(d, !0)), f) : x
            }, this.destroy = function(t) {
                window.clearTimeout(o);
                for (var e = d.length; e--;) d[e].destroy(t);
                return p.container.removeEventListener("resize", O), p.container.removeEventListener("scroll", O), r.cAF(s), null
            }, b(), f
        };
        var n = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, e) {
            n.defaults[t] = e
        }, t.Controller.extend = function(e) {
            var n = this;
            t.Controller = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Controller, n), t.Controller.prototype = n.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(n) {
            var s, o, a = "BEFORE",
                l = "DURING",
                u = "AFTER",
                c = i.defaults,
                h = this,
                f = r.extend({}, c, n),
                p = a,
                d = 0,
                m = {
                    start: 0,
                    end: 0
                },
                g = 0,
                _ = !0,
                v = function() {
                    for (var t in f) c.hasOwnProperty(t) || delete f[t];
                    for (var e in c) k(e);
                    S()
                },
                y = {};
            this.on = function(t, e) {
                return r.type.Function(e) && (t = t.trim().split(" "), t.forEach(function(t) {
                    var n = t.split("."),
                        i = n[0],
                        r = n[1];
                    "*" != i && (y[i] || (y[i] = []), y[i].push({
                        namespace: r || "",
                        callback: e
                    }))
                })), h
            }, this.off = function(t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function(t) {
                    var n = t.split("."),
                        i = n[0],
                        r = n[1] || "",
                        s = "*" === i ? Object.keys(y) : [i];
                    s.forEach(function(t) {
                        for (var n = y[t] || [], i = n.length; i--;) {
                            var s = n[i];
                            !s || r !== s.namespace && "*" !== r || e && e != s.callback || n.splice(i, 1)
                        }
                        n.length || delete y[t]
                    })
                }), h) : h
            }, this.trigger = function(e, n) {
                if (e) {
                    var i = e.trim().split("."),
                        r = i[0],
                        s = i[1],
                        o = y[r];
                    o && o.forEach(function(e) {
                        s && s !== e.namespace || e.callback.call(h, new t.Event(r, e.namespace, h, n))
                    })
                }
                return h
            }, h.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? w() : "reverse" === t.what && h.update())
            }).on("shift.internal", function() {
                x(), h.update()
            }), this.addTo = function(e) {
                return e instanceof t.Controller && o != e && (o && o.removeScene(h), o = e, S(), b(!0), w(!0), x(), o.info("container").addEventListener("resize", T), e.addScene(h), h.trigger("add", {
                    controller: o
                }), h.update()), h
            }, this.enabled = function(t) {
                return arguments.length ? (_ != t && (_ = !!t, h.update(!0)), h) : _
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", T);
                    var t = o;
                    o = void 0, t.removeScene(h), h.trigger("remove")
                }
                return h
            }, this.destroy = function(t) {
                return h.trigger("destroy", {
                    reset: t
                }), h.remove(), h.off("*.*"), null
            }, this.update = function(t) {
                if (o)
                    if (t)
                        if (o.enabled() && _) {
                            var e, n = o.info("scrollPos");
                            e = f.duration > 0 ? (n - m.start) / (m.end - m.start) : n >= m.start ? 1 : 0, h.trigger("update", {
                                startPos: m.start,
                                endPos: m.end,
                                scrollPos: n
                            }), h.progress(e)
                        } else O && p === l && R(!0);
                else o.updateScene(h, !1);
                return h
            }, this.refresh = function() {
                return b(), w(), h
            }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        n = p,
                        i = o ? o.info("scrollDirection") : "PAUSED",
                        r = f.reverse || t >= d;
                    if (0 === f.duration ? (e = d != t, d = 1 > t && r ? 0 : 1, p = 0 === d ? a : l) : 0 > t && p !== a && r ? (d = 0, p = a, e = !0) : t >= 0 && 1 > t && r ? (d = t, p = l, e = !0) : t >= 1 && p !== u ? (d = 1, p = u, e = !0) : p !== l || r || R(), e) {
                        var s = {
                                progress: d,
                                state: p,
                                scrollDirection: i
                            },
                            c = p != n,
                            m = function(t) {
                                h.trigger(t, s)
                            };
                        c && n !== l && (m("enter"), m(n === a ? "start" : "end")), m("progress"), c && p !== l && (m(p === a ? "start" : "end"), m("leave"))
                    }
                    return h
                }
                return d
            };
            var x = function() {
                    m = {
                        start: g + f.offset
                    }, o && f.triggerElement && (m.start -= o.info("size") * f.triggerHook), m.end = m.start + f.duration
                },
                b = function(t) {
                    if (s) {
                        var e = "duration";
                        C(e, s.call(h)) && !t && (h.trigger("change", {
                            what: e,
                            newval: f[e]
                        }), h.trigger("shift", {
                            reason: e
                        }))
                    }
                },
                w = function(t) {
                    var n = 0,
                        i = f.triggerElement;
                    if (o && i) {
                        for (var s = o.info(), a = r.get.offset(s.container), l = s.vertical ? "top" : "left"; i.parentNode.hasAttribute(e);) i = i.parentNode;
                        var u = r.get.offset(i);
                        s.isDocument || (a[l] -= o.scrollPos()), n = u[l] - a[l]
                    }
                    var c = n != g;
                    g = n, c && !t && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                T = function() {
                    f.triggerHook > 0 && h.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                P = r.extend(i.validate, {
                    duration: function(t) {
                        if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (r.type.Function(t)) {
                            s = t;
                            try {
                                t = parseFloat(s())
                            } catch (n) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw s ? (s = void 0, 0) : 0;
                        return t
                    }
                }),
                S = function(t) {
                    t = arguments.length ? [t] : Object.keys(P), t.forEach(function(t) {
                        var e;
                        if (P[t]) try {
                            e = P[t](f[t])
                        } catch (n) {
                            e = c[t]
                        } finally {
                            f[t] = e
                        }
                    })
                },
                C = function(t, e) {
                    var n = !1,
                        i = f[t];
                    return f[t] != e && (f[t] = e, S(t), n = i != f[t]), n
                },
                k = function(t) {
                    h[t] || (h[t] = function(e) {
                        return arguments.length ? ("duration" === t && (s = void 0), C(t, e) && (h.trigger("change", {
                            what: t,
                            newval: f[t]
                        }), i.shifts.indexOf(t) > -1 && h.trigger("shift", {
                            reason: t
                        })), h) : f[t]
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return p
            }, this.scrollOffset = function() {
                return m.start
            }, this.triggerPosition = function() {
                var t = f.offset;
                return o && (t += f.triggerElement ? g : o.info("size") * h.triggerHook()), t
            };
            var O, A;
            h.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (p === u && e || p === l && 0 === f.duration) && R(), e && E()
            }).on("progress.internal", function() {
                R()
            }).on("add.internal", function() {
                E()
            }).on("destroy.internal", function(t) {
                h.removePin(t.reset)
            });
            var R = function(t) {
                    if (O && o) {
                        var e = o.info(),
                            n = A.spacer.firstChild;
                        if (t || p !== l) {
                            var i = {
                                    position: A.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                s = r.css(n, "position") != i.position;
                            A.pushFollowers ? f.duration > 0 && (p === u && 0 === parseFloat(r.css(A.spacer, "padding-top")) ? s = !0 : p === a && 0 === parseFloat(r.css(A.spacer, "padding-bottom")) && (s = !0)) : i[e.vertical ? "top" : "left"] = f.duration * d, r.css(n, i), s && E()
                        } else {
                            "fixed" != r.css(n, "position") && (r.css(n, {
                                position: "fixed"
                            }), E());
                            var c = r.get.offset(A.spacer, !0),
                                h = f.reverse || 0 === f.duration ? e.scrollPos - m.start : Math.round(d * f.duration * 10) / 10;
                            c[e.vertical ? "top" : "left"] += h, r.css(A.spacer.firstChild, {
                                top: c.top,
                                left: c.left
                            })
                        }
                    }
                },
                E = function() {
                    if (O && o && A.inFlow) {
                        var t = p === l,
                            e = o.info("vertical"),
                            n = A.spacer.firstChild,
                            i = r.isMarginCollapseType(r.css(A.spacer, "display")),
                            s = {};
                        A.relSize.width || A.relSize.autoFullWidth ? t ? r.css(O, {
                            width: r.get.width(A.spacer)
                        }) : r.css(O, {
                            width: "100%"
                        }) : (s["min-width"] = r.get.width(e ? O : n, !0, !0), s.width = t ? s["min-width"] : "auto"), A.relSize.height ? t ? r.css(O, {
                            height: r.get.height(A.spacer) - (A.pushFollowers ? f.duration : 0)
                        }) : r.css(O, {
                            height: "100%"
                        }) : (s["min-height"] = r.get.height(e ? n : O, !0, !i), s.height = t ? s["min-height"] : "auto"), A.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = f.duration * d, s["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - d)), r.css(A.spacer, s)
                    }
                },
                D = function() {
                    o && O && p === l && !o.info("isDocument") && R()
                },
                N = function() {
                    o && O && p === l && ((A.relSize.width || A.relSize.autoFullWidth) && r.get.width(window) != r.get.width(A.spacer.parentNode) || A.relSize.height && r.get.height(window) != r.get.height(A.spacer.parentNode)) && E()
                },
                M = function(t) {
                    o && O && p === l && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
            this.setPin = function(t, n) {
                var i = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (n = r.extend({}, i, n), t = r.get.elements(t)[0], !t) return h;
                if ("fixed" === r.css(t, "position")) return h;
                if (O) {
                    if (O === t) return h;
                    h.removePin()
                }
                O = t;
                var s = O.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                O.parentNode.style.display = "none";
                var a = "absolute" != r.css(O, "position"),
                    l = r.css(O, o.concat(["display"])),
                    u = r.css(O, ["width", "height"]);
                O.parentNode.style.display = s, !a && n.pushFollowers && (n.pushFollowers = !1);
                var c = O.parentNode.insertBefore(document.createElement("div"), O),
                    f = r.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || r.extend(f, r.css(O, ["width", "height"])), r.css(c, f), c.setAttribute(e, ""), r.addClass(c, n.spacerClass), A = {
                        spacer: c,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                        },
                        pushFollowers: n.pushFollowers,
                        inFlow: a
                    }, !O.___origStyle) {
                    O.___origStyle = {};
                    var p = O.style,
                        d = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    d.forEach(function(t) {
                        O.___origStyle[t] = p[t] || ""
                    })
                }
                return A.relSize.width && r.css(c, {
                    width: u.width
                }), A.relSize.height && r.css(c, {
                    height: u.height
                }), c.appendChild(O), r.css(O, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (A.relSize.width || A.relSize.autoFullWidth) && r.css(O, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", D), window.addEventListener("resize", D), window.addEventListener("resize", N), O.addEventListener("mousewheel", M), O.addEventListener("DOMMouseScroll", M), R(), h
            }, this.removePin = function(t) {
                if (O) {
                    if (p === l && R(!0), t || !o) {
                        var n = A.spacer.firstChild;
                        if (n.hasAttribute(e)) {
                            var i = A.spacer.style,
                                s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, s.forEach(function(t) {
                                margins[t] = i[t] || ""
                            }), r.css(n, margins)
                        }
                        A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), O.parentNode.hasAttribute(e) || (r.css(O, O.___origStyle), delete O.___origStyle)
                    }
                    window.removeEventListener("scroll", D), window.removeEventListener("resize", D), window.removeEventListener("resize", N), O.removeEventListener("mousewheel", M), O.removeEventListener("DOMMouseScroll", M), O = void 0
                }
                return h
            };
            var L, F = [];
            return h.on("destroy.internal", function(t) {
                h.removeClassToggle(t.reset)
            }), this.setClassToggle = function(t, e) {
                var n = r.get.elements(t);
                return 0 !== n.length && r.type.String(e) ? (F.length > 0 && h.removeClassToggle(), L = e, F = n, h.on("enter.internal_class leave.internal_class", function(t) {
                    var e = "enter" === t.type ? r.addClass : r.removeClass;
                    F.forEach(function(t) {
                        e(t, L)
                    })
                }), h) : h
            }, this.removeClassToggle = function(t) {
                return t && F.forEach(function(t) {
                    r.removeClass(t, L)
                }), h.off("start.internal_class end.internal_class"), L = void 0, F = [], h
            }, v(), h
        };
        var i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !r.type.Number(t)) throw 0;
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = r.get.elements(t)[0];
                        if (!e) throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, n, r) {
            t in i.defaults || (i.defaults[t] = e, i.validate[t] = n, r && i.shifts.push(t))
        }, t.Scene.extend = function(e) {
            var n = this;
            t.Scene = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Scene, n), t.Scene.prototype = n.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, n, i) {
            i = i || {};
            for (var r in i) this[r] = i[r];
            return this.type = t, this.target = this.currentTarget = n, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = t._util = function(t) {
            var e, n = {},
                i = function(t) {
                    return parseFloat(t) || 0
                },
                r = function(e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                s = function(e, n, s, o) {
                    if (n = n === document ? t : n, n === t) o = !1;
                    else if (!h.DomElement(n)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (s ? n["offset" + e] || n["outer" + e] : n["client" + e] || n["inner" + e]) || 0;
                    if (s && o) {
                        var l = r(n);
                        a += "Height" === e ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight)
                    }
                    return a
                },
                o = function(t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                };
            n.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
                return t
            }, n.isMarginCollapseType = function(t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                u = t.requestAnimationFrame,
                c = t.cancelAnimationFrame;
            for (e = 0; !u && e < l.length; ++e) u = t[l[e] + "RequestAnimationFrame"], c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            u || (u = function(e) {
                var n = (new Date).getTime(),
                    i = Math.max(0, 16 - (n - a)),
                    r = t.setTimeout(function() {
                        e(n + i)
                    }, i);
                return a = n + i, r
            }), c || (c = function(e) {
                t.clearTimeout(e)
            }), n.rAF = u.bind(t), n.cAF = c.bind(t);
            var h = n.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            h.String = function(t) {
                return "string" === h(t)
            }, h.Function = function(t) {
                return "function" === h(t)
            }, h.Array = function(t) {
                return Array.isArray(t)
            }, h.Number = function(t) {
                return !h.Array(t) && t - parseFloat(t) + 1 >= 0
            }, h.DomElement = function(t) {
                return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var f = n.get = {};
            return f.elements = function(e) {
                var n = [];
                if (h.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (i) {
                    return n
                }
                if ("nodelist" === h(e) || h.Array(e))
                    for (var r = 0, s = n.length = e.length; s > r; r++) {
                        var o = e[r];
                        n[r] = h.DomElement(o) ? o : f.elements(o)
                    } else(h.DomElement(e) || e === document || e === t) && (n = [e]);
                return n
            }, f.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, f.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, f.width = function(t, e, n) {
                return s("width", t, e, n)
            }, f.height = function(t, e, n) {
                return s("height", t, e, n)
            }, f.offset = function(t, e) {
                var n = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var i = t.getBoundingClientRect();
                    n.top = i.top, n.left = i.left, e || (n.top += f.scrollTop(), n.left += f.scrollLeft())
                }
                return n
            }, n.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, n.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, n.css = function(t, e) {
                if (h.String(e)) return r(t)[o(e)];
                if (h.Array(e)) {
                    var n = {},
                        i = r(t);
                    return e.forEach(function(t) {
                        n[t] = i[o(t)]
                    }), n
                }
                for (var s in e) {
                    var a = e[s];
                    a == parseFloat(a) && (a += "px"), t.style[o(s)] = a
                }
            }, n
        }(window || {});
        return t
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function(t, e, n) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }), t.Scene.extend(function() {
            var t, i = this;
            i.on("progress.plugin_gsap", function() {
                r()
            }), i.on("destroy.plugin_gsap", function(t) {
                i.removeTween(t.reset)
            });
            var r = function() {
                if (t) {
                    var e = i.progress(),
                        n = i.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === n && t.paused() ? t.play() : "DURING" === n || t.paused() || t.pause() : e != t.progress() && (0 === i.duration() ? e > 0 ? t.play() : t.reverse() : i.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            i.setTween = function(s, o, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = o, o = 1), s = e.to(s, o, a));
                try {
                    l = n ? new n({
                        smoothChildTiming: !0
                    }).add(s) : s, l.pause()
                } catch (u) {
                    return i
                }
                return t && i.removeTween(), t = l, s.repeat && -1 === s.repeat() && (t.repeat(-1), t.yoyo(s.yoyo())), r(), i
            }, i.removeTween = function(e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0), i
            }
        })
    }),
    function() {
        var t = function(t) {
            var e = function(e) {
                function n(t) {
                    return String(t || "").replace(/\W/g, "\\$&")
                }

                function i(t) {
                    if (!t) return "";
                    var e = new RegExp("^" + n(p.prependHash) + "|" + n(p.appendHash) + "$", "g");
                    return t.replace(e, "")
                }

                function r() {
                    var t = w.exec(p.getURL()),
                        e = t && t[1] || "";
                    try {
                        return p.raw ? e : decodeURIComponent(e)
                    } catch (n) {
                        return e
                    }
                }

                function s() {
                    return _ ? _.contentWindow.frameHash : null
                }

                function o() {
                    _ = x.createElement("iframe"), _.src = "about:blank", _.style.display = "none", x.body.appendChild(_)
                }

                function a() {
                    if (_ && d !== s()) {
                        var t = _.contentWindow.document;
                        t.open(), t.write("<html><head><title>" + x.title + '</title><script type="text/javascript">var frameHash="' + d + '";</script></head><body>&nbsp;</body></html>'), t.close()
                    }
                }

                function l(t, e) {
                    if (d !== t) {
                        var n = d;
                        d = t, k && (e ? _.contentWindow.frameHash = t : a()), p.changed.dispatch(i(t), i(n))
                    }
                }

                function u(t, e, n) {
                    t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n)
                }

                function c(t, e, n) {
                    t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
                }

                function h(t) {
                    t = Array.prototype.slice.call(arguments);
                    var e = t.join(p.separator);
                    return e = e ? p.prependHash + e.replace(P, "") + p.appendHash : e
                }

                function f(t) {
                    return t = encodeURI(t), S && O && (t = t.replace(/\?/, "%3F")), t
                }
                var p, d, m, g, _, v, y = 25,
                    x = e.document,
                    b = (e.history, t.Signal),
                    w = /#(.*)$/,
                    T = /(\?.*)|(\#.*)/,
                    P = /^\#/,
                    S = !1,
                    C = "onhashchange" in e && 7 !== x.documentMode,
                    k = S && !C,
                    O = "file:" === location.protocol;
                return v = k ? function() {
                    var t = r(),
                        e = s();
                    e !== d && e !== t ? p.setHash(i(e)) : t !== d && l(t)
                } : function() {
                    var t = r();
                    t !== d && l(t)
                }, p = {
                    VERSION: "1.2.0",
                    raw: !1,
                    appendHash: "",
                    prependHash: "/",
                    separator: "/",
                    changed: new b,
                    stopped: new b,
                    initialized: new b,
                    init: function() {
                        g || (d = r(), C ? u(e, "hashchange", v) : (k && (_ || o(), a()), m = setInterval(v, y)), g = !0, p.initialized.dispatch(i(d)))
                    },
                    stop: function() {
                        g && (C ? c(e, "hashchange", v) : (clearInterval(m), m = null), g = !1, p.stopped.dispatch(i(d)))
                    },
                    isActive: function() {
                        return g
                    },
                    getURL: function() {
                        return e.location.href
                    },
                    getBaseURL: function() {
                        return p.getURL().replace(T, "")
                    },
                    setHash: function(t) {
                        t = h.apply(null, arguments), t !== d && (l(t), t === d && (p.raw || (t = f(t)), e.location.hash = "#" + t))
                    },
                    replaceHash: function(t) {
                        t = h.apply(null, arguments), t !== d && (l(t, !0), t === d && (p.raw || (t = f(t)), e.location.replace("#" + t)))
                    },
                    getHash: function() {
                        return i(d)
                    },
                    getHashAsArray: function() {
                        return p.getHash().split(p.separator)
                    },
                    dispose: function() {
                        p.stop(), p.initialized.dispose(), p.stopped.dispose(), p.changed.dispose(), _ = p = e.hasher = null
                    },
                    toString: function() {
                        return '[hasher version="' + p.VERSION + '" hash="' + p.getHash() + '"]'
                    }
                }, p.initialized.memorize = !0, p
            }(window);
            return e
        };
        "function" == typeof define && define.amd ? define(["signals"], t) : "object" == typeof exports ? module.exports = t(require("signals")) : window.hasher = t(window.signals)
    }(),
    function() {
        var t = function(t) {
            function e(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = t.length; n--;)
                    if (t[n] === e) return n;
                return -1
            }

            function n(t, n) {
                var i = e(t, n);
                i !== -1 && t.splice(i, 1)
            }

            function i(t, e) {
                return "[object " + e + "]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return i(t, "RegExp")
            }

            function s(t) {
                return i(t, "Array")
            }

            function o(t) {
                return "function" == typeof t
            }

            function a(t) {
                var e;
                return e = null === t || "null" === t ? null : "true" === t || "false" !== t && (t === d || "undefined" === t ? d : "" === t || isNaN(t) ? t : parseFloat(t))
            }

            function l(t) {
                for (var e = t.length, n = []; e--;) n[e] = a(t[e]);
                return n
            }

            function u(t, e) {
                for (var n, i, r, o, l = (t || "").replace("?", "").split("&"), u = -1, c = {}; i = l[++u];) n = i.indexOf("="), o = i.substring(0, n), r = decodeURIComponent(i.substring(n + 1)), e !== !1 && (r = a(r)), o in c ? s(c[o]) ? c[o].push(r) : c[o] = [c[o], r] : c[o] = r;
                return c
            }

            function c() {
                this.bypassed = new t.Signal, this.routed = new t.Signal, this._routes = [], this._prevRoutes = [], this._piped = [], this.resetState()
            }

            function h(e, n, i, s) {
                var o = r(e),
                    a = s.patternLexer;
                this._router = s, this._pattern = e, this._paramsIds = o ? null : a.getParamIds(e), this._optionalParamsIds = o ? null : a.getOptionalParamsIds(e), this._matchRegexp = o ? e : a.compilePattern(e, s.ignoreCase), this.matched = new t.Signal, this.switched = new t.Signal, n && this.matched.add(n), this._priority = i || 0
            }
            var f, p, d;
            return p = "" === /t(.+)?/.exec("t")[1], c.prototype = {
                greedy: !1,
                greedyEnabled: !0,
                ignoreCase: !0,
                ignoreState: !1,
                shouldTypecast: !1,
                normalizeFn: null,
                resetState: function() {
                    this._prevRoutes.length = 0, this._prevMatchedRequest = null, this._prevBypassedRequest = null
                },
                create: function() {
                    return new c
                },
                addRoute: function(t, e, n) {
                    var i = new h(t, e, n, this);
                    return this._sortedInsert(i), i
                },
                removeRoute: function(t) {
                    n(this._routes, t), t._destroy()
                },
                removeAllRoutes: function() {
                    for (var t = this.getNumRoutes(); t--;) this._routes[t]._destroy();
                    this._routes.length = 0
                },
                parse: function(t, e) {
                    if (t = t || "", e = e || [], this.ignoreState || t !== this._prevMatchedRequest && t !== this._prevBypassedRequest) {
                        var n, i = this._getMatchedRoutes(t),
                            r = 0,
                            s = i.length;
                        if (s)
                            for (this._prevMatchedRequest = t, this._notifyPrevRoutes(i, t), this._prevRoutes = i; r < s;) n = i[r], n.route.matched.dispatch.apply(n.route.matched, e.concat(n.params)), n.isFirst = !r, this.routed.dispatch.apply(this.routed, e.concat([t, n])), r += 1;
                        else this._prevBypassedRequest = t, this.bypassed.dispatch.apply(this.bypassed, e.concat([t]));
                        this._pipeParse(t, e)
                    }
                },
                _notifyPrevRoutes: function(t, e) {
                    for (var n, i = 0; n = this._prevRoutes[i++];) n.route.switched && this._didSwitch(n.route, t) && n.route.switched.dispatch(e)
                },
                _didSwitch: function(t, e) {
                    for (var n, i = 0; n = e[i++];)
                        if (n.route === t) return !1;
                    return !0
                },
                _pipeParse: function(t, e) {
                    for (var n, i = 0; n = this._piped[i++];) n.parse(t, e)
                },
                getNumRoutes: function() {
                    return this._routes.length
                },
                _sortedInsert: function(t) {
                    var e = this._routes,
                        n = e.length;
                    do --n; while (e[n] && t._priority <= e[n]._priority);
                    e.splice(n + 1, 0, t)
                },
                _getMatchedRoutes: function(t) {
                    for (var e, n = [], i = this._routes, r = i.length;
                        (e = i[--r]) && ((!n.length || this.greedy || e.greedy) && e.match(t) && n.push({
                            route: e,
                            params: e._getParamsArray(t)
                        }), this.greedyEnabled || !n.length););
                    return n
                },
                pipe: function(t) {
                    this._piped.push(t)
                },
                unpipe: function(t) {
                    n(this._piped, t)
                },
                toString: function() {
                    return "[crossroads numRoutes:" + this.getNumRoutes() + "]"
                }
            }, f = new c, f.VERSION = "0.12.2", f.NORM_AS_ARRAY = function(t, e) {
                return [e.vals_]
            }, f.NORM_AS_OBJECT = function(t, e) {
                return [e]
            }, h.prototype = {
                greedy: !1,
                rules: void 0,
                match: function(t) {
                    return t = t || "", this._matchRegexp.test(t) && this._validateParams(t)
                },
                _validateParams: function(t) {
                    var e, n = this.rules,
                        i = this._getParamsObject(t);
                    for (e in n)
                        if ("normalize_" !== e && n.hasOwnProperty(e) && !this._isValidParam(t, e, i)) return !1;
                    return !0
                },
                _isValidParam: function(t, n, i) {
                    var a = this.rules[n],
                        l = i[n],
                        u = !1,
                        c = 0 === n.indexOf("?");
                    return null == l && this._optionalParamsIds && e(this._optionalParamsIds, n) !== -1 ? u = !0 : r(a) ? (c && (l = i[n + "_"]), u = a.test(l)) : s(a) ? (c && (l = i[n + "_"]), u = this._isValidArrayRule(a, l)) : o(a) && (u = a(l, t, i)), u
                },
                _isValidArrayRule: function(t, n) {
                    if (!this._router.ignoreCase) return e(t, n) !== -1;
                    "string" == typeof n && (n = n.toLowerCase());
                    for (var i, r, s = t.length; s--;)
                        if (i = t[s], r = "string" == typeof i ? i.toLowerCase() : i, r === n) return !0;
                    return !1
                },
                _getParamsObject: function(t) {
                    for (var n, i, r = this._router.shouldTypecast, s = this._router.patternLexer.getParamValues(t, this._matchRegexp, r), o = {}, l = s.length; l--;) i = s[l], this._paramsIds && (n = this._paramsIds[l], 0 === n.indexOf("?") && i && (o[n + "_"] = i, i = u(i, r), s[l] = i), p && "" === i && e(this._optionalParamsIds, n) !== -1 && (i = void 0, s[l] = i), o[n] = i), o[l] = i;
                    return o.request_ = r ? a(t) : t, o.vals_ = s, o
                },
                _getParamsArray: function(t) {
                    var e, n = this.rules ? this.rules.normalize_ : null;
                    return n = n || this._router.normalizeFn, e = n && o(n) ? n(t, this._getParamsObject(t)) : this._getParamsObject(t).vals_
                },
                interpolate: function(t) {
                    var e = this._router.patternLexer.interpolate(this._pattern, t);
                    if (!this._validateParams(e)) throw new Error("Generated string doesn't validate against `Route.rules`.");
                    return e
                },
                dispose: function() {
                    this._router.removeRoute(this)
                },
                _destroy: function() {
                    this.matched.dispose(), this.switched.dispose(), this.matched = this.switched = this._pattern = this._matchRegexp = null
                },
                toString: function() {
                    return '[Route pattern:"' + this._pattern + '", numListeners:' + this.matched.getNumListeners() + "]"
                }
            }, c.prototype.patternLexer = function() {
                function t() {
                    var t, e;
                    for (t in d) d.hasOwnProperty(t) && (e = d[t], e.id = "__CR_" + t + "__", e.save = "save" in e ? e.save.replace("{{id}}", e.id) : e.id, e.rRestore = new RegExp(e.id, "g"))
                }

                function e(t, e) {
                    var n, i = [];
                    for (t.lastIndex = 0; n = t.exec(e);) i.push(n[1]);
                    return i
                }

                function n(t) {
                    return e(p, t)
                }

                function i(t) {
                    return e(d.OP.rgx, t)
                }

                function r(t, e) {
                    return t = t || "", t && (v === m ? t = t.replace(h, "") : v === _ && (t = t.replace(f, "")), t = o(t, "rgx", "save"), t = t.replace(c, "\\$&"), t = o(t, "rRestore", "res"), v === m && (t = "\\/?" + t)), v !== g && (t += "\\/?"), new RegExp("^" + t + "$", e ? "i" : "")
                }

                function o(t, e, n) {
                    var i, r;
                    for (r in d) d.hasOwnProperty(r) && (i = d[r], t = t.replace(i[e], i[n]));
                    return t
                }

                function a(t, e, n) {
                    var i = e.exec(t);
                    return i && (i.shift(), n && (i = l(i))), i
                }

                function u(t, e) {
                    if (e = e || {}, "string" != typeof t) throw new Error("Route pattern should be a string.");
                    var n = function(t, n) {
                        var i;
                        if (n = "?" === n.substr(0, 1) ? n.substr(1) : n, null != e[n]) {
                            if ("object" == typeof e[n]) {
                                var r, o = [];
                                for (var a in e[n])
                                    if (r = e[n][a], s(r))
                                        for (var l in r) "[]" == a.slice(-2) ? o.push(encodeURI(a.slice(0, -2)) + "[]=" + encodeURI(r[l])) : o.push(encodeURI(a + "=" + r[l]));
                                    else o.push(encodeURI(a + "=" + r));
                                i = "?" + o.join("&")
                            } else i = String(e[n]);
                            if (t.indexOf("*") === -1 && i.indexOf("/") !== -1) throw new Error('Invalid value "' + i + '" for segment "' + t + '".')
                        } else {
                            if (t.indexOf("{") !== -1) throw new Error("The segment " + t + " is required.");
                            i = ""
                        }
                        return i
                    };
                    return d.OS.trail || (d.OS.trail = new RegExp("(?:" + d.OS.id + ")+$")), t.replace(d.OS.rgx, d.OS.save).replace(p, n).replace(d.OS.trail, "").replace(d.OS.rRestore, "/")
                }
                var c = /[\\.+*?\^$\[\](){}\/'#]/g,
                    h = /^\/|\/$/g,
                    f = /\/$/g,
                    p = /(?:\{|:)([^}:]+)(?:\}|:)/g,
                    d = {
                        OS: {
                            rgx: /([:}]|\w(?=\/))\/?(:|(?:\{\?))/g,
                            save: "$1{{id}}$2",
                            res: "\\/?"
                        },
                        RS: {
                            rgx: /([:}])\/?(\{)/g,
                            save: "$1{{id}}$2",
                            res: "\\/"
                        },
                        RQ: {
                            rgx: /\{\?([^}]+)\}/g,
                            res: "\\?([^#]+)"
                        },
                        OQ: {
                            rgx: /:\?([^:]+):/g,
                            res: "(?:\\?([^#]*))?"
                        },
                        OR: {
                            rgx: /:([^:]+)\*:/g,
                            res: "(.*)?"
                        },
                        RR: {
                            rgx: /\{([^}]+)\*\}/g,
                            res: "(.+)"
                        },
                        RP: {
                            rgx: /\{([^}]+)\}/g,
                            res: "([^\\/?]+)"
                        },
                        OP: {
                            rgx: /:([^:]+):/g,
                            res: "([^\\/?]+)?/?"
                        }
                    },
                    m = 1,
                    g = 2,
                    _ = 3,
                    v = m;
                return t(), {
                    strict: function() {
                        v = g
                    },
                    loose: function() {
                        v = m
                    },
                    legacy: function() {
                        v = _
                    },
                    getParamIds: n,
                    getOptionalParamsIds: i,
                    getParamValues: a,
                    compilePattern: r,
                    interpolate: u
                }
            }(), f
        };
        "function" == typeof define && define.amd ? define(["signals"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("signals")) : window.crossroads = t(window.signals)
    }(),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.anime = e()
    }(this, function() {
        var t, e = {
                duration: 1e3,
                delay: 0,
                loop: !1,
                autoplay: !0,
                direction: "normal",
                easing: "easeOutElastic",
                elasticity: 400,
                round: !1,
                begin: void 0,
                update: void 0,
                complete: void 0
            },
            n = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
            i = {
                arr: function(t) {
                    return Array.isArray(t)
                },
                obj: function(t) {
                    return -1 < Object.prototype.toString.call(t).indexOf("Object")
                },
                svg: function(t) {
                    return t instanceof SVGElement
                },
                dom: function(t) {
                    return t.nodeType || i.svg(t)
                },
                num: function(t) {
                    return !isNaN(parseInt(t))
                },
                str: function(t) {
                    return "string" == typeof t
                },
                fnc: function(t) {
                    return "function" == typeof t
                },
                und: function(t) {
                    return "undefined" == typeof t
                },
                nul: function(t) {
                    return "null" == typeof t
                },
                hex: function(t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                },
                rgb: function(t) {
                    return /^rgb/.test(t)
                },
                hsl: function(t) {
                    return /^hsl/.test(t)
                },
                col: function(t) {
                    return i.hex(t) || i.rgb(t) || i.hsl(t)
                }
            },
            r = function() {
                var t = {},
                    e = {
                        Sine: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Elastic: function(t, e) {
                            if (0 === t || 1 === t) return t;
                            var n = 1 - Math.min(e, 998) / 1e3,
                                i = t / 1 - 1;
                            return -(Math.pow(2, 10 * i) * Math.sin(2 * (i - n / (2 * Math.PI) * Math.asin(1)) * Math.PI / n))
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2)
                        },
                        Bounce: function(t) {
                            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        }
                    };
                return ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(t, n) {
                    e[t] = function(t) {
                        return Math.pow(t, n + 2)
                    }
                }), Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    t["easeIn" + n] = i, t["easeOut" + n] = function(t, e) {
                        return 1 - i(1 - t, e)
                    }, t["easeInOut" + n] = function(t, e) {
                        return .5 > t ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2
                    }, t["easeOutIn" + n] = function(t, e) {
                        return .5 > t ? (1 - i(1 - 2 * t, e)) / 2 : (i(2 * t - 1, e) + 1) / 2
                    }
                }), t.linear = function(t) {
                    return t
                }, t
            }(),
            s = function(t) {
                return i.str(t) ? t : t + ""
            },
            o = function(t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            },
            a = function(t) {
                if (i.col(t)) return !1;
                try {
                    return document.querySelectorAll(t)
                } catch (e) {
                    return !1
                }
            },
            l = function(t) {
                return t.reduce(function(t, e) {
                    return t.concat(i.arr(e) ? l(e) : e)
                }, [])
            },
            u = function(t) {
                return i.arr(t) ? t : (i.str(t) && (t = a(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
            },
            c = function(t, e) {
                return t.some(function(t) {
                    return t === e
                })
            },
            h = function(t, e) {
                var n = {};
                return t.forEach(function(t) {
                    var i = JSON.stringify(e.map(function(e) {
                        return t[e]
                    }));
                    n[i] = n[i] || [], n[i].push(t)
                }), Object.keys(n).map(function(t) {
                    return n[t]
                })
            },
            f = function(t) {
                return t.filter(function(t, e, n) {
                    return n.indexOf(t) === e
                })
            },
            p = function(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            },
            d = function(t, e) {
                for (var n in e) t[n] = i.und(t[n]) ? e[n] : t[n];
                return t
            },
            m = function(t) {
                t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
                    return e + e + n + n + i + i
                });
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                t = parseInt(e[1], 16);
                var n = parseInt(e[2], 16),
                    e = parseInt(e[3], 16);
                return "rgb(" + t + "," + n + "," + e + ")"
            },
            g = function(t) {
                t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);
                var e = parseInt(t[1]) / 360,
                    n = parseInt(t[2]) / 100,
                    i = parseInt(t[3]) / 100;
                if (t = function(t, e, n) {
                        return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : .5 > n ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                    }, 0 == n) n = i = e = i;
                else var r = .5 > i ? i * (1 + n) : i + n - i * n,
                    s = 2 * i - r,
                    n = t(s, r, e + 1 / 3),
                    i = t(s, r, e),
                    e = t(s, r, e - 1 / 3);
                return "rgb(" + 255 * n + "," + 255 * i + "," + 255 * e + ")"
            },
            _ = function(t) {
                return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]
            },
            v = function(t, e, n) {
                return _(e) ? e : -1 < t.indexOf("translate") ? _(n) ? e + _(n) : e + "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? e + "deg" : e
            },
            y = function(t, e) {
                if (e in t.style) return getComputedStyle(t).getPropertyValue(o(e)) || "0"
            },
            x = function(t, e) {
                var n = -1 < e.indexOf("scale") ? 1 : 0,
                    i = t.style.transform;
                if (!i) return n;
                for (var r = /(\w+)\((.+?)\)/g, s = [], o = [], a = []; s = r.exec(i);) o.push(s[1]), a.push(s[2]);
                return i = a.filter(function(t, n) {
                    return o[n] === e
                }), i.length ? i[0] : n
            },
            b = function(t, e) {
                return i.dom(t) && c(n, e) ? "transform" : i.dom(t) && (t.getAttribute(e) || i.svg(t) && t[e]) ? "attribute" : i.dom(t) && "transform" !== e && y(t, e) ? "css" : i.nul(t[e]) || i.und(t[e]) ? void 0 : "object"
            },
            w = function(t, e) {
                switch (b(t, e)) {
                    case "transform":
                        return x(t, e);
                    case "css":
                        return y(t, e);
                    case "attribute":
                        return t.getAttribute(e)
                }
                return t[e] || 0
            },
            T = function(t, e, n) {
                return i.col(e) ? e = i.rgb(e) ? e : i.hex(e) ? m(e) : i.hsl(e) ? g(e) : void 0 : _(e) ? e : (t = _(_(t.to) ? t.to : t.from), !t && n && (t = _(n)), t ? e + t : e)
            },
            P = function(t) {
                var e = /-?\d*\.?\d+/g;
                return {
                    original: t,
                    numbers: s(t).match(e) ? s(t).match(e).map(Number) : [0],
                    strings: s(t).split(e)
                }
            },
            S = function(t, e, n) {
                return e.reduce(function(e, i, r) {
                    return i = i ? i : n[r - 1], e + t[r - 1] + i
                })
            },
            C = function(t) {
                return t = t ? l(i.arr(t) ? t.map(u) : u(t)) : [], t.map(function(t, e) {
                    return {
                        target: t,
                        id: e
                    }
                })
            },
            k = function(t, e, n, i) {
                return "transform" === n ? (n = t + "(" + v(t, e.from, e.to) + ")", e = t + "(" + v(t, e.to) + ")") : (t = "css" === n ? y(i, t) : void 0, n = T(e, e.from, t), e = T(e, e.to, t)), {
                    from: P(n),
                    to: P(e)
                }
            },
            O = function(t, e) {
                var n = [];
                return t.forEach(function(r, s) {
                    var o = r.target;
                    return e.forEach(function(e) {
                        var a = b(o, e.name);
                        if (a) {
                            var l;
                            l = e.name;
                            var c = e.value,
                                c = u(i.fnc(c) ? c(o, s) : c);
                            l = {
                                from: 1 < c.length ? c[0] : w(o, l),
                                to: 1 < c.length ? c[1] : c[0]
                            }, c = p(e), c.animatables = r, c.type = a, c.from = k(e.name, l, c.type, o).from, c.to = k(e.name, l, c.type, o).to, c.round = i.col(l.from) || c.round ? 1 : 0, c.delay = (i.fnc(c.delay) ? c.delay(o, s, t.length) : c.delay) / B.speed, c.duration = (i.fnc(c.duration) ? c.duration(o, s, t.length) : c.duration) / B.speed, n.push(c)
                        }
                    })
                }), n
            },
            A = function(t, e) {
                var n = O(t, e);
                return h(n, ["name", "from", "to", "delay", "duration"]).map(function(t) {
                    var e = p(t[0]);
                    return e.animatables = t.map(function(t) {
                        return t.animatables
                    }), e.totalDuration = e.delay + e.duration, e
                })
            },
            R = function(t, e) {
                t.tweens.forEach(function(n) {
                    var i = n.from,
                        r = t.duration - (n.delay + n.duration);
                    n.from = n.to, n.to = i, e && (n.delay = r)
                }), t.reversed = !t.reversed
            },
            E = function(t) {
                if (t.length) return Math.max.apply(Math, t.map(function(t) {
                    return t.totalDuration
                }))
            },
            D = function(t) {
                var e = [],
                    n = [];
                return t.tweens.forEach(function(t) {
                    "css" !== t.type && "transform" !== t.type || (e.push("css" === t.type ? o(t.name) : "transform"), t.animatables.forEach(function(t) {
                        n.push(t.target)
                    }))
                }), {
                    properties: f(e).join(", "),
                    elements: f(n)
                }
            },
            N = function(t) {
                var e = D(t);
                e.elements.forEach(function(t) {
                    t.style.willChange = e.properties
                })
            },
            M = function(t) {
                D(t).elements.forEach(function(t) {
                    t.style.removeProperty("will-change")
                })
            },
            L = function(t, e) {
                var n = t.path,
                    i = t.value * e,
                    r = function(r) {
                        return r = r || 0, n.getPointAtLength(1 < e ? t.value + r : i + r)
                    },
                    s = r(),
                    o = r(-1),
                    r = r(1);
                switch (t.name) {
                    case "translateX":
                        return s.x;
                    case "translateY":
                        return s.y;
                    case "rotate":
                        return 180 * Math.atan2(r.y - o.y, r.x - o.x) / Math.PI
                }
            },
            F = function(t, e) {
                var n = Math.min(Math.max(e - t.delay, 0), t.duration) / t.duration,
                    i = t.to.numbers.map(function(e, i) {
                        var s = t.from.numbers[i],
                            o = r[t.easing](n, t.elasticity),
                            s = t.path ? L(t, o) : s + o * (e - s);
                        return s = t.round ? Math.round(s * t.round) / t.round : s
                    });
                return S(i, t.to.strings, t.from.strings)
            },
            j = function(e, n) {
                var i;
                e.currentTime = n, e.progress = n / e.duration * 100;
                for (var r = 0; r < e.tweens.length; r++) {
                    var s = e.tweens[r];
                    s.currentValue = F(s, n);
                    for (var o = s.currentValue, a = 0; a < s.animatables.length; a++) {
                        var l = s.animatables[a],
                            u = l.id,
                            l = l.target,
                            c = s.name;
                        switch (s.type) {
                            case "css":
                                l.style[c] = o;
                                break;
                            case "attribute":
                                l.setAttribute(c, o);
                                break;
                            case "object":
                                l[c] = o;
                                break;
                            case "transform":
                                i || (i = {}), i[u] || (i[u] = []), i[u].push(o)
                        }
                    }
                }
                if (i)
                    for (r in t || (t = (y(document.body, "transform") ? "" : "-webkit-") + "transform"), i) e.animatables[r].target.style[t] = i[r].join(" ");
                e.settings.update && e.settings.update(e)
            },
            I = function(t) {
                var n = {};
                n.animatables = C(t.targets), n.settings = d(t, e);
                var r, s = n.settings,
                    o = [];
                for (r in t)
                    if (!e.hasOwnProperty(r) && "targets" !== r) {
                        var a = i.obj(t[r]) ? p(t[r]) : {
                            value: t[r]
                        };
                        a.name = r, o.push(d(a, s))
                    }
                return n.properties = o, n.tweens = A(n.animatables, n.properties), n.duration = E(n.tweens) || t.duration, n.currentTime = 0, n.progress = 0, n.ended = !1, n
            },
            z = [],
            q = 0,
            H = function() {
                var t = function() {
                        q = requestAnimationFrame(e)
                    },
                    e = function(e) {
                        if (z.length) {
                            for (var n = 0; n < z.length; n++) z[n].tick(e);
                            t()
                        } else cancelAnimationFrame(q), q = 0
                    };
                return t
            }(),
            B = function(t) {
                var e = I(t),
                    n = {};
                return e.tick = function(t) {
                    e.ended = !1, n.start || (n.start = t), n.current = Math.min(Math.max(n.last + t - n.start, 0), e.duration), j(e, n.current);
                    var r = e.settings;
                    r.begin && n.current >= r.delay && (r.begin(e), r.begin = void 0), n.current >= e.duration && (r.loop ? (n.start = t, "alternate" === r.direction && R(e, !0), i.num(r.loop) && r.loop--) : (e.ended = !0, e.pause(), r.complete && r.complete(e)), n.last = 0)
                }, e.seek = function(t) {
                    j(e, t / 100 * e.duration)
                }, e.pause = function() {
                    M(e);
                    var t = z.indexOf(e); - 1 < t && z.splice(t, 1)
                }, e.play = function(t) {
                    e.pause(), t && (e = d(I(d(t, e.settings)), e)), n.start = 0, n.last = e.ended ? 0 : e.currentTime, t = e.settings, "reverse" === t.direction && R(e), "alternate" !== t.direction || t.loop || (t.loop = 1), N(e), z.push(e), q || H()
                }, e.restart = function() {
                    e.reversed && R(e), e.pause(), e.seek(0), e.play()
                }, e.settings.autoplay && e.play(), e
            };
        return B.version = "1.1.1", B.speed = 1, B.list = z, B.remove = function(t) {
            t = l(i.arr(t) ? t.map(u) : u(t));
            for (var e = z.length - 1; 0 <= e; e--)
                for (var n = z[e], r = n.tweens, s = r.length - 1; 0 <= s; s--)
                    for (var o = r[s].animatables, a = o.length - 1; 0 <= a; a--) c(t, o[a].target) && (o.splice(a, 1), o.length || r.splice(s, 1), r.length || n.pause())
        }, B.easings = r, B.getValue = w, B.path = function(t) {
            return t = i.str(t) ? a(t)[0] : t, {
                path: t,
                value: t.getTotalLength()
            }
        }, B.random = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, B
    }), ! function(t) {
        "use strict";
        var e = function(e, n) {
            this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, n), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
        };
        e.prototype = {
            constructor: e,
            init: function() {
                var t = this;
                t.timeout = setTimeout(function() {
                    for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                    t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                }, t.startDelay)
            },
            build: function() {
                var e = this;
                if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                    var n = this.stringsElement.children();
                    t.each(n, function(n, i) {
                        e.strings.push(t(i).html())
                    })
                }
                this.init()
            },
            typewrite: function(t, e) {
                if (this.stop !== !0) {
                    var n = Math.round(70 * Math.random()) + this.typeSpeed,
                        i = this;
                    i.timeout = setTimeout(function() {
                        var n = 0,
                            r = t.substr(e);
                        if ("^" === r.charAt(0)) {
                            var s = 1;
                            /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], s += r.length, n = parseInt(r)), t = t.substring(0, e) + t.substring(e + s)
                        }
                        if ("html" === i.contentType) {
                            var o = t.substr(e).charAt(0);
                            if ("<" === o || "&" === o) {
                                var a = "",
                                    l = "";
                                for (l = "<" === o ? ">" : ";"; t.substr(e + 1).charAt(0) !== l && (a += t.substr(e).charAt(0), e++, !(e + 1 > t.length)););
                                e++, a += l
                            }
                        }
                        i.timeout = setTimeout(function() {
                            if (e === t.length) {
                                if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                                i.timeout = setTimeout(function() {
                                    i.backspace(t, e)
                                }, i.backDelay)
                            } else {
                                0 === e && i.options.preStringTyped(i.arrayPos);
                                var n = t.substr(0, e + 1);
                                i.attr ? i.el.attr(i.attr, n) : i.isInput ? i.el.val(n) : "html" === i.contentType ? i.el.html(n) : i.el.text(n), e++, i.typewrite(t, e)
                            }
                        }, n)
                    }, n)
                }
            },
            backspace: function(t, e) {
                if (this.stop !== !0) {
                    var n = Math.round(70 * Math.random()) + this.backSpeed,
                        i = this;
                    i.timeout = setTimeout(function() {
                        if ("html" === i.contentType && ">" === t.substr(e).charAt(0)) {
                            for (var n = "";
                                "<" !== t.substr(e - 1).charAt(0) && (n -= t.substr(e).charAt(0), e--, !(0 > e)););
                            e--, n += "<"
                        }
                        var r = t.substr(0, e);
                        i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
                    }, n)
                }
            },
            shuffleArray: function(t) {
                var e, n, i = t.length;
                if (i)
                    for (; --i;) n = Math.floor(Math.random() * (i + 1)), e = t[n], t[n] = t[i], t[i] = e;
                return t
            },
            reset: function() {
                var t = this;
                clearInterval(t.timeout), this.el.attr("id"), this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
            }
        }, t.fn.typed = function(n) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("typed"),
                    s = "object" == typeof n && n;
                r && r.reset(), i.data("typed", r = new e(this, s)), "string" == typeof n && r[n]()
            })
        }, t.fn.typed.defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            shuffle: !1,
            backDelay: 500,
            loop: !1,
            loopCount: !1,
            showCursor: !0,
            cursorChar: "|",
            attr: null,
            contentType: "html",
            callback: function() {},
            preStringTyped: function() {},
            onStringTyped: function() {},
            resetCallback: function() {}
        }
    }(window.jQuery);