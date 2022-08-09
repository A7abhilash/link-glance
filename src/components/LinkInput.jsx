import React, { useState } from "react";

function LinkInput({ handleSubmit, loading }) {
  const [text, setText] = useState("");

  const clearSearch = () => setText("");

  return (
    <div className="row mt-5">
      <div className="col-md-5 mx-2 mx-md-auto p-4 bg-light">
        <input
          type="url"
          placeholder="Enter Link"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          readOnly={loading}
        />
        <div className="d-flex" style={{ float: "right" }}>
          <button
            onClick={clearSearch}
            className="btn btn-sm btn-outline-dark my-2"
            disabled={loading}
          >
            Clear
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!text) {
                alert("Invalid input");
                return;
              }

              handleSubmit(text);
            }}
            className="btn btn-sm btn-primary my-2"
            disabled={loading}
            style={{ marginLeft: 10 }}
          >
            Take a Glance
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkInput;
