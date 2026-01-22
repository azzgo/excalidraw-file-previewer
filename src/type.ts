export const EXCALIDRAW_TYPE = "excalidraw";
export const SUPPORT_EXCALIDRAW_VERSION = 2;

export interface ExcalidrawFile {
  type: string;
  version: number;
  elements: any[];
  appState: any;
  files: any;
}
