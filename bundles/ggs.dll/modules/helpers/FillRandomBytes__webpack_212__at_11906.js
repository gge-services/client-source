// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function FillRandomBytes(__s146param0, __s146param1) {
          for (var __s146local0 = 0; __s146local0 < __s146param1; ++__s146local0) {
            __s146param0[__s146local0] = Math.random() * 255 | 0;
          }
          return __s146param0;
        }
