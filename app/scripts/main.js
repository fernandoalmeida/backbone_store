/* global console, $, Backbone, HomeView, ListView, ItemView */

var BackboneStore = Backbone.Router.extend({

  routes: {
    "": 'home',
    "store": 'list',
    "store/:item": 'item'
  },

  home: function(){
    var view = new HomeView();
    $('.main').html(view.render().el);
  },

  list: function() {
    var view = new ListView();
    $('.main').html(view.render().el);
  },

  item: function() {
    var view = new ItemView();
    $('.main').html(view.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});