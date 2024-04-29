import React from "react";
import "../components/styling/SearchComponent.css"; // Import CSS file for styling

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="SearchComponent">
        <input type="text" name="search" placeholder="Search.." />
      </div>
    );
  }
}

export default SearchComponent;
