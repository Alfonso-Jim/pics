import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Loader from "./Loader";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  renderContent() {
    if (this.state.images.length > 1) {
      return <ImageList images={this.state.images} />;
    }

    return <Loader msg="Waiting for search term..." />;
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui container">{this.renderContent()}</div>
      </div>
    );
  }
}

export default App;
