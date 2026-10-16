Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgameTextFieldManager = require("gge-module:class_GoodgameTextFieldManager");
var __dep_class_MathBase = require("gge-module:class_MathBase");
var __dep_class_BasicToolTipEvent = require("gge-module:class_BasicToolTipEvent");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.Container;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("CoreJS.BasicToolTipManager");
var __s0local2 = function () {
  function BasicToolTipManager(__s3param0, __s3param1, __s3param2) {
    this.TEXT_BORDER = 30;
    this.ARROW_HEIGHT = 8;
    this.ARROW_OFFSET = 5;
    this.TIP_SPACE = 5;
    this.MIN_WIDTH = 60;
    this._max_width = 200;
    this.textFieldHeightAdditive = 5;
    this.textFieldWidthAdditive = 5;
    this.backGroundHeightAdditive = 0;
    this._tooltipLayer = __s3param0;
    this._tooltipLayer.mouseChildren = false;
    this._tooltipLayer.mouseEnabled = false;
    this._disp = new __s0local0();
    this._tooltipLayer.addEventListener(__dep_class_BasicToolTipEvent.BasicToolTipEvent.TOOLTIP_HIDE, this.bindFunction(this.onHide));
    this._tooltipBody = new __s3param1();
    this._tooltipArrow = new __s3param2();
    this._disp.mouseChildren = false;
    this._disp.mouseEnabled = false;
    this._disp.addChild(this._tooltipArrow);
    this._disp.addChild(this._tooltipBody);
    this._tooltipLayer.addChild(this._disp);
    this._textField = this.tooltipBody.txt_label;
    this._standardTextFieldY = this._textField.y;
    this._background = this.tooltipBody.background;
    this.updateTextField();
    this.hide();
    this.toolTipHeight = this._disp.height;
  }
  BasicToolTipManager.prototype.destroy = function () {
    this._tooltipLayer.removeEventListener(__dep_class_BasicToolTipEvent.BasicToolTipEvent.TOOLTIP_HIDE, this.bindFunction(this.onHide));
  };
  BasicToolTipManager.prototype.updateTextField = function () {
    __s0local1.debug("updateTextField");
    this._textField.y = this._standardTextFieldY;
  };
  BasicToolTipManager.prototype.onHide = function (__s9param0) {
    this.hide();
  };
  BasicToolTipManager.prototype.show = function (__s11param0, __s11param1 = null) {
    __s0local1.debug("show tooltip ");
    if (__s11param0 != null) {
      this.updatePosition();
      if (this._ggsTextField) {
        this._ggsTextField.width = this._max_width;
      } else {
        this._textField.width = this._max_width;
      }
      if (this._ggsTextField) {
        this._ggsTextField.height = 2000;
      } else {
        this._textField.height = 2000;
      }
      this._target = __s11param1;
      if (this._textField && this._background) {
        this.assignToolTipText(__s11param0);
        if (this._ggsTextField.multiline) {
          this._ggsTextField.width = this._max_width;
        }
        this._ggsTextField.width = this._ggsTextField.textWidth + this.textFieldWidthAdditive;
        this._ggsTextField.height = this._ggsTextField.textHeight + this.textFieldHeightAdditive;
        this._ggsTextField.x = this._ggsTextField.width * -0.5;
        this._ggsTextField.y = -this._ggsTextField.height;
        this._background.width = Math.max(this.MIN_WIDTH, this._ggsTextField.width + this.TEXT_BORDER);
        if (this._ggsTextField.multiline) {
          this._background.height = this._ggsTextField.height + this.backGroundHeightAdditive;
        }
        this.toolTipHeight = this._background.height;
      }
      var __s11local0 = this._background.width * 0.5;
      var __s11local1 = this._target.parent.localToGlobal(this._target.x, this._target.y);
      var __s11local2 = __s11local1.x;
      var __s11local3 = __s11local1.y;
      this._tooltipArrow.scaleY = 1;
      if (__s11local2 + __s11local0 > this._disp.stage.stageWidth) {
        this._disp.x = this._disp.stage.stageWidth - __s11local0 - this.TIP_SPACE;
        this._tooltipArrow.x = __dep_class_MathBase.MathBase.min(Number(this._background.width * 0.5 - 10), Number(this._disp.globalToLocal(__s11local1.x, 0).x));
      } else if (__s11local2 - __s11local0 < 0) {
        this._disp.x = __s11local0 + this.TIP_SPACE;
        this._tooltipArrow.x = this._disp.globalToLocal(__s11local1.x, 0).x;
      } else {
        this._disp.x = __s11local2;
        this._tooltipArrow.x = 0;
      }
      var __s11local4 = this._target.getBounds();
      __s11local4.bottom *= this._target.scaleY;
      __s11local4.top *= this._target.scaleY;
      if (__s11local3 + (__s11local4.top - this.toolTipHeight - this.ARROW_OFFSET - this.ARROW_HEIGHT) * this._disp.scaleY < 0) {
        __s11local3 = this.flipHorizontalToolTip(this.toolTipHeight, __s11local4, __s11local1);
      } else {
        __s11local3 += (__s11local4.top - this.ARROW_HEIGHT - this.ARROW_OFFSET) * this._disp.scaleY;
        this._tooltipArrow.y = 0;
      }
      this._disp.y = __s11local3;
      this._disp.visible = true;
      this._target.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    }
  };
  BasicToolTipManager.prototype.assignToolTipText = function (__s26param0) {};
  BasicToolTipManager.prototype.flipHorizontalToolTip = function (__s28param0, __s28param1, __s28param2) {
    this._tooltipArrow.scaleY = -1;
    this._tooltipArrow.y = -this.toolTipHeight;
    return __s28param2.y + (__s28param1.bottom + __s28param0 + this.ARROW_OFFSET + this.ARROW_HEIGHT) * this._disp.scaleY;
  };
  BasicToolTipManager.prototype.updatePosition = function () {};
  BasicToolTipManager.prototype.hideAdvancedTooltip = function () {};
  BasicToolTipManager.prototype.onMouseDown = function (__s34param0) {
    this.hide();
  };
  Object.defineProperty(BasicToolTipManager.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicToolTipManager.prototype.hide = function () {
    this._disp.visible = false;
    if (this._target) {
      this._target.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    }
  };
  Object.defineProperty(BasicToolTipManager.prototype, "textFieldManager", {
    get: function () {
      return __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicToolTipManager.prototype, "tooltipBody", {
    get: function () {
      return this._tooltipBody;
    },
    enumerable: true,
    configurable: true
  });
  BasicToolTipManager.TOOLTIP_LABEL = "toolTipText";
  return BasicToolTipManager;
}();
exports.BasicToolTipManager = __s0local2;
