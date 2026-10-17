// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryMetadataKeys(__s321param0, __s321param1) {
          var __s321local0 = OrdinaryOwnMetadataKeys(__s321param0, __s321param1);
          var __s321local1 = OrdinaryGetPrototypeOf(__s321param0);
          if (__s321local1 === null) {
            return __s321local0;
          }
          var __s321local2 = OrdinaryMetadataKeys(__s321local1, __s321param1);
          if (__s321local2.length <= 0) {
            return __s321local0;
          }
          if (__s321local0.length <= 0) {
            return __s321local2;
          }
          var __s321local3 = new __s13local11();
          var __s321local4 = [];
          for (var __s321local5 = 0, __s321local6 = __s321local0; __s321local5 < __s321local6.length; __s321local5++) {
            var __s321local7 = __s321local6[__s321local5];
            var __s321local8 = __s321local3.has(__s321local7);
            if (!__s321local8) {
              __s321local3.add(__s321local7);
              __s321local4.push(__s321local7);
            }
          }
          for (var __s321local9 = 0, __s321local10 = __s321local2; __s321local9 < __s321local10.length; __s321local9++) {
            var __s321local7 = __s321local10[__s321local9];
            var __s321local8 = __s321local3.has(__s321local7);
            if (!__s321local8) {
              __s321local3.add(__s321local7);
              __s321local4.push(__s321local7);
            }
          }
          return __s321local4;
        }
