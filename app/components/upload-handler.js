import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement:function(){
    var controller=this.get("controller")
    var component=this;
    $("#"+this.get("formName")).fileupload({
      dataType:"json",
      done:function(e,data){
        component.get("uploadContainer").set("uploadsRemaining",component.get("uploadContainer.uploadsRemaining")-1)
        component.get("uploadContainer").set("uploadCount",component.get("uploadContainer.uploadCount")+1)
        component.get("uploadContainer.uploadQueue").shift()
        if(component.get("uploadContainer.uploadQueue").length>0){
          component.get("uploadContainer.uploadQueue")[0].data.submit()
        }
      },
      add:function(e,data){
          $(".loading-bar-container").css("visibility","visible")
          component.get("uploadContainer").set("uploadsRemaining",component.get("uploadContainer.uploadsRemaining")+1)
          var uploadId=moment().valueOf()
          component.get("uploadContainer.uploadQueue").push({id:uploadId,data:data})
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
              if(component.get("uploadContainer.uploadQueue")[0].id===uploadId){
                data.submit();
              }
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
  },
  actions:{
    triggerUpload:function(){

      $("#"+this.get("formName")+" .input_field").trigger("click")
    }
  }
});
