Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_DetailViewCreator = require("gge-module:export_DetailViewCreator");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function AttackDialogDetailView() {}
  AttackDialogDetailView.prototype.init = function (__s5param0, __s5param1) {
    this.mcBG = __s5param0;
    this.mcCastle = __s5param1;
    this._fightDetailView = __dep_export_DetailViewCreator.DetailViewCreator.createDetailViewFromIWorldmapObject(this.attackInfoVO.detailViewObject, this.mcBG, this.mcCastle, __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.attackInfoVO ? this.attackInfoVO.sourceArea.kingdomID : __dep_export_CastleModel.CastleModel.defenceData.areaInfo.kingdomID));
    this.mcCastle.addEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.mcCastle.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.mcCastle.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.controller.onShowSpyInfo.add(this.bindFunction(this.onSpyInfoShown));
  };
  AttackDialogDetailView.prototype.onSpyInfoShown = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4, __s7param5, __s7param6, __s7param7) {
    var __s7local0;
    if (__s7param2 === undefined) {
      __s7param2 = true;
    }
    if (__s7param3 === undefined) {
      __s7param3 = false;
    }
    if (__s7param4 === undefined) {
      __s7param4 = false;
    }
    if (__s7param5 === undefined) {
      __s7param5 = true;
    }
    if (__s7param6 === undefined) {
      __s7param6 = "";
    }
    if (__s7param7 === undefined) {
      __s7param7 = true;
    }
    switch (__s7param6) {
      case "left":
        __s7local0 = this._fightDetailView.layerLeft;
        break;
      case "right":
        __s7local0 = this._fightDetailView.layerRight;
        break;
      case "middle":
        __s7local0 = this._fightDetailView.layerMiddle;
        break;
      case "keep":
        __s7local0 = this._fightDetailView.layerKeep;
        break;
      case "reserve":
        __s7local0 = new __s0local0();
    }
    if (__s7param7) {
      this._fightDetailView.selectedTarget = __s7local0;
    }
    if (__s7local0) {
      this._fightDetailView.addGlow(__s7local0);
    }
  };
  AttackDialogDetailView.prototype.onMouseOut = function (__s18param0) {
    this.mouseOutOfCastleView(__s18param0);
    this.onMouseOutOfCastle(__s18param0);
  };
  AttackDialogDetailView.prototype.onClick = function (__s20param0) {
    this.clickOnCastleView(__s20param0);
  };
  AttackDialogDetailView.prototype.clickOnCastleView = function (__s22param0) {
    if (this._fightDetailView) {
      if (this._fightDetailView.selectedTarget == __s22param0.target) {
        this._fightDetailView.selectedTarget = null;
        this._fightDetailView.removeGlow();
        return;
      }
      if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s22param0.target, this._fightDetailView.castleLayer)) {
        this._fightDetailView.selectedTarget = null;
        this.updateGlowAndSpyInfoByTarget(__s22param0.target);
        switch (__s22param0.target) {
          case this._fightDetailView.layerKeep:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
            break;
          case this._fightDetailView.layerLeft:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsLeft, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left");
            break;
          case this._fightDetailView.layerRight:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsRight, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right");
            break;
          case this._fightDetailView.layerMiddle:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
        }
      }
    }
  };
  AttackDialogDetailView.prototype.updateGlowAndSpyInfoByTarget = function (__s28param0) {
    if (this._fightDetailView) {
      if (__s28param0 == this._fightDetailView.layerLeft) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsLeft, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left", false);
      } else if (__s28param0 == this._fightDetailView.layerRight) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsRight, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right", false);
      } else if (__s28param0 == this._fightDetailView.layerMiddle) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle", false);
      } else if (__s28param0 == this._fightDetailView.layerKeep) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep", false);
      }
    }
  };
  AttackDialogDetailView.prototype.onMouseOver = function (__s35param0) {
    if (this._fightDetailView && (this.isFrontLayer(__s35param0) || this.isKeepLayer(__s35param0) || this.isRightFlankLayer(__s35param0) || this.isLeftFlankLayer(__s35param0) || this.isMiddleFlankLayer(__s35param0) || this.isMoatLayer(__s35param0))) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
    if (!this._fightDetailView.selectedTarget) {
      this.updateGlowAndSpyInfoByTarget(__s35param0.target);
    }
  };
  AttackDialogDetailView.prototype.isMoatLayer = function (__s39param0) {
    return __s39param0.target == this._fightDetailView.layerMoat;
  };
  AttackDialogDetailView.prototype.isMiddleFlankLayer = function (__s41param0) {
    return __s41param0.target == this._fightDetailView.layerMiddle;
  };
  AttackDialogDetailView.prototype.isLeftFlankLayer = function (__s43param0) {
    return __s43param0.target == this._fightDetailView.layerLeft;
  };
  AttackDialogDetailView.prototype.isRightFlankLayer = function (__s45param0) {
    return __s45param0.target == this._fightDetailView.layerRight;
  };
  AttackDialogDetailView.prototype.isKeepLayer = function (__s47param0) {
    return __s47param0.target == this._fightDetailView.layerKeep;
  };
  AttackDialogDetailView.prototype.isFrontLayer = function (__s49param0) {
    return __s49param0.target == this._fightDetailView.layerFront;
  };
  AttackDialogDetailView.prototype.onMouseOutOfCastle = function (__s51param0) {
    if (!__s51param0.relatedTarget || !__s51param0.relatedTarget.isInContainer(this.unitInfo)) {
      if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s51param0.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
      if (this._fightDetailView) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
    }
  };
  AttackDialogDetailView.prototype.mouseOutOfCastleView = function (__s58param0) {
    if (this._fightDetailView && (!__s58param0.nativeEvent || !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s58param0.relatedObject, this.unitInfo))) {
      if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s58param0.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
      switch (__s58param0.target) {
        case this._fightDetailView.layerKeep:
        case this._fightDetailView.layerLeft:
        case this._fightDetailView.layerRight:
        case this._fightDetailView.layerMiddle:
          this._fightDetailView.removeGlow();
          if (!this._fightDetailView.selectedTarget) {
            this.controller.onHideSpyInfo.dispatch();
          }
      }
    }
  };
  AttackDialogDetailView.prototype.destroy = function () {
    if (this._fightDetailView) {
      this._fightDetailView.selectedTarget = null;
      this._fightDetailView.clearView();
      if (this.mcCastle && this.mcCastle.contains(this._fightDetailView.castleLayer)) {
        this.mcCastle.removeChild(this._fightDetailView.castleLayer);
      }
    }
    if (this.mcCastle) {
      this.mcCastle.removeEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.mcCastle.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.mcCastle.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    }
    this.controller.onShowSpyInfo.remove(this.bindFunction(this.onSpyInfoShown));
  };
  Object.defineProperty(AttackDialogDetailView.prototype, "unitInfo", {
    get: function () {
      return this.controller.spyInfoMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDetailView.__initialize_static_members = function () {};
  return AttackDialogDetailView;
}();
exports.AttackDialogDetailView = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
