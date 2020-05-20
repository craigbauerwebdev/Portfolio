import React, { Component } from 'react';
//import { Link } from "react-router-dom";

class AddNewWebExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    componentDidMount() {
        const { settings } = this.props;
        this.setState({
            main_email: settings.main_email
        })
    }

    handleInputChange = (event) => {
        const
            target = event.target,
            name = target.name,
            value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { settings } = this.props;
        return (
            <div id="add-new-web-example" className="add-new-web-example inner">
                <h2>Add A Web Example</h2>
                <form>
                    <label>Title</label>
                    <input name="title" placeholder="Title" value={this.state.title} />

                    <label>Thumbnail</label>
                    <input name="thumbnail" placeholder="Thumbnail" />

                    <label>Thumbnail</label>
                    <input name="thumbnail" placeholder="Thumbnail" />
                </form>
            </div>
        );
    }
}

export default AddNewWebExample;
