import { ACastleHandleSpaceDialog } from "./ACastleHandleSpaceDialog";
import { ButtonHelper } from "./ButtonHelper";
import { C2SKingdomPayInfoVO } from "./C2SKingdomPayInfoVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEilandEvent } from "./CastleEilandEvent";
import { CastleEilandRankingDialog } from "./CastleEilandRankingDialog";
import { CastleEilandRankingDialogProperties } from "./CastleEilandRankingDialogProperties";
import { CastleHandleKingdomDialogSupport } from "./CastleHandleKingdomDialogSupport";
import { CastleKingdomEvent } from "./CastleKingdomEvent";
import { CastleModel } from "./CastleModel";
import { LocalizedNumberVO } from "../../../ggs.dll/reconstructed/exports/LocalizedNumberVO";
import { LocalizedTextVO } from "../../../ggs.dll/reconstructed/exports/LocalizedTextVO";
import { TextVO } from "../../../ggs.dll/reconstructed/exports/TextVO";
export class CastleHandleKingdomDialog extends ACastleHandleSpaceDialog {
  initLoaded(argument0 = null) {
    super.initLoaded(argument0);
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new CastleHandleKingdomDialogSupport(this.dialogDisp.sublayer_support));
  }
  getSublayerProperties(argument0) {
    if (argument0 == ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.kingdomVO;
    } else {
      return super.getSublayerProperties(argument0);
    }
  }
  showLoaded(argument0 = null) {
    super.showLoaded(argument0);
    if (this.dialogProperties_0.isEiland()) {
      this.controller.addEventListener(CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    }
    CastleModel.kingdomData.addEventListener(CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    CastleModel.smartfoxClient.sendCommandVO(new C2SKingdomPayInfoVO());
  }
  hideLoaded(argument0 = null) {
    super.hideLoaded(argument0);
    this.controller.removeEventListener(CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    CastleModel.kingdomData.removeEventListener(CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  }
  onBackgroundSkinLoaded(argument0) {
    super.onBackgroundSkinLoaded(argument0);
    if (this.dialogProperties_0.isEiland()) {
      this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_description, new LocalizedTextVO("dialog_kingdom_start_eilandDescription"));
      this.updateAlliancePoints(this.backgroundDisp.mc_alliancePoints);
      this.backgroundDisp.btn_ranking.toolTipText = "eiland_ranking_tooltip";
      ButtonHelper.initBasicButton(this.backgroundDisp.btn_ranking);
    }
  }
  updateAlliancePoints(argument0) {
    if (CastleModel.userData.isInAlliance) {
      argument0.toolTipText = "aquamarin_points_alliance_tooltip";
      this.textFieldManager.registerTextField(argument0.txt_value, new LocalizedNumberVO(CastleModel.allianceData.myAllianceVO.aquaPoints));
      argument0.mouseChildren = false;
    } else {
      argument0.toolTipText = "aquamarin_points_noAlliance_tooltip";
      this.textFieldManager.registerTextField(argument0.txt_value, new TextVO("-"));
      argument0.mouseChildren = false;
    }
    argument0.visible = this.dialogProperties_0.isUnlocked();
  }
  onClick(event) {
    super.onClick(event);
    if (this.backgroundDisp) {
      switch (event.target) {
        case this.backgroundDisp.btn_ranking:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandRankingDialog, new CastleEilandRankingDialogProperties());
      }
    }
  }
  onEilandReset(argument0) {
    this.hide();
  }
  onKingdomDataUpdated(argument0) {
    this.showCurrentSublayer();
  }
  get dialogProperties_0() {
    return this.properties;
  }
  static NAME = "CastleKingdom";
}
