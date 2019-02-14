import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="footer-left">
          <p>Placeholder</p>
        </div>
        <div className="footer-middle">
          <p className="morewatts">MoreWatts©</p>
          <p className="developer">Developed by Viktor Meduneckij</p>
        </div>
        <div className="footer-right social">
          <a href="https://www.facebook.com/morewatts/" className="facebook"></a>
          <a href="https://www.instagram.com/morewatts/" className="instagram"></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
