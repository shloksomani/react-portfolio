import React from "react";
import clay1 from "../img/profile-pic.JPG";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Vidhi Jangra is a multidisciplinary artist with a research-driven practice centered on materiality as both context and content, exploring home as a site for micropolitical interventions. She earned her BFA (Honours) from Santiniketan School of Art, followed by an MFA from Nottingham Trent University."
        }
      ]
    };
    this.Reasearch = {
      about_Reasearch: [
        {
          id: "first-p-about",
          content:
            "Her research delves into materiality and craft methodologies, focusing on their potential to build structures of solidarity and support. Through her practice, she challenges conventional definitions of books and reading, reimagining them as navigable art objects that transcend traditional boundaries of literacy and art education."
        }
      ]
    };
    this.Passion = {
      about_Passion: [
        {
          id: "first-p-about",
          content:
            "Passionate about art as a tool for community-building and education, she is interested in collaboration as a tool to enhance access to art institutions, reclaiming galleries as public spaces."
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
                  <div className="col-md-6">
                        <a>
                            <img src={clay1} alt="" className="img-fluid"/>
                        </a>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                        );
                      })}
                       {this.Reasearch.about_Reasearch.map(content => {
                        return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                        );
                      })}
                      {this.Passion.about_Passion.map(content => {
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
