// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryGetMetadata(__s309param0, __s309param1, __s309param2) {
          var __s309local0 = OrdinaryHasOwnMetadata(__s309param0, __s309param1, __s309param2);
          if (__s309local0) {
            return OrdinaryGetOwnMetadata(__s309param0, __s309param1, __s309param2);
          }
          var __s309local1 = OrdinaryGetPrototypeOf(__s309param1);
          if (!IsNull(__s309local1)) {
            return OrdinaryGetMetadata(__s309param0, __s309local1, __s309param2);
          }
          return;
        }
