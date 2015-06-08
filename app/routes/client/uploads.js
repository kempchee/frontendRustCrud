import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    triggerUpload:function(){
      $("#upload_record_form .input_field").trigger("click")
    }
  }
});
