/* global console, $, Backbone, HomeView, ListView, ItemView, ItemModel, ItemsCollection, CartView */
var BackboneStore = Backbone.Router.extend({

  initialize: function() {

    this.homeView = new HomeView();

    this.listView = new ListView();

    this.itemModel = new ItemModel();
    this.itemView = new ItemView({
      model: this.itemModel
    });
    
    this.cartView = new CartView();
  },

  routes: {
    "": 'home',
    "store": 'list',
    "store/:item": 'item',
    "cart": 'cart',
    "cart/:item/add": 'add'
  },

  home: function(){
    $('.main').html(this.homeView.render().el);
  },

  list: function() {
    $('.main').html(this.listView.render().el);
  },

  item: function(id) {
    this.itemView.model = this.listView.collection.get(id) || this.itemModel;
    $('.main').html(this.itemView.render().el);
  },

  cart: function() {
    $('.main').html(this.cartView.render().el);
  },

  add: function(id) {
    var item = this.cartView.collection.get(id) || this.listView.collection.get(id);

    if (item) {
      if (this.cartView.collection.get(id) == undefined) { 
	item.set("quantity", 1);
	item.set("formatTotal", item.get("formatPrice"));
      } else {
	item.set("quantity", item.get('quantity') + 1);
	item.set("formatTotal", "$ " + ((item.get("quantity") * item.get("price"))).toFixed(2));
      }

      this.cartView.collection.add(item);
    }

    $('.main').html(this.cartView.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});