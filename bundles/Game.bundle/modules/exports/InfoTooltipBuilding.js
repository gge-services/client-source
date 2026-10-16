Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function InfoTooltipBuilding() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.InfoTooltip_Building()) || this).dispMC.mouseChildren = false;
    __s3local0.dispMC.mouseEnabled = false;
    if (Library.CastleInterfaceElements_Icons && Library.CastleInterfaceElements_Icons.Icon_BuildingWithEffect) {
      __s3local0.effectIcon = new Library.CastleInterfaceElements_Icons.Icon_BuildingWithEffect();
    }
    if (Library.CastleInterfaceElements_Icons && Library.CastleInterfaceElements_Icons.Icon_BuildingRelic) {
      __s3local0.relicIcon = new Library.CastleInterfaceElements_Icons.Icon_BuildingRelic();
    }
    __s3local0._itxt_line1 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line1, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_line2 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_line3 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line3, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    if (__s3local0.effectIcon) {
      __s3local0.infoToolTip.addChild(__s3local0.effectIcon);
    }
    if (__s3local0.relicIcon) {
      __s3local0.infoToolTip.addChild(__s3local0.relicIcon);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfoTooltipBuilding, __s1param0);
  Object.defineProperty(InfoTooltipBuilding.prototype, "dispMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.prototype.updateMenuPosition = function () {
    var __s11local0 = this.target;
    if (__s11local0 && __s11local0.elementContainer) {
      var __s11local1 = __s11local0.uiDisp.localToGlobal(__s11local0.getLocalDispPosTopCenter());
      var __s11local2 = new __s0local0(Math.max(this._itxt_line1.textWidth, this._itxt_line2.textWidth, this._itxt_line3.textWidth), this.infoToolTip.getBounds(null).height);
      __s11local1.x = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp(__s11local1.x, __s11local2.x / 2 + 10, this.disp.stage.stageWidth - __s11local2.x / 2 - 10);
      __s11local1.y = __dep_exact_9e901e8e2483a22f_1.MathBase.max(__s11local1.y, __s11local2.y + 30);
      this.disp.x = __s11local1.x;
      this.disp.y = __s11local1.y;
    } else {
      this.hide();
    }
  };
  Object.defineProperty(InfoTooltipBuilding.prototype, "worldLayer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.layers.transformLayer;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.prototype.initComponent = function () {
    this._itxt_line1.clearText();
    this._itxt_line2.clearText();
    this._itxt_line3.clearText();
    var __s19local0 = this.target.vo;
    this._itxt_line1.textContentVO.stringValue = __s19local0.getInfoTooltipLine1();
    this._itxt_line2.textContentVO.stringValue = __s19local0.getInfoTooltipLine2();
    this._itxt_line3.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea ? __s19local0.getInfoTooltipLine3() : "";
    if (this.effectIcon) {
      this.effectIcon.visible = __dep_exact_81dacdf05bd32292.instanceOfClass(__s19local0, "DecoBuildingVO") && __s19local0.allBuildingEffects.length > 0;
      this.effectIcon.x = -this._itxt_line1.textWidth / 2 - 30;
      this.effectIcon.y = this._itxt_line1.y + this._itxt_line1.height / 2;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(this.effectIcon, 30, 30);
    }
    if (this.relicIcon) {
      this.relicIcon.visible = __dep_exact_81dacdf05bd32292.instanceOfClass(__s19local0, "ABasicBuildingVO") && __s19local0.isRelicBuilding;
      this.relicIcon.x = -this._itxt_line1.textWidth / 2 - 30;
      this.relicIcon.y = this._itxt_line1.y + this._itxt_line1.height / 2;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(this.relicIcon, 30, 30);
    }
  };
  Object.defineProperty(InfoTooltipBuilding.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.__initialize_static_members = function () {
    InfoTooltipBuilding.NAME = "InfoTooltipBuilding";
  };
  return InfoTooltipBuilding;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.InfoTooltipBuilding = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
__s0local1.__initialize_static_members();
