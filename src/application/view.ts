import { SlideTheme } from "./types";

export const setElementTheme = (elem: HTMLElement, theme: SlideTheme) => {
    elem.className = `theme_${theme}`;
};

export const setActiveArrow = (theme: SlideTheme) => {
    if (theme === "dark") {
        document.querySelector(".slide__arrow_prev").classList.add("slide__arrow_active");
    } else {
        document.querySelector(".slide__arrow_next").classList.add("slide__arrow_active");
    }
};
