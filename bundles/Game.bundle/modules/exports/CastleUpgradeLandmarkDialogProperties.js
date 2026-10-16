Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetMonumentProgress = require("gge-module:export_C2SGetMonumentProgress");
var __dep_export_CastleMonumentProgressEvent = require("gge-module:export_CastleMonumentProgressEvent");
var __dep_export_MonumentEvent = require("gge-module:export_MonumentEvent");
var __dep_export_MonumentBonusComponent = require("gge-module:export_MonumentBonusComponent");
var __s0local0 = function (__s1param0) {
  function CastleUpgradeLandmarkDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._worldMapObjectVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUpgradeLandmarkDialogProperties, __s1param0);
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "worldMapObjectVO", {
    get: function () {
      return this._worldMapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "bonusComponentClass", {
    get: function () {
      return __dep_export_MonumentBonusComponent.MonumentBonusComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "updateEventType", {
    get: function () {
      return __dep_export_MonumentEvent.MonumentEvent.MONUMENT_UPDATED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "resetEventType", {
    get: function () {
      return __dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "progressEventType", {
    get: function () {
      return __dep_export_CastleMonumentProgressEvent.CastleMonumentProgressEvent.NEW_PROGRESS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "progressCommandVO", {
    get: function () {
      return new __dep_export_C2SGetMonumentProgress.C2SGetMonumentProgress(this.worldMapObjectVO.objectId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textErrorLostLandmark", {
    get: function () {
      return "error_monument_lostMonument";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textTitle", {
    get: function () {
      return "dialog_monument_upgradeMonument_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textUpgradeMax", {
    get: function () {
      return "dialog_monument_upgradeMonument_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendMax", {
    get: function () {
      return "dialog_monument_sendResources_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textUpgrade", {
    get: function () {
      return "dialog_monument_upgradeMonument_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSend", {
    get: function () {
      return "dialog_monument_sendResources_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendMaxTooltip", {
    get: function () {
      return "dialog_monument_sendResources_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendTooltip", {
    get: function () {
      return "dialog_monument_sendResources_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textSendWoodStoneTooltip", {
    get: function () {
      return "dialog_monument_sendWoodStone_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textHelp", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("help_upgradeMonument");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textProgressTooltip", {
    get: function () {
      return "dialog_monument_progressbar_requirements_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLandmarkDialogProperties.prototype, "textProgressTooltipMax", {
    get: function () {
      return "dialog_monument_progressbar_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleUpgradeLandmarkDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleUpgradeLandmarkDialogProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradeLandmarkDialogProperties");
