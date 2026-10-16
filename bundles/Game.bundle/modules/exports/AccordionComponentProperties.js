Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AccordionComponentProperties(__s3param0 = AccordionComponentProperties.SCROLL_DURATION, __s3param1 = AccordionComponentProperties.SCROLL_STEP_PIXELS, __s3param2 = true, __s3param3 = true, __s3param4 = null, __s3param5 = false) {
    this.scrollDuration = AccordionComponentProperties.SCROLL_DURATION;
    this.scrollStepPixels = AccordionComponentProperties.SCROLL_STEP_PIXELS;
    this.isVertical = true;
    this.onlyOneActiveItem = true;
    this.scrollStrategy = null;
    this.disableButtons = false;
    this.scrollToOpened = false;
    this.scrollDuration = __s3param0;
    this.scrollStepPixels = __s3param1;
    this.isVertical = __s3param2;
    this.onlyOneActiveItem = __s3param3;
    this.scrollStrategy = __s3param4;
    this.disableButtons = __s3param5;
  }
  AccordionComponentProperties.__initialize_static_members = function () {
    AccordionComponentProperties.SCROLL_DURATION = 0.2;
    AccordionComponentProperties.SCROLL_STEP_PIXELS = 20;
  };
  return AccordionComponentProperties;
}();
exports.AccordionComponentProperties = __s0local0;
__s0local0.__initialize_static_members();
