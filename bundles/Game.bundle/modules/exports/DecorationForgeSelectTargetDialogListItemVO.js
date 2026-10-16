Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DecorationForgeSelectTargetDialogListItemVO(__s3param0) {
    this._isSelected = false;
    this._selectVO = __s3param0;
    this._searchName = this.buildingVO.buildingVO.getInfoTooltipLine1().toLowerCase();
  }
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "buildingVO", {
    get: function () {
      return this._selectVO.itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "searchName", {
    get: function () {
      return this._searchName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (__s11param0) {
      this._isSelected = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "selectVO", {
    get: function () {
      return this._selectVO;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectTargetDialogListItemVO;
}();
exports.DecorationForgeSelectTargetDialogListItemVO = __s0local0;
