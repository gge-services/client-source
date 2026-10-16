Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClip = require("gge-module:export_CastleMovieClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.ColorFilter;
var __s0local2 = function (__s1param0) {
  function AllianceCrestCreation_Color_ItemVE(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).colorVO = __s3param0;
    __s3local0.disp = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceCrestCreation_Color_Item"))();
    __s3local0.addChild(__s3local0.disp);
    __s3local0.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0, 1.2);
    __s3local0.updateDisp();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestCreation_Color_ItemVE, __s1param0);
  AllianceCrestCreation_Color_ItemVE.prototype.updateDisp = function () {
    var __s5local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s5local0.color = this.colorVO.color;
    this.disp.mc_color.useFilters([new __s0local1(__s5local0.redMultiplier, __s5local0.greenMultiplier, __s5local0.blueMultiplier, __s5local0.alphaMultiplier, __s5local0.redOffset, __s5local0.greenOffset, __s5local0.blueOffset, __s5local0.alphaOffset)]);
  };
  AllianceCrestCreation_Color_ItemVE.prototype.onClick = function (__s7param0) {
    this.onClickCallback(this.colorVO);
  };
  AllianceCrestCreation_Color_ItemVE.prototype.destroy = function () {
    this.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  AllianceCrestCreation_Color_ItemVE.prototype.addOnClick = function (__s11param0) {
    this.onClickCallback = __s11param0;
  };
  return AllianceCrestCreation_Color_ItemVE;
}(__dep_export_CastleMovieClip.CastleMovieClip);
exports.AllianceCrestCreation_Color_ItemVE = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "MovieClip");
