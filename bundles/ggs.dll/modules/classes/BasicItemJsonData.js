Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BasicItemJsonData() {}
  BasicItemJsonData.prototype.parseXML = function (__s5param0) {
    this.itemXML = __s5param0;
  };
  BasicItemJsonData.prototype.getJsonById = function (__s7param0) {
    return this.itemXML[__s7param0].toString();
  };
  return BasicItemJsonData;
}();
exports.BasicItemJsonData = __s0local0;
