Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_InteractiveTooltip = require("gge-module:export_InteractiveTooltip");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function GachaMilestoneTooltip() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = new __s0local0();
    __s3local0._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(GachaMilestoneTooltip.ASSET_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaMilestoneTooltip.ASSET_NAME), null, 0, false);
    __s3local0._disp.addChild(__s3local0._clip);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaMilestoneTooltip, __s1param0);
  Object.defineProperty(GachaMilestoneTooltip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaMilestoneTooltip.prototype, "tooltipDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltip.prototype.show = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    var __s9local0 = this;
    if (__s9param3 === undefined) {
      __s9param3 = GachaMilestoneTooltip.TARGET_DOWN;
    }
    if (this._clip.isLoaded) {
      this.destroyCollectableRenderList();
      this.rewardComponent ||= new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(this.tooltipDisp, new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.tooltipDisp).addMouseWheelElements([this.tooltipDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(), 3, 3);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.tooltipDisp.txt_0, new __dep_exact_92d05af59ee2ff30.TextVO(__s9param1[0] ? __s9param1[0] : ""));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.tooltipDisp.txt_1, new __dep_exact_92d05af59ee2ff30.TextVO(__s9param1[1] ? __s9param1[1] : ""));
      this.rewardComponent.show(__s9param2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local1(65, 63)));
      this.updatePosition(__s9param0, __s9param3);
      __s1param0.prototype.onShow.call(this);
    } else {
      this._clip.doWhenLoaded(function () {
        __s9local0.show(__s9param0, __s9param1, __s9param2, __s9param3);
      });
    }
  };
  GachaMilestoneTooltip.prototype.updatePosition = function (__s16param0, __s16param1) {
    this.tooltipDisp.arrow_up.visible = __s16param1 == GachaMilestoneTooltip.TARGET_UP;
    this.tooltipDisp.arrow_down.visible = __s16param1 == GachaMilestoneTooltip.TARGET_DOWN;
    this.tooltipDisp.arrow_left.visible = __s16param1 == GachaMilestoneTooltip.TARGET_LEFT;
    this.tooltipDisp.arrow_right.visible = __s16param1 == GachaMilestoneTooltip.TARGET_RIGHT;
    var __s16local0 = __s16param0.localToGlobal(new __s0local1(0, 0));
    switch (__s16param1) {
      case GachaMilestoneTooltip.TARGET_UP:
        this._disp.x = __s16local0.x;
        this._disp.y = __s16local0.y - __s16param0.height / 2;
        this.tooltipDisp.x = 0;
        this.tooltipDisp.y = this.tooltipDisp.height;
        break;
      case GachaMilestoneTooltip.TARGET_DOWN:
        this._disp.x = __s16local0.x;
        this._disp.y = __s16local0.y + __s16param0.height / 2;
        this.tooltipDisp.x = 0;
        this.tooltipDisp.y = 0;
        break;
      case GachaMilestoneTooltip.TARGET_LEFT:
        this._disp.x = __s16local0.x + __s16param0.width / 2;
        this._disp.y = __s16local0.y;
        this.tooltipDisp.x = this.tooltipDisp.width / 2;
        this.tooltipDisp.y = this.tooltipDisp.height / 2;
        break;
      case GachaMilestoneTooltip.TARGET_RIGHT:
        this._disp.x = __s16local0.x - __s16param0.width / 2;
        this._disp.y = __s16local0.y;
        this.tooltipDisp.x = -this.tooltipDisp.width / 2;
        this.tooltipDisp.y = this.tooltipDisp.height / 2;
    }
  };
  GachaMilestoneTooltip.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.rewardComponent) {
      this.rewardComponent.hide();
    }
  };
  GachaMilestoneTooltip.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.rewardComponent.destroy();
    this.rewardComponent = null;
  };
  Object.defineProperty(GachaMilestoneTooltip.prototype, "fadeDuration", {
    get: function () {
      return GachaMilestoneTooltip.FADE_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltip.ASSET_NAME = "GachaMilestoneTooltipExt";
  GachaMilestoneTooltip.FADE_DURATION = 0.1;
  GachaMilestoneTooltip.TARGET_UP = "up";
  GachaMilestoneTooltip.TARGET_DOWN = "down";
  GachaMilestoneTooltip.TARGET_LEFT = "left";
  GachaMilestoneTooltip.TARGET_RIGHT = "right";
  return GachaMilestoneTooltip;
}(__dep_export_InteractiveTooltip.InteractiveTooltip);
exports.GachaMilestoneTooltip = __s0local2;
