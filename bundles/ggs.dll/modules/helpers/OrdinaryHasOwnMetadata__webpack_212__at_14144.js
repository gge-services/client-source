// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryHasOwnMetadata(__s168param0, __s168param1, __s168param2) {
        var __s168local0 = GetOrCreateMetadataMap(__s168param1, __s168param2, false);
        return !IsUndefined(__s168local0) && function ToBoolean(__s170param0) {
          return !!__s170param0;
        }(__s168local0.has(__s168param0));
      }
