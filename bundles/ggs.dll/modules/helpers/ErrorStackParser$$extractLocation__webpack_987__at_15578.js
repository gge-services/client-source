// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$extractLocation(__s191param0) {
        if (__s191param0.indexOf(":") === -1) {
          return [__s191param0];
        }
        var __s191local0 = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(__s191param0.replace(/[\(\)]/g, ""));
        return [__s191local0[1], __s191local0[2] || undefined, __s191local0[3] || undefined];
      }
