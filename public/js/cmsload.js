(() => {
  var ie = Object.create,
    C = Object.defineProperty,
    le = Object.getOwnPropertyDescriptor,
    oe = Object.getOwnPropertyNames,
    se = Object.getPrototypeOf,
    ue = Object.prototype.hasOwnProperty,
    pe = (e, t, n) =>
      t in e
        ? C(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n),
    ce = (e, t) => () => (
      t ||
        e(
          (t = {
            exports: {},
          }).exports,
          t
        ),
      t.exports
    ),
    de = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of oe(t))
          !ue.call(e, a) &&
            a !== n &&
            C(e, a, {
              get: () => t[a],
              enumerable: !(r = le(t, a)) || r.enumerable,
            });
      return e;
    },
    ge = (e, t, n) => (
      (n = e != null ? ie(se(e)) : {}),
      de(
        t || !e || !e.__esModule
          ? C(n, "default", {
              value: e,
              enumerable: !0,
            })
          : n,
        e
      )
    ),
    me = (e, t, n) => (pe(e, typeof t != "symbol" ? t + "" : t, n), n),
    fe = ce((e, t) => {
      t.exports = n;
      function n(r, a, i, l) {
        var o, u, s;
        return function () {
          if (
            ((s = this),
            (u = Array.prototype.slice.call(arguments)),
            o && (i || l))
          )
            return;
          if (!i) return g(), (o = setTimeout(p, a)), o;
          (o = setTimeout(g, a)), r.apply(s, u);
          function p() {
            g(), r.apply(s, u);
          }
          function g() {
            clearTimeout(o), (o = null);
          }
        };
      }
    }),
    A = "fs-attributes",
    ve = "animation",
    ye = "cmscore",
    S = "cmsload",
    W = "support",
    I = class {
      static activateAlerts() {
        this.alertsActivated = !0;
      }
      static alert(e, t) {
        if ((this.alertsActivated && window.alert(e), t === "error"))
          throw new Error(e);
      }
    };
  me(I, "alertsActivated", !1);
  var K = () => {};
  function E(e, t, n, r) {
    return e
      ? (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r))
      : K;
  }
  var we = (e) => e instanceof Element,
    be = (e) => e instanceof HTMLAnchorElement,
    he = (e, t) => !!e && t.includes(e),
    $e = (e) => e != null,
    F = (e) => typeof e == "string",
    Pe = (e) => typeof e == "number",
    B = "w--current",
    xe = {
      wrapper: "w-dyn-list",
      list: "w-dyn-items",
      item: "w-dyn-item",
      paginationWrapper: "w-pagination-wrapper",
      paginationNext: "w-pagination-next",
      paginationPrevious: "w-pagination-previous",
      pageCount: "w-page-count",
      emptyState: "w-dyn-empty",
    },
    Ae = {
      addToCartForm: "w-commerce-commerceaddtocartform",
    },
    ke = {
      trigger: "w-lightbox",
    },
    Q = (e, t = !0) => e.cloneNode(t);
  function V(e, t, n, r = !0) {
    let a = n ? [n] : [];
    if (!e) return a;
    let i = e.split(",").reduce((l, o) => {
      let u = o.trim();
      return (!r || u) && l.push(u), l;
    }, []);
    if (t) {
      let l = i.filter((o) => he(o, t));
      return l.length ? l : a;
    }
    return i;
  }
  var Ce = new Map([
      ["tiny", "(max-width: 479px)"],
      ["small", "(max-width: 767px)"],
      ["medium", "(max-width: 991px)"],
      ["main", "(min-width: 992px)"],
    ]),
    Se = () => {
      for (let [e, t] of Ce) if (window.matchMedia(t).matches) return e;
      return "main";
    },
    Ie = (e = document) => {
      var t;
      let n = "Last Published:";
      for (let r of e.childNodes)
        if (
          r.nodeType === Node.COMMENT_NODE &&
          (t = r.textContent) != null &&
          t.includes(n)
        ) {
          let a = r.textContent.trim().split(n)[1];
          if (a) return new Date(a);
        }
    },
    R = (e = document) => e.documentElement.getAttribute("data-wf-site");
  function Ee(e, t, n) {
    var r;
    let a = window.fsAttributes[e];
    return (a.destroy = n || K), (r = a.resolve) == null || r.call(a, t), t;
  }
  var L = (e, t = "1", n = "iife") => {
      let r = `${e}${n === "esm" ? ".esm" : ""}.js`;
      return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${e}@${t}/${r}`;
    },
    Be = L(ve, "1", "esm"),
    Le = async () => {
      let { fsAttributes: e } = window;
      e.animation || (e.animation = {});
      let { animation: t } = e;
      if (t.import) return t.import;
      try {
        return (t.import = import(Be)), t.import;
      } catch (n) {
        I.alert(`${n}`, "error");
        return;
      }
    },
    Te = L(ye, "1"),
    Ne = async () => {
      let { fsAttributes: e } = window;
      e.cmscore || (e.cmscore = {});
      let { cmscore: t } = e;
      if (t.import) return t.import;
      try {
        return (
          (t.import = import(Te)),
          t.import.then((n) => {
            n && (t.version || (t.version = n.version));
          }),
          t.import
        );
      } catch (n) {
        I.alert(`${n}`, "error");
        return;
      }
    },
    Oe = `${A}-${W}`,
    qe = async () => {
      var e;
      let { fsAttributes: t, location: n } = window,
        { host: r, searchParams: a } = new URL(n.href);
      return !r.includes("webflow.io") || !a.has(Oe)
        ? !1
        : (e = t.import) == null
        ? void 0
        : e.call(t, W, "1");
    },
    h = (e) => (t) => `${e}${t ? `-${t}` : ""}`,
    U = (e) => {
      let t = (r, a, i) => {
        let l = e[r],
          { key: o, values: u } = l,
          s;
        if (!a) return `[${o}]`;
        let p = u == null ? void 0 : u[a];
        F(p)
          ? (s = p)
          : (s = p(i && "instanceIndex" in i ? i.instanceIndex : void 0));
        let g = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
        if (!(i != null && i.operator)) return `[${o}="${s}"${g}]`;
        switch (i.operator) {
          case "prefixed":
            return `[${o}^="${s}"${g}]`;
          case "suffixed":
            return `[${o}$="${s}"${g}]`;
          case "contains":
            return `[${o}*="${s}"${g}]`;
        }
      };
      function n(r, a) {
        let i = t("element", r, a),
          l = (a == null ? void 0 : a.scope) || document;
        return a != null && a.all
          ? [...l.querySelectorAll(i)]
          : l.querySelector(i);
      }
      return [
        t,
        n,
        (r, a) => {
          let i = e[a];
          return i ? r.getAttribute(i.key) : null;
        },
      ];
    },
    T = {
      preventLoad: {
        key: `${A}-preventload`,
      },
      debugMode: {
        key: `${A}-debug`,
      },
      src: {
        key: "src",
        values: {
          finsweet: "@finsweet/attributes",
        },
      },
      dev: {
        key: `${A}-dev`,
      },
    },
    [_, rn] = U(T),
    je = (e) => {
      let { currentScript: t } = document,
        n = {};
      if (!t)
        return {
          attributes: n,
          preventsLoad: !1,
        };
      let r = {
        preventsLoad: F(t.getAttribute(T.preventLoad.key)),
        attributes: n,
      };
      for (let a in e) {
        let i = t.getAttribute(e[a]);
        r.attributes[a] = i;
      }
      return r;
    },
    De = ({ scriptAttributes: e, attributeKey: t, version: n, init: r }) => {
      var a;
      Me(), (a = window.fsAttributes)[t] || (a[t] = {});
      let { preventsLoad: i, attributes: l } = je(e),
        o = window.fsAttributes[t];
      (o.version = n),
        (o.init = r),
        i ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => r(l)));
    },
    Me = () => {
      let e = Ke();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        N(window.fsAttributes, e);
        return;
      }
      let t = We(e);
      N(t, e),
        Fe(t),
        (window.fsAttributes = t),
        (window.FsAttributes = window.fsAttributes),
        qe();
    },
    We = (e) => {
      let t = {
        cms: {},
        push(...n) {
          var r, a;
          for (let [i, l] of n)
            (a = (r = this[i]) == null ? void 0 : r.loading) == null ||
              a.then(l);
        },
        async import(n, r) {
          return (
            t[n] ||
            new Promise((i) => {
              let l = document.createElement("script");
              (l.src = L(n, r)),
                (l.async = !0),
                (l.onload = () => {
                  let [o] = N(t, [n]);
                  i(o);
                }),
                document.head.append(l);
            })
          );
        },
        destroy() {
          var n, r;
          for (let a of e)
            (r = (n = window.fsAttributes[a]) == null ? void 0 : n.destroy) ==
              null || r.call(n);
        },
      };
      return t;
    },
    Ke = () => {
      let e = _("src", "finsweet", {
          operator: "contains",
        }),
        t = _("dev");
      return [...document.querySelectorAll(`script${e}, script${t}`)].reduce(
        (n, r) => {
          var a;
          let i =
            r.getAttribute(T.dev.key) ||
            ((a = r.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : a[0]);
          return i && !n.includes(i) && n.push(i), n;
        },
        []
      );
    },
    N = (e, t) =>
      t.map((n) => {
        let r = e[n];
        return (
          r ||
          ((e[n] = {}),
          (r = e[n]),
          (r.loading = new Promise((a) => {
            r.resolve = (i) => {
              a(i), delete r.resolve;
            };
          })),
          r)
        );
      }),
    Fe = (e) => {
      let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      e.push(...t);
    },
    Qe = "1.11.2",
    Ve = "fs-cms-element",
    Re = {
      wrapper: "wrapper",
      list: "list",
      item: "item",
      paginationWrapper: "pagination-wrapper",
      paginationNext: "pagination-next",
      paginationPrevious: "pagination-previous",
      pageCount: "page-count",
      emptyState: "empty",
    },
    w = (e) => {
      let t = `.${xe[e]}`,
        n = `[${Ve}="${Re[e]}"]`;
      return `:is(${t}, ${n})`;
    },
    Ue = (e, t = document) => {
      e = e.filter((r) => r);
      let n = e.join(", ") || w("wrapper");
      return [...t.querySelectorAll(n)].reduce((r, a) => {
        if (!a) return r;
        let i = P(a, "wrapper");
        return !i || r.includes(i) || r.push(i), r;
      }, []);
    };
  function P(e, t, n = document) {
    let r = typeof e == "string" ? n.querySelector(e) : e;
    if (!r) return;
    let a = r.closest(w("wrapper"));
    if (!a) return;
    let i = a.querySelector(w("list"));
    return t === "wrapper"
      ? a
      : t === "list"
      ? i
      : t === "items"
      ? [
          ...((i == null
            ? void 0
            : i.querySelectorAll(`:scope > ${w("item")}`)) || []),
        ]
      : t === "pageCount"
      ? a.querySelector(w("pageCount"))
      : t === "empty"
      ? a.querySelector(`:scope > ${w("emptyState")}`)
      : t === "pagination"
      ? a.querySelector(w("paginationWrapper"))
      : a.querySelector(
          w(t === "next" ? "paginationNext" : "paginationPrevious")
        );
  }
  var $ = "pages",
    O = new Map(),
    q = async (e, { cacheExternal: t, cacheKey: n, cacheVersion: r } = {}) => {
      var a, i;
      try {
        let l = new URL(e, window.location.origin),
          o = await _e(l);
        if (o) return o;
        let u = R(),
          s = Ie(),
          p = u || n,
          g =
            (i = (a = s == null ? void 0 : s.getTime()) != null ? a : r) != null
              ? i
              : 1,
          d = p ? await He(p, g) : null;
        if (!d) {
          let { page: m } = await H(l);
          return m;
        }
        let c = await ze(d, l.href);
        if (c) {
          let m = j(c);
          return t && !G(m, u) && z(d, l, u, t), m;
        }
        return await z(d, l, u, t);
      } catch {
        return null;
      }
    },
    _e = async (e) => {
      let t = await O.get(e.href);
      if (t) return j(t);
    },
    H = async (e) => {
      let t = fetch(e.href).then((r) => r.text());
      O.set(e.href, t);
      let n = await t;
      return {
        page: j(n),
        rawPage: n,
      };
    },
    z = async (e, t, n, r) => {
      let { page: a, rawPage: i } = await H(t),
        l = G(a, n);
      return (!l && !r) || (await Ge(e, t.href, i), l && O.delete(t.href)), a;
    },
    G = (e, t) => {
      if (!t) return !1;
      let n = R(e);
      return n && n === t;
    },
    j = (e) => new DOMParser().parseFromString(e, "text/html"),
    He = (e, t) =>
      new Promise((n) => {
        try {
          let r = window.indexedDB.open(e, t);
          (r.onblocked = () => {
            n(null);
          }),
            (r.onupgradeneeded = () => {
              let a = r.result;
              a.objectStoreNames.contains($) && a.deleteObjectStore($),
                a.createObjectStore($);
            }),
            (r.onerror = () => n(null)),
            (r.onsuccess = () => {
              let a = r.result;
              (a.onversionchange = () => a.close()), n(a);
            });
        } catch {
          n(null);
        }
      }),
    ze = async (e, t) =>
      new Promise((n) => {
        let r = e.transaction($).objectStore($).get(t);
        (r.onerror = () => n(null)), (r.onsuccess = () => n(r.result));
      }),
    Ge = async (e, t, n) =>
      new Promise((r) => {
        let a = e.transaction($, "readwrite").objectStore($).put(n, t);
        (a.onerror = () => r()), (a.onsuccess = () => r());
      }),
    Je = ({ textContent: e }) => {
      if (!e) return;
      let [, t] = e.split("/");
      return t ? parseInt(t.trim()) : void 0;
    },
    J = async (e, t, n, r) => {
      r == null || r.preventDefault();
      let { items: a, itemsPerPage: i } = e;
      if (!(!t && i === a.length)) {
        if (i + n <= a.length) e.itemsPerPage = i + n;
        else if (t) {
          let l = await e.once("renderitems");
          e.itemsPerPage = i + l.length;
        } else e.itemsPerPage += a.length - i;
        await e.renderItems(!0);
      }
    },
    Xe = (e) => {
      let {
        pagesQuery: t,
        currentPage: n,
        totalPages: r,
        paginationNext: a,
        paginationPrevious: i,
      } = e;
      n &&
        (i &&
          ((i.style.display = n !== 1 ? "" : "none"),
          (i.href = `?${t}=${n - 1}`)),
        a &&
          ((a.style.display = n !== r ? "" : "none"),
          (a.href = `?${t}=${n + 1}`)));
    },
    Ye = (e, { currentPage: t, totalPages: n }) => {
      e.setAttribute("aria-label", `Page ${t} of ${n}`),
        (e.textContent = `${t} / ${n}`);
    },
    D = async (e, t, n) => {
      var r;
      let {
          index: a,
          paginationNext: i,
          paginationPrevious: l,
          originalItemsPerPage: o,
        } = t,
        u = Ue([], e)[a];
      if (!u) return;
      if (!l || !i) {
        let d = P(u, "pagination"),
          c = P(u, "previous"),
          m = P(u, "next");
        if (c) {
          let f = [...((d == null ? void 0 : d.children) || [])].indexOf(c);
          t.addPaginationButton(c, "paginationPrevious", f);
        }
        if (m) {
          let f = [...((d == null ? void 0 : d.children) || [])].indexOf(m);
          c || (f += 1), t.addPaginationButton(m, "paginationNext", f);
        }
      }
      let s = (r = P(u, "next")) == null ? void 0 : r.href,
        p = P(u, "items"),
        { length: g } = p;
      return (
        s && o !== g && (t.originalItemsPerPage = t.itemsPerPage = g),
        await t.addItems(p, n),
        s
      );
    },
    k = async (e) => {
      let {
        paginationNext: t,
        paginationPrevious: n,
        paginationCount: r,
        extractingPaginationData: a,
      } = e;
      if (!t && !n) return;
      await a;
      let i = r ? Je(r) : void 0;
      await e.displayElement("loader"),
        i ? await X(e, i) : await Ze(e),
        await e.emit("finishload"),
        await e.displayElement("loader", !1);
    },
    Ze = async (e) => {
      let { paginationNext: t, currentPage: n } = e;
      if ((n && (await X(e, n)), !t)) return;
      let { href: r } = t,
        a = [r],
        i = async (l) => {
          let o = await q(l);
          if (!o) return;
          let u = await D(o, e);
          !u || a.includes(u) || (a.push(u), await i(u));
        };
      await i(r);
    },
    X = async (e, t) => {
      let { paginationNext: n, paginationPrevious: r } = e;
      if (!n && !r) return;
      let { pagesQuery: a, currentPage: i } = e;
      if (!a || !i) return;
      let { origin: l, pathname: o } = window.location;
      for (let s = i - 1; s >= 1; s--) {
        let p = await q(`${l}${o}?${a}=${s}`);
        if (!p) return;
        await D(p, e, "unshift");
      }
      let u = [];
      for (let s = i + 1; s <= t; s++)
        u[s] = (async () => {
          let p = u[s - 1],
            g = await q(`${l}${o}?${a}=${s}`);
          await p, g && (await D(g, e));
        })();
      await Promise.all(u);
    },
    et = async (e) => {
      let {
        paginationNext: t,
        paginationPrevious: n,
        paginationCount: r,
        itemsPerPage: a,
      } = e;
      if (!t) return;
      n && (n.style.display = "none"), r == null || r.remove();
      let i = !0,
        l = !1;
      e.initPagination(),
        e.on("renderitems", () => {
          let { validItems: s, items: p, itemsPerPage: g } = e;
          if (!i && p.length === g) return u();
          t.style.display = s.length > g ? "" : "none";
        });
      let o = E(t, "click", async (s) => {
          s.preventDefault(), !l && ((l = !0), await J(e, i, a, s), (l = !1));
        }),
        u = () => {
          o(), (t.style.display = "none");
        };
      return await k(e), (i = !1), u;
    },
    tt = nt;
  function nt(e, t, n) {
    var r = null,
      a = null,
      i = n && n.leading,
      l = n && n.trailing;
    i == null && (i = !0), l == null && (l = !i), i == !0 && (l = !1);
    var o = function () {
        r && (clearTimeout(r), (r = null));
      },
      u = function () {
        var p = a;
        o(), p && p();
      },
      s = function () {
        var p = i && !r,
          g = this,
          d = arguments;
        if (
          ((a = function () {
            return e.apply(g, d);
          }),
          r ||
            (r = setTimeout(function () {
              if (((r = null), l)) return a();
            }, t)),
          p)
        )
          return (p = !1), a();
      };
    return (s.cancel = o), (s.flush = u), s;
  }
  var y = `fs-${S}`,
    rt = "list",
    at = "loader",
    it = "items-count",
    lt = "visible-count",
    ot = "visible-count-from",
    st = "visible-count-to",
    ut = "scroll-anchor",
    pt = "page-button",
    ct = "page-dots",
    dt = "empty",
    gt = "mode",
    mt = {
      loadUnder: "load-under",
      renderAll: "render-all",
      pagination: "pagination",
      infinite: "infinite",
    },
    ft = "threshold",
    vt = "pagesiblings",
    yt = "pageboundary",
    wt = "animation",
    bt = "easing",
    ht = "duration",
    $t = "stagger",
    Pt = "resetix",
    xt = {
      true: "true",
    },
    At = "showquery",
    kt = {
      true: "true",
    },
    M = {
      element: {
        key: `${y}-element`,
        values: {
          list: h(rt),
          loader: h(at),
          itemsCount: h(it),
          visibleCount: h(lt),
          visibleCountFrom: h(ot),
          visibleCountTo: h(st),
          scrollAnchor: h(ut),
          empty: h(dt),
          pageButton: pt,
          pageDots: ct,
        },
      },
      mode: {
        key: `${y}-${gt}`,
        values: mt,
      },
      threshold: {
        key: `${y}-${ft}`,
      },
      pageSiblings: {
        key: `${y}-${vt}`,
      },
      pageBoundary: {
        key: `${y}-${yt}`,
      },
      animation: {
        key: `${y}-${wt}`,
      },
      easing: {
        key: `${y}-${bt}`,
      },
      duration: {
        key: `${y}-${ht}`,
      },
      stagger: {
        key: `${y}-${$t}`,
      },
      resetIx: {
        key: `${y}-${Pt}`,
        values: xt,
      },
      showQuery: {
        key: `${y}-${At}`,
        values: kt,
      },
    },
    [Y, b] = U(M),
    Ct = "-20",
    St = 1,
    It = 1,
    Et = {
      main: 0,
      medium: 1,
      small: 2,
      tiny: 3,
    },
    {
      pageSiblings: { key: Bt },
      pageBoundary: { key: Lt },
      threshold: { key: Tt },
      showQuery: { key: Nt, values: Ot },
    } = M,
    qt = (e) => {
      let { paginationWrapper: t, paginationCount: n } = e;
      if (!t) return;
      let r = b("pageButton", {
          operator: "prefixed",
          scope: t,
        }),
        a = b("pageDots", {
          operator: "prefixed",
          scope: t,
        });
      a
        ? a.remove()
        : ((a = document.createElement("div")), (a.textContent = "..."));
      let i = e.getAttribute(Lt),
        l = (i ? V(i) : []).map((c) => parseInt(c)),
        o = e.getAttribute(Bt),
        u = (o ? V(o) : []).map((c) => parseInt(c)),
        [s, p] = Z(l, u),
        g = [l, u].some(({ length: c }) => c > 1),
        d = e.getAttribute(Nt) === Ot.true;
      return {
        paginationWrapper: t,
        pageButtonTemplate: r,
        pageDotsTemplate: a,
        paginationCount: n,
        pageBoundary: s,
        pageBoundaryValues: l,
        pageSiblings: p,
        pageSiblingsValues: u,
        hasBreakpoints: g,
        showQueryParams: d,
      };
    },
    Z = (e, t) => {
      let n = Se(),
        r = Et[n],
        a = [];
      [e, t].forEach((o, u) => {
        for (let s = r; s >= 0; s--) {
          let p = o[s];
          if (Pe(p)) {
            a[u] = p;
            break;
          }
        }
      });
      let [i, l] = a;
      return i != null || (i = It), l != null || (l = St), [i, l];
    },
    jt = (e) => 1 - parseInt(e.getAttribute(Tt) || Ct) / 100,
    Dt = async (e) => {
      let {
        list: t,
        paginationNext: n,
        paginationPrevious: r,
        paginationCount: a,
        itemsPerPage: i,
      } = e;
      if (!t || !n) return;
      r && (r.style.display = "none"), a == null || a.remove();
      let l = jt(e),
        o = !0,
        u = !1;
      e.initPagination(),
        e.on("renderitems", () => {
          let { validItems: c, items: m, itemsPerPage: f } = e;
          if (!o && m.length === f) {
            d();
            return;
          }
          n.style.display = c.length > f ? "" : "none";
        });
      let s = async (c) => {
          c.preventDefault();
        },
        p = tt(async () => {
          if (u) return;
          let { innerHeight: c } = window,
            { bottom: m } = t.getBoundingClientRect(),
            f = l * c;
          m > 0 && m <= f && ((u = !0), await J(e, o, i), (u = !1));
        }, 100),
        g = new IntersectionObserver((c) => {
          for (let { isIntersecting: m } of c)
            window[m ? "addEventListener" : "removeEventListener"]("scroll", p);
        }),
        d = () => {
          window.removeEventListener("scroll", p),
            n.removeEventListener("click", s),
            (n.style.display = "none"),
            g.disconnect();
        };
      return (
        n.addEventListener("click", s), g.observe(t), await k(e), (o = !1), d
      );
    },
    Mt = ge(fe(), 1),
    Wt = async (e) => {
      let t = qt(e);
      if (!t) return;
      let {
          paginationWrapper: n,
          pageButtonTemplate: r,
          pageDotsTemplate: a,
          paginationCount: i,
          pageBoundary: l,
          pageBoundaryValues: o,
          pageSiblings: u,
          pageSiblingsValues: s,
          hasBreakpoints: p,
          showQueryParams: g,
        } = t,
        d;
      if (r) {
        let { parentElement: f } = r;
        r.remove(),
          f &&
            (d = {
              parentElement: f,
              pageButtonTemplate: r,
              pageDotsTemplate: a,
              pageBoundary: l,
              pageSiblings: u,
              renderedElements: new Map([]),
            });
      }
      e.initPagination(g), e.on("renderitems", () => Kt(e, d, i));
      let c = E(n, "click", (f) => Vt(f, d, e)),
        m;
      return (
        d &&
          p &&
          (m = E(
            window,
            "resize",
            (0, Mt.default)(() => {
              Rt(d, e, o, s);
            }, 100)
          )),
        await k(e),
        () => {
          c(), m == null || m();
        }
      );
    },
    Kt = (e, t, n, r = !0) => {
      t && ee(t, e), n && Ye(n, e), r && Xe(e);
    },
    ee = (e, t) => {
      let { currentPage: n, totalPages: r } = t;
      if (!n) return;
      let {
          parentElement: a,
          renderedElements: i,
          pageBoundary: l,
          pageSiblings: o,
        } = e,
        u = [...i],
        s = o * 2 + 1,
        p = l * 2 + s + 2,
        g = n - 1 < p - s,
        d = r - n < p - s;
      for (let c = 1; c <= p; c++) {
        let [m, f] = u[c - 1] || [],
          [re] = u[c - 2] || [];
        if (c > r) {
          m && (m.remove(), (u[c - 1] = void 0));
          continue;
        }
        let v;
        r <= p
          ? (v = c)
          : g
          ? c > p - l
            ? (v = r - (p - c))
            : c === p - l
            ? (v = null)
            : (v = c)
          : d
          ? c < l + 1
            ? (v = c)
            : c === l + 1
            ? (v = null)
            : (v = r - (p - c))
          : c < l + 1
          ? (v = c)
          : c > p - l
          ? (v = r - (p - c))
          : c === l + 1 || c === p - l
          ? (v = null)
          : (v = n + (c - (l + 1) - (1 + o)));
        let x;
        f !== v &&
          (m == null || m.remove(),
          (x = Ft(e, v, t)),
          (u[c - 1] = [x, v]),
          re ? a.insertBefore(x, re.nextSibling) : a.appendChild(x),
          (x.style.opacity = ""));
        let ae = x || m;
        ae && Qt(ae, v === n);
      }
      e.renderedElements = new Map([...u.filter($e)]);
    },
    Ft = (
      { pageButtonTemplate: e, pageDotsTemplate: t },
      n,
      { pagesQuery: r }
    ) => {
      if (!n) return Q(t);
      let a = Q(e);
      return (
        a.classList.remove(B),
        (a.textContent = `${n}`),
        be(a) && r && (a.href = `?${r}=${n}`),
        a
      );
    },
    Qt = (e, t) => {
      t
        ? (e.classList.add(B), e.setAttribute("aria-current", "page"))
        : (e.classList.remove(B), e.removeAttribute("aria-current"));
    },
    Vt = (e, t, n) => {
      let { target: r } = e;
      if (!we(r)) return;
      let a = r.closest(
          Y("element", "pageButton", {
            operator: "prefixed",
          })
        ),
        i = r.closest(w("paginationNext")),
        l = r.closest(w("paginationPrevious"));
      if (!a && !i && !l) return;
      e.preventDefault();
      let { currentPage: o, totalPages: u } = n;
      if (!o) return;
      let s;
      i && (s = o + 1),
        l && (s = o - 1),
        a && (s = t == null ? void 0 : t.renderedElements.get(a)),
        s && s >= 1 && s <= u && n.switchPage(s);
    },
    Rt = (e, t, ...n) => {
      let { pageBoundary: r, pageSiblings: a, renderedElements: i } = e,
        [l, o] = Z(...n);
      if (!(r === l && a === o)) {
        (e.pageBoundary = l), (e.pageSiblings = o);
        for (let [u] of i) u.remove();
        i.clear(), ee(e, t);
      }
    },
    Ut = async (e) => {
      let { paginationNext: t, paginationPrevious: n, paginationCount: r } = e;
      t &&
        ((t.style.display = "none"),
        n && (n.style.display = "none"),
        r == null || r.remove(),
        await k(e));
    },
    {
      element: { key: _t },
      mode: {
        key: Ht,
        values: { renderAll: zt, infinite: Gt, pagination: Jt },
      },
      animation: { key: Xt },
      duration: { key: te },
      easing: { key: ne },
      stagger: { key: Yt },
      resetIx: { key: Zt, values: en },
    } = M,
    tn = async (e, t) => {
      let n = e.getInstanceIndex(_t),
        { items: r } = e,
        { Webflow: a } = window,
        i = !!a && "require" in a;
      t.addItemsAnimation(e, {
        animationKey: Xt,
        durationKey: te,
        easingKey: ne,
        staggerKey: Yt,
      }),
        t.addListAnimation(e, {
          durationKey: te,
          easingKey: ne,
        });
      let l =
        i &&
        !!a.require("commerce") &&
        r.some(({ element: d }) => d.querySelector(`.${Ae.addToCartForm}`));
      l && (e.restartCommerce = l);
      let o =
        i &&
        !!a.require("lightbox") &&
        r.some(({ element: d }) => d.querySelector(`.${ke.trigger}`));
      o && (e.restartLightbox = o);
      let u = e.getAttribute(Zt) === en.true;
      u && (e.restartIx = u);
      let s = b("loader", {
        instanceIndex: n,
      });
      s && e.addLoader(s);
      let p = b("empty", {
        instanceIndex: n,
      });
      if ((p && e.addEmptyElement(p), !e.itemsCount)) {
        let d = b("itemsCount", {
          instanceIndex: n,
        });
        d && e.addItemsCount(d);
      }
      if (!e.visibleCount || !e.visibleCountFrom || !e.visibleCountTo) {
        let d = b("visibleCount", {
            instanceIndex: n,
          }),
          c = b("visibleCountFrom", {
            instanceIndex: n,
          }),
          m = b("visibleCountTo", {
            instanceIndex: n,
          });
        e.addVisibleCount(d, c, m);
      }
      if (!e.scrollAnchor) {
        let d = b("scrollAnchor", {
          instanceIndex: n,
        });
        d && (e.scrollAnchor = d);
      }
      let g = e.getAttribute(Ht);
      return g === zt
        ? await Ut(e)
        : g === Gt
        ? await Dt(e)
        : g === Jt
        ? await Wt(e)
        : await et(e);
    },
    nn = async () => {
      let e = await Ne();
      if (!e) return [];
      let t = e.createCMSListInstances([
          Y("element", "list", {
            operator: "prefixed",
          }),
        ]),
        n = await Promise.all(t.map((r) => tn(r, e)));
      return Ee(S, t, () => {
        var r;
        for (let a of t) (r = a.destroy) == null || r.call(a);
        for (let a of n) a == null || a();
      });
    };
  De({
    init: nn,
    version: Qe,
    attributeKey: S,
  }),
    Le();
})();
