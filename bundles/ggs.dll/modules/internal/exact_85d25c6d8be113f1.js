createjs.Stage;
var __s0local0 = 0;
var __s0local1 = 0;
createjs.Touch._handleStart = function (__s1param0, __s1param1, __s1param2, __s1param3, __s1param4) {
  var __s1local0 = __s1param0.__touch;
  if (__s1local0.multitouch || !__s1local0.count) {
    var __s1local1 = __s1local0.pointers;
    if (!__s1local1[__s1param1]) {
      __s1local1[__s1param1] = __s1param2.timeStamp;
      __s1local0.count++;
      __s1param0._handlePointerDown(__s1param1, __s1param2, __s1param3, __s1param4);
    }
  }
};
createjs.Touch._handleEnd = function (__s5param0, __s5param1, __s5param2) {
  var __s5local0 = __s5param0.__touch;
  var __s5local1 = __s5local0.pointers;
  if (__s5local1[__s5param1]) {
    var __s5local2 = __s5local1[__s5param1];
    var __s5local3 = __s5param2.timeStamp - __s5local2;
    __s5local0.count--;
    __s5param2.isLongPressed = __s5local3 > 250;
    __s5param0._handlePointerUp(__s5param1, __s5param2, true);
    delete __s5local1[__s5param1];
  }
};
createjs.Touch._IOS_handleEvent = function (__s8param0, __s8param1) {
  if (__s8param0) {
    if (__s8param0.__touch.preventDefault && __s8param1.preventDefault) {
      __s8param1.preventDefault();
    }
    var __s8local0 = __s8param1.changedTouches;
    var __s8local1 = __s8param1.type;
    if (__s8local1 == "touchstart" && __s8param1.touches.length == 1) {
      for (var __s8local2 = __s8param0; __s8local2;) {
        if (__s8local2._primaryPointerID === -1) {
          __s8local2._primaryPointerID = null;
        }
        __s8local2 = __s8local2.nextStage;
      }
    }
    for (var __s8local3 = 0, __s8local4 = __s8local0.length; __s8local3 < __s8local4; __s8local3++) {
      var __s8local5 = __s8local0[__s8local3];
      var __s8local6 = __s8local5.identifier;
      if (__s8local5.target == __s8param0.canvas) {
        if (__s8local1 == "touchstart") {
          this._handleStart(__s8param0, __s8local6, __s8param1, __s8local5.pageX, __s8local5.pageY);
        } else if (__s8local1 == "touchmove") {
          this._handleMove(__s8param0, __s8local6, __s8param1, __s8local5.pageX, __s8local5.pageY);
        } else if (__s8local1 == "touchend" || __s8local1 == "touchcancel") {
          this._handleEnd(__s8param0, __s8local6, __s8param1);
        }
      }
    }
    if (__s8local0.length === 1) {
      if (__s8local1 == "touchstart" && (__s0local1 = ++__s0local1 % 2) === 0) {
        __s0local0 = __s8param1.timeStamp;
      }
      if (__s0local1 === 1 && __s8local1 == "touchend") {
        if (__s8param1.timeStamp - __s0local0 < 300) {
          __s8param0._handleDoubleClick(__s8param1);
        }
        __s0local0 = 0;
      }
    } else {
      __s0local1 = 0;
    }
  }
};
