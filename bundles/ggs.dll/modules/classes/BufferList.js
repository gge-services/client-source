function ownKeys(__s1param0, __s1param1) {
  var __s1local0 = Object.keys(__s1param0);
  if (Object.getOwnPropertySymbols) {
    var __s1local1 = Object.getOwnPropertySymbols(__s1param0);
    if (__s1param1) {
      __s1local1 = __s1local1.filter(function (__s5param0) {
        return Object.getOwnPropertyDescriptor(__s1param0, __s5param0).enumerable;
      });
    }
    __s1local0.push.apply(__s1local0, __s1local1);
  }
  return __s1local0;
}
function _defineProperty(__s7param0, __s7param1, __s7param2) {
  if (__s7param1 in __s7param0) {
    Object.defineProperty(__s7param0, __s7param1, {
      value: __s7param2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    __s7param0[__s7param1] = __s7param2;
  }
  return __s7param0;
}
function _defineProperties(__s11param0, __s11param1) {
  for (var __s11local0 = 0; __s11local0 < __s11param1.length; __s11local0++) {
    var __s11local1 = __s11param1[__s11local0];
    __s11local1.enumerable = __s11local1.enumerable || false;
    __s11local1.configurable = true;
    if ("value" in __s11local1) {
      __s11local1.writable = true;
    }
    Object.defineProperty(__s11param0, __s11local1.key, __s11local1);
  }
}
var __s0local0 = require("gge-module:export_INSPECT_MAX_BYTES").Buffer;
var __s0local1 = require("gge-module:opaque_e3b0c44298fc1c149afbf4c8__2").inspect;
var __s0local2 = __s0local1 && __s0local1.custom || "inspect";
module.exports = function () {
  function BufferList() {
    (function _classCallCheck(__s20param0, __s20param1) {
      if (!(__s20param0 instanceof __s20param1)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, BufferList);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  (function _createClass(__s23param0, __s23param1, __s23param2) {
    if (__s23param1) {
      _defineProperties(__s23param0.prototype, __s23param1);
    }
    if (__s23param2) {
      _defineProperties(__s23param0, __s23param2);
    }
    return __s23param0;
  })(BufferList, [{
    key: "push",
    value: function push(__s27param0) {
      var __s27local0 = {
        data: __s27param0,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = __s27local0;
      } else {
        this.head = __s27local0;
      }
      this.tail = __s27local0;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(__s31param0) {
      var __s31local0 = {
        data: __s31param0,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = __s31local0;
      }
      this.head = __s31local0;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length !== 0) {
        var __s34local0 = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return __s34local0;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(__s41param0) {
      if (this.length === 0) {
        return "";
      }
      for (var __s41local0 = this.head, __s41local1 = "" + __s41local0.data; __s41local0 = __s41local0.next;) {
        __s41local1 += __s41param0 + __s41local0.data;
      }
      return __s41local1;
    }
  }, {
    key: "concat",
    value: function concat(__s46param0) {
      if (this.length === 0) {
        return __s0local0.alloc(0);
      }
      var __s46local0;
      var __s46local1;
      var __s46local2;
      var __s46local3 = __s0local0.allocUnsafe(__s46param0 >>> 0);
      for (var __s46local4 = this.head, __s46local5 = 0; __s46local4;) {
        __s46local0 = __s46local4.data;
        __s46local1 = __s46local3;
        __s46local2 = __s46local5;
        __s0local0.prototype.copy.call(__s46local0, __s46local1, __s46local2);
        __s46local5 += __s46local4.data.length;
        __s46local4 = __s46local4.next;
      }
      return __s46local3;
    }
  }, {
    key: "consume",
    value: function consume(__s51param0, __s51param1) {
      var __s51local0;
      if (__s51param0 < this.head.data.length) {
        __s51local0 = this.head.data.slice(0, __s51param0);
        this.head.data = this.head.data.slice(__s51param0);
      } else {
        __s51local0 = __s51param0 === this.head.data.length ? this.shift() : __s51param1 ? this._getString(__s51param0) : this._getBuffer(__s51param0);
      }
      return __s51local0;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function _getString(__s57param0) {
      var __s57local0 = this.head;
      var __s57local1 = 1;
      var __s57local2 = __s57local0.data;
      for (__s57param0 -= __s57local2.length; __s57local0 = __s57local0.next;) {
        var __s57local3 = __s57local0.data;
        var __s57local4 = __s57param0 > __s57local3.length ? __s57local3.length : __s57param0;
        if (__s57local4 === __s57local3.length) {
          __s57local2 += __s57local3;
        } else {
          __s57local2 += __s57local3.slice(0, __s57param0);
        }
        if ((__s57param0 -= __s57local4) === 0) {
          if (__s57local4 === __s57local3.length) {
            ++__s57local1;
            if (__s57local0.next) {
              this.head = __s57local0.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = __s57local0;
            __s57local0.data = __s57local3.slice(__s57local4);
          }
          break;
        }
        ++__s57local1;
      }
      this.length -= __s57local1;
      return __s57local2;
    }
  }, {
    key: "_getBuffer",
    value: function _getBuffer(__s68param0) {
      var __s68local0 = __s0local0.allocUnsafe(__s68param0);
      var __s68local1 = this.head;
      var __s68local2 = 1;
      __s68local1.data.copy(__s68local0);
      __s68param0 -= __s68local1.data.length;
      while (__s68local1 = __s68local1.next) {
        var __s68local3 = __s68local1.data;
        var __s68local4 = __s68param0 > __s68local3.length ? __s68local3.length : __s68param0;
        __s68local3.copy(__s68local0, __s68local0.length - __s68param0, 0, __s68local4);
        if ((__s68param0 -= __s68local4) === 0) {
          if (__s68local4 === __s68local3.length) {
            ++__s68local2;
            if (__s68local1.next) {
              this.head = __s68local1.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = __s68local1;
            __s68local1.data = __s68local3.slice(__s68local4);
          }
          break;
        }
        ++__s68local2;
      }
      this.length -= __s68local2;
      return __s68local0;
    }
  }, {
    key: __s0local2,
    value: function value(__s77param0, __s77param1) {
      return __s0local1(this, function _objectSpread(__s79param0) {
        for (var __s79local0 = 1; __s79local0 < arguments.length; __s79local0++) {
          var __s79local1 = arguments[__s79local0] ?? {};
          if (__s79local0 % 2) {
            ownKeys(Object(__s79local1), true).forEach(function (__s84param0) {
              _defineProperty(__s79param0, __s84param0, __s79local1[__s84param0]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(__s79param0, Object.getOwnPropertyDescriptors(__s79local1));
          } else {
            ownKeys(Object(__s79local1)).forEach(function (__s88param0) {
              Object.defineProperty(__s79param0, __s88param0, Object.getOwnPropertyDescriptor(__s79local1, __s88param0));
            });
          }
        }
        return __s79param0;
      }({}, __s77param1, {
        depth: 0,
        customInspect: false
      }));
    }
  }]);
  return BufferList;
}();
