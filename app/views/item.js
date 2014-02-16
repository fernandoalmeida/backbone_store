/* global Backbone, Mustache */
var ItemView = Backbone.View.extend({

  render: function() {
    this.$el.html(Mustache.render(this.template, this.model.attributes));

    return this;
  },
  
  template: '\
	<div class="item details">\
	  <div class="row">\
	    <div class="col-md-4 thumbnail">\
	      <img src="{{image}}" alt="...">\
	    </div>\
	    <div class="col-md-8">\
	      <div class="col-md-12">\
		<h2>{{title}}</h2>\
		<strong>ISBN:</strong> <span>{{id}}</span><br>\
		<strong>Publisher:</strong> <span>{{publisher}}</span><br>\
		<strong>Date:</strong> <span>{{date}}</span><br>\
		<strong>Pages:</strong> <span>{{pages}}</span><br>\
	      </div>\
	      <div class="col-md-12">\
		<h2>Price: {{formatPrice}}</h2>\
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