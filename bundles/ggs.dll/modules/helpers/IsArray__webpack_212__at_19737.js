// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function IsArray(__s231param0) {
        if (Array.isArray) {
          return Array.isArray(__s231param0);
        } else if (__s231param0 instanceof Object) {
          return __s231param0 instanceof Array;
        } else {
          return Object.prototype.toString.call(__s231param0) === "[object Array]";
        }
      }
