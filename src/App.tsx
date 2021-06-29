import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import * as colors from "@material-ui/core/colors";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <ThemeProvider
      // Get Theme from https://material-ui.com/customization/color/#playground
      theme={createMuiTheme({
        palette: {
          primary: colors.red,
          secondary: {
            main: "#ff9800",
          },
        },
      })}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Container maxWidth="md">
              <HomeScreen />
            </Container>
          </Route>
          <Route path="*">
            <Container maxWidth="md">
              <NotFoundScreen />
            </Container>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
