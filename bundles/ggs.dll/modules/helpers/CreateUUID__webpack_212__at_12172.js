// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function CreateUUID() {
          var __s150local0 = function GenRandomBytes(__s152param0) {
            if (typeof Uint8Array == "function") {
              if (typeof crypto != "undefined") {
                return crypto.getRandomValues(new Uint8Array(__s152param0));
              } else if (typeof msCrypto != "undefined") {
                return msCrypto.getRandomValues(new Uint8Array(__s152param0));
              } else {
                return FillRandomBytes(new Uint8Array(__s152param0), __s152param0);
              }
            }
            return FillRandomBytes(new Array(__s152param0), __s152param0);
          }(__s120local0);
          __s150local0[6] = __s150local0[6] & 79 | 64;
          __s150local0[8] = __s150local0[8] & 191 | 128;
          var __s150local1 = "";
          for (var __s150local2 = 0; __s150local2 < __s120local0; ++__s150local2) {
            var __s150local3 = __s150local0[__s150local2];
            if (__s150local2 === 4 || __s150local2 === 6 || __s150local2 === 8) {
              __s150local1 += "-";
            }
            if (__s150local3 < 16) {
              __s150local1 += "0";
            }
            __s150local1 += __s150local3.toString(16).toLowerCase();
          }
          return __s150local1;
        }
