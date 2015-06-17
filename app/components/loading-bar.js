import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["loading-bar-container"],
  classNameBindings:["isFinished:finished:not-finished"],
  isFinished:Ember.computed.alias("uploadContainer.isFinished"),
  finished:function(){
    if(this.get("isFinished")){
      return "progress-bar-success"
    }else{
      return ""
    }
  }.property("isFinished"),
  actions:{
    closeLoadingBar:function(){
      this.$().css("visibility","hidden");
    }
  }
});
