// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseFFOrSafari(__s201param0) {
        var __s201local0 = __s201param0.stack.split("\n").filter(function (__s203param0) {
          return !__s203param0.match(__s184local2);
        }, this);
        return __s201local0.map(function (__s205param0) {
          if (__s205param0.indexOf(" > eval") > -1) {
            __s205param0 = __s205param0.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
          }
          if (__s205param0.indexOf("@") === -1 && __s205param0.indexOf(":") === -1) {
            return new __s184param0({
              functionName: __s205param0
            });
          }
          var __s205local0 = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var __s205local1 = __s205param0.match(__s205local0);
          var __s205local2 = __s205local1 && __s205local1[1] ? __s205local1[1] : undefined;
          var __s205local3 = this.extractLocation(__s205param0.replace(__s205local0, ""));
          return new __s184param0({
            functionName: __s205local2,
            fileName: __s205local3[0],
            lineNumber: __s205local3[1],
            columnNumber: __s205local3[2],
            source: __s205param0
          });
        }, this);
      }
