var React = require('react');

var NavBar = React.createClass({

  render: function() {
    function createLinkItem(item,index){
      return <NavItem key={item.title+index} href={item.href} title={item.title} />;
    };
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="# ">Product Shop</a>
          </div>
        </nav>

      </div>
    );
  }

});

module.exports = NavBar;
