import { Route, Routes } from "react-router-dom";

import Header from "./component/Header/Header";
import HomePage from "./component/HomePage/HomePage";
import Reviews from "./component/Reviews/Reviews";
import DashBoard from "./component/DashBoard/DashBoard";
import Blog from "./component/Blog/Blog";
import About from "./component/About/About";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
