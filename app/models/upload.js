import DS from 'ember-data';
var attr=DS.attr;
export default DS.Model.extend({
  name:attr(),
  createdAt:attr(),
  humanCreatedAt:function(){
    return moment(this.get("createdAt")).format('MMMM Do YYYY, h:mm:ss a')
  }.property("createdAt")
});
