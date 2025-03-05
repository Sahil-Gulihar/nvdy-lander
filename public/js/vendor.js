import { c as dl } from "./commonjsHelpers.js";
function Jt(u) {
    if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u
}
function yu(u, e) {
    u.prototype = Object.create(e.prototype),
        u.prototype.constructor = u,
        u.__proto__ = e
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _t = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, pr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Qs, Ie, we, xt = 1e8, se = 1 / xt, Es = Math.PI * 2, _l = Es / 4, pl = 0, vu = Math.sqrt, Dl = Math.cos, gl = Math.sin, ke = function (e) {
    return typeof e == "string"
}, ge = function (e) {
    return typeof e == "function"
}, oi = function (e) {
    return typeof e == "number"
}, Js = function (e) {
    return typeof e > "u"
}, qt = function (e) {
    return typeof e == "object"
}, it = function (e) {
    return e !== !1
}, xu = function () {
    return typeof window < "u"
}, cn = function (e) {
    return ge(e) || ke(e)
}, Cu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () { }
    , Xe = Array.isArray, Fs = /(?:-?\.?\d|\.)+/gi, wu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, sr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Eu = /[+-]=-?[.\d]+/, Fu = /[^,'"\[\]\s]+/gi, ml = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe, yt, bs, eo, pt = {}, Yn = {}, bu, Tu = function (e) {
        return (Yn = Hi(e, pt)) && Dt
    }, to = function (e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, In = function (e, t) {
        return !t && console.warn(e)
    }, Su = function (e, t) {
        return e && (pt[e] = t) && Yn && (Yn[e] = t) || pt
    }, Jr = function () {
        return 0
    }, yl = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Tn = {
        suppressEvents: !0,
        kill: !1
    }, vl = {
        suppressEvents: !0
    }, io = {}, yi = [], Ts = {}, Pu, ft = {}, os = {}, bo = 30, Sn = [], ro = "", no = function (e) {
        var t = e[0], i, r;
        if (qt(t) || ge(t) || (e = [e]),
            !(i = (t._gsap || {}).harness)) {
            for (r = Sn.length; r-- && !Sn[r].targetTest(t);)
                ;
            i = Sn[r]
        }
        for (r = e.length; r--;)
            e[r] && (e[r]._gsap || (e[r]._gsap = new Zu(e[r], i))) || e.splice(r, 1);
        return e
    }, Yi = function (e) {
        return e._gsap || no(Ct(e))[0]._gsap
    }, Au = function (e, t, i) {
        return (i = e[t]) && ge(i) ? e[t]() : Js(i) && e.getAttribute && e.getAttribute(t) || i
    }, rt = function (e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, ve = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Re = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, fr = function (e, t) {
        var i = t.charAt(0)
            , r = parseFloat(t.substr(2));
        return e = parseFloat(e),
            i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    }, xl = function (e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i;)
            ;
        return r < i
    }, Xn = function () {
        var e = yi.length, t = yi.slice(0), i, r;
        for (Ts = {},
            yi.length = 0,
            i = 0; i < e; i++)
            r = t[i],
                r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, ku = function (e, t, i, r) {
        yi.length && !Ie && Xn(),
            e.render(t, i, r || Ie && t < 0 && (e._initted || e._startAt)),
            yi.length && !Ie && Xn()
    }, Mu = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Fu).length < 2 ? t : ke(e) ? e.trim() : e
    }, Ou = function (e) {
        return e
    }, Ft = function (e, t) {
        for (var i in t)
            i in e || (e[i] = t[i]);
        return e
    }, Cl = function (e) {
        return function (t, i) {
            for (var r in i)
                r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
        }
    }, Hi = function (e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }, To = function u(e, t) {
        for (var i in t)
            i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = qt(t[i]) ? u(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    }, Wn = function (e, t) {
        var i = {}, r;
        for (r in e)
            r in t || (i[r] = e[r]);
        return i
    }, Ir = function (e) {
        var t = e.parent || fe
            , i = e.keyframes ? Cl(Xe(e.keyframes)) : Ft;
        if (it(e.inherit))
            for (; t;)
                i(e, t.vars.defaults),
                    t = t.parent || t._dp;
        return e
    }, wl = function (e, t) {
        for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i];)
            ;
        return i < 0
    }, Bu = function (e, t, i, r, n) {
        i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
        var s = e[r], o;
        if (n)
            for (o = t[n]; s && s[n] > o;)
                s = s._prev;
        return s ? (t._next = s._next,
            s._next = t) : (t._next = e[i],
                e[i] = t),
            t._next ? t._next._prev = t : e[r] = t,
            t._prev = s,
            t.parent = t._dp = e,
            t
    }, Qn = function (e, t, i, r) {
        i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
        var n = t._prev
            , s = t._next;
        n ? n._next = s : e[i] === t && (e[i] = s),
            s ? s._prev = n : e[r] === t && (e[r] = n),
            t._next = t._prev = t.parent = null
    }, wi = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
            e._act = 0
    }, Ii = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i;)
                i._dirty = 1,
                    i = i.parent;
        return e
    }, El = function (e) {
        for (var t = e.parent; t && t.parent;)
            t._dirty = 1,
                t.totalDuration(),
                t = t.parent;
        return e
    }, Ss = function (e, t, i, r) {
        return e._startAt && (Ie ? e._startAt.revert(Tn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    }, Fl = function u(e) {
        return !e || e._ts && u(e.parent)
    }, So = function (e) {
        return e._repeat ? Dr(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, Dr = function (e, t) {
        var i = Math.floor(e /= t);
        return e && i === e ? i - 1 : i
    }, $n = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, Jn = function (e) {
        return e._end = Re(e._start + (e._tDur / Math.abs(e._ts || e._rts || se) || 0))
    }, es = function (e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = Re(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
            Jn(e),
            i._dirty || Ii(i, e)),
            e
    }, Ru = function (e, t) {
        var i;
        if ((t._time || t._initted && !t._dur) && (i = $n(e.rawTime(), t),
            (!t._dur || fn(0, t.totalDuration(), i) - t._tTime > se) && t.render(i, !0)),
            Ii(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp;)
                    i.rawTime() >= 0 && i.totalTime(i._tTime),
                        i = i._dp;
            e._zTime = -se
        }
    }, $t = function (e, t, i, r) {
        return t.parent && wi(t),
            t._start = Re((oi(i) ? i : i || e !== fe ? mt(e, i, t) : e._time) + t._delay),
            t._end = Re(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
            Bu(e, t, "_first", "_last", e._sort ? "_start" : 0),
            Ps(t) || (e._recent = t),
            r || Ru(e, t),
            e._ts < 0 && es(e, e._tTime),
            e
    }, Lu = function (e, t) {
        return (pt.ScrollTrigger || to("scrollTrigger", t)) && pt.ScrollTrigger.create(t, e)
    }, Nu = function (e, t, i, r, n) {
        if (oo(e, t, n),
            !e._initted)
            return 1;
        if (!i && e._pt && !Ie && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Pu !== ct.frame)
            return yi.push(e),
                e._lazy = [n, r],
                1
    }, bl = function u(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || u(t))
    }, Ps = function (e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, Tl = function (e, t, i, r) {
        var n = e.ratio, s = t < 0 || !t && (!e._start && bl(e) && !(!e._initted && Ps(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ps(e)) ? 0 : 1, o = e._rDelay, a = 0, l, f, _;
        if (o && e._repeat && (a = fn(0, e._tDur, t),
            f = Dr(a, o),
            e._yoyo && f & 1 && (s = 1 - s),
            f !== Dr(e._tTime, o) && (n = 1 - s,
                e.vars.repeatRefresh && e._initted && e.invalidate())),
            s !== n || Ie || r || e._zTime === se || !t && e._zTime) {
            if (!e._initted && Nu(e, t, r, i, a))
                return;
            for (_ = e._zTime,
                e._zTime = t || (i ? se : 0),
                i || (i = t && !_),
                e.ratio = s,
                e._from && (s = 1 - s),
                e._time = 0,
                e._tTime = a,
                l = e._pt; l;)
                l.r(s, l.d),
                    l = l._next;
            t < 0 && Ss(e, t, i, !0),
                e._onUpdate && !i && wt(e, "onUpdate"),
                a && e._repeat && !i && e.parent && wt(e, "onRepeat"),
                (t >= e._tDur || t < 0) && e.ratio === s && (s && wi(e, 1),
                    !i && !Ie && (wt(e, s ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, Sl = function (e, t, i) {
        var r;
        if (i > t)
            for (r = e._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > t)
                    return r;
                r = r._next
            }
        else
            for (r = e._last; r && r._start >= i;) {
                if (r.data === "isPause" && r._start < t)
                    return r;
                r = r._prev
            }
    }, gr = function (e, t, i, r) {
        var n = e._repeat
            , s = Re(t) || 0
            , o = e._tTime / e._tDur;
        return o && !r && (e._time *= s / e._dur),
            e._dur = s,
            e._tDur = n ? n < 0 ? 1e10 : Re(s * (n + 1) + e._rDelay * n) : s,
            o > 0 && !r && es(e, e._tTime = e._tDur * o),
            e.parent && Jn(e),
            i || Ii(e.parent, e),
            e
    }, Po = function (e) {
        return e instanceof tt ? Ii(e) : gr(e, e._dur)
    }, Pl = {
        _start: 0,
        endTime: Jr,
        totalDuration: Jr
    }, mt = function u(e, t, i) {
        var r = e.labels, n = e._recent || Pl, s = e.duration() >= xt ? n.endTime(!1) : e._dur, o, a, l;
        return ke(t) && (isNaN(t) || t in r) ? (a = t.charAt(0),
            l = t.substr(-1) === "%",
            o = t.indexOf("="),
            a === "<" || a === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
                (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (t in r || (r[t] = s),
                    r[t]) : (a = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
                        l && i && (a = a / 100 * (Xe(i) ? i[0] : i).totalDuration()),
                        o > 1 ? u(e, t.substr(0, o - 1), i) + a : s + a)) : t == null ? s : +t
    }, Xr = function (e, t, i) {
        var r = oi(t[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], o, a;
        if (r && (s.duration = t[1]),
            s.parent = i,
            e) {
            for (o = s,
                a = i; a && !("immediateRender" in o);)
                o = a.vars.defaults || {},
                    a = it(a.vars.inherit) && a.parent;
            s.immediateRender = it(o.immediateRender),
                e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
        }
        return new be(t[0], s, t[n + 1])
    }, Ti = function (e, t) {
        return e || e === 0 ? t(e) : t
    }, fn = function (e, t, i) {
        return i < e ? e : i > t ? t : i
    }, Ye = function (e, t) {
        return !ke(e) || !(t = ml.exec(e)) ? "" : t[1]
    }, Al = function (e, t, i) {
        return Ti(i, function (r) {
            return fn(e, t, r)
        })
    }, As = [].slice, zu = function (e, t) {
        return e && qt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && qt(e[0])) && !e.nodeType && e !== yt
    }, kl = function (e, t, i) {
        return i === void 0 && (i = []),
            e.forEach(function (r) {
                var n;
                return ke(r) && !t || zu(r, 1) ? (n = i).push.apply(n, Ct(r)) : i.push(r)
            }) || i
    }, Ct = function (e, t, i) {
        return we && !t && we.selector ? we.selector(e) : ke(e) && !i && (bs || !mr()) ? As.call((t || eo).querySelectorAll(e), 0) : Xe(e) ? kl(e, i) : zu(e) ? As.call(e, 0) : e ? [e] : []
    }, ks = function (e) {
        return e = Ct(e)[0] || In("Invalid scope") || {},
            function (t) {
                var i = e.current || e.nativeElement || e;
                return Ct(t, i.querySelectorAll ? i : i === e ? In("Invalid scope") || eo.createElement("div") : e)
            }
    }, Yu = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, Iu = function (e) {
        if (ge(e))
            return e;
        var t = qt(e) ? e : {
            each: e
        }
            , i = Xi(t.ease)
            , r = t.from || 0
            , n = parseFloat(t.base) || 0
            , s = {}
            , o = r > 0 && r < 1
            , a = isNaN(r) || o
            , l = t.axis
            , f = r
            , _ = r;
        return ke(r) ? f = _ = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !o && a && (f = r[0],
            _ = r[1]),
            function (h, c, p) {
                var d = (p || t).length, D = s[d], m, y, g, x, C, b, w, S, T;
                if (!D) {
                    if (T = t.grid === "auto" ? 0 : (t.grid || [1, xt])[1],
                        !T) {
                        for (w = -xt; w < (w = p[T++].getBoundingClientRect().left) && T < d;)
                            ;
                        T--
                    }
                    for (D = s[d] = [],
                        m = a ? Math.min(T, d) * f - .5 : r % T,
                        y = T === xt ? 0 : a ? d * _ / T - .5 : r / T | 0,
                        w = 0,
                        S = xt,
                        b = 0; b < d; b++)
                        g = b % T - m,
                            x = y - (b / T | 0),
                            D[b] = C = l ? Math.abs(l === "y" ? x : g) : vu(g * g + x * x),
                            C > w && (w = C),
                            C < S && (S = C);
                    r === "random" && Yu(D),
                        D.max = w - S,
                        D.min = S,
                        D.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (T > d ? d - 1 : l ? l === "y" ? d / T : T : Math.max(T, d / T)) || 0) * (r === "edges" ? -1 : 1),
                        D.b = d < 0 ? n - d : n,
                        D.u = Ye(t.amount || t.each) || 0,
                        i = i && d < 0 ? qu(i) : i
                }
                return d = (D[h] - D.min) / D.max || 0,
                    Re(D.b + (i ? i(d) : d) * D.v) + D.u
            }
    }, Ms = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (i) {
            var r = Re(Math.round(parseFloat(i) / e) * e * t);
            return (r - r % 1) / t + (oi(i) ? 0 : Ye(i))
        }
    }, Xu = function (e, t) {
        var i = Xe(e), r, n;
        return !i && qt(e) && (r = i = e.radius || xt,
            e.values ? (e = Ct(e.values),
                (n = !oi(e[0])) && (r *= r)) : e = Ms(e.increment)),
            Ti(t, i ? ge(e) ? function (s) {
                return n = e(s),
                    Math.abs(n - s) <= r ? n : s
            }
                : function (s) {
                    for (var o = parseFloat(n ? s.x : s), a = parseFloat(n ? s.y : 0), l = xt, f = 0, _ = e.length, h, c; _--;)
                        n ? (h = e[_].x - o,
                            c = e[_].y - a,
                            h = h * h + c * c) : h = Math.abs(e[_] - o),
                            h < l && (l = h,
                                f = _);
                    return f = !r || l <= r ? e[f] : s,
                        n || f === s || oi(s) ? f : f + Ye(s)
                }
                : Ms(e))
    }, Wu = function (e, t, i, r) {
        return Ti(Xe(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
            return Xe(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
        })
    }, Ml = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return function (r) {
            return t.reduce(function (n, s) {
                return s(n)
            }, r)
        }
    }, Ol = function (e, t) {
        return function (i) {
            return e(parseFloat(i)) + (t || Ye(i))
        }
    }, Bl = function (e, t, i) {
        return Vu(e, t, 0, 1, i)
    }, $u = function (e, t, i) {
        return Ti(i, function (r) {
            return e[~~t(r)]
        })
    }, Rl = function u(e, t, i) {
        var r = t - e;
        return Xe(e) ? $u(e, u(0, e.length), t) : Ti(i, function (n) {
            return (r + (n - e) % r) % r + e
        })
    }, Ll = function u(e, t, i) {
        var r = t - e
            , n = r * 2;
        return Xe(e) ? $u(e, u(0, e.length - 1), t) : Ti(i, function (s) {
            return s = (n + (s - e) % n) % n || 0,
                e + (s > r ? n - s : s)
        })
    }, en = function (e) {
        for (var t = 0, i = "", r, n, s, o; ~(r = e.indexOf("random(", t));)
            s = e.indexOf(")", r),
                o = e.charAt(r + 7) === "[",
                n = e.substr(r + 7, s - r - 7).match(o ? Fu : Fs),
                i += e.substr(t, r - t) + Wu(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
                t = s + 1;
        return i + e.substr(t, e.length - t)
    }, Vu = function (e, t, i, r, n) {
        var s = t - e
            , o = r - i;
        return Ti(n, function (a) {
            return i + ((a - e) / s * o || 0)
        })
    }, Nl = function u(e, t, i, r) {
        var n = isNaN(e + t) ? 0 : function (c) {
            return (1 - c) * e + c * t
        }
            ;
        if (!n) {
            var s = ke(e), o = {}, a, l, f, _, h;
            if (i === !0 && (r = 1) && (i = null),
                s)
                e = {
                    p: e
                },
                    t = {
                        p: t
                    };
            else if (Xe(e) && !Xe(t)) {
                for (f = [],
                    _ = e.length,
                    h = _ - 2,
                    l = 1; l < _; l++)
                    f.push(u(e[l - 1], e[l]));
                _--,
                    n = function (p) {
                        p *= _;
                        var d = Math.min(h, ~~p);
                        return f[d](p - d)
                    }
                    ,
                    i = t
            } else
                r || (e = Hi(Xe(e) ? [] : {}, e));
            if (!f) {
                for (a in t)
                    so.call(o, e, a, "get", t[a]);
                n = function (p) {
                    return lo(p, o) || (s ? e.p : e)
                }
            }
        }
        return Ti(i, n)
    }, Ao = function (e, t, i) {
        var r = e.labels, n = xt, s, o, a;
        for (s in r)
            o = r[s] - t,
                o < 0 == !!i && o && n > (o = Math.abs(o)) && (a = s,
                    n = o);
        return a
    }, wt = function (e, t, i) {
        var r = e.vars, n = r[t], s = we, o = e._ctx, a, l, f;
        if (!!n)
            return a = r[t + "Params"],
                l = r.callbackScope || e,
                i && yi.length && Xn(),
                o && (we = o),
                f = a ? n.apply(l, a) : n.call(l),
                we = s,
                f
    }, Rr = function (e) {
        return wi(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!Ie),
            e.progress() < 1 && wt(e, "onInterrupt"),
            e
    }, or, zl = function (e) {
        e = !e.name && e.default || e;
        var t = e.name
            , i = ge(e)
            , r = t && !i && e.init ? function () {
                this._props = []
            }
                : e
            , n = {
                init: Jr,
                render: lo,
                add: so,
                kill: ef,
                modifier: Jl,
                rawVars: 0
            }
            , s = {
                targetTest: 0,
                get: 0,
                getSetter: ao,
                aliases: {},
                register: 0
            };
        if (mr(),
            e !== r) {
            if (ft[t])
                return;
            Ft(r, Ft(Wn(e, n), s)),
                Hi(r.prototype, Hi(n, Wn(e, s))),
                ft[r.prop = t] = r,
                e.targetTest && (Sn.push(r),
                    io[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        Su(t, r),
            e.register && e.register(Dt, r, nt)
    }, ne = 255, Lr = {
        aqua: [0, ne, ne],
        lime: [0, ne, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ne],
        navy: [0, 0, 128],
        white: [ne, ne, ne],
        olive: [128, 128, 0],
        yellow: [ne, ne, 0],
        orange: [ne, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ne, 0, 0],
        pink: [ne, 192, 203],
        cyan: [0, ne, ne],
        transparent: [ne, ne, ne, 0]
    }, us = function (e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
            (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ne + .5 | 0
    }, Hu = function (e, t, i) {
        var r = e ? oi(e) ? [e >> 16, e >> 8 & ne, e & ne] : 0 : Lr.black, n, s, o, a, l, f, _, h, c, p;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
                Lr[e])
                r = Lr[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1),
                    s = e.charAt(2),
                    o = e.charAt(3),
                    e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                    e.length === 9)
                    return r = parseInt(e.substr(1, 6), 16),
                        [r >> 16, r >> 8 & ne, r & ne, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                    r = [e >> 16, e >> 8 & ne, e & ne]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = p = e.match(Fs),
                    !t)
                    a = +r[0] % 360 / 360,
                        l = +r[1] / 100,
                        f = +r[2] / 100,
                        s = f <= .5 ? f * (l + 1) : f + l - f * l,
                        n = f * 2 - s,
                        r.length > 3 && (r[3] *= 1),
                        r[0] = us(a + 1 / 3, n, s),
                        r[1] = us(a, n, s),
                        r[2] = us(a - 1 / 3, n, s);
                else if (~e.indexOf("="))
                    return r = e.match(wu),
                        i && r.length < 4 && (r[3] = 1),
                        r
            } else
                r = e.match(Fs) || Lr.transparent;
            r = r.map(Number)
        }
        return t && !p && (n = r[0] / ne,
            s = r[1] / ne,
            o = r[2] / ne,
            _ = Math.max(n, s, o),
            h = Math.min(n, s, o),
            f = (_ + h) / 2,
            _ === h ? a = l = 0 : (c = _ - h,
                l = f > .5 ? c / (2 - _ - h) : c / (_ + h),
                a = _ === n ? (s - o) / c + (s < o ? 6 : 0) : _ === s ? (o - n) / c + 2 : (n - s) / c + 4,
                a *= 60),
            r[0] = ~~(a + .5),
            r[1] = ~~(l * 100 + .5),
            r[2] = ~~(f * 100 + .5)),
            i && r.length < 4 && (r[3] = 1),
            r
    }, Gu = function (e) {
        var t = []
            , i = []
            , r = -1;
        return e.split(vi).forEach(function (n) {
            var s = n.match(sr) || [];
            t.push.apply(t, s),
                i.push(r += s.length + 1)
        }),
            t.c = i,
            t
    }, ko = function (e, t, i) {
        var r = "", n = (e + r).match(vi), s = t ? "hsla(" : "rgba(", o = 0, a, l, f, _;
        if (!n)
            return e;
        if (n = n.map(function (h) {
            return (h = Hu(h, t, 1)) && s + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
        }),
            i && (f = Gu(e),
                a = i.c,
                a.join(r) !== f.c.join(r)))
            for (l = e.replace(vi, "1").split(sr),
                _ = l.length - 1; o < _; o++)
                r += l[o] + (~a.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
        if (!l)
            for (l = e.split(vi),
                _ = l.length - 1; o < _; o++)
                r += l[o] + n[o];
        return r + l[_]
    }, vi = function () {
        var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Lr)
            u += "|" + e + "\\b";
        return new RegExp(u + ")", "gi")
    }(), Yl = /hsl[a]?\(/, Uu = function (e) {
        var t = e.join(" "), i;
        if (vi.lastIndex = 0,
            vi.test(t))
            return i = Yl.test(t),
                e[1] = ko(e[1], i),
                e[0] = ko(e[0], i, Gu(e[1])),
                !0
    }, tn, ct = function () {
        var u = Date.now, e = 500, t = 33, i = u(), r = i, n = 1e3 / 240, s = n, o = [], a, l, f, _, h, c, p = function d(D) {
            var m = u() - r, y = D === !0, g, x, C, b;
            if (m > e && (i += m - t),
                r += m,
                C = r - i,
                g = C - s,
                (g > 0 || y) && (b = ++_.frame,
                    h = C - _.time * 1e3,
                    _.time = C = C / 1e3,
                    s += g + (g >= n ? 4 : n - g),
                    x = 1),
                y || (a = l(d)),
                x)
                for (c = 0; c < o.length; c++)
                    o[c](C, h, b, D)
        };
        return _ = {
            time: 0,
            frame: 0,
            tick: function () {
                p(!0)
            },
            deltaRatio: function (D) {
                return h / (1e3 / (D || 60))
            },
            wake: function () {
                bu && (!bs && xu() && (yt = bs = window,
                    eo = yt.document || {},
                    pt.gsap = Dt,
                    (yt.gsapVersions || (yt.gsapVersions = [])).push(Dt.version),
                    Tu(Yn || yt.GreenSockGlobals || !yt.gsap && yt || {}),
                    f = yt.requestAnimationFrame),
                    a && _.sleep(),
                    l = f || function (D) {
                        return setTimeout(D, s - _.time * 1e3 + 1 | 0)
                    }
                    ,
                    tn = 1,
                    p(2))
            },
            sleep: function () {
                (f ? yt.cancelAnimationFrame : clearTimeout)(a),
                    tn = 0,
                    l = Jr
            },
            lagSmoothing: function (D, m) {
                e = D || 1 / 0,
                    t = Math.min(m || 33, e)
            },
            fps: function (D) {
                n = 1e3 / (D || 240),
                    s = _.time * 1e3 + n
            },
            add: function (D, m, y) {
                var g = m ? function (x, C, b, w) {
                    D(x, C, b, w),
                        _.remove(g)
                }
                    : D;
                return _.remove(D),
                    o[y ? "unshift" : "push"](g),
                    mr(),
                    g
            },
            remove: function (D, m) {
                ~(m = o.indexOf(D)) && o.splice(m, 1) && c >= m && c--
            },
            _listeners: o
        },
            _
    }(), mr = function () {
        return !tn && ct.wake()
    }, j = {}, Il = /^[\d.\-M][\d.\-,\s]/, Xl = /["']/g, Wl = function (e) {
        for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, a, l; n < s; n++)
            a = i[n],
                o = n !== s - 1 ? a.lastIndexOf(",") : a.length,
                l = a.substr(0, o),
                t[r] = isNaN(l) ? l.replace(Xl, "").trim() : +l,
                r = a.substr(o + 1).trim();
        return t
    }, $l = function (e) {
        var t = e.indexOf("(") + 1
            , i = e.indexOf(")")
            , r = e.indexOf("(", t);
        return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
    }, Vl = function (e) {
        var t = (e + "").split("(")
            , i = j[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Wl(t[1])] : $l(e).split(",").map(Mu)) : j._CE && Il.test(e) ? j._CE("", e) : i
    }, qu = function (e) {
        return function (t) {
            return 1 - e(1 - t)
        }
    }, Ku = function u(e, t) {
        for (var i = e._first, r; i;)
            i instanceof tt ? u(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? u(i.timeline, t) : (r = i._ease,
                i._ease = i._yEase,
                i._yEase = r,
                i._yoyo = t)),
                i = i._next
    }, Xi = function (e, t) {
        return e && (ge(e) ? e : j[e] || Vl(e)) || t
    }, Ki = function (e, t, i, r) {
        i === void 0 && (i = function (a) {
            return 1 - t(1 - a)
        }
        ),
            r === void 0 && (r = function (a) {
                return a < .5 ? t(a * 2) / 2 : 1 - t((1 - a) * 2) / 2
            }
            );
        var n = {
            easeIn: t,
            easeOut: i,
            easeInOut: r
        }, s;
        return rt(e, function (o) {
            j[o] = pt[o] = n,
                j[s = o.toLowerCase()] = i;
            for (var a in n)
                j[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = j[o + "." + a] = n[a]
        }),
            n
    }, ju = function (e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, as = function u(e, t, i) {
        var r = t >= 1 ? t : 1
            , n = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
            , s = n / Es * (Math.asin(1 / r) || 0)
            , o = function (f) {
                return f === 1 ? 1 : r * Math.pow(2, -10 * f) * gl((f - s) * n) + 1
            }
            , a = e === "out" ? o : e === "in" ? function (l) {
                return 1 - o(1 - l)
            }
                : ju(o);
        return n = Es / n,
            a.config = function (l, f) {
                return u(e, l, f)
            }
            ,
            a
    }, ls = function u(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function (s) {
            return s ? --s * s * ((t + 1) * s + t) + 1 : 0
        }
            , r = e === "out" ? i : e === "in" ? function (n) {
                return 1 - i(1 - n)
            }
                : ju(i);
        return r.config = function (n) {
            return u(e, n)
        }
            ,
            r
    };
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, e) {
    var t = e < 5 ? e + 1 : e;
    Ki(u + ",Power" + (t - 1), e ? function (i) {
        return Math.pow(i, t)
    }
        : function (i) {
            return i
        }
        , function (i) {
            return 1 - Math.pow(1 - i, t)
        }, function (i) {
            return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
        })
});
j.Linear.easeNone = j.none = j.Linear.easeIn;
Ki("Elastic", as("in"), as("out"), as());
(function (u, e) {
    var t = 1 / e
        , i = 2 * t
        , r = 2.5 * t
        , n = function (o) {
            return o < t ? u * o * o : o < i ? u * Math.pow(o - 1.5 / e, 2) + .75 : o < r ? u * (o -= 2.25 / e) * o + .9375 : u * Math.pow(o - 2.625 / e, 2) + .984375
        };
    Ki("Bounce", function (s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
Ki("Expo", function (u) {
    return u ? Math.pow(2, 10 * (u - 1)) : 0
});
Ki("Circ", function (u) {
    return -(vu(1 - u * u) - 1)
});
Ki("Sine", function (u) {
    return u === 1 ? 1 : -Dl(u * _l) + 1
});
Ki("Back", ls("in"), ls("out"), ls());
j.SteppedEase = j.steps = pt.SteppedEase = {
    config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e
            , r = e + (t ? 0 : 1)
            , n = t ? 1 : 0
            , s = 1 - se;
        return function (o) {
            return ((r * fn(0, s, o) | 0) + n) * i
        }
    }
};
pr.ease = j["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (u) {
    return ro += u + "," + u + "Params,"
});
var Zu = function (e, t) {
    this.id = pl++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : Au,
        this.set = t ? t.getSetter : ao
}
    , yr = function () {
        function u(t) {
            this.vars = t,
                this._delay = +t.delay || 0,
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                    this._yoyo = !!t.yoyo || !!t.yoyoEase),
                this._ts = 1,
                gr(this, +t.duration, 1, 1),
                this.data = t.data,
                we && (this._ctx = we,
                    we.data.push(this)),
                tn || ct.wake()
        }
        var e = u.prototype;
        return e.delay = function (i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
                this._delay = i,
                this) : this._delay
        }
            ,
            e.duration = function (i) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
            }
            ,
            e.totalDuration = function (i) {
                return arguments.length ? (this._dirty = 0,
                    gr(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }
            ,
            e.totalTime = function (i, r) {
                if (mr(),
                    !arguments.length)
                    return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (es(this, i),
                        !n._dp || n.parent || Ru(n, this); n && n.parent;)
                        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                            n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && $t(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === se || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
                    ku(this, i, r)),
                    this
            }
            ,
            e.time = function (i, r) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + So(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
            }
            ,
            e.totalProgress = function (i, r) {
                return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }
            ,
            e.progress = function (i, r) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + So(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }
            ,
            e.iteration = function (i, r) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Dr(this._tTime, n) + 1 : 1
            }
            ,
            e.timeScale = function (i) {
                if (!arguments.length)
                    return this._rts === -se ? 0 : this._rts;
                if (this._rts === i)
                    return this;
                var r = this.parent && this._ts ? $n(this.parent._time, this) : this._tTime;
                return this._rts = +i || 0,
                    this._ts = this._ps || i === -se ? 0 : this._rts,
                    this.totalTime(fn(-this._delay, this._tDur, r), !0),
                    Jn(this),
                    El(this)
            }
            ,
            e.paused = function (i) {
                return arguments.length ? (this._ps !== i && (this._ps = i,
                    i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                        this._ts = this._act = 0) : (mr(),
                            this._ts = this._rts,
                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== se && (this._tTime -= se)))),
                    this) : this._ps
            }
            ,
            e.startTime = function (i) {
                if (arguments.length) {
                    this._start = i;
                    var r = this.parent || this._dp;
                    return r && (r._sort || !this.parent) && $t(r, this, i - this._delay),
                        this
                }
                return this._start
            }
            ,
            e.endTime = function (i) {
                return this._start + (it(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }
            ,
            e.rawTime = function (i) {
                var r = this.parent || this._dp;
                return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $n(r.rawTime(i), this) : this._tTime : this._tTime
            }
            ,
            e.revert = function (i) {
                i === void 0 && (i = vl);
                var r = Ie;
                return Ie = i,
                    (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
                        this.totalTime(-.01, i.suppressEvents)),
                    this.data !== "nested" && i.kill !== !1 && this.kill(),
                    Ie = r,
                    this
            }
            ,
            e.globalTime = function (i) {
                for (var r = this, n = arguments.length ? i : r.rawTime(); r;)
                    n = r._start + n / (r._ts || 1),
                        r = r._dp;
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n
            }
            ,
            e.repeat = function (i) {
                return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
                    Po(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }
            ,
            e.repeatDelay = function (i) {
                if (arguments.length) {
                    var r = this._time;
                    return this._rDelay = i,
                        Po(this),
                        r ? this.time(r) : this
                }
                return this._rDelay
            }
            ,
            e.yoyo = function (i) {
                return arguments.length ? (this._yoyo = i,
                    this) : this._yoyo
            }
            ,
            e.seek = function (i, r) {
                return this.totalTime(mt(this, i), it(r))
            }
            ,
            e.restart = function (i, r) {
                return this.play().totalTime(i ? -this._delay : 0, it(r))
            }
            ,
            e.play = function (i, r) {
                return i != null && this.seek(i, r),
                    this.reversed(!1).paused(!1)
            }
            ,
            e.reverse = function (i, r) {
                return i != null && this.seek(i || this.totalDuration(), r),
                    this.reversed(!0).paused(!1)
            }
            ,
            e.pause = function (i, r) {
                return i != null && this.seek(i, r),
                    this.paused(!0)
            }
            ,
            e.resume = function () {
                return this.paused(!1)
            }
            ,
            e.reversed = function (i) {
                return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -se : 0)),
                    this) : this._rts < 0
            }
            ,
            e.invalidate = function () {
                return this._initted = this._act = 0,
                    this._zTime = -se,
                    this
            }
            ,
            e.isActive = function () {
                var i = this.parent || this._dp, r = this._start, n;
                return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - se)
            }
            ,
            e.eventCallback = function (i, r, n) {
                var s = this.vars;
                return arguments.length > 1 ? (r ? (s[i] = r,
                    n && (s[i + "Params"] = n),
                    i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
                    this) : s[i]
            }
            ,
            e.then = function (i) {
                var r = this;
                return new Promise(function (n) {
                    var s = ge(i) ? i : Ou
                        , o = function () {
                            var l = r.then;
                            r.then = null,
                                ge(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
                                n(s),
                                r.then = l
                        };
                    r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o
                }
                )
            }
            ,
            e.kill = function () {
                Rr(this)
            }
            ,
            u
    }();
Ft(yr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -se,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var tt = function (u) {
    yu(e, u);
    function e(i, r) {
        var n;
        return i === void 0 && (i = {}),
            n = u.call(this, i) || this,
            n.labels = {},
            n.smoothChildTiming = !!i.smoothChildTiming,
            n.autoRemoveChildren = !!i.autoRemoveChildren,
            n._sort = it(i.sortChildren),
            fe && $t(i.parent || fe, Jt(n), r),
            i.reversed && n.reverse(),
            i.paused && n.paused(!0),
            i.scrollTrigger && Lu(Jt(n), i.scrollTrigger),
            n
    }
    var t = e.prototype;
    return t.to = function (r, n, s) {
        return Xr(0, arguments, this),
            this
    }
        ,
        t.from = function (r, n, s) {
            return Xr(1, arguments, this),
                this
        }
        ,
        t.fromTo = function (r, n, s, o) {
            return Xr(2, arguments, this),
                this
        }
        ,
        t.set = function (r, n, s) {
            return n.duration = 0,
                n.parent = this,
                Ir(n).repeatDelay || (n.repeat = 0),
                n.immediateRender = !!n.immediateRender,
                new be(r, n, mt(this, s), 1),
                this
        }
        ,
        t.call = function (r, n, s) {
            return $t(this, be.delayedCall(0, r, n), s)
        }
        ,
        t.staggerTo = function (r, n, s, o, a, l, f) {
            return s.duration = n,
                s.stagger = s.stagger || o,
                s.onComplete = l,
                s.onCompleteParams = f,
                s.parent = this,
                new be(r, s, mt(this, a)),
                this
        }
        ,
        t.staggerFrom = function (r, n, s, o, a, l, f) {
            return s.runBackwards = 1,
                Ir(s).immediateRender = it(s.immediateRender),
                this.staggerTo(r, n, s, o, a, l, f)
        }
        ,
        t.staggerFromTo = function (r, n, s, o, a, l, f, _) {
            return o.startAt = s,
                Ir(o).immediateRender = it(o.immediateRender),
                this.staggerTo(r, n, o, a, l, f, _)
        }
        ,
        t.render = function (r, n, s) {
            var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = r <= 0 ? 0 : Re(r), _ = this._zTime < 0 != r < 0 && (this._initted || !l), h, c, p, d, D, m, y, g, x, C, b, w;
            if (this !== fe && f > a && r >= 0 && (f = a),
                f !== this._tTime || s || _) {
                if (o !== this._time && l && (f += this._time - o,
                    r += this._time - o),
                    h = f,
                    x = this._start,
                    g = this._ts,
                    m = !g,
                    _ && (l || (o = this._zTime),
                        (r || !n) && (this._zTime = r)),
                    this._repeat) {
                    if (b = this._yoyo,
                        D = l + this._rDelay,
                        this._repeat < -1 && r < 0)
                        return this.totalTime(D * 100 + r, n, s);
                    if (h = Re(f % D),
                        f === a ? (d = this._repeat,
                            h = l) : (d = ~~(f / D),
                                d && d === f / D && (h = l,
                                    d--),
                                h > l && (h = l)),
                        C = Dr(this._tTime, D),
                        !o && this._tTime && C !== d && (C = d),
                        b && d & 1 && (h = l - h,
                            w = 1),
                        d !== C && !this._lock) {
                        var S = b && C & 1
                            , T = S === (b && d & 1);
                        if (d < C && (S = !S),
                            o = S ? 0 : l,
                            this._lock = 1,
                            this.render(o || (w ? 0 : Re(d * D)), n, !l)._lock = 0,
                            this._tTime = f,
                            !n && this.parent && wt(this, "onRepeat"),
                            this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                            o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (l = this._dur,
                            a = this._tDur,
                            T && (this._lock = 2,
                                o = S ? l : -1e-4,
                                this.render(o, !0),
                                this.vars.repeatRefresh && !w && this.invalidate()),
                            this._lock = 0,
                            !this._ts && !m)
                            return this;
                        Ku(this, w)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (y = Sl(this, Re(o), Re(h)),
                    y && (f -= h - (h = y._start))),
                    this._tTime = f,
                    this._time = h,
                    this._act = !g,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                        this._initted = 1,
                        this._zTime = r,
                        o = 0),
                    !o && h && !n && (wt(this, "onStart"),
                        this._tTime !== f))
                    return this;
                if (h >= o && r >= 0)
                    for (c = this._first; c;) {
                        if (p = c._next,
                            (c._act || h >= c._start) && c._ts && y !== c) {
                            if (c.parent !== this)
                                return this.render(r, n, s);
                            if (c.render(c._ts > 0 ? (h - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (h - c._start) * c._ts, n, s),
                                h !== this._time || !this._ts && !m) {
                                y = 0,
                                    p && (f += this._zTime = -se);
                                break
                            }
                        }
                        c = p
                    }
                else {
                    c = this._last;
                    for (var P = r < 0 ? r : h; c;) {
                        if (p = c._prev,
                            (c._act || P <= c._end) && c._ts && y !== c) {
                            if (c.parent !== this)
                                return this.render(r, n, s);
                            if (c.render(c._ts > 0 ? (P - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (P - c._start) * c._ts, n, s || Ie && (c._initted || c._startAt)),
                                h !== this._time || !this._ts && !m) {
                                y = 0,
                                    p && (f += this._zTime = P ? -se : se);
                                break
                            }
                        }
                        c = p
                    }
                }
                if (y && !n && (this.pause(),
                    y.render(h >= o ? 0 : -se)._zTime = h >= o ? 1 : -1,
                    this._ts))
                    return this._start = x,
                        Jn(this),
                        this.render(r, n, s);
                this._onUpdate && !n && wt(this, "onUpdate", !0),
                    (f === a && this._tTime >= this.totalDuration() || !f && o) && (x === this._start || Math.abs(g) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (f === a && this._ts > 0 || !f && this._ts < 0) && wi(this, 1),
                        !n && !(r < 0 && !o) && (f || o || !a) && (wt(this, f === a && r >= 0 ? "onComplete" : "onReverseComplete", !0),
                            this._prom && !(f < a && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        t.add = function (r, n) {
            var s = this;
            if (oi(n) || (n = mt(this, n, r)),
                !(r instanceof yr)) {
                if (Xe(r))
                    return r.forEach(function (o) {
                        return s.add(o, n)
                    }),
                        this;
                if (ke(r))
                    return this.addLabel(r, n);
                if (ge(r))
                    r = be.delayedCall(0, r);
                else
                    return this
            }
            return this !== r ? $t(this, r, n) : this
        }
        ,
        t.getChildren = function (r, n, s, o) {
            r === void 0 && (r = !0),
                n === void 0 && (n = !0),
                s === void 0 && (s = !0),
                o === void 0 && (o = -xt);
            for (var a = [], l = this._first; l;)
                l._start >= o && (l instanceof be ? n && a.push(l) : (s && a.push(l),
                    r && a.push.apply(a, l.getChildren(!0, n, s)))),
                    l = l._next;
            return a
        }
        ,
        t.getById = function (r) {
            for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
                if (n[s].vars.id === r)
                    return n[s]
        }
        ,
        t.remove = function (r) {
            return ke(r) ? this.removeLabel(r) : ge(r) ? this.killTweensOf(r) : (Qn(this, r),
                r === this._recent && (this._recent = this._last),
                Ii(this))
        }
        ,
        t.totalTime = function (r, n) {
            return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = Re(ct.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
                u.prototype.totalTime.call(this, r, n),
                this._forcing = 0,
                this) : this._tTime
        }
        ,
        t.addLabel = function (r, n) {
            return this.labels[r] = mt(this, n),
                this
        }
        ,
        t.removeLabel = function (r) {
            return delete this.labels[r],
                this
        }
        ,
        t.addPause = function (r, n, s) {
            var o = be.delayedCall(0, n || Jr, s);
            return o.data = "isPause",
                this._hasPause = 1,
                $t(this, o, mt(this, r))
        }
        ,
        t.removePause = function (r) {
            var n = this._first;
            for (r = mt(this, r); n;)
                n._start === r && n.data === "isPause" && wi(n),
                    n = n._next
        }
        ,
        t.killTweensOf = function (r, n, s) {
            for (var o = this.getTweensOf(r, s), a = o.length; a--;)
                di !== o[a] && o[a].kill(r, n);
            return this
        }
        ,
        t.getTweensOf = function (r, n) {
            for (var s = [], o = Ct(r), a = this._first, l = oi(n), f; a;)
                a instanceof be ? xl(a._targets, o) && (l ? (!di || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && s.push(a) : (f = a.getTweensOf(o, n)).length && s.push.apply(s, f),
                    a = a._next;
            return s
        }
        ,
        t.tweenTo = function (r, n) {
            n = n || {};
            var s = this, o = mt(s, r), a = n, l = a.startAt, f = a.onStart, _ = a.onStartParams, h = a.immediateRender, c, p = be.to(s, Ft({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || se,
                onStart: function () {
                    if (s.pause(),
                        !c) {
                        var D = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        p._dur !== D && gr(p, D, 0, 1).render(p._time, !0, !0),
                            c = 1
                    }
                    f && f.apply(p, _ || [])
                }
            }, n));
            return h ? p.render(0) : p
        }
        ,
        t.tweenFromTo = function (r, n, s) {
            return this.tweenTo(n, Ft({
                startAt: {
                    time: mt(this, r)
                }
            }, s))
        }
        ,
        t.recent = function () {
            return this._recent
        }
        ,
        t.nextLabel = function (r) {
            return r === void 0 && (r = this._time),
                Ao(this, mt(this, r))
        }
        ,
        t.previousLabel = function (r) {
            return r === void 0 && (r = this._time),
                Ao(this, mt(this, r), 1)
        }
        ,
        t.currentLabel = function (r) {
            return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + se)
        }
        ,
        t.shiftChildren = function (r, n, s) {
            s === void 0 && (s = 0);
            for (var o = this._first, a = this.labels, l; o;)
                o._start >= s && (o._start += r,
                    o._end += r),
                    o = o._next;
            if (n)
                for (l in a)
                    a[l] >= s && (a[l] += r);
            return Ii(this)
        }
        ,
        t.invalidate = function (r) {
            var n = this._first;
            for (this._lock = 0; n;)
                n.invalidate(r),
                    n = n._next;
            return u.prototype.invalidate.call(this, r)
        }
        ,
        t.clear = function (r) {
            r === void 0 && (r = !0);
            for (var n = this._first, s; n;)
                s = n._next,
                    this.remove(n),
                    n = s;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
                r && (this.labels = {}),
                Ii(this)
        }
        ,
        t.totalDuration = function (r) {
            var n = 0, s = this, o = s._last, a = xt, l, f, _;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
            if (s._dirty) {
                for (_ = s.parent; o;)
                    l = o._prev,
                        o._dirty && o.totalDuration(),
                        f = o._start,
                        f > a && s._sort && o._ts && !s._lock ? (s._lock = 1,
                            $t(s, o, f - o._delay, 1)._lock = 0) : a = f,
                        f < 0 && o._ts && (n -= f,
                            (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += f / s._ts,
                                s._time -= f,
                                s._tTime -= f),
                            s.shiftChildren(-f, !1, -1 / 0),
                            a = 0),
                        o._end > n && o._ts && (n = o._end),
                        o = l;
                gr(s, s === fe && s._time > n ? s._time : n, 1, 1),
                    s._dirty = 0
            }
            return s._tDur
        }
        ,
        e.updateRoot = function (r) {
            if (fe._ts && (ku(fe, $n(r, fe)),
                Pu = ct.frame),
                ct.frame >= bo) {
                bo += _t.autoSleep || 120;
                var n = fe._first;
                if ((!n || !n._ts) && _t.autoSleep && ct._listeners.length < 2) {
                    for (; n && !n._ts;)
                        n = n._next;
                    n || ct.sleep()
                }
            }
        }
        ,
        e
}(yr);
Ft(tt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Hl = function (e, t, i, r, n, s, o) {
    var a = new nt(this._pt, e, t, 0, 1, ra, null, n), l = 0, f = 0, _, h, c, p, d, D, m, y;
    for (a.b = i,
        a.e = r,
        i += "",
        r += "",
        (m = ~r.indexOf("random(")) && (r = en(r)),
        s && (y = [i, r],
            s(y, e, t),
            i = y[0],
            r = y[1]),
        h = i.match(ss) || []; _ = ss.exec(r);)
        p = _[0],
            d = r.substring(l, _.index),
            c ? c = (c + 1) % 5 : d.substr(-5) === "rgba(" && (c = 1),
            p !== h[f++] && (D = parseFloat(h[f - 1]) || 0,
                a._pt = {
                    _next: a._pt,
                    p: d || f === 1 ? d : ",",
                    s: D,
                    c: p.charAt(1) === "=" ? fr(D, p) - D : parseFloat(p) - D,
                    m: c && c < 4 ? Math.round : 0
                },
                l = ss.lastIndex);
    return a.c = l < r.length ? r.substring(l, r.length) : "",
        a.fp = o,
        (Eu.test(r) || m) && (a.e = 0),
        this._pt = a,
        a
}, so = function (e, t, i, r, n, s, o, a, l, f) {
    ge(r) && (r = r(n || 0, e, s));
    var _ = e[t], h = i !== "get" ? i : ge(_) ? l ? e[t.indexOf("set") || !ge(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : _, c = ge(_) ? l ? jl : ta : uo, p;
    if (ke(r) && (~r.indexOf("random(") && (r = en(r)),
        r.charAt(1) === "=" && (p = fr(h, r) + (Ye(h) || 0),
            (p || p === 0) && (r = p))),
        !f || h !== r || Os)
        return !isNaN(h * r) && r !== "" ? (p = new nt(this._pt, e, t, +h || 0, r - (h || 0), typeof _ == "boolean" ? Ql : ia, 0, c),
            l && (p.fp = l),
            o && p.modifier(o, this, e),
            this._pt = p) : (!_ && !(t in e) && to(t, r),
                Hl.call(this, e, t, h, r, c, a || _t.stringFilter, l))
}, Gl = function (e, t, i, r, n) {
    if (ge(e) && (e = Wr(e, n, t, i, r)),
        !qt(e) || e.style && e.nodeType || Xe(e) || Cu(e))
        return ke(e) ? Wr(e, n, t, i, r) : e;
    var s = {}, o;
    for (o in e)
        s[o] = Wr(e[o], n, t, i, r);
    return s
}, Qu = function (e, t, i, r, n, s) {
    var o, a, l, f;
    if (ft[e] && (o = new ft[e]).init(n, o.rawVars ? t[e] : Gl(t[e], r, n, s, i), i, r, s) !== !1 && (i._pt = a = new nt(i._pt, n, e, 0, 1, o.render, o, 0, o.priority),
        i !== or))
        for (l = i._ptLookup[i._targets.indexOf(n)],
            f = o._props.length; f--;)
            l[o._props[f]] = a;
    return o
}, di, Os, oo = function u(e, t, i) {
    var r = e.vars, n = r.ease, s = r.startAt, o = r.immediateRender, a = r.lazy, l = r.onUpdate, f = r.onUpdateParams, _ = r.callbackScope, h = r.runBackwards, c = r.yoyoEase, p = r.keyframes, d = r.autoRevert, D = e._dur, m = e._startAt, y = e._targets, g = e.parent, x = g && g.data === "nested" ? g.vars.targets : y, C = e._overwrite === "auto" && !Qs, b = e.timeline, w, S, T, P, M, O, $, X, I, k, R, B, E;
    if (b && (!p || !n) && (n = "none"),
        e._ease = Xi(n, pr.ease),
        e._yEase = c ? qu(Xi(c === !0 ? n : c, pr.ease)) : 0,
        c && e._yoyo && !e._repeat && (c = e._yEase,
            e._yEase = e._ease,
            e._ease = c),
        e._from = !b && !!r.runBackwards,
        !b || p && !r.stagger) {
        if (X = y[0] ? Yi(y[0]).harness : 0,
            B = X && r[X.prop],
            w = Wn(r, io),
            m && (m._zTime < 0 && m.progress(1),
                t < 0 && h && o && !d ? m.render(-1, !0) : m.revert(h && D ? Tn : yl),
                m._lazy = 0),
            s) {
            if (wi(e._startAt = be.set(y, Ft({
                data: "isStart",
                overwrite: !1,
                parent: g,
                immediateRender: !0,
                lazy: !m && it(a),
                startAt: null,
                delay: 0,
                onUpdate: l,
                onUpdateParams: f,
                callbackScope: _,
                stagger: 0
            }, s))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ie || !o && !d) && e._startAt.revert(Tn),
                o && D && t <= 0 && i <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (h && D && !m) {
            if (t && (o = !1),
                T = Ft({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: o && !m && it(a),
                    immediateRender: o,
                    stagger: 0,
                    parent: g
                }, w),
                B && (T[X.prop] = B),
                wi(e._startAt = be.set(y, T)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ie ? e._startAt.revert(Tn) : e._startAt.render(-1, !0)),
                e._zTime = t,
                !o)
                u(e._startAt, se, se);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
            a = D && it(a) || a && !D,
            S = 0; S < y.length; S++) {
            if (M = y[S],
                $ = M._gsap || no(y)[S]._gsap,
                e._ptLookup[S] = k = {},
                Ts[$.id] && yi.length && Xn(),
                R = x === y ? S : x.indexOf(M),
                X && (I = new X).init(M, B || w, e, R, x) !== !1 && (e._pt = P = new nt(e._pt, M, I.name, 0, 1, I.render, I, 0, I.priority),
                    I._props.forEach(function (v) {
                        k[v] = P
                    }),
                    I.priority && (O = 1)),
                !X || B)
                for (T in w)
                    ft[T] && (I = Qu(T, w, e, R, M, x)) ? I.priority && (O = 1) : k[T] = P = so.call(e, M, T, "get", w[T], R, x, 0, r.stringFilter);
            e._op && e._op[S] && e.kill(M, e._op[S]),
                C && e._pt && (di = e,
                    fe.killTweensOf(M, k, e.globalTime(t)),
                    E = !e.parent,
                    di = 0),
                e._pt && a && (Ts[$.id] = 1)
        }
        O && na(e),
            e._onInit && e._onInit(e)
    }
    e._onUpdate = l,
        e._initted = (!e._op || e._pt) && !E,
        p && t <= 0 && b.render(xt, !0, !0)
}, Ul = function (e, t, i, r, n, s, o) {
    var a = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, f, _, h;
    if (!a)
        for (a = e._ptCache[t] = [],
            _ = e._ptLookup,
            h = e._targets.length; h--;) {
            if (l = _[h][t],
                l && l.d && l.d._pt)
                for (l = l.d._pt; l && l.p !== t && l.fp !== t;)
                    l = l._next;
            if (!l)
                return Os = 1,
                    e.vars[t] = "+=0",
                    oo(e, o),
                    Os = 0,
                    1;
            a.push(l)
        }
    for (h = a.length; h--;)
        f = a[h],
            l = f._pt || f,
            l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c,
            l.c = i - l.s,
            f.e && (f.e = ve(i) + Ye(f.e)),
            f.b && (f.b = l.s + Ye(f.b))
}, ql = function (e, t) {
    var i = e[0] ? Yi(e[0]).harness : 0, r = i && i.aliases, n, s, o, a;
    if (!r)
        return t;
    n = Hi({}, t);
    for (s in r)
        if (s in n)
            for (a = r[s].split(","),
                o = a.length; o--;)
                n[a[o]] = n[s];
    return n
}, Kl = function (e, t, i, r) {
    var n = t.ease || r || "power1.inOut", s, o;
    if (Xe(t))
        o = i[e] || (i[e] = []),
            t.forEach(function (a, l) {
                return o.push({
                    t: l / (t.length - 1) * 100,
                    v: a,
                    e: n
                })
            });
    else
        for (s in t)
            o = i[s] || (i[s] = []),
                s === "ease" || o.push({
                    t: parseFloat(e),
                    v: t[s],
                    e: n
                })
}, Wr = function (e, t, i, r, n) {
    return ge(e) ? e.call(t, i, r, n) : ke(e) && ~e.indexOf("random(") ? en(e) : e
}, Ju = ro + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ea = {};
rt(Ju + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
    return ea[u] = 1
});
var be = function (u) {
    yu(e, u);
    function e(i, r, n, s) {
        var o;
        typeof r == "number" && (n.duration = r,
            r = n,
            n = null),
            o = u.call(this, s ? r : Ir(r)) || this;
        var a = o.vars, l = a.duration, f = a.delay, _ = a.immediateRender, h = a.stagger, c = a.overwrite, p = a.keyframes, d = a.defaults, D = a.scrollTrigger, m = a.yoyoEase, y = r.parent || fe, g = (Xe(i) || Cu(i) ? oi(i[0]) : "length" in r) ? [i] : Ct(i), x, C, b, w, S, T, P, M;
        if (o._targets = g.length ? no(g) : In("GSAP target " + i + " not found. https://gsap.com", !_t.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = c,
            p || h || cn(l) || cn(f)) {
            if (r = o.vars,
                x = o.timeline = new tt({
                    data: "nested",
                    defaults: d || {},
                    targets: y && y.data === "nested" ? y.vars.targets : g
                }),
                x.kill(),
                x.parent = x._dp = Jt(o),
                x._start = 0,
                h || cn(l) || cn(f)) {
                if (w = g.length,
                    P = h && Iu(h),
                    qt(h))
                    for (S in h)
                        ~Ju.indexOf(S) && (M || (M = {}),
                            M[S] = h[S]);
                for (C = 0; C < w; C++)
                    b = Wn(r, ea),
                        b.stagger = 0,
                        m && (b.yoyoEase = m),
                        M && Hi(b, M),
                        T = g[C],
                        b.duration = +Wr(l, Jt(o), C, T, g),
                        b.delay = (+Wr(f, Jt(o), C, T, g) || 0) - o._delay,
                        !h && w === 1 && b.delay && (o._delay = f = b.delay,
                            o._start += f,
                            b.delay = 0),
                        x.to(T, b, P ? P(C, T, g) : 0),
                        x._ease = j.none;
                x.duration() ? l = f = 0 : o.timeline = 0
            } else if (p) {
                Ir(Ft(x.vars.defaults, {
                    ease: "none"
                })),
                    x._ease = Xi(p.ease || r.ease || "none");
                var O = 0, $, X, I;
                if (Xe(p))
                    p.forEach(function (k) {
                        return x.to(g, k, ">")
                    }),
                        x.duration();
                else {
                    b = {};
                    for (S in p)
                        S === "ease" || S === "easeEach" || Kl(S, p[S], b, p.easeEach);
                    for (S in b)
                        for ($ = b[S].sort(function (k, R) {
                            return k.t - R.t
                        }),
                            O = 0,
                            C = 0; C < $.length; C++)
                            X = $[C],
                                I = {
                                    ease: X.e,
                                    duration: (X.t - (C ? $[C - 1].t : 0)) / 100 * l
                                },
                                I[S] = X.v,
                                x.to(g, I, O),
                                O += I.duration;
                    x.duration() < l && x.to({}, {
                        duration: l - x.duration()
                    })
                }
            }
            l || o.duration(l = x.duration())
        } else
            o.timeline = 0;
        return c === !0 && !Qs && (di = Jt(o),
            fe.killTweensOf(g),
            di = 0),
            $t(y, Jt(o), n),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (_ || !l && !p && o._start === Re(y._time) && it(_) && Fl(Jt(o)) && y.data !== "nested") && (o._tTime = -se,
                o.render(Math.max(0, -f) || 0)),
            D && Lu(Jt(o), D),
            o
    }
    var t = e.prototype;
    return t.render = function (r, n, s) {
        var o = this._time, a = this._tDur, l = this._dur, f = r < 0, _ = r > a - se && !f ? a : r < se ? 0 : r, h, c, p, d, D, m, y, g, x;
        if (!l)
            Tl(this, r, n, s);
        else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (h = _,
                g = this.timeline,
                this._repeat) {
                if (d = l + this._rDelay,
                    this._repeat < -1 && f)
                    return this.totalTime(d * 100 + r, n, s);
                if (h = Re(_ % d),
                    _ === a ? (p = this._repeat,
                        h = l) : (p = ~~(_ / d),
                            p && p === _ / d && (h = l,
                                p--),
                            h > l && (h = l)),
                    m = this._yoyo && p & 1,
                    m && (x = this._yEase,
                        h = l - h),
                    D = Dr(this._tTime, d),
                    h === o && !s && this._initted)
                    return this._tTime = _,
                        this;
                p !== D && (g && this._yEase && Ku(g, m),
                    this.vars.repeatRefresh && !m && !this._lock && (this._lock = s = 1,
                        this.render(Re(d * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Nu(this, f ? r : h, s, n, _))
                    return this._tTime = 0,
                        this;
                if (o !== this._time)
                    return this;
                if (l !== this._dur)
                    return this.render(r, n, s)
            }
            if (this._tTime = _,
                this._time = h,
                !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                this.ratio = y = (x || this._ease)(h / l),
                this._from && (this.ratio = y = 1 - y),
                h && !o && !n && (wt(this, "onStart"),
                    this._tTime !== _))
                return this;
            for (c = this._pt; c;)
                c.r(y, c.d),
                    c = c._next;
            g && g.render(r < 0 ? r : !h && m ? -se : g._dur * g._ease(h / this._dur), n, s) || this._startAt && (this._zTime = r),
                this._onUpdate && !n && (f && Ss(this, r, n, s),
                    wt(this, "onUpdate")),
                this._repeat && p !== D && this.vars.onRepeat && !n && this.parent && wt(this, "onRepeat"),
                (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && Ss(this, r, !0, !0),
                    (r || !l) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && wi(this, 1),
                    !n && !(f && !o) && (_ || o || m) && (wt(this, _ === a ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(_ < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
        ,
        t.targets = function () {
            return this._targets
        }
        ,
        t.invalidate = function (r) {
            return (!r || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(r),
                u.prototype.invalidate.call(this, r)
        }
        ,
        t.resetTo = function (r, n, s, o) {
            tn || ct.wake(),
                this._ts || this.play();
            var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
            return this._initted || oo(this, a),
                l = this._ease(a / this._dur),
                Ul(this, r, n, s, o, l, a) ? this.resetTo(r, n, s, o) : (es(this, 0),
                    this.parent || Bu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                    this.render(0))
        }
        ,
        t.kill = function (r, n) {
            if (n === void 0 && (n = "all"),
                !r && (!n || n === "all"))
                return this._lazy = this._pt = 0,
                    this.parent ? Rr(this) : this;
            if (this.timeline) {
                var s = this.timeline.totalDuration();
                return this.timeline.killTweensOf(r, n, di && di.vars.overwrite !== !0)._first || Rr(this),
                    this.parent && s !== this.timeline.totalDuration() && gr(this, this._dur * this.timeline._tDur / s, 0, 1),
                    this
            }
            var o = this._targets, a = r ? Ct(r) : o, l = this._ptLookup, f = this._pt, _, h, c, p, d, D, m;
            if ((!n || n === "all") && wl(o, a))
                return n === "all" && (this._pt = 0),
                    Rr(this);
            for (_ = this._op = this._op || [],
                n !== "all" && (ke(n) && (d = {},
                    rt(n, function (y) {
                        return d[y] = 1
                    }),
                    n = d),
                    n = ql(o, n)),
                m = o.length; m--;)
                if (~a.indexOf(o[m])) {
                    h = l[m],
                        n === "all" ? (_[m] = n,
                            p = h,
                            c = {}) : (c = _[m] = _[m] || {},
                                p = n);
                    for (d in p)
                        D = h && h[d],
                            D && ((!("kill" in D.d) || D.d.kill(d) === !0) && Qn(this, D, "_pt"),
                                delete h[d]),
                            c !== "all" && (c[d] = 1)
                }
            return this._initted && !this._pt && f && Rr(this),
                this
        }
        ,
        e.to = function (r, n) {
            return new e(r, n, arguments[2])
        }
        ,
        e.from = function (r, n) {
            return Xr(1, arguments)
        }
        ,
        e.delayedCall = function (r, n, s, o) {
            return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: r,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: s,
                onReverseCompleteParams: s,
                callbackScope: o
            })
        }
        ,
        e.fromTo = function (r, n, s) {
            return Xr(2, arguments)
        }
        ,
        e.set = function (r, n) {
            return n.duration = 0,
                n.repeatDelay || (n.repeat = 0),
                new e(r, n)
        }
        ,
        e.killTweensOf = function (r, n, s) {
            return fe.killTweensOf(r, n, s)
        }
        ,
        e
}(yr);
Ft(be.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
rt("staggerTo,staggerFrom,staggerFromTo", function (u) {
    be[u] = function () {
        var e = new tt
            , t = As.call(arguments, 0);
        return t.splice(u === "staggerFromTo" ? 5 : 4, 0, 0),
            e[u].apply(e, t)
    }
});
var uo = function (e, t, i) {
    return e[t] = i
}
    , ta = function (e, t, i) {
        return e[t](i)
    }
    , jl = function (e, t, i, r) {
        return e[t](r.fp, i)
    }
    , Zl = function (e, t, i) {
        return e.setAttribute(t, i)
    }
    , ao = function (e, t) {
        return ge(e[t]) ? ta : Js(e[t]) && e.setAttribute ? Zl : uo
    }
    , ia = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
    , Ql = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
    , ra = function (e, t) {
        var i = t._pt
            , r = "";
        if (!e && t.b)
            r = t.b;
        else if (e === 1 && t.e)
            r = t.e;
        else {
            for (; i;)
                r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r,
                    i = i._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    }
    , lo = function (e, t) {
        for (var i = t._pt; i;)
            i.r(e, i.d),
                i = i._next
    }
    , Jl = function (e, t, i, r) {
        for (var n = this._pt, s; n;)
            s = n._next,
                n.p === r && n.modifier(e, t, i),
                n = s
    }
    , ef = function (e) {
        for (var t = this._pt, i, r; t;)
            r = t._next,
                t.p === e && !t.op || t.op === e ? Qn(this, t, "_pt") : t.dep || (i = 1),
                t = r;
        return !i
    }
    , tf = function (e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
    }
    , na = function (e) {
        for (var t = e._pt, i, r, n, s; t;) {
            for (i = t._next,
                r = n; r && r.pr > t.pr;)
                r = r._next;
            (t._prev = r ? r._prev : s) ? t._prev._next = t : n = t,
                (t._next = r) ? r._prev = t : s = t,
                t = i
        }
        e._pt = n
    }
    , nt = function () {
        function u(t, i, r, n, s, o, a, l, f) {
            this.t = i,
                this.s = n,
                this.c = s,
                this.p = r,
                this.r = o || ia,
                this.d = a || this,
                this.set = l || uo,
                this.pr = f || 0,
                this._next = t,
                t && (t._prev = this)
        }
        var e = u.prototype;
        return e.modifier = function (i, r, n) {
            this.mSet = this.mSet || this.set,
                this.set = tf,
                this.m = i,
                this.mt = n,
                this.tween = r
        }
            ,
            u
    }();
rt(ro + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (u) {
    return io[u] = 1
});
pt.TweenMax = pt.TweenLite = be;
pt.TimelineLite = pt.TimelineMax = tt;
fe = new tt({
    sortChildren: !1,
    defaults: pr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
_t.stringFilter = Uu;
var vr = []
    , Pn = {}
    , rf = []
    , Mo = 0
    , fs = function (e) {
        return (Pn[e] || rf).map(function (t) {
            return t()
        })
    }
    , Bs = function () {
        var e = Date.now()
            , t = [];
        e - Mo > 2 && (fs("matchMediaInit"),
            vr.forEach(function (i) {
                var r = i.queries, n = i.conditions, s, o, a, l;
                for (o in r)
                    s = yt.matchMedia(r[o]).matches,
                        s && (a = 1),
                        s !== n[o] && (n[o] = s,
                            l = 1);
                l && (i.revert(),
                    a && t.push(i))
            }),
            fs("matchMediaRevert"),
            t.forEach(function (i) {
                return i.onMatch(i)
            }),
            Mo = e,
            fs("matchMedia"))
    }
    , sa = function () {
        function u(t, i) {
            this.selector = i && ks(i),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                t && this.add(t)
        }
        var e = u.prototype;
        return e.add = function (i, r, n) {
            ge(i) && (n = r,
                r = i,
                i = ge);
            var s = this
                , o = function () {
                    var l = we, f = s.selector, _;
                    return l && l !== s && l.data.push(s),
                        n && (s.selector = ks(n)),
                        we = s,
                        _ = r.apply(s, arguments),
                        ge(_) && s._r.push(_),
                        we = l,
                        s.selector = f,
                        s.isReverted = !1,
                        _
                };
            return s.last = o,
                i === ge ? o(s) : i ? s[i] = o : o
        }
            ,
            e.ignore = function (i) {
                var r = we;
                we = null,
                    i(this),
                    we = r
            }
            ,
            e.getTweens = function () {
                var i = [];
                return this.data.forEach(function (r) {
                    return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof be && !(r.parent && r.parent.data === "nested") && i.push(r)
                }),
                    i
            }
            ,
            e.clear = function () {
                this._r.length = this.data.length = 0
            }
            ,
            e.kill = function (i, r) {
                var n = this;
                if (i) {
                    var s = this.getTweens();
                    this.data.forEach(function (a) {
                        a.data === "isFlip" && (a.revert(),
                            a.getChildren(!0, !0, !1).forEach(function (l) {
                                return s.splice(s.indexOf(l), 1)
                            }))
                    }),
                        s.map(function (a) {
                            return {
                                g: a.globalTime(0),
                                t: a
                            }
                        }).sort(function (a, l) {
                            return l.g - a.g || -1
                        }).forEach(function (a) {
                            return a.t.revert(i)
                        }),
                        this.data.forEach(function (a) {
                            return !(a instanceof yr) && a.revert && a.revert(i)
                        }),
                        this._r.forEach(function (a) {
                            return a(i, n)
                        }),
                        this.isReverted = !0
                } else
                    this.data.forEach(function (a) {
                        return a.kill && a.kill()
                    });
                if (this.clear(),
                    r) {
                    var o = vr.indexOf(this);
                    ~o && vr.splice(o, 1)
                }
            }
            ,
            e.revert = function (i) {
                this.kill(i || {})
            }
            ,
            u
    }()
    , nf = function () {
        function u(t) {
            this.contexts = [],
                this.scope = t
        }
        var e = u.prototype;
        return e.add = function (i, r, n) {
            qt(i) || (i = {
                matches: i
            });
            var s = new sa(0, n || this.scope), o = s.conditions = {}, a, l, f;
            this.contexts.push(s),
                r = s.add("onMatch", r),
                s.queries = i;
            for (l in i)
                l === "all" ? f = 1 : (a = yt.matchMedia(i[l]),
                    a && (vr.indexOf(s) < 0 && vr.push(s),
                        (o[l] = a.matches) && (f = 1),
                        a.addListener ? a.addListener(Bs) : a.addEventListener("change", Bs)));
            return f && r(s),
                this
        }
            ,
            e.revert = function (i) {
                this.kill(i || {})
            }
            ,
            e.kill = function (i) {
                this.contexts.forEach(function (r) {
                    return r.kill(i, !0)
                })
            }
            ,
            u
    }()
    , Vn = {
        registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            t.forEach(function (r) {
                return zl(r)
            })
        },
        timeline: function (e) {
            return new tt(e)
        },
        getTweensOf: function (e, t) {
            return fe.getTweensOf(e, t)
        },
        getProperty: function (e, t, i, r) {
            ke(e) && (e = Ct(e)[0]);
            var n = Yi(e || {}).get
                , s = i ? Ou : Mu;
            return i === "native" && (i = ""),
                e && (t ? s((ft[t] && ft[t].get || n)(e, t, i, r)) : function (o, a, l) {
                    return s((ft[o] && ft[o].get || n)(e, o, a, l))
                }
                )
        },
        quickSetter: function (e, t, i) {
            if (e = Ct(e),
                e.length > 1) {
                var r = e.map(function (f) {
                    return Dt.quickSetter(f, t, i)
                })
                    , n = r.length;
                return function (f) {
                    for (var _ = n; _--;)
                        r[_](f)
                }
            }
            e = e[0] || {};
            var s = ft[t]
                , o = Yi(e)
                , a = o.harness && (o.harness.aliases || {})[t] || t
                , l = s ? function (f) {
                    var _ = new s;
                    or._pt = 0,
                        _.init(e, i ? f + i : f, or, 0, [e]),
                        _.render(1, _),
                        or._pt && lo(1, or)
                }
                    : o.set(e, a);
            return s ? l : function (f) {
                return l(e, a, i ? f + i : f, o, 1)
            }
        },
        quickTo: function (e, t, i) {
            var r, n = Dt.to(e, Hi((r = {},
                r[t] = "+=0.1",
                r.paused = !0,
                r), i || {})), s = function (a, l, f) {
                    return n.resetTo(t, a, l, f)
                };
            return s.tween = n,
                s
        },
        isTweening: function (e) {
            return fe.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return e && e.ease && (e.ease = Xi(e.ease, pr.ease)),
                To(pr, e || {})
        },
        config: function (e) {
            return To(_t, e || {})
        },
        registerEffect: function (e) {
            var t = e.name
                , i = e.effect
                , r = e.plugins
                , n = e.defaults
                , s = e.extendTimeline;
            (r || "").split(",").forEach(function (o) {
                return o && !ft[o] && !pt[o] && In(t + " effect requires " + o + " plugin.")
            }),
                os[t] = function (o, a, l) {
                    return i(Ct(o), Ft(a || {}, n), l)
                }
                ,
                s && (tt.prototype[t] = function (o, a, l) {
                    return this.add(os[t](o, qt(a) ? a : (l = a) && {}, this), l)
                }
                )
        },
        registerEase: function (e, t) {
            j[e] = Xi(t)
        },
        parseEase: function (e, t) {
            return arguments.length ? Xi(e, t) : j
        },
        getById: function (e) {
            return fe.getById(e)
        },
        exportRoot: function (e, t) {
            e === void 0 && (e = {});
            var i = new tt(e), r, n;
            for (i.smoothChildTiming = it(e.smoothChildTiming),
                fe.remove(i),
                i._dp = 0,
                i._time = i._tTime = fe._time,
                r = fe._first; r;)
                n = r._next,
                    (t || !(!r._dur && r instanceof be && r.vars.onComplete === r._targets[0])) && $t(i, r, r._start - r._delay),
                    r = n;
            return $t(fe, i, 0),
                i
        },
        context: function (e, t) {
            return e ? new sa(e, t) : we
        },
        matchMedia: function (e) {
            return new nf(e)
        },
        matchMediaRefresh: function () {
            return vr.forEach(function (e) {
                var t = e.conditions, i, r;
                for (r in t)
                    t[r] && (t[r] = !1,
                        i = 1);
                i && e.revert()
            }) || Bs()
        },
        addEventListener: function (e, t) {
            var i = Pn[e] || (Pn[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function (e, t) {
            var i = Pn[e]
                , r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: Rl,
            wrapYoyo: Ll,
            distribute: Iu,
            random: Wu,
            snap: Xu,
            normalize: Bl,
            getUnit: Ye,
            clamp: Al,
            splitColor: Hu,
            toArray: Ct,
            selector: ks,
            mapRange: Vu,
            pipe: Ml,
            unitize: Ol,
            interpolate: Nl,
            shuffle: Yu
        },
        install: Tu,
        effects: os,
        ticker: ct,
        updateRoot: tt.updateRoot,
        plugins: ft,
        globalTimeline: fe,
        core: {
            PropTween: nt,
            globals: Su,
            Tween: be,
            Timeline: tt,
            Animation: yr,
            getCache: Yi,
            _removeLinkedListItem: Qn,
            reverting: function () {
                return Ie
            },
            context: function (e) {
                return e && we && (we.data.push(e),
                    e._ctx = we),
                    we
            },
            suppressOverwrites: function (e) {
                return Qs = e
            }
        }
    };
rt("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
    return Vn[u] = be[u]
});
ct.add(tt.updateRoot);
or = Vn.to({}, {
    duration: 0
});
var sf = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;)
        i = i._next;
    return i
}
    , of = function (e, t) {
        var i = e._targets, r, n, s;
        for (r in t)
            for (n = i.length; n--;)
                s = e._ptLookup[n][r],
                    s && (s = s.d) && (s._pt && (s = sf(s, r)),
                        s && s.modifier && s.modifier(t[r], e, i[n], r))
    }
    , cs = function (e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function (r, n, s) {
                s._onInit = function (o) {
                    var a, l;
                    if (ke(n) && (a = {},
                        rt(n, function (f) {
                            return a[f] = 1
                        }),
                        n = a),
                        t) {
                        a = {};
                        for (l in n)
                            a[l] = t(n[l]);
                        n = a
                    }
                    of(o, n)
                }
            }
        }
    }
    , Dt = Vn.registerPlugin({
        name: "attr",
        init: function (e, t, i, r, n) {
            var s, o, a;
            this.tween = i;
            for (s in t)
                a = e.getAttribute(s) || "",
                    o = this.add(e, "setAttribute", (a || 0) + "", t[s], r, n, 0, 0, s),
                    o.op = s,
                    o.b = a,
                    this._props.push(s)
        },
        render: function (e, t) {
            for (var i = t._pt; i;)
                Ie ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
                    i = i._next
        }
    }, {
        name: "endArray",
        init: function (e, t) {
            for (var i = t.length; i--;)
                this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, cs("roundProps", Ms), cs("modifiers"), cs("snap", Xu)) || Vn;
be.version = tt.version = Dt.version = "3.11.4";
bu = 1;
xu() && mr();
j.Power0;
j.Power1;
j.Power2;
j.Power3;
j.Power4;
j.Linear;
j.Quad;
j.Cubic;
j.Quart;
j.Quint;
j.Strong;
j.Elastic;
j.Back;
j.SteppedEase;
j.Bounce;
j.Sine;
j.Expo;
j.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Oo, _i, cr, fo, Ni, Bo, co, uf = function () {
    return typeof window < "u"
}, ui = {}, Bi = 180 / Math.PI, hr = Math.PI / 180, er = Math.atan2, Ro = 1e8, ho = /([A-Z])/g, af = /(left|right|width|margin|padding|x)/i, lf = /[\s,\(]\S/, ii = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Rs = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, ff = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, cf = function (e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, hf = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
}, oa = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, ua = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, df = function (e, t, i) {
    return e.style[t] = i
}, _f = function (e, t, i) {
    return e.style.setProperty(t, i)
}, pf = function (e, t, i) {
    return e._gsap[t] = i
}, Df = function (e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, gf = function (e, t, i, r, n) {
    var s = e._gsap;
    s.scaleX = s.scaleY = i,
        s.renderTransform(n, s)
}, mf = function (e, t, i, r, n) {
    var s = e._gsap;
    s[t] = i,
        s.renderTransform(n, s)
}, ce = "transform", Bt = ce + "Origin", yf = function (e, t) {
    var i = this
        , r = this.target
        , n = r.style;
    if (e in ui) {
        if (this.tfm = this.tfm || {},
            e !== "transform" && (e = ii[e] || e,
                ~e.indexOf(",") ? e.split(",").forEach(function (s) {
                    return i.tfm[s] = ei(r, s)
                }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : ei(r, e)),
            this.props.indexOf(ce) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(Bt, t, "")),
            e = ce
    }
    (n || t) && this.props.push(e, t, n[e])
}, aa = function (e) {
    e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
}, vf = function () {
    var e = this.props, t = this.target, i = t.style, r = t._gsap, n, s;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].replace(ho, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            r[s] = this.tfm[s];
        r.svg && (r.renderTransform(),
            t.setAttribute("data-svg-origin", this.svgo || "")),
            n = co(),
            n && !n.isStart && !i[ce] && (aa(i),
                r.uncache = 1)
    }
}, la = function (e, t) {
    var i = {
        target: e,
        props: [],
        revert: vf,
        save: yf
    };
    return t && t.split(",").forEach(function (r) {
        return i.save(r)
    }),
        i
}, fa, Ls = function (e, t) {
    var i = _i.createElementNS ? _i.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : _i.createElement(e);
    return i.style ? i : _i.createElement(e)
}, Gt = function u(e, t, i) {
    var r = getComputedStyle(e);
    return r[t] || r.getPropertyValue(t.replace(ho, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && u(e, xr(t) || t, 1) || ""
}, Lo = "O,Moz,ms,Ms,Webkit".split(","), xr = function (e, t, i) {
    var r = t || Ni
        , n = r.style
        , s = 5;
    if (e in n && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Lo[s] + e in n);)
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Lo[s] : "") + e
}, Ns = function () {
    uf() && window.document && (Oo = window,
        _i = Oo.document,
        cr = _i.documentElement,
        Ni = Ls("div") || {
            style: {}
        },
        Ls("div"),
        ce = xr(ce),
        Bt = ce + "Origin",
        Ni.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        fa = !!xr("perspective"),
        co = Dt.core.reverting,
        fo = 1)
}, hs = function u(e) {
    var t = Ls("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
    if (cr.appendChild(t),
        t.appendChild(this),
        this.style.display = "block",
        e)
        try {
            s = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = u
        } catch { }
    else
        this._gsapBBox && (s = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        cr.removeChild(t),
        this.style.cssText = n,
        s
}, No = function (e, t) {
    for (var i = t.length; i--;)
        if (e.hasAttribute(t[i]))
            return e.getAttribute(t[i])
}, ca = function (e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = hs.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === hs || (t = hs.call(e, !0)),
        t && !t.width && !t.x && !t.y ? {
            x: +No(e, ["x", "cx", "x1"]) || 0,
            y: +No(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
}, ha = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ca(e))
}, rn = function (e, t) {
    if (t) {
        var i = e.style;
        t in ui && t !== Bt && (t = ce),
            i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
                i.removeProperty(t.replace(ho, "-$1").toLowerCase())) : i.removeAttribute(t)
    }
}, pi = function (e, t, i, r, n, s) {
    var o = new nt(e._pt, t, i, 0, 1, s ? ua : oa);
    return e._pt = o,
        o.b = r,
        o.e = n,
        e._props.push(i),
        o
}, zo = {
    deg: 1,
    rad: 1,
    turn: 1
}, xf = {
    grid: 1,
    flex: 1
}, Ei = function u(e, t, i, r) {
    var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = Ni.style, a = af.test(t), l = e.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (a ? "Width" : "Height"), _ = 100, h = r === "px", c = r === "%", p, d, D, m;
    return r === s || !n || zo[r] || zo[s] ? n : (s !== "px" && !h && (n = u(e, t, i, "px")),
        m = e.getCTM && ha(e),
        (c || s === "%") && (ui[t] || ~t.indexOf("adius")) ? (p = m ? e.getBBox()[a ? "width" : "height"] : e[f],
            ve(c ? n / p * _ : n / 100 * p)) : (o[a ? "width" : "height"] = _ + (h ? s : r),
                d = ~t.indexOf("adius") || r === "em" && e.appendChild && !l ? e : e.parentNode,
                m && (d = (e.ownerSVGElement || {}).parentNode),
                (!d || d === _i || !d.appendChild) && (d = _i.body),
                D = d._gsap,
                D && c && D.width && a && D.time === ct.time && !D.uncache ? ve(n / D.width * _) : ((c || s === "%") && !xf[Gt(d, "display")] && (o.position = Gt(e, "position")),
                    d === e && (o.position = "static"),
                    d.appendChild(Ni),
                    p = Ni[f],
                    d.removeChild(Ni),
                    o.position = "absolute",
                    a && c && (D = Yi(d),
                        D.time = ct.time,
                        D.width = d[f]),
                    ve(h ? p * n / _ : p && n ? _ / p * n : 0))))
}, ei = function (e, t, i, r) {
    var n;
    return fo || Ns(),
        t in ii && t !== "transform" && (t = ii[t],
            ~t.indexOf(",") && (t = t.split(",")[0])),
        ui[t] && t !== "transform" ? (n = sn(e, r),
            n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Gn(Gt(e, Bt)) + " " + n.zOrigin + "px") : (n = e.style[t],
                (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Hn[t] && Hn[t](e, t, i) || Gt(e, t) || Au(e, t) || (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Ei(e, t, n, i) + i : n
}, Cf = function (e, t, i, r) {
    if (!i || i === "none") {
        var n = xr(t, e, 1)
            , s = n && Gt(e, n, 1);
        s && s !== i ? (t = n,
            i = s) : t === "borderColor" && (i = Gt(e, "borderTopColor"))
    }
    var o = new nt(this._pt, e.style, t, 0, 1, ra), a = 0, l = 0, f, _, h, c, p, d, D, m, y, g, x, C;
    if (o.b = i,
        o.e = r,
        i += "",
        r += "",
        r === "auto" && (e.style[t] = r,
            r = Gt(e, t) || r,
            e.style[t] = i),
        f = [i, r],
        Uu(f),
        i = f[0],
        r = f[1],
        h = i.match(sr) || [],
        C = r.match(sr) || [],
        C.length) {
        for (; _ = sr.exec(r);)
            D = _[0],
                y = r.substring(a, _.index),
                p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
                D !== (d = h[l++] || "") && (c = parseFloat(d) || 0,
                    x = d.substr((c + "").length),
                    D.charAt(1) === "=" && (D = fr(c, D) + x),
                    m = parseFloat(D),
                    g = D.substr((m + "").length),
                    a = sr.lastIndex - g.length,
                    g || (g = g || _t.units[t] || x,
                        a === r.length && (r += g,
                            o.e += g)),
                    x !== g && (c = Ei(e, t, d, g) || 0),
                    o._pt = {
                        _next: o._pt,
                        p: y || l === 1 ? y : ",",
                        s: c,
                        c: m - c,
                        m: p && p < 4 || t === "zIndex" ? Math.round : 0
                    });
        o.c = a < r.length ? r.substring(a, r.length) : ""
    } else
        o.r = t === "display" && r === "none" ? ua : oa;
    return Eu.test(r) && (o.e = 0),
        this._pt = o,
        o
}, Yo = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, wf = function (e) {
    var t = e.split(" ")
        , i = t[0]
        , r = t[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i,
        i = r,
        r = e),
        t[0] = Yo[i] || i,
        t[1] = Yo[r] || r,
        t.join(" ")
}, Ef = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t, r = i.style, n = t.u, s = i._gsap, o, a, l;
        if (n === "all" || n === !0)
            r.cssText = "",
                a = 1;
        else
            for (n = n.split(","),
                l = n.length; --l > -1;)
                o = n[l],
                    ui[o] && (a = 1,
                        o = o === "transformOrigin" ? Bt : ce),
                    rn(i, o);
        a && (rn(i, ce),
            s && (s.svg && i.removeAttribute("transform"),
                sn(i, 1),
                s.uncache = 1,
                aa(r)))
    }
}, Hn = {
    clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
            var s = e._pt = new nt(e._pt, t, i, 0, 0, Ef);
            return s.u = r,
                s.pr = -10,
                s.tween = n,
                e._props.push(i),
                1
        }
    }
}, nn = [1, 0, 0, 1, 0, 0], da = {}, _a = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Io = function (e) {
    var t = Gt(e, ce);
    return _a(t) ? nn : t.substr(7).match(wu).map(ve)
}, _o = function (e, t) {
    var i = e._gsap || Yi(e), r = e.style, n = Io(e), s, o, a, l;
    return i.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix,
        n = [a.a, a.b, a.c, a.d, a.e, a.f],
        n.join(",") === "1,0,0,1,0,0" ? nn : n) : (n === nn && !e.offsetParent && e !== cr && !i.svg && (a = r.display,
            r.display = "block",
            s = e.parentNode,
            (!s || !e.offsetParent) && (l = 1,
                o = e.nextElementSibling,
                cr.appendChild(e)),
            n = Io(e),
            a ? r.display = a : rn(e, "display"),
            l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : cr.removeChild(e))),
            t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, zs = function (e, t, i, r, n, s) {
    var o = e._gsap, a = n || _o(e, !0), l = o.xOrigin || 0, f = o.yOrigin || 0, _ = o.xOffset || 0, h = o.yOffset || 0, c = a[0], p = a[1], d = a[2], D = a[3], m = a[4], y = a[5], g = t.split(" "), x = parseFloat(g[0]) || 0, C = parseFloat(g[1]) || 0, b, w, S, T;
    i ? a !== nn && (w = c * D - p * d) && (S = x * (D / w) + C * (-d / w) + (d * y - D * m) / w,
        T = x * (-p / w) + C * (c / w) - (c * y - p * m) / w,
        x = S,
        C = T) : (b = ca(e),
            x = b.x + (~g[0].indexOf("%") ? x / 100 * b.width : x),
            C = b.y + (~(g[1] || g[0]).indexOf("%") ? C / 100 * b.height : C)),
        r || r !== !1 && o.smooth ? (m = x - l,
            y = C - f,
            o.xOffset = _ + (m * c + y * d) - m,
            o.yOffset = h + (m * p + y * D) - y) : o.xOffset = o.yOffset = 0,
        o.xOrigin = x,
        o.yOrigin = C,
        o.smooth = !!r,
        o.origin = t,
        o.originIsAbsolute = !!i,
        e.style[Bt] = "0px 0px",
        s && (pi(s, o, "xOrigin", l, x),
            pi(s, o, "yOrigin", f, C),
            pi(s, o, "xOffset", _, o.xOffset),
            pi(s, o, "yOffset", h, o.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + C)
}, sn = function (e, t) {
    var i = e._gsap || new Zu(e);
    if ("x" in i && !t && !i.uncache)
        return i;
    var r = e.style, n = i.scaleX < 0, s = "px", o = "deg", a = getComputedStyle(e), l = Gt(e, Bt) || "0", f, _, h, c, p, d, D, m, y, g, x, C, b, w, S, T, P, M, O, $, X, I, k, R, B, E, v, q, oe, Me, te, U;
    return f = _ = h = d = D = m = y = g = x = 0,
        c = p = 1,
        i.svg = !!(e.getCTM && ha(e)),
        a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (r[ce] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[ce] !== "none" ? a[ce] : "")),
            r.scale = r.rotate = r.translate = "none"),
        w = _o(e, i.svg),
        i.svg && (i.uncache ? (B = e.getBBox(),
            l = i.xOrigin - B.x + "px " + (i.yOrigin - B.y) + "px",
            R = "") : R = !t && e.getAttribute("data-svg-origin"),
            zs(e, R || l, !!R || i.originIsAbsolute, i.smooth !== !1, w)),
        C = i.xOrigin || 0,
        b = i.yOrigin || 0,
        w !== nn && (M = w[0],
            O = w[1],
            $ = w[2],
            X = w[3],
            f = I = w[4],
            _ = k = w[5],
            w.length === 6 ? (c = Math.sqrt(M * M + O * O),
                p = Math.sqrt(X * X + $ * $),
                d = M || O ? er(O, M) * Bi : 0,
                y = $ || X ? er($, X) * Bi + d : 0,
                y && (p *= Math.abs(Math.cos(y * hr))),
                i.svg && (f -= C - (C * M + b * $),
                    _ -= b - (C * O + b * X))) : (U = w[6],
                        Me = w[7],
                        v = w[8],
                        q = w[9],
                        oe = w[10],
                        te = w[11],
                        f = w[12],
                        _ = w[13],
                        h = w[14],
                        S = er(U, oe),
                        D = S * Bi,
                        S && (T = Math.cos(-S),
                            P = Math.sin(-S),
                            R = I * T + v * P,
                            B = k * T + q * P,
                            E = U * T + oe * P,
                            v = I * -P + v * T,
                            q = k * -P + q * T,
                            oe = U * -P + oe * T,
                            te = Me * -P + te * T,
                            I = R,
                            k = B,
                            U = E),
                        S = er(-$, oe),
                        m = S * Bi,
                        S && (T = Math.cos(-S),
                            P = Math.sin(-S),
                            R = M * T - v * P,
                            B = O * T - q * P,
                            E = $ * T - oe * P,
                            te = X * P + te * T,
                            M = R,
                            O = B,
                            $ = E),
                        S = er(O, M),
                        d = S * Bi,
                        S && (T = Math.cos(S),
                            P = Math.sin(S),
                            R = M * T + O * P,
                            B = I * T + k * P,
                            O = O * T - M * P,
                            k = k * T - I * P,
                            M = R,
                            I = B),
                        D && Math.abs(D) + Math.abs(d) > 359.9 && (D = d = 0,
                            m = 180 - m),
                        c = ve(Math.sqrt(M * M + O * O + $ * $)),
                        p = ve(Math.sqrt(k * k + U * U)),
                        S = er(I, k),
                        y = Math.abs(S) > 2e-4 ? S * Bi : 0,
                        x = te ? 1 / (te < 0 ? -te : te) : 0),
            i.svg && (R = e.getAttribute("transform"),
                i.forceCSS = e.setAttribute("transform", "") || !_a(Gt(e, ce)),
                R && e.setAttribute("transform", R))),
        Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (c *= -1,
            y += d <= 0 ? 180 : -180,
            d += d <= 0 ? 180 : -180) : (p *= -1,
                y += y <= 0 ? 180 : -180)),
        t = t || i.uncache,
        i.x = f - ((i.xPercent = f && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + s,
        i.y = _ - ((i.yPercent = _ && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + s,
        i.z = h + s,
        i.scaleX = ve(c),
        i.scaleY = ve(p),
        i.rotation = ve(d) + o,
        i.rotationX = ve(D) + o,
        i.rotationY = ve(m) + o,
        i.skewX = y + o,
        i.skewY = g + o,
        i.transformPerspective = x + s,
        (i.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (r[Bt] = Gn(l)),
        i.xOffset = i.yOffset = 0,
        i.force3D = _t.force3D,
        i.renderTransform = i.svg ? bf : fa ? pa : Ff,
        i.uncache = 0,
        i
}, Gn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, ds = function (e, t, i) {
    var r = Ye(t);
    return ve(parseFloat(t) + parseFloat(Ei(e, "x", i + "px", r))) + r
}, Ff = function (e, t) {
    t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        pa(e, t)
}, Mi = "0deg", kr = "0px", Oi = ") ", pa = function (e, t) {
    var i = t || this
        , r = i.xPercent
        , n = i.yPercent
        , s = i.x
        , o = i.y
        , a = i.z
        , l = i.rotation
        , f = i.rotationY
        , _ = i.rotationX
        , h = i.skewX
        , c = i.skewY
        , p = i.scaleX
        , d = i.scaleY
        , D = i.transformPerspective
        , m = i.force3D
        , y = i.target
        , g = i.zOrigin
        , x = ""
        , C = m === "auto" && e && e !== 1 || m === !0;
    if (g && (_ !== Mi || f !== Mi)) {
        var b = parseFloat(f) * hr, w = Math.sin(b), S = Math.cos(b), T;
        b = parseFloat(_) * hr,
            T = Math.cos(b),
            s = ds(y, s, w * T * -g),
            o = ds(y, o, -Math.sin(b) * -g),
            a = ds(y, a, S * T * -g + g)
    }
    D !== kr && (x += "perspective(" + D + Oi),
        (r || n) && (x += "translate(" + r + "%, " + n + "%) "),
        (C || s !== kr || o !== kr || a !== kr) && (x += a !== kr || C ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Oi),
        l !== Mi && (x += "rotate(" + l + Oi),
        f !== Mi && (x += "rotateY(" + f + Oi),
        _ !== Mi && (x += "rotateX(" + _ + Oi),
        (h !== Mi || c !== Mi) && (x += "skew(" + h + ", " + c + Oi),
        (p !== 1 || d !== 1) && (x += "scale(" + p + ", " + d + Oi),
        y.style[ce] = x || "translate(0, 0)"
}, bf = function (e, t) {
    var i = t || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, a = i.rotation, l = i.skewX, f = i.skewY, _ = i.scaleX, h = i.scaleY, c = i.target, p = i.xOrigin, d = i.yOrigin, D = i.xOffset, m = i.yOffset, y = i.forceCSS, g = parseFloat(s), x = parseFloat(o), C, b, w, S, T;
    a = parseFloat(a),
        l = parseFloat(l),
        f = parseFloat(f),
        f && (f = parseFloat(f),
            l += f,
            a += f),
        a || l ? (a *= hr,
            l *= hr,
            C = Math.cos(a) * _,
            b = Math.sin(a) * _,
            w = Math.sin(a - l) * -h,
            S = Math.cos(a - l) * h,
            l && (f *= hr,
                T = Math.tan(l - f),
                T = Math.sqrt(1 + T * T),
                w *= T,
                S *= T,
                f && (T = Math.tan(f),
                    T = Math.sqrt(1 + T * T),
                    C *= T,
                    b *= T)),
            C = ve(C),
            b = ve(b),
            w = ve(w),
            S = ve(S)) : (C = _,
                S = h,
                b = w = 0),
        (g && !~(s + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (g = Ei(c, "x", s, "px"),
            x = Ei(c, "y", o, "px")),
        (p || d || D || m) && (g = ve(g + p - (p * C + d * w) + D),
            x = ve(x + d - (p * b + d * S) + m)),
        (r || n) && (T = c.getBBox(),
            g = ve(g + r / 100 * T.width),
            x = ve(x + n / 100 * T.height)),
        T = "matrix(" + C + "," + b + "," + w + "," + S + "," + g + "," + x + ")",
        c.setAttribute("transform", T),
        y && (c.style[ce] = T)
}, Tf = function (e, t, i, r, n) {
    var s = 360, o = ke(n), a = parseFloat(n) * (o && ~n.indexOf("rad") ? Bi : 1), l = a - r, f = r + l + "deg", _, h;
    return o && (_ = n.split("_")[1],
        _ === "short" && (l %= s,
            l !== l % (s / 2) && (l += l < 0 ? s : -s)),
        _ === "cw" && l < 0 ? l = (l + s * Ro) % s - ~~(l / s) * s : _ === "ccw" && l > 0 && (l = (l - s * Ro) % s - ~~(l / s) * s)),
        e._pt = h = new nt(e._pt, t, i, r, l, ff),
        h.e = f,
        h.u = "deg",
        e._props.push(i),
        h
}, Xo = function (e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, Sf = function (e, t, i) {
    var r = Xo({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, a, l, f, _, h, c, p;
    r.svg ? (l = i.getAttribute("transform"),
        i.setAttribute("transform", ""),
        s[ce] = t,
        o = sn(i, 1),
        rn(i, ce),
        i.setAttribute("transform", l)) : (l = getComputedStyle(i)[ce],
            s[ce] = t,
            o = sn(i, 1),
            s[ce] = l);
    for (a in ui)
        l = r[a],
            f = o[a],
            l !== f && n.indexOf(a) < 0 && (c = Ye(l),
                p = Ye(f),
                _ = c !== p ? Ei(i, a, l, p) : parseFloat(l),
                h = parseFloat(f),
                e._pt = new nt(e._pt, o, a, _, h - _, Rs),
                e._pt.u = p || 0,
                e._props.push(a));
    Xo(o, r)
};
rt("padding,margin,Width,Radius", function (u, e) {
    var t = "Top"
        , i = "Right"
        , r = "Bottom"
        , n = "Left"
        , s = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (o) {
            return e < 2 ? u + o : "border" + o + u
        });
    Hn[e > 1 ? "border" + u : u] = function (o, a, l, f, _) {
        var h, c;
        if (arguments.length < 4)
            return h = s.map(function (p) {
                return ei(o, p, l)
            }),
                c = h.join(" "),
                c.split(h[0]).length === 5 ? h[0] : c;
        h = (f + "").split(" "),
            c = {},
            s.forEach(function (p, d) {
                return c[p] = h[d] = h[d] || h[(d - 1) / 2 | 0]
            }),
            o.init(a, c, _)
    }
});
var Da = {
    name: "css",
    register: Ns,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, t, i, r, n) {
        var s = this._props, o = e.style, a = i.vars.startAt, l, f, _, h, c, p, d, D, m, y, g, x, C, b, w, S;
        fo || Ns(),
            this.styles = this.styles || la(e),
            S = this.styles.props,
            this.tween = i;
        for (d in t)
            if (d !== "autoRound" && (f = t[d],
                !(ft[d] && Qu(d, t, i, r, e, n)))) {
                if (c = typeof f,
                    p = Hn[d],
                    c === "function" && (f = f.call(i, r, e, n),
                        c = typeof f),
                    c === "string" && ~f.indexOf("random(") && (f = en(f)),
                    p)
                    p(this, e, d, f, i) && (w = 1);
                else if (d.substr(0, 2) === "--")
                    l = (getComputedStyle(e).getPropertyValue(d) + "").trim(),
                        f += "",
                        vi.lastIndex = 0,
                        vi.test(l) || (D = Ye(l),
                            m = Ye(f)),
                        m ? D !== m && (l = Ei(e, d, l, m) + m) : D && (f += D),
                        this.add(o, "setProperty", l, f, r, n, 0, 0, d),
                        s.push(d),
                        S.push(d, 0, o[d]);
                else if (c !== "undefined") {
                    if (a && d in a ? (l = typeof a[d] == "function" ? a[d].call(i, r, e, n) : a[d],
                        ke(l) && ~l.indexOf("random(") && (l = en(l)),
                        Ye(l + "") || (l += _t.units[d] || Ye(ei(e, d)) || ""),
                        (l + "").charAt(1) === "=" && (l = ei(e, d))) : l = ei(e, d),
                        h = parseFloat(l),
                        y = c === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                        y && (f = f.substr(2)),
                        _ = parseFloat(f),
                        d in ii && (d === "autoAlpha" && (h === 1 && ei(e, "visibility") === "hidden" && _ && (h = 0),
                            S.push("visibility", 0, o.visibility),
                            pi(this, o, "visibility", h ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)),
                            d !== "scale" && d !== "transform" && (d = ii[d],
                                ~d.indexOf(",") && (d = d.split(",")[0]))),
                        g = d in ui,
                        g) {
                        if (this.styles.save(d),
                            x || (C = e._gsap,
                                C.renderTransform && !t.parseTransform || sn(e, t.parseTransform),
                                b = t.smoothOrigin !== !1 && C.smooth,
                                x = this._pt = new nt(this._pt, o, ce, 0, 1, C.renderTransform, C, 0, -1),
                                x.dep = 1),
                            d === "scale")
                            this._pt = new nt(this._pt, C, "scaleY", C.scaleY, (y ? fr(C.scaleY, y + _) : _) - C.scaleY || 0, Rs),
                                this._pt.u = 0,
                                s.push("scaleY", d),
                                d += "X";
                        else if (d === "transformOrigin") {
                            S.push(Bt, 0, o[Bt]),
                                f = wf(f),
                                C.svg ? zs(e, f, 0, b, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0,
                                    m !== C.zOrigin && pi(this, C, "zOrigin", C.zOrigin, m),
                                    pi(this, o, d, Gn(l), Gn(f)));
                            continue
                        } else if (d === "svgOrigin") {
                            zs(e, f, 1, b, 0, this);
                            continue
                        } else if (d in da) {
                            Tf(this, C, d, h, y ? fr(h, y + f) : f);
                            continue
                        } else if (d === "smoothOrigin") {
                            pi(this, C, "smooth", C.smooth, f);
                            continue
                        } else if (d === "force3D") {
                            C[d] = f;
                            continue
                        } else if (d === "transform") {
                            Sf(this, f, e);
                            continue
                        }
                    } else
                        d in o || (d = xr(d) || d);
                    if (g || (_ || _ === 0) && (h || h === 0) && !lf.test(f) && d in o)
                        D = (l + "").substr((h + "").length),
                            _ || (_ = 0),
                            m = Ye(f) || (d in _t.units ? _t.units[d] : D),
                            D !== m && (h = Ei(e, d, l, m)),
                            this._pt = new nt(this._pt, g ? C : o, d, h, (y ? fr(h, y + _) : _) - h, !g && (m === "px" || d === "zIndex") && t.autoRound !== !1 ? hf : Rs),
                            this._pt.u = m || 0,
                            D !== m && m !== "%" && (this._pt.b = l,
                                this._pt.r = cf);
                    else if (d in o)
                        Cf.call(this, e, d, l, y ? y + f : f);
                    else if (d in e)
                        this.add(e, d, l || e[d], y ? y + f : f, r, n);
                    else if (d !== "parseTransform") {
                        to(d, f);
                        continue
                    }
                    g || (d in o ? S.push(d, 0, o[d]) : S.push(d, 1, l || e[d])),
                        s.push(d)
                }
            }
        w && na(this)
    },
    render: function (e, t) {
        if (t.tween._time || !co())
            for (var i = t._pt; i;)
                i.r(e, i.d),
                    i = i._next;
        else
            t.styles.revert()
    },
    get: ei,
    aliases: ii,
    getSetter: function (e, t, i) {
        var r = ii[t];
        return r && r.indexOf(",") < 0 && (t = r),
            t in ui && t !== Bt && (e._gsap.x || ei(e, "x")) ? i && Bo === i ? t === "scale" ? Df : pf : (Bo = i || {}) && (t === "scale" ? gf : mf) : e.style && !Js(e.style[t]) ? df : ~t.indexOf("-") ? _f : ao(e, t)
    },
    core: {
        _removeProperty: rn,
        _getMatrix: _o
    }
};
Dt.utils.checkPrefix = xr;
Dt.core.getStyleSaver = la;
(function (u, e, t, i) {
    var r = rt(u + "," + e + "," + t, function (n) {
        ui[n] = 1
    });
    rt(e, function (n) {
        _t.units[n] = "deg",
            da[n] = 1
    }),
        ii[r[13]] = u + "," + e,
        rt(i, function (n) {
            var s = n.split(":");
            ii[s[1]] = r[s[0]]
        })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (u) {
    _t.units[u] = "px"
});
Dt.registerPlugin(Da);
/*!
 * EasePack 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ht, hn, ga = function () {
    return ht || typeof window < "u" && (ht = window.gsap) && ht.registerPlugin && ht
}, Ys = function (e, t) {
    return !!(typeof e > "u" ? t : e && !~(e + "").indexOf("false"))
}, Pf = function (e) {
    if (ht = e || ga(),
        ht) {
        hn = ht.registerEase;
        var t = ht.parseEase(), i = function (s) {
            return function (o) {
                var a = .5 + o / 2;
                s.config = function (l) {
                    return s(2 * (1 - l) * l * a + l * l)
                }
            }
        }, r;
        for (r in t)
            t[r].config || i(t[r]);
        hn("slow", Cr),
            hn("expoScale", po),
            hn("rough", on);
        for (r in $r)
            r !== "version" && ht.core.globals(r, $r[r])
    }
}, ma = function (e, t, i) {
    e = Math.min(1, e || .7);
    var r = e < 1 ? t || t === 0 ? t : .7 : 0
        , n = (1 - e) / 2
        , s = n + e
        , o = Ys(i);
    return function (a) {
        var l = a + (.5 - a) * r;
        return a < n ? o ? 1 - (a = 1 - a / n) * a : l - (a = 1 - a / n) * a * a * a * l : a > s ? o ? a === 1 ? 0 : 1 - (a = (a - s) / n) * a : l + (a - l) * (a = (a - s) / n) * a * a * a : o ? 1 : l
    }
}, ya = function (e, t, i) {
    var r = Math.log(t / e)
        , n = t - e;
    return i && (i = ht.parseEase(i)),
        function (s) {
            return (e * Math.exp(r * (i ? i(s) : s)) - e) / n
        }
}, _s = function (e, t, i) {
    this.t = e,
        this.v = t,
        i && (this.next = i,
            i.prev = this,
            this.c = i.v - t,
            this.gap = i.t - e)
}, va = function (e) {
    typeof e != "object" && (e = {
        points: +e || 20
    });
    for (var t = e.taper || "none", i = [], r = 0, n = (+e.points || 20) | 0, s = n, o = Ys(e.randomize, !0), a = Ys(e.clamp), l = ht ? ht.parseEase(e.template) : 0, f = (+e.strength || 1) * .4, _, h, c, p, d, D, m; --s > -1;)
        _ = o ? Math.random() : 1 / n * s,
            h = l ? l(_) : _,
            t === "none" ? c = f : t === "out" ? (p = 1 - _,
                c = p * p * f) : t === "in" ? c = _ * _ * f : _ < .5 ? (p = _ * 2,
                    c = p * p * .5 * f) : (p = (1 - _) * 2,
                        c = p * p * .5 * f),
            o ? h += Math.random() * c - c * .5 : s % 2 ? h += c * .5 : h -= c * .5,
            a && (h > 1 ? h = 1 : h < 0 && (h = 0)),
            i[r++] = {
                x: _,
                y: h
            };
    for (i.sort(function (y, g) {
        return y.x - g.x
    }),
        D = new _s(1, 1, null),
        s = n; s--;)
        d = i[s],
            D = new _s(d.x, d.y, D);
    return m = new _s(0, 0, D.t ? D : D.next),
        function (y) {
            var g = m;
            if (y > g.t) {
                for (; g.next && y >= g.t;)
                    g = g.next;
                g = g.prev
            } else
                for (; g.prev && y <= g.t;)
                    g = g.prev;
            return m = g,
                g.v + (y - g.t) / g.gap * g.c
        }
}, Cr = ma(.7);
Cr.ease = Cr;
Cr.config = ma;
var po = ya(1, 2);
po.config = ya;
var on = va();
on.ease = on;
on.config = va;
var $r = {
    SlowMo: Cr,
    RoughEase: on,
    ExpoScaleEase: po
};
for (var Wo in $r)
    $r[Wo].register = Pf,
        $r[Wo].version = "3.11.4";
ga() && ht.registerPlugin(Cr);
function $o(u, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(u, i.key, i)
    }
}
function Af(u, e, t) {
    return e && $o(u.prototype, e),
        t && $o(u, t),
        u
}
/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Le, Is, dt, Di, gi, dr, xa, Ri, Vr, Ca, ri, Pt, wa, Ea = function () {
    return Le || typeof window < "u" && (Le = window.gsap) && Le.registerPlugin && Le
}, Fa = 1, ur = [], G = [], Ut = [], Hr = Date.now, Xs = function (e, t) {
    return t
}, kf = function () {
    var e = Vr.core
        , t = e.bridge || {}
        , i = e._scrollers
        , r = e._proxies;
    i.push.apply(i, G),
        r.push.apply(r, Ut),
        G = i,
        Ut = r,
        Xs = function (s, o) {
            return t[s](o)
        }
}, xi = function (e, t) {
    return ~Ut.indexOf(e) && Ut[Ut.indexOf(e) + 1][t]
}, Gr = function (e) {
    return !!~Ca.indexOf(e)
}, Je = function (e, t, i, r, n) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!n
    })
}, Ue = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, dn = "scrollLeft", _n = "scrollTop", Ws = function () {
    return ri && ri.isPressed || G.cache++
}, Un = function (e, t) {
    var i = function r(n) {
        if (n || n === 0) {
            Fa && (dt.history.scrollRestoration = "manual");
            var s = ri && ri.isPressed;
            n = r.v = Math.round(n) || (ri && ri.iOS ? 1 : 0),
                e(n),
                r.cacheID = G.cache,
                s && Xs("ss", n)
        } else
            (t || G.cache !== r.cacheID || Xs("ref")) && (r.cacheID = G.cache,
                r.v = e());
        return r.v + r.offset
    };
    return i.offset = 0,
        e && i
}, je = {
    s: dn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Un(function (u) {
        return arguments.length ? dt.scrollTo(u, Te.sc()) : dt.pageXOffset || Di[dn] || gi[dn] || dr[dn] || 0
    })
}, Te = {
    s: _n,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: je,
    sc: Un(function (u) {
        return arguments.length ? dt.scrollTo(je.sc(), u) : dt.pageYOffset || Di[_n] || gi[_n] || dr[_n] || 0
    })
}, et = function (e) {
    return Le.utils.toArray(e)[0] || (typeof e == "string" && Le.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Fi = function (e, t) {
    var i = t.s
        , r = t.sc;
    Gr(e) && (e = Di.scrollingElement || gi);
    var n = G.indexOf(e)
        , s = r === Te.sc ? 1 : 2;
    !~n && (n = G.push(e) - 1),
        G[n + s] || e.addEventListener("scroll", Ws);
    var o = G[n + s]
        , a = o || (G[n + s] = Un(xi(e, i), !0) || (Gr(e) ? r : Un(function (l) {
            return arguments.length ? e[i] = l : e[i]
        })));
    return a.target = e,
        o || (a.smooth = Le.getProperty(e, "scrollBehavior") === "smooth"),
        a
}, $s = function (e, t, i) {
    var r = e
        , n = e
        , s = Hr()
        , o = s
        , a = t || 50
        , l = Math.max(500, a * 3)
        , f = function (p, d) {
            var D = Hr();
            d || D - s > a ? (n = r,
                r = p,
                o = s,
                s = D) : i ? r += p : r = n + (p - n) / (D - o) * (s - o)
        }
        , _ = function () {
            n = r = i ? 0 : r,
                o = s = 0
        }
        , h = function (p) {
            var d = o
                , D = n
                , m = Hr();
            return (p || p === 0) && p !== r && f(p),
                s === o || m - o > l ? 0 : (r + (i ? D : -D)) / ((i ? m : s) - d) * 1e3
        };
    return {
        update: f,
        reset: _,
        getVelocity: h
    }
}, Mr = function (e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
}, Vo = function (e) {
    var t = Math.max.apply(Math, e)
        , i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i
}, ba = function () {
    Vr = Le.core.globals().ScrollTrigger,
        Vr && Vr.core && kf()
}, Ta = function (e) {
    return Le = e || Ea(),
        Le && typeof document < "u" && document.body && (dt = window,
            Di = document,
            gi = Di.documentElement,
            dr = Di.body,
            Ca = [dt, Di, gi, dr],
            Le.utils.clamp,
            wa = Le.core.context || function () { }
            ,
            Ri = "onpointerenter" in dr ? "pointer" : "mouse",
            xa = Ee.isTouch = dt.matchMedia && dt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in dt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
            Pt = Ee.eventTypes = ("ontouchstart" in gi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in gi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout(function () {
                return Fa = 0
            }, 500),
            ba(),
            Is = 1),
        Is
};
je.op = Te;
G.cache = 0;
var Ee = function () {
    function u(t) {
        this.init(t)
    }
    var e = u.prototype;
    return e.init = function (i) {
        Is || Ta(Le) || console.warn("Please gsap.registerPlugin(Observer)"),
            Vr || ba();
        var r = i.tolerance
            , n = i.dragMinimum
            , s = i.type
            , o = i.target
            , a = i.lineHeight
            , l = i.debounce
            , f = i.preventDefault
            , _ = i.onStop
            , h = i.onStopDelay
            , c = i.ignore
            , p = i.wheelSpeed
            , d = i.event
            , D = i.onDragStart
            , m = i.onDragEnd
            , y = i.onDrag
            , g = i.onPress
            , x = i.onRelease
            , C = i.onRight
            , b = i.onLeft
            , w = i.onUp
            , S = i.onDown
            , T = i.onChangeX
            , P = i.onChangeY
            , M = i.onChange
            , O = i.onToggleX
            , $ = i.onToggleY
            , X = i.onHover
            , I = i.onHoverEnd
            , k = i.onMove
            , R = i.ignoreCheck
            , B = i.isNormalizer
            , E = i.onGestureStart
            , v = i.onGestureEnd
            , q = i.onWheel
            , oe = i.onEnable
            , Me = i.onDisable
            , te = i.onClick
            , U = i.scrollSpeed
            , ie = i.capture
            , re = i.allowClicks
            , We = i.lockAxis
            , Er = i.onLockAxis;
        this.target = o = et(o) || gi,
            this.vars = i,
            c && (c = Le.utils.toArray(c)),
            r = r || 1e-9,
            n = n || 0,
            p = p || 1,
            U = U || 1,
            s = s || "wheel,touch,pointer",
            l = l !== !1,
            a || (a = parseFloat(dt.getComputedStyle(dr).lineHeight) || 22);
        var st, gt, J, Ne, ot, Rt, $e, F = this, Kt = 0, le = 0, ai = Fi(o, je), li = Fi(o, Te), ji = ai(), Ve = li(), Fr = ~s.indexOf("touch") && !~s.indexOf("pointer") && Pt[0] === "pointerdown", fi = Gr(o), me = o.ownerDocument || Di, ut = [0, 0, 0], He = [0, 0, 0], br = 0, Ge = function () {
            return br = Hr()
        }, Lt = function (N, A) {
            return (F.event = N) && c && ~c.indexOf(N.target) || A && Fr && N.pointerType !== "touch" || R && R(N, A)
        }, Tr = function () {
            F._vx.reset(),
                F._vy.reset(),
                gt.pause(),
                _ && _(F)
        }, ci = function () {
            var N = F.deltaX = Vo(ut)
                , A = F.deltaY = Vo(He)
                , z = Math.abs(N) >= r
                , Y = Math.abs(A) >= r;
            M && (z || Y) && M(F, N, A, ut, He),
                z && (C && F.deltaX > 0 && C(F),
                    b && F.deltaX < 0 && b(F),
                    T && T(F),
                    O && F.deltaX < 0 != Kt < 0 && O(F),
                    Kt = F.deltaX,
                    ut[0] = ut[1] = ut[2] = 0),
                Y && (S && F.deltaY > 0 && S(F),
                    w && F.deltaY < 0 && w(F),
                    P && P(F),
                    $ && F.deltaY < 0 != le < 0 && $(F),
                    le = F.deltaY,
                    He[0] = He[1] = He[2] = 0),
                (Ne || J) && (k && k(F),
                    J && (y(F),
                        J = !1),
                    Ne = !1),
                Rt && !(Rt = !1) && Er && Er(F),
                ot && (q(F),
                    ot = !1),
                st = 0
        }, Zi = function (N, A, z) {
            ut[z] += N,
                He[z] += A,
                F._vx.update(N),
                F._vy.update(A),
                l ? st || (st = requestAnimationFrame(ci)) : ci()
        }, Si = function (N, A) {
            We && !$e && (F.axis = $e = Math.abs(N) > Math.abs(A) ? "x" : "y",
                Rt = !0),
                $e !== "y" && (ut[2] += N,
                    F._vx.update(N, !0)),
                $e !== "x" && (He[2] += A,
                    F._vy.update(A, !0)),
                l ? st || (st = requestAnimationFrame(ci)) : ci()
        }, Pi = function (N) {
            if (!Lt(N, 1)) {
                N = Mr(N, f);
                var A = N.clientX
                    , z = N.clientY
                    , Y = A - F.x
                    , W = z - F.y
                    , Se = F.isDragging;
                F.x = A,
                    F.y = z,
                    (Se || Math.abs(F.startX - A) >= n || Math.abs(F.startY - z) >= n) && (y && (J = !0),
                        Se || (F.isDragging = !0),
                        Si(Y, W),
                        Se || D && D(F))
            }
        }, ee = F.onPress = function (Z) {
            Lt(Z, 1) || (F.axis = $e = null,
                gt.pause(),
                F.isPressed = !0,
                Z = Mr(Z),
                Kt = le = 0,
                F.startX = F.x = Z.clientX,
                F.startY = F.y = Z.clientY,
                F._vx.reset(),
                F._vy.reset(),
                Je(B ? o : me, Pt[1], Pi, f, !0),
                F.deltaX = F.deltaY = 0,
                g && g(F))
        }
            , jt = function (N) {
                if (!Lt(N, 1)) {
                    Ue(B ? o : me, Pt[1], Pi, !0);
                    var A = !isNaN(F.y - F.startY)
                        , z = F.isDragging && (Math.abs(F.x - F.startX) > 3 || Math.abs(F.y - F.startY) > 3)
                        , Y = Mr(N);
                    !z && A && (F._vx.reset(),
                        F._vy.reset(),
                        f && re && Le.delayedCall(.08, function () {
                            if (Hr() - br > 300 && !N.defaultPrevented) {
                                if (N.target.click)
                                    N.target.click();
                                else if (me.createEvent) {
                                    var W = me.createEvent("MouseEvents");
                                    W.initMouseEvent("click", !0, !0, dt, 1, Y.screenX, Y.screenY, Y.clientX, Y.clientY, !1, !1, !1, !1, 0, null),
                                        N.target.dispatchEvent(W)
                                }
                            }
                        })),
                        F.isDragging = F.isGesturing = F.isPressed = !1,
                        _ && !B && gt.restart(!0),
                        m && z && m(F),
                        x && x(F, z)
                }
            }, bt = function (N) {
                return N.touches && N.touches.length > 1 && (F.isGesturing = !0) && E(N, F.isDragging)
            }, Tt = function () {
                return (F.isGesturing = !1) || v(F)
            }, Nt = function (N) {
                if (!Lt(N)) {
                    var A = ai()
                        , z = li();
                    Zi((A - ji) * U, (z - Ve) * U, 1),
                        ji = A,
                        Ve = z,
                        _ && gt.restart(!0)
                }
            }, zt = function (N) {
                if (!Lt(N)) {
                    N = Mr(N, f),
                        q && (ot = !0);
                    var A = (N.deltaMode === 1 ? a : N.deltaMode === 2 ? dt.innerHeight : 1) * p;
                    Zi(N.deltaX * A, N.deltaY * A, 0),
                        _ && !B && gt.restart(!0)
                }
            }, Ai = function (N) {
                if (!Lt(N)) {
                    var A = N.clientX
                        , z = N.clientY
                        , Y = A - F.x
                        , W = z - F.y;
                    F.x = A,
                        F.y = z,
                        Ne = !0,
                        (Y || W) && Si(Y, W)
                }
            }, Qi = function (N) {
                F.event = N,
                    X(F)
            }, Zt = function (N) {
                F.event = N,
                    I(F)
            }, Sr = function (N) {
                return Lt(N) || Mr(N, f) && te(F)
            };
        gt = F._dc = Le.delayedCall(h || .25, Tr).pause(),
            F.deltaX = F.deltaY = 0,
            F._vx = $s(0, 50, !0),
            F._vy = $s(0, 50, !0),
            F.scrollX = ai,
            F.scrollY = li,
            F.isDragging = F.isGesturing = F.isPressed = !1,
            wa(this),
            F.enable = function (Z) {
                return F.isEnabled || (Je(fi ? me : o, "scroll", Ws),
                    s.indexOf("scroll") >= 0 && Je(fi ? me : o, "scroll", Nt, f, ie),
                    s.indexOf("wheel") >= 0 && Je(o, "wheel", zt, f, ie),
                    (s.indexOf("touch") >= 0 && xa || s.indexOf("pointer") >= 0) && (Je(o, Pt[0], ee, f, ie),
                        Je(me, Pt[2], jt),
                        Je(me, Pt[3], jt),
                        re && Je(o, "click", Ge, !1, !0),
                        te && Je(o, "click", Sr),
                        E && Je(me, "gesturestart", bt),
                        v && Je(me, "gestureend", Tt),
                        X && Je(o, Ri + "enter", Qi),
                        I && Je(o, Ri + "leave", Zt),
                        k && Je(o, Ri + "move", Ai)),
                    F.isEnabled = !0,
                    Z && Z.type && ee(Z),
                    oe && oe(F)),
                    F
            }
            ,
            F.disable = function () {
                F.isEnabled && (ur.filter(function (Z) {
                    return Z !== F && Gr(Z.target)
                }).length || Ue(fi ? me : o, "scroll", Ws),
                    F.isPressed && (F._vx.reset(),
                        F._vy.reset(),
                        Ue(B ? o : me, Pt[1], Pi, !0)),
                    Ue(fi ? me : o, "scroll", Nt, ie),
                    Ue(o, "wheel", zt, ie),
                    Ue(o, Pt[0], ee, ie),
                    Ue(me, Pt[2], jt),
                    Ue(me, Pt[3], jt),
                    Ue(o, "click", Ge, !0),
                    Ue(o, "click", Sr),
                    Ue(me, "gesturestart", bt),
                    Ue(me, "gestureend", Tt),
                    Ue(o, Ri + "enter", Qi),
                    Ue(o, Ri + "leave", Zt),
                    Ue(o, Ri + "move", Ai),
                    F.isEnabled = F.isPressed = F.isDragging = !1,
                    Me && Me(F))
            }
            ,
            F.kill = F.revert = function () {
                F.disable();
                var Z = ur.indexOf(F);
                Z >= 0 && ur.splice(Z, 1),
                    ri === F && (ri = 0)
            }
            ,
            ur.push(F),
            B && Gr(o) && (ri = F),
            F.enable(d)
    }
        ,
        Af(u, [{
            key: "velocityX",
            get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function () {
                return this._vy.getVelocity()
            }
        }]),
        u
}();
Ee.version = "3.11.4";
Ee.create = function (u) {
    return new Ee(u)
}
    ;
Ee.register = Ta;
Ee.getAll = function () {
    return ur.slice()
}
    ;
Ee.getById = function (u) {
    return ur.filter(function (e) {
        return e.vars.id === u
    })[0]
}
    ;
Ea() && Le.registerPlugin(Ee);
/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ze, Sa, si, Vt, Ci, Pa, Aa, pn, ka = function () {
    return typeof window < "u"
}, Ma = function () {
    return Ze || ka() && (Ze = window.gsap) && Ze.registerPlugin && Ze
}, Oa = function (e) {
    return typeof e == "string"
}, Ho = function (e) {
    return typeof e == "function"
}, un = function (e, t) {
    var i = t === "x" ? "Width" : "Height"
        , r = "scroll" + i
        , n = "client" + i;
    return e === si || e === Vt || e === Ci ? Math.max(Vt[r], Ci[r]) - (si["inner" + i] || Vt[n] || Ci[n]) : e[r] - e["offset" + i]
}, an = function (e, t) {
    var i = "scroll" + (t === "x" ? "Left" : "Top");
    return e === si && (e.pageXOffset != null ? i = "page" + t.toUpperCase() + "Offset" : e = Vt[i] != null ? Vt : Ci),
        function () {
            return e[i]
        }
}, Mf = function (e, t, i, r) {
    if (Ho(e) && (e = e(t, i, r)),
        typeof e != "object")
        return Oa(e) && e !== "max" && e.charAt(1) !== "=" ? {
            x: e,
            y: e
        } : {
            y: e
        };
    if (e.nodeType)
        return {
            y: e,
            x: e
        };
    var n = {}, s;
    for (s in e)
        n[s] = s !== "onAutoKill" && Ho(e[s]) ? e[s](t, i, r) : e[s];
    return n
}, Ba = function (e, t) {
    if (e = Pa(e)[0],
        !e || !e.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var i = e.getBoundingClientRect()
        , r = !t || t === si || t === Ci
        , n = r ? {
            top: Vt.clientTop - (si.pageYOffset || Vt.scrollTop || Ci.scrollTop || 0),
            left: Vt.clientLeft - (si.pageXOffset || Vt.scrollLeft || Ci.scrollLeft || 0)
        } : t.getBoundingClientRect()
        , s = {
            x: i.left - n.left,
            y: i.top - n.top
        };
    return !r && t && (s.x += an(t, "x")(),
        s.y += an(t, "y")()),
        s
}, Go = function (e, t, i, r, n) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - n : Oa(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + r - n : e === "max" ? un(t, i) - n : Math.min(un(t, i), Ba(e, t)[i] - n)
}, Uo = function () {
    Ze = Ma(),
        ka() && Ze && typeof document < "u" && document.body && (si = window,
            Ci = document.body,
            Vt = document.documentElement,
            Pa = Ze.utils.toArray,
            Ze.config({
                autoKillThreshold: 7
            }),
            Aa = Ze.config(),
            Sa = 1)
}, ts = {
    version: "3.11.4",
    name: "scrollTo",
    rawVars: 1,
    register: function (e) {
        Ze = e,
            Uo()
    },
    init: function (e, t, i, r, n) {
        Sa || Uo();
        var s = this
            , o = Ze.getProperty(e, "scrollSnapType");
        s.isWin = e === si,
            s.target = e,
            s.tween = i,
            t = Mf(t, r, e, n),
            s.vars = t,
            s.autoKill = !!t.autoKill,
            s.getX = an(e, "x"),
            s.getY = an(e, "y"),
            s.x = s.xPrev = s.getX(),
            s.y = s.yPrev = s.getY(),
            pn || (pn = Ze.core.globals().ScrollTrigger),
            Ze.getProperty(e, "scrollBehavior") === "smooth" && Ze.set(e, {
                scrollBehavior: "auto"
            }),
            o && o !== "none" && (s.snap = 1,
                s.snapInline = e.style.scrollSnapType,
                e.style.scrollSnapType = "none"),
            t.x != null ? (s.add(s, "x", s.x, Go(t.x, e, "x", s.x, t.offsetX || 0), r, n),
                s._props.push("scrollTo_x")) : s.skipX = 1,
            t.y != null ? (s.add(s, "y", s.y, Go(t.y, e, "y", s.y, t.offsetY || 0), r, n),
                s._props.push("scrollTo_y")) : s.skipY = 1
    },
    render: function (e, t) {
        for (var i = t._pt, r = t.target, n = t.tween, s = t.autoKill, o = t.xPrev, a = t.yPrev, l = t.isWin, f = t.snap, _ = t.snapInline, h, c, p, d, D; i;)
            i.r(e, i.d),
                i = i._next;
        h = l || !t.skipX ? t.getX() : o,
            c = l || !t.skipY ? t.getY() : a,
            p = c - a,
            d = h - o,
            D = Aa.autoKillThreshold,
            t.x < 0 && (t.x = 0),
            t.y < 0 && (t.y = 0),
            s && (!t.skipX && (d > D || d < -D) && h < un(r, "x") && (t.skipX = 1),
                !t.skipY && (p > D || p < -D) && c < un(r, "y") && (t.skipY = 1),
                t.skipX && t.skipY && (n.kill(),
                    t.vars.onAutoKill && t.vars.onAutoKill.apply(n, t.vars.onAutoKillParams || []))),
            l ? si.scrollTo(t.skipX ? h : t.x, t.skipY ? c : t.y) : (t.skipY || (r.scrollTop = t.y),
                t.skipX || (r.scrollLeft = t.x)),
            f && (e === 1 || e === 0) && (c = r.scrollTop,
                h = r.scrollLeft,
                _ ? r.style.scrollSnapType = _ : r.style.removeProperty("scroll-snap-type"),
                r.scrollTop = c + 1,
                r.scrollLeft = h + 1,
                r.scrollTop = c,
                r.scrollLeft = h),
            t.xPrev = t.x,
            t.yPrev = t.y,
            pn && pn.update()
    },
    kill: function (e) {
        var t = e === "scrollTo";
        (t || e === "scrollTo_x") && (this.skipX = 1),
            (t || e === "scrollTo_y") && (this.skipY = 1)
    }
};
ts.max = un;
ts.getOffset = Ba;
ts.buildGetter = an;
Ma() && Ze.registerPlugin(ts);
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var L, rr, K, ae, Mt, De, Ra, qn, Kn, ar, An, Dn, ze, is, Vs, qe, qo, Ko, nr, La, ps, Na, at, za, Ya, Ia, hi, Hs, Do, Ds, gn = 1, Ke = Date.now, gs = Ke(), Et = 0, mn = 0, jo = function () {
    return is = 1
}, Zo = function () {
    return is = 0
}, Wt = function (e) {
    return e
}, Nr = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Xa = function () {
    return typeof window < "u"
}, Wa = function () {
    return L || Xa() && (L = window.gsap) && L.registerPlugin && L
}, Gi = function (e) {
    return !!~Ra.indexOf(e)
}, $a = function (e) {
    return xi(e, "getBoundingClientRect") || (Gi(e) ? function () {
        return Ln.width = K.innerWidth,
            Ln.height = K.innerHeight,
            Ln
    }
        : function () {
            return ti(e)
        }
    )
}, Of = function (e, t, i) {
    var r = i.d
        , n = i.d2
        , s = i.a;
    return (s = xi(e, "getBoundingClientRect")) ? function () {
        return s()[r]
    }
        : function () {
            return (t ? K["inner" + n] : e["client" + n]) || 0
        }
}, Bf = function (e, t) {
    return !t || ~Ut.indexOf(e) ? $a(e) : function () {
        return Ln
    }
}, mi = function (e, t) {
    var i = t.s
        , r = t.d2
        , n = t.d
        , s = t.a;
    return (i = "scroll" + r) && (s = xi(e, i)) ? s() - $a(e)()[n] : Gi(e) ? (Mt[i] || De[i]) - (K["inner" + r] || Mt["client" + r] || De["client" + r]) : e[i] - e["offset" + r]
}, yn = function (e, t) {
    for (var i = 0; i < nr.length; i += 3)
        (!t || ~t.indexOf(nr[i + 1])) && e(nr[i], nr[i + 1], nr[i + 2])
}, At = function (e) {
    return typeof e == "string"
}, Qe = function (e) {
    return typeof e == "function"
}, zr = function (e) {
    return typeof e == "number"
}, kn = function (e) {
    return typeof e == "object"
}, Or = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
}, ms = function (e, t) {
    if (e.enabled) {
        var i = t(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, tr = Math.abs, Va = "left", Ha = "top", go = "right", mo = "bottom", Wi = "width", $i = "height", Ur = "Right", qr = "Left", Kr = "Top", jr = "Bottom", ye = "padding", vt = "margin", wr = "Width", yo = "Height", Oe = "px", Ot = function (e) {
    return K.getComputedStyle(e)
}, Rf = function (e) {
    var t = Ot(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, Qo = function (e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, ti = function (e, t) {
    var i = t && Ot(e)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" && L.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
        , r = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
        r
}, Gs = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0
}, Ga = function (e) {
    var t = [], i = e.labels, r = e.duration(), n;
    for (n in i)
        t.push(i[n] / r);
    return t
}, Lf = function (e) {
    return function (t) {
        return L.utils.snap(Ga(e), t)
    }
}, vo = function (e) {
    var t = L.utils.snap(e)
        , i = Array.isArray(e) && e.slice(0).sort(function (r, n) {
            return r - n
        });
    return i ? function (r, n, s) {
        s === void 0 && (s = .001);
        var o;
        if (!n)
            return t(r);
        if (n > 0) {
            for (r -= s,
                o = 0; o < i.length; o++)
                if (i[o] >= r)
                    return i[o];
            return i[o - 1]
        } else
            for (o = i.length,
                r += s; o--;)
                if (i[o] <= r)
                    return i[o];
        return i[0]
    }
        : function (r, n, s) {
            s === void 0 && (s = .001);
            var o = t(r);
            return !n || Math.abs(o - r) < s || o - r < 0 == n < 0 ? o : t(n < 0 ? r - e : r + e)
        }
}, Nf = function (e) {
    return function (t, i) {
        return vo(Ga(e))(t, i.direction)
    }
}, vn = function (e, t, i, r) {
    return i.split(",").forEach(function (n) {
        return e(t, n, r)
    })
}, Be = function (e, t, i, r, n) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!n
    })
}, Ae = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, xn = function (e, t, i) {
    return i && i.wheelHandler && e(t, "wheel", i)
}, Jo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Cn = {
    toggleActions: "play",
    anticipatePin: 0
}, jn = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Mn = function (e, t) {
    if (At(e)) {
        var i = e.indexOf("=")
            , r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100),
            e = e.substr(0, i - 1)),
            e = r + (e in jn ? jn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, wn = function (e, t, i, r, n, s, o, a) {
    var l = n.startColor
        , f = n.endColor
        , _ = n.fontSize
        , h = n.indent
        , c = n.fontWeight
        , p = ae.createElement("div")
        , d = Gi(i) || xi(i, "pinType") === "fixed"
        , D = e.indexOf("scroller") !== -1
        , m = d ? De : i
        , y = e.indexOf("start") !== -1
        , g = y ? l : f
        , x = "border-color:" + g + ";font-size:" + _ + ";color:" + g + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((D || a) && d ? "fixed;" : "absolute;"),
        (D || a || !d) && (x += (r === Te ? go : mo) + ":" + (s + parseFloat(h)) + "px;"),
        o && (x += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
        p._isStart = y,
        p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        p.style.cssText = x,
        p.innerText = t || t === 0 ? e + "-" + t : e,
        m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
        p._offset = p["offset" + r.op.d2],
        On(p, 0, r, y),
        p
}, On = function (e, t, i, r) {
    var n = {
        display: "block"
    }
        , s = i[r ? "os2" : "p2"]
        , o = i[r ? "p2" : "os2"];
    e._isFlipped = r,
        n[i.a + "Percent"] = r ? -100 : 0,
        n[i.a] = r ? "1px" : 0,
        n["border" + s + wr] = 1,
        n["border" + o + wr] = 0,
        n[i.p] = t + "px",
        L.set(e, n)
}, V = [], Us = {}, ln, eu = function () {
    return Ke() - Et > 34 && (ln || (ln = requestAnimationFrame(bi)))
}, ir = function () {
    (!at || !at.isPressed || at.startX > De.clientWidth) && (G.cache++,
        at ? ln || (ln = requestAnimationFrame(bi)) : bi(),
        Et || qi("scrollStart"),
        Et = Ke())
}, ys = function () {
    Ia = K.innerWidth,
        Ya = K.innerHeight
}, Yr = function () {
    G.cache++,
        !ze && !Na && !ae.fullscreenElement && !ae.webkitFullscreenElement && (!za || Ia !== K.innerWidth || Math.abs(K.innerHeight - Ya) > K.innerHeight * .25) && qn.restart(!0)
}, Ui = {}, zf = [], Ua = function u() {
    return Ae(Q, "scrollEnd", u) || zi(!0)
}, qi = function (e) {
    return Ui[e] && Ui[e].map(function (t) {
        return t()
    }) || zf
}, lt = [], qa = function (e) {
    for (var t = 0; t < lt.length; t += 5)
        (!e || lt[t + 4] && lt[t + 4].query === e) && (lt[t].style.cssText = lt[t + 1],
            lt[t].getBBox && lt[t].setAttribute("transform", lt[t + 2] || ""),
            lt[t + 3].uncache = 1)
}, xo = function (e, t) {
    var i;
    for (qe = 0; qe < V.length; qe++)
        i = V[qe],
            i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    t && qa(t),
        t || qi("revert")
}, Ka = function (e, t) {
    G.cache++,
        (t || !kt) && G.forEach(function (i) {
            return Qe(i) && i.cacheID++ && (i.rec = 0)
        }),
        At(e) && (K.history.scrollRestoration = Do = e)
}, kt, Vi = 0, tu, Yf = function () {
    if (tu !== Vi) {
        var e = tu = Vi;
        requestAnimationFrame(function () {
            return e === Vi && zi(!0)
        })
    }
}, zi = function (e, t) {
    if (Et && !e) {
        Be(Q, "scrollEnd", Ua);
        return
    }
    kt = Q.isRefreshing = !0,
        G.forEach(function (r) {
            return Qe(r) && r.cacheID++ && (r.rec = r())
        });
    var i = qi("refreshInit");
    La && Q.sort(),
        t || xo(),
        G.forEach(function (r) {
            Qe(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
                r(0))
        }),
        V.slice(0).forEach(function (r) {
            return r.refresh()
        }),
        V.forEach(function (r, n) {
            if (r._subPinOffset && r.pin) {
                var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
                    , o = r.pin[s];
                r.revert(!0, 1),
                    r.adjustPinSpacing(r.pin[s] - o),
                    r.revert(!1, 1)
            }
        }),
        V.forEach(function (r) {
            return r.vars.end === "max" && r.setPositions(r.start, Math.max(r.start + 1, mi(r.scroller, r._dir)))
        }),
        i.forEach(function (r) {
            return r && r.render && r.render(-1)
        }),
        G.forEach(function (r) {
            Qe(r) && (r.smooth && requestAnimationFrame(function () {
                return r.target.style.scrollBehavior = "smooth"
            }),
                r.rec && r(r.rec))
        }),
        Ka(Do, 1),
        qn.pause(),
        Vi++,
        bi(2),
        V.forEach(function (r) {
            return Qe(r.vars.onRefresh) && r.vars.onRefresh(r)
        }),
        kt = Q.isRefreshing = !1,
        qi("refresh")
}, iu = 0, Bn = 1, Zr, bi = function (e) {
    if (!kt || e === 2) {
        Q.isUpdating = !0,
            Zr && Zr.update(0);
        var t = V.length
            , i = Ke()
            , r = i - gs >= 50
            , n = t && V[0].scroll();
        if (Bn = iu > n ? -1 : 1,
            iu = n,
            r && (Et && !is && i - Et > 200 && (Et = 0,
                qi("scrollEnd")),
                An = gs,
                gs = i),
            Bn < 0) {
            for (qe = t; qe-- > 0;)
                V[qe] && V[qe].update(0, r);
            Bn = 1
        } else
            for (qe = 0; qe < t; qe++)
                V[qe] && V[qe].update(0, r);
        Q.isUpdating = !1
    }
    ln = 0
}, qs = [Va, Ha, mo, go, vt + jr, vt + Ur, vt + Kr, vt + qr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Rn = qs.concat([Wi, $i, "boxSizing", "max" + wr, "max" + yo, "position", vt, ye, ye + Kr, ye + Ur, ye + jr, ye + qr]), If = function (e, t, i) {
    _r(i);
    var r = e._gsap;
    if (r.spacerIsNative)
        _r(r.spacerState);
    else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t),
            n.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, vs = function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
        for (var n = qs.length, s = t.style, o = e.style, a; n--;)
            a = qs[n],
                s[a] = i[a];
        s.position = i.position === "absolute" ? "absolute" : "relative",
            i.display === "inline" && (s.display = "inline-block"),
            o[mo] = o[go] = "auto",
            s.flexBasis = i.flexBasis || "auto",
            s.overflow = "visible",
            s.boxSizing = "border-box",
            s[Wi] = Gs(e, je) + Oe,
            s[$i] = Gs(e, Te) + Oe,
            s[ye] = o[vt] = o[Ha] = o[Va] = "0",
            _r(r),
            o[Wi] = o["max" + wr] = i[Wi],
            o[$i] = o["max" + yo] = i[$i],
            o[ye] = i[ye],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
            e._gsap.swappedIn = !0
    }
}, Xf = /([A-Z])/g, _r = function (e) {
    if (e) {
        var t = e.t.style, i = e.length, r = 0, n, s;
        for ((e.t._gsap || L.core.getCache(e.t)).uncache = 1; r < i; r += 2)
            s = e[r + 1],
                n = e[r],
                s ? t[n] = s : t[n] && t.removeProperty(n.replace(Xf, "-$1").toLowerCase())
    }
}, En = function (e) {
    for (var t = Rn.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(Rn[n], i[Rn[n]]);
    return r.t = e,
        r
}, Wf = function (e, t, i) {
    for (var r = [], n = e.length, s = i ? 8 : 0, o; s < n; s += 2)
        o = e[s],
            r.push(o, o in t ? t[o] : e[s + 1]);
    return r.t = e.t,
        r
}, Ln = {
    left: 0,
    top: 0
}, ru = function (e, t, i, r, n, s, o, a, l, f, _, h, c) {
    Qe(e) && (e = e(a)),
        At(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Mn("0" + e.substr(3), i) : 0));
    var p = c ? c.time() : 0, d, D, m;
    if (c && c.seek(0),
        zr(e))
        o && On(o, i, r, !0);
    else {
        Qe(t) && (t = t(a));
        var y = (e || "0").split(" "), g, x, C, b;
        m = et(t) || De,
            g = ti(m) || {},
            (!g || !g.left && !g.top) && Ot(m).display === "none" && (b = m.style.display,
                m.style.display = "block",
                g = ti(m),
                b ? m.style.display = b : m.style.removeProperty("display")),
            x = Mn(y[0], g[r.d]),
            C = Mn(y[1] || "0", i),
            e = g[r.p] - l[r.p] - f + x + n - C,
            o && On(o, C, r, i - C < 20 || o._isStart && C > 20),
            i -= i - C
    }
    if (s) {
        var w = e + i
            , S = s._isStart;
        d = "scroll" + r.d2,
            On(s, w, r, S && w > 20 || !S && (_ ? Math.max(De[d], Mt[d]) : s.parentNode[d]) <= w + 1),
            _ && (l = ti(o),
                _ && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + Oe))
    }
    return c && m && (d = ti(m),
        c.seek(h),
        D = ti(m),
        c._caScrollDist = d[r.p] - D[r.p],
        e = e / c._caScrollDist * h),
        c && c.seek(p),
        c ? e : Math.round(e)
}, $f = /(webkit|moz|length|cssText|inset)/i, nu = function (e, t, i, r) {
    if (e.parentNode !== t) {
        var n = e.style, s, o;
        if (t === De) {
            e._stOrig = n.cssText,
                o = Ot(e);
            for (s in o)
                !+s && !$f.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
            n.top = i,
                n.left = r
        } else
            n.cssText = e._stOrig;
        L.core.getCache(e).uncache = 1,
            t.appendChild(e)
    }
}, su = function (e, t) {
    var i = Fi(e, t), r = "_scroll" + t.p2, n, s, o = function a(l, f, _, h, c) {
        var p = a.tween
            , d = f.onComplete
            , D = {};
        return _ = _ || i(),
            c = h && c || 0,
            h = h || l - _,
            p && p.kill(),
            n = Math.round(_),
            f[r] = l,
            f.modifiers = D,
            D[r] = function (m) {
                return m = Math.round(i()),
                    m !== n && m !== s && Math.abs(m - n) > 3 && Math.abs(m - s) > 3 ? (p.kill(),
                        a.tween = 0) : m = _ + h * p.ratio + c * p.ratio * p.ratio,
                    s = n,
                    n = Math.round(m)
            }
            ,
            f.onUpdate = function () {
                G.cache++,
                    bi()
            }
            ,
            f.onComplete = function () {
                a.tween = 0,
                    d && d.call(p)
            }
            ,
            p = a.tween = L.to(e, f),
            p
    };
    return e[r] = i,
        i.wheelHandler = function () {
            return o.tween && o.tween.kill() && (o.tween = 0)
        }
        ,
        Be(e, "wheel", i.wheelHandler),
        o
}, Q = function () {
    function u(t, i) {
        rr || u.register(L) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(t, i)
    }
    var e = u.prototype;
    return e.init = function (i, r) {
        if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !mn) {
            this.update = this.refresh = this.kill = Wt;
            return
        }
        i = Qo(At(i) || zr(i) || i.nodeType ? {
            trigger: i
        } : i, Cn);
        var n = i, s = n.onUpdate, o = n.toggleClass, a = n.id, l = n.onToggle, f = n.onRefresh, _ = n.scrub, h = n.trigger, c = n.pin, p = n.pinSpacing, d = n.invalidateOnRefresh, D = n.anticipatePin, m = n.onScrubComplete, y = n.onSnapComplete, g = n.once, x = n.snap, C = n.pinReparent, b = n.pinSpacer, w = n.containerAnimation, S = n.fastScrollEnd, T = n.preventOverlaps, P = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? je : Te, M = !_ && _ !== 0, O = et(i.scroller || K), $ = L.core.getCache(O), X = Gi(O), I = ("pinType" in i ? i.pinType : xi(O, "pinType") || X && "fixed") === "fixed", k = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], R = M && i.toggleActions.split(" "), B = "markers" in i ? i.markers : Cn.markers, E = X ? 0 : parseFloat(Ot(O)["border" + P.p2 + wr]) || 0, v = this, q = i.onRefreshInit && function () {
            return i.onRefreshInit(v)
        }
            , oe = Of(O, X, P), Me = Bf(O, X), te = 0, U = 0, ie = Fi(O, P), re, We, Er, st, gt, J, Ne, ot, Rt, $e, F, Kt, le, ai, li, ji, Ve, Fr, fi, me, ut, He, br, Ge, Lt, Tr, ci, Zi, Si, Pi, ee, jt, bt, Tt, Nt, zt, Ai, Qi, Zt;
        if (Hs(v),
            v._dir = P,
            D *= 45,
            v.scroller = O,
            v.scroll = w ? w.time.bind(w) : ie,
            st = ie(),
            v.vars = i,
            r = r || i.animation,
            "refreshPriority" in i && (La = 1,
                i.refreshPriority === -9999 && (Zr = v)),
            $.tweenScroll = $.tweenScroll || {
                top: su(O, Te),
                left: su(O, je)
            },
            v.tweenTo = re = $.tweenScroll[P.p],
            v.scrubDuration = function (A) {
                jt = zr(A) && A,
                    jt ? ee ? ee.duration(A) : ee = L.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: jt,
                        paused: !0,
                        onComplete: function () {
                            return m && m(v)
                        }
                    }) : (ee && ee.progress(1).kill(),
                        ee = 0)
            }
            ,
            r && (r.vars.lazy = !1,
                r._initted || r.vars.immediateRender !== !1 && i.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
                v.animation = r.pause(),
                r.scrollTrigger = v,
                v.scrubDuration(_),
                Si = 0,
                a || (a = r.vars.id)),
            V.push(v),
            x && ((!kn(x) || x.push) && (x = {
                snapTo: x
            }),
                "scrollBehavior" in De.style && L.set(X ? [De, Mt] : O, {
                    scrollBehavior: "auto"
                }),
                G.forEach(function (A) {
                    return Qe(A) && A.target === (X ? ae.scrollingElement || Mt : O) && (A.smooth = !1)
                }),
                Er = Qe(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? Lf(r) : x.snapTo === "labelsDirectional" ? Nf(r) : x.directional !== !1 ? function (A, z) {
                    return vo(x.snapTo)(A, Ke() - U < 500 ? 0 : z.direction)
                }
                    : L.utils.snap(x.snapTo),
                bt = x.duration || {
                    min: .1,
                    max: 2
                },
                bt = kn(bt) ? ar(bt.min, bt.max) : ar(bt, bt),
                Tt = L.delayedCall(x.delay || jt / 2 || .1, function () {
                    var A = ie()
                        , z = Ke() - U < 500
                        , Y = re.tween;
                    if ((z || Math.abs(v.getVelocity()) < 10) && !Y && !is && te !== A) {
                        var W = (A - J) / le
                            , Se = r && !M ? r.totalProgress() : W
                            , H = z ? 0 : (Se - Pi) / (Ke() - An) * 1e3 || 0
                            , xe = L.utils.clamp(-W, 1 - W, tr(H / 2) * H / .185)
                            , he = W + (x.inertia === !1 ? 0 : xe)
                            , Yt = ar(0, 1, Er(he, v))
                            , ue = Math.round(J + Yt * le)
                            , Pe = x
                            , St = Pe.onStart
                            , de = Pe.onInterrupt
                            , _e = Pe.onComplete;
                        if (A <= Ne && A >= J && ue !== A) {
                            if (Y && !Y._initted && Y.data <= tr(ue - A))
                                return;
                            x.inertia === !1 && (xe = Yt - W),
                                re(ue, {
                                    duration: bt(tr(Math.max(tr(he - Se), tr(Yt - Se)) * .185 / H / .05 || 0)),
                                    ease: x.ease || "power3",
                                    data: tr(ue - A),
                                    onInterrupt: function () {
                                        return Tt.restart(!0) && de && de(v)
                                    },
                                    onComplete: function () {
                                        v.update(),
                                            te = ie(),
                                            Si = Pi = r && !M ? r.totalProgress() : v.progress,
                                            y && y(v),
                                            _e && _e(v)
                                    }
                                }, A, xe * le, ue - A - xe * le),
                                St && St(v, re.tween)
                        }
                    } else
                        v.isActive && te !== A && Tt.restart(!0)
                }).pause()),
            a && (Us[a] = v),
            h = v.trigger = et(h || c),
            Zt = h && h._gsap && h._gsap.stRevert,
            Zt && (Zt = Zt(v)),
            c = c === !0 ? h : et(c),
            At(o) && (o = {
                targets: h,
                className: o
            }),
            c && (p === !1 || p === vt || (p = !p && c.parentNode && c.parentNode.style && Ot(c.parentNode).display === "flex" ? !1 : ye),
                v.pin = c,
                We = L.core.getCache(c),
                We.spacer ? ai = We.pinState : (b && (b = et(b),
                    b && !b.nodeType && (b = b.current || b.nativeElement),
                    We.spacerIsNative = !!b,
                    b && (We.spacerState = En(b))),
                    We.spacer = Ve = b || ae.createElement("div"),
                    Ve.classList.add("pin-spacer"),
                    a && Ve.classList.add("pin-spacer-" + a),
                    We.pinState = ai = En(c)),
                i.force3D !== !1 && L.set(c, {
                    force3D: !0
                }),
                v.spacer = Ve = We.spacer,
                Zi = Ot(c),
                br = Zi[p + P.os2],
                fi = L.getProperty(c),
                me = L.quickSetter(c, P.a, Oe),
                vs(c, Ve, Zi),
                ji = En(c)),
            B) {
            Kt = kn(B) ? Qo(B, Jo) : Jo,
                $e = wn("scroller-start", a, O, P, Kt, 0),
                F = wn("scroller-end", a, O, P, Kt, 0, $e),
                Fr = $e["offset" + P.op.d2];
            var Sr = et(xi(O, "content") || O);
            ot = this.markerStart = wn("start", a, Sr, P, Kt, Fr, 0, w),
                Rt = this.markerEnd = wn("end", a, Sr, P, Kt, Fr, 0, w),
                w && (Qi = L.quickSetter([ot, Rt], P.a, Oe)),
                !I && !(Ut.length && xi(O, "fixedMarkers") === !0) && (Rf(X ? De : O),
                    L.set([$e, F], {
                        force3D: !0
                    }),
                    Lt = L.quickSetter($e, P.a, Oe),
                    ci = L.quickSetter(F, P.a, Oe))
        }
        if (w) {
            var Z = w.vars.onUpdate
                , N = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
                v.update(0, 0, 1),
                    Z && Z.apply(N || [])
            })
        }
        v.previous = function () {
            return V[V.indexOf(v) - 1]
        }
            ,
            v.next = function () {
                return V[V.indexOf(v) + 1]
            }
            ,
            v.revert = function (A, z) {
                if (!z)
                    return v.kill(!0);
                var Y = A !== !1 || !v.enabled
                    , W = ze;
                Y !== v.isReverted && (Y && (zt = Math.max(ie(), v.scroll.rec || 0),
                    Nt = v.progress,
                    Ai = r && r.progress()),
                    ot && [ot, Rt, $e, F].forEach(function (Se) {
                        return Se.style.display = Y ? "none" : "block"
                    }),
                    Y && (ze = 1,
                        v.update(Y)),
                    c && (!C || !v.isActive) && (Y ? If(c, Ve, ai) : vs(c, Ve, Ot(c), Ge)),
                    Y || v.update(Y),
                    ze = W,
                    v.isReverted = Y)
            }
            ,
            v.refresh = function (A, z) {
                if (!((ze || !v.enabled) && !z)) {
                    if (c && A && Et) {
                        Be(u, "scrollEnd", Ua);
                        return
                    }
                    !kt && q && q(v),
                        ze = 1,
                        U = Ke(),
                        re.tween && (re.tween.kill(),
                            re.tween = 0),
                        ee && ee.pause(),
                        d && r && r.revert({
                            kill: !1
                        }).invalidate(),
                        v.isReverted || v.revert(!0, !0),
                        v._subPinOffset = !1;
                    for (var Y = oe(), W = Me(), Se = w ? w.duration() : mi(O, P), H = 0, xe = 0, he = i.end, Yt = i.endTrigger || h, ue = i.start || (i.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"), Pe = v.pinnedContainer = i.pinnedContainer && et(i.pinnedContainer), St = h && Math.max(0, V.indexOf(v)) || 0, de = St, _e, Ce, Ji, ki, Fe, pe, Qt, ns, Fo, Pr, It; de--;)
                        pe = V[de],
                            pe.end || pe.refresh(0, 1) || (ze = 1),
                            Qt = pe.pin,
                            Qt && (Qt === h || Qt === c) && !pe.isReverted && (Pr || (Pr = []),
                                Pr.unshift(pe),
                                pe.revert(!0, !0)),
                            pe !== V[de] && (St--,
                                de--);
                    for (Qe(ue) && (ue = ue(v)),
                        J = ru(ue, h, Y, P, ie(), ot, $e, v, W, E, I, Se, w) || (c ? -.001 : 0),
                        Qe(he) && (he = he(v)),
                        At(he) && !he.indexOf("+=") && (~he.indexOf(" ") ? he = (At(ue) ? ue.split(" ")[0] : "") + he : (H = Mn(he.substr(2), Y),
                            he = At(ue) ? ue : J + H,
                            Yt = h)),
                        Ne = Math.max(J, ru(he || (Yt ? "100% 0" : Se), Yt, Y, P, ie() + H, Rt, F, v, W, E, I, Se, w)) || -.001,
                        le = Ne - J || (J -= .01) && .001,
                        H = 0,
                        de = St; de--;)
                        pe = V[de],
                            Qt = pe.pin,
                            Qt && pe.start - pe._pinPush <= J && !w && pe.end > 0 && (_e = pe.end - pe.start,
                                (Qt === h && pe.start - pe._pinPush < J || Qt === Pe) && !zr(ue) && (H += _e * (1 - pe.progress)),
                                Qt === c && (xe += _e));
                    if (J += H,
                        Ne += H,
                        v._pinPush = xe,
                        ot && H && (_e = {},
                            _e[P.a] = "+=" + H,
                            Pe && (_e[P.p] = "-=" + ie()),
                            L.set([ot, Rt], _e)),
                        c)
                        _e = Ot(c),
                            ki = P === Te,
                            Ji = ie(),
                            ut = parseFloat(fi(P.a)) + xe,
                            !Se && Ne > 1 && (It = (X ? ae.scrollingElement || Mt : O).style,
                                It = {
                                    style: It,
                                    value: It["overflow" + P.a.toUpperCase()]
                                },
                                It["overflow" + P.a.toUpperCase()] = "scroll"),
                            vs(c, Ve, _e),
                            ji = En(c),
                            Ce = ti(c, !0),
                            ns = I && Fi(O, ki ? je : Te)(),
                            p && (Ge = [p + P.os2, le + xe + Oe],
                                Ge.t = Ve,
                                de = p === ye ? Gs(c, P) + le + xe : 0,
                                de && Ge.push(P.d, de + Oe),
                                _r(Ge),
                                Pe && V.forEach(function (Ar) {
                                    Ar.pin === Pe && Ar.vars.pinSpacing !== !1 && (Ar._subPinOffset = !0)
                                }),
                                I && ie(zt)),
                            I && (Fe = {
                                top: Ce.top + (ki ? Ji - J : ns) + Oe,
                                left: Ce.left + (ki ? ns : Ji - J) + Oe,
                                boxSizing: "border-box",
                                position: "fixed"
                            },
                                Fe[Wi] = Fe["max" + wr] = Math.ceil(Ce.width) + Oe,
                                Fe[$i] = Fe["max" + yo] = Math.ceil(Ce.height) + Oe,
                                Fe[vt] = Fe[vt + Kr] = Fe[vt + Ur] = Fe[vt + jr] = Fe[vt + qr] = "0",
                                Fe[ye] = _e[ye],
                                Fe[ye + Kr] = _e[ye + Kr],
                                Fe[ye + Ur] = _e[ye + Ur],
                                Fe[ye + jr] = _e[ye + jr],
                                Fe[ye + qr] = _e[ye + qr],
                                li = Wf(ai, Fe, C),
                                kt && ie(0)),
                            r ? (Fo = r._initted,
                                ps(1),
                                r.render(r.duration(), !0, !0),
                                He = fi(P.a) - ut + le + xe,
                                Tr = Math.abs(le - He) > 1,
                                I && Tr && li.splice(li.length - 2, 2),
                                r.render(0, !0, !0),
                                Fo || r.invalidate(!0),
                                r.parent || r.totalTime(r.totalTime()),
                                ps(0)) : He = le,
                            It && (It.value ? It.style["overflow" + P.a.toUpperCase()] = It.value : It.style.removeProperty("overflow-" + P.a));
                    else if (h && ie() && !w)
                        for (Ce = h.parentNode; Ce && Ce !== De;)
                            Ce._pinOffset && (J -= Ce._pinOffset,
                                Ne -= Ce._pinOffset),
                                Ce = Ce.parentNode;
                    Pr && Pr.forEach(function (Ar) {
                        return Ar.revert(!1, !0)
                    }),
                        v.start = J,
                        v.end = Ne,
                        st = gt = kt ? zt : ie(),
                        !w && !kt && (st < zt && ie(zt),
                            v.scroll.rec = 0),
                        v.revert(!1, !0),
                        Tt && (te = -1,
                            v.isActive && ie(J + le * Nt),
                            Tt.restart(!0)),
                        ze = 0,
                        r && M && (r._initted || Ai) && r.progress() !== Ai && r.progress(Ai, !0).render(r.time(), !0, !0),
                        (Nt !== v.progress || w) && (r && !M && r.totalProgress(Nt, !0),
                            v.progress = (st - J) / le === Nt ? 0 : Nt),
                        c && p && (Ve._pinOffset = Math.round(v.progress * He)),
                        f && !kt && f(v)
                }
            }
            ,
            v.getVelocity = function () {
                return (ie() - gt) / (Ke() - An) * 1e3 || 0
            }
            ,
            v.endAnimation = function () {
                Or(v.callbackAnimation),
                    r && (ee ? ee.progress(1) : r.paused() ? M || Or(r, v.direction < 0, 1) : Or(r, r.reversed()))
            }
            ,
            v.labelToScroll = function (A) {
                return r && r.labels && (J || v.refresh() || J) + r.labels[A] / r.duration() * le || 0
            }
            ,
            v.getTrailing = function (A) {
                var z = V.indexOf(v)
                    , Y = v.direction > 0 ? V.slice(0, z).reverse() : V.slice(z + 1);
                return (At(A) ? Y.filter(function (W) {
                    return W.vars.preventOverlaps === A
                }) : Y).filter(function (W) {
                    return v.direction > 0 ? W.end <= J : W.start >= Ne
                })
            }
            ,
            v.update = function (A, z, Y) {
                if (!(w && !Y && !A)) {
                    var W = kt ? zt : v.scroll(), Se = A ? 0 : (W - J) / le, H = Se < 0 ? 0 : Se > 1 ? 1 : Se || 0, xe = v.progress, he, Yt, ue, Pe, St, de, _e, Ce;
                    if (z && (gt = st,
                        st = w ? ie() : W,
                        x && (Pi = Si,
                            Si = r && !M ? r.totalProgress() : H)),
                        D && !H && c && !ze && !gn && Et && J < W + (W - gt) / (Ke() - An) * D && (H = 1e-4),
                        H !== xe && v.enabled) {
                        if (he = v.isActive = !!H && H < 1,
                            Yt = !!xe && xe < 1,
                            de = he !== Yt,
                            St = de || !!H != !!xe,
                            v.direction = H > xe ? 1 : -1,
                            v.progress = H,
                            St && !ze && (ue = H && !xe ? 0 : H === 1 ? 1 : xe === 1 ? 2 : 3,
                                M && (Pe = !de && R[ue + 1] !== "none" && R[ue + 1] || R[ue],
                                    Ce = r && (Pe === "complete" || Pe === "reset" || Pe in r))),
                            T && (de || Ce) && (Ce || _ || !r) && (Qe(T) ? T(v) : v.getTrailing(T).forEach(function (pe) {
                                return pe.endAnimation()
                            })),
                            M || (ee && !ze && !gn ? (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start),
                                ee.resetTo ? ee.resetTo("totalProgress", H, r._tTime / r._tDur) : (ee.vars.totalProgress = H,
                                    ee.invalidate().restart())) : r && r.totalProgress(H, !!ze)),
                            c) {
                            if (A && p && (Ve.style[p + P.os2] = br),
                                !I)
                                me(Nr(ut + He * H));
                            else if (St) {
                                if (_e = !A && H > xe && Ne + 1 > W && W + 1 >= mi(O, P),
                                    C)
                                    if (!A && (he || _e)) {
                                        var Ji = ti(c, !0)
                                            , ki = W - J;
                                        nu(c, De, Ji.top + (P === Te ? ki : 0) + Oe, Ji.left + (P === Te ? 0 : ki) + Oe)
                                    } else
                                        nu(c, Ve);
                                _r(he || _e ? li : ji),
                                    Tr && H < 1 && he || me(ut + (H === 1 && !_e ? He : 0))
                            }
                        }
                        x && !re.tween && !ze && !gn && Tt.restart(!0),
                            o && (de || g && H && (H < 1 || !Ds)) && Kn(o.targets).forEach(function (pe) {
                                return pe.classList[he || g ? "add" : "remove"](o.className)
                            }),
                            s && !M && !A && s(v),
                            St && !ze ? (M && (Ce && (Pe === "complete" ? r.pause().totalProgress(1) : Pe === "reset" ? r.restart(!0).pause() : Pe === "restart" ? r.restart(!0) : r[Pe]()),
                                s && s(v)),
                                (de || !Ds) && (l && de && ms(v, l),
                                    k[ue] && ms(v, k[ue]),
                                    g && (H === 1 ? v.kill(!1, 1) : k[ue] = 0),
                                    de || (ue = H === 1 ? 1 : 3,
                                        k[ue] && ms(v, k[ue]))),
                                S && !he && Math.abs(v.getVelocity()) > (zr(S) ? S : 2500) && (Or(v.callbackAnimation),
                                    ee ? ee.progress(1) : Or(r, Pe === "reverse" ? 1 : !H, 1))) : M && s && !ze && s(v)
                    }
                    if (ci) {
                        var Fe = w ? W / w.duration() * (w._caScrollDist || 0) : W;
                        Lt(Fe + ($e._isFlipped ? 1 : 0)),
                            ci(Fe)
                    }
                    Qi && Qi(-W / w.duration() * (w._caScrollDist || 0))
                }
            }
            ,
            v.enable = function (A, z) {
                v.enabled || (v.enabled = !0,
                    Be(O, "resize", Yr),
                    Be(X ? ae : O, "scroll", ir),
                    q && Be(u, "refreshInit", q),
                    A !== !1 && (v.progress = Nt = 0,
                        st = gt = te = ie()),
                    z !== !1 && v.refresh())
            }
            ,
            v.getTween = function (A) {
                return A && re ? re.tween : ee
            }
            ,
            v.setPositions = function (A, z) {
                c && (ut += A - J,
                    He += z - A - le,
                    p === ye && v.adjustPinSpacing(z - A - le)),
                    v.start = J = A,
                    v.end = Ne = z,
                    le = z - A,
                    v.update()
            }
            ,
            v.adjustPinSpacing = function (A) {
                if (Ge) {
                    var z = Ge.indexOf(P.d) + 1;
                    Ge[z] = parseFloat(Ge[z]) + A + Oe,
                        Ge[1] = parseFloat(Ge[1]) + A + Oe,
                        _r(Ge)
                }
            }
            ,
            v.disable = function (A, z) {
                if (v.enabled && (A !== !1 && v.revert(!0, !0),
                    v.enabled = v.isActive = !1,
                    z || ee && ee.pause(),
                    zt = 0,
                    We && (We.uncache = 1),
                    q && Ae(u, "refreshInit", q),
                    Tt && (Tt.pause(),
                        re.tween && re.tween.kill() && (re.tween = 0)),
                    !X)) {
                    for (var Y = V.length; Y--;)
                        if (V[Y].scroller === O && V[Y] !== v)
                            return;
                    Ae(O, "resize", Yr),
                        Ae(O, "scroll", ir)
                }
            }
            ,
            v.kill = function (A, z) {
                v.disable(A, z),
                    ee && !z && ee.kill(),
                    a && delete Us[a];
                var Y = V.indexOf(v);
                Y >= 0 && V.splice(Y, 1),
                    Y === qe && Bn > 0 && qe--,
                    Y = 0,
                    V.forEach(function (W) {
                        return W.scroller === v.scroller && (Y = 1)
                    }),
                    Y || kt || (v.scroll.rec = 0),
                    r && (r.scrollTrigger = null,
                        A && r.revert({
                            kill: !1
                        }),
                        z || r.kill()),
                    ot && [ot, Rt, $e, F].forEach(function (W) {
                        return W.parentNode && W.parentNode.removeChild(W)
                    }),
                    Zr === v && (Zr = 0),
                    c && (We && (We.uncache = 1),
                        Y = 0,
                        V.forEach(function (W) {
                            return W.pin === c && Y++
                        }),
                        Y || (We.spacer = 0)),
                    i.onKill && i.onKill(v)
            }
            ,
            v.enable(!1, !1),
            Zt && Zt(v),
            !r || !r.add || le ? v.refresh() : L.delayedCall(.01, function () {
                return J || Ne || v.refresh()
            }) && (le = .01) && (J = Ne = 0),
            c && Yf()
    }
        ,
        u.register = function (i) {
            return rr || (L = i || Wa(),
                Xa() && window.document && u.enable(),
                rr = mn),
                rr
        }
        ,
        u.defaults = function (i) {
            if (i)
                for (var r in i)
                    Cn[r] = i[r];
            return Cn
        }
        ,
        u.disable = function (i, r) {
            mn = 0,
                V.forEach(function (s) {
                    return s[r ? "kill" : "disable"](i)
                }),
                Ae(K, "wheel", ir),
                Ae(ae, "scroll", ir),
                clearInterval(Dn),
                Ae(ae, "touchcancel", Wt),
                Ae(De, "touchstart", Wt),
                vn(Ae, ae, "pointerdown,touchstart,mousedown", jo),
                vn(Ae, ae, "pointerup,touchend,mouseup", Zo),
                qn.kill(),
                yn(Ae);
            for (var n = 0; n < G.length; n += 3)
                xn(Ae, G[n], G[n + 1]),
                    xn(Ae, G[n], G[n + 2])
        }
        ,
        u.enable = function () {
            if (K = window,
                ae = document,
                Mt = ae.documentElement,
                De = ae.body,
                L && (Kn = L.utils.toArray,
                    ar = L.utils.clamp,
                    Hs = L.core.context || Wt,
                    ps = L.core.suppressOverwrites || Wt,
                    Do = K.history.scrollRestoration || "auto",
                    L.core.globals("ScrollTrigger", u),
                    De)) {
                mn = 1,
                    Ee.register(L),
                    u.isTouch = Ee.isTouch,
                    hi = Ee.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    Be(K, "wheel", ir),
                    Ra = [K, ae, Mt, De],
                    L.matchMedia ? (u.matchMedia = function (a) {
                        var l = L.matchMedia(), f;
                        for (f in a)
                            l.add(f, a[f]);
                        return l
                    }
                        ,
                        L.addEventListener("matchMediaInit", function () {
                            return xo()
                        }),
                        L.addEventListener("matchMediaRevert", function () {
                            return qa()
                        }),
                        L.addEventListener("matchMedia", function () {
                            zi(0, 1),
                                qi("matchMedia")
                        }),
                        L.matchMedia("(orientation: portrait)", function () {
                            return ys(),
                                ys
                        })) : console.warn("Requires GSAP 3.11.0 or later"),
                    ys(),
                    Be(ae, "scroll", ir);
                var i = De.style, r = i.borderTopStyle, n = L.core.Animation.prototype, s, o;
                for (n.revert || Object.defineProperty(n, "revert", {
                    value: function () {
                        return this.time(-.01, !0)
                    }
                }),
                    i.borderTopStyle = "solid",
                    s = ti(De),
                    Te.m = Math.round(s.top + Te.sc()) || 0,
                    je.m = Math.round(s.left + je.sc()) || 0,
                    r ? i.borderTopStyle = r : i.removeProperty("border-top-style"),
                    Dn = setInterval(eu, 250),
                    L.delayedCall(.5, function () {
                        return gn = 0
                    }),
                    Be(ae, "touchcancel", Wt),
                    Be(De, "touchstart", Wt),
                    vn(Be, ae, "pointerdown,touchstart,mousedown", jo),
                    vn(Be, ae, "pointerup,touchend,mouseup", Zo),
                    Vs = L.utils.checkPrefix("transform"),
                    Rn.push(Vs),
                    rr = Ke(),
                    qn = L.delayedCall(.2, zi).pause(),
                    nr = [ae, "visibilitychange", function () {
                        var a = K.innerWidth
                            , l = K.innerHeight;
                        ae.hidden ? (qo = a,
                            Ko = l) : (qo !== a || Ko !== l) && Yr()
                    }
                        , ae, "DOMContentLoaded", zi, K, "load", zi, K, "resize", Yr],
                    yn(Be),
                    V.forEach(function (a) {
                        return a.enable(0, 1)
                    }),
                    o = 0; o < G.length; o += 3)
                    xn(Ae, G[o], G[o + 1]),
                        xn(Ae, G[o], G[o + 2])
            }
        }
        ,
        u.config = function (i) {
            "limitCallbacks" in i && (Ds = !!i.limitCallbacks);
            var r = i.syncInterval;
            r && clearInterval(Dn) || (Dn = r) && setInterval(eu, r),
                "ignoreMobileResize" in i && (za = u.isTouch === 1 && i.ignoreMobileResize),
                "autoRefreshEvents" in i && (yn(Ae) || yn(Be, i.autoRefreshEvents || "none"),
                    Na = (i.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        ,
        u.scrollerProxy = function (i, r) {
            var n = et(i)
                , s = G.indexOf(n)
                , o = Gi(n);
            ~s && G.splice(s, o ? 6 : 2),
                r && (o ? Ut.unshift(K, r, De, r, Mt, r) : Ut.unshift(n, r))
        }
        ,
        u.clearMatchMedia = function (i) {
            V.forEach(function (r) {
                return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0)
            })
        }
        ,
        u.isInViewport = function (i, r, n) {
            var s = (At(i) ? et(i) : i).getBoundingClientRect()
                , o = s[n ? Wi : $i] * r || 0;
            return n ? s.right - o > 0 && s.left + o < K.innerWidth : s.bottom - o > 0 && s.top + o < K.innerHeight
        }
        ,
        u.positionInViewport = function (i, r, n) {
            At(i) && (i = et(i));
            var s = i.getBoundingClientRect()
                , o = s[n ? Wi : $i]
                , a = r == null ? o / 2 : r in jn ? jn[r] * o : ~r.indexOf("%") ? parseFloat(r) * o / 100 : parseFloat(r) || 0;
            return n ? (s.left + a) / K.innerWidth : (s.top + a) / K.innerHeight
        }
        ,
        u.killAll = function (i) {
            if (V.slice(0).forEach(function (n) {
                return n.vars.id !== "ScrollSmoother" && n.kill()
            }),
                i !== !0) {
                var r = Ui.killAll || [];
                Ui = {},
                    r.forEach(function (n) {
                        return n()
                    })
            }
        }
        ,
        u
}();
Q.version = "3.11.4";
Q.saveStyles = function (u) {
    return u ? Kn(u).forEach(function (e) {
        if (e && e.style) {
            var t = lt.indexOf(e);
            t >= 0 && lt.splice(t, 5),
                lt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), L.core.getCache(e), Hs())
        }
    }) : lt
}
    ;
Q.revert = function (u, e) {
    return xo(!u, e)
}
    ;
Q.create = function (u, e) {
    return new Q(u, e)
}
    ;
Q.refresh = function (u) {
    return u ? Yr() : (rr || Q.register()) && zi(!0)
}
    ;
Q.update = function (u) {
    return ++G.cache && bi(u === !0 ? 2 : 0)
}
    ;
Q.clearScrollMemory = Ka;
Q.maxScroll = function (u, e) {
    return mi(u, e ? je : Te)
}
    ;
Q.getScrollFunc = function (u, e) {
    return Fi(et(u), e ? je : Te)
}
    ;
Q.getById = function (u) {
    return Us[u]
}
    ;
Q.getAll = function () {
    return V.filter(function (u) {
        return u.vars.id !== "ScrollSmoother"
    })
}
    ;
Q.isScrolling = function () {
    return !!Et
}
    ;
Q.snapDirectional = vo;
Q.addEventListener = function (u, e) {
    var t = Ui[u] || (Ui[u] = []);
    ~t.indexOf(e) || t.push(e)
}
    ;
Q.removeEventListener = function (u, e) {
    var t = Ui[u]
        , i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
}
    ;
Q.batch = function (u, e) {
    var t = [], i = {}, r = e.interval || .016, n = e.batchMax || 1e9, s = function (l, f) {
        var _ = []
            , h = []
            , c = L.delayedCall(r, function () {
                f(_, h),
                    _ = [],
                    h = []
            }).pause();
        return function (p) {
            _.length || c.restart(!0),
                _.push(p.trigger),
                h.push(p),
                n <= _.length && c.progress(1)
        }
    }, o;
    for (o in e)
        i[o] = o.substr(0, 2) === "on" && Qe(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
    return Qe(n) && (n = n(),
        Be(Q, "refresh", function () {
            return n = e.batchMax()
        })),
        Kn(u).forEach(function (a) {
            var l = {};
            for (o in i)
                l[o] = i[o];
            l.trigger = a,
                t.push(Q.create(l))
        }),
        t
}
    ;
var ou = function (e, t, i, r) {
    return t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
}, xs = function u(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Ee.isTouch ? " pinch-zoom" : "") : "none",
        e === Mt && u(De, t)
}, Fn = {
    auto: 1,
    scroll: 1
}, Vf = function (e) {
    var t = e.event, i = e.target, r = e.axis, n = (t.changedTouches ? t.changedTouches[0] : t).target, s = n._gsap || L.core.getCache(n), o = Ke(), a;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
        for (; n && n !== De && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Fn[(a = Ot(n)).overflowY] || Fn[a.overflowX]));)
            n = n.parentNode;
        s._isScroll = n && n !== i && !Gi(n) && (Fn[(a = Ot(n)).overflowY] || Fn[a.overflowX]),
            s._isScrollT = o
    }
    (s._isScroll || r === "x") && (t.stopPropagation(),
        t._gsapAllow = !0)
}, ja = function (e, t, i, r) {
    return Ee.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && Vf,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
            return i && Be(ae, Ee.eventTypes[0], au, !1, !0)
        },
        onDisable: function () {
            return Ae(ae, Ee.eventTypes[0], au, !0)
        }
    })
}, Hf = /(input|label|select|textarea)/i, uu, au = function (e) {
    var t = Hf.test(e.target.tagName);
    (t || uu) && (e._gsapAllow = !0,
        uu = t)
}, Gf = function (e) {
    kn(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, r = t.momentum, n = t.allowNestedScroll, s, o, a = et(e.target) || Mt, l = L.core.globals().ScrollSmoother, f = l && l.get(), _ = hi && (e.content && et(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), h = Fi(a, Te), c = Fi(a, je), p = 1, d = (Ee.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, D = 0, m = Qe(r) ? function () {
        return r(s)
    }
        : function () {
            return r || 2.8
        }
        , y, g, x = ja(a, e.type, !0, n), C = function () {
            return g = !1
        }, b = Wt, w = Wt, S = function () {
            o = mi(a, Te),
                w = ar(hi ? 1 : 0, o),
                i && (b = ar(0, mi(a, je))),
                y = Vi
        }, T = function () {
            _._gsap.y = Nr(parseFloat(_._gsap.y) + h.offset) + "px",
                _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_._gsap.y) + ", 0, 1)",
                h.offset = h.cacheID = 0
        }, P = function () {
            if (g) {
                requestAnimationFrame(C);
                var R = Nr(s.deltaY / 2)
                    , B = w(h.v - R);
                if (_ && B !== h.v + h.offset) {
                    h.offset = B - h.v;
                    var E = Nr((parseFloat(_ && _._gsap.y) || 0) - h.offset);
                    _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + E + ", 0, 1)",
                        _._gsap.y = E + "px",
                        h.cacheID = G.cache,
                        bi()
                }
                return !0
            }
            h.offset && T(),
                g = !0
        }, M, O, $, X, I = function () {
            S(),
                M.isActive() && M.vars.scrollY > o && (h() > o ? M.progress(1) && h(o) : M.resetTo("scrollY", o))
        };
    return _ && L.set(_, {
        y: "+=0"
    }),
        e.ignoreCheck = function (k) {
            return hi && k.type === "touchmove" && P() || p > 1.05 && k.type !== "touchstart" || s.isGesturing || k.touches && k.touches.length > 1
        }
        ,
        e.onPress = function () {
            var k = p;
            p = Nr((K.visualViewport && K.visualViewport.scale || 1) / d),
                M.pause(),
                k !== p && xs(a, p > 1.01 ? !0 : i ? !1 : "x"),
                O = c(),
                $ = h(),
                S(),
                y = Vi
        }
        ,
        e.onRelease = e.onGestureStart = function (k, R) {
            if (h.offset && T(),
                !R)
                X.restart(!0);
            else {
                G.cache++;
                var B = m(), E, v;
                i && (E = c(),
                    v = E + B * .05 * -k.velocityX / .227,
                    B *= ou(c, E, v, mi(a, je)),
                    M.vars.scrollX = b(v)),
                    E = h(),
                    v = E + B * .05 * -k.velocityY / .227,
                    B *= ou(h, E, v, mi(a, Te)),
                    M.vars.scrollY = w(v),
                    M.invalidate().duration(B).play(.01),
                    (hi && M.vars.scrollY >= o || E >= o - 1) && L.to({}, {
                        onUpdate: I,
                        duration: B
                    })
            }
        }
        ,
        e.onWheel = function () {
            M._ts && M.pause(),
                Ke() - D > 1e3 && (y = 0,
                    D = Ke())
        }
        ,
        e.onChange = function (k, R, B, E, v) {
            if (Vi !== y && S(),
                R && i && c(b(E[2] === R ? O + (k.startX - k.x) : c() + R - E[1])),
                B) {
                h.offset && T();
                var q = v[2] === B
                    , oe = q ? $ + k.startY - k.y : h() + B - v[1]
                    , Me = w(oe);
                q && oe !== Me && ($ += Me - oe),
                    h(Me)
            }
            (B || R) && bi()
        }
        ,
        e.onEnable = function () {
            xs(a, i ? !1 : "x"),
                Q.addEventListener("refresh", I),
                Be(K, "resize", I),
                h.smooth && (h.target.style.scrollBehavior = "auto",
                    h.smooth = c.smooth = !1),
                x.enable()
        }
        ,
        e.onDisable = function () {
            xs(a, !0),
                Ae(K, "resize", I),
                Q.removeEventListener("refresh", I),
                x.kill()
        }
        ,
        e.lockAxis = e.lockAxis !== !1,
        s = new Ee(e),
        s.iOS = hi,
        hi && !h() && h(1),
        hi && L.ticker.add(Wt),
        X = s._dc,
        M = L.to(s, {
            ease: "power4",
            paused: !0,
            scrollX: i ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: X.vars.onComplete
        }),
        s
};
Q.sort = function (u) {
    return V.sort(u || function (e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
    ;
Q.observe = function (u) {
    return new Ee(u)
}
    ;
Q.normalizeScroll = function (u) {
    if (typeof u > "u")
        return at;
    if (u === !0 && at)
        return at.enable();
    if (u === !1)
        return at && at.kill();
    var e = u instanceof Ee ? u : Gf(u);
    return at && at.target === e.target && at.kill(),
        Gi(e.target) && (at = e),
        e
}
    ;
Q.core = {
    _getVelocityProp: $s,
    _inputObserver: ja,
    _scrollers: G,
    _proxies: Ut,
    bridge: {
        ss: function () {
            Et || qi("scrollStart"),
                Et = Ke()
        },
        ref: function () {
            return ze
        }
    }
};
Wa() && L.registerPlugin(Q);
/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Uf = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Za(u) {
    var e = u.nodeType
        , t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof u.textContent == "string")
            return u.textContent;
        for (u = u.firstChild; u; u = u.nextSibling)
            t += Za(u)
    } else if (e === 3 || e === 4)
        return u.nodeValue;
    return t
}
/*!
 * DrawSVGPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ht, Co, Zn, Qa, Ja, lu, Ks, el, tl = function () {
    return typeof window < "u"
}, il = function () {
    return Ht || tl() && (Ht = window.gsap) && Ht.registerPlugin && Ht
}, qf = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, Cs = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
}, Li = function (e) {
    return Math.round(e * 1e4) / 1e4
}, ni = function (e) {
    return parseFloat(e) || 0
}, fu = function (e, t) {
    var i = ni(e);
    return ~e.indexOf("%") ? i / 100 * t : i
}, bn = function (e, t) {
    return ni(e.getAttribute(t))
}, Nn = Math.sqrt, cu = function (e, t, i, r, n, s) {
    return Nn(Math.pow((ni(i) - ni(e)) * n, 2) + Math.pow((ni(r) - ni(t)) * s, 2))
}, hu = function (e) {
    return console.warn(e)
}, rl = function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke"
}, Kf = 1, jf = function (e, t, i) {
    var r = e.indexOf(" "), n, s;
    return r < 0 ? (n = i !== void 0 ? i + "" : e,
        s = e) : (n = e.substr(0, r),
            s = e.substr(r + 1)),
        n = fu(n, t),
        s = fu(s, t),
        n > s ? [s, n] : [n, s]
}, zn = function (e) {
    if (e = Co(e)[0],
        !e)
        return 0;
    var t = e.tagName.toLowerCase(), i = e.style, r = 1, n = 1, s, o, a, l, f, _, h;
    rl(e) && (n = e.getScreenCTM(),
        r = Nn(n.a * n.a + n.b * n.b),
        n = Nn(n.d * n.d + n.c * n.c));
    try {
        o = e.getBBox()
    } catch {
        hu("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var c = o || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
        , p = c.x
        , d = c.y
        , D = c.width
        , m = c.height;
    if ((!o || !D && !m) && Cs[t] && (D = bn(e, Cs[t][0]),
        m = bn(e, Cs[t][1]),
        t !== "rect" && t !== "line" && (D *= 2,
            m *= 2),
        t === "line" && (p = bn(e, "x1"),
            d = bn(e, "y1"),
            D = Math.abs(D - p),
            m = Math.abs(m - d))),
        t === "path")
        l = i.strokeDasharray,
            i.strokeDasharray = "none",
            s = e.getTotalLength() || 0,
            Li(r) !== Li(n) && !lu && (lu = 1) && hu("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            s *= (r + n) / 2,
            i.strokeDasharray = l;
    else if (t === "rect")
        s = D * 2 * r + m * 2 * n;
    else if (t === "line")
        s = cu(p, d, p + D, d + m, r, n);
    else if (t === "polyline" || t === "polygon")
        for (a = e.getAttribute("points").match(qf) || [],
            t === "polygon" && a.push(a[0], a[1]),
            s = 0,
            f = 2; f < a.length; f += 2)
            s += cu(a[f - 2], a[f - 1], a[f], a[f + 1], r, n) || 0;
    else
        (t === "circle" || t === "ellipse") && (_ = D / 2 * r,
            h = m / 2 * n,
            s = Math.PI * (3 * (_ + h) - Nn((3 * _ + h) * (_ + 3 * h))));
    return s || 0
}, du = function (e, t) {
    if (e = Co(e)[0],
        !e)
        return [0, 0];
    t || (t = zn(e) + 1);
    var i = Zn.getComputedStyle(e)
        , r = i.strokeDasharray || ""
        , n = ni(i.strokeDashoffset)
        , s = r.indexOf(",");
    return s < 0 && (s = r.indexOf(" ")),
        r = s < 0 ? t : ni(r.substr(0, s)),
        r > t && (r = t),
        [-n || 0, r - n || 0]
}, _u = function () {
    tl() && (Zn = window,
        Ja = Ht = il(),
        Co = Ht.utils.toArray,
        Ks = Ht.core.getStyleSaver,
        el = Ht.core.reverting || function () { }
        ,
        Qa = ((Zn.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
}, Zf = {
    version: "3.11.4",
    name: "drawSVG",
    register: function (e) {
        Ht = e,
            _u()
    },
    init: function (e, t, i, r, n) {
        if (!e.getBBox)
            return !1;
        Ja || _u();
        var s = zn(e), o, a, l;
        return this.styles = Ks && Ks(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
            this.tween = i,
            this._style = e.style,
            this._target = e,
            t + "" == "true" ? t = "0 100%" : t ? (t + "").indexOf(" ") === -1 && (t = "0 " + t) : t = "0 0",
            o = du(e, s),
            a = jf(t, s, o[0]),
            this._length = Li(s),
            this._dash = Li(o[1] - o[0]),
            this._offset = Li(-o[0]),
            this._dashPT = this.add(this, "_dash", this._dash, Li(a[1] - a[0]), 0, 0, 0, 0, 0, 1),
            this._offsetPT = this.add(this, "_offset", this._offset, Li(-a[0]), 0, 0, 0, 0, 0, 1),
            Qa && (l = Zn.getComputedStyle(e),
                l.strokeLinecap !== l.strokeLinejoin && (a = ni(l.strokeMiterlimit),
                    this.add(e.style, "strokeMiterlimit", a, a + .01))),
            this._live = rl(e) || ~(t + "").indexOf("live"),
            this._nowrap = ~(t + "").indexOf("nowrap"),
            this._props.push("drawSVG"),
            Kf
    },
    render: function (e, t) {
        if (t.tween._time || !el()) {
            var i = t._pt, r = t._style, n, s, o, a;
            if (i) {
                for (t._live && (n = zn(t._target),
                    n !== t._length && (s = n / t._length,
                        t._length = n,
                        t._offsetPT && (t._offsetPT.s *= s,
                            t._offsetPT.c *= s),
                        t._dashPT ? (t._dashPT.s *= s,
                            t._dashPT.c *= s) : t._dash *= s)); i;)
                    i.r(e, i.d),
                        i = i._next;
                o = t._dash || e && e !== 1 && 1e-4 || 0,
                    n = t._length - o + .1,
                    a = t._offset,
                    o && a && o + Math.abs(a % t._length) > t._length - .2 && (a += a < 0 ? .1 : -.1) && (n += .1),
                    r.strokeDashoffset = o ? a : a + .001,
                    r.strokeDasharray = n < .2 ? "none" : o ? o + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
            }
        } else
            t.styles.revert()
    },
    getLength: zn,
    getPosition: du
};
il() && Ht.registerPlugin(Zf);
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var lr, js, nl, Br, sl, rs, Qf = /(?:\r|\n|\t\t)/g, Jf = /(?:\s\s+)/g, ol = function (e) {
    lr = document,
        js = window,
        Br = Br || e || js.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
        Br && (rs = Br.utils.toArray,
            sl = Br.core.context || function () { }
            ,
            nl = 1)
}, ul = function (e) {
    return js.getComputedStyle(e)
}, wo = function (e) {
    return e.position === "absolute" || e.absolute === !0
}, ec = function (e, t) {
    for (var i = t.length, r; --i > -1;)
        if (r = t[i],
            e.substr(0, r.length) === r)
            return r.length
}, tc = " style='position:relative;display:inline-block;'", pu = function (e, t) {
    e === void 0 && (e = "");
    var i = ~e.indexOf("++")
        , r = 1;
    return i && (e = e.split("++").join("")),
        function () {
            return "<" + t + tc + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
        }
}, al = function u(e, t, i) {
    var r = e.nodeType;
    if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            u(e, t, i);
    else
        (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i))
}, ws = function (e, t) {
    for (var i = t.length; --i > -1;)
        e.push(t[i])
}, Du = function (e, t, i) {
    for (var r; e && e !== t;) {
        if (r = e._next || e.nextSibling,
            r)
            return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent
    }
}, ic = function u(e) {
    var t = rs(e.childNodes), i = t.length, r, n;
    for (r = 0; r < i; r++)
        n = t[r],
            n._isSplit ? u(n) : r && n.previousSibling && n.previousSibling.nodeType === 3 ? (n.previousSibling.nodeValue += n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue,
                e.removeChild(n)) : n.nodeType !== 3 && (e.insertBefore(n.firstChild, n),
                    e.removeChild(n))
}, Xt = function (e, t) {
    return parseFloat(t[e]) || 0
}, rc = function (e, t, i, r, n, s, o) {
    var a = ul(e), l = Xt("paddingLeft", a), f = -999, _ = Xt("borderBottomWidth", a) + Xt("borderTopWidth", a), h = Xt("borderLeftWidth", a) + Xt("borderRightWidth", a), c = Xt("paddingTop", a) + Xt("paddingBottom", a), p = Xt("paddingLeft", a) + Xt("paddingRight", a), d = Xt("fontSize", a) * (t.lineThreshold || .2), D = a.textAlign, m = [], y = [], g = [], x = t.wordDelimiter || " ", C = t.tag ? t.tag : t.span ? "span" : "div", b = t.type || t.split || "chars,words,lines", w = n && ~b.indexOf("lines") ? [] : null, S = ~b.indexOf("words"), T = ~b.indexOf("chars"), P = wo(t), M = t.linesClass, O = ~(M || "").indexOf("++"), $ = [], X = a.display === "flex", I = e.style.display, k, R, B, E, v, q, oe, Me, te, U, ie, re;
    for (O && (M = M.split("++").join("")),
        X && (e.style.display = "block"),
        R = e.getElementsByTagName("*"),
        B = R.length,
        v = [],
        k = 0; k < B; k++)
        v[k] = R[k];
    if (w || P)
        for (k = 0; k < B; k++)
            E = v[k],
                q = E.parentNode === e,
                (q || P || T && !S) && (re = E.offsetTop,
                    w && q && Math.abs(re - f) > d && (E.nodeName !== "BR" || k === 0) && (oe = [],
                        w.push(oe),
                        f = re),
                    P && (E._x = E.offsetLeft,
                        E._y = re,
                        E._w = E.offsetWidth,
                        E._h = E.offsetHeight),
                    w && ((E._isSplit && q || !T && q || S && q || !S && E.parentNode.parentNode === e && !E.parentNode._isSplit) && (oe.push(E),
                        E._x -= l,
                        Du(E, e, x) && (E._wordEnd = !0)),
                        E.nodeName === "BR" && (E.nextSibling && E.nextSibling.nodeName === "BR" || k === 0) && w.push([])));
    for (k = 0; k < B; k++) {
        if (E = v[k],
            q = E.parentNode === e,
            E.nodeName === "BR") {
            w || P ? (E.parentNode && E.parentNode.removeChild(E),
                v.splice(k--, 1),
                B--) : S || e.appendChild(E);
            continue
        }
        if (P && (te = E.style,
            !S && !q && (E._x += E.parentNode._x,
                E._y += E.parentNode._y),
            te.left = E._x + "px",
            te.top = E._y + "px",
            te.position = "absolute",
            te.display = "block",
            te.width = E._w + 1 + "px",
            te.height = E._h + "px"),
            !S && T)
            if (E._isSplit)
                for (E._next = R = E.nextSibling,
                    E.parentNode.appendChild(E); R && R.nodeType === 3 && R.textContent === " ";)
                    E._next = R.nextSibling,
                        E.parentNode.appendChild(R),
                        R = R.nextSibling;
            else
                E.parentNode._isSplit ? (E._parent = E.parentNode,
                    !E.previousSibling && E.firstChild && (E.firstChild._isFirst = !0),
                    E.nextSibling && E.nextSibling.textContent === " " && !E.nextSibling.nextSibling && $.push(E.nextSibling),
                    E._next = E.nextSibling && E.nextSibling._isFirst ? null : E.nextSibling,
                    E.parentNode.removeChild(E),
                    v.splice(k--, 1),
                    B--) : q || (re = !E.nextSibling && Du(E.parentNode, e, x),
                        E.parentNode._parent && E.parentNode._parent.appendChild(E),
                        re && E.parentNode.appendChild(lr.createTextNode(" ")),
                        C === "span" && (E.style.display = "inline"),
                        m.push(E));
        else
            E.parentNode._isSplit && !E._isSplit && E.innerHTML !== "" ? y.push(E) : T && !E._isSplit && (C === "span" && (E.style.display = "inline"),
                m.push(E))
    }
    for (k = $.length; --k > -1;)
        $[k].parentNode.removeChild($[k]);
    if (w) {
        for (P && (U = lr.createElement(C),
            e.appendChild(U),
            ie = U.offsetWidth + "px",
            re = U.offsetParent === e ? 0 : e.offsetLeft,
            e.removeChild(U)),
            te = e.style.cssText,
            e.style.cssText = "display:none;"; e.firstChild;)
            e.removeChild(e.firstChild);
        for (Me = x === " " && (!P || !S && !T),
            k = 0; k < w.length; k++) {
            for (oe = w[k],
                U = lr.createElement(C),
                U.style.cssText = "display:block;text-align:" + D + ";position:" + (P ? "absolute;" : "relative;"),
                M && (U.className = M + (O ? k + 1 : "")),
                g.push(U),
                B = oe.length,
                R = 0; R < B; R++)
                oe[R].nodeName !== "BR" && (E = oe[R],
                    U.appendChild(E),
                    Me && E._wordEnd && U.appendChild(lr.createTextNode(" ")),
                    P && (R === 0 && (U.style.top = E._y + "px",
                        U.style.left = l + re + "px"),
                        E.style.top = "0px",
                        re && (E.style.left = E._x - re + "px")));
            B === 0 ? U.innerHTML = "&nbsp;" : !S && !T && (ic(U),
                al(U, String.fromCharCode(160), " ")),
                P && (U.style.width = ie,
                    U.style.height = E._h + "px"),
                e.appendChild(U)
        }
        e.style.cssText = te
    }
    P && (o > e.clientHeight && (e.style.height = o - c + "px",
        e.clientHeight < o && (e.style.height = o + _ + "px")),
        s > e.clientWidth && (e.style.width = s - p + "px",
            e.clientWidth < s && (e.style.width = s + h + "px"))),
        X && (I ? e.style.display = I : e.style.removeProperty("display")),
        ws(i, m),
        S && ws(r, y),
        ws(n, g)
}, nc = function (e, t, i, r) {
    var n = t.tag ? t.tag : t.span ? "span" : "div", s = t.type || t.split || "chars,words,lines", o = ~s.indexOf("chars"), a = wo(t), l = t.wordDelimiter || " ", f = l !== " " ? "" : a ? "&#173; " : " ", _ = "</" + n + ">", h = 1, c = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : ec : null, p, d, D, m, y, g, x, C, b = lr.createElement("div"), w = e.parentNode;
    for (w.insertBefore(b, e),
        b.textContent = e.nodeValue,
        w.removeChild(e),
        e = b,
        p = Za(e),
        x = p.indexOf("<") !== -1,
        t.reduceWhiteSpace !== !1 && (p = p.replace(Jf, " ").replace(Qf, "")),
        x && (p = p.split("<").join("{{LT}}")),
        y = p.length,
        d = (p.charAt(0) === " " ? f : "") + i(),
        D = 0; D < y; D++)
        if (g = p.charAt(D),
            c && (C = c(p.substr(D), t.specialChars)))
            g = p.substr(D, C || 1),
                d += o && g !== " " ? r() + g + "</" + n + ">" : g,
                D += C - 1;
        else if (g === l && p.charAt(D - 1) !== l && D) {
            for (d += h ? _ : "",
                h = 0; p.charAt(D + 1) === l;)
                d += f,
                    D++;
            D === y - 1 ? d += f : p.charAt(D + 1) !== ")" && (d += f + i(),
                h = 1)
        } else
            g === "{" && p.substr(D, 6) === "{{LT}}" ? (d += o ? r() + "{{LT}}</" + n + ">" : "{{LT}}",
                D += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || p.charCodeAt(D + 1) >= 65024 && p.charCodeAt(D + 1) <= 65039 ? (m = ((p.substr(D, 12).split(Uf) || [])[1] || "").length || 2,
                    d += o && g !== " " ? r() + p.substr(D, m) + "</" + n + ">" : p.substr(D, m),
                    D += m - 1) : d += o && g !== " " ? r() + g + "</" + n + ">" : g;
    e.outerHTML = d + (h ? _ : ""),
        x && al(w, "{{LT}}", "<")
}, sc = function u(e, t, i, r) {
    var n = rs(e.childNodes), s = n.length, o = wo(t), a, l;
    if (e.nodeType !== 3 || s > 1) {
        for (t.absolute = !1,
            a = 0; a < s; a++)
            l = n[a],
                l._next = l._isFirst = l._parent = l._wordEnd = null,
                (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (o && l.nodeType !== 3 && ul(l).display === "inline" && (l.style.display = "inline-block",
                    l.style.position = "relative"),
                    l._isSplit = !0,
                    u(l, t, i, r));
        t.absolute = o,
            e._isSplit = !0;
        return
    }
    nc(e, t, i, r)
}, ll = function () {
    function u(t, i) {
        nl || ol(),
            this.elements = rs(t),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = i || {},
            sl(this),
            this.split(i)
    }
    var e = u.prototype;
    return e.split = function (i) {
        this.isSplit && this.revert(),
            this.vars = i = i || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var r = this.elements.length, n = i.tag ? i.tag : i.span ? "span" : "div", s = pu(i.wordsClass, n), o = pu(i.charsClass, n), a, l, f; --r > -1;)
            f = this.elements[r],
                this._originals[r] = f.innerHTML,
                a = f.clientHeight,
                l = f.clientWidth,
                sc(f, i, s, o),
                rc(f, i, this.chars, this.words, this.lines, l, a);
        return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
    }
        ,
        e.revert = function () {
            var i = this._originals;
            if (!i)
                throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function (r, n) {
                return r.innerHTML = i[n]
            }),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
        }
        ,
        u.create = function (i, r) {
            return new u(i, r)
        }
        ,
        u
}();
ll.version = "3.11.4";
ll.register = ol;
var oc = Dt.registerPlugin(Da) || Dt;
oc.core.Tween;
var fl = {
    exports: {}
};
function Eo() { }
Eo.prototype = {
    on: function (u, e, t) {
        var i = this.e || (this.e = {});
        return (i[u] || (i[u] = [])).push({
            fn: e,
            ctx: t
        }),
            this
    },
    once: function (u, e, t) {
        var i = this;
        function r() {
            i.off(u, r),
                e.apply(t, arguments)
        }
        return r._ = e,
            this.on(u, r, t)
    },
    emit: function (u) {
        var e = [].slice.call(arguments, 1)
            , t = ((this.e || (this.e = {}))[u] || []).slice()
            , i = 0
            , r = t.length;
        for (i; i < r; i++)
            t[i].fn.apply(t[i].ctx, e);
        return this
    },
    off: function (u, e) {
        var t = this.e || (this.e = {})
            , i = t[u]
            , r = [];
        if (i && e)
            for (var n = 0, s = i.length; n < s; n++)
                i[n].fn !== e && i[n].fn._ !== e && r.push(i[n]);
        return r.length ? t[u] = r : delete t[u],
            this
    }
};
fl.exports = Eo;
var uc = fl.exports.TinyEmitter = Eo
    , cl = {
        exports: {}
    };
(function (u, e) {
    (function (t, i) {
        u.exports = i()
    }
    )(dl, function () {
        var t = 0;
        function i(d) {
            return "__private_" + t++ + "_" + d
        }
        function r(d, D) {
            if (!Object.prototype.hasOwnProperty.call(d, D))
                throw new TypeError("attempted to use private field on non-instance");
            return d
        }
        function n() { }
        n.prototype = {
            on: function (d, D, m) {
                var y = this.e || (this.e = {});
                return (y[d] || (y[d] = [])).push({
                    fn: D,
                    ctx: m
                }),
                    this
            },
            once: function (d, D, m) {
                var y = this;
                function g() {
                    y.off(d, g),
                        D.apply(m, arguments)
                }
                return g._ = D,
                    this.on(d, g, m)
            },
            emit: function (d) {
                for (var D = [].slice.call(arguments, 1), m = ((this.e || (this.e = {}))[d] || []).slice(), y = 0, g = m.length; y < g; y++)
                    m[y].fn.apply(m[y].ctx, D);
                return this
            },
            off: function (d, D) {
                var m = this.e || (this.e = {})
                    , y = m[d]
                    , g = [];
                if (y && D)
                    for (var x = 0, C = y.length; x < C; x++)
                        y[x].fn !== D && y[x].fn._ !== D && g.push(y[x]);
                return g.length ? m[d] = g : delete m[d],
                    this
            }
        };
        var s = n;
        s.TinyEmitter = n;
        var o, a = "virtualscroll", l = i("options"), f = i("el"), _ = i("emitter"), h = i("event"), c = i("touchStart"), p = i("bodyTouchAction");
        return function () {
            function d(m) {
                var y = this;
                Object.defineProperty(this, l, {
                    writable: !0,
                    value: void 0
                }),
                    Object.defineProperty(this, f, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, _, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, h, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, c, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, p, {
                        writable: !0,
                        value: void 0
                    }),
                    this._onWheel = function (g) {
                        var x = r(y, l)[l]
                            , C = r(y, h)[h];
                        C.deltaX = g.wheelDeltaX || -1 * g.deltaX,
                            C.deltaY = g.wheelDeltaY || -1 * g.deltaY,
                            o.isFirefox && g.deltaMode === 1 && (C.deltaX *= x.firefoxMultiplier,
                                C.deltaY *= x.firefoxMultiplier),
                            C.deltaX *= x.mouseMultiplier,
                            C.deltaY *= x.mouseMultiplier,
                            y._notify(g)
                    }
                    ,
                    this._onMouseWheel = function (g) {
                        var x = r(y, h)[h];
                        x.deltaX = g.wheelDeltaX ? g.wheelDeltaX : 0,
                            x.deltaY = g.wheelDeltaY ? g.wheelDeltaY : g.wheelDelta,
                            y._notify(g)
                    }
                    ,
                    this._onTouchStart = function (g) {
                        var x = g.targetTouches ? g.targetTouches[0] : g;
                        r(y, c)[c].x = x.pageX,
                            r(y, c)[c].y = x.pageY
                    }
                    ,
                    this._onTouchMove = function (g) {
                        var x = r(y, l)[l];
                        x.preventTouch && !g.target.classList.contains(x.unpreventTouchClass) && g.preventDefault();
                        var C = r(y, h)[h]
                            , b = g.targetTouches ? g.targetTouches[0] : g;
                        C.deltaX = (b.pageX - r(y, c)[c].x) * x.touchMultiplier,
                            C.deltaY = (b.pageY - r(y, c)[c].y) * x.touchMultiplier,
                            r(y, c)[c].x = b.pageX,
                            r(y, c)[c].y = b.pageY,
                            y._notify(g)
                    }
                    ,
                    this._onKeyDown = function (g) {
                        var x = r(y, h)[h];
                        x.deltaX = x.deltaY = 0;
                        var C = window.innerHeight - 40;
                        switch (g.keyCode) {
                            case 37:
                            case 38:
                                x.deltaY = r(y, l)[l].keyStep;
                                break;
                            case 39:
                            case 40:
                                x.deltaY = -r(y, l)[l].keyStep;
                                break;
                            case 32:
                                x.deltaY = C * (g.shiftKey ? 1 : -1);
                                break;
                            default:
                                return
                        }
                        y._notify(g)
                    }
                    ,
                    r(this, f)[f] = window,
                    m && m.el && (r(this, f)[f] = m.el,
                        delete m.el),
                    o || (o = {
                        hasWheelEvent: "onwheel" in document,
                        hasMouseWheelEvent: "onmousewheel" in document,
                        hasTouch: "ontouchstart" in document,
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown" in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                    }),
                    r(this, l)[l] = Object.assign({
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0
                    }, m),
                    r(this, _)[_] = new s,
                    r(this, h)[h] = {
                        y: 0,
                        x: 0,
                        deltaX: 0,
                        deltaY: 0
                    },
                    r(this, c)[c] = {
                        x: null,
                        y: null
                    },
                    r(this, p)[p] = null,
                    r(this, l)[l].passive !== void 0 && (this.listenerOptions = {
                        passive: r(this, l)[l].passive
                    })
            }
            var D = d.prototype;
            return D._notify = function (m) {
                var y = r(this, h)[h];
                y.x += y.deltaX,
                    y.y += y.deltaY,
                    r(this, _)[_].emit(a, {
                        x: y.x,
                        y: y.y,
                        deltaX: y.deltaX,
                        deltaY: y.deltaY,
                        originalEvent: m
                    })
            }
                ,
                D._bind = function () {
                    o.hasWheelEvent && r(this, f)[f].addEventListener("wheel", this._onWheel, this.listenerOptions),
                        o.hasMouseWheelEvent && r(this, f)[f].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                        o.hasTouch && r(this, l)[l].useTouch && (r(this, f)[f].addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                            r(this, f)[f].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                        o.hasPointer && o.hasTouchWin && (r(this, p)[p] = document.body.style.msTouchAction,
                            document.body.style.msTouchAction = "none",
                            r(this, f)[f].addEventListener("MSPointerDown", this._onTouchStart, !0),
                            r(this, f)[f].addEventListener("MSPointerMove", this._onTouchMove, !0)),
                        o.hasKeyDown && r(this, l)[l].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                }
                ,
                D._unbind = function () {
                    o.hasWheelEvent && r(this, f)[f].removeEventListener("wheel", this._onWheel),
                        o.hasMouseWheelEvent && r(this, f)[f].removeEventListener("mousewheel", this._onMouseWheel),
                        o.hasTouch && (r(this, f)[f].removeEventListener("touchstart", this._onTouchStart),
                            r(this, f)[f].removeEventListener("touchmove", this._onTouchMove)),
                        o.hasPointer && o.hasTouchWin && (document.body.style.msTouchAction = r(this, p)[p],
                            r(this, f)[f].removeEventListener("MSPointerDown", this._onTouchStart, !0),
                            r(this, f)[f].removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                        o.hasKeyDown && r(this, l)[l].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                }
                ,
                D.on = function (m, y) {
                    r(this, _)[_].on(a, m, y);
                    var g = r(this, _)[_].e;
                    g && g[a] && g[a].length === 1 && this._bind()
                }
                ,
                D.off = function (m, y) {
                    r(this, _)[_].off(a, m, y);
                    var g = r(this, _)[_].e;
                    (!g[a] || g[a].length <= 0) && this._unbind()
                }
                ,
                D.destroy = function () {
                    r(this, _)[_].off(),
                        this._unbind()
                }
                ,
                d
        }()
    })
}
)(cl);
const ac = cl.exports;
function gu(u, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(u, i.key, i)
    }
}
function hl(u, e, t) {
    return e && gu(u.prototype, e),
        t && gu(u, t),
        Object.defineProperty(u, "prototype", {
            writable: !1
        }),
        u
}
function Qr() {
    return Qr = Object.assign ? Object.assign.bind() : function (u) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (u[i] = t[i])
        }
        return u
    }
        ,
        Qr.apply(this, arguments)
}
function Zs(u, e) {
    return Zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, i) {
        return t.__proto__ = i,
            t
    }
        ,
        Zs(u, e)
}
function mu(u, e) {
    var t = u % e;
    return (e > 0 && t < 0 || e < 0 && t > 0) && (t += e),
        t
}
var lc = ["duration", "easing"]
    , fc = function () {
        function u() { }
        var e = u.prototype;
        return e.to = function (t, i) {
            var r = this
                , n = i === void 0 ? {} : i
                , s = n.duration
                , o = s === void 0 ? 1 : s
                , a = n.easing
                , l = a === void 0 ? function (_) {
                    return _
                }
                    : a
                , f = function (_, h) {
                    if (_ == null)
                        return {};
                    var c, p, d = {}, D = Object.keys(_);
                    for (p = 0; p < D.length; p++)
                        h.indexOf(c = D[p]) >= 0 || (d[c] = _[c]);
                    return d
                }(n, lc);
            this.target = t,
                this.fromKeys = Qr({}, f),
                this.toKeys = Qr({}, f),
                this.keys = Object.keys(Qr({}, f)),
                this.keys.forEach(function (_) {
                    r.fromKeys[_] = t[_]
                }),
                this.duration = o,
                this.easing = l,
                this.currentTime = 0,
                this.isRunning = !0
        }
            ,
            e.stop = function () {
                this.isRunning = !1
            }
            ,
            e.raf = function (t) {
                var i = this;
                if (this.isRunning) {
                    this.currentTime = Math.min(this.currentTime + t, this.duration);
                    var r = this.progress >= 1 ? 1 : this.easing(this.progress);
                    this.keys.forEach(function (n) {
                        var s = i.fromKeys[n];
                        i.target[n] = s + (i.toKeys[n] - s) * r
                    }),
                        r === 1 && this.stop()
                }
            }
            ,
            hl(u, [{
                key: "progress",
                get: function () {
                    return this.currentTime / this.duration
                }
            }]),
            u
    }()
    , hc = function (u) {
        var e, t;
        function i(n) {
            var s, o, a, l, f = n === void 0 ? {} : n, _ = f.duration, h = _ === void 0 ? 1.2 : _, c = f.easing, p = c === void 0 ? function (B) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * B))
            }
                : c, d = f.smooth, D = d === void 0 || d, m = f.mouseMultiplier, y = m === void 0 ? 1 : m, g = f.smoothTouch, x = g !== void 0 && g, C = f.touchMultiplier, b = C === void 0 ? 2 : C, w = f.direction, S = w === void 0 ? "vertical" : w, T = f.gestureDirection, P = T === void 0 ? "vertical" : T, M = f.infinite, O = M !== void 0 && M, $ = f.wrapper, X = $ === void 0 ? window : $, I = f.content, k = I === void 0 ? document.body : I;
            (l = u.call(this) || this).onWindowResize = function () {
                l.wrapperWidth = window.innerWidth,
                    l.wrapperHeight = window.innerHeight
            }
                ,
                l.onWrapperResize = function (B) {
                    var E = B[0];
                    if (E) {
                        var v = E.contentRect;
                        l.wrapperWidth = v.width,
                            l.wrapperHeight = v.height
                    }
                }
                ,
                l.onContentResize = function (B) {
                    var E = B[0];
                    if (E) {
                        var v = E.contentRect;
                        l.contentWidth = v.width,
                            l.contentHeight = v.height
                    }
                }
                ,
                l.onVirtualScroll = function (B) {
                    var E = B.deltaY
                        , v = B.deltaX
                        , q = B.originalEvent;
                    if (!(l.gestureDirection === "vertical" && E === 0 || l.gestureDirection === "horizontal" && v === 0)) {
                        var oe = !!q.composedPath().find(function (Me) {
                            return Me.hasAttribute && Me.hasAttribute("data-lenis-prevent")
                        });
                        q.ctrlKey || oe || (l.smooth = q.changedTouches ? l.smoothTouch : l.options.smooth,
                            l.stopped ? q.preventDefault() : l.smooth && q.buttons !== 4 && (l.smooth && q.preventDefault(),
                                l.targetScroll -= l.gestureDirection === "both" ? v + E : l.gestureDirection === "horizontal" ? v : E,
                                l.scrollTo(l.targetScroll)))
                    }
                }
                ,
                l.onScroll = function (B) {
                    l.isScrolling && l.smooth || (l.targetScroll = l.scroll = l.lastScroll = l.wrapperNode[l.scrollProperty],
                        l.notify())
                }
                ,
                window.lenisVersion = "0.2.28",
                l.options = {
                    duration: h,
                    easing: p,
                    smooth: D,
                    mouseMultiplier: y,
                    smoothTouch: x,
                    touchMultiplier: b,
                    direction: S,
                    gestureDirection: P,
                    infinite: O,
                    wrapper: X,
                    content: k
                },
                l.duration = h,
                l.easing = p,
                l.smooth = D,
                l.mouseMultiplier = y,
                l.smoothTouch = x,
                l.touchMultiplier = b,
                l.direction = S,
                l.gestureDirection = P,
                l.infinite = O,
                l.wrapperNode = X,
                l.contentNode = k,
                l.wrapperNode.addEventListener("scroll", l.onScroll),
                l.wrapperNode === window ? (l.wrapperNode.addEventListener("resize", l.onWindowResize),
                    l.onWindowResize()) : (l.wrapperHeight = l.wrapperNode.offsetHeight,
                        l.wrapperWidth = l.wrapperNode.offsetWidth,
                        l.wrapperObserver = new ResizeObserver(l.onWrapperResize),
                        l.wrapperObserver.observe(l.wrapperNode)),
                l.contentHeight = l.contentNode.offsetHeight,
                l.contentWidth = l.contentNode.offsetWidth,
                l.contentObserver = new ResizeObserver(l.onContentResize),
                l.contentObserver.observe(l.contentNode),
                l.targetScroll = l.scroll = l.lastScroll = l.wrapperNode[l.scrollProperty],
                l.animate = new fc;
            var R = ((s = navigator) == null || (o = s.userAgentData) == null ? void 0 : o.platform) || ((a = navigator) == null ? void 0 : a.platform) || "unknown";
            return l.virtualScroll = new ac({
                el: l.wrapperNode,
                firefoxMultiplier: 50,
                mouseMultiplier: l.mouseMultiplier * (R.includes("Win") || R.includes("Linux") ? .84 : .4),
                touchMultiplier: l.touchMultiplier,
                passive: !1,
                useKeyboard: !1,
                useTouch: !0
            }),
                l.virtualScroll.on(l.onVirtualScroll),
                l
        }
        t = u,
            (e = i).prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            Zs(e, t);
        var r = i.prototype;
        return r.start = function () {
            var n = this.wrapperNode;
            this.wrapperNode === window && (n = document.documentElement),
                n.classList.remove("lenis-stopped"),
                this.stopped = !1
        }
            ,
            r.stop = function () {
                var n = this.wrapperNode;
                this.wrapperNode === window && (n = document.documentElement),
                    n.classList.add("lenis-stopped"),
                    this.stopped = !0,
                    this.animate.stop()
            }
            ,
            r.destroy = function () {
                var n;
                this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize),
                    this.wrapperNode.removeEventListener("scroll", this.onScroll),
                    this.virtualScroll.destroy(),
                    (n = this.wrapperObserver) == null || n.disconnect(),
                    this.contentObserver.disconnect()
            }
            ,
            r.raf = function (n) {
                var s = n - (this.now || 0);
                this.now = n,
                    !this.stopped && this.smooth && (this.lastScroll = this.scroll,
                        this.animate.raf(.001 * s),
                        this.scroll === this.targetScroll && (this.lastScroll = this.scroll),
                        this.isScrolling && (this.setScroll(this.scroll),
                            this.notify()),
                        this.isScrolling = this.scroll !== this.targetScroll)
            }
            ,
            r.setScroll = function (n) {
                var s = this.infinite ? mu(n, this.limit) : n;
                this.direction === "horizontal" ? this.wrapperNode.scrollTo(s, 0) : this.wrapperNode.scrollTo(0, s)
            }
            ,
            r.notify = function () {
                var n = this.infinite ? mu(this.scroll, this.limit) : this.scroll;
                this.emit("scroll", {
                    scroll: n,
                    limit: this.limit,
                    velocity: this.velocity,
                    direction: this.velocity === 0 ? 0 : this.velocity > 0 ? 1 : -1,
                    progress: n / this.limit
                })
            }
            ,
            r.scrollTo = function (n, s) {
                var o = s === void 0 ? {} : s
                    , a = o.offset
                    , l = a === void 0 ? 0 : a
                    , f = o.immediate
                    , _ = f !== void 0 && f
                    , h = o.duration
                    , c = h === void 0 ? this.duration : h
                    , p = o.easing
                    , d = p === void 0 ? this.easing : p;
                if (n != null && !this.stopped) {
                    var D;
                    if (typeof n == "number")
                        D = n;
                    else if (n === "top" || n === "#top")
                        D = 0;
                    else if (n === "bottom")
                        D = this.limit;
                    else {
                        var m;
                        if (typeof n == "string")
                            m = document.querySelector(n);
                        else {
                            if (n == null || !n.nodeType)
                                return;
                            m = n
                        }
                        if (!m)
                            return;
                        var y = 0;
                        if (this.wrapperNode !== window) {
                            var g = this.wrapperNode.getBoundingClientRect();
                            y = this.direction === "horizontal" ? g.left : g.top
                        }
                        var x = m.getBoundingClientRect();
                        D = (this.direction === "horizontal" ? x.left : x.top) + this.scroll - y
                    }
                    D += l,
                        this.targetScroll = this.infinite ? D : Math.max(0, Math.min(D, this.limit)),
                        !this.smooth || _ ? (this.animate.stop(),
                            this.scroll = this.lastScroll = this.targetScroll,
                            this.setScroll(this.targetScroll)) : this.animate.to(this, {
                                duration: c,
                                easing: d,
                                scroll: this.targetScroll
                            })
                }
            }
            ,
            hl(i, [{
                key: "scrollProperty",
                get: function () {
                    return this.wrapperNode === window ? this.direction === "horizontal" ? "scrollX" : "scrollY" : this.direction === "horizontal" ? "scrollLeft" : "scrollTop"
                }
            }, {
                key: "limit",
                get: function () {
                    return this.direction === "horizontal" ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight
                }
            }, {
                key: "velocity",
                get: function () {
                    return this.scroll - this.lastScroll
                }
            }]),
            i
    }(uc);
export { Zf as D, Ee as O, on as R, Q as S, ll as a, ts as b, hc as c, oc as g };
