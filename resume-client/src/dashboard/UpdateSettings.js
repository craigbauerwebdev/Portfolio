import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from "react-router-dom";

class UpdateSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { settings } = this.props;
        this.setState({
            main_email: settings.main_email,
            bio: settings.bio,
            bio_intro: settings.bio_intro,
            bio_tagline: settings.bio_tagline,
            bio_pic: settings.bio_pic,
            gitHub_url: settings.gitHub_url,
            linkedin_url: settings.linkedin_url
        })
    }

    submitUpdate = (event) => {
        event.preventDefault();
        console.log('submit changes to mongo');

        axios.put('http://localhost:9000/profileSettings', {
            main_email: this.state.main_email,
            bio: this.state.bio
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    handleInputChange = (event) => {
        //console.log(event.target.name, event.target.value);
        const
            target = event.target,
            name = target.name,
            value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { main_email, bio, bio_intro, bio_pic, bio_tagline, gitHub_url, linkedin_url } = this.state;
        //const { settings } = this.props;
        return (
            <div id="add-new-web-example" className="add-new-web-example inner">
                <h2>Update Settings</h2>
                <form>
                    <label>Main Email</label>
                    <input onChange={this.handleInputChange} name="main_email" placeholder="Main Email" value={main_email || ""} />

                    <label>Bio Intro</label>
                    <input onChange={this.handleInputChange} name="bio_intro" placeholder="Bio Intro" value={bio_intro || ""} />

                    <label>Bio Tagline</label>
                    <input onChange={this.handleInputChange} name="bio_tagline" placeholder="Bio Tagline" value={bio_tagline || ""} />

                    <label>Bio Image</label>
                    <input onChange={this.handleInputChange} name="bio_pic" placeholder="Bio Pic" value={bio_pic || ""} />

                    <label>Github URL</label>
                    <input onChange={this.handleInputChange} name="gitHub_url" placeholder="GitHUB URL" value={gitHub_url || ""} />

                    <label>Bio Image</label>
                    <input onChange={this.handleInputChange} name="linkedin_url" placeholder="LinkenIn URL" value={linkedin_url || ""} />

                    <label>Bio</label>
                    <textarea onChange={this.handleInputChange} name="bio" placeholder="Bio" value={bio || ""} required></textarea>

                    <button onClick={this.submitUpdate}>Update Settings</button>
                </form>
            </div>
        );
    }
}

export default UpdateSettings;
