import * as __s0local0 from "./1.js";
export let Linear = __s0local0.Linear;
export let Power0 = __s0local0.Power0;
export let Power1 = __s0local0.Power1;
export let Power2 = __s0local0.Power2;
export let Power3 = __s0local0.Power3;
export let Power4 = __s0local0.Power4;
/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
__s0local0._gsScope._gsDefine("easing.Back", ["easing.Ease"], function () {
  var __s1local0;
  var __s1local1;
  var __s1local2;
  var __s1local3;
  var __s1local4 = __s0local0._gsScope.GreenSockGlobals || __s0local0._gsScope;
  var __s1local5 = __s1local4.com.greensock;
  var __s1local6 = Math.PI * 2;
  var __s1local7 = Math.PI / 2;
  var __s1local8 = __s1local5._class;
  function __s1local9(__s3param0, __s3param1) {
    var __s3local0 = __s1local8("easing." + __s3param0, function () {}, true);
    var __s3local1 = __s3local0.prototype = new __s0local0.Ease();
    __s3local1.constructor = __s3local0;
    __s3local1.getRatio = __s3param1;
    return __s3local0;
  }
  var __s1local10 = __s0local0.Ease.register || function () {};
  function __s1local11(__s9param0, __s9param1, __s9param2, __s9param3, __s9param4) {
    var __s9local0 = __s1local8("easing." + __s9param0, {
      easeOut: new __s9param1(),
      easeIn: new __s9param2(),
      easeInOut: new __s9param3()
    }, true);
    __s1local10(__s9local0, __s9param0);
    return __s9local0;
  }
  function __s1local12(__s11param0, __s11param1, __s11param2) {
    this.t = __s11param0;
    this.v = __s11param1;
    if (__s11param2) {
      this.next = __s11param2;
      __s11param2.prev = this;
      this.c = __s11param2.v - __s11param1;
      this.gap = __s11param2.t - __s11param0;
    }
  }
  function __s1local13(__s14param0, __s14param1) {
    var __s14local0 = __s1local8("easing." + __s14param0, function (__s16param0) {
      this._p1 = __s16param0 || __s16param0 === 0 ? __s16param0 : 1.70158;
      this._p2 = this._p1 * 1.525;
    }, true);
    var __s14local1 = __s14local0.prototype = new __s0local0.Ease();
    __s14local1.constructor = __s14local0;
    __s14local1.getRatio = __s14param1;
    __s14local1.config = function (__s18param0) {
      return new __s14local0(__s18param0);
    };
    return __s14local0;
  }
  var __s1local14 = __s1local11("Back", __s1local13("BackOut", function (__s20param0) {
    return (__s20param0 -= 1) * __s20param0 * ((this._p1 + 1) * __s20param0 + this._p1) + 1;
  }), __s1local13("BackIn", function (__s22param0) {
    return __s22param0 * __s22param0 * ((this._p1 + 1) * __s22param0 - this._p1);
  }), __s1local13("BackInOut", function (__s24param0) {
    if ((__s24param0 *= 2) < 1) {
      return __s24param0 * 0.5 * __s24param0 * ((this._p2 + 1) * __s24param0 - this._p2);
    } else {
      return ((__s24param0 -= 2) * __s24param0 * ((this._p2 + 1) * __s24param0 + this._p2) + 2) * 0.5;
    }
  }));
  var __s1local15 = __s1local8("easing.SlowMo", function (__s28param0, __s28param1, __s28param2) {
    __s28param1 = __s28param1 || __s28param1 === 0 ? __s28param1 : 0.7;
    if (__s28param0 == null) {
      __s28param0 = 0.7;
    } else if (__s28param0 > 1) {
      __s28param0 = 1;
    }
    this._p = __s28param0 !== 1 ? __s28param1 : 0;
    this._p1 = (1 - __s28param0) / 2;
    this._p2 = __s28param0;
    this._p3 = this._p1 + this._p2;
    this._calcEnd = __s28param2 === true;
  }, true);
  var __s1local16 = __s1local15.prototype = new __s0local0.Ease();
  __s1local16.constructor = __s1local15;
  __s1local16.getRatio = function (__s32param0) {
    var __s32local0 = __s32param0 + (0.5 - __s32param0) * this._p;
    if (__s32param0 < this._p1) {
      if (this._calcEnd) {
        return 1 - (__s32param0 = 1 - __s32param0 / this._p1) * __s32param0;
      } else {
        return __s32local0 - (__s32param0 = 1 - __s32param0 / this._p1) * __s32param0 * __s32param0 * __s32param0 * __s32local0;
      }
    } else if (__s32param0 > this._p3) {
      if (this._calcEnd) {
        if (__s32param0 === 1) {
          return 0;
        } else {
          return 1 - (__s32param0 = (__s32param0 - this._p3) / this._p1) * __s32param0;
        }
      } else {
        return __s32local0 + (__s32param0 - __s32local0) * (__s32param0 = (__s32param0 - this._p3) / this._p1) * __s32param0 * __s32param0 * __s32param0;
      }
    } else if (this._calcEnd) {
      return 1;
    } else {
      return __s32local0;
    }
  };
  __s1local15.ease = new __s1local15(0.7, 0.7);
  __s1local16.config = __s1local15.config = function (__s44param0, __s44param1, __s44param2) {
    return new __s1local15(__s44param0, __s44param1, __s44param2);
  };
  (__s1local16 = (__s1local0 = __s1local8("easing.SteppedEase", function (__s46param0, __s46param1) {
    __s46param0 = __s46param0 || 1;
    this._p1 = 1 / __s46param0;
    this._p2 = __s46param0 + (__s46param1 ? 0 : 1);
    this._p3 = __s46param1 ? 1 : 0;
  }, true)).prototype = new __s0local0.Ease()).constructor = __s1local0;
  __s1local16.getRatio = function (__s48param0) {
    if (__s48param0 < 0) {
      __s48param0 = 0;
    } else if (__s48param0 >= 1) {
      __s48param0 = 0.999999999;
    }
    return ((this._p2 * __s48param0 | 0) + this._p3) * this._p1;
  };
  __s1local16.config = __s1local0.config = function (__s52param0, __s52param1) {
    return new __s1local0(__s52param0, __s52param1);
  };
  (__s1local16 = (__s1local1 = __s1local8("easing.ExpoScaleEase", function (__s54param0, __s54param1, __s54param2) {
    this._p1 = Math.log(__s54param1 / __s54param0);
    this._p2 = __s54param1 - __s54param0;
    this._p3 = __s54param0;
    this._ease = __s54param2;
  }, true)).prototype = new __s0local0.Ease()).constructor = __s1local1;
  __s1local16.getRatio = function (__s56param0) {
    if (this._ease) {
      __s56param0 = this._ease.getRatio(__s56param0);
    }
    return (this._p3 * Math.exp(this._p1 * __s56param0) - this._p3) / this._p2;
  };
  __s1local16.config = __s1local1.config = function (__s59param0, __s59param1, __s59param2) {
    return new __s1local1(__s59param0, __s59param1, __s59param2);
  };
  (__s1local16 = (__s1local2 = __s1local8("easing.RoughEase", function (__s61param0) {
    var __s61local0;
    var __s61local1;
    var __s61local2;
    var __s61local3;
    var __s61local4;
    var __s61local5;
    var __s61local6 = (__s61param0 = __s61param0 || {}).taper || "none";
    var __s61local7 = [];
    var __s61local8 = 0;
    var __s61local9 = (__s61param0.points || 20) | 0;
    for (var __s61local10 = __s61local9, __s61local11 = __s61param0.randomize !== false, __s61local12 = __s61param0.clamp === true, __s61local13 = __s61param0.template instanceof __s0local0.Ease ? __s61param0.template : null, __s61local14 = typeof __s61param0.strength == "number" ? __s61param0.strength * 0.4 : 0.4; --__s61local10 > -1;) {
      __s61local0 = __s61local11 ? Math.random() : 1 / __s61local9 * __s61local10;
      __s61local1 = __s61local13 ? __s61local13.getRatio(__s61local0) : __s61local0;
      __s61local2 = __s61local6 === "none" ? __s61local14 : __s61local6 === "out" ? (__s61local3 = 1 - __s61local0) * __s61local3 * __s61local14 : __s61local6 === "in" ? __s61local0 * __s61local0 * __s61local14 : __s61local0 < 0.5 ? (__s61local3 = __s61local0 * 2) * __s61local3 * 0.5 * __s61local14 : (__s61local3 = (1 - __s61local0) * 2) * __s61local3 * 0.5 * __s61local14;
      if (__s61local11) {
        __s61local1 += Math.random() * __s61local2 - __s61local2 * 0.5;
      } else if (__s61local10 % 2) {
        __s61local1 += __s61local2 * 0.5;
      } else {
        __s61local1 -= __s61local2 * 0.5;
      }
      if (__s61local12) {
        if (__s61local1 > 1) {
          __s61local1 = 1;
        } else if (__s61local1 < 0) {
          __s61local1 = 0;
        }
      }
      __s61local7[__s61local8++] = {
        x: __s61local0,
        y: __s61local1
      };
    }
    __s61local7.sort(function (__s71param0, __s71param1) {
      return __s71param0.x - __s71param1.x;
    });
    __s61local5 = new __s1local12(1, 1, null);
    __s61local10 = __s61local9;
    while (--__s61local10 > -1) {
      __s61local4 = __s61local7[__s61local10];
      __s61local5 = new __s1local12(__s61local4.x, __s61local4.y, __s61local5);
    }
    this._prev = new __s1local12(0, 0, __s61local5.t !== 0 ? __s61local5 : __s61local5.next);
  }, true)).prototype = new __s0local0.Ease()).constructor = __s1local2;
  __s1local16.getRatio = function (__s75param0) {
    var __s75local0 = this._prev;
    if (__s75param0 > __s75local0.t) {
      while (__s75local0.next && __s75param0 >= __s75local0.t) {
        __s75local0 = __s75local0.next;
      }
      __s75local0 = __s75local0.prev;
    } else {
      while (__s75local0.prev && __s75param0 <= __s75local0.t) {
        __s75local0 = __s75local0.prev;
      }
    }
    this._prev = __s75local0;
    return __s75local0.v + (__s75param0 - __s75local0.t) / __s75local0.gap * __s75local0.c;
  };
  __s1local16.config = function (__s83param0) {
    return new __s1local2(__s83param0);
  };
  __s1local2.ease = new __s1local2();
  __s1local11("Bounce", __s1local9("BounceOut", function (__s85param0) {
    if (__s85param0 < 1 / 2.75) {
      return __s85param0 * 7.5625 * __s85param0;
    } else if (__s85param0 < 2 / 2.75) {
      return (__s85param0 -= 1.5 / 2.75) * 7.5625 * __s85param0 + 0.75;
    } else if (__s85param0 < 2.5 / 2.75) {
      return (__s85param0 -= 2.25 / 2.75) * 7.5625 * __s85param0 + 0.9375;
    } else {
      return (__s85param0 -= 2.625 / 2.75) * 7.5625 * __s85param0 + 0.984375;
    }
  }), __s1local9("BounceIn", function (__s91param0) {
    if ((__s91param0 = 1 - __s91param0) < 1 / 2.75) {
      return 1 - __s91param0 * 7.5625 * __s91param0;
    } else if (__s91param0 < 2 / 2.75) {
      return 1 - ((__s91param0 -= 1.5 / 2.75) * 7.5625 * __s91param0 + 0.75);
    } else if (__s91param0 < 2.5 / 2.75) {
      return 1 - ((__s91param0 -= 2.25 / 2.75) * 7.5625 * __s91param0 + 0.9375);
    } else {
      return 1 - ((__s91param0 -= 2.625 / 2.75) * 7.5625 * __s91param0 + 0.984375);
    }
  }), __s1local9("BounceInOut", function (__s97param0) {
    var __s97local0 = __s97param0 < 0.5;
    if ((__s97param0 = __s97local0 ? 1 - __s97param0 * 2 : __s97param0 * 2 - 1) < 1 / 2.75) {
      __s97param0 *= __s97param0 * 7.5625;
    } else {
      __s97param0 = __s97param0 < 2 / 2.75 ? (__s97param0 -= 1.5 / 2.75) * 7.5625 * __s97param0 + 0.75 : __s97param0 < 2.5 / 2.75 ? (__s97param0 -= 2.25 / 2.75) * 7.5625 * __s97param0 + 0.9375 : (__s97param0 -= 2.625 / 2.75) * 7.5625 * __s97param0 + 0.984375;
    }
    if (__s97local0) {
      return (1 - __s97param0) * 0.5;
    } else {
      return __s97param0 * 0.5 + 0.5;
    }
  }));
  __s1local11("Circ", __s1local9("CircOut", function (__s103param0) {
    return Math.sqrt(1 - (__s103param0 -= 1) * __s103param0);
  }), __s1local9("CircIn", function (__s105param0) {
    return -(Math.sqrt(1 - __s105param0 * __s105param0) - 1);
  }), __s1local9("CircInOut", function (__s107param0) {
    if ((__s107param0 *= 2) < 1) {
      return (Math.sqrt(1 - __s107param0 * __s107param0) - 1) * -0.5;
    } else {
      return (Math.sqrt(1 - (__s107param0 -= 2) * __s107param0) + 1) * 0.5;
    }
  }));
  __s1local11("Elastic", (__s1local3 = function (__s111param0, __s111param1, __s111param2) {
    var __s111local0 = __s1local8("easing." + __s111param0, function (__s113param0, __s113param1) {
      this._p1 = __s113param0 >= 1 ? __s113param0 : 1;
      this._p2 = (__s113param1 || __s111param2) / (__s113param0 < 1 ? __s113param0 : 1);
      this._p3 = this._p2 / __s1local6 * (Math.asin(1 / this._p1) || 0);
      this._p2 = __s1local6 / this._p2;
    }, true);
    var __s111local1 = __s111local0.prototype = new __s0local0.Ease();
    __s111local1.constructor = __s111local0;
    __s111local1.getRatio = __s111param1;
    __s111local1.config = function (__s115param0, __s115param1) {
      return new __s111local0(__s115param0, __s115param1);
    };
    return __s111local0;
  })("ElasticOut", function (__s117param0) {
    return this._p1 * Math.pow(2, __s117param0 * -10) * Math.sin((__s117param0 - this._p3) * this._p2) + 1;
  }, 0.3), __s1local3("ElasticIn", function (__s119param0) {
    return -this._p1 * Math.pow(2, (__s119param0 -= 1) * 10) * Math.sin((__s119param0 - this._p3) * this._p2);
  }, 0.3), __s1local3("ElasticInOut", function (__s121param0) {
    if ((__s121param0 *= 2) < 1) {
      return this._p1 * Math.pow(2, (__s121param0 -= 1) * 10) * Math.sin((__s121param0 - this._p3) * this._p2) * -0.5;
    } else {
      return this._p1 * Math.pow(2, (__s121param0 -= 1) * -10) * Math.sin((__s121param0 - this._p3) * this._p2) * 0.5 + 1;
    }
  }, 0.45));
  __s1local11("Expo", __s1local9("ExpoOut", function (__s125param0) {
    return 1 - Math.pow(2, __s125param0 * -10);
  }), __s1local9("ExpoIn", function (__s127param0) {
    return Math.pow(2, (__s127param0 - 1) * 10) - 0.001;
  }), __s1local9("ExpoInOut", function (__s129param0) {
    if ((__s129param0 *= 2) < 1) {
      return Math.pow(2, (__s129param0 - 1) * 10) * 0.5;
    } else {
      return (2 - Math.pow(2, (__s129param0 - 1) * -10)) * 0.5;
    }
  }));
  __s1local11("Sine", __s1local9("SineOut", function (__s133param0) {
    return Math.sin(__s133param0 * __s1local7);
  }), __s1local9("SineIn", function (__s135param0) {
    return 1 - Math.cos(__s135param0 * __s1local7);
  }), __s1local9("SineInOut", function (__s137param0) {
    return (Math.cos(Math.PI * __s137param0) - 1) * -0.5;
  }));
  __s1local8("easing.EaseLookup", {
    find: function (__s139param0) {
      return __s0local0.Ease.map[__s139param0];
    }
  }, true);
  __s1local10(__s1local4.SlowMo, "SlowMo", "ease,");
  __s1local10(__s1local2, "RoughEase", "ease,");
  __s1local10(__s1local0, "SteppedEase", "ease,");
  return __s1local14;
}, true);
export var Back = __s0local0.globals.Back;
export var Elastic = __s0local0.globals.Elastic;
export var Bounce = __s0local0.globals.Bounce;
export var RoughEase = __s0local0.globals.RoughEase;
export var SlowMo = __s0local0.globals.SlowMo;
export var SteppedEase = __s0local0.globals.SteppedEase;
export var Circ = __s0local0.globals.Circ;
export var Expo = __s0local0.globals.Expo;
export var Sine = __s0local0.globals.Sine;
export var ExpoScaleEase = __s0local0.globals.ExpoScaleEase;
