/* global Backbone */
var ItemModel = Backbone.Model.extend({

  initialize: function() {
    try {
      this.set("formatPrice", "$ " + this.attributes.price.toFixed(2));
    } catch(err) {
      this.set("formatPrice", "unavailable");
    }
  },

  defaults: {
    "id": "unavailable",
    "title": "unavailable",
    "publisher": "unavailable",
    "date": "unavailable",
    "pages": "unavailable",
    "price": "unavailable",
    image: "http://placehold.it/240x280",
    description: ""
  }
});

