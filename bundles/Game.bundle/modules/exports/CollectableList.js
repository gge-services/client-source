Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CollectableList() {
    this._list = [];
  }
  CollectableList.prototype.addItem = function (__s5param0, __s5param1 = false) {
    if (__s5param0) {
      this._list.push(__s5param0);
      if (__s5param1) {
        this.combineDuplicatedItems();
      }
    }
    return this;
  };
  CollectableList.prototype.addItemOnIndex = function (__s9param0, __s9param1, __s9param2 = false) {
    this._list.splice(__s9param1, 0, __s9param0);
    if (__s9param2) {
      this.combineDuplicatedItems();
    }
    return this;
  };
  CollectableList.prototype.addList = function (__s12param0, __s12param1 = false) {
    if (!__s12param0) {
      return this;
    }
    for (var __s12local0 = 0; __s12local0 < __s12param0.length; ++__s12local0) {
      this._list.push(__s12param0._list[__s12local0].clone());
    }
    if (__s12param1) {
      this.combineDuplicatedItems();
    }
    return this;
  };
  CollectableList.prototype.replaceItemOnIndex = function (__s18param0, __s18param1) {
    if (!(__s18param1 < 0) && !(__s18param1 >= this._list.length)) {
      this.removeByIndex(__s18param1);
      this.addItemOnIndex(__s18param0, __s18param1);
    }
  };
  CollectableList.prototype.removeByIndex = function (__s21param0) {
    return this._list.splice(__s21param0, 1)[0];
  };
  CollectableList.prototype.removeByItem = function (__s23param0) {
    var __s23local0 = __dep_exact_f855840627e6e145.int(this._list.indexOf(__s23param0));
    if (__s23local0 >= 0) {
      return this.removeByIndex(__s23local0);
    } else {
      return null;
    }
  };
  Object.defineProperty(CollectableList.prototype, "length", {
    get: function () {
      return this._list.length;
    },
    enumerable: true,
    configurable: true
  });
  CollectableList.prototype.getItemByIndex = function (__s29param0) {
    if (__s29param0 < this._list.length) {
      return this._list[__s29param0];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getItemByIndexSave = function (__s33param0) {
    if (__s33param0 >= 0 && __s33param0 < this._list.length) {
      return this._list[__s33param0];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getIndexByType = function (__s37param0) {
    for (var __s37local0 = 0; __s37local0 < this._list.length; ++__s37local0) {
      if (this._list[__s37local0].itemType == __s37param0) {
        return __s37local0;
      }
    }
    return -1;
  };
  CollectableList.prototype.getIndexByTypeVO = function (__s42param0) {
    for (var __s42local0 = 0; __s42local0 < this._list.length; ++__s42local0) {
      if (__s42param0.hasType(this._list[__s42local0])) {
        return __s42local0;
      }
    }
    return -1;
  };
  CollectableList.prototype.getFirstItemOfType = function (__s47param0) {
    for (var __s47local0 = 0; __s47local0 < this._list.length; ++__s47local0) {
      if (this._list[__s47local0].itemType == __s47param0) {
        return this._list[__s47local0];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypeVO = function (__s52param0) {
    for (var __s52local0 = 0; __s52local0 < this._list.length; ++__s52local0) {
      if (__s52param0.hasType(this._list[__s52local0])) {
        return this._list[__s52local0];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypes = function (__s57param0) {
    for (var __s57local0 = 0; __s57local0 < this._list.length; ++__s57local0) {
      if (__s57param0.indexOf(this._list[__s57local0].itemType) >= 0) {
        return this._list[__s57local0];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypeVOs = function (__s62param0) {
    for (var __s62local0 = 0; __s62local0 < this._list.length; ++__s62local0) {
      for (var __s62local1 = 0; __s62local1 < this.list.length; ++__s62local1) {
        __s62param0[__s62local1];
        if (__s62param0[__s62local1].hasType(this._list[__s62local0])) {
          return this._list[__s62local0];
        }
      }
    }
    return null;
  };
  CollectableList.prototype.getIndicesByType = function (__s69param0) {
    var __s69local0 = [];
    for (var __s69local1 = 0; __s69local1 < this._list.length; ++__s69local1) {
      if (this._list[__s69local1].itemType == __s69param0) {
        __s69local0.push(__s69local1);
      }
    }
    return __s69local0;
  };
  CollectableList.prototype.getIndicesByTypeVO = function (__s74param0) {
    var __s74local0 = [];
    for (var __s74local1 = 0; __s74local1 < this._list.length; ++__s74local1) {
      if (__s74param0.hasType(this._list[__s74local1])) {
        __s74local0.push(__s74local1);
      }
    }
    return __s74local0;
  };
  CollectableList.prototype.getItemByType = function (__s79param0) {
    var __s79local0 = __dep_exact_f855840627e6e145.int(this.getIndexByType(__s79param0));
    if (__s79local0 >= 0) {
      return this._list[__s79local0];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getItemByTypeVO = function (__s83param0) {
    var __s83local0 = __dep_exact_f855840627e6e145.int(this.getIndexByTypeVO(__s83param0));
    if (__s83local0 >= 0) {
      return this._list[__s83local0];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getFilteredListByTypes = function (__s87param0) {
    var __s87local0 = new CollectableList();
    for (var __s87local1 = 0; __s87local1 < this._list.length; ++__s87local1) {
      if (__s87param0.indexOf(this._list[__s87local1].itemType) >= 0) {
        __s87local0.addItem(this._list[__s87local1]);
      }
    }
    return __s87local0;
  };
  CollectableList.prototype.getFilteredListByTypeVOs = function (__s92param0) {
    var __s92local0 = new CollectableList();
    for (var __s92local1 = 0; __s92local1 < this._list.length; ++__s92local1) {
      for (var __s92local2 = 0; __s92local2 < __s92param0.length; ++__s92local2) {
        if (__s92param0[__s92local2].hasType(this._list[__s92local1])) {
          __s92local0.addItem(this._list[__s92local1]);
        }
      }
    }
    return __s92local0;
  };
  CollectableList.prototype.getFilteredListByType = function (__s99param0) {
    var __s99local0 = new CollectableList();
    for (var __s99local1 = 0; __s99local1 < this._list.length; ++__s99local1) {
      if (this._list[__s99local1].itemType == __s99param0) {
        __s99local0.addItem(this._list[__s99local1]);
      }
    }
    return __s99local0;
  };
  CollectableList.prototype.getFilteredListByTypeVO = function (__s104param0) {
    var __s104local0 = new CollectableList();
    for (var __s104local1 = 0; __s104local1 < this._list.length; ++__s104local1) {
      if (__s104param0.hasType(this._list[__s104local1])) {
        __s104local0.addItem(this._list[__s104local1]);
      }
    }
    return __s104local0;
  };
  CollectableList.prototype.getFilteredListWithoutTypes = function (__s109param0) {
    var __s109local0 = new CollectableList();
    for (var __s109local1 = 0; __s109local1 < this._list.length; ++__s109local1) {
      if (__s109param0.indexOf(this._list[__s109local1].itemType) < 0) {
        __s109local0.addItem(this._list[__s109local1]);
      }
    }
    return __s109local0;
  };
  CollectableList.prototype.getFilteredListWithoutTypeVOs = function (__s114param0) {
    var __s114local0 = new CollectableList();
    for (var __s114local1 = 0; __s114local1 < this._list.length; ++__s114local1) {
      for (var __s114local2 = 0; __s114local2 < __s114param0.length; ++__s114local2) {
        if (!__s114param0[__s114local2].hasType(this._list[__s114local1])) {
          __s114local0.addItem(this._list[__s114local1]);
        }
      }
    }
    return __s114local0;
  };
  CollectableList.prototype.getFilteredListWithoutType = function (__s121param0) {
    var __s121local0 = new CollectableList();
    for (var __s121local1 = 0; __s121local1 < this._list.length; ++__s121local1) {
      if (this._list[__s121local1].itemType != __s121param0) {
        __s121local0.addItem(this._list[__s121local1]);
      }
    }
    return __s121local0;
  };
  CollectableList.prototype.getFilteredListWithoutTypeVO = function (__s126param0) {
    var __s126local0 = new CollectableList();
    for (var __s126local1 = 0; __s126local1 < this._list.length; ++__s126local1) {
      if (!__s126param0.hasType(this._list[__s126local1])) {
        __s126local0.addItem(this._list[__s126local1]);
      }
    }
    return __s126local0;
  };
  CollectableList.prototype.containsType = function (__s131param0) {
    for (var __s131local0 = 0; __s131local0 < this._list.length; ++__s131local0) {
      if (this._list[__s131local0].itemType == __s131param0) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsTypeVO = function (__s136param0) {
    for (var __s136local0 = 0; __s136local0 < this._list.length; ++__s136local0) {
      if (__s136param0.hasType(this._list[__s136local0])) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsAnyTypeOf = function (__s141param0) {
    for (var __s141local0 = 0; __s141local0 < this._list.length; ++__s141local0) {
      if (__s141param0.indexOf(this._list[__s141local0].itemType) >= 0) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsAnyTypeVOOf = function (__s146param0) {
    for (var __s146local0 = 0; __s146local0 < this._list.length; ++__s146local0) {
      for (var __s146local1 = 0; __s146local1 < __s146param0.length; ++__s146local1) {
        if (__s146param0[__s146local1].hasType(this._list[__s146local0])) {
          return true;
        }
      }
    }
    return false;
  };
  CollectableList.prototype.getAmountOrDefaultByType = function (__s153param0) {
    var __s153local0 = this.getItemByType(__s153param0);
    return __dep_exact_f855840627e6e145.int(__s153local0 ? __s153local0.amount : 0);
  };
  CollectableList.prototype.getAmountOrDefaultByTypeVO = function (__s155param0) {
    var __s155local0 = this.getItemByTypeVO(__s155param0);
    return __dep_exact_f855840627e6e145.int(__s155local0 ? __s155local0.amount : 0);
  };
  CollectableList.prototype.clone = function () {
    var __s157local0 = new CollectableList();
    for (var __s157local1 = 0; __s157local1 < this._list.length; ++__s157local1) {
      __s157local0.addItem(this._list[__s157local1].clone());
    }
    return __s157local0;
  };
  Object.defineProperty(CollectableList.prototype, "grantType", {
    get: function () {
      if (this.list.length > 0) {
        var __s161local0 = __dep_exact_f855840627e6e145.int(this.list[0].grantType);
        for (var __s161local1 = 0; __s161local1 < this.list.length; __s161local1++) {
          if (__s161local0 != this.list[__s161local1].grantType) {
            __s161local0 = -1;
            break;
          }
        }
        return __s161local0;
      }
      return __dep_exact_26a421b704832cff.RewardConst.PLAYER;
    },
    enumerable: true,
    configurable: true
  });
  CollectableList.prototype.getShortTooltip = function () {
    var __s167local0 = "";
    for (var __s167local1 = 0; __s167local1 < this._list.length; __s167local1++) {
      if (__s167local1) {
        __s167local0 += "\n";
      }
      __s167local0 += __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [this._list[__s167local1].getTooltipTextId(), this._list[__s167local1].amount]);
    }
    return __s167local0;
  };
  CollectableList.prototype.getRewardAmountTooltip = function () {
    var __s172local0 = "";
    for (var __s172local1 = 0; __s172local1 < this._list.length; __s172local1++) {
      if (__s172local1) {
        __s172local0 += "\n";
      }
      __s172local0 += __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [this._list[__s172local1].amount, this._list[__s172local1].getTooltipTextId()]);
    }
    return __s172local0;
  };
  CollectableList.prototype.getContainingTypes = function () {
    var __s177local0 = [];
    if (this._list != null) {
      for (var __s177local1 = 0, __s177local2 = this._list; __s177local1 < __s177local2.length; __s177local1++) {
        var __s177local3 = __s177local2[__s177local1];
        if (__s177local3 !== undefined) {
          var __s177local4 = false;
          if (__s177local0 != null) {
            for (var __s177local5 = 0, __s177local6 = __s177local0; __s177local5 < __s177local6.length; __s177local5++) {
              var __s177local7 = __s177local6[__s177local5];
              if (__s177local7 !== undefined && __s177local7.hasType(__s177local3)) {
                __s177local4 = true;
                break;
              }
            }
          }
          if (!__s177local4) {
            __s177local0.push(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s177local3));
          }
        }
      }
    }
    return __s177local0;
  };
  CollectableList.prototype.clear = function () {
    this._list = [];
  };
  CollectableList.prototype.combineDuplicatedItems = function () {
    var __s190local0;
    var __s190local1;
    for (var __s190local2 = 0; __s190local2 < this._list.length; ++__s190local2) {
      (__s190local0 = this._list[__s190local2]).itemType;
      for (var __s190local3 = __dep_exact_f855840627e6e145.int(this._list.length - 1); __s190local3 > __s190local2; --__s190local3) {
        __s190local1 = this._list[__s190local3];
        if (__s190local0.isCombineAbleWith(__s190local1)) {
          __s190local0.combineWith(__s190local1);
          this.removeByIndex(__s190local3);
        }
      }
    }
  };
  CollectableList.prototype.sort = function (__s197param0) {
    this._list.sort(__s197param0);
  };
  CollectableList.prototype.filter = function (__s199param0) {
    var __s199local0 = new CollectableList();
    var __s199local1 = this.list.filter(__s199param0);
    if (__s199local1 != null) {
      for (var __s199local2 = 0, __s199local3 = __s199local1; __s199local2 < __s199local3.length; __s199local2++) {
        var __s199local4 = __s199local3[__s199local2];
        if (__s199local4 !== undefined) {
          __s199local0.addItem(__s199local4);
        }
      }
    }
    return __s199local0;
  };
  Object.defineProperty(CollectableList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableList;
}();
exports.CollectableList = __s0local0;
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
