Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleHeaderMessageItem() {
    this.headerMC = new Library.CastleInterfaceElements.CastleMessagesItem();
    this.headerMC.mc_iconholder.mouseEnabled = false;
    this.headerMC.mc_iconholder.mouseChildren = false;
    this.headerMC.changeTextFieldCacheScale(2);
  }
  CastleHeaderMessageItem.prototype.remove = function () {
    this.removeListeners();
    this._messageVO = null;
  };
  CastleHeaderMessageItem.prototype.destroy = function () {
    this.remove();
    this.headerMC = null;
  };
  CastleHeaderMessageItem.prototype.setItem = function (__s9param0, __s9param1) {
    this._messageVO = __s9param0;
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0.getCumulativeSecondsSinceSent());
    if (__s9local0 <= 0) {
      __s9local0++;
    }
    var __s9local1;
    var __s9local2 = __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.getTimeToString(__s9local0, __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    if (this.headerMC.scaleX == 1) {
      this.headerMC.btn_delete.visible = false;
      this.headerMC.btn_archive.visible = false;
    }
    this.headerMC.bg.mouseEnabled = true;
    this.headerMC.bg.mouseChildren = false;
    (__s9local1 = this.textFieldManager.registerTextField(this.headerMC.txt_date, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inbox_timeAgo", [__s9local2]), new __dep_exact_9e901e8e2483a22f_4.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE;
    __s9local1.mouseEnabled = false;
    __s9local1.autoFitToBounds = true;
    this.headerMC.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    (__s9local1 = this.textFieldManager.registerTextField(this.headerMC.txt_header, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s9param0.subject), new __dep_exact_9e901e8e2483a22f_4.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE_TITLE;
    __s9local1.mouseEnabled = false;
    __s9local1.autoFitToBounds = true;
    (__s9local1 = this.textFieldManager.registerTextField(this.headerMC.txt_sender, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s9param0.senderName), new __dep_exact_9e901e8e2483a22f_4.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE;
    __s9local1.mouseEnabled = false;
    __s9local1.autoFitToBounds = true;
    if (__s9param0.read) {
      this.headerMC.bg.gotoAndStop(1);
    } else {
      this.headerMC.bg.gotoAndStop(2);
    }
    if (this._messageVO.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_PRIVATE_OFFER) {
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    }
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X;
    this.headerMC.y = __s9param1 * 35 + 83;
    this.addListeners();
    this.loadMessageIcons();
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this.showArchiveBtn();
      this.showDeleteBtn();
    }
  };
  CastleHeaderMessageItem.prototype.loadMessageIcons = function () {
    __dep_exact_9e901e8e2483a22f_5.MovieClipHelper.clearMovieClip(this.headerMC.mc_iconholder);
    if (this.displayName && this.displayName != "") {
      if (this.messageIconClip) {
        this.messageIconClip.clipLoaded.removeAll();
      }
      this.messageIconClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.displayName, this.filePath, null, 0, false);
      if (this.messageIconClip.isLoaded) {
        this.onLoaded(this.messageIconClip);
      } else {
        this.messageIconClip.clipLoaded.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  CastleHeaderMessageItem.prototype.onLoaded = function (__s23param0 = null) {
    if (__s23param0) {
      var __s23local0 = __dep_exact_81dacdf05bd32292.castAs(__s23param0.currentshownDisplayObject, "MovieClip");
      if (__s23local0) {
        this.headerMC.mc_iconholder.addChild(__s23local0);
      }
    }
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "displayName", {
    get: function () {
      return this._messageVO.additionalIconName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeaderMessageItem.prototype, "filePath", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.displayName);
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.addListeners = function () {
    this.headerMC.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOverHeader));
    this.headerMC.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOutHeader));
    this.headerMC.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.headerMC.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  CastleHeaderMessageItem.prototype.removeListeners = function () {
    this.headerMC.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOverHeader));
    this.headerMC.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOutHeader));
    this.headerMC.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.headerMC.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
  };
  CastleHeaderMessageItem.prototype.onOfferChanged = function (__s35param0) {
    if (__s35param0.offerVO.id == this._messageVO.offerID) {
      this.loadMessageIcons();
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
      if (!__dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(this._messageVO.offerID)) {
        __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
      }
    }
  };
  CastleHeaderMessageItem.prototype.onClick = function (__s39param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s39param0.target)) {
      switch (__s39param0.target) {
        case this.headerMC.btn_delete:
          __dep_export_CastleModel.CastleModel.messageData.deleteMessage(this._messageVO);
          if (this.disp.stage && this._messageVO) {
            this.showDeleteBtn();
          }
          break;
        case this.headerMC.btn_archive:
          __dep_export_CastleModel.CastleModel.messageData.archiveMessage(this._messageVO);
          break;
        case this.headerMC.bg:
          this.handleHeaderClick();
      }
    }
  };
  CastleHeaderMessageItem.prototype.onMouseOver = function (__s44param0) {
    this.showArchiveBtn();
    this.showDeleteBtn();
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.onRollOverHeader = function (__s48param0) {
    this.showDeleteBtn();
    this.showArchiveBtn();
    this.headerMC.scaleX = this.headerMC.scaleY = 1.03;
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X - 1;
    this.headerMC.width = CastleHeaderMessageItem.HEADER_WIDTH_OVER;
  };
  CastleHeaderMessageItem.prototype.showDeleteBtn = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.headerMC.btn_delete, __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished());
    if (this.headerMC.btn_delete.enabled) {
      this.headerMC.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    } else {
      this.headerMC.btn_delete.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.headerMC.btn_delete.visible = this._messageVO.canBeDeleted();
  };
  CastleHeaderMessageItem.prototype.showArchiveBtn = function () {
    this.headerMC.btn_archive.visible = this._messageVO.canBeArchived();
    if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
      this.headerMC.btn_archive.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else if (__dep_export_CastleModel.CastleModel.messageData.isArchiveFull()) {
      this.headerMC.btn_archive.toolTipText = "dialog_inbox_archiveFull";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._messageVO, "MessageSpecialEventVO") && this._messageVO.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_SURVEY) {
      this.headerMC.btn_archive.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else {
      this.headerMC.btn_archive.toolTipText = "dialog_inbox_archiveMessage";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.headerMC.btn_archive, true);
    }
  };
  CastleHeaderMessageItem.prototype.onRollOutHeader = function (__s60param0) {
    this.headerMC.btn_delete.visible = __dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && this._messageVO.canBeDeleted();
    this.headerMC.btn_archive.visible = __dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && this._messageVO.canBeArchived();
    this.headerMC.scaleX = __s60param0.target.scaleY = 1;
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X;
    this.headerMC.width = CastleHeaderMessageItem.HEADER_WIDTH_OUT;
  };
  CastleHeaderMessageItem.prototype.handleHeaderClick = function () {
    if (this._messageVO) {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, this._messageVO);
    }
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "disp", {
    get: function () {
      return this.headerMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeaderMessageItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.isBattleLog = function () {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._messageVO, "MessageBattleLogVO");
  };
  CastleHeaderMessageItem.__initialize_static_members = function () {
    CastleHeaderMessageItem.SPECIAL_ID_USER_SURVEY = 128;
    CastleHeaderMessageItem.TEXTSIZE_MESSAGE = 10;
    CastleHeaderMessageItem.TEXTSIZE_MESSAGE_TITLE = 12;
    CastleHeaderMessageItem.HEADER_X = 232;
    CastleHeaderMessageItem.HEADER_WIDTH_OVER = 521.1;
    CastleHeaderMessageItem.HEADER_WIDTH_OUT = 507.9;
  };
  return CastleHeaderMessageItem;
}();
exports.CastleHeaderMessageItem = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
