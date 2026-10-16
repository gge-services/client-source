Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_ADefenceBuildingVO = require("gge-module:export_ADefenceBuildingVO");
var __s0local0 = function (__s1param0) {
  function BasicMoatVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._previousMightValue = 0;
    __s3local0._width = 1;
    __s3local0._height = 1;
    __s3local0._buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
    __s3local0._hitPoints = 100;
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMoatVO, __s1param0);
  BasicMoatVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir;
  };
  Object.defineProperty(BasicMoatVO.prototype, "isMoatAvailableByBuildOrder", {
    get: function () {
      var __s7local0 = __dep_export_Iso.Iso.data.objects.defences.moat;
      if (__s7local0) {
        return this.level == __s7local0.level + 1 && !__s7local0.buildingState.isUnderConstruction;
      } else {
        return this.level == 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVO.prototype.getDeltaMightValue = function () {
    if (this._previousMightValue > 0) {
      return this.mightValue - this._previousMightValue;
    } else {
      return __s1param0.prototype.getDeltaMightValue.call(this);
    }
  };
  Object.defineProperty(BasicMoatVO.prototype, "isAvailableByLevel", {
    get: function () {
      return this.isMoatAvailableByBuildOrder && Object.getOwnPropertyDescriptor(__dep_export_AShopVO.AShopVO.prototype, "isAvailableByLevel").get.call(this);
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO.prototype, "isAvailableByLevel").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name";
  };
  BasicMoatVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_short_info";
  };
  BasicMoatVO.prototype.getUpgradeInfoString = function () {
    return "castlewall_upgrade_info";
  };
  Object.defineProperty(BasicMoatVO.prototype, "visualType", {
    get: function () {
      return this.type;
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVO.prototype.getVisualBaseName = function () {
    var __s27local0 = this.name + "_" + this.group;
    if (this.visualType != "") {
      __s27local0 += "_" + this.visualType;
    }
    return __s27local0;
  };
  BasicMoatVO.prototype.getVisualClassName = function () {
    return this.getVisualBaseName() + "_" + this.getAreaKingdomName();
  };
  BasicMoatVO.prototype.createInfoDialogItems = function (__s32param0) {
    __s32param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Btn_Moat, "castlewall_upgrade_info", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.moatBonus]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  BasicMoatVO.prototype.getShopIconURL = function (__s34param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.name + "_Moat_" + (__s34param0 == "" ? this.getAreaKingdomName() : __s34param0));
  };
  BasicMoatVO.prototype.getShopIconName = function (__s36param0) {
    return this.getVisualBaseName() + "_" + (__s36param0 == "" ? this.getAreaKingdomName() : __s36param0);
  };
  Object.defineProperty(BasicMoatVO.prototype, "destAreaData", {
    get: function () {
      if (this.isoData) {
        return this.isoData.areaData;
      } else {
        return __dep_export_CastleModel.CastleModel.areaData.activeArea;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVO.prototype, "positions", {
    get: function () {
      return this._positions;
    },
    set: function (__s44param0) {
      this._positions = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVO.prototype, "previousMightValue", {
    get: function () {
      return this._previousMightValue;
    },
    set: function (__s48param0) {
      this._previousMightValue = __s48param0;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMoatVO;
}(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO);
exports.BasicMoatVO = __s0local0;
var __dep_export_AShopVO = require("gge-module:export_AShopVO");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
