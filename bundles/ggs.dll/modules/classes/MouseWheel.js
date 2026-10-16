Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MouseWheel(__s3param0, __s3param1 = true) {
    this.MWJS = "let browserScrolling=true;function allowBrowserScroll(value){browserScrolling=value;}function handle(delta){return browserScrolling;}function wheel(evt){\tlet delta=0;\tif(!evt){evt=window.event;}\tif(evt.wheelDelta){\t\tdelta=evt.wheelDelta/120;\t\tif(window.opera){delta=-delta;}\t}else if(evt.detail){\t\tdelta=-evt.detail/3;\t}\tif(delta){handle(delta);}\tif(!browserScrolling){\t\tif(evt.preventDefault){evt.preventDefault();}\t\tevt.returnValue=false;}\t}if(window.addEventListener){window.addEventListener('DOMMouseScroll',wheel,false);}window.onmousewheel=document.onmousewheel=wheel;";
    if (__s3param1) {
      this._stage = __s3param0;
    }
  }
  MouseWheel.prototype.destructor = function () {
    this._stage.removeEventListener("mouseleave", this.bindFunction(this.eventMouseWheelBrowser));
    this._stage.removeEventListener("mousemove", this.bindFunction(this.eventMouseWheelFlash));
  };
  MouseWheel.prototype.eventMouseWheelFlash = function (__s8param0) {
    this._stage.removeEventListener("mousemove", this.bindFunction(this.eventMouseWheelFlash));
    this._stage.addEventListener("mouseleave", this.bindFunction(this.eventMouseWheelBrowser));
    this.allowBrowserScroll(false);
  };
  MouseWheel.prototype.eventMouseWheelBrowser = function (__s10param0) {
    this._stage.addEventListener("mousemove", this.bindFunction(this.eventMouseWheelFlash));
    this._stage.removeEventListener("mouseleave", this.bindFunction(this.eventMouseWheelBrowser));
    this.allowBrowserScroll(true);
  };
  MouseWheel.prototype.allowBrowserScroll = function (__s12param0) {};
  return MouseWheel;
}();
exports.MouseWheel = __s0local0;
