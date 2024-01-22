import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actionTypes";

const apiUrl = process.env.REACT_APP_API_URL;
const url = `${apiUrl}/spacex/capsules`;

export const FetchDataGrid = (query) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    // Build the query parameters string based on the provided parameters
    const queryParams = new URLSearchParams();

    if (query.status) {
      queryParams.append("status", query.status);
    }

    if (query.type) {
      queryParams.append("type", query.type);
    }

    if (query.original_launch) {
      queryParams.append("original_launch", query.original_launch);
    }

    if (query.page) {
      queryParams.append("page", query.page);
    }
    // Append the query parameters to the URL
    const apiUrl = `${url}?${queryParams.toString()}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    // console.log(data.data);
    if (res.ok) {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data.data });
    } else {
      dispatch({ type: FETCH_DATA_FAILURE });
    }
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE });
  }
};
