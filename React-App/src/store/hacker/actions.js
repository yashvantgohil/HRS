import http from "../../common/services/interceptorService";

export const SET_ALL_HACKERS = "FETCH_ALL_HACKERS";
export const SET_CURRENT_HACKER = "FETCH_CURRENT_HACKER";

export const setAllHackers = (hackers) => ({
  type: SET_ALL_HACKERS,
  payload: { hackers },
});

export const setSelectedHacker = (hacker) => ({
  type: SET_CURRENT_HACKER,
  payload: { hacker },
});

export const fetchAllHacker = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await http.get("/api/hackers/", config);
    dispatch(setAllHackers(res.data));
  } catch (error) {}
};

export const fetchCurrentHacker = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/api/hackers/${id}`);
    dispatch(setSelectedHacker(res.data));
  } catch (error) {}
};
