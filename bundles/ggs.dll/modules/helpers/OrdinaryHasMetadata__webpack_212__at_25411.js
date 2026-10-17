// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryHasMetadata(__s297param0, __s297param1, __s297param2) {
          var __s297local0 = OrdinaryHasOwnMetadata(__s297param0, __s297param1, __s297param2);
          if (__s297local0) {
            return true;
          }
          var __s297local1 = OrdinaryGetPrototypeOf(__s297param1);
          if (!IsNull(__s297local1)) {
            return OrdinaryHasMetadata(__s297param0, __s297local1, __s297param2);
          }
          return false;
        }
