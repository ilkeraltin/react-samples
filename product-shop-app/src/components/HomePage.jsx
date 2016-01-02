var React=require('react');
var ReactRouter=require('react-router');
var Link=ReactRouter.Link;
var HomePage= React.createClass({
  render: function() {
    return (
      <div>
        <h1>PRODUCTS</h1>
      <ul>
        <li><Link to="/product/33">IOS Course</Link></li>
        <li><Link to="/product/34">React Course</Link></li>
        <li><Link to="/product/35">Android Course</Link></li>
        <li><Link to="/product/36">HTML5 Course</Link></li>
        <li><Link to="/product/37">CSS3 Course</Link></li>
      </ul>

      </div>
    );
  }

});

module.exports=HomePage;
