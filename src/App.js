import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
function App() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div style={{ padding: "10px" }}>
        <Header />
        <div className="container " style={{ marginTop: "40px" }}>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
