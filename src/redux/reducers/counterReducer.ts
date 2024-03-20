enum CounterReducerActionTypes {
  CHANGE_COUNT = 'reducers/CounterReducerActionTypes/CHANGE-COUNT',
  INCREMENT = 'reducers/CounterReducerActionTypes/INCREMENT',
  RESET = 'reducers/CounterReducerActionTypes/RESET',
  TOGGLE_SETTINGS_MODE = 'reducers/CounterReducerActionTypes/TOGGLE-SETTINGS-MODE',
  CHANGE_START_VALUE = 'reducers/CounterReducerActionTypes/CHANGE-START-VALUE',
  CHANGE_MAX_VALUE = 'reducers/CounterReducerActionTypes/CHANGE-MAX-VALUE',
  TOGGLE_START_VALUE_ERROR = 'reducers/CounterReducerActionTypes/TOGGLE-START-VALUE-ERROR',
  TOGGLE_MAX_VALUE_ERROR = 'reducers/CounterReducerActionTypes/TOGGLE-MAX-VALUE-ERROR'
}

type IncrementAT = {
  type: CounterReducerActionTypes.INCREMENT
}
type ResetAT = {
  type: CounterReducerActionTypes.RESET
}
type ToggleSettingsModeAT = {
  type: CounterReducerActionTypes.TOGGLE_SETTINGS_MODE
}
type ChangeCountAT = {
  type: CounterReducerActionTypes.CHANGE_COUNT
  newCountValue: number
}
type ChangeStartValueAT = {
  type: CounterReducerActionTypes.CHANGE_START_VALUE
  newStartValue: number
}
type ChangeMaxValueAT = {
  type: CounterReducerActionTypes.CHANGE_MAX_VALUE
  newMaxValue: number
}
type ToggleStartValueErrorAT = {
  type: CounterReducerActionTypes.TOGGLE_START_VALUE_ERROR
  newValue: boolean
}
type ToggleMaxValueErrorAT = {
  type: CounterReducerActionTypes.TOGGLE_MAX_VALUE_ERROR
  newValue: boolean
}
type ActionTypes = IncrementAT | ResetAT | ToggleSettingsModeAT | ChangeCountAT | ChangeStartValueAT | ChangeMaxValueAT
    | ToggleStartValueErrorAT | ToggleMaxValueErrorAT;

export type StateType = {
  count: number
  settingsMode: boolean
  startValue: number
  maxValue: number
  startValueError: boolean
  maxValueError: boolean
}
export const initialState: StateType = {
  count: 0,
  settingsMode: false,
  startValue: 0,
  maxValue: 5,
  startValueError: false,
  maxValueError: false
}

export const counterReducer = (state: StateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case CounterReducerActionTypes.INCREMENT:
      return {...state, count: state.count + 1};
    case CounterReducerActionTypes.RESET:
      return {...state, count: state.startValue};
    case CounterReducerActionTypes.TOGGLE_SETTINGS_MODE:
      return {...state, settingsMode: !state.settingsMode};
    case CounterReducerActionTypes.CHANGE_COUNT:
      return {...state, count: action.newCountValue};
    case CounterReducerActionTypes.CHANGE_START_VALUE:
      return {...state, startValue: action.newStartValue};
    case CounterReducerActionTypes.CHANGE_MAX_VALUE:
      return {...state, maxValue: action.newMaxValue};
    case CounterReducerActionTypes.TOGGLE_START_VALUE_ERROR:
      return {...state, startValueError: action.newValue};
    case CounterReducerActionTypes.TOGGLE_MAX_VALUE_ERROR:
      return {...state, maxValueError: action.newValue};
    default: return state;
  }
}

export const incrementAC = () => {
  return {type: CounterReducerActionTypes.INCREMENT} as const
};
export const resetAC = () => {
  return {type: CounterReducerActionTypes.RESET} as const
};
export const toggleSettingsModeAC = () => {
  return {type: CounterReducerActionTypes.TOGGLE_SETTINGS_MODE} as const
};
export const changeCountAC = (newCountValue: number) => {
  return {type: CounterReducerActionTypes.CHANGE_COUNT, newCountValue} as const
};
export const changeStartValueAC = (newStartValue: number) => {
  return {type: CounterReducerActionTypes.CHANGE_START_VALUE, newStartValue} as const
};
export const changeMaxValueAC = (newMaxValue: number) => {
  return {type: CounterReducerActionTypes.CHANGE_MAX_VALUE, newMaxValue} as const
};
export const toggleStartValueErrorAC = (newValue: boolean) => {
  return {type: CounterReducerActionTypes.TOGGLE_START_VALUE_ERROR, newValue} as const
};
export const toggleMaxValueErrorAC = (newValue: boolean) => {
  return {type: CounterReducerActionTypes.TOGGLE_MAX_VALUE_ERROR, newValue} as const
};