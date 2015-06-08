import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("clients", {path:"/"}, function() {
    this.route('new');
    this.resource("client",function(){
      this.route('uploads')
    })
  });

  this.route('client', function() {
    this.route('uploads');
  });
});

export default Router;
