Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AChooseGroup(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = 0) {
    this._questionId = 0;
    this._offset = 0;
    this._parentMc = __s3param2;
    this._buttonMcs = __s3param1;
    this._buttonTextPrefix = __s3param3;
    this._questionId = __s3param0;
    this._offset = __s3param4;
    this.initTexts();
    this.reset();
  }
  AChooseGroup.prototype.show = function () {
    this._parentMc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._parentMc.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._parentMc.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  AChooseGroup.prototype.hide = function () {
    this._parentMc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._parentMc.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._parentMc.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  AChooseGroup.prototype.getJson = function () {
    return {
      ID: this._questionId,
      AS: this.selectedIndices
    };
  };
  Object.defineProperty(AChooseGroup.prototype, "selectedIndices", {
    get: function () {
      var __s11local0 = [];
      for (var __s11local1 = 0; __s11local1 < this._buttonMcs.length; ++__s11local1) {
        if (this.isSelected(__s11local1)) {
          __s11local0.push(__s11local1);
        }
      }
      return __s11local0;
    },
    enumerable: true,
    configurable: true
  });
  AChooseGroup.prototype.onClick = function (__s16param0) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(this.getIndexFromButtonMc(__s16param0.target));
    if (__s16local0 >= 0) {
      this.click(__s16local0);
    }
  };
  AChooseGroup.prototype.onMouseOver = function (__s19param0) {
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.getIndexFromButtonMc(__s19param0.target));
    if (__s19local0 >= 0) {
      this.hoverButton(__s19local0, true);
    }
  };
  AChooseGroup.prototype.onMouseOut = function (__s22param0) {
    for (var __s22local0 = 0; __s22local0 < this._buttonMcs.length; ++__s22local0) {
      this.hoverButton(__s22local0, false);
    }
  };
  AChooseGroup.prototype.initTexts = function () {
    for (var __s26local0 = 0; __s26local0 < this._buttonMcs.length; __s26local0++) {
      var __s26local1 = this._buttonMcs[__s26local0];
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s26local1.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._buttonTextPrefix + (__s26local0 + this._offset)));
      __s26local1.actLikeButton = true;
    }
  };
  AChooseGroup.prototype.reset = function () {
    for (var __s30local0 = 0; __s30local0 < this._buttonMcs.length; ++__s30local0) {
      this.selectButton(__s30local0, false);
    }
  };
  AChooseGroup.prototype.isSelected = function (__s34param0) {
    return this._buttonMcs[__s34param0].btn_select.currentFrame == AChooseGroup.SELECTED - 1;
  };
  AChooseGroup.prototype.getIndexFromButtonMc = function (__s36param0) {
    for (var __s36local0 = 0; __s36local0 < this._buttonMcs.length; ++__s36local0) {
      if (this._buttonMcs[__s36local0] == __s36param0) {
        return __s36local0;
      }
    }
    return -1;
  };
  AChooseGroup.prototype.click = function (__s41param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AChooseGroup.prototype.selectButton = function (__s43param0, __s43param1) {
    this._buttonMcs[__s43param0].btn_select.gotoAndStop(__s43param1 ? AChooseGroup.SELECTED : AChooseGroup.NOT_SELECTED);
  };
  AChooseGroup.prototype.hoverButton = function (__s45param0, __s45param1) {
    if (!this.isSelected(__s45param0)) {
      this._buttonMcs[__s45param0].btn_select.gotoAndStop(__s45param1 ? AChooseGroup.HOVER : AChooseGroup.NOT_SELECTED);
    }
  };
  AChooseGroup.__initialize_static_members = function () {
    AChooseGroup.SELECTED = 3;
    AChooseGroup.NOT_SELECTED = 1;
    AChooseGroup.HOVER = 2;
  };
  return AChooseGroup;
}();
exports.AChooseGroup = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISurveyFormField");
__s0local1.__initialize_static_members();
