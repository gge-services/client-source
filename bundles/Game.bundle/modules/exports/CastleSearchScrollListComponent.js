Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.FocusEvent;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function CastleSearchScrollListComponent(__s3param0, __s3param1, __s3param2) {
    this.inputFieldName = "txt_search";
    this.disp = __s3param0;
    this.scrollList = __s3param1;
    this.searchPredicate = __s3param2;
  }
  CastleSearchScrollListComponent.prototype.addEventListener = function () {
    this.disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    var __s5local0 = this.disp[this.inputFieldName];
    __s5local0.addEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    __s5local0.addEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    __s5local0.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
  };
  CastleSearchScrollListComponent.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    var __s7local0 = this.disp[this.inputFieldName];
    __s7local0.removeEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    __s7local0.removeEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    __s7local0.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
  };
  CastleSearchScrollListComponent.prototype.show = function () {
    this.addEventListener();
    this.scrollToStart();
    this.searchField = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp[this.inputFieldName], new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = __dep_exact_81dacdf05bd32292_2.TextFieldType.INPUT;
    this.defaultSearchText = this.searchField.text;
  };
  CastleSearchScrollListComponent.prototype.hide = function () {
    this.removeEventListener();
  };
  CastleSearchScrollListComponent.prototype.scrollToStart = function () {
    this.scrollList.initList();
  };
  CastleSearchScrollListComponent.prototype.onClick = function (__s15param0) {
    if (__s15param0.target == this.disp.btn_search && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target) && this.searchField.text != this.defaultSearchText) {
      this.scrollToEntry(this.searchField.text);
    }
  };
  CastleSearchScrollListComponent.prototype.onKeyDown = function (__s18param0) {
    if (__s18param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER && this.searchField.text != "" && this.searchField.text != this.defaultSearchText) {
      document.activeElement.blur();
      this.scrollToEntry(this.searchField.text);
    }
  };
  CastleSearchScrollListComponent.prototype.scrollToEntry = function (__s21param0) {
    this.onStartSearch();
    var __s21local0;
    for (var __s21local1 = __dep_exact_f855840627e6e145.int(this.scrollList.voList.length), __s21local2 = 0; __s21local2 < __s21local1; __s21local2++) {
      var __s21local3 = this.scrollList.voList[__s21local2];
      if (this.searchPredicate(__s21local3, __s21param0)) {
        __s21local0 = __s21local3;
        break;
      }
    }
    if (__s21local0) {
      this.centerOnItemVO(__s21local2);
      this.onFind(__s21local0);
    } else if (this.notFoundCallback) {
      this.notFoundCallback();
    } else {
      this.scrollToStart();
    }
  };
  CastleSearchScrollListComponent.prototype.onStartSearch = function () {
    if (this.searchStartedCallback) {
      this.searchStartedCallback();
    }
  };
  CastleSearchScrollListComponent.prototype.onFind = function (__s32param0) {
    if (this.foundCallback) {
      for (var __s32local0 = __dep_exact_f855840627e6e145.int(this.scrollList.veList.length), __s32local1 = 0; __s32local1 < __s32local0; __s32local1++) {
        var __s32local2 = this.scrollList.veList[__s32local1];
        if (__s32local2.scrollItemVO == __s32param0) {
          this.foundCallback(__s32local2);
          return;
        }
      }
    }
  };
  CastleSearchScrollListComponent.prototype.centerOnItemVO = function (__s38param0) {
    var __s38local0 = __dep_exact_f855840627e6e145.int(this.scrollList.itemsVisibleAtOnce / 2);
    var __s38local1 = __dep_exact_f855840627e6e145.int(Math.max(__s38param0 - __s38local0, 0));
    this.scrollList.initList(__s38local1);
  };
  CastleSearchScrollListComponent.prototype.onFocusInSearchText = function (__s40param0) {
    if (this.searchField.text == this.defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleSearchScrollListComponent.prototype.onFocusOutSearchText = function (__s43param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search");
    }
  };
  return CastleSearchScrollListComponent;
}();
exports.CastleSearchScrollListComponent = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
