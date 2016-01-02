var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx');
var navLinks = [
  {
    title: "Home",
    href: "/"
  }, {
    title: "React Course",
    href: "/product/345"
  }, {
    title: "Flux Course",
    href: "/product/456456"
  }
];
var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" navData={navLinks}/>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <LeadCapture/>
            </div>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = BasePage;
