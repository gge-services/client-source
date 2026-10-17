// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function ToPropertyKey(__s223param0) {
        var __s223local0 = ToPrimitive(__s223param0, 3);
        if (function IsSymbol(__s225param0) {
          return typeof __s225param0 == "symbol";
        }(__s223local0)) {
          return __s223local0;
        } else {
          return function ToString(__s229param0) {
            return "" + __s229param0;
          }(__s223local0);
        }
      }
