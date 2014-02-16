/* global Backbone, ItemModel, $ */
var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  url: '/api/items.json'
});