import React, { Component, Fragment } from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import Button from './ui-components/Button';

class SingleCodeRoutes extends Component {
  render() {
    const { codeExamples } = this.props;
    return (
        <Switch>
        {
            codeExamples.map(function (single, index) {
                if (single.status === "publish" || single.status === "draft") {
                    const route = "/" + single.slug;
                    //console.log("Single: ", single);
                    const markup =
                        <Route key={index} path={route}>
                            <div className="single-code">
                                <Link to="/code">back to projects</Link>
                                <h1 className="project-title">{single.title.rendered}</h1>
                                <Button url={single.button_url} label="View On GITHUB" type="popup" />
                            </div>
                        </Route>
                    return markup;
                }
                return false;
            })
        }
        </Switch>
    );
  }
}
export default SingleCodeRoutes;
