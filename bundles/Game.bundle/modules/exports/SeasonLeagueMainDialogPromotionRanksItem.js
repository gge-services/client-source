Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SeasonLeagueMainDialogPromotionRanksItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._isMouseOver = false;
    __s3local0._onClickedSignal = new __dep_exact_5c7bc328fca9e4de.Signal(Number);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogPromotionRanksItem, __s1param0);
  SeasonLeagueMainDialogPromotionRanksItem.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1);
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.disp.mc_icon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_BIG, new __s0local1(130, 130));
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
    this.setSelection(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.updateWithNewData = function (__s15param0) {
    this._promotionVO = __s15param0;
    this._promotionIcon.updateWithNewVO(__s15param0);
    this.update();
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.update = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id;
    var __s17local1 = __dep_exact_f855840627e6e145.int(this.promotionVO.id);
    this.disp.mc_prev.visible = __s17local1 < __s17local0;
    this.disp.mc_current.visible = __s17local1 == __s17local0;
    this.disp.mc_next.visible = __s17local1 > __s17local0;
    if (this._promotionIcon.vo.id != this.promotionVO.id) {
      this._promotionIcon.updateWithNewVO(this.promotionVO);
    }
    var __s17local2 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.promotionVO.getNameTextId())));
    __s17local2.color = __s17local1 <= __s17local0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    __s17local2.autoFitToBounds = true;
    this.disp.mc_nextOverlay.visible = __s17local1 > __s17local0;
    var __s17local3 = "";
    if (__s17local1 < __s17local0) {
      __s17local3 = "dialog_seasonLeague_promotionRanks_previousRank_text";
    } else if (__s17local1 == __s17local0) {
      __s17local3 = "dialog_seasonLeague_promotionRanks_currentRank_text";
    } else if (__s17local1 > __s17local0 + 1) {
      __s17local3 = "dialog_seasonLeague_promotionRanks_futureRank_text";
    }
    this.disp.toolTipText = __s17local3;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setSelection = function (__s23param0) {
    this.disp.mc_selected.visible = __s23param0;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setDownState = function (__s25param0) {
    this.disp.mc_downState.visible = __s25param0;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setMouseOverState = function (__s27param0) {
    this.disp.mc_mouseOver.visible = __s27param0;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.canShowTooltip = function () {
    var __s29local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    return this.promotionVO.id == __s29local0.id + 1;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseDown = function (__s31param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseUp = function (__s33param0) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseOver = function (__s36param0) {
    __s1param0.prototype.onMouseOver.call(this, __s36param0);
    this._isMouseOver = true;
    this.setMouseOverState(true);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseOut = function (__s38param0) {
    __s1param0.prototype.onMouseOut.call(this, __s38param0);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onClick = function (__s40param0) {
    __s1param0.prototype.onClick.call(this, __s40param0);
    this.onClickedSignal.dispatch(this.promotionVO.id);
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanksItem.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanksItem.prototype, "onClickedSignal", {
    get: function () {
      return this._onClickedSignal;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueMainDialogPromotionRanksItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionRanksItem = __s0local2;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
