import { Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { State } from "./types";

export const createThemeSelector = (state$: Observable<State>) =>
    state$.pipe(
        map((s) => s.theme),
        distinctUntilChanged()
    );
