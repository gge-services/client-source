Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function IsoGainFadeEffectVE(__s3param0, __s3param1, __s3param2, __s3param3 = null) {
    var __s3local0 = this;
    __s3local0._textReplacements = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._iconClass = __s3param1;
    __s3local0._textReplacements = __s3param2;
    __s3local0._textID = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGainFadeEffectVE, __s1param0);
  IsoGainFadeEffectVE.prototype.createDisp = function () {
    var __s5local0 = new Library.CastleInterfaceElements_Icons.Get_Icon();
    var __s5local1 = new this.iconClass();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s5local1, 80, 80);
    __s5local1.x = __s5local1.y = 0;
    __s5local0.mc_icon.addChild(__s5local1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._textID ? this._textID : __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_NOMINAL_ADD, this._textReplacements), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true)).textAlign = __dep_exact_9e901e8e2483a22f_1.GGSTextAlign.LEFT;
    this.dispComponent.addDisp(__s5local0);
  };
  Object.defineProperty(IsoGainFadeEffectVE.prototype, "textReplacements", {
    get: function () {
      return this._textReplacements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGainFadeEffectVE.prototype, "iconClass", {
    get: function () {
      return this._iconClass;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGainFadeEffectVE;
}(require("gge-module:export_AIsoFadeEffectVE").AIsoFadeEffectVE);
exports.IsoGainFadeEffectVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
