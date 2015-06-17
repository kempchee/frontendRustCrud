import Ember from 'ember';

export default Ember.Component.extend({
  uploadsRemaining:0,
  uploadCount:0,
  uploadQueue:[],
  isFinished:function(){
    if(this.get("uploadsRemaining")===0){
      return true
    }else{
      return false
    }
  }.property("uploadsRemaining")
});
