/* global Backbone, ItemModel */
var CartItemsCollection = Backbone.Collection.extend({
  comparator: 'title',
  model: ItemModel
});