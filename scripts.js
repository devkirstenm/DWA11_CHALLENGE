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
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state; // if action type isn't recognized, it will return the current state
  }
};

/** STORE
 * def: object that holds the application state
 */

// Store
const createStore = (reducer) => {
  let state = reducer(undefined, {}); // initializes state using reducer with empty action
  const subscribers = []; // array to hold subscribers (callback functions)

  const getState = () => state; // function to get current state

  const dispatch = (action) => {
    state = reducer(state, action); // updates state by calling reducer with current state and the action
    subscribers.forEach((subscriber) => subscriber()); // notifies all subscribers that the state has changed
  };
};

const subscribe = (subscriber) => {
  subscribers.push(subscriber); // adds subscriber to array

  // return an unsubscribe function that removes the subscriber from the array when called
  return () => {
    const index = subscribers.indexOf(subscriber);
    if (index !== -1) {
      subscribers.splice(index, 1);
    }
  };
};

return { getState, dispatch, subscribe }; // returns object with store methods

// Usage
const store = createStore(reducer); // creates store by passing the reducer)

// Scenario 1: loads current state
console.log("Scenario 1:");
console.log("Initial state:", store.getState()); // Get and log the initial state

// Scenario 2:
console.log("Scenario 2:");
store.dispatch(addCount()); // Dispatch an "ADD" action
store.dispatch(addCount()); // Dispatch another "ADD" action
console.log("Current state:", store.getState()); // Get and log the current state

// Scenario 3
console.log("Scenario 3:");
store.dispatch(subtractCount()); // Dispatch a "SUBTRACT" action
console.log("Current state:", store.getState()); // Get and log the current state

// Scenario 4
console.log("Scenario 4:");
store.dispatch(resetCount()); // Dispatch a "RESET" action
console.log("Current state:", store.getState()); // Get and log the current state
