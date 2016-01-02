var React=require('react');

var NavItem=React.createClass({
render: function() {
  return (
    <li>
    <a style={this.props.aStyle} className="navbar-link" href={this.props.href}>{this.props.title}</a>
    </li>
  );
}
});

module.exports=NavItem;
