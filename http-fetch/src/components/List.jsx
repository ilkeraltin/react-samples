var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientsStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
  mixins: [Reflux.listenTo(IngredientsStore, 'onChange')],
  getInitialState: function() {
    return {ingredients: [],newText:""};
  },
  componentWillMount: function() {
    Actions.getIngredients();
  },
  onChange: function(event, ingredients) {
    this.setState({ingredients: ingredients});
  },
  onInputChange:function(e){
this.setState({newText:e.target.value});
  },
  onClick:function(e){
    if (this.state.newText) {
      Actions.postIngredient(this.state.newText);
    }
    this.setState({newText:""});
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text}/>;
    });

    return (
      <div>
        <input
        placeholder="Add new item"
        value={this.state.newText}
        onChange={this.onInputChange} />
      <button onClick={this.onClick}>ADD ITEM</button>
      <ul>{listItems}</ul>
      </div>
  );
  }
});

module.exports = List;
