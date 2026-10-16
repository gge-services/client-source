Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TaxInfoVO = require("gge-module:export_TaxInfoVO");
var __dep_export_CastleUIComponent = require("gge-module:export_CastleUIComponent");
var __dep_export_CastleSpeechBubbleComponent = require("gge-module:export_CastleSpeechBubbleComponent");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleTaxComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0.startScale = 0;
    __s3local0.oldTaxState = -1;
    __s3local0._active = false;
    __s3local0.lastUpdated = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).startScale = __s3local0.taxComponent.btn_tax.scaleX;
    __s3local0.speechBubble = new __dep_export_CastleSpeechBubbleComponent.CastleSpeechBubbleComponent(__s3local0.taxComponent.mc_speechBubble, __s3local0.taxComponent.mc_speechBubble.txt_text);
    __s3local0.speechBubble.initComponent(__dep_exact_92d05af59ee2ff30.Localize.text("speechbubble_launchTaxman"), -1, -1, 0, 1);
    __s3local0.speechBubble.disp.actLikeButton = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTaxComponent, __s1param0);
  CastleTaxComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.txtTaxTime = __dep_export_CastleUIComponent.CastleUIComponent.textFieldManager.registerTextField(this.taxComponent.mc_taxTime.txt_taxTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.taxComponent.mc_speechBubble.mouseChildren = false;
    this.taxComponent.mc_speechBubble.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.taxComponent.mc_speechBubble);
    this.taxComponent.btn_tax.doCache();
    this.taxComponent.mc_speechBubble.doCache();
  };
  CastleTaxComponent.prototype.applyProperties = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    this.onTaxDataUpdated();
    this.taxComponent.btn_tax.direction = 0;
  };
  CastleTaxComponent.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.taxComponent.mc_speechBubble:
      case this.taxComponent.btn_tax:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
    }
  };
  CastleTaxComponent.prototype.onTaxDataUpdated = function (__s12param0 = null) {
    if (!this.taxInfoVO || this.taxInfoVO.taxState != __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT) {
      this.taxComponent.btn_tax.rotation = 0;
    }
    this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY = this.startScale;
    this.initTaxComponent();
  };
  CastleTaxComponent.prototype.initTaxComponent = function () {
    var __s15local0 = this.taxInfoVO;
    if (__s15local0) {
      switch (__s15local0.taxState) {
        case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_NONE:
          this.txtTaxTime.visible = false;
          if (this.oldTaxState != __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_NONE || this.oldTaxState == -1) {
            this.speechBubble.bubbleText = __dep_exact_92d05af59ee2ff30.Localize.text("speechbubble_launchTaxman");
            if (this.speechBubble.disp.cacheCanvas) {
              this.speechBubble.disp.updateCache();
            } else {
              this.speechBubble.disp.doCache();
            }
            this.showTaxBubble();
          }
          break;
        case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_COLLECTING:
          this.showTaxTime();
          if (this.oldTaxState != __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_COLLECTING || this.oldTaxState == -1) {
            this.speechBubble.hide();
          }
          break;
        case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          this.txtTaxTime.visible = false;
          if (this.oldTaxState != __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT || this.oldTaxState == -1) {
            this.speechBubble.bubbleText = __dep_exact_92d05af59ee2ff30.Localize.text("speechbubble_waitForCollect");
            if (this.speechBubble.disp.cacheCanvas) {
              this.speechBubble.disp.updateCache();
            } else {
              this.speechBubble.disp.doCache();
            }
            if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
              this.speechBubble.hide();
            } else {
              this.showTaxBubble();
            }
          }
      }
      this.oldTaxState = __s15local0.taxState;
    }
  };
  CastleTaxComponent.prototype.showTaxBubble = function () {
    if (this.taxInfoVO.population > 0) {
      this.speechBubble.show();
    }
  };
  CastleTaxComponent.prototype.onEnterFrame = function (__s31param0) {
    if (this.taxInfoVO) {
      switch (this.taxInfoVO.taxState) {
        case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_NONE:
          this.scaleButton();
          break;
        case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          this.shakeButton();
      }
    }
  };
  CastleTaxComponent.prototype.shakeButton = function () {
    if (!(__dep_export_CachedTimer.CachedTimer.getCachedTimer() < this.lastUpdated + 1000 / 30)) {
      this.lastUpdated = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      if (this.taxComponent.btn_tax.direction == 0) {
        if (this.taxComponent.btn_tax.rotation - CastleTaxComponent.SPEED < -20) {
          this.taxComponent.btn_tax.direction = 1;
        } else {
          this.taxComponent.btn_tax.rotation -= CastleTaxComponent.SPEED;
        }
      } else if (this.taxComponent.btn_tax.rotation + CastleTaxComponent.SPEED > 20) {
        this.taxComponent.btn_tax.direction = 0;
      } else {
        this.taxComponent.btn_tax.rotation += CastleTaxComponent.SPEED;
      }
    }
  };
  CastleTaxComponent.prototype.scaleButton = function () {
    if (this.taxComponent.btn_tax.direction == 0) {
      if (this.taxComponent.btn_tax.scaleX - CastleTaxComponent.SCALE_SPEED < this.startScale) {
        this.taxComponent.btn_tax.direction = 1;
      } else {
        this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY -= CastleTaxComponent.SCALE_SPEED;
      }
    } else if (this.taxComponent.btn_tax.scaleX + CastleTaxComponent.SCALE_SPEED > this.startScale) {
      this.taxComponent.btn_tax.direction = 0;
    } else {
      this.taxComponent.btn_tax.scaleX = this.taxComponent.btn_tax.scaleY += CastleTaxComponent.SCALE_SPEED;
    }
  };
  CastleTaxComponent.prototype.showTaxTime = function () {
    this.txtTaxTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.taxInfoVO.remainingCollectionTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
    this.txtTaxTime.visible = this.taxInfoVO.remainingCollectionTimeInSeconds > 0;
  };
  CastleTaxComponent.prototype.destroy = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    __s1param0.prototype.destroy.call(this);
    this.speechBubble.destroy();
  };
  Object.defineProperty(CastleTaxComponent.prototype, "taxComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxComponent.prototype, "active", {
    get: function () {
      return this._active;
    },
    set: function (__s58param0) {
      this._active = __s58param0;
      if (this._active) {
        this.disp.stage.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      } else {
        this.disp.stage.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxComponent.prototype, "taxInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxComponent.SPEED = 5;
  CastleTaxComponent.SCALE_SPEED = 0.01;
  return CastleTaxComponent;
}(__dep_export_CastleUIComponent.CastleUIComponent);
exports.CastleTaxComponent = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
