import { SlideTheme } from "./types";

export const setElementTheme = (elem: HTMLElement, theme: SlideTheme) => {
    elem.className = `theme_${theme}`;
};

export const setActiveArrow = (elem: HTMLElement, theme: SlideTheme) => {
    if (theme === "dark") {
        console.log(elem.querySelector(".slide__arrow_prev"));
        elem.querySelector(".slide__arrow_prev").classList.add("slide__arrow_active");
    } else {
        elem.querySelector(".slide__arrow_next").classList.add("slide__arrow_active");
    }
};
