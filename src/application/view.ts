import { SlideTheme } from "./types";

export const setElementTheme = (elem: HTMLElement, theme: SlideTheme) => {
    elem.className = `theme_${theme}`;
};
