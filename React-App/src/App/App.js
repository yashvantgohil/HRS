import { CssBaseline, Paper } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginForm from "../components/Login/LoginForm";
import SignUpForm from "../components/SignUp/SignUpForm";
import SideBar from "../components/Sidebar/SideBar";
import { useSelector } from "react-redux";

const App = () => {
  debugger;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdminLogin = window.location.pathname === "/admin";
  const imgUrl = isAdminLogin
    ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
    : "https://images.unsplash.com/photo-1592772874383-d08932d29db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80";

  const otherPages = (
    <>
      <SideBar />
      <Layout />
      <CssBaseline></CssBaseline>
    </>
  );

  const authPages = (
    <div
      className="d-flex  align-items-center justify-content-around"
      style={{ height: "100vh" }}
    >
      <div className="d-none d-lg-block">
        <img
          src={imgUrl}
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
          }}
          alt="..."
        />
      </div>
      <div className="d-flex flex-column">
        <h1
          className="mb-5 p-4 text-center "
          style={{
            fontFamily: "monospace",
          }}
        >
          {">>"} Hacker_Ranking_System {isAdminLogin ? "@admin" : "@user"}
        </h1>
        <div className="align-self-center">
          <Paper elevation={3} className="p-5">
            <Switch>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/admin" component={LoginForm}></Route>
              <Route path="/signup" component={SignUpForm}></Route>
              <Redirect from="**" to="/login"></Redirect>
            </Switch>
          </Paper>
        </div>
      </div>
    </div>
  );

  return isAuthenticated ? otherPages : authPages;
};

export default App;
