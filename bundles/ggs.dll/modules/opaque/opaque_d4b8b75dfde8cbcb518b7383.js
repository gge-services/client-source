import * as __s0local0 from "./1.js";
import * as __s0local1 from "./33.js";
export let TimelineLite = __s0local1.default;
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
__s0local0._gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {
  function __s1local0(__s3param0) {
    __s0local1.default.call(this, __s3param0);
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true;
    this._dirty = true;
  }
  var __s1local1 = __s0local0.default._internals;
  var __s1local2 = __s1local1.lazyTweens;
  var __s1local3 = __s1local1.lazyRender;
  var __s1local4 = __s0local0._gsScope._gsDefine.globals;
  var __s1local5 = new __s0local0.Ease(null, null, 1, 0);
  var __s1local6 = __s1local0.prototype = new __s0local1.default();
  __s1local6.constructor = __s1local0;
  __s1local6.kill()._gc = false;
  __s1local0.version = "2.0.2";
  __s1local6.invalidate = function () {
    this._yoyo = this.vars.yoyo === true;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._uncache(true);
    return __s0local1.default.prototype.invalidate.call(this);
  };
  __s1local6.addCallback = function (__s7param0, __s7param1, __s7param2, __s7param3) {
    return this.add(__s0local0.default.delayedCall(0, __s7param0, __s7param2, __s7param3), __s7param1);
  };
  __s1local6.removeCallback = function (__s9param0, __s9param1) {
    if (__s9param0) {
      if (__s9param1 == null) {
        this._kill(null, __s9param0);
      } else {
        var __s9local0 = this.getTweensOf(__s9param0, false);
        for (var __s9local1 = __s9local0.length, __s9local2 = this._parseTimeOrLabel(__s9param1); --__s9local1 > -1;) {
          if (__s9local0[__s9local1]._startTime === __s9local2) {
            __s9local0[__s9local1]._enabled(false, false);
          }
        }
      }
    }
    return this;
  };
  __s1local6.removePause = function (__s17param0) {
    return this.removeCallback(__s0local1.default._internals.pauseCallback, __s17param0);
  };
  __s1local6.tweenTo = function (__s19param0, __s19param1) {
    __s19param1 = __s19param1 || {};
    var __s19local0;
    var __s19local1;
    var __s19local2;
    var __s19local3 = {
      ease: __s1local5,
      useFrames: this.usesFrames(),
      immediateRender: false,
      lazy: false
    };
    var __s19local4 = __s19param1.repeat && __s1local4.TweenMax || __s0local0.default;
    for (__s19local1 in __s19param1) {
      __s19local3[__s19local1] = __s19param1[__s19local1];
    }
    __s19local3.time = this._parseTimeOrLabel(__s19param0);
    __s19local0 = Math.abs(Number(__s19local3.time) - this._time) / this._timeScale || 0.001;
    __s19local2 = new __s19local4(this, __s19local0, __s19local3);
    __s19local3.onStart = function () {
      __s19local2.target.paused(true);
      if (__s19local2.vars.time !== __s19local2.target.time() && __s19local0 === __s19local2.duration() && !__s19local2.isFromTo) {
        __s19local2.duration(Math.abs(__s19local2.vars.time - __s19local2.target.time()) / __s19local2.target._timeScale).render(__s19local2.time(), true, true);
      }
      if (__s19param1.onStart) {
        __s19param1.onStart.apply(__s19param1.onStartScope || __s19param1.callbackScope || __s19local2, __s19param1.onStartParams || []);
      }
    };
    return __s19local2;
  };
  __s1local6.tweenFromTo = function (__s27param0, __s27param1, __s27param2) {
    __s27param2 = __s27param2 || {};
    __s27param0 = this._parseTimeOrLabel(__s27param0);
    __s27param2.startAt = {
      onComplete: this.seek,
      onCompleteParams: [__s27param0],
      callbackScope: this
    };
    __s27param2.immediateRender = __s27param2.immediateRender !== false;
    var __s27local0 = this.tweenTo(__s27param1, __s27param2);
    __s27local0.isFromTo = 1;
    return __s27local0.duration(Math.abs(__s27local0.vars.time - __s27param0) / this._timeScale || 0.001);
  };
  __s1local6.render = function (__s29param0, __s29param1, __s29param2) {
    if (this._gc) {
      this._enabled(true, false);
    }
    var __s29local0;
    var __s29local1;
    var __s29local2;
    var __s29local3;
    var __s29local4;
    var __s29local5;
    var __s29local6;
    var __s29local7;
    var __s29local8 = this._time;
    var __s29local9 = this._dirty ? this.totalDuration() : this._totalDuration;
    var __s29local10 = this._duration;
    var __s29local11 = this._totalTime;
    var __s29local12 = this._startTime;
    var __s29local13 = this._timeScale;
    var __s29local14 = this._rawPrevTime;
    var __s29local15 = this._paused;
    var __s29local16 = this._cycle;
    if (__s29local8 !== this._time) {
      __s29param0 += this._time - __s29local8;
    }
    if (__s29param0 >= __s29local9 - 1e-7 && __s29param0 >= 0) {
      if (!this._locked) {
        this._totalTime = __s29local9;
        this._cycle = this._repeat;
      }
      if (!this._reversed && !this._hasPausedChild()) {
        __s29local1 = true;
        __s29local3 = "onComplete";
        __s29local4 = !!this._timeline.autoRemoveChildren;
        if (this._duration === 0 && (__s29param0 <= 0 && __s29param0 >= -1e-7 || __s29local14 < 0 || __s29local14 === 1e-10) && __s29local14 !== __s29param0 && this._first) {
          __s29local4 = true;
          if (__s29local14 > 1e-10) {
            __s29local3 = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !__s29param1 || __s29param0 || this._rawPrevTime === __s29param0 ? __s29param0 : 1e-10;
      if (this._yoyo && (this._cycle & 1) != 0) {
        this._time = __s29param0 = 0;
      } else {
        this._time = __s29local10;
        __s29param0 = __s29local10 + 0.0001;
      }
    } else if (__s29param0 < 1e-7) {
      if (!this._locked) {
        this._totalTime = this._cycle = 0;
      }
      this._time = 0;
      if (__s29local8 !== 0 || __s29local10 === 0 && __s29local14 !== 1e-10 && (__s29local14 > 0 || __s29param0 < 0 && __s29local14 >= 0) && !this._locked) {
        __s29local3 = "onReverseComplete";
        __s29local1 = this._reversed;
      }
      if (__s29param0 < 0) {
        this._active = false;
        if (this._timeline.autoRemoveChildren && this._reversed) {
          __s29local4 = __s29local1 = true;
          __s29local3 = "onReverseComplete";
        } else if (__s29local14 >= 0 && this._first) {
          __s29local4 = true;
        }
        this._rawPrevTime = __s29param0;
      } else {
        this._rawPrevTime = __s29local10 || !__s29param1 || __s29param0 || this._rawPrevTime === __s29param0 ? __s29param0 : 1e-10;
        if (__s29param0 === 0 && __s29local1) {
          for (__s29local0 = this._first; __s29local0 && __s29local0._startTime === 0;) {
            if (!__s29local0._duration) {
              __s29local1 = false;
            }
            __s29local0 = __s29local0._next;
          }
        }
        __s29param0 = 0;
        if (!this._initted) {
          __s29local4 = true;
        }
      }
    } else {
      if (__s29local10 === 0 && __s29local14 < 0) {
        __s29local4 = true;
      }
      this._time = this._rawPrevTime = __s29param0;
      if (!this._locked) {
        this._totalTime = __s29param0;
        if (this._repeat !== 0) {
          __s29local5 = __s29local10 + this._repeatDelay;
          this._cycle = this._totalTime / __s29local5 >> 0;
          if (this._cycle !== 0 && this._cycle === this._totalTime / __s29local5 && __s29local11 <= __s29param0) {
            this._cycle--;
          }
          this._time = this._totalTime - this._cycle * __s29local5;
          if (this._yoyo && (this._cycle & 1) != 0) {
            this._time = __s29local10 - this._time;
          }
          if (this._time > __s29local10) {
            this._time = __s29local10;
            __s29param0 = __s29local10 + 0.0001;
          } else if (this._time < 0) {
            this._time = __s29param0 = 0;
          } else {
            __s29param0 = this._time;
          }
        }
      }
      if (this._hasPause && !this._forcingPlayhead && !__s29param1) {
        if ((__s29param0 = this._time) >= __s29local8 || this._repeat && __s29local16 !== this._cycle) {
          for (__s29local0 = this._first; __s29local0 && __s29local0._startTime <= __s29param0 && !__s29local6;) {
            if (!__s29local0._duration && __s29local0.data === "isPause" && !__s29local0.ratio && (__s29local0._startTime !== 0 || this._rawPrevTime !== 0)) {
              __s29local6 = __s29local0;
            }
            __s29local0 = __s29local0._next;
          }
        } else {
          for (__s29local0 = this._last; __s29local0 && __s29local0._startTime >= __s29param0 && !__s29local6;) {
            if (!__s29local0._duration) {
              if (__s29local0.data === "isPause" && __s29local0._rawPrevTime > 0) {
                __s29local6 = __s29local0;
              }
            }
            __s29local0 = __s29local0._prev;
          }
        }
        if (__s29local6 && __s29local6._startTime < __s29local10) {
          this._time = __s29param0 = __s29local6._startTime;
          this._totalTime = __s29param0 + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }
    }
    if (this._cycle !== __s29local16 && !this._locked) {
      var __s29local17 = this._yoyo && (__s29local16 & 1) != 0;
      var __s29local18 = __s29local17 === (this._yoyo && (this._cycle & 1) != 0);
      var __s29local19 = this._totalTime;
      var __s29local20 = this._cycle;
      var __s29local21 = this._rawPrevTime;
      var __s29local22 = this._time;
      this._totalTime = __s29local16 * __s29local10;
      if (this._cycle < __s29local16) {
        __s29local17 = !__s29local17;
      } else {
        this._totalTime += __s29local10;
      }
      this._time = __s29local8;
      this._rawPrevTime = __s29local10 === 0 ? __s29local14 - 0.0001 : __s29local14;
      this._cycle = __s29local16;
      this._locked = true;
      __s29local8 = __s29local17 ? 0 : __s29local10;
      this.render(__s29local8, __s29param1, __s29local10 === 0);
      if (!__s29param1 && !this._gc) {
        if (this.vars.onRepeat) {
          this._cycle = __s29local20;
          this._locked = false;
          this._callback("onRepeat");
        }
      }
      if (__s29local8 !== this._time) {
        return;
      }
      if (__s29local18) {
        this._cycle = __s29local16;
        this._locked = true;
        __s29local8 = __s29local17 ? __s29local10 + 0.0001 : -0.0001;
        this.render(__s29local8, true, false);
      }
      this._locked = false;
      if (this._paused && !__s29local15) {
        return;
      }
      this._time = __s29local22;
      this._totalTime = __s29local19;
      this._cycle = __s29local20;
      this._rawPrevTime = __s29local21;
    }
    if (this._time !== __s29local8 && this._first || __s29param2 || __s29local4 || __s29local6) {
      this._initted ||= true;
      if (!this._active) {
        if (!this._paused && this._totalTime !== __s29local11 && __s29param0 > 0) {
          this._active = true;
        }
      }
      if (__s29local11 === 0 && this.vars.onStart) {
        if ((this._totalTime !== 0 || !this._totalDuration) && !__s29param1) {
          this._callback("onStart");
        }
      }
      if ((__s29local7 = this._time) >= __s29local8) {
        for (__s29local0 = this._first; __s29local0 && (__s29local2 = __s29local0._next, __s29local7 === this._time && (!this._paused || __s29local15));) {
          if (__s29local0._active || __s29local0._startTime <= this._time && !__s29local0._paused && !__s29local0._gc) {
            if (__s29local6 === __s29local0) {
              this.pause();
            }
            if (__s29local0._reversed) {
              __s29local0.render((__s29local0._dirty ? __s29local0.totalDuration() : __s29local0._totalDuration) - (__s29param0 - __s29local0._startTime) * __s29local0._timeScale, __s29param1, __s29param2);
            } else {
              __s29local0.render((__s29param0 - __s29local0._startTime) * __s29local0._timeScale, __s29param1, __s29param2);
            }
          }
          __s29local0 = __s29local2;
        }
      } else {
        for (__s29local0 = this._last; __s29local0 && (__s29local2 = __s29local0._prev, __s29local7 === this._time && (!this._paused || __s29local15));) {
          if (__s29local0._active || __s29local0._startTime <= __s29local8 && !__s29local0._paused && !__s29local0._gc) {
            if (__s29local6 === __s29local0) {
              for (__s29local6 = __s29local0._prev; __s29local6 && __s29local6.endTime() > this._time;) {
                __s29local6.render(__s29local6._reversed ? __s29local6.totalDuration() - (__s29param0 - __s29local6._startTime) * __s29local6._timeScale : (__s29param0 - __s29local6._startTime) * __s29local6._timeScale, __s29param1, __s29param2);
                __s29local6 = __s29local6._prev;
              }
              __s29local6 = null;
              this.pause();
            }
            if (__s29local0._reversed) {
              __s29local0.render((__s29local0._dirty ? __s29local0.totalDuration() : __s29local0._totalDuration) - (__s29param0 - __s29local0._startTime) * __s29local0._timeScale, __s29param1, __s29param2);
            } else {
              __s29local0.render((__s29param0 - __s29local0._startTime) * __s29local0._timeScale, __s29param1, __s29param2);
            }
          }
          __s29local0 = __s29local2;
        }
      }
      if (this._onUpdate) {
        if (!__s29param1) {
          if (__s1local2.length) {
            __s1local3();
          }
          this._callback("onUpdate");
        }
      }
      if (__s29local3) {
        if (!this._locked && !this._gc && (__s29local12 === this._startTime || __s29local13 !== this._timeScale)) {
          if (this._time === 0 || __s29local9 >= this.totalDuration()) {
            if (__s29local1) {
              if (__s1local2.length) {
                __s1local3();
              }
              if (this._timeline.autoRemoveChildren) {
                this._enabled(false, false);
              }
              this._active = false;
            }
            if (!__s29param1 && this.vars[__s29local3]) {
              this._callback(__s29local3);
            }
          }
        }
      }
    } else if (__s29local11 !== this._totalTime && this._onUpdate) {
      if (!__s29param1) {
        this._callback("onUpdate");
      }
    }
  };
  __s1local6.getActive = function (__s113param0, __s113param1, __s113param2) {
    if (__s113param0 == null) {
      __s113param0 = true;
    }
    if (__s113param1 == null) {
      __s113param1 = true;
    }
    if (__s113param2 == null) {
      __s113param2 = false;
    }
    var __s113local0;
    var __s113local1;
    var __s113local2 = [];
    var __s113local3 = this.getChildren(__s113param0, __s113param1, __s113param2);
    var __s113local4 = 0;
    var __s113local5 = __s113local3.length;
    for (__s113local0 = 0; __s113local0 < __s113local5; __s113local0++) {
      if ((__s113local1 = __s113local3[__s113local0]).isActive()) {
        __s113local2[__s113local4++] = __s113local1;
      }
    }
    return __s113local2;
  };
  __s1local6.getLabelAfter = function (__s121param0) {
    if (!__s121param0) {
      if (__s121param0 !== 0) {
        __s121param0 = this._time;
      }
    }
    var __s121local0;
    var __s121local1 = this.getLabelsArray();
    var __s121local2 = __s121local1.length;
    for (__s121local0 = 0; __s121local0 < __s121local2; __s121local0++) {
      if (__s121local1[__s121local0].time > __s121param0) {
        return __s121local1[__s121local0].name;
      }
    }
    return null;
  };
  __s1local6.getLabelBefore = function (__s128param0) {
    if (__s128param0 == null) {
      __s128param0 = this._time;
    }
    var __s128local0 = this.getLabelsArray();
    for (var __s128local1 = __s128local0.length; --__s128local1 > -1;) {
      if (__s128local0[__s128local1].time < __s128param0) {
        return __s128local0[__s128local1].name;
      }
    }
    return null;
  };
  __s1local6.getLabelsArray = function () {
    var __s134local0;
    var __s134local1 = [];
    var __s134local2 = 0;
    for (__s134local0 in this._labels) {
      __s134local1[__s134local2++] = {
        time: this._labels[__s134local0],
        name: __s134local0
      };
    }
    __s134local1.sort(function (__s138param0, __s138param1) {
      return __s138param0.time - __s138param1.time;
    });
    return __s134local1;
  };
  __s1local6.invalidate = function () {
    this._locked = false;
    return __s0local1.default.prototype.invalidate.call(this);
  };
  __s1local6.progress = function (__s142param0, __s142param1) {
    if (arguments.length) {
      return this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - __s142param0 : __s142param0) + this._cycle * (this._duration + this._repeatDelay), __s142param1);
    } else {
      return this._time / this.duration() || 0;
    }
  };
  __s1local6.totalProgress = function (__s146param0, __s146param1) {
    if (arguments.length) {
      return this.totalTime(this.totalDuration() * __s146param0, __s146param1);
    } else {
      return this._totalTime / this.totalDuration() || 0;
    }
  };
  __s1local6.totalDuration = function (__s150param0) {
    if (arguments.length) {
      if (this._repeat !== -1 && __s150param0) {
        return this.timeScale(this.totalDuration() / __s150param0);
      } else {
        return this;
      }
    } else {
      if (this._dirty) {
        __s0local1.default.prototype.totalDuration.call(this);
        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
      }
      return this._totalDuration;
    }
  };
  __s1local6.time = function (__s157param0, __s157param1) {
    if (arguments.length) {
      if (this._dirty) {
        this.totalDuration();
      }
      if (__s157param0 > this._duration) {
        __s157param0 = this._duration;
      }
      if (this._yoyo && (this._cycle & 1) != 0) {
        __s157param0 = this._duration - __s157param0 + this._cycle * (this._duration + this._repeatDelay);
      } else if (this._repeat !== 0) {
        __s157param0 += this._cycle * (this._duration + this._repeatDelay);
      }
      return this.totalTime(__s157param0, __s157param1);
    } else {
      return this._time;
    }
  };
  __s1local6.repeat = function (__s165param0) {
    if (arguments.length) {
      this._repeat = __s165param0;
      return this._uncache(true);
    } else {
      return this._repeat;
    }
  };
  __s1local6.repeatDelay = function (__s169param0) {
    if (arguments.length) {
      this._repeatDelay = __s169param0;
      return this._uncache(true);
    } else {
      return this._repeatDelay;
    }
  };
  __s1local6.yoyo = function (__s173param0) {
    if (arguments.length) {
      this._yoyo = __s173param0;
      return this;
    } else {
      return this._yoyo;
    }
  };
  __s1local6.currentLabel = function (__s177param0) {
    if (arguments.length) {
      return this.seek(__s177param0, true);
    } else {
      return this.getLabelBefore(this._time + 1e-8);
    }
  };
  return __s1local0;
}, true);
export var TimelineMax = __s0local0.globals.TimelineMax;
