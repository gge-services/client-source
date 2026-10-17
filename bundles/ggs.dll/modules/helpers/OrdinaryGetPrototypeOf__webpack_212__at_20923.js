// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryGetPrototypeOf(__s249param0) {
        var __s249local0 = Object.getPrototypeOf(__s249param0);
        if (typeof __s249param0 != "function" || __s249param0 === __s13local8) {
          return __s249local0;
        }
        if (__s249local0 !== __s13local8) {
          return __s249local0;
        }
        var __s249local1 = __s249param0.prototype;
        var __s249local2 = __s249local1 && Object.getPrototypeOf(__s249local1);
        if (__s249local2 == null || __s249local2 === Object.prototype) {
          return __s249local0;
        }
        var __s249local3 = __s249local2.constructor;
        if (typeof __s249local3 != "function") {
          return __s249local0;
        } else if (__s249local3 === __s249param0) {
          return __s249local0;
        } else {
          return __s249local3;
        }
      }
