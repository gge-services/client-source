Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAttackHornTimeListComponent = require("gge-module:export_CastleAttackHornTimeListComponent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovementOverviewDialogProperties = require("gge-module:export_CastleMovementOverviewDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconAttackWarnings() {
    var __s3local0 = this;
    __s3local0._infront = false;
    __s3local0._iconLoaded = false;
    __s3local0.hornSetup = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, StatusIconAttackWarnings.ASSET_NAME, __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_HIGH, true) || this).allowCaching = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAttackWarnings, __s1param0);
  StatusIconAttackWarnings.prototype.toggleInFront = function () {
    return !!(this._infront = !this._infront);
  };
  StatusIconAttackWarnings.prototype.showLoaded = function (__s7param0 = null) {
    var __s7local0 = this.calculateHornSetup();
    if (__s7local0 != this.hornSetup) {
      this.hornSetup = __s7local0;
      this.destroyComponents();
      this.loadIcon();
    } else {
      this.updateIcon();
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  StatusIconAttackWarnings.prototype.updateIcon = function () {
    if (this._iconLoaded) {
      this.prepareLoadedIcon(this.hornDisp.mc_icon);
      this.updateCounters();
      this.updateTooltip();
      if (this._attackHornTimeListComponent) {
        this._attackHornTimeListComponent.update();
      } else {
        this._attackHornTimeListComponent = new __dep_export_CastleAttackHornTimeListComponent.CastleAttackHornTimeListComponent(this.hornDisp.mc_timeComponent, StatusIconAttackWarnings.PLAYER, StatusIconAttackWarnings.ALLIANCE, StatusIconAttackWarnings.ALLIANCECITY);
        this._attackHornTimeListComponent.show();
      }
    }
  };
  StatusIconAttackWarnings.prototype.calculateHornSetup = function () {
    var __s16local0 = "";
    __s16local0 += __dep_export_CastleModel.CastleModel.armyData.getRemainingAttackTimeInMilliseconds() > 0 || __dep_export_CastleModel.CastleModel.armyData.attacksOnPlayerCount > 0 ? StatusIconAttackWarnings.PLAYER : "";
    __s16local0 += __dep_export_CastleModel.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds() > 0 || __dep_export_CastleModel.CastleModel.armyData.attacksOnAlliesCount > 0 ? StatusIconAttackWarnings.ALLIANCE : "";
    return __s16local0 += __dep_export_CastleModel.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds() > 0 || __dep_export_CastleModel.CastleModel.armyData.attacksOnAllianceCityCount > 0 ? StatusIconAttackWarnings.ALLIANCECITY : "";
  };
  StatusIconAttackWarnings.prototype.loadIcon = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.iconDisp.mc_hornHolder);
    this._iconLoaded = false;
    var __s18local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(StatusIconAttackWarnings.ASSET_NAME + "_" + this.hornSetup, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(StatusIconAttackWarnings.ASSET_NAME), null, 0, false);
    this.iconDisp.mc_hornHolder.addChild(__s18local0);
    __s18local0.doWhenLoaded(this.bindFunction(this.onHornClipLoaded));
  };
  StatusIconAttackWarnings.prototype.onHornClipLoaded = function (__s20param0 = null) {
    this.hornDisp = __s20param0.currentshownDisplayObject;
    this._iconLoaded = true;
    this.showLoaded();
  };
  StatusIconAttackWarnings.prototype.updateCounters = function () {
    var __s22local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.armyData.attacksOnPlayerCount);
    var __s22local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.armyData.attacksOnAlliesCount);
    var __s22local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.armyData.attacksOnAllianceCityCount);
    var __s22local3 = this.hornDisp.mc_icon;
    if (__s22local0 > 0) {
      __s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.PLAYER].visible = __s22local0 > 1;
      this.textFieldManager.registerTextField(__s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.PLAYER].txt_count, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s22local0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    if (__s22local1 > 0) {
      __s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCE].visible = __s22local1 > 1;
      this.textFieldManager.registerTextField(__s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCE].txt_count, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s22local1), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    if (__s22local2 > 0) {
      __s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCECITY].visible = __s22local2 > 1;
      this.textFieldManager.registerTextField(__s22local3[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCECITY].txt_count, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s22local2), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
  };
  StatusIconAttackWarnings.prototype.updateTooltip = function () {
    var __s27local0 = "";
    var __s27local1 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAttackTimeInMilliseconds();
    var __s27local2 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds();
    var __s27local3 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds();
    var __s27local4 = this.hornDisp.mc_icon;
    if (__s27local1 > 0) {
      __s27local0 += (__s27local0 ? "\n" : "") + __dep_exact_92d05af59ee2ff30.Localize.text("attackHorn_incomingAttack");
    }
    if (__s27local2 > 0) {
      __s27local0 += (__s27local0 ? "\n" : "") + __dep_exact_92d05af59ee2ff30.Localize.text("attackHorn_incomingAttack_alliance");
    }
    if (__s27local3 > 0) {
      __s27local0 += (__s27local0 ? "\n" : "") + __dep_exact_92d05af59ee2ff30.Localize.text("attackHorn_incomingAttack_allianceCity");
    }
    __s27local4.toolTipText = __s27local0;
  };
  StatusIconAttackWarnings.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.armyData.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningsUpdated));
  };
  StatusIconAttackWarnings.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.armyData.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningsUpdated));
  };
  StatusIconAttackWarnings.prototype.addEventListenerForShowTime = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAttackWarnings.prototype.removeEventListenerForShowTime = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAttackWarnings.prototype.onTimerUpdate = function (__s40param0) {
    this.updateTooltip();
  };
  StatusIconAttackWarnings.prototype.onAttackWarningsUpdated = function (__s42param0) {
    if (this.calculateHornSetup() != "") {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAttackWarnings.prototype.setVisibilityLoaded = function () {
    if (this.calculateHornSetup() != "") {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAttackWarnings.prototype.onClick = function () {
    __s1param0.prototype.onClick.call(this);
    if (this.hornSetup != "") {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMovementOverviewDialog.CastleMovementOverviewDialog, new __dep_export_CastleMovementOverviewDialogProperties.CastleMovementOverviewDialogProperties());
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconAttackWarnings.prototype, "infront", {
    get: function () {
      return this._infront;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAttackWarnings.prototype.hideLoaded = function (__s56param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s56param0);
    this.destroyComponents();
  };
  StatusIconAttackWarnings.prototype.disposeLoaded = function () {
    __s1param0.prototype.disposeLoaded.call(this);
    this.destroyComponents();
  };
  StatusIconAttackWarnings.prototype.destroyComponents = function () {
    if (this._attackHornTimeListComponent) {
      this._attackHornTimeListComponent.dispose();
      this._attackHornTimeListComponent = null;
    }
  };
  StatusIconAttackWarnings.__initialize_static_members = function () {
    StatusIconAttackWarnings.ASSET_NAME = "Btn_AttackWarnings";
    StatusIconAttackWarnings.COUNTER_PREFIX = "counter_";
    StatusIconAttackWarnings.PLAYER = "P";
    StatusIconAttackWarnings.ALLIANCE = "A";
    StatusIconAttackWarnings.ALLIANCECITY = "C";
  };
  return StatusIconAttackWarnings;
}(require("gge-module:export_ACustomInteractiveCastleStatusIcon").ACustomInteractiveCastleStatusIcon);
exports.StatusIconAttackWarnings = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementOverviewDialog = require("gge-module:export_CastleMovementOverviewDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
__s0local0.__initialize_static_members();
