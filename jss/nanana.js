(function(global){
    var nagain_rc=nagain_rc || {};
 //验证Email
    nagain_rc.email = function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test($.trim(email));
    };
      //手机号验证
    nagain_rc.Mobile=function(moibles){
      var  mobl =/^1[3|4|5|8][0-9]\d{4,8}$/;
      return mobl.test($.trim(moibles));
    }
    //echarts
     nagain_rc.rchart=function(dom,option){
        var rc_dom=dom.get(0);
        var myChart1= echarts.init(rc_dom);
        myChart1.setOption(option);
        window.onresize =myChart1.resize();
     }
    //当前时间
     nagain_rc.now=function(divide){
        if(!divide){
            divide="/"
        }
        var date=new Date();
        var seperator1=divide;
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

 //获取前七天的时间
    nagain_rc.data_seven=function(ns,num){
        var num_s=7;  //前几天得天数
        if(num){
            nums=num;
        }else{
            nums=7;
        }
        var d=new Date();
        var n=new Date(d.getTime()-86400000*nums);

        var fy=n.getFullYear();
        var mn=n.getMonth()+1;
        var da=n.getDate();
        if(mn>=1&&mn<=9){
            mn='0'+mn;
        }
        if( da>=0&&da<=9){
             da='0'+da;
        }
        var da_box=fy+ns+ mn+ns+ da;
        return da_box;
    }
    nagain_rc.date_list=function(start,end){
        function getDate(datestr){
          var temp = datestr.split("-");
          var date = new Date(temp[0],temp[1],temp[2]);
          return date;
        }
        var arr_date=[];
        var startTime = getDate(start);
        var endTime = getDate(end);
        function arr_data(star,end){
            while((endTime.getTime()-startTime.getTime())>=0){
              var year = startTime.getFullYear();
              var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
              var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
              arr_date.push(year+"-"+month+"-"+day);
              startTime.setDate(startTime.getDate()+1);
            }
            return arr_date;
        }
        return arr_data(start,end);
    }
  //时间大小
    nagain_rc.time_big=function(s,e){
        var snd=new Date(s.replace("-", "/").replace("-", "/"));
        var end=new Date(e.replace("-", "/").replace("-", "/"));
        if(snd>end){
            alert('开始时间大于结束时间');
            return false;
        }
    }


 //获取文件后缀名
    nagain_rc.ext=function(filepath){
        var extStart=filepath.lastIndexOf(".");
        var ext=filepath.substring(extStart,filepath.length).toUppenagain_rcase();
        return ext;
    }
    $(".closeError").click(function(){
            $(this).parents("li").hide();
    });
    //去除所有字符串空格
    nagain_rc.blank=function(str){
        var strs='';
        for(var i=0;i<str.length;i++){
             if(str[i]!=''){
                strs+=$.trim(str[i]);
             }
        }
        return strs;
    }
    //第三个参数为false是截取前几个,true是截取后几个
    nagain_rc.inter=function(json,num,reversed){
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
    nagain_rc.json_key=function(n,v,jsons){
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
    //去除json单独数据
    nagain_rc.json_name=function(ys,name){
        var arr=[];
        $.each(ys,function(n,v){
            arr.push(v[name]);
        });
        return arr;
    }
    //alert弹出框
    nagain_rc.alerts=function(obj){
        var opts={
            id_name:'',
            width:"300px", //弹出框宽度
            height:"195px",//弹出框高度
            background:'#fff'//弹出框颜色
        }
        if(obj.id_name==undefined){
            alert('id名称为空');
            return false;
        }
        var opt=$.extend(opts,obj);
        var opt_name=opt.id_name;
        opt_name.find('.js-alert-box').css({
            'width':opt.width,
            'height':opt.height,
            'margin-left':-Math.floor(parseInt(opt.width)/2),
            'margin-top':-Math.floor(parseInt(opt.height)/2)
        });
        opt_name.show();
        opt_name.find('.js-close').click(function(){
                opt_name.hide();
        })
    }
    nagain_rc.close=function(id){
        id.hide();
    }
    //复选框
    nagain_rc.checkbox=function(className){
        className.each(function(val,dom){
            var that=$(this);
            if(that.hasClass('checked')){
                that.addClass('checked');
                that.find('input').prop('checked',true);
            }else{
                that.removeClass('checked');
                that.find('input').prop('checked',false);
            }
        })
        className.click(function(event){
            var that=$(this);
                if(that.hasClass('checked')){
                    that.removeClass('checked');
                    that.find('input').prop('checked',false);
                }else{
                    that.addClass('checked');
                    that.find('input').prop('checked',true);
                }
        });
    }
    nagain_rc.select_title=function(id,that_function){
        //点击显示隐藏事件
        id.bind('click',function(event){
            event.stopPropagation();
            var that=$(this);
            var that_ul=that.find('ul');
            that_ul.toggle();
        });
        //划过事件
        id.find('ul').bind('mouseleave',function(event){
            event.stopPropagation()
            var that=$(this);
            that.hide();
        });
        //获取值
        id.find('li').bind('click',function(event){
            event.stopPropagation();
            var that=$(this)
            var that_find=$(this).find('a');
            if(that_find.length>0){
                var that_text=that_find.text();
                var that_value=that_find.attr('value');
                id.find('.hide-select').val(that_text);
                id.find('.js-select-btn').text(that_text);
                if(that_value){
                    id.find('.hide-select,.js-select-btn').attr('values',that_value);
                }
                id.find('ul').hide();
                if(that_function){
                    that_function(that);
                }
            }else{
            }
        })
    }
    nagain_rc.againpass=function(n3RPassword,n3Password){
        var flag = true;
        var rp=n3RPassword.length;
        var pa=n3Password.length;
        if(rp>5&&rp<12&&pa>5&&rp<12){
            if(n3RPassword!=n3Password){
                flag=false;
            }
        }else{
            flag = false;
        }
        return flag;
    }
    //错误提示
    function totip(er,txt,time){
        var err=$('#js-err');
        err.slideDown('slow');
        err.addClass(er);
        err.find('span').html(txt);
        time?time=time:time=3000;
        setTimeout(function(){
            err.fadeOut('slow');
            err.removeClass(er);
            err.find('span').html('');
        },time);
    }
    nagain_rc.error=function(txt,time){
        totip('err',txt,time);
    }
    //正确提示
    nagain_rc.bingo=function(txt,time){
        totip('green',txt,time);
    }
    //警告提示
    nagain_rc.caveat=function(txt,time){
        totip('yellow',txt,time);
    }
    //loading
    nagain_rc.loading=function(doms,close){
        var load=$('#loading').html();
        doms.append(load);
        if(close){
            doms.find('#loading-box').remove();
        }
    }

    // 数字长度判断
    nagain_rc.numlength=function (number,cla) {
      var num=String(number);
      var numlength=num.length;
      if (numlength>=5) {
        var one=num.substring(0,1);
        $(cla).html(one+'w(+)');
      }else if (numlength>=6) {
        var two=num.substring(0,2);
        $(cla).html(two+'w(+)');
      }else if (numlength>=7) {
        var three=num.substring(0,3);
        $(cla).html(three+'w(+)');
      }else if (numlength>=8) {
        var four=num.substring(0,4);
        $(cla).html(four+'w(+)');
      }else {
        $(cla).html(num);
      }
    }
    //ajax
    global.nagain_rc =nagain_rc;

    //处理地图的颜色与值
    nagain_rc.data_map=function data_map(map_data){
        var arr=[];
        var color=['#4877f2','#0d4df2','#6d92f5','#91adf7','#b6c9fa','#dae4fc','#e0e0e0'];
        $.each(map_data,function(v,d){
            var d_v=d.value;
            if(d_v>90&&d_v<100){
                d.itemStyle={
                    normal:{
                        areaColor:color[0]
                    }
                }
            }else if(d_v>80&&d_v<90){
                d.itemStyle={
                    normal:{
                        areaColor:color[1]
                    }
                }
            }else if(d_v<82&&d_v>62){
                d.itemStyle={
                    normal:{
                        areaColor:color[2]
                    }
                }
            }else if(d_v>62&&d_v<42){
                d.itemStyle={
                    normal:{
                        areaColor:color[3]
                    }
                }
            }else if(d_v<42&&d_v>22){
                d.itemStyle={
                    normal:{
                        areaColor:color[4]
                    }
                }
            }else if(d_v<22&&d_v>2){
                d.itemStyle={
                    normal:{
                        areaColor:color[5]
                    }
                }
            }else if(d_v<2){
                d.itemStyle={
                    normal:{
                        areaColor:color[6]
                    }
                }
            }
            arr.push(d);
        });
        return arr;
    }


    //处理地图的颜色与值
    nagain_rc.data_map1=function data_map(map_data){
        var arr=[];
        var color=['#feba02','#fbb700','#f9c63d','#fbd46d','#fce39e','#fef1ce','#e0e0e0'];
        $.each(map_data,function(v,d){
            var d_v=d.value;
            if(d_v>1117&&d_v<3519){
                d.itemStyle={
                    normal:{
                        areaColor:color[0]
                    }
                }
            }else if(d_v>3519){
                d.itemStyle={
                    normal:{
                        areaColor:color[1]
                    }
                }
            }else if(d_v<1117&&d_v>883){
                d.itemStyle={
                    normal:{
                        areaColor:color[2]
                    }
                }
            }else if(d_v>590&&d_v<883){
                d.itemStyle={
                    normal:{
                        areaColor:color[3]
                    }
                }
            }else if(d_v<590&&d_v>296){
                d.itemStyle={
                    normal:{
                        areaColor:color[4]
                    }
                }
            }else if(d_v<296&&d_v>2){
                d.itemStyle={
                    normal:{
                        areaColor:color[5]
                    }
                }
            }else if(d_v<2){
                d.itemStyle={
                    normal:{
                        areaColor:color[6]
                    }
                }
            }
            arr.push(d);
        });
        return arr;
    }

    // 观象台地图样式
    nagain_rc.mapcolor=function () {
      var colormap=[{
          "featureType": "water",
          "elementType": "all",
          "stylers": {
              "color": "#030411"//海洋部分颜色
          }
      }, {
          "featureType": "land",
          "elementType": "all",
          "stylers": {
              "color": "#030411"//土地部分
          }
      }, {
          "featureType": "boundary",
          "elementType": "geometry",
          "stylers": {
              "color": "#064f85"
          }
      }, {
          "featureType": "railway",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "highway",//公路路线
          "elementType": "geometry",
          "stylers": {
              "color": "#004981"
          }
      }, {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#005b96",
              "lightness": 1
          }
      }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
              "visibility": "on"
          }
      }, {
          "featureType": "arterial",
          "elementType": "geometry",
          "stylers": {
              "color": "#004981",
              "lightness": -39
          }
      }, {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#00508b"
          }
      }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "green",
          "elementType": "all",
          "stylers": {
              "color": "#056197",
              "visibility": "off"
          }
      }, {
          "featureType": "subway",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "manmade",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "local",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "arterial",
          "elementType": "labels",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "boundary",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#029fd4"
          }
      }, {
          "featureType": "building",
          "elementType": "all",
          "stylers": {
              "color": "#1a5787"
          }
      }, {
          "featureType": "label",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": {
              "color": "#ffffff"
          }
      }, {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": {
              "color": "#1e1c1c"
          }
      }, {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": {
              "visibility": "on"
          }
      },{
          "featureType": "road",
          "elementType": "labels",
          "stylers": {
              "visibility": "off"
          }
      }]
      return colormap
    }
})(window)
