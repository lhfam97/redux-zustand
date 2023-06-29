import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { player } from "./slices/player";

// Reducer sao as informacoes que vamos compartilhar entre todos os componentes da aplicacao
// Slice sao as fatias dos reducers, para criar um slice precisa de um nome, um initialState

export const store = configureStore({
  reducer: { player },
});

// Para deixar o redux mais tipado
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
