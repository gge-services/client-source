// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 988; original: modules/classes/ClipboardAction.js
function Clipboard(__s170param0, __s170param1) {
          (function _classCallCheck(__s172param0, __s172param1) {
            if (!(__s172param0 instanceof __s172param1)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, Clipboard);
          var __s170local0 = function _possibleConstructorReturn(__s175param0, __s175param1) {
            if (!__s175param0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!__s175param1 || typeof __s175param1 != "object" && typeof __s175param1 != "function") {
              return __s175param0;
            } else {
              return __s175param1;
            }
          }(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
          __s170local0.resolveOptions(__s170param1);
          __s170local0.listenClick(__s170param0);
          return __s170local0;
        }
