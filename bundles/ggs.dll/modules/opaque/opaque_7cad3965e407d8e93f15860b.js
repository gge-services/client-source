import * as __s0local0 from "./1.js";
export let TweenLite = __s0local0.default;
export let Ease = __s0local0.Ease;
export let Power0 = __s0local0.Power0;
export let Power1 = __s0local0.Power1;
export let Power2 = __s0local0.Power2;
export let Power3 = __s0local0.Power3;
export let Power4 = __s0local0.Power4;
export let Linear = __s0local0.Linear;
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
 **/
__s0local0._gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  function __s1local0(__s3param0) {
    var __s3local0;
    var __s3local1 = [];
    var __s3local2 = __s3param0.length;
    for (__s3local0 = 0; __s3local0 !== __s3local2; __s3local1.push(__s3param0[__s3local0++]));
    return __s3local1;
  }
  function __s1local1(__s6param0, __s6param1, __s6param2) {
    var __s6local0;
    var __s6local1;
    var __s6local2 = __s6param0.cycle;
    for (__s6local0 in __s6local2) {
      __s6local1 = __s6local2[__s6local0];
      __s6param0[__s6local0] = typeof __s6local1 == "function" ? __s6local1(__s6param2, __s6param1[__s6param2]) : __s6local1[__s6param2 % __s6local1.length];
    }
    delete __s6param0.cycle;
  }
  function __s1local2(__s10param0, __s10param1, __s10param2) {
    __s0local0.default.call(this, __s10param0, __s10param1, __s10param2);
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    if (this._repeat) {
      this._uncache(true);
    }
    this.render = __s1local2.prototype.render;
  }
  var __s1local3 = __s0local0.default._internals;
  var __s1local4 = __s1local3.isSelector;
  var __s1local5 = __s1local3.isArray;
  var __s1local6 = __s1local2.prototype = __s0local0.default.to({}, 0.1, {});
  var __s1local7 = [];
  __s1local2.version = "2.0.2";
  __s1local6.constructor = __s1local2;
  __s1local6.kill()._gc = false;
  __s1local2.killTweensOf = __s1local2.killDelayedCallsTo = __s0local0.default.killTweensOf;
  __s1local2.getTweensOf = __s0local0.default.getTweensOf;
  __s1local2.lagSmoothing = __s0local0.default.lagSmoothing;
  __s1local2.ticker = __s0local0.default.ticker;
  __s1local2.render = __s0local0.default.render;
  __s1local6.invalidate = function () {
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._yoyoEase = null;
    this._uncache(true);
    return __s0local0.default.prototype.invalidate.call(this);
  };
  __s1local6.updateTo = function (__s15param0, __s15param1) {
    var __s15local0;
    var __s15local1 = this.ratio;
    var __s15local2 = this.vars.immediateRender || __s15param0.immediateRender;
    if (__s15param1 && this._startTime < this._timeline._time) {
      this._startTime = this._timeline._time;
      this._uncache(false);
      if (this._gc) {
        this._enabled(true, false);
      } else {
        this._timeline.insert(this, this._startTime - this._delay);
      }
    }
    for (__s15local0 in __s15param0) {
      this.vars[__s15local0] = __s15param0[__s15local0];
    }
    if (this._initted || __s15local2) {
      if (__s15param1) {
        this._initted = false;
        if (__s15local2) {
          this.render(0, true, true);
        }
      } else {
        if (this._gc) {
          this._enabled(true, false);
        }
        if (this._notifyPluginsOfEnabled && this._firstPT) {
          __s0local0.default._onPluginEvent("_onDisable", this);
        }
        if (this._time / this._duration > 0.998) {
          var __s15local3 = this._totalTime;
          this.render(0, true, false);
          this._initted = false;
          this.render(__s15local3, true, false);
        } else {
          this._initted = false;
          this._init();
          if (this._time > 0 || __s15local2) {
            var __s15local4;
            var __s15local5 = 1 / (1 - __s15local1);
            for (var __s15local6 = this._firstPT; __s15local6;) {
              __s15local4 = __s15local6.s + __s15local6.c;
              __s15local6.c *= __s15local5;
              __s15local6.s = __s15local4 - __s15local6.c;
              __s15local6 = __s15local6._next;
            }
          }
        }
      }
    }
    return this;
  };
  __s1local6.render = function (__s33param0, __s33param1, __s33param2) {
    if (!this._initted) {
      if (this._duration === 0 && this.vars.repeat) {
        this.invalidate();
      }
    }
    var __s33local0;
    var __s33local1;
    var __s33local2;
    var __s33local3;
    var __s33local4;
    var __s33local5;
    var __s33local6;
    var __s33local7;
    var __s33local8;
    var __s33local9 = this._dirty ? this.totalDuration() : this._totalDuration;
    var __s33local10 = this._time;
    var __s33local11 = this._totalTime;
    var __s33local12 = this._cycle;
    var __s33local13 = this._duration;
    var __s33local14 = this._rawPrevTime;
    if (__s33param0 >= __s33local9 - 1e-7 && __s33param0 >= 0) {
      this._totalTime = __s33local9;
      this._cycle = this._repeat;
      if (this._yoyo && (this._cycle & 1) != 0) {
        this._time = 0;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      } else {
        this._time = __s33local13;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
      }
      if (!this._reversed) {
        __s33local0 = true;
        __s33local1 = "onComplete";
        __s33param2 = __s33param2 || this._timeline.autoRemoveChildren;
      }
      if (__s33local13 === 0 && (this._initted || !this.vars.lazy || __s33param2)) {
        if (this._startTime === this._timeline._duration) {
          __s33param0 = 0;
        }
        if ((__s33local14 < 0 || __s33param0 <= 0 && __s33param0 >= -1e-7 || __s33local14 === 1e-10 && this.data !== "isPause") && __s33local14 !== __s33param0) {
          __s33param2 = true;
          if (__s33local14 > 1e-10) {
            __s33local1 = "onReverseComplete";
          }
        }
        this._rawPrevTime = __s33local7 = !__s33param1 || __s33param0 || __s33local14 === __s33param0 ? __s33param0 : 1e-10;
      }
    } else if (__s33param0 < 1e-7) {
      this._totalTime = this._time = this._cycle = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      if (__s33local11 !== 0 || __s33local13 === 0 && __s33local14 > 0) {
        __s33local1 = "onReverseComplete";
        __s33local0 = this._reversed;
      }
      if (__s33param0 < 0) {
        this._active = false;
        if (__s33local13 === 0 && (this._initted || !this.vars.lazy || __s33param2)) {
          if (__s33local14 >= 0) {
            __s33param2 = true;
          }
          this._rawPrevTime = __s33local7 = !__s33param1 || __s33param0 || __s33local14 === __s33param0 ? __s33param0 : 1e-10;
        }
      }
      if (!this._initted) {
        __s33param2 = true;
      }
    } else {
      this._totalTime = this._time = __s33param0;
      if (this._repeat !== 0) {
        __s33local3 = __s33local13 + this._repeatDelay;
        this._cycle = this._totalTime / __s33local3 >> 0;
        if (this._cycle !== 0 && this._cycle === this._totalTime / __s33local3 && __s33local11 <= __s33param0) {
          this._cycle--;
        }
        this._time = this._totalTime - this._cycle * __s33local3;
        if (this._yoyo && (this._cycle & 1) != 0) {
          this._time = __s33local13 - this._time;
          if (__s33local8 = this._yoyoEase || this.vars.yoyoEase) {
            if (!this._yoyoEase) {
              if (__s33local8 !== true || this._initted) {
                this._yoyoEase = __s33local8 = __s33local8 === true ? this._ease : __s33local8 instanceof __s0local0.Ease ? __s33local8 : __s0local0.Ease.map[__s33local8];
              } else {
                __s33local8 = this.vars.ease;
                this._yoyoEase = __s33local8 = __s33local8 ? __s33local8 instanceof __s0local0.Ease ? __s33local8 : typeof __s33local8 == "function" ? new __s0local0.Ease(__s33local8, this.vars.easeParams) : __s0local0.Ease.map[__s33local8] || __s0local0.default.defaultEase : __s0local0.default.defaultEase;
              }
            }
            this.ratio = __s33local8 ? 1 - __s33local8.getRatio((__s33local13 - this._time) / __s33local13) : 0;
          }
        }
        if (this._time > __s33local13) {
          this._time = __s33local13;
        } else if (this._time < 0) {
          this._time = 0;
        }
      }
      if (this._easeType && !__s33local8) {
        __s33local4 = this._time / __s33local13;
        __s33local5 = this._easeType;
        __s33local6 = this._easePower;
        if (__s33local5 === 1 || __s33local5 === 3 && __s33local4 >= 0.5) {
          __s33local4 = 1 - __s33local4;
        }
        if (__s33local5 === 3) {
          __s33local4 *= 2;
        }
        if (__s33local6 === 1) {
          __s33local4 *= __s33local4;
        } else if (__s33local6 === 2) {
          __s33local4 *= __s33local4 * __s33local4;
        } else if (__s33local6 === 3) {
          __s33local4 *= __s33local4 * __s33local4 * __s33local4;
        } else if (__s33local6 === 4) {
          __s33local4 *= __s33local4 * __s33local4 * __s33local4 * __s33local4;
        }
        if (__s33local5 === 1) {
          this.ratio = 1 - __s33local4;
        } else if (__s33local5 === 2) {
          this.ratio = __s33local4;
        } else if (this._time / __s33local13 < 0.5) {
          this.ratio = __s33local4 / 2;
        } else {
          this.ratio = 1 - __s33local4 / 2;
        }
      } else if (!__s33local8) {
        this.ratio = this._ease.getRatio(this._time / __s33local13);
      }
    }
    if (__s33local10 !== this._time || __s33param2 || __s33local12 !== this._cycle) {
      if (!this._initted) {
        this._init();
        if (!this._initted || this._gc) {
          return;
        }
        if (!__s33param2 && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
          this._time = __s33local10;
          this._totalTime = __s33local11;
          this._rawPrevTime = __s33local14;
          this._cycle = __s33local12;
          __s1local3.lazyTweens.push(this);
          this._lazy = [__s33param0, __s33param1];
          return;
        }
        if (!this._time || __s33local0 || __s33local8) {
          if (__s33local0 && this._ease._calcEnd && !__s33local8) {
            this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
          }
        } else {
          this.ratio = this._ease.getRatio(this._time / __s33local13);
        }
      }
      if (this._lazy !== false) {
        this._lazy = false;
      }
      if (!this._active) {
        if (!this._paused && this._time !== __s33local10 && __s33param0 >= 0) {
          this._active = true;
        }
      }
      if (__s33local11 === 0) {
        if (this._initted === 2 && __s33param0 > 0) {
          this._init();
        }
        if (this._startAt) {
          if (__s33param0 >= 0) {
            this._startAt.render(__s33param0, true, __s33param2);
          } else {
            __s33local1 ||= "_dummyGS";
          }
        }
        if (this.vars.onStart) {
          if ((this._totalTime !== 0 || __s33local13 === 0) && !__s33param1) {
            this._callback("onStart");
          }
        }
      }
      __s33local2 = this._firstPT;
      while (__s33local2) {
        if (__s33local2.f) {
          __s33local2.t[__s33local2.p](__s33local2.c * this.ratio + __s33local2.s);
        } else {
          __s33local2.t[__s33local2.p] = __s33local2.c * this.ratio + __s33local2.s;
        }
        __s33local2 = __s33local2._next;
      }
      if (this._onUpdate) {
        if (__s33param0 < 0 && this._startAt && this._startTime) {
          this._startAt.render(__s33param0, true, __s33param2);
        }
        if (!__s33param1) {
          if (this._totalTime !== __s33local11 || __s33local1) {
            this._callback("onUpdate");
          }
        }
      }
      if (this._cycle !== __s33local12) {
        if (!__s33param1 && !this._gc) {
          if (this.vars.onRepeat) {
            this._callback("onRepeat");
          }
        }
      }
      if (__s33local1) {
        if (!this._gc || !!__s33param2) {
          if (__s33param0 < 0 && this._startAt && !this._onUpdate && this._startTime) {
            this._startAt.render(__s33param0, true, __s33param2);
          }
          if (__s33local0) {
            if (this._timeline.autoRemoveChildren) {
              this._enabled(false, false);
            }
            this._active = false;
          }
          if (!__s33param1 && this.vars[__s33local1]) {
            this._callback(__s33local1);
          }
          if (__s33local13 === 0 && this._rawPrevTime === 1e-10 && __s33local7 !== 1e-10) {
            this._rawPrevTime = 0;
          }
        }
      }
    } else if (__s33local11 !== this._totalTime && this._onUpdate) {
      if (!__s33param1) {
        this._callback("onUpdate");
      }
    }
  };
  __s1local2.to = function (__s110param0, __s110param1, __s110param2) {
    return new __s1local2(__s110param0, __s110param1, __s110param2);
  };
  __s1local2.from = function (__s112param0, __s112param1, __s112param2) {
    __s112param2.runBackwards = true;
    __s112param2.immediateRender = __s112param2.immediateRender != 0;
    return new __s1local2(__s112param0, __s112param1, __s112param2);
  };
  __s1local2.fromTo = function (__s114param0, __s114param1, __s114param2, __s114param3) {
    __s114param3.startAt = __s114param2;
    __s114param3.immediateRender = __s114param3.immediateRender != 0 && __s114param2.immediateRender != 0;
    return new __s1local2(__s114param0, __s114param1, __s114param3);
  };
  __s1local2.staggerTo = __s1local2.allTo = function (__s116param0, __s116param1, __s116param2, __s116param3, __s116param4, __s116param5, __s116param6) {
    __s116param3 = __s116param3 || 0;
    var __s116local0;
    var __s116local1;
    var __s116local2;
    var __s116local3;
    var __s116local4 = 0;
    var __s116local5 = [];
    function __s116local6() {
      if (__s116param2.onComplete) {
        __s116param2.onComplete.apply(__s116param2.onCompleteScope || this, arguments);
      }
      __s116param4.apply(__s116param6 || __s116param2.callbackScope || this, __s116param5 || __s1local7);
    }
    var __s116local7 = __s116param2.cycle;
    var __s116local8 = __s116param2.startAt && __s116param2.startAt.cycle;
    if (!__s1local5(__s116param0)) {
      if (typeof __s116param0 == "string") {
        __s116param0 = __s0local0.default.selector(__s116param0) || __s116param0;
      }
      if (__s1local4(__s116param0)) {
        __s116param0 = __s1local0(__s116param0);
      }
    }
    __s116param0 = __s116param0 || [];
    if (__s116param3 < 0) {
      (__s116param0 = __s1local0(__s116param0)).reverse();
      __s116param3 *= -1;
    }
    __s116local0 = __s116param0.length - 1;
    __s116local2 = 0;
    for (; __s116local2 <= __s116local0; __s116local2++) {
      __s116local1 = {};
      for (__s116local3 in __s116param2) {
        __s116local1[__s116local3] = __s116param2[__s116local3];
      }
      if (__s116local7) {
        __s1local1(__s116local1, __s116param0, __s116local2);
        if (__s116local1.duration != null) {
          __s116param1 = __s116local1.duration;
          delete __s116local1.duration;
        }
      }
      if (__s116local8) {
        __s116local8 = __s116local1.startAt = {};
        for (__s116local3 in __s116param2.startAt) {
          __s116local8[__s116local3] = __s116param2.startAt[__s116local3];
        }
        __s1local1(__s116local1.startAt, __s116param0, __s116local2);
      }
      __s116local1.delay = __s116local4 + (__s116local1.delay || 0);
      if (__s116local2 === __s116local0 && __s116param4) {
        __s116local1.onComplete = __s116local6;
      }
      __s116local5[__s116local2] = new __s1local2(__s116param0[__s116local2], __s116param1, __s116local1);
      __s116local4 += __s116param3;
    }
    return __s116local5;
  };
  __s1local2.staggerFrom = __s1local2.allFrom = function (__s135param0, __s135param1, __s135param2, __s135param3, __s135param4, __s135param5, __s135param6) {
    __s135param2.runBackwards = true;
    __s135param2.immediateRender = __s135param2.immediateRender != 0;
    return __s1local2.staggerTo(__s135param0, __s135param1, __s135param2, __s135param3, __s135param4, __s135param5, __s135param6);
  };
  __s1local2.staggerFromTo = __s1local2.allFromTo = function (__s137param0, __s137param1, __s137param2, __s137param3, __s137param4, __s137param5, __s137param6, __s137param7) {
    __s137param3.startAt = __s137param2;
    __s137param3.immediateRender = __s137param3.immediateRender != 0 && __s137param2.immediateRender != 0;
    return __s1local2.staggerTo(__s137param0, __s137param1, __s137param3, __s137param4, __s137param5, __s137param6, __s137param7);
  };
  __s1local2.delayedCall = function (__s139param0, __s139param1, __s139param2, __s139param3, __s139param4) {
    return new __s1local2(__s139param1, 0, {
      delay: __s139param0,
      onComplete: __s139param1,
      onCompleteParams: __s139param2,
      callbackScope: __s139param3,
      onReverseComplete: __s139param1,
      onReverseCompleteParams: __s139param2,
      immediateRender: false,
      useFrames: __s139param4,
      overwrite: 0
    });
  };
  __s1local2.set = function (__s141param0, __s141param1) {
    return new __s1local2(__s141param0, 0, __s141param1);
  };
  __s1local2.isTweening = function (__s143param0) {
    return __s0local0.default.getTweensOf(__s143param0, true).length > 0;
  };
  function __s1local8(__s145param0, __s145param1) {
    var __s145local0 = [];
    for (var __s145local1 = 0, __s145local2 = __s145param0._first; __s145local2;) {
      if (__s145local2 instanceof __s0local0.default) {
        __s145local0[__s145local1++] = __s145local2;
      } else {
        if (__s145param1) {
          __s145local0[__s145local1++] = __s145local2;
        }
        __s145local1 = (__s145local0 = __s145local0.concat(__s1local8(__s145local2, __s145param1))).length;
      }
      __s145local2 = __s145local2._next;
    }
    return __s145local0;
  }
  var __s1local9 = __s1local2.getAllTweens = function (__s152param0) {
    return __s1local8(__s0local0.Animation._rootTimeline, __s152param0).concat(__s1local8(__s0local0.Animation._rootFramesTimeline, __s152param0));
  };
  __s1local2.killAll = function (__s154param0, __s154param1, __s154param2, __s154param3) {
    if (__s154param1 == null) {
      __s154param1 = true;
    }
    if (__s154param2 == null) {
      __s154param2 = true;
    }
    var __s154local0;
    var __s154local1;
    var __s154local2;
    var __s154local3 = __s1local9(__s154param3 != 0);
    var __s154local4 = __s154local3.length;
    var __s154local5 = __s154param1 && __s154param2 && __s154param3;
    for (__s154local2 = 0; __s154local2 < __s154local4; __s154local2++) {
      __s154local1 = __s154local3[__s154local2];
      if (__s154local5 || __s154local1 instanceof __s0local0.SimpleTimeline || (__s154local0 = __s154local1.target === __s154local1.vars.onComplete) && __s154param2 || __s154param1 && !__s154local0) {
        if (__s154param0) {
          __s154local1.totalTime(__s154local1._reversed ? 0 : __s154local1.totalDuration());
        } else {
          __s154local1._enabled(false, false);
        }
      }
    }
  };
  __s1local2.killChildTweensOf = function (__s163param0, __s163param1) {
    if (__s163param0 != null) {
      var __s163local0;
      var __s163local1;
      var __s163local2;
      var __s163local3;
      var __s163local4;
      var __s163local5 = __s1local3.tweenLookup;
      if (typeof __s163param0 == "string") {
        __s163param0 = __s0local0.default.selector(__s163param0) || __s163param0;
      }
      if (__s1local4(__s163param0)) {
        __s163param0 = __s1local0(__s163param0);
      }
      if (__s1local5(__s163param0)) {
        for (__s163local3 = __s163param0.length; --__s163local3 > -1;) {
          __s1local2.killChildTweensOf(__s163param0[__s163local3], __s163param1);
        }
      } else {
        __s163local0 = [];
        for (__s163local2 in __s163local5) {
          for (__s163local1 = __s163local5[__s163local2].target.parentNode; __s163local1;) {
            if (__s163local1 === __s163param0) {
              __s163local0 = __s163local0.concat(__s163local5[__s163local2].tweens);
            }
            __s163local1 = __s163local1.parentNode;
          }
        }
        __s163local4 = __s163local0.length;
        __s163local3 = 0;
        for (; __s163local3 < __s163local4; __s163local3++) {
          if (__s163param1) {
            __s163local0[__s163local3].totalTime(__s163local0[__s163local3].totalDuration());
          }
          __s163local0[__s163local3]._enabled(false, false);
        }
      }
    }
  };
  function __s1local10(__s180param0, __s180param1, __s180param2, __s180param3) {
    __s180param1 = __s180param1 !== false;
    __s180param2 = __s180param2 !== false;
    var __s180local0;
    var __s180local1;
    var __s180local2 = __s1local9(__s180param3 = __s180param3 !== false);
    var __s180local3 = __s180param1 && __s180param2 && __s180param3;
    for (var __s180local4 = __s180local2.length; --__s180local4 > -1;) {
      __s180local1 = __s180local2[__s180local4];
      if (__s180local3 || __s180local1 instanceof __s0local0.SimpleTimeline || (__s180local0 = __s180local1.target === __s180local1.vars.onComplete) && __s180param2 || __s180param1 && !__s180local0) {
        __s180local1.paused(__s180param0);
      }
    }
  }
  __s1local2.pauseAll = function (__s185param0, __s185param1, __s185param2) {
    __s1local10(true, __s185param0, __s185param1, __s185param2);
  };
  __s1local2.resumeAll = function (__s187param0, __s187param1, __s187param2) {
    __s1local10(false, __s187param0, __s187param1, __s187param2);
  };
  __s1local2.globalTimeScale = function (__s189param0) {
    var __s189local0 = __s0local0.Animation._rootTimeline;
    var __s189local1 = __s0local0.default.ticker.time;
    if (arguments.length) {
      __s189param0 = __s189param0 || 1e-10;
      __s189local0._startTime = __s189local1 - (__s189local1 - __s189local0._startTime) * __s189local0._timeScale / __s189param0;
      __s189local0 = __s0local0.Animation._rootFramesTimeline;
      __s189local1 = __s0local0.default.ticker.frame;
      __s189local0._startTime = __s189local1 - (__s189local1 - __s189local0._startTime) * __s189local0._timeScale / __s189param0;
      __s189local0._timeScale = __s0local0.Animation._rootTimeline._timeScale = __s189param0;
      return __s189param0;
    } else {
      return __s189local0._timeScale;
    }
  };
  __s1local6.progress = function (__s193param0, __s193param1) {
    if (arguments.length) {
      return this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - __s193param0 : __s193param0) + this._cycle * (this._duration + this._repeatDelay), __s193param1);
    } else {
      return this._time / this.duration();
    }
  };
  __s1local6.totalProgress = function (__s197param0, __s197param1) {
    if (arguments.length) {
      return this.totalTime(this.totalDuration() * __s197param0, __s197param1);
    } else {
      return this._totalTime / this.totalDuration();
    }
  };
  __s1local6.time = function (__s201param0, __s201param1) {
    if (arguments.length) {
      if (this._dirty) {
        this.totalDuration();
      }
      if (__s201param0 > this._duration) {
        __s201param0 = this._duration;
      }
      if (this._yoyo && (this._cycle & 1) != 0) {
        __s201param0 = this._duration - __s201param0 + this._cycle * (this._duration + this._repeatDelay);
      } else if (this._repeat !== 0) {
        __s201param0 += this._cycle * (this._duration + this._repeatDelay);
      }
      return this.totalTime(__s201param0, __s201param1);
    } else {
      return this._time;
    }
  };
  __s1local6.duration = function (__s209param0) {
    if (arguments.length) {
      return __s0local0.Animation.prototype.duration.call(this, __s209param0);
    } else {
      return this._duration;
    }
  };
  __s1local6.totalDuration = function (__s213param0) {
    if (arguments.length) {
      if (this._repeat === -1) {
        return this;
      } else {
        return this.duration((__s213param0 - this._repeat * this._repeatDelay) / (this._repeat + 1));
      }
    } else {
      if (this._dirty) {
        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
        this._dirty = false;
      }
      return this._totalDuration;
    }
  };
  __s1local6.repeat = function (__s220param0) {
    if (arguments.length) {
      this._repeat = __s220param0;
      return this._uncache(true);
    } else {
      return this._repeat;
    }
  };
  __s1local6.repeatDelay = function (__s224param0) {
    if (arguments.length) {
      this._repeatDelay = __s224param0;
      return this._uncache(true);
    } else {
      return this._repeatDelay;
    }
  };
  __s1local6.yoyo = function (__s228param0) {
    if (arguments.length) {
      this._yoyo = __s228param0;
      return this;
    } else {
      return this._yoyo;
    }
  };
  return __s1local2;
}, true);
export var TweenMax = __s0local0.globals.TweenMax;
export var TweenMaxBase = TweenMax;
