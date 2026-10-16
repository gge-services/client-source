Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleKingdomTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleKingdomTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomTeaserDialog, __s1param0);
  CastleKingdomTeaserDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.teaserProperties.titleTextID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomteaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomteaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomteaser_copy4_v2", [this.teaserProperties.minLevel]));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.background_container);
    this.dialogDisp.background_container.addChild(this.teaserProperties.backgroundImage);
  };
  CastleKingdomTeaserDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleKingdomTeaserDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleKingdomTeaserDialog.prototype, "teaserProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomTeaserDialog.__initialize_static_members = function () {
    CastleKingdomTeaserDialog.NAME = "CastleKingdomTeaser";
  };
  return CastleKingdomTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleKingdomTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
