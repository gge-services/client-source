Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleLoginEvent = require("gge-module:export_CastleLoginEvent");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_HelpshiftHelper = require("gge-module:export_HelpshiftHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleWelcomeBetaTestDialogProperties = require("gge-module:export_CastleWelcomeBetaTestDialogProperties");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_ExceptionHelper = require("gge-module:export_ExceptionHelper");
var __dep_export_CastleSoundController = require("gge-module:export_CastleSoundController");
var __dep_export_C2SGetLoginBonusVO = require("gge-module:export_C2SGetLoginBonusVO");
var __dep_export_C2SGetSLI = require("gge-module:export_C2SGetSLI");
var __dep_export_C2SGetGeneralsInfoVO = require("gge-module:export_C2SGetGeneralsInfoVO");
var __dep_export_C2SShowWelcomeDataVO = require("gge-module:export_C2SShowWelcomeDataVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_C2SGetBookmarkList = require("gge-module:export_C2SGetBookmarkList");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function GBDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GBDCommand, __s1param0);
  Object.defineProperty(GBDCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GBDCommand.prototype.exec = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_exact_9e901e8e2483a22f.BasicController.getInstance().onLoggedIn();
        __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().blockDialogs = true;
        var __s9local2;
        var __s9local3 = __s9local1[1];
        try {
          __s9local2 = JSON.parse(__s9local3);
        } catch (__s13local0) {
          __dep_exact_9e901e8e2483a22f_6.debug(__s9local3);
          __dep_exact_9e901e8e2483a22f_7.error(__s13local0.stack);
          return;
        }
        __dep_export_CastleModel.CastleModel.userData.splitRunData.parse_ATL(__s9local2.atl);
        __dep_export_CastleModel.CastleModel.userData.parse_GHO(__s9local2.gho);
        __dep_export_CastleModel.CastleModel.userData.parse_GPI(__s9local2.gpi);
        __dep_export_CastleModel.CastleModel.userData.hasSentMailVerification = false;
        __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().updateUserData();
        if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer && __dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook && __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken && __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken != "") {
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.GET_FACEBOOK_USER_DATA, true);
        }
        __dep_export_CastleModel.CastleModel.titleData.parseUFA(__s9local2.ufa);
        __dep_export_CastleModel.CastleModel.titleData.parseUHT(__s9local2.uht);
        __dep_export_CastleModel.CastleModel.titleData.parseUAR(__s9local2.uar);
        if (__s9local2.scd) {
          __dep_export_CastleModel.CastleModel.userData.parse_SCD(__s9local2.scd);
        }
        if (__s9local2.fcs && !__dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook) {
          __dep_export_CastleModel.CastleModel.userData.parse_FCS(__s9local2.fcs);
        }
        __dep_export_CastleModel.CastleModel.currencyData.parseSCE(__s9local2.sce);
        if (__dep_exact_9e901e8e2483a22f_5.EnvGlobalsHandler.globals.loginIsKeyBased) {
          __dep_export_CastleModel.CastleModel.socialData.setSocialData(__dep_export_CastleModel.CastleModel.userData.playerID, __dep_export_CastleModel.CastleModel.userData.userName);
        }
        __dep_export_CastleModel.CastleModel.userData.parse_CH(__s9local2.ch);
        __dep_export_CastleModel.CastleModel.userData.parse_GEM(__s9local2.gem);
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local2.gcu);
        __dep_export_CastleModel.CastleModel.userData.parse_LTS(__s9local2.lts);
        __dep_export_CastleModel.CastleModel.userData.parse_GXP(__s9local2.gxp);
        __dep_export_CastleModel.CastleModel.userData.parse_GCL(__s9local2.gcl);
        if (__s9local2.mre) {
          __dep_export_CastleModel.CastleModel.monumentsData.parseMRE(__s9local2.mre);
        }
        if (__s9local2.lrr) {
          __dep_export_CastleModel.CastleModel.laboratoryData.parseLRR(__s9local2.lrr);
        }
        __dep_export_CastleModel.CastleModel.userData.kingstowerList.parseGKL(__s9local2.gkl);
        __dep_export_CastleModel.CastleModel.userData.monumentList.parseGML(__s9local2.gml);
        __dep_export_CastleModel.CastleModel.userData.laboratoryList.parseGLL(__s9local2.gll);
        __dep_export_CastleModel.CastleModel.userData.parse_KGV(__s9local2.kgv);
        __dep_export_CastleModel.CastleModel.userData.parse_UAP(__s9local2.uap);
        __dep_export_CastleModel.CastleModel.userData.parse_UAP(__s9local2.gac);
        __dep_export_CastleModel.CastleModel.userData.parse_UPI(__s9local2.upi);
        __dep_export_CastleModel.CastleModel.userData.parse_GAL(__s9local2.gal);
        __dep_export_CastleModel.CastleModel.userData.parse_GPF(__s9local2.gpf);
        __dep_export_CastleModel.CastleModel.userData.parse_DTS(__s9local2.DTS);
        __dep_export_CastleModel.CastleModel.settingsData.parse_OPT(__s9local2.opt);
        __dep_export_CastleModel.CastleModel.settingsData.parse_MVF(__s9local2.mvf);
        __dep_export_CastleModel.CastleModel.spyData.parse_GMS(__s9local2.gms);
        __dep_export_CastleModel.CastleModel.allianceData.parse_AIN(__s9local2.ain);
        __dep_export_CastleModel.CastleModel.allianceHelpRequestData.parse_AHL(__s9local2.ahl);
        __dep_export_CastleModel.CastleModel.chatData.parseHistory(__s9local2.acl);
        __dep_export_CastleModel.CastleModel.boostData.parse_BOI(__s9local2.boi);
        __dep_export_CastleModel.CastleModel.specialEventData.parseTEI(__s9local2.tei);
        __dep_export_CastleModel.CastleModel.specialEventData.parse_SEI(__s9local2.sei);
        __dep_export_CastleModel.CastleModel.treasureMapData.parse_TMP(__s9local2.tmp);
        __dep_export_CastleModel.CastleModel.treasureHuntData.parse_THI(__s9local2.thi);
        __dep_export_CastleModel.CastleModel.messageData.parse_SNE(__s9local2.sne);
        __dep_export_CastleModel.CastleModel.messageData.parse_MCD(__s9local2.mcd ? __s9local2.mcd : __s9local2);
        __dep_export_CastleModel.CastleModel.mightData.parse_GMU(__s9local2.gmu);
        __dep_export_CastleModel.CastleModel.castleAchievementData.parse_vli(__s9local2.vli);
        __dep_export_CastleModel.CastleModel.taxData.parse_TXI(__s9local2.txi);
        __dep_export_CastleModel.CastleModel.researchData.parse_REI(__s9local2.rei);
        __dep_export_CastleModel.CastleModel.kingdomData.parse_KPI(__s9local2.kpi);
        __dep_export_CastleModel.CastleModel.userData.parse_GRI(__s9local2.gri);
        __dep_export_CastleModel.CastleModel.spyData.parse_CPI(__s9local2.cpi);
        __dep_export_CastleModel.CastleModel.lordData.parse_GLI(__s9local2.gli);
        __dep_export_CastleModel.CastleModel.dailyQuestData.parse_DQL(__s9local2.dql);
        __dep_export_CastleModel.CastleModel.timerData.parse_DRT(__s9local2.drt);
        __dep_export_CastleModel.CastleModel.mercenaryData.parse_MPE(__s9local2.mpe);
        __dep_export_CastleModel.CastleModel.vipData.parse_VIP(__s9local2.vip);
        __dep_export_CastleModel.CastleModel.permanentCastleData.parseGPC(__s9local2.gpc);
        __dep_export_CastleModel.CastleModel.equipData.parse_ESL(__s9local2.esl);
        __dep_export_CastleModel.CastleModel.equipData.parseNRF(__s9local2.nrf);
        __dep_export_CastleModel.CastleModel.gemData.parse_ESL(__s9local2.esl);
        __dep_export_CastleModel.CastleModel.rubyWishingWellData.parse_RWW(__s9local2.rww);
        __dep_export_CastleModel.CastleModel.settingsData.parse_DSD(__s9local2.dsd);
        __dep_export_CastleModel.CastleModel.userCastleListDetailed.parseData(__s9local2.dcl);
        __dep_export_CastleModel.CastleModel.officerSchoolData.parse_GATP(__s9local2.gatp);
        __dep_export_CastleModel.CastleModel.globalEffectData.parse_GIE(__s9local2.bie);
        __dep_export_CastleModel.CastleModel.lootBoxData.parse_GLS(__s9local2.gls);
        __dep_export_CastleModel.CastleModel.settingsData.abTestShowSagamap = !__s9local2.nsm;
        __dep_export_CastleModel.CastleModel.userData.splitRunData.retrieveTestCaseInfos();
        __dep_export_CastleModel.CastleModel.koreanData.koreaHoursPlayed = 0;
        if (__s9local2.ggm) {
          __dep_export_CastleModel.CastleModel.gemData.parseGGM(__s9local2.ggm);
        }
        if (__s9local2.pgl) {
          __dep_export_CastleModel.CastleModel.playerGiftData.parse_PGL(__s9local2.pgl.G, __s9local2.pgl.RA);
        }
        if (__s9local2.skl) {
          __dep_export_CastleModel.CastleModel.legendSkillData.parse_SKL(__s9local2.skl);
        }
        if (__s9local2.nec) {
          __dep_export_CastleModel.CastleModel.constructionItemData.parse_NEC(__s9local2.nec);
        }
        if (__s9local2.gai) {
          __dep_export_CastleModel.CastleModel.userData.attackCounter.parseParamObject(__s9local2.gai);
        }
        if (__dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.assetLoader.isFinished) {
          this.joinMyCastle();
        } else {
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_LOAD_ITEMS;
          __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.assetLoader.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.joinMyCastle));
        }
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_TRACK_LOGIN, this.env);
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GTM_CALL_GGS_TRACK_EVENT, "enteredclient");
        __dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed = true;
        __dep_export_CastleDataHolder.CastleDataHolder.instance.requestUptOnWorldmapSwitch = true;
        __dep_export_CommandDelayController.CommandDelayController.getInstance().finishDelayOfAllCommands();
        if (__dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.isBetaInstance() || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.env, "CastleEnvironmentGlobals") && this.env.isClosedBeta) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWelcomeBetaTestDialog.CastleWelcomeBetaTestDialog, new __dep_export_CastleWelcomeBetaTestDialogProperties.CastleWelcomeBetaTestDialogProperties(), true, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_TOP);
          __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_LIST);
          __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_START);
          __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_PROGRES);
          __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_FINISHED);
        }
        if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId));
        }
        this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
        __dep_export_ClientBetaHelper.ClientBetaHelper.setSupportContextMenu();
        __dep_export_CastleModel.CastleModel.settingsData.validateEventBookmark();
        __dep_export_CastleModel.CastleModel.allianceData.validateAllianceLanguage();
        __dep_exact_9e901e8e2483a22f_3.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGeneralsInfoVO.C2SGetGeneralsInfoVO());
        this.controller.dispatchEvent(new __dep_export_CastleLoginEvent.CastleLoginEvent(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED));
        __dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs = __dep_exact_9e901e8e2483a22f_5.EnvGlobalsHandler.globals.isTest;
        __dep_export_CastleDataHolder.CastleDataHolder.instance.cheatShowConstructionItemIDs = __dep_exact_9e901e8e2483a22f_5.EnvGlobalsHandler.globals.isTest;
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  };
  GBDCommand.prototype.focusViewOnEvent = function (__s30param0) {
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
      if (!(__dep_export_Iso.Iso.data.objects.eventBuildings.list.length <= 0)) {
        __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__dep_export_Iso.Iso.data.grid.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER));
      }
    }
  };
  GBDCommand.prototype.joinMyCastle = function (__s34param0 = null) {
    try {
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().soundController.playMusic(__dep_export_CastleSoundController.CastleSoundController.MUSIC_LOOP1, -1);
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().soundController.setMusicVolume(0.3);
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().saveSoundSettings();
    } catch (__s37local0) {
      __dep_export_ExceptionHelper.ExceptionHelper.debugError(__s37local0);
    }
    __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.assetLoader.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.joinMyCastle));
    __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_VERIFY_TRACKING);
    if (__dep_export_CastleModel.CastleModel.userData.userLevel <= 1) {
      __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_TRACK_REGISTRATION_DATA);
    } else {
      __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT);
    }
    if (__dep_export_CastleModel.CastleModel.worldmapData) {
      __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetBookmarkList.C2SGetBookmarkList());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_C2SJoinCastleVO.C2SJoinCastleVO.MY_CASTLE, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID));
    if (__dep_export_CastleModel.CastleModel.userData.userXP >= __dep_export_CastleLoginBonusData.CastleLoginBonusData.REQUIRED_XP) {
      this.checkLoginBonus();
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSLI.C2SGetSLI());
    __dep_export_CastleModel.CastleModel.userData.hideCapToolNotifications = false;
  };
  GBDCommand.prototype.getWelcomeScreenData = function () {
    if (__dep_export_ClientConstCastle.ClientConstCastle.WELCOME_FEATURE_ENABLED) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowWelcomeDataVO.C2SShowWelcomeDataVO());
    } else {
      this.controller.dispatchEvent(new __dep_export_CastleLoginEvent.CastleLoginEvent(__dep_export_CastleLoginEvent.CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
    }
  };
  GBDCommand.prototype.checkLoginBonus = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLoginBonusVO.C2SGetLoginBonusVO());
  };
  return GBDCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GBDCommand = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLoginBonusData = require("gge-module:export_CastleLoginBonusData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWelcomeBetaTestDialog = require("gge-module:export_CastleWelcomeBetaTestDialog");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IExecCommand");
