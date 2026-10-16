Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetSocialPIDVO = require("gge-module:export_C2SGetSocialPIDVO");
var __dep_export_CastleBuddyListDataEvent = require("gge-module:export_CastleBuddyListDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleBuddylistPanel() {
    var __s3local0 = this;
    __s3local0.itemsPerPage = 0;
    __s3local0.maxPage = 0;
    __s3local0.currentPage = 0;
    __s3local0.buddyholderPosX = 50;
    __s3local0.listenerArray = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.BuddylistPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuddylistPanel, __s1param0);
  CastleBuddylistPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.itemsPerPage = 0;
    this.maxPage = 0;
    this.currentPage = 0;
    this.arrow_left = this.buddylistPanel.btn_arrow_left;
    this.arrow_right = this.buddylistPanel.btn_arrow_right;
    this.arrow_first = this.buddylistPanel.btn_arrow_first;
    this.arrow_last = this.buddylistPanel.btn_arrow_last;
    this.textFieldManager.registerTextField(this.buddylistPanel.btn_addbuddy.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("btn_morefriends_social"));
    this.buddylistPanel.btn_addbuddy.visible = this.env.invitefriends;
    this.controller.addEventListener(__dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent.CHANGE_BUDDYDATA, this.bindFunction(this.onChangeBuddyData));
  };
  CastleBuddylistPanel.prototype.destroy = function () {
    this.removeChildListener();
    __s1param0.prototype.destroy.call(this);
    this.controller.removeEventListener(__dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent.CHANGE_BUDDYDATA, this.bindFunction(this.onChangeBuddyData));
  };
  CastleBuddylistPanel.prototype.onChangeBuddyData = function (__s9param0) {
    this.fillItems();
  };
  CastleBuddylistPanel.prototype.onClick = function (__s11param0) {
    if (!this.isLocked) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.buddylistPanel.btn_addbuddy:
          __dep_export_CastleModel.CastleModel.socialData.inviteFriends();
          break;
        case this.arrow_left:
          this.currentPage--;
          this.fillItems();
          break;
        case this.arrow_right:
          this.currentPage++;
          this.fillItems();
          break;
        case this.arrow_first:
          this.currentPage = 0;
          this.fillItems();
          break;
        case this.arrow_last:
          this.currentPage = this.maxPage;
          this.fillItems();
      }
    }
  };
  CastleBuddylistPanel.prototype.onClickBuddyItem = function (__s15param0) {
    if (!this.isLocked) {
      var __s15local0 = __s15param0.target.buddyData;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSocialPIDVO.C2SGetSocialPIDVO(__s15local0.pln));
    }
  };
  CastleBuddylistPanel.prototype.fillItems = function () {
    this.initArrows(__dep_export_CastleModel.CastleModel.buddyListData.amountAllFriends);
    for (var __s18local0 = this.currentPage * this.itemsPerPage, __s18local1 = __s18local0; __s18local1 < __s18local0 + this.itemsPerPage; __s18local1++) {
      var __s18local2 = __s18local1 - __s18local0;
      var __s18local3 = this.buddylistPanel.mc_buddyitemholder.getChildByName("i" + __s18local2);
      __s18local3.mouseChildren = false;
      __s18local3.visible = true;
      __s18local3.gotoAndStop(1);
      if (__s18local1 < __dep_export_CastleModel.CastleModel.buddyListData.socialBuddyList.length) {
        var __s18local4 = __dep_export_CastleModel.CastleModel.buddyListData.socialBuddyList[__s18local1];
        if (__s18local3.itxt_name) {
          __s18local3.itxt_name.textContentVO.stringValue = __s18local4.playerName ?? "";
        } else {
          __s18local3.itxt_name = this.textFieldManager.registerTextField(__s18local3.txt_name, __s18local4.playerName != null ? new __dep_exact_92d05af59ee2ff30_1.TextVO(__s18local4.playerName) : new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
        }
        __s18local3.buddyData = __s18local4;
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s18local3.mc_holder);
        if (__s18local4.thumbUrl && __s18local4.thumbUrl != "" && __s18local4.thumbUrl.search(CastleBuddylistPanel.NOPIC_PATTERN) == -1) {
          var __s18local5 = new __dep_exact_81dacdf05bd32292.Loader();
          var __s18local6 = new __dep_exact_81dacdf05bd32292_1.URLRequest(__s18local4.thumbUrl);
          __s18local5.load(__s18local6);
          __s18local5.contentLoaderInfo.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onPicLoadComplete));
          __s18local3.mc_holder.addChild(__s18local5);
        }
        __s18local3.gotoAndStop(2);
      } else {
        __s18local3.visible = false;
      }
    }
  };
  CastleBuddylistPanel.prototype.onPicLoadComplete = function (__s27param0) {
    var __s27local0 = __s27param0.target.loader;
    var __s27local1 = __s27local0.getBounds(null);
    var __s27local2 = CastleBuddylistPanel.CITEM_HEIGHT / __s27local1.height;
    __s27local0.scaleX = __s27local0.scaleY = __s27local2 * CastleBuddylistPanel.AVATAR_SCALE_FACTOR;
    __s27local0.y = -CastleBuddylistPanel.CITEM_HEIGHT * CastleBuddylistPanel.AVATAR_SCALE_FACTOR / 2;
    __s27local0.x = -__s27local1.width * (__s27local2 * CastleBuddylistPanel.AVATAR_SCALE_FACTOR) / 2;
    __s27local0.contentLoaderInfo.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onPicLoadComplete));
  };
  CastleBuddylistPanel.prototype.initArrows = function (__s29param0) {
    if (__s29param0 < 1) {
      this.arrow_right.visible = this.arrow_left.visible = this.arrow_first.visible = this.arrow_last.visible = false;
    }
    this.maxPage = __dep_exact_f855840627e6e145.int((__s29param0 - 1) / this.itemsPerPage);
    this.arrow_right.visible = this.maxPage > 0 && this.currentPage < this.maxPage;
    this.arrow_left.visible = this.maxPage > 0 && this.currentPage > 0;
    this.arrow_first.visible = this.currentPage > 0;
    this.arrow_last.visible = this.currentPage < this.maxPage;
  };
  CastleBuddylistPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.updatePosition();
  };
  CastleBuddylistPanel.prototype.removeChildListener = function () {
    while (this.listenerArray.length > 0) {
      this.listenerArray[0].removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClickBuddyItem));
      this.listenerArray.shift();
    }
  };
  CastleBuddylistPanel.prototype.changeItemsPerPage = function (__s38param0) {
    this.removeChildListener();
    if (this.buddylistPanel.visible && __s38param0 != this.itemsPerPage) {
      this.currentPage = 0;
      this.itemsPerPage = __s38param0;
      while (this.buddylistPanel.mc_buddyitemholder.numChildren > this.itemsPerPage) {
        var __s38local0 = __dep_exact_f855840627e6e145.int(this.buddylistPanel.mc_buddyitemholder.numChildren - 1);
        if (__s38local0 <= this.buddylistPanel.mc_buddyitemholder.numChildren && __s38local0 >= 0) {
          this.buddylistPanel.mc_buddyitemholder.removeChildAt(__s38local0);
        }
      }
      while (this.buddylistPanel.mc_buddyitemholder.numChildren < this.itemsPerPage) {
        var __s38local1 = new Library.CastleInterfaceElements.BuddylistItem();
        __s38local1.name = "i" + this.buddylistPanel.mc_buddyitemholder.numChildren;
        __s38local1.x = this.buddylistPanel.mc_buddyitemholder.numChildren * CastleBuddylistPanel.BUDDY_ITEM_WIDTH;
        __s38local1.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClickBuddyItem));
        this.buddylistPanel.mc_buddyitemholder.addChild(__s38local1);
      }
      this.buddylistPanel.mc_buddyitemholder.x = this.buddyholderPosX;
      this.arrow_right.x = this.arrow_last.x = this.buddylistPanel.mc_buddyitemholder.x - CastleBuddylistPanel.BUDDY_ITEM_WIDTH / 2 + this.itemsPerPage * CastleBuddylistPanel.BUDDY_ITEM_WIDTH + 20;
      this.fillItems();
    }
  };
  CastleBuddylistPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.buddylistPanel.background.width = this.disp.stage.stageWidth;
      this.buddyholderPosX = CastleBuddylistPanel.BUDDYHOLDER_STD_POSX;
      this.changeItemsPerPage(this.numBuddys);
      this.buddylistPanel.btn_addbuddy.x = this.disp.stage.stageWidth - this.buddylistPanel.btn_addbuddy.width / 2 - 70;
    }
  };
  Object.defineProperty(CastleBuddylistPanel.prototype, "numBuddys", {
    get: function () {
      var __s49local0 = 0;
      if ((__s49local0 = this.env.invitefriends ? __dep_exact_f855840627e6e145.int((this.buddylistPanel.background.width - this.buddyholderPosX) / CastleBuddylistPanel.BUDDY_ITEM_WIDTH - 1) : __dep_exact_f855840627e6e145.int((this.buddylistPanel.background.width - this.buddyholderPosX) / CastleBuddylistPanel.BUDDY_ITEM_WIDTH)) < 0) {
        __s49local0 = 0;
      }
      return __s49local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddylistPanel.prototype, "buddylistPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuddylistPanel.__initialize_static_members = function () {
    CastleBuddylistPanel.NAME = "BuddylistPanel";
    CastleBuddylistPanel.BUDDY_PANEL_HEIGHT = 160;
    CastleBuddylistPanel.NOPIC_PATTERN = new RegExp("nopic", "i");
    CastleBuddylistPanel.BUDDYHOLDER_STD_POSX = 149;
    CastleBuddylistPanel.AVATAR_SCALE_FACTOR = 1;
    CastleBuddylistPanel.BUDDY_ITEM_WIDTH = 120;
    CastleBuddylistPanel.CITEM_WIDTH = 90;
    CastleBuddylistPanel.CITEM_HEIGHT = 90;
  };
  return CastleBuddylistPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleBuddylistPanel = __s0local2;
__s0local2.__initialize_static_members();
