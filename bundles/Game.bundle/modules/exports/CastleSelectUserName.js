Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_C2SSetCredentials = require("gge-module:export_C2SSetCredentials");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSelectUserName() {
    var __s3local0 = this;
    __s3local0.errorMessagePosition = new __s0local0(219.55, -23.8);
    __s3local0.nameSelectionPosition = new __s0local0(367.5, 49.5);
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSelectUserName.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSelectUserName, __s1param0);
  CastleSelectUserName.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("facebook_playerName_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("facebook_playerName_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playername, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("player"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_nameSelection.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("error_name_propositions"));
    this._txtInput_username = this.textFieldManager.registerTextField(this.dialogDisp.input_playername, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this._txtInput_username.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_username.multiline = false;
    this._txtInput_username.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
  };
  CastleSelectUserName.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.hideAllErrorMessages();
    this._txtInput_username.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.userName;
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_close, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_cancel, false);
    }
  };
  CastleSelectUserName.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      switch (__s10param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.usernameIsValid()) {
            this.sendUsernameToServer();
          }
          break;
        case this.dialogDisp.mc_nameSelection.i0:
        case this.dialogDisp.mc_nameSelection.i1:
        case this.dialogDisp.mc_nameSelection.i2:
        case this.dialogDisp.mc_nameSelection.i3:
          var __s10local0 = __s10param0.target;
          this._txtInput_username.clearText();
          this._txtInput_username.textContentVO = new __dep_exact_92d05af59ee2ff30_1.TextVO(this.textFieldManager.getTextField(__s10local0.txt_Name).text);
          this.hideAllErrorMessages();
      }
    }
  };
  CastleSelectUserName.prototype.sendUsernameToServer = function () {
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetCredentials.C2SSetCredentials(__dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxText(this._txtInput_username.text), "", ""));
  };
  CastleSelectUserName.prototype.onSDCArrived = function (__s17param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    var __s17local0 = __dep_exact_f855840627e6e145.int(__s17param0.params[0]);
    var __s17local1 = __s17param0.params[1];
    switch (__s17local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.userData.userName = this._txtInput_username.text;
        this.hide();
        this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME));
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        this.showNameError("error_name_invalid");
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        this.showNameError("error_name_exists");
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        this.showNameError("error_name_is_number");
        if (__s17local1 && __s17local1.NS) {
          this.initNameSelection(__s17local1.NS);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        this.showNameError("error_badword");
        if (__s17local1 && __s17local1.NS) {
          this.initNameSelection(__s17local1.NS);
        }
        break;
      default:
        this.showNameError("error_name_invalid");
    }
  };
  CastleSelectUserName.prototype.hideAllErrorMessages = function () {
    this.dialogDisp.mc_nameSelection.visible = false;
    this.dialogDisp.mc_errorName.visible = false;
  };
  CastleSelectUserName.prototype.usernameIsValid = function () {
    if (this._txtInput_username.text.length == 0) {
      this.showNameError("error_name_empty");
      return false;
    }
    if (this._txtInput_username.text.length < __dep_exact_9e901e8e2483a22f.BasicModel.basicLocalization.getUsernameMinLength) {
      this.showNameError("error_name_too_short");
      return false;
    }
    if (!__dep_exact_9e901e8e2483a22f_1.TextValide.isUsernameValide(this._txtInput_username.text)) {
      this.showNameError("error_name_invalid");
      var __s24local0 = __dep_exact_9e901e8e2483a22f_1.TextValide.getValidUsername(this._txtInput_username.text);
      if (__s24local0 != "" && __dep_exact_9e901e8e2483a22f_1.TextValide.isUsernameValide(__s24local0)) {
        this.initNameSelection([__s24local0]);
      }
      return false;
    }
    return true;
  };
  CastleSelectUserName.prototype.showNameError = function (__s30param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_errorName.txt_errorText, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s30param0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_errorName.x = this.errorMessagePosition.x;
    this.dialogDisp.mc_errorName.y = this.errorMessagePosition.y;
    this.dialogDisp.mc_errorName.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_errorName, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleSelectUserName.prototype.initNameSelection = function (__s32param0) {
    var __s32local0;
    for (var __s32local1 = 0; __s32local1 < 4; __s32local1++) {
      var __s32local2 = this.dialogDisp.mc_nameSelection["i" + __s32local1];
      __s32local2.actLikeButton = true;
      __s32local2.mouseChildren = false;
      __s32local2.visible = true;
      __s32local0 = "";
      if (__s32param0 && __s32local1 < __s32param0.length) {
        __s32local0 = __s32param0[__s32local1];
      }
      if (__s32local0 != "") {
        this.textFieldManager.registerTextField(__s32local2.txt_Name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s32local0));
        __s32local2.suggestedName = __s32local0;
      } else {
        __s32local2.visible = false;
      }
    }
    this.dialogDisp.mc_nameSelection.x = this.nameSelectionPosition.x;
    this.dialogDisp.mc_nameSelection.y = this.nameSelectionPosition.y;
    this.dialogDisp.mc_nameSelection.visible = __s32param0 != null;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_nameSelection, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleSelectUserName.__initialize_static_members = function () {
    CastleSelectUserName.NAME = "CastleSelectUserNameExternal";
  };
  return CastleSelectUserName;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSelectUserName = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
