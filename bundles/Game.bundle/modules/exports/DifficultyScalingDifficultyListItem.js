Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MouseEvent;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __s0local1 = function (__s1param0) {
  function DifficultyScalingDifficultyListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("EventDifficultySelectItem"))(), __s3param1) || this;
    __s3local0._data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingDifficultyListItem, __s1param0);
  DifficultyScalingDifficultyListItem.prototype.fill = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.castleAchievementData.isDifficultyUnlocked(this.difficulty.difficultyID);
    if (__s5local0 && this.difficulty.difficultyType.difficultyTypeID > 10 && this.difficulty.unlockC2 > 0) {
      __s5local0 = false;
    }
    var __s5local1 = this.difficulty.isLocked && !__s5local0;
    this.itemMc.mc_locked.visible = __s5local1;
    this.itemMc.mouseChildren = false;
    this.itemMc.actLikeButton = true;
    if (__s5local1) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_icon);
    } else {
      __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.itemMc.mc_icon, this.difficulty, 30, 30, null);
    }
    this.itemMc.mc_unselected.visible = !this.selected;
    this.itemMc.mc_selected.visible = this.selected;
    this.itemMc.mc_over.visible = false;
    this.itemMc.mc_down.visible = false;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_selected.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulty.name_textID)))).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_unselected.txt_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulty.name_textID)))).autoFitToBounds = true;
  };
  DifficultyScalingDifficultyListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingDifficultyListItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseOver = function (__s16param0) {
    this.itemMc.mc_over.visible = true;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseOut = function (__s18param0) {
    this.itemMc.mc_over.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseDown = function (__s20param0) {
    this.itemMc.mc_down.visible = true;
    this.itemMc.mc_over.visible = false;
  };
  DifficultyScalingDifficultyListItem.prototype.onMouseUp = function (__s22param0) {
    this.itemMc.mc_down.visible = false;
  };
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "difficulty", {
    get: function () {
      return this._data.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "selected", {
    get: function () {
      return this._data.selected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingDifficultyListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingDifficultyListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.DifficultyScalingDifficultyListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
