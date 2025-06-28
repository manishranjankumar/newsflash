import React, { Fragment } from "react";
import { AiOutlineRead } from "react-icons/ai";

const Card = (props) => {
  // console.log(props);
  let { data } = props;

  return (
    <>
      {data.map((val) => {
        if (!val.urlToImage) {
          return null;
        } else {
          return (
            <Fragment key={val.url}>
              <section className="cardsection">
                <div className="cardsectionfirst">
                  <img
                    src={val.urlToImage}
                    alt=""
                    width="350px"
                    height="200px"
                  />
                  <h2
                    className="cardtitle"
                    onClick={() => {
                      window.open(val.url);
                    }}
                  >
                    {val.title}
                  </h2>
                </div>
                <div className="cardsectionsecond">
                  <p>{val.description}</p>
                  <button
                    className="cardbtn"
                    onClick={() => {
                      window.open(val.url);
                    }}
                  >
                    <AiOutlineRead /> Read More
                  </button>
                </div>
              </section>
            </Fragment>
          );
        }
      })}
    </>
  );
};

export default Card;