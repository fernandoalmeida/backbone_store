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
    var found = this.listView.collection.find(function(i){ return i.get("id") == id });
    if (found) {
      this.itemView.model = found;
    }
    $('.main').html(this.itemView.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});