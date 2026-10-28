import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
export class CastleNewsHubOverlay {
  static get isOpen() {
    return !!CastleNewsHubOverlay.wrapper;
  }
  static get isMaintenanceOpen() {
    return !!CastleNewsHubOverlay.wrapper && CastleNewsHubOverlay.maintenanceMode;
  }
  static open(argument0 = "https://communityhub.goodgamestudios.com/newshubempire/") {
    if (!CastleNewsHubOverlay.wrapper) {
      var __s9local0 = document.createElement("div");
      __s9local0.id = CastleNewsHubOverlay.OVERLAY_ID;
      __s9local0.style.position = "absolute";
      __s9local0.style.top = "0";
      __s9local0.style.left = "0";
      __s9local0.style.width = "100%";
      __s9local0.style.height = "100%";
      __s9local0.style.zIndex = "9999";
      __s9local0.style.background = "rgba(0, 0, 0, 0.5)";
      __s9local0.appendChild(CastleNewsHubOverlay.buildHeader());
      __s9local0.appendChild(CastleNewsHubOverlay.buildIframe(argument0));
      document.body.appendChild(__s9local0);
      CastleNewsHubOverlay.wrapper = __s9local0;
      function __s11local0(__s12param0) {
        if (__s12param0.key === "Escape") {
          CastleNewsHubOverlay.close();
        }
      }
      document.addEventListener("keydown", __s11local0);
      CastleNewsHubOverlay.keyHandler = __s11local0;
    }
  }
  static openMaintenance(argument0 = "https://communityhub.goodgamestudios.com/newshubempire/") {
    if (!CastleNewsHubOverlay.isMaintenanceOpen) {
      if (CastleNewsHubOverlay.wrapper) {
        CastleNewsHubOverlay.close();
      }
      var __s15local0 = document.createElement("div");
      __s15local0.id = CastleNewsHubOverlay.OVERLAY_ID;
      __s15local0.style.position = "absolute";
      __s15local0.style.top = "0";
      __s15local0.style.left = "0";
      __s15local0.style.width = "100%";
      __s15local0.style.height = "100%";
      __s15local0.style.zIndex = "9999";
      __s15local0.style.background = CastleNewsHubOverlay.MAINTENANCE_BG_COLOR;
      __s15local0.style.display = "flex";
      __s15local0.style.flexDirection = "column";
      __s15local0.appendChild(CastleNewsHubOverlay.buildMaintenanceBanner());
      __s15local0.appendChild(CastleNewsHubOverlay.buildMaintenanceIframe(argument0));
      document.body.appendChild(__s15local0);
      CastleNewsHubOverlay.wrapper = __s15local0;
      CastleNewsHubOverlay.maintenanceMode = true;
    }
  }
  static closeMaintenance() {
    if (CastleNewsHubOverlay.isMaintenanceOpen) {
      CastleNewsHubOverlay.close();
    }
  }
  static close() {
    if (CastleNewsHubOverlay.wrapper) {
      if (CastleNewsHubOverlay.wrapper.parentElement) {
        CastleNewsHubOverlay.wrapper.parentElement.removeChild(CastleNewsHubOverlay.wrapper);
      }
      CastleNewsHubOverlay.wrapper = null;
      CastleNewsHubOverlay.maintenanceMode = false;
      if (CastleNewsHubOverlay.keyHandler) {
        document.removeEventListener("keydown", CastleNewsHubOverlay.keyHandler);
        CastleNewsHubOverlay.keyHandler = null;
      }
    }
  }
  static buildHeader() {
    var __s27local0 = document.createElement("div");
    __s27local0.style.position = "absolute";
    __s27local0.style.top = "0";
    __s27local0.style.left = "0";
    __s27local0.style.right = "0";
    __s27local0.style.height = CastleNewsHubOverlay.HEADER_HEIGHT + "px";
    __s27local0.style.background = "#262A36";
    __s27local0.style.display = "flex";
    __s27local0.style.alignItems = "center";
    __s27local0.style.justifyContent = "flex-end";
    __s27local0.style.padding = "0 12px";
    __s27local0.style.boxSizing = "border-box";
    __s27local0.style.fontFamily = "Arial, sans-serif";
    __s27local0.style.color = "#ffffff";
    var __s27local1 = document.createElement("button");
    __s27local1.title = "Close";
    __s27local1.style.background = "transparent";
    __s27local1.style.border = "none";
    __s27local1.style.padding = "0";
    __s27local1.style.cursor = "pointer";
    __s27local1.style.width = CastleNewsHubOverlay.CLOSE_ICON_SIZE + "px";
    __s27local1.style.height = CastleNewsHubOverlay.CLOSE_ICON_SIZE + "px";
    __s27local1.style.display = "flex";
    __s27local1.style.alignItems = "center";
    __s27local1.style.justifyContent = "center";
    var __s27local2 = document.createElement("img");
    __s27local2.alt = "Close";
    __s27local2.style.width = "100%";
    __s27local2.style.height = "100%";
    __s27local2.style.display = "block";
    __s27local1.appendChild(__s27local2);
    function __s27local3(__s29param0) {
      __s27local2.src = BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s29param0) + ".webp";
    }
    __s27local3(CastleNewsHubOverlay.CLOSE_ICON_ASSET_NORMAL);
    __s27local1.onmouseenter = function () {
      __s27local3(CastleNewsHubOverlay.CLOSE_ICON_ASSET_HOVER);
    };
    __s27local1.onmouseleave = function () {
      __s27local3(CastleNewsHubOverlay.CLOSE_ICON_ASSET_NORMAL);
    };
    __s27local1.onmousedown = function () {
      __s27local3(CastleNewsHubOverlay.CLOSE_ICON_ASSET_DOWN);
    };
    __s27local1.onmouseup = function () {
      __s27local3(CastleNewsHubOverlay.CLOSE_ICON_ASSET_HOVER);
    };
    __s27local1.onclick = function () {
      CastleNewsHubOverlay.close();
    };
    __s27local0.appendChild(__s27local1);
    return __s27local0;
  }
  static buildMaintenanceBanner() {
    var __s41local0 = document.createElement("div");
    __s41local0.style.flex = "0 0 " + CastleNewsHubOverlay.MAINTENANCE_BANNER_HEIGHT + "px";
    __s41local0.style.height = CastleNewsHubOverlay.MAINTENANCE_BANNER_HEIGHT + "px";
    __s41local0.style.display = "flex";
    __s41local0.style.flexDirection = "row";
    __s41local0.style.alignItems = "center";
    __s41local0.style.justifyContent = "center";
    __s41local0.style.background = CastleNewsHubOverlay.MAINTENANCE_BG_COLOR;
    __s41local0.style.color = "#ffffff";
    __s41local0.style.textAlign = "left";
    __s41local0.style.padding = "0 24px";
    __s41local0.style.boxSizing = "border-box";
    __s41local0.style.overflow = "hidden";
    var __s41local1 = document.createElement("img");
    __s41local1.alt = "";
    __s41local1.src = BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleNewsHubOverlay.MAINTENANCE_ILLUSTRATION_ASSET) + ".png";
    __s41local1.style.width = CastleNewsHubOverlay.MAINTENANCE_ILLUSTRATION_WIDTH + "px";
    __s41local1.style.height = CastleNewsHubOverlay.MAINTENANCE_ILLUSTRATION_HEIGHT + "px";
    __s41local1.style.flex = "0 0 auto";
    __s41local1.style.display = "block";
    __s41local1.style.marginRight = "24px";
    __s41local1.onerror = function () {
      __s41local1.style.display = "none";
    };
    __s41local0.appendChild(__s41local1);
    var __s41local2 = "We are currently in maintenance mode";
    var __s41local3 = "Check out our latest news in the meantime!";
    if (BasicModel.languageData) {
      __s41local2 = BasicModel.languageData.getTextById(CastleNewsHubOverlay.MAINTENANCE_TITLE_TEXT_ID);
      __s41local3 = BasicModel.languageData.getTextById(CastleNewsHubOverlay.MAINTENANCE_COPY_TEXT_ID);
    }
    var __s41local4 = document.createElement("div");
    __s41local4.style.flex = "0 1 auto";
    __s41local4.style.maxWidth = "900px";
    __s41local4.style.minWidth = "0";
    var __s41local5 = document.createElement("div");
    __s41local5.textContent = __s41local2;
    __s41local5.style.fontFamily = "HeaderFont, Roboto, Arial, sans-serif";
    __s41local5.style.fontSize = "24px";
    __s41local5.style.fontWeight = "900";
    __s41local4.appendChild(__s41local5);
    var __s41local6 = document.createElement("div");
    __s41local6.textContent = __s41local3;
    __s41local6.style.fontFamily = "BodyFont, Roboto, Arial, sans-serif";
    __s41local6.style.fontSize = "14px";
    __s41local6.style.lineHeight = "1.5";
    __s41local6.style.marginTop = "8px";
    __s41local4.appendChild(__s41local6);
    __s41local0.appendChild(__s41local4);
    return __s41local0;
  }
  static buildMaintenanceIframe(argument0) {
    var __s46local0 = document.createElement("iframe");
    __s46local0.src = argument0;
    __s46local0.style.flex = "1 1 auto";
    __s46local0.style.minHeight = "0";
    __s46local0.style.width = "100%";
    __s46local0.style.border = "none";
    __s46local0.setAttribute("allowfullscreen", "true");
    return __s46local0;
  }
  static buildIframe(argument0) {
    var __s48local0 = document.createElement("iframe");
    __s48local0.src = argument0;
    __s48local0.style.position = "absolute";
    __s48local0.style.top = CastleNewsHubOverlay.HEADER_HEIGHT + "px";
    __s48local0.style.left = "0";
    __s48local0.style.right = "0";
    __s48local0.style.bottom = "0";
    __s48local0.style.width = "100%";
    __s48local0.style.height = "calc(100% - " + CastleNewsHubOverlay.HEADER_HEIGHT + "px)";
    __s48local0.style.border = "none";
    __s48local0.setAttribute("allowfullscreen", "true");
    return __s48local0;
  }
  static OVERLAY_ID = "newsHubOverlay";
  static HEADER_HEIGHT = 48;
  static CLOSE_ICON_ASSET_NORMAL = "NewsHub_CloseButton_Normal";
  static CLOSE_ICON_ASSET_HOVER = "NewsHub_CloseButton_Hover";
  static CLOSE_ICON_ASSET_DOWN = "NewsHub_CloseButton_Down";
  static CLOSE_ICON_SIZE = 42;
  static MAINTENANCE_BG_COLOR = "#373B47";
  static MAINTENANCE_TITLE_TEXT_ID = "maintenance_freeze_title";
  static MAINTENANCE_COPY_TEXT_ID = "maintenance_freeze_desc";
  static MAINTENANCE_ILLUSTRATION_ASSET = "NewsHub_Maintenance_Illustration";
  static MAINTENANCE_ILLUSTRATION_WIDTH = 150;
  static MAINTENANCE_ILLUSTRATION_HEIGHT = 77;
  static MAINTENANCE_BANNER_HEIGHT = 150;
  static wrapper = null;
  static keyHandler = null;
  static maintenanceMode = false;
}
