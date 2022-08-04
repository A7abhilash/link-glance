import React from "react";

function Loading() {
  return (
    <div className="text-center">
      <div className="spinner-border text-info" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
      <p className="mt-1 mb-0">Fetching preview</p>
    </div>
  );
}

export default Loading;
