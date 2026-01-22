import React from "react";
import ReactDOM from "react-dom/client";
import { Excalidraw, restoreAppState } from "@excalidraw/excalidraw";

interface ExcalidrawFile {
  elements: any[];
  appState: any;
  files: any;
}

function renderExcalidrawEditor(json: ExcalidrawFile) {
  ReactDOM.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.innerHTML = "";
      app.style.height = "100vh";
      app.style.width = "100vw";
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
}

// Export to window for UMD
if (typeof window !== "undefined") {
  (window as any).ExcalidrawLib = {
    renderExcalidrawEditor,
  };
}

export { renderExcalidrawEditor };
