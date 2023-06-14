/** ACTIONS
 * def: represent an intention to change the state
 * must have "type" property that describes action being performed
 * Redux naming convention for actions: written in capital letters to indicate they are constants and not variables
 * */

// Action Types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

// Action Creators for adding, subtracting, and resetting the count
const addCount = () => ({ type: ADD });
const subtractCount = () => ({ type: SUBTRACT });
const resetCount = () => ({ type: RESET });

/** REDUCER
 * use: takes current state, see's what needs to be changed (actions) and returns a new state
 */

// Reducer
const currentState = { count: 0 }; // current state of the application: the count is set to 0

// Reducer function
const reducer = (state = currentState, action) => {
  // reducers look at the type of action that happened to decide how to update the state
  // in Redux its common practice to use the spread operator to create a copy of the previous state and apply the changes
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state; // if action type isn't recognized, it will return the current state
  }
};

// selecting DOM elements
const counterBadge = document.getElementById("counter");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
const resetButton = document.getElementById("resetButton");

// updates counter badge with current count
const updateCounterBadge = (count) => {
  counterBadge.innerText = count;
};

/** STORE
 * def: object that holds the application state
 */

// Store
// creates a new Redux store (createStore function) & updates it using (counterReducer)
const store = createStore(reducer);

// subscribe to state changes and update the counter badge
store.subscribe(() => {
  const state = store.getState();
  updateCounterBadge(state.count);
});

// Dispatch actions based on button clicks
minusButton.addEventListener("click", () => {
  store.dispatch(subtractCount());
});

plusButton.addEventListener("click", () => {
  store.dispatch(addCount());
});

resetButton.addEventListener("click", () => {
  store.dispatch(resetCount());
});
