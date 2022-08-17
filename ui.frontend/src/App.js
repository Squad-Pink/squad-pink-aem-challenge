import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import {Container} from "./App.styled"

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Container>
        {this.childComponents}
        {this.childPages}
        </Container>
      </div>
    );
  }
}

export default withModel(App);
