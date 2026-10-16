var __s0local0;
(function () {
  function __s1local0(__s3param0, __s3param1, __s3param2) {
    return __s3param0.call.apply(__s3param0.bind, arguments);
  }
  function __s1local1(__s5param0, __s5param1, __s5param2) {
    if (!__s5param0) {
      throw Error();
    }
    if (arguments.length > 2) {
      var __s5local0 = Array.prototype.slice.call(arguments, 2);
      return function () {
        var __s9local0 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(__s9local0, __s5local0);
        return __s5param0.apply(__s5param1, __s9local0);
      };
    }
    return function () {
      return __s5param0.apply(__s5param1, arguments);
    };
  }
  function __s1local2(__s13param0, __s13param1, __s13param2) {
    return (__s1local2 = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? __s1local0 : __s1local1).apply(null, arguments);
  }
  var __s1local3 = Date.now || function () {
    return +new Date();
  };
  var __s1local4 = !!window.FontFace;
  function __s1local5(__s17param0, __s17param1, __s17param2, __s17param3) {
    __s17param1 = __s17param0.c.createElement(__s17param1);
    if (__s17param2) {
      for (var __s17local0 in __s17param2) {
        if (__s17param2.hasOwnProperty(__s17local0)) {
          if (__s17local0 == "style") {
            __s17param1.style.cssText = __s17param2[__s17local0];
          } else {
            __s17param1.setAttribute(__s17local0, __s17param2[__s17local0]);
          }
        }
      }
    }
    if (__s17param3) {
      __s17param1.appendChild(__s17param0.c.createTextNode(__s17param3));
    }
    return __s17param1;
  }
  function __s1local6(__s26param0, __s26param1, __s26param2) {
    if (!(__s26param0 = __s26param0.c.getElementsByTagName(__s26param1)[0])) {
      __s26param0 = document.documentElement;
    }
    __s26param0.insertBefore(__s26param2, __s26param0.lastChild);
  }
  function __s1local7(__s29param0) {
    if (__s29param0.parentNode) {
      __s29param0.parentNode.removeChild(__s29param0);
    }
  }
  function __s1local8(__s32param0, __s32param1, __s32param2) {
    __s32param1 = __s32param1 || [];
    __s32param2 = __s32param2 || [];
    var __s32local0 = __s32param0.className.split(/\s+/);
    for (var __s32local1 = 0; __s32local1 < __s32param1.length; __s32local1 += 1) {
      var __s32local2 = false;
      for (var __s32local3 = 0; __s32local3 < __s32local0.length; __s32local3 += 1) {
        if (__s32param1[__s32local1] === __s32local0[__s32local3]) {
          __s32local2 = true;
          break;
        }
      }
      if (!__s32local2) {
        __s32local0.push(__s32param1[__s32local1]);
      }
    }
    __s32param1 = [];
    __s32local1 = 0;
    for (; __s32local1 < __s32local0.length; __s32local1 += 1) {
      __s32local2 = false;
      __s32local3 = 0;
      for (; __s32local3 < __s32param2.length; __s32local3 += 1) {
        if (__s32local0[__s32local1] === __s32param2[__s32local3]) {
          __s32local2 = true;
          break;
        }
      }
      if (!__s32local2) {
        __s32param1.push(__s32local0[__s32local1]);
      }
    }
    __s32param0.className = __s32param1.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }
  function __s1local9(__s46param0, __s46param1) {
    var __s46local0 = __s46param0.className.split(/\s+/);
    for (var __s46local1 = 0, __s46local2 = __s46local0.length; __s46local1 < __s46local2; __s46local1++) {
      if (__s46local0[__s46local1] == __s46param1) {
        return true;
      }
    }
    return false;
  }
  function __s1local10(__s51param0, __s51param1, __s51param2) {
    function __s51local0() {
      if (__s51local4 && __s51local1 && __s51local2) {
        __s51local4(__s51local3);
        __s51local4 = null;
      }
    }
    __s51param1 = __s1local5(__s51param0, "link", {
      rel: "stylesheet",
      href: __s51param1,
      media: "all"
    });
    var __s51local1 = false;
    var __s51local2 = true;
    var __s51local3 = null;
    var __s51local4 = __s51param2 || null;
    if (__s1local4) {
      __s51param1.onload = function () {
        __s51local1 = true;
        __s51local0();
      };
      __s51param1.onerror = function () {
        __s51local1 = true;
        __s51local3 = Error("Stylesheet failed to load");
        __s51local0();
      };
    } else {
      setTimeout(function () {
        __s51local1 = true;
        __s51local0();
      }, 0);
    }
    __s1local6(__s51param0, "head", __s51param1);
  }
  function __s1local11(__s64param0, __s64param1, __s64param2, __s64param3) {
    var __s64local0 = __s64param0.c.getElementsByTagName("head")[0];
    if (__s64local0) {
      var __s64local1 = __s1local5(__s64param0, "script", {
        src: __s64param1
      });
      var __s64local2 = false;
      __s64local1.onload = __s64local1.onreadystatechange = function () {
        if (!__s64local2 && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
          __s64local2 = true;
          if (__s64param2) {
            __s64param2(null);
          }
          __s64local1.onload = __s64local1.onreadystatechange = null;
          if (__s64local1.parentNode.tagName == "HEAD") {
            __s64local0.removeChild(__s64local1);
          }
        }
      };
      __s64local0.appendChild(__s64local1);
      setTimeout(function () {
        if (!__s64local2) {
          __s64local2 = true;
          if (__s64param2) {
            __s64param2(Error("Script load timeout"));
          }
        }
      }, __s64param3 || 5000);
      return __s64local1;
    }
    return null;
  }
  function __s1local12() {
    this.a = 0;
    this.c = null;
  }
  function __s1local13(__s78param0) {
    __s78param0.a++;
    return function () {
      __s78param0.a--;
      __s1local15(__s78param0);
    };
  }
  function __s1local14(__s82param0, __s82param1) {
    __s82param0.c = __s82param1;
    __s1local15(__s82param0);
  }
  function __s1local15(__s84param0) {
    if (__s84param0.a == 0 && __s84param0.c) {
      __s84param0.c();
      __s84param0.c = null;
    }
  }
  function __s1local16(__s87param0) {
    this.a = __s87param0 || "-";
  }
  function __s1local17(__s89param0, __s89param1) {
    this.c = __s89param0;
    this.f = 4;
    this.a = "n";
    var __s89local0 = (__s89param1 || "n4").match(/^([nio])([1-9])$/i);
    if (__s89local0) {
      this.a = __s89local0[1];
      this.f = parseInt(__s89local0[2], 10);
    }
  }
  function __s1local18(__s92param0) {
    var __s92local0 = [];
    __s92param0 = __s92param0.split(/,\s*/);
    for (var __s92local1 = 0; __s92local1 < __s92param0.length; __s92local1++) {
      var __s92local2 = __s92param0[__s92local1].replace(/['"]/g, "");
      if (__s92local2.indexOf(" ") != -1 || /^\d/.test(__s92local2)) {
        __s92local0.push("'" + __s92local2 + "'");
      } else {
        __s92local0.push(__s92local2);
      }
    }
    return __s92local0.join(",");
  }
  function __s1local19(__s98param0) {
    return __s98param0.a + __s98param0.f;
  }
  function __s1local20(__s100param0) {
    var __s100local0 = "normal";
    if (__s100param0.a === "o") {
      __s100local0 = "oblique";
    } else if (__s100param0.a === "i") {
      __s100local0 = "italic";
    }
    return __s100local0;
  }
  function __s1local21(__s104param0) {
    var __s104local0 = 4;
    var __s104local1 = "n";
    var __s104local2 = null;
    if (__s104param0) {
      if ((__s104local2 = __s104param0.match(/(normal|oblique|italic)/i)) && __s104local2[1]) {
        __s104local1 = __s104local2[1].substr(0, 1).toLowerCase();
      }
      if ((__s104local2 = __s104param0.match(/([1-9]00|normal|bold)/i)) && __s104local2[1]) {
        if (/bold/i.test(__s104local2[1])) {
          __s104local0 = 7;
        } else if (/[1-9]00/.test(__s104local2[1])) {
          __s104local0 = parseInt(__s104local2[1].substr(0, 1), 10);
        }
      }
    }
    return __s104local1 + __s104local0;
  }
  function __s1local22(__s111param0) {
    if (__s111param0.g) {
      var __s111local0 = __s1local9(__s111param0.f, __s111param0.a.c("wf", "active"));
      var __s111local1 = [];
      var __s111local2 = [__s111param0.a.c("wf", "loading")];
      if (!__s111local0) {
        __s111local1.push(__s111param0.a.c("wf", "inactive"));
      }
      __s1local8(__s111param0.f, __s111local1, __s111local2);
    }
    __s1local23(__s111param0, "inactive");
  }
  function __s1local23(__s115param0, __s115param1, __s115param2) {
    if (__s115param0.j && __s115param0.h[__s115param1]) {
      if (__s115param2) {
        __s115param0.h[__s115param1](__s115param2.c, __s1local19(__s115param2));
      } else {
        __s115param0.h[__s115param1]();
      }
    }
  }
  function __s1local24(__s120param0, __s120param1) {
    this.c = __s120param0;
    this.f = __s120param1;
    this.a = __s1local5(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }
  function __s1local25(__s122param0) {
    __s1local6(__s122param0.c, "body", __s122param0.a);
  }
  function __s1local26(__s124param0) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + __s1local18(__s124param0.c) + ";font-style:" + __s1local20(__s124param0) + ";font-weight:" + __s124param0.f + "00;";
  }
  function __s1local27(__s126param0, __s126param1, __s126param2, __s126param3, __s126param4, __s126param5) {
    this.g = __s126param0;
    this.j = __s126param1;
    this.a = __s126param3;
    this.c = __s126param2;
    this.f = __s126param4 || 3000;
    this.h = __s126param5 || undefined;
  }
  function __s1local28(__s128param0, __s128param1, __s128param2, __s128param3, __s128param4, __s128param5, __s128param6) {
    this.v = __s128param0;
    this.B = __s128param1;
    this.c = __s128param2;
    this.a = __s128param3;
    this.s = __s128param6 || "BESbswy";
    this.f = {};
    this.w = __s128param4 || 3000;
    this.u = __s128param5 || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new __s1local24(this.c, this.s);
    this.h = new __s1local24(this.c, this.s);
    this.j = new __s1local24(this.c, this.s);
    this.m = new __s1local24(this.c, this.s);
    __s128param0 = __s1local26(__s128param0 = new __s1local17(this.a.c + ",serif", __s1local19(this.a)));
    this.g.a.style.cssText = __s128param0;
    __s128param0 = __s1local26(__s128param0 = new __s1local17(this.a.c + ",sans-serif", __s1local19(this.a)));
    this.h.a.style.cssText = __s128param0;
    __s128param0 = __s1local26(__s128param0 = new __s1local17("serif", __s1local19(this.a)));
    this.j.a.style.cssText = __s128param0;
    __s128param0 = __s1local26(__s128param0 = new __s1local17("sans-serif", __s1local19(this.a)));
    this.m.a.style.cssText = __s128param0;
    __s1local25(this.g);
    __s1local25(this.h);
    __s1local25(this.j);
    __s1local25(this.m);
  }
  __s1local16.prototype.c = function (__s130param0) {
    var __s130local0 = [];
    for (var __s130local1 = 0; __s130local1 < arguments.length; __s130local1++) {
      __s130local0.push(arguments[__s130local1].replace(/[\W_]+/g, "").toLowerCase());
    }
    return __s130local0.join(this.a);
  };
  __s1local27.prototype.start = function () {
    var __s134local0 = this.c.o.document;
    var __s134local1 = this;
    var __s134local2 = __s1local3();
    var __s134local3 = new Promise(function (__s136param0, __s136param1) {
      (function __s138local0() {
        if (__s1local3() - __s134local2 >= __s134local1.f) {
          __s136param1();
        } else {
          __s134local0.fonts.load(function __s142local0(__s142param0) {
            return __s1local20(__s142param0) + " " + __s142param0.f + "00 300px " + __s1local18(__s142param0.c);
          }(__s134local1.a), __s134local1.h).then(function (__s144param0) {
            if (__s144param0.length >= 1) {
              __s136param0();
            } else {
              setTimeout(__s138local0, 25);
            }
          }, function () {
            __s136param1();
          });
        }
      })();
    });
    var __s134local4 = null;
    var __s134local5 = new Promise(function (__s150param0, __s150param1) {
      __s134local4 = setTimeout(__s150param1, __s134local1.f);
    });
    Promise.race([__s134local5, __s134local3]).then(function () {
      if (__s134local4) {
        clearTimeout(__s134local4);
        __s134local4 = null;
      }
      __s134local1.g(__s134local1.a);
    }, function () {
      __s134local1.j(__s134local1.a);
    });
  };
  var __s1local29 = {
    D: "serif",
    C: "sans-serif"
  };
  var __s1local30 = null;
  function __s1local31() {
    if (__s1local30 === null) {
      var __s157local0 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      __s1local30 = !!__s157local0 && (parseInt(__s157local0[1], 10) < 536 || parseInt(__s157local0[1], 10) === 536 && parseInt(__s157local0[2], 10) <= 11);
    }
    return __s1local30;
  }
  function __s1local32(__s160param0, __s160param1, __s160param2) {
    for (var __s160local0 in __s1local29) {
      if (__s1local29.hasOwnProperty(__s160local0) && __s160param1 === __s160param0.f[__s1local29[__s160local0]] && __s160param2 === __s160param0.f[__s1local29[__s160local0]]) {
        return true;
      }
    }
    return false;
  }
  function __s1local33(__s165param0) {
    var __s165local0;
    var __s165local1 = __s165param0.g.a.offsetWidth;
    var __s165local2 = __s165param0.h.a.offsetWidth;
    if (!(__s165local0 = __s165local1 === __s165param0.f.serif && __s165local2 === __s165param0.f["sans-serif"])) {
      __s165local0 = __s1local31() && __s1local32(__s165param0, __s165local1, __s165local2);
    }
    if (__s165local0) {
      if (__s1local3() - __s165param0.A >= __s165param0.w) {
        if (__s1local31() && __s1local32(__s165param0, __s165local1, __s165local2) && (__s165param0.u === null || __s165param0.u.hasOwnProperty(__s165param0.a.c))) {
          __s1local34(__s165param0, __s165param0.v);
        } else {
          __s1local34(__s165param0, __s165param0.B);
        }
      } else {
        (function __s173local0(__s173param0) {
          setTimeout(__s1local2(function () {
            __s1local33(this);
          }, __s173param0), 50);
        })(__s165param0);
      }
    } else {
      __s1local34(__s165param0, __s165param0.v);
    }
  }
  function __s1local34(__s178param0, __s178param1) {
    setTimeout(__s1local2(function () {
      __s1local7(this.g.a);
      __s1local7(this.h.a);
      __s1local7(this.j.a);
      __s1local7(this.m.a);
      __s178param1(this.a);
    }, __s178param0), 0);
  }
  function __s1local35(__s182param0, __s182param1, __s182param2) {
    this.c = __s182param0;
    this.a = __s182param1;
    this.f = 0;
    this.m = this.j = false;
    this.s = __s182param2;
  }
  __s1local28.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = __s1local3();
    __s1local33(this);
  };
  var __s1local36 = null;
  function __s1local37(__s186param0) {
    if (--__s186param0.f == 0 && __s186param0.j) {
      if (__s186param0.m) {
        if ((__s186param0 = __s186param0.a).g) {
          __s1local8(__s186param0.f, [__s186param0.a.c("wf", "active")], [__s186param0.a.c("wf", "loading"), __s186param0.a.c("wf", "inactive")]);
        }
        __s1local23(__s186param0, "active");
      } else {
        __s1local22(__s186param0.a);
      }
    }
  }
  function __s1local38(__s192param0) {
    this.j = __s192param0;
    this.a = new function __s194local0() {
      this.c = {};
    }();
    this.h = 0;
    this.f = this.g = true;
  }
  function __s1local39(__s196param0, __s196param1, __s196param2, __s196param3, __s196param4) {
    var __s196local0 = --__s196param0.h == 0;
    if (__s196param0.f || __s196param0.g) {
      setTimeout(function () {
        var __s199local0 = __s196param4 || null;
        var __s199local1 = __s196param3 || {};
        if (__s196param2.length === 0 && __s196local0) {
          __s1local22(__s196param1.a);
        } else {
          __s196param1.f += __s196param2.length;
          if (__s196local0) {
            __s196param1.j = __s196local0;
          }
          var __s199local2;
          var __s199local3 = [];
          for (__s199local2 = 0; __s199local2 < __s196param2.length; __s199local2++) {
            var __s199local4 = __s196param2[__s199local2];
            var __s199local5 = __s199local1[__s199local4.c];
            var __s199local6 = __s196param1.a;
            var __s199local7 = __s199local4;
            if (__s199local6.g) {
              __s1local8(__s199local6.f, [__s199local6.a.c("wf", __s199local7.c, __s1local19(__s199local7).toString(), "loading")]);
            }
            __s1local23(__s199local6, "fontloading", __s199local7);
            __s199local6 = null;
            if (__s1local36 === null) {
              if (window.FontFace) {
                __s199local7 = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var __s199local8 = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                __s1local36 = __s199local7 ? parseInt(__s199local7[1], 10) > 42 : !__s199local8;
              } else {
                __s1local36 = false;
              }
            }
            __s199local6 = __s1local36 ? new __s1local27(__s1local2(__s196param1.g, __s196param1), __s1local2(__s196param1.h, __s196param1), __s196param1.c, __s199local4, __s196param1.s, __s199local5) : new __s1local28(__s1local2(__s196param1.g, __s196param1), __s1local2(__s196param1.h, __s196param1), __s196param1.c, __s199local4, __s196param1.s, __s199local0, __s199local5);
            __s199local3.push(__s199local6);
          }
          for (__s199local2 = 0; __s199local2 < __s199local3.length; __s199local2++) {
            __s199local3[__s199local2].start();
          }
        }
      }, 0);
    }
  }
  function __s1local40(__s212param0, __s212param1) {
    this.c = __s212param0;
    this.a = __s212param1;
  }
  function __s1local41(__s214param0, __s214param1) {
    this.c = __s214param0;
    this.a = __s214param1;
  }
  __s1local35.prototype.g = function (__s216param0) {
    var __s216local0 = this.a;
    if (__s216local0.g) {
      __s1local8(__s216local0.f, [__s216local0.a.c("wf", __s216param0.c, __s1local19(__s216param0).toString(), "active")], [__s216local0.a.c("wf", __s216param0.c, __s1local19(__s216param0).toString(), "loading"), __s216local0.a.c("wf", __s216param0.c, __s1local19(__s216param0).toString(), "inactive")]);
    }
    __s1local23(__s216local0, "fontactive", __s216param0);
    this.m = true;
    __s1local37(this);
  };
  __s1local35.prototype.h = function (__s219param0) {
    var __s219local0 = this.a;
    if (__s219local0.g) {
      var __s219local1 = __s1local9(__s219local0.f, __s219local0.a.c("wf", __s219param0.c, __s1local19(__s219param0).toString(), "active"));
      var __s219local2 = [];
      var __s219local3 = [__s219local0.a.c("wf", __s219param0.c, __s1local19(__s219param0).toString(), "loading")];
      if (!__s219local1) {
        __s219local2.push(__s219local0.a.c("wf", __s219param0.c, __s1local19(__s219param0).toString(), "inactive"));
      }
      __s1local8(__s219local0.f, __s219local2, __s219local3);
    }
    __s1local23(__s219local0, "fontinactive", __s219param0);
    __s1local37(this);
  };
  __s1local38.prototype.load = function (__s223param0) {
    this.c = new function __s225local0(__s225param0, __s225param1) {
      this.a = __s225param0;
      this.o = __s225param1 || __s225param0;
      this.c = this.o.document;
    }(this.j, __s223param0.context || this.j);
    this.g = __s223param0.events !== false;
    this.f = __s223param0.classes !== false;
    (function __s227local0(__s227param0, __s227param1, __s227param2) {
      var __s227local1 = [];
      var __s227local2 = __s227param2.timeout;
      (function __s229local0(__s229param0) {
        if (__s229param0.g) {
          __s1local8(__s229param0.f, [__s229param0.a.c("wf", "loading")]);
        }
        __s1local23(__s229param0, "loading");
      })(__s227param1);
      var __s227local1 = function __s232local0(__s232param0, __s232param1, __s232param2) {
        var __s232local1;
        var __s232local2 = [];
        for (__s232local1 in __s232param1) {
          if (__s232param1.hasOwnProperty(__s232local1)) {
            var __s232local3 = __s232param0.c[__s232local1];
            if (__s232local3) {
              __s232local2.push(__s232local3(__s232param1[__s232local1], __s232param2));
            }
          }
        }
        return __s232local2;
      }(__s227param0.a, __s227param2, __s227param0.c);
      var __s227local3 = new __s1local35(__s227param0.c, __s227param1, __s227local2);
      __s227param0.h = __s227local1.length;
      __s227param1 = 0;
      __s227param2 = __s227local1.length;
      for (; __s227param1 < __s227param2; __s227param1++) {
        __s227local1[__s227param1].load(function (__s240param0, __s240param1, __s240param2) {
          __s1local39(__s227param0, __s227local3, __s240param0, __s240param1, __s240param2);
        });
      }
    })(this, new function __s242local0(__s242param0, __s242param1) {
      this.c = __s242param0;
      this.f = __s242param0.o.document.documentElement;
      this.h = __s242param1;
      this.a = new __s1local16("-");
      this.j = __s242param1.events !== false;
      this.g = __s242param1.classes !== false;
    }(this.c, __s223param0), __s223param0);
  };
  __s1local40.prototype.load = function (__s244param0) {
    var __s244local0 = this;
    var __s244local1 = __s244local0.a.projectId;
    var __s244local2 = __s244local0.a.version;
    if (__s244local1) {
      var __s244local3 = __s244local0.c.o;
      __s1local11(this.c, (__s244local0.a.api || "https://fast.fonts.net/jsapi") + "/" + __s244local1 + ".js" + (__s244local2 ? "?v=" + __s244local2 : ""), function (__s247param0) {
        if (__s247param0) {
          __s244param0([]);
        } else {
          __s244local3["__MonotypeConfiguration__" + __s244local1] = function () {
            return __s244local0.a;
          };
          (function __s253local0() {
            if (__s244local3["__mti_fntLst" + __s244local1]) {
              var __s253local1;
              var __s253local2 = __s244local3["__mti_fntLst" + __s244local1]();
              var __s253local3 = [];
              if (__s253local2) {
                for (var __s253local4 = 0; __s253local4 < __s253local2.length; __s253local4++) {
                  var __s253local5 = __s253local2[__s253local4].fontfamily;
                  if (__s253local2[__s253local4].fontStyle != undefined && __s253local2[__s253local4].fontWeight != undefined) {
                    __s253local1 = __s253local2[__s253local4].fontStyle + __s253local2[__s253local4].fontWeight;
                    __s253local3.push(new __s1local17(__s253local5, __s253local1));
                  } else {
                    __s253local3.push(new __s1local17(__s253local5));
                  }
                }
              }
              __s244param0(__s253local3);
            } else {
              setTimeout(function () {
                __s253local0();
              }, 50);
            }
          })();
        }
      }).id = "__MonotypeAPIScript__" + __s244local1;
    } else {
      __s244param0([]);
    }
  };
  __s1local41.prototype.load = function (__s265param0) {
    var __s265local0;
    var __s265local1;
    var __s265local2 = this.a.urls || [];
    var __s265local3 = this.a.families || [];
    var __s265local4 = this.a.testStrings || {};
    var __s265local5 = new __s1local12();
    __s265local0 = 0;
    __s265local1 = __s265local2.length;
    for (; __s265local0 < __s265local1; __s265local0++) {
      __s1local10(this.c, __s265local2[__s265local0], __s1local13(__s265local5));
    }
    var __s265local6 = [];
    __s265local0 = 0;
    __s265local1 = __s265local3.length;
    for (; __s265local0 < __s265local1; __s265local0++) {
      if ((__s265local2 = __s265local3[__s265local0].split(":"))[1]) {
        for (var __s265local7 = __s265local2[1].split(","), __s265local8 = 0; __s265local8 < __s265local7.length; __s265local8 += 1) {
          __s265local6.push(new __s1local17(__s265local2[0], __s265local7[__s265local8]));
        }
      } else {
        __s265local6.push(new __s1local17(__s265local2[0]));
      }
    }
    __s1local14(__s265local5, function () {
      __s265param0(__s265local6, __s265local4);
    });
  };
  var __s1local42 = "https://fonts.googleapis.com/css";
  var __s1local43 = {
    latin: "BESbswy",
    "latin-ext": "çöüğş",
    cyrillic: "йяЖ",
    greek: "αβΣ",
    khmer: "កខគ",
    Hanuman: "កខគ"
  };
  var __s1local44 = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  };
  var __s1local45 = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  };
  var __s1local46 = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function __s1local47(__s277param0, __s277param1) {
    this.c = __s277param0;
    this.a = __s277param1;
  }
  var __s1local48 = {
    Arimo: true,
    Cousine: true,
    Tinos: true
  };
  function __s1local49(__s279param0, __s279param1) {
    this.c = __s279param0;
    this.a = __s279param1;
  }
  function __s1local50(__s281param0, __s281param1) {
    this.c = __s281param0;
    this.f = __s281param1;
    this.a = [];
  }
  __s1local47.prototype.load = function (__s283param0) {
    var __s283local0 = new __s1local12();
    var __s283local1 = this.c;
    var __s283local2 = new function __s285local0(__s285param0, __s285param1) {
      this.c = __s285param0 || __s1local42;
      this.a = [];
      this.f = [];
      this.g = __s285param1 || "";
    }(this.a.api, this.a.text);
    var __s283local3 = this.a.families;
    (function __s287local0(__s287param0, __s287param1) {
      for (var __s287local1 = __s287param1.length, __s287local2 = 0; __s287local2 < __s287local1; __s287local2++) {
        var __s287local3 = __s287param1[__s287local2].split(":");
        if (__s287local3.length == 3) {
          __s287param0.f.push(__s287local3.pop());
        }
        var __s287local4 = "";
        if (__s287local3.length == 2 && __s287local3[1] != "") {
          __s287local4 = ":";
        }
        __s287param0.a.push(__s287local3.join(__s287local4));
      }
    })(__s283local2, __s283local3);
    var __s283local4 = new function __s293local0(__s293param0) {
      this.f = __s293param0;
      this.a = [];
      this.c = {};
    }(__s283local3);
    (function __s295local0(__s295param0) {
      for (var __s295local1 = __s295param0.f.length, __s295local2 = 0; __s295local2 < __s295local1; __s295local2++) {
        var __s295local3 = __s295param0.f[__s295local2].split(":");
        var __s295local4 = __s295local3[0].replace(/\+/g, " ");
        var __s295local5 = ["n4"];
        if (__s295local3.length >= 2) {
          var __s295local6;
          __s295local6 = [];
          if (__s295local7 = __s295local3[1]) {
            var __s295local7;
            for (var __s295local8 = (__s295local7 = __s295local7.split(",")).length, __s295local9 = 0; __s295local9 < __s295local8; __s295local9++) {
              var __s295local10;
              if ((__s295local10 = __s295local7[__s295local9]).match(/^[\w-]+$/)) {
                if ((__s295local12 = __s1local46.exec(__s295local10.toLowerCase())) == null) {
                  __s295local10 = "";
                } else {
                  __s295local10 = (__s295local10 = __s295local12[2]) == null || __s295local10 == "" ? "n" : __s1local45[__s295local10];
                  if ((__s295local12 = __s295local12[1]) == null || __s295local12 == "") {
                    __s295local12 = "4";
                  } else {
                    var __s295local11 = __s1local44[__s295local12];
                    var __s295local12 = __s295local11 || (isNaN(__s295local12) ? "4" : __s295local12.substr(0, 1));
                  }
                  __s295local10 = [__s295local10, __s295local12].join("");
                }
              } else {
                __s295local10 = "";
              }
              if (__s295local10) {
                __s295local6.push(__s295local10);
              }
            }
          }
          if (__s295local6.length > 0) {
            __s295local5 = __s295local6;
          }
          if (__s295local3.length == 3) {
            __s295local6 = [];
            if ((__s295local3 = (__s295local3 = __s295local3[2]) ? __s295local3.split(",") : __s295local6).length > 0 && (__s295local3 = __s1local43[__s295local3[0]])) {
              __s295param0.c[__s295local4] = __s295local3;
            }
          }
        }
        if (!__s295param0.c[__s295local4]) {
          if (__s295local3 = __s1local43[__s295local4]) {
            __s295param0.c[__s295local4] = __s295local3;
          }
        }
        __s295local3 = 0;
        for (; __s295local3 < __s295local5.length; __s295local3 += 1) {
          __s295param0.a.push(new __s1local17(__s295local4, __s295local5[__s295local3]));
        }
      }
    })(__s283local4);
    __s1local10(__s283local1, function __s317local0(__s317param0) {
      if (__s317param0.a.length == 0) {
        throw Error("No fonts to load!");
      }
      if (__s317param0.c.indexOf("kit=") != -1) {
        return __s317param0.c;
      }
      for (var __s317local1 = __s317param0.a.length, __s317local2 = [], __s317local3 = 0; __s317local3 < __s317local1; __s317local3++) {
        __s317local2.push(__s317param0.a[__s317local3].replace(/ /g, "+"));
      }
      __s317local1 = __s317param0.c + "?family=" + __s317local2.join("%7C");
      if (__s317param0.f.length > 0) {
        __s317local1 += "&subset=" + __s317param0.f.join(",");
      }
      if (__s317param0.g.length > 0) {
        __s317local1 += "&text=" + encodeURIComponent(__s317param0.g);
      }
      return __s317local1;
    }(__s283local2), __s1local13(__s283local0));
    __s1local14(__s283local0, function () {
      __s283param0(__s283local4.a, __s283local4.c, __s1local48);
    });
  };
  __s1local49.prototype.load = function (__s327param0) {
    var __s327local0 = this.a.id;
    var __s327local1 = this.c.o;
    if (__s327local0) {
      __s1local11(this.c, (this.a.api || "https://use.typekit.net") + "/" + __s327local0 + ".js", function (__s330param0) {
        if (__s330param0) {
          __s327param0([]);
        } else if (__s327local1.Typekit && __s327local1.Typekit.config && __s327local1.Typekit.config.fn) {
          __s330param0 = __s327local1.Typekit.config.fn;
          var __s330local0 = [];
          for (var __s330local1 = 0; __s330local1 < __s330param0.length; __s330local1 += 2) {
            var __s330local2 = __s330param0[__s330local1];
            for (var __s330local3 = __s330param0[__s330local1 + 1], __s330local4 = 0; __s330local4 < __s330local3.length; __s330local4++) {
              __s330local0.push(new __s1local17(__s330local2, __s330local3[__s330local4]));
            }
          }
          try {
            __s327local1.Typekit.load({
              events: false,
              classes: false,
              async: true
            });
          } catch (__s339local0) {}
          __s327param0(__s330local0);
        }
      }, 2000);
    } else {
      __s327param0([]);
    }
  };
  __s1local50.prototype.load = function (__s342param0) {
    var __s342local0 = this.f.id;
    var __s342local1 = this.c.o;
    var __s342local2 = this;
    if (__s342local0) {
      __s342local1.__webfontfontdeckmodule__ ||= {};
      __s342local1.__webfontfontdeckmodule__[__s342local0] = function (__s345param0, __s345param1) {
        for (var __s345local0 = 0, __s345local1 = __s345param1.fonts.length; __s345local0 < __s345local1; ++__s345local0) {
          var __s345local2 = __s345param1.fonts[__s345local0];
          __s342local2.a.push(new __s1local17(__s345local2.name, __s1local21("font-weight:" + __s345local2.weight + ";font-style:" + __s345local2.style)));
        }
        __s342param0(__s342local2.a);
      };
      __s1local11(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function __s349local0(__s349param0) {
        return __s349param0.o.location.hostname || __s349param0.a.location.hostname;
      }(this.c) + "/" + __s342local0 + ".js", function (__s351param0) {
        if (__s351param0) {
          __s342param0([]);
        }
      });
    } else {
      __s342param0([]);
    }
  };
  var __s1local51 = new __s1local38(window);
  __s1local51.a.c.custom = function (__s355param0, __s355param1) {
    return new __s1local41(__s355param1, __s355param0);
  };
  __s1local51.a.c.fontdeck = function (__s357param0, __s357param1) {
    return new __s1local50(__s357param1, __s357param0);
  };
  __s1local51.a.c.monotype = function (__s359param0, __s359param1) {
    return new __s1local40(__s359param1, __s359param0);
  };
  __s1local51.a.c.typekit = function (__s361param0, __s361param1) {
    return new __s1local49(__s361param1, __s361param0);
  };
  __s1local51.a.c.google = function (__s363param0, __s363param1) {
    return new __s1local47(__s363param1, __s363param0);
  };
  var __s1local52 = {
    load: __s1local2(__s1local51.load, __s1local51)
  };
  if ((__s0local0 = function () {
    return __s1local52;
  }.call(exports, require, exports, module)) !== undefined) {
    module.exports = __s0local0;
  }
})();
