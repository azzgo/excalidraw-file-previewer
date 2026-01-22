import "./index.css";
import {
  EXCALIDRAW_TYPE,
  ExcalidrawFile,
  SUPPORT_EXCALIDRAW_VERSION,
} from "./type";
import renderExcalidrawEditor from "./lib";

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
  renderExcalidrawEditor(json);
} else {
  console.warn("[Excalidraw] Illegal Excalidraw file structure");
}
