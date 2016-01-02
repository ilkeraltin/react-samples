var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProductPage = React.createClass({
  getInitialState: function() {
    return {pid: ""};
  },
  componentDidMount: function() {
    this.setState({pid: this.props.params.productId});
  },
  componentWillReceiveProps:function(nextProps){
this.setState({pid:nextProps.params.productId});
  },
  render: function() {
    return (
      <h1>Hi I'm product {this.state.pid}</h1>
    );
  }

});

module.exports = ProductPage;
