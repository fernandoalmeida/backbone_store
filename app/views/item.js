/* global Backbone, Mustache */
var ItemView = Backbone.View.extend({

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
	</div>',

  data: {
    id: 1,
    price: "99.90",
    brand: "Generic",
    availability: "Available",
    image: "http://placehold.it/230x300",
    description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
  },

  render: function() {
    this.$el.html(Mustache.render(this.template, this.data));

    return this;
  }
});