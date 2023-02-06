import PhoneContainer from "./Components/PhoneContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import TvContainer from "./Components/TvContainer";
import CommentsContainer from "./Components/CommentsContainer";
import AdminContainer from "./Components/AdminContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
        <TvContainer />
      </div>
      <AdminContainer />
      <CommentsContainer />
    </Provider>
  );
}

export default App;
