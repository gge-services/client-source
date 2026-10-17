// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 53; original: modules/classes/Buffer_allocUnsafe.js
function CustomError(__s8param0, __s8param1) {
    if (!(this instanceof CustomError)) {
      return new CustomError(__s8param0, __s8param1);
    }
    Object.defineProperty(this, "message", {
      get: function () {
        return __s8param0;
      }
    });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    } else {
      Object.defineProperty(this, "stack", {
        value: new Error().stack || ""
      });
    }
    if (__s8param1) {
      merge(this, __s8param1);
    }
  }
