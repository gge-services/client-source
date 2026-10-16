Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function DecorationForgeSelectTargetDialogListItemVE() {
    var __s3local0 = this;
    __s3local0._isMouseDown = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectTargetDialogListItemVE, __s1param0);
  DecorationForgeSelectTargetDialogListItemVE.prototype.init = function () {
    this.disp.addChild(this._clip = new __dep_exact_9e901e8e2483a22f_1.GoodgameDisplayObjectClipExternal(DecorationForgeSelectTargetDialogListItemVE.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_DecorationForgeSelectTargetDialog.DecorationForgeSelectTargetDialog.NAME)));
    var __s5local0 = this.getItemMc();
    __s5local0.mc_location.mouseChildren = false;
    __s5local0.mc_xp.mouseChildren = false;
    __s5local0.mc_value0.mouseChildren = false;
    __s5local0.mc_value1.mouseChildren = false;
    __s5local0.mc_value0.mc_icon.gotoAndStop(1);
    __s5local0.mc_value1.mc_icon.gotoAndStop(2);
    this._xpProgress = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(__s5local0.mc_xp.mc_progress, 238);
    __s5local0.mc_unique.toolTipText = "uniqueDeco";
    __s5local0.mc_value0.toolTipText = "fusionLevel";
    __s5local0.mc_value1.toolTipText = "publicOrder";
    __s5local0.mc_xp.toolTipText = "fusionXP";
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.updateWithNewVO = function (__s11param0) {
    this._vo = __s11param0;
    this.update();
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.update = function () {
    var __s13local0 = this.getItemMc();
    this.disp.visible = this._vo != null;
    if (this._vo) {
      this.setDownState(false);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s13local0.mc_item), this._vo.buildingVO, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local2(84, 68)));
      __s13local0.mc_location.gotoAndStop(this.getLocationIconFrame());
      __s13local0.mc_location.toolTipText = this.getLocationIconToolTipText();
      var __s13local1 = this._vo.buildingVO.buildingVO;
      __s13local0.mc_unique.visible = __s13local1.isUnique();
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._vo.buildingVO.getNameTextId())).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.mc_value0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local1.fusionInfoVO.getCurrentLevel())).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.mc_value1.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local1.decoPoints)).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.mc_blocked.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_quickGuide_noValidCatalyst_desc"));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.mc_xp.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s13local1.fusionInfoVO.getDeltaXpBetweenCurrentLevels(), __s13local1.fusionInfoVO.getDeltaXpForNextLevel()])).autoFitToBounds = true;
      this._xpProgress.setProgressByPercent(__s13local1.fusionInfoVO.getDeltaXpPercentFactor());
      __s13local0.mc_item.mc_amount.visible = this._vo.buildingVO.amount > 0 && !__s13local0.mc_unique.visible;
      if (__s13local0.mc_item.mc_amount.visible) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local0.mc_item.mc_amount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._vo.buildingVO.amount)).autoFitToBounds = true;
      }
      this.updateSelection();
      this.setBlockedState();
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.setBlockedState = function () {
    this.getItemMc().mc_blocked.visible = !this.xmlAllowsMinTierCatalyst();
    this.getItemMc().mc_xp.visible = this.xmlAllowsMinTierCatalyst();
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.xmlAllowsMinTierCatalyst = function () {
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.vo.buildingVO.buildingVO.fusionInfoVO.getCurrentLevel());
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s19local0)) > -1;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.setDownState = function (__s21param0) {
    this.getItemMc().mc_downState.visible = __s21param0;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.updateSelection = function () {
    this.getItemMc().mc_selected.visible = !!this._vo && this._vo.isSelected;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getLocationIconFrame = function () {
    switch (this._vo.selectVO.kingdomId) {
      case __dep_export_KingdomEnum.KingdomEnum.CLASSIC.id:
        return 2;
      case __dep_export_KingdomEnum.KingdomEnum.ICE.id:
        return 3;
      case __dep_export_KingdomEnum.KingdomEnum.DESSERT.id:
        return 4;
      case __dep_export_KingdomEnum.KingdomEnum.VOLCANO.id:
        return 5;
      case __dep_export_KingdomEnum.KingdomEnum.ISLAND.id:
        return 6;
      default:
        return 1;
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getLocationIconToolTipText = function () {
    switch (this._vo.selectVO.kingdomId) {
      case __dep_export_KingdomEnum.KingdomEnum.CLASSIC.id:
        return "location_build_green_tt";
      case __dep_export_KingdomEnum.KingdomEnum.ICE.id:
        return "location_build_ice_tt";
      case __dep_export_KingdomEnum.KingdomEnum.DESSERT.id:
        return "location_build_desert_tt";
      case __dep_export_KingdomEnum.KingdomEnum.VOLCANO.id:
        return "location_build_fire_tt";
      case __dep_export_KingdomEnum.KingdomEnum.ISLAND.id:
        return "location_build_storm_tt";
      default:
        return "location_stored_tt";
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.isMouseOverItem = function (__s33param0) {
    var __s33local0 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(new __s0local2(__s33param0.target.mouseX, __s33param0.target.mouseY), __s33param0.target, this.disp);
    var __s33local1 = this.disp.getBounds(null);
    return __s33local0.x >= __s33local1.left && __s33local0.x <= __s33local1.right && __s33local0.y >= __s33local1.top && __s33local0.y <= __s33local1.bottom;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseDown = function (__s35param0) {
    this._isMouseDown = true;
    this.setDownState(true);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseUp = function (__s37param0) {
    if (this._isMouseDown && this.isShown && this._onClickFunc && this.xmlAllowsMinTierCatalyst()) {
      this._onClickFunc(this);
    }
    this._isMouseDown = false;
    this.setDownState(false);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseOver = function (__s40param0) {
    __s1param0.prototype.onMouseOver.call(this, __s40param0);
    if (this.isMouseOverItem(__s40param0)) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseOut = function (__s43param0) {
    __s1param0.prototype.onMouseOut.call(this, __s43param0);
    if (!this.isMouseOverItem(__s43param0)) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      this.setDownState(false);
    }
  };
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVE.prototype, "onClickFunc", {
    get: function () {
      return this._onClickFunc;
    },
    set: function (__s50param0) {
      this._onClickFunc = __s50param0;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectTargetDialogListItemVE.__initialize_static_members = function () {
    DecorationForgeSelectTargetDialogListItemVE.ASSET_CLIP_NAME = "DecorationForgeSelectTarget_ListItem";
  };
  return DecorationForgeSelectTargetDialogListItemVE;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.DecorationForgeSelectTargetDialogListItemVE = __s0local3;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DecorationForgeSelectTargetDialog = require("gge-module:export_DecorationForgeSelectTargetDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
__s0local3.__initialize_static_members();
