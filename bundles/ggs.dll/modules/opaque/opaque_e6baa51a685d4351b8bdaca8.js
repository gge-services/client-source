var __s0local0 = require("gge-module:exact_6641d85c457478de")(module);
import * as __s0local1 from "./24.js";
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
export var _gsScope = typeof window != "undefined" ? window : __s0local0 !== undefined && __s0local0.exports && __s0local1 !== undefined ? __s0local1 : {};
export var TweenLite = function (__s1param0, __s1param1) {
  var __s1local0 = {};
  var __s1local1 = __s1param0.document;
  var __s1local2 = __s1param0.GreenSockGlobals = __s1param0.GreenSockGlobals || __s1param0;
  if (__s1local2.TweenLite) {
    return __s1local2.TweenLite;
  }
  var __s1local3;
  var __s1local4;
  var __s1local5;
  var __s1local6;
  var __s1local7;
  var __s1local8;
  var __s1local9;
  function __s1local10(__s4param0) {
    var __s4local0;
    var __s4local1 = __s4param0.split(".");
    var __s4local2 = __s1local2;
    for (__s4local0 = 0; __s4local0 < __s4local1.length; __s4local0++) {
      __s4local2[__s4local1[__s4local0]] = __s4local2 = __s4local2[__s4local1[__s4local0]] || {};
    }
    return __s4local2;
  }
  var __s1local11 = __s1local10("com.greensock");
  function __s1local12(__s8param0) {
    var __s8local0;
    var __s8local1 = [];
    var __s8local2 = __s8param0.length;
    for (__s8local0 = 0; __s8local0 !== __s8local2; __s8local1.push(__s8param0[__s8local0++]));
    return __s8local1;
  }
  function __s1local13() {}
  __s1local8 = Object.prototype.toString;
  __s1local9 = __s1local8.call([]);
  function __s1local14(__s13param0) {
    return __s13param0 != null && (__s13param0 instanceof Array || typeof __s13param0 == "object" && !!__s13param0.push && __s1local8.call(__s13param0) === __s1local9);
  }
  var __s1local15 = {};
  function __s1local16(__s15param0, __s15param1, __s15param2, __s15param3) {
    this.sc = __s1local15[__s15param0] ? __s1local15[__s15param0].sc : [];
    __s1local15[__s15param0] = this;
    this.gsClass = null;
    this.func = __s15param2;
    var __s15local0 = [];
    this.check = function (__s17param0) {
      var __s17local0;
      var __s17local1;
      var __s17local2;
      var __s17local3;
      for (var __s17local4 = __s15param1.length, __s17local5 = __s17local4; --__s17local4 > -1;) {
        if ((__s17local0 = __s1local15[__s15param1[__s17local4]] || new __s1local16(__s15param1[__s17local4], [])).gsClass) {
          __s15local0[__s17local4] = __s17local0.gsClass;
          __s17local5--;
        } else if (__s17param0) {
          __s17local0.sc.push(this);
        }
      }
      if (__s17local5 === 0 && __s15param2) {
        __s17local2 = (__s17local1 = ("com.greensock." + __s15param0).split(".")).pop();
        __s17local3 = __s1local10(__s17local1.join("."))[__s17local2] = this.gsClass = __s15param2.apply(__s15param2, __s15local0);
        if (__s15param3) {
          __s1local2[__s17local2] = __s1local0[__s17local2] = __s17local3;
        }
        __s17local4 = 0;
        for (; __s17local4 < this.sc.length; __s17local4++) {
          this.sc[__s17local4].check();
        }
      }
    };
    this.check(true);
  }
  var __s1local17 = __s1param0._gsDefine = function (__s27param0, __s27param1, __s27param2, __s27param3) {
    return new __s1local16(__s27param0, __s27param1, __s27param2, __s27param3);
  };
  var __s1local18 = __s1local11._class = function (__s29param0, __s29param1, __s29param2) {
    __s29param1 = __s29param1 || function () {};
    __s1local17(__s29param0, [], function () {
      return __s29param1;
    }, __s29param2);
    return __s29param1;
  };
  __s1local17.globals = __s1local2;
  var __s1local19 = [0, 0, 1, 1];
  var __s1local20 = __s1local18("easing.Ease", function (__s35param0, __s35param1, __s35param2, __s35param3) {
    this._func = __s35param0;
    this._type = __s35param2 || 0;
    this._power = __s35param3 || 0;
    this._params = __s35param1 ? __s1local19.concat(__s35param1) : __s1local19;
  }, true);
  var __s1local21 = __s1local20.map = {};
  var __s1local22 = __s1local20.register = function (__s37param0, __s37param1, __s37param2, __s37param3) {
    var __s37local0;
    var __s37local1;
    var __s37local2;
    var __s37local3;
    var __s37local4 = __s37param1.split(",");
    for (var __s37local5 = __s37local4.length, __s37local6 = (__s37param2 || "easeIn,easeOut,easeInOut").split(","); --__s37local5 > -1;) {
      __s37local1 = __s37local4[__s37local5];
      __s37local0 = __s37param3 ? __s1local18("easing." + __s37local1, null, true) : __s1local11.easing[__s37local1] || {};
      __s37local2 = __s37local6.length;
      while (--__s37local2 > -1) {
        __s37local3 = __s37local6[__s37local2];
        __s1local21[__s37local1 + "." + __s37local3] = __s1local21[__s37local3 + __s37local1] = __s37local0[__s37local3] = __s37param0.getRatio ? __s37param0 : __s37param0[__s37local3] || new __s37param0();
      }
    }
  };
  (__s1local5 = __s1local20.prototype)._calcEnd = false;
  __s1local5.getRatio = function (__s43param0) {
    if (this._func) {
      this._params[0] = __s43param0;
      return this._func.apply(null, this._params);
    }
    var __s43local0 = this._type;
    var __s43local1 = this._power;
    var __s43local2 = __s43local0 === 1 ? 1 - __s43param0 : __s43local0 === 2 ? __s43param0 : __s43param0 < 0.5 ? __s43param0 * 2 : (1 - __s43param0) * 2;
    if (__s43local1 === 1) {
      __s43local2 *= __s43local2;
    } else if (__s43local1 === 2) {
      __s43local2 *= __s43local2 * __s43local2;
    } else if (__s43local1 === 3) {
      __s43local2 *= __s43local2 * __s43local2 * __s43local2;
    } else if (__s43local1 === 4) {
      __s43local2 *= __s43local2 * __s43local2 * __s43local2 * __s43local2;
    }
    if (__s43local0 === 1) {
      return 1 - __s43local2;
    } else if (__s43local0 === 2) {
      return __s43local2;
    } else if (__s43param0 < 0.5) {
      return __s43local2 / 2;
    } else {
      return 1 - __s43local2 / 2;
    }
  };
  __s1local4 = (__s1local3 = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
  while (--__s1local4 > -1) {
    __s1local5 = __s1local3[__s1local4] + ",Power" + __s1local4;
    __s1local22(new __s1local20(null, null, 1, __s1local4), __s1local5, "easeOut", true);
    __s1local22(new __s1local20(null, null, 2, __s1local4), __s1local5, "easeIn" + (__s1local4 === 0 ? ",easeNone" : ""));
    __s1local22(new __s1local20(null, null, 3, __s1local4), __s1local5, "easeInOut");
  }
  __s1local21.linear = __s1local11.easing.Linear.easeIn;
  __s1local21.swing = __s1local11.easing.Quad.easeInOut;
  var __s1local23 = __s1local18("events.EventDispatcher", function (__s56param0) {
    this._listeners = {};
    this._eventTarget = __s56param0 || this;
  });
  (__s1local5 = __s1local23.prototype).addEventListener = function (__s58param0, __s58param1, __s58param2, __s58param3, __s58param4) {
    __s58param4 = __s58param4 || 0;
    var __s58local0;
    var __s58local1;
    var __s58local2 = this._listeners[__s58param0];
    var __s58local3 = 0;
    if (this === __s1local6 && !__s1local7) {
      __s1local6.wake();
    }
    if (__s58local2 == null) {
      this._listeners[__s58param0] = __s58local2 = [];
    }
    __s58local1 = __s58local2.length;
    while (--__s58local1 > -1) {
      if ((__s58local0 = __s58local2[__s58local1]).c === __s58param1 && __s58local0.s === __s58param2) {
        __s58local2.splice(__s58local1, 1);
      } else if (__s58local3 === 0 && __s58local0.pr < __s58param4) {
        __s58local3 = __s58local1 + 1;
      }
    }
    __s58local2.splice(__s58local3, 0, {
      c: __s58param1,
      s: __s58param2,
      up: __s58param3,
      pr: __s58param4
    });
  };
  __s1local5.removeEventListener = function (__s66param0, __s66param1) {
    var __s66local0;
    var __s66local1 = this._listeners[__s66param0];
    if (__s66local1) {
      for (__s66local0 = __s66local1.length; --__s66local0 > -1;) {
        if (__s66local1[__s66local0].c === __s66param1) {
          __s66local1.splice(__s66local0, 1);
          return;
        }
      }
    }
  };
  __s1local5.dispatchEvent = function (__s72param0) {
    var __s72local0;
    var __s72local1;
    var __s72local2;
    var __s72local3 = this._listeners[__s72param0];
    if (__s72local3) {
      if ((__s72local0 = __s72local3.length) > 1) {
        __s72local3 = __s72local3.slice(0);
      }
      __s72local1 = this._eventTarget;
      while (--__s72local0 > -1) {
        if (__s72local2 = __s72local3[__s72local0]) {
          if (__s72local2.up) {
            __s72local2.c.call(__s72local2.s || __s72local1, {
              type: __s72param0,
              target: __s72local1
            });
          } else {
            __s72local2.c.call(__s72local2.s || __s72local1);
          }
        }
      }
    }
  };
  var __s1local24 = __s1param0.requestAnimationFrame;
  var __s1local25 = __s1param0.cancelAnimationFrame;
  var __s1local26 = Date.now || function () {
    return new Date().getTime();
  };
  var __s1local27 = __s1local26();
  for (__s1local4 = (__s1local3 = ["ms", "moz", "webkit", "o"]).length; --__s1local4 > -1 && !__s1local24;) {
    __s1local24 = __s1param0[__s1local3[__s1local4] + "RequestAnimationFrame"];
    __s1local25 = __s1param0[__s1local3[__s1local4] + "CancelAnimationFrame"] || __s1param0[__s1local3[__s1local4] + "CancelRequestAnimationFrame"];
  }
  __s1local18("Ticker", function (__s85param0, __s85param1) {
    var __s85local0;
    var __s85local1;
    var __s85local2;
    var __s85local3;
    var __s85local4;
    var __s85local5 = this;
    var __s85local6 = __s1local26();
    var __s85local7 = __s85param1 !== false && !!__s1local24 && "auto";
    var __s85local8 = 500;
    var __s85local9 = 33;
    function __s85local10(__s87param0) {
      var __s87local0;
      var __s87local1;
      var __s87local2 = __s1local26() - __s1local27;
      if (__s87local2 > __s85local8) {
        __s85local6 += __s87local2 - __s85local9;
      }
      __s1local27 += __s87local2;
      __s85local5.time = (__s1local27 - __s85local6) / 1000;
      __s87local0 = __s85local5.time - __s85local4;
      if (!__s85local0 || __s87local0 > 0 || __s87param0 === true) {
        __s85local5.frame++;
        __s85local4 += __s87local0 + (__s87local0 >= __s85local3 ? 0.004 : __s85local3 - __s87local0);
        __s87local1 = true;
      }
      if (__s87param0 !== true) {
        __s85local2 = __s85local1(__s85local10);
      }
      if (__s87local1) {
        __s85local5.dispatchEvent("tick");
      }
    }
    __s1local23.call(__s85local5);
    __s85local5.time = __s85local5.frame = 0;
    __s85local5.tick = function () {
      __s85local10(true);
    };
    __s85local5.lagSmoothing = function (__s95param0, __s95param1) {
      if (!arguments.length) {
        return __s85local8 < 10000000000;
      }
      __s85local8 = __s95param0 || 10000000000;
      __s85local9 = Math.min(__s95param1, __s85local8, 0);
    };
    __s85local5.sleep = function () {
      if (__s85local2 != null) {
        if (__s85local7 && __s1local25) {
          __s1local25(__s85local2);
        } else {
          clearTimeout(__s85local2);
        }
        __s85local1 = __s1local13;
        __s85local2 = null;
        if (__s85local5 === __s1local6) {
          __s1local7 = false;
        }
      }
    };
    __s85local5.wake = function (__s104param0) {
      if (__s85local2 !== null) {
        __s85local5.sleep();
      } else if (__s104param0) {
        __s85local6 += -__s1local27 + (__s1local27 = __s1local26());
      } else if (__s85local5.frame > 10) {
        __s1local27 = __s1local26() - __s85local8 + 5;
      }
      __s85local1 = __s85local0 === 0 ? __s1local13 : __s85local7 && __s1local24 ? __s1local24 : function (__s109param0) {
        return setTimeout(__s109param0, (__s85local4 - __s85local5.time) * 1000 + 1 | 0);
      };
      if (__s85local5 === __s1local6) {
        __s1local7 = true;
      }
      __s85local10(2);
    };
    __s85local5.fps = function (__s112param0) {
      if (!arguments.length) {
        return __s85local0;
      }
      __s85local3 = 1 / ((__s85local0 = __s112param0) || 60);
      __s85local4 = this.time + __s85local3;
      __s85local5.wake();
    };
    __s85local5.useRAF = function (__s115param0) {
      if (!arguments.length) {
        return __s85local7;
      }
      __s85local5.sleep();
      __s85local7 = __s115param0;
      __s85local5.fps(__s85local0);
    };
    __s85local5.fps(__s85param0);
    setTimeout(function () {
      if (__s85local7 === "auto" && __s85local5.frame < 5 && (__s1local1 || {}).visibilityState !== "hidden") {
        __s85local5.useRAF(false);
      }
    }, 1500);
  });
  (__s1local5 = __s1local11.Ticker.prototype = new __s1local11.events.EventDispatcher()).constructor = __s1local11.Ticker;
  var __s1local28 = __s1local18("core.Animation", function (__s121param0, __s121param1) {
    this.vars = __s121param1 = __s121param1 || {};
    this._duration = this._totalDuration = __s121param0 || 0;
    this._delay = Number(__s121param1.delay) || 0;
    this._timeScale = 1;
    this._active = __s121param1.immediateRender === true;
    this.data = __s121param1.data;
    this._reversed = __s121param1.reversed === true;
    if (__s1local47) {
      if (!__s1local7) {
        __s1local6.wake();
      }
      var __s121local0 = this.vars.useFrames ? __s1local46 : __s1local47;
      __s121local0.add(this, __s121local0._time);
      if (this.vars.paused) {
        this.paused(true);
      }
    }
  });
  __s1local6 = __s1local28.ticker = new __s1local11.Ticker();
  (__s1local5 = __s1local28.prototype)._dirty = __s1local5._gc = __s1local5._initted = __s1local5._paused = false;
  __s1local5._totalTime = __s1local5._time = 0;
  __s1local5._rawPrevTime = -1;
  __s1local5._next = __s1local5._last = __s1local5._onUpdate = __s1local5._timeline = __s1local5.timeline = null;
  __s1local5._paused = false;
  function __s1local29() {
    if (__s1local7 && __s1local26() - __s1local27 > 2000 && ((__s1local1 || {}).visibilityState !== "hidden" || !__s1local6.lagSmoothing())) {
      __s1local6.wake();
    }
    var __s126local0 = setTimeout(__s1local29, 2000);
    if (__s126local0.unref) {
      __s126local0.unref();
    }
  }
  __s1local29();
  __s1local5.play = function (__s130param0, __s130param1) {
    if (__s130param0 != null) {
      this.seek(__s130param0, __s130param1);
    }
    return this.reversed(false).paused(false);
  };
  __s1local5.pause = function (__s133param0, __s133param1) {
    if (__s133param0 != null) {
      this.seek(__s133param0, __s133param1);
    }
    return this.paused(true);
  };
  __s1local5.resume = function (__s136param0, __s136param1) {
    if (__s136param0 != null) {
      this.seek(__s136param0, __s136param1);
    }
    return this.paused(false);
  };
  __s1local5.seek = function (__s139param0, __s139param1) {
    return this.totalTime(Number(__s139param0), __s139param1 !== false);
  };
  __s1local5.restart = function (__s141param0, __s141param1) {
    return this.reversed(false).paused(false).totalTime(__s141param0 ? -this._delay : 0, __s141param1 !== false, true);
  };
  __s1local5.reverse = function (__s143param0, __s143param1) {
    if (__s143param0 != null) {
      this.seek(__s143param0 || this.totalDuration(), __s143param1);
    }
    return this.reversed(true).paused(false);
  };
  __s1local5.render = function (__s146param0, __s146param1, __s146param2) {};
  __s1local5.invalidate = function () {
    this._time = this._totalTime = 0;
    this._initted = this._gc = false;
    this._rawPrevTime = -1;
    if (!!this._gc || !this.timeline) {
      this._enabled(true);
    }
    return this;
  };
  __s1local5.isActive = function () {
    var __s151local0;
    var __s151local1 = this._timeline;
    var __s151local2 = this._startTime;
    return !__s151local1 || !this._gc && !this._paused && __s151local1.isActive() && (__s151local0 = __s151local1.rawTime(true)) >= __s151local2 && __s151local0 < __s151local2 + this.totalDuration() / this._timeScale - 1e-7;
  };
  __s1local5._enabled = function (__s153param0, __s153param1) {
    if (!__s1local7) {
      __s1local6.wake();
    }
    this._gc = !__s153param0;
    this._active = this.isActive();
    if (__s153param1 !== true) {
      if (__s153param0 && !this.timeline) {
        this._timeline.add(this, this._startTime - this._delay);
      } else if (!__s153param0 && this.timeline) {
        this._timeline._remove(this, true);
      }
    }
    return false;
  };
  __s1local5._kill = function (__s159param0, __s159param1) {
    return this._enabled(false, false);
  };
  __s1local5.kill = function (__s161param0, __s161param1) {
    this._kill(__s161param0, __s161param1);
    return this;
  };
  __s1local5._uncache = function (__s163param0) {
    for (var __s163local0 = __s163param0 ? this : this.timeline; __s163local0;) {
      __s163local0._dirty = true;
      __s163local0 = __s163local0.timeline;
    }
    return this;
  };
  __s1local5._swapSelfInParams = function (__s167param0) {
    for (var __s167local0 = __s167param0.length, __s167local1 = __s167param0.concat(); --__s167local0 > -1;) {
      if (__s167param0[__s167local0] === "{self}") {
        __s167local1[__s167local0] = this;
      }
    }
    return __s167local1;
  };
  __s1local5._callback = function (__s172param0) {
    var __s172local0 = this.vars;
    var __s172local1 = __s172local0[__s172param0];
    var __s172local2 = __s172local0[__s172param0 + "Params"];
    var __s172local3 = __s172local0[__s172param0 + "Scope"] || __s172local0.callbackScope || this;
    switch (__s172local2 ? __s172local2.length : 0) {
      case 0:
        __s172local1.call(__s172local3);
        break;
      case 1:
        __s172local1.call(__s172local3, __s172local2[0]);
        break;
      case 2:
        __s172local1.call(__s172local3, __s172local2[0], __s172local2[1]);
        break;
      default:
        __s172local1.apply(__s172local3, __s172local2);
    }
  };
  __s1local5.eventCallback = function (__s175param0, __s175param1, __s175param2, __s175param3) {
    if ((__s175param0 || "").substr(0, 2) === "on") {
      var __s175local0 = this.vars;
      if (arguments.length === 1) {
        return __s175local0[__s175param0];
      }
      if (__s175param1 == null) {
        delete __s175local0[__s175param0];
      } else {
        __s175local0[__s175param0] = __s175param1;
        __s175local0[__s175param0 + "Params"] = __s1local14(__s175param2) && __s175param2.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(__s175param2) : __s175param2;
        __s175local0[__s175param0 + "Scope"] = __s175param3;
      }
      if (__s175param0 === "onUpdate") {
        this._onUpdate = __s175param1;
      }
    }
    return this;
  };
  __s1local5.delay = function (__s182param0) {
    if (arguments.length) {
      if (this._timeline.smoothChildTiming) {
        this.startTime(this._startTime + __s182param0 - this._delay);
      }
      this._delay = __s182param0;
      return this;
    } else {
      return this._delay;
    }
  };
  __s1local5.duration = function (__s187param0) {
    if (arguments.length) {
      this._duration = this._totalDuration = __s187param0;
      this._uncache(true);
      if (this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && __s187param0 !== 0) {
        this.totalTime(this._totalTime * (__s187param0 / this._duration), true);
      }
      return this;
    } else {
      this._dirty = false;
      return this._duration;
    }
  };
  __s1local5.totalDuration = function (__s192param0) {
    this._dirty = false;
    if (arguments.length) {
      return this.duration(__s192param0);
    } else {
      return this._totalDuration;
    }
  };
  __s1local5.time = function (__s196param0, __s196param1) {
    if (arguments.length) {
      if (this._dirty) {
        this.totalDuration();
      }
      return this.totalTime(__s196param0 > this._duration ? this._duration : __s196param0, __s196param1);
    } else {
      return this._time;
    }
  };
  __s1local5.totalTime = function (__s201param0, __s201param1, __s201param2) {
    if (!__s1local7) {
      __s1local6.wake();
    }
    if (!arguments.length) {
      return this._totalTime;
    }
    if (this._timeline) {
      if (__s201param0 < 0 && !__s201param2) {
        __s201param0 += this.totalDuration();
      }
      if (this._timeline.smoothChildTiming) {
        if (this._dirty) {
          this.totalDuration();
        }
        var __s201local0 = this._totalDuration;
        var __s201local1 = this._timeline;
        if (__s201param0 > __s201local0 && !__s201param2) {
          __s201param0 = __s201local0;
        }
        this._startTime = (this._paused ? this._pauseTime : __s201local1._time) - (this._reversed ? __s201local0 - __s201param0 : __s201param0) / this._timeScale;
        if (!__s201local1._dirty) {
          this._uncache(false);
        }
        if (__s201local1._timeline) {
          while (__s201local1._timeline) {
            if (__s201local1._timeline._time !== (__s201local1._startTime + __s201local1._totalTime) / __s201local1._timeScale) {
              __s201local1.totalTime(__s201local1._totalTime, true);
            }
            __s201local1 = __s201local1._timeline;
          }
        }
      }
      if (this._gc) {
        this._enabled(true, false);
      }
      if (this._totalTime !== __s201param0 || this._duration === 0) {
        if (__s1local33.length) {
          __s1local49();
        }
        this.render(__s201param0, __s201param1, false);
        if (__s1local33.length) {
          __s1local49();
        }
      }
    }
    return this;
  };
  __s1local5.progress = __s1local5.totalProgress = function (__s219param0, __s219param1) {
    var __s219local0 = this.duration();
    if (arguments.length) {
      return this.totalTime(__s219local0 * __s219param0, __s219param1);
    } else if (__s219local0) {
      return this._time / __s219local0;
    } else {
      return this.ratio;
    }
  };
  __s1local5.startTime = function (__s224param0) {
    if (arguments.length) {
      if (__s224param0 !== this._startTime) {
        this._startTime = __s224param0;
        if (this.timeline && this.timeline._sortChildren) {
          this.timeline.add(this, __s224param0 - this._delay);
        }
      }
      return this;
    } else {
      return this._startTime;
    }
  };
  __s1local5.endTime = function (__s230param0) {
    return this._startTime + (__s230param0 != 0 ? this.totalDuration() : this.duration()) / this._timeScale;
  };
  __s1local5.timeScale = function (__s232param0) {
    if (!arguments.length) {
      return this._timeScale;
    }
    var __s232local0;
    var __s232local1;
    __s232param0 = __s232param0 || 1e-10;
    if (this._timeline && this._timeline.smoothChildTiming) {
      __s232local1 = (__s232local0 = this._pauseTime) || __s232local0 === 0 ? __s232local0 : this._timeline.totalTime();
      this._startTime = __s232local1 - (__s232local1 - this._startTime) * this._timeScale / __s232param0;
    }
    this._timeScale = __s232param0;
    __s232local1 = this.timeline;
    while (__s232local1 && __s232local1.timeline) {
      __s232local1._dirty = true;
      __s232local1.totalDuration();
      __s232local1 = __s232local1.timeline;
    }
    return this;
  };
  __s1local5.reversed = function (__s238param0) {
    if (arguments.length) {
      if (__s238param0 != this._reversed) {
        this._reversed = __s238param0;
        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
      }
      return this;
    } else {
      return this._reversed;
    }
  };
  __s1local5.paused = function (__s243param0) {
    if (!arguments.length) {
      return this._paused;
    }
    var __s243local0;
    var __s243local1;
    var __s243local2 = this._timeline;
    if (__s243param0 != this._paused && __s243local2) {
      if (!__s1local7 && !__s243param0) {
        __s1local6.wake();
      }
      __s243local1 = (__s243local0 = __s243local2.rawTime()) - this._pauseTime;
      if (!__s243param0 && __s243local2.smoothChildTiming) {
        this._startTime += __s243local1;
        this._uncache(false);
      }
      this._pauseTime = __s243param0 ? __s243local0 : null;
      this._paused = __s243param0;
      this._active = this.isActive();
      if (!__s243param0 && __s243local1 !== 0 && this._initted && this.duration()) {
        __s243local0 = __s243local2.smoothChildTiming ? this._totalTime : (__s243local0 - this._startTime) / this._timeScale;
        this.render(__s243local0, __s243local0 === this._totalTime, true);
      }
    }
    if (this._gc && !__s243param0) {
      this._enabled(true, false);
    }
    return this;
  };
  var __s1local30 = __s1local18("core.SimpleTimeline", function (__s251param0) {
    __s1local28.call(this, 0, __s251param0);
    this.autoRemoveChildren = this.smoothChildTiming = true;
  });
  (__s1local5 = __s1local30.prototype = new __s1local28()).constructor = __s1local30;
  __s1local5.kill()._gc = false;
  __s1local5._first = __s1local5._last = __s1local5._recent = null;
  __s1local5._sortChildren = false;
  __s1local5.add = __s1local5.insert = function (__s253param0, __s253param1, __s253param2, __s253param3) {
    var __s253local0;
    var __s253local1;
    __s253param0._startTime = Number(__s253param1 || 0) + __s253param0._delay;
    if (__s253param0._paused && this !== __s253param0._timeline) {
      __s253param0._pauseTime = this.rawTime() - (__s253param0._timeline.rawTime() - __s253param0._pauseTime);
    }
    if (__s253param0.timeline) {
      __s253param0.timeline._remove(__s253param0, true);
    }
    __s253param0.timeline = __s253param0._timeline = this;
    if (__s253param0._gc) {
      __s253param0._enabled(true, true);
    }
    __s253local0 = this._last;
    if (this._sortChildren) {
      for (__s253local1 = __s253param0._startTime; __s253local0 && __s253local0._startTime > __s253local1;) {
        __s253local0 = __s253local0._prev;
      }
    }
    if (__s253local0) {
      __s253param0._next = __s253local0._next;
      __s253local0._next = __s253param0;
    } else {
      __s253param0._next = this._first;
      this._first = __s253param0;
    }
    if (__s253param0._next) {
      __s253param0._next._prev = __s253param0;
    } else {
      this._last = __s253param0;
    }
    __s253param0._prev = __s253local0;
    this._recent = __s253param0;
    if (this._timeline) {
      this._uncache(true);
    }
    return this;
  };
  __s1local5._remove = function (__s266param0, __s266param1) {
    if (__s266param0.timeline === this) {
      if (!__s266param1) {
        __s266param0._enabled(false, true);
      }
      if (__s266param0._prev) {
        __s266param0._prev._next = __s266param0._next;
      } else if (this._first === __s266param0) {
        this._first = __s266param0._next;
      }
      if (__s266param0._next) {
        __s266param0._next._prev = __s266param0._prev;
      } else if (this._last === __s266param0) {
        this._last = __s266param0._prev;
      }
      __s266param0._next = __s266param0._prev = __s266param0.timeline = null;
      if (__s266param0 === this._recent) {
        this._recent = this._last;
      }
      if (this._timeline) {
        this._uncache(true);
      }
    }
    return this;
  };
  __s1local5.render = function (__s276param0, __s276param1, __s276param2) {
    var __s276local0;
    var __s276local1 = this._first;
    for (this._totalTime = this._time = this._rawPrevTime = __s276param0; __s276local1;) {
      __s276local0 = __s276local1._next;
      if (__s276local1._active || __s276param0 >= __s276local1._startTime && !__s276local1._paused && !__s276local1._gc) {
        if (__s276local1._reversed) {
          __s276local1.render((__s276local1._dirty ? __s276local1.totalDuration() : __s276local1._totalDuration) - (__s276param0 - __s276local1._startTime) * __s276local1._timeScale, __s276param1, __s276param2);
        } else {
          __s276local1.render((__s276param0 - __s276local1._startTime) * __s276local1._timeScale, __s276param1, __s276param2);
        }
      }
      __s276local1 = __s276local0;
    }
  };
  __s1local5.rawTime = function () {
    if (!__s1local7) {
      __s1local6.wake();
    }
    return this._totalTime;
  };
  var __s1local31 = __s1local18("TweenLite", function (__s286param0, __s286param1, __s286param2) {
    __s1local28.call(this, __s286param1, __s286param2);
    this.render = __s1local31.prototype.render;
    if (__s286param0 == null) {
      throw "Cannot tween a null target.";
    }
    this.target = __s286param0 = typeof __s286param0 != "string" ? __s286param0 : __s1local31.selector(__s286param0) || __s286param0;
    var __s286local0;
    var __s286local1;
    var __s286local2;
    var __s286local3 = __s286param0.jquery || __s286param0.length && __s286param0 !== __s1param0 && __s286param0[0] && (__s286param0[0] === __s1param0 || __s286param0[0].nodeType && __s286param0[0].style && !__s286param0.nodeType);
    var __s286local4 = this.vars.overwrite;
    this._overwrite = __s286local4 = __s286local4 == null ? __s1local45[__s1local31.defaultOverwrite] : typeof __s286local4 == "number" ? __s286local4 >> 0 : __s1local45[__s286local4];
    if ((__s286local3 || __s286param0 instanceof Array || __s286param0.push && __s1local14(__s286param0)) && typeof __s286param0[0] != "number") {
      this._targets = __s286local2 = __s1local12(__s286param0);
      this._propLookup = [];
      this._siblings = [];
      __s286local0 = 0;
      for (; __s286local0 < __s286local2.length; __s286local0++) {
        if (__s286local1 = __s286local2[__s286local0]) {
          if (typeof __s286local1 != "string") {
            if (__s286local1.length && __s286local1 !== __s1param0 && __s286local1[0] && (__s286local1[0] === __s1param0 || __s286local1[0].nodeType && __s286local1[0].style && !__s286local1.nodeType)) {
              __s286local2.splice(__s286local0--, 1);
              this._targets = __s286local2 = __s286local2.concat(__s1local12(__s286local1));
            } else {
              this._siblings[__s286local0] = __s1local50(__s286local1, this, false);
              if (__s286local4 === 1 && this._siblings[__s286local0].length > 1) {
                __s1local52(__s286local1, this, null, 1, this._siblings[__s286local0]);
              }
            }
          } else if (typeof (__s286local1 = __s286local2[__s286local0--] = __s1local31.selector(__s286local1)) == "string") {
            __s286local2.splice(__s286local0 + 1, 1);
          }
        } else {
          __s286local2.splice(__s286local0--, 1);
        }
      }
    } else {
      this._propLookup = {};
      this._siblings = __s1local50(__s286param0, this, false);
      if (__s286local4 === 1 && this._siblings.length > 1) {
        __s1local52(__s286param0, this, null, 1, this._siblings);
      }
    }
    if (this.vars.immediateRender || __s286param1 === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
      this._time = -1e-10;
      this.render(Math.min(0, -this._delay));
    }
  }, true);
  function __s1local32(__s302param0) {
    return __s302param0 && __s302param0.length && __s302param0 !== __s1param0 && __s302param0[0] && (__s302param0[0] === __s1param0 || __s302param0[0].nodeType && __s302param0[0].style && !__s302param0.nodeType);
  }
  (__s1local5 = __s1local31.prototype = new __s1local28()).constructor = __s1local31;
  __s1local5.kill()._gc = false;
  __s1local5.ratio = 0;
  __s1local5._firstPT = __s1local5._targets = __s1local5._overwrittenProps = __s1local5._startAt = null;
  __s1local5._notifyPluginsOfEnabled = __s1local5._lazy = false;
  __s1local31.version = "2.0.2";
  __s1local31.defaultEase = __s1local5._ease = new __s1local20(null, null, 1, 1);
  __s1local31.defaultOverwrite = "auto";
  __s1local31.ticker = __s1local6;
  __s1local31.autoSleep = 120;
  __s1local31.lagSmoothing = function (__s304param0, __s304param1) {
    __s1local6.lagSmoothing(__s304param0, __s304param1);
  };
  __s1local31.selector = __s1param0.$ || __s1param0.jQuery || function (__s306param0) {
    var __s306local0 = __s1param0.$ || __s1param0.jQuery;
    if (__s306local0) {
      __s1local31.selector = __s306local0;
      return __s306local0(__s306param0);
    } else {
      __s1local1 ||= __s1param0.document;
      if (__s1local1) {
        if (__s1local1.querySelectorAll) {
          return __s1local1.querySelectorAll(__s306param0);
        } else {
          return __s1local1.getElementById(__s306param0.charAt(0) === "#" ? __s306param0.substr(1) : __s306param0);
        }
      } else {
        return __s306param0;
      }
    }
  };
  var __s1local33 = [];
  var __s1local34 = {};
  var __s1local35 = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
  var __s1local36 = /[\+-]=-?[\.\d]/;
  function __s1local37(__s314param0) {
    var __s314local0;
    for (var __s314local1 = this._firstPT; __s314local1;) {
      __s314local0 = __s314local1.blob ? __s314param0 === 1 && this.end != null ? this.end : __s314param0 ? this.join("") : this.start : __s314local1.c * __s314param0 + __s314local1.s;
      if (__s314local1.m) {
        __s314local0 = __s314local1.m.call(this._tween, __s314local0, this._target || __s314local1.t, this._tween);
      } else if (__s314local0 < 0.000001 && __s314local0 > -0.000001 && !__s314local1.blob) {
        __s314local0 = 0;
      }
      if (__s314local1.f) {
        if (__s314local1.fp) {
          __s314local1.t[__s314local1.p](__s314local1.fp, __s314local0);
        } else {
          __s314local1.t[__s314local1.p](__s314local0);
        }
      } else {
        __s314local1.t[__s314local1.p] = __s314local0;
      }
      __s314local1 = __s314local1._next;
    }
  }
  function __s1local38(__s324param0, __s324param1, __s324param2, __s324param3) {
    var __s324local0;
    var __s324local1;
    var __s324local2;
    var __s324local3;
    var __s324local4;
    var __s324local5;
    var __s324local6;
    var __s324local7 = [];
    var __s324local8 = 0;
    var __s324local9 = "";
    var __s324local10 = 0;
    __s324local7.start = __s324param0;
    __s324local7.end = __s324param1;
    __s324param0 = __s324local7[0] = __s324param0 + "";
    __s324param1 = __s324local7[1] = __s324param1 + "";
    if (__s324param2) {
      __s324param2(__s324local7);
      __s324param0 = __s324local7[0];
      __s324param1 = __s324local7[1];
    }
    __s324local7.length = 0;
    __s324local0 = __s324param0.match(__s1local35) || [];
    __s324local1 = __s324param1.match(__s1local35) || [];
    if (__s324param3) {
      __s324param3._next = null;
      __s324param3.blob = 1;
      __s324local7._firstPT = __s324local7._applyPT = __s324param3;
    }
    __s324local4 = __s324local1.length;
    __s324local3 = 0;
    for (; __s324local3 < __s324local4; __s324local3++) {
      __s324local6 = __s324local1[__s324local3];
      __s324local9 += (__s324local5 = __s324param1.substr(__s324local8, __s324param1.indexOf(__s324local6, __s324local8) - __s324local8)) || !__s324local3 ? __s324local5 : ",";
      __s324local8 += __s324local5.length;
      if (__s324local10) {
        __s324local10 = (__s324local10 + 1) % 5;
      } else if (__s324local5.substr(-5) === "rgba(") {
        __s324local10 = 1;
      }
      if (__s324local6 === __s324local0[__s324local3] || __s324local0.length <= __s324local3) {
        __s324local9 += __s324local6;
      } else {
        if (__s324local9) {
          __s324local7.push(__s324local9);
          __s324local9 = "";
        }
        __s324local2 = parseFloat(__s324local0[__s324local3]);
        __s324local7.push(__s324local2);
        __s324local7._firstPT = {
          _next: __s324local7._firstPT,
          t: __s324local7,
          p: __s324local7.length - 1,
          s: __s324local2,
          c: (__s324local6.charAt(1) === "=" ? parseInt(__s324local6.charAt(0) + "1", 10) * parseFloat(__s324local6.substr(2)) : parseFloat(__s324local6) - __s324local2) || 0,
          f: 0,
          m: __s324local10 && __s324local10 < 4 ? Math.round : 0
        };
      }
      __s324local8 += __s324local6.length;
    }
    if (__s324local9 += __s324param1.substr(__s324local8)) {
      __s324local7.push(__s324local9);
    }
    __s324local7.setRatio = __s1local37;
    if (__s1local36.test(__s324param1)) {
      __s324local7.end = null;
    }
    return __s324local7;
  }
  function __s1local39(__s337param0, __s337param1, __s337param2, __s337param3, __s337param4, __s337param5, __s337param6, __s337param7, __s337param8) {
    if (typeof __s337param3 == "function") {
      __s337param3 = __s337param3(__s337param8 || 0, __s337param0);
    }
    var __s337local0 = typeof __s337param0[__s337param1];
    var __s337local1 = __s337local0 !== "function" ? "" : __s337param1.indexOf("set") || typeof __s337param0["get" + __s337param1.substr(3)] != "function" ? __s337param1 : "get" + __s337param1.substr(3);
    var __s337local2 = __s337param2 !== "get" ? __s337param2 : __s337local1 ? __s337param6 ? __s337param0[__s337local1](__s337param6) : __s337param0[__s337local1]() : __s337param0[__s337param1];
    var __s337local3 = typeof __s337param3 == "string" && __s337param3.charAt(1) === "=";
    var __s337local4 = {
      t: __s337param0,
      p: __s337param1,
      s: __s337local2,
      f: __s337local0 === "function",
      pg: 0,
      n: __s337param4 || __s337param1,
      m: __s337param5 ? typeof __s337param5 == "function" ? __s337param5 : Math.round : 0,
      pr: 0,
      c: __s337local3 ? parseInt(__s337param3.charAt(0) + "1", 10) * parseFloat(__s337param3.substr(2)) : parseFloat(__s337param3) - __s337local2 || 0
    };
    if (typeof __s337local2 != "number" || typeof __s337param3 != "number" && !__s337local3) {
      if (__s337param6 || isNaN(__s337local2) || !__s337local3 && isNaN(__s337param3) || typeof __s337local2 == "boolean" || typeof __s337param3 == "boolean") {
        __s337local4.fp = __s337param6;
        __s337local4 = {
          t: __s1local38(__s337local2, __s337local3 ? parseFloat(__s337local4.s) + __s337local4.c + (__s337local4.s + "").replace(/[0-9\-\.]/g, "") : __s337param3, __s337param7 || __s1local31.defaultStringFilter, __s337local4),
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: __s337param4 || __s337param1,
          pr: 0,
          m: 0
        };
      } else {
        __s337local4.s = parseFloat(__s337local2);
        if (!__s337local3) {
          __s337local4.c = parseFloat(__s337param3) - __s337local4.s || 0;
        }
      }
    }
    if (__s337local4.c) {
      if (__s337local4._next = this._firstPT) {
        __s337local4._next._prev = __s337local4;
      }
      this._firstPT = __s337local4;
      return __s337local4;
    }
  }
  var __s1local40 = __s1local31._internals = {
    isArray: __s1local14,
    isSelector: __s1local32,
    lazyTweens: __s1local33,
    blobDif: __s1local38
  };
  var __s1local41 = __s1local31._plugins = {};
  var __s1local42 = __s1local40.tweenLookup = {};
  var __s1local43 = 0;
  var __s1local44 = __s1local40.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1
  };
  var __s1local45 = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    true: 1,
    false: 0
  };
  var __s1local46 = __s1local28._rootFramesTimeline = new __s1local30();
  var __s1local47 = __s1local28._rootTimeline = new __s1local30();
  var __s1local48 = 30;
  var __s1local49 = __s1local40.lazyRender = function () {
    var __s346local0;
    var __s346local1 = __s1local33.length;
    for (__s1local34 = {}; --__s346local1 > -1;) {
      if ((__s346local0 = __s1local33[__s346local1]) && __s346local0._lazy !== false) {
        __s346local0.render(__s346local0._lazy[0], __s346local0._lazy[1], true);
        __s346local0._lazy = false;
      }
    }
    __s1local33.length = 0;
  };
  __s1local47._startTime = __s1local6.time;
  __s1local46._startTime = __s1local6.frame;
  __s1local47._active = __s1local46._active = true;
  setTimeout(__s1local49, 1);
  __s1local28._updateRoot = __s1local31.render = function () {
    var __s351local0;
    var __s351local1;
    var __s351local2;
    if (__s1local33.length) {
      __s1local49();
    }
    __s1local47.render((__s1local6.time - __s1local47._startTime) * __s1local47._timeScale, false, false);
    __s1local46.render((__s1local6.frame - __s1local46._startTime) * __s1local46._timeScale, false, false);
    if (__s1local33.length) {
      __s1local49();
    }
    if (__s1local6.frame >= __s1local48) {
      __s1local48 = __s1local6.frame + (parseInt(__s1local31.autoSleep, 10) || 120);
      for (__s351local2 in __s1local42) {
        for (__s351local0 = (__s351local1 = __s1local42[__s351local2].tweens).length; --__s351local0 > -1;) {
          if (__s351local1[__s351local0]._gc) {
            __s351local1.splice(__s351local0, 1);
          }
        }
        if (__s351local1.length === 0) {
          delete __s1local42[__s351local2];
        }
      }
      if ((!(__s351local2 = __s1local47._first) || __s351local2._paused) && __s1local31.autoSleep && !__s1local46._first && __s1local6._listeners.tick.length === 1) {
        while (__s351local2 && __s351local2._paused) {
          __s351local2 = __s351local2._next;
        }
        if (!__s351local2) {
          __s1local6.sleep();
        }
      }
    }
  };
  __s1local6.addEventListener("tick", __s1local28._updateRoot);
  function __s1local50(__s366param0, __s366param1, __s366param2) {
    var __s366local0;
    var __s366local1;
    var __s366local2 = __s366param0._gsTweenID;
    if (!__s1local42[__s366local2 || (__s366param0._gsTweenID = __s366local2 = "t" + __s1local43++)]) {
      __s1local42[__s366local2] = {
        target: __s366param0,
        tweens: []
      };
    }
    if (__s366param1 && ((__s366local0 = __s1local42[__s366local2].tweens)[__s366local1 = __s366local0.length] = __s366param1, __s366param2)) {
      while (--__s366local1 > -1) {
        if (__s366local0[__s366local1] === __s366param1) {
          __s366local0.splice(__s366local1, 1);
        }
      }
    }
    return __s1local42[__s366local2].tweens;
  }
  function __s1local51(__s373param0, __s373param1, __s373param2, __s373param3) {
    var __s373local0;
    var __s373local1;
    var __s373local2 = __s373param0.vars.onOverwrite;
    if (__s373local2) {
      __s373local0 = __s373local2(__s373param0, __s373param1, __s373param2, __s373param3);
    }
    if (__s373local2 = __s1local31.onOverwrite) {
      __s373local1 = __s373local2(__s373param0, __s373param1, __s373param2, __s373param3);
    }
    return __s373local0 !== false && __s373local1 !== false;
  }
  function __s1local52(__s377param0, __s377param1, __s377param2, __s377param3, __s377param4) {
    var __s377local0;
    var __s377local1;
    var __s377local2;
    var __s377local3;
    if (__s377param3 === 1 || __s377param3 >= 4) {
      __s377local3 = __s377param4.length;
      __s377local0 = 0;
      for (; __s377local0 < __s377local3; __s377local0++) {
        if ((__s377local2 = __s377param4[__s377local0]) !== __s377param1) {
          if (!__s377local2._gc) {
            if (__s377local2._kill(null, __s377param0, __s377param1)) {
              __s377local1 = true;
            }
          }
        } else if (__s377param3 === 5) {
          break;
        }
      }
      return __s377local1;
    }
    var __s377local4;
    var __s377local5 = __s377param1._startTime + 1e-10;
    var __s377local6 = [];
    var __s377local7 = 0;
    var __s377local8 = __s377param1._duration === 0;
    for (__s377local0 = __s377param4.length; --__s377local0 > -1;) {
      if ((__s377local2 = __s377param4[__s377local0]) !== __s377param1 && !__s377local2._gc && !__s377local2._paused) {
        if (__s377local2._timeline !== __s377param1._timeline) {
          __s377local4 = __s377local4 || __s1local53(__s377param1, 0, __s377local8);
          if (__s1local53(__s377local2, __s377local4, __s377local8) === 0) {
            __s377local6[__s377local7++] = __s377local2;
          }
        } else if (__s377local2._startTime <= __s377local5 && __s377local2._startTime + __s377local2.totalDuration() / __s377local2._timeScale > __s377local5) {
          if (!__s377local8 && !!__s377local2._initted || !(__s377local5 - __s377local2._startTime <= 2e-10)) {
            __s377local6[__s377local7++] = __s377local2;
          }
        }
      }
    }
    for (__s377local0 = __s377local7; --__s377local0 > -1;) {
      __s377local3 = (__s377local2 = __s377local6[__s377local0])._firstPT;
      if (__s377param3 === 2 && __s377local2._kill(__s377param2, __s377param0, __s377param1)) {
        __s377local1 = true;
      }
      if (__s377param3 !== 2 || !__s377local2._firstPT && __s377local2._initted && __s377local3) {
        if (__s377param3 !== 2 && !__s1local51(__s377local2, __s377param1)) {
          continue;
        }
        if (__s377local2._enabled(false, false)) {
          __s377local1 = true;
        }
      }
    }
    return __s377local1;
  }
  function __s1local53(__s399param0, __s399param1, __s399param2) {
    for (var __s399local0 = __s399param0._timeline, __s399local1 = __s399local0._timeScale, __s399local2 = __s399param0._startTime; __s399local0._timeline;) {
      __s399local2 += __s399local0._startTime;
      __s399local1 *= __s399local0._timeScale;
      if (__s399local0._paused) {
        return -100;
      }
      __s399local0 = __s399local0._timeline;
    }
    if ((__s399local2 /= __s399local1) > __s399param1) {
      return __s399local2 - __s399param1;
    } else if (__s399param2 && __s399local2 === __s399param1 || !__s399param0._initted && __s399local2 - __s399param1 < 2e-10) {
      return 1e-10;
    } else if ((__s399local2 += __s399param0.totalDuration() / __s399param0._timeScale / __s399local1) > __s399param1 + 1e-10) {
      return 0;
    } else {
      return __s399local2 - __s399param1 - 1e-10;
    }
  }
  __s1local5._init = function () {
    var __s408local0;
    var __s408local1;
    var __s408local2;
    var __s408local3;
    var __s408local4;
    var __s408local5;
    var __s408local6 = this.vars;
    var __s408local7 = this._overwrittenProps;
    var __s408local8 = this._duration;
    var __s408local9 = !!__s408local6.immediateRender;
    var __s408local10 = __s408local6.ease;
    if (__s408local6.startAt) {
      if (this._startAt) {
        this._startAt.render(-1, true);
        this._startAt.kill();
      }
      __s408local4 = {};
      for (__s408local3 in __s408local6.startAt) {
        __s408local4[__s408local3] = __s408local6.startAt[__s408local3];
      }
      __s408local4.data = "isStart";
      __s408local4.overwrite = false;
      __s408local4.immediateRender = true;
      __s408local4.lazy = __s408local9 && __s408local6.lazy !== false;
      __s408local4.startAt = __s408local4.delay = null;
      __s408local4.onUpdate = __s408local6.onUpdate;
      __s408local4.onUpdateParams = __s408local6.onUpdateParams;
      __s408local4.onUpdateScope = __s408local6.onUpdateScope || __s408local6.callbackScope || this;
      this._startAt = __s1local31.to(this.target || {}, 0, __s408local4);
      if (__s408local9) {
        if (this._time > 0) {
          this._startAt = null;
        } else if (__s408local8 !== 0) {
          return;
        }
      }
    } else if (__s408local6.runBackwards && __s408local8 !== 0) {
      if (this._startAt) {
        this._startAt.render(-1, true);
        this._startAt.kill();
        this._startAt = null;
      } else {
        if (this._time !== 0) {
          __s408local9 = false;
        }
        __s408local2 = {};
        for (__s408local3 in __s408local6) {
          if (!__s1local44[__s408local3] || __s408local3 === "autoCSS") {
            __s408local2[__s408local3] = __s408local6[__s408local3];
          }
        }
        __s408local2.overwrite = 0;
        __s408local2.data = "isFromStart";
        __s408local2.lazy = __s408local9 && __s408local6.lazy !== false;
        __s408local2.immediateRender = __s408local9;
        this._startAt = __s1local31.to(this.target, 0, __s408local2);
        if (__s408local9) {
          if (this._time === 0) {
            return;
          }
        } else {
          this._startAt._init();
          this._startAt._enabled(false);
          if (this.vars.immediateRender) {
            this._startAt = null;
          }
        }
      }
    }
    this._ease = __s408local10 = __s408local10 ? __s408local10 instanceof __s1local20 ? __s408local10 : typeof __s408local10 == "function" ? new __s1local20(__s408local10, __s408local6.easeParams) : __s1local21[__s408local10] || __s1local31.defaultEase : __s1local31.defaultEase;
    if (__s408local6.easeParams instanceof Array && __s408local10.config) {
      this._ease = __s408local10.config.apply(__s408local10, __s408local6.easeParams);
    }
    this._easeType = this._ease._type;
    this._easePower = this._ease._power;
    this._firstPT = null;
    if (this._targets) {
      __s408local5 = this._targets.length;
      __s408local0 = 0;
      for (; __s408local0 < __s408local5; __s408local0++) {
        if (this._initProps(this._targets[__s408local0], this._propLookup[__s408local0] = {}, this._siblings[__s408local0], __s408local7 ? __s408local7[__s408local0] : null, __s408local0)) {
          __s408local1 = true;
        }
      }
    } else {
      __s408local1 = this._initProps(this.target, this._propLookup, this._siblings, __s408local7, 0);
    }
    if (__s408local1) {
      __s1local31._onPluginEvent("_onInitAllProps", this);
    }
    if (__s408local7) {
      if (!this._firstPT) {
        if (typeof this.target != "function") {
          this._enabled(false, false);
        }
      }
    }
    if (__s408local6.runBackwards) {
      for (__s408local2 = this._firstPT; __s408local2;) {
        __s408local2.s += __s408local2.c;
        __s408local2.c = -__s408local2.c;
        __s408local2 = __s408local2._next;
      }
    }
    this._onUpdate = __s408local6.onUpdate;
    this._initted = true;
  };
  __s1local5._initProps = function (__s441param0, __s441param1, __s441param2, __s441param3, __s441param4) {
    var __s441local0;
    var __s441local1;
    var __s441local2;
    var __s441local3;
    var __s441local4;
    var __s441local5;
    if (__s441param0 == null) {
      return false;
    }
    if (__s1local34[__s441param0._gsTweenID]) {
      __s1local49();
    }
    if (!this.vars.css) {
      if (__s441param0.style && __s441param0 !== __s1param0 && __s441param0.nodeType && __s1local41.css && this.vars.autoCSS !== false) {
        (function (__s447param0, __s447param1) {
          var __s447local0;
          var __s447local1 = {};
          for (__s447local0 in __s447param0) {
            if (!__s1local44[__s447local0] && (!(__s447local0 in __s447param1) || __s447local0 === "transform" || __s447local0 === "x" || __s447local0 === "y" || __s447local0 === "width" || __s447local0 === "height" || __s447local0 === "className" || __s447local0 === "border") && (!__s1local41[__s447local0] || !!__s1local41[__s447local0] && !!__s1local41[__s447local0]._autoCSS)) {
              __s447local1[__s447local0] = __s447param0[__s447local0];
              delete __s447param0[__s447local0];
            }
          }
          __s447param0.css = __s447local1;
        })(this.vars, __s441param0);
      }
    }
    for (__s441local0 in this.vars) {
      __s441local5 = this.vars[__s441local0];
      if (__s1local44[__s441local0]) {
        if (__s441local5 && (__s441local5 instanceof Array || __s441local5.push && __s1local14(__s441local5)) && __s441local5.join("").indexOf("{self}") !== -1) {
          this.vars[__s441local0] = __s441local5 = this._swapSelfInParams(__s441local5, this);
        }
      } else if (__s1local41[__s441local0] && (__s441local3 = new __s1local41[__s441local0]())._onInitTween(__s441param0, this.vars[__s441local0], this, __s441param4)) {
        this._firstPT = __s441local4 = {
          _next: this._firstPT,
          t: __s441local3,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: __s441local0,
          pg: 1,
          pr: __s441local3._priority,
          m: 0
        };
        __s441local1 = __s441local3._overwriteProps.length;
        while (--__s441local1 > -1) {
          __s441param1[__s441local3._overwriteProps[__s441local1]] = this._firstPT;
        }
        if (__s441local3._priority || __s441local3._onInitAllProps) {
          __s441local2 = true;
        }
        if (__s441local3._onDisable || __s441local3._onEnable) {
          this._notifyPluginsOfEnabled = true;
        }
        if (__s441local4._next) {
          __s441local4._next._prev = __s441local4;
        }
      } else {
        __s441param1[__s441local0] = __s1local39.call(this, __s441param0, __s441local0, "get", __s441local5, __s441local0, 0, null, this.vars.stringFilter, __s441param4);
      }
    }
    if (__s441param3 && this._kill(__s441param3, __s441param0)) {
      return this._initProps(__s441param0, __s441param1, __s441param2, __s441param3, __s441param4);
    } else if (this._overwrite > 1 && this._firstPT && __s441param2.length > 1 && __s1local52(__s441param0, this, __s441param1, this._overwrite, __s441param2)) {
      this._kill(__s441param1, __s441param0);
      return this._initProps(__s441param0, __s441param1, __s441param2, __s441param3, __s441param4);
    } else {
      if (this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
        __s1local34[__s441param0._gsTweenID] = true;
      }
      return __s441local2;
    }
  };
  __s1local5.render = function (__s467param0, __s467param1, __s467param2) {
    var __s467local0;
    var __s467local1;
    var __s467local2;
    var __s467local3;
    var __s467local4 = this._time;
    var __s467local5 = this._duration;
    var __s467local6 = this._rawPrevTime;
    if (__s467param0 >= __s467local5 - 1e-7 && __s467param0 >= 0) {
      this._totalTime = this._time = __s467local5;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
      if (!this._reversed) {
        __s467local0 = true;
        __s467local1 = "onComplete";
        __s467param2 = __s467param2 || this._timeline.autoRemoveChildren;
      }
      if (__s467local5 === 0 && (this._initted || !this.vars.lazy || __s467param2)) {
        if (this._startTime === this._timeline._duration) {
          __s467param0 = 0;
        }
        if ((__s467local6 < 0 || __s467param0 <= 0 && __s467param0 >= -1e-7 || __s467local6 === 1e-10 && this.data !== "isPause") && __s467local6 !== __s467param0) {
          __s467param2 = true;
          if (__s467local6 > 1e-10) {
            __s467local1 = "onReverseComplete";
          }
        }
        this._rawPrevTime = __s467local3 = !__s467param1 || __s467param0 || __s467local6 === __s467param0 ? __s467param0 : 1e-10;
      }
    } else if (__s467param0 < 1e-7) {
      this._totalTime = this._time = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      if (__s467local4 !== 0 || __s467local5 === 0 && __s467local6 > 0) {
        __s467local1 = "onReverseComplete";
        __s467local0 = this._reversed;
      }
      if (__s467param0 < 0) {
        this._active = false;
        if (__s467local5 === 0 && (this._initted || !this.vars.lazy || __s467param2)) {
          if (__s467local6 >= 0 && (__s467local6 !== 1e-10 || this.data !== "isPause")) {
            __s467param2 = true;
          }
          this._rawPrevTime = __s467local3 = !__s467param1 || __s467param0 || __s467local6 === __s467param0 ? __s467param0 : 1e-10;
        }
      }
      if (!this._initted || this._startAt && this._startAt.progress()) {
        __s467param2 = true;
      }
    } else {
      this._totalTime = this._time = __s467param0;
      if (this._easeType) {
        var __s467local7 = __s467param0 / __s467local5;
        var __s467local8 = this._easeType;
        var __s467local9 = this._easePower;
        if (__s467local8 === 1 || __s467local8 === 3 && __s467local7 >= 0.5) {
          __s467local7 = 1 - __s467local7;
        }
        if (__s467local8 === 3) {
          __s467local7 *= 2;
        }
        if (__s467local9 === 1) {
          __s467local7 *= __s467local7;
        } else if (__s467local9 === 2) {
          __s467local7 *= __s467local7 * __s467local7;
        } else if (__s467local9 === 3) {
          __s467local7 *= __s467local7 * __s467local7 * __s467local7;
        } else if (__s467local9 === 4) {
          __s467local7 *= __s467local7 * __s467local7 * __s467local7 * __s467local7;
        }
        this.ratio = __s467local8 === 1 ? 1 - __s467local7 : __s467local8 === 2 ? __s467local7 : __s467param0 / __s467local5 < 0.5 ? __s467local7 / 2 : 1 - __s467local7 / 2;
      } else {
        this.ratio = this._ease.getRatio(__s467param0 / __s467local5);
      }
    }
    if (this._time !== __s467local4 || __s467param2) {
      if (!this._initted) {
        this._init();
        if (!this._initted || this._gc) {
          return;
        }
        if (!__s467param2 && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
          this._time = this._totalTime = __s467local4;
          this._rawPrevTime = __s467local6;
          __s1local33.push(this);
          this._lazy = [__s467param0, __s467param1];
          return;
        }
        if (this._time && !__s467local0) {
          this.ratio = this._ease.getRatio(this._time / __s467local5);
        } else if (__s467local0 && this._ease._calcEnd) {
          this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
        }
      }
      if (this._lazy !== false) {
        this._lazy = false;
      }
      if (!this._active) {
        if (!this._paused && this._time !== __s467local4 && __s467param0 >= 0) {
          this._active = true;
        }
      }
      if (__s467local4 === 0) {
        if (this._startAt) {
          if (__s467param0 >= 0) {
            this._startAt.render(__s467param0, true, __s467param2);
          } else {
            __s467local1 ||= "_dummyGS";
          }
        }
        if (this.vars.onStart) {
          if ((this._time !== 0 || __s467local5 === 0) && !__s467param1) {
            this._callback("onStart");
          }
        }
      }
      __s467local2 = this._firstPT;
      while (__s467local2) {
        if (__s467local2.f) {
          __s467local2.t[__s467local2.p](__s467local2.c * this.ratio + __s467local2.s);
        } else {
          __s467local2.t[__s467local2.p] = __s467local2.c * this.ratio + __s467local2.s;
        }
        __s467local2 = __s467local2._next;
      }
      if (this._onUpdate) {
        if (__s467param0 < 0 && this._startAt && __s467param0 !== -0.0001) {
          this._startAt.render(__s467param0, true, __s467param2);
        }
        if (!__s467param1) {
          if (this._time !== __s467local4 || __s467local0 || __s467param2) {
            this._callback("onUpdate");
          }
        }
      }
      if (__s467local1) {
        if (!this._gc || !!__s467param2) {
          if (__s467param0 < 0 && this._startAt && !this._onUpdate && __s467param0 !== -0.0001) {
            this._startAt.render(__s467param0, true, __s467param2);
          }
          if (__s467local0) {
            if (this._timeline.autoRemoveChildren) {
              this._enabled(false, false);
            }
            this._active = false;
          }
          if (!__s467param1 && this.vars[__s467local1]) {
            this._callback(__s467local1);
          }
          if (__s467local5 === 0 && this._rawPrevTime === 1e-10 && __s467local3 !== 1e-10) {
            this._rawPrevTime = 0;
          }
        }
      }
    }
  };
  __s1local5._kill = function (__s520param0, __s520param1, __s520param2) {
    if (__s520param0 === "all") {
      __s520param0 = null;
    }
    if (__s520param0 == null && (__s520param1 == null || __s520param1 === this.target)) {
      this._lazy = false;
      return this._enabled(false, false);
    }
    __s520param1 = typeof __s520param1 != "string" ? __s520param1 || this._targets || this.target : __s1local31.selector(__s520param1) || __s520param1;
    var __s520local0;
    var __s520local1;
    var __s520local2;
    var __s520local3;
    var __s520local4;
    var __s520local5;
    var __s520local6;
    var __s520local7;
    var __s520local8;
    var __s520local9 = __s520param2 && this._time && __s520param2._startTime === this._startTime && this._timeline === __s520param2._timeline;
    var __s520local10 = this._firstPT;
    if ((__s1local14(__s520param1) || __s1local32(__s520param1)) && typeof __s520param1[0] != "number") {
      for (__s520local0 = __s520param1.length; --__s520local0 > -1;) {
        if (this._kill(__s520param0, __s520param1[__s520local0], __s520param2)) {
          __s520local5 = true;
        }
      }
    } else {
      if (this._targets) {
        for (__s520local0 = this._targets.length; --__s520local0 > -1;) {
          if (__s520param1 === this._targets[__s520local0]) {
            __s520local4 = this._propLookup[__s520local0] || {};
            this._overwrittenProps = this._overwrittenProps || [];
            __s520local1 = this._overwrittenProps[__s520local0] = __s520param0 ? this._overwrittenProps[__s520local0] || {} : "all";
            break;
          }
        }
      } else {
        if (__s520param1 !== this.target) {
          return false;
        }
        __s520local4 = this._propLookup;
        __s520local1 = this._overwrittenProps = __s520param0 ? this._overwrittenProps || {} : "all";
      }
      if (__s520local4) {
        __s520local6 = __s520param0 || __s520local4;
        __s520local7 = __s520param0 !== __s520local1 && __s520local1 !== "all" && __s520param0 !== __s520local4 && (typeof __s520param0 != "object" || !__s520param0._tempKill);
        if (__s520param2 && (__s1local31.onOverwrite || this.vars.onOverwrite)) {
          for (__s520local2 in __s520local6) {
            if (__s520local4[__s520local2]) {
              __s520local8 ||= [];
              __s520local8.push(__s520local2);
            }
          }
          if ((__s520local8 || !__s520param0) && !__s1local51(this, __s520param2, __s520param1, __s520local8)) {
            return false;
          }
        }
        for (__s520local2 in __s520local6) {
          if (__s520local3 = __s520local4[__s520local2]) {
            if (__s520local9) {
              if (__s520local3.f) {
                __s520local3.t[__s520local3.p](__s520local3.s);
              } else {
                __s520local3.t[__s520local3.p] = __s520local3.s;
              }
              __s520local5 = true;
            }
            if (__s520local3.pg && __s520local3.t._kill(__s520local6)) {
              __s520local5 = true;
            }
            if (!__s520local3.pg || __s520local3.t._overwriteProps.length === 0) {
              if (__s520local3._prev) {
                __s520local3._prev._next = __s520local3._next;
              } else if (__s520local3 === this._firstPT) {
                this._firstPT = __s520local3._next;
              }
              if (__s520local3._next) {
                __s520local3._next._prev = __s520local3._prev;
              }
              __s520local3._next = __s520local3._prev = null;
            }
            delete __s520local4[__s520local2];
          }
          if (__s520local7) {
            __s520local1[__s520local2] = 1;
          }
        }
        if (!this._firstPT && this._initted && __s520local10) {
          this._enabled(false, false);
        }
      }
    }
    return __s520local5;
  };
  __s1local5.invalidate = function () {
    if (this._notifyPluginsOfEnabled) {
      __s1local31._onPluginEvent("_onDisable", this);
    }
    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
    this._notifyPluginsOfEnabled = this._active = this._lazy = false;
    this._propLookup = this._targets ? {} : [];
    __s1local28.prototype.invalidate.call(this);
    if (this.vars.immediateRender) {
      this._time = -1e-10;
      this.render(Math.min(0, -this._delay));
    }
    return this;
  };
  __s1local5._enabled = function (__s558param0, __s558param1) {
    if (!__s1local7) {
      __s1local6.wake();
    }
    if (__s558param0 && this._gc) {
      var __s558local0;
      var __s558local1 = this._targets;
      if (__s558local1) {
        for (__s558local0 = __s558local1.length; --__s558local0 > -1;) {
          this._siblings[__s558local0] = __s1local50(__s558local1[__s558local0], this, true);
        }
      } else {
        this._siblings = __s1local50(this.target, this, true);
      }
    }
    __s1local28.prototype._enabled.call(this, __s558param0, __s558param1);
    return !!this._notifyPluginsOfEnabled && !!this._firstPT && __s1local31._onPluginEvent(__s558param0 ? "_onEnable" : "_onDisable", this);
  };
  __s1local31.to = function (__s566param0, __s566param1, __s566param2) {
    return new __s1local31(__s566param0, __s566param1, __s566param2);
  };
  __s1local31.from = function (__s568param0, __s568param1, __s568param2) {
    __s568param2.runBackwards = true;
    __s568param2.immediateRender = __s568param2.immediateRender != 0;
    return new __s1local31(__s568param0, __s568param1, __s568param2);
  };
  __s1local31.fromTo = function (__s570param0, __s570param1, __s570param2, __s570param3) {
    __s570param3.startAt = __s570param2;
    __s570param3.immediateRender = __s570param3.immediateRender != 0 && __s570param2.immediateRender != 0;
    return new __s1local31(__s570param0, __s570param1, __s570param3);
  };
  __s1local31.delayedCall = function (__s572param0, __s572param1, __s572param2, __s572param3, __s572param4) {
    return new __s1local31(__s572param1, 0, {
      delay: __s572param0,
      onComplete: __s572param1,
      onCompleteParams: __s572param2,
      callbackScope: __s572param3,
      onReverseComplete: __s572param1,
      onReverseCompleteParams: __s572param2,
      immediateRender: false,
      lazy: false,
      useFrames: __s572param4,
      overwrite: 0
    });
  };
  __s1local31.set = function (__s574param0, __s574param1) {
    return new __s1local31(__s574param0, 0, __s574param1);
  };
  __s1local31.getTweensOf = function (__s576param0, __s576param1) {
    if (__s576param0 == null) {
      return [];
    }
    var __s576local0;
    var __s576local1;
    var __s576local2;
    var __s576local3;
    __s576param0 = typeof __s576param0 != "string" ? __s576param0 : __s1local31.selector(__s576param0) || __s576param0;
    if ((__s1local14(__s576param0) || __s1local32(__s576param0)) && typeof __s576param0[0] != "number") {
      __s576local0 = __s576param0.length;
      __s576local1 = [];
      while (--__s576local0 > -1) {
        __s576local1 = __s576local1.concat(__s1local31.getTweensOf(__s576param0[__s576local0], __s576param1));
      }
      for (__s576local0 = __s576local1.length; --__s576local0 > -1;) {
        __s576local3 = __s576local1[__s576local0];
        __s576local2 = __s576local0;
        while (--__s576local2 > -1) {
          if (__s576local3 === __s576local1[__s576local2]) {
            __s576local1.splice(__s576local0, 1);
          }
        }
      }
    } else if (__s576param0._gsTweenID) {
      for (__s576local0 = (__s576local1 = __s1local50(__s576param0).concat()).length; --__s576local0 > -1;) {
        if (__s576local1[__s576local0]._gc || __s576param1 && !__s576local1[__s576local0].isActive()) {
          __s576local1.splice(__s576local0, 1);
        }
      }
    }
    return __s576local1 || [];
  };
  __s1local31.killTweensOf = __s1local31.killDelayedCallsTo = function (__s591param0, __s591param1, __s591param2) {
    if (typeof __s591param1 == "object") {
      __s591param2 = __s591param1;
      __s591param1 = false;
    }
    var __s591local0 = __s1local31.getTweensOf(__s591param0, __s591param1);
    for (var __s591local1 = __s591local0.length; --__s591local1 > -1;) {
      __s591local0[__s591local1]._kill(__s591param2, __s591param0);
    }
  };
  var __s1local54 = __s1local18("plugins.TweenPlugin", function (__s596param0, __s596param1) {
    this._overwriteProps = (__s596param0 || "").split(",");
    this._propName = this._overwriteProps[0];
    this._priority = __s596param1 || 0;
    this._super = __s1local54.prototype;
  }, true);
  __s1local5 = __s1local54.prototype;
  __s1local54.version = "1.19.0";
  __s1local54.API = 2;
  __s1local5._firstPT = null;
  __s1local5._addTween = __s1local39;
  __s1local5.setRatio = __s1local37;
  __s1local5._kill = function (__s598param0) {
    var __s598local0;
    var __s598local1 = this._overwriteProps;
    var __s598local2 = this._firstPT;
    if (__s598param0[this._propName] != null) {
      this._overwriteProps = [];
    } else {
      for (__s598local0 = __s598local1.length; --__s598local0 > -1;) {
        if (__s598param0[__s598local1[__s598local0]] != null) {
          __s598local1.splice(__s598local0, 1);
        }
      }
    }
    while (__s598local2) {
      if (__s598param0[__s598local2.n] != null) {
        if (__s598local2._next) {
          __s598local2._next._prev = __s598local2._prev;
        }
        if (__s598local2._prev) {
          __s598local2._prev._next = __s598local2._next;
          __s598local2._prev = null;
        } else if (this._firstPT === __s598local2) {
          this._firstPT = __s598local2._next;
        }
      }
      __s598local2 = __s598local2._next;
    }
    return false;
  };
  __s1local5._mod = __s1local5._roundProps = function (__s611param0) {
    var __s611local0;
    for (var __s611local1 = this._firstPT; __s611local1;) {
      if ((__s611local0 = __s611param0[this._propName] || __s611local1.n != null && __s611param0[__s611local1.n.split(this._propName + "_").join("")]) && typeof __s611local0 == "function") {
        if (__s611local1.f === 2) {
          __s611local1.t._applyPT.m = __s611local0;
        } else {
          __s611local1.m = __s611local0;
        }
      }
      __s611local1 = __s611local1._next;
    }
  };
  __s1local31._onPluginEvent = function (__s618param0, __s618param1) {
    var __s618local0;
    var __s618local1;
    var __s618local2;
    var __s618local3;
    var __s618local4;
    var __s618local5 = __s618param1._firstPT;
    if (__s618param0 === "_onInitAllProps") {
      while (__s618local5) {
        __s618local4 = __s618local5._next;
        __s618local1 = __s618local2;
        while (__s618local1 && __s618local1.pr > __s618local5.pr) {
          __s618local1 = __s618local1._next;
        }
        if (__s618local5._prev = __s618local1 ? __s618local1._prev : __s618local3) {
          __s618local5._prev._next = __s618local5;
        } else {
          __s618local2 = __s618local5;
        }
        if (__s618local5._next = __s618local1) {
          __s618local1._prev = __s618local5;
        } else {
          __s618local3 = __s618local5;
        }
        __s618local5 = __s618local4;
      }
      __s618local5 = __s618param1._firstPT = __s618local2;
    }
    while (__s618local5) {
      if (__s618local5.pg && typeof __s618local5.t[__s618param0] == "function" && __s618local5.t[__s618param0]()) {
        __s618local0 = true;
      }
      __s618local5 = __s618local5._next;
    }
    return __s618local0;
  };
  __s1local54.activate = function (__s632param0) {
    for (var __s632local0 = __s632param0.length; --__s632local0 > -1;) {
      if (__s632param0[__s632local0].API === __s1local54.API) {
        __s1local41[new __s632param0[__s632local0]()._propName] = __s632param0[__s632local0];
      }
    }
    return true;
  };
  __s1local17.plugin = function (__s637param0) {
    if (!__s637param0 || !__s637param0.propName || !__s637param0.init || !__s637param0.API) {
      throw "illegal plugin definition.";
    }
    var __s637local0;
    var __s637local1 = __s637param0.propName;
    var __s637local2 = __s637param0.priority || 0;
    var __s637local3 = __s637param0.overwriteProps;
    var __s637local4 = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    };
    var __s637local5 = __s1local18("plugins." + __s637local1.charAt(0).toUpperCase() + __s637local1.substr(1) + "Plugin", function () {
      __s1local54.call(this, __s637local1, __s637local2);
      this._overwriteProps = __s637local3 || [];
    }, __s637param0.global === true);
    var __s637local6 = __s637local5.prototype = new __s1local54(__s637local1);
    __s637local6.constructor = __s637local5;
    __s637local5.API = __s637param0.API;
    for (__s637local0 in __s637local4) {
      if (typeof __s637param0[__s637local0] == "function") {
        __s637local6[__s637local4[__s637local0]] = __s637param0[__s637local0];
      }
    }
    __s637local5.version = __s637param0.version;
    __s1local54.activate([__s637local5]);
    return __s637local5;
  };
  if (__s1local3 = __s1param0._gsQueue) {
    for (__s1local4 = 0; __s1local4 < __s1local3.length; __s1local4++) {
      __s1local3[__s1local4]();
    }
    for (__s1local5 in __s1local15) {
      if (!__s1local15[__s1local5].func) {
        __s1param0.console.log("GSAP encountered missing dependency: " + __s1local5);
      }
    }
  }
  __s1local7 = false;
  return __s1local31;
}(_gsScope);
export var globals = _gsScope.GreenSockGlobals;
var __s0local2 = globals.com.greensock;
export var SimpleTimeline = __s0local2.core.SimpleTimeline;
export var Animation = __s0local2.core.Animation;
export var Ease = globals.Ease;
export var Linear = globals.Linear;
export var Power0 = Linear;
export var Power1 = globals.Power1;
export var Power2 = globals.Power2;
export var Power3 = globals.Power3;
export var Power4 = globals.Power4;
export var TweenPlugin = globals.TweenPlugin;
export var EventDispatcher = __s0local2.events.EventDispatcher;
