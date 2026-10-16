Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetLaboratoryProgressVO = require("gge-module:export_C2SGetLaboratoryProgressVO");
var __dep_export_CastleLaboratoryProgressEvent = require("gge-module:export_CastleLaboratoryProgressEvent");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_export_LaboratoryBonusComponent = require("gge-module:export_LaboratoryBonusComponent");
var __s0local0 = function (__s1param0) {
  function CastleUpgradeLaboratoryDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._worldMapObjectVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUpgradeLaboratoryDialogProperties, __s1param0);
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "worldMapObjectVO", {
    get: function () {
      return this._worldMapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "bonusComponentClass", {
    get: function () {
      return __dep_export_LaboratoryBonusComponent.LaboratoryBonusComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "updateEventType", {
    get: function () {
      return __dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_UPDATED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "resetEventType", {
    get: function () {
      return __dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_RESET_WARNING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "progressEventType", {
    get: function () {
      return __dep_export_CastleLaboratoryProgressEvent.CastleLaboratoryProgressEvent.NEW_PROGRESS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "progressCommandVO", {
    get: function () {
      return new __dep_export_C2SGetLaboratoryProgressVO.C2SGetLaboratoryProgressVO(this.worldMapObjectVO.objectId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textErrorLostLandmark", {
    get: function () {
      return "error_laboratory_lostLaboratory";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textTitle", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textUpgradeMax", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendMax", {
    get: function () {
      return "dialog_laboratory_sendResources_maximum_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textUpgrade", {
    get: function () {
      return "dialog_laboratory_upgradeLaboratory_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSend", {
    get: function () {
      return "dialog_laboratory_sendResources_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendMaxTooltip", {
    get: function () {
      return "dialog_laboratory_sendResources_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendTooltip", {
    get: function () {
      return "dialog_laboratory_sendResources_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textSendWoodStoneTooltip", {
    get: function () {
      return "dialog_laboratory_sendWoodStone_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textHelp", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("help_upgradeLaboratory");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textProgressTooltip", {
    get: function () {
      return "dialog_laboratory_progressbar_requirements_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUpgradeLaboratoryDialogProperties.prototype, "textProgressTooltipMax", {
    get: function () {
      return "dialog_laboratory_progressbar_maximum_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleUpgradeLaboratoryDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleUpgradeLaboratoryDialogProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradeLandmarkDialogProperties");
