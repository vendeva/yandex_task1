import { Subject, BehaviorSubject, Observable } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";
import { Action } from "./actions";
import { data } from "./data";
import { State } from "./types";

const DEFAULT_STATE: State = {
    theme: "dark",
};

export function createState(): [(a: Action) => void, Observable<State>] {
    const actions$ = new Subject<Action>();

    const state$ = new BehaviorSubject(DEFAULT_STATE);

    actions$
        .pipe(
            withLatestFrom(state$),
            map(([a, s]) => data(s, a))
        )
        .subscribe(state$);

    const dispatch = (action: Action) => actions$.next(action);

    return [dispatch, state$];
}
