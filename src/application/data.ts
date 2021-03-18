import produce, { Draft } from "immer";

import { Action } from "./actions";
import { State } from "./types";

export const data = produce((draft: Draft<State>, action: Action) => {
    switch (action.type) {
        case "theme":
            draft.theme = action.theme;
            break;
    }
});
