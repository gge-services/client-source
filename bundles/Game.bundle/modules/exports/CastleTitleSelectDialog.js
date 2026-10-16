Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_C2SSelectTitleVO = require("gge-module:export_C2SSelectTitleVO");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTitleSelectionItemVO = require("gge-module:export_CastleTitleSelectionItemVO");
var __s0local0 = function (__s1param0) {
  function CastleTitleSelectDialog() {
    var __s3local0 = this;
    __s3local0.isPrefixCategory = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTitleSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleSelectDialog, __s1param0);
  CastleTitleSelectDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_titleSelection_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rankTitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_system, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("system"));
    this.itxt_prefix_deselected = this.textFieldManager.registerTextField(this.dialogDisp.btn_prefix_deselected.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_prefix_selected = this.textFieldManager.registerTextField(this.dialogDisp.btn_prefix_selected.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_suffix_deselected = this.textFieldManager.registerTextField(this.dialogDisp.btn_suffix_deselected.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_suffix_selected = this.textFieldManager.registerTextField(this.dialogDisp.btn_suffix_selected.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.prefixLabels = [this.itxt_prefix_selected, this.itxt_prefix_deselected];
    this.suffixLabels = [this.itxt_suffix_selected, this.itxt_suffix_deselected];
    var __s5local0 = [this.dialogDisp.btn_prefix_deselected, this.dialogDisp.btn_suffix_deselected, this.dialogDisp.mc_itemContainer.item0, this.dialogDisp.mc_itemContainer.item1, this.dialogDisp.mc_itemContainer.item2, this.dialogDisp.mc_itemContainer.item3];
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.mc_slider.btn_slider].concat(__s5local0));
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local3.mouseChildren = false;
        }
      }
    }
    this._scrollList = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp);
    this._scrollList.scrollItemClass = __dep_export_CastleTitleSelectionItem.CastleTitleSelectionItem;
  };
  CastleTitleSelectDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.titleData.isSuffixAvailable;
    var __s11local0 = "dialog_titleSelection_description";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s11local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    this.clearLabels(this.prefixLabels);
    this.clearLabels(this.suffixLabels);
    this.isPrefixCategory = true;
    this._currentPrefix = __dep_export_CastleModel.CastleModel.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX);
    this._currentSuffix = __dep_export_CastleModel.CastleModel.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    this.updateTitle(this._currentPrefix);
    this.updateTitle(this._currentSuffix);
    this.updateTitleList();
    this.updateButtons();
  };
  CastleTitleSelectDialog.prototype.clearLabels = function (__s13param0) {
    if (__s13param0 != null) {
      for (var __s13local0 = 0, __s13local1 = __s13param0; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.textContentVO.textId = "";
        }
      }
    }
  };
  CastleTitleSelectDialog.prototype.addEventListenerOnShow = function () {
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onSelectTitle));
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleSelectDialog.prototype.removeEventListenerOnHide = function () {
    this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onSelectTitle));
    __dep_export_CastleModel.CastleModel.titleData.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleSelectDialog.prototype.onSelectTitle = function (__s23param0) {
    var __s23local0 = __s23param0.scrollItem.selectionItemVO.title;
    this.updateTitle(__s23local0);
    this.updateTitleList();
  };
  CastleTitleSelectDialog.prototype.onTitlesUpdate = function (__s25param0) {
    this.clearLabels(this.prefixLabels);
    this.clearLabels(this.suffixLabels);
    this._currentPrefix = this.validateCurrentlySelected(this._currentPrefix);
    this._currentSuffix = this.validateCurrentlySelected(this._currentSuffix);
    this.updateTitle(this._currentPrefix);
    this.updateTitle(this._currentSuffix);
    if (this.isPrefixCategory || __dep_export_CastleModel.CastleModel.titleData.isSuffixAvailable) {
      this.updateTitleList();
      this.updateButtons();
    } else {
      this.toggleCategory();
    }
  };
  CastleTitleSelectDialog.prototype.validateCurrentlySelected = function (__s29param0) {
    for (var __s29local0 = 0, __s29local1 = __dep_export_CastleModel.CastleModel.titleData.getDisplayableTitles(__s29param0.displayType); __s29local0 < __s29local1.length; __s29local0++) {
      var __s29local2 = __s29local1[__s29local0];
      if (__s29local2.titleSystem == __s29param0.titleSystem) {
        return __s29local2;
      }
    }
    return __dep_export_CastleModel.CastleModel.titleData.getSelectedTitleByDisplayType(__s29param0.displayType);
  };
  CastleTitleSelectDialog.prototype.updateTitleList = function () {
    this._scrollList.clear();
    if (this.availableTitles != null) {
      for (var __s34local0 = 0, __s34local1 = this.availableTitles; __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        if (__s34local2 !== undefined) {
          var __s34local3 = __s34local2.isSuffix ? __s34local2.titleSystem == this._currentSuffix.titleSystem : __s34local2.titleSystem == this._currentPrefix.titleSystem;
          var __s34local4 = new __dep_export_CastleTitleSelectionItemVO.CastleTitleSelectionItemVO(__s34local2, __s34local3);
          this._scrollList.pushContent(__s34local4);
        }
      }
    }
    this._scrollList.initList(this._scrollList.currentStartIndex);
  };
  CastleTitleSelectDialog.prototype.updateTitle = function (__s40param0) {
    if (__s40param0 && __s40param0 != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
      if (__s40param0.displayType == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX) {
        this._currentPrefix = __s40param0;
      } else {
        this._currentSuffix = __s40param0;
      }
      var __s40local0 = __s40param0.isSuffix ? this.suffixLabels : this.prefixLabels;
      if (__s40local0 != null) {
        for (var __s40local1 = 0, __s40local2 = __s40local0; __s40local1 < __s40local2.length; __s40local1++) {
          var __s40local3 = __s40local2[__s40local1];
          if (__s40local3 !== undefined) {
            __s40local3.textContentVO.textId = __s40param0.textID;
          }
        }
      }
    }
  };
  CastleTitleSelectDialog.prototype.updateButtons = function () {
    this.dialogDisp.btn_prefix_selected.visible = this.isPrefixCategory;
    this.dialogDisp.btn_prefix_deselected.visible = !this.isPrefixCategory;
    this.dialogDisp.btn_suffix_selected.visible = !this.isPrefixCategory && __dep_export_CastleModel.CastleModel.titleData.isSuffixAvailable;
    this.dialogDisp.btn_suffix_deselected.visible = this.isPrefixCategory && __dep_export_CastleModel.CastleModel.titleData.isSuffixAvailable;
    if (this._currentSuffix && this._currentSuffix.isAForcedTitle) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_suffix_deselected, false);
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_suffix_deselected, true);
    }
  };
  CastleTitleSelectDialog.prototype.onClick = function (__s53param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      switch (__s53param0.target) {
        case this.dialogDisp.btn_yes:
          this.confirmSelection();
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_prefix_deselected:
        case this.dialogDisp.btn_suffix_deselected:
          this.toggleCategory();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_titleSelection"));
      }
    }
  };
  CastleTitleSelectDialog.prototype.toggleCategory = function () {
    this.isPrefixCategory = !this.isPrefixCategory;
    this.updateTitleList();
    this.updateButtons();
  };
  CastleTitleSelectDialog.prototype.confirmSelection = function () {
    this.hide();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectTitleVO.C2SSelectTitleVO(this._currentPrefix.titleSystem, this._currentSuffix ? this._currentSuffix.titleSystem : ""));
  };
  Object.defineProperty(CastleTitleSelectDialog.prototype, "availableTitles", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.getDisplayableTitles(this.isPrefixCategory ? __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX : __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSelectDialog.__initialize_static_members = function () {
    CastleTitleSelectDialog.NAME = "CastleTitleSelection";
  };
  return CastleTitleSelectDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTitleSelectDialog = __s0local0;
var __dep_export_CastleTitleData = require("gge-module:export_CastleTitleData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_CastleTitleSelectionItem = require("gge-module:export_CastleTitleSelectionItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
