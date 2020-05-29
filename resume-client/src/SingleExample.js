import React, { Component, Fragment } from 'react';
import Button from './ui-components/Button';
import CodeExamples from './CodeExamples';
import WebExamples from './WebExamples';

class SingleExample extends Component {
  render() {
    const
      { data, single, type } = this.props,
      url = type === "code" ? single.code_thumb : single.thumbnail,
      project_url = type === "code" ? single.button_url : single.url,
      label = type === "code" ? "View On GITHUB" : "View Site";
    return (
      <Fragment>
        <div className="single-code inner group">
          <img className="project-thumb left" alt={single.slug} src={url} />
          <div className="project-meta left">
            <h1 className="project-title">{single.title.rendered}</h1>
            <div className="project-desc" dangerouslySetInnerHTML={{ __html: single.excerpt.rendered }}></div>
            <Button url={project_url} label={label} type="popup" />
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
