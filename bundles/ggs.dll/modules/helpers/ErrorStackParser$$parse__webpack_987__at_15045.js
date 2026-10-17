// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parse(__s186param0) {
        if (__s186param0.stacktrace !== undefined || __s186param0["opera#sourceloc"] !== undefined) {
          return this.parseOpera(__s186param0);
        }
        if (__s186param0.stack && __s186param0.stack.match(__s184local1)) {
          return this.parseV8OrIE(__s186param0);
        }
        if (__s186param0.stack) {
          return this.parseFFOrSafari(__s186param0);
        }
        throw new Error("Cannot parse given Error object");
      }
