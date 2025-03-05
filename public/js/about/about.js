import { g as o } from "../vendor.js";
import { c as t } from "../main.js";
import { m as a } from "./_modals.js";
import { a as i } from "./sliders.js";
import "../commonjsHelpers.js";
r();
function r() {
  o.matchMedia().add(t, (m) => {
    i(), a(m, ".about-slide", "about");
  });
}
