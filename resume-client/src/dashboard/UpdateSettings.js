import React, { Component } from 'react';
import axios from 'axios';

class UpdateSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: null,
            showLoader: null,
            showSuccess: null,
            showError: null
        }
    }

    componentDidMount() {
        const { settings } = this.props;
        this.setState({
            ...settings
        });
    }

    submitUpdate = (event) => {
        event.preventDefault();
        //console.log('submit changes to mongo');
        if(!this.state.updating) {
            this.setState({
                updating: true,
                showLoader: true,
                showSuccess: null,
                showError: null
            });
            axios.put(`${process.env.PUBLIC_URL}/profileSettings`, {
                ...this.state
            })
            .then((response) => {
                console.log(response.data);
                //this.setState({...response.data});
                this.setState({
                    showLoader: null,
                    showSuccess: true,
                    updating: null
                });
            }, (error) => {
                console.log(error);
                this.setState({
                    showError: true,
                    updating: null
                });
            });
        }
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

                    {this.state.showSuccess &&
                        <div className="success">Updated Successfully</div>
                    }
                    {this.state.showError &&
                        <div classname="error">There was an error plaease try again</div>
                    }

                    <div className="group">
                        <button className="left clearfix" onClick={this.submitUpdate}>Update Settings</button>
                        {this.state.showLoader &&
                            <div className="loader-wrap left">
                                <div className="loader"></div>
                            </div>
                        }
                    </div>
                    
                </form>

            </div>
        );
    }
}

export default UpdateSettings;
