import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AngLeeDashBoard from "./containers/AngLeeDashBoard/AngLeeDashBoard";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendApi = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AngLeeDashBoard data={this.state.data} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
