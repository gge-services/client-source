Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function HTMLEscaper() {}
  HTMLEscaper.unescape = function (__s5param0) {
    var __s5local0 = __s5param0;
    __s5local0.replace(/(<([^>]+)>)/gi, "");
    return __s5local0 = __s5local0.split("&percnt;20").join(" ").split(";").join(" ");
  };
  HTMLEscaper.escape = function (__s7param0) {
    return __s7param0;
  };
  return HTMLEscaper;
}();
exports.HTMLEscaper = __s0local0;
