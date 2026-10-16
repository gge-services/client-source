Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleDelayCommandVO(__s3param0, __s3param1) {
    this.isStackAble = false;
    this.commandID = __s3param0;
    this.isStackAble = __s3param1;
    this.commandList = [];
    this.paramList = [];
  }
  CastleDelayCommandVO.prototype.addCommand = function (__s5param0, __s5param1) {
    if (!this.isStackAble) {
      this.commandList = [];
      this.paramList = [];
    }
    this.commandList.unshift(__s5param0);
    this.paramList.unshift(__s5param1);
  };
  return CastleDelayCommandVO;
}();
exports.CastleDelayCommandVO = __s0local0;
