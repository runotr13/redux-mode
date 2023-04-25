import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../actions/auth";
import modeReducer from "../actions/mode";

export const store = configureStore({
  reducer: {
    authReducer,
    mode: modeReducer, //?  useSelector ile cekerken mode isminde çekecegiz.
   // modeReducer , //? boyle yapip useSelector ile cekerken modeReducer isminde çekecegiz.
  },
});
