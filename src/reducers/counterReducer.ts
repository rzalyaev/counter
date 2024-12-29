export enum ActionTypes {
    CHANGE_COUNT = 'CHANGE-COUNT',
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    RESET = 'RESET',
    CHANGE_MIN_VALUE = 'CHANGE-MIN-VALUE',
    CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE',
    CREATE_ERROR = 'CREATE-ERROR',
    OPEN_SETTINGS = 'OPEN-SETTINGS',
    OPEN_COUNTER = 'OPEN-COUNTER',
}

export type State = {
    count: number
    minValue: number
    maxValue: number
    error: string
    settingsMode: boolean
}

export type Action =
    | {type: ActionTypes.CHANGE_COUNT, payload: number}
    | {type: ActionTypes.INCREMENT}
    | {type: ActionTypes.DECREMENT}
    | {type: ActionTypes.RESET}
    | {type: ActionTypes.CHANGE_MIN_VALUE, payload: number}
    | {type: ActionTypes.CHANGE_MAX_VALUE, payload: number}
    | {type: ActionTypes.CREATE_ERROR, payload: string}
    | {type: ActionTypes.OPEN_SETTINGS}
    | {type: ActionTypes.OPEN_COUNTER}

export const initialState: State = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    error: '',
    settingsMode: false,
}

export const counterReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_COUNT:
            return {...state, count: action.payload};
        case ActionTypes.INCREMENT:
            return {...state, count: state.count + 1};
        case ActionTypes.DECREMENT:
            return {...state, count: state.count - 1};
        case ActionTypes.RESET:
            return {...state, count: state.minValue};
        case ActionTypes.CHANGE_MIN_VALUE:
            return {...state, minValue: action.payload};
        case ActionTypes.CHANGE_MAX_VALUE:
            return {...state, maxValue: action.payload};
        case ActionTypes.CREATE_ERROR:
            return {...state, error: action.payload};
        case ActionTypes.OPEN_SETTINGS:
            return {...state, settingsMode: true};
        case ActionTypes.OPEN_COUNTER:
            return {...state, settingsMode: false};
        default: return state;
    }
}

export const changeCountAC = (count: number): Action => ({type: ActionTypes.CHANGE_COUNT, payload: count});
export const incrementAC = (): Action => ({type: ActionTypes.INCREMENT});
export const decrementAC = (): Action => ({type: ActionTypes.DECREMENT});
export const resetAC = (): Action => ({type: ActionTypes.RESET});
export const changeMinValueAC = (minValue: number): Action => ({type: ActionTypes.CHANGE_MIN_VALUE, payload: minValue});
export const changeMaxValueAC = (maxValue: number): Action => ({type: ActionTypes.CHANGE_MAX_VALUE, payload: maxValue});
export const createErrorAC = (error: string): Action => ({type: ActionTypes.CREATE_ERROR, payload: error});
export const openSettingsAC = (): Action => ({type: ActionTypes.OPEN_SETTINGS});
export const closeSettingsAC = (): Action => ({type: ActionTypes.OPEN_COUNTER});