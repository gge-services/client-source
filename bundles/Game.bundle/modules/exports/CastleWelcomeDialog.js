Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstURL = require("gge-module:export_ClientConstURL");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleForumHelper = require("gge-module:export_CastleForumHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleWelcomeDialog() {
    var __s3local0 = this;
    __s3local0.selectedNews = 0;
    __s3local0.newsSlotOffset = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleWelcomeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWelcomeDialog, __s1param0);
  CastleWelcomeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_forum, this.dialogDisp.btn_close, this.dialogDisp.btn_allNews, this.dialogDisp.homeScreenVisibility, this.dialogDisp.btn_facebook]);
    this.placeHolderClass = __dep_exact_81dacdf05bd32292_4.getDefinitionByName("LoadingAnimation");
    this.rightPanel = this.dialogDisp.mc_rightPanelElements;
    this.dialogDisp.mc_static.cacheAsBitmap = true;
    this.dialogDisp.btn_prevNews.basicButton = new __dep_exact_84d43d9c404bd4d8.SmallButton(this.dialogDisp.btn_prevNews, true);
    this.dialogDisp.btn_nextNews.basicButton = new __dep_exact_84d43d9c404bd4d8.SmallButton(this.dialogDisp.btn_nextNews, true);
    this.itxt_nowNew = this.textFieldManager.registerTextField(this.dialogDisp.txt_nowNew, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_nowTeaser"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_allNews.txt_btn, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_showAll"));
    this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    if (this.rightPanel.txt_archiv) {
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_newsArchive"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    }
    this.itxt_newsTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_newsTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    this.itxt_newsTitle.autoFitToBounds = true;
    this.itxt_newsTxt = this.textFieldManager.registerTextField(this.dialogDisp.txt_newsTxt, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    this.i_txt_btn = this.textFieldManager.registerTextField(this.dialogDisp.btn_allNews.txt_btn, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_showAll"));
    this.i_txt_btn.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_didyouknow, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_tip_title_short")).autoFitToBounds = true;
    this.dialogDisp.txt_didyouknow.y += 25;
    var __s5local0 = Math.round(Math.random() * (CastleWelcomeDialog._hints.length - 1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hintbox, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(CastleWelcomeDialog._hints[__s5local0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_homeScreenVisibility, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_hideTeaser"));
    this.dialogDisp.homeScreenVisibility.checkMark.visible = false;
  };
  CastleWelcomeDialog.prototype.applyPropertiesLoaded = function (__s8param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s8param0);
    this.dialogDisp.btn_forum.visible = __dep_export_CastleForumHelper.CastleForumHelper.isForumVisible();
    __dep_export_CastleForumHelper.CastleForumHelper.assignForumButtonTooltip(this.dialogDisp.btn_forum);
    if (this.dialogDisp.btn_forum.visible) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_discussForum"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_checkInbox"));
    }
    this.dialogDisp.btn_facebook.toolTipText = "dialog_welcome_facebookButton";
    this.showNewest();
    this.checkAndShowNewsArrows();
  };
  CastleWelcomeDialog.prototype.showLoaded = function (__s12param0 = null) {
    if (this.isOutOfTutorial()) {
      this.dialogDisp.btn_facebook.visible = this.env.useexternallinks;
      __s1param0.prototype.showLoaded.call(this, __s12param0);
    } else {
      this.hide();
    }
  };
  CastleWelcomeDialog.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleWelcomeDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_prevNews:
        this.onPreviousNews();
        break;
      case this.dialogDisp.btn_nextNews:
        this.onNextNews();
        break;
      case this.dialogDisp.btn_allNews:
        this.onAllNews();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.rightPanel.btn_down:
        this.onPreviousNews();
        break;
      case this.rightPanel.btn_up:
        this.onNextNews();
        break;
      case this.rightPanel.mc_listItem0:
        this.changeVisibleNews(this.newsSlotOffset);
        break;
      case this.rightPanel.mc_listItem1:
        this.changeVisibleNews(this.newsSlotOffset + 1);
        break;
      case this.rightPanel.mc_listItem2:
        this.changeVisibleNews(this.newsSlotOffset + 2);
        break;
      case this.rightPanel.mc_listItem3:
        this.changeVisibleNews(this.newsSlotOffset + 3);
        break;
      case this.rightPanel.mc_listItem4:
        this.changeVisibleNews(this.newsSlotOffset + 4);
        break;
      case this.rightPanel.mc_listItem5:
        this.changeVisibleNews(this.newsSlotOffset + 5);
        break;
      case this.dialogDisp.btn_forum:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_OPEN_FORUM);
        break;
      case this.dialogDisp.homeScreenVisibility:
        __dep_export_CastleModel.CastleModel.settingsData.isHomeScreenVisible = !__dep_export_CastleModel.CastleModel.settingsData.isHomeScreenVisible;
        this.dialogDisp.homeScreenVisibility.checkMark.visible = !this.dialogDisp.homeScreenVisibility.checkMark.visible;
        break;
      case this.dialogDisp.btn_facebook:
        __dep_exact_9e901e8e2483a22f_3.BrowserUtil.executeNavigateToURL(new __dep_exact_81dacdf05bd32292_2.URLRequest(__dep_export_ClientConstURL.ClientConstURL.URL_OFICIAL_EMPIRE_FACEBOOK_PAGE));
    }
  };
  CastleWelcomeDialog.prototype.onKeyDown = function (__s21param0) {
    if (__s21param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ESCAPE) {
      this.hide();
    }
  };
  CastleWelcomeDialog.prototype.onMouseOver = function (__s24param0) {
    __s1param0.prototype.onMouseOver.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.rightPanel.mc_listItem0:
      case this.rightPanel.mc_listItem1:
      case this.rightPanel.mc_listItem2:
      case this.rightPanel.mc_listItem3:
      case this.rightPanel.mc_listItem4:
      case this.rightPanel.mc_listItem5:
      case this.rightPanel.mc_listItem6:
        if (__s24param0.target.txt_title.length > 0 || __s24param0.target.txt_date.text > 0) {
          this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
        }
    }
  };
  CastleWelcomeDialog.prototype.onMouseOut = function (__s28param0) {
    __s1param0.prototype.onMouseOut.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.rightPanel.mc_listItem0:
      case this.rightPanel.mc_listItem1:
      case this.rightPanel.mc_listItem2:
      case this.rightPanel.mc_listItem3:
      case this.rightPanel.mc_listItem4:
      case this.rightPanel.mc_listItem5:
      case this.rightPanel.mc_listItem6:
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleWelcomeDialog.prototype.onMouseWheel = function (__s31param0) {
    __s1param0.prototype.onMouseOut.call(this, __s31param0);
    if (__s31param0.delta < 0 && this.newsSlotOffset > 0) {
      this.onButtonUp();
    }
    if (__s31param0.delta > 0 && CastleWelcomeDialog.MAX_SHOWN_ENTRIES + this.newsSlotOffset < this.dialogProperties.features.length) {
      this.onButtonDown();
    }
  };
  CastleWelcomeDialog.prototype.showNewest = function () {
    this.rightPanel.gotoAndStop(1);
    this.changeVisibleNews(0);
    this.setRightPanelFeature(0);
  };
  CastleWelcomeDialog.prototype.setRightPanelFeature = function (__s37param0) {
    __dep_exact_9e901e8e2483a22f_6.MovieClipHelper.clearMovieClip(this.rightPanel.mc_next);
    if (__s37param0 < this.dialogProperties.features.length) {
      var __s37local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.features[__s37param0].id);
      var __s37local1 = "CastleWelcomeNews" + (__s37local0 + 1);
      this.rightPanel.mc_next.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s37local1, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s37local1), null, 0, false, this.placeHolderClass).asDisplayObject());
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("teaser_announcement_" + __s37local0 + "_text"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    } else {
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleWelcomeDialog.prototype.onPreviousNews = function () {
    this.changeVisibleNews(this.selectedNews + 1);
    var __s41local0 = this.selectedNews - this.newsSlotOffset;
    if (__s41local0 >= CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
      this.newsSlotOffset += __s41local0 - CastleWelcomeDialog.MAX_SHOWN_ENTRIES + 1;
      this.updateNewsSlots();
    }
  };
  CastleWelcomeDialog.prototype.onNextNews = function () {
    this.changeVisibleNews(this.selectedNews - 1);
    var __s44local0 = this.selectedNews - this.newsSlotOffset;
    if (__s44local0 < 0) {
      this.newsSlotOffset += __s44local0;
      this.updateNewsSlots();
    }
  };
  CastleWelcomeDialog.prototype.checkAndShowNewsArrows = function () {
    this.dialogDisp.btn_nextNews.enabled = this.dialogDisp.btn_nextNews.visible = this.selectedNews > 0;
    this.dialogDisp.btn_prevNews.enabled = this.dialogDisp.btn_prevNews.visible = this.selectedNews < this.dialogProperties.features.length - 1;
  };
  CastleWelcomeDialog.prototype.changeVisibleNews = function (__s49param0) {
    if (!(__s49param0 < 0) && !(__s49param0 >= this.dialogProperties.features.length)) {
      var __s49local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.features[__s49param0].id);
      __dep_exact_9e901e8e2483a22f_6.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_news);
      var __s49local1 = "CastleWelcomeNews" + __s49local0;
      this.dialogDisp.mc_news.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s49local1, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s49local1), null, 0, false, this.placeHolderClass));
      this.itxt_newsTitle.textContentVO.textId = "teaser_news_" + __s49local0 + "_title";
      var __s49local2 = "teaser_news_network_" + __s49local0 + "_text";
      if (this.env.useexternallinks || __dep_exact_92d05af59ee2ff30_1.Localize.text(__s49local2) == __s49local2) {
        this.itxt_newsTxt.textContentVO.textId = "teaser_news_" + __s49local0 + "_text";
      } else {
        this.itxt_newsTxt.textContentVO.textId = __s49local2;
      }
      this.itxt_nowNew.visible = __s49param0 == 0;
      if (this.rightPanel.currentFrame == 1) {
        var __s49local3 = this.selectedNews - this.newsSlotOffset;
        var __s49local4 = new Date();
        if (__s49local3 > -1 && __s49local3 < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
          this.rightPanel["mc_listItem" + __s49local3].gotoAndStop(1);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s49local3].txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + __s49local3].id + "_title"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
          __s49local4.setTime(this.dialogProperties.features[this.newsSlotOffset + __s49local3].timestamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s49local3].txt_date, new __dep_exact_92d05af59ee2ff30_2.LocalizedDateTimeVO(__s49local4, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
        }
        if ((__s49local3 = __s49param0 - this.newsSlotOffset) > -1 && __s49local3 < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
          this.rightPanel["mc_listItem" + __s49local3].gotoAndStop(2);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s49local3].txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + __s49local3].id + "_title"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
          __s49local4.setTime(this.dialogProperties.features[this.newsSlotOffset + __s49local3].timestamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s49local3].txt_date, new __dep_exact_92d05af59ee2ff30_2.LocalizedDateTimeVO(__s49local4, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
        }
      }
      this.selectedNews = __s49param0;
      this.checkAndShowNewsArrows();
    }
  };
  CastleWelcomeDialog.prototype.onAllNews = function () {
    if (this.rightPanel.currentFrame < 1) {
      this.i_txt_btn.textContentVO.textId = "dialog_welcome_back";
      this.rightPanel.gotoAndStop(2);
      this.loadFeatureList();
      this.rightPanel.btn_up.basicButton = new __dep_exact_84d43d9c404bd4d8.SmallButton(this.rightPanel.btn_up, true);
      this.rightPanel.btn_down.basicButton = new __dep_exact_84d43d9c404bd4d8.SmallButton(this.rightPanel.btn_down, true);
      this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.dialogDisp.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
      for (var __s57local0 = 0; __s57local0 < CastleWelcomeDialog.MAX_SHOWN_ENTRIES; __s57local0++) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.rightPanel["mc_listItem" + __s57local0]);
        this.rightPanel["mc_listItem" + __s57local0].mouseChildren = false;
      }
    } else {
      this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.dialogDisp.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      this.i_txt_btn.textContentVO.textId = "dialog_welcome_showAll";
      this.rightPanel.gotoAndStop(1);
      this.setRightPanelFeature(0);
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleWelcomeDialog.prototype.isAllNewsActive = function () {
    return this.rightPanel.currentFrame >= 1;
  };
  CastleWelcomeDialog.prototype.loadFeatureList = function () {
    if (this.rightPanel.txt_archiv) {
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_welcome_newsArchive"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
    }
    if (this.dialogProperties.features.length < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
      this.newsSlotOffset = 0;
    } else {
      this.newsSlotOffset = __dep_exact_f855840627e6e145.int(Math.max(0, this.selectedNews - 3));
    }
    this.fillNewsSlots();
    this.checkAndShowListArrows();
  };
  CastleWelcomeDialog.prototype.checkAndShowListArrows = function () {
    this.rightPanel.btn_up.visible = this.newsSlotOffset > 0;
    this.rightPanel.btn_down.visible = CastleWelcomeDialog.MAX_SHOWN_ENTRIES + this.newsSlotOffset < this.dialogProperties.features.length;
  };
  CastleWelcomeDialog.prototype.fillNewsSlots = function () {
    for (var __s72local0 = 0; __s72local0 < CastleWelcomeDialog.MAX_SHOWN_ENTRIES; __s72local0++) {
      if (this.newsSlotOffset + __s72local0 < this.dialogProperties.features.length) {
        if (this.newsSlotOffset + __s72local0 == this.selectedNews) {
          this.rightPanel["mc_listItem" + __s72local0].gotoAndStop(2);
        } else {
          this.rightPanel["mc_listItem" + __s72local0].gotoAndStop(1);
        }
        var __s72local1 = new Date();
        __s72local1.setTime(this.dialogProperties.features[this.newsSlotOffset + __s72local0].timestamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s72local0].txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + __s72local0].id + "_title"), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s72local0].txt_date, new __dep_exact_92d05af59ee2ff30_2.LocalizedDateTimeVO(__s72local1, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s72local0].txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + __s72local0].txt_date, new __dep_exact_92d05af59ee2ff30_4.TextVO(""), new __dep_exact_9e901e8e2483a22f_5.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  CastleWelcomeDialog.prototype.onButtonUp = function () {
    this.newsSlotOffset--;
    this.updateNewsSlots();
  };
  CastleWelcomeDialog.prototype.onButtonDown = function () {
    this.newsSlotOffset++;
    this.updateNewsSlots();
  };
  CastleWelcomeDialog.prototype.updateNewsSlots = function () {
    if (this.isAllNewsActive()) {
      this.fillNewsSlots();
      this.checkAndShowListArrows();
    }
  };
  Object.defineProperty(CastleWelcomeDialog.prototype, "hasPreloaderDialog", {
    get: function () {
      return false;
    },
    set: function (__s89param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleExternalDialog.CastleExternalDialog.prototype, "hasPreloaderDialog").set.call(this, __s89param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWelcomeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeDialog.__initialize_static_members = function () {
    CastleWelcomeDialog.NAME = "CastleWelcome";
    CastleWelcomeDialog.MAX_SHOWN_ENTRIES = 6;
    CastleWelcomeDialog._hints = ["teaser_hint_01", "teaser_hint_02", "teaser_hint_03", "teaser_hint_04_v2", "teaser_hint_05", "teaser_hint_06", "teaser_hint_07", "teaser_hint_08", "teaser_hint_09", "teaser_hint_10", "teaser_hint_11", "teaser_hint_12", "teaser_hint_13", "teaser_hint_14", "teaser_hint_15"];
  };
  return CastleWelcomeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleWelcomeDialog = __s0local1;
__dep_exact_81dacdf05bd32292_3.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
