import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import userPicture from './images/user.png';

class AuthorPicture extends React.Component {
  render () {
    return <img src={userPicture} className="author-picture" alt="user"></img>;
  }
}

class AuthorInformation extends React.Component {
  render () {
    let date = new Date();
    return ( 
      <div className="author-information">
        <span className="author-name">React beginner</span>
        <span className="author-occupation">@ReactHeadquarters</span>
        <span className="post-date">{date.toLocaleDateString()}</span>
      </div>
    );
  }
}

class UserMessage extends React.Component {
  render() {
    return (
      <div className="message-header">
        <p>This is my first social card created using ReactJs.</p>
      </div>
    );
  }
}

class PostHeader extends React.Component {
  render() {
    return (
      <div className="post-header">
        <span className="content-left">
          <AuthorPicture/>
        </span>
        <span className="content-right">
          <AuthorInformation/>
          <UserMessage/>
        </span>
      </div>
    );
  }
}

class PostOverlayText extends React.Component {
  render() {
    return (
      <h1>This is how you render components!</h1>
    );
  }
}

class PostSubText extends React.Component {
  render() {
    return (
      <div className="post-subtext">
        <h2>This is how you render components!</h2>
        <span className="post-sub-information">
          <p>
            New to React? This article will introduce you to components!
          </p>
        </span>
      </div>
    );
  }
}

class PostOriginUrl extends React.Component {
  render() {
    return (
      <div className="post-origin-url">medium.com</div>
    );
  }
}

class PostBody extends React.Component {
  render () {
    return (
      <div className="post-body">
        <span className="post-base">
          <AuthorPicture/>
          <PostOverlayText/>
        </span>
        <span className="post-sub-info">
          <PostSubText/>
          <PostOriginUrl/>
        </span>
      </div>
    );
  }
}

class HeartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }
  }

  toggleClass() {
    const currentState = this.state.isClicked;
    this.setState({ isClicked: !currentState });
  }

  render() {
    return (
      <span 
      className={this.state.isClicked ? 'heart active': 'heart'} 
      onClick= {this.toggleClass.bind(this)}> 
      </span>
    );
  }
}

class PostActions extends React.Component {
  render () {
    return (
      <div className="post-actions">
        <HeartIcon/>
        <span className="comment"></span>
        <span className="share"></span>
      </div>
    );
  }
}

class SocialCard extends React.Component {
  render() {
    return (
      <div className="social-card">
        <PostHeader/>
        <PostBody/>
        <PostActions/>
      </div>
    );
  }
}


ReactDOM.render(
  <SocialCard />,
  document.getElementById('root')
);