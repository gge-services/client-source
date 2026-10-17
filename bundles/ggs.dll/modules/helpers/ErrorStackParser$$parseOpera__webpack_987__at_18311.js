// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseOpera(__s209param0) {
        if (!__s209param0.stacktrace || __s209param0.message.indexOf("\n") > -1 && __s209param0.message.split("\n").length > __s209param0.stacktrace.split("\n").length) {
          return this.parseOpera9(__s209param0);
        } else if (__s209param0.stack) {
          return this.parseOpera11(__s209param0);
        } else {
          return this.parseOpera10(__s209param0);
        }
      }
