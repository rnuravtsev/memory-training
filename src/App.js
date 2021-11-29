import './App.css';
import AdminPage from "./components/pages/AdminPage/AdminPage";
// import GamePage from "./components/pages/GamePage/GamePage";
import browserHistory from "browser-history";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './img/game-background.png';
import GamePageContainer from "./components/pages/GamePage/GamePageContainer";


function App() {
  return (
    <BrowserRouter history={browserHistory}>
        <Routes>
            <Route exact path={'/'} element={<GamePageContainer/>}/>
            <Route exact path={'/lamps-admin'} element={<AdminPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
