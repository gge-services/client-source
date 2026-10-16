Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XMLInterfaceObjectFactory() {}
  XMLInterfaceObjectFactory.CREATE_MAP_FROM_JSON = function (__s5param0) {
    var __s5local0 = JSON.parse(__s5param0);
    if (typeof __s5local0 != "object" || Array.isArray(__s5local0)) {
      throw new Error("JSON was not a hash object");
    }
    return __s5local0;
  };
  return XMLInterfaceObjectFactory;
}();
exports.XMLInterfaceObjectFactory = __s0local0;
