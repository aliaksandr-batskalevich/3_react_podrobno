import {changeCollapsedAC, reducer, StateType} from "./Accordion";

test('isDone should be opposite', () => {
    let state: StateType = {
        isCollapsed: false
    }

    let newState = reducer(state, changeCollapsedAC());

    expect(newState.isCollapsed).toBe(!state.isCollapsed);
})