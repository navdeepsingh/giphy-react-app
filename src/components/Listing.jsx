import React from "react";

const Listing = ({ images }) => {
  return (
    <div className="listing">
      {images.length
        ? images.map((image) => {
            return (
              <React.Fragment key={image.id}>
                <img src={image.images.original.url} alt={image.title} />
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
};

export default Listing;
