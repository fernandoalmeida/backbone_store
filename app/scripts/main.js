/* global console, $, Backbone */

var BackboneStore = Backbone.Router.extend({

  greeting: '',

  routes: {
    "": 'home',
    "store": 'list',
    "store/:item": 'item'
  },

  home: function(){
    this.hideAll();
    $('.home').show();
  },

  list: function() {
    this.hideAll();
    $('.list').show();
  },

  item: function() {
    this.hideAll();
    $('.item').show();
  },

  hideAll: function() {
    $('.main > div').hide();
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});