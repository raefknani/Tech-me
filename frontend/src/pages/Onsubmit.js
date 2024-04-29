import React from "react";

function handleSubmit() {
    const description = document.getElementById("description").value;
    var list = {};
    if (description) {
      list = data.filter((item) => {
        return item.description.includes(description);
      });
    }
    console.log("Searching for " + list);
  }

  export default handleSubmit;