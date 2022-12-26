import './App.css';
import Chat from './components/Chat';
import Signin from './components/SignIn';
import {AuthProvider} from "./components/Auth";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route exact path="/">
            <Redirect to="/SignIn" />
          </Route>
          <Route exact path="/SignIn">
            <Signin />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
