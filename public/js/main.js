import {
  g as t,
  S as c,
  O as _,
  c as S,
  a as w,
  R as A,
  D as T,
} from "./vendor.js";
import "./commonjsHelpers.js";
const x = {
  is_mobile_portrait: "(max-width: 478px)",
  is_mobile_landscape: "(max-width: 767px)",
  is_tablet: "(max-width:991px)",
  is_desktop: "(min-width: 992px)",
  is_landscape: "(orientation: landscape)",
  is_portrait: "(orientation: portrait)",
  from_tablet: "(min-width:768px)",
  is_mobile: "(max-width:767px)",
},
  y = {
    white: "#E8E8E8",
    black: "#111111",
    grey: "#A1A1A1",
    silver: "#E3E7F2",
    pureBlack: "#000000",
    border: "hsla(0, 0%, 91%, 0.20)",
    nav_bg_dark: "hsla(0, 0%, 7%, 0.50)",
    nav_bg_light: "hsla(0, 0%, 91%, 0.50)",
  };
t.registerPlugin(c);
function D(o) {
  const a = t.utils.toArray("[data-a-cards]");
  a.length !== 0 &&
    a.forEach((e) => {
      let n = t.utils.toArray(e.dataset.aCards, e);
      t.set(n, {
        opacity: 0,
        y: "3rem",
      }),
        c.batch(n, {
          start: (o.conditions.is_mobile_landscape, "top bottom"),
          onEnter: (s) => {
            t.to(s, {
              stagger: 0.25,
              y: "0rem",
              opacity: 1,
              duration: 0.25,
            });
          },
        }),
        c.addEventListener("refreshInit", () =>
          t.set(n, {
            yPercent: 0,
          })
        );
    });
}
t.registerPlugin(c);
function P(o) {
  const a = t.utils.toArray("[data-a-counter]");
  a.length !== 0 &&
    a.forEach((e) => {
      var n = e.innerHTML.split(/([0-9]+)/).filter(Boolean);
      (e.innerHTML = ""),
        n.forEach((i) => {
          isNaN(i)
            ? (e.innerHTML += `<span>${i}</span>`)
            : (e.innerHTML += `<span data-a-counter-run>${i}</span>`);
        });
      let s = t.utils.toArray("[data-a-counter-run]", e);
      if (s.length === 0) return;
      const r = {
        duration: e.dataset.aCounterDuration || 2,
        content: e.dataset.aCounterContent || 0,
        ease: e.dataset.aCounterEase || "power1.in",
        delay: e.dataset.aCounterDelay || 0,
        delay_mobile: e.dataset.aCounterMobile || 0,
      };
      s.forEach((i) => {
        t.from(i, {
          textContent: r.content,
          duration: r.duration,
          ease: "power1.in",
          snap: {
            textContent: 1,
          },
          delay: o.conditions.is_mobile ? r.delay_mobile : r.delay,
          scrollTrigger: {
            trigger: i,
            start: (o.conditions.is_desktop, "top bottom"),
          },
        });
      });
    });
}
t.registerPlugin(_);
function q(o) {
  if (o.conditions.is_tablet) return;
  const a = document.querySelector("[data-a-cursor]");
  t.set(a, {
    xPercent: -50,
    yPercent: -50,
    pointerEvents: "none",
  });
  const e = 0.1,
    n = t.quickSetter(a, "x", "px"),
    s = t.quickSetter(a, "y", "px"),
    r = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    i = {
      x: r.x,
      y: r.y,
    },
    h = t.utils.toArray(
      "a:not([data-a-no-cursor]), .nav_open_lines, .nav_menu_link.w-dropdown-toggle"
    );
  _.create({
    target: document.window,
    type: "pointer",
    onMove: (p) => {
      (i.x = p.x), (i.y = p.y);
    },
  }),
    t.ticker.add(() => {
      const p = 1 - Math.pow(1 - e, t.ticker.deltaRatio());
      (r.x += (i.x - r.x) * p),
        (r.y += (i.y - r.y) * p),
        n(r.x + 25),
        s(r.y + 25);
    });
  let f = t.timeline({
    paused: !0,
  });
  f.to(a, {
    width: "4rem",
    height: "4rem",
    rotate: "+=90",
    borderWidth: 0.5,
    borderColor: "hsla(0, 75%, 72%, 0.949)",
    duration: 0.5,
    ease: "Expo.easeInOut",
  }),
    h.forEach((p) => {
      _.create({
        target: p,
        type: "pointer",
        onHover: () => {
          f.play();
        },
        onHoverEnd: () => {
          f.reverse();
        },
      });
    });
}
t.registerPlugin(c);
function M(o) {
  const a = t.utils.toArray("[data-a-fade]");
  a.length != 0 &&
    a.forEach((e) => {
      let n = e.dataset.aFadeDelay ? e.dataset.aFadeDelay : 0;
      t.set(e, {
        opacity: 0,
        y: "3rem",
      }),
        t.to(e, {
          opacity: 1,
          y: "0rem",
          duration: 0.75,
          ease: "Expo.easeInOut",
          delay: n,
          scrollTrigger: {
            trigger: e,
            start: o.conditions.is_mobile_landscape ? "top 95%" : "top 90%",
          },
        }),
        c.addEventListener("refreshInit", () =>
          t.set(e, {
            yPercent: 0,
          })
        );
    });
}
t.registerPlugin(c);
function L(o) {
  const a = document.querySelector(".footer"),
    e = t.utils.toArray(".footer_head, .footer_col");
  t.from(e, {
    opacity: 0,
    stagger: 0.015,
    duration: 1.5,
    ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
    scrollTrigger: {
      trigger: a,
      start: o.conditions.is_mobile ? "top bottom" : "top 90%",
    },
  });
}
t.registerPlugin(_, c);
function H(o) {
  const a = document.querySelector(".nav"),
    e = a.querySelector(".nav_menu"),
    n = t.utils.toArray(".nav_menu_link:not(.is-dropdown)", e),
    s = t.utils.toArray(".nav_menu_link", e),
    r = $(".nav_open"),
    i = t.utils.toArray(".contact-form_locations_item", e);
  f(), p(), h(), k();
  function h() {
    t.set(e, {
      opacity: 0,
    }),
      t.set([n, i], {
        opacity: 0,
        filter: "blur(0.5rem)",
      });
    let l = t.timeline({
      paused: !0,
    });
    function d() {
      let u = t.timeline({
        paused: !0,
        defaults: {
          overwrite: "all",
        },
      });
      return (
        u
          .to(".nav_open_lines_top, .nav_open_lines_bottom", {
            marginTop: "0",
          })
          .to(
            ".nav_open_lines_bottom",
            {
              autoAlpha: 0,
              duration: 0,
            },
            "<+=0.22"
          )
          .to(
            ".nav_open_lines",
            {
              rotate: 45,
            },
            "<"
          )
          .to(
            ".nav_open_svg",
            {
              rotate: "+=120",
            },
            "<"
          )
          .to(
            ".nav_open_lines_top",
            {
              rotate: "+=90",
            },
            "<"
          ),
        u
      );
    }
    function m() {
      let u = t.timeline({
        paused: !0,
      });
      return (
        u
          .to(e, {
            display: "flex",
            duration: 0,
          })
          .to("body", {
            overflow: "hidden",
            duration: 0,
          })
          .to(e, {
            opacity: 1,
          })
          .to(
            n,
            {
              opacity: 1,
              filter: "blur(0rem)",
              stagger: 0.05,
            },
            "<+=0.25"
          )
          .to(
            i,
            {
              opacity: 1,
              filter: "blur(0rem)",
              stagger: 0.1,
            },
            "<"
          )
          .to(
            ".button.is-nav",
            {
              autoAlpha: 0,
              filter: "blur(0.5rem)",
            },
            "<"
          ),
        u
      );
    }
    l.add(m().play(), 0), l.add(d().play(), 0), t.delayedCall(0.5, g);
    function g() {
      let u = t.utils.toArray("[data-a-menu-close]");
      document.body.dataset.page === "services" &&
        u.forEach((v) => {
          _.create({
            target: v,
            onClick: () => {
              $(r).hasClass("active") === !0 &&
                (l.reverse(),
                  t.delayedCall(l.duration(), () => {
                    $(r).removeClass("active"),
                      t.set("body", {
                        overflow: "auto",
                      }),
                      t.set(".nav_menu_link.is-dropdown", {
                        opacity: 0,
                        filter: "blur(0.5rem)",
                      }),
                      t.set(".nav_menu_link_icon_dropdown", {
                        rotate: 180,
                      });
                  }));
            },
          });
        });
    }
    _.create({
      target: r,
      type: "touch, pointer",
      onClick: () => {
        $(r).hasClass("active") === !0
          ? (l.reverse(),
            t.delayedCall(l.duration(), () => {
              $(r).removeClass("active"),
                t.set("body", {
                  overflow: "auto",
                }),
                t.set(".nav_menu_link.is-dropdown", {
                  opacity: 0,
                  filter: "blur(0.5rem)",
                }),
                t.set(".nav_menu_link_icon_dropdown", {
                  rotate: 180,
                });
            }))
          : ($(r).addClass("active"), l.play());
      },
      onHover: () => {
        $(r).hasClass("active") === !0 ||
          o.conditions.is_mobile === !0 ||
          t.to(".nav_open_svg", {
            rotate: "+=60",
          });
      },
      onHoverEnd: () => {
        $(r).hasClass("active") === !0 ||
          o.conditions.is_mobile === !0 ||
          t.to(".nav_open_svg", {
            rotate: "+=62",
            onComplete: () => {
              t.to(".nav_open_svg", {
                rotate: "0",
                duration: "0",
              });
            },
          });
      },
    });
  }
  function f() {
    o.conditions.is_mobile_landscape ||
      s.forEach((l) => {
        if (l.classList.contains("w--current")) return;
        let d = l.querySelector(".nav_menu_link_icon");
        var m = t.timeline({
          paused: !0,
        });
        m
          .to(l, {
            paddingLeft: "1rem",
          })
          .to(
            d,
            {
              opacity: 1,
            },
            "<"
          ),
          $(l).hover(
            function () {
              m.play();
            },
            function () {
              m.reverse();
            }
          );
      });
  }
  function p() {
    const l = t.utils.toArray("section");
    document.body.dataset.page === "about_us" ||
      document.body.dataset.page === "ethics"
      ? t.set(a, {
        backgroundColor: "hsla(0, 0%, 91%, 0.00)",
      })
      : t.set(a, {
        backgroundColor: "hsla(0, 0%, 7%, 0.00)",
      });
    let d = t.timeline({
      paused: !0,
    });
    d.to(a, {
      yPercent: -100,
      duration: 0.2,
    });
    let m =
      document.body.dataset.page === "about_us" ||
        document.body.dataset.page === "ethics"
        ? y.nav_bg_light
        : y.nav_bg_dark,
      g = t.timeline({
        paused: !0,
      });
    g.to(a, {
      background: m,
    }),
      c.observe({
        target: window,
        type: "wheel,touch",
        tolerance: 450,
        onDown: () => {
          $(r).hasClass("active") !== !0 && d.play();
        },
      }),
      c.observe({
        target: window,
        type: "wheel,touch",
        onUp: () => {
          $(r).hasClass("active") !== !0 && d.reverse();
        },
      }),
      c.create({
        trigger: l[0],
        start: "20% top",
        end: "20% top",
        onEnter: () => {
          g.play();
        },
        onEnterBack: () => {
          g.reverse();
        },
      });
  }
  function k() {
    const l = t.utils.toArray(".nav_menu_link_dropdown");
    l.length !== 0 &&
      l.forEach((d) => {
        const m = d.querySelector(".w-dropdown-toggle"),
          g = d.querySelector(".w-dropdown-list"),
          u = t.utils.toArray(".nav_menu_link", g),
          v = d.querySelector(".nav_menu_link_icon_dropdown ");
        t.timeline({
          paused: !0,
        }),
          t.set(u, {
            opacity: 0,
            filter: "blur(0.5rem)",
          }),
          c.observe({
            target: m,
            type: "touch,pointer",
            onClick: (C) => {
              if (C.target.classList.contains("w--open")) {
                let E = t.to(u, {
                  opacity: 0,
                  filter: "blur(0.5rem)",
                  stagger: {
                    each: 0.05,
                    from: "end",
                  },
                });
                t.to(v, {
                  rotate: 180,
                }),
                  console.log(E.duration());
              } else
                t.to(u, {
                  opacity: 1,
                  filter: "blur(0rem)",
                  stagger: {
                    each: 0.05,
                  },
                }),
                  t.to(v, {
                    rotate: 0,
                  });
            },
          });
      });
  }
}
t.registerPlugin(_);
function O() {
  let o = document.querySelector(".preload"),
    a = t.timeline({
      paused: !0,
    });
  return (
    a
      .to(o, {
        opacity: 0,
        duration: 0.66,
        delay: 0.25,
      })
      .to(o, {
        display: "none",
        duration: 0,
        onComplete: () => { },
      }),
    a
  );
}
var F = O();
function G(o) {
  let a = document.querySelector(".preload");
  const e = t.utils.toArray("[data-a-page-leave]");
  let n = t.timeline({
    paused: !0,
  });
  n
    .to(a, {
      display: "block",
      duration: 0,
    })
    .to(a, {
      opacity: 1,
      duration: 0.66,
    }),
    e.forEach((s) => {
      $(s).click(function (r) {
        $(this).attr("data-a-menu-close") !== "" &&
          (r.preventDefault(),
            n.play(),
            setTimeout(
              function (i) {
                window.location = i;
              },
              n.duration() * 1e3,
              this.href
            ));
      });
    });
}
const b = new S({
  duration: 3,
  easing: (o) => Math.min(1, 1.001 - Math.pow(2, -10 * o)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: !0,
  mouseMultiplier: 1,
  smoothTouch: !1,
  touchMultiplier: 2,
  infinite: !1,
});
t.registerPlugin(c, w, A);
function I(o) {
  const a = t.utils.toArray("[data-a-title]");
  a.length !== 0 &&
    a.forEach((e) => {
      const n = e.dataset.aTitleDelay ? e.dataset.aTitleDelay : 0,
        s = e.dataset.aTitleDelayMobile ? e.dataset.aTitleDelayMobile : 0;
      let r = new w(e, {
        type: "words, chars",
      }),
        i = t.from(r.chars, {
          delay: o.conditions.is_mobile_landscape ? n : s,
          color:
            document.body.dataset.page === "about_us"
              ? y.nav_bg_light
              : y.nav_bg_dark,
          stagger: 0.015,
          duration: 0.5,
          ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
          scrollTrigger: {
            trigger: e,
          },
        });
      o.conditions.is_desktop &&
        $(window).resize(function () {
          i.progress(1), r.revert();
        });
    });
}
function V(o) {
  const a = t.utils.toArray("[data-a-text]");
  a.length !== 0 &&
    a.forEach((e) => {
      const n = e.dataset.aTextDelay ? e.dataset.aTextDelay : 0;
      let s = new w(e, {
        type: "lines",
      }),
        r = t.from(s.lines, {
          opacity: 0,
          delay: n,
          y: "3rem",
          color:
            document.body.dataset.page === "about_us"
              ? y.nav_bg_light
              : y.nav_bg_dark,
          stagger: 0.1,
          scrollTrigger: {
            trigger: e,
          },
        });
      o.conditions.is_desktop &&
        $(window).resize(function () {
          r.progress(1), s.revert();
        });
    });
}
t.registerPlugin(T, c);
function z(o) {
  const a = t.utils.toArray("[data-a-svg]");
  a.length != 0 &&
    a.forEach((e) => {
      var n = t.utils.toArray(
        "path, rect, circle, ellipse, line, polyline, polygon",
        e
      );
      const s = {};
      let r = e.dataset.aSvg,
        i = e.dataset.aSvgDelay ? e.dataset.aSvgDelay : 0;
      switch (r) {
        case "draw":
          Object.assign(s, {
            from: {
              drawSVG: "0%",
            },
            to: {
              drawSVG: "100%",
              duration: 1.2,
              delay: i,
              stagger: {
                each: 0.1,
                from: "random",
              },
              scrollTrigger: {
                trigger: e,
                start: o.conditions.is_mobile_landscape ? "top 95%" : "top 90%",
              },
            },
          });
          break;
        case "cta":
          Object.assign(s, {
            from: {
              drawSVG: "0%",
            },
            to: {
              drawSVG: "100%",
              ease: "Sine.easeInOut",
              delay: i,
              stagger: {
                amount: 1.2,
                from: "random",
              },
              scrollTrigger: {
                trigger: e,
                start: o.conditions.is_mobile_landscape ? "top 95%" : "top 90%",
              },
            },
          });
          break;
      }
      t.fromTo(n, s.from, s.to);
    });
}
t.registerPlugin(c);
function B() {
  t.matchMedia().add(x, (a) => {
    H(a);
    function e(n) {
      b.raf(n), requestAnimationFrame(e);
    }
    b.on("scroll", c.update),
      t.ticker.add((n) => {
        b.raf(n * 1e3);
      }),
      requestAnimationFrame(e),
      I(a),
      V(a),
      z(a),
      D(a),
      M(a),
      P(a),
      G(),
      q(a),
      L(a);
  });
}
R();
document.readyState !== "loading" && (F.play(), B());
async function R() {
  const o = document.body.dataset.page;
  switch (!0) {
    case o === "home":
      await import("./home.js");
      break;
    case o === "about_us":
      await import("./about/about.js");
      break;
    case o === "ethics":
      await import("./ethics/ethics.js");
      break;
    case o === "careers":
      await import("./careers/career.js");
      break;
    case o === "methodology":
      await import("./methodology/method.js");
      break;
    case o === "services":
      await import("./services.js");
      break;
    case o === "case_studies":
      await import("./case-study/caseStudy.js"), await import("./cmsload.js");
      break;
    case o === "template-case_study":
      await import("./template-case_study.js"), await import("./cmsload.js");
      break;
    case o === "home-2":
      await import("./home-2.js");
      break;
    case o === "cube":
      await import("./_cube.js");
      break;
  }
  await import("./browser-nav-refresher.js");
}
const btn = document.getElementById("go-home");
btn.onclick = function () {
  window.location.href = "/";
};



export { x as c };
