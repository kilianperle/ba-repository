import re from "react";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function te() {
  if ($) return R;
  $ = 1;
  var c = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function d(m, s, l) {
    var b = null;
    if (l !== void 0 && (b = "" + l), s.key !== void 0 && (b = "" + s.key), "key" in s) {
      l = {};
      for (var E in s)
        E !== "key" && (l[E] = s[E]);
    } else l = s;
    return s = l.ref, {
      $$typeof: c,
      type: m,
      key: b,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return R.Fragment = p, R.jsx = d, R.jsxs = d, R;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function d(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), p(e);
      }
    }
    function m(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, i, u, k, O) {
      return t = u.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: u,
        _owner: i
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, i, u, k, O) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              g(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(a);
      if (y.call(r, "key")) {
        a = c(e);
        var f = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          f,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (d(t), a = "" + t), b(r) && (d(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        u,
        i,
        s(),
        t,
        k,
        O
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var v = re, w = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v.react_stack_bottom_frame.bind(
      v,
      l
    )(), F = j(m(l)), I = {};
    _.Fragment = x, _.jsx = function(e, r, t, n, i) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n,
        i,
        u ? Error("react-stack-top-frame") : Y,
        u ? j(m(e)) : F
      );
    }, _.jsxs = function(e, r, t, n, i) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n,
        i,
        u ? Error("react-stack-top-frame") : Y,
        u ? j(m(e)) : F
      );
    };
  })()), _;
}
var M;
function ae() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = te() : T.exports = ne()), T.exports;
}
var o = ae();
function se({ tenant: c }) {
  return /* @__PURE__ */ o.jsxs("div", { style: { padding: 16, border: "1px solid #ddd", borderRadius: 8 }, children: [
    /* @__PURE__ */ o.jsx("h3", { children: "Formular-Modul" }),
    /* @__PURE__ */ o.jsxs("p", { children: [
      "Hallo ",
      /* @__PURE__ */ o.jsx("b", { children: c }),
      "! Ich bin dynamisch geladen 🎉"
    ] }),
    /* @__PURE__ */ o.jsxs("div", { style: { display: "grid", gap: 8, maxWidth: 320 }, children: [
      /* @__PURE__ */ o.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ o.jsx("br", {}),
        /* @__PURE__ */ o.jsx("input", { placeholder: "Dein Name", style: { width: "100%" } })
      ] }),
      /* @__PURE__ */ o.jsxs("label", { children: [
        "E-Mail",
        /* @__PURE__ */ o.jsx("br", {}),
        /* @__PURE__ */ o.jsx("input", { placeholder: "email@beispiel.com", style: { width: "100%" } })
      ] }),
      /* @__PURE__ */ o.jsx("button", { style: { marginTop: 8 }, children: "Absenden" })
    ] })
  ] });
}
export {
  se as default
};
