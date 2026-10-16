Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicPrivateOfferVO = require("gge-module:class_BasicPrivateOfferVO");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __dep_class_OfferQuestConditionLogicEnum = require("gge-module:class_OfferQuestConditionLogicEnum");
var __s0local0 = function () {
  function BasicPrivateOfferVOFactory(__s3param0) {
    this.privateOfferData = __s3param0;
  }
  BasicPrivateOfferVOFactory.prototype.createOfferFromParams = function (__s5param0) {
    var __s5local0 = new __dep_class_BasicPrivateOfferVO.BasicPrivateOfferVO();
    this.fillFromParamObject(__s5local0, __s5param0.O);
    return __s5local0;
  };
  BasicPrivateOfferVOFactory.prototype.fillFromParamObject = function (__s7param0, __s7param1) {
    var __s7local0;
    var __s7local1;
    var __s7local2 = null;
    var __s7local3 = parseInt(__s7param1.OID);
    __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByServerEventID(parseInt(__s7param1.OS));
    if (__s7param1.RS) {
      Date.now() + parseInt(__s7param1.RS) * 1000;
      false;
    } else {
      true;
    }
    __s7local2 = new Map();
    if (__s7param1.OD) {
      for (__s7local0 in __s7param1.OD) {
        __s7local1 = __s7param1.OD[__s7local3];
        var __s7local4 = this.privateOfferData.createOfferDescriptionObject(__s7local0, __s7local1);
        if (__s7local4) {
          __s7local2.set(__s7local3, __s7local4);
        }
      }
    }
    if (__s7param1.QD) {
      this.privateOfferData.createQuestConditionContainer(__s7param1.QD, __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.getConditionLogicByName(__s7param1.QD.logic));
    }
  };
  BasicPrivateOfferVOFactory.prototype.dispose = function () {
    this.privateOfferData = null;
  };
  return BasicPrivateOfferVOFactory;
}();
exports.BasicPrivateOfferVOFactory = __s0local0;
