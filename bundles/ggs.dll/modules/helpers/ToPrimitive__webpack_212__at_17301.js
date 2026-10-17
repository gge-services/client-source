// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function ToPrimitive(__s206param0, __s206param1) {
        switch (Type(__s206param0)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return __s206param0;
        }
        var __s206local0 = __s206param1 === 3 ? "string" : __s206param1 === 5 ? "number" : "default";
        var __s206local1 = GetMethod(__s206param0, __s13local2);
        if (__s206local1 !== undefined) {
          var __s206local2 = __s206local1.call(__s206param0, __s206local0);
          if (IsObject(__s206local2)) {
            throw new TypeError();
          }
          return __s206local2;
        }
        return function OrdinaryToPrimitive(__s211param0, __s211param1) {
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
        }(__s206param0, __s206local0 === "default" ? "number" : __s206local0);
      }
