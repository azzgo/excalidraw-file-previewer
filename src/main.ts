import "./index.css";
import '@excalidraw/excalidraw/index.css';

import {
  EXCALIDRAW_TYPE,
  ExcalidrawFile,
  SUPPORT_EXCALIDRAW_VERSION,
} from "./type";

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
    json = JSON.parse(document.body.innerText);
  }
} catch (e) {
  console.error("[Excalidraw] parse JSON failed:", e);
}
if (isValidExcalidrawFile(json)) {
  if (window.ExcalidrawLib?.renderExcalidrawEditor) {
    window.ExcalidrawLib.renderExcalidrawEditor(json);
  } else {
    console.error("[Excalidraw] Library not loaded. Please include excalidraw-lib.umd.js");
  }
} else {
  console.warn("[Excalidraw] Illegal Excalidraw file structure");
}
