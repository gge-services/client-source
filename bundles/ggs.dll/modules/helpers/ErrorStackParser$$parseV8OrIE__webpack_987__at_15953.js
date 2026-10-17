// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseV8OrIE(__s194param0) {
        var __s194local0 = __s194param0.stack.split("\n").filter(function (__s196param0) {
          return !!__s196param0.match(__s184local1);
        }, this);
        return __s194local0.map(function (__s198param0) {
          if (__s198param0.indexOf("(eval ") > -1) {
            __s198param0 = __s198param0.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
          }
          var __s198local0 = __s198param0.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1);
          var __s198local1 = this.extractLocation(__s198local0.pop());
          var __s198local2 = __s198local0.join(" ") || undefined;
          var __s198local3 = ["eval", "<anonymous>"].indexOf(__s198local1[0]) > -1 ? undefined : __s198local1[0];
          return new __s184param0({
            functionName: __s198local2,
            fileName: __s198local3,
            lineNumber: __s198local1[1],
            columnNumber: __s198local1[2],
            source: __s198param0
          });
        }, this);
      }
