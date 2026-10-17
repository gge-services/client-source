// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function GetOrCreateWeakMapTable(__s142param0, __s142param1) {
          if (!__s13local0.call(__s142param0, __s120local2)) {
            if (!__s142param1) {
              return;
            }
            Object.defineProperty(__s142param0, __s120local2, {
              value: __s13local7.create()
            });
          }
          return __s142param0[__s120local2];
        }
