Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_ResourcePanelItem = require("gge-module:export_ResourcePanelItem");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function CastleBaseResourcePanel(__s3param0) {
    var __s3local0 = this;
    __s3local0._isInitialized = false;
    __s3local0._totalContainerWidth = 0;
    __s3local0._currentToolTipType = -1;
    __s3local0._tooltips = [];
    __s3local0._toolTipBounds = new __s0local1();
    __s3local0._toolTipPosition = new __s0local0(0, 50);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._isInitialized = false;
    __s3local0._totalContainerWidth = 0;
    __s3local0.kingdomOverlayFrame = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBaseResourcePanel, __s1param0);
  CastleBaseResourcePanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this._resourceContainer = [];
    this.initResourceItems();
    this.updateElementsPositions();
    if (this.resourcePanel && this.resourcePanel.mc_islandPanel) {
      this.resourcePanel.mc_islandPanel.visible = false;
    }
    this._isInitialized = true;
  };
  CastleBaseResourcePanel.prototype.hideTooltip = function (__s8param0) {
    var __s8local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.getToolTip(this._currentToolTipType);
    if (__s8local0) {
      __s8local0.hide();
    }
  };
  CastleBaseResourcePanel.prototype.positionToolTip = function (__s11param0, __s11param1) {
    __s11param0.bgPointer.x = __s11param0.width / 2;
    this._toolTipPosition.x = __s11param1.left + __s11param1.width / 2 - __s11param0.width / 2;
    __s11param0.x = this._toolTipPosition.x;
    var __s11local0 = __s11param0.getBounds(__s11param0.parent);
    var __s11local1 = 0;
    if (__s11local0.left < this._toolTipBounds.left) {
      __s11local1 = this._toolTipBounds.left - __s11local0.left;
    } else if (__s11local0.right > this._toolTipBounds.right) {
      __s11local1 = this._toolTipBounds.right - __s11local0.right;
    }
    __s11param0.x += __s11local1;
    __s11param0.bgPointer.x -= __s11local1;
  };
  CastleBaseResourcePanel.prototype.showToolTip = function (__s15param0, __s15param1) {
    var __s15local0;
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.toolTipContainer = this.displayObject;
    this.hideTooltip(this._currentToolTipType);
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && this._currentToolTipType === __s15param0) {
      this._currentToolTipType = -1;
    } else {
      this._currentToolTipType = __dep_exact_f855840627e6e145.int(__s15param0);
      if (__s15local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.getToolTip(this._currentToolTipType)) {
        var __s15local1 = __s15param1.getBounds(__s15param1.parent);
        __s15local0.update();
        __s15local0.show(this._toolTipPosition);
        this.positionToolTip(__s15local0, __s15local1);
      }
    }
  };
  CastleBaseResourcePanel.prototype.initResourceItems = function () {};
  CastleBaseResourcePanel.prototype.getToolTipTypeForCollectableEnum = function (__s22param0) {
    var __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE;
    switch (__s22param0) {
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.HONEY:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.OIL:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.GLASS:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.COAL:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.IRON:
        __s22local0 = __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON;
    }
    return __s22local0;
  };
  CastleBaseResourcePanel.prototype.getSpecialResourceItemFrameForCollectableEnum = function (__s25param0) {
    var __s25local0 = 0;
    switch (__s25param0) {
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_FOOD;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_WOOD;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_STONE;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_AQUAMARINE;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.OIL:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_OLIVEOIL;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.GLASS:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_GLASS;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.COAL:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_COAL;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.IRON:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_IRON;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.HONEY:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_HONEY;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.MEAD:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_MEAD;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.BEEF:
        __s25local0 = __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_BEEF;
    }
    return __s25local0;
  };
  CastleBaseResourcePanel.prototype.destroy = function () {
    this._isInitialized = false;
    if (this._resourceContainer != null) {
      for (var __s28local0 = 0, __s28local1 = this._resourceContainer; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          __s28local2.dispose();
        }
      }
    }
    this._resourceContainer = null;
    __s1param0.prototype.destroy.call(this);
  };
  CastleBaseResourcePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth * 0.5;
    }
  };
  CastleBaseResourcePanel.prototype.updateElementsPositions = function () {
    var __s37local0 = __dep_exact_f855840627e6e145.int(this._totalContainerWidth * -0.5);
    var __s37local1 = 0;
    this.resourcePanel.head_left.x = __s37local0;
    if (this._panelBar) {
      this._panelBar.disp.y = __s37local1;
      __s37local1 += __dep_exact_f855840627e6e145.int(this._panelBar.disp.height);
      this._panelBar.setWidth(this._totalContainerWidth);
      this._panelBar.disp.x = 0;
    }
    if (this._resourceContainer != null) {
      for (var __s37local2 = 0, __s37local3 = this._resourceContainer; __s37local2 < __s37local3.length; __s37local2++) {
        var __s37local4 = __s37local3[__s37local2];
        if (__s37local4 !== undefined) {
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s37local4, "ResourcePanelSublayerButton")) {
            __s37local4.disp.x = __s37local0 + __s37local4.disp.width / 2;
            __s37local4.disp.y = __s37local1 + __s37local4.disp.mc_boosted.height / 2;
          } else {
            __s37local4.disp.y = __s37local1;
            __s37local4.disp.x = __s37local0;
          }
          __s37local0 += __dep_exact_f855840627e6e145.int(__s37local4.disp.width);
        }
      }
    }
    this.resourcePanel.head_right.x = __s37local0;
    this.resourcePanel.setChildIndex(this.resourcePanel.head_left, this.resourcePanel.numChildren - 1);
    this.resourcePanel.setChildIndex(this.resourcePanel.head_right, this.resourcePanel.numChildren - 1);
  };
  CastleBaseResourcePanel.prototype.addResource = function (__s46param0, __s46param1 = -1) {
    if (!this.hasResource(__s46param0)) {
      if (__s46param1 > -1) {
        this._resourceContainer.splice(__s46param1, 0, __s46param0);
      } else {
        this._resourceContainer.push(__s46param0);
      }
      this.displayObject.addChild(__s46param0.disp);
      this.calculatePanelWidth();
      if (this.isInitialized) {
        this.updateElementsPositions();
      }
      this._toolTipBounds.x = -this._totalContainerWidth / 2;
      this._toolTipBounds.width = this._totalContainerWidth;
    }
  };
  CastleBaseResourcePanel.prototype.calculatePanelWidth = function () {
    var __s52local0 = 0;
    if (this._resourceContainer != null) {
      for (var __s52local1 = 0, __s52local2 = this._resourceContainer; __s52local1 < __s52local2.length; __s52local1++) {
        var __s52local3 = __s52local2[__s52local1];
        if (__s52local3 !== undefined) {
          __s52local0 += __s52local3.disp.width;
        }
      }
    }
    this._totalContainerWidth = __s52local0;
  };
  CastleBaseResourcePanel.prototype.hasResource = function (__s58param0) {
    return this._resourceContainer.indexOf(__s58param0) > -1;
  };
  CastleBaseResourcePanel.prototype.removeResource = function (__s60param0) {
    var __s60local0 = __dep_exact_f855840627e6e145.int(this._resourceContainer.indexOf(__s60param0));
    if (__s60local0 > -1) {
      this._totalContainerWidth -= __s60param0.disp.width;
      this.displayObject.removeChild(__s60param0.disp);
      this._resourceContainer.splice(__s60local0, 1);
      if (this.isInitialized) {
        this.updateElementsPositions();
      }
    }
    this.calculatePanelWidth();
  };
  CastleBaseResourcePanel.prototype.setPanelBar = function (__s64param0) {
    if (this._panelBar) {
      this.resourcePanel.removeChild(this._panelBar.disp);
      this._panelBar.dispose();
    }
    this._panelBar = __s64param0;
    if (this._panelBar) {
      this.resourcePanel.addChild(this._panelBar.disp);
    }
    if (this.isInitialized) {
      this.updateElementsPositions();
    }
  };
  Object.defineProperty(CastleBaseResourcePanel.prototype, "kingdomOverlayFrame", {
    set: function (__s69param0) {
      this.resourcePanel.head_left.mc_overlay.gotoAndStop(__s69param0);
      this.resourcePanel.head_right.mc_overlay.gotoAndStop(__s69param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseResourcePanel.prototype.hideAllToolTips = function () {
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
  };
  Object.defineProperty(CastleBaseResourcePanel.prototype, "displayObject", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseResourcePanel.prototype, "resourcePanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseResourcePanel.prototype.hasLaboratoryBoostFor = function (__s77param0) {
    var __s77local0 = false;
    return !!__dep_export_CastleModel.CastleModel.areaData.activeArea && (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyMainCastle && (__s77local0 = __dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO ? __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList.getLaboratoryKingdomResourceBonus(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) > 0 : __dep_export_CastleModel.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID)), __s77local0 && __dep_export_CastleModel.CastleModel.areaData.activeStorage.getProducibleSpecialResource() == __s77param0);
  };
  return CastleBaseResourcePanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleBaseResourcePanel = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
