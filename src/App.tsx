import { Provider as ReduxProvider } from "react-redux";
import { Player } from "./pages/Player";
import { store } from "./store/index";
import "./styles/global.css";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}
