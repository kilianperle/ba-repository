var ve = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Ge() {
  if ($e) return ie;
  $e = 1;
  var b = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function U(x, T, w) {
    var Y = null;
    if (w !== void 0 && (Y = "" + w), T.key !== void 0 && (Y = "" + T.key), "key" in T) {
      w = {};
      for (var P in T)
        P !== "key" && (w[P] = T[P]);
    } else w = T;
    return T = w.ref, {
      $$typeof: b,
      type: x,
      key: Y,
      ref: T !== void 0 ? T : null,
      props: w
    };
  }
  return ie.Fragment = c, ie.jsx = U, ie.jsxs = U, ie;
}
var ce = {}, he = { exports: {} }, d = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Fe() {
  if (Ye) return d;
  Ye = 1;
  var b = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), G = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object" ? null : (t = G && t[G] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, B = {};
  function L(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || F;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, L.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = L.prototype;
  function J(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || F;
  }
  var S = J.prototype = new Q();
  S.constructor = J, Z(S, L.prototype), S.isPureReactComponent = !0;
  var oe = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, ee = Object.prototype.hasOwnProperty;
  function te(t, n, s, a, f, h) {
    return s = h.ref, {
      $$typeof: b,
      type: t,
      key: n,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  function N(t, n) {
    return te(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function D(t) {
    return typeof t == "object" && t !== null && t.$$typeof === b;
  }
  function se(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(s) {
      return n[s];
    });
  }
  var g = /\/+/g;
  function X(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? se("" + t.key) : n.toString(36);
  }
  function q() {
  }
  function M(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(q, q) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function O(t, n, s, a, f) {
    var h = typeof t;
    (h === "undefined" || h === "boolean") && (t = null);
    var l = !1;
    if (t === null) l = !0;
    else
      switch (h) {
        case "bigint":
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case b:
            case c:
              l = !0;
              break;
            case I:
              return l = t._init, O(
                l(t._payload),
                n,
                s,
                a,
                f
              );
          }
      }
    if (l)
      return f = f(t), l = a === "" ? "." + X(t, 0) : a, oe(f) ? (s = "", l != null && (s = l.replace(g, "$&/") + "/"), O(f, n, s, "", function(k) {
        return k;
      })) : f != null && (D(f) && (f = N(
        f,
        s + (f.key == null || t && t.key === f.key ? "" : ("" + f.key).replace(
          g,
          "$&/"
        ) + "/") + l
      )), n.push(f)), 1;
    l = 0;
    var A = a === "" ? "." : a + ":";
    if (oe(t))
      for (var p = 0; p < t.length; p++)
        a = t[p], h = A + X(a, p), l += O(
          a,
          n,
          s,
          h,
          f
        );
    else if (p = H(t), typeof p == "function")
      for (t = p.call(t), p = 0; !(a = t.next()).done; )
        a = a.value, h = A + X(a, p++), l += O(
          a,
          n,
          s,
          h,
          f
        );
    else if (h === "object") {
      if (typeof t.then == "function")
        return O(
          M(t),
          n,
          s,
          a,
          f
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return l;
  }
  function $(t, n, s) {
    if (t == null) return t;
    var a = [], f = 0;
    return O(t, a, "", "", function(h) {
      return n.call(s, h, f++);
    }), a;
  }
  function V(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = s);
        },
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = s);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var W = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function re() {
  }
  return d.Children = {
    map: $,
    forEach: function(t, n, s) {
      $(
        t,
        function() {
          n.apply(this, arguments);
        },
        s
      );
    },
    count: function(t) {
      var n = 0;
      return $(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return $(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!D(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, d.Component = L, d.Fragment = U, d.Profiler = T, d.PureComponent = J, d.StrictMode = x, d.Suspense = ne, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, d.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return y.H.useMemoCache(t);
    }
  }, d.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, d.cloneElement = function(t, n, s) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = Z({}, t.props), f = t.key, h = void 0;
    if (n != null)
      for (l in n.ref !== void 0 && (h = void 0), n.key !== void 0 && (f = "" + n.key), n)
        !ee.call(n, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && n.ref === void 0 || (a[l] = n[l]);
    var l = arguments.length - 2;
    if (l === 1) a.children = s;
    else if (1 < l) {
      for (var A = Array(l), p = 0; p < l; p++)
        A[p] = arguments[p + 2];
      a.children = A;
    }
    return te(t.type, f, void 0, void 0, h, a);
  }, d.createContext = function(t) {
    return t = {
      $$typeof: Y,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: w,
      _context: t
    }, t;
  }, d.createElement = function(t, n, s) {
    var a, f = {}, h = null;
    if (n != null)
      for (a in n.key !== void 0 && (h = "" + n.key), n)
        ee.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (f[a] = n[a]);
    var l = arguments.length - 2;
    if (l === 1) f.children = s;
    else if (1 < l) {
      for (var A = Array(l), p = 0; p < l; p++)
        A[p] = arguments[p + 2];
      f.children = A;
    }
    if (t && t.defaultProps)
      for (a in l = t.defaultProps, l)
        f[a] === void 0 && (f[a] = l[a]);
    return te(t, h, void 0, void 0, null, f);
  }, d.createRef = function() {
    return { current: null };
  }, d.forwardRef = function(t) {
    return { $$typeof: P, render: t };
  }, d.isValidElement = D, d.lazy = function(t) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: t },
      _init: V
    };
  }, d.memo = function(t, n) {
    return {
      $$typeof: z,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, d.startTransition = function(t) {
    var n = y.T, s = {};
    y.T = s;
    try {
      var a = t(), f = y.S;
      f !== null && f(s, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(re, W);
    } catch (h) {
      W(h);
    } finally {
      y.T = n;
    }
  }, d.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, d.use = function(t) {
    return y.H.use(t);
  }, d.useActionState = function(t, n, s) {
    return y.H.useActionState(t, n, s);
  }, d.useCallback = function(t, n) {
    return y.H.useCallback(t, n);
  }, d.useContext = function(t) {
    return y.H.useContext(t);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(t, n) {
    return y.H.useDeferredValue(t, n);
  }, d.useEffect = function(t, n, s) {
    var a = y.H;
    if (typeof s == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return a.useEffect(t, n);
  }, d.useId = function() {
    return y.H.useId();
  }, d.useImperativeHandle = function(t, n, s) {
    return y.H.useImperativeHandle(t, n, s);
  }, d.useInsertionEffect = function(t, n) {
    return y.H.useInsertionEffect(t, n);
  }, d.useLayoutEffect = function(t, n) {
    return y.H.useLayoutEffect(t, n);
  }, d.useMemo = function(t, n) {
    return y.H.useMemo(t, n);
  }, d.useOptimistic = function(t, n) {
    return y.H.useOptimistic(t, n);
  }, d.useReducer = function(t, n, s) {
    return y.H.useReducer(t, n, s);
  }, d.useRef = function(t) {
    return y.H.useRef(t);
  }, d.useState = function(t) {
    return y.H.useState(t);
  }, d.useSyncExternalStore = function(t, n, s) {
    return y.H.useSyncExternalStore(
      t,
      n,
      s
    );
  }, d.useTransition = function() {
    return y.H.useTransition();
  }, d.version = "19.1.1", d;
}
var fe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fe.exports;
var Ie;
function Be() {
  return Ie || (Ie = 1, (function(b, c) {
    process.env.NODE_ENV !== "production" && (function() {
      function U(e, r) {
        Object.defineProperty(w.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function x(e) {
        return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function T(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        ge[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), ge[o] = !0);
      }
      function w(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || we;
      }
      function Y() {
      }
      function P(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || we;
      }
      function ne(e) {
        return "" + e;
      }
      function z(e) {
        try {
          ne(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), ne(e);
        }
      }
      function I(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === xe ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case s:
            return "Profiler";
          case n:
            return "StrictMode";
          case l:
            return "Suspense";
          case A:
            return "SuspenseList";
          case ae:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case re:
              return "Portal";
            case f:
              return (e.displayName || "Context") + ".Provider";
            case a:
              return (e._context.displayName || "Context") + ".Consumer";
            case h:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case p:
              return r = e.displayName || null, r !== null ? r : I(e.type) || "Memo";
            case k:
              r = e._payload, e = e._init;
              try {
                return I(e(r));
              } catch {
              }
          }
        return null;
      }
      function G(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === k)
          return "<...>";
        try {
          var r = I(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function H() {
        var e = E.A;
        return e === null ? null : e.getOwner();
      }
      function F() {
        return Error("react-stack-top-frame");
      }
      function Z(e) {
        if (pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function B(e, r) {
        function o() {
          Ae || (Ae = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function L() {
        var e = I(this.type);
        return Se[e] || (Se[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function Q(e, r, o, u, i, v, _, R) {
        return o = v.ref, e = {
          $$typeof: W,
          type: e,
          key: r,
          props: v,
          _owner: i
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: L
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
          value: _
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: R
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function J(e, r) {
        return r = Q(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function S(e) {
        return typeof e == "object" && e !== null && e.$$typeof === W;
      }
      function oe(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function y(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (z(e.key), oe("" + e.key)) : r.toString(36);
      }
      function ee() {
      }
      function te(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ee, ee) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function N(e, r, o, u, i) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var _ = !1;
        if (e === null) _ = !0;
        else
          switch (v) {
            case "bigint":
            case "string":
            case "number":
              _ = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case W:
                case re:
                  _ = !0;
                  break;
                case k:
                  return _ = e._init, N(
                    _(e._payload),
                    r,
                    o,
                    u,
                    i
                  );
              }
          }
        if (_) {
          _ = e, i = i(_);
          var R = u === "" ? "." + y(_, 0) : u;
          return Te(i) ? (o = "", R != null && (o = R.replace(je, "$&/") + "/"), N(i, r, o, "", function(K) {
            return K;
          })) : i != null && (S(i) && (i.key != null && (_ && _.key === i.key || z(i.key)), o = J(
            i,
            o + (i.key == null || _ && _.key === i.key ? "" : ("" + i.key).replace(
              je,
              "$&/"
            ) + "/") + R
          ), u !== "" && _ != null && S(_) && _.key == null && _._store && !_._store.validated && (o._store.validated = 2), i = o), r.push(i)), 1;
        }
        if (_ = 0, R = u === "" ? "." : u + ":", Te(e))
          for (var m = 0; m < e.length; m++)
            u = e[m], v = R + y(u, m), _ += N(
              u,
              r,
              o,
              v,
              i
            );
        else if (m = x(e), typeof m == "function")
          for (m === e.entries && (Ce || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ce = !0), e = m.call(e), m = 0; !(u = e.next()).done; )
            u = u.value, v = R + y(u, m++), _ += N(
              u,
              r,
              o,
              v,
              i
            );
        else if (v === "object") {
          if (typeof e.then == "function")
            return N(
              te(e),
              r,
              o,
              u,
              i
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return _;
      }
      function D(e, r, o) {
        if (e == null) return e;
        var u = [], i = 0;
        return N(e, u, "", "", function(v) {
          return r.call(o, v, i++);
        }), u;
      }
      function se(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function g() {
        var e = E.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function X() {
      }
      function q(e) {
        if (_e === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            _e = (b && b[r]).call(
              b,
              "timers"
            ).setImmediate;
          } catch {
            _e = function(u) {
              Ne === !1 && (Ne = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var i = new MessageChannel();
              i.port1.onmessage = u, i.port2.postMessage(void 0);
            };
          }
        return _e(e);
      }
      function M(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function O(e, r) {
        r !== me - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), me = r;
      }
      function $(e, r, o) {
        var u = E.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              V(u), q(function() {
                return $(e, r, o);
              });
              return;
            } catch (i) {
              E.thrownErrors.push(i);
            }
          else E.actQueue = null;
        0 < E.thrownErrors.length ? (u = M(E.thrownErrors), E.thrownErrors.length = 0, o(u)) : r(e);
      }
      function V(e) {
        if (!Re) {
          Re = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                E.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (E.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (i) {
            e.splice(0, r + 1), E.thrownErrors.push(i);
          } finally {
            Re = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var W = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), le = Symbol.iterator, ge = {}, we = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          T(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          T(e, "replaceState");
        },
        enqueueSetState: function(e) {
          T(e, "setState");
        }
      }, be = Object.assign, ye = {};
      Object.freeze(ye), w.prototype.isReactComponent = {}, w.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var C = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, de;
      for (de in C)
        C.hasOwnProperty(de) && U(de, C[de]);
      Y.prototype = w.prototype, C = P.prototype = new Y(), C.constructor = P, be(C, w.prototype), C.isPureReactComponent = !0;
      var Te = Array.isArray, xe = Symbol.for("react.client.reference"), E = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, pe = Object.prototype.hasOwnProperty, Oe = console.createTask ? console.createTask : function() {
        return null;
      };
      C = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Ae, ke, Se = {}, He = C.react_stack_bottom_frame.bind(
        C,
        F
      )(), qe = Oe(G(F)), Ce = !1, je = /\/+/g, Pe = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Ne = !1, _e = null, me = 0, Ee = !1, Re = !1, Me = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : q;
      C = Object.freeze({
        __proto__: null,
        c: function(e) {
          return g().useMemoCache(e);
        }
      }), c.Children = {
        map: D,
        forEach: function(e, r, o) {
          D(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return D(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return D(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!S(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, c.Component = w, c.Fragment = t, c.Profiler = s, c.PureComponent = P, c.StrictMode = n, c.Suspense = l, c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, c.__COMPILER_RUNTIME = C, c.act = function(e) {
        var r = E.actQueue, o = me;
        me++;
        var u = E.actQueue = r !== null ? r : [], i = !1;
        try {
          var v = e();
        } catch (m) {
          E.thrownErrors.push(m);
        }
        if (0 < E.thrownErrors.length)
          throw O(r, o), e = M(E.thrownErrors), E.thrownErrors.length = 0, e;
        if (v !== null && typeof v == "object" && typeof v.then == "function") {
          var _ = v;
          return Me(function() {
            i || Ee || (Ee = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(m, K) {
              i = !0, _.then(
                function(ue) {
                  if (O(r, o), o === 0) {
                    try {
                      V(u), q(function() {
                        return $(
                          ue,
                          m,
                          K
                        );
                      });
                    } catch (ze) {
                      E.thrownErrors.push(ze);
                    }
                    if (0 < E.thrownErrors.length) {
                      var We = M(
                        E.thrownErrors
                      );
                      E.thrownErrors.length = 0, K(We);
                    }
                  } else m(ue);
                },
                function(ue) {
                  O(r, o), 0 < E.thrownErrors.length && (ue = M(
                    E.thrownErrors
                  ), E.thrownErrors.length = 0), K(ue);
                }
              );
            }
          };
        }
        var R = v;
        if (O(r, o), o === 0 && (V(u), u.length !== 0 && Me(function() {
          i || Ee || (Ee = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), E.actQueue = null), 0 < E.thrownErrors.length)
          throw e = M(E.thrownErrors), E.thrownErrors.length = 0, e;
        return {
          then: function(m, K) {
            i = !0, o === 0 ? (E.actQueue = u, q(function() {
              return $(
                R,
                m,
                K
              );
            })) : m(R);
          }
        };
      }, c.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, c.captureOwnerStack = function() {
        var e = E.getCurrentStack;
        return e === null ? null : e();
      }, c.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = be({}, e.props), i = e.key, v = e._owner;
        if (r != null) {
          var _;
          e: {
            if (pe.call(r, "ref") && (_ = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && _.isReactWarning) {
              _ = !1;
              break e;
            }
            _ = r.ref !== void 0;
          }
          _ && (v = H()), Z(r) && (z(r.key), i = "" + r.key);
          for (R in r)
            !pe.call(r, R) || R === "key" || R === "__self" || R === "__source" || R === "ref" && r.ref === void 0 || (u[R] = r[R]);
        }
        var R = arguments.length - 2;
        if (R === 1) u.children = o;
        else if (1 < R) {
          _ = Array(R);
          for (var m = 0; m < R; m++)
            _[m] = arguments[m + 2];
          u.children = _;
        }
        for (u = Q(
          e.type,
          i,
          void 0,
          void 0,
          v,
          u,
          e._debugStack,
          e._debugTask
        ), i = 2; i < arguments.length; i++)
          v = arguments[i], S(v) && v._store && (v._store.validated = 1);
        return u;
      }, c.createContext = function(e) {
        return e = {
          $$typeof: f,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: a,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, c.createElement = function(e, r, o) {
        for (var u = 2; u < arguments.length; u++) {
          var i = arguments[u];
          S(i) && i._store && (i._store.validated = 1);
        }
        if (u = {}, i = null, r != null)
          for (m in ke || !("__self" in r) || "key" in r || (ke = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Z(r) && (z(r.key), i = "" + r.key), r)
            pe.call(r, m) && m !== "key" && m !== "__self" && m !== "__source" && (u[m] = r[m]);
        var v = arguments.length - 2;
        if (v === 1) u.children = o;
        else if (1 < v) {
          for (var _ = Array(v), R = 0; R < v; R++)
            _[R] = arguments[R + 2];
          Object.freeze && Object.freeze(_), u.children = _;
        }
        if (e && e.defaultProps)
          for (m in v = e.defaultProps, v)
            u[m] === void 0 && (u[m] = v[m]);
        i && B(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var m = 1e4 > E.recentlyCreatedOwnerStacks++;
        return Q(
          e,
          i,
          void 0,
          void 0,
          H(),
          u,
          m ? Error("react-stack-top-frame") : He,
          m ? Oe(G(e)) : qe
        );
      }, c.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, c.forwardRef = function(e) {
        e != null && e.$$typeof === p ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: h, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.isValidElement = S, c.lazy = function(e) {
        return {
          $$typeof: k,
          _payload: { _status: -1, _result: e },
          _init: se
        };
      }, c.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: p,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.startTransition = function(e) {
        var r = E.T, o = {};
        E.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var u = e(), i = E.S;
          i !== null && i(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && u.then(X, Pe);
        } catch (v) {
          Pe(v);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), E.T = r;
        }
      }, c.unstable_useCacheRefresh = function() {
        return g().useCacheRefresh();
      }, c.use = function(e) {
        return g().use(e);
      }, c.useActionState = function(e, r, o) {
        return g().useActionState(
          e,
          r,
          o
        );
      }, c.useCallback = function(e, r) {
        return g().useCallback(e, r);
      }, c.useContext = function(e) {
        var r = g();
        return e.$$typeof === a && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, c.useDebugValue = function(e, r) {
        return g().useDebugValue(e, r);
      }, c.useDeferredValue = function(e, r) {
        return g().useDeferredValue(e, r);
      }, c.useEffect = function(e, r, o) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var u = g();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return u.useEffect(e, r);
      }, c.useId = function() {
        return g().useId();
      }, c.useImperativeHandle = function(e, r, o) {
        return g().useImperativeHandle(e, r, o);
      }, c.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useInsertionEffect(e, r);
      }, c.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useLayoutEffect(e, r);
      }, c.useMemo = function(e, r) {
        return g().useMemo(e, r);
      }, c.useOptimistic = function(e, r) {
        return g().useOptimistic(e, r);
      }, c.useReducer = function(e, r, o) {
        return g().useReducer(e, r, o);
      }, c.useRef = function(e) {
        return g().useRef(e);
      }, c.useState = function(e) {
        return g().useState(e);
      }, c.useSyncExternalStore = function(e, r, o) {
        return g().useSyncExternalStore(
          e,
          r,
          o
        );
      }, c.useTransition = function() {
        return g().useTransition();
      }, c.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(fe, fe.exports)), fe.exports;
}
var Le;
function Qe() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? he.exports = Fe() : he.exports = Be()), he.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Xe() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && (function() {
    function b(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === se ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case B:
          return "Fragment";
        case Q:
          return "Profiler";
        case L:
          return "StrictMode";
        case y:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Z:
            return "Portal";
          case S:
            return (t.displayName || "Context") + ".Provider";
          case J:
            return (t._context.displayName || "Context") + ".Consumer";
          case oe:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case te:
            return n = t.displayName || null, n !== null ? n : b(t.type) || "Memo";
          case N:
            n = t._payload, t = t._init;
            try {
              return b(t(n));
            } catch {
            }
        }
      return null;
    }
    function c(t) {
      return "" + t;
    }
    function U(t) {
      try {
        c(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, a = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(t);
      }
    }
    function x(t) {
      if (t === B) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === N)
        return "<...>";
      try {
        var n = b(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function T() {
      var t = g.A;
      return t === null ? null : t.getOwner();
    }
    function w() {
      return Error("react-stack-top-frame");
    }
    function Y(t) {
      if (X.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function P(t, n) {
      function s() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: s,
        configurable: !0
      });
    }
    function ne() {
      var t = b(this.type);
      return $[t] || ($[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function z(t, n, s, a, f, h, l, A) {
      return s = h.ref, t = {
        $$typeof: F,
        type: t,
        key: n,
        props: h,
        _owner: f
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: ne
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: l
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function I(t, n, s, a, f, h, l, A) {
      var p = n.children;
      if (p !== void 0)
        if (a)
          if (q(p)) {
            for (a = 0; a < p.length; a++)
              G(p[a]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else G(p);
      if (X.call(n, "key")) {
        p = b(t);
        var k = Object.keys(n).filter(function(le) {
          return le !== "key";
        });
        a = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", re[p + a] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          p,
          k,
          p
        ), re[p + a] = !0);
      }
      if (p = null, s !== void 0 && (U(s), p = "" + s), Y(n) && (U(n.key), p = "" + n.key), "key" in n) {
        s = {};
        for (var ae in n)
          ae !== "key" && (s[ae] = n[ae]);
      } else s = n;
      return p && P(
        s,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), z(
        t,
        p,
        h,
        f,
        T(),
        s,
        l,
        A
      );
    }
    function G(t) {
      typeof t == "object" && t !== null && t.$$typeof === F && t._store && (t._store.validated = 1);
    }
    var H = Qe(), F = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), S = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), g = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, q = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    H = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var O, $ = {}, V = H.react_stack_bottom_frame.bind(
      H,
      w
    )(), W = M(x(w)), re = {};
    ce.Fragment = B, ce.jsx = function(t, n, s, a, f) {
      var h = 1e4 > g.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        s,
        !1,
        a,
        f,
        h ? Error("react-stack-top-frame") : V,
        h ? M(x(t)) : W
      );
    }, ce.jsxs = function(t, n, s, a, f) {
      var h = 1e4 > g.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        s,
        !0,
        a,
        f,
        h ? Error("react-stack-top-frame") : V,
        h ? M(x(t)) : W
      );
    };
  })()), ce;
}
var Ue;
function Ve() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? ve.exports = Ge() : ve.exports = Xe()), ve.exports;
}
var j = Ve();
function Ke({ tenant: b }) {
  return /* @__PURE__ */ j.jsxs("div", { style: { padding: 16, border: "1px solid #ddd", borderRadius: 8 }, children: [
    /* @__PURE__ */ j.jsx("h3", { children: "Formular-Modul" }),
    /* @__PURE__ */ j.jsxs("p", { children: [
      "Hallo ",
      /* @__PURE__ */ j.jsx("b", { children: b }),
      "! Ich bin dynamisch geladen 🎉"
    ] }),
    /* @__PURE__ */ j.jsxs("div", { style: { display: "grid", gap: 8, maxWidth: 320 }, children: [
      /* @__PURE__ */ j.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ j.jsx("br", {}),
        /* @__PURE__ */ j.jsx("input", { placeholder: "Dein Name", style: { width: "100%" } })
      ] }),
      /* @__PURE__ */ j.jsxs("label", { children: [
        "E-Mail",
        /* @__PURE__ */ j.jsx("br", {}),
        /* @__PURE__ */ j.jsx("input", { placeholder: "email@beispiel.com", style: { width: "100%" } })
      ] }),
      /* @__PURE__ */ j.jsx("button", { style: { marginTop: 8 }, children: "Absenden" })
    ] })
  ] });
}
export {
  Ke as default
};
