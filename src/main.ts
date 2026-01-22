import { GM_addStyle, GM_getResourceText } from "$";
import "./index.css";

import {
  EXCALIDRAW_TYPE,
  ExcalidrawFile,
  SUPPORT_EXCALIDRAW_VERSION,
} from "./type";

const myCss = GM_getResourceText("REMOTE_STYLE");
GM_addStyle(myCss);

declare global {
  interface Window {
    ExcalidrawLib: {
      renderExcalidrawEditor: (json: ExcalidrawFile) => void;
    };
  }
}

const isValidExcalidrawFile = (json: any): json is ExcalidrawFile => {
  return (
    typeof json === "object" &&
    json !== null &&
    json.type === EXCALIDRAW_TYPE &&
    typeof json.version === "number" &&
    json.version === SUPPORT_EXCALIDRAW_VERSION
  );
};

let json: unknown;
try {
  if (document.body.innerText.trim().startsWith("{")) {
    let last = document.body.innerText.lastIndexOf("}");
    json = JSON.parse(document.body.innerText.slice(0, last + 1));
  }
} catch (e) {
  console.error("[Excalidraw] parse JSON failed:", e);
}
if (isValidExcalidrawFile(json)) {
  if (window.ExcalidrawLib?.renderExcalidrawEditor) {
    window.ExcalidrawLib.renderExcalidrawEditor(json);
  } else {
    console.error(
      "[Excalidraw] Library not loaded. Please include excalidraw-lib.umd.js",
    );
  }
} else {
  console.warn("[Excalidraw] Illegal Excalidraw file structure");
}
