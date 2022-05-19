import { Provider } from "react-redux";
import store from "./redux/store";
import Routers from "./Router/Routers";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
