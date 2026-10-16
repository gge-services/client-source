Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableRenderClips(__s3param0 = null) {
    this._itemMc = __s3param0;
    this.getDefaultsFromItemMc();
  }
  CollectableRenderClips.prototype.getDefaultsFromItemMc = function () {
    this._iconMc = this._infoBtn = this._textBackgroundMc = this._colorBackgroundMc = this._equipmentBackgroundMc = this._minuteSkipBackgroundMc = null;
    this._textfield = null;
    if (this._itemMc) {
      this._iconMc ||= this._itemMc.getChildByName("mc_icon");
      this._textfield ||= this._itemMc.getChildByName("txt_text");
      this._infoBtn ||= this._itemMc.getChildByName("btn_info");
      this._textBackgroundMc ||= this._itemMc.getChildByName("mc_textBackground");
      this._colorBackgroundMc ||= this._itemMc.getChildByName("mc_colorBackground");
      this._equipmentBackgroundMc ||= this._itemMc.getChildByName("mc_equipmentBackground");
      this._minuteSkipBackgroundMc ||= this._itemMc.getChildByName("mc_minuteSkipBackground");
      this._buildingLevelMc ||= this._itemMc.getChildByName("mc_buildingLevel");
      if (!this._unitLevelMc) {
        this.addUnitLevelMc(this._itemMc.getChildByName("mc_unitLevel"));
      }
      this._allianceRewardBackgroundMc ||= this._itemMc.getChildByName("bg_allianceReward");
      this._storageBar ||= this._itemMc.getChildByName("mc_storageBar");
    }
  };
  CollectableRenderClips.prototype.addItemMc = function (__s9param0, __s9param1 = false) {
    this._itemMc = __s9param0;
    if (__s9param1) {
      this.getDefaultsFromItemMc();
    }
    return this;
  };
  CollectableRenderClips.prototype.addIconMc = function (__s12param0) {
    this._iconMc = __s12param0;
    return this;
  };
  CollectableRenderClips.prototype.addTextfield = function (__s14param0) {
    this._textfield = __s14param0;
    return this;
  };
  CollectableRenderClips.prototype.addInfoBtn = function (__s16param0) {
    this._infoBtn = __s16param0;
    return this;
  };
  CollectableRenderClips.prototype.addTextfieldBgMc = function (__s18param0) {
    this._textBackgroundMc = __s18param0;
    return this;
  };
  CollectableRenderClips.prototype.addColorBgMc = function (__s20param0) {
    this._colorBackgroundMc = __s20param0;
    return this;
  };
  CollectableRenderClips.prototype.addEquipmentBgMc = function (__s22param0) {
    this._equipmentBackgroundMc = __s22param0;
    return this;
  };
  CollectableRenderClips.prototype.addBuildingLevelMc = function (__s24param0) {
    this._buildingLevelMc = __s24param0;
    return this;
  };
  CollectableRenderClips.prototype.addUnitLevelMc = function (__s26param0) {
    this._unitLevelMc = __s26param0;
    if (__s26param0) {
      __s26param0.visible = false;
    }
    return this;
  };
  CollectableRenderClips.prototype.addDynamicLevelIndicatorVO = function (__s29param0) {
    this._collectableLevelIndicatorVO = __s29param0;
    return this;
  };
  CollectableRenderClips.prototype.addMinuteSkipBgMc = function (__s31param0) {
    this._minuteSkipBackgroundMc = __s31param0;
    return this;
  };
  CollectableRenderClips.prototype.addAllianceBackgroundMc = function (__s33param0) {
    this._allianceRewardBackgroundMc = __s33param0;
    return this;
  };
  CollectableRenderClips.prototype.addStorageBar = function (__s35param0) {
    this._storageBar = __s35param0;
    return this;
  };
  CollectableRenderClips.prototype.getTooltipTargetMc = function () {
    if (this.itemMc) {
      return this.itemMc;
    } else if (this.iconMc) {
      return this.iconMc;
    } else {
      return null;
    }
  };
  Object.defineProperty(CollectableRenderClips.prototype, "itemMc", {
    get: function () {
      return this._itemMc;
    },
    set: function (__s44param0) {
      this._itemMc = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "iconMc", {
    get: function () {
      return this._iconMc;
    },
    set: function (__s48param0) {
      this._iconMc = __s48param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "textfield", {
    get: function () {
      return this._textfield;
    },
    set: function (__s52param0) {
      this._textfield = __s52param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "infoBtn", {
    get: function () {
      return this._infoBtn;
    },
    set: function (__s56param0) {
      this._infoBtn = __s56param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "minuteSkipBackgroundMc", {
    get: function () {
      return this._minuteSkipBackgroundMc;
    },
    set: function (__s60param0) {
      this._minuteSkipBackgroundMc = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "buildingLevelMC", {
    get: function () {
      return this._buildingLevelMc;
    },
    set: function (__s64param0) {
      this._buildingLevelMc = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "unitLevelMC", {
    get: function () {
      return this._unitLevelMc;
    },
    set: function (__s68param0) {
      this._unitLevelMc = __s68param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "textBackgroundMc", {
    get: function () {
      return this._textBackgroundMc;
    },
    set: function (__s72param0) {
      this._textBackgroundMc = __s72param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "colorBackgroundMc", {
    get: function () {
      return this._colorBackgroundMc;
    },
    set: function (__s76param0) {
      this._colorBackgroundMc = __s76param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "equipmentBackgroundMc", {
    get: function () {
      return this._equipmentBackgroundMc;
    },
    set: function (__s80param0) {
      this._equipmentBackgroundMc = __s80param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "allianceRewardBackgroundMc", {
    get: function () {
      return this._allianceRewardBackgroundMc;
    },
    set: function (__s84param0) {
      this._allianceRewardBackgroundMc = __s84param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "storageBar", {
    get: function () {
      return this._storageBar;
    },
    set: function (__s88param0) {
      this._storageBar = __s88param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderClips.prototype, "collectableLevelIndicatorVO", {
    get: function () {
      return this._collectableLevelIndicatorVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderClips;
}();
exports.CollectableRenderClips = __s0local0;
