/* global Backbone */
var ItemModel = Backbone.Model.extend({

  initialize: function() {
    try {
      this.set("formatPrice", "$ " + this.attributes.price.toFixed(2));
    } catch(err) {
      this.set("formatPrice", "$ 0.00");
    }
  },

  defaults: {
    "id": "",
    "title": "unavailable",
    "publisher": "unavailable",
    "date": "unavailable",
    "pages": 0,
    "price": 0.00,
    image: "http://placehold.it/240x280",
    description: ""
  }
});

