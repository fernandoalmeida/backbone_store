/* global Backbone, ItemModel, $ */
var ItemsCollection = Backbone.Collection.extend({
  comparator: function(a, b) {
    if(a.get('date') < b.get('date')) {
      return 1;
    } else {
      return -1;
    }
  },
  model: ItemModel,
  url: 'api/items.json'
});