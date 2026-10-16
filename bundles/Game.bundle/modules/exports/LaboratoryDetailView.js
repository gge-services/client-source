Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function LaboratoryDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LaboratoryDetailView, __s1param0);
  Object.defineProperty(LaboratoryDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Laboratory");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LaboratoryDetailView.prototype.drawCastleVO = function () {
    this._castleLayer = new __s0local0();
    this._layerBackground = new __s0local0();
    this._layerMoat = new __s0local0();
    this._layerMoat.mouseChildren = false;
    this._layerKeep = new __s0local0();
    this._layerKeep.mouseChildren = false;
    this._layerFront = new __s0local0();
    this._layerLeft = new __s0local0();
    this._layerLeft.mouseChildren = false;
    this._layerRight = new __s0local0();
    this._layerRight.mouseChildren = false;
    this._layerMiddle = new __s0local0();
    this._layerMiddle.mouseChildren = false;
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
    this._layerKeep.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_GATE));
  };
  LaboratoryDetailView.__initialize_static_members = function () {
    LaboratoryDetailView.CLASSNAME_KEEP = "Laboratory_Keep";
    LaboratoryDetailView.CLASSNAME_BACKWALL_LEFT = "Laboratory_Left";
    LaboratoryDetailView.CLASSNAME_BACKWALL_RIGHT = "Laboratory_Right";
    LaboratoryDetailView.CLASSNAME_GATE = "Laboratory_Gate";
  };
  return LaboratoryDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.LaboratoryDetailView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IFightDetailView");
__s0local1.__initialize_static_members();
