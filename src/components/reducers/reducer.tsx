type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // state.collapsed = !state.collapsed    // это нарушение иммутабельности, потому перерисовки не будет
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error("Bad action type")
    }
    /*if (action.type === "TOGGLE-COLLAPSED") {
        return !state*/
    return state
}