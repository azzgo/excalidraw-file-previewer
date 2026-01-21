import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Excalidraw, restoreAppState } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const EXCALIDRAW_TYPE = "excalidraw";
const SUPPORT_EXCALIDRAW_VERSION = 2;

interface ExcalidrawFile {
  type: string;
  version: number;
  elements: any[];
  appState: any;
  files: any;
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
  ReactDOM.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.innerHTML = "";
      app.style.height = '100vh';
      app.style.width = '100vw';
      document.body.append(app);
      return app;
    })(),
  ).render(
    <React.StrictMode>
      <Excalidraw
        initialData={{
          elements: json.elements,
          appState: restoreAppState(
            {
              ...json.appState,
              collaborators: undefined,
              viewModeEnabled: undefined,
            },
            null,
          ),
          files: json.files,
        }}
      />
    </React.StrictMode>,
  );
} else {
  console.warn("[Excalidraw] Illegal Excalidraw file structure");
}
