Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTitleSelectionItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_title = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_titleName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_title.mouseEnabled = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleSelectionItem, __s1param0);
  CastleTitleSelectionItem.prototype.customFillItem = function () {
    this.itxt_title.textContentVO.textId = this.selectionItemVO.title.textID;
    this.disp.background.gotoAndStop(1 + (this.selectionItemVO.selected ? 1 : 0));
    this.disp.toolTipText = this.selectionItemVO.selected ? "dialog_titleSelection_selected_tooltip" : "dialog_titleSelection_select_tooltip";
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.disp.icon_titleSystem, this.selectionItemVO.title.titleSystem, CastleTitleSelectionItem.SYSTEM_ICON_DIMENSION);
  };
  Object.defineProperty(CastleTitleSelectionItem.prototype, "selectionItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSelectionItem.__initialize_static_members = function () {
    CastleTitleSelectionItem.SYSTEM_ICON_DIMENSION = new __s0local0(25, 21.5);
  };
  return CastleTitleSelectionItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastleTitleSelectionItem = __s0local1;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
__s0local1.__initialize_static_members();
