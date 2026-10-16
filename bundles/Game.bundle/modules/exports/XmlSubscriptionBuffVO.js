Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function XmlSubscriptionBuffVO() {
    this._id = 0;
    this._subscriptionTypeId = 0;
    this._tier = 0;
    this._boni = [];
    this._displayOrder = 0;
    this._seriesId = 0;
    this._requiredMembers = 0;
    this._packageType = __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.UNKNOWN;
  }
  XmlSubscriptionBuffVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("subscriptionBuffID", __s5param0, -1));
    this._subscriptionTypeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("subscriptionTypeID", __s5param0, -1));
    this._tier = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("tier", __s5param0, -1));
    this._displayOrder = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("displayOrder", __s5param0, -1));
    this._seriesId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("seriesID", __s5param0, -1));
    this._requiredMembers = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("requiredMembers", __s5param0, -1));
    this._packageType = __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.getTypeByServerId(this._subscriptionTypeId);
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("effects", __s5param0);
    if (__s5local0 != "") {
      for (var __s5local1 = 0, __s5local2 = __s5local0.split(","); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3.length > 0) {
          var __s5local4 = __s5local3.split("&");
          var __s5local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local4[0]));
          var __s5local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local5, __s5local4[1]);
          this._boni.push(__s5local6);
        }
      }
    }
  };
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "subscriptionTypeId", {
    get: function () {
      return this._subscriptionTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "displayOrder", {
    get: function () {
      return this._displayOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "seriesId", {
    get: function () {
      return this._seriesId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "requiredMembers", {
    get: function () {
      return this._requiredMembers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSubscriptionBuffVO.prototype, "packageType", {
    get: function () {
      return this._packageType;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSubscriptionBuffVO;
}();
exports.XmlSubscriptionBuffVO = __s0local0;
