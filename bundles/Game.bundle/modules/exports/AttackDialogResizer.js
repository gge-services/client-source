Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function AttackDialogResizer() {
    this._shouldReorder = false;
    this._scaleFactorX = 1;
    this._scaleFactorY = 1;
  }
  AttackDialogResizer.prototype.initWithDialogDisp = function (__s5param0) {
    this.disp = __s5param0;
    this.attackHornPos = new __s0local0(this.disp.mc_hornHolder.x, this.disp.mc_hornHolder.y);
    this.onResize(true);
  };
  AttackDialogResizer.prototype.onShow = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onResizeDialog.add(this.bindFunction(this.onResize));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onShowAutoFillOptions.add(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onHideAutoFillOptions.add(this.bindFunction(this.updatePlayerBuffPosition));
  };
  AttackDialogResizer.prototype.onHide = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onResizeDialog.remove(this.bindFunction(this.onResize));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onShowAutoFillOptions.remove(this.bindFunction(this.updatePlayerBuffPosition));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onHideAutoFillOptions.remove(this.bindFunction(this.updatePlayerBuffPosition));
  };
  AttackDialogResizer.prototype.onResize = function (__s11param0 = false) {
    this._scaleFactorX = AttackDialogResizer.MAX_DIALOGUE_WIDTH / AttackDialogResizer.ORIGINAL_WIDTH;
    this._scaleFactorY = 1;
    if (this.disp && this.disp.stage) {
      if (this.disp.stage.stageWidth < AttackDialogResizer.MIN_DIALOGUE_WIDTH) {
        this._shouldReorder = false;
      } else {
        this._shouldReorder = true;
      }
      if (this.disp.stage.stageWidth < AttackDialogResizer.MAX_DIALOGUE_WIDTH) {
        this._scaleFactorX = Math.min(this._scaleFactorX, Math.max(this.disp.stage.stageWidth, AttackDialogResizer.MIN_DIALOGUE_WIDTH) / AttackDialogResizer.ORIGINAL_WIDTH);
      }
      if (this.disp.stage.stageHeight < AttackDialogResizer.MAX_DIALOGUE_HEIGHT * this._scaleFactorX) {
        this._scaleFactorY = Math.max(this.disp.stage.stageHeight, AttackDialogResizer.MIN_DIALOGUE_HEIGHT) / AttackDialogResizer.MAX_DIALOGUE_HEIGHT;
      }
      if (this._shouldReorder || __s11param0) {
        this.disp.scaleX = this.disp.scaleY = 1;
        this.disp.mc_bg.scaleX = this._scaleFactorX;
        this.disp.mc_bg.scaleY = this._scaleFactorY;
        if (this.disp.mc_bg.width >= AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS) {
          __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.dispatch();
          __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.dispatch();
          this.disp.mc_hornHolder.x = this.attackHornPos.x - 20;
          this.disp.mc_hornHolder.y = this.attackHornPos.y - 20;
          this.disp.mc_hornHolder.scaleX = this.disp.mc_hornHolder.scaleY = 0.75;
        } else {
          if (__s11param0) {
            __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.dispatch();
            __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.dispatch();
          }
          this.disp.mc_hornHolder.x = this.attackHornPos.x;
          this.disp.mc_hornHolder.y = this.attackHornPos.y - 20;
          this.disp.mc_hornHolder.scaleX = this.disp.mc_hornHolder.scaleY = 0.65;
        }
        var __s11local0 = AttackDialogResizer.SIDE_PART_WIDTH;
        this.disp.mc_playerInfo.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5;
        this.disp.mc_targetInfo.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5;
        this.disp.mc_waveList.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5;
        this.disp.mc_bottom_800.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5;
        this.disp.mc_autofill_filter.x = Math.min(this.bgWidthNorm / 2, this.bgWidthNorm / 2 - (__s11local0 - this.disp.mc_autofill_filter.width));
        this.disp.mc_autofill_filter.mc_open.btn_close.visible = this.disp.mc_bg.width < AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS;
        this.scaleSideInfo(this.disp.mc_playerInfo, -1);
        this.scaleSideInfo(this.disp.mc_targetInfo, 1);
        this.disp.mc_general_selection.mc_generalSelection_bg.width = this.bgWidthNorm;
        this.disp.mc_general_selection.x = -this.bgWidthNorm / 2 + this.disp.mc_playerInfo.mc_double_bg.width + 112;
        this.disp.mc_general_selection.mc_generalSelection_bg.x = -this.bgWidthNorm / 2 - this.disp.mc_general_selection.x;
        this.centerDialogue();
        this.updateButtons();
        if (!this._shouldReorder || this.disp.stage.stageHeight < AttackDialogResizer.MIN_DIALOGUE_HEIGHT) {
          this.updateScale();
        }
        this.updateDetailView();
      } else {
        this.updateScale();
      }
    }
  };
  AttackDialogResizer.prototype.updateButtons = function () {
    this.disp.btn_close.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5 - (AttackDialogResizer.BUTTONS_PADDING_SIDES + this.disp.btn_close.width * 0.5);
    this.disp.btn_close.y = this.disp.mc_bg.y - this.bgHeightNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_TOP + this.disp.btn_close.height * 0.5);
    this.disp.btn_help.x = this.disp.btn_close.x - this.disp.btn_close.width / 2 - this.disp.btn_help.width / 2;
    this.disp.btn_help.y = this.disp.btn_close.y;
    this.disp.btn_back.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_SIDES + this.disp.btn_back.width * 0.5);
    this.disp.btn_back.y = this.disp.btn_close.y;
    this.disp.btn_player_left.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_SIDES + 50);
    this.disp.btn_player_right.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5 - (AttackDialogResizer.BUTTONS_PADDING_SIDES + 50);
    this.disp.mc_bottom_800.btn_attack.x = (this.bgWidthNorm - AttackDialogResizer.WAVE_LIST_WIDTH) * -0.5;
    var __s24local0 = this.disp.mc_bg.width < AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS;
    this.disp.mc_playerInfo.btn_mini.visible = __s24local0;
    this.disp.mc_targetInfo.btn_mini.visible = __s24local0;
    this.disp.mc_playerInfo.mc_double_bg.visible = __s24local0;
    this.disp.mc_targetInfo.mc_double_bg.visible = __s24local0;
    this.disp.mc_playerInfo.btn_mini.x = this.disp.mc_playerInfo.mc_double_bg.width + this.disp.mc_playerInfo.btn_mini.width / 2;
    this.disp.mc_targetInfo.btn_mini.x = this.disp.mc_targetInfo.mc_double_bg.x - this.disp.mc_targetInfo.btn_mini.width / 2;
    this.updatePlayerBuffPosition();
  };
  AttackDialogResizer.prototype.updateDetailView = function () {
    this.disp.mc_detailView_mask.scaleX = this._scaleFactorX;
    this.disp.mc_detailView_mask.scaleY = this._scaleFactorY - 0.003;
    this.disp.mc_detailViewCastle.x = -400;
    this.disp.mc_detailViewCastle.y = -320;
    this.disp.mc_detailViewCastle.scaleX = 1;
    this.disp.mc_detailViewCastle.scaleY = 1;
    var __s26local0 = this.bgWidthNorm / 800;
    var __s26local1 = this.bgHeightNorm / 600;
    var __s26local2 = Math.max(__s26local0, __s26local1);
    if (this.disp.mc_detailViewBG.cacheCanvas) {
      this.disp.mc_detailViewBG.uncache();
    }
    this.disp.mc_detailViewBG.scaleX = this.disp.mc_detailViewBG.scaleY = __s26local2;
    this.disp.mc_detailViewBG.x = -this.bgWidthNorm / 2 - Math.max(0, (__s26local2 * 800 - this.bgWidthNorm) / 2);
    this.disp.mc_detailViewBG.y = -this.bgHeightNorm / 2 - Math.max(0, (__s26local2 * 600 - this.bgHeightNorm) / 2);
  };
  Object.defineProperty(AttackDialogResizer.prototype, "bgWidthNorm", {
    get: function () {
      return this.disp.mc_bg.width - 16;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogResizer.prototype, "bgHeightNorm", {
    get: function () {
      return this.disp.mc_bg.height - 16;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogResizer.prototype.scaleSideInfo = function (__s33param0, __s33param1) {
    var __s33local0 = AttackDialogResizer.MIN_SIDE_INFO_WIDTH;
    __s33param0.mc_double_bg.width = __s33local0 + 4;
    __s33param0.bg.width = __s33local0 + 4;
    if (__s33param1 == -1) {
      __s33param0.txt_generalInfo.width = __s33local0;
      __s33param0.txt_generalInfo.x = 0;
      __s33param0.txt_generalInfo_bg.x = 0;
      __s33param0.mc_double_bg.x = 0;
      __s33param0.bg.x = 0;
      __s33param0.txt_generalInfo_bg.width = __s33local0;
      __s33param0.mc_player.bg.width = __s33local0;
      __s33param0.mc_player.btn_details.x = __s33param0.mc_player.bg.x + __s33param0.mc_player.bg.width - __s33param0.mc_player.btn_details.width / 2;
      __s33param0.mc_general_bg.x = __s33local0 / 2 + 40;
      __s33param0.mc_abilites.x = __s33local0 / 2;
    }
    if (__s33param1 == 1) {
      __s33param0.txt_generalInfo.width = __s33local0;
      __s33param0.txt_generalInfo_bg.width = __s33local0;
      __s33param0.txt_generalInfo_bg.x = -__s33local0;
      __s33param0.txt_generalInfo.x = -__s33local0;
      __s33param0.mc_double_bg.x = -__s33param0.mc_double_bg.width;
      __s33param0.bg.x = -__s33param0.bg.width;
      __s33param0.mc_player.bg.width = __s33local0;
      __s33param0.mc_player.bg.x = 160 - __s33local0;
      __s33param0.mc_general_bg.x = -__s33local0 / 2 + 40;
      __s33param0.mc_abilites.x = -__s33local0 / 2;
    }
    var __s33local1 = -__s33local0 / 2 + 12 + 23;
    var __s33local2 = (__s33local0 - 24 - 46) / 4;
    for (var __s33local3 = 0; __s33local3 < 5; __s33local3++) {
      __s33param0.mc_abilites["mc_ability" + __s33local3].x = __s33local1 + __s33local2 * __s33local3;
    }
  };
  AttackDialogResizer.prototype.updatePlayerBuffPosition = function () {
    if (this.disp.mc_playerInfo.visible) {
      this.disp.mc_waveList.mc_bonus_left.x = this.disp.mc_playerInfo.mc_double_bg.width + 30;
    } else {
      this.disp.mc_waveList.mc_bonus_left.x = 30;
    }
    if (this.disp.mc_autofill_filter.mc_open.visible) {
      this.disp.mc_waveList.mc_bonus_right.x = this.disp.mc_bg.width - this.disp.mc_autofill_filter.mc_open.width - 45;
    } else {
      this.disp.mc_waveList.mc_bonus_right.x = this.disp.mc_bg.width - this.disp.mc_autofill_filter.mc_closed.width - 45;
    }
  };
  AttackDialogResizer.prototype.updateScale = function () {
    var __s45local0 = Math.min(this.disp.stage.stageWidth / this.disp.mc_bg.width, this.disp.stage.stageHeight / this.disp.mc_bg.height);
    this.disp.scaleX = this.disp.scaleY = __s45local0;
    this.centerDialogue();
  };
  AttackDialogResizer.prototype.centerDialogue = function () {
    this.disp.x = this.disp.stage.stageWidth * 0.5;
    this.disp.y = this.disp.stage.stageHeight * 0.5;
  };
  AttackDialogResizer.MAX_DIALOGUE_WIDTH = 1296;
  AttackDialogResizer.MAX_DIALOGUE_HEIGHT = 816;
  AttackDialogResizer.MIN_DIALOGUE_WIDTH = 1050;
  AttackDialogResizer.MIN_DIALOGUE_HEIGHT = 816;
  AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS = 1296;
  AttackDialogResizer.ORIGINAL_WIDTH = 1438;
  AttackDialogResizer.MIDDLE_PART_WIDTH = 632;
  AttackDialogResizer.SIDE_PART_WIDTH = 320;
  AttackDialogResizer.MIN_SIDE_INFO_WIDTH = 320;
  AttackDialogResizer.WAVE_LIST_WIDTH = 956;
  AttackDialogResizer.BUTTONS_PADDING_SIDES = 11;
  AttackDialogResizer.BUTTONS_PADDING_TOP = 11;
  return AttackDialogResizer;
}();
exports.AttackDialogResizer = __s0local1;
