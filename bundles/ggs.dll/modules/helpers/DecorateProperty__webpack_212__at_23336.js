// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function DecorateProperty(__s274param0, __s274param1, __s274param2, __s274param3) {
          for (var __s274local0 = __s274param0.length - 1; __s274local0 >= 0; --__s274local0) {
            var __s274local1 = __s274param0[__s274local0];
            var __s274local2 = __s274local1(__s274param1, __s274param2, __s274param3);
            if (!IsUndefined(__s274local2) && !IsNull(__s274local2)) {
              if (!IsObject(__s274local2)) {
                throw new TypeError();
              }
              __s274param3 = __s274local2;
            }
          }
          return __s274param3;
        }
