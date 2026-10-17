// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function StackFrame(__s141param0) {
      if (__s141param0 instanceof Object) {
        for (var __s141local0 = 0; __s141local0 < __s131local3.length; __s141local0++) {
          if (__s141param0.hasOwnProperty(__s131local3[__s141local0]) && __s141param0[__s131local3[__s141local0]] !== undefined) {
            this["set" + _capitalize(__s131local3[__s141local0])](__s141param0[__s131local3[__s141local0]]);
          }
        }
      }
    }
