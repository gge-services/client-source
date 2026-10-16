Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function DonationItemsVO() {
    this._donationItemID = -1;
    this._donationItemSetID = -1;
    this._donationTypeID = -1;
    this._currencyID = -1;
    this._ratio = -1;
    this._maxPointLimit = -1;
    this._resourceID = -1;
  }
  DonationItemsVO.prototype.parseXmlNode = function (__s5param0) {
    this._donationItemID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationItemID", __s5param0, -1));
    this._donationItemSetID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationItemSetID", __s5param0, -1));
    this._donationTypeID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationTypeID", __s5param0, -1));
    this._currencyID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("currencyID", __s5param0, -1));
    this._ratio = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("ratio", __s5param0, -1));
    this._maxPointLimit = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maxPointLimit", __s5param0, -1));
    this._resourceID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("resourceID", __s5param0, -1));
  };
  Object.defineProperty(DonationItemsVO.prototype, "donationItemID", {
    get: function () {
      return this._donationItemID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "donationItemSetID", {
    get: function () {
      return this._donationItemSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "donationTypeID", {
    get: function () {
      return this._donationTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "currencyID", {
    get: function () {
      return this._currencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "ratio", {
    get: function () {
      return this._ratio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "maxPointLimit", {
    get: function () {
      return this._maxPointLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "resourceID", {
    get: function () {
      return this._resourceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "resourceEnum", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getResourceXmlVO(this.resourceID).resourceEnum;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "pointTypeVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getPointTypeVOByID(this.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "collectableVO", {
    get: function () {
      if (this.resourceID > 0) {
        return __dep_export_CollectableHelper.CollectableHelper.createVO(this.resourceEnum);
      } else {
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.currencyID);
      }
    },
    enumerable: true,
    configurable: true
  });
  return DonationItemsVO;
}();
exports.DonationItemsVO = __s0local0;
