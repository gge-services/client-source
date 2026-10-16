var __s0local0;
(__s0local0 = function () {
  function __s1local0(__s3param0) {
    __s1local3.appendChild(__s3param0.dom);
    return __s3param0;
  }
  function __s1local1(__s5param0) {
    for (var __s5local0 = 0; __s5local0 < __s1local3.children.length; __s5local0++) {
      __s1local3.children[__s5local0].style.display = __s5local0 === __s5param0 ? "block" : "none";
    }
    __s1local2 = __s5param0;
  }
  var __s1local2 = 0;
  var __s1local3 = document.createElement("div");
  __s1local3.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
  __s1local3.addEventListener("click", function (__s9param0) {
    __s9param0.preventDefault();
    __s1local1(++__s1local2 % __s1local3.children.length);
  }, false);
  var __s1local4 = (performance || Date).now();
  var __s1local5 = __s1local4;
  var __s1local6 = 0;
  var __s1local7 = __s1local0(new __s0local0.Panel("FPS", "#0ff", "#002"));
  var __s1local8 = __s1local0(new __s0local0.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) {
    var __s1local9 = __s1local0(new __s0local0.Panel("MB", "#f08", "#201"));
  }
  __s1local1(0);
  return {
    REVISION: 16,
    dom: __s1local3,
    addPanel: __s1local0,
    showPanel: __s1local1,
    begin: function () {
      __s1local4 = (performance || Date).now();
    },
    end: function () {
      __s1local6++;
      var __s14local0 = (performance || Date).now();
      __s1local8.update(__s14local0 - __s1local4, 200);
      if (__s14local0 > __s1local5 + 1000 && (__s1local7.update(__s1local6 * 1000 / (__s14local0 - __s1local5), 100), __s1local5 = __s14local0, __s1local6 = 0, __s1local9)) {
        var __s14local1 = performance.memory;
        __s1local9.update(__s14local1.usedJSHeapSize / 1048576, __s14local1.jsHeapSizeLimit / 1048576);
      }
      return __s14local0;
    },
    update: function () {
      __s1local4 = this.end();
    },
    domElement: __s1local3,
    setMode: __s1local1
  };
}).Panel = function (__s19param0, __s19param1, __s19param2) {
  var __s19local0 = Infinity;
  var __s19local1 = 0;
  var __s19local2 = Math.round;
  var __s19local3 = __s19local2(window.devicePixelRatio || 1);
  var __s19local4 = __s19local3 * 80;
  var __s19local5 = __s19local3 * 48;
  var __s19local6 = __s19local3 * 3;
  var __s19local7 = __s19local3 * 2;
  var __s19local8 = __s19local3 * 3;
  var __s19local9 = __s19local3 * 15;
  var __s19local10 = __s19local3 * 74;
  var __s19local11 = __s19local3 * 30;
  var __s19local12 = document.createElement("canvas");
  __s19local12.width = __s19local4;
  __s19local12.height = __s19local5;
  __s19local12.style.cssText = "width:80px;height:48px";
  var __s19local13 = __s19local12.getContext("2d");
  __s19local13.font = "bold " + __s19local3 * 9 + "px Helvetica,Arial,sans-serif";
  __s19local13.textBaseline = "top";
  __s19local13.fillStyle = __s19param2;
  __s19local13.fillRect(0, 0, __s19local4, __s19local5);
  __s19local13.fillStyle = __s19param1;
  __s19local13.fillText(__s19param0, __s19local6, __s19local7);
  __s19local13.fillRect(__s19local8, __s19local9, __s19local10, __s19local11);
  __s19local13.fillStyle = __s19param2;
  __s19local13.globalAlpha = 0.9;
  __s19local13.fillRect(__s19local8, __s19local9, __s19local10, __s19local11);
  return {
    dom: __s19local12,
    update: function (__s21param0, __s21param1) {
      __s19local0 = Math.min(__s19local0, __s21param0);
      __s19local1 = Math.max(__s19local1, __s21param0);
      __s19local13.fillStyle = __s19param2;
      __s19local13.globalAlpha = 1;
      __s19local13.fillRect(0, 0, __s19local4, __s19local9);
      __s19local13.fillStyle = __s19param1;
      __s19local13.fillText(__s19local2(__s21param0) + " " + __s19param0 + " (" + __s19local2(__s19local0) + "-" + __s19local2(__s19local1) + ")", __s19local6, __s19local7);
      __s19local13.drawImage(__s19local12, __s19local8 + __s19local3, __s19local9, __s19local10 - __s19local3, __s19local11, __s19local8, __s19local9, __s19local10 - __s19local3, __s19local11);
      __s19local13.fillRect(__s19local8 + __s19local10 - __s19local3, __s19local9, __s19local3, __s19local11);
      __s19local13.fillStyle = __s19param2;
      __s19local13.globalAlpha = 0.9;
      __s19local13.fillRect(__s19local8 + __s19local10 - __s19local3, __s19local9, __s19local3, __s19local2((1 - __s21param0 / __s21param1) * __s19local11));
    }
  };
};
module.exports = __s0local0;
