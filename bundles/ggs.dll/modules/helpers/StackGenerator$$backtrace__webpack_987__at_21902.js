// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function StackGenerator$$backtrace(__s237param0) {
        var __s237local0 = [];
        var __s237local1 = 10;
        if (typeof __s237param0 == "object" && typeof __s237param0.maxStackSize == "number") {
          __s237local1 = __s237param0.maxStackSize;
        }
        for (var __s237local2 = arguments.callee; __s237local2 && __s237local0.length < __s237local1 && __s237local2.arguments;) {
          for (var __s237local3 = new Array(__s237local2.arguments.length), __s237local4 = 0; __s237local4 < __s237local3.length; ++__s237local4) {
            __s237local3[__s237local4] = __s237local2.arguments[__s237local4];
          }
          if (/function(?:\s+([\w$]+))+\s*\(/.test(__s237local2.toString())) {
            __s237local0.push(new __s235param0({
              functionName: RegExp.$1 || undefined,
              args: __s237local3
            }));
          } else {
            __s237local0.push(new __s235param0({
              args: __s237local3
            }));
          }
          try {
            __s237local2 = __s237local2.caller;
          } catch (__s247local0) {
            break;
          }
        }
        return __s237local0;
      }
