Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDetailView, __s1param0);
  CastleDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  CastleDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.x = -7;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._detailDrawAble, "CapitalMapobjectVO")) {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP_PALACE));
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._detailDrawAble, "MetropolMapobjectVO")) {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP_EMPORIUM));
    } else {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP + this._detailDrawAble.keepLevel));
    }
    this._layerLeft.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_BACKWALL + "_Left_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_TOWER + "_Left_Level" + this._detailDrawAble.towerLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_TOWER + "_Right_Level" + this._detailDrawAble.towerLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_GATE + this._detailDrawAble.gateLevel));
    this._layerRight.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_BACKWALL + "_Right_Level" + this._detailDrawAble.wallLevel));
    if (this._detailDrawAble.moatLevel > 0) {
      this._layerMoat.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_MOAT + this._detailDrawAble.moatLevel));
    }
  };
  CastleDetailView.__initialize_static_members = function () {
    CastleDetailView.CLASSNAME_MOAT = "CastlePart_Moat_Level";
    CastleDetailView.CLASSNAME_KEEP = "CastlePart_Keep_Level";
    CastleDetailView.CLASSNAME_BACKWALL = "CastleParts_BackWall";
    CastleDetailView.CLASSNAME_FRONTWALL = "CastleParts_FrontWall";
    CastleDetailView.CLASSNAME_TOWER = "CastleParts_Tower";
    CastleDetailView.CLASSNAME_GATE = "CastlePart_Gate_Level";
    CastleDetailView.CLASSNAME_KEEP_PALACE = "CastlePart_Keep_Palace";
    CastleDetailView.CLASSNAME_KEEP_EMPORIUM = "CastlePart_Keep_Emporium";
  };
  return CastleDetailView;
}(require("gge-module:export_FightDetailView").FightDetailView);
exports.CastleDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
