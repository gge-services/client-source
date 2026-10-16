Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAllianceHelpFeedbackComponent() {
    var __s3local0 = this;
    __s3local0.currentColor = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.AllianceRequestFeedbackComponent()) || this).currentColor = CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR;
    __s3local0.dispBounds = __s3local0.disp.getBounds(null);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceHelpFeedbackComponent, __s1param0);
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "customProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "component", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceHelpFeedbackComponent.prototype.show = function () {
    var __s11local0;
    __s1param0.prototype.show.call(this);
    if (__s11local0 = this.createTextContent()) {
      this.showText(__s11local0);
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.showText = function (__s14param0) {
    __s14param0.color = this.currentColor;
    __s14param0.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.CENTER;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 1, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeIn)
    });
    this.updatePosition();
  };
  CastleAllianceHelpFeedbackComponent.prototype.createTextContent = function () {
    this.currentColor = CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR;
    if (this.customProperties && this.customProperties.requestVO && this.customProperties.requestVO.requestTypeId == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD) {
      return this.createConstructionTextContent();
    } else {
      return this.createRepairTextContent();
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.createConstructionTextContent = function () {
    if (this.customProperties && this.customProperties.requestVO) {
      if (!(this.customProperties.requestVO.progress + 1 >= this.customProperties.requestVO.neededProgress)) {
        return this.getTextField("dialog_allianceHelp_helpConfirmation_construction");
      }
      __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.finishedOrFreeSkipText));
    }
    return null;
  };
  CastleAllianceHelpFeedbackComponent.prototype.finishedOrFreeSkipText = function (__s24param0 = null) {
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.finishedOrFreeSkipText));
    var __s24local0 = null;
    var __s24local1 = __dep_exact_f855840627e6e145.int(this.customProperties.requestVO.remainingTime * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC - __dep_export_CastleModel.CastleModel.allianceHelpRequestData.decreaseBuildingTimeAbsolute);
    var __s24local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getSkipCostsForTimeLeft(__s24local1, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
    if (__s24local1 > 0 && __s24local2 == 0) {
      this.currentColor = CastleAllianceHelpFeedbackComponent.FREE_SKIP_COLOR;
      __s24local0 = "dialog_allianceHelp_helpConfirmation_constructionBoniFreeSkip";
    } else {
      __s24local0 = "dialog_allianceHelp_helpConfirmation_constructionBoniGained";
    }
    this.showText(this.getTextField(__s24local0));
  };
  CastleAllianceHelpFeedbackComponent.prototype.getTextField = function (__s28param0) {
    var __s28local0 = [];
    var __s28local1 = null;
    var __s28local2 = null;
    var __s28local3 = null;
    if (this.customProperties && this.customProperties.requestVO) {
      __s28local1 = this.customProperties.name;
      var __s28local4;
      var __s28local5 = __dep_exact_81dacdf05bd32292_1.castAs(this.customProperties.requestVO.optionalParams, "AllianceHelpRequestConstructionParamsVO");
      if (__s28local5) {
        __s28local4 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s28local5.areaID, __s28local5.kingdomID);
      }
      if (__s28local4) {
        __s28local3 = __s28local4.areaNameString;
      }
      var __s28local6 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.customProperties.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
      if (__s28local6) {
        __s28local2 = __s28local6.getNameString();
      }
    }
    if (__s28param0 && __s28local1 && __s28local2 && __s28local3) {
      __s28local0.push(__s28local3);
      __s28local0.push(__s28local1);
      __s28local0.push(__s28local2);
    } else {
      __s28param0 = "dialog_allianceHelp_requestButton_requestCompleted";
    }
    return this.textFieldManager.registerTextField(this.component.txt_feedback, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s28param0, __s28local0));
  };
  CastleAllianceHelpFeedbackComponent.prototype.createRepairTextContent = function () {
    if (!!this.customProperties && !!this.customProperties.requestVO && this.customProperties.requestVO.progress + 1 >= this.customProperties.requestVO.neededProgress && this.customProperties.requestVO.requestTypeId == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR) {
      var __s36local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.customProperties.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
      if (__s36local0) {
        return this.textFieldManager.registerTextField(this.component.txt_feedback, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_repairHelpReceived", [__s36local0.getNameString()]));
      }
    }
    return this.textFieldManager.registerTextField(this.component.txt_feedback, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_helpConfirmation", [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getTypeText()), new __dep_exact_92d05af59ee2ff30_1.TextVO(this.customProperties ? this.customProperties.name : "")]));
  };
  CastleAllianceHelpFeedbackComponent.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s40local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        __s40local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s40local0) {
        __s40local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * __s40local0 - this.dispBounds.width * __s40local0 * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.top * __s40local0 - this.dispBounds.height * __s40local0 * 0.5 + 85;
      this.disp.scaleX = this.disp.scaleY = __s40local0;
      this.disp.x = __dep_exact_f855840627e6e145.int(this.disp.x);
      this.disp.y = __dep_exact_f855840627e6e145.int(this.disp.y);
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.onCompleteFadeIn = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      delay: 2,
      onComplete: this.bindFunction(this.onCompleteFadeOut)
    });
  };
  CastleAllianceHelpFeedbackComponent.prototype.onCompleteFadeOut = function () {
    this.hide();
  };
  CastleAllianceHelpFeedbackComponent.prototype.getTypeText = function () {
    switch (this.customProperties.requestVO.requestTypeId) {
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return "panel_action_recruit";
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        return "dialog_allianceHelp_healUnits_short";
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR:
        return "dialog_allianceHelp_repairBuildings";
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD:
        return "ringmenu_allianceHelp_reduceConstructionTime";
    }
    return "";
  };
  CastleAllianceHelpFeedbackComponent.__initialize_static_members = function () {
    CastleAllianceHelpFeedbackComponent.NAME = "CastleAllianceHelpFeedbackComponent";
    CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR = 2403805;
    CastleAllianceHelpFeedbackComponent.FREE_SKIP_COLOR = 15566400;
  };
  return CastleAllianceHelpFeedbackComponent;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.CastleAllianceHelpFeedbackComponent = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__s0local0.__initialize_static_members();
