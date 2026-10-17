// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryOwnMetadataKeys(__s177param0, __s177param1) {
        var __s177local0 = [];
        var __s177local1 = GetOrCreateMetadataMap(__s177param0, __s177param1, false);
        if (IsUndefined(__s177local1)) {
          return __s177local0;
        }
        var __s177local2 = __s177local1.keys();
        var __s177local3 = function GetIterator(__s180param0) {
          var __s180local0 = GetMethod(__s180param0, __s13local3);
          if (!IsCallable(__s180local0)) {
            throw new TypeError();
          }
          var __s180local1 = __s180local0.call(__s180param0);
          if (!IsObject(__s180local1)) {
            throw new TypeError();
          }
          return __s180local1;
        }(__s177local2);
        var __s177local4 = 0;
        while (true) {
          var __s177local5 = IteratorStep(__s177local3);
          if (!__s177local5) {
            __s177local0.length = __s177local4;
            return __s177local0;
          }
          var __s177local6 = __s177local5.value;
          try {
            __s177local0[__s177local4] = __s177local6;
          } catch (__s188local0) {
            try {
              IteratorClose(__s177local3);
            } finally {
              throw __s188local0;
            }
          }
          __s177local4++;
        }
      }
