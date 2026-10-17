// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function GetMethod(__s240param0, __s240param1) {
        var __s240local0 = __s240param0[__s240param1];
        if (__s240local0 !== undefined && __s240local0 !== null) {
          if (!IsCallable(__s240local0)) {
            throw new TypeError();
          }
          return __s240local0;
        }
      }
