     //柱状图
$.extend({
    column:function (option){
        var defual={
            "id":'',
            "data":'',
            "color":['#6cbb5a'],  //柱子颜色
            "barWidth":"60%",   //柱子的宽度
            "grid_top":'5%',   //图表移动
            "grid_bottom":'15%',
            "grid_left":'5%',
            "grid_right":'5%',
            "dataname":"次数"
        };
        var opt=$.extend(defual,option)
        var name=[],value=[];
        $.each(opt.data,function(val,dom){
            name.push(dom.name);
            value.push(dom.value)
        });
        var myChart1_2 = echarts.init(opt.id.get(0));
        var option = {
                color:opt.color,
                tooltip : {
                    trigger: 'axis'
                    /*position: function (pt) {
                        return [pt[0], '10%'];
                    }*/
                },
                /*dataZoom:[
                    {
                        type:'slider',
                        start:10,
                        end:100,
                        handleStyle: {
                            color: '#fff',
                            shadowBlur:0,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },
                        bottom:'-20%'
                    },
                    {
                        type:'inside',
                        start:10,
                        end:100,
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }
                ],*/
                grid:{
                    top:opt.grid_top,
                    bottom:opt.grid_bottom,
                    left:opt.grid_left,
                    right:opt.grid_right
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data :name,
                        axisLabel: {
                            show: true,
                            interval:0,
                            textStyle: {
                            },
                            // //添加省略号
                            // formatter : function(params){
                            //     var newParamsName = "";
                            //     if(params!=undefined){
                            //         var paramsNameNumber = params.length;
                            //         newParamsName=params.substr(0,4)+'..';
                            //         return newParamsName
                            //     }
                            // }
                        },
                    }

                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:opt.dataname,
                        type:'bar',
                        barWidth:opt.barWidth,
                        markLine:{
                            silent:true
                        },
                        data:value
                    }
                ]
            };
        myChart1_2.setOption(option);
        window.onresize =myChart1_2.resize;
    },
    //横向柱状图
    horizontal_columns:function(option){
        var defalue={
            "id":'',
            "data":[],
            "barWidth":"10%",   //柱子宽度
            "color":"blue",    //柱图颜色
            "gl":"3%",
            "gr":"4%",
            "gb":"3%",
            "gt":"5%",
            "xcolor":"#333", //横坐标字的颜色
            "ycolor":"#333",//纵坐标字的颜色
            "txt_color":"#333",  //柱条中文字颜色
            "name_title":"",
            "splx":"",  //横坐标分隔线
            "sply":"", //纵坐标分隔线
            "xline":"",//横坐标线颜色
            "yline":""//纵坐标线颜色
        }
        var opt=$.extend(defalue,option);
        var myChart1_1 = echarts.init(opt.id.get(0));
        var name=[],value=[];
        $.each(opt.data,function(val,dom){
            name.push(dom.name);
            value.push(dom.value)
        });
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                position: function (pt) {
                }
            },
            grid: {
                left:opt.gl ,
                rigth:opt.gr,
                bottom:opt.gb,
                top:opt.gt,
                containLabel: true
            },
            /*dataZoom:[
                {
                    type:'slider',
                    start:10,
                    end:100,
                    handleStyle: {
                        color: '#fff',
                        shadowBlur:0,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    bottom:'-20%'
                },
                {
                    type:'inside',
                    start:10,
                    end:100,
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }
            ],*/
            xAxis:  {
                type: 'value',
                axisLabel:{
                   show:true,
                   color:opt.xcolor,
                   interval:0
                   //rotate:25
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:opt.splx
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:opt.xline
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLabel:{
                   show:true,
                   color:opt.ycolor
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:opt.sply
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:opt.yline
                    }
                },
                data:name
            },
            series: [
                {
                    name:opt.name_title,
                    type: 'bar',
                    barWidth:opt.barWidth,
                    itemStyle:{
                        normal:{
                            color:opt.color
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight',
                            color:opt.txt_color
                        }
                    },
                    data:value
                }
            ]
        };
        myChart1_1.setOption(option);
        window.onresize=myChart1_1.resize;
    },
      //饼图
    pie_chart:function (option){
        var defalue={
                "id":'',
                "data":'',
                "lgshow":true,
                "position":["10%",'10%'],
                "sername":"",
                "color":['#2983cc','#4faaf4','#0f84e3'],    //饼图圆形颜色
                "radius":['15%', '45%'],//圆图的半径
                "orient":'vertical',
                "left":'60%',
                "y":'20%',
                "txtcolor":"#000",
                "center":['25%','40%'],   //圆的位置
                "normal":false     //细线的显示与隐藏
                // label:{
                //   normal:{
                //     show:false ,
                //   },
                // },
            }
        var opt=$.extend(defalue,option);
        var myChart1_1 = echarts.init(opt.id.get(0));
        var name=[],value=[];
        $.each(opt.data,function(val,dom){
            name.push(dom.name);
            value.push(dom.value)
        });

        //颜色值的改变
        var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                    position:opt.position
                },
                legend: {
                    // show:opt.lgshow,
                    show:false,
                    orient:opt.orient,
                    left:opt.left,
                    y:opt.y,
                    data:name,
                    textStyle:{
                        color:opt.txtcolor
                    }
                },
                color:opt.color,
                series: [
                    {
                        name:opt.sername,
                        type:'pie',
                        radius: opt.radius,
                        center:opt.center,
                        avoidLabelOverlap:true,
                        data:opt.data,
                        label: {
                            normal: {
                                show:false,  //true时细线显示
                                // position: 'insideRight'
                            },
                            emphasis: {
                                show:false,
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: '15'
                                },
                            }
                        },
                        labelLine: {
                            normal: {
                                show:false
                            }
                        }
                    }
                ]
        };
        myChart1_1.setOption(option);
        window.onresize =myChart1_1.resize;
    },
    //单的折线图
    line:function (option){
        var deflus={
                id:$('#echart1'),
                data:'',
                Axis: true,
                g_left:'1%',             //折线图位置左边距离
                surname_color:'#4c4c4c',  //横坐标字体颜色
                vertical:'#4c4c4c',      //纵坐标字体颜色
                background:'none',     //折线背景颜色
                line_color:'#6cbb5a',     //折线细线颜色
                tip_name:'',
                sub:{num:2,sub:true},        //底部文字 false时为截取
                right: '1%',
                bottom: '5%',
                tops:'5%',
                rotate:0,
                toip:{
                    border:'#678def'
                }
            }
        var opts=$.extend(deflus,option);

        var name=[],value=[];
        $.each(opts.data,function(val,dom){
            name.push(dom.name);
            value.push(dom.value)
        });

        var myChart3 = echarts.init(opts.id.get(0));
        var option3 = {
                tooltip : {
                    trigger: 'axis',
                    borderColor:opts.toip.border,
                    backgroundColor:"#FFF",
                    position: function (pt) {
                        return [pt[0], '10%'];
                    },
                    borderWidth:1,
                    textStyle:{
                        color:'#333333',
                        fontSize:12
                    }
                },
                /*dataZoom:[
                    {
                        type:'slider',
                        start:10,
                        end:100,
                        handleStyle: {
                            color: '#fff',
                            shadowBlur:0,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },
                        bottom:'-20%'
                    },
                    {
                        type:'inside',
                        start:10,
                        end:100,
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }
                ],*/
                toolbox: {
                },
                grid: {
                    left:opts.g_left,
                    right:opts.right,
                    bottom:opts.bottom,
                    top:opts.tops,
                    containLabel: true
                },
                xAxis : [
                    {
                        show:opts.Axis,
                        type : 'category',
                        boundaryGap : false,
                        data:name,
                        axisLabel: {
                            show: true,
                            interval:0,
                            rotate:opts.rotate,
                            // rotate:40,//设置日期旋转
                            textStyle: {
                                color:opts.surname_color
                            },
                            formatter : function(params){

                                var newParamsName = "";
                                if(params!=undefined){
                                    var paramsNameNumber = params.length;
                                    if(!opts.sub.sub){
                                        newParamsName=params.substr(0,opts.sub.num)+'..';
                                    }else{

                                        newParamsName=params;
                                    }
                                    return newParamsName
                                }
                            }
                        },
                        axisLine:{
                            show:true
                        },
                        splitLine:{
                            show:true
                        }
                    }
                ],
                // grid: { // 控制图的大小，调整下面这些值就可以，
                //
                //     //  x: 80,
                //     //  x2: 100,
                //     //  y2: 150,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                // },
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            show:true
                        },
                        splitLine:{
                            show:true

                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color:opts.vertical
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:opts.tip_name,
                        type:'line',
                        stack: '',
                        //区域开始
                        areaStyle: {
                            normal: {
                                color:opts.background
                            }
                        },
                        //区域结束
                        itemStyle : {
                            normal : {
                              color:opts.line_color
                            }
                        },
                        markLine:{
                            silent:true
                        },
                        data:value
                    }
                ]
        };
        myChart3.setOption(option3);
        window.onresize =myChart3.resize;
    },
     round_one:function(opts){
            var defual={
                  legorient:'vertical',
                  lgx:'left',
                  lgy:'10%',
                  lgdata:['data','data'],
                  id:'',
                  onedata:[{value:335, name:''},{value:679, name:''},{value:1548, name:''}],
                  data:[],
                  tip_name:"数量",
                  center:['25%','50%'],
                  radius:['55%','30%'],
                  color:['#fcdf91','#638aef','#3ee0bc','#fdba89','#cbb1fc']  //饼图背景色
           };
          var opt=$.extend(defual,opts);
          var myChart1_2 = echarts.init(opt.id.get(0));
          var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color:opt.color,
                legend: {
                    orient:defual.legorient,
                    x:defual.lgx,
                    y:defual.lgy,
                    data:defual.lgdata,
                    itemWidth :10,
                    itemHeight:5
                },
                series: [
                    {
                        name:defual.tip_name,
                        type:'pie',
                        selectedMode: 'single',
                        radius: defual.radius,
                        center:defual.center,
                        label: {
                            normal: {
                                show:false,
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:defual.data
                    },
                    {
                        name:defual.tip_name,
                        type:'pie',
                        center:defual.center,
                        radius: ['50%', '55%'],
                        label: {
                            normal: {
                                show:false
                            }
                        },
                        data:defual.data
                    }
                ]
            };
            myChart1_2.setOption(option);
            window.onresize =myChart1_2.resize();
     },
// 攻击痕迹地图
     attmap:function(opts){
          var defual={
                  id:'',
                  data:[],
                  min:'',
                  max:'',
                  color:''
          };
          var opt=$.extend(defual,opts);
          var mychartmap1 = echarts.init(opt.id.get(0));
          var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                dataRange: {
                    min: opt.min,
                    max: opt.max,
                    x: 'left',
                    y: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    splitNumber: 0,
                    color: opt.color
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',

                },
                roamController: {
                    show: true,
                    x: 'right',
                    mapTypeControl: {
                        'china': true
                    }
                },
                // 将NaN改为0
                tooltip : {
                    trigger: 'item',
//                            formatter: '{b} : {c0}'
                    formatter: function(data){
                        //console.log(data);
                        if( !isNaN(data.value) ){
                            return data.name+"："+data.value;
                        }else {
                          return data.name+"："+0;
                        }
                    }
                },

                series: [
                    {
                      zoom:1.2,//设置地图比例
                     //  name: '攻击类型',
                      type: 'map',
                      mapType: 'china',
                      roam: true,
                      itemStyle: {
                          normal: {
                             borderColor:"none",
                              label: {
                                  show: true,
                                  textStyle:{//设置地图字体大小
                                      fontSize: 12,
                                      color: '#585858'
                                  },
                              }
                          },
                          emphasis: {
                              label: {
                                  show: true
                              }
                          }
                      },
                      data: defual.data
                    }
                ]
            };
            mychartmap1.setOption(option);
            window.onresize =mychartmap1.resize();
     },

// 观象台地图
     gxtmap:function(opts){
          var defual={
                  id:'',
                  data:[],
          };
          var opt=$.extend(defual,opts);
          var gxtmap2 = echarts.init(opt.id.get(0));
          var option = {
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
                min: 80,
                max: 500,
                show:false,
                // text:['High','Low'],
                realtime: false,
                calculable: false,
                inRange: {
                    color: ['#00ffdd','#1352ab', '#1119b0',]
                }
            },
                series: [
                    {
                      name: '被攻击次数：',
                      type: 'map',
                      mapType: 'china',
                      roam: false,
                      label: {
                                emphasis: {
                                    show: false
                                }
                            },
                      itemStyle: {
                            normal: {
                                areaColor: '#000000',
                                borderColor: '#104776'
                            },
                            emphasis: {
                                areaColor: '#4edefe'
                            }
                      },
                      data: defual.data
                    }
                ]

                // backgroundColor: 'none',
                // tooltip:{
                //     trigger: 'item'
                // },
                // legend: {
                //     orient: 'vertical',
                //     y: 'bottom',
                //     x:'right',
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                // geo: {
                //     map: 'china',
                //     label: {
                //         emphasis: {
                //             show: false
                //         }
                //     },
                //     roam: true,
                //     layoutSize:"100%",
                //     itemStyle: {
                //         normal: {
                //             areaColor: '#000000',
                //             borderColor: '#104776'
                //         },
                //         emphasis: {
                //             areaColor: '#4edefe'
                //         }
                //     }
                // },
                // series : [
                //     {
                //         name: 'pm2.5',
                //         type: 'scatter',
                //         coordinateSystem: 'geo',
                //         data: aaaa,
                //         // 圈圈大小判断
                //         symbolSize: function (val) {
                //             var one=val[2]
                //             if (1<one<=300) {
                //               return val[2] / 10;
                //             }else if (200<one<=400) {
                //               return val[2] / 20;
                //             }else if (400<one<=600) {
                //               return val[2] / 30;
                //             }else {
                //               return val[2] / 90;
                //             }
                //
                //         },
                //         label: {
                //             normal: {
                //                 formatter: '{b}',
                //                 position: 'right',
                //                 show: false
                //             },
                //             emphasis: {
                //                 show:false
                //             }
                //         },
                //         itemStyle: {
                //             normal: {
                //                 color: '#4edefe'
                //             }
                //         }
                //     },
                // ]

            };
            gxtmap2.setOption(option);
            window.onresize =gxtmap2.resize();
     },

})
