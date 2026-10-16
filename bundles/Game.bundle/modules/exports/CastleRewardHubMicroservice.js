Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_BasicMicroservice = require("gge-module:export_BasicMicroservice");
var __dep_exact_951b78d9b55b391b = require("gge-module:exact_951b78d9b55b391b");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_RewardHubParser = require("gge-module:export_RewardHubParser");
var __dep_export_ClientConstABTests = require("gge-module:export_ClientConstABTests");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_RewardHubErrorsItemVO = require("gge-module:export_RewardHubErrorsItemVO");
var __dep_export_RewardHubErrorsDialog = require("gge-module:export_RewardHubErrorsDialog");
var __dep_export_RewardHubErrorsDialogProperties = require("gge-module:export_RewardHubErrorsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleRewardHubMicroservice() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRewardHubMicroservice, __s1param0);
  Object.defineProperty(CastleRewardHubMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardHubMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.getRewardsSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.onRewardsUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.pickRewardsSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.upgradeRewardsSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.onUpgradeRewardsSuccessSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this._rewardHubParser = new __dep_export_RewardHubParser.RewardHubParser();
      this.getRewardsSignal.add(this.bindFunction(this.getPendingRewards));
      this.pickRewardsSignal.add(this.bindFunction(this.pickUpRewards));
      this.upgradeRewardsSignal.add(this.bindFunction(this.upgradeRewards));
      __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleRewardHubMicroservice.prototype.reset = function () {
    this.getRewardsSignal.remove(this.bindFunction(this.getPendingRewards));
    this.pickRewardsSignal.remove(this.bindFunction(this.pickUpRewards));
    this.upgradeRewardsSignal.remove(this.bindFunction(this.upgradeRewards));
    __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    this._rewardHubParser = null;
  };
  CastleRewardHubMicroservice.prototype.onForceRequest = function (__s12param0) {
    if (__s12param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET) {
      this.getPendingRewards();
    } else if (__s12param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_POST) {
      if (this._currentRewardHubIds) {
        this.pickUpRewards(this._currentRewardHubIds);
        this._currentRewardHubIds = null;
      } else if (this._upgradeRewardsData) {
        this.upgradeRewards(this._upgradeRewardsData);
        this._upgradeRewardsData = null;
      }
    }
  };
  CastleRewardHubMicroservice.prototype.upgradeRewards = function (__s18param0) {
    this._upgradeRewardsData = __s18param0;
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_POST, false)) {
      var __s18local0 = {
        options: {
          displayedTotalCostC2: __s18param0.price,
          hubRewardIds: __s18param0.rewardIdsToUnlock,
          "cc2t=": -1
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.UNLOCK_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(__dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_POST, false);
      this.requestPOST(__s18local0).then(this.bindFunction(this.onUpgradeRewardsSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.onUpgradeRewardsSuccess = function (__s21param0) {
    if (__s21param0) {
      switch (__s21param0.data.ERROR) {
        case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
          this._rewardHubParser.updateUnlockedRewards(this._upgradeRewardsData.rewardIdsToUnlock);
          this.onUpgradeRewardsSuccessSignal.dispatch();
          this._upgradeRewardsData = null;
          break;
        case __dep_exact_26a421b704832cff.ERROR.ALREADY_UNLOCKED:
        case __dep_exact_26a421b704832cff.ERROR.INVALID_PARAMETER_VALUE:
        case __dep_exact_26a421b704832cff.ERROR.INVALID_PRICE:
          this.showErrorDialog(__s21param0);
      }
    }
  };
  CastleRewardHubMicroservice.prototype.pickUpRewards = function (__s25param0) {
    this._currentRewardHubIds = __s25param0;
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_POST, false)) {
      var __s25local0 = {
        options: {
          hubRewardIds: __s25param0 || []
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.COLLECT_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(__dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_POST, false);
      this.requestPOST(__s25local0).then(this.bindFunction(this.requestPickRewardsSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.getPendingRewards = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET, false)) {
      var __s28local0 = {
        options: {
          method: __dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiTokenV2
          },
          body: ""
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.PENDING_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(__dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(__s28local0).then(this.bindFunction(this.onPendingRewardsGetSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.onPendingRewardsGetSuccess = function (__s31param0) {
    if (__s31param0 && __s31param0.data) {
      this._rewardHubParser.parse(__s31param0.data.pendingRewards);
      this.onRewardsUpdatedSignal.dispatch();
    }
  };
  CastleRewardHubMicroservice.prototype.requestPickRewardsSuccess = function (__s34param0) {
    if (__s34param0) {
      switch (__s34param0.data.ERROR) {
        case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
          if (__s34param0.data.hubRewardIdsGranted && __s34param0.data.hubRewardIdsGranted.length > 0) {
            __dep_export_CastleModel.CastleModel.rewardHubData.updateCurrentRewardHubIds(__s34param0.data.hubRewardIdsGranted);
            __dep_export_CastleModel.CastleModel.rewardHubData.setAmountOfPendingRewards(__dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length, false);
            this.onRewardsUpdatedSignal.dispatch();
          }
          this.checkShowRewardHubErrorsDialog(__s34param0.data.hubRewardIdsNotGranted);
          break;
        case __dep_exact_26a421b704832cff.ERROR.ALREADY_COLLECTED:
        case __dep_exact_26a421b704832cff.ERROR.GENERAL_ERROR:
        case __dep_exact_26a421b704832cff.ERROR.INVALID_PARAMETER_VALUE:
        case __dep_exact_26a421b704832cff.ERROR.MISSING_PARAMETER:
        case __dep_exact_26a421b704832cff.ERROR.INVALID_PLAYER_ID:
        case __dep_exact_26a421b704832cff.ERROR.REWARD_ID_NOT_FOUND:
          this.showErrorDialog(__s34param0);
      }
    }
  };
  CastleRewardHubMicroservice.prototype.checkShowRewardHubErrorsDialog = function (__s39param0) {
    if (__s39param0 && __s39param0.length) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_RewardHubErrorsDialog.RewardHubErrorsDialog, new __dep_export_RewardHubErrorsDialogProperties.RewardHubErrorsDialogProperties(this.getAdditionalErrors(__s39param0)));
    }
  };
  CastleRewardHubMicroservice.prototype.showErrorDialog = function (__s42param0) {
    var __s42local0 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_bug");
    var __s42local1 = __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s42param0.data.ERROR);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s42local0, __s42local1));
  };
  CastleRewardHubMicroservice.prototype.requestGET = function (__s44param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.get(__s44param0.endPoint, __s44param0.options);
  };
  CastleRewardHubMicroservice.prototype.requestPOST = function (__s46param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.post(__s46param0.endPoint, __s46param0.options, {
      headers: __s46param0.headers
    });
  };
  CastleRewardHubMicroservice.prototype.getDataEndpoint = function (__s48param0, __s48param1) {
    if (__dep_export_ClientConstABTests.ClientConstABTests.isOnQAServerInstance) {
      return CastleRewardHubMicroservice.TEST_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + __s48param0 + "/" + __s48param1;
    } else if (__dep_export_ClientConstABTests.ClientConstABTests.isOnDevServerInstance) {
      return CastleRewardHubMicroservice.DEV_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + __s48param0 + "/" + __s48param1;
    } else {
      return CastleRewardHubMicroservice.LIVE_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + __s48param0 + "/" + __s48param1;
    }
  };
  CastleRewardHubMicroservice.prototype.pingParams = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.gameId + "-" + __dep_export_CastleModel.CastleModel.userData.zoneId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  CastleRewardHubMicroservice.prototype.getAdditionalErrors = function (__s55param0) {
    var __s55local0;
    var __s55local1 = "";
    var __s55local2 = [];
    var __s55local3 = [];
    for (var __s55local4 = 0; __s55local4 < __s55param0.length; __s55local4++) {
      if (__s55local3.indexOf(__s55param0[__s55local4].ERROR) == -1) {
        (__s55local0 = new __dep_export_RewardHubErrorsItemVO.RewardHubErrorsItemVO()).rewardHubItemId = __s55param0[__s55local4].hubRewardID;
        __s55local0.infoTextId = "errorCode_" + __s55param0[__s55local4].ERROR;
        __s55local2.push(__s55local0);
        __s55local1 += "rewardId: " + __s55param0[__s55local4].hubRewardID + " " + __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s55param0[__s55local4].ERROR) + "\n";
        __s55local3.push(__s55param0[__s55local4].ERROR);
      }
    }
    if (__s55local1 != "") {
      console.warn("The following rewards were not granted!\n" + __s55local1);
    }
    return __s55local2;
  };
  CastleRewardHubMicroservice.BASE_REWARDS_KEY = "rewards";
  CastleRewardHubMicroservice.PENDING_REWARDS_KEY = "pending";
  CastleRewardHubMicroservice.COLLECT_REWARDS_KEY = "collect";
  CastleRewardHubMicroservice.UNLOCK_REWARDS_KEY = "unlock";
  CastleRewardHubMicroservice.DEV_DATA_ENDPOINT = "https://reward-hub-dev.public.ggs-ep.com/api";
  CastleRewardHubMicroservice.TEST_DATA_ENDPOINT = "https://reward-hub-test.public.ggs-ep.com/api";
  CastleRewardHubMicroservice.LIVE_DATA_ENDPOINT = "https://reward-hub.public.ggs-ep.com/api";
  return CastleRewardHubMicroservice;
}(__dep_export_BasicMicroservice.BasicMicroservice);
exports.CastleRewardHubMicroservice = __s0local0;
