Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function SelectInputFieldComponent(__s3param0, __s3param1, __s3param2) {
    this._disp = __s3param0;
    this.defaultText = __s3param2;
    this.searchField = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(this.defaultText));
    this.onValueChangedFunction = __s3param1;
    this._disp.mc_selected.visible = false;
    this.searchField.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this.searchField.selectable = true;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
  }
  SelectInputFieldComponent.prototype.onHide = function () {
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
  };
  SelectInputFieldComponent.prototype.onFocusInSearchText = function (__s8param0) {
    if (this.searchField.text == this.defaultText) {
      this.searchField.clearText();
    }
    this._disp.mc_selected.visible = true;
  };
  SelectInputFieldComponent.prototype.onFocusOutSearchText = function (__s11param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO(this.defaultText);
    }
    this._disp.mc_selected.visible = false;
    if (this.onValueChangedFunction) {
      this.onValueChangedFunction();
    }
  };
  SelectInputFieldComponent.prototype.deselect = function () {
    this._disp.mc_selected.visible = false;
  };
  SelectInputFieldComponent.prototype.inputKeyDown = function (__s17param0) {
    if (__s17param0.key == "Enter") {
      if (this.onValueChangedFunction) {
        this.onValueChangedFunction();
      }
      this._disp.mc_selected.visible = false;
    }
  };
  Object.defineProperty(SelectInputFieldComponent.prototype, "text", {
    get: function () {
      return this.searchField.text;
    },
    enumerable: true,
    configurable: true
  });
  SelectInputFieldComponent.prototype.updateText = function (__s23param0) {
    this.defaultText = __s23param0;
    this.searchField.textContentVO.stringValue = this.defaultText;
  };
  return SelectInputFieldComponent;
}();
exports.SelectInputFieldComponent = __s0local0;
