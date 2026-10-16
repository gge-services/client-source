Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_LordVO = require("gge-module:export_LordVO");
var __s0local0 = function (__s1param0) {
  function CommanderVO() {
    var __s3local0 = this;
    __s3local0._playerIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CommanderVO, __s1param0);
  CommanderVO.prototype.getFeatherClassName = function () {
    return "GeneralFeather_" + this.picID;
  };
  CommanderVO.prototype.getVisClassName = function () {
    if (this.isHero) {
      return this.heroPicVisClassName;
    } else if (this.id == 1005) {
      return "Lord";
    } else {
      return "GeneralPic_" + this.picID;
    }
  };
  CommanderVO.prototype.getVisAsset = function () {
    if (this.isHero) {
      return this.heroPicAssetURL;
    } else {
      return "Lord_Icons";
    }
  };
  Object.defineProperty(CommanderVO.prototype, "name", {
    get: function () {
      if (this._name && this._name != "") {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("commander_index", [this._playerIndex, new __dep_exact_92d05af59ee2ff30_2.TextVO(this._name)]);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("commander_index", [this._playerIndex, __dep_exact_92d05af59ee2ff30.Localize.text("lord_name_general_unnamed")]);
      }
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "name").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CommanderVO.prototype, "defaultName", {
    get: function () {
      if (this._name && this._name != "") {
        return new __dep_exact_92d05af59ee2ff30_2.TextVO(this._name);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("lord_name_general_unnamed");
      }
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "defaultName").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CommanderVO.prototype, "playerIndex", {
    get: function () {
      return this._playerIndex;
    },
    set: function (__s30param0) {
      this._playerIndex = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  return CommanderVO;
}(__dep_export_LordVO.LordVO);
exports.CommanderVO = __s0local0;
