Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_C2SGetGeneralsInfoVO = require("gge-module:export_C2SGetGeneralsInfoVO");
var __dep_export_C2SBugReportVO = require("gge-module:export_C2SBugReportVO");
var __dep_export_C2STempServerSelectCastleVO = require("gge-module:export_C2STempServerSelectCastleVO");
var __dep_export_C2SShowWelcomeDataVO = require("gge-module:export_C2SShowWelcomeDataVO");
var __dep_export_FarhatBuildingSpawnController = require("gge-module:export_FarhatBuildingSpawnController");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_FillerSurroundingEditor = require("gge-module:export_FillerSurroundingEditor");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleCheatData = require("gge-module:export_CastleCheatData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_GeneralVO = require("gge-module:export_GeneralVO");
var __dep_export_GeneralXmlVO = require("gge-module:export_GeneralXmlVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_MessageUserSurveyVO = require("gge-module:export_MessageUserSurveyVO");
var __dep_export_QA_TextIDCheckerDialog = require("gge-module:export_QA_TextIDCheckerDialog");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_BasicUnitVO = require("gge-module:export_BasicUnitVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleWelcomeBetaTestDialog = require("gge-module:export_CastleWelcomeBetaTestDialog");
var __dep_export_CastleWelcomeBetaTestDialogProperties = require("gge-module:export_CastleWelcomeBetaTestDialogProperties");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalOKStandardDialog = require("gge-module:export_CastleExternalOKStandardDialog");
var __dep_export_CastleExternalStandardOKDialogProperties = require("gge-module:export_CastleExternalStandardOKDialogProperties");
var __dep_export_CastleNewsHubOverlay = require("gge-module:export_CastleNewsHubOverlay");
var __dep_export_CastleServerMessageBigDialog = require("gge-module:export_CastleServerMessageBigDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_ConstructionItemsActionProperties = require("gge-module:export_ConstructionItemsActionProperties");
var __dep_export_CastleConstructionItemsDisassembledDialog = require("gge-module:export_CastleConstructionItemsDisassembledDialog");
var __dep_export_CastleConstructionItemsDisassembleDialog = require("gge-module:export_CastleConstructionItemsDisassembleDialog");
var __dep_export_ConstructionItemExpiredDialog = require("gge-module:export_ConstructionItemExpiredDialog");
var __dep_export_MaterialBagOpenedDialog = require("gge-module:export_MaterialBagOpenedDialog");
var __dep_export_MaterialBagOpenedDialogProperties = require("gge-module:export_MaterialBagOpenedDialogProperties");
var __dep_export_GachaOfferingRewardsDialog = require("gge-module:export_GachaOfferingRewardsDialog");
var __dep_export_GachaOfferingRewardsDialogProperies = require("gge-module:export_GachaOfferingRewardsDialogProperies");
var __dep_export_GachaRankingRewardsDialog = require("gge-module:export_GachaRankingRewardsDialog");
var __dep_export_GachaRankingRewardsDialogProperties = require("gge-module:export_GachaRankingRewardsDialogProperties");
var __dep_export_DuplicatedEmailPopupDialog = require("gge-module:export_DuplicatedEmailPopupDialog");
var __dep_export_ModernWelcomebackDialogBig = require("gge-module:export_ModernWelcomebackDialogBig");
var __dep_export_ModernWelcomebackDialogProperties = require("gge-module:export_ModernWelcomebackDialogProperties");
var __dep_export_ModernWelcomebackDialogSmall = require("gge-module:export_ModernWelcomebackDialogSmall");
var __dep_export_GeneralsAbilityDialog = require("gge-module:export_GeneralsAbilityDialog");
var __dep_export_GeneralsAbilityDialogProperties = require("gge-module:export_GeneralsAbilityDialogProperties");
var __dep_export_GeneralsLevelUPDialog = require("gge-module:export_GeneralsLevelUPDialog");
var __dep_export_GeneralsLevelUPDialogProperties = require("gge-module:export_GeneralsLevelUPDialogProperties");
var __dep_export_PrivateResourceVillageShopDialog = require("gge-module:export_PrivateResourceVillageShopDialog");
var __dep_export_CastleLocaToolDialog = require("gge-module:export_CastleLocaToolDialog");
var __dep_export_CastleLocaToolProperties = require("gge-module:export_CastleLocaToolProperties");
var __dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog = require("gge-module:export_CastleChangePasswordForSocialMigrationConfirmedDialog");
var __dep_export_CastleChangePasswordForSocialMigrationDialog = require("gge-module:export_CastleChangePasswordForSocialMigrationDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleRefineryToolsmithDialog = require("gge-module:export_CastleRefineryToolsmithDialog");
var __dep_export_CastleRefineryToolsmithDialogProperties = require("gge-module:export_CastleRefineryToolsmithDialogProperties");
var __dep_export_SeasonLeagueBuyPassesDialog = require("gge-module:export_SeasonLeagueBuyPassesDialog");
var __dep_export_SeasonLeagueEndDialog = require("gge-module:export_SeasonLeagueEndDialog");
var __dep_export_SeasonLeagueEndDialogProperties = require("gge-module:export_SeasonLeagueEndDialogProperties");
var __dep_export_SeasonLeaguePromotionDialog = require("gge-module:export_SeasonLeaguePromotionDialog");
var __dep_export_SeasonLeaguePromotionDialogProperties = require("gge-module:export_SeasonLeaguePromotionDialogProperties");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_RewardHubErrorsDialog = require("gge-module:export_RewardHubErrorsDialog");
var __dep_export_RewardHubErrorsDialogProperties = require("gge-module:export_RewardHubErrorsDialogProperties");
var __dep_export_RewardHubErrorsItemVO = require("gge-module:export_RewardHubErrorsItemVO");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __dep_export_CastleShoppingCartPrimeDayConfirmDialog = require("gge-module:export_CastleShoppingCartPrimeDayConfirmDialog");
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
var __dep_export_CastleSurveyMessageDialog = require("gge-module:export_CastleSurveyMessageDialog");
var __dep_export_CastleAllianceBattleGroundEventEndDialogProperties = require("gge-module:export_CastleAllianceBattleGroundEventEndDialogProperties");
var __dep_export_CastleTempServerEventEndDialog = require("gge-module:export_CastleTempServerEventEndDialog");
var __dep_export_CastleFacebookTestDialog = require("gge-module:export_CastleFacebookTestDialog");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleCheatPanel = require("gge-module:export_CastleCheatPanel");
var __dep_export_CheatHOLSkillsIdsDisplay = require("gge-module:export_CheatHOLSkillsIdsDisplay");
var __dep_export_CheatLocaQuestTextIDs = require("gge-module:export_CheatLocaQuestTextIDs");
var __dep_export_CheatUnitNameList = require("gge-module:export_CheatUnitNameList");
var __s0local0 = function () {
  function ClientCheats() {}
  ClientCheats.prototype.g = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayConfirmDialog.CastleShoppingCartPrimeDayConfirmDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("", "", function () {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog);
    }, function () {}, null, "", "", [1337]));
  };
  ClientCheats.prototype.get = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGeneralsInfoVO.C2SGetGeneralsInfoVO());
  };
  ClientCheats.prototype.abi = function (__s13param0) {
    this.showDialog(__dep_export_GeneralsAbilityDialog.GeneralsAbilityDialog, new __dep_export_GeneralsAbilityDialogProperties.GeneralsAbilityDialogProperties(new __dep_export_GeneralVO.GeneralVO(101), __s13param0 == 1));
  };
  ClientCheats.prototype.buildingInfo = function (__s15param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().showDialog(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s15param0)));
  };
  ClientCheats.prototype.unitInfo = function (__s17param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().showDialog(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s17param0)));
  };
  ClientCheats.prototype.lvl = function (__s19param0) {
    this.showDialog(__dep_export_GeneralsLevelUPDialog.GeneralsLevelUPDialog, new __dep_export_GeneralsLevelUPDialogProperties.GeneralsLevelUPDialogProperties(102));
  };
  ClientCheats.prototype.c = function () {
    __dep_export_CastleModel.CastleModel.generalsData.parse_SCT({
      CH: {
        CID: 1,
        FOA: 0,
        LFO: 12333
      },
      OID: 6000,
      LTR: [{
        R: 2,
        RW: [6003]
      }, {
        R: 1,
        RW: [2615, 2401]
      }, {
        R: 4,
        RW: [2385]
      }, {
        R: 3,
        RW: [21852]
      }]
    });
  };
  ClientCheats.prototype.showLoading = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  ClientCheats.prototype.hideLoading = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  ClientCheats.prototype.rewHub = function () {
    this.showDialog(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(true));
  };
  ClientCheats.prototype.rewardHubErrors = function (__s29param0) {
    var __s29local0;
    var __s29local1 = [];
    for (var __s29local2 = 0; __s29local2 < __s29param0.length; __s29local2++) {
      (__s29local0 = new __dep_export_RewardHubErrorsItemVO.RewardHubErrorsItemVO()).infoTextId = "errorCode_" + __s29param0[__s29local2];
      __s29local1.push(__s29local0);
    }
    this.showDialog(__dep_export_RewardHubErrorsDialog.RewardHubErrorsDialog, new __dep_export_RewardHubErrorsDialogProperties.RewardHubErrorsDialogProperties(__s29local1));
  };
  ClientCheats.prototype.envData = function () {
    this.showMessage(__dep_exact_9e901e8e2483a22f.EnvironmentProvider.instance.current.id);
  };
  ClientCheats.prototype.disconnect = function () {
    ClientCheats.smartfoxClient.dispatchEvent(new __dep_exact_9e901e8e2483a22f.SmartfoxEvent(__dep_exact_9e901e8e2483a22f.SmartfoxEvent.CONNECTION_LOST));
  };
  ClientCheats.prototype.dis = function (__s37param0 = 0) {
    var __s37local0 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(45);
    var __s37local1 = __s37param0 ? __dep_export_CastleConstructionItemsDisassembledDialog.CastleConstructionItemsDisassembledDialog : __dep_export_CastleConstructionItemsDisassembleDialog.CastleConstructionItemsDisassembleDialog;
    this.showDialog(__s37local1, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(__s37local0, null, null, null));
  };
  ClientCheats.prototype.fbTest = function () {
    this.showDialog(__dep_export_CastleFacebookTestDialog.CastleFacebookTestDialog);
  };
  ClientCheats.prototype.showLanguageData = function () {
    var __s41local0 = "languageVersion = " + ClientCheats.env.currentCountryLanguageVersion + "\n";
    __s41local0 += "locaTest: " + ClientCheats.env.isLocaTest + "\n";
    __s41local0 += "languageXML: " + __dep_exact_9e901e8e2483a22f.PathProvider.instance.languageConfigURL;
    this.showMessage(__s41local0);
  };
  ClientCheats.prototype.version = function () {
    var __s43local0 = "";
    __s43local0 += "Client: " + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.clientVersionString + "\n";
    __s43local0 += "Server: " + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.buildNumberServer + "\n";
    __s43local0 += "Client iXML: " + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.itemXmlVersion + "\n";
    __s43local0 += "Server iXML: " + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.serverXMLVersion + "\n";
    __s43local0 += "Language XML: " + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.languageXmlVersion + "\n\n";
    __s43local0 += "isLocal: " + ClientCheats.env.isLocal + "\n";
    __s43local0 += "isTest: " + ClientCheats.env.isTest + "\n";
    __s43local0 += "isBeta: false\n";
    __s43local0 += "isBlueBoxUser: " + (__dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.isConnectedViaHTTP() == 1).toString() + "\n";
    __s43local0 += "ServerIP: " + __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.ip + "\n";
    __s43local0 += "branchId: " + ClientCheats.env.branchId + "\n";
    __s43local0 += "referrer: " + ClientCheats.env.referrer + "\n";
    this.showDialog(__dep_export_CastleServerMessageBigDialog.CastleServerMessageBigDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __s43local0));
  };
  ClientCheats.prototype.cowgodhelpme = function () {
    this.sendToServer(new __dep_export_C2SBugReportVO.C2SBugReportVO("/troops 200 698"));
    this.sendToServer(new __dep_export_C2SBugReportVO.C2SBugReportVO("/troops 200 699"));
  };
  ClientCheats.prototype.dialogtest = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DuplicatedEmailPopupDialog.DuplicatedEmailPopupDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(null, "generic_email"));
  };
  ClientCheats.prototype.dialogtest2 = function (__s49param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DuplicatedEmailPopupDialog.DuplicatedEmailPopupDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(null, __s49param0 == 1 ? "generic_email" : "generic_username"));
  };
  ClientCheats.prototype.sso1 = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangePasswordForSocialMigrationDialog.CastleChangePasswordForSocialMigrationDialog);
  };
  ClientCheats.prototype.sso2 = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog.CastleChangePasswordForSocialMigrationConfirmedDialog);
  };
  ClientCheats.prototype.mysteryBoxChance = function () {
    __dep_export_CastleCheatData.CastleCheatData.cheatShowMysteryBoxChances = !__dep_export_CastleCheatData.CastleCheatData.cheatShowMysteryBoxChances;
  };
  ClientCheats.prototype.welcome = function (__s57param0) {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.stageWidth >= 1280) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernWelcomebackDialogBig.ModernWelcomebackDialogBig, new __dep_export_ModernWelcomebackDialogProperties.ModernWelcomebackDialogProperties(__s57param0), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernWelcomebackDialogSmall.ModernWelcomebackDialogSmall, new __dep_export_ModernWelcomebackDialogProperties.ModernWelcomebackDialogProperties(__s57param0), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
    }
  };
  ClientCheats.prototype.textID = function (__s61param0, __s61param1 = null) {
    this.showDialogWithType(__dep_export_CastleExternalOKStandardDialog.CastleExternalOKStandardDialog, new __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties("Testing-Text", __s61param0, __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION, null, __s61param1), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ClientCheats.prototype.emailStatus = function () {
    var __s63local0 = "";
    __s63local0 += "UserData.email: " + __dep_export_CastleModel.CastleModel.userData.email + "\n";
    __s63local0 += "UserData.hasValidatedEmail: " + __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail + "\n";
    __s63local0 += "UserData.hasEmail: " + __dep_export_CastleModel.CastleModel.userData.hasEmail + "\n";
    __s63local0 += "UserData.isEmailTemporary: " + __dep_export_CastleModel.CastleModel.userData.isEmailTemporary + "\n";
    __s63local0 += "UserData.hasSentMailVerification: " + __dep_export_CastleModel.CastleModel.userData.hasSentMailVerification + "\n";
    __s63local0 += "PlayerMailData.newEmail: " + __dep_export_CastleModel.CastleModel.playerEmailData.newEmail + "\n";
    __s63local0 += "PlayerMailData.pending_mail_change_status: " + __dep_export_CastleModel.CastleModel.playerEmailData.pending_mail_change_status + "\n";
    __s63local0 += "PlayerMailData.mail_change_timestamp: " + __dep_export_CastleModel.CastleModel.playerEmailData.mail_change_timestamp + "\n";
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("Email Status", __s63local0));
  };
  ClientCheats.prototype.saveProfilingData = function () {
    __s0local1.debug(__dep_export_CastleModel.CastleModel.profiler.save());
  };
  ClientCheats.prototype.applaudNow = function () {
    __dep_export_FarhatBuildingSpawnController.FarhatBuildingSpawnController.getInstance().applaudNow(true);
  };
  ClientCheats.prototype.togglePartner = function () {
    var __s69local0;
    if ("loginIsKeyBased" in ClientCheats.env) {
      ClientCheats.env.loginIsKeyBased = !ClientCheats.env.loginIsKeyBased;
      __s69local0 = "Toggled partner " + (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased ? "on" : "off");
    } else {
      __s69local0 = "Could not toggle partner!";
      __dep_exact_9e901e8e2483a22f.debug(new Error().stack);
    }
    this.showDialogWithType(__dep_export_CastleExternalOKStandardDialog.CastleExternalOKStandardDialog, new __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties("Toggle partner", __s69local0, __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ClientCheats.prototype.fps = function () {
    ClientCheats.cheatPanel.doShowFPS();
  };
  ClientCheats.prototype.survey = function (__s75param0) {
    this.showDialog(__dep_export_CastleSurveyMessageDialog.CastleSurveyMessageDialog, __dep_export_MessageUserSurveyVO.MessageUserSurveyVO.createProperties(__s75param0));
  };
  ClientCheats.prototype.lootboxes = function () {
    __dep_export_CastleModel.CastleModel.lootBoxData.parse_DUMMY([]);
  };
  ClientCheats.prototype.ping = function () {
    var __s79local0 = __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO;
    new __dep_exact_9e901e8e2483a22f.PingTest(__s79local0.ip, __s79local0.port, __s79local0.zone, ClientCheats.smartfoxClient.isConnectedViaHTTP(), function (__s81param0) {
      this.showMessage(__s81param0 + "ms");
    });
  };
  ClientCheats.prototype.pipesOn = function () {
    ClientCheats.localData.saveAddPipesOnEndOfText(true);
  };
  ClientCheats.prototype.pipesOff = function () {
    ClientCheats.localData.saveAddPipesOnEndOfText(false);
  };
  ClientCheats.prototype.objectIDsOff = function () {
    __dep_export_CastleDataHolder.CastleDataHolder.instance.showObjectIDs = false;
  };
  ClientCheats.prototype.objectIDsOn = function () {
    __dep_export_CastleDataHolder.CastleDataHolder.instance.showObjectIDs = true;
  };
  ClientCheats.prototype.toggleShowEffectTypeIDs = function () {
    __dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs = !__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs;
  };
  ClientCheats.prototype.loca = function () {
    ClientCheats.layoutManager.locaLayer.showAllTextfieldBoxes(false);
  };
  ClientCheats.prototype.i18n = function (__s95param0, __s95param1) {
    this.showDialog(__dep_export_CastleLocaToolDialog.CastleLocaToolDialog, new __dep_export_CastleLocaToolProperties.CastleLocaToolProperties(__s95param0, __s95param1));
  };
  ClientCheats.prototype.locaFull = function () {
    ClientCheats.layoutManager.locaLayer.showAllTextfieldBoxes(true);
  };
  ClientCheats.prototype.checkQuestIDs = function () {
    __dep_export_CheatLocaQuestTextIDs.CheatLocaQuestTextIDs.checkOldQuestTextIDs();
  };
  ClientCheats.prototype.getUnitNames = function () {
    __dep_export_CheatUnitNameList.CheatUnitNameList.getUnitNameList();
  };
  ClientCheats.prototype.toggleUnitWodID = function () {
    __dep_export_BasicUnitVO.BasicUnitVO.showUnitWodID = !__dep_export_BasicUnitVO.BasicUnitVO.showUnitWodID;
  };
  ClientCheats.prototype.toggleOfferIDsInMessageSubject = function () {
    __dep_export_AMessageVO.AMessageVO.showOfferIDsInSubject = !__dep_export_AMessageVO.AMessageVO.showOfferIDsInSubject;
  };
  ClientCheats.prototype.toggleOfferIDsInDialog = function () {
    __dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle = !__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle;
  };
  ClientCheats.prototype.feature = function () {
    this.sendToServer(new __dep_export_C2SShowWelcomeDataVO.C2SShowWelcomeDataVO());
  };
  ClientCheats.prototype.toggleShowEffectValues = function () {
    var __s111local0 = ClientCheats.settingsData.showEffectValuesActive = !ClientCheats.settingsData.showEffectValuesActive;
    this.showMessage("Showing Effect names and values in Tooltips: " + __s111local0, "Effect IDs");
  };
  ClientCheats.prototype.toggleShowPackageIDs = function () {
    var __s113local0 = ClientCheats.settingsData.showPackageIDToolTips = !ClientCheats.settingsData.showPackageIDToolTips;
    this.showMessage("Showing package IDs in Tooltips: " + __s113local0, "Package IDs");
  };
  ClientCheats.prototype.askAP = function () {
    var __s115local0 = __dep_export_CastleModel.CastleModel.castleAchievementData.calculateMainAchievementByAP();
    var __s115local1 = "Please remember that you are viewing client-side Information  on AchievementData, it may change depending on incoming server Commands. Check your'e ingame AchievementScreen (Erfolge) to refresh from server data \n\nTotal player AP's: " + __dep_export_CastleModel.CastleModel.castleAchievementData.achievementPoints + "\nMain Achievement in progress: " + __s115local0.achievementSeriesNumber + "\nAP's required to complete this MainAchievement: " + __s115local0.conditions[0].amount + "\nAP's required for previos MainAchievement: " + __s115local0.previosAchievementRequiredPoints() + "\nclient-side calculated relative Progress: " + __s115local0.currentRelativeProgress() + "\nTotal Possible AP'S: " + __dep_export_CastleModel.CastleModel.castleAchievementData.totalPossibleAchievementPoints;
    this.showMessage(__s115local1, "Client-Side DebugInfo");
  };
  ClientCheats.prototype.editResearch = function (__s117param0) {
    __dep_export_CastleModel.CastleModel.researchData.editingEnabled = __s117param0;
    this.showMessage("Research edit mode " + (__s117param0 ? "ON" : "OFF"));
  };
  ClientCheats.prototype.country = function (__s119param0) {
    var __s119local0 = __dep_export_CastleModel.CastleModel.worldAssignment.facade.getInstancesByCountryCode(__s119param0);
    if (__s119local0.length > 0 && __dep_exact_7e3e67aee786bc23.isNullOrUndefined(__s119local0[0])) {
      this.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CHANGE_COUNTRY, __s119local0[0]);
    }
  };
  ClientCheats.prototype.setMainHero = function (__s122param0) {
    __dep_export_CastleModel.CastleModel.userData.parse_CH({
      HID: __s122param0
    });
  };
  ClientCheats.prototype.showQuestIDs = function (__s124param0 = "on") {
    var __s124local0 = __s124param0 != "off";
    ClientCheats.localData.saveAddQuestIDs(__s124local0);
    this.showMessage("Quest IDs " + (__s124local0 ? "ON" : "OFF"), "Showing Quest IDs");
  };
  ClientCheats.prototype.seasonEnd = function () {
    this.showDialog(__dep_export_SeasonLeagueEndDialog.SeasonLeagueEndDialog, new __dep_export_SeasonLeagueEndDialogProperties.SeasonLeagueEndDialogProperties({
      EID: 72,
      KLRID: 9,
      KLCP: 400,
      R: 3,
      KLP: 0,
      RSID: 4,
      KLLID: 2
    }), false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.promotionReward = function () {
    this.showDialog(__dep_export_SeasonLeaguePromotionDialog.SeasonLeaguePromotionDialog, new __dep_export_SeasonLeaguePromotionDialogProperties.SeasonLeaguePromotionDialogProperties({
      KLRID: 9,
      KLCP: 400,
      KLP: 0,
      RSID: 4,
      KLLID: 2
    }), false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.TSEndDialog = function (__s130param0 = 10) {
    var __s130local0 = new __dep_export_CastleAllianceBattleGroundEventEndDialogProperties.CastleAllianceBattleGroundEventEndDialogProperties(117);
    __s130local0.playerRank = __dep_exact_f855840627e6e145.int(1337);
    __s130local0.playerPoints = __dep_exact_f855840627e6e145.int(7331);
    __s130local0.allianceRank = __dep_exact_f855840627e6e145.int(0);
    __s130local0.alliancePoints = __dep_exact_f855840627e6e145.int(0);
    __s130local0.settingID = __dep_exact_f855840627e6e145.int(__s130param0);
    __s130local0.dailyRewardLevel = __dep_exact_f855840627e6e145.int(3);
    __s130local0.dailyMandatoryPoints = __dep_exact_f855840627e6e145.int(24);
    __s130local0.playerDailyRewardIDs = [3, 4, 2157];
    __s130local0.isCrossplay = !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCrossPlay;
    this.showDialog(__dep_export_CastleTempServerEventEndDialog.CastleTempServerEventEndDialog, __s130local0, false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.buyPasses = function () {
    this.showDialog(__dep_export_SeasonLeagueBuyPassesDialog.SeasonLeagueBuyPassesDialog, null, false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.lifetimeSpent = function () {
    this.showMessage("You have spent a total of: " + __dep_export_CastleModel.CastleModel.userData.lifeTimeSpent + " Rubies", "Lifetime ruby spend");
  };
  ClientCheats.prototype.showURLParameters = function () {
    var __s136local0;
    var __s136local1 = ClientCheats.env.urlVariables;
    var __s136local2 = "";
    if (__s136local1) {
      for (__s136local0 in __s136local1) {
        __s136local2 += __s136local0 + ": " + __s136local1[__s136local0] + "\n";
      }
    } else {
      __s136local2 += "no variables present";
    }
    this.showMessage(__s136local2, "parameters");
  };
  ClientCheats.prototype.textIdCheck = function () {
    this.showDialog(__dep_export_QA_TextIDCheckerDialog.QA_TextIDCheckerDialog);
  };
  ClientCheats.prototype.homeTeaser = function (__s144param0) {
    ClientCheats.settingsData.isHomeScreenVisible = __s144param0;
    this.showMessage(__s144param0 ? "will be shown" : "will not be shown", "TEASER");
  };
  ClientCheats.prototype.noConnection = function () {
    __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.openMaintenance();
  };
  ClientCheats.prototype.privResShop = function () {
    this.showDialog(__dep_export_PrivateResourceVillageShopDialog.PrivateResourceVillageShopDialog);
  };
  ClientCheats.prototype.cbag = function (__s150param0) {
    if (!__s150param0) {
      (__s150param0 = []).length = __dep_exact_f855840627e6e145.int(Math.random() * 20 + 1);
      for (var __s150local0 = 0; __s150local0 < __s150param0.length; __s150local0++) {
        __s150param0[__s150local0] = __dep_exact_f855840627e6e145.int(Math.random() * 6) + __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)[0];
      }
    }
    var __s150local1 = new __dep_export_CollectableList.CollectableList();
    if (typeof __s150param0 == "number") {
      __s150local1.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, Math.random() * 100, __s150param0));
    } else {
      for (var __s150local2 = 0, __s150local3 = __s150param0; __s150local2 < __s150local3.length; __s150local2++) {
        var __s150local4 = __s150local3[__s150local2];
        if (__s150local4 !== undefined) {
          __s150local1.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, Math.random() * 100, __s150local4));
        }
      }
    }
    this.showDialog(__dep_export_MaterialBagOpenedDialog.MaterialBagOpenedDialog, new __dep_export_MaterialBagOpenedDialogProperties.MaterialBagOpenedDialogProperties(__s150local1, __dep_exact_f855840627e6e145.int(Math.random() * 4) + 1));
  };
  ClientCheats.prototype.showResearchIDs = function () {
    __dep_export_CastleModel.CastleModel.researchData.showResearchIDs = !__dep_export_CastleModel.CastleModel.researchData.showResearchIDs;
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("ResearchIDs", __dep_export_CastleModel.CastleModel.researchData.showResearchIDs ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.toggleShowCiIDs = function () {
    __dep_export_CastleDataHolder.CastleDataHolder.instance.cheatShowConstructionItemIDs = !__dep_export_CastleDataHolder.CastleDataHolder.instance.cheatShowConstructionItemIDs;
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("ConstructionItemIDs", __dep_export_CastleDataHolder.CastleDataHolder.instance.cheatShowConstructionItemIDs ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.showhelpshift = function () {
    window.Helpshift("show");
  };
  ClientCheats.prototype.showResearchGrid = function () {
    __dep_export_CastleModel.CastleModel.researchData.showResearchGrid = !__dep_export_CastleModel.CastleModel.researchData.showResearchGrid;
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("Research Grid", __dep_export_CastleModel.CastleModel.researchData.showResearchGrid ? "Coordinates are now shown." : "Coordinates are now hidden"));
  };
  ClientCheats.prototype.showBeta = function (__s168param0, __s168param1) {
    var __s168local0 = [];
    for (var __s168local1 = __s168param0; __s168local1 <= __s168param1; __s168local1++) {
      __s168local0.push(__s168local1);
    }
    this.showDialog(__dep_export_CastleWelcomeBetaTestDialog.CastleWelcomeBetaTestDialog, new __dep_export_CastleWelcomeBetaTestDialogProperties.CastleWelcomeBetaTestDialogProperties(__s168local0));
  };
  ClientCheats.prototype.toggleFakeBeta = function () {
    __dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.fakeBetaInstance = !__dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.fakeBetaInstance;
  };
  ClientCheats.prototype.toggleShowDialogName = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.showDialogName = !__dep_export_CastleExternalDialog.CastleExternalDialog.showDialogName;
  };
  ClientCheats.prototype.showRelicIDS = function () {
    __dep_export_CastleModel.CastleModel.equipData.showEquipmentIds = !__dep_export_CastleModel.CastleModel.equipData.showEquipmentIds;
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("Relic Equipment Ids", __dep_export_CastleModel.CastleModel.equipData.showEquipmentIds ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.connectToABG = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerSelectCastleVO.C2STempServerSelectCastleVO(34, false, false, __dep_exact_26a421b704832cff.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER));
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
  };
  ClientCheats.prototype.isTempServer = function (__s180param0) {
    ClientCheats.env.isOnTemporaryServer = __s180param0 == 1;
  };
  ClientCheats.prototype.isABGServer = function (__s182param0) {
    ClientCheats.env.isOnAllianceBattleGroundServer = __s182param0 == 1;
  };
  ClientCheats.prototype.isTempServerTest = function (__s184param0) {
    ClientCheats.env.isTemporaryServerTestRun = __s184param0 == 1;
  };
  ClientCheats.prototype.editFiller = function () {
    __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE = true;
    __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance();
  };
  ClientCheats.prototype.printFillerSpawnCode = function () {
    __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance().printSpawnCode();
  };
  ClientCheats.prototype.pfsc = function () {
    this.printFillerSpawnCode();
  };
  ClientCheats.prototype.expireTest = function () {
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_ConstructionItemExpiredDialog.ConstructionItemExpiredDialog);
  };
  ClientCheats.prototype.refineryTest = function (__s194param0) {
    ClientCheats.dialogHandler.registerDefaultDialogs(__dep_export_CastleRefineryToolsmithDialog.CastleRefineryToolsmithDialog, new __dep_export_CastleRefineryToolsmithDialogProperties.CastleRefineryToolsmithDialogProperties(__s194param0));
  };
  ClientCheats.prototype.setUnseenOffers = function (__s196param0) {
    __dep_export_CastleModel.CastleModel.globalOfferData.webShopOffersAmount = __s196param0;
  };
  ClientCheats.prototype.updateTopXDataByZone = function (__s198param0) {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.UPDATE_DYNAMIC_TOPX_DATA, __s198param0);
  };
  ClientCheats.prototype.holSkillIdsOn = function () {
    __dep_export_CheatHOLSkillsIdsDisplay.CheatHOLSkillsIdsDisplay.instance.enableSkillIdsDisplay = true;
  };
  ClientCheats.prototype.holSkillIdsOff = function () {
    __dep_export_CheatHOLSkillsIdsDisplay.CheatHOLSkillsIdsDisplay.instance.enableSkillIdsDisplay = false;
  };
  ClientCheats.prototype.deleteAccountTimeout = function (__s204param0) {
    __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = __s204param0;
  };
  ClientCheats.prototype.addNPCGeneralPreview = function (__s206param0) {
    if (!__dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.has(__s206param0)) {
      var __s206local0 = new __dep_export_GeneralXmlVO.GeneralXmlVO();
      __s206local0.initAsNPC(__s206param0, false);
      __dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.set(__s206param0, __s206local0);
      var __s206local1 = new __dep_export_GeneralVO.GeneralVO(__s206param0);
      __dep_export_CastleModel.CastleModel.generalsData.npcGenerals.set(__s206param0, __s206local1);
    }
  };
  ClientCheats.prototype.addNPCGeneral = function (__s209param0) {
    if (!__dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.has(__s209param0)) {
      var __s209local0 = new __dep_export_GeneralXmlVO.GeneralXmlVO();
      __s209local0.initAsNPC(__s209param0);
      __dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.set(__s209param0, __s209local0);
      var __s209local1 = new __dep_export_GeneralVO.GeneralVO(__s209param0);
      __dep_export_CastleModel.CastleModel.generalsData.npcGenerals.set(__s209param0, __s209local1);
    }
  };
  ClientCheats.prototype.gachaTest = function () {
    this.showDialog(__dep_export_GachaOfferingRewardsDialog.GachaOfferingRewardsDialog, new __dep_export_GachaOfferingRewardsDialogProperies.GachaOfferingRewardsDialogProperies(126));
  };
  ClientCheats.prototype.gachaTest1 = function () {
    this.showDialog(__dep_export_GachaRankingRewardsDialog.GachaRankingRewardsDialog, new __dep_export_GachaRankingRewardsDialogProperties.GachaRankingRewardsDialogProperties(126));
  };
  Object.defineProperty(ClientCheats, "smartfoxClient", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.smartfoxClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "localData", {
    get: function () {
      return castAs(__dep_export_CastleModel.CastleModel.localData, "CastleSharedObject");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "settingsData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.settingsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "commandController", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.CommandController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "cheatPanel", {
    get: function () {
      return ClientCheats.layoutManager.getPanel(__dep_export_CastleCheatPanel.CastleCheatPanel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ClientCheats.prototype.showDialog = function (__s232param0, __s232param1 = null, __s232param2 = false, __s232param3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW), __s232param4 = 0) {
    ClientCheats.dialogHandler.registerDefaultDialogs(__s232param0, __s232param1, __s232param2, __s232param3, __s232param4);
  };
  ClientCheats.prototype.showMessage = function (__s234param0, __s234param1 = null) {
    __s234param1 = __s234param1 || __dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information");
    this.showDialog(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s234param1, __s234param0));
  };
  ClientCheats.prototype.showDialogWithType = function (__s236param0, __s236param1 = null, __s236param2 = false, __s236param3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW), __s236param4 = 0, __s236param5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    ClientCheats.dialogHandler.registerDialogsWithType(__s236param0, __s236param1, __s236param2, __s236param3, __s236param4, __s236param5);
  };
  ClientCheats.prototype.sendToServer = function (__s238param0) {
    ClientCheats.smartfoxClient.sendCommandVO(__s238param0);
  };
  ClientCheats.prototype.executeCommand = function (__s240param0, __s240param1 = null) {
    ClientCheats.commandController.executeCommand(__s240param0, __s240param1);
  };
  return ClientCheats;
}();
exports.ClientCheats = __s0local0;
var __s0local1 = __dep_exact_c549e43d1112dfff.getLogger("createjs.ts Extensions");
