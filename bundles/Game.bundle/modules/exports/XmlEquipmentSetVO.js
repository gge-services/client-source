Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EquipmentBonusVO = require("gge-module:export_EquipmentBonusVO");
var __s0local0 = function () {
  function XmlEquipmentSetVO(__s3param0, __s3param1) {
    this._id = 0;
    this._neededItemThresholds = [];
    this._effects = [];
    this._setItems = [];
    this._id = __s3param0;
    this.addEffect(__s3param1);
  }
  XmlEquipmentSetVO.prototype.addEffect = function (__s5param0) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.neededItems || "");
    for (var __s5local1 = (__s5param0.effects || "").split(","), __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
      if (__s5local1[__s5local2] != "") {
        var __s5local3 = __s5local1[__s5local2].split("&");
        this._effects.push(new __dep_export_EquipmentBonusVO.EquipmentBonusVO().parseEquipmentFromValueString(parseInt(__s5local3[0]), __s5local3[1]));
        this._neededItemThresholds.push(__s5local0);
      }
    }
  };
  XmlEquipmentSetVO.prototype.addItem = function (__s10param0) {
    var __s10local0 = false;
    if (this._setItems != null) {
      for (var __s10local1 = 0, __s10local2 = this._setItems; __s10local1 < __s10local2.length; __s10local1++) {
        var __s10local3 = __s10local2[__s10local1];
        if (__s10local3 !== undefined && (__dep_exact_81dacdf05bd32292.instanceOfClass(__s10local3, "BasicEquipmentVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s10param0, "BasicEquipmentVO") && __s10local3.uniqueID == __s10param0.uniqueID || __dep_exact_81dacdf05bd32292.instanceOfClass(__s10local3, "CastleGemVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s10param0, "CastleGemVO") && __s10local3.id == __s10param0.id)) {
          __s10local0 = true;
        }
      }
    }
    if (!__s10local0) {
      this._setItems.push(__s10param0);
    }
  };
  Object.defineProperty(XmlEquipmentSetVO.prototype, "maxNeededItems", {
    get: function () {
      return this.neededItemThresholds[this.neededItemThresholds.length - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "name", {
    get: function () {
      if (__dep_exact_92d05af59ee2ff30.Localize.text("equipment_set_" + this.id).length <= 1) {
        return "QA-TEST-SET";
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("equipment_set_" + this.id);
      }
    },
    enumerable: true,
    configurable: true
  });
  XmlEquipmentSetVO.prototype.getReachedSetBonusText = function (__s23param0) {
    if (!__s23param0) {
      return "";
    }
    var __s23local0 = "";
    var __s23local1 = __s23param0.setCounts;
    if (__s23local1.get(this._id)) {
      for (var __s23local2 = 0; __s23local2 < this.neededItemThresholds.length; __s23local2++) {
        if (__s23local1.get(this._id) >= this.neededItemThresholds[__s23local2]) {
          var __s23local3 = this.effects[__s23local2].descriptionText;
          __s23local0 += __s23local0.length > 0 ? "\n" : "";
          __s23local0 += __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[__s23local2], __s23local3]);
        }
      }
    }
    return __s23local0;
  };
  XmlEquipmentSetVO.prototype.getNotReachedSetBonusText = function (__s30param0) {
    if (!__s30param0) {
      return this.getSetBonusText();
    }
    var __s30local0 = "";
    var __s30local1 = __s30param0.setCounts;
    for (var __s30local2 = 0; __s30local2 < this.neededItemThresholds.length; __s30local2++) {
      if (__s30local1.get(this._id) < this.neededItemThresholds[__s30local2]) {
        var __s30local3 = this.effects[__s30local2].descriptionText;
        __s30local0 += __s30local0.length > 0 ? "\n" : "";
        __s30local0 += __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[__s30local2], __s30local3]);
      }
    }
    return __s30local0;
  };
  XmlEquipmentSetVO.prototype.getSetBonusText = function () {
    var __s36local0 = "";
    for (var __s36local1 = 0; __s36local1 < this.neededItemThresholds.length; __s36local1++) {
      var __s36local2 = this.effects[__s36local1].descriptionText;
      __s36local0 += __s36local0.length > 0 ? "\n" : "";
      __s36local0 += __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[__s36local1], __s36local2]);
    }
    return __s36local0;
  };
  Object.defineProperty(XmlEquipmentSetVO.prototype, "setItems", {
    get: function () {
      return this._setItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "neededItemThresholds", {
    get: function () {
      return this._neededItemThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentSetVO;
}();
exports.XmlEquipmentSetVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
