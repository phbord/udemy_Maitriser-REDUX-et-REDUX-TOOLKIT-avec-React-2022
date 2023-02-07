import AdminView from "./app/features/admin/AdminView";
import PhoneView from "./app/features/phones/PhoneView";
import TvView from "./app/features/tvs/TvView";

function App() {
  return (
    <>
      <div className="section-one">
        <PhoneView />
        <TvView />
      </div>
      <AdminView />
    </>
  );
}

export default App;
