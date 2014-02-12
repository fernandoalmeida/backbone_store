/* global Backbone, Mustache */
var HomeView = Backbone.View.extend({
    template: 
      '<div class="home">\
	  <div class="jumbotron">\
            <h1>Backbone Store</h1>\
            <p class="lead">A simple project for getting start with Backbone.js</p>\
            <p><a class="btn btn-lg btn-success" href="#/store">Show me the Store!</a></p>\
	  </div>\
	  <div class="row marketing">\
            <div class="col-lg-6">\
              <h4>HTML5 Boilerplate</h4>\
              <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>\
            </div>\
            <div class="col-lg-6">\
              <h4>Bootstrap</h4>\
              <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>\
            </div>\
	  </div>\
	</div>'
  ,

  render: function(){
    this.$el.html(Mustache.render(this.template));

    return this;
  }
});