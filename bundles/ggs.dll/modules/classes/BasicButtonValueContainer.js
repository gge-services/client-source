Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BasicButtonValueContainer(__s3param0) {
    this.more = __s3param0.getChildByName("btn_more");
    this.less = __s3param0.getChildByName("btn_less");
    this.max = __s3param0.getChildByName("btn_max");
  }
  BasicButtonValueContainer.prototype.getMoreButton = function () {
    return this.more;
  };
  BasicButtonValueContainer.prototype.getLessButton = function () {
    return this.less;
  };
  BasicButtonValueContainer.prototype.getMaxButton = function () {
    return this.max;
  };
  return BasicButtonValueContainer;
}();
exports.BasicButtonValueContainer = __s0local0;
