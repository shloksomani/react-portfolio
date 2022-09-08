import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, hello, introduce my name is Juan Funes, I'm from Argentina, precisely in CABA, Buenos Aires. Now I am a student at CoderHouse and Alkemy."
        },
        {
          id: "second-p-about",
          content:
            "Now I'm focusing on college, and deepening web development, especially Backend web development, studying NodeJs, Express Js, MongoDB and Typescript. I am also actively building my portfolio by building personal projects."
        },
        {
          id: "third-p-about",
          content:
            "My goal now is to master Frontend, Backend and Web3 technology and become a Fullstack Web3 Developer."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div >
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me &#128214;</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
