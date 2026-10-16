Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AIsoFadeEffectVE = require("gge-module:export_AIsoFadeEffectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoCollectableFadeEffectVE(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._collectableItem = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCollectableFadeEffectVE, __s1param0);
  IsoCollectableFadeEffectVE.prototype.createDisp = function () {
    var __s5local0 = new Library.CastleInterfaceElements.MovingInfoIcon_Ressources_Collected();
    if (this.collectableItem.itemType == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
      __s5local0.mc_Icon.gotoAndStop(10);
    } else {
      __s5local0.mc_Icon.gotoAndStop(1);
      this._collectableRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local0).addIconMc(__s5local0.mc_Icon), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(80, 80)));
      this.collectableRenderer.updateWithNewVO(this.collectableItem);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [this.collectableItem.amount]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true)).textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this.dispComponent.addDisp(__s5local0);
  };
  IsoCollectableFadeEffectVE.prototype.destroyDisp = function () {
    if (this.collectableRenderer) {
      this.collectableRenderer.destroy();
      this._collectableRenderer = null;
    }
    __s1param0.prototype.destroyDisp.call(this);
  };
  Object.defineProperty(IsoCollectableFadeEffectVE.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCollectableFadeEffectVE.prototype, "collectableRenderer", {
    get: function () {
      return this._collectableRenderer;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCollectableFadeEffectVE;
}(__dep_export_AIsoFadeEffectVE.AIsoFadeEffectVE);
exports.IsoCollectableFadeEffectVE = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
