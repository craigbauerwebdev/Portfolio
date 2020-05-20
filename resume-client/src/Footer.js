import React, { Component } from 'react';
//import Button from './ui-components/Button';
import Icons from './ui-components/Icons';
import Social from './ui-components/Social';

class Footer extends Component {
  render() {
    const { settings } = this.props;
    return (
      <div className="footer">
        <footer>
          <Icons showButtons={false} />
          <Social github={settings.gitHub_url} linkedin={settings.linkedin_url} theme="light" height="24px" />
          <p className="v-space-30">&copy; Craig Bauer 2019</p>
        </footer>
      </div>
    );
  }
}
export default Footer;
