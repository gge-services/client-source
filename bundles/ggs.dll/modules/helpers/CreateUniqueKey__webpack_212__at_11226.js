// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function CreateUniqueKey() {
          var __s138local0;
          do {
            __s138local0 = "@@WeakMap@@" + CreateUUID();
          } while (__s13local7.has(__s120local1, __s138local0));
          __s120local1[__s138local0] = true;
          return __s138local0;
        }
