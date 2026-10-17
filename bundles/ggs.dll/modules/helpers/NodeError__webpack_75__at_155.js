// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 75; original: modules/exports/codes.js
function NodeError(__s5param0, __s5param1, __s5param2) {
      return __s3param0.call(this, function getMessage(__s7param0, __s7param1, __s7param2) {
        if (typeof __s1param1 == "string") {
          return __s1param1;
        } else {
          return __s1param1(__s7param0, __s7param1, __s7param2);
        }
      }(__s5param0, __s5param1, __s5param2)) || this;
    }
