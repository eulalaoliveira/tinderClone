import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllChats from "./components/AllChats";
import NavBar from "./components/Navbar";
import Profile from "./components/ProfilePage";
import CardSwipe from "./components/Card";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={CardSwipe}></Route>
          <Route exact path="/chats" component={AllChats}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}
