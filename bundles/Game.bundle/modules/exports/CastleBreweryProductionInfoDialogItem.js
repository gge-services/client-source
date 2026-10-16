Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local0 = function (__s1param0) {
  function CastleBreweryProductionInfoDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBreweryProductionInfoDialogItem, __s1param0);
  CastleBreweryProductionInfoDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.fill = function () {
    var __s11local0 = this.getItemMc();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_value, this.valueVO);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.textID));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s11local0.mc_icon);
    __s11local0.mc_icon.scaleX = __s11local0.mc_icon.scaleY = 1;
    __s11local0.mc_crest.visible = this.symbolName == "crest";
    if (this.symbolName == "crest") {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s11local0.mc_crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    } else if (this.symbolName == "allianceCrest") {
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(__s11local0.mc_icon, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.XS, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    } else if (this.symbolName == "baron") {
      var __s11local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId);
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s11local1, __s11local0.mc_icon, 30, 30);
    } else {
      var __s11local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(this.symbolName))();
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.centerMovieClip(__s11local2, 30, 30, true);
      __s11local0.mc_icon.addChild(__s11local2);
    }
    this.setVisibility(true);
  };
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "symbolName", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "valueVO", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "textID", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  return CastleBreweryProductionInfoDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleBreweryProductionInfoDialogItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
