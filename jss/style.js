$(document).ready(function(){
    <a href="javascript:;" onClick="javascript:history.back(-1);" class="return"></a>
    //提示框开始
    // $('.alert').html('操作成功').addClass('alert-success').show().delay(1500).fadeOut();
    // $('.alert').html('操作').addClass('alert-info').show().delay(1500).fadeOut();
    // $('.alert').html('警告').addClass('alert-waring').show().delay(1500).fadeOut();
    // $('.alert').html('成功').addClass('alert-danger').show();
    // 提示框结束
    var appname_edit=$('#appname-edit');
    var version_edit=$('#version-edit');
    //编辑授权
    var sq_input=$('#sq-input'); //应用名称
    var andrio_bm=$('#andrio-bm');//安卓包名
    var ios_bm=$('#ios-bm'); //ios包名
    $('#txt-are').perfectScrollbar();
    $('.sc_app').click(function(){
        var pk = $(this).attr("id");
        window.location.href = "/statistics/user_analyzer?appid="+pk;
    });
    $('.s_nav').click(function(){
        var addr = $(this).attr("id");
        window.location.href = "/statistics/"+addr;
    });
    $('.m_nav').click(function(){
        var addr = $(this).attr("id");
        window.location.href = "/mssa/"+addr;
    });
    $('.e_nav').click(function(){
        var addr = $(this).attr("id");
        window.location.href = "/equipment/"+addr;
    });
    //成员管理
    $('#member-click').click(function(){
        var opts={
            id_name:$('#member'),
            width:'666px',
            height:'338px'
        }
        nagain_rc.alerts(opts);
        $('#scroll').perfectScrollbar();
        //验证邮箱相关操作
        $.tab($('#email-box'),function(that){
            if(nagain_rc.email(that)){
                if(forent(that)){
                    $('.js-input-err').html('');
                    return true
                }else{
                    $('.js-input-err').html('邮箱已存在');
                    return false;
                }
            }else{
                $('.js-input-err').html('邮箱格式错误');
                return false;
            }
        },'邮箱');
    });
    //循环对比验证
    function forent(that){
       var left_list=$('#scrol-top-list li'),arr=[],flag=true;
       left_list.each(function(){
           var value_str=$.trim($(this).find('.js-txtemail').html());
           arr.push(value_str);
       });
        if($.inArray(that,arr)==-1){
            flag=true;
        }else{
            flag=false;
        };
        return flag;
    }
    //获取值
    function value_yq(){
        var arr=[];
        $('#email-box li').each(function(){
            arr.push($(this).find('span').html());
        });
        return arr;
    }
    //确认邀请
    $('#ok-yq').click(function(){
        var data=value_yq();
        $.ajax({
            url:GC_URLS.sendemail,
            cache:false,
            type:'POST',
            data:{'email':data},
            success: function(response){
                if(response.success){
                    nagain_rc.close($('#member'));
                    alert('邮件发送成功!');
                }else{
                    alert('erro')
                }
            },
            dataType: 'json'
        });

    });
        //密码验证
    function err(val){
        $('#erro-txt-js').html(val);
    }
    var feed={
            password:'密码格式为6-12位没有空格的英文、数字、特殊字符',
            passwordnull:'密码不能为空',
            passworderro:'密码输入错误'
    }
    function password1(doms){
        var flag = true;
        var passwordVal=nagain_rc.blank(doms.val());
        if(passwordVal){
            if(passwordVal.length<6||passwordVal.length>13){
                err(feed.password);
                flag = false;
            }else{
                err('');
                flag=true;
            };
        }else{
            err(feed.passwordnull);
            flag = false;
        }
        return flag;
    };
    $('.ok-cp').click(function(){
        var opass = $('input[name="old_password"]').val();
        var npass1 = $('input[name="new_password1"]').val();
        var npass2 = $('input[name="new_password2"]').val();
        var again=nagain_rc.againpass(npass1,npass2);
        if(!password1($('input[name="old_password"]'))){
            return false;
        }
        if(!password1($('input[name="new_password1"]'))){
            return false;
        }
        if(!password1($('input[name="new_password2"]'))){
            return false;
        }
        if(!again){
            $('#erro-txt-js').html('两次密码不相同或密码格式错误');
            return false;
        }else{
            $('#erro-txt-js').html('');
        }
        var json_passes = {
            'old_password': opass,
            'new_password1': npass1,
            'new_password2': npass2
        }
        //这里进行新密码一致性判断
        $.ajax({
            url:GC_URLS.change_password,
            cache:false,
            type:'POST',
            data:json_passes,
            success: function(response){
                if(response.success){
                    window.location.reload();
                }else{
                    $('#erro-txt-js').html('原密码有误!');
                }
            },
            dataType: 'json'
        });
    });
    //删除邮箱
    $('.Js-del').click(function(){
        var that_id=$(this).data('id');
        console.log(that_id);
        /*$.ajax({
            url:"",
            type:"POST",
            data:{"that_id":that_id},
            async:false,
            success:function(response){
                if(response){
                  nagain_rc.bingo('删除成功',1000)
                }else{
                    nagain_rc.error('删除失败',1000);
                }
            }
        })*/
    })
    //修改密码弹出框
    $('#change-password').click(function(){
        var optas={
            id_name:$('#change-password-box'),
            width:'460px',
            height:'280px'
        }
        nagain_rc.alerts(optas);
    });
    //编辑
        //弹出框
    $('.edit').click(function(){
        var optas={
            id_name:$('#edit-click'),
            width:'400px',
            height:'260px'
        }
        nagain_rc.alerts(optas);
        var that=$(this);
        var js_sqname=that.parents('li').find('.js-sqname').html();
        var js_qversion=that.parents('li').find('.js-qversion').html();
        appname_edit.val(js_sqname);
        version_edit.val(js_qversion);
    });
    //编辑请求
    $('#version-btn').click(function(){
        var appname=$('#appname-edit').val();
        var version=$('#version-edit').val();
        $.ajax({
            url:'',
            type:'POST',
            async:false,
            data:{
                appname:appname,
                version:version
            },
            success:function(response){
                if(response){
                   nagain_rc.close($('#edit-click'));
                }else{
                    alert('修改失败');
                }
            }
        })
    })
    //快速选择下拉
    $('#faset').perfectScrollbar();
    // 设置选中事背景
    $("dl[name='db']").css('background','#E7EFF9')

    //快速选择切换
    $('.js-list-btn li').click(function(){
        var that=$(this);
        var that_name=$(this).attr('name');

        $('#'+that_name).show().siblings().hide();
        that.addClass('active').siblings().removeClass('active');
    });

    // $('.js-list-btn li').eq(0).trigger('click');
    $('.js-list-btn li').each(function(){
      var that=$(this);
      var a=that.attr('class')
      var na=that.attr('name')
      if (a=='active'&&na=='android'){
        $('#android').show()
      }
      if (a=='active'&&na=='ios'){
        $('#ios').show()
      }
    });
    //创建应用
    $('#create-appl').click(function(){
        var opt={
            id_name:$('#create-application'),
            width:'530px',
            height:'300px'
        };
        nagain_rc.alerts(opt);
    });
    $('.btn-add').click(function(){
        var opt={
            id_name:$('#create-application'),
            width:'530px',
            height:'300px'
        };
        nagain_rc.alerts(opt);
    });
    // 创建应用判断
    $('#application-add').submit(function () {
      var appname=$('#newappname').val()
      // console.log(appname)
      if(appname==""){
          alert('请填写应用名称')
          return false
      }
      var pingtai=$(".andrio-check input[type='checkbox']").is(':checked')
      // console.log(pingtai)
      if (pingtai==false) {
        alert('请选择平台')
        return false
      }
    })

    //创建应用复选框
    nagain_rc.checkbox($('.js-checkbox'));
    //左导航滚动条
    $('#left-nav').perfectScrollbar();
    //删除项目弹出框
    $('.dele-btn').click(function(){
        var data_id=$(this).data('id');
        var aler={
            id_name:$('#delete-alert'),
            width:'346px',
            height:'200px'
        };
        $('#delete-alert').find('#qd').data('id',data_id);
        nagain_rc.alerts(aler);
    })
    //确定删除
    $('#qd').click(function(){
        var that_id=$(this).data('id');
        $.ajax({
            url: GC_URLS.delete_app,
            type:'POST',
            data:{"appid": that_id},
            cache:false,
            success: function(response){
                if(response.success){
                    window.location.href = response.redirect_url;
                }
            },
            dataType: 'json'
        });
    });
    //取消删除
    $('#qx').click(function(){
        nagain_rc.close($('#delete-alert'));
    });

  //左导航弹出
  //  $('#cursor-click,#board').click(function(){
  //       animata()
  //  });
  $('#board').click(function(){
       animata()
  });
  $('#cursor-click').on({
        mouseenter : function(){
          animata()
        } ,
  }) ;
   // ajax 后台获取授权信息并存到本地
   function ajax_get_authorizeinfo(){
        $.ajax({
            url:GC_URLS.update_local_ai,
            cache:false,
            type:'POST',
            data:{},
            success: function(response){
                if (JSON.stringify(response.status) == 'false'){
                    $('.js-sqwb').removeClass('none');
                    $('#botom-left').addClass('none');
                }else{
                }
            },
            dataType: 'json'
        });
   }
   // ajax 后台获取最新sdk下载链接
   function ajax_get_newsdk(){
        $.ajax({
            url:GC_URLS.downloads_new,
            cache:false,
            type:'POST',
            data:{},
            success: function(response){
                var aa = response.ios_link;
                $('#ios_down_link').attr('href', response.ios_link)
                $('#android_down_link').attr('href', response.android_link)
            },
            dataType: 'json'
        });
   }

    var left_nav=$('#left-navs');
    var botm_lef=$('#botom-left');
    var wrap_left=$('#wrap-left');
   function animata(s){
        if(left_nav.css('left')=='0px'){
            left_nav.animate({'left':'-260px'});
            botm_lef.animate({'left':'-260px'});
            $('#create-appl').hide();
            wrap_left.hide();
        }else{
            // ajax 后台获取授权信息
            ajax_get_authorizeinfo();
            ajax_get_newsdk();
            left_nav.animate({'left':'-0px'});
            botm_lef.animate({'left':'-0px'});
            $('#create-appl').show();
            wrap_left.show();
        }
   };
   wrap_left.click(function(event){
        left_nav.animate({'left':'-260px'});
        botm_lef.animate({'left':'-260px'});
        $('#create-appl').hide();
        wrap_left.hide();
   });
   //左导航筛选
   $('#list-andriod li').click(function(){
        var that=$(this);
        that.addClass('active').siblings().removeClass('active');
        var that_href=that.attr('href');
        $(''+that_href).removeClass('none').siblings('div').addClass('none')
   });
   $('#list-andriod li:eq(0)').trigger('click');
   //授权弹出框
   $('.js-warrant').click(function(){
        var warant={
            id_name:$('#warrant'),
            width:'527px',
            height:'342px'
        };
        nagain_rc.alerts(warant);
        var that=$(this);
        var part_li=that.parents('li').find('.js-sqname').html();
        $('#sq-input').val(part_li);
        $('#warrant').data("id",that.data("id"));
        $('#warrant').data("name",that.data("name"));
   });
   $('#sq-btn').click(function(){
        var star=$('#start').val();//开始时间
        var end=$('#end').val();//结束时间
        var enty=star+' - '+end; //时间拼接
        nagain_rc.time_big(star,end); //对比时间
        var sq_val=sq_input.val();//应用名称
        var andrio_val=andrio_bm.val(); //安卓包名
        var ios_b=ios_bm.val(); //ios包名
        var uuid=$('#warrant').data('name');
        var data = {
            'appname': sq_val,
            'uuid': uuid,
            'apname': andrio_val,
            'ipname': ios_b,
            'effectime': enty,
        }

        if(andrio_val!=""||ios_b!=""){
            sq_ajax(data)
        }else{
            alert('包名至少填写一项');
            return false;
        }
   });

   function sq_ajax(data){
        $.ajax({
            url:GC_URLS.screateauthorize,
            cache:false,
            type:'POST',
            data:data,
            success: function(response){
                if(response.success){
                    window.location.reload();
                }else{
                    $('#sqtck').html('创建失败!');
                }
            },
            dataType: 'json'
        });
    }
    //授权日历插件
    $('#end').datepicker();
    $('#start').datepicker();
});
