var React = require('react/addons');
console.log("hello from JSX");

var GroceryItemList = require('./components/GroceryItemlist.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();
function render(){
    React.render(<GroceryItemList items={initial}/>,app)    
}
groceryItemStore.onChange(function(items){
    initial = items;
    render();
})
render();

