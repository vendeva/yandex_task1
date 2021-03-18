export interface Slide {
    alias: string;
    data: object;
}

export interface Theme {
    [key: string]: SlideTheme;
}

export type SlideTheme = "light" | "dark";

export interface State {
    theme: SlideTheme;
}
