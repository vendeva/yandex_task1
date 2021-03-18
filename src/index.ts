import { actionSetTheme } from "./application/actions";
import { createState } from "./application/state";
import { createThemeSelector } from "./application/selectors";
import { setElementTheme, setActiveArrow } from "./application/view";
import { Theme } from "./application/types";

import dataJson from "./data/data.json";

interface ExtendedWindow extends Window {
    renderTemplate: (alias: string, data: object) => string;
}

declare var window: ExtendedWindow;

const [dispatch, state$] = createState();

const searchParams = new URLSearchParams(window.location.search);
const currentTheme = searchParams.get("theme");
const currentSlide = searchParams.get("slide") || 1;
const { alias, data } = dataJson[+currentSlide - 1];

document.body.innerHTML = window.renderTemplate(alias, data);

const setTheme: Theme = {
    dark: "dark",
    light: "light",
};

if (currentTheme) {
    document.addEventListener("DOMContentLoaded", () => {
        dispatch(actionSetTheme(setTheme[`${currentTheme}`]));
        createThemeSelector(state$).subscribe((theme) => {
            setElementTheme(document.body, theme);
            if (alias === "vote") {
                setActiveArrow(theme);
            }
        });
    });
}
if (alias === "activity" || alias === "vote") {
    window.addEventListener(
        "orientationchange",
        function () {
            setTimeout(() => {
                document.body.innerHTML = window.renderTemplate(alias, data);
                if (alias === "vote") {
                    setActiveArrow(setTheme[`${currentTheme}`]);
                }
            }, 20);
        },
        false
    );
}
