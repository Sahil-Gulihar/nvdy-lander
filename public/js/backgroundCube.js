import { g as Vs, S as Ta } from "./vendor.js";
import "./commonjsHelpers.js";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Hs = "150",
  An = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
  },
  Tn = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3,
  },
  ho = 0,
  nr = 1,
  uo = 2,
  Ca = 1,
  fo = 2,
  li = 3,
  on = 0,
  wt = 1,
  sn = 2,
  an = 0,
  Hn = 1,
  ir = 2,
  sr = 3,
  rr = 4,
  po = 5,
  Gn = 100,
  mo = 101,
  go = 102,
  ar = 103,
  or = 104,
  _o = 200,
  xo = 201,
  vo = 202,
  Mo = 203,
  La = 204,
  Da = 205,
  yo = 206,
  bo = 207,
  So = 208,
  wo = 209,
  Eo = 210,
  Ao = 0,
  To = 1,
  Co = 2,
  Is = 3,
  Lo = 4,
  Do = 5,
  Po = 6,
  Ro = 7,
  Pa = 0,
  Io = 1,
  Fo = 2,
  Jt = 0,
  No = 1,
  zo = 2,
  Oo = 3,
  Uo = 4,
  Bo = 5,
  Ra = 300,
  Yn = 301,
  qn = 302,
  Fs = 303,
  Ns = 304,
  Vi = 306,
  zs = 1e3,
  Rt = 1001,
  Os = 1002,
  dt = 1003,
  lr = 1004,
  Ki = 1005,
  Ct = 1006,
  ko = 1007,
  ui = 1008,
  Mn = 1009,
  Go = 1010,
  Vo = 1011,
  Ia = 1012,
  Ho = 1013,
  _n = 1014,
  xn = 1015,
  di = 1016,
  Wo = 1017,
  Xo = 1018,
  Wn = 1020,
  Yo = 1021,
  It = 1023,
  qo = 1024,
  $o = 1025,
  vn = 1026,
  $n = 1027,
  jo = 1028,
  Zo = 1029,
  Ko = 1030,
  Jo = 1031,
  Qo = 1033,
  Ji = 33776,
  Qi = 33777,
  es = 33778,
  ts = 33779,
  cr = 35840,
  hr = 35841,
  ur = 35842,
  dr = 35843,
  el = 36196,
  fr = 37492,
  pr = 37496,
  mr = 37808,
  gr = 37809,
  _r = 37810,
  xr = 37811,
  vr = 37812,
  Mr = 37813,
  yr = 37814,
  br = 37815,
  Sr = 37816,
  wr = 37817,
  Er = 37818,
  Ar = 37819,
  Tr = 37820,
  Cr = 37821,
  ns = 36492,
  tl = 36283,
  Lr = 36284,
  Dr = 36285,
  Pr = 36286,
  yn = 3e3,
  Ue = 3001,
  nl = 3200,
  il = 3201,
  Fa = 0,
  sl = 1,
  Bt = "srgb",
  fi = "srgb-linear",
  Na = "display-p3",
  is = 7680,
  rl = 519,
  Rr = 35044,
  Ir = "300 es",
  Us = 1035;
class En {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const st = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  ss = Math.PI / 180,
  Bs = 180 / Math.PI;
function gi() {
  const a = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    st[a & 255] +
    st[(a >> 8) & 255] +
    st[(a >> 16) & 255] +
    st[(a >> 24) & 255] +
    "-" +
    st[e & 255] +
    st[(e >> 8) & 255] +
    "-" +
    st[((e >> 16) & 15) | 64] +
    st[(e >> 24) & 255] +
    "-" +
    st[(t & 63) | 128] +
    st[(t >> 8) & 255] +
    "-" +
    st[(t >> 16) & 255] +
    st[(t >> 24) & 255] +
    st[n & 255] +
    st[(n >> 8) & 255] +
    st[(n >> 16) & 255] +
    st[(n >> 24) & 255]
  ).toLowerCase();
}
function mt(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function al(a, e) {
  return ((a % e) + e) % e;
}
function rs(a, e, t) {
  return (1 - t) * a + t * e;
}
function Fr(a) {
  return (a & (a - 1)) === 0 && a !== 0;
}
function ol(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function xi(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function vt(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ee {
  constructor(e = 0, t = 0) {
    (Ee.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * i + e.x), (this.y = s * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ft {
  constructor() {
    (ft.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, r, c, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = r),
      (h[3] = t),
      (h[4] = s),
      (h[5] = c),
      (h[6] = n),
      (h[7] = o),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      r = n[3],
      c = n[6],
      l = n[1],
      h = n[4],
      f = n[7],
      u = n[2],
      m = n[5],
      v = n[8],
      p = i[0],
      d = i[3],
      g = i[6],
      b = i[1],
      _ = i[4],
      E = i[7],
      w = i[2],
      L = i[5],
      O = i[8];
    return (
      (s[0] = o * p + r * b + c * w),
      (s[3] = o * d + r * _ + c * L),
      (s[6] = o * g + r * E + c * O),
      (s[1] = l * p + h * b + f * w),
      (s[4] = l * d + h * _ + f * L),
      (s[7] = l * g + h * E + f * O),
      (s[2] = u * p + m * b + v * w),
      (s[5] = u * d + m * _ + v * L),
      (s[8] = u * g + m * E + v * O),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      r = e[5],
      c = e[6],
      l = e[7],
      h = e[8];
    return (
      t * o * h - t * r * l - n * s * h + n * r * c + i * s * l - i * o * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      r = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      f = h * o - r * l,
      u = r * c - h * s,
      m = l * s - o * c,
      v = t * f + n * u + i * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / v;
    return (
      (e[0] = f * p),
      (e[1] = (i * l - h * n) * p),
      (e[2] = (r * n - i * o) * p),
      (e[3] = u * p),
      (e[4] = (h * t - i * c) * p),
      (e[5] = (i * s - r * t) * p),
      (e[6] = m * p),
      (e[7] = (n * c - l * t) * p),
      (e[8] = (o * t - n * s) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, o, r) {
    const c = Math.cos(s),
      l = Math.sin(s);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * o + l * r) + o + e,
        -i * l,
        i * c,
        -i * (-l * o + c * r) + r + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(as.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(as.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(as.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const as = new ft();
function za(a) {
  for (let e = a.length - 1; e >= 0; --e) if (a[e] >= 65535) return !0;
  return !1;
}
function Gi(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
class bn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, o, r) {
    let c = n[i + 0],
      l = n[i + 1],
      h = n[i + 2],
      f = n[i + 3];
    const u = s[o + 0],
      m = s[o + 1],
      v = s[o + 2],
      p = s[o + 3];
    if (r === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = f);
      return;
    }
    if (r === 1) {
      (e[t + 0] = u), (e[t + 1] = m), (e[t + 2] = v), (e[t + 3] = p);
      return;
    }
    if (f !== p || c !== u || l !== m || h !== v) {
      let d = 1 - r;
      const g = c * u + l * m + h * v + f * p,
        b = g >= 0 ? 1 : -1,
        _ = 1 - g * g;
      if (_ > Number.EPSILON) {
        const w = Math.sqrt(_),
          L = Math.atan2(w, g * b);
        (d = Math.sin(d * L) / w), (r = Math.sin(r * L) / w);
      }
      const E = r * b;
      if (
        ((c = c * d + u * E),
        (l = l * d + m * E),
        (h = h * d + v * E),
        (f = f * d + p * E),
        d === 1 - r)
      ) {
        const w = 1 / Math.sqrt(c * c + l * l + h * h + f * f);
        (c *= w), (l *= w), (h *= w), (f *= w);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const r = n[i],
      c = n[i + 1],
      l = n[i + 2],
      h = n[i + 3],
      f = s[o],
      u = s[o + 1],
      m = s[o + 2],
      v = s[o + 3];
    return (
      (e[t] = r * v + h * f + c * m - l * u),
      (e[t + 1] = c * v + h * u + l * f - r * m),
      (e[t + 2] = l * v + h * m + r * u - c * f),
      (e[t + 3] = h * v - r * f - c * u - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._order,
      r = Math.cos,
      c = Math.sin,
      l = r(n / 2),
      h = r(i / 2),
      f = r(s / 2),
      u = c(n / 2),
      m = c(i / 2),
      v = c(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = u * h * f + l * m * v),
          (this._y = l * m * f - u * h * v),
          (this._z = l * h * v + u * m * f),
          (this._w = l * h * f - u * m * v);
        break;
      case "YXZ":
        (this._x = u * h * f + l * m * v),
          (this._y = l * m * f - u * h * v),
          (this._z = l * h * v - u * m * f),
          (this._w = l * h * f + u * m * v);
        break;
      case "ZXY":
        (this._x = u * h * f - l * m * v),
          (this._y = l * m * f + u * h * v),
          (this._z = l * h * v + u * m * f),
          (this._w = l * h * f - u * m * v);
        break;
      case "ZYX":
        (this._x = u * h * f - l * m * v),
          (this._y = l * m * f + u * h * v),
          (this._z = l * h * v - u * m * f),
          (this._w = l * h * f + u * m * v);
        break;
      case "YZX":
        (this._x = u * h * f + l * m * v),
          (this._y = l * m * f + u * h * v),
          (this._z = l * h * v - u * m * f),
          (this._w = l * h * f - u * m * v);
        break;
      case "XZY":
        (this._x = u * h * f - l * m * v),
          (this._y = l * m * f - u * h * v),
          (this._z = l * h * v + u * m * f),
          (this._w = l * h * f + u * m * v);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      o = t[1],
      r = t[5],
      c = t[9],
      l = t[2],
      h = t[6],
      f = t[10],
      u = n + r + f;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / m),
        (this._x = (h - c) * m),
        (this._y = (s - l) * m),
        (this._z = (o - i) * m);
    } else if (n > r && n > f) {
      const m = 2 * Math.sqrt(1 + n - r - f);
      (this._w = (h - c) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (s + l) / m);
    } else if (r > f) {
      const m = 2 * Math.sqrt(1 + r - n - f);
      (this._w = (s - l) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (c + h) / m);
    } else {
      const m = 2 * Math.sqrt(1 + f - n - r);
      (this._w = (o - i) / m),
        (this._x = (s + l) / m),
        (this._y = (c + h) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(mt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._w,
      r = t._x,
      c = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = n * h + o * r + i * l - s * c),
      (this._y = i * h + o * c + s * r - n * l),
      (this._z = s * h + o * l + n * c - i * r),
      (this._w = o * h - n * r - i * c - s * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      o = this._w;
    let r = o * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (r < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (r = -r))
        : this.copy(e),
      r >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = s), this;
    const c = 1 - r * r;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(c),
      h = Math.atan2(l, r),
      f = Math.sin((1 - t) * h) / l,
      u = Math.sin(t * h) / l;
    return (
      (this._w = o * f + this._w * u),
      (this._x = n * f + this._x * u),
      (this._y = i * f + this._y * u),
      (this._z = s * f + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    (D.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Nr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Nr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      o = e.y,
      r = e.z,
      c = e.w,
      l = c * t + o * i - r * n,
      h = c * n + r * t - s * i,
      f = c * i + s * n - o * t,
      u = -s * t - o * n - r * i;
    return (
      (this.x = l * c + u * -s + h * -r - f * -o),
      (this.y = h * c + u * -o + f * -s - l * -r),
      (this.z = f * c + u * -r + l * -o - h * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      o = t.x,
      r = t.y,
      c = t.z;
    return (
      (this.x = i * c - s * r),
      (this.y = s * o - n * c),
      (this.z = n * r - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return os.copy(this).projectOnVector(e), this.sub(os);
  }
  reflect(e) {
    return this.sub(os.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const os = new D(),
  Nr = new bn();
function Xn(a) {
  return a < 0.04045
    ? a * 0.0773993808
    : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function ls(a) {
  return a < 0.0031308 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const ll = new ft().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  cl = new ft().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]),
  rn = new D();
function hl(a) {
  return (
    a.convertSRGBToLinear(),
    rn.set(a.r, a.g, a.b).applyMatrix3(cl),
    a.setRGB(rn.x, rn.y, rn.z)
  );
}
function ul(a) {
  return (
    rn.set(a.r, a.g, a.b).applyMatrix3(ll),
    a.setRGB(rn.x, rn.y, rn.z).convertLinearToSRGB()
  );
}
const dl = {
    [fi]: (a) => a,
    [Bt]: (a) => a.convertSRGBToLinear(),
    [Na]: hl,
  },
  fl = {
    [fi]: (a) => a,
    [Bt]: (a) => a.convertLinearToSRGB(),
    [Na]: ul,
  },
  ht = {
    enabled: !1,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(a) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !a);
    },
    get workingColorSpace() {
      return fi;
    },
    set workingColorSpace(a) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (a, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return a;
      const n = dl[e],
        i = fl[t];
      if (n === void 0 || i === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return i(n(a));
    },
    fromWorkingColorSpace: function (a, e) {
      return this.convert(a, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (a, e) {
      return this.convert(a, e, this.workingColorSpace);
    },
  };
let Cn;
class Oa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Cn === void 0 && (Cn = Gi("canvas")),
        (Cn.width = e.width),
        (Cn.height = e.height);
      const n = Cn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Cn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Gi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let o = 0; o < s.length; o++) s[o] = Xn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Xn(t[n] / 255) * 255))
          : (t[n] = Xn(t[n]));
      return {
        data: t,
        width: e.width,
        height: e.height,
      };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class Ua {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = gi()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = {
        uuid: this.uuid,
        url: "",
      },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, r = i.length; o < r; o++)
          i[o].isDataTexture ? s.push(cs(i[o].image)) : s.push(cs(i[o]));
      } else s = cs(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function cs(a) {
  return (typeof HTMLImageElement < "u" && a instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && a instanceof ImageBitmap)
    ? Oa.getDataURL(a)
    : a.data
    ? {
        data: Array.from(a.data),
        width: a.width,
        height: a.height,
        type: a.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let pl = 0;
class Et extends En {
  constructor(
    e = Et.DEFAULT_IMAGE,
    t = Et.DEFAULT_MAPPING,
    n = Rt,
    i = Rt,
    s = Ct,
    o = ui,
    r = It,
    c = Mn,
    l = Et.DEFAULT_ANISOTROPY,
    h = yn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", {
        value: pl++,
      }),
      (this.uuid = gi()),
      (this.name = ""),
      (this.source = new Ua(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = l),
      (this.format = r),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Ee(0, 0)),
      (this.repeat = new Ee(1, 1)),
      (this.center = new Ee(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ft()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON",
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  transformUv(e) {
    if (this.mapping !== Ra) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case zs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Rt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Os:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case zs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Rt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Os:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
Et.DEFAULT_IMAGE = null;
Et.DEFAULT_MAPPING = Ra;
Et.DEFAULT_ANISOTROPY = 1;
class nt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (nt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements,
      l = c[0],
      h = c[4],
      f = c[8],
      u = c[1],
      m = c[5],
      v = c[9],
      p = c[2],
      d = c[6],
      g = c[10];
    if (
      Math.abs(h - u) < 0.01 &&
      Math.abs(f - p) < 0.01 &&
      Math.abs(v - d) < 0.01
    ) {
      if (
        Math.abs(h + u) < 0.1 &&
        Math.abs(f + p) < 0.1 &&
        Math.abs(v + d) < 0.1 &&
        Math.abs(l + m + g - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2,
        E = (m + 1) / 2,
        w = (g + 1) / 2,
        L = (h + u) / 4,
        O = (f + p) / 4,
        M = (v + d) / 4;
      return (
        _ > E && _ > w
          ? _ < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(_)), (i = L / n), (s = O / n))
          : E > w
          ? E < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(E)), (n = L / i), (s = M / i))
          : w < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(w)), (n = O / s), (i = M / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let b = Math.sqrt(
      (d - v) * (d - v) + (f - p) * (f - p) + (u - h) * (u - h)
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (d - v) / b),
      (this.y = (f - p) / b),
      (this.z = (u - h) / b),
      (this.w = Math.acos((l + m + g - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Sn extends En {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new nt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new nt(0, 0, e, t));
    const i = {
      width: e,
      height: t,
      depth: 1,
    };
    (this.texture = new Et(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Ct),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Ua(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
class Ba extends Et {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = dt),
      (this.minFilter = dt),
      (this.wrapR = Rt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class ml extends Et {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = dt),
      (this.minFilter = dt),
      (this.wrapR = Rt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class _i {
  constructor(
    e = new D(1 / 0, 1 / 0, 1 / 0),
    t = new D(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      r = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c],
        f = e[c + 1],
        u = e[c + 2];
      h < t && (t = h),
        f < n && (n = f),
        u < i && (i = u),
        h > s && (s = h),
        f > o && (o = f),
        u > r && (r = u);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      r = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c),
        f = e.getY(c),
        u = e.getZ(c);
      h < t && (t = h),
        f < n && (n = f),
        u < i && (i = u),
        h > s && (s = h),
        f > o && (o = f),
        u > r && (r = u);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = un.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, r = s.count; o < r; o++)
          un.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(un);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          hs.copy(n.boundingBox),
          hs.applyMatrix4(e.matrixWorld),
          this.union(hs);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, un),
      un.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ti),
      vi.subVectors(this.max, ti),
      Ln.subVectors(e.a, ti),
      Dn.subVectors(e.b, ti),
      Pn.subVectors(e.c, ti),
      Qt.subVectors(Dn, Ln),
      en.subVectors(Pn, Dn),
      dn.subVectors(Ln, Pn);
    let t = [
      0,
      -Qt.z,
      Qt.y,
      0,
      -en.z,
      en.y,
      0,
      -dn.z,
      dn.y,
      Qt.z,
      0,
      -Qt.x,
      en.z,
      0,
      -en.x,
      dn.z,
      0,
      -dn.x,
      -Qt.y,
      Qt.x,
      0,
      -en.y,
      en.x,
      0,
      -dn.y,
      dn.x,
      0,
    ];
    return !us(t, Ln, Dn, Pn, vi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !us(t, Ln, Dn, Pn, vi))
      ? !1
      : (Mi.crossVectors(Qt, en),
        (t = [Mi.x, Mi.y, Mi.z]),
        us(t, Ln, Dn, Pn, vi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, un).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(un).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Yt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Yt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Yt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Yt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Yt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Yt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Yt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Yt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Yt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Yt = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
  ],
  un = new D(),
  hs = new _i(),
  Ln = new D(),
  Dn = new D(),
  Pn = new D(),
  Qt = new D(),
  en = new D(),
  dn = new D(),
  ti = new D(),
  vi = new D(),
  Mi = new D(),
  fn = new D();
function us(a, e, t, n, i) {
  for (let s = 0, o = a.length - 3; s <= o; s += 3) {
    fn.fromArray(a, s);
    const r =
        i.x * Math.abs(fn.x) + i.y * Math.abs(fn.y) + i.z * Math.abs(fn.z),
      c = e.dot(fn),
      l = t.dot(fn),
      h = n.dot(fn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > r) return !1;
  }
  return !0;
}
const gl = new _i(),
  ni = new D(),
  ds = new D();
class Hi {
  constructor(e = new D(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : gl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ni.subVectors(e, this.center);
    const t = ni.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ni, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (ds.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(ni.copy(e.center).add(ds)),
            this.expandByPoint(ni.copy(e.center).sub(ds))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = new D(),
  fs = new D(),
  yi = new D(),
  tn = new D(),
  ps = new D(),
  bi = new D(),
  ms = new D();
class ka {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, qt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (qt.copy(this.origin).addScaledVector(this.direction, t),
        qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    fs.copy(e).add(t).multiplyScalar(0.5),
      yi.copy(t).sub(e).normalize(),
      tn.copy(this.origin).sub(fs);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(yi),
      r = tn.dot(this.direction),
      c = -tn.dot(yi),
      l = tn.lengthSq(),
      h = Math.abs(1 - o * o);
    let f, u, m, v;
    if (h > 0)
      if (((f = o * c - r), (u = o * r - c), (v = s * h), f >= 0))
        if (u >= -v)
          if (u <= v) {
            const p = 1 / h;
            (f *= p),
              (u *= p),
              (m = f * (f + o * u + 2 * r) + u * (o * f + u + 2 * c) + l);
          } else
            (u = s),
              (f = Math.max(0, -(o * u + r))),
              (m = -f * f + u * (u + 2 * c) + l);
        else
          (u = -s),
            (f = Math.max(0, -(o * u + r))),
            (m = -f * f + u * (u + 2 * c) + l);
      else
        u <= -v
          ? ((f = Math.max(0, -(-o * s + r))),
            (u = f > 0 ? -s : Math.min(Math.max(-s, -c), s)),
            (m = -f * f + u * (u + 2 * c) + l))
          : u <= v
          ? ((f = 0),
            (u = Math.min(Math.max(-s, -c), s)),
            (m = u * (u + 2 * c) + l))
          : ((f = Math.max(0, -(o * s + r))),
            (u = f > 0 ? s : Math.min(Math.max(-s, -c), s)),
            (m = -f * f + u * (u + 2 * c) + l));
    else
      (u = o > 0 ? -s : s),
        (f = Math.max(0, -(o * u + r))),
        (m = -f * f + u * (u + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, f),
      i && i.copy(fs).addScaledVector(yi, u),
      m
    );
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction),
      i = qt.dot(qt) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i),
      r = n - o,
      c = n + o;
    return c < 0 ? null : r < 0 ? this.at(c, t) : this.at(r, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, r, c;
    const l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      f = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
        : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
      h >= 0
        ? ((s = (e.min.y - u.y) * h), (o = (e.max.y - u.y) * h))
        : ((s = (e.max.y - u.y) * h), (o = (e.min.y - u.y) * h)),
      n > o ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (o < i || isNaN(i)) && (i = o),
      f >= 0
        ? ((r = (e.min.z - u.z) * f), (c = (e.max.z - u.z) * f))
        : ((r = (e.max.z - u.z) * f), (c = (e.min.z - u.z) * f)),
      n > c || r > i) ||
      ((r > n || n !== n) && (n = r), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ps.subVectors(t, e), bi.subVectors(n, e), ms.crossVectors(ps, bi);
    let o = this.direction.dot(ms),
      r;
    if (o > 0) {
      if (i) return null;
      r = 1;
    } else if (o < 0) (r = -1), (o = -o);
    else return null;
    tn.subVectors(this.origin, e);
    const c = r * this.direction.dot(bi.crossVectors(tn, bi));
    if (c < 0) return null;
    const l = r * this.direction.dot(ps.cross(tn));
    if (l < 0 || c + l > o) return null;
    const h = -r * tn.dot(ms);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qe {
  constructor() {
    (qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, r, c, l, h, f, u, m, v, p, d) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = i),
      (g[1] = s),
      (g[5] = o),
      (g[9] = r),
      (g[13] = c),
      (g[2] = l),
      (g[6] = h),
      (g[10] = f),
      (g[14] = u),
      (g[3] = m),
      (g[7] = v),
      (g[11] = p),
      (g[15] = d),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Rn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Rn.setFromMatrixColumn(e, 1).length(),
      o = 1 / Rn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      o = Math.cos(n),
      r = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      h = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const u = o * h,
        m = o * f,
        v = r * h,
        p = r * f;
      (t[0] = c * h),
        (t[4] = -c * f),
        (t[8] = l),
        (t[1] = m + v * l),
        (t[5] = u - p * l),
        (t[9] = -r * c),
        (t[2] = p - u * l),
        (t[6] = v + m * l),
        (t[10] = o * c);
    } else if (e.order === "YXZ") {
      const u = c * h,
        m = c * f,
        v = l * h,
        p = l * f;
      (t[0] = u + p * r),
        (t[4] = v * r - m),
        (t[8] = o * l),
        (t[1] = o * f),
        (t[5] = o * h),
        (t[9] = -r),
        (t[2] = m * r - v),
        (t[6] = p + u * r),
        (t[10] = o * c);
    } else if (e.order === "ZXY") {
      const u = c * h,
        m = c * f,
        v = l * h,
        p = l * f;
      (t[0] = u - p * r),
        (t[4] = -o * f),
        (t[8] = v + m * r),
        (t[1] = m + v * r),
        (t[5] = o * h),
        (t[9] = p - u * r),
        (t[2] = -o * l),
        (t[6] = r),
        (t[10] = o * c);
    } else if (e.order === "ZYX") {
      const u = o * h,
        m = o * f,
        v = r * h,
        p = r * f;
      (t[0] = c * h),
        (t[4] = v * l - m),
        (t[8] = u * l + p),
        (t[1] = c * f),
        (t[5] = p * l + u),
        (t[9] = m * l - v),
        (t[2] = -l),
        (t[6] = r * c),
        (t[10] = o * c);
    } else if (e.order === "YZX") {
      const u = o * c,
        m = o * l,
        v = r * c,
        p = r * l;
      (t[0] = c * h),
        (t[4] = p - u * f),
        (t[8] = v * f + m),
        (t[1] = f),
        (t[5] = o * h),
        (t[9] = -r * h),
        (t[2] = -l * h),
        (t[6] = m * f + v),
        (t[10] = u - p * f);
    } else if (e.order === "XZY") {
      const u = o * c,
        m = o * l,
        v = r * c,
        p = r * l;
      (t[0] = c * h),
        (t[4] = -f),
        (t[8] = l * h),
        (t[1] = u * f + p),
        (t[5] = o * h),
        (t[9] = m * f - v),
        (t[2] = v * f - m),
        (t[6] = r * h),
        (t[10] = p * f + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_l, e, xl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Mt.subVectors(e, t),
      Mt.lengthSq() === 0 && (Mt.z = 1),
      Mt.normalize(),
      nn.crossVectors(n, Mt),
      nn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Mt.x += 1e-4) : (Mt.z += 1e-4),
        Mt.normalize(),
        nn.crossVectors(n, Mt)),
      nn.normalize(),
      Si.crossVectors(Mt, nn),
      (i[0] = nn.x),
      (i[4] = Si.x),
      (i[8] = Mt.x),
      (i[1] = nn.y),
      (i[5] = Si.y),
      (i[9] = Mt.y),
      (i[2] = nn.z),
      (i[6] = Si.z),
      (i[10] = Mt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      r = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      f = n[5],
      u = n[9],
      m = n[13],
      v = n[2],
      p = n[6],
      d = n[10],
      g = n[14],
      b = n[3],
      _ = n[7],
      E = n[11],
      w = n[15],
      L = i[0],
      O = i[4],
      M = i[8],
      T = i[12],
      F = i[1],
      Y = i[5],
      K = i[9],
      U = i[13],
      I = i[2],
      H = i[6],
      Z = i[10],
      Q = i[14],
      X = i[3],
      q = i[7],
      J = i[11],
      fe = i[15];
    return (
      (s[0] = o * L + r * F + c * I + l * X),
      (s[4] = o * O + r * Y + c * H + l * q),
      (s[8] = o * M + r * K + c * Z + l * J),
      (s[12] = o * T + r * U + c * Q + l * fe),
      (s[1] = h * L + f * F + u * I + m * X),
      (s[5] = h * O + f * Y + u * H + m * q),
      (s[9] = h * M + f * K + u * Z + m * J),
      (s[13] = h * T + f * U + u * Q + m * fe),
      (s[2] = v * L + p * F + d * I + g * X),
      (s[6] = v * O + p * Y + d * H + g * q),
      (s[10] = v * M + p * K + d * Z + g * J),
      (s[14] = v * T + p * U + d * Q + g * fe),
      (s[3] = b * L + _ * F + E * I + w * X),
      (s[7] = b * O + _ * Y + E * H + w * q),
      (s[11] = b * M + _ * K + E * Z + w * J),
      (s[15] = b * T + _ * U + E * Q + w * fe),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      o = e[1],
      r = e[5],
      c = e[9],
      l = e[13],
      h = e[2],
      f = e[6],
      u = e[10],
      m = e[14],
      v = e[3],
      p = e[7],
      d = e[11],
      g = e[15];
    return (
      v *
        (+s * c * f -
          i * l * f -
          s * r * u +
          n * l * u +
          i * r * m -
          n * c * m) +
      p *
        (+t * c * m -
          t * l * u +
          s * o * u -
          i * o * m +
          i * l * h -
          s * c * h) +
      d *
        (+t * l * f -
          t * r * m -
          s * o * f +
          n * o * m +
          s * r * h -
          n * l * h) +
      g *
        (-i * r * h - t * c * f + t * r * u + i * o * f - n * o * u + n * c * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      r = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      f = e[9],
      u = e[10],
      m = e[11],
      v = e[12],
      p = e[13],
      d = e[14],
      g = e[15],
      b = f * d * l - p * u * l + p * c * m - r * d * m - f * c * g + r * u * g,
      _ = v * u * l - h * d * l - v * c * m + o * d * m + h * c * g - o * u * g,
      E = h * p * l - v * f * l + v * r * m - o * p * m - h * r * g + o * f * g,
      w = v * f * c - h * p * c - v * r * u + o * p * u + h * r * d - o * f * d,
      L = t * b + n * _ + i * E + s * w;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const O = 1 / L;
    return (
      (e[0] = b * O),
      (e[1] =
        (p * u * s -
          f * d * s -
          p * i * m +
          n * d * m +
          f * i * g -
          n * u * g) *
        O),
      (e[2] =
        (r * d * s -
          p * c * s +
          p * i * l -
          n * d * l -
          r * i * g +
          n * c * g) *
        O),
      (e[3] =
        (f * c * s -
          r * u * s -
          f * i * l +
          n * u * l +
          r * i * m -
          n * c * m) *
        O),
      (e[4] = _ * O),
      (e[5] =
        (h * d * s -
          v * u * s +
          v * i * m -
          t * d * m -
          h * i * g +
          t * u * g) *
        O),
      (e[6] =
        (v * c * s -
          o * d * s -
          v * i * l +
          t * d * l +
          o * i * g -
          t * c * g) *
        O),
      (e[7] =
        (o * u * s -
          h * c * s +
          h * i * l -
          t * u * l -
          o * i * m +
          t * c * m) *
        O),
      (e[8] = E * O),
      (e[9] =
        (v * f * s -
          h * p * s -
          v * n * m +
          t * p * m +
          h * n * g -
          t * f * g) *
        O),
      (e[10] =
        (o * p * s -
          v * r * s +
          v * n * l -
          t * p * l -
          o * n * g +
          t * r * g) *
        O),
      (e[11] =
        (h * r * s -
          o * f * s -
          h * n * l +
          t * f * l +
          o * n * m -
          t * r * m) *
        O),
      (e[12] = w * O),
      (e[13] =
        (h * p * i -
          v * f * i +
          v * n * u -
          t * p * u -
          h * n * d +
          t * f * d) *
        O),
      (e[14] =
        (v * r * i -
          o * p * i -
          v * n * c +
          t * p * c +
          o * n * d -
          t * r * d) *
        O),
      (e[15] =
        (o * f * i -
          h * r * i +
          h * n * c -
          t * f * c -
          o * n * u +
          t * r * u) *
        O),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      o = e.x,
      r = e.y,
      c = e.z,
      l = s * o,
      h = s * r;
    return (
      this.set(
        l * o + n,
        l * r - i * c,
        l * c + i * r,
        0,
        l * r + i * c,
        h * r + n,
        h * c - i * o,
        0,
        l * c - i * r,
        h * c + i * o,
        s * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      o = t._y,
      r = t._z,
      c = t._w,
      l = s + s,
      h = o + o,
      f = r + r,
      u = s * l,
      m = s * h,
      v = s * f,
      p = o * h,
      d = o * f,
      g = r * f,
      b = c * l,
      _ = c * h,
      E = c * f,
      w = n.x,
      L = n.y,
      O = n.z;
    return (
      (i[0] = (1 - (p + g)) * w),
      (i[1] = (m + E) * w),
      (i[2] = (v - _) * w),
      (i[3] = 0),
      (i[4] = (m - E) * L),
      (i[5] = (1 - (u + g)) * L),
      (i[6] = (d + b) * L),
      (i[7] = 0),
      (i[8] = (v + _) * O),
      (i[9] = (d - b) * O),
      (i[10] = (1 - (u + p)) * O),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Rn.set(i[0], i[1], i[2]).length();
    const o = Rn.set(i[4], i[5], i[6]).length(),
      r = Rn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Lt.copy(this);
    const l = 1 / s,
      h = 1 / o,
      f = 1 / r;
    return (
      (Lt.elements[0] *= l),
      (Lt.elements[1] *= l),
      (Lt.elements[2] *= l),
      (Lt.elements[4] *= h),
      (Lt.elements[5] *= h),
      (Lt.elements[6] *= h),
      (Lt.elements[8] *= f),
      (Lt.elements[9] *= f),
      (Lt.elements[10] *= f),
      t.setFromRotationMatrix(Lt),
      (n.x = s),
      (n.y = o),
      (n.z = r),
      this
    );
  }
  makePerspective(e, t, n, i, s, o) {
    const r = this.elements,
      c = (2 * s) / (t - e),
      l = (2 * s) / (n - i),
      h = (t + e) / (t - e),
      f = (n + i) / (n - i),
      u = -(o + s) / (o - s),
      m = (-2 * o * s) / (o - s);
    return (
      (r[0] = c),
      (r[4] = 0),
      (r[8] = h),
      (r[12] = 0),
      (r[1] = 0),
      (r[5] = l),
      (r[9] = f),
      (r[13] = 0),
      (r[2] = 0),
      (r[6] = 0),
      (r[10] = u),
      (r[14] = m),
      (r[3] = 0),
      (r[7] = 0),
      (r[11] = -1),
      (r[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, o) {
    const r = this.elements,
      c = 1 / (t - e),
      l = 1 / (n - i),
      h = 1 / (o - s),
      f = (t + e) * c,
      u = (n + i) * l,
      m = (o + s) * h;
    return (
      (r[0] = 2 * c),
      (r[4] = 0),
      (r[8] = 0),
      (r[12] = -f),
      (r[1] = 0),
      (r[5] = 2 * l),
      (r[9] = 0),
      (r[13] = -u),
      (r[2] = 0),
      (r[6] = 0),
      (r[10] = -2 * h),
      (r[14] = -m),
      (r[3] = 0),
      (r[7] = 0),
      (r[11] = 0),
      (r[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Rn = new D(),
  Lt = new qe(),
  _l = new D(0, 0, 0),
  xl = new D(1, 1, 1),
  nn = new D(),
  Si = new D(),
  Mt = new D(),
  zr = new qe(),
  Or = new bn();
class Wi {
  constructor(e = 0, t = 0, n = 0, i = Wi.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      o = i[4],
      r = i[8],
      c = i[1],
      l = i[5],
      h = i[9],
      f = i[2],
      u = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(mt(r, -1, 1))),
          Math.abs(r) < 0.9999999
            ? ((this._x = Math.atan2(-h, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-mt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(r, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(mt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-o, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-mt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(u, m)), (this._z = Math.atan2(c, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, l)));
        break;
      case "YZX":
        (this._z = Math.asin(mt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(r, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-mt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(r, s)))
            : ((this._x = Math.atan2(-h, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      zr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(zr, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Or.setFromEuler(this), this.setFromQuaternion(Or, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Wi.DEFAULT_ORDER = "XYZ";
class Ga {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let vl = 0;
const Ur = new D(),
  In = new bn(),
  $t = new qe(),
  wi = new D(),
  ii = new D(),
  Ml = new D(),
  yl = new bn(),
  Br = new D(1, 0, 0),
  kr = new D(0, 1, 0),
  Gr = new D(0, 0, 1),
  bl = {
    type: "added",
  },
  Vr = {
    type: "removed",
  };
class it extends En {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", {
        value: vl++,
      }),
      (this.uuid = gi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = it.DEFAULT_UP.clone());
    const e = new D(),
      t = new Wi(),
      n = new bn(),
      i = new D(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        modelViewMatrix: {
          value: new qe(),
        },
        normalMatrix: {
          value: new ft(),
        },
      }),
      (this.matrix = new qe()),
      (this.matrixWorld = new qe()),
      (this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Ga()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.multiply(In), this;
  }
  rotateOnWorldAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.premultiply(In), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Br, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(kr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Gr, e);
  }
  translateOnAxis(e, t) {
    return (
      Ur.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ur.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Br, e);
  }
  translateY(e) {
    return this.translateOnAxis(kr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Gr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4($t.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? wi.copy(e) : wi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ii.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? $t.lookAt(ii, wi, this.up)
        : $t.lookAt(wi, ii, this.up),
      this.quaternion.setFromRotationMatrix($t),
      i &&
        ($t.extractRotation(i.matrixWorld),
        In.setFromRotationMatrix($t),
        this.quaternion.premultiply(In.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(bl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Vr)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Vr);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      $t.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), $t.multiply(e.parent.matrixWorld)),
      e.applyMatrix4($t),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, Ml), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, yl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const r = i[s];
        r.matrixWorldAutoUpdate === !0 && r.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function s(r, c) {
      return r[c.uuid] === void 0 && (r[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const r = this.geometry.parameters;
      if (r !== void 0 && r.shapes !== void 0) {
        const c = r.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const f = c[l];
            s(e.shapes, f);
          }
        else s(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const r = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          r.push(s(e.materials, this.material[c]));
        i.material = r;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let r = 0; r < this.children.length; r++)
        i.children.push(this.children[r].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let r = 0; r < this.animations.length; r++) {
        const c = this.animations[r];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const r = o(e.geometries),
        c = o(e.materials),
        l = o(e.textures),
        h = o(e.images),
        f = o(e.shapes),
        u = o(e.skeletons),
        m = o(e.animations),
        v = o(e.nodes);
      r.length > 0 && (n.geometries = r),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        h.length > 0 && (n.images = h),
        f.length > 0 && (n.shapes = f),
        u.length > 0 && (n.skeletons = u),
        m.length > 0 && (n.animations = m),
        v.length > 0 && (n.nodes = v);
    }
    return (n.object = i), n;
    function o(r) {
      const c = [];
      for (const l in r) {
        const h = r[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
it.DEFAULT_UP = new D(0, 1, 0);
it.DEFAULT_MATRIX_AUTO_UPDATE = !0;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Dt = new D(),
  jt = new D(),
  gs = new D(),
  Zt = new D(),
  Fn = new D(),
  Nn = new D(),
  Hr = new D(),
  _s = new D(),
  xs = new D(),
  vs = new D();
class Kt {
  constructor(e = new D(), t = new D(), n = new D()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Dt.subVectors(e, t), i.cross(Dt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Dt.subVectors(i, t), jt.subVectors(n, t), gs.subVectors(e, t);
    const o = Dt.dot(Dt),
      r = Dt.dot(jt),
      c = Dt.dot(gs),
      l = jt.dot(jt),
      h = jt.dot(gs),
      f = o * l - r * r;
    if (f === 0) return s.set(-2, -1, -1);
    const u = 1 / f,
      m = (l * c - r * h) * u,
      v = (o * h - r * c) * u;
    return s.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Zt),
      Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1
    );
  }
  static getUV(e, t, n, i, s, o, r, c) {
    return (
      this.getBarycoord(e, t, n, i, Zt),
      c.set(0, 0),
      c.addScaledVector(s, Zt.x),
      c.addScaledVector(o, Zt.y),
      c.addScaledVector(r, Zt.z),
      c
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Dt.subVectors(n, t), jt.subVectors(e, t), Dt.cross(jt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Dt.subVectors(this.c, this.b),
      jt.subVectors(this.a, this.b),
      Dt.cross(jt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Kt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let o, r;
    Fn.subVectors(i, n), Nn.subVectors(s, n), _s.subVectors(e, n);
    const c = Fn.dot(_s),
      l = Nn.dot(_s);
    if (c <= 0 && l <= 0) return t.copy(n);
    xs.subVectors(e, i);
    const h = Fn.dot(xs),
      f = Nn.dot(xs);
    if (h >= 0 && f <= h) return t.copy(i);
    const u = c * f - h * l;
    if (u <= 0 && c >= 0 && h <= 0)
      return (o = c / (c - h)), t.copy(n).addScaledVector(Fn, o);
    vs.subVectors(e, s);
    const m = Fn.dot(vs),
      v = Nn.dot(vs);
    if (v >= 0 && m <= v) return t.copy(s);
    const p = m * l - c * v;
    if (p <= 0 && l >= 0 && v <= 0)
      return (r = l / (l - v)), t.copy(n).addScaledVector(Nn, r);
    const d = h * v - m * f;
    if (d <= 0 && f - h >= 0 && m - v >= 0)
      return (
        Hr.subVectors(s, i),
        (r = (f - h) / (f - h + (m - v))),
        t.copy(i).addScaledVector(Hr, r)
      );
    const g = 1 / (d + p + u);
    return (
      (o = p * g),
      (r = u * g),
      t.copy(n).addScaledVector(Fn, o).addScaledVector(Nn, r)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Sl = 0;
class Kn extends En {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", {
        value: Sl++,
      }),
      (this.uuid = gi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Hn),
      (this.side = on),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = La),
      (this.blendDst = Da),
      (this.blendEquation = Gn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Is),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = rl),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = is),
      (this.stencilZFail = is),
      (this.stencilZPass = is),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t &&
      (e = {
        textures: {},
        images: {},
      });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Hn && (n.blending = this.blending),
      this.side !== on && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const r in s) {
        const c = s[r];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures),
        o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Va = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Pt = {
    h: 0,
    s: 0,
    l: 0,
  },
  Ei = {
    h: 0,
    s: 0,
    l: 0,
  };
function Ms(a, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? a + (e - a) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? a + (e - a) * 6 * (2 / 3 - t)
      : a
  );
}
class Ie {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Bt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ht.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = ht.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      ht.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = ht.workingColorSpace) {
    if (((e = al(e, 1)), (t = mt(t, 0, 1)), (n = mt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = Ms(o, s, e + 1 / 3)),
        (this.g = Ms(o, s, e)),
        (this.b = Ms(o, s, e - 1 / 3));
    }
    return ht.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Bt) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = i[1],
        r = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              ht.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              ht.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          ) {
            const c = parseFloat(s[1]) / 360,
              l = parseFloat(s[2]) / 100,
              h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, h, t);
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        o = s.length;
      if (o === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          ht.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          ht.toWorkingColorSpace(this, t),
          this
        );
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Bt) {
    const n = Va[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Xn(e.r)), (this.g = Xn(e.g)), (this.b = Xn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ls(e.r)), (this.g = ls(e.g)), (this.b = ls(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Bt) {
    return (
      ht.fromWorkingColorSpace(rt.copy(this), e),
      (mt(rt.r * 255, 0, 255) << 16) ^
        (mt(rt.g * 255, 0, 255) << 8) ^
        (mt(rt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Bt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ht.workingColorSpace) {
    ht.fromWorkingColorSpace(rt.copy(this), t);
    const n = rt.r,
      i = rt.g,
      s = rt.b,
      o = Math.max(n, i, s),
      r = Math.min(n, i, s);
    let c, l;
    const h = (r + o) / 2;
    if (r === o) (c = 0), (l = 0);
    else {
      const f = o - r;
      switch (((l = h <= 0.5 ? f / (o + r) : f / (2 - o - r)), o)) {
        case n:
          c = (i - s) / f + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / f + 2;
          break;
        case s:
          c = (n - i) / f + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = h), e;
  }
  getRGB(e, t = ht.workingColorSpace) {
    return (
      ht.fromWorkingColorSpace(rt.copy(this), t),
      (e.r = rt.r),
      (e.g = rt.g),
      (e.b = rt.b),
      e
    );
  }
  getStyle(e = Bt) {
    ht.fromWorkingColorSpace(rt.copy(this), e);
    const t = rt.r,
      n = rt.g,
      i = rt.b;
    return e !== Bt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${(t * 255) | 0},${(n * 255) | 0},${(i * 255) | 0})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Pt),
      (Pt.h += e),
      (Pt.s += t),
      (Pt.l += n),
      this.setHSL(Pt.h, Pt.s, Pt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Pt), e.getHSL(Ei);
    const n = rs(Pt.h, Ei.h, t),
      i = rs(Pt.s, Ei.s, t),
      s = rs(Pt.l, Ei.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const rt = new Ie();
Ie.NAMES = Va;
class Ws extends Kn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Pa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ye = new D(),
  Ai = new Ee();
class Ht {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Rr),
      (this.updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ai.fromBufferAttribute(this, t),
          Ai.applyMatrix3(e),
          this.setXY(t, Ai.x, Ai.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ye.fromBufferAttribute(this, t),
          Ye.applyMatrix3(e),
          this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t),
        Ye.applyMatrix4(e),
        this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t),
        Ye.applyNormalMatrix(e),
        this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t),
        Ye.transformDirection(e),
        this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = vt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = vt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = vt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = vt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = vt(t, this.array)), (n = vt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = vt(t, this.array)),
        (n = vt(n, this.array)),
        (i = vt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = vt(t, this.array)),
        (n = vt(n, this.array)),
        (i = vt(i, this.array)),
        (s = vt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Rr && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class Ha extends Ht {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Wa extends Ht {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class pt extends Ht {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let wl = 0;
const Tt = new qe(),
  ys = new it(),
  zn = new D(),
  yt = new _i(),
  si = new _i(),
  tt = new D();
class Nt extends En {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", {
        value: wl++,
      }),
      (this.uuid = gi()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = {
        start: 0,
        count: 1 / 0,
      }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (za(e) ? Wa : Ha)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n,
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new ft().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Tt.makeRotationFromQuaternion(e), this.applyMatrix4(Tt), this;
  }
  rotateX(e) {
    return Tt.makeRotationX(e), this.applyMatrix4(Tt), this;
  }
  rotateY(e) {
    return Tt.makeRotationY(e), this.applyMatrix4(Tt), this;
  }
  rotateZ(e) {
    return Tt.makeRotationZ(e), this.applyMatrix4(Tt), this;
  }
  translate(e, t, n) {
    return Tt.makeTranslation(e, t, n), this.applyMatrix4(Tt), this;
  }
  scale(e, t, n) {
    return Tt.makeScale(e, t, n), this.applyMatrix4(Tt), this;
  }
  lookAt(e) {
    return ys.lookAt(e), ys.updateMatrix(), this.applyMatrix4(ys.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(zn).negate(),
      this.translate(zn.x, zn.y, zn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new pt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _i());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new D(-1 / 0, -1 / 0, -1 / 0),
          new D(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          yt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (tt.addVectors(this.boundingBox.min, yt.min),
                this.boundingBox.expandByPoint(tt),
                tt.addVectors(this.boundingBox.max, yt.max),
                this.boundingBox.expandByPoint(tt))
              : (this.boundingBox.expandByPoint(yt.min),
                this.boundingBox.expandByPoint(yt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Hi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((yt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s];
          si.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (tt.addVectors(yt.min, si.min),
                yt.expandByPoint(tt),
                tt.addVectors(yt.max, si.max),
                yt.expandByPoint(tt))
              : (yt.expandByPoint(si.min), yt.expandByPoint(si.max));
        }
      yt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        tt.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(tt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s],
            c = this.morphTargetsRelative;
          for (let l = 0, h = r.count; l < h; l++)
            tt.fromBufferAttribute(r, l),
              c && (zn.fromBufferAttribute(e, l), tt.add(zn)),
              (i = Math.max(i, n.distanceToSquared(tt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      r = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Ht(new Float32Array(4 * r), 4));
    const c = this.getAttribute("tangent").array,
      l = [],
      h = [];
    for (let F = 0; F < r; F++) (l[F] = new D()), (h[F] = new D());
    const f = new D(),
      u = new D(),
      m = new D(),
      v = new Ee(),
      p = new Ee(),
      d = new Ee(),
      g = new D(),
      b = new D();
    function _(F, Y, K) {
      f.fromArray(i, F * 3),
        u.fromArray(i, Y * 3),
        m.fromArray(i, K * 3),
        v.fromArray(o, F * 2),
        p.fromArray(o, Y * 2),
        d.fromArray(o, K * 2),
        u.sub(f),
        m.sub(f),
        p.sub(v),
        d.sub(v);
      const U = 1 / (p.x * d.y - d.x * p.y);
      !isFinite(U) ||
        (g
          .copy(u)
          .multiplyScalar(d.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(U),
        b
          .copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(u, -d.x)
          .multiplyScalar(U),
        l[F].add(g),
        l[Y].add(g),
        l[K].add(g),
        h[F].add(b),
        h[Y].add(b),
        h[K].add(b));
    }
    let E = this.groups;
    E.length === 0 &&
      (E = [
        {
          start: 0,
          count: n.length,
        },
      ]);
    for (let F = 0, Y = E.length; F < Y; ++F) {
      const K = E[F],
        U = K.start,
        I = K.count;
      for (let H = U, Z = U + I; H < Z; H += 3) _(n[H + 0], n[H + 1], n[H + 2]);
    }
    const w = new D(),
      L = new D(),
      O = new D(),
      M = new D();
    function T(F) {
      O.fromArray(s, F * 3), M.copy(O);
      const Y = l[F];
      w.copy(Y),
        w.sub(O.multiplyScalar(O.dot(Y))).normalize(),
        L.crossVectors(M, Y);
      const U = L.dot(h[F]) < 0 ? -1 : 1;
      (c[F * 4] = w.x),
        (c[F * 4 + 1] = w.y),
        (c[F * 4 + 2] = w.z),
        (c[F * 4 + 3] = U);
    }
    for (let F = 0, Y = E.length; F < Y; ++F) {
      const K = E[F],
        U = K.start,
        I = K.count;
      for (let H = U, Z = U + I; H < Z; H += 3)
        T(n[H + 0]), T(n[H + 1]), T(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Ht(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let u = 0, m = n.count; u < m; u++) n.setXYZ(u, 0, 0, 0);
      const i = new D(),
        s = new D(),
        o = new D(),
        r = new D(),
        c = new D(),
        l = new D(),
        h = new D(),
        f = new D();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const v = e.getX(u + 0),
            p = e.getX(u + 1),
            d = e.getX(u + 2);
          i.fromBufferAttribute(t, v),
            s.fromBufferAttribute(t, p),
            o.fromBufferAttribute(t, d),
            h.subVectors(o, s),
            f.subVectors(i, s),
            h.cross(f),
            r.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, d),
            r.add(h),
            c.add(h),
            l.add(h),
            n.setXYZ(v, r.x, r.y, r.z),
            n.setXYZ(p, c.x, c.y, c.z),
            n.setXYZ(d, l.x, l.y, l.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          i.fromBufferAttribute(t, u + 0),
            s.fromBufferAttribute(t, u + 1),
            o.fromBufferAttribute(t, u + 2),
            h.subVectors(o, s),
            f.subVectors(i, s),
            h.cross(f),
            n.setXYZ(u + 0, h.x, h.y, h.z),
            n.setXYZ(u + 1, h.x, h.y, h.z),
            n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      tt.fromBufferAttribute(e, t),
        tt.normalize(),
        e.setXYZ(t, tt.x, tt.y, tt.z);
  }
  toNonIndexed() {
    function e(r, c) {
      const l = r.array,
        h = r.itemSize,
        f = r.normalized,
        u = new l.constructor(c.length * h);
      let m = 0,
        v = 0;
      for (let p = 0, d = c.length; p < d; p++) {
        r.isInterleavedBufferAttribute
          ? (m = c[p] * r.data.stride + r.offset)
          : (m = c[p] * h);
        for (let g = 0; g < h; g++) u[v++] = l[m++];
      }
      return new Ht(u, h, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Nt(),
      n = this.index.array,
      i = this.attributes;
    for (const r in i) {
      const c = i[r],
        l = e(c, n);
      t.setAttribute(r, l);
    }
    const s = this.morphAttributes;
    for (const r in s) {
      const c = [],
        l = s[r];
      for (let h = 0, f = l.length; h < f; h++) {
        const u = l[h],
          m = e(u, n);
        c.push(m);
      }
      t.morphAttributes[r] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let r = 0, c = o.length; r < c; r++) {
      const l = o[r];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = {
      attributes: {},
    };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        h = [];
      for (let f = 0, u = l.length; f < u; f++) {
        const m = l[f];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && ((i[c] = h), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const r = this.boundingSphere;
    return (
      r !== null &&
        (e.data.boundingSphere = {
          center: r.center.toArray(),
          radius: r.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [],
        f = s[l];
      for (let u = 0, m = f.length; u < m; u++) h.push(f[u].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const f = o[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const r = e.boundingBox;
    r !== null && (this.boundingBox = r.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
const Wr = new qe(),
  Ut = new ka(),
  Ti = new Hi(),
  Xr = new D(),
  ri = new D(),
  ai = new D(),
  oi = new D(),
  bs = new D(),
  Ci = new D(),
  Li = new Ee(),
  Di = new Ee(),
  Pi = new Ee(),
  Ss = new D(),
  Ri = new D();
class Vt extends it {
  constructor(e = new Nt(), t = new Ws()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[r] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const r = this.morphTargetInfluences;
    if (s && r) {
      Ci.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = r[c],
          f = s[c];
        h !== 0 &&
          (bs.fromBufferAttribute(f, e),
          o ? Ci.addScaledVector(bs, h) : Ci.addScaledVector(bs.sub(t), h));
      }
      t.add(Ci);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ti.copy(n.boundingSphere),
      Ti.applyMatrix4(s),
      Ut.copy(e.ray).recast(e.near),
      Ti.containsPoint(Ut.origin) === !1 &&
        (Ut.intersectSphere(Ti, Xr) === null ||
          Ut.origin.distanceToSquared(Xr) > (e.far - e.near) ** 2)) ||
      (Wr.copy(s).invert(),
      Ut.copy(e.ray).applyMatrix4(Wr),
      n.boundingBox !== null && Ut.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const r = n.index,
      c = n.attributes.position,
      l = n.attributes.uv,
      h = n.attributes.uv2,
      f = n.groups,
      u = n.drawRange;
    if (r !== null)
      if (Array.isArray(i))
        for (let m = 0, v = f.length; m < v; m++) {
          const p = f[m],
            d = i[p.materialIndex],
            g = Math.max(p.start, u.start),
            b = Math.min(
              r.count,
              Math.min(p.start + p.count, u.start + u.count)
            );
          for (let _ = g, E = b; _ < E; _ += 3) {
            const w = r.getX(_),
              L = r.getX(_ + 1),
              O = r.getX(_ + 2);
            (o = Ii(this, d, e, Ut, l, h, w, L, O)),
              o &&
                ((o.faceIndex = Math.floor(_ / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, u.start),
          v = Math.min(r.count, u.start + u.count);
        for (let p = m, d = v; p < d; p += 3) {
          const g = r.getX(p),
            b = r.getX(p + 1),
            _ = r.getX(p + 2);
          (o = Ii(this, i, e, Ut, l, h, g, b, _)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let m = 0, v = f.length; m < v; m++) {
          const p = f[m],
            d = i[p.materialIndex],
            g = Math.max(p.start, u.start),
            b = Math.min(
              c.count,
              Math.min(p.start + p.count, u.start + u.count)
            );
          for (let _ = g, E = b; _ < E; _ += 3) {
            const w = _,
              L = _ + 1,
              O = _ + 2;
            (o = Ii(this, d, e, Ut, l, h, w, L, O)),
              o &&
                ((o.faceIndex = Math.floor(_ / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, u.start),
          v = Math.min(c.count, u.start + u.count);
        for (let p = m, d = v; p < d; p += 3) {
          const g = p,
            b = p + 1,
            _ = p + 2;
          (o = Ii(this, i, e, Ut, l, h, g, b, _)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
  }
}
function El(a, e, t, n, i, s, o, r) {
  let c;
  if (
    (e.side === wt
      ? (c = n.intersectTriangle(o, s, i, !0, r))
      : (c = n.intersectTriangle(i, s, o, e.side === on, r)),
    c === null)
  )
    return null;
  Ri.copy(r), Ri.applyMatrix4(a.matrixWorld);
  const l = t.ray.origin.distanceTo(Ri);
  return l < t.near || l > t.far
    ? null
    : {
        distance: l,
        point: Ri.clone(),
        object: a,
      };
}
function Ii(a, e, t, n, i, s, o, r, c) {
  a.getVertexPosition(o, ri),
    a.getVertexPosition(r, ai),
    a.getVertexPosition(c, oi);
  const l = El(a, e, t, n, ri, ai, oi, Ss);
  if (l) {
    i &&
      (Li.fromBufferAttribute(i, o),
      Di.fromBufferAttribute(i, r),
      Pi.fromBufferAttribute(i, c),
      (l.uv = Kt.getUV(Ss, ri, ai, oi, Li, Di, Pi, new Ee()))),
      s &&
        (Li.fromBufferAttribute(s, o),
        Di.fromBufferAttribute(s, r),
        Pi.fromBufferAttribute(s, c),
        (l.uv2 = Kt.getUV(Ss, ri, ai, oi, Li, Di, Pi, new Ee())));
    const h = {
      a: o,
      b: r,
      c,
      normal: new D(),
      materialIndex: 0,
    };
    Kt.getNormal(ri, ai, oi, h.normal), (l.face = h);
  }
  return l;
}
class Jn extends Nt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: o,
      });
    const r = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (o = Math.floor(o));
    const c = [],
      l = [],
      h = [],
      f = [];
    let u = 0,
      m = 0;
    v("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      v("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      v("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      v("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      v("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      v("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new pt(l, 3)),
      this.setAttribute("normal", new pt(h, 3)),
      this.setAttribute("uv", new pt(f, 2));
    function v(p, d, g, b, _, E, w, L, O, M, T) {
      const F = E / O,
        Y = w / M,
        K = E / 2,
        U = w / 2,
        I = L / 2,
        H = O + 1,
        Z = M + 1;
      let Q = 0,
        X = 0;
      const q = new D();
      for (let J = 0; J < Z; J++) {
        const fe = J * Y - U;
        for (let B = 0; B < H; B++) {
          const $ = B * F - K;
          (q[p] = $ * b),
            (q[d] = fe * _),
            (q[g] = I),
            l.push(q.x, q.y, q.z),
            (q[p] = 0),
            (q[d] = 0),
            (q[g] = L > 0 ? 1 : -1),
            h.push(q.x, q.y, q.z),
            f.push(B / O),
            f.push(1 - J / M),
            (Q += 1);
        }
      }
      for (let J = 0; J < M; J++)
        for (let fe = 0; fe < O; fe++) {
          const B = u + fe + H * J,
            $ = u + fe + H * (J + 1),
            ie = u + (fe + 1) + H * (J + 1),
            N = u + (fe + 1) + H * J;
          c.push(B, $, N), c.push($, ie, N), (X += 6);
        }
      r.addGroup(m, X, T), (m += X), (u += Q);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Jn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function jn(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function ut(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = jn(a[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Al(a) {
  const e = [];
  for (let t = 0; t < a.length; t++) e.push(a[t].clone());
  return e;
}
function Xa(a) {
  return a.getRenderTarget() === null && a.outputEncoding === Ue ? Bt : fi;
}
const Tl = {
  clone: jn,
  merge: ut,
};
var Cl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ll = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class wn extends Kn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Cl),
      (this.fragmentShader = Ll),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = jn(e.uniforms)),
      (this.uniformsGroups = Al(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = {
            type: "t",
            value: o.toJSON(e).uuid,
          })
        : o && o.isColor
        ? (t.uniforms[i] = {
            type: "c",
            value: o.getHex(),
          })
        : o && o.isVector2
        ? (t.uniforms[i] = {
            type: "v2",
            value: o.toArray(),
          })
        : o && o.isVector3
        ? (t.uniforms[i] = {
            type: "v3",
            value: o.toArray(),
          })
        : o && o.isVector4
        ? (t.uniforms[i] = {
            type: "v4",
            value: o.toArray(),
          })
        : o && o.isMatrix3
        ? (t.uniforms[i] = {
            type: "m3",
            value: o.toArray(),
          })
        : o && o.isMatrix4
        ? (t.uniforms[i] = {
            type: "m4",
            value: o.toArray(),
          })
        : (t.uniforms[i] = {
            value: o,
          });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Xs extends it {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new qe()),
      (this.projectionMatrix = new qe()),
      (this.projectionMatrixInverse = new qe());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class St extends Xs {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Bs * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ss * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(Math.tan(ss * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ss * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth,
        l = o.fullHeight;
      (s += (o.offsetX * i) / c),
        (t -= (o.offsetY * n) / l),
        (i *= o.width / c),
        (n *= o.height / l);
    }
    const r = this.filmOffset;
    r !== 0 && (s += (e * r) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const On = -90,
  Un = 1;
class Dl extends it {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new St(On, Un, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new St(On, Un, e, t);
    (s.layers = this.layers),
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const o = new St(On, Un, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(0, 1, 0),
      this.add(o);
    const r = new St(On, Un, e, t);
    (r.layers = this.layers),
      r.up.set(0, 0, 1),
      r.lookAt(0, -1, 0),
      this.add(r);
    const c = new St(On, Un, e, t);
    (c.layers = this.layers), c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new St(On, Un, e, t);
    (l.layers = this.layers),
      l.up.set(0, 1, 0),
      l.lookAt(0, 0, -1),
      this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, o, r, c, l] = this.children,
      h = e.getRenderTarget(),
      f = e.toneMapping,
      u = e.xr.enabled;
    (e.toneMapping = Jt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, r),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(h),
      (e.toneMapping = f),
      (e.xr.enabled = u),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Ya extends Et {
  constructor(e, t, n, i, s, o, r, c, l, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Yn),
      super(e, t, n, i, s, o, r, c, l, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Pl extends Sn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = {
        width: e,
        height: e,
        depth: 1,
      },
      i = [n, n, n, n, n, n];
    (this.texture = new Ya(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ct);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: {
          tEquirect: {
            value: null,
          },
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Jn(5, 5, 5),
      s = new wn({
        name: "CubemapFromEquirect",
        uniforms: jn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: wt,
        blending: an,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Vt(i, s),
      r = t.minFilter;
    return (
      t.minFilter === ui && (t.minFilter = Ct),
      new Dl(1, 10, this).update(e, o),
      (t.minFilter = r),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const ws = new D(),
  Rl = new D(),
  Il = new ft();
class pn {
  constructor(e = new D(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = ws.subVectors(n, t).cross(Rl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ws),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Il.getNormalMatrix(e),
      i = this.coplanarPoint(ws).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Bn = new Hi(),
  Fi = new D();
class Ys {
  constructor(
    e = new pn(),
    t = new pn(),
    n = new pn(),
    i = new pn(),
    s = new pn(),
    o = new pn()
  ) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const r = this.planes;
    return (
      r[0].copy(e),
      r[1].copy(t),
      r[2].copy(n),
      r[3].copy(i),
      r[4].copy(s),
      r[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      o = n[2],
      r = n[3],
      c = n[4],
      l = n[5],
      h = n[6],
      f = n[7],
      u = n[8],
      m = n[9],
      v = n[10],
      p = n[11],
      d = n[12],
      g = n[13],
      b = n[14],
      _ = n[15];
    return (
      t[0].setComponents(r - i, f - c, p - u, _ - d).normalize(),
      t[1].setComponents(r + i, f + c, p + u, _ + d).normalize(),
      t[2].setComponents(r + s, f + l, p + m, _ + g).normalize(),
      t[3].setComponents(r - s, f - l, p - m, _ - g).normalize(),
      t[4].setComponents(r - o, f - h, p - v, _ - b).normalize(),
      t[5].setComponents(r + o, f + h, p + v, _ + b).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Bn)
    );
  }
  intersectsSprite(e) {
    return (
      Bn.center.set(0, 0, 0),
      (Bn.radius = 0.7071067811865476),
      Bn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Bn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Fi.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Fi.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Fi.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Fi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function qa() {
  let a = null,
    e = !1,
    t = null,
    n = null;
  function i(s, o) {
    t(s, o), (n = a.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = a.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      a.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      a = s;
    },
  };
}
function Fl(a, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(l, h) {
    const f = l.array,
      u = l.usage,
      m = a.createBuffer();
    a.bindBuffer(h, m), a.bufferData(h, f, u), l.onUploadCallback();
    let v;
    if (f instanceof Float32Array) v = 5126;
    else if (f instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t) v = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else v = 5123;
    else if (f instanceof Int16Array) v = 5122;
    else if (f instanceof Uint32Array) v = 5125;
    else if (f instanceof Int32Array) v = 5124;
    else if (f instanceof Int8Array) v = 5120;
    else if (f instanceof Uint8Array) v = 5121;
    else if (f instanceof Uint8ClampedArray) v = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + f
      );
    return {
      buffer: m,
      type: v,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: l.version,
    };
  }
  function s(l, h, f) {
    const u = h.array,
      m = h.updateRange;
    a.bindBuffer(f, l),
      m.count === -1
        ? a.bufferSubData(f, 0, u)
        : (t
            ? a.bufferSubData(
                f,
                m.offset * u.BYTES_PER_ELEMENT,
                u,
                m.offset,
                m.count
              )
            : a.bufferSubData(
                f,
                m.offset * u.BYTES_PER_ELEMENT,
                u.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function r(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (a.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const u = n.get(l);
      (!u || u.version < l.version) &&
        n.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const f = n.get(l);
    f === void 0
      ? n.set(l, i(l, h))
      : f.version < l.version && (s(f.buffer, l, h), (f.version = l.version));
  }
  return {
    get: o,
    remove: r,
    update: c,
  };
}
class qs extends Nt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      o = t / 2,
      r = Math.floor(n),
      c = Math.floor(i),
      l = r + 1,
      h = c + 1,
      f = e / r,
      u = t / c,
      m = [],
      v = [],
      p = [],
      d = [];
    for (let g = 0; g < h; g++) {
      const b = g * u - o;
      for (let _ = 0; _ < l; _++) {
        const E = _ * f - s;
        v.push(E, -b, 0), p.push(0, 0, 1), d.push(_ / r), d.push(1 - g / c);
      }
    }
    for (let g = 0; g < c; g++)
      for (let b = 0; b < r; b++) {
        const _ = b + l * g,
          E = b + l * (g + 1),
          w = b + 1 + l * (g + 1),
          L = b + 1 + l * g;
        m.push(_, E, L), m.push(E, w, L);
      }
    this.setIndex(m),
      this.setAttribute("position", new pt(v, 3)),
      this.setAttribute("normal", new pt(p, 3)),
      this.setAttribute("uv", new pt(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new qs(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Nl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  zl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ol = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Ul = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Bl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  kl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Gl = "vec3 transformed = vec3( position );",
  Vl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Hl = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  Wl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Xl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Yl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  ql = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  $l = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  jl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Zl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Kl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Jl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Ql = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  ec = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  tc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  nc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  ic = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  sc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  rc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  ac = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  oc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  lc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  cc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  hc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  uc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  dc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  fc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  pc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  mc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  gc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  _c = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  xc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  vc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Mc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  yc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  bc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Sc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  wc = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Ec = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Ac = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Tc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Cc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Lc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  Dc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Pc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Rc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Ic = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Fc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Nc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  zc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Oc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Uc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Bc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  kc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Gc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Vc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Hc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Wc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Xc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Yc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  qc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  $c = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  jc = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Zc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Kc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Jc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Qc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  eh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  th = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  nh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  ih = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  sh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  rh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  ah = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  oh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  lh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  ch = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  hh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  uh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  dh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  fh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  ph = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  mh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  gh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  _h = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  xh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  vh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Mh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  yh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  bh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Sh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  wh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  Eh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Ah = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Th = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Ch = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Lh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Dh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Ph = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  Rh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ih = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Fh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Nh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  zh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Oh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Uh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Bh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  kh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Gh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Vh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Hh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Wh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Xh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Yh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  qh = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  $h = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  jh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Zh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Kh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Jh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Qh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  eu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  tu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  nu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  iu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  su = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ru = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  au = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ou = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  lu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  cu = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  uu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  du = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  be = {
    alphamap_fragment: Nl,
    alphamap_pars_fragment: zl,
    alphatest_fragment: Ol,
    alphatest_pars_fragment: Ul,
    aomap_fragment: Bl,
    aomap_pars_fragment: kl,
    begin_vertex: Gl,
    beginnormal_vertex: Vl,
    bsdfs: Hl,
    iridescence_fragment: Wl,
    bumpmap_pars_fragment: Xl,
    clipping_planes_fragment: Yl,
    clipping_planes_pars_fragment: ql,
    clipping_planes_pars_vertex: $l,
    clipping_planes_vertex: jl,
    color_fragment: Zl,
    color_pars_fragment: Kl,
    color_pars_vertex: Jl,
    color_vertex: Ql,
    common: ec,
    cube_uv_reflection_fragment: tc,
    defaultnormal_vertex: nc,
    displacementmap_pars_vertex: ic,
    displacementmap_vertex: sc,
    emissivemap_fragment: rc,
    emissivemap_pars_fragment: ac,
    encodings_fragment: oc,
    encodings_pars_fragment: lc,
    envmap_fragment: cc,
    envmap_common_pars_fragment: hc,
    envmap_pars_fragment: uc,
    envmap_pars_vertex: dc,
    envmap_physical_pars_fragment: wc,
    envmap_vertex: fc,
    fog_vertex: pc,
    fog_pars_vertex: mc,
    fog_fragment: gc,
    fog_pars_fragment: _c,
    gradientmap_pars_fragment: xc,
    lightmap_fragment: vc,
    lightmap_pars_fragment: Mc,
    lights_lambert_fragment: yc,
    lights_lambert_pars_fragment: bc,
    lights_pars_begin: Sc,
    lights_toon_fragment: Ec,
    lights_toon_pars_fragment: Ac,
    lights_phong_fragment: Tc,
    lights_phong_pars_fragment: Cc,
    lights_physical_fragment: Lc,
    lights_physical_pars_fragment: Dc,
    lights_fragment_begin: Pc,
    lights_fragment_maps: Rc,
    lights_fragment_end: Ic,
    logdepthbuf_fragment: Fc,
    logdepthbuf_pars_fragment: Nc,
    logdepthbuf_pars_vertex: zc,
    logdepthbuf_vertex: Oc,
    map_fragment: Uc,
    map_pars_fragment: Bc,
    map_particle_fragment: kc,
    map_particle_pars_fragment: Gc,
    metalnessmap_fragment: Vc,
    metalnessmap_pars_fragment: Hc,
    morphcolor_vertex: Wc,
    morphnormal_vertex: Xc,
    morphtarget_pars_vertex: Yc,
    morphtarget_vertex: qc,
    normal_fragment_begin: $c,
    normal_fragment_maps: jc,
    normal_pars_fragment: Zc,
    normal_pars_vertex: Kc,
    normal_vertex: Jc,
    normalmap_pars_fragment: Qc,
    clearcoat_normal_fragment_begin: eh,
    clearcoat_normal_fragment_maps: th,
    clearcoat_pars_fragment: nh,
    iridescence_pars_fragment: ih,
    output_fragment: sh,
    packing: rh,
    premultiplied_alpha_fragment: ah,
    project_vertex: oh,
    dithering_fragment: lh,
    dithering_pars_fragment: ch,
    roughnessmap_fragment: hh,
    roughnessmap_pars_fragment: uh,
    shadowmap_pars_fragment: dh,
    shadowmap_pars_vertex: fh,
    shadowmap_vertex: ph,
    shadowmask_pars_fragment: mh,
    skinbase_vertex: gh,
    skinning_pars_vertex: _h,
    skinning_vertex: xh,
    skinnormal_vertex: vh,
    specularmap_fragment: Mh,
    specularmap_pars_fragment: yh,
    tonemapping_fragment: bh,
    tonemapping_pars_fragment: Sh,
    transmission_fragment: wh,
    transmission_pars_fragment: Eh,
    uv_pars_fragment: Ah,
    uv_pars_vertex: Th,
    uv_vertex: Ch,
    uv2_pars_fragment: Lh,
    uv2_pars_vertex: Dh,
    uv2_vertex: Ph,
    worldpos_vertex: Rh,
    background_vert: Ih,
    background_frag: Fh,
    backgroundCube_vert: Nh,
    backgroundCube_frag: zh,
    cube_vert: Oh,
    cube_frag: Uh,
    depth_vert: Bh,
    depth_frag: kh,
    distanceRGBA_vert: Gh,
    distanceRGBA_frag: Vh,
    equirect_vert: Hh,
    equirect_frag: Wh,
    linedashed_vert: Xh,
    linedashed_frag: Yh,
    meshbasic_vert: qh,
    meshbasic_frag: $h,
    meshlambert_vert: jh,
    meshlambert_frag: Zh,
    meshmatcap_vert: Kh,
    meshmatcap_frag: Jh,
    meshnormal_vert: Qh,
    meshnormal_frag: eu,
    meshphong_vert: tu,
    meshphong_frag: nu,
    meshphysical_vert: iu,
    meshphysical_frag: su,
    meshtoon_vert: ru,
    meshtoon_frag: au,
    points_vert: ou,
    points_frag: lu,
    shadow_vert: cu,
    shadow_frag: hu,
    sprite_vert: uu,
    sprite_frag: du,
  },
  ne = {
    common: {
      diffuse: {
        value: new Ie(16777215),
      },
      opacity: {
        value: 1,
      },
      map: {
        value: null,
      },
      uvTransform: {
        value: new ft(),
      },
      uv2Transform: {
        value: new ft(),
      },
      alphaMap: {
        value: null,
      },
      alphaTest: {
        value: 0,
      },
    },
    specularmap: {
      specularMap: {
        value: null,
      },
    },
    envmap: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
      reflectivity: {
        value: 1,
      },
      ior: {
        value: 1.5,
      },
      refractionRatio: {
        value: 0.98,
      },
    },
    aomap: {
      aoMap: {
        value: null,
      },
      aoMapIntensity: {
        value: 1,
      },
    },
    lightmap: {
      lightMap: {
        value: null,
      },
      lightMapIntensity: {
        value: 1,
      },
    },
    emissivemap: {
      emissiveMap: {
        value: null,
      },
    },
    bumpmap: {
      bumpMap: {
        value: null,
      },
      bumpScale: {
        value: 1,
      },
    },
    normalmap: {
      normalMap: {
        value: null,
      },
      normalScale: {
        value: new Ee(1, 1),
      },
    },
    displacementmap: {
      displacementMap: {
        value: null,
      },
      displacementScale: {
        value: 1,
      },
      displacementBias: {
        value: 0,
      },
    },
    roughnessmap: {
      roughnessMap: {
        value: null,
      },
    },
    metalnessmap: {
      metalnessMap: {
        value: null,
      },
    },
    gradientmap: {
      gradientMap: {
        value: null,
      },
    },
    fog: {
      fogDensity: {
        value: 25e-5,
      },
      fogNear: {
        value: 1,
      },
      fogFar: {
        value: 2e3,
      },
      fogColor: {
        value: new Ie(16777215),
      },
    },
    lights: {
      ambientLightColor: {
        value: [],
      },
      lightProbe: {
        value: [],
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
        },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: {
        value: [],
      },
      directionalShadowMatrix: {
        value: [],
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: {
        value: [],
      },
      spotShadowMap: {
        value: [],
      },
      spotLightMatrix: {
        value: [],
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
        },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: {
        value: [],
      },
      pointShadowMatrix: {
        value: [],
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {},
        },
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {},
        },
      },
      ltc_1: {
        value: null,
      },
      ltc_2: {
        value: null,
      },
    },
    points: {
      diffuse: {
        value: new Ie(16777215),
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 1,
      },
      scale: {
        value: 1,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      alphaTest: {
        value: 0,
      },
      uvTransform: {
        value: new ft(),
      },
    },
    sprite: {
      diffuse: {
        value: new Ie(16777215),
      },
      opacity: {
        value: 1,
      },
      center: {
        value: new Ee(0.5, 0.5),
      },
      rotation: {
        value: 0,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      alphaTest: {
        value: 0,
      },
      uvTransform: {
        value: new ft(),
      },
    },
  },
  kt = {
    basic: {
      uniforms: ut([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.fog,
      ]),
      vertexShader: be.meshbasic_vert,
      fragmentShader: be.meshbasic_frag,
    },
    lambert: {
      uniforms: ut([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        ne.lights,
        {
          emissive: {
            value: new Ie(0),
          },
        },
      ]),
      vertexShader: be.meshlambert_vert,
      fragmentShader: be.meshlambert_frag,
    },
    phong: {
      uniforms: ut([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        ne.lights,
        {
          emissive: {
            value: new Ie(0),
          },
          specular: {
            value: new Ie(1118481),
          },
          shininess: {
            value: 30,
          },
        },
      ]),
      vertexShader: be.meshphong_vert,
      fragmentShader: be.meshphong_frag,
    },
    standard: {
      uniforms: ut([
        ne.common,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.roughnessmap,
        ne.metalnessmap,
        ne.fog,
        ne.lights,
        {
          emissive: {
            value: new Ie(0),
          },
          roughness: {
            value: 1,
          },
          metalness: {
            value: 0,
          },
          envMapIntensity: {
            value: 1,
          },
        },
      ]),
      vertexShader: be.meshphysical_vert,
      fragmentShader: be.meshphysical_frag,
    },
    toon: {
      uniforms: ut([
        ne.common,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.gradientmap,
        ne.fog,
        ne.lights,
        {
          emissive: {
            value: new Ie(0),
          },
        },
      ]),
      vertexShader: be.meshtoon_vert,
      fragmentShader: be.meshtoon_frag,
    },
    matcap: {
      uniforms: ut([
        ne.common,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        {
          matcap: {
            value: null,
          },
        },
      ]),
      vertexShader: be.meshmatcap_vert,
      fragmentShader: be.meshmatcap_frag,
    },
    points: {
      uniforms: ut([ne.points, ne.fog]),
      vertexShader: be.points_vert,
      fragmentShader: be.points_frag,
    },
    dashed: {
      uniforms: ut([
        ne.common,
        ne.fog,
        {
          scale: {
            value: 1,
          },
          dashSize: {
            value: 1,
          },
          totalSize: {
            value: 2,
          },
        },
      ]),
      vertexShader: be.linedashed_vert,
      fragmentShader: be.linedashed_frag,
    },
    depth: {
      uniforms: ut([ne.common, ne.displacementmap]),
      vertexShader: be.depth_vert,
      fragmentShader: be.depth_frag,
    },
    normal: {
      uniforms: ut([
        ne.common,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        {
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: be.meshnormal_vert,
      fragmentShader: be.meshnormal_frag,
    },
    sprite: {
      uniforms: ut([ne.sprite, ne.fog]),
      vertexShader: be.sprite_vert,
      fragmentShader: be.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new ft(),
        },
        t2D: {
          value: null,
        },
        backgroundIntensity: {
          value: 1,
        },
      },
      vertexShader: be.background_vert,
      fragmentShader: be.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null,
        },
        flipEnvMap: {
          value: -1,
        },
        backgroundBlurriness: {
          value: 0,
        },
        backgroundIntensity: {
          value: 1,
        },
      },
      vertexShader: be.backgroundCube_vert,
      fragmentShader: be.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: {
          value: null,
        },
        tFlip: {
          value: -1,
        },
        opacity: {
          value: 1,
        },
      },
      vertexShader: be.cube_vert,
      fragmentShader: be.cube_frag,
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null,
        },
      },
      vertexShader: be.equirect_vert,
      fragmentShader: be.equirect_frag,
    },
    distanceRGBA: {
      uniforms: ut([
        ne.common,
        ne.displacementmap,
        {
          referencePosition: {
            value: new D(),
          },
          nearDistance: {
            value: 1,
          },
          farDistance: {
            value: 1e3,
          },
        },
      ]),
      vertexShader: be.distanceRGBA_vert,
      fragmentShader: be.distanceRGBA_frag,
    },
    shadow: {
      uniforms: ut([
        ne.lights,
        ne.fog,
        {
          color: {
            value: new Ie(0),
          },
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: be.shadow_vert,
      fragmentShader: be.shadow_frag,
    },
  };
kt.physical = {
  uniforms: ut([
    kt.standard.uniforms,
    {
      clearcoat: {
        value: 0,
      },
      clearcoatMap: {
        value: null,
      },
      clearcoatRoughness: {
        value: 0,
      },
      clearcoatRoughnessMap: {
        value: null,
      },
      clearcoatNormalScale: {
        value: new Ee(1, 1),
      },
      clearcoatNormalMap: {
        value: null,
      },
      iridescence: {
        value: 0,
      },
      iridescenceMap: {
        value: null,
      },
      iridescenceIOR: {
        value: 1.3,
      },
      iridescenceThicknessMinimum: {
        value: 100,
      },
      iridescenceThicknessMaximum: {
        value: 400,
      },
      iridescenceThicknessMap: {
        value: null,
      },
      sheen: {
        value: 0,
      },
      sheenColor: {
        value: new Ie(0),
      },
      sheenColorMap: {
        value: null,
      },
      sheenRoughness: {
        value: 1,
      },
      sheenRoughnessMap: {
        value: null,
      },
      transmission: {
        value: 0,
      },
      transmissionMap: {
        value: null,
      },
      transmissionSamplerSize: {
        value: new Ee(),
      },
      transmissionSamplerMap: {
        value: null,
      },
      thickness: {
        value: 0,
      },
      thicknessMap: {
        value: null,
      },
      attenuationDistance: {
        value: 0,
      },
      attenuationColor: {
        value: new Ie(0),
      },
      specularIntensity: {
        value: 1,
      },
      specularIntensityMap: {
        value: null,
      },
      specularColor: {
        value: new Ie(1, 1, 1),
      },
      specularColorMap: {
        value: null,
      },
    },
  ]),
  vertexShader: be.meshphysical_vert,
  fragmentShader: be.meshphysical_frag,
};
const Ni = {
  r: 0,
  b: 0,
  g: 0,
};
function fu(a, e, t, n, i, s, o) {
  const r = new Ie(0);
  let c = s === !0 ? 0 : 1,
    l,
    h,
    f = null,
    u = 0,
    m = null;
  function v(d, g) {
    let b = !1,
      _ = g.isScene === !0 ? g.background : null;
    _ && _.isTexture && (_ = (g.backgroundBlurriness > 0 ? t : e).get(_));
    const E = a.xr,
      w = E.getSession && E.getSession();
    w && w.environmentBlendMode === "additive" && (_ = null),
      _ === null ? p(r, c) : _ && _.isColor && (p(_, 1), (b = !0)),
      (a.autoClear || b) &&
        a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil),
      _ && (_.isCubeTexture || _.mapping === Vi)
        ? (h === void 0 &&
            ((h = new Vt(
              new Jn(1, 1, 1),
              new wn({
                name: "BackgroundCubeMaterial",
                uniforms: jn(kt.backgroundCube.uniforms),
                vertexShader: kt.backgroundCube.vertexShader,
                fragmentShader: kt.backgroundCube.fragmentShader,
                side: wt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            h.geometry.deleteAttribute("normal"),
            h.geometry.deleteAttribute("uv"),
            (h.onBeforeRender = function (L, O, M) {
              this.matrixWorld.copyPosition(M.matrixWorld);
            }),
            Object.defineProperty(h.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(h)),
          (h.material.uniforms.envMap.value = _),
          (h.material.uniforms.flipEnvMap.value =
            _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
          (h.material.uniforms.backgroundBlurriness.value =
            g.backgroundBlurriness),
          (h.material.uniforms.backgroundIntensity.value =
            g.backgroundIntensity),
          (h.material.toneMapped = _.encoding !== Ue),
          (f !== _ || u !== _.version || m !== a.toneMapping) &&
            ((h.material.needsUpdate = !0),
            (f = _),
            (u = _.version),
            (m = a.toneMapping)),
          h.layers.enableAll(),
          d.unshift(h, h.geometry, h.material, 0, 0, null))
        : _ &&
          _.isTexture &&
          (l === void 0 &&
            ((l = new Vt(
              new qs(2, 2),
              new wn({
                name: "BackgroundMaterial",
                uniforms: jn(kt.background.uniforms),
                vertexShader: kt.background.vertexShader,
                fragmentShader: kt.background.fragmentShader,
                side: on,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = _),
          (l.material.uniforms.backgroundIntensity.value =
            g.backgroundIntensity),
          (l.material.toneMapped = _.encoding !== Ue),
          _.matrixAutoUpdate === !0 && _.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(_.matrix),
          (f !== _ || u !== _.version || m !== a.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (f = _),
            (u = _.version),
            (m = a.toneMapping)),
          l.layers.enableAll(),
          d.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(d, g) {
    d.getRGB(Ni, Xa(a)), n.buffers.color.setClear(Ni.r, Ni.g, Ni.b, g, o);
  }
  return {
    getClearColor: function () {
      return r;
    },
    setClearColor: function (d, g = 1) {
      r.set(d), (c = g), p(r, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (d) {
      (c = d), p(r, c);
    },
    render: v,
  };
}
function pu(a, e, t, n) {
  const i = a.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    r = {},
    c = d(null);
  let l = c,
    h = !1;
  function f(I, H, Z, Q, X) {
    let q = !1;
    if (o) {
      const J = p(Q, Z, H);
      l !== J && ((l = J), m(l.object)),
        (q = g(I, Q, Z, X)),
        q && b(I, Q, Z, X);
    } else {
      const J = H.wireframe === !0;
      (l.geometry !== Q.id || l.program !== Z.id || l.wireframe !== J) &&
        ((l.geometry = Q.id), (l.program = Z.id), (l.wireframe = J), (q = !0));
    }
    X !== null && t.update(X, 34963),
      (q || h) &&
        ((h = !1),
        M(I, H, Z, Q),
        X !== null && a.bindBuffer(34963, t.get(X).buffer));
  }
  function u() {
    return n.isWebGL2 ? a.createVertexArray() : s.createVertexArrayOES();
  }
  function m(I) {
    return n.isWebGL2 ? a.bindVertexArray(I) : s.bindVertexArrayOES(I);
  }
  function v(I) {
    return n.isWebGL2 ? a.deleteVertexArray(I) : s.deleteVertexArrayOES(I);
  }
  function p(I, H, Z) {
    const Q = Z.wireframe === !0;
    let X = r[I.id];
    X === void 0 && ((X = {}), (r[I.id] = X));
    let q = X[H.id];
    q === void 0 && ((q = {}), (X[H.id] = q));
    let J = q[Q];
    return J === void 0 && ((J = d(u())), (q[Q] = J)), J;
  }
  function d(I) {
    const H = [],
      Z = [],
      Q = [];
    for (let X = 0; X < i; X++) (H[X] = 0), (Z[X] = 0), (Q[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: Z,
      attributeDivisors: Q,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function g(I, H, Z, Q) {
    const X = l.attributes,
      q = H.attributes;
    let J = 0;
    const fe = Z.getAttributes();
    for (const B in fe)
      if (fe[B].location >= 0) {
        const ie = X[B];
        let N = q[B];
        if (
          (N === void 0 &&
            (B === "instanceMatrix" &&
              I.instanceMatrix &&
              (N = I.instanceMatrix),
            B === "instanceColor" && I.instanceColor && (N = I.instanceColor)),
          ie === void 0 || ie.attribute !== N || (N && ie.data !== N.data))
        )
          return !0;
        J++;
      }
    return l.attributesNum !== J || l.index !== Q;
  }
  function b(I, H, Z, Q) {
    const X = {},
      q = H.attributes;
    let J = 0;
    const fe = Z.getAttributes();
    for (const B in fe)
      if (fe[B].location >= 0) {
        let ie = q[B];
        ie === void 0 &&
          (B === "instanceMatrix" &&
            I.instanceMatrix &&
            (ie = I.instanceMatrix),
          B === "instanceColor" && I.instanceColor && (ie = I.instanceColor));
        const N = {};
        (N.attribute = ie),
          ie && ie.data && (N.data = ie.data),
          (X[B] = N),
          J++;
      }
    (l.attributes = X), (l.attributesNum = J), (l.index = Q);
  }
  function _() {
    const I = l.newAttributes;
    for (let H = 0, Z = I.length; H < Z; H++) I[H] = 0;
  }
  function E(I) {
    w(I, 0);
  }
  function w(I, H) {
    const Z = l.newAttributes,
      Q = l.enabledAttributes,
      X = l.attributeDivisors;
    (Z[I] = 1),
      Q[I] === 0 && (a.enableVertexAttribArray(I), (Q[I] = 1)),
      X[I] !== H &&
        ((n.isWebGL2 ? a : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](I, H),
        (X[I] = H));
  }
  function L() {
    const I = l.newAttributes,
      H = l.enabledAttributes;
    for (let Z = 0, Q = H.length; Z < Q; Z++)
      H[Z] !== I[Z] && (a.disableVertexAttribArray(Z), (H[Z] = 0));
  }
  function O(I, H, Z, Q, X, q) {
    n.isWebGL2 === !0 && (Z === 5124 || Z === 5125)
      ? a.vertexAttribIPointer(I, H, Z, X, q)
      : a.vertexAttribPointer(I, H, Z, Q, X, q);
  }
  function M(I, H, Z, Q) {
    if (
      n.isWebGL2 === !1 &&
      (I.isInstancedMesh || Q.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    _();
    const X = Q.attributes,
      q = Z.getAttributes(),
      J = H.defaultAttributeValues;
    for (const fe in q) {
      const B = q[fe];
      if (B.location >= 0) {
        let $ = X[fe];
        if (
          ($ === void 0 &&
            (fe === "instanceMatrix" &&
              I.instanceMatrix &&
              ($ = I.instanceMatrix),
            fe === "instanceColor" && I.instanceColor && ($ = I.instanceColor)),
          $ !== void 0)
        ) {
          const ie = $.normalized,
            N = $.itemSize,
            le = t.get($);
          if (le === void 0) continue;
          const ce = le.buffer,
            ue = le.type,
            he = le.bytesPerElement;
          if ($.isInterleavedBufferAttribute) {
            const ve = $.data,
              ye = ve.stride,
              Se = $.offset;
            if (ve.isInstancedInterleavedBuffer) {
              for (let Pe = 0; Pe < B.locationSize; Pe++)
                w(B.location + Pe, ve.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                Q._maxInstanceCount === void 0 &&
                (Q._maxInstanceCount = ve.meshPerAttribute * ve.count);
            } else
              for (let Pe = 0; Pe < B.locationSize; Pe++) E(B.location + Pe);
            a.bindBuffer(34962, ce);
            for (let Pe = 0; Pe < B.locationSize; Pe++)
              O(
                B.location + Pe,
                N / B.locationSize,
                ue,
                ie,
                ye * he,
                (Se + (N / B.locationSize) * Pe) * he
              );
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let ve = 0; ve < B.locationSize; ve++)
                w(B.location + ve, $.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                Q._maxInstanceCount === void 0 &&
                (Q._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let ve = 0; ve < B.locationSize; ve++) E(B.location + ve);
            a.bindBuffer(34962, ce);
            for (let ve = 0; ve < B.locationSize; ve++)
              O(
                B.location + ve,
                N / B.locationSize,
                ue,
                ie,
                N * he,
                (N / B.locationSize) * ve * he
              );
          }
        } else if (J !== void 0) {
          const ie = J[fe];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                a.vertexAttrib2fv(B.location, ie);
                break;
              case 3:
                a.vertexAttrib3fv(B.location, ie);
                break;
              case 4:
                a.vertexAttrib4fv(B.location, ie);
                break;
              default:
                a.vertexAttrib1fv(B.location, ie);
            }
        }
      }
    }
    L();
  }
  function T() {
    K();
    for (const I in r) {
      const H = r[I];
      for (const Z in H) {
        const Q = H[Z];
        for (const X in Q) v(Q[X].object), delete Q[X];
        delete H[Z];
      }
      delete r[I];
    }
  }
  function F(I) {
    if (r[I.id] === void 0) return;
    const H = r[I.id];
    for (const Z in H) {
      const Q = H[Z];
      for (const X in Q) v(Q[X].object), delete Q[X];
      delete H[Z];
    }
    delete r[I.id];
  }
  function Y(I) {
    for (const H in r) {
      const Z = r[H];
      if (Z[I.id] === void 0) continue;
      const Q = Z[I.id];
      for (const X in Q) v(Q[X].object), delete Q[X];
      delete Z[I.id];
    }
  }
  function K() {
    U(), (h = !0), l !== c && ((l = c), m(l.object));
  }
  function U() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: f,
    reset: K,
    resetDefaultState: U,
    dispose: T,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: Y,
    initAttributes: _,
    enableAttribute: E,
    disableUnusedAttributes: L,
  };
}
function mu(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function r(l, h) {
    a.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, f) {
    if (f === 0) return;
    let u, m;
    if (i) (u = a), (m = "drawArraysInstanced");
    else if (
      ((u = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      u === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    u[m](s, l, h, f), t.update(h, s, f);
  }
  (this.setMode = o), (this.render = r), (this.renderInstances = c);
}
function gu(a, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const O = e.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(O) {
    if (O === "highp") {
      if (
        a.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        a.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      O = "mediump";
    }
    return O === "mediump" &&
      a.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      a.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext;
  let r = t.precision !== void 0 ? t.precision : "highp";
  const c = s(r);
  c !== r &&
    (console.warn(
      "THREE.WebGLRenderer:",
      r,
      "not supported, using",
      c,
      "instead."
    ),
    (r = c));
  const l = o || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    f = a.getParameter(34930),
    u = a.getParameter(35660),
    m = a.getParameter(3379),
    v = a.getParameter(34076),
    p = a.getParameter(34921),
    d = a.getParameter(36347),
    g = a.getParameter(36348),
    b = a.getParameter(36349),
    _ = u > 0,
    E = o || e.has("OES_texture_float"),
    w = _ && E,
    L = o ? a.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: r,
    logarithmicDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: u,
    maxTextureSize: m,
    maxCubemapSize: v,
    maxAttributes: p,
    maxVertexUniforms: d,
    maxVaryings: g,
    maxFragmentUniforms: b,
    vertexTextures: _,
    floatFragmentTextures: E,
    floatVertexTextures: w,
    maxSamples: L,
  };
}
function _u(a) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const o = new pn(),
    r = new ft(),
    c = {
      value: null,
      needsUpdate: !1,
    };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, u) {
      const m = f.length !== 0 || u || n !== 0 || i;
      return (i = u), (n = f.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), h(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, u) {
      t = h(f, u, 0);
    }),
    (this.setState = function (f, u, m) {
      const v = f.clippingPlanes,
        p = f.clipIntersection,
        d = f.clipShadows,
        g = a.get(f);
      if (!i || v === null || v.length === 0 || (s && !d)) s ? h(null) : l();
      else {
        const b = s ? 0 : n,
          _ = b * 4;
        let E = g.clippingState || null;
        (c.value = E), (E = h(v, u, _, m));
        for (let w = 0; w !== _; ++w) E[w] = t[w];
        (g.clippingState = E),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += b);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function h(f, u, m, v) {
    const p = f !== null ? f.length : 0;
    let d = null;
    if (p !== 0) {
      if (((d = c.value), v !== !0 || d === null)) {
        const g = m + p * 4,
          b = u.matrixWorldInverse;
        r.getNormalMatrix(b),
          (d === null || d.length < g) && (d = new Float32Array(g));
        for (let _ = 0, E = m; _ !== p; ++_, E += 4)
          o.copy(f[_]).applyMatrix4(b, r),
            o.normal.toArray(d, E),
            (d[E + 3] = o.constant);
      }
      (c.value = d), (c.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), d;
  }
}
function xu(a) {
  let e = new WeakMap();
  function t(o, r) {
    return r === Fs ? (o.mapping = Yn) : r === Ns && (o.mapping = qn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const r = o.mapping;
      if (r === Fs || r === Ns)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Pl(c.height / 2);
            return (
              l.fromEquirectangularTexture(a, o),
              e.set(o, l),
              o.addEventListener("dispose", i),
              t(l.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const r = o.target;
    r.removeEventListener("dispose", i);
    const c = e.get(r);
    c !== void 0 && (e.delete(r), c.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return {
    get: n,
    dispose: s,
  };
}
class vu extends Xs {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      r = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += l * this.view.offsetX),
        (o = s + l * this.view.width),
        (r -= h * this.view.offsetY),
        (c = r - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, o, r, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Vn = 4,
  Yr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  gn = 20,
  Es = new vu(),
  qr = new Ie();
let As = null;
const mn = (1 + Math.sqrt(5)) / 2,
  kn = 1 / mn,
  $r = [
    new D(1, 1, 1),
    new D(-1, 1, 1),
    new D(1, 1, -1),
    new D(-1, 1, -1),
    new D(0, mn, kn),
    new D(0, mn, -kn),
    new D(kn, 0, mn),
    new D(-kn, 0, mn),
    new D(mn, kn, 0),
    new D(-mn, kn, 0),
  ];
class jr {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (As = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Jr()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Kr()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(As),
      (e.scissorTest = !1),
      zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Yn || e.mapping === qn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (As = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Ct,
        minFilter: Ct,
        generateMipmaps: !1,
        type: di,
        format: It,
        encoding: yn,
        depthBuffer: !1,
      },
      i = Zr(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Zr(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Mu(s)),
        (this._blurMaterial = yu(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Vt(this._lodPlanes[0], e);
    this._renderer.compile(t, Es);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new St(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      f = h.autoClear,
      u = h.toneMapping;
    h.getClearColor(qr), (h.toneMapping = Jt), (h.autoClear = !1);
    const m = new Ws({
        name: "PMREM.Background",
        side: wt,
        depthWrite: !1,
        depthTest: !1,
      }),
      v = new Vt(new Jn(), m);
    let p = !1;
    const d = e.background;
    d
      ? d.isColor && (m.color.copy(d), (e.background = null), (p = !0))
      : (m.color.copy(qr), (p = !0));
    for (let g = 0; g < 6; g++) {
      const b = g % 3;
      b === 0
        ? (r.up.set(0, c[g], 0), r.lookAt(l[g], 0, 0))
        : b === 1
        ? (r.up.set(0, 0, c[g]), r.lookAt(0, l[g], 0))
        : (r.up.set(0, c[g], 0), r.lookAt(0, 0, l[g]));
      const _ = this._cubeSize;
      zi(i, b * _, g > 2 ? _ : 0, _, _),
        h.setRenderTarget(i),
        p && h.render(v, r),
        h.render(e, r);
    }
    v.geometry.dispose(),
      v.material.dispose(),
      (h.toneMapping = u),
      (h.autoClear = f),
      (e.background = d);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Yn || e.mapping === qn;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Jr()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Kr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new Vt(this._lodPlanes[0], s),
      r = s.uniforms;
    r.envMap.value = e;
    const c = this._cubeSize;
    zi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Es);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = $r[(i - 1) % $r.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", s),
      this._halfBlur(o, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, o, r) {
    const c = this._renderer,
      l = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      f = new Vt(this._lodPlanes[i], l),
      u = l.uniforms,
      m = this._sizeLods[n] - 1,
      v = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * gn - 1),
      p = s / v,
      d = isFinite(s) ? 1 + Math.floor(h * p) : gn;
    d > gn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${gn}`
      );
    const g = [];
    let b = 0;
    for (let O = 0; O < gn; ++O) {
      const M = O / p,
        T = Math.exp((-M * M) / 2);
      g.push(T), O === 0 ? (b += T) : O < d && (b += 2 * T);
    }
    for (let O = 0; O < g.length; O++) g[O] = g[O] / b;
    (u.envMap.value = e.texture),
      (u.samples.value = d),
      (u.weights.value = g),
      (u.latitudinal.value = o === "latitudinal"),
      r && (u.poleAxis.value = r);
    const { _lodMax: _ } = this;
    (u.dTheta.value = v), (u.mipInt.value = _ - n);
    const E = this._sizeLods[i],
      w = 3 * E * (i > _ - Vn ? i - _ + Vn : 0),
      L = 4 * (this._cubeSize - E);
    zi(t, w, L, 3 * E, 2 * E), c.setRenderTarget(t), c.render(f, Es);
  }
}
function Mu(a) {
  const e = [],
    t = [],
    n = [];
  let i = a;
  const s = a - Vn + 1 + Yr.length;
  for (let o = 0; o < s; o++) {
    const r = Math.pow(2, i);
    t.push(r);
    let c = 1 / r;
    o > a - Vn ? (c = Yr[o - a + Vn - 1]) : o === 0 && (c = 0), n.push(c);
    const l = 1 / (r - 2),
      h = -l,
      f = 1 + l,
      u = [h, h, f, h, f, f, h, h, f, f, h, f],
      m = 6,
      v = 6,
      p = 3,
      d = 2,
      g = 1,
      b = new Float32Array(p * v * m),
      _ = new Float32Array(d * v * m),
      E = new Float32Array(g * v * m);
    for (let L = 0; L < m; L++) {
      const O = ((L % 3) * 2) / 3 - 1,
        M = L > 2 ? 0 : -1,
        T = [
          O,
          M,
          0,
          O + 2 / 3,
          M,
          0,
          O + 2 / 3,
          M + 1,
          0,
          O,
          M,
          0,
          O + 2 / 3,
          M + 1,
          0,
          O,
          M + 1,
          0,
        ];
      b.set(T, p * v * L), _.set(u, d * v * L);
      const F = [L, L, L, L, L, L];
      E.set(F, g * v * L);
    }
    const w = new Nt();
    w.setAttribute("position", new Ht(b, p)),
      w.setAttribute("uv", new Ht(_, d)),
      w.setAttribute("faceIndex", new Ht(E, g)),
      e.push(w),
      i > Vn && i--;
  }
  return {
    lodPlanes: e,
    sizeLods: t,
    sigmas: n,
  };
}
function Zr(a, e, t) {
  const n = new Sn(a, e, t);
  return (
    (n.texture.mapping = Vi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function zi(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function yu(a, e, t) {
  const n = new Float32Array(gn),
    i = new D(0, 1, 0);
  return new wn({
    name: "SphericalGaussianBlur",
    defines: {
      n: gn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`,
    },
    uniforms: {
      envMap: {
        value: null,
      },
      samples: {
        value: 1,
      },
      weights: {
        value: n,
      },
      latitudinal: {
        value: !1,
      },
      dTheta: {
        value: 0,
      },
      mipInt: {
        value: 0,
      },
      poleAxis: {
        value: i,
      },
    },
    vertexShader: $s(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Kr() {
  return new wn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
    },
    vertexShader: $s(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Jr() {
  return new wn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
    },
    vertexShader: $s(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function $s() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function bu(a) {
  let e = new WeakMap(),
    t = null;
  function n(r) {
    if (r && r.isTexture) {
      const c = r.mapping,
        l = c === Fs || c === Ns,
        h = c === Yn || c === qn;
      if (l || h)
        if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
          r.needsPMREMUpdate = !1;
          let f = e.get(r);
          return (
            t === null && (t = new jr(a)),
            (f = l ? t.fromEquirectangular(r, f) : t.fromCubemap(r, f)),
            e.set(r, f),
            f.texture
          );
        } else {
          if (e.has(r)) return e.get(r).texture;
          {
            const f = r.image;
            if ((l && f && f.height > 0) || (h && f && i(f))) {
              t === null && (t = new jr(a));
              const u = l ? t.fromEquirectangular(r) : t.fromCubemap(r);
              return e.set(r, u), r.addEventListener("dispose", s), u.texture;
            } else return null;
          }
        }
    }
    return r;
  }
  function i(r) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++) r[h] !== void 0 && c++;
    return c === l;
  }
  function s(r) {
    const c = r.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return {
    get: n,
    dispose: o,
  };
}
function Su(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          a.getExtension("WEBGL_depth_texture") ||
          a.getExtension("MOZ_WEBGL_depth_texture") ||
          a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          a.getExtension("EXT_texture_filter_anisotropic") ||
          a.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          a.getExtension("WEBGL_compressed_texture_s3tc") ||
          a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          a.getExtension("WEBGL_compressed_texture_pvrtc") ||
          a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function wu(a, e, t, n) {
  const i = {},
    s = new WeakMap();
  function o(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const v in u.attributes) e.remove(u.attributes[v]);
    u.removeEventListener("dispose", o), delete i[u.id];
    const m = s.get(u);
    m && (e.remove(m), s.delete(u)),
      n.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      t.memory.geometries--;
  }
  function r(f, u) {
    return (
      i[u.id] === !0 ||
        (u.addEventListener("dispose", o),
        (i[u.id] = !0),
        t.memory.geometries++),
      u
    );
  }
  function c(f) {
    const u = f.attributes;
    for (const v in u) e.update(u[v], 34962);
    const m = f.morphAttributes;
    for (const v in m) {
      const p = m[v];
      for (let d = 0, g = p.length; d < g; d++) e.update(p[d], 34962);
    }
  }
  function l(f) {
    const u = [],
      m = f.index,
      v = f.attributes.position;
    let p = 0;
    if (m !== null) {
      const b = m.array;
      p = m.version;
      for (let _ = 0, E = b.length; _ < E; _ += 3) {
        const w = b[_ + 0],
          L = b[_ + 1],
          O = b[_ + 2];
        u.push(w, L, L, O, O, w);
      }
    } else {
      const b = v.array;
      p = v.version;
      for (let _ = 0, E = b.length / 3 - 1; _ < E; _ += 3) {
        const w = _ + 0,
          L = _ + 1,
          O = _ + 2;
        u.push(w, L, L, O, O, w);
      }
    }
    const d = new (za(u) ? Wa : Ha)(u, 1);
    d.version = p;
    const g = s.get(f);
    g && e.remove(g), s.set(f, d);
  }
  function h(f) {
    const u = s.get(f);
    if (u) {
      const m = f.index;
      m !== null && u.version < m.version && l(f);
    } else l(f);
    return s.get(f);
  }
  return {
    get: r,
    update: c,
    getWireframeAttribute: h,
  };
}
function Eu(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  let r, c;
  function l(u) {
    (r = u.type), (c = u.bytesPerElement);
  }
  function h(u, m) {
    a.drawElements(s, m, r, u * c), t.update(m, s, 1);
  }
  function f(u, m, v) {
    if (v === 0) return;
    let p, d;
    if (i) (p = a), (d = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (d = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[d](s, m, r, u * c, v), t.update(m, s, v);
  }
  (this.setMode = o),
    (this.setIndex = l),
    (this.render = h),
    (this.renderInstances = f);
}
function Au(a) {
  const e = {
      geometries: 0,
      textures: 0,
    },
    t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0,
    };
  function n(s, o, r) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += r * (s / 3);
        break;
      case 1:
        t.lines += r * (s / 2);
        break;
      case 3:
        t.lines += r * (s - 1);
        break;
      case 2:
        t.lines += r * s;
        break;
      case 0:
        t.points += r * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Tu(a, e) {
  return a[0] - e[0];
}
function Cu(a, e) {
  return Math.abs(e[1]) - Math.abs(a[1]);
}
function Lu(a, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    o = new nt(),
    r = [];
  for (let l = 0; l < 8; l++) r[l] = [l, 0];
  function c(l, h, f) {
    const u = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        v = m !== void 0 ? m.length : 0;
      let p = s.get(h);
      if (p === void 0 || p.count !== v) {
        let I = function () {
          K.dispose(), s.delete(h), h.removeEventListener("dispose", I);
        };
        p !== void 0 && p.texture.dispose();
        const b = h.morphAttributes.position !== void 0,
          _ = h.morphAttributes.normal !== void 0,
          E = h.morphAttributes.color !== void 0,
          w = h.morphAttributes.position || [],
          L = h.morphAttributes.normal || [],
          O = h.morphAttributes.color || [];
        let M = 0;
        b === !0 && (M = 1), _ === !0 && (M = 2), E === !0 && (M = 3);
        let T = h.attributes.position.count * M,
          F = 1;
        T > e.maxTextureSize &&
          ((F = Math.ceil(T / e.maxTextureSize)), (T = e.maxTextureSize));
        const Y = new Float32Array(T * F * 4 * v),
          K = new Ba(Y, T, F, v);
        (K.type = xn), (K.needsUpdate = !0);
        const U = M * 4;
        for (let H = 0; H < v; H++) {
          const Z = w[H],
            Q = L[H],
            X = O[H],
            q = T * F * 4 * H;
          for (let J = 0; J < Z.count; J++) {
            const fe = J * U;
            b === !0 &&
              (o.fromBufferAttribute(Z, J),
              (Y[q + fe + 0] = o.x),
              (Y[q + fe + 1] = o.y),
              (Y[q + fe + 2] = o.z),
              (Y[q + fe + 3] = 0)),
              _ === !0 &&
                (o.fromBufferAttribute(Q, J),
                (Y[q + fe + 4] = o.x),
                (Y[q + fe + 5] = o.y),
                (Y[q + fe + 6] = o.z),
                (Y[q + fe + 7] = 0)),
              E === !0 &&
                (o.fromBufferAttribute(X, J),
                (Y[q + fe + 8] = o.x),
                (Y[q + fe + 9] = o.y),
                (Y[q + fe + 10] = o.z),
                (Y[q + fe + 11] = X.itemSize === 4 ? o.w : 1));
          }
        }
        (p = {
          count: v,
          texture: K,
          size: new Ee(T, F),
        }),
          s.set(h, p),
          h.addEventListener("dispose", I);
      }
      let d = 0;
      for (let b = 0; b < u.length; b++) d += u[b];
      const g = h.morphTargetsRelative ? 1 : 1 - d;
      f.getUniforms().setValue(a, "morphTargetBaseInfluence", g),
        f.getUniforms().setValue(a, "morphTargetInfluences", u),
        f.getUniforms().setValue(a, "morphTargetsTexture", p.texture, t),
        f.getUniforms().setValue(a, "morphTargetsTextureSize", p.size);
    } else {
      const m = u === void 0 ? 0 : u.length;
      let v = n[h.id];
      if (v === void 0 || v.length !== m) {
        v = [];
        for (let _ = 0; _ < m; _++) v[_] = [_, 0];
        n[h.id] = v;
      }
      for (let _ = 0; _ < m; _++) {
        const E = v[_];
        (E[0] = _), (E[1] = u[_]);
      }
      v.sort(Cu);
      for (let _ = 0; _ < 8; _++)
        _ < m && v[_][1]
          ? ((r[_][0] = v[_][0]), (r[_][1] = v[_][1]))
          : ((r[_][0] = Number.MAX_SAFE_INTEGER), (r[_][1] = 0));
      r.sort(Tu);
      const p = h.morphAttributes.position,
        d = h.morphAttributes.normal;
      let g = 0;
      for (let _ = 0; _ < 8; _++) {
        const E = r[_],
          w = E[0],
          L = E[1];
        w !== Number.MAX_SAFE_INTEGER && L
          ? (p &&
              h.getAttribute("morphTarget" + _) !== p[w] &&
              h.setAttribute("morphTarget" + _, p[w]),
            d &&
              h.getAttribute("morphNormal" + _) !== d[w] &&
              h.setAttribute("morphNormal" + _, d[w]),
            (i[_] = L),
            (g += L))
          : (p &&
              h.hasAttribute("morphTarget" + _) === !0 &&
              h.deleteAttribute("morphTarget" + _),
            d &&
              h.hasAttribute("morphNormal" + _) === !0 &&
              h.deleteAttribute("morphNormal" + _),
            (i[_] = 0));
      }
      const b = h.morphTargetsRelative ? 1 : 1 - g;
      f.getUniforms().setValue(a, "morphTargetBaseInfluence", b),
        f.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: c,
  };
}
function Du(a, e, t, n) {
  let i = new WeakMap();
  function s(c) {
    const l = n.render.frame,
      h = c.geometry,
      f = e.get(c, h);
    return (
      i.get(f) !== l && (e.update(f), i.set(f, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", r) === !1 &&
          c.addEventListener("dispose", r),
        t.update(c.instanceMatrix, 34962),
        c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      f
    );
  }
  function o() {
    i = new WeakMap();
  }
  function r(c) {
    const l = c.target;
    l.removeEventListener("dispose", r),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o,
  };
}
const $a = new Et(),
  ja = new Ba(),
  Za = new ml(),
  Ka = new Ya(),
  Qr = [],
  ea = [],
  ta = new Float32Array(16),
  na = new Float32Array(9),
  ia = new Float32Array(4);
function Qn(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0) return a;
  const i = e * t;
  let s = Qr[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (Qr[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, r = 0; o !== e; ++o) (r += t), a[o].toArray(s, r);
  }
  return s;
}
function $e(a, e) {
  if (a.length !== e.length) return !1;
  for (let t = 0, n = a.length; t < n; t++) if (a[t] !== e[t]) return !1;
  return !0;
}
function je(a, e) {
  for (let t = 0, n = e.length; t < n; t++) a[t] = e[t];
}
function Xi(a, e) {
  let t = ea[e];
  t === void 0 && ((t = new Int32Array(e)), (ea[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = a.allocateTextureUnit();
  return t;
}
function Pu(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), (t[0] = e));
}
function Ru(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (a.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    a.uniform2fv(this.addr, e), je(t, e);
  }
}
function Iu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (a.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (a.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if ($e(t, e)) return;
    a.uniform3fv(this.addr, e), je(t, e);
  }
}
function Fu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (a.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    a.uniform4fv(this.addr, e), je(t, e);
  }
}
function Nu(a, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    a.uniformMatrix2fv(this.addr, !1, e), je(t, e);
  } else {
    if ($e(t, n)) return;
    ia.set(n), a.uniformMatrix2fv(this.addr, !1, ia), je(t, n);
  }
}
function zu(a, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    a.uniformMatrix3fv(this.addr, !1, e), je(t, e);
  } else {
    if ($e(t, n)) return;
    na.set(n), a.uniformMatrix3fv(this.addr, !1, na), je(t, n);
  }
}
function Ou(a, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    a.uniformMatrix4fv(this.addr, !1, e), je(t, e);
  } else {
    if ($e(t, n)) return;
    ta.set(n), a.uniformMatrix4fv(this.addr, !1, ta), je(t, n);
  }
}
function Uu(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), (t[0] = e));
}
function Bu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (a.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    a.uniform2iv(this.addr, e), je(t, e);
  }
}
function ku(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (a.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if ($e(t, e)) return;
    a.uniform3iv(this.addr, e), je(t, e);
  }
}
function Gu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (a.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    a.uniform4iv(this.addr, e), je(t, e);
  }
}
function Vu(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), (t[0] = e));
}
function Hu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (a.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    a.uniform2uiv(this.addr, e), je(t, e);
  }
}
function Wu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (a.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if ($e(t, e)) return;
    a.uniform3uiv(this.addr, e), je(t, e);
  }
}
function Xu(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    a.uniform4uiv(this.addr, e), je(t, e);
  }
}
function Yu(a, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || $a, i);
}
function qu(a, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Za, i);
}
function $u(a, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Ka, i);
}
function ju(a, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || ja, i);
}
function Zu(a) {
  switch (a) {
    case 5126:
      return Pu;
    case 35664:
      return Ru;
    case 35665:
      return Iu;
    case 35666:
      return Fu;
    case 35674:
      return Nu;
    case 35675:
      return zu;
    case 35676:
      return Ou;
    case 5124:
    case 35670:
      return Uu;
    case 35667:
    case 35671:
      return Bu;
    case 35668:
    case 35672:
      return ku;
    case 35669:
    case 35673:
      return Gu;
    case 5125:
      return Vu;
    case 36294:
      return Hu;
    case 36295:
      return Wu;
    case 36296:
      return Xu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yu;
    case 35679:
    case 36299:
    case 36307:
      return qu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $u;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ju;
  }
}
function Ku(a, e) {
  a.uniform1fv(this.addr, e);
}
function Ju(a, e) {
  const t = Qn(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Qu(a, e) {
  const t = Qn(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function ed(a, e) {
  const t = Qn(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function td(a, e) {
  const t = Qn(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function nd(a, e) {
  const t = Qn(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function id(a, e) {
  const t = Qn(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function sd(a, e) {
  a.uniform1iv(this.addr, e);
}
function rd(a, e) {
  a.uniform2iv(this.addr, e);
}
function ad(a, e) {
  a.uniform3iv(this.addr, e);
}
function od(a, e) {
  a.uniform4iv(this.addr, e);
}
function ld(a, e) {
  a.uniform1uiv(this.addr, e);
}
function cd(a, e) {
  a.uniform2uiv(this.addr, e);
}
function hd(a, e) {
  a.uniform3uiv(this.addr, e);
}
function ud(a, e) {
  a.uniform4uiv(this.addr, e);
}
function dd(a, e, t) {
  const n = this.cache,
    i = e.length,
    s = Xi(t, i);
  $e(n, s) || (a.uniform1iv(this.addr, s), je(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || $a, s[o]);
}
function fd(a, e, t) {
  const n = this.cache,
    i = e.length,
    s = Xi(t, i);
  $e(n, s) || (a.uniform1iv(this.addr, s), je(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || Za, s[o]);
}
function pd(a, e, t) {
  const n = this.cache,
    i = e.length,
    s = Xi(t, i);
  $e(n, s) || (a.uniform1iv(this.addr, s), je(n, s));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Ka, s[o]);
}
function md(a, e, t) {
  const n = this.cache,
    i = e.length,
    s = Xi(t, i);
  $e(n, s) || (a.uniform1iv(this.addr, s), je(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || ja, s[o]);
}
function gd(a) {
  switch (a) {
    case 5126:
      return Ku;
    case 35664:
      return Ju;
    case 35665:
      return Qu;
    case 35666:
      return ed;
    case 35674:
      return td;
    case 35675:
      return nd;
    case 35676:
      return id;
    case 5124:
    case 35670:
      return sd;
    case 35667:
    case 35671:
      return rd;
    case 35668:
    case 35672:
      return ad;
    case 35669:
    case 35673:
      return od;
    case 5125:
      return ld;
    case 36294:
      return cd;
    case 36295:
      return hd;
    case 36296:
      return ud;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return dd;
    case 35679:
    case 36299:
    case 36307:
      return fd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return pd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return md;
  }
}
class _d {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = Zu(t.type));
  }
}
class xd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = gd(t.type));
  }
}
class vd {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const r = i[s];
      r.setValue(e, t[r.id], n);
    }
  }
}
const Ts = /(\w+)(\])?(\[|\.)?/g;
function sa(a, e) {
  a.seq.push(e), (a.map[e.id] = e);
}
function Md(a, e, t) {
  const n = a.name,
    i = n.length;
  for (Ts.lastIndex = 0; ; ) {
    const s = Ts.exec(n),
      o = Ts.lastIndex;
    let r = s[1];
    const c = s[2] === "]",
      l = s[3];
    if ((c && (r = r | 0), l === void 0 || (l === "[" && o + 2 === i))) {
      sa(t, l === void 0 ? new _d(r, a, e) : new xd(r, a, e));
      break;
    } else {
      let f = t.map[r];
      f === void 0 && ((f = new vd(r)), sa(t, f)), (t = f);
    }
  }
}
class ki {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, s.name);
      Md(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const r = t[s],
        c = n[r.id];
      c.needsUpdate !== !1 && r.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ra(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
let yd = 0;
function bd(a, e) {
  const t = a.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const r = o + 1;
    n.push(`${r === e ? ">" : " "} ${r}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Sd(a) {
  switch (a) {
    case yn:
      return ["Linear", "( value )"];
    case Ue:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", a),
        ["Linear", "( value )"]
      );
  }
}
function aa(a, e, t) {
  const n = a.getShaderParameter(e, 35713),
    i = a.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      bd(a.getShaderSource(e), o)
    );
  } else return i;
}
function wd(a, e) {
  const t = Sd(e);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Ed(a, e) {
  let t;
  switch (e) {
    case No:
      t = "Linear";
      break;
    case zo:
      t = "Reinhard";
      break;
    case Oo:
      t = "OptimizedCineon";
      break;
    case Uo:
      t = "ACESFilmic";
      break;
    case Bo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Ad(a) {
  return [
    a.extensionDerivatives ||
    !!a.envMapCubeUVHeight ||
    a.bumpMap ||
    a.tangentSpaceNormalMap ||
    a.clearcoatNormalMap ||
    a.flatShading ||
    a.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) &&
    a.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) &&
    a.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(ci).join(`
`);
}
function Td(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Cd(a, e) {
  const t = {},
    n = a.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = a.getActiveAttrib(e, i),
      o = s.name;
    let r = 1;
    s.type === 35674 && (r = 2),
      s.type === 35675 && (r = 3),
      s.type === 35676 && (r = 4),
      (t[o] = {
        type: s.type,
        location: a.getAttribLocation(e, o),
        locationSize: r,
      });
  }
  return t;
}
function ci(a) {
  return a !== "";
}
function oa(a, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function la(a, e) {
  return a
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Ld = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ks(a) {
  return a.replace(Ld, Dd);
}
function Dd(a, e) {
  const t = be[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return ks(t);
}
const Pd =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ca(a) {
  return a.replace(Pd, Rd);
}
function Rd(a, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ha(a) {
  let e =
    "precision " +
    a.precision +
    ` float;
precision ` +
    a.precision +
    " int;";
  return (
    a.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : a.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : a.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Id(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    a.shadowMapType === Ca
      ? (e = "SHADOWMAP_TYPE_PCF")
      : a.shadowMapType === fo
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : a.shadowMapType === li && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Fd(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case Yn:
      case qn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Vi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Nd(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case qn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function zd(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case Pa:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Io:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Fo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Od(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Ud(a, e, t, n) {
  const i = a.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    r = t.fragmentShader;
  const c = Id(t),
    l = Fd(t),
    h = Nd(t),
    f = zd(t),
    u = Od(t),
    m = t.isWebGL2 ? "" : Ad(t),
    v = Td(s),
    p = i.createProgram();
  let d,
    g,
    b = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((d = [v].filter(ci).join(`
`)),
      d.length > 0 &&
        (d += `
`),
      (g = [m, v].filter(ci).join(`
`)),
      g.length > 0 &&
        (g += `
`))
    : ((d = [
        ha(t),
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(ci).join(`
`)),
      (g = [
        m,
        ha(t),
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + f : "",
        u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
        u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
        u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Jt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Jt ? be.tonemapping_pars_fragment : "",
        t.toneMapping !== Jt ? Ed("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        be.encodings_pars_fragment,
        wd("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(ci).join(`
`))),
    (o = ks(o)),
    (o = oa(o, t)),
    (o = la(o, t)),
    (r = ks(r)),
    (r = oa(r, t)),
    (r = la(r, t)),
    (o = ca(o)),
    (r = ca(r)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (d =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        d),
      (g =
        [
          "#define varying in",
          t.glslVersion === Ir
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ir ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        g));
  const _ = b + d + o,
    E = b + g + r,
    w = ra(i, 35633, _),
    L = ra(i, 35632, E);
  if (
    (i.attachShader(p, w),
    i.attachShader(p, L),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p),
    a.debug.checkShaderErrors)
  ) {
    const T = i.getProgramInfoLog(p).trim(),
      F = i.getShaderInfoLog(w).trim(),
      Y = i.getShaderInfoLog(L).trim();
    let K = !0,
      U = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      K = !1;
      const I = aa(i, w, "vertex"),
        H = aa(i, L, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          T +
          `
` +
          I +
          `
` +
          H
      );
    } else
      T !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", T)
        : (F === "" || Y === "") && (U = !1);
    U &&
      (this.diagnostics = {
        runnable: K,
        programLog: T,
        vertexShader: {
          log: F,
          prefix: d,
        },
        fragmentShader: {
          log: Y,
          prefix: g,
        },
      });
  }
  i.deleteShader(w), i.deleteShader(L);
  let O;
  this.getUniforms = function () {
    return O === void 0 && (O = new ki(i, p)), O;
  };
  let M;
  return (
    (this.getAttributes = function () {
      return M === void 0 && (M = Cd(i, p)), M;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = yd++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = w),
    (this.fragmentShader = L),
    this
  );
}
let Bd = 0;
class kd {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Gd(e)), t.set(e, n)), n;
  }
}
class Gd {
  constructor(e) {
    (this.id = Bd++), (this.code = e), (this.usedTimes = 0);
  }
}
function Vd(a, e, t, n, i, s, o) {
  const r = new Ga(),
    c = new kd(),
    l = [],
    h = i.isWebGL2,
    f = i.logarithmicDepthBuffer,
    u = i.vertexTextures;
  let m = i.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(M, T, F, Y, K) {
    const U = Y.fog,
      I = K.geometry,
      H = M.isMeshStandardMaterial ? Y.environment : null,
      Z = (M.isMeshStandardMaterial ? t : e).get(M.envMap || H),
      Q = !!Z && Z.mapping === Vi ? Z.image.height : null,
      X = v[M.type];
    M.precision !== null &&
      ((m = i.getMaxPrecision(M.precision)),
      m !== M.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          M.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const q =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      J = q !== void 0 ? q.length : 0;
    let fe = 0;
    I.morphAttributes.position !== void 0 && (fe = 1),
      I.morphAttributes.normal !== void 0 && (fe = 2),
      I.morphAttributes.color !== void 0 && (fe = 3);
    let B, $, ie, N;
    if (X) {
      const ye = kt[X];
      (B = ye.vertexShader), ($ = ye.fragmentShader);
    } else
      (B = M.vertexShader),
        ($ = M.fragmentShader),
        c.update(M),
        (ie = c.getVertexShaderID(M)),
        (N = c.getFragmentShaderID(M));
    const le = a.getRenderTarget(),
      ce = M.alphaTest > 0,
      ue = M.clearcoat > 0,
      he = M.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: X,
      shaderName: M.type,
      vertexShader: B,
      fragmentShader: $,
      defines: M.defines,
      customVertexShaderID: ie,
      customFragmentShaderID: N,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      instancing: K.isInstancedMesh === !0,
      instancingColor: K.isInstancedMesh === !0 && K.instanceColor !== null,
      supportsVertexTextures: u,
      outputEncoding:
        le === null
          ? a.outputEncoding
          : le.isXRRenderTarget === !0
          ? le.texture.encoding
          : yn,
      map: !!M.map,
      matcap: !!M.matcap,
      envMap: !!Z,
      envMapMode: Z && Z.mapping,
      envMapCubeUVHeight: Q,
      lightMap: !!M.lightMap,
      aoMap: !!M.aoMap,
      emissiveMap: !!M.emissiveMap,
      bumpMap: !!M.bumpMap,
      normalMap: !!M.normalMap,
      objectSpaceNormalMap: M.normalMapType === sl,
      tangentSpaceNormalMap: M.normalMapType === Fa,
      decodeVideoTexture:
        !!M.map && M.map.isVideoTexture === !0 && M.map.encoding === Ue,
      clearcoat: ue,
      clearcoatMap: ue && !!M.clearcoatMap,
      clearcoatRoughnessMap: ue && !!M.clearcoatRoughnessMap,
      clearcoatNormalMap: ue && !!M.clearcoatNormalMap,
      iridescence: he,
      iridescenceMap: he && !!M.iridescenceMap,
      iridescenceThicknessMap: he && !!M.iridescenceThicknessMap,
      displacementMap: !!M.displacementMap,
      roughnessMap: !!M.roughnessMap,
      metalnessMap: !!M.metalnessMap,
      specularMap: !!M.specularMap,
      specularIntensityMap: !!M.specularIntensityMap,
      specularColorMap: !!M.specularColorMap,
      opaque: M.transparent === !1 && M.blending === Hn,
      alphaMap: !!M.alphaMap,
      alphaTest: ce,
      gradientMap: !!M.gradientMap,
      sheen: M.sheen > 0,
      sheenColorMap: !!M.sheenColorMap,
      sheenRoughnessMap: !!M.sheenRoughnessMap,
      transmission: M.transmission > 0,
      transmissionMap: !!M.transmissionMap,
      thicknessMap: !!M.thicknessMap,
      combine: M.combine,
      vertexTangents: !!M.normalMap && !!I.attributes.tangent,
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!I.attributes.color &&
        I.attributes.color.itemSize === 4,
      vertexUvs:
        !!M.map ||
        !!M.bumpMap ||
        !!M.normalMap ||
        !!M.specularMap ||
        !!M.alphaMap ||
        !!M.emissiveMap ||
        !!M.roughnessMap ||
        !!M.metalnessMap ||
        !!M.clearcoatMap ||
        !!M.clearcoatRoughnessMap ||
        !!M.clearcoatNormalMap ||
        !!M.iridescenceMap ||
        !!M.iridescenceThicknessMap ||
        !!M.displacementMap ||
        !!M.transmissionMap ||
        !!M.thicknessMap ||
        !!M.specularIntensityMap ||
        !!M.specularColorMap ||
        !!M.sheenColorMap ||
        !!M.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!M.map ||
          !!M.bumpMap ||
          !!M.normalMap ||
          !!M.specularMap ||
          !!M.alphaMap ||
          !!M.emissiveMap ||
          !!M.roughnessMap ||
          !!M.metalnessMap ||
          !!M.clearcoatNormalMap ||
          !!M.iridescenceMap ||
          !!M.iridescenceThicknessMap ||
          M.transmission > 0 ||
          !!M.transmissionMap ||
          !!M.thicknessMap ||
          !!M.specularIntensityMap ||
          !!M.specularColorMap ||
          M.sheen > 0 ||
          !!M.sheenColorMap ||
          !!M.sheenRoughnessMap
        ) && !!M.displacementMap,
      fog: !!U,
      useFog: M.fog === !0,
      fogExp2: U && U.isFogExp2,
      flatShading: !!M.flatShading,
      sizeAttenuation: M.sizeAttenuation,
      logarithmicDepthBuffer: f,
      skinning: K.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: J,
      morphTextureStride: fe,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: a.shadowMap.enabled && F.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: M.toneMapped ? a.toneMapping : Jt,
      useLegacyLights: a.useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === sn,
      flipSided: M.side === wt,
      useDepthPacking: !!M.depthPacking,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: M.extensions && M.extensions.derivatives,
      extensionFragDepth: M.extensions && M.extensions.fragDepth,
      extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
      extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
  }
  function d(M) {
    const T = [];
    if (
      (M.shaderID
        ? T.push(M.shaderID)
        : (T.push(M.customVertexShaderID), T.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const F in M.defines) T.push(F), T.push(M.defines[F]);
    return (
      M.isRawShaderMaterial === !1 &&
        (g(T, M), b(T, M), T.push(a.outputEncoding)),
      T.push(M.customProgramCacheKey),
      T.join()
    );
  }
  function g(M, T) {
    M.push(T.precision),
      M.push(T.outputEncoding),
      M.push(T.envMapMode),
      M.push(T.envMapCubeUVHeight),
      M.push(T.combine),
      M.push(T.vertexUvs),
      M.push(T.fogExp2),
      M.push(T.sizeAttenuation),
      M.push(T.morphTargetsCount),
      M.push(T.morphAttributeCount),
      M.push(T.numDirLights),
      M.push(T.numPointLights),
      M.push(T.numSpotLights),
      M.push(T.numSpotLightMaps),
      M.push(T.numHemiLights),
      M.push(T.numRectAreaLights),
      M.push(T.numDirLightShadows),
      M.push(T.numPointLightShadows),
      M.push(T.numSpotLightShadows),
      M.push(T.numSpotLightShadowsWithMaps),
      M.push(T.shadowMapType),
      M.push(T.toneMapping),
      M.push(T.numClippingPlanes),
      M.push(T.numClipIntersection),
      M.push(T.depthPacking);
  }
  function b(M, T) {
    r.disableAll(),
      T.isWebGL2 && r.enable(0),
      T.supportsVertexTextures && r.enable(1),
      T.instancing && r.enable(2),
      T.instancingColor && r.enable(3),
      T.map && r.enable(4),
      T.matcap && r.enable(5),
      T.envMap && r.enable(6),
      T.lightMap && r.enable(7),
      T.aoMap && r.enable(8),
      T.emissiveMap && r.enable(9),
      T.bumpMap && r.enable(10),
      T.normalMap && r.enable(11),
      T.objectSpaceNormalMap && r.enable(12),
      T.tangentSpaceNormalMap && r.enable(13),
      T.clearcoat && r.enable(14),
      T.clearcoatMap && r.enable(15),
      T.clearcoatRoughnessMap && r.enable(16),
      T.clearcoatNormalMap && r.enable(17),
      T.iridescence && r.enable(18),
      T.iridescenceMap && r.enable(19),
      T.iridescenceThicknessMap && r.enable(20),
      T.displacementMap && r.enable(21),
      T.specularMap && r.enable(22),
      T.roughnessMap && r.enable(23),
      T.metalnessMap && r.enable(24),
      T.gradientMap && r.enable(25),
      T.alphaMap && r.enable(26),
      T.alphaTest && r.enable(27),
      T.vertexColors && r.enable(28),
      T.vertexAlphas && r.enable(29),
      T.vertexUvs && r.enable(30),
      T.vertexTangents && r.enable(31),
      T.uvsVertexOnly && r.enable(32),
      M.push(r.mask),
      r.disableAll(),
      T.fog && r.enable(0),
      T.useFog && r.enable(1),
      T.flatShading && r.enable(2),
      T.logarithmicDepthBuffer && r.enable(3),
      T.skinning && r.enable(4),
      T.morphTargets && r.enable(5),
      T.morphNormals && r.enable(6),
      T.morphColors && r.enable(7),
      T.premultipliedAlpha && r.enable(8),
      T.shadowMapEnabled && r.enable(9),
      T.useLegacyLights && r.enable(10),
      T.doubleSided && r.enable(11),
      T.flipSided && r.enable(12),
      T.useDepthPacking && r.enable(13),
      T.dithering && r.enable(14),
      T.specularIntensityMap && r.enable(15),
      T.specularColorMap && r.enable(16),
      T.transmission && r.enable(17),
      T.transmissionMap && r.enable(18),
      T.thicknessMap && r.enable(19),
      T.sheen && r.enable(20),
      T.sheenColorMap && r.enable(21),
      T.sheenRoughnessMap && r.enable(22),
      T.decodeVideoTexture && r.enable(23),
      T.opaque && r.enable(24),
      M.push(r.mask);
  }
  function _(M) {
    const T = v[M.type];
    let F;
    if (T) {
      const Y = kt[T];
      F = Tl.clone(Y.uniforms);
    } else F = M.uniforms;
    return F;
  }
  function E(M, T) {
    let F;
    for (let Y = 0, K = l.length; Y < K; Y++) {
      const U = l[Y];
      if (U.cacheKey === T) {
        (F = U), ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && ((F = new Ud(a, T, M, s)), l.push(F)), F;
  }
  function w(M) {
    if (--M.usedTimes === 0) {
      const T = l.indexOf(M);
      (l[T] = l[l.length - 1]), l.pop(), M.destroy();
    }
  }
  function L(M) {
    c.remove(M);
  }
  function O() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: d,
    getUniforms: _,
    acquireProgram: E,
    releaseProgram: w,
    releaseShaderCache: L,
    programs: l,
    dispose: O,
  };
}
function Hd() {
  let a = new WeakMap();
  function e(s) {
    let o = a.get(s);
    return o === void 0 && ((o = {}), a.set(s, o)), o;
  }
  function t(s) {
    a.delete(s);
  }
  function n(s, o, r) {
    a.get(s)[o] = r;
  }
  function i() {
    a = new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i,
  };
}
function Wd(a, e) {
  return a.groupOrder !== e.groupOrder
    ? a.groupOrder - e.groupOrder
    : a.renderOrder !== e.renderOrder
    ? a.renderOrder - e.renderOrder
    : a.material.id !== e.material.id
    ? a.material.id - e.material.id
    : a.z !== e.z
    ? a.z - e.z
    : a.id - e.id;
}
function ua(a, e) {
  return a.groupOrder !== e.groupOrder
    ? a.groupOrder - e.groupOrder
    : a.renderOrder !== e.renderOrder
    ? a.renderOrder - e.renderOrder
    : a.z !== e.z
    ? e.z - a.z
    : a.id - e.id;
}
function da() {
  const a = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(f, u, m, v, p, d) {
    let g = a[e];
    return (
      g === void 0
        ? ((g = {
            id: f.id,
            object: f,
            geometry: u,
            material: m,
            groupOrder: v,
            renderOrder: f.renderOrder,
            z: p,
            group: d,
          }),
          (a[e] = g))
        : ((g.id = f.id),
          (g.object = f),
          (g.geometry = u),
          (g.material = m),
          (g.groupOrder = v),
          (g.renderOrder = f.renderOrder),
          (g.z = p),
          (g.group = d)),
      e++,
      g
    );
  }
  function r(f, u, m, v, p, d) {
    const g = o(f, u, m, v, p, d);
    m.transmission > 0
      ? n.push(g)
      : m.transparent === !0
      ? i.push(g)
      : t.push(g);
  }
  function c(f, u, m, v, p, d) {
    const g = o(f, u, m, v, p, d);
    m.transmission > 0
      ? n.unshift(g)
      : m.transparent === !0
      ? i.unshift(g)
      : t.unshift(g);
  }
  function l(f, u) {
    t.length > 1 && t.sort(f || Wd),
      n.length > 1 && n.sort(u || ua),
      i.length > 1 && i.sort(u || ua);
  }
  function h() {
    for (let f = e, u = a.length; f < u; f++) {
      const m = a[f];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: r,
    unshift: c,
    finish: h,
    sort: l,
  };
}
function Xd() {
  let a = new WeakMap();
  function e(n, i) {
    const s = a.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new da()), a.set(n, [o]))
        : i >= s.length
        ? ((o = new da()), s.push(o))
        : (o = s[i]),
      o
    );
  }
  function t() {
    a = new WeakMap();
  }
  return {
    get: e,
    dispose: t,
  };
}
function Yd() {
  const a = {};
  return {
    get: function (e) {
      if (a[e.id] !== void 0) return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new Ie(),
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new Ie(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new Ie(),
            groundColor: new Ie(),
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D(),
          };
          break;
      }
      return (a[e.id] = t), t;
    },
  };
}
function qd() {
  const a = {};
  return {
    get: function (e) {
      if (a[e.id] !== void 0) return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (a[e.id] = t), t;
    },
  };
}
let $d = 0;
function jd(a, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (a.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (a.map ? 1 : 0)
  );
}
function Zd(a, e) {
  const t = new Yd(),
    n = qd(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let h = 0; h < 9; h++) i.probe.push(new D());
  const s = new D(),
    o = new qe(),
    r = new qe();
  function c(h, f) {
    let u = 0,
      m = 0,
      v = 0;
    for (let Y = 0; Y < 9; Y++) i.probe[Y].set(0, 0, 0);
    let p = 0,
      d = 0,
      g = 0,
      b = 0,
      _ = 0,
      E = 0,
      w = 0,
      L = 0,
      O = 0,
      M = 0;
    h.sort(jd);
    const T = f === !0 ? Math.PI : 1;
    for (let Y = 0, K = h.length; Y < K; Y++) {
      const U = h[Y],
        I = U.color,
        H = U.intensity,
        Z = U.distance,
        Q = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight)
        (u += I.r * H * T), (m += I.g * H * T), (v += I.b * H * T);
      else if (U.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(U.sh.coefficients[X], H);
      else if (U.isDirectionalLight) {
        const X = t.get(U);
        if (
          (X.color.copy(U.color).multiplyScalar(U.intensity * T), U.castShadow)
        ) {
          const q = U.shadow,
            J = n.get(U);
          (J.shadowBias = q.bias),
            (J.shadowNormalBias = q.normalBias),
            (J.shadowRadius = q.radius),
            (J.shadowMapSize = q.mapSize),
            (i.directionalShadow[p] = J),
            (i.directionalShadowMap[p] = Q),
            (i.directionalShadowMatrix[p] = U.shadow.matrix),
            E++;
        }
        (i.directional[p] = X), p++;
      } else if (U.isSpotLight) {
        const X = t.get(U);
        X.position.setFromMatrixPosition(U.matrixWorld),
          X.color.copy(I).multiplyScalar(H * T),
          (X.distance = Z),
          (X.coneCos = Math.cos(U.angle)),
          (X.penumbraCos = Math.cos(U.angle * (1 - U.penumbra))),
          (X.decay = U.decay),
          (i.spot[g] = X);
        const q = U.shadow;
        if (
          (U.map &&
            ((i.spotLightMap[O] = U.map),
            O++,
            q.updateMatrices(U),
            U.castShadow && M++),
          (i.spotLightMatrix[g] = q.matrix),
          U.castShadow)
        ) {
          const J = n.get(U);
          (J.shadowBias = q.bias),
            (J.shadowNormalBias = q.normalBias),
            (J.shadowRadius = q.radius),
            (J.shadowMapSize = q.mapSize),
            (i.spotShadow[g] = J),
            (i.spotShadowMap[g] = Q),
            L++;
        }
        g++;
      } else if (U.isRectAreaLight) {
        const X = t.get(U);
        X.color.copy(I).multiplyScalar(H),
          X.halfWidth.set(U.width * 0.5, 0, 0),
          X.halfHeight.set(0, U.height * 0.5, 0),
          (i.rectArea[b] = X),
          b++;
      } else if (U.isPointLight) {
        const X = t.get(U);
        if (
          (X.color.copy(U.color).multiplyScalar(U.intensity * T),
          (X.distance = U.distance),
          (X.decay = U.decay),
          U.castShadow)
        ) {
          const q = U.shadow,
            J = n.get(U);
          (J.shadowBias = q.bias),
            (J.shadowNormalBias = q.normalBias),
            (J.shadowRadius = q.radius),
            (J.shadowMapSize = q.mapSize),
            (J.shadowCameraNear = q.camera.near),
            (J.shadowCameraFar = q.camera.far),
            (i.pointShadow[d] = J),
            (i.pointShadowMap[d] = Q),
            (i.pointShadowMatrix[d] = U.shadow.matrix),
            w++;
        }
        (i.point[d] = X), d++;
      } else if (U.isHemisphereLight) {
        const X = t.get(U);
        X.skyColor.copy(U.color).multiplyScalar(H * T),
          X.groundColor.copy(U.groundColor).multiplyScalar(H * T),
          (i.hemi[_] = X),
          _++;
      }
    }
    b > 0 &&
      (e.isWebGL2 || a.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ne.LTC_FLOAT_1), (i.rectAreaLTC2 = ne.LTC_FLOAT_2))
        : a.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ne.LTC_HALF_1), (i.rectAreaLTC2 = ne.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = u),
      (i.ambient[1] = m),
      (i.ambient[2] = v);
    const F = i.hash;
    (F.directionalLength !== p ||
      F.pointLength !== d ||
      F.spotLength !== g ||
      F.rectAreaLength !== b ||
      F.hemiLength !== _ ||
      F.numDirectionalShadows !== E ||
      F.numPointShadows !== w ||
      F.numSpotShadows !== L ||
      F.numSpotMaps !== O) &&
      ((i.directional.length = p),
      (i.spot.length = g),
      (i.rectArea.length = b),
      (i.point.length = d),
      (i.hemi.length = _),
      (i.directionalShadow.length = E),
      (i.directionalShadowMap.length = E),
      (i.pointShadow.length = w),
      (i.pointShadowMap.length = w),
      (i.spotShadow.length = L),
      (i.spotShadowMap.length = L),
      (i.directionalShadowMatrix.length = E),
      (i.pointShadowMatrix.length = w),
      (i.spotLightMatrix.length = L + O - M),
      (i.spotLightMap.length = O),
      (i.numSpotLightShadowsWithMaps = M),
      (F.directionalLength = p),
      (F.pointLength = d),
      (F.spotLength = g),
      (F.rectAreaLength = b),
      (F.hemiLength = _),
      (F.numDirectionalShadows = E),
      (F.numPointShadows = w),
      (F.numSpotShadows = L),
      (F.numSpotMaps = O),
      (i.version = $d++));
  }
  function l(h, f) {
    let u = 0,
      m = 0,
      v = 0,
      p = 0,
      d = 0;
    const g = f.matrixWorldInverse;
    for (let b = 0, _ = h.length; b < _; b++) {
      const E = h[b];
      if (E.isDirectionalLight) {
        const w = i.directional[u];
        w.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          w.direction.sub(s),
          w.direction.transformDirection(g),
          u++;
      } else if (E.isSpotLight) {
        const w = i.spot[v];
        w.position.setFromMatrixPosition(E.matrixWorld),
          w.position.applyMatrix4(g),
          w.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          w.direction.sub(s),
          w.direction.transformDirection(g),
          v++;
      } else if (E.isRectAreaLight) {
        const w = i.rectArea[p];
        w.position.setFromMatrixPosition(E.matrixWorld),
          w.position.applyMatrix4(g),
          r.identity(),
          o.copy(E.matrixWorld),
          o.premultiply(g),
          r.extractRotation(o),
          w.halfWidth.set(E.width * 0.5, 0, 0),
          w.halfHeight.set(0, E.height * 0.5, 0),
          w.halfWidth.applyMatrix4(r),
          w.halfHeight.applyMatrix4(r),
          p++;
      } else if (E.isPointLight) {
        const w = i.point[m];
        w.position.setFromMatrixPosition(E.matrixWorld),
          w.position.applyMatrix4(g),
          m++;
      } else if (E.isHemisphereLight) {
        const w = i.hemi[d];
        w.direction.setFromMatrixPosition(E.matrixWorld),
          w.direction.transformDirection(g),
          d++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i,
  };
}
function fa(a, e) {
  const t = new Zd(a, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function o(f) {
    n.push(f);
  }
  function r(f) {
    i.push(f);
  }
  function c(f) {
    t.setup(n, f);
  }
  function l(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t,
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: r,
  };
}
function Kd(a, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const r = t.get(s);
    let c;
    return (
      r === void 0
        ? ((c = new fa(a, e)), t.set(s, [c]))
        : o >= r.length
        ? ((c = new fa(a, e)), r.push(c))
        : (c = r[o]),
      c
    );
  }
  function i() {
    t = new WeakMap();
  }
  return {
    get: n,
    dispose: i,
  };
}
class Jd extends Kn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = nl),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Qd extends Kn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new D()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const ef = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  tf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function nf(a, e, t) {
  let n = new Ys();
  const i = new Ee(),
    s = new Ee(),
    o = new nt(),
    r = new Jd({
      depthPacking: il,
    }),
    c = new Qd(),
    l = {},
    h = t.maxTextureSize,
    f = {
      [on]: wt,
      [wt]: on,
      [sn]: sn,
    },
    u = new wn({
      defines: {
        VSM_SAMPLES: 8,
      },
      uniforms: {
        shadow_pass: {
          value: null,
        },
        resolution: {
          value: new Ee(),
        },
        radius: {
          value: 4,
        },
      },
      vertexShader: ef,
      fragmentShader: tf,
    }),
    m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new Nt();
  v.setAttribute(
    "position",
    new Ht(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new Vt(v, u),
    d = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ca),
    (this.render = function (E, w, L) {
      if (
        d.enabled === !1 ||
        (d.autoUpdate === !1 && d.needsUpdate === !1) ||
        E.length === 0
      )
        return;
      const O = a.getRenderTarget(),
        M = a.getActiveCubeFace(),
        T = a.getActiveMipmapLevel(),
        F = a.state;
      F.setBlending(an),
        F.buffers.color.setClear(1, 1, 1, 1),
        F.buffers.depth.setTest(!0),
        F.setScissorTest(!1);
      for (let Y = 0, K = E.length; Y < K; Y++) {
        const U = E[Y],
          I = U.shadow;
        if (I === void 0) {
          console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
          continue;
        }
        if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
        i.copy(I.mapSize);
        const H = I.getFrameExtents();
        if (
          (i.multiply(H),
          s.copy(I.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((s.x = Math.floor(h / H.x)),
              (i.x = s.x * H.x),
              (I.mapSize.x = s.x)),
            i.y > h &&
              ((s.y = Math.floor(h / H.y)),
              (i.y = s.y * H.y),
              (I.mapSize.y = s.y))),
          I.map === null)
        ) {
          const Q =
            this.type !== li
              ? {
                  minFilter: dt,
                  magFilter: dt,
                }
              : {};
          (I.map = new Sn(i.x, i.y, Q)),
            (I.map.texture.name = U.name + ".shadowMap"),
            I.camera.updateProjectionMatrix();
        }
        a.setRenderTarget(I.map), a.clear();
        const Z = I.getViewportCount();
        for (let Q = 0; Q < Z; Q++) {
          const X = I.getViewport(Q);
          o.set(s.x * X.x, s.y * X.y, s.x * X.z, s.y * X.w),
            F.viewport(o),
            I.updateMatrices(U, Q),
            (n = I.getFrustum()),
            _(w, L, I.camera, U, this.type);
        }
        I.isPointLightShadow !== !0 && this.type === li && g(I, L),
          (I.needsUpdate = !1);
      }
      (d.needsUpdate = !1), a.setRenderTarget(O, M, T);
    });
  function g(E, w) {
    const L = e.update(p);
    u.defines.VSM_SAMPLES !== E.blurSamples &&
      ((u.defines.VSM_SAMPLES = E.blurSamples),
      (m.defines.VSM_SAMPLES = E.blurSamples),
      (u.needsUpdate = !0),
      (m.needsUpdate = !0)),
      E.mapPass === null && (E.mapPass = new Sn(i.x, i.y)),
      (u.uniforms.shadow_pass.value = E.map.texture),
      (u.uniforms.resolution.value = E.mapSize),
      (u.uniforms.radius.value = E.radius),
      a.setRenderTarget(E.mapPass),
      a.clear(),
      a.renderBufferDirect(w, null, L, u, p, null),
      (m.uniforms.shadow_pass.value = E.mapPass.texture),
      (m.uniforms.resolution.value = E.mapSize),
      (m.uniforms.radius.value = E.radius),
      a.setRenderTarget(E.map),
      a.clear(),
      a.renderBufferDirect(w, null, L, m, p, null);
  }
  function b(E, w, L, O, M, T) {
    let F = null;
    const Y =
      L.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (Y !== void 0) F = Y;
    else if (
      ((F = L.isPointLight === !0 ? c : r),
      (a.localClippingEnabled &&
        w.clipShadows === !0 &&
        Array.isArray(w.clippingPlanes) &&
        w.clippingPlanes.length !== 0) ||
        (w.displacementMap && w.displacementScale !== 0) ||
        (w.alphaMap && w.alphaTest > 0) ||
        (w.map && w.alphaTest > 0))
    ) {
      const K = F.uuid,
        U = w.uuid;
      let I = l[K];
      I === void 0 && ((I = {}), (l[K] = I));
      let H = I[U];
      H === void 0 && ((H = F.clone()), (I[U] = H)), (F = H);
    }
    return (
      (F.visible = w.visible),
      (F.wireframe = w.wireframe),
      T === li
        ? (F.side = w.shadowSide !== null ? w.shadowSide : w.side)
        : (F.side = w.shadowSide !== null ? w.shadowSide : f[w.side]),
      (F.alphaMap = w.alphaMap),
      (F.alphaTest = w.alphaTest),
      (F.map = w.map),
      (F.clipShadows = w.clipShadows),
      (F.clippingPlanes = w.clippingPlanes),
      (F.clipIntersection = w.clipIntersection),
      (F.displacementMap = w.displacementMap),
      (F.displacementScale = w.displacementScale),
      (F.displacementBias = w.displacementBias),
      (F.wireframeLinewidth = w.wireframeLinewidth),
      (F.linewidth = w.linewidth),
      L.isPointLight === !0 &&
        F.isMeshDistanceMaterial === !0 &&
        (F.referencePosition.setFromMatrixPosition(L.matrixWorld),
        (F.nearDistance = O),
        (F.farDistance = M)),
      F
    );
  }
  function _(E, w, L, O, M) {
    if (E.visible === !1) return;
    if (
      E.layers.test(w.layers) &&
      (E.isMesh || E.isLine || E.isPoints) &&
      (E.castShadow || (E.receiveShadow && M === li)) &&
      (!E.frustumCulled || n.intersectsObject(E))
    ) {
      E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, E.matrixWorld);
      const Y = e.update(E),
        K = E.material;
      if (Array.isArray(K)) {
        const U = Y.groups;
        for (let I = 0, H = U.length; I < H; I++) {
          const Z = U[I],
            Q = K[Z.materialIndex];
          if (Q && Q.visible) {
            const X = b(E, Q, O, L.near, L.far, M);
            a.renderBufferDirect(L, null, Y, X, E, Z);
          }
        }
      } else if (K.visible) {
        const U = b(E, K, O, L.near, L.far, M);
        a.renderBufferDirect(L, null, Y, U, E, null);
      }
    }
    const F = E.children;
    for (let Y = 0, K = F.length; Y < K; Y++) _(F[Y], w, L, O, M);
  }
}
function sf(a, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const V = new nt();
    let j = null;
    const oe = new nt(0, 0, 0, 0);
    return {
      setMask: function (de) {
        j !== de && !C && (a.colorMask(de, de, de, de), (j = de));
      },
      setLocked: function (de) {
        C = de;
      },
      setClear: function (de, Oe, Qe, lt, zt) {
        zt === !0 && ((de *= lt), (Oe *= lt), (Qe *= lt)),
          V.set(de, Oe, Qe, lt),
          oe.equals(V) === !1 && (a.clearColor(de, Oe, Qe, lt), oe.copy(V));
      },
      reset: function () {
        (C = !1), (j = null), oe.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let C = !1,
      V = null,
      j = null,
      oe = null;
    return {
      setTest: function (de) {
        de ? ce(2929) : ue(2929);
      },
      setMask: function (de) {
        V !== de && !C && (a.depthMask(de), (V = de));
      },
      setFunc: function (de) {
        if (j !== de) {
          switch (de) {
            case Ao:
              a.depthFunc(512);
              break;
            case To:
              a.depthFunc(519);
              break;
            case Co:
              a.depthFunc(513);
              break;
            case Is:
              a.depthFunc(515);
              break;
            case Lo:
              a.depthFunc(514);
              break;
            case Do:
              a.depthFunc(518);
              break;
            case Po:
              a.depthFunc(516);
              break;
            case Ro:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          j = de;
        }
      },
      setLocked: function (de) {
        C = de;
      },
      setClear: function (de) {
        oe !== de && (a.clearDepth(de), (oe = de));
      },
      reset: function () {
        (C = !1), (V = null), (j = null), (oe = null);
      },
    };
  }
  function o() {
    let C = !1,
      V = null,
      j = null,
      oe = null,
      de = null,
      Oe = null,
      Qe = null,
      lt = null,
      zt = null;
    return {
      setTest: function (Ve) {
        C || (Ve ? ce(2960) : ue(2960));
      },
      setMask: function (Ve) {
        V !== Ve && !C && (a.stencilMask(Ve), (V = Ve));
      },
      setFunc: function (Ve, At, Ot) {
        (j !== Ve || oe !== At || de !== Ot) &&
          (a.stencilFunc(Ve, At, Ot), (j = Ve), (oe = At), (de = Ot));
      },
      setOp: function (Ve, At, Ot) {
        (Oe !== Ve || Qe !== At || lt !== Ot) &&
          (a.stencilOp(Ve, At, Ot), (Oe = Ve), (Qe = At), (lt = Ot));
      },
      setLocked: function (Ve) {
        C = Ve;
      },
      setClear: function (Ve) {
        zt !== Ve && (a.clearStencil(Ve), (zt = Ve));
      },
      reset: function () {
        (C = !1),
          (V = null),
          (j = null),
          (oe = null),
          (de = null),
          (Oe = null),
          (Qe = null),
          (lt = null),
          (zt = null);
      },
    };
  }
  const r = new i(),
    c = new s(),
    l = new o(),
    h = new WeakMap(),
    f = new WeakMap();
  let u = {},
    m = {},
    v = new WeakMap(),
    p = [],
    d = null,
    g = !1,
    b = null,
    _ = null,
    E = null,
    w = null,
    L = null,
    O = null,
    M = null,
    T = !1,
    F = null,
    Y = null,
    K = null,
    U = null,
    I = null;
  const H = a.getParameter(35661);
  let Z = !1,
    Q = 0;
  const X = a.getParameter(7938);
  X.indexOf("WebGL") !== -1
    ? ((Q = parseFloat(/^WebGL (\d)/.exec(X)[1])), (Z = Q >= 1))
    : X.indexOf("OpenGL ES") !== -1 &&
      ((Q = parseFloat(/^OpenGL ES (\d)/.exec(X)[1])), (Z = Q >= 2));
  let q = null,
    J = {};
  const fe = a.getParameter(3088),
    B = a.getParameter(2978),
    $ = new nt().fromArray(fe),
    ie = new nt().fromArray(B);
  function N(C, V, j) {
    const oe = new Uint8Array(4),
      de = a.createTexture();
    a.bindTexture(C, de),
      a.texParameteri(C, 10241, 9728),
      a.texParameteri(C, 10240, 9728);
    for (let Oe = 0; Oe < j; Oe++)
      a.texImage2D(V + Oe, 0, 6408, 1, 1, 0, 6408, 5121, oe);
    return de;
  }
  const le = {};
  (le[3553] = N(3553, 3553, 1)),
    (le[34067] = N(34067, 34069, 6)),
    r.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    ce(2929),
    c.setFunc(Is),
    Ke(!1),
    Je(nr),
    ce(2884),
    Ze(an);
  function ce(C) {
    u[C] !== !0 && (a.enable(C), (u[C] = !0));
  }
  function ue(C) {
    u[C] !== !1 && (a.disable(C), (u[C] = !1));
  }
  function he(C, V) {
    return m[C] !== V
      ? (a.bindFramebuffer(C, V),
        (m[C] = V),
        n && (C === 36009 && (m[36160] = V), C === 36160 && (m[36009] = V)),
        !0)
      : !1;
  }
  function ve(C, V) {
    let j = p,
      oe = !1;
    if (C)
      if (
        ((j = v.get(V)),
        j === void 0 && ((j = []), v.set(V, j)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const de = C.texture;
        if (j.length !== de.length || j[0] !== 36064) {
          for (let Oe = 0, Qe = de.length; Oe < Qe; Oe++) j[Oe] = 36064 + Oe;
          (j.length = de.length), (oe = !0);
        }
      } else j[0] !== 36064 && ((j[0] = 36064), (oe = !0));
    else j[0] !== 1029 && ((j[0] = 1029), (oe = !0));
    oe &&
      (t.isWebGL2
        ? a.drawBuffers(j)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j));
  }
  function ye(C) {
    return d !== C ? (a.useProgram(C), (d = C), !0) : !1;
  }
  const Se = {
    [Gn]: 32774,
    [mo]: 32778,
    [go]: 32779,
  };
  if (n) (Se[ar] = 32775), (Se[or] = 32776);
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((Se[ar] = C.MIN_EXT), (Se[or] = C.MAX_EXT));
  }
  const Pe = {
    [_o]: 0,
    [xo]: 1,
    [vo]: 768,
    [La]: 770,
    [Eo]: 776,
    [So]: 774,
    [yo]: 772,
    [Mo]: 769,
    [Da]: 771,
    [wo]: 775,
    [bo]: 773,
  };
  function Ze(C, V, j, oe, de, Oe, Qe, lt) {
    if (C === an) {
      g === !0 && (ue(3042), (g = !1));
      return;
    }
    if ((g === !1 && (ce(3042), (g = !0)), C !== po)) {
      if (C !== b || lt !== T) {
        if (
          ((_ !== Gn || L !== Gn) &&
            (a.blendEquation(32774), (_ = Gn), (L = Gn)),
          lt)
        )
          switch (C) {
            case Hn:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case ir:
              a.blendFunc(1, 1);
              break;
            case sr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case rr:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Hn:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case ir:
              a.blendFunc(770, 1);
              break;
            case sr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case rr:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        (E = null), (w = null), (O = null), (M = null), (b = C), (T = lt);
      }
      return;
    }
    (de = de || V),
      (Oe = Oe || j),
      (Qe = Qe || oe),
      (V !== _ || de !== L) &&
        (a.blendEquationSeparate(Se[V], Se[de]), (_ = V), (L = de)),
      (j !== E || oe !== w || Oe !== O || Qe !== M) &&
        (a.blendFuncSeparate(Pe[j], Pe[oe], Pe[Oe], Pe[Qe]),
        (E = j),
        (w = oe),
        (O = Oe),
        (M = Qe)),
      (b = C),
      (T = !1);
  }
  function at(C, V) {
    C.side === sn ? ue(2884) : ce(2884);
    let j = C.side === wt;
    V && (j = !j),
      Ke(j),
      C.blending === Hn && C.transparent === !1
        ? Ze(an)
        : Ze(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha
          ),
      c.setFunc(C.depthFunc),
      c.setTest(C.depthTest),
      c.setMask(C.depthWrite),
      r.setMask(C.colorWrite);
    const oe = C.stencilWrite;
    l.setTest(oe),
      oe &&
        (l.setMask(C.stencilWriteMask),
        l.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        l.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      ze(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ? ce(32926) : ue(32926);
  }
  function Ke(C) {
    F !== C && (C ? a.frontFace(2304) : a.frontFace(2305), (F = C));
  }
  function Je(C) {
    C !== ho
      ? (ce(2884),
        C !== Y &&
          (C === nr
            ? a.cullFace(1029)
            : C === uo
            ? a.cullFace(1028)
            : a.cullFace(1032)))
      : ue(2884),
      (Y = C);
  }
  function ke(C) {
    C !== K && (Z && a.lineWidth(C), (K = C));
  }
  function ze(C, V, j) {
    C
      ? (ce(32823),
        (U !== V || I !== j) && (a.polygonOffset(V, j), (U = V), (I = j)))
      : ue(32823);
  }
  function gt(C) {
    C ? ce(3089) : ue(3089);
  }
  function ot(C) {
    C === void 0 && (C = 33984 + H - 1),
      q !== C && (a.activeTexture(C), (q = C));
  }
  function S(C, V, j) {
    j === void 0 && (q === null ? (j = 33984 + H - 1) : (j = q));
    let oe = J[j];
    oe === void 0 &&
      ((oe = {
        type: void 0,
        texture: void 0,
      }),
      (J[j] = oe)),
      (oe.type !== C || oe.texture !== V) &&
        (q !== j && (a.activeTexture(j), (q = j)),
        a.bindTexture(C, V || le[C]),
        (oe.type = C),
        (oe.texture = V));
  }
  function x() {
    const C = J[q];
    C !== void 0 &&
      C.type !== void 0 &&
      (a.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function G() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ee() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function te() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function re() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function A() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function P() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ae() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function pe() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ge(C) {
    $.equals(C) === !1 && (a.scissor(C.x, C.y, C.z, C.w), $.copy(C));
  }
  function me(C) {
    ie.equals(C) === !1 && (a.viewport(C.x, C.y, C.z, C.w), ie.copy(C));
  }
  function Te(C, V) {
    let j = f.get(V);
    j === void 0 && ((j = new WeakMap()), f.set(V, j));
    let oe = j.get(C);
    oe === void 0 && ((oe = a.getUniformBlockIndex(V, C.name)), j.set(C, oe));
  }
  function Re(C, V) {
    const oe = f.get(V).get(C);
    h.get(V) !== oe &&
      (a.uniformBlockBinding(V, oe, C.__bindingPointIndex), h.set(V, oe));
  }
  function Ne() {
    a.disable(3042),
      a.disable(2884),
      a.disable(2929),
      a.disable(32823),
      a.disable(3089),
      a.disable(2960),
      a.disable(32926),
      a.blendEquation(32774),
      a.blendFunc(1, 0),
      a.blendFuncSeparate(1, 0, 1, 0),
      a.colorMask(!0, !0, !0, !0),
      a.clearColor(0, 0, 0, 0),
      a.depthMask(!0),
      a.depthFunc(513),
      a.clearDepth(1),
      a.stencilMask(4294967295),
      a.stencilFunc(519, 0, 4294967295),
      a.stencilOp(7680, 7680, 7680),
      a.clearStencil(0),
      a.cullFace(1029),
      a.frontFace(2305),
      a.polygonOffset(0, 0),
      a.activeTexture(33984),
      a.bindFramebuffer(36160, null),
      n === !0 &&
        (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)),
      a.useProgram(null),
      a.lineWidth(1),
      a.scissor(0, 0, a.canvas.width, a.canvas.height),
      a.viewport(0, 0, a.canvas.width, a.canvas.height),
      (u = {}),
      (q = null),
      (J = {}),
      (m = {}),
      (v = new WeakMap()),
      (p = []),
      (d = null),
      (g = !1),
      (b = null),
      (_ = null),
      (E = null),
      (w = null),
      (L = null),
      (O = null),
      (M = null),
      (T = !1),
      (F = null),
      (Y = null),
      (K = null),
      (U = null),
      (I = null),
      $.set(0, 0, a.canvas.width, a.canvas.height),
      ie.set(0, 0, a.canvas.width, a.canvas.height),
      r.reset(),
      c.reset(),
      l.reset();
  }
  return {
    buffers: {
      color: r,
      depth: c,
      stencil: l,
    },
    enable: ce,
    disable: ue,
    bindFramebuffer: he,
    drawBuffers: ve,
    useProgram: ye,
    setBlending: Ze,
    setMaterial: at,
    setFlipSided: Ke,
    setCullFace: Je,
    setLineWidth: ke,
    setPolygonOffset: ze,
    setScissorTest: gt,
    activeTexture: ot,
    bindTexture: S,
    unbindTexture: x,
    compressedTexImage2D: G,
    compressedTexImage3D: ee,
    texImage2D: se,
    texImage3D: pe,
    updateUBOMapping: Te,
    uniformBlockBinding: Re,
    texStorage2D: P,
    texStorage3D: ae,
    texSubImage2D: te,
    texSubImage3D: re,
    compressedTexSubImage2D: _e,
    compressedTexSubImage3D: A,
    scissor: ge,
    viewport: me,
    reset: Ne,
  };
}
function rf(a, e, t, n, i, s, o) {
  const r = i.isWebGL2,
    c = i.maxTextures,
    l = i.maxCubemapSize,
    h = i.maxTextureSize,
    f = i.maxSamples,
    u = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    v = new WeakMap();
  let p;
  const d = new WeakMap();
  let g = !1;
  try {
    g =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function b(S, x) {
    return g ? new OffscreenCanvas(S, x) : Gi("canvas");
  }
  function _(S, x, G, ee) {
    let te = 1;
    if (
      ((S.width > ee || S.height > ee) &&
        (te = ee / Math.max(S.width, S.height)),
      te < 1 || x === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && S instanceof ImageBitmap)
      ) {
        const re = x ? ol : Math.floor,
          _e = re(te * S.width),
          A = re(te * S.height);
        p === void 0 && (p = b(_e, A));
        const P = G ? b(_e, A) : p;
        return (
          (P.width = _e),
          (P.height = A),
          P.getContext("2d").drawImage(S, 0, 0, _e, A),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              _e +
              "x" +
              A +
              ")."
          ),
          P
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function E(S) {
    return Fr(S.width) && Fr(S.height);
  }
  function w(S) {
    return r
      ? !1
      : S.wrapS !== Rt ||
          S.wrapT !== Rt ||
          (S.minFilter !== dt && S.minFilter !== Ct);
  }
  function L(S, x) {
    return S.generateMipmaps && x && S.minFilter !== dt && S.minFilter !== Ct;
  }
  function O(S) {
    a.generateMipmap(S);
  }
  function M(S, x, G, ee, te = !1) {
    if (r === !1) return x;
    if (S !== null) {
      if (a[S] !== void 0) return a[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let re = x;
    return (
      x === 6403 &&
        (G === 5126 && (re = 33326),
        G === 5131 && (re = 33325),
        G === 5121 && (re = 33321)),
      x === 33319 &&
        (G === 5126 && (re = 33328),
        G === 5131 && (re = 33327),
        G === 5121 && (re = 33323)),
      x === 6408 &&
        (G === 5126 && (re = 34836),
        G === 5131 && (re = 34842),
        G === 5121 && (re = ee === Ue && te === !1 ? 35907 : 32856),
        G === 32819 && (re = 32854),
        G === 32820 && (re = 32855)),
      (re === 33325 ||
        re === 33326 ||
        re === 33327 ||
        re === 33328 ||
        re === 34842 ||
        re === 34836) &&
        e.get("EXT_color_buffer_float"),
      re
    );
  }
  function T(S, x, G) {
    return L(S, G) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== dt && S.minFilter !== Ct)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? x.mipmaps.length
      : 1;
  }
  function F(S) {
    return S === dt || S === lr || S === Ki ? 9728 : 9729;
  }
  function Y(S) {
    const x = S.target;
    x.removeEventListener("dispose", Y), U(x), x.isVideoTexture && v.delete(x);
  }
  function K(S) {
    const x = S.target;
    x.removeEventListener("dispose", K), H(x);
  }
  function U(S) {
    const x = n.get(S);
    if (x.__webglInit === void 0) return;
    const G = S.source,
      ee = d.get(G);
    if (ee) {
      const te = ee[x.__cacheKey];
      te.usedTimes--,
        te.usedTimes === 0 && I(S),
        Object.keys(ee).length === 0 && d.delete(G);
    }
    n.remove(S);
  }
  function I(S) {
    const x = n.get(S);
    a.deleteTexture(x.__webglTexture);
    const G = S.source,
      ee = d.get(G);
    delete ee[x.__cacheKey], o.memory.textures--;
  }
  function H(S) {
    const x = S.texture,
      G = n.get(S),
      ee = n.get(x);
    if (
      (ee.__webglTexture !== void 0 &&
        (a.deleteTexture(ee.__webglTexture), o.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let te = 0; te < 6; te++)
        a.deleteFramebuffer(G.__webglFramebuffer[te]),
          G.__webglDepthbuffer &&
            a.deleteRenderbuffer(G.__webglDepthbuffer[te]);
    else {
      if (
        (a.deleteFramebuffer(G.__webglFramebuffer),
        G.__webglDepthbuffer && a.deleteRenderbuffer(G.__webglDepthbuffer),
        G.__webglMultisampledFramebuffer &&
          a.deleteFramebuffer(G.__webglMultisampledFramebuffer),
        G.__webglColorRenderbuffer)
      )
        for (let te = 0; te < G.__webglColorRenderbuffer.length; te++)
          G.__webglColorRenderbuffer[te] &&
            a.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);
      G.__webglDepthRenderbuffer &&
        a.deleteRenderbuffer(G.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let te = 0, re = x.length; te < re; te++) {
        const _e = n.get(x[te]);
        _e.__webglTexture &&
          (a.deleteTexture(_e.__webglTexture), o.memory.textures--),
          n.remove(x[te]);
      }
    n.remove(x), n.remove(S);
  }
  let Z = 0;
  function Q() {
    Z = 0;
  }
  function X() {
    const S = Z;
    return (
      S >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            c
        ),
      (Z += 1),
      S
    );
  }
  function q(S) {
    const x = [];
    return (
      x.push(S.wrapS),
      x.push(S.wrapT),
      x.push(S.wrapR || 0),
      x.push(S.magFilter),
      x.push(S.minFilter),
      x.push(S.anisotropy),
      x.push(S.internalFormat),
      x.push(S.format),
      x.push(S.type),
      x.push(S.generateMipmaps),
      x.push(S.premultiplyAlpha),
      x.push(S.flipY),
      x.push(S.unpackAlignment),
      x.push(S.encoding),
      x.join()
    );
  }
  function J(S, x) {
    const G = n.get(S);
    if (
      (S.isVideoTexture && gt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        G.__version !== S.version)
    ) {
      const ee = S.image;
      if (ee === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ee.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        ue(G, S, x);
        return;
      }
    }
    t.bindTexture(3553, G.__webglTexture, 33984 + x);
  }
  function fe(S, x) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      ue(G, S, x);
      return;
    }
    t.bindTexture(35866, G.__webglTexture, 33984 + x);
  }
  function B(S, x) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      ue(G, S, x);
      return;
    }
    t.bindTexture(32879, G.__webglTexture, 33984 + x);
  }
  function $(S, x) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      he(G, S, x);
      return;
    }
    t.bindTexture(34067, G.__webglTexture, 33984 + x);
  }
  const ie = {
      [zs]: 10497,
      [Rt]: 33071,
      [Os]: 33648,
    },
    N = {
      [dt]: 9728,
      [lr]: 9984,
      [Ki]: 9986,
      [Ct]: 9729,
      [ko]: 9985,
      [ui]: 9987,
    };
  function le(S, x, G) {
    if (
      (G
        ? (a.texParameteri(S, 10242, ie[x.wrapS]),
          a.texParameteri(S, 10243, ie[x.wrapT]),
          (S === 32879 || S === 35866) &&
            a.texParameteri(S, 32882, ie[x.wrapR]),
          a.texParameteri(S, 10240, N[x.magFilter]),
          a.texParameteri(S, 10241, N[x.minFilter]))
        : (a.texParameteri(S, 10242, 33071),
          a.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && a.texParameteri(S, 32882, 33071),
          (x.wrapS !== Rt || x.wrapT !== Rt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          a.texParameteri(S, 10240, F(x.magFilter)),
          a.texParameteri(S, 10241, F(x.minFilter)),
          x.minFilter !== dt &&
            x.minFilter !== Ct &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ee = e.get("EXT_texture_filter_anisotropic");
      if (
        x.magFilter === dt ||
        (x.minFilter !== Ki && x.minFilter !== ui) ||
        (x.type === xn && e.has("OES_texture_float_linear") === !1) ||
        (r === !1 &&
          x.type === di &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) &&
        (a.texParameterf(
          S,
          ee.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(x).__currentAnisotropy = x.anisotropy));
    }
  }
  function ce(S, x) {
    let G = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), x.addEventListener("dispose", Y));
    const ee = x.source;
    let te = d.get(ee);
    te === void 0 && ((te = {}), d.set(ee, te));
    const re = q(x);
    if (re !== S.__cacheKey) {
      te[re] === void 0 &&
        ((te[re] = {
          texture: a.createTexture(),
          usedTimes: 0,
        }),
        o.memory.textures++,
        (G = !0)),
        te[re].usedTimes++;
      const _e = te[S.__cacheKey];
      _e !== void 0 &&
        (te[S.__cacheKey].usedTimes--, _e.usedTimes === 0 && I(x)),
        (S.__cacheKey = re),
        (S.__webglTexture = te[re].texture);
    }
    return G;
  }
  function ue(S, x, G) {
    let ee = 3553;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (ee = 35866),
      x.isData3DTexture && (ee = 32879);
    const te = ce(S, x),
      re = x.source;
    t.bindTexture(ee, S.__webglTexture, 33984 + G);
    const _e = n.get(re);
    if (re.version !== _e.__version || te === !0) {
      t.activeTexture(33984 + G),
        a.pixelStorei(37440, x.flipY),
        a.pixelStorei(37441, x.premultiplyAlpha),
        a.pixelStorei(3317, x.unpackAlignment),
        a.pixelStorei(37443, 0);
      const A = w(x) && E(x.image) === !1;
      let P = _(x.image, A, !1, h);
      P = ot(x, P);
      const ae = E(P) || r,
        se = s.convert(x.format, x.encoding);
      let pe = s.convert(x.type),
        ge = M(x.internalFormat, se, pe, x.encoding, x.isVideoTexture);
      le(ee, x, ae);
      let me;
      const Te = x.mipmaps,
        Re = r && x.isVideoTexture !== !0,
        Ne = _e.__version === void 0 || te === !0,
        C = T(x, P, ae);
      if (x.isDepthTexture)
        (ge = 6402),
          r
            ? x.type === xn
              ? (ge = 36012)
              : x.type === _n
              ? (ge = 33190)
              : x.type === Wn
              ? (ge = 35056)
              : (ge = 33189)
            : x.type === xn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          x.format === vn &&
            ge === 6402 &&
            x.type !== Ia &&
            x.type !== _n &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (x.type = _n),
            (pe = s.convert(x.type))),
          x.format === $n &&
            ge === 6402 &&
            ((ge = 34041),
            x.type !== Wn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (x.type = Wn),
              (pe = s.convert(x.type)))),
          Ne &&
            (Re
              ? t.texStorage2D(3553, 1, ge, P.width, P.height)
              : t.texImage2D(3553, 0, ge, P.width, P.height, 0, se, pe, null));
      else if (x.isDataTexture)
        if (Te.length > 0 && ae) {
          Re && Ne && t.texStorage2D(3553, C, ge, Te[0].width, Te[0].height);
          for (let V = 0, j = Te.length; V < j; V++)
            (me = Te[V]),
              Re
                ? t.texSubImage2D(
                    3553,
                    V,
                    0,
                    0,
                    me.width,
                    me.height,
                    se,
                    pe,
                    me.data
                  )
                : t.texImage2D(
                    3553,
                    V,
                    ge,
                    me.width,
                    me.height,
                    0,
                    se,
                    pe,
                    me.data
                  );
          x.generateMipmaps = !1;
        } else
          Re
            ? (Ne && t.texStorage2D(3553, C, ge, P.width, P.height),
              t.texSubImage2D(3553, 0, 0, 0, P.width, P.height, se, pe, P.data))
            : t.texImage2D(3553, 0, ge, P.width, P.height, 0, se, pe, P.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Re &&
            Ne &&
            t.texStorage3D(35866, C, ge, Te[0].width, Te[0].height, P.depth);
          for (let V = 0, j = Te.length; V < j; V++)
            (me = Te[V]),
              x.format !== It
                ? se !== null
                  ? Re
                    ? t.compressedTexSubImage3D(
                        35866,
                        V,
                        0,
                        0,
                        0,
                        me.width,
                        me.height,
                        P.depth,
                        se,
                        me.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        V,
                        ge,
                        me.width,
                        me.height,
                        P.depth,
                        0,
                        me.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Re
                ? t.texSubImage3D(
                    35866,
                    V,
                    0,
                    0,
                    0,
                    me.width,
                    me.height,
                    P.depth,
                    se,
                    pe,
                    me.data
                  )
                : t.texImage3D(
                    35866,
                    V,
                    ge,
                    me.width,
                    me.height,
                    P.depth,
                    0,
                    se,
                    pe,
                    me.data
                  );
        } else {
          Re && Ne && t.texStorage2D(3553, C, ge, Te[0].width, Te[0].height);
          for (let V = 0, j = Te.length; V < j; V++)
            (me = Te[V]),
              x.format !== It
                ? se !== null
                  ? Re
                    ? t.compressedTexSubImage2D(
                        3553,
                        V,
                        0,
                        0,
                        me.width,
                        me.height,
                        se,
                        me.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        V,
                        ge,
                        me.width,
                        me.height,
                        0,
                        me.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Re
                ? t.texSubImage2D(
                    3553,
                    V,
                    0,
                    0,
                    me.width,
                    me.height,
                    se,
                    pe,
                    me.data
                  )
                : t.texImage2D(
                    3553,
                    V,
                    ge,
                    me.width,
                    me.height,
                    0,
                    se,
                    pe,
                    me.data
                  );
        }
      else if (x.isDataArrayTexture)
        Re
          ? (Ne && t.texStorage3D(35866, C, ge, P.width, P.height, P.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              P.width,
              P.height,
              P.depth,
              se,
              pe,
              P.data
            ))
          : t.texImage3D(
              35866,
              0,
              ge,
              P.width,
              P.height,
              P.depth,
              0,
              se,
              pe,
              P.data
            );
      else if (x.isData3DTexture)
        Re
          ? (Ne && t.texStorage3D(32879, C, ge, P.width, P.height, P.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              P.width,
              P.height,
              P.depth,
              se,
              pe,
              P.data
            ))
          : t.texImage3D(
              32879,
              0,
              ge,
              P.width,
              P.height,
              P.depth,
              0,
              se,
              pe,
              P.data
            );
      else if (x.isFramebufferTexture) {
        if (Ne)
          if (Re) t.texStorage2D(3553, C, ge, P.width, P.height);
          else {
            let V = P.width,
              j = P.height;
            for (let oe = 0; oe < C; oe++)
              t.texImage2D(3553, oe, ge, V, j, 0, se, pe, null),
                (V >>= 1),
                (j >>= 1);
          }
      } else if (Te.length > 0 && ae) {
        Re && Ne && t.texStorage2D(3553, C, ge, Te[0].width, Te[0].height);
        for (let V = 0, j = Te.length; V < j; V++)
          (me = Te[V]),
            Re
              ? t.texSubImage2D(3553, V, 0, 0, se, pe, me)
              : t.texImage2D(3553, V, ge, se, pe, me);
        x.generateMipmaps = !1;
      } else
        Re
          ? (Ne && t.texStorage2D(3553, C, ge, P.width, P.height),
            t.texSubImage2D(3553, 0, 0, 0, se, pe, P))
          : t.texImage2D(3553, 0, ge, se, pe, P);
      L(x, ae) && O(ee),
        (_e.__version = re.version),
        x.onUpdate && x.onUpdate(x);
    }
    S.__version = x.version;
  }
  function he(S, x, G) {
    if (x.image.length !== 6) return;
    const ee = ce(S, x),
      te = x.source;
    t.bindTexture(34067, S.__webglTexture, 33984 + G);
    const re = n.get(te);
    if (te.version !== re.__version || ee === !0) {
      t.activeTexture(33984 + G),
        a.pixelStorei(37440, x.flipY),
        a.pixelStorei(37441, x.premultiplyAlpha),
        a.pixelStorei(3317, x.unpackAlignment),
        a.pixelStorei(37443, 0);
      const _e = x.isCompressedTexture || x.image[0].isCompressedTexture,
        A = x.image[0] && x.image[0].isDataTexture,
        P = [];
      for (let V = 0; V < 6; V++)
        !_e && !A
          ? (P[V] = _(x.image[V], !1, !0, l))
          : (P[V] = A ? x.image[V].image : x.image[V]),
          (P[V] = ot(x, P[V]));
      const ae = P[0],
        se = E(ae) || r,
        pe = s.convert(x.format, x.encoding),
        ge = s.convert(x.type),
        me = M(x.internalFormat, pe, ge, x.encoding),
        Te = r && x.isVideoTexture !== !0,
        Re = re.__version === void 0 || ee === !0;
      let Ne = T(x, ae, se);
      le(34067, x, se);
      let C;
      if (_e) {
        Te && Re && t.texStorage2D(34067, Ne, me, ae.width, ae.height);
        for (let V = 0; V < 6; V++) {
          C = P[V].mipmaps;
          for (let j = 0; j < C.length; j++) {
            const oe = C[j];
            x.format !== It
              ? pe !== null
                ? Te
                  ? t.compressedTexSubImage2D(
                      34069 + V,
                      j,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      pe,
                      oe.data
                    )
                  : t.compressedTexImage2D(
                      34069 + V,
                      j,
                      me,
                      oe.width,
                      oe.height,
                      0,
                      oe.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Te
              ? t.texSubImage2D(
                  34069 + V,
                  j,
                  0,
                  0,
                  oe.width,
                  oe.height,
                  pe,
                  ge,
                  oe.data
                )
              : t.texImage2D(
                  34069 + V,
                  j,
                  me,
                  oe.width,
                  oe.height,
                  0,
                  pe,
                  ge,
                  oe.data
                );
          }
        }
      } else {
        (C = x.mipmaps),
          Te &&
            Re &&
            (C.length > 0 && Ne++,
            t.texStorage2D(34067, Ne, me, P[0].width, P[0].height));
        for (let V = 0; V < 6; V++)
          if (A) {
            Te
              ? t.texSubImage2D(
                  34069 + V,
                  0,
                  0,
                  0,
                  P[V].width,
                  P[V].height,
                  pe,
                  ge,
                  P[V].data
                )
              : t.texImage2D(
                  34069 + V,
                  0,
                  me,
                  P[V].width,
                  P[V].height,
                  0,
                  pe,
                  ge,
                  P[V].data
                );
            for (let j = 0; j < C.length; j++) {
              const de = C[j].image[V].image;
              Te
                ? t.texSubImage2D(
                    34069 + V,
                    j + 1,
                    0,
                    0,
                    de.width,
                    de.height,
                    pe,
                    ge,
                    de.data
                  )
                : t.texImage2D(
                    34069 + V,
                    j + 1,
                    me,
                    de.width,
                    de.height,
                    0,
                    pe,
                    ge,
                    de.data
                  );
            }
          } else {
            Te
              ? t.texSubImage2D(34069 + V, 0, 0, 0, pe, ge, P[V])
              : t.texImage2D(34069 + V, 0, me, pe, ge, P[V]);
            for (let j = 0; j < C.length; j++) {
              const oe = C[j];
              Te
                ? t.texSubImage2D(34069 + V, j + 1, 0, 0, pe, ge, oe.image[V])
                : t.texImage2D(34069 + V, j + 1, me, pe, ge, oe.image[V]);
            }
          }
      }
      L(x, se) && O(34067),
        (re.__version = te.version),
        x.onUpdate && x.onUpdate(x);
    }
    S.__version = x.version;
  }
  function ve(S, x, G, ee, te) {
    const re = s.convert(G.format, G.encoding),
      _e = s.convert(G.type),
      A = M(G.internalFormat, re, _e, G.encoding);
    n.get(x).__hasExternalTextures ||
      (te === 32879 || te === 35866
        ? t.texImage3D(te, 0, A, x.width, x.height, x.depth, 0, re, _e, null)
        : t.texImage2D(te, 0, A, x.width, x.height, 0, re, _e, null)),
      t.bindFramebuffer(36160, S),
      ze(x)
        ? u.framebufferTexture2DMultisampleEXT(
            36160,
            ee,
            te,
            n.get(G).__webglTexture,
            0,
            ke(x)
          )
        : (te === 3553 || (te >= 34069 && te <= 34074)) &&
          a.framebufferTexture2D(36160, ee, te, n.get(G).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function ye(S, x, G) {
    if ((a.bindRenderbuffer(36161, S), x.depthBuffer && !x.stencilBuffer)) {
      let ee = 33189;
      if (G || ze(x)) {
        const te = x.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === xn ? (ee = 36012) : te.type === _n && (ee = 33190));
        const re = ke(x);
        ze(x)
          ? u.renderbufferStorageMultisampleEXT(
              36161,
              re,
              ee,
              x.width,
              x.height
            )
          : a.renderbufferStorageMultisample(36161, re, ee, x.width, x.height);
      } else a.renderbufferStorage(36161, ee, x.width, x.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const ee = ke(x);
      G && ze(x) === !1
        ? a.renderbufferStorageMultisample(36161, ee, 35056, x.width, x.height)
        : ze(x)
        ? u.renderbufferStorageMultisampleEXT(
            36161,
            ee,
            35056,
            x.width,
            x.height
          )
        : a.renderbufferStorage(36161, 34041, x.width, x.height),
        a.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const ee =
        x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let te = 0; te < ee.length; te++) {
        const re = ee[te],
          _e = s.convert(re.format, re.encoding),
          A = s.convert(re.type),
          P = M(re.internalFormat, _e, A, re.encoding),
          ae = ke(x);
        G && ze(x) === !1
          ? a.renderbufferStorageMultisample(36161, ae, P, x.width, x.height)
          : ze(x)
          ? u.renderbufferStorageMultisampleEXT(36161, ae, P, x.width, x.height)
          : a.renderbufferStorage(36161, P, x.width, x.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function Se(S, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, S),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(x.depthTexture).__webglTexture ||
      x.depthTexture.image.width !== x.width ||
      x.depthTexture.image.height !== x.height) &&
      ((x.depthTexture.image.width = x.width),
      (x.depthTexture.image.height = x.height),
      (x.depthTexture.needsUpdate = !0)),
      J(x.depthTexture, 0);
    const ee = n.get(x.depthTexture).__webglTexture,
      te = ke(x);
    if (x.depthTexture.format === vn)
      ze(x)
        ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, te)
        : a.framebufferTexture2D(36160, 36096, 3553, ee, 0);
    else if (x.depthTexture.format === $n)
      ze(x)
        ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, te)
        : a.framebufferTexture2D(36160, 33306, 3553, ee, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Pe(S) {
    const x = n.get(S),
      G = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (G)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Se(x.__webglFramebuffer, S);
    } else if (G) {
      x.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        t.bindFramebuffer(36160, x.__webglFramebuffer[ee]),
          (x.__webglDepthbuffer[ee] = a.createRenderbuffer()),
          ye(x.__webglDepthbuffer[ee], S, !1);
    } else
      t.bindFramebuffer(36160, x.__webglFramebuffer),
        (x.__webglDepthbuffer = a.createRenderbuffer()),
        ye(x.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function Ze(S, x, G) {
    const ee = n.get(S);
    x !== void 0 && ve(ee.__webglFramebuffer, S, S.texture, 36064, 3553),
      G !== void 0 && Pe(S);
  }
  function at(S) {
    const x = S.texture,
      G = n.get(S),
      ee = n.get(x);
    S.addEventListener("dispose", K),
      S.isWebGLMultipleRenderTargets !== !0 &&
        (ee.__webglTexture === void 0 &&
          (ee.__webglTexture = a.createTexture()),
        (ee.__version = x.version),
        o.memory.textures++);
    const te = S.isWebGLCubeRenderTarget === !0,
      re = S.isWebGLMultipleRenderTargets === !0,
      _e = E(S) || r;
    if (te) {
      G.__webglFramebuffer = [];
      for (let A = 0; A < 6; A++)
        G.__webglFramebuffer[A] = a.createFramebuffer();
    } else {
      if (((G.__webglFramebuffer = a.createFramebuffer()), re))
        if (i.drawBuffers) {
          const A = S.texture;
          for (let P = 0, ae = A.length; P < ae; P++) {
            const se = n.get(A[P]);
            se.__webglTexture === void 0 &&
              ((se.__webglTexture = a.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (r && S.samples > 0 && ze(S) === !1) {
        const A = re ? x : [x];
        (G.__webglMultisampledFramebuffer = a.createFramebuffer()),
          (G.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, G.__webglMultisampledFramebuffer);
        for (let P = 0; P < A.length; P++) {
          const ae = A[P];
          (G.__webglColorRenderbuffer[P] = a.createRenderbuffer()),
            a.bindRenderbuffer(36161, G.__webglColorRenderbuffer[P]);
          const se = s.convert(ae.format, ae.encoding),
            pe = s.convert(ae.type),
            ge = M(
              ae.internalFormat,
              se,
              pe,
              ae.encoding,
              S.isXRRenderTarget === !0
            ),
            me = ke(S);
          a.renderbufferStorageMultisample(36161, me, ge, S.width, S.height),
            a.framebufferRenderbuffer(
              36160,
              36064 + P,
              36161,
              G.__webglColorRenderbuffer[P]
            );
        }
        a.bindRenderbuffer(36161, null),
          S.depthBuffer &&
            ((G.__webglDepthRenderbuffer = a.createRenderbuffer()),
            ye(G.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, ee.__webglTexture), le(34067, x, _e);
      for (let A = 0; A < 6; A++)
        ve(G.__webglFramebuffer[A], S, x, 36064, 34069 + A);
      L(x, _e) && O(34067), t.unbindTexture();
    } else if (re) {
      const A = S.texture;
      for (let P = 0, ae = A.length; P < ae; P++) {
        const se = A[P],
          pe = n.get(se);
        t.bindTexture(3553, pe.__webglTexture),
          le(3553, se, _e),
          ve(G.__webglFramebuffer, S, se, 36064 + P, 3553),
          L(se, _e) && O(3553);
      }
      t.unbindTexture();
    } else {
      let A = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (r
          ? (A = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(A, ee.__webglTexture),
        le(A, x, _e),
        ve(G.__webglFramebuffer, S, x, 36064, A),
        L(x, _e) && O(A),
        t.unbindTexture();
    }
    S.depthBuffer && Pe(S);
  }
  function Ke(S) {
    const x = E(S) || r,
      G = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let ee = 0, te = G.length; ee < te; ee++) {
      const re = G[ee];
      if (L(re, x)) {
        const _e = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          A = n.get(re).__webglTexture;
        t.bindTexture(_e, A), O(_e), t.unbindTexture();
      }
    }
  }
  function Je(S) {
    if (r && S.samples > 0 && ze(S) === !1) {
      const x = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture],
        G = S.width,
        ee = S.height;
      let te = 16384;
      const re = [],
        _e = S.stencilBuffer ? 33306 : 36096,
        A = n.get(S),
        P = S.isWebGLMultipleRenderTargets === !0;
      if (P)
        for (let ae = 0; ae < x.length; ae++)
          t.bindFramebuffer(36160, A.__webglMultisampledFramebuffer),
            a.framebufferRenderbuffer(36160, 36064 + ae, 36161, null),
            t.bindFramebuffer(36160, A.__webglFramebuffer),
            a.framebufferTexture2D(36009, 36064 + ae, 3553, null, 0);
      t.bindFramebuffer(36008, A.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, A.__webglFramebuffer);
      for (let ae = 0; ae < x.length; ae++) {
        re.push(36064 + ae), S.depthBuffer && re.push(_e);
        const se =
          A.__ignoreDepthValues !== void 0 ? A.__ignoreDepthValues : !1;
        if (
          (se === !1 &&
            (S.depthBuffer && (te |= 256), S.stencilBuffer && (te |= 1024)),
          P &&
            a.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              A.__webglColorRenderbuffer[ae]
            ),
          se === !0 &&
            (a.invalidateFramebuffer(36008, [_e]),
            a.invalidateFramebuffer(36009, [_e])),
          P)
        ) {
          const pe = n.get(x[ae]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, pe, 0);
        }
        a.blitFramebuffer(0, 0, G, ee, 0, 0, G, ee, te, 9728),
          m && a.invalidateFramebuffer(36008, re);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), P))
        for (let ae = 0; ae < x.length; ae++) {
          t.bindFramebuffer(36160, A.__webglMultisampledFramebuffer),
            a.framebufferRenderbuffer(
              36160,
              36064 + ae,
              36161,
              A.__webglColorRenderbuffer[ae]
            );
          const se = n.get(x[ae]).__webglTexture;
          t.bindFramebuffer(36160, A.__webglFramebuffer),
            a.framebufferTexture2D(36009, 36064 + ae, 3553, se, 0);
        }
      t.bindFramebuffer(36009, A.__webglMultisampledFramebuffer);
    }
  }
  function ke(S) {
    return Math.min(f, S.samples);
  }
  function ze(S) {
    const x = n.get(S);
    return (
      r &&
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function gt(S) {
    const x = o.render.frame;
    v.get(S) !== x && (v.set(S, x), S.update());
  }
  function ot(S, x) {
    const G = S.encoding,
      ee = S.format,
      te = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === Us ||
        (G !== yn &&
          (G === Ue
            ? r === !1
              ? e.has("EXT_sRGB") === !0 && ee === It
                ? ((S.format = Us),
                  (S.minFilter = Ct),
                  (S.generateMipmaps = !1))
                : (x = Oa.sRGBToLinear(x))
              : (ee !== It || te !== Mn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                G
              ))),
      x
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = Q),
    (this.setTexture2D = J),
    (this.setTexture2DArray = fe),
    (this.setTexture3D = B),
    (this.setTextureCube = $),
    (this.rebindTextures = Ze),
    (this.setupRenderTarget = at),
    (this.updateRenderTargetMipmap = Ke),
    (this.updateMultisampleRenderTarget = Je),
    (this.setupDepthRenderbuffer = Pe),
    (this.setupFrameBufferTexture = ve),
    (this.useMultisampledRTT = ze);
}
function af(a, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let r;
    if (s === Mn) return 5121;
    if (s === Wo) return 32819;
    if (s === Xo) return 32820;
    if (s === Go) return 5120;
    if (s === Vo) return 5122;
    if (s === Ia) return 5123;
    if (s === Ho) return 5124;
    if (s === _n) return 5125;
    if (s === xn) return 5126;
    if (s === di)
      return n
        ? 5131
        : ((r = e.get("OES_texture_half_float")),
          r !== null ? r.HALF_FLOAT_OES : null);
    if (s === Yo) return 6406;
    if (s === It) return 6408;
    if (s === qo) return 6409;
    if (s === $o) return 6410;
    if (s === vn) return 6402;
    if (s === $n) return 34041;
    if (s === Us)
      return (r = e.get("EXT_sRGB")), r !== null ? r.SRGB_ALPHA_EXT : null;
    if (s === jo) return 6403;
    if (s === Zo) return 36244;
    if (s === Ko) return 33319;
    if (s === Jo) return 33320;
    if (s === Qo) return 36249;
    if (s === Ji || s === Qi || s === es || s === ts)
      if (o === Ue)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (s === Ji) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Qi) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === es) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === ts) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (s === Ji) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Qi) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === es) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === ts) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === cr || s === hr || s === ur || s === dr)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (s === cr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === hr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ur) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === dr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === el)
      return (
        (r = e.get("WEBGL_compressed_texture_etc1")),
        r !== null ? r.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === fr || s === pr)
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (s === fr)
          return o === Ue ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (s === pr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === mr ||
      s === gr ||
      s === _r ||
      s === xr ||
      s === vr ||
      s === Mr ||
      s === yr ||
      s === br ||
      s === Sr ||
      s === wr ||
      s === Er ||
      s === Ar ||
      s === Tr ||
      s === Cr
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (s === mr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === gr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === _r)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === xr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === vr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Mr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === yr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === br)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Sr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === wr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Er)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ar)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Tr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Cr)
          return o === Ue
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === ns)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (s === ns)
          return o === Ue
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (s === tl || s === Lr || s === Dr || s === Pr)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (s === ns) return r.COMPRESSED_RED_RGTC1_EXT;
        if (s === Lr) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Dr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Pr) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === Wn
      ? n
        ? 34042
        : ((r = e.get("WEBGL_depth_texture")),
          r !== null ? r.UNSIGNED_INT_24_8_WEBGL : null)
      : a[s] !== void 0
      ? a[s]
      : null;
  }
  return {
    convert: i,
  };
}
class of extends St {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Oi extends it {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const lf = {
  type: "move",
};
class Cs {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Oi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = {
          pinching: !1,
        })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Oi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new D()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new D())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Oi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new D()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new D())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (
      this.dispatchEvent({
        type: "connected",
        data: e,
      }),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({
        type: "disconnected",
        data: e,
      }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      o = null;
    const r = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const d = t.getJointPose(p, n),
            g = this._getHandJoint(l, p);
          d !== null &&
            (g.matrix.fromArray(d.transform.matrix),
            g.matrix.decompose(g.position, g.rotation, g.scale),
            (g.jointRadius = d.radius)),
            (g.visible = d !== null);
        }
        const h = l.joints["index-finger-tip"],
          f = l.joints["thumb-tip"],
          u = h.position.distanceTo(f.position),
          m = 0.02,
          v = 0.005;
        l.inputState.pinching && u > m + v
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            u <= m - v &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (c.matrix.fromArray(s.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            s.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(s.linearVelocity))
              : (c.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(s.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      r !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (r.matrix.fromArray(i.transform.matrix),
          r.matrix.decompose(r.position, r.rotation, r.scale),
          i.linearVelocity
            ? ((r.hasLinearVelocity = !0),
              r.linearVelocity.copy(i.linearVelocity))
            : (r.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((r.hasAngularVelocity = !0),
              r.angularVelocity.copy(i.angularVelocity))
            : (r.hasAngularVelocity = !1),
          this.dispatchEvent(lf)));
    }
    return (
      r !== null && (r.visible = i !== null),
      c !== null && (c.visible = s !== null),
      l !== null && (l.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Oi();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class cf extends Et {
  constructor(e, t, n, i, s, o, r, c, l, h) {
    if (((h = h !== void 0 ? h : vn), h !== vn && h !== $n))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === vn && (n = _n),
      n === void 0 && h === $n && (n = Wn),
      super(null, i, s, o, r, c, h, n, l),
      (this.isDepthTexture = !0),
      (this.image = {
        width: e,
        height: t,
      }),
      (this.magFilter = r !== void 0 ? r : dt),
      (this.minFilter = c !== void 0 ? c : dt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class hf extends En {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      o = null,
      r = "local-floor",
      c = 1,
      l = null,
      h = null,
      f = null,
      u = null,
      m = null,
      v = null;
    const p = t.getContextAttributes();
    let d = null,
      g = null;
    const b = [],
      _ = [],
      E = new Set(),
      w = new Map(),
      L = new St();
    L.layers.enable(1), (L.viewport = new nt());
    const O = new St();
    O.layers.enable(2), (O.viewport = new nt());
    const M = [L, O],
      T = new of();
    T.layers.enable(1), T.layers.enable(2);
    let F = null,
      Y = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (B) {
        let $ = b[B];
        return (
          $ === void 0 && (($ = new Cs()), (b[B] = $)), $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (B) {
        let $ = b[B];
        return $ === void 0 && (($ = new Cs()), (b[B] = $)), $.getGripSpace();
      }),
      (this.getHand = function (B) {
        let $ = b[B];
        return $ === void 0 && (($ = new Cs()), (b[B] = $)), $.getHandSpace();
      });
    function K(B) {
      const $ = _.indexOf(B.inputSource);
      if ($ === -1) return;
      const ie = b[$];
      ie !== void 0 &&
        ie.dispatchEvent({
          type: B.type,
          data: B.inputSource,
        });
    }
    function U() {
      i.removeEventListener("select", K),
        i.removeEventListener("selectstart", K),
        i.removeEventListener("selectend", K),
        i.removeEventListener("squeeze", K),
        i.removeEventListener("squeezestart", K),
        i.removeEventListener("squeezeend", K),
        i.removeEventListener("end", U),
        i.removeEventListener("inputsourceschange", I);
      for (let B = 0; B < b.length; B++) {
        const $ = _[B];
        $ !== null && ((_[B] = null), b[B].disconnect($));
      }
      (F = null),
        (Y = null),
        e.setRenderTarget(d),
        (m = null),
        (u = null),
        (f = null),
        (i = null),
        (g = null),
        fe.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({
          type: "sessionend",
        });
    }
    (this.setFramebufferScaleFactor = function (B) {
      (s = B),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (B) {
        (r = B),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (B) {
        l = B;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : m;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (B) {
        if (((i = B), i !== null)) {
          if (
            ((d = e.getRenderTarget()),
            i.addEventListener("select", K),
            i.addEventListener("selectstart", K),
            i.addEventListener("selectend", K),
            i.addEventListener("squeeze", K),
            i.addEventListener("squeezestart", K),
            i.addEventListener("squeezeend", K),
            i.addEventListener("end", U),
            i.addEventListener("inputsourceschange", I),
            p.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const $ = {
              antialias: i.renderState.layers === void 0 ? p.antialias : !0,
              alpha: p.alpha,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(i, t, $)),
              i.updateRenderState({
                baseLayer: m,
              }),
              (g = new Sn(m.framebufferWidth, m.framebufferHeight, {
                format: It,
                type: Mn,
                encoding: e.outputEncoding,
                stencilBuffer: p.stencil,
              }));
          } else {
            let $ = null,
              ie = null,
              N = null;
            p.depth &&
              ((N = p.stencil ? 35056 : 33190),
              ($ = p.stencil ? $n : vn),
              (ie = p.stencil ? Wn : _n));
            const le = {
              colorFormat: 32856,
              depthFormat: N,
              scaleFactor: s,
            };
            (f = new XRWebGLBinding(i, t)),
              (u = f.createProjectionLayer(le)),
              i.updateRenderState({
                layers: [u],
              }),
              (g = new Sn(u.textureWidth, u.textureHeight, {
                format: It,
                type: Mn,
                depthTexture: new cf(
                  u.textureWidth,
                  u.textureHeight,
                  ie,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  $
                ),
                stencilBuffer: p.stencil,
                encoding: e.outputEncoding,
                samples: p.antialias ? 4 : 0,
              }));
            const ce = e.properties.get(g);
            ce.__ignoreDepthValues = u.ignoreDepthValues;
          }
          (g.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (o = await i.requestReferenceSpace(r)),
            fe.setContext(i),
            fe.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({
              type: "sessionstart",
            });
        }
      });
    function I(B) {
      for (let $ = 0; $ < B.removed.length; $++) {
        const ie = B.removed[$],
          N = _.indexOf(ie);
        N >= 0 && ((_[N] = null), b[N].disconnect(ie));
      }
      for (let $ = 0; $ < B.added.length; $++) {
        const ie = B.added[$];
        let N = _.indexOf(ie);
        if (N === -1) {
          for (let ce = 0; ce < b.length; ce++)
            if (ce >= _.length) {
              _.push(ie), (N = ce);
              break;
            } else if (_[ce] === null) {
              (_[ce] = ie), (N = ce);
              break;
            }
          if (N === -1) break;
        }
        const le = b[N];
        le && le.connect(ie);
      }
    }
    const H = new D(),
      Z = new D();
    function Q(B, $, ie) {
      H.setFromMatrixPosition($.matrixWorld),
        Z.setFromMatrixPosition(ie.matrixWorld);
      const N = H.distanceTo(Z),
        le = $.projectionMatrix.elements,
        ce = ie.projectionMatrix.elements,
        ue = le[14] / (le[10] - 1),
        he = le[14] / (le[10] + 1),
        ve = (le[9] + 1) / le[5],
        ye = (le[9] - 1) / le[5],
        Se = (le[8] - 1) / le[0],
        Pe = (ce[8] + 1) / ce[0],
        Ze = ue * Se,
        at = ue * Pe,
        Ke = N / (-Se + Pe),
        Je = Ke * -Se;
      $.matrixWorld.decompose(B.position, B.quaternion, B.scale),
        B.translateX(Je),
        B.translateZ(Ke),
        B.matrixWorld.compose(B.position, B.quaternion, B.scale),
        B.matrixWorldInverse.copy(B.matrixWorld).invert();
      const ke = ue + Ke,
        ze = he + Ke,
        gt = Ze - Je,
        ot = at + (N - Je),
        S = ((ve * he) / ze) * ke,
        x = ((ye * he) / ze) * ke;
      B.projectionMatrix.makePerspective(gt, ot, S, x, ke, ze);
    }
    function X(B, $) {
      $ === null
        ? B.matrixWorld.copy(B.matrix)
        : B.matrixWorld.multiplyMatrices($.matrixWorld, B.matrix),
        B.matrixWorldInverse.copy(B.matrixWorld).invert();
    }
    (this.updateCamera = function (B) {
      if (i === null) return;
      (T.near = O.near = L.near = B.near),
        (T.far = O.far = L.far = B.far),
        (F !== T.near || Y !== T.far) &&
          (i.updateRenderState({
            depthNear: T.near,
            depthFar: T.far,
          }),
          (F = T.near),
          (Y = T.far));
      const $ = B.parent,
        ie = T.cameras;
      X(T, $);
      for (let le = 0; le < ie.length; le++) X(ie[le], $);
      T.matrixWorld.decompose(T.position, T.quaternion, T.scale),
        B.matrix.copy(T.matrix),
        B.matrix.decompose(B.position, B.quaternion, B.scale);
      const N = B.children;
      for (let le = 0, ce = N.length; le < ce; le++)
        N[le].updateMatrixWorld(!0);
      ie.length === 2
        ? Q(T, L, O)
        : T.projectionMatrix.copy(L.projectionMatrix);
    }),
      (this.getCamera = function () {
        return T;
      }),
      (this.getFoveation = function () {
        if (!(u === null && m === null)) return c;
      }),
      (this.setFoveation = function (B) {
        (c = B),
          u !== null && (u.fixedFoveation = B),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = B);
      }),
      (this.getPlanes = function () {
        return E;
      });
    let q = null;
    function J(B, $) {
      if (((h = $.getViewerPose(l || o)), (v = $), h !== null)) {
        const ie = h.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(g, m.framebuffer),
          e.setRenderTarget(g));
        let N = !1;
        ie.length !== T.cameras.length && ((T.cameras.length = 0), (N = !0));
        for (let le = 0; le < ie.length; le++) {
          const ce = ie[le];
          let ue = null;
          if (m !== null) ue = m.getViewport(ce);
          else {
            const ve = f.getViewSubImage(u, ce);
            (ue = ve.viewport),
              le === 0 &&
                (e.setRenderTargetTextures(
                  g,
                  ve.colorTexture,
                  u.ignoreDepthValues ? void 0 : ve.depthStencilTexture
                ),
                e.setRenderTarget(g));
          }
          let he = M[le];
          he === void 0 &&
            ((he = new St()),
            he.layers.enable(le),
            (he.viewport = new nt()),
            (M[le] = he)),
            he.matrix.fromArray(ce.transform.matrix),
            he.projectionMatrix.fromArray(ce.projectionMatrix),
            he.viewport.set(ue.x, ue.y, ue.width, ue.height),
            le === 0 && T.matrix.copy(he.matrix),
            N === !0 && T.cameras.push(he);
        }
      }
      for (let ie = 0; ie < b.length; ie++) {
        const N = _[ie],
          le = b[ie];
        N !== null && le !== void 0 && le.update(N, $, l || o);
      }
      if ((q && q(B, $), $.detectedPlanes)) {
        n.dispatchEvent({
          type: "planesdetected",
          data: $.detectedPlanes,
        });
        let ie = null;
        for (const N of E)
          $.detectedPlanes.has(N) || (ie === null && (ie = []), ie.push(N));
        if (ie !== null)
          for (const N of ie)
            E.delete(N),
              w.delete(N),
              n.dispatchEvent({
                type: "planeremoved",
                data: N,
              });
        for (const N of $.detectedPlanes)
          if (!E.has(N))
            E.add(N),
              w.set(N, $.lastChangedTime),
              n.dispatchEvent({
                type: "planeadded",
                data: N,
              });
          else {
            const le = w.get(N);
            N.lastChangedTime > le &&
              (w.set(N, N.lastChangedTime),
              n.dispatchEvent({
                type: "planechanged",
                data: N,
              }));
          }
      }
      v = null;
    }
    const fe = new qa();
    fe.setAnimationLoop(J),
      (this.setAnimationLoop = function (B) {
        q = B;
      }),
      (this.dispose = function () {});
  }
}
function uf(a, e) {
  function t(p, d) {
    d.color.getRGB(p.fogColor.value, Xa(a)),
      d.isFog
        ? ((p.fogNear.value = d.near), (p.fogFar.value = d.far))
        : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function n(p, d, g, b, _) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial
      ? i(p, d)
      : d.isMeshToonMaterial
      ? (i(p, d), h(p, d))
      : d.isMeshPhongMaterial
      ? (i(p, d), l(p, d))
      : d.isMeshStandardMaterial
      ? (i(p, d), f(p, d), d.isMeshPhysicalMaterial && u(p, d, _))
      : d.isMeshMatcapMaterial
      ? (i(p, d), m(p, d))
      : d.isMeshDepthMaterial
      ? i(p, d)
      : d.isMeshDistanceMaterial
      ? (i(p, d), v(p, d))
      : d.isMeshNormalMaterial
      ? i(p, d)
      : d.isLineBasicMaterial
      ? (s(p, d), d.isLineDashedMaterial && o(p, d))
      : d.isPointsMaterial
      ? r(p, d, g, b)
      : d.isSpriteMaterial
      ? c(p, d)
      : d.isShadowMaterial
      ? (p.color.value.copy(d.color), (p.opacity.value = d.opacity))
      : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function i(p, d) {
    (p.opacity.value = d.opacity),
      d.color && p.diffuse.value.copy(d.color),
      d.emissive &&
        p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && (p.map.value = d.map),
      d.alphaMap && (p.alphaMap.value = d.alphaMap),
      d.bumpMap &&
        ((p.bumpMap.value = d.bumpMap),
        (p.bumpScale.value = d.bumpScale),
        d.side === wt && (p.bumpScale.value *= -1)),
      d.displacementMap &&
        ((p.displacementMap.value = d.displacementMap),
        (p.displacementScale.value = d.displacementScale),
        (p.displacementBias.value = d.displacementBias)),
      d.emissiveMap && (p.emissiveMap.value = d.emissiveMap),
      d.normalMap &&
        ((p.normalMap.value = d.normalMap),
        p.normalScale.value.copy(d.normalScale),
        d.side === wt && p.normalScale.value.negate()),
      d.specularMap && (p.specularMap.value = d.specularMap),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const g = e.get(d).envMap;
    if (
      (g &&
        ((p.envMap.value = g),
        (p.flipEnvMap.value =
          g.isCubeTexture && g.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = d.reflectivity),
        (p.ior.value = d.ior),
        (p.refractionRatio.value = d.refractionRatio)),
      d.lightMap)
    ) {
      p.lightMap.value = d.lightMap;
      const E = a.useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = d.lightMapIntensity * E;
    }
    d.aoMap &&
      ((p.aoMap.value = d.aoMap), (p.aoMapIntensity.value = d.aoMapIntensity));
    let b;
    d.map
      ? (b = d.map)
      : d.specularMap
      ? (b = d.specularMap)
      : d.displacementMap
      ? (b = d.displacementMap)
      : d.normalMap
      ? (b = d.normalMap)
      : d.bumpMap
      ? (b = d.bumpMap)
      : d.roughnessMap
      ? (b = d.roughnessMap)
      : d.metalnessMap
      ? (b = d.metalnessMap)
      : d.alphaMap
      ? (b = d.alphaMap)
      : d.emissiveMap
      ? (b = d.emissiveMap)
      : d.clearcoatMap
      ? (b = d.clearcoatMap)
      : d.clearcoatNormalMap
      ? (b = d.clearcoatNormalMap)
      : d.clearcoatRoughnessMap
      ? (b = d.clearcoatRoughnessMap)
      : d.iridescenceMap
      ? (b = d.iridescenceMap)
      : d.iridescenceThicknessMap
      ? (b = d.iridescenceThicknessMap)
      : d.specularIntensityMap
      ? (b = d.specularIntensityMap)
      : d.specularColorMap
      ? (b = d.specularColorMap)
      : d.transmissionMap
      ? (b = d.transmissionMap)
      : d.thicknessMap
      ? (b = d.thicknessMap)
      : d.sheenColorMap
      ? (b = d.sheenColorMap)
      : d.sheenRoughnessMap && (b = d.sheenRoughnessMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        p.uvTransform.value.copy(b.matrix));
    let _;
    d.aoMap ? (_ = d.aoMap) : d.lightMap && (_ = d.lightMap),
      _ !== void 0 &&
        (_.isWebGLRenderTarget && (_ = _.texture),
        _.matrixAutoUpdate === !0 && _.updateMatrix(),
        p.uv2Transform.value.copy(_.matrix));
  }
  function s(p, d) {
    p.diffuse.value.copy(d.color), (p.opacity.value = d.opacity);
  }
  function o(p, d) {
    (p.dashSize.value = d.dashSize),
      (p.totalSize.value = d.dashSize + d.gapSize),
      (p.scale.value = d.scale);
  }
  function r(p, d, g, b) {
    p.diffuse.value.copy(d.color),
      (p.opacity.value = d.opacity),
      (p.size.value = d.size * g),
      (p.scale.value = b * 0.5),
      d.map && (p.map.value = d.map),
      d.alphaMap && (p.alphaMap.value = d.alphaMap),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    let _;
    d.map ? (_ = d.map) : d.alphaMap && (_ = d.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        p.uvTransform.value.copy(_.matrix));
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color),
      (p.opacity.value = d.opacity),
      (p.rotation.value = d.rotation),
      d.map && (p.map.value = d.map),
      d.alphaMap && (p.alphaMap.value = d.alphaMap),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    let g;
    d.map ? (g = d.map) : d.alphaMap && (g = d.alphaMap),
      g !== void 0 &&
        (g.matrixAutoUpdate === !0 && g.updateMatrix(),
        p.uvTransform.value.copy(g.matrix));
  }
  function l(p, d) {
    p.specular.value.copy(d.specular),
      (p.shininess.value = Math.max(d.shininess, 1e-4));
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function f(p, d) {
    (p.roughness.value = d.roughness),
      (p.metalness.value = d.metalness),
      d.roughnessMap && (p.roughnessMap.value = d.roughnessMap),
      d.metalnessMap && (p.metalnessMap.value = d.metalnessMap),
      e.get(d).envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function u(p, d, g) {
    (p.ior.value = d.ior),
      d.sheen > 0 &&
        (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (p.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap),
        d.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = d.sheenRoughnessMap)),
      d.clearcoat > 0 &&
        ((p.clearcoat.value = d.clearcoat),
        (p.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap),
        d.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
        d.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = d.clearcoatNormalMap),
          d.side === wt && p.clearcoatNormalScale.value.negate())),
      d.iridescence > 0 &&
        ((p.iridescence.value = d.iridescence),
        (p.iridescenceIOR.value = d.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
        d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap),
        d.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap)),
      d.transmission > 0 &&
        ((p.transmission.value = d.transmission),
        (p.transmissionSamplerMap.value = g.texture),
        p.transmissionSamplerSize.value.set(g.width, g.height),
        d.transmissionMap && (p.transmissionMap.value = d.transmissionMap),
        (p.thickness.value = d.thickness),
        d.thicknessMap && (p.thicknessMap.value = d.thicknessMap),
        (p.attenuationDistance.value = d.attenuationDistance),
        p.attenuationColor.value.copy(d.attenuationColor)),
      (p.specularIntensity.value = d.specularIntensity),
      p.specularColor.value.copy(d.specularColor),
      d.specularIntensityMap &&
        (p.specularIntensityMap.value = d.specularIntensityMap),
      d.specularColorMap && (p.specularColorMap.value = d.specularColorMap);
  }
  function m(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function v(p, d) {
    p.referencePosition.value.copy(d.referencePosition),
      (p.nearDistance.value = d.nearDistance),
      (p.farDistance.value = d.farDistance);
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n,
  };
}
function df(a, e, t, n) {
  let i = {},
    s = {},
    o = [];
  const r = t.isWebGL2 ? a.getParameter(35375) : 0;
  function c(b, _) {
    const E = _.program;
    n.uniformBlockBinding(b, E);
  }
  function l(b, _) {
    let E = i[b.id];
    E === void 0 &&
      (v(b), (E = h(b)), (i[b.id] = E), b.addEventListener("dispose", d));
    const w = _.program;
    n.updateUBOMapping(b, w);
    const L = e.render.frame;
    s[b.id] !== L && (u(b), (s[b.id] = L));
  }
  function h(b) {
    const _ = f();
    b.__bindingPointIndex = _;
    const E = a.createBuffer(),
      w = b.__size,
      L = b.usage;
    return (
      a.bindBuffer(35345, E),
      a.bufferData(35345, w, L),
      a.bindBuffer(35345, null),
      a.bindBufferBase(35345, _, E),
      E
    );
  }
  function f() {
    for (let b = 0; b < r; b++) if (o.indexOf(b) === -1) return o.push(b), b;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function u(b) {
    const _ = i[b.id],
      E = b.uniforms,
      w = b.__cache;
    a.bindBuffer(35345, _);
    for (let L = 0, O = E.length; L < O; L++) {
      const M = E[L];
      if (m(M, L, w) === !0) {
        const T = M.__offset,
          F = Array.isArray(M.value) ? M.value : [M.value];
        let Y = 0;
        for (let K = 0; K < F.length; K++) {
          const U = F[K],
            I = p(U);
          typeof U == "number"
            ? ((M.__data[0] = U), a.bufferSubData(35345, T + Y, M.__data))
            : U.isMatrix3
            ? ((M.__data[0] = U.elements[0]),
              (M.__data[1] = U.elements[1]),
              (M.__data[2] = U.elements[2]),
              (M.__data[3] = U.elements[0]),
              (M.__data[4] = U.elements[3]),
              (M.__data[5] = U.elements[4]),
              (M.__data[6] = U.elements[5]),
              (M.__data[7] = U.elements[0]),
              (M.__data[8] = U.elements[6]),
              (M.__data[9] = U.elements[7]),
              (M.__data[10] = U.elements[8]),
              (M.__data[11] = U.elements[0]))
            : (U.toArray(M.__data, Y),
              (Y += I.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        a.bufferSubData(35345, T, M.__data);
      }
    }
    a.bindBuffer(35345, null);
  }
  function m(b, _, E) {
    const w = b.value;
    if (E[_] === void 0) {
      if (typeof w == "number") E[_] = w;
      else {
        const L = Array.isArray(w) ? w : [w],
          O = [];
        for (let M = 0; M < L.length; M++) O.push(L[M].clone());
        E[_] = O;
      }
      return !0;
    } else if (typeof w == "number") {
      if (E[_] !== w) return (E[_] = w), !0;
    } else {
      const L = Array.isArray(E[_]) ? E[_] : [E[_]],
        O = Array.isArray(w) ? w : [w];
      for (let M = 0; M < L.length; M++) {
        const T = L[M];
        if (T.equals(O[M]) === !1) return T.copy(O[M]), !0;
      }
    }
    return !1;
  }
  function v(b) {
    const _ = b.uniforms;
    let E = 0;
    const w = 16;
    let L = 0;
    for (let O = 0, M = _.length; O < M; O++) {
      const T = _[O],
        F = {
          boundary: 0,
          storage: 0,
        },
        Y = Array.isArray(T.value) ? T.value : [T.value];
      for (let K = 0, U = Y.length; K < U; K++) {
        const I = Y[K],
          H = p(I);
        (F.boundary += H.boundary), (F.storage += H.storage);
      }
      if (
        ((T.__data = new Float32Array(
          F.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (T.__offset = E),
        O > 0)
      ) {
        L = E % w;
        const K = w - L;
        L !== 0 && K - F.boundary < 0 && ((E += w - L), (T.__offset = E));
      }
      E += F.storage;
    }
    return (
      (L = E % w), L > 0 && (E += w - L), (b.__size = E), (b.__cache = {}), this
    );
  }
  function p(b) {
    const _ = {
      boundary: 0,
      storage: 0,
    };
    return (
      typeof b == "number"
        ? ((_.boundary = 4), (_.storage = 4))
        : b.isVector2
        ? ((_.boundary = 8), (_.storage = 8))
        : b.isVector3 || b.isColor
        ? ((_.boundary = 16), (_.storage = 12))
        : b.isVector4
        ? ((_.boundary = 16), (_.storage = 16))
        : b.isMatrix3
        ? ((_.boundary = 48), (_.storage = 48))
        : b.isMatrix4
        ? ((_.boundary = 64), (_.storage = 64))
        : b.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            b
          ),
      _
    );
  }
  function d(b) {
    const _ = b.target;
    _.removeEventListener("dispose", d);
    const E = o.indexOf(_.__bindingPointIndex);
    o.splice(E, 1), a.deleteBuffer(i[_.id]), delete i[_.id], delete s[_.id];
  }
  function g() {
    for (const b in i) a.deleteBuffer(i[b]);
    (o = []), (i = {}), (s = {});
  }
  return {
    bind: c,
    update: l,
    dispose: g,
  };
}
function ff() {
  const a = Gi("canvas");
  return (a.style.display = "block"), a;
}
function js(a = {}) {
  this.isWebGLRenderer = !0;
  const e = a.canvas !== void 0 ? a.canvas : ff(),
    t = a.context !== void 0 ? a.context : null,
    n = a.depth !== void 0 ? a.depth : !0,
    i = a.stencil !== void 0 ? a.stencil : !0,
    s = a.antialias !== void 0 ? a.antialias : !1,
    o = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0,
    r = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1,
    c = a.powerPreference !== void 0 ? a.powerPreference : "default",
    l =
      a.failIfMajorPerformanceCaveat !== void 0
        ? a.failIfMajorPerformanceCaveat
        : !1;
  let h;
  t !== null
    ? (h = t.getContextAttributes().alpha)
    : (h = a.alpha !== void 0 ? a.alpha : !1);
  let f = null,
    u = null;
  const m = [],
    v = [];
  (this.domElement = e),
    (this.debug = {
      checkShaderErrors: !0,
    }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = yn),
    (this.useLegacyLights = !0),
    (this.toneMapping = Jt),
    (this.toneMappingExposure = 1);
  const p = this;
  let d = !1,
    g = 0,
    b = 0,
    _ = null,
    E = -1,
    w = null;
  const L = new nt(),
    O = new nt();
  let M = null,
    T = e.width,
    F = e.height,
    Y = 1,
    K = null,
    U = null;
  const I = new nt(0, 0, T, F),
    H = new nt(0, 0, T, F);
  let Z = !1;
  const Q = new Ys();
  let X = !1,
    q = !1,
    J = null;
  const fe = new qe(),
    B = new D(),
    $ = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ie() {
    return _ === null ? Y : 1;
  }
  let N = t;
  function le(y, z) {
    for (let k = 0; k < y.length; k++) {
      const R = y[k],
        W = e.getContext(R, z);
      if (W !== null) return W;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: r,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Hs}`),
      e.addEventListener("webglcontextlost", pe, !1),
      e.addEventListener("webglcontextrestored", ge, !1),
      e.addEventListener("webglcontextcreationerror", me, !1),
      N === null)
    ) {
      const z = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && z.shift(), (N = le(z, y)), N === null))
        throw le(z)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    N.getShaderPrecisionFormat === void 0 &&
      (N.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1,
        };
      });
  } catch (y) {
    throw (console.error("THREE.WebGLRenderer: " + y.message), y);
  }
  let ce,
    ue,
    he,
    ve,
    ye,
    Se,
    Pe,
    Ze,
    at,
    Ke,
    Je,
    ke,
    ze,
    gt,
    ot,
    S,
    x,
    G,
    ee,
    te,
    re,
    _e,
    A,
    P;
  function ae() {
    (ce = new Su(N)),
      (ue = new gu(N, ce, a)),
      ce.init(ue),
      (_e = new af(N, ce, ue)),
      (he = new sf(N, ce, ue)),
      (ve = new Au()),
      (ye = new Hd()),
      (Se = new rf(N, ce, he, ye, ue, _e, ve)),
      (Pe = new xu(p)),
      (Ze = new bu(p)),
      (at = new Fl(N, ue)),
      (A = new pu(N, ce, at, ue)),
      (Ke = new wu(N, at, ve, A)),
      (Je = new Du(N, Ke, at, ve)),
      (ee = new Lu(N, ue, Se)),
      (S = new _u(ye)),
      (ke = new Vd(p, Pe, Ze, ce, ue, A, S)),
      (ze = new uf(p, ye)),
      (gt = new Xd()),
      (ot = new Kd(ce, ue)),
      (G = new fu(p, Pe, Ze, he, Je, h, o)),
      (x = new nf(p, Je, ue)),
      (P = new df(N, ve, ue, he)),
      (te = new mu(N, ce, ve, ue)),
      (re = new Eu(N, ce, ve, ue)),
      (ve.programs = ke.programs),
      (p.capabilities = ue),
      (p.extensions = ce),
      (p.properties = ye),
      (p.renderLists = gt),
      (p.shadowMap = x),
      (p.state = he),
      (p.info = ve);
  }
  ae();
  const se = new hf(p, N);
  (this.xr = se),
    (this.getContext = function () {
      return N;
    }),
    (this.getContextAttributes = function () {
      return N.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const y = ce.get("WEBGL_lose_context");
      y && y.loseContext();
    }),
    (this.forceContextRestore = function () {
      const y = ce.get("WEBGL_lose_context");
      y && y.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return Y;
    }),
    (this.setPixelRatio = function (y) {
      y !== void 0 && ((Y = y), this.setSize(T, F, !1));
    }),
    (this.getSize = function (y) {
      return y.set(T, F);
    }),
    (this.setSize = function (y, z, k = !0) {
      if (se.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (T = y),
        (F = z),
        (e.width = Math.floor(y * Y)),
        (e.height = Math.floor(z * Y)),
        k === !0 && ((e.style.width = y + "px"), (e.style.height = z + "px")),
        this.setViewport(0, 0, y, z);
    }),
    (this.getDrawingBufferSize = function (y) {
      return y.set(T * Y, F * Y).floor();
    }),
    (this.setDrawingBufferSize = function (y, z, k) {
      (T = y),
        (F = z),
        (Y = k),
        (e.width = Math.floor(y * k)),
        (e.height = Math.floor(z * k)),
        this.setViewport(0, 0, y, z);
    }),
    (this.getCurrentViewport = function (y) {
      return y.copy(L);
    }),
    (this.getViewport = function (y) {
      return y.copy(I);
    }),
    (this.setViewport = function (y, z, k, R) {
      y.isVector4 ? I.set(y.x, y.y, y.z, y.w) : I.set(y, z, k, R),
        he.viewport(L.copy(I).multiplyScalar(Y).floor());
    }),
    (this.getScissor = function (y) {
      return y.copy(H);
    }),
    (this.setScissor = function (y, z, k, R) {
      y.isVector4 ? H.set(y.x, y.y, y.z, y.w) : H.set(y, z, k, R),
        he.scissor(O.copy(H).multiplyScalar(Y).floor());
    }),
    (this.getScissorTest = function () {
      return Z;
    }),
    (this.setScissorTest = function (y) {
      he.setScissorTest((Z = y));
    }),
    (this.setOpaqueSort = function (y) {
      K = y;
    }),
    (this.setTransparentSort = function (y) {
      U = y;
    }),
    (this.getClearColor = function (y) {
      return y.copy(G.getClearColor());
    }),
    (this.setClearColor = function () {
      G.setClearColor.apply(G, arguments);
    }),
    (this.getClearAlpha = function () {
      return G.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      G.setClearAlpha.apply(G, arguments);
    }),
    (this.clear = function (y = !0, z = !0, k = !0) {
      let R = 0;
      y && (R |= 16384), z && (R |= 256), k && (R |= 1024), N.clear(R);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", pe, !1),
        e.removeEventListener("webglcontextrestored", ge, !1),
        e.removeEventListener("webglcontextcreationerror", me, !1),
        gt.dispose(),
        ot.dispose(),
        ye.dispose(),
        Pe.dispose(),
        Ze.dispose(),
        Je.dispose(),
        A.dispose(),
        P.dispose(),
        ke.dispose(),
        se.dispose(),
        se.removeEventListener("sessionstart", j),
        se.removeEventListener("sessionend", oe),
        J && (J.dispose(), (J = null)),
        de.stop();
    });
  function pe(y) {
    y.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (d = !0);
  }
  function ge() {
    console.log("THREE.WebGLRenderer: Context Restored."), (d = !1);
    const y = ve.autoReset,
      z = x.enabled,
      k = x.autoUpdate,
      R = x.needsUpdate,
      W = x.type;
    ae(),
      (ve.autoReset = y),
      (x.enabled = z),
      (x.autoUpdate = k),
      (x.needsUpdate = R),
      (x.type = W);
  }
  function me(y) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      y.statusMessage
    );
  }
  function Te(y) {
    const z = y.target;
    z.removeEventListener("dispose", Te), Re(z);
  }
  function Re(y) {
    Ne(y), ye.remove(y);
  }
  function Ne(y) {
    const z = ye.get(y).programs;
    z !== void 0 &&
      (z.forEach(function (k) {
        ke.releaseProgram(k);
      }),
      y.isShaderMaterial && ke.releaseShaderCache(y));
  }
  (this.renderBufferDirect = function (y, z, k, R, W, xe) {
    z === null && (z = $);
    const Me = W.isMesh && W.matrixWorld.determinant() < 0,
      we = ao(y, z, k, R, W);
    he.setMaterial(R, Me);
    let Ae = k.index,
      Fe = 1;
    R.wireframe === !0 && ((Ae = Ke.getWireframeAttribute(k)), (Fe = 2));
    const Ce = k.drawRange,
      Le = k.attributes.position;
    let We = Ce.start * Fe,
      _t = (Ce.start + Ce.count) * Fe;
    xe !== null &&
      ((We = Math.max(We, xe.start * Fe)),
      (_t = Math.min(_t, (xe.start + xe.count) * Fe))),
      Ae !== null
        ? ((We = Math.max(We, 0)), (_t = Math.min(_t, Ae.count)))
        : Le != null && ((We = Math.max(We, 0)), (_t = Math.min(_t, Le.count)));
    const Xt = _t - We;
    if (Xt < 0 || Xt === 1 / 0) return;
    A.setup(W, R, we, k, Ae);
    let ln,
      Xe = te;
    if (
      (Ae !== null && ((ln = at.get(Ae)), (Xe = re), Xe.setIndex(ln)), W.isMesh)
    )
      R.wireframe === !0
        ? (he.setLineWidth(R.wireframeLinewidth * ie()), Xe.setMode(1))
        : Xe.setMode(4);
    else if (W.isLine) {
      let De = R.linewidth;
      De === void 0 && (De = 1),
        he.setLineWidth(De * ie()),
        W.isLineSegments
          ? Xe.setMode(1)
          : W.isLineLoop
          ? Xe.setMode(2)
          : Xe.setMode(3);
    } else W.isPoints ? Xe.setMode(0) : W.isSprite && Xe.setMode(4);
    if (W.isInstancedMesh) Xe.renderInstances(We, Xt, W.count);
    else if (k.isInstancedBufferGeometry) {
      const De = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0,
        qi = Math.min(k.instanceCount, De);
      Xe.renderInstances(We, Xt, qi);
    } else Xe.render(We, Xt);
  }),
    (this.compile = function (y, z) {
      function k(R, W, xe) {
        R.transparent === !0 && R.side === sn && R.forceSinglePass === !1
          ? ((R.side = wt),
            (R.needsUpdate = !0),
            At(R, W, xe),
            (R.side = on),
            (R.needsUpdate = !0),
            At(R, W, xe),
            (R.side = sn))
          : At(R, W, xe);
      }
      (u = ot.get(y)),
        u.init(),
        v.push(u),
        y.traverseVisible(function (R) {
          R.isLight &&
            R.layers.test(z.layers) &&
            (u.pushLight(R), R.castShadow && u.pushShadow(R));
        }),
        u.setupLights(p.useLegacyLights),
        y.traverse(function (R) {
          const W = R.material;
          if (W)
            if (Array.isArray(W))
              for (let xe = 0; xe < W.length; xe++) {
                const Me = W[xe];
                k(Me, y, R);
              }
            else k(W, y, R);
        }),
        v.pop(),
        (u = null);
    });
  let C = null;
  function V(y) {
    C && C(y);
  }
  function j() {
    de.stop();
  }
  function oe() {
    de.start();
  }
  const de = new qa();
  de.setAnimationLoop(V),
    typeof self < "u" && de.setContext(self),
    (this.setAnimationLoop = function (y) {
      (C = y), se.setAnimationLoop(y), y === null ? de.stop() : de.start();
    }),
    se.addEventListener("sessionstart", j),
    se.addEventListener("sessionend", oe),
    (this.render = function (y, z) {
      if (z !== void 0 && z.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (d === !0) return;
      y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
        z.parent === null &&
          z.matrixWorldAutoUpdate === !0 &&
          z.updateMatrixWorld(),
        se.enabled === !0 &&
          se.isPresenting === !0 &&
          (se.cameraAutoUpdate === !0 && se.updateCamera(z),
          (z = se.getCamera())),
        y.isScene === !0 && y.onBeforeRender(p, y, z, _),
        (u = ot.get(y, v.length)),
        u.init(),
        v.push(u),
        fe.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
        Q.setFromProjectionMatrix(fe),
        (q = this.localClippingEnabled),
        (X = S.init(this.clippingPlanes, q)),
        (f = gt.get(y, m.length)),
        f.init(),
        m.push(f),
        Oe(y, z, 0, p.sortObjects),
        f.finish(),
        p.sortObjects === !0 && f.sort(K, U),
        X === !0 && S.beginShadows();
      const k = u.state.shadowsArray;
      if (
        (x.render(k, y, z),
        X === !0 && S.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        G.render(f, y),
        u.setupLights(p.useLegacyLights),
        z.isArrayCamera)
      ) {
        const R = z.cameras;
        for (let W = 0, xe = R.length; W < xe; W++) {
          const Me = R[W];
          Qe(f, y, Me, Me.viewport);
        }
      } else Qe(f, y, z);
      _ !== null &&
        (Se.updateMultisampleRenderTarget(_), Se.updateRenderTargetMipmap(_)),
        y.isScene === !0 && y.onAfterRender(p, y, z),
        A.resetDefaultState(),
        (E = -1),
        (w = null),
        v.pop(),
        v.length > 0 ? (u = v[v.length - 1]) : (u = null),
        m.pop(),
        m.length > 0 ? (f = m[m.length - 1]) : (f = null);
    });
  function Oe(y, z, k, R) {
    if (y.visible === !1) return;
    if (y.layers.test(z.layers)) {
      if (y.isGroup) k = y.renderOrder;
      else if (y.isLOD) y.autoUpdate === !0 && y.update(z);
      else if (y.isLight) u.pushLight(y), y.castShadow && u.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || Q.intersectsSprite(y)) {
          R && B.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);
          const Me = Je.update(y),
            we = y.material;
          we.visible && f.push(y, Me, we, k, B.z, null);
        }
      } else if (
        (y.isMesh || y.isLine || y.isPoints) &&
        (y.isSkinnedMesh &&
          y.skeleton.frame !== ve.render.frame &&
          (y.skeleton.update(), (y.skeleton.frame = ve.render.frame)),
        !y.frustumCulled || Q.intersectsObject(y))
      ) {
        R && B.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);
        const Me = Je.update(y),
          we = y.material;
        if (Array.isArray(we)) {
          const Ae = Me.groups;
          for (let Fe = 0, Ce = Ae.length; Fe < Ce; Fe++) {
            const Le = Ae[Fe],
              We = we[Le.materialIndex];
            We && We.visible && f.push(y, Me, We, k, B.z, Le);
          }
        } else we.visible && f.push(y, Me, we, k, B.z, null);
      }
    }
    const xe = y.children;
    for (let Me = 0, we = xe.length; Me < we; Me++) Oe(xe[Me], z, k, R);
  }
  function Qe(y, z, k, R) {
    const W = y.opaque,
      xe = y.transmissive,
      Me = y.transparent;
    u.setupLightsView(k),
      X === !0 && S.setGlobalState(p.clippingPlanes, k),
      xe.length > 0 && lt(W, z, k),
      R && he.viewport(L.copy(R)),
      W.length > 0 && zt(W, z, k),
      xe.length > 0 && zt(xe, z, k),
      Me.length > 0 && zt(Me, z, k),
      he.buffers.depth.setTest(!0),
      he.buffers.depth.setMask(!0),
      he.buffers.color.setMask(!0),
      he.setPolygonOffset(!1);
  }
  function lt(y, z, k) {
    const R = ue.isWebGL2;
    J === null &&
      (J = new Sn(1024, 1024, {
        generateMipmaps: !0,
        type: ce.has("EXT_color_buffer_half_float") ? di : Mn,
        minFilter: ui,
        samples: R && s === !0 ? 4 : 0,
      }));
    const W = p.getRenderTarget();
    p.setRenderTarget(J), p.clear();
    const xe = p.toneMapping;
    (p.toneMapping = Jt),
      zt(y, z, k),
      (p.toneMapping = xe),
      Se.updateMultisampleRenderTarget(J),
      Se.updateRenderTargetMipmap(J),
      p.setRenderTarget(W);
  }
  function zt(y, z, k) {
    const R = z.isScene === !0 ? z.overrideMaterial : null;
    for (let W = 0, xe = y.length; W < xe; W++) {
      const Me = y[W],
        we = Me.object,
        Ae = Me.geometry,
        Fe = R === null ? Me.material : R,
        Ce = Me.group;
      we.layers.test(k.layers) && Ve(we, z, k, Ae, Fe, Ce);
    }
  }
  function Ve(y, z, k, R, W, xe) {
    y.onBeforeRender(p, z, k, R, W, xe),
      y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, y.matrixWorld),
      y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
      W.onBeforeRender(p, z, k, R, y, xe),
      W.transparent === !0 && W.side === sn && W.forceSinglePass === !1
        ? ((W.side = wt),
          (W.needsUpdate = !0),
          p.renderBufferDirect(k, z, R, W, y, xe),
          (W.side = on),
          (W.needsUpdate = !0),
          p.renderBufferDirect(k, z, R, W, y, xe),
          (W.side = sn))
        : p.renderBufferDirect(k, z, R, W, y, xe),
      y.onAfterRender(p, z, k, R, W, xe);
  }
  function At(y, z, k) {
    z.isScene !== !0 && (z = $);
    const R = ye.get(y),
      W = u.state.lights,
      xe = u.state.shadowsArray,
      Me = W.state.version,
      we = ke.getParameters(y, W.state, xe, z, k),
      Ae = ke.getProgramCacheKey(we);
    let Fe = R.programs;
    (R.environment = y.isMeshStandardMaterial ? z.environment : null),
      (R.fog = z.fog),
      (R.envMap = (y.isMeshStandardMaterial ? Ze : Pe).get(
        y.envMap || R.environment
      )),
      Fe === void 0 &&
        (y.addEventListener("dispose", Te),
        (Fe = new Map()),
        (R.programs = Fe));
    let Ce = Fe.get(Ae);
    if (Ce !== void 0) {
      if (R.currentProgram === Ce && R.lightsStateVersion === Me)
        return Ot(y, we), Ce;
    } else
      (we.uniforms = ke.getUniforms(y)),
        y.onBuild(k, we, p),
        y.onBeforeCompile(we, p),
        (Ce = ke.acquireProgram(we, Ae)),
        Fe.set(Ae, Ce),
        (R.uniforms = we.uniforms);
    const Le = R.uniforms;
    ((!y.isShaderMaterial && !y.isRawShaderMaterial) || y.clipping === !0) &&
      (Le.clippingPlanes = S.uniform),
      Ot(y, we),
      (R.needsLights = lo(y)),
      (R.lightsStateVersion = Me),
      R.needsLights &&
        ((Le.ambientLightColor.value = W.state.ambient),
        (Le.lightProbe.value = W.state.probe),
        (Le.directionalLights.value = W.state.directional),
        (Le.directionalLightShadows.value = W.state.directionalShadow),
        (Le.spotLights.value = W.state.spot),
        (Le.spotLightShadows.value = W.state.spotShadow),
        (Le.rectAreaLights.value = W.state.rectArea),
        (Le.ltc_1.value = W.state.rectAreaLTC1),
        (Le.ltc_2.value = W.state.rectAreaLTC2),
        (Le.pointLights.value = W.state.point),
        (Le.pointLightShadows.value = W.state.pointShadow),
        (Le.hemisphereLights.value = W.state.hemi),
        (Le.directionalShadowMap.value = W.state.directionalShadowMap),
        (Le.directionalShadowMatrix.value = W.state.directionalShadowMatrix),
        (Le.spotShadowMap.value = W.state.spotShadowMap),
        (Le.spotLightMatrix.value = W.state.spotLightMatrix),
        (Le.spotLightMap.value = W.state.spotLightMap),
        (Le.pointShadowMap.value = W.state.pointShadowMap),
        (Le.pointShadowMatrix.value = W.state.pointShadowMatrix));
    const We = Ce.getUniforms(),
      _t = ki.seqWithValue(We.seq, Le);
    return (R.currentProgram = Ce), (R.uniformsList = _t), Ce;
  }
  function Ot(y, z) {
    const k = ye.get(y);
    (k.outputEncoding = z.outputEncoding),
      (k.instancing = z.instancing),
      (k.skinning = z.skinning),
      (k.morphTargets = z.morphTargets),
      (k.morphNormals = z.morphNormals),
      (k.morphColors = z.morphColors),
      (k.morphTargetsCount = z.morphTargetsCount),
      (k.numClippingPlanes = z.numClippingPlanes),
      (k.numIntersection = z.numClipIntersection),
      (k.vertexAlphas = z.vertexAlphas),
      (k.vertexTangents = z.vertexTangents),
      (k.toneMapping = z.toneMapping);
  }
  function ao(y, z, k, R, W) {
    z.isScene !== !0 && (z = $), Se.resetTextureUnits();
    const xe = z.fog,
      Me = R.isMeshStandardMaterial ? z.environment : null,
      we =
        _ === null
          ? p.outputEncoding
          : _.isXRRenderTarget === !0
          ? _.texture.encoding
          : yn,
      Ae = (R.isMeshStandardMaterial ? Ze : Pe).get(R.envMap || Me),
      Fe =
        R.vertexColors === !0 &&
        !!k.attributes.color &&
        k.attributes.color.itemSize === 4,
      Ce = !!R.normalMap && !!k.attributes.tangent,
      Le = !!k.morphAttributes.position,
      We = !!k.morphAttributes.normal,
      _t = !!k.morphAttributes.color,
      Xt = R.toneMapped ? p.toneMapping : Jt,
      ln =
        k.morphAttributes.position ||
        k.morphAttributes.normal ||
        k.morphAttributes.color,
      Xe = ln !== void 0 ? ln.length : 0,
      De = ye.get(R),
      qi = u.state.lights;
    if (X === !0 && (q === !0 || y !== w)) {
      const xt = y === w && R.id === E;
      S.setState(R, y, xt);
    }
    let et = !1;
    R.version === De.__version
      ? ((De.needsLights && De.lightsStateVersion !== qi.state.version) ||
          De.outputEncoding !== we ||
          (W.isInstancedMesh && De.instancing === !1) ||
          (!W.isInstancedMesh && De.instancing === !0) ||
          (W.isSkinnedMesh && De.skinning === !1) ||
          (!W.isSkinnedMesh && De.skinning === !0) ||
          De.envMap !== Ae ||
          (R.fog === !0 && De.fog !== xe) ||
          (De.numClippingPlanes !== void 0 &&
            (De.numClippingPlanes !== S.numPlanes ||
              De.numIntersection !== S.numIntersection)) ||
          De.vertexAlphas !== Fe ||
          De.vertexTangents !== Ce ||
          De.morphTargets !== Le ||
          De.morphNormals !== We ||
          De.morphColors !== _t ||
          De.toneMapping !== Xt ||
          (ue.isWebGL2 === !0 && De.morphTargetsCount !== Xe)) &&
        (et = !0)
      : ((et = !0), (De.__version = R.version));
    let cn = De.currentProgram;
    et === !0 && (cn = At(R, z, W));
    let er = !1,
      ei = !1,
      $i = !1;
    const ct = cn.getUniforms(),
      hn = De.uniforms;
    if (
      (he.useProgram(cn.program) && ((er = !0), (ei = !0), ($i = !0)),
      R.id !== E && ((E = R.id), (ei = !0)),
      er || w !== y)
    ) {
      if (
        (ct.setValue(N, "projectionMatrix", y.projectionMatrix),
        ue.logarithmicDepthBuffer &&
          ct.setValue(N, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
        w !== y && ((w = y), (ei = !0), ($i = !0)),
        R.isShaderMaterial ||
          R.isMeshPhongMaterial ||
          R.isMeshToonMaterial ||
          R.isMeshStandardMaterial ||
          R.envMap)
      ) {
        const xt = ct.map.cameraPosition;
        xt !== void 0 && xt.setValue(N, B.setFromMatrixPosition(y.matrixWorld));
      }
      (R.isMeshPhongMaterial ||
        R.isMeshToonMaterial ||
        R.isMeshLambertMaterial ||
        R.isMeshBasicMaterial ||
        R.isMeshStandardMaterial ||
        R.isShaderMaterial) &&
        ct.setValue(N, "isOrthographic", y.isOrthographicCamera === !0),
        (R.isMeshPhongMaterial ||
          R.isMeshToonMaterial ||
          R.isMeshLambertMaterial ||
          R.isMeshBasicMaterial ||
          R.isMeshStandardMaterial ||
          R.isShaderMaterial ||
          R.isShadowMaterial ||
          W.isSkinnedMesh) &&
          ct.setValue(N, "viewMatrix", y.matrixWorldInverse);
    }
    if (W.isSkinnedMesh) {
      ct.setOptional(N, W, "bindMatrix"),
        ct.setOptional(N, W, "bindMatrixInverse");
      const xt = W.skeleton;
      xt &&
        (ue.floatVertexTextures
          ? (xt.boneTexture === null && xt.computeBoneTexture(),
            ct.setValue(N, "boneTexture", xt.boneTexture, Se),
            ct.setValue(N, "boneTextureSize", xt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const ji = k.morphAttributes;
    if (
      ((ji.position !== void 0 ||
        ji.normal !== void 0 ||
        (ji.color !== void 0 && ue.isWebGL2 === !0)) &&
        ee.update(W, k, cn),
      (ei || De.receiveShadow !== W.receiveShadow) &&
        ((De.receiveShadow = W.receiveShadow),
        ct.setValue(N, "receiveShadow", W.receiveShadow)),
      R.isMeshGouraudMaterial &&
        R.envMap !== null &&
        ((hn.envMap.value = Ae),
        (hn.flipEnvMap.value =
          Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1)),
      ei &&
        (ct.setValue(N, "toneMappingExposure", p.toneMappingExposure),
        De.needsLights && oo(hn, $i),
        xe && R.fog === !0 && ze.refreshFogUniforms(hn, xe),
        ze.refreshMaterialUniforms(hn, R, Y, F, J),
        ki.upload(N, De.uniformsList, hn, Se)),
      R.isShaderMaterial &&
        R.uniformsNeedUpdate === !0 &&
        (ki.upload(N, De.uniformsList, hn, Se), (R.uniformsNeedUpdate = !1)),
      R.isSpriteMaterial && ct.setValue(N, "center", W.center),
      ct.setValue(N, "modelViewMatrix", W.modelViewMatrix),
      ct.setValue(N, "normalMatrix", W.normalMatrix),
      ct.setValue(N, "modelMatrix", W.matrixWorld),
      R.isShaderMaterial || R.isRawShaderMaterial)
    ) {
      const xt = R.uniformsGroups;
      for (let Zi = 0, co = xt.length; Zi < co; Zi++)
        if (ue.isWebGL2) {
          const tr = xt[Zi];
          P.update(tr, cn), P.bind(tr, cn);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return cn;
  }
  function oo(y, z) {
    (y.ambientLightColor.needsUpdate = z),
      (y.lightProbe.needsUpdate = z),
      (y.directionalLights.needsUpdate = z),
      (y.directionalLightShadows.needsUpdate = z),
      (y.pointLights.needsUpdate = z),
      (y.pointLightShadows.needsUpdate = z),
      (y.spotLights.needsUpdate = z),
      (y.spotLightShadows.needsUpdate = z),
      (y.rectAreaLights.needsUpdate = z),
      (y.hemisphereLights.needsUpdate = z);
  }
  function lo(y) {
    return (
      y.isMeshLambertMaterial ||
      y.isMeshToonMaterial ||
      y.isMeshPhongMaterial ||
      y.isMeshStandardMaterial ||
      y.isShadowMaterial ||
      (y.isShaderMaterial && y.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return g;
  }),
    (this.getActiveMipmapLevel = function () {
      return b;
    }),
    (this.getRenderTarget = function () {
      return _;
    }),
    (this.setRenderTargetTextures = function (y, z, k) {
      (ye.get(y.texture).__webglTexture = z),
        (ye.get(y.depthTexture).__webglTexture = k);
      const R = ye.get(y);
      (R.__hasExternalTextures = !0),
        R.__hasExternalTextures &&
          ((R.__autoAllocateDepthBuffer = k === void 0),
          R.__autoAllocateDepthBuffer ||
            (ce.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (R.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (y, z) {
      const k = ye.get(y);
      (k.__webglFramebuffer = z), (k.__useDefaultFramebuffer = z === void 0);
    }),
    (this.setRenderTarget = function (y, z = 0, k = 0) {
      (_ = y), (g = z), (b = k);
      let R = !0,
        W = null,
        xe = !1,
        Me = !1;
      if (y) {
        const Ae = ye.get(y);
        Ae.__useDefaultFramebuffer !== void 0
          ? (he.bindFramebuffer(36160, null), (R = !1))
          : Ae.__webglFramebuffer === void 0
          ? Se.setupRenderTarget(y)
          : Ae.__hasExternalTextures &&
            Se.rebindTextures(
              y,
              ye.get(y.texture).__webglTexture,
              ye.get(y.depthTexture).__webglTexture
            );
        const Fe = y.texture;
        (Fe.isData3DTexture ||
          Fe.isDataArrayTexture ||
          Fe.isCompressedArrayTexture) &&
          (Me = !0);
        const Ce = ye.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget
          ? ((W = Ce[z]), (xe = !0))
          : ue.isWebGL2 && y.samples > 0 && Se.useMultisampledRTT(y) === !1
          ? (W = ye.get(y).__webglMultisampledFramebuffer)
          : (W = Ce),
          L.copy(y.viewport),
          O.copy(y.scissor),
          (M = y.scissorTest);
      } else
        L.copy(I).multiplyScalar(Y).floor(),
          O.copy(H).multiplyScalar(Y).floor(),
          (M = Z);
      if (
        (he.bindFramebuffer(36160, W) &&
          ue.drawBuffers &&
          R &&
          he.drawBuffers(y, W),
        he.viewport(L),
        he.scissor(O),
        he.setScissorTest(M),
        xe)
      ) {
        const Ae = ye.get(y.texture);
        N.framebufferTexture2D(36160, 36064, 34069 + z, Ae.__webglTexture, k);
      } else if (Me) {
        const Ae = ye.get(y.texture),
          Fe = z || 0;
        N.framebufferTextureLayer(36160, 36064, Ae.__webglTexture, k || 0, Fe);
      }
      E = -1;
    }),
    (this.readRenderTargetPixels = function (y, z, k, R, W, xe, Me) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let we = ye.get(y).__webglFramebuffer;
      if ((y.isWebGLCubeRenderTarget && Me !== void 0 && (we = we[Me]), we)) {
        he.bindFramebuffer(36160, we);
        try {
          const Ae = y.texture,
            Fe = Ae.format,
            Ce = Ae.type;
          if (Fe !== It && _e.convert(Fe) !== N.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Le =
            Ce === di &&
            (ce.has("EXT_color_buffer_half_float") ||
              (ue.isWebGL2 && ce.has("EXT_color_buffer_float")));
          if (
            Ce !== Mn &&
            _e.convert(Ce) !== N.getParameter(35738) &&
            !(
              Ce === xn &&
              (ue.isWebGL2 ||
                ce.has("OES_texture_float") ||
                ce.has("WEBGL_color_buffer_float"))
            ) &&
            !Le
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          z >= 0 &&
            z <= y.width - R &&
            k >= 0 &&
            k <= y.height - W &&
            N.readPixels(z, k, R, W, _e.convert(Fe), _e.convert(Ce), xe);
        } finally {
          const Ae = _ !== null ? ye.get(_).__webglFramebuffer : null;
          he.bindFramebuffer(36160, Ae);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (y, z, k = 0) {
      const R = Math.pow(2, -k),
        W = Math.floor(z.image.width * R),
        xe = Math.floor(z.image.height * R);
      Se.setTexture2D(z, 0),
        N.copyTexSubImage2D(3553, k, 0, 0, y.x, y.y, W, xe),
        he.unbindTexture();
    }),
    (this.copyTextureToTexture = function (y, z, k, R = 0) {
      const W = z.image.width,
        xe = z.image.height,
        Me = _e.convert(k.format),
        we = _e.convert(k.type);
      Se.setTexture2D(k, 0),
        N.pixelStorei(37440, k.flipY),
        N.pixelStorei(37441, k.premultiplyAlpha),
        N.pixelStorei(3317, k.unpackAlignment),
        z.isDataTexture
          ? N.texSubImage2D(3553, R, y.x, y.y, W, xe, Me, we, z.image.data)
          : z.isCompressedTexture
          ? N.compressedTexSubImage2D(
              3553,
              R,
              y.x,
              y.y,
              z.mipmaps[0].width,
              z.mipmaps[0].height,
              Me,
              z.mipmaps[0].data
            )
          : N.texSubImage2D(3553, R, y.x, y.y, Me, we, z.image),
        R === 0 && k.generateMipmaps && N.generateMipmap(3553),
        he.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (y, z, k, R, W = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const xe = y.max.x - y.min.x + 1,
        Me = y.max.y - y.min.y + 1,
        we = y.max.z - y.min.z + 1,
        Ae = _e.convert(R.format),
        Fe = _e.convert(R.type);
      let Ce;
      if (R.isData3DTexture) Se.setTexture3D(R, 0), (Ce = 32879);
      else if (R.isDataArrayTexture) Se.setTexture2DArray(R, 0), (Ce = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      N.pixelStorei(37440, R.flipY),
        N.pixelStorei(37441, R.premultiplyAlpha),
        N.pixelStorei(3317, R.unpackAlignment);
      const Le = N.getParameter(3314),
        We = N.getParameter(32878),
        _t = N.getParameter(3316),
        Xt = N.getParameter(3315),
        ln = N.getParameter(32877),
        Xe = k.isCompressedTexture ? k.mipmaps[0] : k.image;
      N.pixelStorei(3314, Xe.width),
        N.pixelStorei(32878, Xe.height),
        N.pixelStorei(3316, y.min.x),
        N.pixelStorei(3315, y.min.y),
        N.pixelStorei(32877, y.min.z),
        k.isDataTexture || k.isData3DTexture
          ? N.texSubImage3D(Ce, W, z.x, z.y, z.z, xe, Me, we, Ae, Fe, Xe.data)
          : k.isCompressedArrayTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            N.compressedTexSubImage3D(
              Ce,
              W,
              z.x,
              z.y,
              z.z,
              xe,
              Me,
              we,
              Ae,
              Xe.data
            ))
          : N.texSubImage3D(Ce, W, z.x, z.y, z.z, xe, Me, we, Ae, Fe, Xe),
        N.pixelStorei(3314, Le),
        N.pixelStorei(32878, We),
        N.pixelStorei(3316, _t),
        N.pixelStorei(3315, Xt),
        N.pixelStorei(32877, ln),
        W === 0 && R.generateMipmaps && N.generateMipmap(Ce),
        he.unbindTexture();
    }),
    (this.initTexture = function (y) {
      y.isCubeTexture
        ? Se.setTextureCube(y, 0)
        : y.isData3DTexture
        ? Se.setTexture3D(y, 0)
        : y.isDataArrayTexture || y.isCompressedArrayTexture
        ? Se.setTexture2DArray(y, 0)
        : Se.setTexture2D(y, 0),
        he.unbindTexture();
    }),
    (this.resetState = function () {
      (g = 0), (b = 0), (_ = null), he.reset(), A.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", {
          detail: this,
        })
      );
}
Object.defineProperties(js.prototype, {
  physicallyCorrectLights: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
        ),
        !this.useLegacyLights
      );
    },
    set: function (a) {
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
        (this.useLegacyLights = !a);
    },
  },
});
class pf extends js {}
pf.prototype.isWebGL1Renderer = !0;
class mf extends it {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", {
            detail: this,
          })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class Zs extends Kn {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const pa = new D(),
  ma = new D(),
  ga = new qe(),
  Ls = new ka(),
  Ui = new Hi();
class gf extends it {
  constructor(e = new Nt(), t = new Zs()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        pa.fromBufferAttribute(t, i - 1),
          ma.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += pa.distanceTo(ma));
      e.setAttribute("lineDistance", new pt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ui.copy(n.boundingSphere),
      Ui.applyMatrix4(i),
      (Ui.radius += s),
      e.ray.intersectsSphere(Ui) === !1)
    )
      return;
    ga.copy(i).invert(), Ls.copy(e.ray).applyMatrix4(ga);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = r * r,
      l = new D(),
      h = new D(),
      f = new D(),
      u = new D(),
      m = this.isLineSegments ? 2 : 1,
      v = n.index,
      d = n.attributes.position;
    if (v !== null) {
      const g = Math.max(0, o.start),
        b = Math.min(v.count, o.start + o.count);
      for (let _ = g, E = b - 1; _ < E; _ += m) {
        const w = v.getX(_),
          L = v.getX(_ + 1);
        if (
          (l.fromBufferAttribute(d, w),
          h.fromBufferAttribute(d, L),
          Ls.distanceSqToSegment(l, h, u, f) > c)
        )
          continue;
        u.applyMatrix4(this.matrixWorld);
        const M = e.ray.origin.distanceTo(u);
        M < e.near ||
          M > e.far ||
          t.push({
            distance: M,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: _,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const g = Math.max(0, o.start),
        b = Math.min(d.count, o.start + o.count);
      for (let _ = g, E = b - 1; _ < E; _ += m) {
        if (
          (l.fromBufferAttribute(d, _),
          h.fromBufferAttribute(d, _ + 1),
          Ls.distanceSqToSegment(l, h, u, f) > c)
        )
          continue;
        u.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(u);
        L < e.near ||
          L > e.far ||
          t.push({
            distance: L,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: _,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[r] = s);
        }
      }
    }
  }
}
const _a = new D(),
  xa = new D();
class Ja extends gf {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        _a.fromBufferAttribute(t, i),
          xa.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + _a.distanceTo(xa));
      e.setAttribute("lineDistance", new pt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class Ks extends Nt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    s = Math.PI * 2,
    o = 0,
    r = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: o,
        thetaLength: r,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const c = Math.min(o + r, Math.PI);
    let l = 0;
    const h = [],
      f = new D(),
      u = new D(),
      m = [],
      v = [],
      p = [],
      d = [];
    for (let g = 0; g <= n; g++) {
      const b = [],
        _ = g / n;
      let E = 0;
      g == 0 && o == 0
        ? (E = 0.5 / t)
        : g == n && c == Math.PI && (E = -0.5 / t);
      for (let w = 0; w <= t; w++) {
        const L = w / t;
        (f.x = -e * Math.cos(i + L * s) * Math.sin(o + _ * r)),
          (f.y = e * Math.cos(o + _ * r)),
          (f.z = e * Math.sin(i + L * s) * Math.sin(o + _ * r)),
          v.push(f.x, f.y, f.z),
          u.copy(f).normalize(),
          p.push(u.x, u.y, u.z),
          d.push(L + E, 1 - _),
          b.push(l++);
      }
      h.push(b);
    }
    for (let g = 0; g < n; g++)
      for (let b = 0; b < t; b++) {
        const _ = h[g][b + 1],
          E = h[g][b],
          w = h[g + 1][b],
          L = h[g + 1][b + 1];
        (g !== 0 || o > 0) && m.push(_, E, L),
          (g !== n - 1 || c < Math.PI) && m.push(E, w, L);
      }
    this.setIndex(m),
      this.setAttribute("position", new pt(v, 3)),
      this.setAttribute("normal", new pt(p, 3)),
      this.setAttribute("uv", new pt(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ks(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class _f extends Kn {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = {
        STANDARD: "",
      }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Ie(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Fa),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
      }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class xf extends it {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ie(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Ds = new qe(),
  va = new D(),
  Ma = new D();
class vf {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ee(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new qe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Ys()),
      (this._frameExtents = new Ee(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new nt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    va.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(va),
      Ma.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Ma),
      t.updateMatrixWorld(),
      Ds.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Ds),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Ds);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Mf extends vf {
  constructor() {
    super(new St(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = Bs * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class Qa extends xf {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(it.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new it()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = s),
      (this.decay = o),
      (this.map = null),
      (this.shadow = new Mf());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class yf {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = ya()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = ya();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function ya() {
  return (typeof performance > "u" ? Date : performance).now();
}
class ba {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(mt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Sa = new D();
class bf extends it {
  constructor(e, t) {
    super(),
      (this.light = e),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = t),
      (this.type = "SpotLightHelper");
    const n = new Nt(),
      i = [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, -1, 1,
      ];
    for (let o = 0, r = 1, c = 32; o < c; o++, r++) {
      const l = (o / c) * Math.PI * 2,
        h = (r / c) * Math.PI * 2;
      i.push(Math.cos(l), Math.sin(l), 1, Math.cos(h), Math.sin(h), 1);
    }
    n.setAttribute("position", new pt(i, 3));
    const s = new Zs({
      fog: !1,
      toneMapped: !1,
    });
    (this.cone = new Ja(n, s)), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.light.target.updateWorldMatrix(!0, !1);
    const e = this.light.distance ? this.light.distance : 1e3,
      t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e),
      Sa.setFromMatrixPosition(this.light.target.matrixWorld),
      this.cone.lookAt(Sa),
      this.color !== void 0
        ? this.cone.material.color.set(this.color)
        : this.cone.material.color.copy(this.light.color);
  }
}
class Sf extends Vt {
  constructor(e, t, n) {
    const i = new Ks(t, 4, 2),
      s = new Ws({
        wireframe: !0,
        fog: !1,
        toneMapped: !1,
      });
    super(i, s),
      (this.light = e),
      (this.color = n),
      (this.type = "PointLightHelper"),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.color !== void 0
        ? this.material.color.set(this.color)
        : this.material.color.copy(this.light.color);
  }
}
const Bi = new D(),
  Ge = new Xs();
class wf extends Ja {
  constructor(e) {
    const t = new Nt(),
      n = new Zs({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1,
      }),
      i = [],
      s = [],
      o = {};
    r("n1", "n2"),
      r("n2", "n4"),
      r("n4", "n3"),
      r("n3", "n1"),
      r("f1", "f2"),
      r("f2", "f4"),
      r("f4", "f3"),
      r("f3", "f1"),
      r("n1", "f1"),
      r("n2", "f2"),
      r("n3", "f3"),
      r("n4", "f4"),
      r("p", "n1"),
      r("p", "n2"),
      r("p", "n3"),
      r("p", "n4"),
      r("u1", "u2"),
      r("u2", "u3"),
      r("u3", "u1"),
      r("c", "t"),
      r("p", "c"),
      r("cn1", "cn2"),
      r("cn3", "cn4"),
      r("cf1", "cf2"),
      r("cf3", "cf4");
    function r(v, p) {
      c(v), c(p);
    }
    function c(v) {
      i.push(0, 0, 0),
        s.push(0, 0, 0),
        o[v] === void 0 && (o[v] = []),
        o[v].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new pt(i, 3)),
      t.setAttribute("color", new pt(s, 3)),
      super(t, n),
      (this.type = "CameraHelper"),
      (this.camera = e),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = o),
      this.update();
    const l = new Ie(16755200),
      h = new Ie(16711680),
      f = new Ie(43775),
      u = new Ie(16777215),
      m = new Ie(3355443);
    this.setColors(l, h, f, u, m);
  }
  setColors(e, t, n, i, s) {
    const r = this.geometry.getAttribute("color");
    r.setXYZ(0, e.r, e.g, e.b),
      r.setXYZ(1, e.r, e.g, e.b),
      r.setXYZ(2, e.r, e.g, e.b),
      r.setXYZ(3, e.r, e.g, e.b),
      r.setXYZ(4, e.r, e.g, e.b),
      r.setXYZ(5, e.r, e.g, e.b),
      r.setXYZ(6, e.r, e.g, e.b),
      r.setXYZ(7, e.r, e.g, e.b),
      r.setXYZ(8, e.r, e.g, e.b),
      r.setXYZ(9, e.r, e.g, e.b),
      r.setXYZ(10, e.r, e.g, e.b),
      r.setXYZ(11, e.r, e.g, e.b),
      r.setXYZ(12, e.r, e.g, e.b),
      r.setXYZ(13, e.r, e.g, e.b),
      r.setXYZ(14, e.r, e.g, e.b),
      r.setXYZ(15, e.r, e.g, e.b),
      r.setXYZ(16, e.r, e.g, e.b),
      r.setXYZ(17, e.r, e.g, e.b),
      r.setXYZ(18, e.r, e.g, e.b),
      r.setXYZ(19, e.r, e.g, e.b),
      r.setXYZ(20, e.r, e.g, e.b),
      r.setXYZ(21, e.r, e.g, e.b),
      r.setXYZ(22, e.r, e.g, e.b),
      r.setXYZ(23, e.r, e.g, e.b),
      r.setXYZ(24, t.r, t.g, t.b),
      r.setXYZ(25, t.r, t.g, t.b),
      r.setXYZ(26, t.r, t.g, t.b),
      r.setXYZ(27, t.r, t.g, t.b),
      r.setXYZ(28, t.r, t.g, t.b),
      r.setXYZ(29, t.r, t.g, t.b),
      r.setXYZ(30, t.r, t.g, t.b),
      r.setXYZ(31, t.r, t.g, t.b),
      r.setXYZ(32, n.r, n.g, n.b),
      r.setXYZ(33, n.r, n.g, n.b),
      r.setXYZ(34, n.r, n.g, n.b),
      r.setXYZ(35, n.r, n.g, n.b),
      r.setXYZ(36, n.r, n.g, n.b),
      r.setXYZ(37, n.r, n.g, n.b),
      r.setXYZ(38, i.r, i.g, i.b),
      r.setXYZ(39, i.r, i.g, i.b),
      r.setXYZ(40, s.r, s.g, s.b),
      r.setXYZ(41, s.r, s.g, s.b),
      r.setXYZ(42, s.r, s.g, s.b),
      r.setXYZ(43, s.r, s.g, s.b),
      r.setXYZ(44, s.r, s.g, s.b),
      r.setXYZ(45, s.r, s.g, s.b),
      r.setXYZ(46, s.r, s.g, s.b),
      r.setXYZ(47, s.r, s.g, s.b),
      r.setXYZ(48, s.r, s.g, s.b),
      r.setXYZ(49, s.r, s.g, s.b),
      (r.needsUpdate = !0);
  }
  update() {
    const e = this.geometry,
      t = this.pointMap,
      n = 1,
      i = 1;
    Ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
      He("c", t, e, Ge, 0, 0, -1),
      He("t", t, e, Ge, 0, 0, 1),
      He("n1", t, e, Ge, -n, -i, -1),
      He("n2", t, e, Ge, n, -i, -1),
      He("n3", t, e, Ge, -n, i, -1),
      He("n4", t, e, Ge, n, i, -1),
      He("f1", t, e, Ge, -n, -i, 1),
      He("f2", t, e, Ge, n, -i, 1),
      He("f3", t, e, Ge, -n, i, 1),
      He("f4", t, e, Ge, n, i, 1),
      He("u1", t, e, Ge, n * 0.7, i * 1.1, -1),
      He("u2", t, e, Ge, -n * 0.7, i * 1.1, -1),
      He("u3", t, e, Ge, 0, i * 2, -1),
      He("cf1", t, e, Ge, -n, 0, 1),
      He("cf2", t, e, Ge, n, 0, 1),
      He("cf3", t, e, Ge, 0, -i, 1),
      He("cf4", t, e, Ge, 0, i, 1),
      He("cn1", t, e, Ge, -n, 0, -1),
      He("cn2", t, e, Ge, n, 0, -1),
      He("cn3", t, e, Ge, 0, -i, -1),
      He("cn4", t, e, Ge, 0, i, -1),
      (e.getAttribute("position").needsUpdate = !0);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function He(a, e, t, n, i, s, o) {
  Bi.set(i, s, o).unproject(n);
  const r = e[a];
  if (r !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, h = r.length; l < h; l++) c.setXYZ(r[l], Bi.x, Bi.y, Bi.z);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", {
      detail: {
        revision: Hs,
      },
    })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Hs));
const wa = {
    type: "change",
  },
  Ps = {
    type: "start",
  },
  Ea = {
    type: "end",
  };
class Ef extends En {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new D()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: An.ROTATE,
        MIDDLE: An.DOLLY,
        RIGHT: An.PAN,
      }),
      (this.touches = {
        ONE: Tn.ROTATE,
        TWO: Tn.DOLLY_PAN,
      }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return r.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return r.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (A) {
        A.addEventListener("keydown", ot), (this._domElementKeyEvents = A);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", ot),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(wa),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const A = new D(),
          P = new bn().setFromUnitVectors(e.up, new D(0, 1, 0)),
          ae = P.clone().invert(),
          se = new D(),
          pe = new bn(),
          ge = 2 * Math.PI;
        return function () {
          const Te = n.object.position;
          A.copy(Te).sub(n.target),
            A.applyQuaternion(P),
            r.setFromVector3(A),
            n.autoRotate && s === i.NONE && T(O()),
            n.enableDamping
              ? ((r.theta += c.theta * n.dampingFactor),
                (r.phi += c.phi * n.dampingFactor))
              : ((r.theta += c.theta), (r.phi += c.phi));
          let Re = n.minAzimuthAngle,
            Ne = n.maxAzimuthAngle;
          return (
            isFinite(Re) &&
              isFinite(Ne) &&
              (Re < -Math.PI ? (Re += ge) : Re > Math.PI && (Re -= ge),
              Ne < -Math.PI ? (Ne += ge) : Ne > Math.PI && (Ne -= ge),
              Re <= Ne
                ? (r.theta = Math.max(Re, Math.min(Ne, r.theta)))
                : (r.theta =
                    r.theta > (Re + Ne) / 2
                      ? Math.max(Re, r.theta)
                      : Math.min(Ne, r.theta))),
            (r.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, r.phi)
            )),
            r.makeSafe(),
            (r.radius *= l),
            (r.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, r.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(h, n.dampingFactor)
              : n.target.add(h),
            A.setFromSpherical(r),
            A.applyQuaternion(ae),
            Te.copy(n.target).add(A),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((c.theta *= 1 - n.dampingFactor),
                (c.phi *= 1 - n.dampingFactor),
                h.multiplyScalar(1 - n.dampingFactor))
              : (c.set(0, 0, 0), h.set(0, 0, 0)),
            (l = 1),
            f ||
            se.distanceToSquared(n.object.position) > o ||
            8 * (1 - pe.dot(n.object.quaternion)) > o
              ? (n.dispatchEvent(wa),
                se.copy(n.object.position),
                pe.copy(n.object.quaternion),
                (f = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", G),
          n.domElement.removeEventListener("pointerdown", Ze),
          n.domElement.removeEventListener("pointercancel", Je),
          n.domElement.removeEventListener("wheel", gt),
          n.domElement.removeEventListener("pointermove", at),
          n.domElement.removeEventListener("pointerup", Ke),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", ot),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const o = 1e-6,
      r = new ba(),
      c = new ba();
    let l = 1;
    const h = new D();
    let f = !1;
    const u = new Ee(),
      m = new Ee(),
      v = new Ee(),
      p = new Ee(),
      d = new Ee(),
      g = new Ee(),
      b = new Ee(),
      _ = new Ee(),
      E = new Ee(),
      w = [],
      L = {};
    function O() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function M() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function T(A) {
      c.theta -= A;
    }
    function F(A) {
      c.phi -= A;
    }
    const Y = (function () {
        const A = new D();
        return function (ae, se) {
          A.setFromMatrixColumn(se, 0), A.multiplyScalar(-ae), h.add(A);
        };
      })(),
      K = (function () {
        const A = new D();
        return function (ae, se) {
          n.screenSpacePanning === !0
            ? A.setFromMatrixColumn(se, 1)
            : (A.setFromMatrixColumn(se, 0), A.crossVectors(n.object.up, A)),
            A.multiplyScalar(ae),
            h.add(A);
        };
      })(),
      U = (function () {
        const A = new D();
        return function (ae, se) {
          const pe = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const ge = n.object.position;
            A.copy(ge).sub(n.target);
            let me = A.length();
            (me *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              Y((2 * ae * me) / pe.clientHeight, n.object.matrix),
              K((2 * se * me) / pe.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (Y(
                  (ae * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    pe.clientWidth,
                  n.object.matrix
                ),
                K(
                  (se * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    pe.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function I(A) {
      n.object.isPerspectiveCamera
        ? (l /= A)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * A)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function H(A) {
      n.object.isPerspectiveCamera
        ? (l *= A)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / A)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Z(A) {
      u.set(A.clientX, A.clientY);
    }
    function Q(A) {
      b.set(A.clientX, A.clientY);
    }
    function X(A) {
      p.set(A.clientX, A.clientY);
    }
    function q(A) {
      m.set(A.clientX, A.clientY),
        v.subVectors(m, u).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      T((2 * Math.PI * v.x) / P.clientHeight),
        F((2 * Math.PI * v.y) / P.clientHeight),
        u.copy(m),
        n.update();
    }
    function J(A) {
      _.set(A.clientX, A.clientY),
        E.subVectors(_, b),
        E.y > 0 ? I(M()) : E.y < 0 && H(M()),
        b.copy(_),
        n.update();
    }
    function fe(A) {
      d.set(A.clientX, A.clientY),
        g.subVectors(d, p).multiplyScalar(n.panSpeed),
        U(g.x, g.y),
        p.copy(d),
        n.update();
    }
    function B(A) {
      A.deltaY < 0 ? H(M()) : A.deltaY > 0 && I(M()), n.update();
    }
    function $(A) {
      let P = !1;
      switch (A.code) {
        case n.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? F((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : U(0, n.keyPanSpeed),
            (P = !0);
          break;
        case n.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? F((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : U(0, -n.keyPanSpeed),
            (P = !0);
          break;
        case n.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? T((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : U(n.keyPanSpeed, 0),
            (P = !0);
          break;
        case n.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? T((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : U(-n.keyPanSpeed, 0),
            (P = !0);
          break;
      }
      P && (A.preventDefault(), n.update());
    }
    function ie() {
      if (w.length === 1) u.set(w[0].pageX, w[0].pageY);
      else {
        const A = 0.5 * (w[0].pageX + w[1].pageX),
          P = 0.5 * (w[0].pageY + w[1].pageY);
        u.set(A, P);
      }
    }
    function N() {
      if (w.length === 1) p.set(w[0].pageX, w[0].pageY);
      else {
        const A = 0.5 * (w[0].pageX + w[1].pageX),
          P = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(A, P);
      }
    }
    function le() {
      const A = w[0].pageX - w[1].pageX,
        P = w[0].pageY - w[1].pageY,
        ae = Math.sqrt(A * A + P * P);
      b.set(0, ae);
    }
    function ce() {
      n.enableZoom && le(), n.enablePan && N();
    }
    function ue() {
      n.enableZoom && le(), n.enableRotate && ie();
    }
    function he(A) {
      if (w.length == 1) m.set(A.pageX, A.pageY);
      else {
        const ae = _e(A),
          se = 0.5 * (A.pageX + ae.x),
          pe = 0.5 * (A.pageY + ae.y);
        m.set(se, pe);
      }
      v.subVectors(m, u).multiplyScalar(n.rotateSpeed);
      const P = n.domElement;
      T((2 * Math.PI * v.x) / P.clientHeight),
        F((2 * Math.PI * v.y) / P.clientHeight),
        u.copy(m);
    }
    function ve(A) {
      if (w.length === 1) d.set(A.pageX, A.pageY);
      else {
        const P = _e(A),
          ae = 0.5 * (A.pageX + P.x),
          se = 0.5 * (A.pageY + P.y);
        d.set(ae, se);
      }
      g.subVectors(d, p).multiplyScalar(n.panSpeed), U(g.x, g.y), p.copy(d);
    }
    function ye(A) {
      const P = _e(A),
        ae = A.pageX - P.x,
        se = A.pageY - P.y,
        pe = Math.sqrt(ae * ae + se * se);
      _.set(0, pe),
        E.set(0, Math.pow(_.y / b.y, n.zoomSpeed)),
        I(E.y),
        b.copy(_);
    }
    function Se(A) {
      n.enableZoom && ye(A), n.enablePan && ve(A);
    }
    function Pe(A) {
      n.enableZoom && ye(A), n.enableRotate && he(A);
    }
    function Ze(A) {
      n.enabled !== !1 &&
        (w.length === 0 &&
          (n.domElement.setPointerCapture(A.pointerId),
          n.domElement.addEventListener("pointermove", at),
          n.domElement.addEventListener("pointerup", Ke)),
        ee(A),
        A.pointerType === "touch" ? S(A) : ke(A));
    }
    function at(A) {
      n.enabled !== !1 && (A.pointerType === "touch" ? x(A) : ze(A));
    }
    function Ke(A) {
      te(A),
        w.length === 0 &&
          (n.domElement.releasePointerCapture(A.pointerId),
          n.domElement.removeEventListener("pointermove", at),
          n.domElement.removeEventListener("pointerup", Ke)),
        n.dispatchEvent(Ea),
        (s = i.NONE);
    }
    function Je(A) {
      te(A);
    }
    function ke(A) {
      let P;
      switch (A.button) {
        case 0:
          P = n.mouseButtons.LEFT;
          break;
        case 1:
          P = n.mouseButtons.MIDDLE;
          break;
        case 2:
          P = n.mouseButtons.RIGHT;
          break;
        default:
          P = -1;
      }
      switch (P) {
        case An.DOLLY:
          if (n.enableZoom === !1) return;
          Q(A), (s = i.DOLLY);
          break;
        case An.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enablePan === !1) return;
            X(A), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Z(A), (s = i.ROTATE);
          }
          break;
        case An.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(A), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            X(A), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ps);
    }
    function ze(A) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          q(A);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          J(A);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(A);
          break;
      }
    }
    function gt(A) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== i.NONE ||
        (A.preventDefault(), n.dispatchEvent(Ps), B(A), n.dispatchEvent(Ea));
    }
    function ot(A) {
      n.enabled === !1 || n.enablePan === !1 || $(A);
    }
    function S(A) {
      switch ((re(A), w.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Tn.ROTATE:
              if (n.enableRotate === !1) return;
              ie(), (s = i.TOUCH_ROTATE);
              break;
            case Tn.PAN:
              if (n.enablePan === !1) return;
              N(), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Tn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              ce(), (s = i.TOUCH_DOLLY_PAN);
              break;
            case Tn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ue(), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ps);
    }
    function x(A) {
      switch ((re(A), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          he(A), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ve(A), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Se(A), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Pe(A), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function G(A) {
      n.enabled !== !1 && A.preventDefault();
    }
    function ee(A) {
      w.push(A);
    }
    function te(A) {
      delete L[A.pointerId];
      for (let P = 0; P < w.length; P++)
        if (w[P].pointerId == A.pointerId) {
          w.splice(P, 1);
          return;
        }
    }
    function re(A) {
      let P = L[A.pointerId];
      P === void 0 && ((P = new Ee()), (L[A.pointerId] = P)),
        P.set(A.pageX, A.pageY);
    }
    function _e(A) {
      const P = A.pointerId === w[0].pointerId ? w[1] : w[0];
      return L[P.pointerId];
    }
    n.domElement.addEventListener("contextmenu", G),
      n.domElement.addEventListener("pointerdown", Ze),
      n.domElement.addEventListener("pointercancel", Je),
      n.domElement.addEventListener("wheel", gt, {
        passive: !1,
      }),
      this.update();
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */
class Wt {
  constructor(e, t, n, i, s = "div") {
    (this.parent = e),
      (this.object = t),
      (this.property = n),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(i),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (Wt.nextNameID = Wt.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++Wt.nextNameID}`),
      (this.$widget = document.createElement(s)),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(n);
  }
  name(e) {
    return (this._name = e), (this.$name.innerHTML = e), this;
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange() {
    this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0);
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange() {
    this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1);
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled
      ? this
      : ((this._disabled = e),
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e),
        this);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return (
      (this._listening = e),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = e);
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return (
      (this.object[this.property] = e),
      this._callOnChange(),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement);
  }
}
class Af extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        this.setValue(this.$input.checked), this._callOnFinishChange();
      }),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.checked = this.getValue()), this;
  }
}
function Gs(a) {
  let e, t;
  return (
    (e = a.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (t = e[2])
      : (e = a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
      ? (t =
          parseInt(e[1]).toString(16).padStart(2, 0) +
          parseInt(e[2]).toString(16).padStart(2, 0) +
          parseInt(e[3]).toString(16).padStart(2, 0))
      : (e = a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
        (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
    t ? "#" + t : !1
  );
}
const Tf = {
    isPrimitive: !0,
    match: (a) => typeof a == "string",
    fromHexString: Gs,
    toHexString: Gs,
  },
  pi = {
    isPrimitive: !0,
    match: (a) => typeof a == "number",
    fromHexString: (a) => parseInt(a.substring(1), 16),
    toHexString: (a) => "#" + a.toString(16).padStart(6, 0),
  },
  Cf = {
    isPrimitive: !1,
    match: (a) => Array.isArray(a),
    fromHexString(a, e, t = 1) {
      const n = pi.fromHexString(a);
      (e[0] = (((n >> 16) & 255) / 255) * t),
        (e[1] = (((n >> 8) & 255) / 255) * t),
        (e[2] = ((n & 255) / 255) * t);
    },
    toHexString([a, e, t], n = 1) {
      n = 255 / n;
      const i = ((a * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return pi.toHexString(i);
    },
  },
  Lf = {
    isPrimitive: !1,
    match: (a) => Object(a) === a,
    fromHexString(a, e, t = 1) {
      const n = pi.fromHexString(a);
      (e.r = (((n >> 16) & 255) / 255) * t),
        (e.g = (((n >> 8) & 255) / 255) * t),
        (e.b = ((n & 255) / 255) * t);
    },
    toHexString({ r: a, g: e, b: t }, n = 1) {
      n = 255 / n;
      const i = ((a * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return pi.toHexString(i);
    },
  },
  Df = [Tf, pi, Cf, Lf];
function Pf(a) {
  return Df.find((e) => e.match(a));
}
class Rf extends Wt {
  constructor(e, t, n, i) {
    super(e, t, n, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = Pf(this.initialValue)),
      (this._rgbScale = i),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const s = Gs(this.$text.value);
        s && this._setValueFromHexString(s);
      }),
      this.$text.addEventListener("focus", () => {
        (this._textFocused = !0), this.$text.select();
      }),
      this.$text.addEventListener("blur", () => {
        (this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      }),
      (this.$disable = this.$text),
      this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class Rs extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (i) => {
        i.preventDefault(),
          this.getValue().call(this.object),
          this._callOnChange();
      }),
      this.$button.addEventListener("touchstart", () => {}, {
        passive: !0,
      }),
      (this.$disable = this.$button);
  }
}
class If extends Wt {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, "number"), this._initInput(), this.min(i), this.max(s);
    const r = o !== void 0;
    this.step(r ? o : this._getImplicitStep(), r), this.updateDisplay();
  }
  decimals(e) {
    return (this._decimals = e), this.updateDisplay(), this;
  }
  min(e) {
    return (this._min = e), this._onUpdateMinMax(), this;
  }
  max(e) {
    return (this._max = e), this._onUpdateMinMax(), this;
  }
  step(e, t = !0) {
    return (this._step = e), (this._stepExplicit = t), this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      (t = Math.max(0, Math.min(t, 1))),
        (this.$fill.style.width = t * 100 + "%");
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? e : e.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "number"),
      this.$input.setAttribute("step", "any"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input);
    const e = () => {
        let g = parseFloat(this.$input.value);
        isNaN(g) ||
          (this._stepExplicit && (g = this._snap(g)),
          this.setValue(this._clamp(g)));
      },
      t = (g) => {
        const b = parseFloat(this.$input.value);
        isNaN(b) ||
          (this._snapClampSetValue(b + g),
          (this.$input.value = this.getValue()));
      },
      n = (g) => {
        g.code === "Enter" && this.$input.blur(),
          g.code === "ArrowUp" &&
            (g.preventDefault(), t(this._step * this._arrowKeyMultiplier(g))),
          g.code === "ArrowDown" &&
            (g.preventDefault(),
            t(this._step * this._arrowKeyMultiplier(g) * -1));
      },
      i = (g) => {
        this._inputFocused &&
          (g.preventDefault(), t(this._step * this._normalizeMouseWheel(g)));
      };
    let s = !1,
      o,
      r,
      c,
      l,
      h;
    const f = 5,
      u = (g) => {
        (o = g.clientX),
          (r = c = g.clientY),
          (s = !0),
          (l = this.getValue()),
          (h = 0),
          window.addEventListener("mousemove", m),
          window.addEventListener("mouseup", v);
      },
      m = (g) => {
        if (s) {
          const b = g.clientX - o,
            _ = g.clientY - r;
          Math.abs(_) > f
            ? (g.preventDefault(),
              this.$input.blur(),
              (s = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(b) > f && v();
        }
        if (!s) {
          const b = g.clientY - c;
          (h -= b * this._step * this._arrowKeyMultiplier(g)),
            l + h > this._max
              ? (h = this._max - l)
              : l + h < this._min && (h = this._min - l),
            this._snapClampSetValue(l + h);
        }
        c = g.clientY;
      },
      v = () => {
        this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", m),
          window.removeEventListener("mouseup", v);
      },
      p = () => {
        this._inputFocused = !0;
      },
      d = () => {
        (this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      };
    this.$input.addEventListener("input", e),
      this.$input.addEventListener("keydown", n),
      this.$input.addEventListener("wheel", i, {
        passive: !1,
      }),
      this.$input.addEventListener("mousedown", u),
      this.$input.addEventListener("focus", p),
      this.$input.addEventListener("blur", d);
  }
  _initSlider() {
    (this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider");
    const e = (g, b, _, E, w) => ((g - b) / (_ - b)) * (w - E) + E,
      t = (g) => {
        const b = this.$slider.getBoundingClientRect();
        let _ = e(g, b.left, b.right, this._min, this._max);
        this._snapClampSetValue(_);
      },
      n = (g) => {
        this._setDraggingStyle(!0),
          t(g.clientX),
          window.addEventListener("mousemove", i),
          window.addEventListener("mouseup", s);
      },
      i = (g) => {
        t(g.clientX);
      },
      s = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", i),
          window.removeEventListener("mouseup", s);
      };
    let o = !1,
      r,
      c;
    const l = (g) => {
        g.preventDefault(),
          this._setDraggingStyle(!0),
          t(g.touches[0].clientX),
          (o = !1);
      },
      h = (g) => {
        g.touches.length > 1 ||
          (this._hasScrollBar
            ? ((r = g.touches[0].clientX), (c = g.touches[0].clientY), (o = !0))
            : l(g),
          window.addEventListener("touchmove", f, {
            passive: !1,
          }),
          window.addEventListener("touchend", u));
      },
      f = (g) => {
        if (o) {
          const b = g.touches[0].clientX - r,
            _ = g.touches[0].clientY - c;
          Math.abs(b) > Math.abs(_)
            ? l(g)
            : (window.removeEventListener("touchmove", f),
              window.removeEventListener("touchend", u));
        } else g.preventDefault(), t(g.touches[0].clientX);
      },
      u = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", f),
          window.removeEventListener("touchend", u);
      },
      m = this._callOnFinishChange.bind(this),
      v = 400;
    let p;
    const d = (g) => {
      if (Math.abs(g.deltaX) < Math.abs(g.deltaY) && this._hasScrollBar) return;
      g.preventDefault();
      const _ = this._normalizeMouseWheel(g) * this._step;
      this._snapClampSetValue(this.getValue() + _),
        (this.$input.value = this.getValue()),
        clearTimeout(p),
        (p = setTimeout(m, v));
    };
    this.$slider.addEventListener("mousedown", n),
      this.$slider.addEventListener("touchstart", h, {
        passive: !1,
      }),
      this.$slider.addEventListener("wheel", d, {
        passive: !1,
      });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e),
      document.body.classList.toggle("lil-gui-dragging", e),
      document.body.classList.toggle(`lil-gui-${t}`, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return (
      Math.floor(e.deltaY) !== e.deltaY &&
        e.wheelDelta &&
        ((t = 0),
        (n = -e.wheelDelta / 120),
        (n *= this._stepExplicit ? 1 : 10)),
      t + -n
    );
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return (
      e < this._min && (e = this._min), e > this._max && (e = this._max), e
    );
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Ff extends Wt {
  constructor(e, t, n, i) {
    super(e, t, n, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      (this._values = Array.isArray(i) ? i : Object.values(i)),
      (this._names = Array.isArray(i) ? i : Object.keys(i)),
      this._names.forEach((s) => {
        const o = document.createElement("option");
        (o.innerHTML = s), this.$select.appendChild(o);
      }),
      this.$select.addEventListener("change", () => {
        this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange();
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(),
      t = this._values.indexOf(e);
    return (
      (this.$select.selectedIndex = t),
      (this.$display.innerHTML = t === -1 ? e : this._names[t]),
      this
    );
  }
}
class Nf extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (i) => {
        i.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.value = this.getValue()), this;
  }
}
const zf = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function Of(a) {
  const e = document.createElement("style");
  e.innerHTML = a;
  const t = document.querySelector("head link[rel=stylesheet], head style");
  t ? document.head.insertBefore(e, t) : document.head.appendChild(e);
}
let Aa = !1;
class Js {
  constructor({
    parent: e,
    autoPlace: t = e === void 0,
    container: n,
    width: i,
    title: s = "Controls",
    closeFolders: o = !1,
    injectStyles: r = !0,
    touchStyles: c = !0,
  } = {}) {
    if (
      ((this.parent = e),
      (this.root = e ? e.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("div")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("role", "button"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.setAttribute("tabindex", 0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed)
      ),
      this.$title.addEventListener("keydown", (l) => {
        (l.code === "Enter" || l.code === "Space") &&
          (l.preventDefault(), this.$title.click());
      }),
      this.$title.addEventListener("touchstart", () => {}, {
        passive: !0,
      }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(s),
      c && this.domElement.classList.add("allow-touch-styles"),
      this.parent)
    ) {
      this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"),
      !Aa && r && (Of(zf), (Aa = !0)),
      n
        ? n.appendChild(this.domElement)
        : t &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      i && this.domElement.style.setProperty("--width", i + "px"),
      (this._closeFolders = o),
      this.domElement.addEventListener("keydown", (l) => l.stopPropagation()),
      this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(e, t, n, i, s) {
    if (Object(n) === n) return new Ff(this, e, t, n);
    const o = e[t];
    switch (typeof o) {
      case "number":
        return new If(this, e, t, n, i, s);
      case "boolean":
        return new Af(this, e, t);
      case "string":
        return new Nf(this, e, t);
      case "function":
        return new Rs(this, e, t);
    }
    console.error(
      `gui.add failed
	property:`,
      t,
      `
	object:`,
      e,
      `
	value:`,
      o
    );
  }
  addColor(e, t, n = 1) {
    return new Rf(this, e, t, n);
  }
  addFolder(e) {
    const t = new Js({
      parent: this,
      title: e,
    });
    return this.root._closeFolders && t.close(), t;
  }
  load(e, t = !0) {
    return (
      e.controllers &&
        this.controllers.forEach((n) => {
          n instanceof Rs ||
            (n._name in e.controllers && n.load(e.controllers[n._name]));
        }),
      t &&
        e.folders &&
        this.folders.forEach((n) => {
          n._title in e.folders && n.load(e.folders[n._title]);
        }),
      this
    );
  }
  save(e = !0) {
    const t = {
      controllers: {},
      folders: {},
    };
    return (
      this.controllers.forEach((n) => {
        if (!(n instanceof Rs)) {
          if (n._name in t.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${n._name}"`
            );
          t.controllers[n._name] = n.save();
        }
      }),
      e &&
        this.folders.forEach((n) => {
          if (n._title in t.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${n._title}"`
            );
          t.folders[n._title] = n.save();
        }),
      t
    );
  }
  open(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  _setClosed(e) {
    this._closed !== e && ((this._closed = e), this._callOnOpenClose(this));
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const t = this.$children.clientHeight;
        (this.$children.style.height = t + "px"),
          this.domElement.classList.add("transition");
        const n = (s) => {
          s.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", n));
        };
        this.$children.addEventListener("transitionend", n);
        const i = e ? this.$children.scrollHeight : 0;
        this.domElement.classList.toggle("closed", !e),
          requestAnimationFrame(() => {
            this.$children.style.height = i + "px";
          });
      }),
      this
    );
  }
  title(e) {
    return (this._title = e), (this.$title.innerHTML = e), this;
  }
  reset(e = !0) {
    return (
      (e ? this.controllersRecursive() : this.controllers).forEach((n) =>
        n.reset()
      ),
      this
    );
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onOpenClose(e) {
    return (this._onOpenClose = e), this;
  }
  _callOnOpenClose(e) {
    this.parent && this.parent._callOnOpenClose(e),
      this._onOpenClose !== void 0 && this._onOpenClose.call(this, e);
  }
  destroy() {
    this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.controllersRecursive());
      }),
      e
    );
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.foldersRecursive());
      }),
      e
    );
  }
}
Vs.registerPlugin(Ta);
const eo = document.querySelector("canvas.webgl-home-cube"),
  mi = document.querySelector(".home_cube_canvas");
let to =
  mi.dataset.debug === "true" ||
  window.location.href.indexOf("debug") > -1 ||
  !1;
const Gt = {
    width: mi.offsetWidth,
    height: mi.offsetWidth,
  },
  Yi = new mf(),
  Uf = new Jn(1.8, 1.8, 1.8, 10, 10, 10),
  Bf = new _f({
    roughness: 0,
    emissive: 1118481,
  }),
  hi = new Vt(Uf, Bf);
Yi.add(hi);
const Ft = new St(50, Gt.width / Gt.height, 0.1, 100);
Ft.position.set(3, -3, 3);
Ft.zoom = 1;
const no = new wf(Ft);
Yi.add(Ft, no);
no.visible = !1;
const Be = new Qa(8421504, 0.5, 10, Math.PI * 0.2, 0.25, 1);
Be.position.set(2.9, 2, 2.9, 3);
Be.target.rotation.set(-10, -10, -10);
Be.intensity = 0.5;
Be.power = 2.748;
Be.decay = 0.6;
Be.distance = 7.4;
const bt = new Qa(4473924, 0.9, 15.7, 5);
bt.position.set(-3.3, -2.4, 0.8);
const io = new bf(Be),
  so = new Sf(bt);
io.visible = !1;
so.visible = !1;
Yi.add(Be, Be.target, io, bt, so);
const Qs = new Ef(Ft, eo);
Qs.enableDamping = !0;
Qs.enabled = !1;
const Zn = new js({
  canvas: eo,
  alpha: !0,
});
Zn.setSize(Gt.width, Gt.height);
Zn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
Zn.setClearColor(0, 0);
window.addEventListener("resize", () => {
  (Gt.width = mi.offsetWidth),
    (Gt.height = mi.offsetHeight),
    (Ft.aspect = Gt.width / Gt.height),
    Ft.updateProjectionMatrix(),
    Zn.setSize(Gt.width, Gt.height),
    Zn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
to ||
  Vs.timeline()
    .from(
      Be,
      {
        intensity: 0,
        duration: 3,
      },
      "<"
    )
    .from(
      bt.position,
      {
        intensity: 0,
        duration: 2,
      },
      "<"
    );
let kf = Vs.to(hi.rotation, {
  y: (Math.PI * 1) / 2,
  x: (Math.PI * 1) / 2,
});
Ta.create({
  trigger: "body",
  scrub: 1,
  animation: kf,
  start: "20 top",
  markers: !1,
});
const Gf = new yf(),
  ro = () => {
    Gf.getElapsedTime(),
      Qs.update(),
      Zn.render(Yi, Ft),
      window.requestAnimationFrame(ro);
  };
ro();
Vf(to);
function Vf(a) {
  if (!a) return;
  const e = new Js(),
    t = e.addFolder("cube"),
    n = e.addFolder("camera"),
    i = e.addFolder("Spot Light"),
    s = e.addFolder("Point Light");
  t.add(hi.scale, "x").min(0.5).max(1.5).step(0.1),
    t.add(hi.scale, "y").min(0.5).max(1.5).step(0.1),
    t.add(hi.scale, "z").min(0.5).max(1.5).step(0.1),
    n.add(Ft.position, "x").min(-10).max(10).step(0.1),
    n.add(Ft.position, "y").min(-10).max(10).step(0.1),
    n.add(Ft.position, "z").min(-10).max(10).step(0.1),
    i.add(Be, "isSpotLight"),
    i.add(Be, "castShadow"),
    i.add(Be, "penumbra").min(0).max(10).step(0.01).name("Pennumbra"),
    i.addColor(Be, "color"),
    i.add(Be.position, "x").min(-10).max(10).step(0.1).name("Light x"),
    i.add(Be.position, "y").min(-10).max(10).step(0.1).name("Light y"),
    i.add(Be.position, "z").min(-10).max(10).step(0.1).name("Light z"),
    i
      .add(Be.target.position, "x")
      .min(-10)
      .max(100)
      .step(0.1)
      .name("Rotation x"),
    i
      .add(Be.target.position, "y")
      .min(-10)
      .max(100)
      .step(0.1)
      .name("Rotation y"),
    i
      .add(Be.target.position, "z")
      .min(-10)
      .max(100)
      .step(0.1)
      .name("Rotation z"),
    i.add(Be, "angle").min(0).max(10).step(0.01).name("Angle"),
    i.add(Be, "distance").min(-10).max(10).step(0.1),
    i.add(Be, "decay").min(-10).max(10).step(0.1),
    i.add(Be, "intensity").min(0).max(2).step(0.01),
    i.add(Be, "power").min(0).max(10).step(0.001),
    s.add(bt, "isLight"),
    s.addColor(bt, "color"),
    s.add(bt.position, "x").min(-10).max(10).step(0.1),
    s.add(bt.position, "y").min(-10).max(10).step(0.1),
    s.add(bt.position, "z").min(-10).max(10).step(0.1),
    s.add(bt, "distance").min(0).max(50).step(0.1),
    s.add(bt, "decay").min(-10).max(50).step(1),
    s.add(bt, "intensity").min(0).max(10).step(0.1),
    s.add(bt, "power").min(0).max(25).step(0.1);
}
