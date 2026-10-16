Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastleRerollAlienChanceDialogListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0._rerollChance = __s3param0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienChanceDialogListItem, __s1param0);
  CastleRerollAlienChanceDialogListItem.prototype.init = function () {
    this._clip = new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(CastleRerollAlienChanceDialogListItem.ASSET_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(CastleRerollAlienChanceDialogListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    this.update();
  };
  CastleRerollAlienChanceDialogListItem.prototype.destroy = function () {
    this._clip = null;
    __s1param0.prototype.destroy.call(this);
  };
  CastleRerollAlienChanceDialogListItem.prototype.update = function () {
    var __s9local0 = this.getItemMc();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_troop, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_nominal_add", [this._rerollChance.amountUnits]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_chance, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this._rerollChance.chance, {
      fractionalDigits: 3,
      trailingZeroes: true
    }));
  };
  CastleRerollAlienChanceDialogListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  CastleRerollAlienChanceDialogListItem.ASSET_NAME = "AlienChanceScrollItem";
  CastleRerollAlienChanceDialogListItem.ASSET_FILE_NAME = "CastleRerollAlienChances";
  return CastleRerollAlienChanceDialogListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleRerollAlienChanceDialogListItem = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
