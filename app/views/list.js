/* global Backbone */
var ListView = Backbone.View.extend({
  render: function() {
    var html = '\
	<div class="list">\
	  <div class="row">\
	    <div class="col-md-3">\
	      <a href="#/store/1" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/2" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/3" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/4" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	  </div>\
	  <div class="row">\
	    <div class="col-md-3">\
	      <a href="#/store/5" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/6" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/7" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	    <div class="col-md-3">\
	      <a href="#/store/8" class="thumbnail">\
		<img src="http://placehold.it/180x240" alt="...">\
	      </a>\
	    </div>\
	  </div>\
	</div>';
    this.$el.html(html);

    return this;
  }
});