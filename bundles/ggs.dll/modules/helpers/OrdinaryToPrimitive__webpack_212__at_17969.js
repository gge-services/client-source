// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function OrdinaryToPrimitive(__s211param0, __s211param1) {
          if (__s211param1 === "string") {
            var __s211local0 = __s211param0.toString;
            if (IsCallable(__s211local0)) {
              var __s211local1 = __s211local0.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
            var __s211local2 = __s211param0.valueOf;
            if (IsCallable(__s211local2)) {
              var __s211local1 = __s211local2.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
          } else {
            var __s211local2 = __s211param0.valueOf;
            if (IsCallable(__s211local2)) {
              var __s211local1 = __s211local2.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
            var __s211local3 = __s211param0.toString;
            if (IsCallable(__s211local3)) {
              var __s211local1 = __s211local3.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
          }
          throw new TypeError();
        }
