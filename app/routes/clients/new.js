import Ember from 'ember';
export default Ember.Route.extend({
  actions:{
    createClient:function(){
      var route=this;
      jQuery.ajax({
        method:"POST",
        url:"http://localhost:3000/clients",
        data:JSON.stringify({client:{
          id:0,name:this.get("controller.name")}
          }),
        success:function(client){
          route.store.push("client",client);
          route.transitionTo("clients");
        },error:function(){

        }
      })
    }
  }
});
