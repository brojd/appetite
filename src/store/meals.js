// Actions
const ADD_MEAL = 'ADD_MEAL';

const initialState = []

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.newMeal]
    default:
      return state;
  }
}

// Action Creators
export function addMeal(dispatch, newMeal) {
  dispatch({ type: ADD_MEAL, newMeal });
}
