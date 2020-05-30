import React, { Component, Fragment } from 'react';
import Button from './ui-components/Button';
import CodeExamples from './CodeExamples';
import WebExamples from './WebExamples';

class SingleExample extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const
      { data, single, type } = this.props,
      src = type === "code" ? single.code_thumb : single.thumbnail,
      //project_url = type === "code" ? single.button_url : single.url,
      label = type === "code" ? "View On GITHUB" : "View Site";
    return (
      <Fragment>
        <div className="single-code inner group">
          <h1 className="project-title mobile">{single.title.rendered}</h1>
          <img className="project-thumb left" alt={single.slug} src={src} />
          <div className="project-meta left">
            <h1 className="project-title desktop">{single.title.rendered}</h1>
            <div className="project-desc" dangerouslySetInnerHTML={{ __html: single.excerpt.rendered }}></div>
            <div className="tech-used">
              <b><p className="title">Technologies Used</p></b>
              <p>{single.technologies_used}</p>
            </div>
            {single.view_btn &&
              <Button url={single.url} label={label} type="popup" />
            }
            {!single.view_btn &&
              <p className="red">This project is no longer live</p>
            }
          </div>
        </div>
        <div className="related-projects">
          <h2 className="more-projects">More Projects</h2>
          {type === "code" &&
            <CodeExamples data={data} />
          }
          {type === "web" &&
            <WebExamples data={data} />
          }
        </div>
      </Fragment>
    );
  }
}
export default SingleExample;
