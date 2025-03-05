import { g as o } from "../vendor.js";
import { c as r } from "../main.js";
import { m as t } from "../about/_modals.js";
import "../commonjsHelpers.js";
a();
function a() {
    o.matchMedia().add(r, m => {
        t(m, ".careers_positions_card", "careers")
    }
    )
}
