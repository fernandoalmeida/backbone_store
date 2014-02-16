/* global Backbone, Mustache, ItemsCollection */
var ListView = Backbone.View.extend({

  initialize: function() {
    this.collection = new ItemsCollection();
    this.listenTo(this.collection, 'reset', this.render);

    this.collection.fetch();
  },

  render: function() {
    this.$el.html(Mustache.render(this.template, this.collection));

    return this;
  },

  template: 
    '<div class="list">\
       <div class="row">\
         {{#models}}\
         <div class="col-md-3 item">\
           <a href="#/store/{{attributes.id}}" class="thumbnail">\
             <img src="{{attributes.image}}" alt="{{attributes.name}}">\
           </a>\
         </div>\
         {{/models}}\
      </div>\
     </div>'

});