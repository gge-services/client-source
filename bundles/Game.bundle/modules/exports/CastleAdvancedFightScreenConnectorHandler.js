Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function () {
  function CastleAdvancedFightScreenConnectorHandler(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null) {
    this._connectorType = 0;
    this._displayType = 0;
    this._fightItemContainer = __s3param0;
    this._connectors = __s3param1;
    this._connectorType = __s3param2;
    this._displayType = __s3param3;
    this._fightItemVO = __s3param4;
  }
  CastleAdvancedFightScreenConnectorHandler.prototype.show = function () {
    this.visible(true);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.reset = function () {
    this.visible(false);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.displayComponent = function (__s9param0) {
    switch (this.connectorType) {
      case CastleAdvancedFightScreenConnectorHandler.UNITRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.UNITFRONT:
      case CastleAdvancedFightScreenConnectorHandler.UNITLEFT:
        __s9param0.castleadvancedTroopSelection.showUnitList(__s9param0.getFilteredArray(__dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS), this._fightItemContainer, __s9param0.sourceArea, __s9param0, this.getFlankTypeByCurrentConnectorType(), this._fightItemVO);
        break;
      case CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
      case CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
        __s9param0.castleadvancedTroopSelection.showToolList(__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "CastleDefenceDialog") ? __s9param0.getWallAndGateShopArray() : __s9param0.getFilteredArray(__dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_TOOLS), this._fightItemContainer, __s9param0.sourceArea, __s9param0, this.getFlankTypeByCurrentConnectorType(), this._fightItemVO);
    }
    if (__s9param0.castleadvancedTroopSelection.isListEmpty()) {
      this.hideAll(__s9param0);
    } else {
      __s9param0.castleLayer.doCache();
      __s9param0.castleLayer.mouseEnabled = false;
    }
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.getFlankTypeByCurrentConnectorType = function () {
    switch (this.connectorType) {
      case CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
      case CastleAdvancedFightScreenConnectorHandler.UNITLEFT:
        return __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT;
      case CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
      case CastleAdvancedFightScreenConnectorHandler.UNITFRONT:
        return __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE;
      case CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.UNITRIGHT:
        return __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT;
      default:
        return -1;
    }
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.hideAll = function (__s17param0) {
    this.reset();
    this.hideComponent(__s17param0);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.hideComponent = function (__s19param0) {
    __s19param0.castleadvancedTroopSelection.hide();
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s19param0.castleLayer);
    __s19param0.castleLayer.mouseEnabled = true;
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.visible = function (__s21param0) {
    this._fightItemContainer.highlighted = __s21param0;
    this.updateConnectorsVisibility(__s21param0);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.updateConnectorsVisibility = function (__s23param0) {
    for (var __s23local0 = 0; __s23local0 < this._connectors.length; __s23local0++) {
      this._connectors[__s23local0].visible = __s23param0;
    }
  };
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "connectors", {
    get: function () {
      return this._connectors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "connectorType", {
    get: function () {
      return this._connectorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "isVisible", {
    get: function () {
      var __s31local0 = true;
      if (this.connectors != null) {
        for (var __s31local1 = 0, __s31local2 = this.connectors; __s31local1 < __s31local2.length; __s31local1++) {
          var __s31local3 = __s31local2[__s31local1];
          if (__s31local3 !== undefined) {
            if (!__s31local3.visible) {
              __s31local0 = false;
            }
          }
        }
      }
      return __s31local0 && this._fightItemContainer.highlighted;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedFightScreenConnectorHandler.TOOLLEFT = 1;
  CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT = 2;
  CastleAdvancedFightScreenConnectorHandler.TOOLFRONT = 3;
  CastleAdvancedFightScreenConnectorHandler.UNITLEFT = 4;
  CastleAdvancedFightScreenConnectorHandler.UNITRIGHT = 5;
  CastleAdvancedFightScreenConnectorHandler.UNITFRONT = 6;
  return CastleAdvancedFightScreenConnectorHandler;
}();
exports.CastleAdvancedFightScreenConnectorHandler = __s0local0;
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
