import React, { Component } from "react";
import { Link } from "react-router-dom";

class WebExamples extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data } = this.props;
    return (
      <div id="examples" className="inner center">
        {data.map(function (project, index) {
          if (project.status === "publish") {
            const slug = "/" + project.slug,
              markup = (
                <Link key={index} to={`${process.env.PUBLIC_URL}${slug}`}>
                  <div className="project">
                    <div
                      className="inner"
                      style={{
                        backgroundImage: "url(" + project.thumbnail + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                      }}
                    >
                      <div className="project-title center">
                        {project.title.rendered}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            return markup;
          }
          return false;
        })}
        <div style={{ clear: "left" }}></div>
      </div>
    );
  }
}

export default WebExamples;
