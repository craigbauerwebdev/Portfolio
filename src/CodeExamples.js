import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import Info from './Info';
import './css/CodeExamples.css';


class CodeExamples extends Component {

  render() {
  	const{ data } = this.props;
  	console.log(data);
    return (
      <div id="code-examples" className="inner center">
      	{data.map(function (project, index) {
            if( project.status === "publish" || project.status === "draft" ) {
            	const 
                slug = "/" + project.slug,
            	  markup =
            	<Link key={index} to={slug}>
              	<div className="project" style={{ 
              		backgroundImage: "url("+project.code_thumb+")", backgroundSize: "cover", backgroundPosition: "center"
              	}}>
              		<div className="project-title">{project.title.rendered}</div>
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
