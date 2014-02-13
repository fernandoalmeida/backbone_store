/* global Backbone, Mustache */
var ItemView = Backbone.View.extend({

  initialize: function(options) {
    this.options = options;
  },

  render: function() {
    this.$el.html(Mustache.render(this.template, this.options));

    return this;
  },
  
  template: '\
	<div class="item">\
	  <div class="row">\
	    <div class="col-md-4 thumbnail">\
	      <img src="{{image}}" alt="...">\
	    </div>\
	    <div class="col-md-8">\
	      <div class="col-md-12">\
		<strong>Brand:</strong> <span>{{brand}}</span><br>\
		<strong>Product Code:</strong> <span>{{id}}</span><br>\
		<strong>Availability:</strong> <span>{{availability}}</span><br>\
	      </div>\
	      <div class="col-md-12">\
		<h2>Price: ${{price}}</h2>\
	      </div>\
	      <div>\
		<form method="" class="" action="">\
		  <div class="col-md-3">\
		    <input type="text" placeholder="1" class="form-control" id="qt">\
		  </div>\
		  <div class="col-md-3">\
		    <button type="submit" class="btn btn-success">Add to cart</button>\
		  </div>\
		</form>\
	      </div>\
	    </div>\
	  </div>\
	  <div class="row">\
	    <div class="col-md-12">\
	      <p>{{description}}</p>\
	    </div>\
	  </div>\
	</div>'
});