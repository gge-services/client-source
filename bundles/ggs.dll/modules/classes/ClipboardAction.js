(function webpackUniversalModuleDefinition(__s1param0, __s1param1) {
  module.exports = __s1param1();
})(0, function () {
  return function (__s5param0) {
    var __s5local0 = {};
    function __webpack_require__(__s7param0) {
      if (__s5local0[__s7param0]) {
        return __s5local0[__s7param0].exports;
      }
      var __s7local0 = __s5local0[__s7param0] = {
        i: __s7param0,
        l: false,
        exports: {}
      };
      __s5param0[__s7param0].call(__s7local0.exports, __s7local0, __s7local0.exports, __webpack_require__);
      __s7local0.l = true;
      return __s7local0.exports;
    }
    __webpack_require__.m = __s5param0;
    __webpack_require__.c = __s5local0;
    __webpack_require__.i = function (__s10param0) {
      return __s10param0;
    };
    __webpack_require__.d = function (__s12param0, __s12param1, __s12param2) {
      if (!__webpack_require__.o(__s12param0, __s12param1)) {
        Object.defineProperty(__s12param0, __s12param1, {
          configurable: false,
          enumerable: true,
          get: __s12param2
        });
      }
    };
    __webpack_require__.n = function (__s15param0) {
      var __s15local0 = __s15param0 && __s15param0.__esModule ? function getDefault() {
        return __s15param0.default;
      } : function getModuleExports() {
        return __s15param0;
      };
      __webpack_require__.d(__s15local0, "a", __s15local0);
      return __s15local0;
    };
    __webpack_require__.o = function (__s21param0, __s21param1) {
      return Object.prototype.hasOwnProperty.call(__s21param0, __s21param1);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 3);
  }([function (__s23param0, __s23param1, __s23param2) {
    var __s23local0;
    var __s23local1;
    var __s23local2;
    __s23local1 = [__s23param0, __s23param2(7)];
    if ((__s23local2 = typeof (__s23local0 = function (__s25param0, __s25param1) {
      'use strict';

      var __s25local0 = function _interopRequireDefault(__s27param0) {
        if (__s27param0 && __s27param0.__esModule) {
          return __s27param0;
        } else {
          return {
            default: __s27param0
          };
        }
      }(__s25param1);
      var __s25local1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (__s31param0) {
        return typeof __s31param0;
      } : function (__s33param0) {
        if (__s33param0 && typeof Symbol == "function" && __s33param0.constructor === Symbol && __s33param0 !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof __s33param0;
        }
      };
      var __s25local2 = function () {
        function defineProperties(__s39param0, __s39param1) {
          for (var __s39local0 = 0; __s39local0 < __s39param1.length; __s39local0++) {
            var __s39local1 = __s39param1[__s39local0];
            __s39local1.enumerable = __s39local1.enumerable || false;
            __s39local1.configurable = true;
            if ("value" in __s39local1) {
              __s39local1.writable = true;
            }
            Object.defineProperty(__s39param0, __s39local1.key, __s39local1);
          }
        }
        return function (__s44param0, __s44param1, __s44param2) {
          if (__s44param1) {
            defineProperties(__s44param0.prototype, __s44param1);
          }
          if (__s44param2) {
            defineProperties(__s44param0, __s44param2);
          }
          return __s44param0;
        };
      }();
      var __s25local3 = function () {
        function ClipboardAction(__s50param0) {
          (function _classCallCheck(__s52param0, __s52param1) {
            if (!(__s52param0 instanceof __s52param1)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, ClipboardAction);
          this.resolveOptions(__s50param0);
          this.initSelection();
        }
        __s25local2(ClipboardAction, [{
          key: "resolveOptions",
          value: function resolveOptions(__s55param0 = {}) {
            this.action = __s55param0.action;
            this.container = __s55param0.container;
            this.emitter = __s55param0.emitter;
            this.target = __s55param0.target;
            this.text = __s55param0.text;
            this.trigger = __s55param0.trigger;
            this.selectedText = "";
          }
        }, {
          key: "initSelection",
          value: function initSelection() {
            if (this.text) {
              this.selectFake();
            } else if (this.target) {
              this.selectTarget();
            }
          }
        }, {
          key: "selectFake",
          value: function selectFake() {
            var __s61local0 = this;
            var __s61local1 = document.documentElement.getAttribute("dir") == "rtl";
            this.removeFake();
            this.fakeHandlerCallback = function () {
              return __s61local0.removeFake();
            };
            this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || true;
            this.fakeElem = document.createElement("textarea");
            this.fakeElem.style.fontSize = "12pt";
            this.fakeElem.style.border = "0";
            this.fakeElem.style.padding = "0";
            this.fakeElem.style.margin = "0";
            this.fakeElem.style.position = "absolute";
            this.fakeElem.style[__s61local1 ? "right" : "left"] = "-9999px";
            var __s61local2 = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = __s61local2 + "px";
            this.fakeElem.setAttribute("readonly", "");
            this.fakeElem.value = this.text;
            this.container.appendChild(this.fakeElem);
            this.selectedText = (0, __s25local0.default)(this.fakeElem);
            this.copyText();
          }
        }, {
          key: "removeFake",
          value: function removeFake() {
            if (this.fakeHandler) {
              this.container.removeEventListener("click", this.fakeHandlerCallback);
              this.fakeHandler = null;
              this.fakeHandlerCallback = null;
            }
            if (this.fakeElem) {
              this.container.removeChild(this.fakeElem);
              this.fakeElem = null;
            }
          }
        }, {
          key: "selectTarget",
          value: function selectTarget() {
            this.selectedText = (0, __s25local0.default)(this.target);
            this.copyText();
          }
        }, {
          key: "copyText",
          value: function copyText() {
            var __s71local0 = undefined;
            try {
              __s71local0 = document.execCommand(this.action);
            } catch (__s74local0) {
              __s71local0 = false;
            }
            this.handleResult(__s71local0);
          }
        }, {
          key: "handleResult",
          value: function handleResult(__s76param0) {
            this.emitter.emit(__s76param0 ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
        }, {
          key: "clearSelection",
          value: function clearSelection() {
            if (this.trigger) {
              this.trigger.focus();
            }
            window.getSelection().removeAllRanges();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.removeFake();
          }
        }, {
          key: "action",
          set: function set(__s83param0 = "copy") {
            this._action = __s83param0;
            if (this._action !== "copy" && this._action !== "cut") {
              throw new Error("Invalid \"action\" value, use either \"copy\" or \"cut\"");
            }
          },
          get: function get() {
            return this._action;
          }
        }, {
          key: "target",
          set: function set(__s88param0) {
            if (__s88param0 !== undefined) {
              if (!__s88param0 || (__s88param0 === undefined ? "undefined" : __s25local1(__s88param0)) !== "object" || __s88param0.nodeType !== 1) {
                throw new Error("Invalid \"target\" value, use a valid Element");
              }
              if (this.action === "copy" && __s88param0.hasAttribute("disabled")) {
                throw new Error("Invalid \"target\" attribute. Please use \"readonly\" instead of \"disabled\" attribute");
              }
              if (this.action === "cut" && (__s88param0.hasAttribute("readonly") || __s88param0.hasAttribute("disabled"))) {
                throw new Error("Invalid \"target\" attribute. You can't cut text from elements with \"readonly\" or \"disabled\" attributes");
              }
              this._target = __s88param0;
            }
          },
          get: function get() {
            return this._target;
          }
        }]);
        return ClipboardAction;
      }();
      __s25param0.exports = __s25local3;
    }) == "function" ? __s23local0.apply(__s23param1, __s23local1) : __s23local0) !== undefined) {
      __s23param0.exports = __s23local2;
    }
  }, function (__s97param0, __s97param1, __s97param2) {
    var __s97local0 = __s97param2(6);
    var __s97local1 = __s97param2(5);
    __s97param0.exports = function listen(__s99param0, __s99param1, __s99param2) {
      if (!__s99param0 && !__s99param1 && !__s99param2) {
        throw new Error("Missing required arguments");
      }
      if (!__s97local0.string(__s99param1)) {
        throw new TypeError("Second argument must be a String");
      }
      if (!__s97local0.fn(__s99param2)) {
        throw new TypeError("Third argument must be a Function");
      }
      if (__s97local0.node(__s99param0)) {
        return function listenNode(__s105param0, __s105param1, __s105param2) {
          __s105param0.addEventListener(__s105param1, __s105param2);
          return {
            destroy: function () {
              __s105param0.removeEventListener(__s105param1, __s105param2);
            }
          };
        }(__s99param0, __s99param1, __s99param2);
      }
      if (__s97local0.nodeList(__s99param0)) {
        return function listenNodeList(__s110param0, __s110param1, __s110param2) {
          Array.prototype.forEach.call(__s110param0, function (__s112param0) {
            __s112param0.addEventListener(__s110param1, __s110param2);
          });
          return {
            destroy: function () {
              Array.prototype.forEach.call(__s110param0, function (__s116param0) {
                __s116param0.removeEventListener(__s110param1, __s110param2);
              });
            }
          };
        }(__s99param0, __s99param1, __s99param2);
      }
      if (__s97local0.string(__s99param0)) {
        return function listenSelector(__s119param0, __s119param1, __s119param2) {
          return __s97local1(document.body, __s119param0, __s119param1, __s119param2);
        }(__s99param0, __s99param1, __s99param2);
      }
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    };
  }, function (__s121param0, __s121param1) {
    function __s121local0() {}
    __s121local0.prototype = {
      on: function (__s125param0, __s125param1, __s125param2) {
        var __s125local0 = this.e ||= {};
        (__s125local0[__s125param0] ||= []).push({
          fn: __s125param1,
          ctx: __s125param2
        });
        return this;
      },
      once: function (__s127param0, __s127param1, __s127param2) {
        var __s127local0 = this;
        function listener() {
          __s127local0.off(__s127param0, listener);
          __s127param1.apply(__s127param2, arguments);
        }
        listener._ = __s127param1;
        return this.on(__s127param0, listener, __s127param2);
      },
      emit: function (__s131param0) {
        var __s131local0 = [].slice.call(arguments, 1);
        var __s131local1 = ((this.e ||= {})[__s131param0] || []).slice();
        for (var __s131local2 = 0, __s131local3 = __s131local1.length; __s131local2 < __s131local3; __s131local2++) {
          __s131local1[__s131local2].fn.apply(__s131local1[__s131local2].ctx, __s131local0);
        }
        return this;
      },
      off: function (__s135param0, __s135param1) {
        var __s135local0 = this.e ||= {};
        var __s135local1 = __s135local0[__s135param0];
        var __s135local2 = [];
        if (__s135local1 && __s135param1) {
          for (var __s135local3 = 0, __s135local4 = __s135local1.length; __s135local3 < __s135local4; __s135local3++) {
            if (__s135local1[__s135local3].fn !== __s135param1 && __s135local1[__s135local3].fn._ !== __s135param1) {
              __s135local2.push(__s135local1[__s135local3]);
            }
          }
        }
        if (__s135local2.length) {
          __s135local0[__s135param0] = __s135local2;
        } else {
          delete __s135local0[__s135param0];
        }
        return this;
      }
    };
    __s121param0.exports = __s121local0;
  }, function (__s143param0, __s143param1, __s143param2) {
    var __s143local0;
    var __s143local1;
    var __s143local2;
    __s143local1 = [__s143param0, __s143param2(0), __s143param2(2), __s143param2(1)];
    if ((__s143local2 = typeof (__s143local0 = function (__s145param0, __s145param1, __s145param2, __s145param3) {
      'use strict';

      var __s145local0 = _interopRequireDefault(__s145param1);
      var __s145local1 = _interopRequireDefault(__s145param2);
      var __s145local2 = _interopRequireDefault(__s145param3);
      function _interopRequireDefault(__s147param0) {
        if (__s147param0 && __s147param0.__esModule) {
          return __s147param0;
        } else {
          return {
            default: __s147param0
          };
        }
      }
      var __s145local3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (__s151param0) {
        return typeof __s151param0;
      } : function (__s153param0) {
        if (__s153param0 && typeof Symbol == "function" && __s153param0.constructor === Symbol && __s153param0 !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof __s153param0;
        }
      };
      var __s145local4 = function () {
        function defineProperties(__s159param0, __s159param1) {
          for (var __s159local0 = 0; __s159local0 < __s159param1.length; __s159local0++) {
            var __s159local1 = __s159param1[__s159local0];
            __s159local1.enumerable = __s159local1.enumerable || false;
            __s159local1.configurable = true;
            if ("value" in __s159local1) {
              __s159local1.writable = true;
            }
            Object.defineProperty(__s159param0, __s159local1.key, __s159local1);
          }
        }
        return function (__s164param0, __s164param1, __s164param2) {
          if (__s164param1) {
            defineProperties(__s164param0.prototype, __s164param1);
          }
          if (__s164param2) {
            defineProperties(__s164param0, __s164param2);
          }
          return __s164param0;
        };
      }();
      var __s145local5 = function (__s168param0) {
        function Clipboard(__s170param0, __s170param1) {
          (function _classCallCheck(__s172param0, __s172param1) {
            if (!(__s172param0 instanceof __s172param1)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, Clipboard);
          var __s170local0 = function _possibleConstructorReturn(__s175param0, __s175param1) {
            if (!__s175param0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!__s175param1 || typeof __s175param1 != "object" && typeof __s175param1 != "function") {
              return __s175param0;
            } else {
              return __s175param1;
            }
          }(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
          __s170local0.resolveOptions(__s170param1);
          __s170local0.listenClick(__s170param0);
          return __s170local0;
        }
        (function _inherits(__s180param0, __s180param1) {
          if (typeof __s180param1 != "function" && __s180param1 !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof __s180param1);
          }
          __s180param0.prototype = Object.create(__s180param1 && __s180param1.prototype, {
            constructor: {
              value: __s180param0,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (__s180param1) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(__s180param0, __s180param1);
            } else {
              __s180param0.__proto__ = __s180param1;
            }
          }
        })(Clipboard, __s168param0);
        __s145local4(Clipboard, [{
          key: "resolveOptions",
          value: function resolveOptions(__s186param0 = {}) {
            this.action = typeof __s186param0.action == "function" ? __s186param0.action : this.defaultAction;
            this.target = typeof __s186param0.target == "function" ? __s186param0.target : this.defaultTarget;
            this.text = typeof __s186param0.text == "function" ? __s186param0.text : this.defaultText;
            this.container = __s145local3(__s186param0.container) === "object" ? __s186param0.container : document.body;
          }
        }, {
          key: "listenClick",
          value: function listenClick(__s188param0) {
            var __s188local0 = this;
            this.listener = (0, __s145local2.default)(__s188param0, "click", function (__s190param0) {
              return __s188local0.onClick(__s190param0);
            });
          }
        }, {
          key: "onClick",
          value: function onClick(__s192param0) {
            var __s192local0 = __s192param0.delegateTarget || __s192param0.currentTarget;
            this.clipboardAction &&= null;
            this.clipboardAction = new __s145local0.default({
              action: this.action(__s192local0),
              target: this.target(__s192local0),
              text: this.text(__s192local0),
              container: this.container,
              trigger: __s192local0,
              emitter: this
            });
          }
        }, {
          key: "defaultAction",
          value: function defaultAction(__s194param0) {
            return getAttributeValue("action", __s194param0);
          }
        }, {
          key: "defaultTarget",
          value: function defaultTarget(__s196param0) {
            var __s196local0 = getAttributeValue("target", __s196param0);
            if (__s196local0) {
              return document.querySelector(__s196local0);
            }
          }
        }, {
          key: "defaultText",
          value: function defaultText(__s199param0) {
            return getAttributeValue("text", __s199param0);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.listener.destroy();
            if (this.clipboardAction) {
              this.clipboardAction.destroy();
              this.clipboardAction = null;
            }
          }
        }], [{
          key: "isSupported",
          value: function isSupported(__s204param0 = ["copy", "cut"]) {
            var __s204local0 = typeof __s204param0 == "string" ? [__s204param0] : __s204param0;
            var __s204local1 = !!document.queryCommandSupported;
            __s204local0.forEach(function (__s206param0) {
              __s204local1 = __s204local1 && !!document.queryCommandSupported(__s206param0);
            });
            return __s204local1;
          }
        }]);
        return Clipboard;
      }(__s145local1.default);
      function getAttributeValue(__s208param0, __s208param1) {
        var __s208local0 = "data-clipboard-" + __s208param0;
        if (__s208param1.hasAttribute(__s208local0)) {
          return __s208param1.getAttribute(__s208local0);
        }
      }
      __s145param0.exports = __s145local5;
    }) == "function" ? __s143local0.apply(__s143param1, __s143local1) : __s143local0) !== undefined) {
      __s143param0.exports = __s143local2;
    }
  }, function (__s212param0, __s212param1) {
    var __s212local0 = 9;
    if (typeof Element != "undefined" && !Element.prototype.matches) {
      var __s212local1 = Element.prototype;
      __s212local1.matches = __s212local1.matchesSelector || __s212local1.mozMatchesSelector || __s212local1.msMatchesSelector || __s212local1.oMatchesSelector || __s212local1.webkitMatchesSelector;
    }
    __s212param0.exports = function closest(__s215param0, __s215param1) {
      while (__s215param0 && __s215param0.nodeType !== __s212local0) {
        if (typeof __s215param0.matches == "function" && __s215param0.matches(__s215param1)) {
          return __s215param0;
        }
        __s215param0 = __s215param0.parentNode;
      }
    };
  }, function (__s220param0, __s220param1, __s220param2) {
    var __s220local0 = __s220param2(4);
    function _delegate(__s222param0, __s222param1, __s222param2, __s222param3, __s222param4) {
      var __s222local0 = function listener(__s224param0, __s224param1, __s224param2, __s224param3) {
        return function (__s226param0) {
          __s226param0.delegateTarget = __s220local0(__s226param0.target, __s224param1);
          if (__s226param0.delegateTarget) {
            __s224param3.call(__s224param0, __s226param0);
          }
        };
      }.apply(this, arguments);
      __s222param0.addEventListener(__s222param2, __s222local0, __s222param4);
      return {
        destroy: function () {
          __s222param0.removeEventListener(__s222param2, __s222local0, __s222param4);
        }
      };
    }
    __s220param0.exports = function delegate(__s231param0, __s231param1, __s231param2, __s231param3, __s231param4) {
      if (typeof __s231param0.addEventListener == "function") {
        return _delegate.apply(null, arguments);
      } else if (typeof __s231param2 == "function") {
        return _delegate.bind(null, document).apply(null, arguments);
      } else {
        if (typeof __s231param0 == "string") {
          __s231param0 = document.querySelectorAll(__s231param0);
        }
        return Array.prototype.map.call(__s231param0, function (__s237param0) {
          return _delegate(__s237param0, __s231param1, __s231param2, __s231param3, __s231param4);
        });
      }
    };
  }, function (__s239param0, __s239param1) {
    __s239param1.node = function (__s241param0) {
      return __s241param0 !== undefined && __s241param0 instanceof HTMLElement && __s241param0.nodeType === 1;
    };
    __s239param1.nodeList = function (__s243param0) {
      var __s243local0 = Object.prototype.toString.call(__s243param0);
      return __s243param0 !== undefined && (__s243local0 === "[object NodeList]" || __s243local0 === "[object HTMLCollection]") && "length" in __s243param0 && (__s243param0.length === 0 || __s239param1.node(__s243param0[0]));
    };
    __s239param1.string = function (__s245param0) {
      return typeof __s245param0 == "string" || __s245param0 instanceof String;
    };
    __s239param1.fn = function (__s247param0) {
      return Object.prototype.toString.call(__s247param0) === "[object Function]";
    };
  }, function (__s249param0, __s249param1) {
    __s249param0.exports = function select(__s251param0) {
      var __s251local0;
      if (__s251param0.nodeName === "SELECT") {
        __s251param0.focus();
        __s251local0 = __s251param0.value;
      } else if (__s251param0.nodeName === "INPUT" || __s251param0.nodeName === "TEXTAREA") {
        var __s251local1 = __s251param0.hasAttribute("readonly");
        if (!__s251local1) {
          __s251param0.setAttribute("readonly", "");
        }
        __s251param0.select();
        __s251param0.setSelectionRange(0, __s251param0.value.length);
        if (!__s251local1) {
          __s251param0.removeAttribute("readonly");
        }
        __s251local0 = __s251param0.value;
      } else {
        if (__s251param0.hasAttribute("contenteditable")) {
          __s251param0.focus();
        }
        var __s251local2 = window.getSelection();
        var __s251local3 = document.createRange();
        __s251local3.selectNodeContents(__s251param0);
        __s251local2.removeAllRanges();
        __s251local2.addRange(__s251local3);
        __s251local0 = __s251local2.toString();
      }
      return __s251local0;
    };
  }]);
});
