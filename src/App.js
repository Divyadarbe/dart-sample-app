import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
function App() {
  return (
    <div className="app-card" style={{ width: "100%",overflowX:'hidden', height:'100vh',boxSizing:'border-box',margin:'0' }}>
      <div style={{ padding: "10px" }}>
        <Header />
        <div className="container " style={{ marginTop: "20px" }}>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
