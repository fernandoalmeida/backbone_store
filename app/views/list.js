/* global Backbone, Mustache */
var ListView = Backbone.View.extend({

  template: 
    '<div class="list">\
       <div class="row">\
         {{#items}}\
         <div class="col-md-3">\
           <a href="#/store/{{id}}" class="thumbnail">\
             <img src="{{image}}" alt="{{name}}">\
           </a>\
         </div>\
         {{/items}}\
      </div>\
     </div>',

  data: {
    items: [{
      id: 1,
      name: 'Product 1',
      image: 'http://placehold.it/180x240'
    },{
      id: 2,
      name: 'Product 2',
      image: 'http://placehold.it/180x240'
    },{
      id: 3,
      name: 'Product 3',
      image: 'http://placehold.it/180x240'
    },{
      id: 4,
      name: 'Product 4',
      image: 'http://placehold.it/180x240'
    },{
      id: 5,
      name: 'Product 5',
      image: 'http://placehold.it/180x240'
    },{
      id: 6,
      name: 'Product 6',
      image: 'http://placehold.it/180x240'
    },{
      id: 7,
      name: 'Product 7',
      image: 'http://placehold.it/180x240'
    },{
      id: 8,
      name: 'Product 8',
      image: 'http://placehold.it/180x240'
    }]
  },
  
  render: function() {
    this.$el.html(Mustache.render(this.template, this.data));

    return this;
  }
});