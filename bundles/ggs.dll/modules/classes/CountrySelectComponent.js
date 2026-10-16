Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AssetManager = require("gge-module:class_AssetManager");
var __dep_class_CountryPickerButton = require("gge-module:class_CountryPickerButton");
var __dep_class_CountrySelectComponentEvent = require("gge-module:class_CountrySelectComponentEvent");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Container;
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __s0local3 = require("gge-module:export_LoggerConfigurator").getLogger("CountrySelectComponent");
var __s0local4 = function (__s1param0) {
  function CountrySelectComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.DEFAULT_COUNTRYS_PER_LINE = 2;
    __s3local0.DEFAULT_BUTTON_OFFSET_X = 10;
    __s3local0.DEFAULT_BUTTON_OFFSET_Y = 10;
    __s3local0.DEFAULT_ARROW_UP = 1;
    __s3local0.DEFAULT_ARROW_DOWN = 2;
    __s3local0.DEFAULT_BGOFFSET_HEIGHT = 0;
    __s3local0.DEFAULT_TOOLTIP_OFFSETX = 20;
    __s3local0.DEFAULT_TOOLTIP_OFFSETY = 18;
    __s3local0.DEFAULT_TOOLTIP_OFFSET = 20;
    __s3local0._selectedCountry = null;
    __s3local0._buttonOffsetX = __s3local0.DEFAULT_BUTTON_OFFSET_X;
    __s3local0._buttonOffsetY = __s3local0.DEFAULT_BUTTON_OFFSET_Y;
    __s3local0._bgOffsetHeight = __s3local0.DEFAULT_BGOFFSET_HEIGHT;
    __s3local0._tooltipOffsetX = __s3local0.DEFAULT_TOOLTIP_OFFSETX;
    __s3local0._tooltipOffsetY = __s3local0.DEFAULT_TOOLTIP_OFFSETY;
    __s3local0._tooltipOffset = __s3local0.DEFAULT_TOOLTIP_OFFSET;
    if (__s3param3 === undefined) {
      __s3param3 = __s3local0.DEFAULT_COUNTRYS_PER_LINE;
    }
    __s3local0._countryMC = __s3param0;
    __s3local0._tooltipBackground = __s3param1;
    __s3local0._countryList = __s3param2;
    __s3local0._countriesPerLine = __s3param3;
    __s3local0.getTextByIDFunction = __s3param4;
    __s3local0.addCountryButtons();
    __s3local0.countryMC.btn_arrow.addEventListener(__s0local1.CLICK, __s3local0.bindFunction(__s3local0.toggleCountryPopUp));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CountrySelectComponent, __s1param0);
  CountrySelectComponent.prototype.destroy = function () {
    var __s6local0;
    var __s6local1;
    this.countryMC.btn_arrow.removeEventListener(__s0local1.CLICK, this.bindFunction(this.toggleCountryPopUp));
    var __s6local2 = this.countryMC.mc_flagholder.numChildren;
    for (__s6local1 = 0; __s6local1 < __s6local2; ++__s6local1) {
      (__s6local0 = this.countryMC.mc_flagholder.getChildAt(__s6local1)).removeEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.showCountryNameTooltip));
      __s6local0.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.hideCountryNameTooltip));
    }
  };
  CountrySelectComponent.prototype.toggleCountryPopUp = function (__s10param0) {
    if (this.countryMC.mc_bg.scaleY > 1) {
      this.hideChoiceCountry();
    } else {
      this.showChoiceCountry();
    }
  };
  CountrySelectComponent.prototype.addCountryButtons = function (__s14param0 = null) {
    if (__s14param0) {
      this._countryList = __s14param0;
    }
    while (this.countryMC.mc_flagholder.numChildren > 0) {
      this.countryMC.mc_flagholder.getChildAt(0).removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClickCountry));
      this.countryMC.mc_flagholder.removeChildAt(0);
    }
    this.countryMC.mc_flagholder.visible = false;
    if (this._countryList.length == 1) {
      this._countryMC.visible = false;
      __s0local3.debug("Hiding the Language Selection since we only have 1 language available!");
    }
    for (var __s14local0 = 0; __s14local0 < this._countryList.length; __s14local0++) {
      var __s14local1 = this._countryList[__s14local0];
      try {
        var __s14local2 = new (__dep_class_AssetManager.AssetManager.manager.getClass("country_" + __s14local1.ggsCountryCode))();
        if (__s14local2) {
          var __s14local3 = new __dep_class_CountryPickerButton.CountryPickerButton();
          __s14local3.addChild(__s14local2);
          __s14local3.country = __s14local1;
          __s14local3.name = "country_" + __s14local1.ggsCountryCode;
          __s14local3.mouseChildren = false;
          __s14local3.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClickCountry));
          __s14local3.addEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.showCountryNameTooltip));
          __s14local3.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.hideCountryNameTooltip));
          this.countryMC.mc_flagholder.addChild(__s14local3);
        }
      } catch (__s24local0) {
        __dep_exact_048b0d27b75c40dd.error("country unkown: " + __s14local1.ggsCountryCode);
      }
    }
    this.positionCountryBtn();
    this.hideChoiceCountry();
  };
  CountrySelectComponent.prototype.showCountryNameTooltip = function (__s26param0) {
    var __s26local0 = __s26param0.currentTarget;
    try {
      var __s26local1 = new (__dep_class_AssetManager.AssetManager.manager.getClass("CountryName_" + __s26local0.country.ggsCountryCode))();
      this._tooltipBackground.width = __s26local1.width + this._tooltipOffsetX;
      this._tooltipBackground.height = __s26local1.height + this._tooltipOffsetY;
      __s26local1.y = -this._tooltipOffsetY / 3;
      this._tooltipDisp = new __s0local2();
      this._tooltipDisp.addChild(this._tooltipBackground);
      this._tooltipDisp.addChild(__s26local1);
      this._tooltipDisp.x = __s26local0.x;
      this._tooltipDisp.y = __s26local0.y - this._tooltipOffset;
      this.countryMC.mc_flagholder.addChild(this._tooltipDisp);
    } catch (__s29local0) {}
  };
  CountrySelectComponent.prototype.hideCountryNameTooltip = function (__s31param0) {
    if (this._tooltipDisp) {
      this.countryMC.mc_flagholder.removeChild(this._tooltipDisp);
      this._tooltipDisp = null;
    }
  };
  CountrySelectComponent.prototype.onClickCountry = function (__s34param0) {
    var __s34local0 = __s34param0.target.country;
    this.selectedCountryButton(__s34local0);
    this.hideChoiceCountry();
  };
  CountrySelectComponent.prototype.positionCountryBtn = function () {
    for (var __s36local0 = 0; __s36local0 < this.countryMC.mc_flagholder.numChildren; __s36local0++) {
      var __s36local1 = this.countryMC.mc_flagholder.getChildAt(__s36local0);
      if (__s36local1) {
        __s36local1.x = (__s36local1.width + this._buttonOffsetX) * (__s36local0 % this._countriesPerLine);
        __s36local1.y = (__s36local1.height + this._buttonOffsetY) * Math.floor(__s36local0 / this._countriesPerLine) + 12;
        this._choiceCountryHeight = __s36local1.height + __s36local1.y;
      }
    }
    this.countryMC.mc_flagholder.y = -(this._choiceCountryHeight + this.countryMC.mc_bg.height);
  };
  CountrySelectComponent.prototype.hideChoiceCountry = function () {
    this.countryMC.mc_flagholder.visible = false;
    this.countryMC.mc_bg.scaleY = 1;
    this.countryMC.btn_arrow.gotoAndStop(this.DEFAULT_ARROW_UP);
    this.dispatchEvent(new __dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent(__dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent.COUNTRY_VIEW_CLOSED));
  };
  CountrySelectComponent.prototype.showChoiceCountry = function () {
    this.countryMC.mc_flagholder.visible = true;
    var __s43local0 = this.countryMC.mc_bg.height + this._choiceCountryHeight - this.countryMC.mc_currentflag.y + this._bgOffsetHeight;
    this.countryMC.mc_bg.scaleY = __s43local0 / this.countryMC.mc_bg.height;
    this.countryMC.btn_arrow.gotoAndStop(this.DEFAULT_ARROW_DOWN);
    this.dispatchEvent(new __dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent(__dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED));
  };
  CountrySelectComponent.prototype.selectedCountryButton = function (__s45param0) {
    if (!this._countryList || this._countryList.length <= 1) {
      this.countryMC.visible = false;
    } else if (!this._selectedCountry || this._selectedCountry.ggsCountryCode != __s45param0.ggsCountryCode) {
      try {
        this.selectChild(this.countryMC.mc_flagholder.getChildByName("country_" + __s45param0.ggsCountryCode));
      } catch (__s50local0) {
        __s0local3.debug("Tried to select country, but failed: " + __s45param0.ggsCountryCode);
      }
      while (this.countryMC.mc_currentflag.numChildren > 0) {
        this.countryMC.mc_currentflag.removeChildAt(0);
      }
      var __s45local0 = new (__dep_class_AssetManager.AssetManager.manager.getClass("country_" + __s45param0.ggsCountryCode))();
      if (__s45local0) {
        __s45local0.name = __s45param0.ggsCountryCode;
        this.countryMC.mc_currentflag.addChild(__s45local0);
      }
      this._selectedCountry = __s45param0;
      this.dispatchEvent(new __dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent(__dep_class_CountrySelectComponentEvent.CountrySelectComponentEvent.COUNTRY_CHANGED, this._selectedCountry));
    }
  };
  CountrySelectComponent.prototype.setDefaultCountry = function (__s55param0) {
    this.selectedCountryButton(__s55param0);
  };
  CountrySelectComponent.prototype.selectChild = function (__s57param0) {
    __s57param0.filters = [this._glowFilter];
  };
  CountrySelectComponent.prototype.deselectedChild = function (__s59param0) {
    if (__s59param0.filters.length > 0) {
      __s59param0.filters = [];
    }
  };
  Object.defineProperty(CountrySelectComponent.prototype, "glowFilter", {
    set: function (__s62param0) {
      this._glowFilter = __s62param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountrySelectComponent.prototype, "countryMC", {
    get: function () {
      return this._countryMC;
    },
    enumerable: true,
    configurable: true
  });
  return CountrySelectComponent;
}(__s0local0);
exports.CountrySelectComponent = __s0local4;
