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
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleNativeCustomCursor = require("gge-module:export_CastleNativeCustomCursor");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_LinkComponent = require("gge-module:export_LinkComponent");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.TextField;
var __s0local2 = createjs.MouseEvent;
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
var __s0local3 = function (__s1param0) {
  function CastleStartscreenComponent(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0.showAnimation = false;
    __s3local0.bgAnimationMP4Played = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStartscreenBackground_ZZZ39Facebook"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartscreenComponent, __s1param0);
  CastleStartscreenComponent.prototype.init = function () {
    var __s5local0 = this;
    __s1param0.prototype.init.call(this);
    this.copyrightDisp.visible = false;
    this.initCopyrights();
    __dep_exact_9e901e8e2483a22f_2.BasicLanguageFontManager.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_8.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    __dep_exact_9e901e8e2483a22f_6.GGSCountryController.instance.currentCountryChanged.add(this.bindFunction(this.onCountryChanged));
    __dep_exact_92d05af59ee2ff30.Localization.usePipe = false;
    this.startScreen.mc_bg.mc_copyright.visible = false;
    CastleStartscreenComponent.onStartScreenShown = new __dep_exact_9e901e8e2483a22f_10.NoneValueSignal();
    if (__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isMobile) {
      CastleStartscreenComponent.onTouchMoveSignal = new __dep_exact_9e901e8e2483a22f.PointSignal();
      CastleStartscreenComponent.onTouchMoveSignal.add(function (__s8param0) {
        if (__s8param0 === null) {
          __s5local0.startScreen.y = 0;
        } else {
          __s5local0.startScreen.y += __s8param0.y;
        }
      });
    }
  };
  CastleStartscreenComponent.prototype.initCopyrights = function () {
    if (!this._copyright_AGB || !this._copyright_Impressum || !this._copyright_Support || !this._copyright_Forum || !this._copyright_GG) {
      this._copyright_AGB = new __dep_export_LinkComponent.LinkComponent(this.copyrightDisp.mc_agb, "copyright_agb", this.env.urlAGB);
      this._copyright_Impressum = new __dep_export_LinkComponent.LinkComponent(this.copyrightDisp.mc_impressum, "copyright_impressum", this.env.urlAGB);
      this._copyright_Support = new __dep_export_LinkComponent.LinkComponent(this.copyrightDisp.mc_Support, "copyright_support", "https://support.goodgamestudios.com/?g=12&lang=" + this.env.currentCountryLanguageCode);
      this._copyright_Forum = new __dep_export_LinkComponent.LinkComponent(this.copyrightDisp.mc_forum, "copyright_forum", "https://" + this.env.currentCountryLanguageCode + ".board.goodgamestudios.com/empire/");
      this._copyright_GG = new __dep_export_LinkComponent.LinkComponent(this.copyrightDisp.mc_gg, "copyright_gg", "https://www.goodgamestudios.com");
    }
  };
  CastleStartscreenComponent.prototype.updateCopyright = function () {
    if (this.copyrightDisp) {
      this.copyrightDisp.visible = this.env.currentCountryLanguageCode == "ja";
      if (this.copyrightDisp.visible) {
        this.initCopyrights();
        this._copyright_AGB.update(this.env.urlAGB);
        this._copyright_Impressum.update(this.env.urlAGB);
        this._copyright_Support.update("https://support.goodgamestudios.com/?g=12&lang=" + this.env.currentCountryLanguageCode);
        this._copyright_Forum.update("https://community.goodgamestudios.com/empire/" + this.env.currentCountryLanguageCode);
        this._copyright_GG.update();
        this.copyrightDisp.doCache();
        this.copyrightDisp.updateCache();
      }
    }
  };
  CastleStartscreenComponent.prototype.onCountryChanged = function (__s19param0) {
    this.updateCopyright();
  };
  CastleStartscreenComponent.prototype.update = function () {
    this.backgroundView.scaleY *= 1.0001;
    this.updateCopyright();
    this.updatePosition();
  };
  CastleStartscreenComponent.prototype.onFontsLoaded = function (__s23param0 = null) {
    this.update();
  };
  CastleStartscreenComponent.prototype.onAddedToStage = function (__s25param0) {
    __s1param0.prototype.onAddedToStage.call(this, __s25param0);
    this.initBackground();
    this.customCursor = new __dep_export_CastleNativeCustomCursor.CastleNativeCustomCursor();
    this.customCursor.init();
    this.startScreen.addChild(this.customCursor.disp);
    if (this.startScreen.mc_bg && this.startScreen.mc_bg.numChildren > 3 && this.startScreen.mc_bg.getChildAt(4)) {
      this.startScreen.mc_bg.getChildAt(4).doCache();
    }
  };
  CastleStartscreenComponent.prototype.initBackground = function () {
    this._backgroundSprite = new __s0local0();
    this._backgroundSprite.graphics.beginFill(__dep_export_ClientConstColor.ClientConstColor.BACKGROUND_COLOR);
    this._backgroundSprite.graphics.drawRect(0, 0, 1, 1);
    this._backgroundSprite.graphics.endFill();
    this.startScreen.addChildAt(this._backgroundSprite, 0);
  };
  CastleStartscreenComponent.prototype.showVersion = function () {
    var __s30local0 = this.backgroundView.mc_bg.txt_version__duplicate__0_0_1 || this.backgroundView.mc_bg.txt_version;
    __s30local0.text = __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.versionText.replace(/\n/g, "");
    __s30local0.visible = true;
    if (this.env.versionInformation.serverXMLVersion == this.env.versionInformation.itemXmlVersion || !this.env.isTest && !this.env.urlVariables.forceToShowTestServers) {
      __s30local0.textColor = 2626317;
    } else {
      __s30local0.textColor = 16711935;
    }
  };
  CastleStartscreenComponent.prototype.loadBackground = function () {
    var __s34local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CastleStartscreenBackground_BG", __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleStartscreenBackground_BG"), null, 0, false, null, false, 1, false, false, true);
    if (__s34local0.isLoaded) {
      this.onBackgroundIsLoaded();
    } else {
      __s34local0.clipLoaded.addOnce(this.bindFunction(this.onBackgroundIsLoaded));
    }
    this.startScreen.mc_bg.mc_bgHolder.addChild(__s34local0.asDisplayObject());
  };
  CastleStartscreenComponent.prototype.onBackgroundIsLoaded = function (__s38param0 = null) {
    __dep_exact_9e901e8e2483a22f_4.ClientFunnelTrackingController.getInstance().trackState("interfaceLoaded_startscreenBackground");
    this.updatePosition();
  };
  CastleStartscreenComponent.prototype.loadAnimation = function () {};
  CastleStartscreenComponent.prototype.onResize = function (__s42param0) {
    var __s42local0 = this;
    if (!__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isMobile || !__s0local1.isMobileKeyboardShown) {
      __s1param0.prototype.onResize.call(this, __s42param0);
      this.updatePosition();
      if (this.timeoutForResize) {
        clearTimeout(this.timeoutForResize);
      }
      this.timeoutForResize = window.setTimeout(function () {
        __s42local0.updatePosition();
        clearTimeout(__s42local0.timeoutForResize);
      }, 300);
    }
  };
  CastleStartscreenComponent.prototype.getRandomLoadingText = function () {
    this.updateCopyright();
    if (this.randomLoadingTextCount > __dep_export_ClientConstCastle.ClientConstCastle.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE) {
      this.randomLoadingTextCount = 1;
    }
    var __s48local0 = "loading_text_empire_" + this.randomLoadingTextCount;
    this.randomLoadingTextCount++;
    return __s48local0;
  };
  CastleStartscreenComponent.prototype.startProgressBar = function () {
    __s1param0.prototype.startProgressBar.call(this);
  };
  Object.defineProperty(CastleStartscreenComponent.prototype, "progressText", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicBackgroundComponent.prototype, "progressText").get.call(this);
    },
    set: function (__s55param0) {
      if (this.progressBar && this.progressBar.txt_loadingText && this.env.showLoadingText && __dep_exact_9e901e8e2483a22f_3.BasicModel.languageData) {
        this.textFieldManager.registerTextField(this.progressBar.txt_loadingText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s55param0));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenComponent.prototype, "startScreen", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenComponent.prototype, "copyrightDisp", {
    get: function () {
      if (this.backgroundView && this.backgroundView.mc_bg) {
        return this.backgroundView.mc_bg.mc_copyright;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenComponent.prototype.updatePosition = function () {
    var __s64local0 = this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth;
    var __s64local1 = this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight;
    this.backgroundView.mc_progressBar.x = __s64local0 * 0.5;
    this.backgroundView.mc_progressBar.y = 275;
    if (this.background) {
      this.background.x = (__s64local0 - 1650) / 2;
      this.background.y = 0;
    }
    var __s64local2 = __dep_exact_f855840627e6e145.int(document.getElementById("edgeStartscreenVideoReplacement").clientWidth);
    var __s64local3 = __dep_exact_f855840627e6e145.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight);
    if (this.copyrightDisp.visible) {
      var __s64local4 = __dep_exact_f855840627e6e145.int(Math.min(__s64local0, __s64local2));
      this.copyrightDisp.x = __s64local4 - this.backgroundView.x - (this.background ? this.background.x : 0) + (__s64local0 - __s64local4) * 0.5;
      var __s64local5 = __dep_exact_f855840627e6e145.int(Math.min(__s64local1, __s64local3));
      this.copyrightDisp.y = __s64local5;
    }
    if (__dep_export_StartscreenHelper.StartscreenHelper.hasBackgroundAnimation()) {
      __dep_export_StartscreenHelper.StartscreenHelper.updateBackgroundAnimation(this.bgAnimationMP4Played);
    }
    if (this._backgroundSprite && this._backgroundSprite.stage) {
      this._backgroundSprite.width = __s64local0 / this.disp.scaleX;
      this._backgroundSprite.height = __s64local1 / this.disp.scaleY;
      this._backgroundSprite.x = -this.disp.x / this.disp.scaleX;
      this._backgroundSprite.y = -this.disp.y / this.disp.scaleY;
      window.renderBgStageOnNextTick = true;
    }
  };
  Object.defineProperty(CastleStartscreenComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_7.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenComponent.prototype.hide = function () {
    __dep_exact_9e901e8e2483a22f_6.GGSCountryController.instance.currentCountryChanged.remove(this.bindFunction(this.onCountryChanged));
    __s1param0.prototype.hide.call(this);
    if (this.backgroundAnimation && this.backgroundAnimation.isLoaded) {
      this.backgroundAnimation.stop();
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.stopAllMovies(this.backgroundAnimation.currentshownDisplayObject, 1);
    }
    this.progressBar.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this.disp.parent.mouseEnabled = this.disp.parent.tickEnabled = this.disp.parent.tickChildren = this.disp.parent.visible = false;
    this.disp.visible = false;
    this.hideBackground();
  };
  CastleStartscreenComponent.prototype.hideBackground = function () {
    document.getElementById("edgeStartscreenVideoReplacement").style.display = "none";
    var __s75local0 = document.getElementById("startScreenVideo");
    if (__s75local0) {
      __s75local0.style.display = "none";
      try {
        if (this.bgAnimationMP4Played && __s75local0.isPlaying) {
          __s75local0.pause();
          this.bgAnimationMP4Played = false;
        }
      } catch (__s80local0) {}
    }
  };
  CastleStartscreenComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (this.showAnimation && this.backgroundAnimation && this.backgroundAnimation.isLoaded) {
      __dep_exact_9e901e8e2483a22f_9.MovieClipHelper.playAllMovies(this.backgroundAnimation.currentshownDisplayObject);
    }
    if (this.env.isTest) {
      this.progressBar.mouseChildren = false;
      this.progressBar.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    }
    this.disp.parent.mouseEnabled = this.disp.parent.tickEnabled = this.disp.parent.tickChildren = this.disp.parent.visible = true;
    this.disp.visible = true;
    if (window.bgStage) {
      window.bgStage.color = "transparent";
    }
    if (document.getElementById("loading")) {
      window.setLoadingScreenProgress(93);
    } else {
      this.showBackground();
    }
  };
  CastleStartscreenComponent.prototype.showBackground = function () {
    var __s89local0 = this;
    if (__dep_export_StartscreenHelper.StartscreenHelper.hasBackgroundAnimation()) {
      var __s89local1 = document.getElementById("startScreenVideo");
      if (__s89local1) {
        __s89local1.style.display = "block";
        var __s89local2 = __s89local1.play();
        if (__s89local2 && __s89local2.then) {
          __s89local2.then(function () {
            __s89local0.bgAnimationMP4Played = true;
          }, function (__s96param0) {
            __s89local1.style.display = "none";
            document.getElementById("edgeStartscreenVideoReplacement").style.display = "block";
          });
        }
      }
    } else {
      document.getElementById("edgeStartscreenVideoReplacement").style.display = "block";
    }
  };
  CastleStartscreenComponent.prototype.onClick = function (__s99param0) {
    __s1param0.prototype.onClick.call(this, __s99param0);
    if (__s99param0.target == this.progressBar) {
      __dep_exact_9e901e8e2483a22f_5.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CONNECTION_TIMEOUT);
    }
  };
  return CastleStartscreenComponent;
}(__dep_exact_9e901e8e2483a22f.BasicBackgroundComponent);
exports.CastleStartscreenComponent = __s0local3;
