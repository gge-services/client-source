Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_instanceOf_IWorldMapObject = require("gge-module:export_instanceOf_IWorldMapObject");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __dep_export_OccupiedMarker = require("gge-module:export_OccupiedMarker");
var __s0local0 = function (__s1param0) {
  function WorldmapInfoTooltip() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.InfoTooltip_Building()) || this).infoToolTip.mouseChildren = false;
    __s3local0.infoToolTip.mouseEnabled = false;
    __s3local0._itxtLine1 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line1, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s3local0._itxtLine2 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s3local0._itxtLine3 = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_line3, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s3local0._itxtLine1.autoFitToBounds = true;
    __s3local0._itxtLine2.autoFitToBounds = true;
    __s3local0._itxtLine3.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldmapInfoTooltip, __s1param0);
  WorldmapInfoTooltip.prototype.updateMenuPosition = function () {
    if (!!this.toolTipData && (!__dep_exact_81dacdf05bd32292.instanceOfClass(this.target, "SiegeMapmovement") || !this.target.ringMenuBlocksTooltip())) {
      if (!this.target || __dep_exact_81dacdf05bd32292.instanceOfClass(this.target, "VisualMapElement") && !this.target.disp) {
        this.hide();
      } else if (!(this.target instanceof __dep_export_OccupiedMarker.OccupiedMarker) || this.target.uiDisp && this.target.uiDisp.parent) {
        var __s5local0 = this.toolTipData.toolTipPosition;
        if (this.toolTipData.clampToViewport) {
          var __s5local1 = Math.max(this._itxtLine1.textWidth, this._itxtLine2.textWidth, this._itxtLine3.textWidth) / 2;
          this.disp.x = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s5local0.x, __s5local1, this.disp.stage.stageWidth - __s5local1);
        } else {
          this.disp.x = __s5local0.x;
        }
        this.disp.y = __s5local0.y;
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(WorldmapInfoTooltip.prototype, "worldLayer", {
    get: function () {
      return null;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapInfoTooltip.prototype.initComponent = function () {
    this.updateTooltip();
    if (this.toolTipData.isTimerToolTip) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    } else {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  WorldmapInfoTooltip.prototype.onTimerUpdate = function (__s21param0) {
    this.updateTooltip();
  };
  WorldmapInfoTooltip.prototype.updateTooltip = function () {
    if (__dep_export_instanceOf_IWorldMapObject.instanceOf_IWorldMapObject(this.target) && __dep_exact_81dacdf05bd32292.instanceOfClass(this.target.worldmapObjectVO, "ContainerBuilderMapobjectVO") && this.target.worldmapObjectVO.underConstruction) {
      this.safelyAssignTextContent(this._itxtLine1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("areaNotAvailable_tooltip"));
      this.safelyAssignTextContent(this._itxtLine2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("areaNotAvailable_checkLater_tooltip"));
      this.safelyAssignTextContent(this._itxtLine3, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    } else {
      this.safelyAssignTextContent(this._itxtLine1, this.toolTipData.line1Content);
      this.safelyAssignTextContent(this._itxtLine2, this.toolTipData.line2Content);
      this.safelyAssignTextContent(this._itxtLine3, this.toolTipData.line3Content);
    }
  };
  WorldmapInfoTooltip.prototype.safelyAssignTextContent = function (__s27param0, __s27param1) {
    if (__s27param1) {
      __s27param0.textContentVO = __s27param1;
    } else {
      __s27param0.clearText();
    }
  };
  Object.defineProperty(WorldmapInfoTooltip.prototype, "toolTipData", {
    get: function () {
      return this.target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldmapInfoTooltip.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldmapInfoTooltip.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (__s37param0) {
      if (__dep_export_instanceOf_IWorldMapObject.instanceOf_IWorldMapObject(__s37param0)) {
        this.removeTimer();
        this.targetOwnerInfo = __s37param0.worldmapObjectVO.ownerInfo;
      }
      Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "target").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapInfoTooltip.prototype.onMouseOut = function (__s40param0) {
    this.removeTimer();
    __s1param0.prototype.onMouseOut.call(this, __s40param0);
  };
  WorldmapInfoTooltip.prototype.hide = function () {
    this.removeTimer();
    __s1param0.prototype.hide.call(this);
  };
  WorldmapInfoTooltip.prototype.destroy = function () {
    this.removeTimer();
    __s1param0.prototype.destroy.call(this);
  };
  WorldmapInfoTooltip.prototype.removeTimer = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  WorldmapInfoTooltip.__initialize_static_members = function () {
    WorldmapInfoTooltip.NAME = "WorldmapInfoTooltip";
  };
  return WorldmapInfoTooltip;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.WorldmapInfoTooltip = __s0local0;
__s0local0.__initialize_static_members();
