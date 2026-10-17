// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function MessageHandler(t, e, i) {
  var s = 0;
  var r = {};
  return {
    register: function register() {
      console.log("MessageHandler::register");
      t.addEventListener(window, "message", function (t) {
        if (t.data.type != "webpackOk" && t.data.type != "webpackInvalid" && t.data.name !== undefined) {
          try {
            var e = function getDataFrom(t) {
              var e = t.data;
              if (e.constructor === "test".constructor) {
                try {
                  e = JSON.parse(e);
                } catch (t) {}
              }
              return e;
            }(t);
            if (e.constructor !== {}.constructor) {
              return;
            }
            var i = function execute(t) {
              var e = window[t.name] || r[t.name];
              if (e) {
                if (t.arguments || t.arguments === false) {
                  if (Array.isArray(t.arguments) && e.length === t.arguments.length) {
                    return e.apply(null, t.arguments);
                  } else {
                    return e(t.arguments);
                  }
                } else {
                  return e();
                }
              }
              console.error("PageIntegration method not found: " + t.name);
            }(e);
            if (!e.callback) {
              return;
            }
            Promise.resolve(i).then(function (i) {
              var s = {
                name: e.callback,
                type: "gameClient",
                arguments: i
              };
              t.source.postMessage(s, t.origin);
            }).catch(function (t) {
              console.error("something went wrong while sending back the callback", t);
            });
          } catch (t) {
            console.warn("MessageHandler:: on message caught error: ", t);
          }
        }
      });
    },
    addEvent: function addEvent(t, e) {
      r[t] = e;
    },
    sendMessage: function sendMessage(t) {
      var e = Array.prototype.slice.call(arguments, sendMessage.length);
      const r = e[e.length - 1] instanceof Function ? e.pop() : null;
      var n = {
        name: t,
        type: "gameClient",
        arguments: e
      };
      if (r) {
        var a = "callbackOf_" + t + "_" + ++s;
        n.callback = a;
        (function registerCallback(t, e) {
          window[e] = function (i) {
            console.log("executing callback " + e + " with response " + i);
            t(i);
            try {
              delete window[e];
            } catch (t) {}
            window[e] = null;
          };
        })(r, a);
      }
      i.postMessage(n, "*");
    }
  };
}
