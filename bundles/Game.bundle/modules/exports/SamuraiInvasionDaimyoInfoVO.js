Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_SamuraiInvasionContractVO = require("gge-module:export_SamuraiInvasionContractVO");
var __s0local0 = function () {
  function SamuraiInvasionDaimyoInfoVO() {
    this._isEnabled = false;
    this._castleContracts = [];
    this._townshipContracts = [];
  }
  SamuraiInvasionDaimyoInfoVO.prototype.parseServerObject = function (__s5param0) {
    this._isEnabled = __s5param0.E == 1;
    var __s5local0 = __s5param0.C;
    if (__s5local0) {
      for (var __s5local1 = 0, __s5local2 = __s5local0.DCC; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this._castleContracts.push(new __dep_export_SamuraiInvasionContractVO.SamuraiInvasionContractVO(__s5local3));
        }
      }
      for (var __s5local4 = 0, __s5local5 = __s5local0.DTC; __s5local4 < __s5local5.length; __s5local4++) {
        __s5local3 = __s5local5[__s5local4];
        this._townshipContracts.push(new __dep_export_SamuraiInvasionContractVO.SamuraiInvasionContractVO(__s5local3));
      }
    }
  };
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "castleContracts", {
    get: function () {
      return this._castleContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "townshipContracts", {
    get: function () {
      return this._townshipContracts;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiInvasionDaimyoInfoVO;
}();
exports.SamuraiInvasionDaimyoInfoVO = __s0local0;
