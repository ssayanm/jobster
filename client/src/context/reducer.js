import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "please provide all values!",
      };
    }
    case CLEAR_ALERT: {
      return { ...state, showAlert: false, alertType: "", alertText: "" };
    }

    case SETUP_USER_BEGIN: {
      return { ...state, isLoading: true };
    }

    case SETUP_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "User added successfully! redirecting...",
      };
    }
    case SETUP_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    }

    case TOGGLE_SIDEBAR: {
      return { ...state };
    }
    case LOGOUT_USER: {
      return { ...state };
    }

    case UPDATE_USER_BEGIN: {
      return { ...state };
    }

    case UPDATE_USER_SUCCESS: {
      return { ...state };
    }
    case UPDATE_USER_ERROR: {
      return { ...state };
    }

    case HANDLE_CHANGE: {
      return { ...state };
    }
    case CLEAR_VALUES: {
      return { ...state };
    }

    case CREATE_JOB_BEGIN: {
      return { ...state };
    }

    case CREATE_JOB_SUCCESS: {
      return { ...state };
    }
    case CREATE_JOB_ERROR: {
      return { ...state };
    }

    case GET_JOBS_BEGIN: {
      return { ...state };
    }
    case GET_JOBS_SUCCESS: {
      return { ...state };
    }

    case SET_EDIT_JOB: {
      return { ...state };
    }

    case DELETE_JOB_BEGIN: {
      return { ...state };
    }
    case EDIT_JOB_BEGIN: {
      return { ...state };
    }
    case EDIT_JOB_SUCCESS: {
      return { ...state };
    }

    case EDIT_JOB_ERROR: {
      return { ...state };
    }
    case SHOW_STATS_BEGIN: {
      return { ...state };
    }

    case SHOW_STATS_SUCCESS: {
      return { ...state };
    }

    case CLEAR_FILTERS: {
      return { ...state };
    }
    case CHANGE_PAGE: {
      return { ...state };
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
