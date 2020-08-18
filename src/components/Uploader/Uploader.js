import React from "react";
import ReactFilestack from "filestack-react"; //importing filestack
import { API_KEY } from "../../variables";

class Uploader extends React.Component {
  constructor() {
    super();
    this.state = {
      url: null,
    };
  }

  onSuccess = (result) => {
    this.setState({ url: result.filesUploaded[0].url });
  };

  onError = (error) => {
    console.log("error", error);
  };

  render() {
    return (
      <div>
        {console.log("url", this.state.url)}
        <ReactFilestack
          apikey={API_KEY}
          componentDisplayMode={{
            type: "button",
            customText: "Click here to open picker",
            customClass: "ui medium button gray",
          }}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      </div>
    );
  }
}

export default Uploader;
