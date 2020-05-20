import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import UpdateSettings from './UpdateSettings';
import AddNewWebExample from './AddNewWebExample';

class Dashboard extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            main_email: null
        }
    } */

    /* componentDidMount() {
        const { settings } = this.props;
        this.setState({
            main_email: settings.main_email
        })
    } */

/*     handleInputChange = (event) => {
        const
            target = event.target,
            name = target.name,
            value = target.value;
        this.setState({
            [name]: value
        });
    } */

    render() {
        const { settings } = this.props;
        return (
            <div id="dashboard-page" className="dashboard-page inner">
                <h1>Settings</h1>
                    
                <h2>App Settings</h2>
                <UpdateSettings settings={settings} />
                <h2>Add A Web Project</h2>
                <AddNewWebExample settings={settings} />
            </div>
        );
    }
}

export default Dashboard;
