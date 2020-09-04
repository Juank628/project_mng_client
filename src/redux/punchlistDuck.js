//constants
const initialState = {
  punchlist: [],
  fetching: false,
  error: "",
};

const GET_PUNCHLIST_FETCHING = "GET_PUNCHLIST_FETCHING";
const GET_PUNCHLIST_SUCCESS = "GET_PUNCHLIST_SUCCESS";
const GET_PUNCHLIST_ERROR = "GET_PUNCHLIST_ERROR";

//reducer
export default function punchlistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PUNCHLIST_FETCHING:
      return { ...state, fetching: true };
    case GET_PUNCHLIST_SUCCESS:
      return { ...state, punchlist: action.payload, fetching: false };
    case GET_PUNCHLIST_ERROR:
      return { ...state, error: action.payload, fetching: false };
    default:
      return state;
  }
}

//action
export const getPunchlistAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PUNCHLIST_FETCHING });
    let rawData = await fetch(
      "http://localhost:5001/projectmngapi/us-central1/app/punchlist"
    );
    const data = await rawData.json();
    return dispatch({
      type: GET_PUNCHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: GET_PUNCHLIST_ERROR,
      payload: error.message,
    });
  }
};
