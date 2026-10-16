Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Container;
var __s0local2 = function (__s1param0) {
  function IsoHelperView() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoHelperView, __s1param0);
  IsoHelperView.prototype.createIsoObjectVEFromVO = function (__s5param0) {
    if (!__s5param0) {
      console.warn("IsoHelperView.createIsoObjectVEFromVO(): sourceVO is null.");
      return null;
    }
    var __s5local0 = __s5param0.getViewClass();
    if (!__s5local0) {
      return null;
    }
    var __s5local1 = new __s5local0();
    if (__s5local1) {
      __s5local1.init(__s5param0);
    }
    return __s5local1;
  };
  IsoHelperView.prototype.createFloorDisp = function (__s10param0, __s10param1, __s10param2) {
    var __s10local0 = new __s0local1();
    __s10local0.mouseChildren = false;
    __s10local0.mouseEnabled = false;
    var __s10local1 = __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * __s10param0.x;
    var __s10local2 = __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * __s10param0.y;
    var __s10local3 = new __s0local0();
    __s10local3.graphics.beginFill(__s10param1, __s10param2);
    __s10local3.graphics.drawRect(0, 0, __s10local1, __s10local2);
    __s10local3.graphics.endFill();
    __s10local3.rotation = 45;
    __s10local3.setBounds(0, 0, __s10local1, __s10local2);
    __s10local0.addChild(__s10local3);
    __s10local0.scaleX = 2;
    __s10local0.x = 0;
    __s10local0.y = 0;
    return __s10local0;
  };
  IsoHelperView.prototype.createCenterCross = function (__s12param0 = -1, __s12param1 = 16711935) {
    var __s12local0 = new __s0local0();
    __s12local0.graphics.beginFill(__s12param1, 1);
    __s12local0.graphics.drawRect(-2, -30, 4, 60);
    __s12local0.graphics.drawRect(-30, -2, 60, 4);
    __s12local0.graphics.endFill();
    var __s12local1 = new __s0local1();
    __s12local1.addChild(__s12local0);
    if (__s12param0 >= 0) {
      var __s12local2 = new __dep_exact_81dacdf05bd32292_3.TextField();
      __s12local2.text = "" + __s12param0;
      __s12local2.textColor = __s12param1;
      __s12local2.x = 35;
      __s12local2.y = -40;
      __s12local2.scaleX = __s12local2.scaleY = 4;
      __s12local2.autoSize = __dep_exact_81dacdf05bd32292_2.TextFieldAutoSize.LEFT;
      __s12local1.addChild(__s12local2);
    }
    return __s12local1;
  };
  Object.defineProperty(IsoHelperView.prototype, "stage", {
    get: function () {
      return __dep_export_CastleComponent.CastleComponent.layoutManager.stage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoHelperView.prototype, "bgStage", {
    get: function () {
      return __dep_export_CastleComponent.CastleComponent.layoutManager.bgStage;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.changeCursor = function (__s19param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__s19param0);
  };
  IsoHelperView.prototype.showRingMenu = function (__s21param0, __s21param1 = null) {
    if (__s21param0) {
      if (!__s21param1) {
        return;
      }
      var __s21local0 = __dep_exact_f855840627e6e145.int(__s21param1.vo.isInBuildingDistrict ? 8 : -1);
      __dep_export_CastleComponent.CastleComponent.layoutManager.showIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding, __s21param1, __s21local0);
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.SHOW_PANEL_INFO, [__s21param1.vo]));
    } else {
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding);
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, []));
    }
  };
  IsoHelperView.prototype.showBuildingInfoText = function (__s26param0, __s26param1 = null) {
    if (__s26param0 && __s26param1.interactiveVO.isInfoTooltipAvailable) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.showIngameUIComponent(__dep_export_InfoTooltipBuilding.InfoTooltipBuilding, __s26param1);
    } else {
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_InfoTooltipBuilding.InfoTooltipBuilding);
    }
  };
  IsoHelperView.prototype.showRotationPanel = function (__s30param0, __s30param1 = null) {
    if (__s30param0) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.showPanel(__dep_export_CastleRotationPanel.CastleRotationPanel);
      var __s30local0 = __dep_export_CastleComponent.CastleComponent.layoutManager.getPanel(__dep_export_CastleRotationPanel.CastleRotationPanel);
      if (__s30local0) {
        __s30local0.initAfterShow(__s30param1);
      }
    } else {
      __dep_export_CastleComponent.CastleComponent.layoutManager.hidePanel(__dep_export_CastleRotationPanel.CastleRotationPanel);
    }
  };
  Object.defineProperty(IsoHelperView.prototype, "isInIsoScreen", {
    get: function () {
      return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.doesAssetFileExist = function (__s37param0) {
    return __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.isItemAssetVersioned(__s37param0);
  };
  IsoHelperView.prototype.getAssetFileURL = function (__s39param0) {
    return __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s39param0);
  };
  Object.defineProperty(IsoHelperView.prototype, "areAnimationsActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.gfxData.animationActive;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.calcPosToCoordinateSystem = function (__s43param0, __s43param1, __s43param2) {
    return __s43param2.globalToLocal(__s43param1.localToGlobal(__s43param0));
  };
  IsoHelperView.prototype.canUseIsoEventSkin = function () {
    var __s45local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN);
    return !!__s45local0 && __s45local0.canUseIsoSkin() || __dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  IsoHelperView.prototype.getIsoEventSkinSuffix = function () {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      return __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
    }
    if (this.canUseIsoEventSkin()) {
      var __s47local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN);
      return __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s47local0.skinString);
    }
    return "";
  };
  IsoHelperView.prototype.getIsoColorsByKingdomId = function (__s51param0) {
    return __dep_export_IsoConst.IsoConst.ISO_COLORS.get(__dep_export_KingdomEnum.KingdomEnum.getTypeById(__s51param0));
  };
  IsoHelperView.prototype.getIsoColorsByActiveKingdom = function () {
    return __dep_export_IsoConst.IsoConst.ISO_COLORS.get(__dep_export_KingdomEnum.KingdomEnum.getTypeById(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID));
  };
  IsoHelperView.prototype.isValidDragPanel = function (__s55param0) {
    return __dep_export_IsoConst.IsoConst.VALID_PANELS_FOR_DRAGGING.indexOf(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(__s55param0)) >= 0;
  };
  IsoHelperView.prototype.getBuildingPlaceHolderClass = function (__s57param0, __s57param1) {
    var __s57local0 = "Placeholder_" + __s57param0 + "x" + __s57param1;
    try {
      return __dep_exact_81dacdf05bd32292_1.getDefinitionByNameFromLibrary(__s57local0);
    } catch (__s60local0) {
      __dep_exact_9e901e8e2483a22f.error("AInteractiveIsoObjectVE.buildingPlaceHolderClass): ClassNotFound - " + __s57local0);
    }
    return null;
  };
  return IsoHelperView;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoHelperView = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
var __dep_export_InfoTooltipBuilding = require("gge-module:export_InfoTooltipBuilding");
var __dep_export_CastleRotationPanel = require("gge-module:export_CastleRotationPanel");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
