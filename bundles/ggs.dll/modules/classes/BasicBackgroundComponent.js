Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_export_ASupportData = require("gge-module:export_ASupportData");
var __dep_class_NoneValueSignal = require("gge-module:class_NoneValueSignal");
var __dep_class_FlashUIComponent = require("gge-module:class_FlashUIComponent");
var __dep_class_BasicCustomCursor = require("gge-module:class_BasicCustomCursor");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function (__s1param0) {
  function BasicBackgroundComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.randomLoadingTextCount = 1;
    __s3local0._progressBarEnabled = true;
    __s3local0.onLoadedSignal = new __dep_class_NoneValueSignal.NoneValueSignal();
    __s3param0.addEventListener("mouseover", __s3local0.bindFunction(__s3local0.onMouseOver));
    __s3param0.addEventListener("mouseout", __s3local0.bindFunction(__s3local0.onMouseOut));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicBackgroundComponent, __s1param0);
  Object.defineProperty(BasicBackgroundComponent.prototype, "backgroundView", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.updateLoadingProgress = function (__s7param0) {
    this.progressBar.progressBarStatus.scaleX = __s7param0 / 100;
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressBar", {
    get: function () {
      return this.backgroundView.mc_progressBar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "supportBtn", {
    get: function () {
      return this.backgroundView.mc_bg.btn_mailsupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "background", {
    get: function () {
      return this.backgroundView.mc_bg;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "versionTextfield", {
    get: function () {
      return this.backgroundView.mc_bg.txt_version;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.backgroundView.play();
  };
  BasicBackgroundComponent.prototype.updatePosition = function () {
    if (this.background) {
      var __s19local0 = this.background.getBounds();
      var __s19local1 = this.backgroundView.stage.stageWidth / __s19local0.width;
      if (__s19local0.height * __s19local1 > this.backgroundView.stage.stageHeight) {
        __s19local1 = this.backgroundView.stage.stageHeight / __s19local0.height;
      }
      this.backgroundView.mc_progressBar.x = this.backgroundView.stage.stageWidth * 0.5;
      this.backgroundView.mc_progressBar.y = this.backgroundView.stage.stageHeight * 0.5;
      this.background.scaleX = this.background.scaleY = __s19local1;
      this.backgroundView.mc_bg.x = (this.backgroundView.stage.stageWidth - __s19local0.width * __s19local1) * 0.5;
      this.backgroundView.mc_bg.y = this.backgroundView.stage.stageHeight - __s19local0.height * __s19local1;
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "scaleFactor", {
    get: function () {
      return this.background.scaleX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "gameNullPoint", {
    get: function () {
      return this.background.x;
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.startProgressBar = function () {
    this.progressText = this.getRandomLoadingText();
    this.updateLoadingProgress(0);
    this.progressStartTime = Date.now();
    this.progressTimer ||= new __dep_export_CSSMouseCursor.Timer(20);
    this.progressTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onProgressTimer));
    this.progressTimer.start();
    this.loadingTextUpdateTimer ||= new __dep_export_CSSMouseCursor.Timer(__dep_class_BasicConstants.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME);
    this.loadingTextUpdateTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.updateRandomLoadingText));
    this.loadingTextUpdateTimer.start();
  };
  BasicBackgroundComponent.prototype.stopProgressBar = function () {
    if (this.progressTimer) {
      this.progressTimer.stop();
      this.progressTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onProgressTimer));
    }
    if (this.loadingTextUpdateTimer) {
      this.loadingTextUpdateTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.updateRandomLoadingText));
      this.loadingTextUpdateTimer.stop();
    }
  };
  BasicBackgroundComponent.prototype.updateRandomLoadingText = function (__s33param0 = null) {
    if (this.progressBar.parent != null && this.progressBar.visible != 0) {
      this.progressText = this.getRandomLoadingText();
    }
  };
  BasicBackgroundComponent.prototype.getRandomLoadingText = function () {
    if (this.randomLoadingTextCount > this.maxLoadingTextCount) {
      this.randomLoadingTextCount = 1;
    }
    var __s36local0 = this.loadingTextIdPrefix + this.randomLoadingTextCount;
    this.randomLoadingTextCount++;
    if (__dep_class_BasicModel.BasicModel.languageData.languageXMLLoaded) {
      return __dep_opaque_c83528567256175cfb346d7d.Localize.text(__s36local0);
    } else {
      return "";
    }
  };
  BasicBackgroundComponent.prototype.updateLoadingText = function (__s41param0) {
    switch (__s41param0) {
      case __dep_class_BasicConstants.BasicConstants.ITEM_XML_LOADER:
        this.progressText = __dep_opaque_c83528567256175cfb346d7d.Localize.text("loading_text_itemXML");
        break;
      default:
        this.progressText = this.getRandomLoadingText();
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressText", {
    set: function (__s44param0) {
      if (this.env.showLoadingText && "txt_progress" in this.progressBar) {
        this.progressBar.txt_progress.text = __s44param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.onProgressTimer = function (__s47param0) {
    var __s47local0 = Math.sin((Date.now() - this.progressStartTime) % __dep_class_BasicConstants.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME / __dep_class_BasicConstants.BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME * (Math.PI * 0.5));
    var __s47local1 = (__s47local0 *= 100) > 0 ? Math.floor(__s47local0 + 0.5) : Math.floor(__s47local0 - 0.5);
    this.updateLoadingProgress(__s47local1);
  };
  BasicBackgroundComponent.prototype.hideProgressBar = function () {
    if (this.progressBar) {
      this.progressBar.visible = false;
      this.progressText = "";
    }
  };
  BasicBackgroundComponent.prototype.showProgressBar = function () {
    if (this._progressBarEnabled) {
      this.progressBar.visible = true;
      this.progressText = this.getRandomLoadingText();
    }
  };
  BasicBackgroundComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.backgroundView) {
      this.backgroundView.stop();
      for (var __s55local0 = 0; __s55local0 < this.backgroundView.numChildren; __s55local0++) {
        if (this.backgroundView.getChildAt(__s55local0) instanceof __s0local0) {
          this.backgroundView.getChildAt(__s55local0).stop();
        }
      }
    }
  };
  BasicBackgroundComponent.prototype.destroy = function () {
    this.disp.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
    __s1param0.prototype.destroy.call(this);
  };
  BasicBackgroundComponent.prototype.init = function () {
    if (this.versionTextfield) {
      this.versionTextfield.text = this.env.versionText;
      this.versionTextfield.visible = this.env.showVersion;
      this.updateLoadingProgress(0);
    }
    if (this.backgroundView && this.supportBtn) {
      this.supportBtn.visible = this.env.useexternallinks;
      this.supportBtn.addEventListener("click", this.bindFunction(this.onClick));
      this.supportBtn.addEventListener("mouseover", this.bindFunction(this.onOverSupport));
      this.supportBtn.addEventListener("mouseout", this.bindFunction(this.onOutSupport));
    }
  };
  BasicBackgroundComponent.prototype.showVersion = function () {
    this.versionTextfield.text = this.env.versionText;
    this.versionTextfield.visible = this.env.showVersion;
    if (this.supportBtn) {
      this.supportBtn.visible = this.env.useexternallinks;
    }
  };
  BasicBackgroundComponent.prototype.onMouseOver = function (__s70param0) {};
  BasicBackgroundComponent.prototype.onMouseOut = function (__s72param0) {};
  BasicBackgroundComponent.prototype.onOverSupport = function (__s74param0) {
    var __s74local0 = this.supportBtn.scaleX * 1.05;
    this.supportBtn.scaleX = this.supportBtn.scaleY = __s74local0;
    if (this.customCursor) {
      this.customCursor.setCursorType(__dep_class_BasicCustomCursor.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  BasicBackgroundComponent.prototype.onOutSupport = function (__s77param0) {
    var __s77local0 = this.supportBtn.scaleX * 1 / 1.05;
    this.supportBtn.scaleX = this.supportBtn.scaleY = __s77local0;
    if (this.customCursor) {
      this.customCursor.setCursorType(__dep_class_BasicCustomCursor.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  BasicBackgroundComponent.prototype.onClick = function (__s80param0) {
    if (__s80param0.target == this.supportBtn) {
      __dep_export_ASupportData.SupportUtil.navigateToSupport(__dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, "-", -1, -1, __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode);
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "progressBarEnabled", {
    get: function () {
      return this._progressBarEnabled;
    },
    set: function (__s87param0) {
      this._progressBarEnabled = __s87param0;
      if (this._progressBarEnabled) {
        this.showProgressBar();
      } else {
        this.hideProgressBar();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBackgroundComponent.prototype.setProgressbarUpdateMethod = function (__s91param0) {
    if (__s91param0 && this.progressTimer) {
      this.stopProgressBar();
    } else if (!__s91param0 && !this.progressTimer) {
      this.startProgressBar();
    }
  };
  Object.defineProperty(BasicBackgroundComponent.prototype, "loadingTextIdPrefix", {
    get: function () {
      return "loading_text_";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBackgroundComponent.prototype, "maxLoadingTextCount", {
    get: function () {
      return __dep_class_BasicConstants.BasicConstants.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE;
    },
    enumerable: true,
    configurable: true
  });
  return BasicBackgroundComponent;
}(__dep_class_FlashUIComponent.FlashUIComponent);
exports.BasicBackgroundComponent = __s0local2;
