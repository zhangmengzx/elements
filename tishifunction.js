function inputNull(inputText,msg){
    var flag = true
    if(!inputText){
        enterprise.showFntext2_error(msg,3000);
        flag = false
    }
    return flag
}
　　　
    $("#submit-form").on('click',function () {
      var name = inputNull($("#name").val(),"请输入名称")
        if(!name){
            return false
        }
      var md = inputNull($("#md").val(),'请输入MD5')
        if (!md){
        	return false
        }
      var describe = inputNull($("#describe").val(),"请输入描述")
          if(!describe){
              return false
          }
          console.log("aaa",$("#name").val())
      // $.ajax({
      //      type: "post",
      //      url: "/accounts/signin/",
      //      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      //      data: {
      //      "name":$("#name").val(),
      //      "md":$("#md").val(),
      //      "describe":$("#describe").val()
      //    },
      //      success: function (res) {
      //        console.log(res);
      //      }
      // });
    });
