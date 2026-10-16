Object.defineProperty(exports, "__esModule", {
  value: true
});
createjs.LoadQueue.prototype.loadFile = function (__s1param0, __s1param1, __s1param2) {
  if (__s1param0 != null) {
    var __s1local0 = this._addItem(__s1param0, null, __s1param2);
    if (__s1param1 !== false) {
      this.setPaused(false);
    } else {
      this.setPaused(true);
    }
    return __s1local0;
  }
  var __s1local1 = new createjs.ErrorEvent("PRELOAD_NO_FILE");
  this._sendError(__s1local1);
};
createjs.LoadQueue.prototype._addItem = function (__s6param0, __s6param1, __s6param2) {
  var __s6local0 = this._createLoadItem(__s6param0, __s6param1, __s6param2);
  if (__s6local0 != null) {
    var __s6local1 = this._createLoader(__s6local0);
    if (__s6local1 != null) {
      if ("plugins" in __s6local1) {
        __s6local1.plugins = this._plugins;
      }
      __s6local0._loader = __s6local1;
      this._loadQueue.push(__s6local1);
      var __s6local2 = __s6param0.priority || 0;
      this._priorityQueue = this._priorityQueue || [];
      this._priorityQueue.push(__s6local2);
      this._numItems++;
      this._updateProgress();
      if (this.maintainScriptOrder && __s6local0.type === createjs.LoadQueue.JAVASCRIPT || __s6local0.maintainOrder === true) {
        this._scriptOrder.push(__s6local0);
        this._loadedScripts.push(null);
      }
    }
    return __s6local1;
  }
};
createjs.LoadQueue.prototype.loadManifest = function (__s12param0, __s12param1, __s12param2) {
  var __s12local0;
  var __s12local1 = null;
  if (Array.isArray(__s12param0)) {
    if (__s12param0.length === 0) {
      var __s12local2 = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
      this._sendError(__s12local2);
      return;
    }
    __s12local0 = __s12param0;
  } else if (typeof __s12param0 == "string") {
    __s12local0 = [{
      src: __s12param0,
      type: createjs.AbstractLoader.MANIFEST
    }];
  } else {
    if (typeof __s12param0 != "object") {
      var __s12local3 = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
      this._sendError(__s12local3);
      return;
    }
    if (__s12param0.src !== undefined) {
      if (__s12param0.type == null) {
        __s12param0.type = createjs.AbstractLoader.MANIFEST;
      } else if (__s12param0.type !== createjs.AbstractLoader.MANIFEST) {
        var __s12local4 = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
        this._sendError(__s12local4);
      }
      __s12local0 = [__s12param0];
    } else if (__s12param0.manifest !== undefined) {
      __s12local0 = __s12param0.manifest;
      __s12local1 = __s12param0.path;
    }
  }
  var __s12local5 = this;
  __s12local0.forEach(function (__s23param0, __s23param1, __s23param2) {
    if (window.AssetURL) {
      __s23param0 = window.AssetURL.convert(__s23param0);
      __s23param2[__s23param1] = __s23param0;
    }
    __s12local5._addItem(__s23param0, __s12local1, __s12param2);
  });
  if (__s12param1 !== false) {
    this.setPaused(false);
  } else {
    this.setPaused(true);
  }
  return [];
};
function __s0local0(__s28param0, __s28param1, __s28param2, __s28param3) {
  if (__s28param0 > __s28param2) {
    return __s28param0;
  } else if (__s28param1 > __s28param3[__s28param0]) {
    return __s28param2;
  } else {
    return __s28param0;
  }
}
createjs.LoadQueue.prototype._loadNext = function () {
  if (!this._paused) {
    if (!this._loadStartWasDispatched) {
      this._sendLoadStart();
      this._loadStartWasDispatched = true;
    }
    if (this._numItems === this._numItemsLoaded) {
      this.loaded = true;
      this._sendComplete();
      if (this.next && this.next.load) {
        this.next.load();
      }
    } else {
      this.loaded = false;
    }
    for (var __s33local0 = 0; __s33local0 < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); __s33local0++) {
      var __s33local1 = this._priorityQueue.reduce(__s0local0, __s33local0);
      var __s33local2 = this._loadQueue[__s33local1];
      if (this._canStartLoad(__s33local2)) {
        this._loadQueue.splice(__s33local1, 1);
        this._priorityQueue.splice(__s33local1, 1);
        __s33local0--;
        this._loadItem(__s33local2);
      }
    }
  }
};
createjs.RequestUtils.getTypeByExtension = function (__s43param0) {
  if (__s43param0 == null) {
    return createjs.AbstractLoader.TEXT;
  }
  switch (__s43param0.toLowerCase()) {
    case "jpeg":
    case "jpg":
    case "gif":
    case "png":
    case "webp":
    case "bmp":
      return createjs.AbstractLoader.IMAGE;
    case "ogg":
    case "mp3":
    case "webm":
      return createjs.AbstractLoader.SOUND;
    case "mp4":
    case "webm":
    case "ts":
      return createjs.AbstractLoader.VIDEO;
    case "json":
      return createjs.AbstractLoader.JSON;
    case "xml":
      return createjs.AbstractLoader.XML;
    case "css":
      return createjs.AbstractLoader.CSS;
    case "js":
      return createjs.AbstractLoader.JAVASCRIPT;
    case "svg":
      return createjs.AbstractLoader.SVG;
    case "bpg":
      return createjs.AbstractLoader.BINARY;
    default:
      return createjs.AbstractLoader.TEXT;
  }
};
createjs.LoadQueue.prototype._cleanLoadItem = function (__s47param0) {
  var __s47local0 = __s47param0.getItem();
  if (__s47local0) {
    delete __s47local0._loader;
  }
  if (__s47param0._request instanceof createjs.JSONLoader || __s47param0._request instanceof createjs.JSONPLoader) {
    __s47param0._request.removeAllEventListeners();
    __s47param0._request._request = null;
  } else {
    __s47param0._request = null;
  }
};
createjs.ImageLoader.prototype._formatImage = function (__s52param0, __s52param1) {
  var __s52local0 = this._tag;
  var __s52local1 = window.URL || window.webkitURL;
  if (this._preferXHR) {
    if (__s52local1) {
      var __s52local2 = this.getResult(true);
      if (!__s52local2 || __s52local2.constructor.name !== "Blob" && __s52local2.constructor.name !== "File") {
        __s52param1(__s52local0);
        return;
      }
      var __s52local3 = __s52local1.createObjectURL(__s52local2);
      __s52local0.src = __s52local3;
      __s52local0.addEventListener("load", this._cleanUpURL, false);
      __s52local0.addEventListener("error", this._cleanUpURL, false);
    } else {
      __s52local0.src = this._item.src;
    }
  } else {
    ;
  }
  if (__s52local0.complete) {
    __s52param0(__s52local0);
  } else {
    __s52local0.onload = createjs.proxy(function () {
      __s52local0.onload = null;
      __s52local0.onerror = null;
      __s52param0(this._tag);
    }, this);
    __s52local0.onerror = createjs.proxy(function () {
      __s52local0.onload = null;
      __s52local0.onerror = null;
      __s52param1(this._tag);
    }, this);
  }
};
