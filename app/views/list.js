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
       <div class="panel panel-default">\
         <div class="panel-body">\
           <form role="form">\
             <div class="col-md-3">\
               <div class="form-group">\
                 <label for="order_by">Order by</label>\
                 <select class="form-control" name="order_by" id="order_by"><option value="date">Date</option></select>\
               </div>\
             </div>\
           </form>\
         </div>\
       </div>\
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