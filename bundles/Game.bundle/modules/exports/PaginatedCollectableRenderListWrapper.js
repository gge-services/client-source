Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_PaginationArrows = require("gge-module:export_PaginationArrows");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.EventDispatcher;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s1param0) {
  function PaginatedCollectableRenderListWrapper(__s3param0, __s3param1, __s3param2, __s3param3 = 6, __s3param4 = null, __s3param5 = null, __s3param6 = "mc_item", __s3param7 = "mc_itemHolder", __s3param8 = "parent.btn_info", __s3param9 = "mc_icon", __s3param10 = "txt_text", __s3param11 = "mc_textBackground", __s3param12 = __dep_exact_f855840627e6e145.int(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT), __s3param13 = null) {
    var __s3local0 = this;
    __s3local0.collectableRenderOption = 0;
    __s3local0.itemsInLayout = 0;
    __s3local0.leftBasicBtn = null;
    __s3local0.rightBasicBtn = null;
    __s3local0._currentPage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).disp = __s3param0;
    __s3local0._collectableRenderList = __s3param2;
    __s3local0.itemName = __s3param6;
    __s3local0.itemHolderName = __s3param7;
    __s3local0.iconHolder = __s3param9;
    __s3local0.itemTxt = __s3param10;
    __s3local0.itemInfoBtn = __s3param8;
    __s3local0.itemTxtBkgr = __s3param11;
    __s3local0.collectableList = __s3param1;
    __s3local0.collectableRenderOption = __s3param12;
    __s3local0.iconSize = __s3param13;
    __s3local0.btn_right = __s3param5;
    __s3local0.btn_left = __s3param4;
    __s3local0.itemsInLayout = __s3param3;
    if (__s3local0.btn_right && __s3local0.btn_left && __s3local0.itemsInLayout < __s3local0.collectableList.length) {
      __s3local0.btn_right.visible = true;
      __s3local0.btn_left.visible = true;
      __s3local0.paginationMember = new __dep_export_Pagination.Pagination(__s3local0, Math.ceil(__s3local0.collectableList.length / __s3local0.itemsInLayout));
      __s3local0.paginationMember.addControl(new __dep_export_PaginationArrows.PaginationArrows(__s3local0, __s3local0.paginationMember));
      __s3local0.btn_right.addEventListener(__s0local2.CLICK, __s3local0.bindFunction(__s3local0.onClick));
      __s3local0.btn_left.addEventListener(__s0local2.CLICK, __s3local0.bindFunction(__s3local0.onClick));
      __s3local0.paginationMember.reset();
    } else {
      if (__s3local0.btn_right) {
        __s3local0.btn_right.visible = false;
      }
      if (__s3local0.btn_left) {
        __s3local0.btn_left.visible = false;
      }
      __s3local0.fillInfo();
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PaginatedCollectableRenderListWrapper, __s1param0);
  PaginatedCollectableRenderListWrapper.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target) && this.paginationMember.handleClick(__s9param0)) {
      this.dispatchEvent(new __s0local0(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, false, false));
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.fillInfo = function () {
    var __s12local0;
    var __s12local1;
    var __s12local2 = 0;
    this.cleanRenderList(this._collectableRenderList);
    for (var __s12local3 = this._currentPage * this.itemsInLayout; __s12local3 < this._currentPage * this.itemsInLayout + this.itemsInLayout; __s12local3++) {
      __s12local1 = this.disp.getChildByName(this.itemName + __s12local2);
      __s12local2++;
      if (__s12local1) {
        if (__s12local3 >= this.collectableList.length) {
          __s12local1.visible = false;
        } else {
          __s12local1.visible = true;
          (__s12local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s12local1)).addItemMc(__s12local1.getChildByName(this.itemHolderName));
          __s12local0.addIconMc(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(__s12local0.itemMc, this.iconHolder));
          __s12local0.addInfoBtn(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(__s12local0.itemMc, this.itemInfoBtn));
          if (this.itemTxt) {
            __s12local0.addTextfield(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(__s12local0.itemMc, this.itemTxt));
          }
          if (this.itemTxtBkgr) {
            __s12local0.addTextfieldBgMc(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(__s12local0.itemMc, this.itemTxtBkgr));
          }
          this._collectableRenderList.push(__dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s12local0, this.collectableList.getItemByIndex(__s12local3), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(this.collectableRenderOption, this.iconSize)));
        }
      }
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.destroy = function () {
    if (this.rightBasicBtn && this.leftBasicBtn) {
      this.rightBasicBtn.disp.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
      this.leftBasicBtn.disp.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.cleanRenderList = function (__s24param0) {
    if (__s24param0) {
      while (__s24param0.length > 0) {
        __s24param0.pop().destroy();
      }
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.updatePages = function (__s29param0, __s29param1) {
    this._currentPage = __s29param1;
    this.fillInfo();
  };
  PaginatedCollectableRenderListWrapper.prototype.getLeftArrow = function () {
    return this.btn_left;
  };
  PaginatedCollectableRenderListWrapper.prototype.getRightArrow = function () {
    return this.btn_right;
  };
  PaginatedCollectableRenderListWrapper.prototype.changeArrow = function (__s35param0, __s35param1) {
    __s35param0.visible = __s35param1;
    return true;
  };
  Object.defineProperty(PaginatedCollectableRenderListWrapper.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    enumerable: true,
    configurable: true
  });
  return PaginatedCollectableRenderListWrapper;
}(__s0local1);
exports.PaginatedCollectableRenderListWrapper = __s0local3;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IPaginationContainer", "IPaginationArrowsContainer");
