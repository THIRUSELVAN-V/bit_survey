import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoute } from "./routes";
import { Header, SideBar } from "./components";

const App = () => {
  return (
    <Router>
      <div className=" h-screen  grid grid-cols-6 bg-content1-50">
        <SideBar />
        <div className="col-span-5 h-screen">
          <div className="h-[13%]">
            <Header title="Dashboard " />
          </div>
          <div className="row-span-7 h-[87%] overflow-y-auto custom-scrollbar p-6">
            <PublicRoute />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
