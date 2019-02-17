import React from 'react';
import FacebookLogin from 'react-facebook-login';
import LoggedInUser from '../User/LoggedInUser';
import Cookies from 'universal-cookie';

class Facebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: '',
      email: '',
      picture: ''
    }
  }
  
  responseFacebook = response => {
    const cookies = new Cookies();

    if (!response) {
      console.log('dead');
      return;
    }
    this.setState({
      isLoggedIn: true,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })

    cookies.set('name', response.name, { path: '/' });
  }
  
  render() {
    let userAction;

    if (this.state.isLoggedIn) {
      userAction = (
        <LoggedInUser 
          name={ this.state.name }
          email={ this.state.email}
          picture={ this.state.picture}
        />
      )
    } else {
      userAction = (
        <FacebookLogin
          appId="253683672236382"
          autoLoad={true}
          fields="name,email,picture"
          callback={ this.responseFacebook } />
      );
    }
    return(
      userAction
    )
  }
}

export default Facebook;
