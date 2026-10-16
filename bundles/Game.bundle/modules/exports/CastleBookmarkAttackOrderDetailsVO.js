Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleBookmarkAttackOrderDetailsVO() {
    this._assignedAttackers = [];
    this.attackTimeStamp = 0;
    this.sendMessageToAssignedAttackers = true;
  }
  CastleBookmarkAttackOrderDetailsVO.prototype.parseParamObject = function (__s5param0) {
    var __s5local0 = new Date();
    this._assignedAttackers = __s5param0.M;
    this.attackTimeStamp = __s5local0.getTime() + __s5param0.TI * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.attackDate = __s5local0;
    this.attackDate.setTime(this.attackTimeStamp);
  };
  Object.defineProperty(CastleBookmarkAttackOrderDetailsVO.prototype, "remainingTimeInMilliSeconds", {
    get: function () {
      var __s7local0 = new Date();
      return this.attackTimeStamp - __s7local0.getTime();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkAttackOrderDetailsVO.prototype, "assignedAttackers", {
    get: function () {
      return this._assignedAttackers;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBookmarkAttackOrderDetailsVO;
}();
exports.CastleBookmarkAttackOrderDetailsVO = __s0local0;
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
