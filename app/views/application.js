import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement:function(){
    var someSocket = new WebSocket("ws://localhost:4000");
    someSocket.onopen = function (event) {
      someSocket.send("Here's some text that the server is urgently awaiting!");
    };
    someSocket.onmessage=function(event){
      console.log("boom")
      console.log(event);
    }
    someSocket.onclose = function (event) {
      alert("closed")
    };
  }
});
