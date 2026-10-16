Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerGiftSliderGiveProperties = require("gge-module:export_CastlePlayerGiftSliderGiveProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePlayerGiftSelectionScrollItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_sendGift);
    __s3local0._itxt_name = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_amount_times"));
    __s3local0._itxt_name.size = CastlePlayerGiftSelectionScrollItem.TXT_AMOUNT_SIZE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftSelectionScrollItem, __s1param0);
  CastlePlayerGiftSelectionScrollItem.prototype.customFillItem = function () {
    this._itxt_name.textContentVO.textReplacements = [this.playerInventoryScrollItemVO.amount];
    var __s5local0 = "giftTrader_giftCount_category_tooltip";
    if (this.playerInventoryScrollItemVO.amount == 1) {
      __s5local0 += "_singular";
    }
    var __s5local1 = this.playerInventoryScrollItemVO.eventPackageVO;
    this._disp.mc_packageHit.toolTipText = {
      t: __s5local1.descriptionTextID,
      p: __s5local1.descriptionParams
    };
    this._disp.mc_amountHit.toolTipText = {
      t: __s5local0,
      p: [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1.nameTextID), this.playerInventoryScrollItemVO.amount]
    };
    this._disp.btn_sendGift.toolTipText = "dialog_sendGift_tooltip";
    this.giftRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_reward), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD, CastlePlayerGiftSelectionScrollItem.ICON_SIZE_GIFT_REWARD));
    this.giftRenderer.options.textfield.forceRender = true;
    this.giftRenderer.updateWithNewVO(__s5local1.reward);
    var __s5local2 = __s5local1.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || __s5local1.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || __s5local1.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
    this.disp.mc_ring.visible = !__s5local2;
  };
  Object.defineProperty(CastlePlayerGiftSelectionScrollItem.prototype, "playerInventoryScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionScrollItem.prototype.onMouseClick = function (__s10param0) {
    if (this.disp.btn_sendGift == __s10param0.target) {
      var __s10local0 = new __dep_export_CastlePlayerGiftSliderGiveProperties.CastlePlayerGiftSliderGiveProperties();
      __s10local0.parseDataFromScrollItem(this.playerInventoryScrollItemVO);
      __s10local0.packageID = __dep_exact_f855840627e6e145.int(this.playerInventoryScrollItemVO.eventPackageVO.packageID);
      __s10local0.receivingPlayerID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.playerGiftData.receivingPlayerID);
      CastlePlayerGiftSelectionScrollItem.dialogHandler.registerDefaultDialogs(__dep_export_CastlePlayerGiftSliderGiveDialog.CastlePlayerGiftSliderGiveDialog, __s10local0);
    }
  };
  CastlePlayerGiftSelectionScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.giftRenderer) {
      this.giftRenderer.destroy();
    }
  };
  Object.defineProperty(CastlePlayerGiftSelectionScrollItem, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionScrollItem.__initialize_static_members = function () {
    CastlePlayerGiftSelectionScrollItem.TXT_AMOUNT_SIZE = 21;
    CastlePlayerGiftSelectionScrollItem.ICON_SIZE_GIFT_REWARD = new __s0local0(46, 46);
  };
  return CastlePlayerGiftSelectionScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastlePlayerGiftSelectionScrollItem = __s0local1;
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerGiftSliderGiveDialog = require("gge-module:export_CastlePlayerGiftSliderGiveDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
__s0local1.__initialize_static_members();
