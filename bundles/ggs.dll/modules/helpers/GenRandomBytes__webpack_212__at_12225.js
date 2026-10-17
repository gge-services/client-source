// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function GenRandomBytes(__s152param0) {
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
          }
