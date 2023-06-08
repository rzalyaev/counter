const UPDATE_COUNT = 'counter/UPDATE-COUNT';
const UPDATE_MIN_VALUE = 'counter/UPDATE-MIN-VALUE';
const UPDATE_MAX_VALUE = 'counter/UPDATE-MAX-VALUE';
const UPDATE_SHOW_SETTINGS = 'counter/UPDATE-SHOW-SETTINGS';
const UPDATE_ERROR_MESSAGE = 'counter/UPDATE-ERROR-MESSAGE';

export type CounterStateType = {
    count: number
    minValue: number
    maxValue: number
    showSettings: boolean
    error: string
}

export const counterState: CounterStateType = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    showSettings: false,
    error: ''
}

export const counterReducer = (state: CounterStateType = counterState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_COUNT:
            return {...state, count: action.count};
        case UPDATE_MIN_VALUE:
            return {...state, minValue: action.minValue};
        case UPDATE_MAX_VALUE:
            return {...state, maxValue: action.maxValue};
        case UPDATE_SHOW_SETTINGS:
            return {...state, showSettings: action.showSettings};
        case UPDATE_ERROR_MESSAGE:
            return {...state, error: action.error};
        default:
            return state;
    }
}

type ActionTypes =
    ReturnType<typeof updateCountAC>
    | ReturnType<typeof updateMinValueAC>
    | ReturnType<typeof updateMaxValueAC>
    | ReturnType<typeof updateShowSettingsAC>
    | ReturnType<typeof updateErrorMessageAC>

export const updateCountAC = (count: number) => ({type: UPDATE_COUNT, count} as const);
export const updateMinValueAC = (minValue: number) => ({type: UPDATE_MIN_VALUE, minValue} as const);
export const updateMaxValueAC = (maxValue: number) => ({type: UPDATE_MAX_VALUE, maxValue} as const);
export const updateShowSettingsAC = (showSettings: boolean) => ({type: UPDATE_SHOW_SETTINGS, showSettings} as const);
export const updateErrorMessageAC = (error: string) => ({type: UPDATE_ERROR_MESSAGE, error} as const);