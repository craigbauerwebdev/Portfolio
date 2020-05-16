import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CodeExamples extends Component {

  render() {
  	const{ data } = this.props;
  	console.log(data);
    return (
      <div id="examples" className="inner center">
      	{data.map(function (project, index) {
            if( project.status === "publish" || project.status === "draft" ) {
            	const 
                slug = "/" + project.slug,
            	  markup =
            	<Link key={index} to={slug}>
              	<div className="project">
                    <div className="inner" style={{
                      backgroundImage: "url(" + project.code_thumb + ")", backgroundSize: "cover", backgroundPosition: "center"
                    }}>
              		  <div className="project-title center">{project.title.rendered}</div>
                  </div>
              	</div>
	            </Link>
              return markup;
            } 
            return false;
        })}
        <div style={{clear: "left"}}></div>
      </div>
    );
  }

}

export default CodeExamples;
