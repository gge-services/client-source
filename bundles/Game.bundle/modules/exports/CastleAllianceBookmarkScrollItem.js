Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBookmarkScrollItem(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBookmarkScrollItem, __s1param0);
  CastleAllianceBookmarkScrollItem.prototype.customFillItem = function () {
    this._currentRenderer = CastleAllianceBookmarkScrollItem.RENDER.get(this.bookmarkVO.type.typeIndex);
    this._currentRenderer.render(this.disp, this.bookmarkVO);
    if (this._jumpToButton) {
      this._jumpToButton.destroy();
    }
    if (this._deleteBookmarkButton) {
      this._deleteBookmarkButton.destroy();
    }
    var __s5local0 = this._currentRenderer.getSublayer(this.disp);
    this._jumpToButton = new __dep_export_ButtonJumpToAllianceBookmark.ButtonJumpToAllianceBookmark(__s5local0.btn_jumpTo);
    this._deleteBookmarkButton = new __dep_export_ButtonDeleteAllianceBookmarkComponent.ButtonDeleteAllianceBookmarkComponent(__s5local0.btn_delete);
    this._jumpToButton.init(this.bookmarkVO.worldmapObjectVO);
    this._deleteBookmarkButton.init(this.bookmarkVO);
  };
  CastleAllianceBookmarkScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._jumpToButton) {
      this._jumpToButton.destroy();
    }
    if (this._deleteBookmarkButton) {
      this._deleteBookmarkButton.destroy();
    }
  };
  CastleAllianceBookmarkScrollItem.prototype.onMouseClick = function (__s13param0) {
    __s1param0.prototype.onMouseClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      var __s13local0 = this._currentRenderer.getSublayer(this.disp);
      switch (__s13param0.target) {
        case __s13local0.btn_jumpTo:
          this._jumpToButton.onClick();
          break;
        case __s13local0.btn_delete:
          this._deleteBookmarkButton.onClick();
      }
      if (__s13local0.mc_participants && __s13param0.target == __s13local0.mc_participants) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBookmarkShowAttackersDialog.CastleBookmarkShowAttackersDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(this.bookmarkVO));
      }
    }
  };
  Object.defineProperty(CastleAllianceBookmarkScrollItem.prototype, "bookmarkVO", {
    get: function () {
      return this.scrollItemVO.bookmark;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBookmarkScrollItem.__initialize_static_members = function () {
    var __s20local0;
    (__s20local0 = new Map()).set(__dep_export_AllianceBookmarkFreeAttackRenderer.AllianceBookmarkFreeAttackRenderer.ID, new __dep_export_AllianceBookmarkFreeAttackRenderer.AllianceBookmarkFreeAttackRenderer());
    __s20local0.set(__dep_export_AllianceBookmarkDefendRenderer.AllianceBookmarkDefendRenderer.ID, new __dep_export_AllianceBookmarkDefendRenderer.AllianceBookmarkDefendRenderer());
    __s20local0.set(__dep_export_AllianceBookmarkAttackOrderRenderer.AllianceBookmarkAttackOrderRenderer.ID, new __dep_export_AllianceBookmarkAttackOrderRenderer.AllianceBookmarkAttackOrderRenderer());
    CastleAllianceBookmarkScrollItem.RENDER = __s20local0;
  };
  return CastleAllianceBookmarkScrollItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.CastleAllianceBookmarkScrollItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonDeleteAllianceBookmarkComponent = require("gge-module:export_ButtonDeleteAllianceBookmarkComponent");
var __dep_export_ButtonJumpToAllianceBookmark = require("gge-module:export_ButtonJumpToAllianceBookmark");
var __dep_export_CastleBookmarkShowAttackersDialog = require("gge-module:export_CastleBookmarkShowAttackersDialog");
var __dep_export_AllianceBookmarkAttackOrderRenderer = require("gge-module:export_AllianceBookmarkAttackOrderRenderer");
var __dep_export_AllianceBookmarkDefendRenderer = require("gge-module:export_AllianceBookmarkDefendRenderer");
var __dep_export_AllianceBookmarkFreeAttackRenderer = require("gge-module:export_AllianceBookmarkFreeAttackRenderer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
