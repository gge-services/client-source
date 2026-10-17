// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function DecorateConstructor(__s264param0, __s264param1) {
            for (var __s264local0 = __s264param0.length - 1; __s264local0 >= 0; --__s264local0) {
              var __s264local1 = __s264param0[__s264local0];
              var __s264local2 = __s264local1(__s264param1);
              if (!IsUndefined(__s264local2) && !IsNull(__s264local2)) {
                if (!IsConstructor(__s264local2)) {
                  throw new TypeError();
                }
                __s264param1 = __s264local2;
              }
            }
            return __s264param1;
          }
