import { g as n } from "../vendor.js";
function h(u, m, o) {
  r(),
    $(".button.is-load-more").click(function (a) {
      a.preventDefault(), r();
    });
  function r() {
    var a = n.utils.toArray(m);
    if (a.length === 0) return;
    const e = {
      window: document.querySelector(`[data-a-modal=${o}]`),
      close: document.querySelector(`[data-a-modal-close=${o}]`),
      bg: document.querySelector("[data-a-modal-bg") || null,
      side: document.querySelector(`[data-a-modal-side=${o}]`) || null,
      image: document.querySelector(`[data-a-modal-image=${o}]`) || null,
      heading: document.querySelector(`[data-a-modal-heading=${o}]`) || null,
      position: document.querySelector(`[data-a-modal-position=${o}]`) || null,
      type: document.querySelector(`[data-a-modal-type=${o}]`) || null,
      text: document.querySelector(`[data-a-modal-text=${o}]`) || null,
      email: document.querySelector(`[data-a-modal-email=${o}]`) || null,
    };
    if (u.conditions.from_tablet) {
      let t = n.timeline({
        paused: !0,
      });
      t.to(e.close, {
        rotate: -135,
      }),
        $(e.close).hover(
          function () {
            t.play();
          },
          function () {
            t.reverse();
          }
        );
    }
    a.forEach((t) => {
      const d = t.querySelector(".item-meta--title") || null,
        c = t.querySelector("img") || null,
        s = t.querySelector(".item-meta--position") || null,
        y = t.querySelector(".item-meta--description") || null,
        p = t.querySelector(".item-meta--type") || null,
        f = t.querySelector(`[data-a-modal-open=${o}]`) || null,
        S = t.querySelector(".item-meta--email") || null;
      function g() {
        e.heading && (e.heading.innerHTML = d.innerHTML),
          e.position && (e.position.innerHTML = s.innerHTML),
          e.type && (e.type.innerHTML = p.innerHTML),
          e.text && (e.text.innerHTML = y.innerHTML),
          e.image && ((e.image.src = c.src), (e.image.alt = c.alt)),
          e.email && (e.email.href = S.href);
      }
      n.set(e.window, {
        opacity: 0,
      }),
        n.set(e.side, {
          xPercent: 101,
        });
      let l = n.timeline({
        paused: !0,
        duration: 0.2,
      });
      l
        .to(e.window, {
          display: "block",
          duration: 0,
        })
        .to("body", {
          overflow: "hidden",
          duration: 0,
        })
        .to(e.window, {
          opacity: 1,
        })
        .to(e.side, {
          xPercent: 0,
        }),
        $(f).click(function (i) {
          i.preventDefault(), g(), l.play();
        }),
        $([e.close, e.bg]).click(function (i) {
          i.preventDefault(), l.reverse();
        });
    });
  }
}
export { h as m };
