export var AttrPlugin = require("gge-module:opaque_e6baa51a685d4351b8bdaca8")._gsScope._gsDefine.plugin({
  propName: "attr",
  API: 2,
  version: "0.6.1",
  init: function (__s1param0, __s1param1, __s1param2, __s1param3) {
    var __s1local0;
    var __s1local1;
    if (typeof __s1param0.setAttribute != "function") {
      return false;
    }
    for (__s1local0 in __s1param1) {
      if (typeof (__s1local1 = __s1param1[__s1local0]) == "function") {
        __s1local1 = __s1local1(__s1param3, __s1param0);
      }
      this._addTween(__s1param0, "setAttribute", __s1param0.getAttribute(__s1local0) + "", __s1local1 + "", __s1local0, false, __s1local0);
      this._overwriteProps.push(__s1local0);
    }
    return true;
  }
});
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
