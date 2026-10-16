Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ButtonBookmarkConfigVO(__s3param0, __s3param1, __s3param2 = ButtonBookmarkConfigVO.ACTION_NONE) {
    this.enableButton = false;
    this.buttonAction = 0;
    this.enableButton = __s3param0;
    this.errorToolTipTextID = __s3param1;
    this.buttonAction = __s3param2;
  }
  ButtonBookmarkConfigVO.__initialize_static_members = function () {
    ButtonBookmarkConfigVO.ACTION_NONE = 0;
    ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK = 1;
    ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK = 2;
  };
  return ButtonBookmarkConfigVO;
}();
exports.ButtonBookmarkConfigVO = __s0local0;
__s0local0.__initialize_static_members();
