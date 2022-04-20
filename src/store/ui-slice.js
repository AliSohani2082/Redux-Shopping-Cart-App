import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: {
      message: 'hey you!',
      type: 'warning',
      open: true
    }
  },
  reducers: {
    showNotification(state, action){
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = uiSlice.actions


export default uiSlice;