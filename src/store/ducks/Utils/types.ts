import { ThemeOptions } from "@mui/material";

/**
 * Action types
 */
export enum UtilsTypes {
  SET_LOADING = "@loading/SET_LOADING",
  SET_TOAST = "@toast/SET_TOAST",
  SET_THEME = "@theme/SET_THEME",
  TESTE = "@utils/TESTE",
  DEVICE_TYPE = "@device/DEVICE_TYPE",
}

/**
 * valores isolados do objeto de parametros
 */
export type ToasMessageTypes = {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number;
  autoClose?: number;
};

export type Themetypes = {
  mode: "light" | "dark";
  object: ThemeOptions;
};

export type DeviceTypes = "desktop" | "mobile";

/**
 * valores do state completo desse redux
 */
export type UtilsState = {
  readonly loading: boolean;
  readonly theme: Themetypes;
  readonly toast: ToasMessageTypes;
  readonly device: DeviceTypes;
};
