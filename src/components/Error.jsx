import React from "react";

function Error() {
  return (
    <div class="alert alert-danger mt-5 col-md-4 mx-2 mx-md-auto" role="alert">
      <h5 className="text-center">
        Failed to fetch preview. Please try again!
      </h5>
      <div className="border-top border-light pt-2">
        <h6 className="card-text mb-0">Possible Reasons:</h6>
        <ul>
          <li>Invalid URL</li>
          <li>May have entered Redirection URL/Backend API</li>
          <li>Poor Internet Connection</li>
          <li>Request Timeout</li>
          <li>Server Error</li>
        </ul>
      </div>
    </div>
  );
}

export default Error;
