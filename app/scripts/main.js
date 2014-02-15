/* global console, $, Backbone, HomeView, ListView, ItemView, ItemModel */

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
    this.itemModel.set({
      id: id,
      price: (id * 100).toFixed(2)
    });

    $('.main').html(this.itemView.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});