import { createSlice } from "@reduxjs/toolkit";
const modeReducer = createSlice({
  name: "mode",
  initialState: { mode: false },
  reducers: {
    darkMode: (state, action) => {
      state.mode = action.payload; // gelen degegeri action.payload ile erisiyoruz
      // state ilede yukaridaki initialStatelere ulasiyoruz.
    },
  },
});
export const { darkMode } = modeReducer.actions;
export default modeReducer.reducer;

// dispatch yaparken dispatch(darkMode(state)) seklinde yapacagiz.
