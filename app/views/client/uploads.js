import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement:function(){
    var controller=this.get("controller")
    var view=this;
    $("#upload_record_form").fileupload({
      dataType:"json",
      done:function(e,data){
        alert("success")
        console.log(data)
      },
      add:function(e,data){
          var fileTypesOk=true;
          var fileSizeOk=true;
          data.files.forEach(function(file){
            //if(file.type=="text/csv"){
          //  }else{
            //  fileTypesOk=false
          //  }
            if(file.size/(1024*1024)<=100){
              fileSizeOk=true
            }else{
              fileSizeOk=false
            }
          })
          if(fileTypesOk){
            if(fileSizeOk){
              data.submit();
            }else{
              //controller.get("controllers.application").send("showTopAlert","You must upload a file <100 MB.  Please split the file up and try again.","alert alert-danger alert-dismissible","devise-alert")
              $(data.context).css("visibility","hidden")
            }
          }else{
            //controller.get("controllers.application").send("showTopAlert","You must upload a csv file.","alert alert-danger alert-dismissible","devise-alert")
            $(data.context).css("visibility","hidden")
          }
      },
      fail:function(e,data){

      }
    })
  }
});
