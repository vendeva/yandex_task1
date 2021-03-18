import { SlideTheme } from "./types";

export const actionSetTheme = (theme: SlideTheme) => ({ type: "theme", theme } as const);

export type Action = ReturnType<typeof actionSetTheme>;
