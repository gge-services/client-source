Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ConstructionItemExpiredDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemExpiredDialogListItem, __s1param0);
  ConstructionItemExpiredDialogListItem.prototype.initLoaded = function () {
    this._itxt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO());
    this._itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("building_level"));
  };
  ConstructionItemExpiredDialogListItem.prototype.fill = function () {
    this._expiredVO = this.data;
    this._itxt_name.textContentVO.textId = this._expiredVO.buildingVO.getNameString();
    this._itxt_level.textContentVO.textReplacements = [this._expiredVO.buildingVO.level];
    this.drawIcon();
    this.drawCI();
  };
  ConstructionItemExpiredDialogListItem.prototype.drawIcon = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.getItemMc().mc_buildingIcon);
    var __s9local0 = new Library.CastleInterfaceElements.BuildingGroundBg();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s9local0, 33, 33);
    this.getItemMc().mc_buildingIcon.addChild(__s9local0);
    var __s9local1 = new (__dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(this._expiredVO.buildingVO).buildingGroundIconClass)();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s9local1, 23.099999999999998, 23.099999999999998);
    this.getItemMc().mc_buildingIcon.addChild(__s9local1);
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
  };
  ConstructionItemExpiredDialogListItem.prototype.drawCI = function () {
    var __s11local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.getItemMc().mc_ci).addIconMc(this.getItemMc().mc_ci);
    var __s11local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(40, 40));
    var __s11local2 = new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO();
    __s11local2.constructionItemVO = this._expiredVO.constructionItemVO;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s11local0, __s11local2, __s11local1);
  };
  return ConstructionItemExpiredDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.ConstructionItemExpiredDialogListItem = __s0local1;
