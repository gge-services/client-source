import { ABGHelper } from "./ABGHelper";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { C2SGetAllianceInfoVO } from "./C2SGetAllianceInfoVO";
import { C2SGetBookmarkList } from "./C2SGetBookmarkList";
import { C2SGetGeneralsInfoVO } from "./C2SGetGeneralsInfoVO";
import { C2SGetLoginBonusVO } from "./C2SGetLoginBonusVO";
import { C2SGetSLI } from "./C2SGetSLI";
import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { C2SShowWelcomeDataVO } from "./C2SShowWelcomeDataVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleLoginBonusData } from "./CastleLoginBonusData";
import { CastleLoginEvent } from "./CastleLoginEvent";
import { CastleModel } from "./CastleModel";
import { CastleSoundController } from "./CastleSoundController";
import { CastleWelcomeBetaTestDialog } from "./CastleWelcomeBetaTestDialog";
import { CastleWelcomeBetaTestDialogProperties } from "./CastleWelcomeBetaTestDialogProperties";
import { ClientBetaHelper } from "./ClientBetaHelper";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstInstanceIDs } from "./ClientConstInstanceIDs";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CommandDelayController } from "./CommandDelayController";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { error } from "../../../ggs.dll/reconstructed/exports/error__case_ca00fc";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExceptionHelper } from "./ExceptionHelper";
import { HelpshiftHelper } from "./HelpshiftHelper";
import { IngameClientCommands } from "./IngameClientCommands";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
import { IsoEvent } from "./IsoEvent";
import { IsoGridOriginEnum } from "./IsoGridOriginEnum";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Event;
export class GBDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_BASIC_DATA;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(__s9param0) {
    var __s9local0 = int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        BasicController.getInstance().onLoggedIn();
        BasicDialogHandler.getInstance().blockDialogs = true;
        var __s9local2;
        var __s9local3 = __s9local1[1];
        try {
          __s9local2 = JSON.parse(__s9local3);
        } catch (__s13local0) {
          debug(__s9local3);
          error(__s13local0.stack);
          return;
        }
        CastleModel.userData.splitRunData.parse_ATL(__s9local2.atl);
        CastleModel.userData.parse_GHO(__s9local2.gho);
        CastleModel.userData.parse_GPI(__s9local2.gpi);
        CastleModel.userData.hasSentMailVerification = false;
        HelpshiftHelper.getInstance().updateUserData();
        if (!SpecialServerHelper.isOnSpecialServer && CastleModel.userData.isConnectedToFacebook && CastleFacebookModule.accessToken && CastleFacebookModule.accessToken != "") {
          CommandController.instance.executeCommand(IngameClientCommands.GET_FACEBOOK_USER_DATA, true);
        }
        CastleModel.titleData.parseUFA(__s9local2.ufa);
        CastleModel.titleData.parseUHT(__s9local2.uht);
        CastleModel.titleData.parseUAR(__s9local2.uar);
        if (__s9local2.scd) {
          CastleModel.userData.parse_SCD(__s9local2.scd);
        }
        if (__s9local2.fcs && !CastleModel.userData.isConnectedToFacebook) {
          CastleModel.userData.parse_FCS(__s9local2.fcs);
        }
        CastleModel.currencyData.parseSCE(__s9local2.sce);
        if (EnvGlobalsHandler.globals.loginIsKeyBased) {
          CastleModel.socialData.setSocialData(CastleModel.userData.playerID, CastleModel.userData.userName);
        }
        CastleModel.userData.parse_CH(__s9local2.ch);
        CastleModel.userData.parse_GEM(__s9local2.gem);
        CastleModel.currencyData.parseGCU(__s9local2.gcu);
        CastleModel.userData.parse_LTS(__s9local2.lts);
        CastleModel.userData.parse_GXP(__s9local2.gxp);
        CastleModel.userData.parse_GCL(__s9local2.gcl);
        if (__s9local2.mre) {
          CastleModel.monumentsData.parseMRE(__s9local2.mre);
        }
        if (__s9local2.lrr) {
          CastleModel.laboratoryData.parseLRR(__s9local2.lrr);
        }
        CastleModel.userData.kingstowerList.parseGKL(__s9local2.gkl);
        CastleModel.userData.monumentList.parseGML(__s9local2.gml);
        CastleModel.userData.laboratoryList.parseGLL(__s9local2.gll);
        CastleModel.userData.parse_KGV(__s9local2.kgv);
        CastleModel.userData.parse_UAP(__s9local2.uap);
        CastleModel.userData.parse_UAP(__s9local2.gac);
        CastleModel.userData.parse_UPI(__s9local2.upi);
        CastleModel.userData.parse_GAL(__s9local2.gal);
        CastleModel.userData.parse_GPF(__s9local2.gpf);
        CastleModel.userData.parse_DTS(__s9local2.DTS);
        CastleModel.settingsData.parse_OPT(__s9local2.opt);
        CastleModel.settingsData.parse_MVF(__s9local2.mvf);
        CastleModel.spyData.parse_GMS(__s9local2.gms);
        CastleModel.allianceData.parse_AIN(__s9local2.ain);
        CastleModel.allianceHelpRequestData.parse_AHL(__s9local2.ahl);
        CastleModel.chatData.parseHistory(__s9local2.acl);
        CastleModel.boostData.parse_BOI(__s9local2.boi);
        CastleModel.specialEventData.parseTEI(__s9local2.tei);
        CastleModel.specialEventData.parse_SEI(__s9local2.sei);
        CastleModel.treasureMapData.parse_TMP(__s9local2.tmp);
        CastleModel.treasureHuntData.parse_THI(__s9local2.thi);
        CastleModel.messageData.parse_SNE(__s9local2.sne);
        CastleModel.messageData.parse_MCD(__s9local2.mcd ? __s9local2.mcd : __s9local2);
        CastleModel.mightData.parse_GMU(__s9local2.gmu);
        CastleModel.castleAchievementData.parse_vli(__s9local2.vli);
        CastleModel.taxData.parse_TXI(__s9local2.txi);
        CastleModel.researchData.parse_REI(__s9local2.rei);
        CastleModel.kingdomData.parse_KPI(__s9local2.kpi);
        CastleModel.userData.parse_GRI(__s9local2.gri);
        CastleModel.spyData.parse_CPI(__s9local2.cpi);
        CastleModel.lordData.parse_GLI(__s9local2.gli);
        CastleModel.dailyQuestData.parse_DQL(__s9local2.dql);
        CastleModel.timerData.parse_DRT(__s9local2.drt);
        CastleModel.mercenaryData.parse_MPE(__s9local2.mpe);
        CastleModel.vipData.parse_VIP(__s9local2.vip);
        CastleModel.permanentCastleData.parseGPC(__s9local2.gpc);
        CastleModel.equipData.parse_ESL(__s9local2.esl);
        CastleModel.equipData.parseNRF(__s9local2.nrf);
        CastleModel.gemData.parse_ESL(__s9local2.esl);
        CastleModel.rubyWishingWellData.parse_RWW(__s9local2.rww);
        CastleModel.settingsData.parse_DSD(__s9local2.dsd);
        CastleModel.userCastleListDetailed.parseData(__s9local2.dcl);
        CastleModel.officerSchoolData.parse_GATP(__s9local2.gatp);
        CastleModel.globalEffectData.parse_GIE(__s9local2.bie);
        CastleModel.lootBoxData.parse_GLS(__s9local2.gls);
        CastleModel.settingsData.abTestShowSagamap = !__s9local2.nsm;
        CastleModel.userData.splitRunData.retrieveTestCaseInfos();
        CastleModel.koreanData.koreaHoursPlayed = 0;
        if (__s9local2.ggm) {
          CastleModel.gemData.parseGGM(__s9local2.ggm);
        }
        if (__s9local2.pgl) {
          CastleModel.playerGiftData.parse_PGL(__s9local2.pgl.G, __s9local2.pgl.RA);
        }
        if (__s9local2.skl) {
          CastleModel.legendSkillData.parse_SKL(__s9local2.skl);
        }
        if (__s9local2.nec) {
          CastleModel.constructionItemData.parse_NEC(__s9local2.nec);
        }
        if (__s9local2.gai) {
          CastleModel.userData.attackCounter.parseParamObject(__s9local2.gai);
        }
        if (BasicModel.basicLoaderData.assetLoader.isFinished) {
          this.joinMyCastle();
        } else {
          this.layoutManager.state = BasicLayoutManager.STATE_LOAD_ITEMS;
          BasicModel.basicLoaderData.assetLoader.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.joinMyCastle));
        }
        CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_LOGIN, this.env);
        CommandController.instance.executeCommand(BasicController.GTM_CALL_GGS_TRACK_EVENT, "enteredclient");
        CastleDataHolder.instance.gbdParsed = true;
        CastleDataHolder.instance.requestUptOnWorldmapSwitch = true;
        CommandDelayController.getInstance().finishDelayOfAllCommands();
        if (ClientConstInstanceIDs.isBetaInstance() || instanceOfClass(this.env, "CastleEnvironmentGlobals") && this.env.isClosedBeta) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleWelcomeBetaTestDialog, new CastleWelcomeBetaTestDialogProperties(), true, BasicDialogHandler.PRIORITY_TOP);
          CommandDelayController.getInstance().addDelayCommandID(ClientConstSF.S2C_QUEST_LIST);
          CommandDelayController.getInstance().addDelayCommandID(ClientConstSF.S2C_QUEST_START);
          CommandDelayController.getInstance().addDelayCommandID(ClientConstSF.S2C_QUEST_PROGRES);
          CommandDelayController.getInstance().addDelayCommandID(ClientConstSF.S2C_QUEST_FINISHED);
        }
        if (ABGHelper.isOnABGAndTower) {
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetAllianceInfoVO(CastleModel.allianceData.myAllianceVO.allianceId));
        }
        this.controller.addEventListener(IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
        ClientBetaHelper.setSupportContextMenu();
        CastleModel.settingsData.validateEventBookmark();
        CastleModel.allianceData.validateAllianceLanguage();
        BasicModel.smartfoxClient.sendCommandVO(new C2SGetGeneralsInfoVO());
        this.controller.dispatchEvent(new CastleLoginEvent(CastleLoginEvent.ON_GBD_ARRIVED));
        CastleDataHolder.instance.showEffectTypeIDs = EnvGlobalsHandler.globals.isTest;
        CastleDataHolder.instance.cheatShowConstructionItemIDs = EnvGlobalsHandler.globals.isTest;
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  }
  focusViewOnEvent(__s30param0) {
    this.controller.removeEventListener(IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
    if (CastleModel.tutorialData.isTutorialFinished()) {
      if (!(Iso.data.objects.eventBuildings.list.length <= 0)) {
        Iso.renderer.camera.scrollToGridPos(Iso.data.grid.origins.getOriginPos(IsoGridOriginEnum.BOTTOM_CORNER));
      }
    }
  }
  joinMyCastle(__s34param0 = null) {
    try {
      BasicController.getInstance().soundController.playMusic(CastleSoundController.MUSIC_LOOP1, -1);
      BasicController.getInstance().soundController.setMusicVolume(0.3);
      BasicController.getInstance().saveSoundSettings();
    } catch (__s37local0) {
      ExceptionHelper.debugError(__s37local0);
    }
    BasicModel.basicLoaderData.assetLoader.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.joinMyCastle));
    CommandController.instance.executeCommand(BasicController.COMMAND_VERIFY_TRACKING);
    if (CastleModel.userData.userLevel <= 1) {
      CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_REGISTRATION_DATA);
    } else {
      CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT);
    }
    if (CastleModel.worldmapData) {
      CastleModel.worldmapData.allowGAARequests = false;
    }
    CastleModel.smartfoxClient.sendCommandVO(new C2SGetBookmarkList());
    CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(C2SJoinCastleVO.MY_CASTLE, WorldClassic.KINGDOM_ID));
    if (CastleModel.userData.userXP >= CastleLoginBonusData.REQUIRED_XP) {
      this.checkLoginBonus();
    }
    CastleModel.smartfoxClient.sendCommandVO(new C2SGetSLI());
    CastleModel.userData.hideCapToolNotifications = false;
  }
  getWelcomeScreenData() {
    if (ClientConstCastle.WELCOME_FEATURE_ENABLED) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SShowWelcomeDataVO());
    } else {
      this.controller.dispatchEvent(new CastleLoginEvent(CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
    }
  }
  checkLoginBonus() {
    CastleModel.smartfoxClient.sendCommandVO(new C2SGetLoginBonusVO());
  }
}
classImplementsInterfaces(GBDCommand, "IExecCommand");
