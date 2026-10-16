Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferItemSet(__s3param0, __s3param1 = CastlePaymentRewardSpecialOfferItemSet.NAME) {
    var __s3local0 = __s1param0.call(this, CastlePaymentRewardSpecialOfferItemSet.initExternalClip(__s3param0, __s3param1)) || this;
    __s3local0._callback = null;
    if (__s3local0.externalClip.isLoaded) {
      __s3local0.displayObjectClipIsLoaded(__s3local0.externalClip);
    } else {
      __s3local0.externalClip.clipLoaded.addOnceWithPriority(__s3local0.bindFunction(__s3local0.displayObjectClipIsLoaded), CastlePaymentRewardSpecialOfferItemSet.CLIP_LOADED_PRIORITY_LOADED);
      CastlePaymentRewardSpecialOfferItemSet.dialogHandler.registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(__s3local0.bindFunction(__s3local0.hideOnLoading)), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferItemSet, __s1param0);
  CastlePaymentRewardSpecialOfferItemSet.initExternalClip = function (__s7param0, __s7param1) {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7param0, CastlePaymentRewardSpecialOfferItemSet.getAssetFileURL(__s7param1), null, 0, false);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "externalClip", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.disp, "CastleGoodgameExternalClip")) {
        return this.disp;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.prototype.hideOnLoading = function () {
    this.externalClip.clipLoaded.removeAll();
    this.hide();
  };
  CastlePaymentRewardSpecialOfferItemSet.getAssetFileURL = function (__s15param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s15param0);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "componentDisp", {
    get: function () {
      if (this.externalClip) {
        return this.externalClip.currentshownDisplayObject;
      } else {
        return this.disp;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.prototype.displayObjectClipIsLoaded = function (__s21param0) {
    this.dispBounds = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getVisibleBounds(this.componentDisp);
    this.disp = this.componentDisp;
    if (this.componentDisp.btn_up) {
      this.componentDisp.btn_up.visible = false;
    }
    if (this.componentDisp.btn_down) {
      this.componentDisp.btn_down.visible = false;
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    if (this._callback) {
      this._callback();
    }
    this._callback = null;
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "isComponentLoaded", {
    get: function () {
      return this.externalClip.isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet.prototype, "callback", {
    set: function (__s28param0) {
      this._callback = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferItemSet, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferItemSet.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferItemSet.NAME = "CastlePaymentRewardSpecialOfferComponents";
    CastlePaymentRewardSpecialOfferItemSet.CLIP_LOADED_PRIORITY_LOADED = 3;
  };
  return CastlePaymentRewardSpecialOfferItemSet;
}(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent);
exports.CastlePaymentRewardSpecialOfferItemSet = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__s0local0.__initialize_static_members();
