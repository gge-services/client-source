Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SlotList(__s3param0, __s3param1 = null) {
    this.nonEmpty = false;
    if (__s3param0 || __s3param1) {
      if (!__s3param0) {
        throw new Error("Parameter head cannot be null.");
      }
      this.head = __s3param0;
      this.tail = __s3param1 || SlotList.NIL;
      this.nonEmpty = true;
    } else {
      if (SlotList.NIL) {
        throw new Error("Parameters head and tail are null. Use the NIL element instead.");
      }
      this.nonEmpty = false;
    }
  }
  Object.defineProperty(SlotList.prototype, "length", {
    get: function () {
      if (!this.nonEmpty) {
        return 0;
      }
      if (this.tail == SlotList.NIL) {
        return 1;
      }
      var __s9local0 = 0;
      for (var __s9local1 = this; __s9local1.nonEmpty;) {
        ++__s9local0;
        __s9local1 = __s9local1.tail;
      }
      return __s9local0;
    },
    enumerable: true,
    configurable: true
  });
  SlotList.prototype.prepend = function (__s15param0) {
    return new SlotList(__s15param0, this);
  };
  SlotList.prototype.append = function (__s17param0) {
    if (!__s17param0) {
      return this;
    }
    if (!this.nonEmpty) {
      return new SlotList(__s17param0);
    }
    if (this.tail == SlotList.NIL) {
      return new SlotList(__s17param0).prepend(this.head);
    }
    var __s17local0 = new SlotList(this.head);
    var __s17local1 = __s17local0;
    for (var __s17local2 = this.tail; __s17local2.nonEmpty;) {
      __s17local1 = __s17local1.tail = new SlotList(__s17local2.head);
      __s17local2 = __s17local2.tail;
    }
    __s17local1.tail = new SlotList(__s17param0);
    return __s17local0;
  };
  SlotList.prototype.insertWithPriority = function (__s24param0) {
    if (!this.nonEmpty) {
      return new SlotList(__s24param0);
    }
    var __s24local0 = __s24param0.priority;
    if (__s24local0 > this.head.priority) {
      return this.prepend(__s24param0);
    }
    var __s24local1 = new SlotList(this.head);
    var __s24local2 = __s24local1;
    for (var __s24local3 = this.tail; __s24local3.nonEmpty;) {
      if (__s24local0 > __s24local3.head.priority) {
        __s24local2.tail = __s24local3.prepend(__s24param0);
        return __s24local1;
      }
      __s24local2 = __s24local2.tail = new SlotList(__s24local3.head);
      __s24local3 = __s24local3.tail;
    }
    __s24local2.tail = new SlotList(__s24param0);
    return __s24local1;
  };
  SlotList.prototype.filterNot = function (__s31param0) {
    if (!this.nonEmpty || __s31param0 == null) {
      return this;
    }
    if (__s31param0 == this.head.listener) {
      return this.tail;
    }
    var __s31local0 = new SlotList(this.head);
    var __s31local1 = __s31local0;
    for (var __s31local2 = this.tail; __s31local2.nonEmpty;) {
      if (__s31local2.head.listener == __s31param0) {
        __s31local1.tail = __s31local2.tail;
        return __s31local0;
      }
      __s31local1 = __s31local1.tail = new SlotList(__s31local2.head);
      __s31local2 = __s31local2.tail;
    }
    return this;
  };
  SlotList.prototype.contains = function (__s38param0) {
    if (!this.nonEmpty) {
      return false;
    }
    for (var __s38local0 = this; __s38local0.nonEmpty;) {
      if (__s38local0.head.listener == __s38param0) {
        return true;
      }
      __s38local0 = __s38local0.tail;
    }
    return false;
  };
  SlotList.prototype.find = function (__s44param0) {
    if (!this.nonEmpty) {
      return null;
    }
    for (var __s44local0 = this; __s44local0.nonEmpty;) {
      if (__s44local0.head.listener == __s44param0) {
        return __s44local0.head;
      }
      __s44local0 = __s44local0.tail;
    }
    return null;
  };
  SlotList.prototype.toString = function () {
    var __s50local0 = "";
    for (var __s50local1 = this; __s50local1.nonEmpty;) {
      __s50local0 += __s50local1.head + " -> ";
      __s50local1 = __s50local1.tail;
    }
    return "[List " + (__s50local0 += "NIL") + "]";
  };
  SlotList.NIL = new SlotList(null, null);
  return SlotList;
}();
exports.SlotList = __s0local0;
