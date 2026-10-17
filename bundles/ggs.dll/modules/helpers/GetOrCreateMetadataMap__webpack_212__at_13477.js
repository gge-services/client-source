// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function GetOrCreateMetadataMap(__s162param0, __s162param1, __s162param2) {
        var __s162local0 = __s13local12.get(__s162param0);
        if (IsUndefined(__s162local0)) {
          if (!__s162param2) {
            return;
          }
          __s162local0 = new __s13local10();
          __s13local12.set(__s162param0, __s162local0);
        }
        var __s162local1 = __s162local0.get(__s162param1);
        if (IsUndefined(__s162local1)) {
          if (!__s162param2) {
            return;
          }
          __s162local1 = new __s13local10();
          __s162local0.set(__s162param1, __s162local1);
        }
        return __s162local1;
      }
