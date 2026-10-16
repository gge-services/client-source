Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem() {
    var __s3local0 = this;
    __s3local0.isSelected = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem, __s1param0);
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.fill = function () {
    if (this.data) {
      var __s5local0 = this.getItemMc();
      __s5local0.actLikeButton = true;
      __s5local0.mouseChildren = false;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5local0.mc_icon);
      __s5local0.mc_discount.visible = false;
      var __s5local1 = new __dep_exact_92d05af59ee2ff30.TextVO(this.preBuilt.getNameText());
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_value, __s5local1).visible = this.isSelected;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_value_unselected, __s5local1).visible = !this.isSelected;
      __s5local0.mc_selected.visible = this.isSelected;
      __s5local0.mc_unselected.visible = !this.isSelected;
      if (this.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
        var __s5local2 = "PreBuildCastleIcon_" + this.preBuilt.preBuiltCastleID + "_" + this.type;
        __s5local0.mc_icon.addChild(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(__s5local2, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s5local2)));
      } else {
        var __s5local3 = this.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER ? "_Temp" : "";
        __s5local0.mc_icon.addChild(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal("PreBuildCastleIcon_" + this.preBuilt.preBuiltCastleID + __s5local3, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialog.CastleSpecialServerPreBuildCastleSelectionDialog.NAME)));
      }
      __s5local0.mc_vip.visible = this.preBuilt.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2) > 200000;
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "preBuilt", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "index", {
    get: function () {
      if (this.data) {
        return this.data[1];
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "onSelectFunction", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "type", {
    get: function () {
      return this.data[3];
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.onClick = function (__s20param0) {
    if (!this.isSelected) {
      this.isSelected = true;
      this.fill();
      this.onSelectFunction(this.index);
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.unSelect = function () {
    this.isSelected = false;
    this.fill();
  };
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.select = function () {
    this.isSelected = true;
    this.fill();
  };
  return CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem;
}(require("gge-module:export_AInfiniteScrollListItem").AInfiniteScrollListItem);
exports.CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialog = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogProperties");
