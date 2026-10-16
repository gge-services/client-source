Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function SublayerSwitcher(__s3param0 = null) {
    this.sublayers = new Map();
    this._activeTab = 0;
    this.isShown = false;
    this._autoUpdateTabs = true;
    this.onSwitched = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._activeTab = -1;
    this.isShown = false;
    this.createPropertiesFunction = __s3param0;
  }
  SublayerSwitcher.prototype.add = function (__s5param0, __s5param1, __s5param2) {
    if (!__s5param2) {
      throw new Error("Sublayer must be specified.");
    }
    var __s5local0 = new __s0local2();
    __s5local0.button = __s5param1;
    __s5local0.sublayer = __s5param2;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s5param1);
    if (this.sublayers.get(__s5param0)) {
      throw new Error("A sublayer with the ID " + __s5param0 + " already exists, it cannot be added twice.");
    }
    this.sublayers.set(__s5param0, __s5local0);
    if (this.isShown && __s5param1) {
      __s5param1.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      __s5param1.gotoAndStop(SublayerSwitcher.TAB_DEFAULT_FRAME);
    }
    __s5param2.disp.visible = false;
  };
  SublayerSwitcher.prototype.switchTo = function (__s10param0) {
    if (__s10param0 < 0) {
      throw new Error("Cannot switch to tab (null).");
    }
    if (__s10param0 != this._activeTab) {
      if (this._activeTab >= 0) {
        this.hideCurrentSublayer();
      }
      this.showTab(__s10param0);
      if (this.isShown) {
        this.onSwitched.dispatch(__s10param0);
      }
    }
  };
  Object.defineProperty(SublayerSwitcher.prototype, "activeTab", {
    get: function () {
      return this._activeTab;
    },
    enumerable: true,
    configurable: true
  });
  SublayerSwitcher.prototype.show = function () {
    this.isShown = true;
    if (this.sublayers != null) {
      for (var __s18local0 = 0, __s18local1 = Array.from(this.sublayers.keys()); __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2 !== undefined) {
          var __s18local3 = this.getInfo(__s18local2).button;
          if (__s18local3) {
            __s18local3.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
          }
        }
      }
    }
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  SublayerSwitcher.prototype.hide = function () {
    if (this.sublayers != null) {
      for (var __s25local0 = 0, __s25local1 = Array.from(this.sublayers.keys()); __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          var __s25local3 = this.getInfo(__s25local2).button;
          if (__s25local3) {
            __s25local3.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
          }
        }
      }
    }
    this.hideCurrentSublayer();
    this.isShown = false;
  };
  SublayerSwitcher.prototype.showHelp = function () {
    this.getInfo(this.activeTab).sublayer.showHelp();
  };
  SublayerSwitcher.prototype.getInfo = function (__s34param0) {
    return this.sublayers.get(__s34param0);
  };
  SublayerSwitcher.prototype.getSublayerByID = function (__s36param0) {
    return this.sublayers.get(__s36param0).sublayer;
  };
  SublayerSwitcher.prototype.addOnSwitchedListener = function (__s38param0) {
    this.onSwitched.add(__s38param0);
  };
  SublayerSwitcher.prototype.removeOnSwitchedListener = function (__s40param0) {
    this.onSwitched.remove(__s40param0);
  };
  SublayerSwitcher.prototype.onClick = function (__s42param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target) && this.sublayers != null) {
      for (var __s42local0 = 0, __s42local1 = Array.from(this.sublayers.keys()); __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined && __s42param0.target == this.getInfo(__s42local2).button) {
          this.switchTo(__s42local2);
          return;
        }
      }
    }
  };
  SublayerSwitcher.prototype.showTab = function (__s48param0) {
    this._activeTab = __s48param0;
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  SublayerSwitcher.prototype.showCurrentSublayer = function () {
    if (this.isShown) {
      var __s50local0 = null;
      if (this.createPropertiesFunction) {
        __s50local0 = this.createPropertiesFunction(this._activeTab);
      }
      var __s50local1 = this.getInfo(this._activeTab).sublayer;
      __s50local1.disp.visible = true;
      __s50local1.show(__s50local0);
    }
  };
  SublayerSwitcher.prototype.hideCurrentSublayer = function () {
    if (this.isShown) {
      var __s54local0 = this.getInfo(this._activeTab).sublayer;
      __s54local0.disp.visible = false;
      __s54local0.hide();
    }
  };
  SublayerSwitcher.prototype.updateTabButtons = function () {
    if (this.isShown && this._autoUpdateTabs && this.sublayers != null) {
      for (var __s57local0 = 0, __s57local1 = Array.from(this.sublayers.keys()); __s57local0 < __s57local1.length; __s57local0++) {
        var __s57local2 = __s57local1[__s57local0];
        if (__s57local2 !== undefined) {
          var __s57local3 = this.getInfo(__s57local2).button;
          if (__s57local3) {
            __s57local3.gotoAndStop(this._activeTab == __s57local2 ? SublayerSwitcher.TAB_ACTIVE_FRAME : SublayerSwitcher.TAB_DEFAULT_FRAME);
          }
        }
      }
    }
  };
  Object.defineProperty(SublayerSwitcher.prototype, "autoUpdateTabs", {
    get: function () {
      return this._autoUpdateTabs;
    },
    set: function (__s66param0) {
      this._autoUpdateTabs = __s66param0;
    },
    enumerable: true,
    configurable: true
  });
  SublayerSwitcher.__initialize_static_members = function () {
    SublayerSwitcher.TAB_ACTIVE_FRAME = 2;
    SublayerSwitcher.TAB_DEFAULT_FRAME = 1;
  };
  return SublayerSwitcher;
}();
exports.SublayerSwitcher = __s0local1;
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local2 = function () {
  return function SublayerInfo() {};
}();
__s0local1.__initialize_static_members();
