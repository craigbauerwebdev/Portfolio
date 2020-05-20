import React, { Component } from 'react';
//import { Link } from "react-router-dom";

class UpdateSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_email: null
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
                <h2>Update Settings</h2>
                <form>
                    <label>Main Email</label>
                    <input onChange={this.handleInputChange} name="main_email" placeholder="Main Email" value={this.state.main_email} />

                    <label>Bio Intro</label>
                    <input name="bio intro" placeholder="Bio Intro" value={settings.bio_intro} />

                    <label>Bio Tagline</label>
                    <input name="bio tagline" placeholder="Bio Tagline" value={settings.bio_tagline} />

                    <label>Bio</label>
                    <textarea name="bio" placeholder="Bio" value={settings.bio} required></textarea>

                    <button type="submit" onClick={this.submitForm}>Update Settings</button>
                </form>
            </div>
        );
    }
}

export default UpdateSettings;
