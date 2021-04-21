import { Container } from "@material-ui/core";
import Header from "../Header/Header";
import style from "./layout.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import HackerDetails from "../Hacker/HackerDetails";
import Hacker from "../Hacker/Hacker";

const Layout = () => {
  return (
    <div className={style.Layout}>
      <Header></Header>
      <Container>
        <Switch>
          <Redirect from="/" to="/hackers" exact />
          <Route path="/hackers/:id" component={HackerDetails} />
          <Route path="/hackers" component={Hacker} />
          <Redirect path="**" to="/" />
        </Switch>
      </Container>
    </div>
  );
};

export default Layout;
