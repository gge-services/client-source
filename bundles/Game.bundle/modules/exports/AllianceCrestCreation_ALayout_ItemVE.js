Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClip = require("gge-module:export_CastleMovieClip");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AllianceCrestCreation_ALayout_ItemVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._selected = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).layoutVO = __s3param0;
    __s3local0.createDisp();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestCreation_ALayout_ItemVE, __s1param0);
  AllianceCrestCreation_ALayout_ItemVE.prototype.createDisp = function () {
    var __s5local0 = "CoA_Layout_" + this.layoutType;
    new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("AllianceCrestCreation1")).doWhenLoaded(this.bindFunction(this.onDispLoaded));
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.onDispLoaded = function (__s7param0) {
    this.disp = __s7param0.currentshownDisplayObject;
    this.disp.actLikeButton = true;
    this.disp.gotoAndStop(1);
    this.disp.mouseChildren = false;
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.mouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.mouseOut));
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.mouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.mouseUp));
    this.updateDisp();
    this.addLayoutDisplay();
    this.addChild(this.disp);
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "layoutType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_ALayout_ItemVE.prototype.addLayoutDisplay = function () {
    var __s11local0 = "Collectable_AllianceLayout_" + this.layoutVO.allianceCoatLayoutID;
    var __s11local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s11local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11local0));
    __s11local1.doWhenLoaded(this.bindFunction(this.onLayoutDisplayLoaded));
    this.disp.mc_icon.addChild(__s11local1);
    __s11local1.x = -1;
    __s11local1.y = -1;
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.onLayoutDisplayLoaded = function (__s13param0) {
    var __s13local0 = this.disp.mc_selected ? this.disp.mc_selected : this.disp.mc_frame.mc_selected;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleDownToFit(__s13param0, __s13local0.width, __s13local0.height);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.setSelected = function (__s15param0) {
    this._selected = __s15param0;
    this.updateDisp();
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_ALayout_ItemVE.prototype.updateDisp = function () {
    this.disp.mc_selected.visible = this._selected;
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseOver = function (__s21param0) {
    this.disp.gotoAndStop(2);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseOut = function (__s23param0) {
    this.disp.gotoAndStop(1);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseDown = function (__s25param0) {
    this.disp.gotoAndStop(3);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseUp = function (__s27param0) {
    this.disp.gotoAndStop(2);
    this.onClickCallback(this.layoutVO);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.destroy = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.mouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.mouseOut));
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.mouseDown));
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.addOnClick = function (__s31param0) {
    this.onClickCallback = __s31param0;
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "layoutID", {
    get: function () {
      return this.layoutVO.allianceCoatLayoutID;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestCreation_ALayout_ItemVE;
}(__dep_export_CastleMovieClip.CastleMovieClip);
exports.AllianceCrestCreation_ALayout_ItemVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
