import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement:function(){
    console.log(this.get("uploadContainer"))
    var component=this;
    var someSocket = new WebSocket("ws://localhost:4000");
    someSocket.onopen = function (event) {
      someSocket.send("Here's some text that the server is urgently awaiting!");
    };
    someSocket.onmessage = function (event) {
      console.log(event.data);
      var data=JSON.parse(event.data)
      console.log(data);
      console.log(data.new_socket_id);
      console.log(data.message)
      console.log(data.upload_status)
      if(data.new_socket_id){
        component.set("uploadStatusSocketId",data.new_socket_id)
      }else if(data.message==="transactions_created"){
          Ember.run(function(){
              $(".loading-bar-container").css("visibility","visible")
              $("#loading-bar").find(".progress-bar").css('width', data.upload_status + '%')
              //$("#loading-bar").find(".progress-bar").html(data.upload_status + '%')
          })
        }
      someSocket.onclose = function (event) {
        alert("closed")
      };
    }
}
});
