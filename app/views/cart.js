/* global Backbone, Mustache, CartItemsCollection */
var CartView = Backbone.View.extend({

  initialize: function() {
    this.collection = new CartItemsCollection();

    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);

    return this;
  },
  
  render: function(){
    this.$el.html(Mustache.render(this.template, this.collection));

    return this;
  },

  template: '<table class="cart table table-bordered table-striped">\
		  <thead>\
			  <tr>\
				<th>Image</th>\
				<th>Title</th>\
				<th>Quantity</th>\
				<th>Unit Price</th>\
				<th>Total</th>\
			  </tr>\
			</thead>\
			<tbody>\
                          {{#models}}\
	    		    <tr class="item">\
				<td class="image"><a href="#store/{{attributes.id}}"><img src="{{attributes.image}}" alt="{{attributes.title}} ({{attributes.id}})"></a></td>\
				<td class="title">{{attributes.title}}</td>\
				<td class="quantity">{{attributes.quantity}}</td>\
				<td class="price">{{attributes.formatPrice}}</td>\
				<td class="price">{{attributes.formatTotal}}</td>\
                            </tr>\
	                  {{/models}}\
			  <tr>\
				<td>&nbsp;</td>\
				<td>&nbsp;</td>\
				<td>&nbsp;</td>\
				<td>&nbsp;</td>\
				<td><strong></strong></td>\
			  </tr>\
			</tbody>\
		  </table>'
  
});