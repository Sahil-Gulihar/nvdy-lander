function Kt(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Ur(e, r, t) {
  return (
    r && Kt(e.prototype, r),
    t && Kt(e, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var $t = "(prefers-reduced-motion: reduce)",
  Re = 1,
  Br = 2,
  Pe = 3,
  Ve = 4,
  $e = 5,
  ot = 6,
  ft = 7,
  Hr = {
    CREATED: Re,
    MOUNTED: Br,
    IDLE: Pe,
    MOVING: Ve,
    SCROLLING: $e,
    DRAGGING: ot,
    DESTROYED: ft,
  };
function ge(e) {
  e.length = 0;
}
function ye(e, r, t) {
  return Array.prototype.slice.call(e, r, t);
}
function z(e) {
  return e.bind.apply(e, [null].concat(ye(arguments, 1)));
}
var cr = setTimeout,
  bt = function () {};
function jt(e) {
  return requestAnimationFrame(e);
}
function gt(e, r) {
  return typeof r === e;
}
function ze(e) {
  return !Mt(e) && gt("object", e);
}
var Pt = Array.isArray,
  fr = z(gt, "function"),
  me = z(gt, "string"),
  je = z(gt, "undefined");
function Mt(e) {
  return e === null;
}
function vr(e) {
  try {
    return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function Ze(e) {
  return Pt(e) ? e : [e];
}
function ne(e, r) {
  Ze(e).forEach(r);
}
function Vt(e, r) {
  return e.indexOf(r) > -1;
}
function ut(e, r) {
  return e.push.apply(e, Ze(r)), e;
}
function ve(e, r, t) {
  e &&
    ne(r, function (n) {
      n && e.classList[t ? "add" : "remove"](n);
    });
}
function ue(e, r) {
  ve(e, me(r) ? r.split(" ") : r, !0);
}
function Qe(e, r) {
  ne(r, e.appendChild.bind(e));
}
function xt(e, r) {
  ne(e, function (t) {
    var n = (r || t).parentNode;
    n && n.insertBefore(t, r);
  });
}
function Ue(e, r) {
  return vr(e) && (e.msMatchesSelector || e.matches).call(e, r);
}
function lr(e, r) {
  var t = e ? ye(e.children) : [];
  return r
    ? t.filter(function (n) {
        return Ue(n, r);
      })
    : t;
}
function Je(e, r) {
  return r ? lr(e, r)[0] : e.firstElementChild;
}
var Be = Object.keys;
function pe(e, r, t) {
  return (
    e &&
      (t ? Be(e).reverse() : Be(e)).forEach(function (n) {
        n !== "__proto__" && r(e[n], n);
      }),
    e
  );
}
function He(e) {
  return (
    ye(arguments, 1).forEach(function (r) {
      pe(r, function (t, n) {
        e[n] = r[n];
      });
    }),
    e
  );
}
function he(e) {
  return (
    ye(arguments, 1).forEach(function (r) {
      pe(r, function (t, n) {
        Pt(t)
          ? (e[n] = t.slice())
          : ze(t)
          ? (e[n] = he({}, ze(e[n]) ? e[n] : {}, t))
          : (e[n] = t);
      });
    }),
    e
  );
}
function Zt(e, r) {
  ne(r || Be(e), function (t) {
    delete e[t];
  });
}
function se(e, r) {
  ne(e, function (t) {
    ne(r, function (n) {
      t && t.removeAttribute(n);
    });
  });
}
function x(e, r, t) {
  ze(r)
    ? pe(r, function (n, a) {
        x(e, a, n);
      })
    : ne(e, function (n) {
        Mt(t) || t === "" ? se(n, r) : n.setAttribute(r, String(t));
      });
}
function Oe(e, r, t) {
  var n = document.createElement(e);
  return r && (me(r) ? ue(n, r) : x(n, r)), t && Qe(t, n), n;
}
function ie(e, r, t) {
  if (je(t)) return getComputedStyle(e)[r];
  Mt(t) || (e.style[r] = "" + t);
}
function Ye(e, r) {
  ie(e, "display", r);
}
function dr(e) {
  (e.setActive && e.setActive()) ||
    e.focus({
      preventScroll: !0,
    });
}
function ae(e, r) {
  return e.getAttribute(r);
}
function Qt(e, r) {
  return e && e.classList.contains(r);
}
function te(e) {
  return e.getBoundingClientRect();
}
function Ie(e) {
  ne(e, function (r) {
    r && r.parentNode && r.parentNode.removeChild(r);
  });
}
function gr(e) {
  return Je(new DOMParser().parseFromString(e, "text/html").body);
}
function fe(e, r) {
  e.preventDefault(), r && (e.stopPropagation(), e.stopImmediatePropagation());
}
function Er(e, r) {
  return e && e.querySelector(r);
}
function kt(e, r) {
  return r ? ye(e.querySelectorAll(r)) : [];
}
function le(e, r) {
  ve(e, r, !1);
}
function Ct(e) {
  return e.timeStamp;
}
function Le(e) {
  return me(e) ? e : e ? e + "px" : "";
}
var et = "splide",
  Ft = "data-" + et;
function Ge(e, r) {
  if (!e) throw new Error("[" + et + "] " + (r || ""));
}
var _e = Math.min,
  vt = Math.max,
  lt = Math.floor,
  Xe = Math.ceil,
  J = Math.abs;
function hr(e, r, t) {
  return J(e - r) < t;
}
function st(e, r, t, n) {
  var a = _e(r, t),
    v = vt(r, t);
  return n ? a < e && e < v : a <= e && e <= v;
}
function Ce(e, r, t) {
  var n = _e(r, t),
    a = vt(r, t);
  return _e(vt(n, e), a);
}
function Nt(e) {
  return +(e > 0) - +(e < 0);
}
function Rt(e, r) {
  return (
    ne(r, function (t) {
      e = e.replace("%s", "" + t);
    }),
    e
  );
}
function Gt(e) {
  return e < 10 ? "0" + e : "" + e;
}
var Jt = {};
function Yr(e) {
  return "" + e + Gt((Jt[e] = (Jt[e] || 0) + 1));
}
function mr() {
  var e = [];
  function r(i, s, c, l) {
    a(i, s, function (o, m, d) {
      var g = "addEventListener" in o,
        u = g
          ? o.removeEventListener.bind(o, m, c, l)
          : o.removeListener.bind(o, c);
      g ? o.addEventListener(m, c, l) : o.addListener(c),
        e.push([o, m, d, c, u]);
    });
  }
  function t(i, s, c) {
    a(i, s, function (l, o, m) {
      e = e.filter(function (d) {
        return d[0] === l && d[1] === o && d[2] === m && (!c || d[3] === c)
          ? (d[4](), !1)
          : !0;
      });
    });
  }
  function n(i, s, c) {
    var l,
      o = !0;
    return (
      typeof CustomEvent == "function"
        ? (l = new CustomEvent(s, {
            bubbles: o,
            detail: c,
          }))
        : ((l = document.createEvent("CustomEvent")),
          l.initCustomEvent(s, o, !1, c)),
      i.dispatchEvent(l),
      l
    );
  }
  function a(i, s, c) {
    ne(i, function (l) {
      l &&
        ne(s, function (o) {
          o.split(" ").forEach(function (m) {
            var d = m.split(".");
            c(l, d[0], d[1]);
          });
        });
    });
  }
  function v() {
    e.forEach(function (i) {
      i[4]();
    }),
      ge(e);
  }
  return {
    bind: r,
    unbind: t,
    dispatch: n,
    destroy: v,
  };
}
var be = "mounted",
  er = "ready",
  Ae = "move",
  tt = "moved",
  _r = "click",
  Xr = "active",
  qr = "inactive",
  Kr = "visible",
  $r = "hidden",
  q = "refresh",
  ee = "updated",
  qe = "resize",
  Wt = "resized",
  jr = "drag",
  Zr = "dragging",
  Qr = "dragged",
  zt = "scroll",
  xe = "scrolled",
  Jr = "overflow",
  Ar = "destroy",
  en = "arrows:mounted",
  tn = "arrows:updated",
  rn = "pagination:mounted",
  nn = "pagination:updated",
  yr = "navigation:mounted",
  Sr = "autoplay:play",
  an = "autoplay:playing",
  Tr = "autoplay:pause",
  Lr = "lazyload:loaded",
  pr = "sk",
  Ir = "sh",
  dt = "ei";
function H(e) {
  var r = e ? e.event.bus : document.createDocumentFragment(),
    t = mr();
  function n(v, i) {
    t.bind(r, Ze(v).join(" "), function (s) {
      i.apply(i, Pt(s.detail) ? s.detail : []);
    });
  }
  function a(v) {
    t.dispatch(r, v, ye(arguments, 1));
  }
  return (
    e && e.event.on(Ar, t.destroy),
    He(t, {
      bus: r,
      on: n,
      off: z(t.unbind, r),
      emit: a,
    })
  );
}
function Et(e, r, t, n) {
  var a = Date.now,
    v,
    i = 0,
    s,
    c = !0,
    l = 0;
  function o() {
    if (!c) {
      if (
        ((i = e ? _e((a() - v) / e, 1) : 1),
        t && t(i),
        i >= 1 && (r(), (v = a()), n && ++l >= n))
      )
        return d();
      s = jt(o);
    }
  }
  function m(_) {
    _ || u(), (v = a() - (_ ? i * e : 0)), (c = !1), (s = jt(o));
  }
  function d() {
    c = !0;
  }
  function g() {
    (v = a()), (i = 0), t && t(i);
  }
  function u() {
    s && cancelAnimationFrame(s), (i = 0), (s = 0), (c = !0);
  }
  function f(_) {
    e = _;
  }
  function A() {
    return c;
  }
  return {
    start: m,
    rewind: g,
    pause: d,
    cancel: u,
    set: f,
    isPaused: A,
  };
}
function on(e) {
  var r = e;
  function t(a) {
    r = a;
  }
  function n(a) {
    return Vt(Ze(a), r);
  }
  return {
    set: t,
    is: n,
  };
}
function un(e, r) {
  var t = Et(r || 0, e, null, 1);
  return function () {
    t.isPaused() && t.start();
  };
}
function sn(e, r, t) {
  var n = e.state,
    a = t.breakpoints || {},
    v = t.reducedMotion || {},
    i = mr(),
    s = [];
  function c() {
    var u = t.mediaQuery === "min";
    Be(a)
      .sort(function (f, A) {
        return u ? +f - +A : +A - +f;
      })
      .forEach(function (f) {
        o(a[f], "(" + (u ? "min" : "max") + "-width:" + f + "px)");
      }),
      o(v, $t),
      m();
  }
  function l(u) {
    u && i.destroy();
  }
  function o(u, f) {
    var A = matchMedia(f);
    i.bind(A, "change", m), s.push([u, A]);
  }
  function m() {
    var u = n.is(ft),
      f = t.direction,
      A = s.reduce(function (_, h) {
        return he(_, h[1].matches ? h[0] : {});
      }, {});
    Zt(t),
      g(A),
      t.destroy
        ? e.destroy(t.destroy === "completely")
        : u
        ? (l(!0), e.mount())
        : f !== t.direction && e.refresh();
  }
  function d(u) {
    matchMedia($t).matches && (u ? he(t, v) : Zt(t, Be(v)));
  }
  function g(u, f, A) {
    he(t, u),
      f && he(Object.getPrototypeOf(t), u),
      (A || !n.is(Re)) && e.emit(ee, t);
  }
  return {
    setup: c,
    destroy: l,
    reduce: d,
    set: g,
  };
}
var ht = "Arrow",
  mt = ht + "Left",
  _t = ht + "Right",
  wr = ht + "Up",
  br = ht + "Down",
  tr = "rtl",
  At = "ttb",
  Lt = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [wr, _t],
    ArrowRight: [br, mt],
  };
function cn(e, r, t) {
  function n(v, i, s) {
    s = s || t.direction;
    var c = s === tr && !i ? 1 : s === At ? 0 : -1;
    return (
      (Lt[v] && Lt[v][c]) ||
      v.replace(/width|left|right/i, function (l, o) {
        var m = Lt[l.toLowerCase()][c] || l;
        return o > 0 ? m.charAt(0).toUpperCase() + m.slice(1) : m;
      })
    );
  }
  function a(v) {
    return v * (t.direction === tr ? 1 : -1);
  }
  return {
    resolve: n,
    orient: a,
  };
}
var de = "role",
  De = "tabindex",
  fn = "disabled",
  oe = "aria-",
  rt = oe + "controls",
  Cr = oe + "current",
  rr = oe + "selected",
  re = oe + "label",
  Ut = oe + "labelledby",
  Nr = oe + "hidden",
  Bt = oe + "orientation",
  Ke = oe + "roledescription",
  nr = oe + "live",
  ir = oe + "busy",
  ar = oe + "atomic",
  Ht = [de, De, fn, rt, Cr, re, Ut, Nr, Bt, Ke],
  ce = et + "__",
  Se = "is-",
  pt = et,
  or = ce + "track",
  vn = ce + "list",
  yt = ce + "slide",
  Rr = yt + "--clone",
  ln = yt + "__container",
  Yt = ce + "arrows",
  St = ce + "arrow",
  Or = St + "--prev",
  Dr = St + "--next",
  Tt = ce + "pagination",
  Pr = Tt + "__page",
  dn = ce + "progress",
  gn = dn + "__bar",
  En = ce + "toggle",
  hn = ce + "spinner",
  mn = ce + "sr",
  _n = Se + "initialized",
  we = Se + "active",
  Mr = Se + "prev",
  Vr = Se + "next",
  Ot = Se + "visible",
  Dt = Se + "loading",
  xr = Se + "focus-in",
  kr = Se + "overflow",
  An = [we, Ot, Mr, Vr, Dt, xr, kr],
  yn = {
    slide: yt,
    clone: Rr,
    arrows: Yt,
    arrow: St,
    prev: Or,
    next: Dr,
    pagination: Tt,
    page: Pr,
    spinner: hn,
  };
function Sn(e, r) {
  if (fr(e.closest)) return e.closest(r);
  for (var t = e; t && t.nodeType === 1 && !Ue(t, r); ) t = t.parentElement;
  return t;
}
var Tn = 5,
  ur = 200,
  Fr = "touchstart mousedown",
  It = "touchmove mousemove",
  wt = "touchend touchcancel mouseup click";
function Ln(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.bind,
    i = e.root,
    s = t.i18n,
    c = {},
    l = [],
    o = [],
    m = [],
    d,
    g,
    u;
  function f() {
    E(), D(), h();
  }
  function A() {
    a(q, _),
      a(q, f),
      a(ee, h),
      v(
        document,
        Fr + " keydown",
        function (S) {
          u = S.type === "keydown";
        },
        {
          capture: !0,
        }
      ),
      v(i, "focusin", function () {
        ve(i, xr, !!u);
      });
  }
  function _(S) {
    var C = Ht.concat("style");
    ge(l), le(i, o), le(d, m), se([d, g], C), se(i, S ? C : ["style", Ke]);
  }
  function h() {
    le(i, o),
      le(d, m),
      (o = M(pt)),
      (m = M(or)),
      ue(i, o),
      ue(d, m),
      x(i, re, t.label),
      x(i, Ut, t.labelledby);
  }
  function E() {
    (d = b("." + or)),
      (g = Je(d, "." + vn)),
      Ge(d && g, "A track/list element is missing."),
      ut(l, lr(g, "." + yt + ":not(." + Rr + ")")),
      pe(
        {
          arrows: Yt,
          pagination: Tt,
          prev: Or,
          next: Dr,
          bar: gn,
          toggle: En,
        },
        function (S, C) {
          c[C] = b("." + S);
        }
      ),
      He(c, {
        root: i,
        track: d,
        list: g,
        slides: l,
      });
  }
  function D() {
    var S = i.id || Yr(et),
      C = t.role;
    (i.id = S),
      (d.id = d.id || S + "-track"),
      (g.id = g.id || S + "-list"),
      !ae(i, de) && i.tagName !== "SECTION" && C && x(i, de, C),
      x(i, Ke, s.carousel),
      x(g, de, "presentation");
  }
  function b(S) {
    var C = Er(i, S);
    return C && Sn(C, "." + pt) === i ? C : void 0;
  }
  function M(S) {
    return [
      S + "--" + t.type,
      S + "--" + t.direction,
      t.drag && S + "--draggable",
      t.isNavigation && S + "--nav",
      S === pt && we,
    ];
  }
  return He(c, {
    setup: f,
    mount: A,
    destroy: _,
  });
}
var Me = "slide",
  ke = "loop",
  nt = "fade";
function pn(e, r, t, n) {
  var a = H(e),
    v = a.on,
    i = a.emit,
    s = a.bind,
    c = e.Components,
    l = e.root,
    o = e.options,
    m = o.isNavigation,
    d = o.updateOnMove,
    g = o.i18n,
    u = o.pagination,
    f = o.slideFocus,
    A = c.Direction.resolve,
    _ = ae(n, "style"),
    h = ae(n, re),
    E = t > -1,
    D = Je(n, "." + ln),
    b;
  function M() {
    E ||
      ((n.id = l.id + "-slide" + Gt(r + 1)),
      x(n, de, u ? "tabpanel" : "group"),
      x(n, Ke, g.slide),
      x(n, re, h || Rt(g.slideLabel, [r + 1, e.length]))),
      S();
  }
  function S() {
    s(n, "click", z(i, _r, P)),
      s(n, "keydown", z(i, pr, P)),
      v([tt, Ir, xe], L),
      v(yr, F),
      d && v(Ae, O);
  }
  function C() {
    (b = !0),
      a.destroy(),
      le(n, An),
      se(n, Ht),
      x(n, "style", _),
      x(n, re, h || "");
  }
  function F() {
    var R = e.splides
      .map(function (T) {
        var N = T.splide.Components.Slides.getAt(r);
        return N ? N.slide.id : "";
      })
      .join(" ");
    x(n, re, Rt(g.slideX, (E ? t : r) + 1)),
      x(n, rt, R),
      x(n, de, f ? "button" : ""),
      f && se(n, Ke);
  }
  function O() {
    b || L();
  }
  function L() {
    if (!b) {
      var R = e.index;
      p(), I(), ve(n, Mr, r === R - 1), ve(n, Vr, r === R + 1);
    }
  }
  function p() {
    var R = k();
    R !== Qt(n, we) &&
      (ve(n, we, R), x(n, Cr, (m && R) || ""), i(R ? Xr : qr, P));
  }
  function I() {
    var R = Y(),
      T = !R && (!k() || E);
    if (
      (e.state.is([Ve, $e]) || x(n, Nr, T || ""),
      x(kt(n, o.focusableNodes || ""), De, T ? -1 : ""),
      f && x(n, De, T ? -1 : 0),
      R !== Qt(n, Ot) && (ve(n, Ot, R), i(R ? Kr : $r, P)),
      !R && document.activeElement === n)
    ) {
      var N = c.Slides.getAt(e.index);
      N && dr(N.slide);
    }
  }
  function V(R, T, N) {
    ie((N && D) || n, R, T);
  }
  function k() {
    var R = e.index;
    return R === r || (o.cloneStatus && R === t);
  }
  function Y() {
    if (e.is(nt)) return k();
    var R = te(c.Elements.track),
      T = te(n),
      N = A("left", !0),
      G = A("right", !0);
    return lt(R[N]) <= Xe(T[N]) && lt(T[G]) <= Xe(R[G]);
  }
  function B(R, T) {
    var N = J(R - r);
    return !E && (o.rewind || e.is(ke)) && (N = _e(N, e.length - N)), N <= T;
  }
  var P = {
    index: r,
    slideIndex: t,
    slide: n,
    container: D,
    isClone: E,
    mount: M,
    destroy: C,
    update: L,
    style: V,
    isWithin: B,
  };
  return P;
}
function In(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = n.bind,
    s = r.Elements,
    c = s.slides,
    l = s.list,
    o = [];
  function m() {
    d(), a(q, g), a(q, d);
  }
  function d() {
    c.forEach(function (L, p) {
      f(L, p, -1);
    });
  }
  function g() {
    b(function (L) {
      L.destroy();
    }),
      ge(o);
  }
  function u() {
    b(function (L) {
      L.update();
    });
  }
  function f(L, p, I) {
    var V = pn(e, p, I, L);
    V.mount(),
      o.push(V),
      o.sort(function (k, Y) {
        return k.index - Y.index;
      });
  }
  function A(L) {
    return L
      ? M(function (p) {
          return !p.isClone;
        })
      : o;
  }
  function _(L) {
    var p = r.Controller,
      I = p.toIndex(L),
      V = p.hasFocus() ? 1 : t.perPage;
    return M(function (k) {
      return st(k.index, I, I + V - 1);
    });
  }
  function h(L) {
    return M(L)[0];
  }
  function E(L, p) {
    ne(L, function (I) {
      if ((me(I) && (I = gr(I)), vr(I))) {
        var V = c[p];
        V ? xt(I, V) : Qe(l, I), ue(I, t.classes.slide), C(I, z(v, qe));
      }
    }),
      v(q);
  }
  function D(L) {
    Ie(
      M(L).map(function (p) {
        return p.slide;
      })
    ),
      v(q);
  }
  function b(L, p) {
    A(p).forEach(L);
  }
  function M(L) {
    return o.filter(
      fr(L)
        ? L
        : function (p) {
            return me(L) ? Ue(p.slide, L) : Vt(Ze(L), p.index);
          }
    );
  }
  function S(L, p, I) {
    b(function (V) {
      V.style(L, p, I);
    });
  }
  function C(L, p) {
    var I = kt(L, "img"),
      V = I.length;
    V
      ? I.forEach(function (k) {
          i(k, "load error", function () {
            --V || p();
          });
        })
      : p();
  }
  function F(L) {
    return L ? c.length : o.length;
  }
  function O() {
    return o.length > t.perPage;
  }
  return {
    mount: m,
    destroy: g,
    update: u,
    register: f,
    get: A,
    getIn: _,
    getAt: h,
    add: E,
    remove: D,
    forEach: b,
    filter: M,
    style: S,
    getLength: F,
    isEnough: O,
  };
}
function wn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.bind,
    i = n.emit,
    s = r.Slides,
    c = r.Direction.resolve,
    l = r.Elements,
    o = l.root,
    m = l.track,
    d = l.list,
    g = s.getAt,
    u = s.style,
    f,
    A,
    _;
  function h() {
    E(), v(window, "resize load", un(z(i, qe))), a([ee, q], E), a(qe, D);
  }
  function E() {
    (f = t.direction === At),
      ie(o, "maxWidth", Le(t.width)),
      ie(m, c("paddingLeft"), b(!1)),
      ie(m, c("paddingRight"), b(!0)),
      D(!0);
  }
  function D(P) {
    var R = te(o);
    (P || A.width !== R.width || A.height !== R.height) &&
      (ie(m, "height", M()),
      u(c("marginRight"), Le(t.gap)),
      u("width", C()),
      u("height", F(), !0),
      (A = R),
      i(Wt),
      _ !== (_ = B()) && (ve(o, kr, _), i(Jr, _)));
  }
  function b(P) {
    var R = t.padding,
      T = c(P ? "right" : "left");
    return (R && Le(R[T] || (ze(R) ? 0 : R))) || "0px";
  }
  function M() {
    var P = "";
    return (
      f &&
        ((P = S()),
        Ge(P, "height or heightRatio is missing."),
        (P = "calc(" + P + " - " + b(!1) + " - " + b(!0) + ")")),
      P
    );
  }
  function S() {
    return Le(t.height || te(d).width * t.heightRatio);
  }
  function C() {
    return t.autoWidth ? null : Le(t.fixedWidth) || (f ? "" : O());
  }
  function F() {
    return Le(t.fixedHeight) || (f ? (t.autoHeight ? null : O()) : S());
  }
  function O() {
    var P = Le(t.gap);
    return (
      "calc((100%" +
      (P && " + " + P) +
      ")/" +
      (t.perPage || 1) +
      (P && " - " + P) +
      ")"
    );
  }
  function L() {
    return te(d)[c("width")];
  }
  function p(P, R) {
    var T = g(P || 0);
    return T ? te(T.slide)[c("width")] + (R ? 0 : k()) : 0;
  }
  function I(P, R) {
    var T = g(P);
    if (T) {
      var N = te(T.slide)[c("right")],
        G = te(d)[c("left")];
      return J(N - G) + (R ? 0 : k());
    }
    return 0;
  }
  function V(P) {
    return I(e.length - 1) - I(0) + p(0, P);
  }
  function k() {
    var P = g(0);
    return (P && parseFloat(ie(P.slide, c("marginRight")))) || 0;
  }
  function Y(P) {
    return parseFloat(ie(m, c("padding" + (P ? "Right" : "Left")))) || 0;
  }
  function B() {
    return e.is(nt) || V(!0) > L();
  }
  return {
    mount: h,
    resize: D,
    listSize: L,
    slideSize: p,
    sliderSize: V,
    totalSize: I,
    getPadding: Y,
    isOverflow: B,
  };
}
var bn = 2;
function Cn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = r.Elements,
    i = r.Slides,
    s = r.Direction.resolve,
    c = [],
    l;
  function o() {
    a(q, m), a([ee, qe], g), (l = A()) && (u(l), r.Layout.resize(!0));
  }
  function m() {
    d(), o();
  }
  function d() {
    Ie(c), ge(c), n.destroy();
  }
  function g() {
    var _ = A();
    l !== _ && (l < _ || !_) && n.emit(q);
  }
  function u(_) {
    var h = i.get().slice(),
      E = h.length;
    if (E) {
      for (; h.length < _; ) ut(h, h);
      ut(h.slice(-_), h.slice(0, _)).forEach(function (D, b) {
        var M = b < _,
          S = f(D.slide, b);
        M ? xt(S, h[0].slide) : Qe(v.list, S),
          ut(c, S),
          i.register(S, b - _ + (M ? 0 : E), D.index);
      });
    }
  }
  function f(_, h) {
    var E = _.cloneNode(!0);
    return ue(E, t.classes.clone), (E.id = e.root.id + "-clone" + Gt(h + 1)), E;
  }
  function A() {
    var _ = t.clones;
    if (!e.is(ke)) _ = 0;
    else if (je(_)) {
      var h = t[s("fixedWidth")] && r.Layout.slideSize(0),
        E = h && Xe(te(v.track)[s("width")] / h);
      _ = E || (t[s("autoWidth")] && e.length) || t.perPage * bn;
    }
    return _;
  }
  return {
    mount: o,
    destroy: d,
  };
}
function Nn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = e.state.set,
    s = r.Layout,
    c = s.slideSize,
    l = s.getPadding,
    o = s.totalSize,
    m = s.listSize,
    d = s.sliderSize,
    g = r.Direction,
    u = g.resolve,
    f = g.orient,
    A = r.Elements,
    _ = A.list,
    h = A.track,
    E;
  function D() {
    (E = r.Transition), a([be, Wt, ee, q], b);
  }
  function b() {
    r.Controller.isBusy() || (r.Scroll.cancel(), S(e.index), r.Slides.update());
  }
  function M(T, N, G, j) {
    T !== N && P(T > G) && (L(), C(O(V(), T > G), !0)),
      i(Ve),
      v(Ae, N, G, T),
      E.start(N, function () {
        i(Pe), v(tt, N, G, T), j && j();
      });
  }
  function S(T) {
    C(I(T, !0));
  }
  function C(T, N) {
    if (!e.is(nt)) {
      var G = N ? T : F(T);
      ie(_, "transform", "translate" + u("X") + "(" + G + "px)"),
        T !== G && v(Ir);
    }
  }
  function F(T) {
    if (e.is(ke)) {
      var N = p(T),
        G = N > r.Controller.getEnd(),
        j = N < 0;
      (j || G) && (T = O(T, G));
    }
    return T;
  }
  function O(T, N) {
    var G = T - B(N),
      j = d();
    return (T -= f(j * (Xe(J(G) / j) || 1)) * (N ? 1 : -1)), T;
  }
  function L() {
    C(V(), !0), E.cancel();
  }
  function p(T) {
    for (var N = r.Slides.get(), G = 0, j = 1 / 0, K = 0; K < N.length; K++) {
      var Ee = N[K].index,
        y = J(I(Ee, !0) - T);
      if (y <= j) (j = y), (G = Ee);
      else break;
    }
    return G;
  }
  function I(T, N) {
    var G = f(o(T - 1) - Y(T));
    return N ? k(G) : G;
  }
  function V() {
    var T = u("left");
    return te(_)[T] - te(h)[T] + f(l(!1));
  }
  function k(T) {
    return t.trimSpace && e.is(Me) && (T = Ce(T, 0, f(d(!0) - m()))), T;
  }
  function Y(T) {
    var N = t.focus;
    return N === "center" ? (m() - c(T, !0)) / 2 : +N * c(T) || 0;
  }
  function B(T) {
    return I(T ? r.Controller.getEnd() : 0, !!t.trimSpace);
  }
  function P(T) {
    var N = f(O(V(), T));
    return T ? N >= 0 : N <= _[u("scrollWidth")] - te(h)[u("width")];
  }
  function R(T, N) {
    N = je(N) ? V() : N;
    var G = T !== !0 && f(N) < f(B(!1)),
      j = T !== !1 && f(N) > f(B(!0));
    return G || j;
  }
  return {
    mount: D,
    move: M,
    jump: S,
    translate: C,
    shift: O,
    cancel: L,
    toIndex: p,
    toPosition: I,
    getPosition: V,
    getLimit: B,
    exceededLimit: R,
    reposition: b,
  };
}
function Rn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = r.Move,
    s = i.getPosition,
    c = i.getLimit,
    l = i.toPosition,
    o = r.Slides,
    m = o.isEnough,
    d = o.getLength,
    g = t.omitEnd,
    u = e.is(ke),
    f = e.is(Me),
    A = z(V, !1),
    _ = z(V, !0),
    h = t.start || 0,
    E,
    D = h,
    b,
    M,
    S;
  function C() {
    F(), a([ee, q, dt], F), a(Wt, O);
  }
  function F() {
    (b = d(!0)), (M = t.perMove), (S = t.perPage), (E = P());
    var y = Ce(h, 0, g ? E : b - 1);
    y !== h && ((h = y), i.reposition());
  }
  function O() {
    E !== P() && v(dt);
  }
  function L(y, W, Q) {
    if (!Ee()) {
      var X = I(y),
        Z = B(X);
      Z > -1 && (W || Z !== h) && (G(Z), i.move(X, Z, D, Q));
    }
  }
  function p(y, W, Q, X) {
    r.Scroll.scroll(y, W, Q, function () {
      var Z = B(i.toIndex(s()));
      G(g ? _e(Z, E) : Z), X && X();
    });
  }
  function I(y) {
    var W = h;
    if (me(y)) {
      var Q = y.match(/([+\-<>])(\d+)?/) || [],
        X = Q[1],
        Z = Q[2];
      X === "+" || X === "-"
        ? (W = k(h + +("" + X + (+Z || 1)), h))
        : X === ">"
        ? (W = Z ? R(+Z) : A(!0))
        : X === "<" && (W = _(!0));
    } else W = u ? y : Ce(y, 0, E);
    return W;
  }
  function V(y, W) {
    var Q = M || (K() ? 1 : S),
      X = k(h + Q * (y ? -1 : 1), h, !(M || K()));
    return X === -1 && f && !hr(s(), c(!y), 1) ? (y ? 0 : E) : W ? X : B(X);
  }
  function k(y, W, Q) {
    if (m() || K()) {
      var X = Y(y);
      X !== y && ((W = y), (y = X), (Q = !1)),
        y < 0 || y > E
          ? !M && (st(0, y, W, !0) || st(E, W, y, !0))
            ? (y = R(T(y)))
            : u
            ? (y = Q ? (y < 0 ? -(b % S || S) : b) : y)
            : t.rewind
            ? (y = y < 0 ? E : 0)
            : (y = -1)
          : Q && y !== W && (y = R(T(W) + (y < W ? -1 : 1)));
    } else y = -1;
    return y;
  }
  function Y(y) {
    if (f && t.trimSpace === "move" && y !== h)
      for (var W = s(); W === l(y, !0) && st(y, 0, e.length - 1, !t.rewind); )
        y < h ? --y : ++y;
    return y;
  }
  function B(y) {
    return u ? (y + b) % b || 0 : y;
  }
  function P() {
    for (var y = b - (K() || (u && M) ? 1 : S); g && y-- > 0; )
      if (l(b - 1, !0) !== l(y, !0)) {
        y++;
        break;
      }
    return Ce(y, 0, b - 1);
  }
  function R(y) {
    return Ce(K() ? y : S * y, 0, E);
  }
  function T(y) {
    return K() ? _e(y, E) : lt((y >= E ? b - 1 : y) / S);
  }
  function N(y) {
    var W = i.toIndex(y);
    return f ? Ce(W, 0, E) : W;
  }
  function G(y) {
    y !== h && ((D = h), (h = y));
  }
  function j(y) {
    return y ? D : h;
  }
  function K() {
    return !je(t.focus) || t.isNavigation;
  }
  function Ee() {
    return e.state.is([Ve, $e]) && !!t.waitForTransition;
  }
  return {
    mount: C,
    go: L,
    scroll: p,
    getNext: A,
    getPrev: _,
    getAdjacent: V,
    getEnd: P,
    setIndex: G,
    getIndex: j,
    toIndex: R,
    toPage: T,
    toDest: N,
    hasFocus: K,
    isBusy: Ee,
  };
}
var On = "http://www.w3.org/2000/svg",
  Dn =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  at = 40;
function Pn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.bind,
    i = n.emit,
    s = t.classes,
    c = t.i18n,
    l = r.Elements,
    o = r.Controller,
    m = l.arrows,
    d = l.track,
    g = m,
    u = l.prev,
    f = l.next,
    A,
    _,
    h = {};
  function E() {
    b(), a(ee, D);
  }
  function D() {
    M(), E();
  }
  function b() {
    var p = t.arrows;
    p && !(u && f) && F(),
      u &&
        f &&
        (He(h, {
          prev: u,
          next: f,
        }),
        Ye(g, p ? "" : "none"),
        ue(g, (_ = Yt + "--" + t.direction)),
        p && (S(), L(), x([u, f], rt, d.id), i(en, u, f)));
  }
  function M() {
    n.destroy(),
      le(g, _),
      A ? (Ie(m ? [u, f] : g), (u = f = null)) : se([u, f], Ht);
  }
  function S() {
    a([be, tt, q, xe, dt], L),
      v(f, "click", z(C, ">")),
      v(u, "click", z(C, "<"));
  }
  function C(p) {
    o.go(p, !0);
  }
  function F() {
    (g = m || Oe("div", s.arrows)),
      (u = O(!0)),
      (f = O(!1)),
      (A = !0),
      Qe(g, [u, f]),
      !m && xt(g, d);
  }
  function O(p) {
    var I =
      '<button class="' +
      s.arrow +
      " " +
      (p ? s.prev : s.next) +
      '" type="button"><svg xmlns="' +
      On +
      '" viewBox="0 0 ' +
      at +
      " " +
      at +
      '" width="' +
      at +
      '" height="' +
      at +
      '" focusable="false"><path d="' +
      (t.arrowPath || Dn) +
      '" />';
    return gr(I);
  }
  function L() {
    if (u && f) {
      var p = e.index,
        I = o.getPrev(),
        V = o.getNext(),
        k = I > -1 && p < I ? c.last : c.prev,
        Y = V > -1 && p > V ? c.first : c.next;
      (u.disabled = I < 0),
        (f.disabled = V < 0),
        x(u, re, k),
        x(f, re, Y),
        i(tn, u, f, I, V);
    }
  }
  return {
    arrows: h,
    mount: E,
    destroy: M,
    update: L,
  };
}
var Mn = Ft + "-interval";
function Vn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.bind,
    i = n.emit,
    s = Et(t.interval, e.go.bind(e, ">"), S),
    c = s.isPaused,
    l = r.Elements,
    o = r.Elements,
    m = o.root,
    d = o.toggle,
    g = t.autoplay,
    u,
    f,
    A = g === "pause";
  function _() {
    g && (h(), d && x(d, rt, l.track.id), A || E(), M());
  }
  function h() {
    t.pauseOnHover &&
      v(m, "mouseenter mouseleave", function (F) {
        (u = F.type === "mouseenter"), b();
      }),
      t.pauseOnFocus &&
        v(m, "focusin focusout", function (F) {
          (f = F.type === "focusin"), b();
        }),
      d &&
        v(d, "click", function () {
          A ? E() : D(!0);
        }),
      a([Ae, zt, q], s.rewind),
      a(Ae, C);
  }
  function E() {
    c() &&
      r.Slides.isEnough() &&
      (s.start(!t.resetProgress), (f = u = A = !1), M(), i(Sr));
  }
  function D(F) {
    F === void 0 && (F = !0), (A = !!F), M(), c() || (s.pause(), i(Tr));
  }
  function b() {
    A || (u || f ? D(!1) : E());
  }
  function M() {
    d && (ve(d, we, !A), x(d, re, t.i18n[A ? "play" : "pause"]));
  }
  function S(F) {
    var O = l.bar;
    O && ie(O, "width", F * 100 + "%"), i(an, F);
  }
  function C(F) {
    var O = r.Slides.getAt(F);
    s.set((O && +ae(O.slide, Mn)) || t.interval);
  }
  return {
    mount: _,
    destroy: s.cancel,
    play: E,
    pause: D,
    isPaused: c,
  };
}
function xn(e, r, t) {
  var n = H(e),
    a = n.on;
  function v() {
    t.cover && (a(Lr, z(s, !0)), a([be, ee, q], z(i, !0)));
  }
  function i(c) {
    r.Slides.forEach(function (l) {
      var o = Je(l.container || l.slide, "img");
      o && o.src && s(c, o, l);
    });
  }
  function s(c, l, o) {
    o.style(
      "background",
      c ? 'center/cover no-repeat url("' + l.src + '")' : "",
      !0
    ),
      Ye(l, c ? "none" : "");
  }
  return {
    mount: v,
    destroy: z(i, !1),
  };
}
var kn = 10,
  Fn = 600,
  Gn = 0.6,
  Wn = 1.5,
  zn = 800;
function Un(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = e.state.set,
    s = r.Move,
    c = s.getPosition,
    l = s.getLimit,
    o = s.exceededLimit,
    m = s.translate,
    d = e.is(Me),
    g,
    u,
    f = 1;
  function A() {
    a(Ae, D), a([ee, q], b);
  }
  function _(S, C, F, O, L) {
    var p = c();
    if ((D(), F && (!d || !o()))) {
      var I = r.Layout.sliderSize(),
        V = Nt(S) * I * lt(J(S) / I) || 0;
      S = s.toPosition(r.Controller.toDest(S % I)) + V;
    }
    var k = hr(p, S, 1);
    (f = 1),
      (C = k ? 0 : C || vt(J(S - p) / Wn, zn)),
      (u = O),
      (g = Et(C, h, z(E, p, S, L), 1)),
      i($e),
      v(zt),
      g.start();
  }
  function h() {
    i(Pe), u && u(), v(xe);
  }
  function E(S, C, F, O) {
    var L = c(),
      p = S + (C - S) * M(O),
      I = (p - L) * f;
    m(L + I),
      d && !F && o() && ((f *= Gn), J(I) < kn && _(l(o(!0)), Fn, !1, u, !0));
  }
  function D() {
    g && g.cancel();
  }
  function b() {
    g && !g.isPaused() && (D(), h());
  }
  function M(S) {
    var C = t.easingFunc;
    return C ? C(S) : 1 - Math.pow(1 - S, 4);
  }
  return {
    mount: A,
    destroy: D,
    scroll: _,
    cancel: b,
  };
}
var Ne = {
  passive: !1,
  capture: !0,
};
function Bn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = n.bind,
    s = n.unbind,
    c = e.state,
    l = r.Move,
    o = r.Scroll,
    m = r.Controller,
    d = r.Elements.track,
    g = r.Media.reduce,
    u = r.Direction,
    f = u.resolve,
    A = u.orient,
    _ = l.getPosition,
    h = l.exceededLimit,
    E,
    D,
    b,
    M,
    S,
    C = !1,
    F,
    O,
    L;
  function p() {
    i(d, It, bt, Ne),
      i(d, wt, bt, Ne),
      i(d, Fr, V, Ne),
      i(d, "click", B, {
        capture: !0,
      }),
      i(d, "dragstart", fe),
      a([be, ee], I);
  }
  function I() {
    var w = t.drag;
    qt(!w), (M = w === "free");
  }
  function V(w) {
    if (((F = !1), !O)) {
      var U = Z(w);
      X(w.target) &&
        (U || !w.button) &&
        (m.isBusy()
          ? fe(w, !0)
          : ((L = U ? d : window),
            (S = c.is([Ve, $e])),
            (b = null),
            i(L, It, k, Ne),
            i(L, wt, Y, Ne),
            l.cancel(),
            o.cancel(),
            P(w)));
    }
  }
  function k(w) {
    if ((c.is(ot) || (c.set(ot), v(jr)), w.cancelable))
      if (S) {
        l.translate(E + Q(K(w)));
        var U = Ee(w) > ur,
          Te = C !== (C = h());
        (U || Te) && P(w), (F = !0), v(Zr), fe(w);
      } else N(w) && ((S = T(w)), fe(w));
  }
  function Y(w) {
    c.is(ot) && (c.set(Pe), v(Qr)),
      S && (R(w), fe(w)),
      s(L, It, k),
      s(L, wt, Y),
      (S = !1);
  }
  function B(w) {
    !O && F && fe(w, !0);
  }
  function P(w) {
    (b = D), (D = w), (E = _());
  }
  function R(w) {
    var U = G(w),
      Te = j(U),
      Fe = t.rewind && t.rewindByDrag;
    g(!1),
      M
        ? m.scroll(Te, 0, t.snap)
        : e.is(nt)
        ? m.go(A(Nt(U)) < 0 ? (Fe ? "<" : "-") : Fe ? ">" : "+")
        : e.is(Me) && C && Fe
        ? m.go(h(!0) ? ">" : "<")
        : m.go(m.toDest(Te), !0),
      g(!0);
  }
  function T(w) {
    var U = t.dragMinThreshold,
      Te = ze(U),
      Fe = (Te && U.mouse) || 0,
      zr = (Te ? U.touch : +U) || 10;
    return J(K(w)) > (Z(w) ? zr : Fe);
  }
  function N(w) {
    return J(K(w)) > J(K(w, !0));
  }
  function G(w) {
    if (e.is(ke) || !C) {
      var U = Ee(w);
      if (U && U < ur) return K(w) / U;
    }
    return 0;
  }
  function j(w) {
    return (
      _() +
      Nt(w) *
        _e(
          J(w) * (t.flickPower || 600),
          M ? 1 / 0 : r.Layout.listSize() * (t.flickMaxPages || 1)
        )
    );
  }
  function K(w, U) {
    return W(w, U) - W(y(w), U);
  }
  function Ee(w) {
    return Ct(w) - Ct(y(w));
  }
  function y(w) {
    return (D === w && b) || D;
  }
  function W(w, U) {
    return (Z(w) ? w.changedTouches[0] : w)["page" + f(U ? "Y" : "X")];
  }
  function Q(w) {
    return w / (C && e.is(Me) ? Tn : 1);
  }
  function X(w) {
    var U = t.noDrag;
    return !Ue(w, "." + Pr + ", ." + St) && (!U || !Ue(w, U));
  }
  function Z(w) {
    return typeof TouchEvent < "u" && w instanceof TouchEvent;
  }
  function Wr() {
    return S;
  }
  function qt(w) {
    O = w;
  }
  return {
    mount: p,
    disable: qt,
    isDragging: Wr,
  };
}
var Hn = {
  Spacebar: " ",
  Right: _t,
  Left: mt,
  Up: wr,
  Down: br,
};
function Xt(e) {
  return (e = me(e) ? e : e.key), Hn[e] || e;
}
var sr = "keydown";
function Yn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.bind,
    i = n.unbind,
    s = e.root,
    c = r.Direction.resolve,
    l,
    o;
  function m() {
    d(), a(ee, g), a(ee, d), a(Ae, f);
  }
  function d() {
    var _ = t.keyboard;
    _ && ((l = _ === "global" ? window : s), v(l, sr, A));
  }
  function g() {
    i(l, sr);
  }
  function u(_) {
    o = _;
  }
  function f() {
    var _ = o;
    (o = !0),
      cr(function () {
        o = _;
      });
  }
  function A(_) {
    if (!o) {
      var h = Xt(_);
      h === c(mt) ? e.go("<") : h === c(_t) && e.go(">");
    }
  }
  return {
    mount: m,
    destroy: g,
    disable: u,
  };
}
var We = Ft + "-lazy",
  ct = We + "-srcset",
  Xn = "[" + We + "], [" + ct + "]";
function qn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.off,
    i = n.bind,
    s = n.emit,
    c = t.lazyLoad === "sequential",
    l = [tt, xe],
    o = [];
  function m() {
    t.lazyLoad && (d(), a(q, d));
  }
  function d() {
    ge(o), g(), c ? _() : (v(l), a(l, u), u());
  }
  function g() {
    r.Slides.forEach(function (h) {
      kt(h.slide, Xn).forEach(function (E) {
        var D = ae(E, We),
          b = ae(E, ct);
        if (D !== E.src || b !== E.srcset) {
          var M = t.classes.spinner,
            S = E.parentElement,
            C = Je(S, "." + M) || Oe("span", M, S);
          o.push([E, h, C]), E.src || Ye(E, "none");
        }
      });
    });
  }
  function u() {
    (o = o.filter(function (h) {
      var E = t.perPage * ((t.preloadPages || 1) + 1) - 1;
      return h[1].isWithin(e.index, E) ? f(h) : !0;
    })),
      o.length || v(l);
  }
  function f(h) {
    var E = h[0];
    ue(h[1].slide, Dt),
      i(E, "load error", z(A, h)),
      x(E, "src", ae(E, We)),
      x(E, "srcset", ae(E, ct)),
      se(E, We),
      se(E, ct);
  }
  function A(h, E) {
    var D = h[0],
      b = h[1];
    le(b.slide, Dt),
      E.type !== "error" && (Ie(h[2]), Ye(D, ""), s(Lr, D, b), s(qe)),
      c && _();
  }
  function _() {
    o.length && f(o.shift());
  }
  return {
    mount: m,
    destroy: z(ge, o),
    check: u,
  };
}
function Kn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = n.emit,
    i = n.bind,
    s = r.Slides,
    c = r.Elements,
    l = r.Controller,
    o = l.hasFocus,
    m = l.getIndex,
    d = l.go,
    g = r.Direction.resolve,
    u = c.pagination,
    f = [],
    A,
    _;
  function h() {
    E(), a([ee, q, dt], h);
    var O = t.pagination;
    u && Ye(u, O ? "" : "none"),
      O &&
        (a([Ae, zt, xe], F),
        D(),
        F(),
        v(
          rn,
          {
            list: A,
            items: f,
          },
          C(e.index)
        ));
  }
  function E() {
    A && (Ie(u ? ye(A.children) : A), le(A, _), ge(f), (A = null)), n.destroy();
  }
  function D() {
    var O = e.length,
      L = t.classes,
      p = t.i18n,
      I = t.perPage,
      V = o() ? l.getEnd() + 1 : Xe(O / I);
    (A = u || Oe("ul", L.pagination, c.track.parentElement)),
      ue(A, (_ = Tt + "--" + S())),
      x(A, de, "tablist"),
      x(A, re, p.select),
      x(A, Bt, S() === At ? "vertical" : "");
    for (var k = 0; k < V; k++) {
      var Y = Oe("li", null, A),
        B = Oe(
          "button",
          {
            class: L.page,
            type: "button",
          },
          Y
        ),
        P = s.getIn(k).map(function (T) {
          return T.slide.id;
        }),
        R = !o() && I > 1 ? p.pageX : p.slideX;
      i(B, "click", z(b, k)),
        t.paginationKeyboard && i(B, "keydown", z(M, k)),
        x(Y, de, "presentation"),
        x(B, de, "tab"),
        x(B, rt, P.join(" ")),
        x(B, re, Rt(R, k + 1)),
        x(B, De, -1),
        f.push({
          li: Y,
          button: B,
          page: k,
        });
    }
  }
  function b(O) {
    d(">" + O, !0);
  }
  function M(O, L) {
    var p = f.length,
      I = Xt(L),
      V = S(),
      k = -1;
    I === g(_t, !1, V)
      ? (k = ++O % p)
      : I === g(mt, !1, V)
      ? (k = (--O + p) % p)
      : I === "Home"
      ? (k = 0)
      : I === "End" && (k = p - 1);
    var Y = f[k];
    Y && (dr(Y.button), d(">" + k), fe(L, !0));
  }
  function S() {
    return t.paginationDirection || t.direction;
  }
  function C(O) {
    return f[l.toPage(O)];
  }
  function F() {
    var O = C(m(!0)),
      L = C(m());
    if (O) {
      var p = O.button;
      le(p, we), se(p, rr), x(p, De, -1);
    }
    if (L) {
      var I = L.button;
      ue(I, we), x(I, rr, !0), x(I, De, "");
    }
    v(
      nn,
      {
        list: A,
        items: f,
      },
      O,
      L
    );
  }
  return {
    items: f,
    mount: h,
    destroy: E,
    getAt: C,
    update: F,
  };
}
var $n = [" ", "Enter"];
function jn(e, r, t) {
  var n = t.isNavigation,
    a = t.slideFocus,
    v = [];
  function i() {
    e.splides.forEach(function (u) {
      u.isParent || (l(e, u.splide), l(u.splide, e));
    }),
      n && o();
  }
  function s() {
    v.forEach(function (u) {
      u.destroy();
    }),
      ge(v);
  }
  function c() {
    s(), i();
  }
  function l(u, f) {
    var A = H(u);
    A.on(Ae, function (_, h, E) {
      f.go(f.is(ke) ? E : _);
    }),
      v.push(A);
  }
  function o() {
    var u = H(e),
      f = u.on;
    f(_r, d), f(pr, g), f([be, ee], m), v.push(u), u.emit(yr, e.splides);
  }
  function m() {
    x(r.Elements.list, Bt, t.direction === At ? "vertical" : "");
  }
  function d(u) {
    e.go(u.index);
  }
  function g(u, f) {
    Vt($n, Xt(f)) && (d(u), fe(f));
  }
  return {
    setup: z(
      r.Media.set,
      {
        slideFocus: je(a) ? n : a,
      },
      !0
    ),
    mount: i,
    destroy: s,
    remount: c,
  };
}
function Zn(e, r, t) {
  var n = H(e),
    a = n.bind,
    v = 0;
  function i() {
    t.wheel && a(r.Elements.track, "wheel", s, Ne);
  }
  function s(l) {
    if (l.cancelable) {
      var o = l.deltaY,
        m = o < 0,
        d = Ct(l),
        g = t.wheelMinThreshold || 0,
        u = t.wheelSleep || 0;
      J(o) > g && d - v > u && (e.go(m ? "<" : ">"), (v = d)), c(m) && fe(l);
    }
  }
  function c(l) {
    return (
      !t.releaseWheel || e.state.is(Ve) || r.Controller.getAdjacent(l) !== -1
    );
  }
  return {
    mount: i,
  };
}
var Qn = 90;
function Jn(e, r, t) {
  var n = H(e),
    a = n.on,
    v = r.Elements.track,
    i = t.live && !t.isNavigation,
    s = Oe("span", mn),
    c = Et(Qn, z(o, !1));
  function l() {
    i &&
      (d(!r.Autoplay.isPaused()),
      x(v, ar, !0),
      (s.textContent = "\u2026"),
      a(Sr, z(d, !0)),
      a(Tr, z(d, !1)),
      a([tt, xe], z(o, !0)));
  }
  function o(g) {
    x(v, ir, g), g ? (Qe(v, s), c.start()) : (Ie(s), c.cancel());
  }
  function m() {
    se(v, [nr, ar, ir]), Ie(s);
  }
  function d(g) {
    i && x(v, nr, g ? "off" : "polite");
  }
  return {
    mount: l,
    disable: d,
    destroy: m,
  };
}
var ei = Object.freeze({
    __proto__: null,
    Media: sn,
    Direction: cn,
    Elements: Ln,
    Slides: In,
    Layout: wn,
    Clones: Cn,
    Move: Nn,
    Controller: Rn,
    Arrows: Pn,
    Autoplay: Vn,
    Cover: xn,
    Scroll: Un,
    Drag: Bn,
    Keyboard: Yn,
    LazyLoad: qn,
    Pagination: Kn,
    Sync: jn,
    Wheel: Zn,
    Live: Jn,
  }),
  ti = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  ri = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: yn,
    i18n: ti,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause",
    },
  };
function ni(e, r, t) {
  var n = r.Slides;
  function a() {
    H(e).on([be, q], v);
  }
  function v() {
    n.forEach(function (s) {
      s.style("transform", "translateX(-" + 100 * s.index + "%)");
    });
  }
  function i(s, c) {
    n.style("transition", "opacity " + t.speed + "ms " + t.easing), cr(c);
  }
  return {
    mount: a,
    start: i,
    cancel: bt,
  };
}
function ii(e, r, t) {
  var n = r.Move,
    a = r.Controller,
    v = r.Scroll,
    i = r.Elements.list,
    s = z(ie, i, "transition"),
    c;
  function l() {
    H(e).bind(i, "transitionend", function (g) {
      g.target === i && c && (m(), c());
    });
  }
  function o(g, u) {
    var f = n.toPosition(g, !0),
      A = n.getPosition(),
      _ = d(g);
    J(f - A) >= 1 && _ >= 1
      ? t.useScroll
        ? v.scroll(f, _, !1, u)
        : (s("transform " + _ + "ms " + t.easing), n.translate(f, !0), (c = u))
      : (n.jump(g), u());
  }
  function m() {
    s(""), v.cancel();
  }
  function d(g) {
    var u = t.rewindSpeed;
    if (e.is(Me) && u) {
      var f = a.getIndex(!0),
        A = a.getEnd();
      if ((f === 0 && g >= A) || (f >= A && g === 0)) return u;
    }
    return t.speed;
  }
  return {
    mount: l,
    start: o,
    cancel: m,
  };
}
var ai = (function () {
    function e(t, n) {
      (this.event = H()),
        (this.Components = {}),
        (this.state = on(Re)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var a = me(t) ? Er(document, t) : t;
      Ge(a, a + " is invalid."),
        (this.root = a),
        (n = he(
          {
            label: ae(a, re) || "",
            labelledby: ae(a, Ut) || "",
          },
          ri,
          e.defaults,
          n || {}
        ));
      try {
        he(n, JSON.parse(ae(a, Ft)));
      } catch {
        Ge(!1, "Invalid JSON");
      }
      this._o = Object.create(he({}, n));
    }
    var r = e.prototype;
    return (
      (r.mount = function (n, a) {
        var v = this,
          i = this.state,
          s = this.Components;
        Ge(i.is([Re, ft]), "Already mounted!"),
          i.set(Re),
          (this._C = s),
          (this._T = a || this._T || (this.is(nt) ? ni : ii)),
          (this._E = n || this._E);
        var c = He({}, ei, this._E, {
          Transition: this._T,
        });
        return (
          pe(c, function (l, o) {
            var m = l(v, s, v._o);
            (s[o] = m), m.setup && m.setup();
          }),
          pe(s, function (l) {
            l.mount && l.mount();
          }),
          this.emit(be),
          ue(this.root, _n),
          i.set(Pe),
          this.emit(er),
          this
        );
      }),
      (r.sync = function (n) {
        return (
          this.splides.push({
            splide: n,
          }),
          n.splides.push({
            splide: this,
            isParent: !0,
          }),
          this.state.is(Pe) &&
            (this._C.Sync.remount(), n.Components.Sync.remount()),
          this
        );
      }),
      (r.go = function (n) {
        return this._C.Controller.go(n), this;
      }),
      (r.on = function (n, a) {
        return this.event.on(n, a), this;
      }),
      (r.off = function (n) {
        return this.event.off(n), this;
      }),
      (r.emit = function (n) {
        var a;
        return (
          (a = this.event).emit.apply(a, [n].concat(ye(arguments, 1))), this
        );
      }),
      (r.add = function (n, a) {
        return this._C.Slides.add(n, a), this;
      }),
      (r.remove = function (n) {
        return this._C.Slides.remove(n), this;
      }),
      (r.is = function (n) {
        return this._o.type === n;
      }),
      (r.refresh = function () {
        return this.emit(q), this;
      }),
      (r.destroy = function (n) {
        n === void 0 && (n = !0);
        var a = this.event,
          v = this.state;
        return (
          v.is(Re)
            ? H(this).on(er, this.destroy.bind(this, n))
            : (pe(
                this._C,
                function (i) {
                  i.destroy && i.destroy(n);
                },
                !0
              ),
              a.emit(Ar),
              a.destroy(),
              n && ge(this.splides),
              v.set(ft)),
          this
        );
      }),
      Ur(e, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (n) {
            this._C.Media.set(n, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      e
    );
  })(),
  it = ai;
it.defaults = {};
it.STATES = Hr;
async function oi() {
  for (
    var e = document.querySelectorAll(".splide.is-about-slide"), r = 0;
    r < e.length;
    r++
  )
    new it(e[r], {
      autoWidth: !1,
      padding: {
        left: "0rem",
        right: "0rem",
      },
      arrows: !0,
      gap: "2rem",
      perPage: 1,
      pagination: !1,
      mediaQuery: "min",
      classes: {
        prev: "splide__arrow--prev is-about-slide",
        next: "splide__arrow--next is-about-slide",
      },
      breakpoints: {
        768: {
          autoWidth: !0,
          arrows: !0,
          gap: "2rem",
        },
      },
    }).mount();
}
async function ui() {
  for (
    var e = document.querySelectorAll(".splide.is-ethic-slide"), r = 0;
    r < e.length;
    r++
  ) {
    const n = new it(e[r], {
      autoWidth: !1,
      padding: {
        left: "0rem",
        right: "0rem",
      },
      arrows: !0,
      gap: "2rem",
      perPage: 1,
      pagination: !1,
      mediaQuery: "min",
      classes: {
        prev: "splide__arrow--prev is-ethic-slide",
        next: "splide__arrow--next is-ethic-slide",
      },
      breakpoints: {
        768: {
          autoWidth: !0,
          padding: {
            left: "7.2rem",
            right: "7.2rem",
          },
          arrows: !0,
          gap: "2rem",
        },
        3e3: {
          autoWidth: !1,
          perPage: 3,
          padding: {
            left: "7.2rem",
            right: "0",
          },
        },
      },
    });
    var t = n.root.querySelector(".ethic_slide_progerss_bar");
    n.on("ready", function () {
      n.Components.Arrows.arrows.prev.classList.add("disabled");
    }),
      n.on("mounted move", function () {
        var a = n.Components.Controller.getEnd() + 1,
          v = Math.min((n.index + 1) / a, 1);
        t.style.width = String(100 * v) + "%";
      }),
      n.on("move", () => {
        Gr(
          n.Components.Controller.getEnd(),
          n.index,
          n.Components.Arrows.arrows.prev,
          n.Components.Arrows.arrows.next,
          "disabled"
        );
      }),
      n.mount();
  }
}
async function si() {
  for (
    var e = document.querySelectorAll(".splide.is-method"), r = 0;
    r < e.length;
    r++
  ) {
    const n = new it(e[r], {
      autoWidth: !1,
      padding: {
        left: "0rem",
        right: "0rem",
      },
      arrows: !0,
      gap: "2rem",
      perPage: 1,
      pagination: !1,
      mediaQuery: "min",
      classes: {
        prev: "splide__arrow--prev is-method",
        next: "splide__arrow--next is-method",
      },
      breakpoints: {
        768: {
          autoWidth: !0,
          padding: {
            left: "7.2rem",
            right: "7.2rem",
          },
          arrows: !0,
          gap: "2rem",
        },
        3e3: {
          autoWidth: !1,
          perPage: 3,
          padding: {
            left: "7.2rem",
            right: "0",
          },
        },
      },
    });
    var t = n.root.querySelector(".method_slide_progerss_bar");
    n.on("ready", function () {
      n.Components.Arrows.arrows.prev.classList.add("disabled");
    }),
      n.on("mounted move", function () {
        var a = n.Components.Controller.getEnd() + 1,
          v = Math.min((n.index + 1) / a, 1);
        t.style.width = String(100 * v) + "%";
      }),
      n.on("move", () => {
        Gr(
          n.Components.Controller.getEnd(),
          n.index,
          n.Components.Arrows.arrows.prev,
          n.Components.Arrows.arrows.next,
          "disabled"
        );
      }),
      n.mount();
  }
}
function Gr(e, r, t, n, a) {
  switch (r) {
    case 0:
      $(t).addClass(a), $(n).removeClass(a);
      break;
    case e:
      $(t).removeClass(a), $(n).addClass(a);
      break;
    default:
      $(t).removeClass(a), $(n).removeClass(a);
      break;
  }
}
export { oi as a, ui as e, si as m };
