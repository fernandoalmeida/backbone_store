/* global console, $, Backbone, HomeView, ListView, ItemView */

var BackboneStore = Backbone.Router.extend({

  initialize: function() {

    this.homeView = new HomeView();

    this.listView = new ListView();

    this.itemView = new ItemView({
      brand: "Generic",
      availability: "Available",
      image: "http://placehold.it/230x300",
      description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
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
    this.itemView.options.id = id;
    this.itemView.options.price = (id * 100).toFixed(2);

    $('.main').html(this.itemView.render().el);
  }

});

var app = new BackboneStore();

$(function(){
  Backbone.history.start();
});