// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function Type(__s192param0) {
        if (__s192param0 === null) {
          return 1;
        }
        switch (typeof __s192param0) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            if (__s192param0 === null) {
              return 1;
            } else {
              return 6;
            }
          default:
            return 6;
        }
      }
