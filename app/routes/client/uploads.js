import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    triggerUploadRecords:function(){
      $("#upload_records_form .input_field").trigger("click")
    },
    triggerUploadRecordsInserts:function(){
      $("#upload_records_inserts_form .input_field").trigger("click")
    },
    triggerUploadTransactionsInserts:function(){
      $("#upload_transactions_inserts_form .input_field").trigger("click")
    }
  }
});
