//constants
const initialState = {
  punchlist: [],
  fetching: false,
  error: "",
};

const PUNCHLIST_FETCHING = "PUNCHLIST_FETCHING";
const PUNCHLIST_ERROR = "PUNCHLIST_ERROR";
const GET_PUNCHLIST_SUCCESS = "GET_PUNCHLIST_SUCCESS";
const ADD_PUNCHLIST_SUCCESS = "ADD_PUNCHLIST_SUCCESS";

//reducer
export default function punchlistReducer(state = initialState, action) {
  switch (action.type) {
    case PUNCHLIST_FETCHING:
      return { ...state, fetching: true };
    case PUNCHLIST_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case GET_PUNCHLIST_SUCCESS:
      return { ...state, punchlist: action.payload, fetching: false };
    case ADD_PUNCHLIST_SUCCESS:
      return { ...state, punchlist: action.payload, fetching: false };
    default:
      return state;
  }
}

//actions
export const getPunchlistAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PUNCHLIST_FETCHING });
    let res = await fetch(
      "http://localhost:5001/projectmngapi/us-central1/app/punchlist"
    );
    const data = await res.json();
    return dispatch({
      type: GET_PUNCHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: PUNCHLIST_ERROR,
      payload: error.message,
    });
  }
};

export const addToPunchlistAction = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: PUNCHLIST_FETCHING });
    data.date = {
      _seconds: new Date().getTime() / 1000,
      _nanoseconds: 0,
    };
    let res = await fetch(
      "http://localhost:5001/projectmngapi/us-central1/app/punchlist/add",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const newDoc = await res.json();
    data.id = newDoc.id
    const { punchlist } = getState().punchlist;
    punchlist.push(data);
    return dispatch({
      type: ADD_PUNCHLIST_SUCCESS,
      payload: punchlist,
    });
  } catch (error) {
    return dispatch({
      type: PUNCHLIST_ERROR,
      payload: error.message,
    });
  }
};
