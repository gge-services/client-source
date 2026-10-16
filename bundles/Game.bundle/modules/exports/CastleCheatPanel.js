Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBugReportVO = require("gge-module:export_C2SBugReportVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CheatBotCollectionDialog = require("gge-module:export_CheatBotCollectionDialog");
var __dep_export_CastleLagInformationPanel = require("gge-module:export_CastleLagInformationPanel");
var __s0local0 = function (__s1param0) {
  function CastleCheatPanel() {
    var __s3local0 = this;
    __s3local0.tabIndex = -1;
    __s3local0.isTabActive = false;
    __s3local0.enteredCheats = [];
    __s3local0.enteredCheatsArrowPosY = [-75, -57, -42, -25, -10];
    __s3local0.historyTabIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.CheatPanel()) || this).i_cheat_txt_input = __s3local0.textFieldManager.registerTextField(__s3local0.panel.mc_moveArea.txt_input_cheat, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCheatPanel, __s1param0);
  Object.defineProperty(CastleCheatPanel, "isTravelCheatActive", {
    get: function () {
      return CastleCheatPanel.isTravelBoostActive || CastleCheatPanel.isQuickAttackActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleCheatPanel.prototype.updatePosition = function () {
    __s1param0.prototype.updatePosition.call(this);
    if (this.disp && this.disp.stage) {
      this.disp.x = 0;
      this.disp.y = this.disp.stage.stageHeight - this.panel.height - 100;
    }
  };
  CastleCheatPanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.i_cheat_txt_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.i_cheat_txt_input.focusOut.remove(this.bindFunction(this.onFocusOut));
    CastleCheatPanel.isQuickAttackActive = false;
    CastleCheatPanel.isTravelBoostActive = false;
    if (this.env.isTest && this.lagInformationPanel) {
      this.lagInformationPanel.destroy();
    }
  };
  CastleCheatPanel.prototype.onAddedToStage = function (__s13param0) {
    __s1param0.prototype.onAddedToStage.call(this, __s13param0);
    this.i_cheat_txt_input.keyUp.add(this.bindFunction(this.handleEnter));
    this.fadeInPanel();
  };
  CastleCheatPanel.prototype.onRemovedFromStage = function (__s15param0) {
    __s1param0.prototype.onRemovedFromStage.call(this, __s15param0);
    this.i_cheat_txt_input.keyUp.remove(this.bindFunction(this.handleEnter));
  };
  CastleCheatPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.panel.mc_moveArea.btn_travelboost.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.panel.mc_moveArea.btn_travelboost, true);
    this.panel.mc_moveArea.btn_send.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.panel.mc_moveArea.btn_send, true);
    this.panel.mc_moveArea.btn_quickAttack.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.panel.mc_moveArea.btn_quickAttack, true);
    this.panel.mc_moveArea.btn_fps.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.panel.mc_moveArea.btn_fps, true);
    this.panel.mc_moveArea.mc_units1.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.panel.mc_moveArea.mc_units1, true);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.panel.mc_moveArea.mc_units1);
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(714, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT), this.panel.mc_moveArea.mc_units1, 30, 26, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.panel.mc_moveArea.mc_units1.alpha = 1;
    this.panel.mc_moveArea.btn_travelboost.toolTipText = "Travelboost";
    this.panel.mc_moveArea.btn_quickAttack.toolTipText = "QuickAttack";
    this.panel.mc_moveArea.btn_send.toolTipText = "send";
    this.panel.mc_moveArea.mc_units1.toolTipText = "gets 500 Rankrewardmelee";
    this.panel.mc_moveArea.btn_fps.toolTipText = "Cheat / Bot Dialog";
    this.panel.mc_moveArea.btn_setAll.toolTipText = "Fill Storage + Grant C1/C2";
    var __s17local0 = __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.versionText;
    this.panel.mc_moveArea.txt_buildinfo.text = __s17local0;
    this.panel.mc_moveArea.txt_buildinfo.selectable = true;
    if (this.env.versionInformation.serverXMLVersion == this.env.versionInformation.itemXmlVersion) {
      this.panel.mc_moveArea.txt_buildinfo.textColor = 10066329;
    } else {
      this.panel.mc_moveArea.txt_buildinfo.textColor = 16746751;
    }
    __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.getInstancesForActualCountry();
    this.panel.mc_moveArea.txt_serverName.text = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId);
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isTest) {
      this.lagInformationPanel = new __dep_export_CastleLagInformationPanel.CastleLagInformationPanel();
      this.panel.addChild(this.lagInformationPanel);
      this.lagInformationPanel.initialize();
    } else {
      this.panel.mc_moveArea.mc_units1.visible = false;
      this.panel.mc_moveArea.btn_setAll.visible = false;
    }
    this.panel.mc_moveArea.mc_tab.visible = false;
    this.allowCaching = true;
    this.i_cheat_txt_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this.i_cheat_txt_input.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  CastleCheatPanel.prototype.onFocusIn = function (__s23param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [true]));
  };
  CastleCheatPanel.prototype.onFocusOut = function (__s25param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
  };
  CastleCheatPanel.prototype.onCursorOver = function (__s27param0) {
    __s1param0.prototype.onCursorOver.call(this, __s27param0);
    this.isTabActive = false;
    this.fitCheats = [];
    this.tabIndex = -1;
  };
  Object.defineProperty(CastleCheatPanel.prototype, "panel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCheatPanel.prototype.handleEnter = function (__s31param0) {
    if (__s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER && !this.layoutManager.isDialogVisible(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog)) {
      this.handleCommand();
    }
    if (__s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.DOWN || __s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.UP) {
      this.handleTab(__s31param0);
    } else {
      this.endTabbing();
    }
    if (__s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.PAGE_UP || __s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.PAGE_DOWN) {
      this.handleCommandHistory(__s31param0.key == __dep_exact_81dacdf05bd32292.Keyboard.PAGE_UP);
    } else {
      this.panel.mc_moveArea.mc_tab.visible = false;
    }
  };
  CastleCheatPanel.prototype.handleCommandHistory = function (__s38param0) {
    if (this.enteredCheats.length !== 0) {
      if (this.historyTabIndex == 0 && __s38param0) {
        this.historyTabIndex = __dep_exact_f855840627e6e145.int(this.enteredCheats.length - 1);
      } else if (this.historyTabIndex != this.enteredCheats.length - 1 || __s38param0) {
        if (__s38param0) {
          this.historyTabIndex--;
        } else {
          this.historyTabIndex++;
        }
      } else {
        this.historyTabIndex = 0;
      }
      this.i_cheat_txt_input.textContentVO.stringValue = this.enteredCheats[this.historyTabIndex];
      this.panel.mc_moveArea.mc_tab.visible = true;
      var __s38local0 = "";
      for (var __s38local1 = 0, __s38local2 = __dep_exact_f855840627e6e145.int(Math.max(Math.min(this.historyTabIndex - 2, this.enteredCheats.length - 5), 0)); __s38local2 < this.enteredCheats.length && __s38local1 < 5 && !(__s38local2 >= this.enteredCheats.length); __s38local2++) {
        if (__s38local0.length > 0) {
          __s38local0 += "\n";
        }
        __s38local0 += this.enteredCheats[__s38local2].substring(0, 14) + (this.enteredCheats[__s38local2].length > 14 ? "..." : "");
        if (this.historyTabIndex == __s38local2) {
          this.panel.mc_moveArea.mc_tab.mc_arrow.y = this.enteredCheatsArrowPosY[__s38local1];
        }
        __s38local1++;
      }
      this.panel.mc_moveArea.mc_tab.txt_textTab.text = __s38local0;
    }
  };
  CastleCheatPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.fadeOutPanel();
    }
  };
  CastleCheatPanel.prototype.doShowFPS = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CheatBotCollectionDialog.CheatBotCollectionDialog);
  };
  CastleCheatPanel.prototype.handleTab = function (__s55param0) {
    if (this.isTabActive) {
      if (__s55param0.key == __dep_exact_81dacdf05bd32292.Keyboard.DOWN) {
        this.tabIndex++;
      } else {
        this.tabIndex--;
      }
      if (this.tabIndex > this.fitCheats.length - 1) {
        this.tabIndex = 0;
      }
      if (this.tabIndex < 0) {
        this.tabIndex = __dep_exact_f855840627e6e145.int(this.fitCheats.length - 1);
      }
      this.i_cheat_txt_input.textContentVO.stringValue = this.fitCheats[this.tabIndex];
      this.panel.mc_moveArea.txt_input_cheat.setSelection(0, this.panel.mc_moveArea.txt_input_cheat.text.length);
    }
    if (!this.isTabActive) {
      this.fitCheats = [];
      var __s55local0 = this.i_cheat_txt_input.text;
      if (CastleCheatPanel.CHEAT_TABLE != null) {
        for (var __s55local1 = 0, __s55local2 = CastleCheatPanel.CHEAT_TABLE; __s55local1 < __s55local2.length; __s55local1++) {
          var __s55local3 = __s55local2[__s55local1];
          if (__s55local3 !== undefined && __s55local3.toLowerCase().indexOf(__s55local0.toLowerCase()) != -1) {
            this.fitCheats.push(__s55local3);
          }
        }
      }
      if (this.fitCheats.length > 0) {
        this.i_cheat_txt_input.textContentVO.stringValue = this.fitCheats[0];
        this.tabIndex = 0;
        this.isTabActive = true;
      }
    }
  };
  CastleCheatPanel.prototype.endTabbing = function () {
    this.isTabActive = false;
    this.fitCheats = [];
    this.tabIndex = -1;
  };
  CastleCheatPanel.prototype.onClick = function (__s70param0) {
    __s1param0.prototype.onClick.call(this, __s70param0);
    switch (__s70param0.target) {
      case this.panel.mc_switchArea.btn_hide:
        this.fadeOutPanel();
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
        break;
      case this.panel.mc_switchArea.btn_show:
        this.fadeInPanel();
        break;
      case this.panel.mc_moveArea.btn_send:
        this.handleCommand();
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
        break;
      case this.panel.mc_moveArea.btn_travelboost:
        this.switchTravelBoost();
        break;
      case this.panel.mc_moveArea.btn_quickAttack:
        this.switchQuickAttack();
        break;
      case this.panel.mc_moveArea.mc_units1:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/troops 500 714"));
        break;
      case this.panel.mc_moveArea.btn_fps:
        this.doShowFPS();
        break;
      case this.panel.mc_moveArea.btn_setAll:
        if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < 874999) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/grant premium " + __dep_export_CastleModel.CastleModel.userData.userName + " 125000"));
        }
        if (__dep_export_CastleModel.CastleModel.currencyData.c1Amount < 874999) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/grant chips " + __dep_export_CastleModel.CastleModel.userData.userName + " 125000"));
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/fillStorage"));
    }
  };
  CastleCheatPanel.prototype.handleCommand = function () {
    var __s75local0 = this.i_cheat_txt_input.text.trim();
    this.enteredCheats.push(__s75local0);
    this.historyTabIndex = __dep_exact_f855840627e6e145.int(this.enteredCheats.length - 1);
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand(__s75local0);
  };
  CastleCheatPanel.prototype.switchTravelBoost = function () {
    CastleCheatPanel.isTravelBoostActive = !CastleCheatPanel.isTravelBoostActive;
    if (CastleCheatPanel.isTravelBoostActive) {
      this.panel.mc_moveArea.btn_travelboost.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED, false, 1);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/travelBoost on"));
    } else {
      this.panel.mc_moveArea.btn_travelboost.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/travelBoost off"));
    }
  };
  CastleCheatPanel.prototype.switchQuickAttack = function () {
    CastleCheatPanel.isQuickAttackActive = !CastleCheatPanel.isQuickAttackActive;
    if (CastleCheatPanel.isQuickAttackActive) {
      this.panel.mc_moveArea.btn_quickAttack.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED, false, 1);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/quickAttack 4"));
    } else {
      this.panel.mc_moveArea.btn_quickAttack.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO("/quickAttack 0"));
    }
  };
  CastleCheatPanel.prototype.fadeInPanel = function () {
    this.panel.mc_moveArea.x = 0;
    this.panel.mc_moveArea.y = 0;
    this.panel.mc_switchArea.x = this.panel.mc_moveArea.width - 5;
    this.panel.mc_switchArea.y = 0;
    this.panel.mc_switchArea.btn_hide.visible = true;
    this.panel.mc_switchArea.btn_show.visible = false;
    this.updateCache();
  };
  CastleCheatPanel.prototype.fadeOutPanel = function () {
    this.panel.mc_moveArea.x = -this.panel.mc_moveArea.width - 10;
    this.panel.mc_moveArea.y = 0;
    this.panel.mc_switchArea.x = 0;
    this.panel.mc_switchArea.y = 0;
    this.panel.mc_switchArea.btn_hide.visible = false;
    this.panel.mc_switchArea.btn_show.visible = true;
    this.updateCache();
  };
  CastleCheatPanel.__initialize_static_members = function () {
    CastleCheatPanel.NAME = "CastleCheatPanel";
    CastleCheatPanel.CHEAT_TABLE = ["/grant", "/grant chips", "/grant XP", "/grant premium", "/resources", "/resources wood", "/resources stone", "/resources food", "/boost", "/moneyBoost", "/giveAll", "/setAll", "/fame", "/honor", "/troops", "/killRats", "/hitMeHard", "/clearmoat", "/setKeep", "/payuser", "/noob", "unitInfo"];
  };
  CastleCheatPanel.isTravelBoostActive = false;
  CastleCheatPanel.isQuickAttackActive = false;
  return CastleCheatPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleCheatPanel = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
__s0local0.__initialize_static_members();
