import React from "react";

function LinkPreviewCard({ data = null }) {
  return (
    <div className="col-md-4 p-2 mx-2 mx-md-auto my-2">
      <div className="card p-0">
        <div className="card-body">
          <div className="text-center">
            <img
              src={data?.thumbnail || require("../assets/img_not_found.png")}
              alt={data?.title || "Image Preview"}
              className="img-fluid mb-2"
              style={{
                maxHeight: "30vh",
              }}
            />
          </div>
          {(data?.title || data?.icon) && (
            <div className="d-flex align-items-center">
              {/* <img
                src={data?.favicons[0]}
                alt="Favicon"
                className="img-fluid"
              /> */}
              <h5>{data?.title}</h5>
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
