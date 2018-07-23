(function(global) {
    var enterprise =enterprise || {};
    
    enterprise.MIN_LENGTH_OF_COMMENT = 1;
    enterprise.FLASH_DOWNLOAD_URL = 'http://www.adobe.com/go/getflashplayer';
    // Default runtime
    enterprise.DEFAULT_RUNTIMES = 'gears,html5,flash,silverlight,browserplus,**html4**';
    enterprise.MAX_FILE_SIZE_OF_UPLOAD = '10240kb'; //10mb
    //
    enterprise.PLUPLOAD_ERROR_MESSAGES = {
      DEFAULT:'发生错误, 请检查后再试',
      INIT_ERROR:'没有找到上传插件，你可能需要安装 <a target="_blank" href="' + enterprise.FLASH_DOWNLOAD_URL + '">Adobe Flash</a>',
      HTTP_ERROR:'网络错误',
      FILE_SIZE_ERROR: '上传文件大于100M',
      FILE_EXTENSTION_ERROR: '文件格式错误',
      REP_APP:'已经上传此版本APP',
      PACKAGE_ERR:'包名不一致'
    };
    //验证Email
    enterprise.validateEmail = function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test($.trim(email));
    };

    //验证URL
    enterprise.validateURL = function(textval) {
      var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
      return urlregex.test(textval);
    };

    // 获取cookie
    enterprise.getCookie = function(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    };
    //手机号验证
    enterprise.Mobile=function(moibles){
      var  mobl =/^1[3|4|5|8][0-9]\d{4,8}$/;
      return mobl.test($.trim(moibles));
    }
    // Plupload实例化的简单包装
    enterprise.uploader = function(options, onError, onFilesAdded, onFileUploaded) {
        var uploader = new plupload.Uploader({
            url : options.url,
            chunk_size:options.chunk_size,
            runtimes : enterprise.DEFAULT_RUNTIMES || options.runtimes,
            container: options.container || 'pickfiles_wrapper',
            browse_button : options.browse_button || 'pickfiles',
            flash_swf_url : '/static/lib/plupload/js/Moxie.swf',
            silverlight_xap_url: '/static/lib/plupload/js/Moxie.xap',
            multipart_params: options.multipart_params,
            multipart: true || options.multipart,
            unique_names : false || options.unique_names,
            multiple_queues : false || options.multiple_queues,
            headers : {'X-Requested-With' : 'XMLHttpRequest',
                'X-CSRFToken' : options.csrf_token ? options.csrf_token : enterprise.getCookie('csrftoken')
            },
            filters : options.filters || {
                        mime_types: [{
                            title : "图片文件",
                            extensions : "jpg,png,jpeg,gif,bmp,JPG,PNG,JPEG,GIF,BMP,pdf,tiff"}],
                        max_file_size : enterprise.MAX_FILE_SIZE_OF_UPLOAD,
                        prevent_duplicates : true
                    },
            init : options.init
        });
        // Flash run time dose not support chunk very well.   
        if (options.chunk_size) { uploader.chunk_size = options.chunk_size; }
        return uploader;
    };

    enterprise.getLocation = function(defaultLocation) {
        return window.location.pathname.split('/')[1] || defaultLocation || 'index';
    };
    //时间对比
    enterprise.time_big=function(s,e){
        var snd=new Date(s.replace("-", "/").replace("-", "/"));
        var end=new Date(e.replace("-", "/").replace("-", "/"));
        if(snd>end){
            alert('开始时间大于结束时间');
            return false;
        }
    }
    //当前时间
     enterprise.now=function(){
        var date=new Date();
        var seperator1='-';
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var strDate=date.getDate();
        if(month>=1&&month<=9){
            month='0'+month;
        }
        if( strDate>=0&&strDate<=9){
             strDate='0'+strDate;
        }
        var currentdate=year+seperator1+month+seperator1+strDate;
        return currentdate;
     }

    enterprise.showFntext2_error = function(text, waiting, callback) {
        $('li#fntext2_delete > span.fntext2_notice_span').html(text);
        $('li#fntext2_delete').show();
        setTimeout(function() {
            $('li#fntext2_delete').fadeOut('slow');
            if (typeof callback === 'function') {
                callback.call();
            }
        }, waiting || 5000);
    };
    enterprise.openPop = function(cont){
        $(".pop").fadeIn();
        cont.fadeIn();
    }
    enterprise.closePop = function(cont){
        $(".pop").fadeOut();
        cont.fadeOut();
    }
    enterprise.showFntext2_bingo = function(text, waiting, callback) {
        $('li#fntext2_bingo > span.fntext2_notice_span').html(text);
        $('li#fntext2_bingo').show();
        setTimeout(function() {
            $('li#fntext2_bingo').fadeOut('slow');
            if (typeof callback === 'function') {
                callback.call();
            }
        }, waiting || 5000);
    };
    enterprise.countDown=function(secs){
        if(--secs>0){     
            setTimeout("enterprise.countDown()",1000)
        }else{
            window.location.reload();
        }
    }
    //文档插件
    enterprise.unit=function(id){
        var ue = UE.getEditor(id,{
            autoHeightEnabled: true,
            autoFloatEnabled: true,
            initialFrameWidth:'100%',
            initialFrameHeight:300,
            toolbars: [
                ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc','simpleupload','insertimage']
            ],
            'serverUrl': '/ueditor/controller/?imagePathFormat=uploadimg%2F&filePathFormat=upload'
        });
    }
    //获取文件后缀名
    enterprise.ext=function(filepath){
        var extStart=filepath.lastIndexOf(".");
        var ext=filepath.substring(extStart,filepath.length).toUpperCase();
        return ext;
    }
    $(".closeError").click(function(){
            $(this).parents("li").hide();
    });
    //去除所有字符串空格
    enterprise.blank=function(str){
        var strs='';
        for(var i=0;i<str.length;i++){
             if(str[i]!=''){
                strs+=$.trim(str[i]);
             }
        }
             return strs;

    }
    //file选择apk格式验证
    enterprise.file=function(dom,format,method,erro){
        dom.change(function(){
            var that_val=$(this).val();
            var v_g=enterprise.ext(that_val);
            if(v_g!=format){
                enterprise.showFntext2_error('请选择'+format.substr(1)+'文件');
                $(this).val('');
                if(erro){erro($(this))}
                return false;
            }else{
                method($(this),that_val)
            }
        })
    }
    //旋转插件
    enterprise.rotate=function(id){
        function rotation(){
           id.rotate({
              angle:0, 
              animateTo:360, 
              callback: rotation,
              easing: function (x,t,b,c,d){
                  return c*(t/d)+b;
              }
           });
        }
        rotation()
    }
    
    //图片格式选择验证
    enterprise.img_file=function(dom,success,erro){
        dom.change(function(){
            var filepath=$(this).val();
            var v_g=enterprise.ext(filepath);
            if(v_g!=".BMP"&&v_g!=".PNG"&&v_g!=".GIF"&&v_g!=".JPG"&&v_g!=".JPEG"){
                enterprise.showFntext2_error('图片限于png，gif，jpeg，jpg格式');
                if(erro){erro($(this),filepath)};
                return false;
            }else{
                if(success){success($(this),filepath)};
            }
        });
    }
    //json字符串的截取
    //第三个参数为false是截取前几个,true是截取后几个
    enterprise.inter=function(json,num,reversed){
        var channer=[];
        if(json.length>num){
            if(reversed){
                for(var i in json){
                    if(i>num){
                        channer.push(json[i]);
                    }
                }
            }else{
                for(var i in json){
                    if(i<num){
                        channer.push(json[i]);
                    }
                }
            }
        }else{
            channer=json;
        }
        return channer;
    }
    //更改json对应的key名称
    enterprise.json_key=function(n,v,jsons){
        var name=[],value=[],data=[];
        for(var i in jsons){
            name.push(jsons[i][n]);
            value.push(jsons[i][v])
        }
        for(var i=0;i<name.length;i++){
            var obj={}
            obj.name=name[i];
            obj.value=value[i];
            data.push(obj)
        }
        return data; 
    }
    enterprise.checkbox=function(className,mess){
        var opt={"num":1};
        var ext=$.extend(opt,mess);
        if(ext.num==1){
            if(className.hasClass('checked')){
                className.addClass('checked');
                className.find('input').attr('checked',true);
            }else{
                className.removeClass('checked');
                className.find('input').attr('checked',false);
            } 
        }
        className.click(function(){
            var that=$(this);
            var data_name=that.data('name');
            if(data_name==false){
                return false;
            }else{
                if(that.hasClass('checked')){
                    that.removeClass('checked');
                    that.find('input').attr('checked',false);
                }else{
                    that.addClass('checked');
                    that.find('input').attr('checked',true);
                } 
            }
        }); 
    }
    //echarts非空验证
    enterprise.echar=function(val){
        var flags=val,a_v=[];
        if(val){
            for(var a in val){
                a_v.push(val[a])
            }
            if(a_v.length>0){
                flags=val;
            }else{
                flags='';
            }
        }else{
            flags='';
        }
        return flags;
    }
    //非空验证
    enterprise.if_echart=function(v,d,f){
        var models=enterprise.echar(v);
        if(models!=''){
            f(models,d);
        }else{
            d.html('暂无数据');
        }
    }
    enterprise.csrf=function(){
        var input=$('#csrf input').val();
        return input;
    }
    global.enterprise =enterprise;

})(window);
