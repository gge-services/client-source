import * as __s0local0 from "./1.js";
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
__s0local0._gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  function __s1local0(__s3param0) {
    __s0local0.SimpleTimeline.call(this, __s3param0);
    this._labels = {};
    this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
    this.smoothChildTiming = this.vars.smoothChildTiming === true;
    this._sortChildren = true;
    this._onUpdate = this.vars.onUpdate;
    var __s3local0;
    var __s3local1;
    var __s3local2 = this.vars;
    for (__s3local1 in __s3local2) {
      __s3local0 = __s3local2[__s3local1];
      if (__s1local4(__s3local0) && __s3local0.join("").indexOf("{self}") !== -1) {
        __s3local2[__s3local1] = this._swapSelfInParams(__s3local0);
      }
    }
    if (__s1local4(__s3local2.tweens)) {
      this.add(__s3local2.tweens, 0, __s3local2.align, __s3local2.stagger);
    }
  }
  var __s1local1 = __s0local0.default._internals;
  var __s1local2 = __s1local0._internals = {};
  var __s1local3 = __s1local1.isSelector;
  var __s1local4 = __s1local1.isArray;
  var __s1local5 = __s1local1.lazyTweens;
  var __s1local6 = __s1local1.lazyRender;
  var __s1local7 = __s0local0._gsScope._gsDefine.globals;
  function __s1local8(__s9param0) {
    var __s9local0;
    var __s9local1 = {};
    for (__s9local0 in __s9param0) {
      __s9local1[__s9local0] = __s9param0[__s9local0];
    }
    return __s9local1;
  }
  function __s1local9(__s13param0, __s13param1, __s13param2) {
    var __s13local0;
    var __s13local1;
    var __s13local2 = __s13param0.cycle;
    for (__s13local0 in __s13local2) {
      __s13local1 = __s13local2[__s13local0];
      __s13param0[__s13local0] = typeof __s13local1 == "function" ? __s13local1(__s13param2, __s13param1[__s13param2]) : __s13local1[__s13param2 % __s13local1.length];
    }
    delete __s13param0.cycle;
  }
  var __s1local10 = __s1local2.pauseCallback = function () {};
  function __s1local11(__s19param0) {
    var __s19local0;
    var __s19local1 = [];
    var __s19local2 = __s19param0.length;
    for (__s19local0 = 0; __s19local0 !== __s19local2; __s19local1.push(__s19param0[__s19local0++]));
    return __s19local1;
  }
  var __s1local12 = __s1local0.prototype = new __s0local0.SimpleTimeline();
  __s1local0.version = "2.0.2";
  __s1local12.constructor = __s1local0;
  __s1local12.kill()._gc = __s1local12._forcingPlayhead = __s1local12._hasPause = false;
  __s1local12.to = function (__s22param0, __s22param1, __s22param2, __s22param3) {
    var __s22local0 = __s22param2.repeat && __s1local7.TweenMax || __s0local0.default;
    if (__s22param1) {
      return this.add(new __s22local0(__s22param0, __s22param1, __s22param2), __s22param3);
    } else {
      return this.set(__s22param0, __s22param2, __s22param3);
    }
  };
  __s1local12.from = function (__s26param0, __s26param1, __s26param2, __s26param3) {
    return this.add((__s26param2.repeat && __s1local7.TweenMax || __s0local0.default).from(__s26param0, __s26param1, __s26param2), __s26param3);
  };
  __s1local12.fromTo = function (__s28param0, __s28param1, __s28param2, __s28param3, __s28param4) {
    var __s28local0 = __s28param3.repeat && __s1local7.TweenMax || __s0local0.default;
    if (__s28param1) {
      return this.add(__s28local0.fromTo(__s28param0, __s28param1, __s28param2, __s28param3), __s28param4);
    } else {
      return this.set(__s28param0, __s28param3, __s28param4);
    }
  };
  __s1local12.staggerTo = function (__s32param0, __s32param1, __s32param2, __s32param3, __s32param4, __s32param5, __s32param6, __s32param7) {
    var __s32local0;
    var __s32local1;
    var __s32local2 = new __s1local0({
      onComplete: __s32param5,
      onCompleteParams: __s32param6,
      callbackScope: __s32param7,
      smoothChildTiming: this.smoothChildTiming
    });
    var __s32local3 = __s32param2.cycle;
    if (typeof __s32param0 == "string") {
      __s32param0 = __s0local0.default.selector(__s32param0) || __s32param0;
    }
    if (__s1local3(__s32param0 = __s32param0 || [])) {
      __s32param0 = __s1local11(__s32param0);
    }
    if ((__s32param3 = __s32param3 || 0) < 0) {
      (__s32param0 = __s1local11(__s32param0)).reverse();
      __s32param3 *= -1;
    }
    __s32local1 = 0;
    for (; __s32local1 < __s32param0.length; __s32local1++) {
      if ((__s32local0 = __s1local8(__s32param2)).startAt) {
        __s32local0.startAt = __s1local8(__s32local0.startAt);
        if (__s32local0.startAt.cycle) {
          __s1local9(__s32local0.startAt, __s32param0, __s32local1);
        }
      }
      if (__s32local3) {
        __s1local9(__s32local0, __s32param0, __s32local1);
        if (__s32local0.duration != null) {
          __s32param1 = __s32local0.duration;
          delete __s32local0.duration;
        }
      }
      __s32local2.to(__s32param0[__s32local1], __s32param1, __s32local0, __s32local1 * __s32param3);
    }
    return this.add(__s32local2, __s32param4);
  };
  __s1local12.staggerFrom = function (__s43param0, __s43param1, __s43param2, __s43param3, __s43param4, __s43param5, __s43param6, __s43param7) {
    __s43param2.immediateRender = __s43param2.immediateRender != 0;
    __s43param2.runBackwards = true;
    return this.staggerTo(__s43param0, __s43param1, __s43param2, __s43param3, __s43param4, __s43param5, __s43param6, __s43param7);
  };
  __s1local12.staggerFromTo = function (__s45param0, __s45param1, __s45param2, __s45param3, __s45param4, __s45param5, __s45param6, __s45param7, __s45param8) {
    __s45param3.startAt = __s45param2;
    __s45param3.immediateRender = __s45param3.immediateRender != 0 && __s45param2.immediateRender != 0;
    return this.staggerTo(__s45param0, __s45param1, __s45param3, __s45param4, __s45param5, __s45param6, __s45param7, __s45param8);
  };
  __s1local12.call = function (__s47param0, __s47param1, __s47param2, __s47param3) {
    return this.add(__s0local0.default.delayedCall(0, __s47param0, __s47param1, __s47param2), __s47param3);
  };
  __s1local12.set = function (__s49param0, __s49param1, __s49param2) {
    __s49param2 = this._parseTimeOrLabel(__s49param2, 0, true);
    if (__s49param1.immediateRender == null) {
      __s49param1.immediateRender = __s49param2 === this._time && !this._paused;
    }
    return this.add(new __s0local0.default(__s49param0, 0, __s49param1), __s49param2);
  };
  __s1local0.exportRoot = function (__s52param0, __s52param1) {
    if ((__s52param0 = __s52param0 || {}).smoothChildTiming == null) {
      __s52param0.smoothChildTiming = true;
    }
    var __s52local0;
    var __s52local1;
    var __s52local2;
    var __s52local3;
    var __s52local4 = new __s1local0(__s52param0);
    var __s52local5 = __s52local4._timeline;
    if (__s52param1 == null) {
      __s52param1 = true;
    }
    __s52local5._remove(__s52local4, true);
    __s52local4._startTime = 0;
    __s52local4._rawPrevTime = __s52local4._time = __s52local4._totalTime = __s52local5._time;
    __s52local2 = __s52local5._first;
    while (__s52local2) {
      __s52local3 = __s52local2._next;
      if (!__s52param1 || !(__s52local2 instanceof __s0local0.default) || __s52local2.target !== __s52local2.vars.onComplete) {
        if ((__s52local1 = __s52local2._startTime - __s52local2._delay) < 0) {
          __s52local0 = 1;
        }
        __s52local4.add(__s52local2, __s52local1);
      }
      __s52local2 = __s52local3;
    }
    __s52local5.add(__s52local4, 0);
    if (__s52local0) {
      __s52local4.totalDuration();
    }
    return __s52local4;
  };
  __s1local12.add = function (__s61param0, __s61param1, __s61param2, __s61param3) {
    var __s61local0;
    var __s61local1;
    var __s61local2;
    var __s61local3;
    var __s61local4;
    var __s61local5;
    if (typeof __s61param1 != "number") {
      __s61param1 = this._parseTimeOrLabel(__s61param1, 0, true, __s61param0);
    }
    if (!(__s61param0 instanceof __s0local0.Animation)) {
      if (__s61param0 instanceof Array || __s61param0 && __s61param0.push && __s1local4(__s61param0)) {
        __s61param2 = __s61param2 || "normal";
        __s61param3 = __s61param3 || 0;
        __s61local0 = __s61param1;
        __s61local1 = __s61param0.length;
        __s61local2 = 0;
        for (; __s61local2 < __s61local1; __s61local2++) {
          if (__s1local4(__s61local3 = __s61param0[__s61local2])) {
            __s61local3 = new __s1local0({
              tweens: __s61local3
            });
          }
          this.add(__s61local3, __s61local0);
          if (typeof __s61local3 != "string" && typeof __s61local3 != "function") {
            if (__s61param2 === "sequence") {
              __s61local0 = __s61local3._startTime + __s61local3.totalDuration() / __s61local3._timeScale;
            } else if (__s61param2 === "start") {
              __s61local3._startTime -= __s61local3.delay();
            }
          }
          __s61local0 += __s61param3;
        }
        return this._uncache(true);
      }
      if (typeof __s61param0 == "string") {
        return this.addLabel(__s61param0, __s61param1);
      }
      if (typeof __s61param0 != "function") {
        throw "Cannot add " + __s61param0 + " into the timeline; it is not a tween, timeline, function, or string.";
      }
      __s61param0 = __s0local0.default.delayedCall(0, __s61param0);
    }
    __s0local0.SimpleTimeline.prototype.add.call(this, __s61param0, __s61param1);
    if (__s61param0._time) {
      __s61local0 = Math.max(0, Math.min(__s61param0.totalDuration(), (this.rawTime() - __s61param0._startTime) * __s61param0._timeScale));
      if (Math.abs(__s61local0 - __s61param0._totalTime) > 0.00001) {
        __s61param0.render(__s61local0, false, false);
      }
    }
    if ((this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) {
      for (__s61local5 = (__s61local4 = this).rawTime() > __s61param0._startTime; __s61local4._timeline;) {
        if (__s61local5 && __s61local4._timeline.smoothChildTiming) {
          __s61local4.totalTime(__s61local4._totalTime, true);
        } else if (__s61local4._gc) {
          __s61local4._enabled(true, false);
        }
        __s61local4 = __s61local4._timeline;
      }
    }
    return this;
  };
  __s1local12.remove = function (__s81param0) {
    if (__s81param0 instanceof __s0local0.Animation) {
      this._remove(__s81param0, false);
      var __s81local0 = __s81param0._timeline = __s81param0.vars.useFrames ? __s0local0.Animation._rootFramesTimeline : __s0local0.Animation._rootTimeline;
      __s81param0._startTime = (__s81param0._paused ? __s81param0._pauseTime : __s81local0._time) - (__s81param0._reversed ? __s81param0.totalDuration() - __s81param0._totalTime : __s81param0._totalTime) / __s81param0._timeScale;
      return this;
    }
    if (__s81param0 instanceof Array || __s81param0 && __s81param0.push && __s1local4(__s81param0)) {
      for (var __s81local1 = __s81param0.length; --__s81local1 > -1;) {
        this.remove(__s81param0[__s81local1]);
      }
      return this;
    }
    if (typeof __s81param0 == "string") {
      return this.removeLabel(__s81param0);
    } else {
      return this.kill(null, __s81param0);
    }
  };
  __s1local12._remove = function (__s89param0, __s89param1) {
    __s0local0.SimpleTimeline.prototype._remove.call(this, __s89param0, __s89param1);
    if (this._last) {
      if (this._time > this.duration()) {
        this._time = this._duration;
        this._totalTime = this._totalDuration;
      }
    } else {
      this._time = this._totalTime = this._duration = this._totalDuration = 0;
    }
    return this;
  };
  __s1local12.append = function (__s94param0, __s94param1) {
    return this.add(__s94param0, this._parseTimeOrLabel(null, __s94param1, true, __s94param0));
  };
  __s1local12.insert = __s1local12.insertMultiple = function (__s96param0, __s96param1, __s96param2, __s96param3) {
    return this.add(__s96param0, __s96param1 || 0, __s96param2, __s96param3);
  };
  __s1local12.appendMultiple = function (__s98param0, __s98param1, __s98param2, __s98param3) {
    return this.add(__s98param0, this._parseTimeOrLabel(null, __s98param1, true, __s98param0), __s98param2, __s98param3);
  };
  __s1local12.addLabel = function (__s100param0, __s100param1) {
    this._labels[__s100param0] = this._parseTimeOrLabel(__s100param1);
    return this;
  };
  __s1local12.addPause = function (__s102param0, __s102param1, __s102param2, __s102param3) {
    var __s102local0 = __s0local0.default.delayedCall(0, __s1local10, __s102param2, __s102param3 || this);
    __s102local0.vars.onComplete = __s102local0.vars.onReverseComplete = __s102param1;
    __s102local0.data = "isPause";
    this._hasPause = true;
    return this.add(__s102local0, __s102param0);
  };
  __s1local12.removeLabel = function (__s104param0) {
    delete this._labels[__s104param0];
    return this;
  };
  __s1local12.getLabelTime = function (__s106param0) {
    return this._labels[__s106param0] ?? -1;
  };
  __s1local12._parseTimeOrLabel = function (__s108param0, __s108param1, __s108param2, __s108param3) {
    var __s108local0;
    var __s108local1;
    if (__s108param3 instanceof __s0local0.Animation && __s108param3.timeline === this) {
      this.remove(__s108param3);
    } else if (__s108param3 && (__s108param3 instanceof Array || __s108param3.push && __s1local4(__s108param3))) {
      for (__s108local1 = __s108param3.length; --__s108local1 > -1;) {
        if (__s108param3[__s108local1] instanceof __s0local0.Animation && __s108param3[__s108local1].timeline === this) {
          this.remove(__s108param3[__s108local1]);
        }
      }
    }
    __s108local0 = typeof __s108param0 != "number" || __s108param1 ? this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration : 0;
    if (typeof __s108param1 == "string") {
      return this._parseTimeOrLabel(__s108param1, __s108param2 && typeof __s108param0 == "number" && this._labels[__s108param1] == null ? __s108param0 - __s108local0 : 0, __s108param2);
    }
    __s108param1 = __s108param1 || 0;
    if (typeof __s108param0 != "string" || !isNaN(__s108param0) && this._labels[__s108param0] == null) {
      if (__s108param0 == null) {
        __s108param0 = __s108local0;
      }
    } else {
      if ((__s108local1 = __s108param0.indexOf("=")) === -1) {
        if (this._labels[__s108param0] == null) {
          if (__s108param2) {
            return this._labels[__s108param0] = __s108local0 + __s108param1;
          } else {
            return __s108param1;
          }
        } else {
          return this._labels[__s108param0] + __s108param1;
        }
      }
      __s108param1 = parseInt(__s108param0.charAt(__s108local1 - 1) + "1", 10) * Number(__s108param0.substr(__s108local1 + 1));
      __s108param0 = __s108local1 > 1 ? this._parseTimeOrLabel(__s108param0.substr(0, __s108local1 - 1), 0, __s108param2) : __s108local0;
    }
    return Number(__s108param0) + __s108param1;
  };
  __s1local12.seek = function (__s124param0, __s124param1) {
    return this.totalTime(typeof __s124param0 == "number" ? __s124param0 : this._parseTimeOrLabel(__s124param0), __s124param1 !== false);
  };
  __s1local12.stop = function () {
    return this.paused(true);
  };
  __s1local12.gotoAndPlay = function (__s128param0, __s128param1) {
    return this.play(__s128param0, __s128param1);
  };
  __s1local12.gotoAndStop = function (__s130param0, __s130param1) {
    return this.pause(__s130param0, __s130param1);
  };
  __s1local12.render = function (__s132param0, __s132param1, __s132param2) {
    if (this._gc) {
      this._enabled(true, false);
    }
    var __s132local0;
    var __s132local1;
    var __s132local2;
    var __s132local3;
    var __s132local4;
    var __s132local5;
    var __s132local6;
    var __s132local7 = this._time;
    var __s132local8 = this._dirty ? this.totalDuration() : this._totalDuration;
    var __s132local9 = this._startTime;
    var __s132local10 = this._timeScale;
    var __s132local11 = this._paused;
    if (__s132local7 !== this._time) {
      __s132param0 += this._time - __s132local7;
    }
    if (__s132param0 >= __s132local8 - 1e-7 && __s132param0 >= 0) {
      this._totalTime = this._time = __s132local8;
      if (!this._reversed && !this._hasPausedChild()) {
        __s132local1 = true;
        __s132local3 = "onComplete";
        __s132local4 = !!this._timeline.autoRemoveChildren;
        if (this._duration === 0 && (__s132param0 <= 0 && __s132param0 >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === 1e-10) && this._rawPrevTime !== __s132param0 && this._first) {
          __s132local4 = true;
          if (this._rawPrevTime > 1e-10) {
            __s132local3 = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !__s132param1 || __s132param0 || this._rawPrevTime === __s132param0 ? __s132param0 : 1e-10;
      __s132param0 = __s132local8 + 0.0001;
    } else if (__s132param0 < 1e-7) {
      this._totalTime = this._time = 0;
      if (__s132local7 !== 0 || this._duration === 0 && this._rawPrevTime !== 1e-10 && (this._rawPrevTime > 0 || __s132param0 < 0 && this._rawPrevTime >= 0)) {
        __s132local3 = "onReverseComplete";
        __s132local1 = this._reversed;
      }
      if (__s132param0 < 0) {
        this._active = false;
        if (this._timeline.autoRemoveChildren && this._reversed) {
          __s132local4 = __s132local1 = true;
          __s132local3 = "onReverseComplete";
        } else if (this._rawPrevTime >= 0 && this._first) {
          __s132local4 = true;
        }
        this._rawPrevTime = __s132param0;
      } else {
        this._rawPrevTime = this._duration || !__s132param1 || __s132param0 || this._rawPrevTime === __s132param0 ? __s132param0 : 1e-10;
        if (__s132param0 === 0 && __s132local1) {
          for (__s132local0 = this._first; __s132local0 && __s132local0._startTime === 0;) {
            if (!__s132local0._duration) {
              __s132local1 = false;
            }
            __s132local0 = __s132local0._next;
          }
        }
        __s132param0 = 0;
        if (!this._initted) {
          __s132local4 = true;
        }
      }
    } else {
      if (this._hasPause && !this._forcingPlayhead && !__s132param1) {
        if (__s132param0 >= __s132local7) {
          for (__s132local0 = this._first; __s132local0 && __s132local0._startTime <= __s132param0 && !__s132local5;) {
            if (!__s132local0._duration && __s132local0.data === "isPause" && !__s132local0.ratio && (__s132local0._startTime !== 0 || this._rawPrevTime !== 0)) {
              __s132local5 = __s132local0;
            }
            __s132local0 = __s132local0._next;
          }
        } else {
          for (__s132local0 = this._last; __s132local0 && __s132local0._startTime >= __s132param0 && !__s132local5;) {
            if (!__s132local0._duration) {
              if (__s132local0.data === "isPause" && __s132local0._rawPrevTime > 0) {
                __s132local5 = __s132local0;
              }
            }
            __s132local0 = __s132local0._prev;
          }
        }
        if (__s132local5) {
          this._time = __s132param0 = __s132local5._startTime;
          this._totalTime = __s132param0 + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }
      this._totalTime = this._time = this._rawPrevTime = __s132param0;
    }
    if (this._time !== __s132local7 && this._first || __s132param2 || __s132local4 || __s132local5) {
      this._initted ||= true;
      if (!this._active) {
        if (!this._paused && this._time !== __s132local7 && __s132param0 > 0) {
          this._active = true;
        }
      }
      if (__s132local7 === 0 && this.vars.onStart) {
        if ((this._time !== 0 || !this._duration) && !__s132param1) {
          this._callback("onStart");
        }
      }
      if ((__s132local6 = this._time) >= __s132local7) {
        for (__s132local0 = this._first; __s132local0 && (__s132local2 = __s132local0._next, __s132local6 === this._time && (!this._paused || __s132local11));) {
          if (__s132local0._active || __s132local0._startTime <= __s132local6 && !__s132local0._paused && !__s132local0._gc) {
            if (__s132local5 === __s132local0) {
              this.pause();
            }
            if (__s132local0._reversed) {
              __s132local0.render((__s132local0._dirty ? __s132local0.totalDuration() : __s132local0._totalDuration) - (__s132param0 - __s132local0._startTime) * __s132local0._timeScale, __s132param1, __s132param2);
            } else {
              __s132local0.render((__s132param0 - __s132local0._startTime) * __s132local0._timeScale, __s132param1, __s132param2);
            }
          }
          __s132local0 = __s132local2;
        }
      } else {
        for (__s132local0 = this._last; __s132local0 && (__s132local2 = __s132local0._prev, __s132local6 === this._time && (!this._paused || __s132local11));) {
          if (__s132local0._active || __s132local0._startTime <= __s132local7 && !__s132local0._paused && !__s132local0._gc) {
            if (__s132local5 === __s132local0) {
              for (__s132local5 = __s132local0._prev; __s132local5 && __s132local5.endTime() > this._time;) {
                __s132local5.render(__s132local5._reversed ? __s132local5.totalDuration() - (__s132param0 - __s132local5._startTime) * __s132local5._timeScale : (__s132param0 - __s132local5._startTime) * __s132local5._timeScale, __s132param1, __s132param2);
                __s132local5 = __s132local5._prev;
              }
              __s132local5 = null;
              this.pause();
            }
            if (__s132local0._reversed) {
              __s132local0.render((__s132local0._dirty ? __s132local0.totalDuration() : __s132local0._totalDuration) - (__s132param0 - __s132local0._startTime) * __s132local0._timeScale, __s132param1, __s132param2);
            } else {
              __s132local0.render((__s132param0 - __s132local0._startTime) * __s132local0._timeScale, __s132param1, __s132param2);
            }
          }
          __s132local0 = __s132local2;
        }
      }
      if (this._onUpdate) {
        if (!__s132param1) {
          if (__s1local5.length) {
            __s1local6();
          }
          this._callback("onUpdate");
        }
      }
      if (__s132local3) {
        if (!this._gc && (__s132local9 === this._startTime || __s132local10 !== this._timeScale)) {
          if (this._time === 0 || __s132local8 >= this.totalDuration()) {
            if (__s132local1) {
              if (__s1local5.length) {
                __s1local6();
              }
              if (this._timeline.autoRemoveChildren) {
                this._enabled(false, false);
              }
              this._active = false;
            }
            if (!__s132param1 && this.vars[__s132local3]) {
              this._callback(__s132local3);
            }
          }
        }
      }
    }
  };
  __s1local12._hasPausedChild = function () {
    for (var __s194local0 = this._first; __s194local0;) {
      if (__s194local0._paused || __s194local0 instanceof __s1local0 && __s194local0._hasPausedChild()) {
        return true;
      }
      __s194local0 = __s194local0._next;
    }
    return false;
  };
  __s1local12.getChildren = function (__s199param0, __s199param1, __s199param2, __s199param3) {
    __s199param3 = __s199param3 || -9999999999;
    var __s199local0 = [];
    for (var __s199local1 = this._first, __s199local2 = 0; __s199local1;) {
      if (!(__s199local1._startTime < __s199param3)) {
        if (__s199local1 instanceof __s0local0.default) {
          if (__s199param1 !== false) {
            __s199local0[__s199local2++] = __s199local1;
          }
        } else {
          if (__s199param2 !== false) {
            __s199local0[__s199local2++] = __s199local1;
          }
          if (__s199param0 !== false) {
            __s199local2 = (__s199local0 = __s199local0.concat(__s199local1.getChildren(true, __s199param1, __s199param2))).length;
          }
        }
      }
      __s199local1 = __s199local1._next;
    }
    return __s199local0;
  };
  __s1local12.getTweensOf = function (__s209param0, __s209param1) {
    var __s209local0;
    var __s209local1;
    var __s209local2 = this._gc;
    var __s209local3 = [];
    var __s209local4 = 0;
    if (__s209local2) {
      this._enabled(true, true);
    }
    __s209local1 = (__s209local0 = __s0local0.default.getTweensOf(__s209param0)).length;
    while (--__s209local1 > -1) {
      if (__s209local0[__s209local1].timeline === this || __s209param1 && this._contains(__s209local0[__s209local1])) {
        __s209local3[__s209local4++] = __s209local0[__s209local1];
      }
    }
    if (__s209local2) {
      this._enabled(false, true);
    }
    return __s209local3;
  };
  __s1local12.recent = function () {
    return this._recent;
  };
  __s1local12._contains = function (__s218param0) {
    for (var __s218local0 = __s218param0.timeline; __s218local0;) {
      if (__s218local0 === this) {
        return true;
      }
      __s218local0 = __s218local0.timeline;
    }
    return false;
  };
  __s1local12.shiftChildren = function (__s223param0, __s223param1, __s223param2) {
    __s223param2 = __s223param2 || 0;
    var __s223local0;
    for (var __s223local1 = this._first, __s223local2 = this._labels; __s223local1;) {
      if (__s223local1._startTime >= __s223param2) {
        __s223local1._startTime += __s223param0;
      }
      __s223local1 = __s223local1._next;
    }
    if (__s223param1) {
      for (__s223local0 in __s223local2) {
        if (__s223local2[__s223local0] >= __s223param2) {
          __s223local2[__s223local0] += __s223param0;
        }
      }
    }
    return this._uncache(true);
  };
  __s1local12._kill = function (__s232param0, __s232param1) {
    if (!__s232param0 && !__s232param1) {
      return this._enabled(false, false);
    }
    var __s232local0 = __s232param1 ? this.getTweensOf(__s232param1) : this.getChildren(true, true, false);
    for (var __s232local1 = __s232local0.length, __s232local2 = false; --__s232local1 > -1;) {
      if (__s232local0[__s232local1]._kill(__s232param0, __s232param1)) {
        __s232local2 = true;
      }
    }
    return __s232local2;
  };
  __s1local12.clear = function (__s238param0) {
    var __s238local0 = this.getChildren(false, true, true);
    var __s238local1 = __s238local0.length;
    for (this._time = this._totalTime = 0; --__s238local1 > -1;) {
      __s238local0[__s238local1]._enabled(false, false);
    }
    if (__s238param0 !== false) {
      this._labels = {};
    }
    return this._uncache(true);
  };
  __s1local12.invalidate = function () {
    for (var __s243local0 = this._first; __s243local0;) {
      __s243local0.invalidate();
      __s243local0 = __s243local0._next;
    }
    return __s0local0.Animation.prototype.invalidate.call(this);
  };
  __s1local12._enabled = function (__s247param0, __s247param1) {
    if (__s247param0 === this._gc) {
      for (var __s247local0 = this._first; __s247local0;) {
        __s247local0._enabled(__s247param0, true);
        __s247local0 = __s247local0._next;
      }
    }
    return __s0local0.SimpleTimeline.prototype._enabled.call(this, __s247param0, __s247param1);
  };
  __s1local12.totalTime = function (__s252param0, __s252param1, __s252param2) {
    this._forcingPlayhead = true;
    var __s252local0 = __s0local0.Animation.prototype.totalTime.apply(this, arguments);
    this._forcingPlayhead = false;
    return __s252local0;
  };
  __s1local12.duration = function (__s254param0) {
    if (arguments.length) {
      if (this.duration() !== 0 && __s254param0 !== 0) {
        this.timeScale(this._duration / __s254param0);
      }
      return this;
    } else {
      if (this._dirty) {
        this.totalDuration();
      }
      return this._duration;
    }
  };
  __s1local12.totalDuration = function (__s260param0) {
    if (!arguments.length) {
      if (this._dirty) {
        var __s260local0;
        var __s260local1;
        for (var __s260local2 = 0, __s260local3 = this._last, __s260local4 = 999999999999; __s260local3;) {
          __s260local0 = __s260local3._prev;
          if (__s260local3._dirty) {
            __s260local3.totalDuration();
          }
          if (__s260local3._startTime > __s260local4 && this._sortChildren && !__s260local3._paused && !this._calculatingDuration) {
            this._calculatingDuration = 1;
            this.add(__s260local3, __s260local3._startTime - __s260local3._delay);
            this._calculatingDuration = 0;
          } else {
            __s260local4 = __s260local3._startTime;
          }
          if (__s260local3._startTime < 0 && !__s260local3._paused) {
            __s260local2 -= __s260local3._startTime;
            if (this._timeline.smoothChildTiming) {
              this._startTime += __s260local3._startTime / this._timeScale;
              this._time -= __s260local3._startTime;
              this._totalTime -= __s260local3._startTime;
              this._rawPrevTime -= __s260local3._startTime;
            }
            this.shiftChildren(-__s260local3._startTime, false, -9999999999);
            __s260local4 = 0;
          }
          if ((__s260local1 = __s260local3._startTime + __s260local3._totalDuration / __s260local3._timeScale) > __s260local2) {
            __s260local2 = __s260local1;
          }
          __s260local3 = __s260local0;
        }
        this._duration = this._totalDuration = __s260local2;
        this._dirty = false;
      }
      return this._totalDuration;
    }
    if (__s260param0 && this.totalDuration()) {
      return this.timeScale(this._totalDuration / __s260param0);
    } else {
      return this;
    }
  };
  __s1local12.paused = function (__s274param0) {
    if (!__s274param0) {
      for (var __s274local0 = this._first, __s274local1 = this._time; __s274local0;) {
        if (__s274local0._startTime === __s274local1 && __s274local0.data === "isPause") {
          __s274local0._rawPrevTime = 0;
        }
        __s274local0 = __s274local0._next;
      }
    }
    return __s0local0.Animation.prototype.paused.apply(this, arguments);
  };
  __s1local12.usesFrames = function () {
    for (var __s280local0 = this._timeline; __s280local0._timeline;) {
      __s280local0 = __s280local0._timeline;
    }
    return __s280local0 === __s0local0.Animation._rootFramesTimeline;
  };
  __s1local12.rawTime = function (__s284param0) {
    if (__s284param0 && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1)) {
      return this._totalTime % (this._duration + this._repeatDelay);
    } else if (this._paused) {
      return this._totalTime;
    } else {
      return (this._timeline.rawTime(__s284param0) - this._startTime) * this._timeScale;
    }
  };
  return __s1local0;
}, true);
export var TimelineLite = __s0local0.globals.TimelineLite;
