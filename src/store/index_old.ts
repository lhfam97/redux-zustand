import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Reducer sao as informacoes que vamos compartilhar entre todos os componentes da aplicacao
// Slice sao as fatias dos reducers, para criar um slice precisa de um nome, um initialState

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

// Para deixar o redux mais tipado
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
