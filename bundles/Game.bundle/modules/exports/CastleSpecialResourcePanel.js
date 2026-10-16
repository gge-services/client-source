Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBaseResourcePanel = require("gge-module:export_CastleBaseResourcePanel");
var __dep_export_ResourcePanelItem = require("gge-module:export_ResourcePanelItem");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
var __s0local0 = function (__s1param0) {
  function CastleSpecialResourcePanel(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialResourcePanel, __s1param0);
  CastleSpecialResourcePanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.onChangeResources();
  };
  CastleSpecialResourcePanel.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
  };
  CastleSpecialResourcePanel.prototype.updatePosition = function () {};
  CastleSpecialResourcePanel.prototype.initResourceItems = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeStorage) {
      this._availableSpecialResources = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getReceivableSpecialResources();
      for (var __s11local0 = 0; __s11local0 < this._availableSpecialResources.length; __s11local0++) {
        var __s11local1 = this._availableSpecialResources[__s11local0];
        var __s11local2 = new __dep_export_ResourcePanelItem.ResourcePanelItem(this.getSpecialResourceItemFrameForCollectableEnum(__s11local1));
        __s11local2.resourceType = __s11local1;
        var __s11local3 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(__s11local1);
        __s11local2.isBoosted = !!__s11local3 && __s11local3.isActive;
        this.addResource(__s11local2);
      }
      this.populationContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_POPULATION);
      this.populationContainer.isBoosted = false;
      this.populationContainer.isStorageBarVisible = false;
      this.addResource(this.populationContainer);
      this.onChangeResources();
    }
  };
  CastleSpecialResourcePanel.prototype.updateResources = function () {
    var __s16local0 = this;
    var __s16local1 = this._availableSpecialResources;
    if (__dep_export_CastleModel.CastleModel.areaData.activeStorage) {
      this._availableSpecialResources = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getReceivableSpecialResources();
      var __s16local2 = __s16local1.filter(function (__s19param0) {
        return __s16local0._availableSpecialResources.indexOf(__s19param0) < 0;
      });
      if (__s16local2.length > 0) {
        this._resourceContainer.concat().forEach(function (__s22param0) {
          if (__s16local2.indexOf(__s22param0.resourceType) >= 0) {
            __s16local0.removeResource(__s22param0);
          }
        });
      }
      this._availableSpecialResources.filter(function (__s25param0) {
        return __s16local1.indexOf(__s25param0) < 0;
      }).forEach(function (__s27param0) {
        var __s27local0 = new __dep_export_ResourcePanelItem.ResourcePanelItem(__s16local0.getSpecialResourceItemFrameForCollectableEnum(__s27param0));
        __s27local0.resourceType = __s27param0;
        __s27local0.isBoosted = false;
        __s16local0.addResource(__s27local0);
      });
      this.onChangeResources();
      this.onChangeCastleParameters();
    }
  };
  CastleSpecialResourcePanel.prototype.updateBoostIndicators = function () {
    if (this._resourceContainer != null) {
      for (var __s29local0 = 0, __s29local1 = this._resourceContainer; __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined && __s29local2.isResourceContainer) {
          var __s29local3 = __s29local2;
          var __s29local4 = this.hasLaboratoryBoostFor(__s29local3.resourceType);
          __s29local3.setBoostIndicator(__s29local4, __s29local4);
        }
      }
    }
  };
  CastleSpecialResourcePanel.prototype.onChangeResources = function (__s35param0 = null) {
    if (this._resourceContainer != null) {
      for (var __s35local0 = 0, __s35local1 = this._resourceContainer; __s35local0 < __s35local1.length; __s35local0++) {
        var __s35local2 = __s35local1[__s35local0];
        var __s35local3 = __dep_exact_81dacdf05bd32292.castAs(__s35local2, "ResourcePanelItem");
        if (__s35local3 && __s35local3.resourceType) {
          if (!__dep_export_CastleModel.CastleModel.areaData.activeStorage) {
            return;
          }
          __s35local3.setValue(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s35local3.resourceType).amount);
          __s35local3.setStorageBar(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s35local3.resourceType).filledInPercent);
        }
      }
    }
  };
  CastleSpecialResourcePanel.prototype.updateElementsPositions = function () {
    var __s42local0 = __dep_exact_f855840627e6e145.int(this._totalContainerWidth * -0.5);
    this.specialResourcePanel.head_left.x = __s42local0;
    if (this._resourceContainer != null) {
      for (var __s42local1 = 0, __s42local2 = this._resourceContainer; __s42local1 < __s42local2.length; __s42local1++) {
        var __s42local3 = __s42local2[__s42local1];
        if (__s42local3 !== undefined) {
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s42local3, "ResourcePanelSublayerButton")) {
            __s42local3.disp.x = __s42local0 + __s42local3.disp.width / 2;
            __s42local3.disp.y = 0 + __s42local3.disp.mc_boosted.height / 2;
          } else {
            __s42local3.disp.y = 0;
            __s42local3.disp.x = __s42local0;
          }
          __s42local0 += __dep_exact_f855840627e6e145.int(__s42local3.disp.width);
        }
      }
    }
    this.specialResourcePanel.head_right.x = __s42local0;
    this.specialResourcePanel.setChildIndex(this.specialResourcePanel.head_left, this.specialResourcePanel.numChildren - 1);
    this.specialResourcePanel.setChildIndex(this.specialResourcePanel.head_right, this.specialResourcePanel.numChildren - 1);
  };
  CastleSpecialResourcePanel.prototype.onMouseOver = function (__s50param0) {
    __s1param0.prototype.onMouseOver.call(this, __s50param0);
    if (__s50param0.target.resourceType) {
      var __s50local0 = __s50param0.target.resourceType;
      this.showToolTip(this.getToolTipTypeForCollectableEnum(__s50local0), __s50param0.target);
    }
    switch (__s50param0.target) {
      case this.populationContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, this.populationContainer.disp);
    }
  };
  CastleSpecialResourcePanel.prototype.onChangeCastleParameters = function (__s54param0 = null) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeStorage) {
      this.populationContainer.setValue(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.population);
    }
  };
  CastleSpecialResourcePanel.prototype.destroy = function () {
    if (this._resourceContainer != null) {
      for (var __s57local0 = 0, __s57local1 = this._resourceContainer; __s57local0 < __s57local1.length; __s57local0++) {
        var __s57local2 = __s57local1[__s57local0];
        if (__s57local2 !== undefined) {
          this.removeResource(__s57local2);
        }
      }
    }
    this.removeResource(this.populationContainer);
    this.populationContainer.dispose();
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleSpecialResourcePanel.prototype, "kingdomOverlayFrame", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_CastleBaseResourcePanel.CastleBaseResourcePanel.prototype, "kingdomOverlayFrame").get.call(this);
    },
    set: function (__s65param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialResourcePanel.prototype, "specialResourcePanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialResourcePanel.prototype.isAvailable = function () {
    return this._availableSpecialResources.length > 0;
  };
  return CastleSpecialResourcePanel;
}(__dep_export_CastleBaseResourcePanel.CastleBaseResourcePanel);
exports.CastleSpecialResourcePanel = __s0local0;
