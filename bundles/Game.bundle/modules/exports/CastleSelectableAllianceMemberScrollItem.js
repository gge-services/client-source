Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSelectableAllianceMemberScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSelectableAllianceMemberScrollItem, __s1param0);
  CastleSelectableAllianceMemberScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.itxt_might.textContentVO.numberValue = this.scrollItem.ownerInfoVO.might;
    this.disp.btn_selected.actLikeButton = true;
    this.disp.btn_selected.mouseChildren = false;
    this.setCheckBoxState();
  };
  CastleSelectableAllianceMemberScrollItem.prototype.setCheckBoxState = function () {
    if (this.scrollItem.selected) {
      this.disp.btn_selected.gotoAndStop(2);
      this.disp.btn_selected.toolTipText = "Bookmarks_alliance_participants_tooltip";
    } else {
      this.disp.btn_selected.gotoAndStop(1);
      this.disp.btn_selected.toolTipText = "Bookmarks_alliance_setParticipants_header";
    }
  };
  CastleSelectableAllianceMemberScrollItem.prototype.onMouseClick = function (__s11param0) {
    if (__s11param0.target == this.disp.btn_selected) {
      this.scrollItem.selected = !this.scrollItem.selected;
      this.setCheckBoxState();
    }
    __s1param0.prototype.onMouseClick.call(this, __s11param0);
  };
  return CastleSelectableAllianceMemberScrollItem;
}(require("gge-module:export_CastleAllianceMemberScrollItem").CastleAllianceMemberScrollItem);
exports.CastleSelectableAllianceMemberScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
