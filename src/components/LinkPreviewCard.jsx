import React from "react";

function LinkPreviewCard({ data = null }) {
  return (
    <div className="col-md-4 p-2 mx-2 mx-md-auto my-2">
      <div className="card p-0">
        <div className="card-body">
          {data?.images?.length !== 0 && (
            <img
              src={data?.images[0]}
              alt={data?.siteName || data?.title || "Image Preview"}
              className="img-fluid mb-2"
            />
          )}
          {(data?.siteName || data?.title || data?.favicons?.length) && (
            <div className="d-flex align-items-center">
              {/* <img
                src={data?.favicons[0]}
                alt="Favicon"
                className="img-fluid"
              /> */}
              <h5>{data?.title || data?.siteName}</h5>
            </div>
          )}
          {data?.description && (
            <p className="card-text border-top pt-1">{data?.description}</p>
          )}
        </div>
        <div className="card-footer text-center">
          <a href={data?.url} target="_blank" rel="noreferrer">
            Website Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkPreviewCard;
