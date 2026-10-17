// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseOpera11(__s224param0) {
        var __s224local0 = __s224param0.stack.split("\n").filter(function (__s226param0) {
          return !!__s226param0.match(__s184local0) && !__s226param0.match(/^Error created at/);
        }, this);
        return __s224local0.map(function (__s228param0) {
          var __s228local0;
          var __s228local1 = __s228param0.split("@");
          var __s228local2 = this.extractLocation(__s228local1.pop());
          var __s228local3 = __s228local1.shift() || "";
          var __s228local4 = __s228local3.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          if (__s228local3.match(/\(([^\)]*)\)/)) {
            __s228local0 = __s228local3.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
          }
          var __s228local5 = __s228local0 === undefined || __s228local0 === "[arguments not available]" ? undefined : __s228local0.split(",");
          return new __s184param0({
            functionName: __s228local4,
            args: __s228local5,
            fileName: __s228local2[0],
            lineNumber: __s228local2[1],
            columnNumber: __s228local2[2],
            source: __s228param0
          });
        }, this);
      }
