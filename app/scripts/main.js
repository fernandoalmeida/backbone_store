/* global console, $, Backbone, HomeView, ListView, ItemView, ItemModel, ItemsCollection, _ */
var BackboneStore = Backbone.Router.extend({

  initialize: function() {

    this.homeView = new HomeView();

    this.listView = new ListView();

    this.itemModel = new ItemModel();
    this.itemView = new ItemView({
      model: this.itemModel
    });
  },

  routes: {
    "": 'home',
    "store": 'list',
    "store/:item": 'item'
  },

  home: function(){
    $('.main').html(this.homeView.render().el);
  },

  list: function() {
    $('.main').html(this.listView.render().el);
  },

  item: function(id) {
    var self = this;
    var item = this.listView.collection.at(id - 1);
    if (item != undefined) {
      _.each(item.attributes, function(val, key){
	self.itemModel.set(key, val);
      });
    }
    $('.main').html(this.itemView.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});