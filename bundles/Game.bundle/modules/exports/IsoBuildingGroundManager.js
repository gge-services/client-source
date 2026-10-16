Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ABasicBuildingVO = require("gge-module:export_ABasicBuildingVO");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function IsoBuildingGroundManager() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoBuildingGroundManager, __s1param0);
  IsoBuildingGroundManager.prototype.init = function (__s5param0) {
    this._ve = __s5param0;
    this.setVisibility(false);
  };
  IsoBuildingGroundManager.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.getLayer().removeChildren();
  };
  IsoBuildingGroundManager.prototype.reset = function () {
    this.getLayer().removeChildren();
    this.setVisibility(false);
  };
  IsoBuildingGroundManager.prototype.updateDisp = function () {
    if (this.ve && this.ve.vo && this.ve.vo instanceof __dep_export_ABasicBuildingVO.ABasicBuildingVO && this.ve.vo.isBuildingGroundViewAvailable) {
      if (this.getLayer()) {
        this.getLayer().removeChildren();
      }
      var __s11local0;
      var __s11local1 = this.ve.buildingVO.buildingGroundType;
      if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(__dep_export_IsoConst.IsoConst.BUILDING_GROUND_COLORS, __s11local1)) {
        __s11local0 = __dep_export_IsoConst.IsoConst.BUILDING_GROUND_COLORS.get(__s11local1);
      } else {
        console.warn("invalid buildingGroundType ", this.ve.buildingVO.getVisualClassName(), this.ve.buildingVO.buildingGroundType);
        __s11local0 = __dep_export_IsoConst.IsoConst.BUILDING_GROUND_COLORS.get("INVALID");
      }
      this.addShapesToLayer(__s11local0[0], __s11local0[1], __s11local0[2]);
      this.addIconToLayer();
    }
  };
  IsoBuildingGroundManager.prototype.addShapesToLayer = function (__s17param0, __s17param1, __s17param2) {
    var __s17local0 = __dep_exact_f855840627e6e145.int(this.ve.buildingVO.rotatedWidth * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x);
    var __s17local1 = __dep_exact_f855840627e6e145.int(this.ve.buildingVO.rotatedHeight * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y);
    var __s17local2 = new __s0local0();
    __s17local2.graphics.beginFill(__s17param0, __s17param2);
    __s17local2.graphics.drawRect(0, 0, __s17local0, __s17local1);
    __s17local2.graphics.endFill();
    __s17local2.setBounds(0, 0, __s17local0, __s17local1);
    var __s17local3 = new __s0local0();
    __s17local3.graphics.lineStyle(__dep_export_IsoConst.IsoConst.BUILDING_GROUND_BORDER_THICKNESS, __s17param1, __dep_export_IsoConst.IsoConst.BUILDING_GROUND_BORDER_ALPHA);
    __s17local3.graphics.moveTo(0, 0);
    __s17local3.graphics.lineTo(__s17local0, 0);
    __s17local3.graphics.lineTo(__s17local0, __s17local1);
    __s17local3.graphics.lineTo(0, __s17local1);
    __s17local3.graphics.lineTo(0, 0);
    __s17local3.graphics.endFill();
    __s17local3.setBounds(0, 0, __s17local0, __s17local1);
    var __s17local4 = new __s0local1();
    var __s17local5 = new __s0local1();
    __s17local4.addChild(__s17local2);
    __s17local4.addChild(__s17local3);
    __s17local5.addChild(__s17local4);
    if (this.getLayer()) {
      this.getLayer().addChild(__s17local5);
    }
    __s17local4.rotation = 45;
    __s17local5.scaleX = 2;
    __s17local5.x = 0;
    __s17local5.y = 0;
  };
  IsoBuildingGroundManager.prototype.addIconToLayer = function () {
    var __s20local0 = new __s0local1();
    if (this.ve.buildingGroundIconClass) {
      try {
        var __s20local1;
        var __s20local2 = new Library.CastleInterfaceElements.BuildingGroundBg();
        __s20local0.addChild(__s20local2);
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s20local2, IsoBuildingGroundManager.ICON_BG_DIMENSION.x, IsoBuildingGroundManager.ICON_BG_DIMENSION.y);
        __s20local1 = this.ve.buildingVO.isDamaged ? this.ve.buildingVO.damageType == __dep_exact_26a421b704832cff.ConstructionConst.DAMAGE_TYPE_FIRE ? new Library.CastleInterfaceElements.Icon_BuildingGround_Fire() : new Library.CastleInterfaceElements_Icons.Icon_BuildingGround_Plague() : new this.ve.buildingGroundIconClass();
        __s20local0.addChild(__s20local1);
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s20local1, IsoBuildingGroundManager.ICON_DIMENSION.x, IsoBuildingGroundManager.ICON_DIMENSION.y);
        if (this.ve.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW) && this.ve.buildingVO.canUpgrade()) {
          var __s20local3 = __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.ve.buildingVO, true) ? new Library.CastleInterfaceElements_Icons.Icon_UpgradePrimeSale() : new Library.CastleInterfaceElements_Icons.Icon_Upgrade();
          __s20local0.addChild(__s20local3);
          __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s20local3, IsoBuildingGroundManager.ICON_BG_DIMENSION.x * 0.5, IsoBuildingGroundManager.ICON_BG_DIMENSION.y * 0.5);
          __s20local3.x = 35;
          __s20local3.y = -35;
        }
      } catch (__s25local0) {}
    }
    var __s20local4 = this.getLayer();
    if (__s20local4) {
      var __s20local5 = __s20local4.getBounds(null);
      __s20local4.addChild(__s20local0);
      __s20local0.x = __s20local5.x + __s20local5.width / 2 + IsoBuildingGroundManager.ICON_OFFSET.x;
      __s20local0.y = __s20local5.y + __s20local5.height / 2 + IsoBuildingGroundManager.ICON_OFFSET.y;
      this._iconDisp = __s20local0;
    }
  };
  IsoBuildingGroundManager.prototype.setVisibility = function (__s28param0) {
    this.getLayer().visible = __s28param0;
  };
  IsoBuildingGroundManager.prototype.setIconVisibility = function (__s30param0) {
    if (this._iconDisp) {
      this._iconDisp.visible = __s30param0;
    }
  };
  IsoBuildingGroundManager.prototype.updateIcon = function () {
    if (this._iconDisp) {
      if (this._iconDisp.parent) {
        this._iconDisp.parent.removeChild(this._iconDisp);
      }
      this._iconDisp = null;
    }
    this.addIconToLayer();
  };
  IsoBuildingGroundManager.prototype.getLayer = function () {
    return this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.BUILDING_GROUND);
  };
  Object.defineProperty(IsoBuildingGroundManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  IsoBuildingGroundManager.__initialize_static_members = function () {
    IsoBuildingGroundManager.ICON_BG_DIMENSION = new __s0local2(__dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * 3, __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * 3);
    IsoBuildingGroundManager.ICON_DIMENSION = new __s0local2(__dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * 2, __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * 2);
    IsoBuildingGroundManager.ICON_OFFSET = new __s0local2(-5, -5);
  };
  return IsoBuildingGroundManager;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoBuildingGroundManager = __s0local3;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
__s0local3.__initialize_static_members();
