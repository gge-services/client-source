// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function GetIterator(__s180param0) {
          var __s180local0 = GetMethod(__s180param0, __s13local3);
          if (!IsCallable(__s180local0)) {
            throw new TypeError();
          }
          var __s180local1 = __s180local0.call(__s180param0);
          if (!IsObject(__s180local1)) {
            throw new TypeError();
          }
          return __s180local1;
        }
