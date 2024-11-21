import React from "react";

import fold from "../img/Folds/3.0.jpg";
import fold1 from "../img/Folds/3.1.jpeg";
import fold2 from "../img/Folds/3.2.jpeg";

import estate1 from "../img/100 gharon ki jaagir-- An estate of 100 houses/6.jpg";
import estate2 from "../img/100 gharon ki jaagir-- An estate of 100 houses/6.1.jpg";

import books1 from "../img/Accordion book of Aspirations/4.1.jpeg";
import books2 from "../img/Accordion book of Aspirations/4.jpeg";

import chaupad1 from "../img/Ghar Chaupad/2.0.jpeg";
import chaupad2 from  "../img/Ghar Chaupad/2.1.jpg";
import chaupad3 from "../img/Ghar Chaupad/2.2.jpg";
import chaupad4 from "../img/Ghar Chaupad/2.3.jpg";

import home1 from "../img/Home_ Delivery/4.0.jpeg";
import home2 from "../img/Home_ Delivery/4.1.jpg";

import love1 from "../img/How to fall in love with everyone and everything/2.0.jpeg";
import love2 from "../img/How to fall in love with everyone and everything/2.1.jpeg";

import Tic1 from "../img/Ticky tacky/3.0.jpg";
import Tic2 from "../img/Ticky tacky/3.1.jpg";
import Tic3 from "../img/Ticky tacky/3.2.jpg";
import Tic4 from "../img/Ticky tacky/3.3.jpg";

import Live1 from "../img/Where I live/1.0.jpeg";
import Live2 from "../img/Where I live/1.1.jpg";

import Long1 from "../img/Longings/1.jpg";
import long2 from "../img/Longings/IMAGE1.JPG";
import long3 from "../img/Longings/IMAGE2.JPG";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Work</h3>
                <p className="subtitle-a">
                  {/* Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt. */}
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Added by Manisha  */}
            <div className="col-md-4">
              <div className="work-box">
              <a href={chaupad1} data-lightbox="gallery-chaupad1">
                  <div className="work-img">
                  <img src={chaupad1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Ghar Chaupad</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Chaupad
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={chaupad2}
                  data-lightbox="gallery-chaupad1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              <a
                  href={chaupad3}
                  data-lightbox="gallery-chaupad1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              <a
                  href={chaupad4}
                  data-lightbox="gallery-chaupad1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={home1} data-lightbox="gallery-home1">
                  <div className="work-img">
                  <img src={home1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Home: Delivery</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Home Delivery
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={home2}
                  data-lightbox="gallery-home1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={Live1} data-lightbox="gallery-Live1">
                  <div className="work-img">
                  <img src={Live1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Where I live</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Where I live
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={Live2}
                  data-lightbox="gallery-Live1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={love1} data-lightbox="gallery-love1">
                  <div className="work-img">
                  <img src={love1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">How to fall in love with everyone and everything</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          How to fall in love with everyone and everything
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
                </a>
                <a
                    href={love2}
                    data-lightbox="gallery-love1"
                    style={{display: "none"}}
                >
                    jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={Long1} data-lightbox="gallery-Long1">
                  <div className="work-img">
                  <img src={Long1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">[Be]Longings</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Longings
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
                </a>
                <a
                  href={long2}
                  data-lightbox="gallery-Long1"
                  style={{display: "none"}}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={long3}
                  data-lightbox="gallery-Long1"
                  style={{display: "none"}}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={books1} data-lightbox="gallery-books1">
                  <div className="work-img">
                  <img src={books1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Accordion book of Aspirations</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Accordion book of Aspirations
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={books2}
                  data-lightbox="gallery-books1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={Tic1} data-lightbox="gallery-Tic1">
                  <div className="work-img">
                  <img src={Tic1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Ticky tacky</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Ticky tacky
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={Tic2}
                  data-lightbox="gallery-Tic1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              <a
                  href={Tic3}
                  data-lightbox="gallery-Tic1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              <a
                  href={Tic4}
                  data-lightbox="gallery-Tic1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={fold} data-lightbox="gallery-fold">
                  <div className="work-img">
                  <img src={fold} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Fold</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          Fold
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={fold1}
                  data-lightbox="gallery-fold"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              <a
                  href={fold2}
                  data-lightbox="gallery-fold"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href={estate1} data-lightbox="gallery-estate1">
                  <div className="work-img">
                  <img src={estate1} alt="" className="img-fluid"/>
                  </div>
                  <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">100 gharon ki jaagir-- An estate of 100 houses</h2>
                      <div className="w-more">
                          {/* <span className="w-ctegory">
                          100 gharon ki jaagir-- An estate of 100 houses
                          </span>{" "} */}
                      </div>
                      </div>
                  </div>
                  </div>
              </a>
              <a
                  href={estate2}
                  data-lightbox="gallery-estate1"
                  style={{display: "none"}}
              >
                  jsx-a11y/anchor-has-content warning
              </a>
              
              </div>
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
