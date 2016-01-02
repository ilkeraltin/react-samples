var React=require('react');
var NavBar=require('./nav/NavBar.jsx');
var navLinks=[
  {
    title:"Home",
    href:"/"
  },
  {
    title:"React Course",
    href:"/product/345"
  },
  {
    title:"Flux Course",
    href:"/product/456456"
  }
];
var BasePage= React.createClass({
  render: function() {
    return (
      <div>
      <NavBar bgColor="#fff" titleColor="#3097d1"  navData={navLinks}/>
      {this.props.children}
    </div>
    );
  }

});

module.exports=BasePage;
