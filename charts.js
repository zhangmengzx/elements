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
      "grid_left":'15%',
      "grid_right":'5%',
      "dataname":"次数",
      "textcolor":'#fff',
      "xAxisName":'',
      "yAxisName":'',

      "xRotate":0
  };
  var opt=$.extend(defual,option)
  var name=[],value=[];
  $.each(opt.data,function(val,dom){
      name.push(dom.name);
      value.push(dom.value)
  });
  var myChart1_2 = echarts.init(opt.id.get(0));
  var option = {
          tooltip : {
              trigger: 'axis'
          },
          grid:{
              top:opt.grid_top,
              bottom:opt.grid_bottom,
              left:opt.grid_left,
              right:opt.grid_right
          },
          calculable : true,
          xAxis : [
              {
                  name:opt.xAxisName,
                  nameTextStyle:{
                    color:"#fff",
                    padding : [0, 0, -30, -20],
                  },
                  type : 'category',
                  data :name,
                  axisTick: {
                      show: false
                  },
                 axisLine:{
                   lineStyle: {
                       type: 'solid',
                       color: '#33426D',//左边线的颜色
                       width:'2'//坐标线的宽度
                   }
                 },
                  axisLabel: {
                      show: true,
                      interval:0,
                      rotate:opt.xRotate,
                      textStyle: {
                        color:opt.textcolor
                      },
                  },
              }

          ],
          yAxis : [
              {
                name:opt.yAxisName,
                nameTextStyle:{
                  color:"#fff"
                },
                  type : 'value',
                  axisLabel: {
                      // formatter: '{value} %',//显示百分比
                      textStyle: {
                        color:opt.textcolor
                      },
                  },
                  axisLine:{
                    lineStyle: {
                        type: 'solid',
                        color: '#33426D',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                  },
                  axisTick: {
                      show: false
                  },
                  splitLine:{
                      show:true,
                      lineStyle:{
                          type: 'dashed',
                          color:'#33426D'
                      },
                  },
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
                  data:value,
                  //barGap: 1, //柱子之间间距
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(99,164,230,1)'
                          }, {
                              offset: 1,
                              color:'rgba(39,138,224,1)'
                          }]),
                          opacity: 1,
                      }
                  }
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
      'title':'',
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
      "yline":"",//纵坐标线颜色
      "xWidth":"",//横坐标线宽度
      "yWidth":"",//纵坐标线宽度
      "xfalse":'',
      "num":'',
      "barCategoryGap":"20%",
      'yzline':'',//y轴线是否显示
  }
  var opt=$.extend(defalue,option);
  var myChart1_1 = echarts.init(opt.id.get(0));
  var name=[],value=[];
  $.each(opt.data,function(val,dom){
      name.push(dom.name);
      value.push(dom.value)
  });
  var option = {
      title:{
        text:opt.title,
        textStyle:{ //设置主标题风格
          color:'#fff',//设置主标题字体颜色
          fontSize:14
        }
      },
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
          right:opt.gr,
          bottom:opt.gb,
          top:opt.gt,
          containLabel: true
      },
      xAxis:  {
          show:opt.xfalse,
          type: 'value',
          axisLabel:{
             show:true,
             color:opt.xcolor,
             interval:0,
             fontSize:'14px'
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
                  color:opt.xline,
                  width:opt.xWidth
              }
          },
          axisTick:{
            show:false
          },
          data:name
      },
      yAxis: {
          type: 'category',
          axisLabel:{
             show:true,
             color:opt.ycolor
          },
          splitLine:{
              show:false,
              lineStyle:{
                  color:opt.sply
              }
          },
          axisLine:{
              show:opt.yzline,
              lineStyle:{
                  color:opt.yline,
                  width:opt.yWidth
              }
          },
          axisTick:{
            show:false
          },
          data:name
      },
      series: [
          {
              name:opt.name_title,
              type: 'bar',
              barWidth:opt.barWidth,
              "barCategoryGap":opt.barCategoryGap,
              itemStyle:{
                  normal:{
                      color:opt.color
                  }
              },
              label: {
                  normal: {
                    show: opt.num,
                    position: 'right',
                    color:'#fff'
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
            'title':false,
            'titlecolor':'',
            'text':'',
            "lgshow":false,
            "line":true,
            "position":"",
            "sername":"",
            "color":['#D551F2','#F29422','#16FDFF','#B6DA1E','#2D81E4'],    //饼图圆形颜色
            "radius":['15%', '45%'],//圆图的半径
            "orient":'',
            "left":'',
            "y":'',
            "txtcolor":"",
            "borderColor":"rgba(0,0,0,0)",
            "borderWidth":0,
            "length":12,//视觉引导线第一段的长度。
            "length2":10,//视觉引导项第二段的长度。
            "center":['50%','40%'],   //圆的位置
            "normal":false ,    //细线的显示与隐藏
            "labelEmFs":'15', //选中状态下label的fontSize
            "labelEmFw":'15',//选中状态下label的fontWeight
            "labelFormatter":'{b}',//label标签的显示内容
            "labelColor":"",//label标签的颜色
            "labelLineColor":"",//labelLine的颜色
            "roseType": '',//是否渲染为玫瑰图
            "center":['50%','40%'],   //圆的位置
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
        title: {
           show:opt.title,
           text: opt.text,
           x: 'center',
           y: '30%',
           textStyle: {
               color: opt.titlecolor,
           }
       },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position:opt.position
        },
        legend: {
            show:opt.lgshow,
            // orient:opt.orient,
            left:"center",
            // y:opt.y,
            bottom:10,
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
                avoidLabelOverlap:false,
                "roseType":opt.roseType,
                data:opt.data,
                itemStyle:{
                  normal:{
                    borderColor:opt.borderColor,
                    borderWidth:opt.borderWidth
                  }
                },
                label: {
                    normal: {
                        show:opt.line,  //true时细线显示
                        // position: 'insideRight'
                        formatter:opt.labelFormatter,
                        color:opt.labelColor
                    },
                    emphasis: {
                        show:false,
                        textStyle: {
                            fontSize: opt.labelEmFs,
                            fontWeight: opt.labelEmFw
                        },
                    }
                },
                labelLine: {
                    normal: {
                        show:true,
                        length:opt.length,
                        length2:opt.length2,
                        // lineStyle:{
                        //   color:opt.labelLineColor
                        // }

                    }
                }
            }
        ]
    }
    myChart1_1.setOption(option);
    window.onresize =myChart1_1.resize;
},

//温度计
thermometer:function (option) {
  var defual={
    "id":'',
  };
  var opt=$.extend(defual,option)
  var name=[],value=[];
  $.each(opt.data,function(val,dom){
      name.push(dom.name);
      value.push(dom.value)
  });
  var mychartmeter = echarts.init(opt.id.get(0));
  var myColor=['#D551F2','#F29422','#16FDFF','#B6DA1E','#2D81E4'];
  var option={
    // backgroundColor:'#0e2147',
           grid: {
               left: '15%',
               top:'0',
               right: '8%',
               bottom: '0%',
               containLabel: true
           },
           xAxis: [{
               show: false,
           }],
           yAxis: [{
                   axisTick:'none',
                   axisLine:'none',
                   offset:'27',
                   axisLabel: {
                           textStyle: {
                               color: '#ffffff',
                               fontSize:'14',
                           }
                       },
                   data:name
               }, {
                   axisTick:'none',
                   axisLine:'none',
                   axisLabel: {
                           textStyle: {
                               color: '#ffffff',
                               fontSize:'14',
                           }
                       },
                   data: value
               },
             ],
           series: [{
               name: '条',
               type: 'bar',
               yAxisIndex: 0,
               data: value,
               label:{
                     normal:{
                       show:false,
                       position:'right',
                       formatter:function(param){
                         return param.value + '%';
                       },
                       textStyle:{
                          color: '#ffffff',
                          fontSize:'16',
                       }
                     }
               },
               barWidth: 3,
               itemStyle: {
                   normal: {
                       color: function(params) {
                               var num=myColor.length;
                               return myColor[params.dataIndex%num]
                       },
                   }
               },
               z: 2
           },
           {
               name: '外圆',
               type: 'scatter',
               hoverAnimation: false,
               data: [0,0,0,0,0],
               yAxisIndex: 1,
               symbolSize: 12,
               itemStyle: {
                   normal: {
                       color: function(params) {
                               var num=myColor.length;
                               return myColor[params.dataIndex%num]
                       },
                       opacity: 1,
                   }
               },
               z: 2
           }]
  }
  mychartmeter.setOption(option);
  window.onresize =mychartmeter.resize;
},

// 彩虹色极坐标
rainbowcoordinate:function (option) {
  var defalue={
          "id":'',
          "data":'',
          "color":['#D551F2','#F29422','#16FDFF','#B6DA1E','#2D81E4'],    //饼图圆形颜色
      }

  var opt=$.extend(defalue,option);
  var myChart10 = echarts.init(opt.id.get(0));
  var name=[],value=[];
  $.each(opt.data,function(val,dom){
      name.push(dom.name);
      value.push(dom.value)
  });
  var data=opt.data
  var color=['#D551F2','#F29422','#16FDFF','#B6DA1E','#2D81E4']
  var res=[],nameArr=[];
  data.map(function(item,index){
      res.push({
          value:item.value,
          itemStyle: {
                  normal: {
                      color: color[index]
                  }
              }
      });
      nameArr.push(item.name);
  });
  var option = {
    angleAxis: {
        interval: 1,
        type: 'category',
        data: nameArr,
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#00c7ff",
            margin: 8,
            fontSize: 12
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            // formatter: '{value} %',
            formatter: value,
            show: true,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {
       radius:['70']
    },
    series: [{
        type: 'bar',
        barWidth:'20',              //---柱形宽度
        barCategoryGap:'20%',       //---柱形间距
        data: res,
        coordinateSystem: 'polar',
    }],
  };
  myChart10.setOption(option);
  window.onresize =myChart10.resize;
},

//单的折线图
line:function (option){
    var deflus={
            id:$('#echart1'),
            data:'',
            Axis: true,
            g_left:'1%',             //折线图位置左边距离
            surname_color:'#FFF',  //横坐标字体颜色
            vertical:'#FFF',      //纵坐标字体颜色
            background:'none',     //折线背景颜色
            line_color:'#16FDFF',     //折线细线颜色
            tip_name:'',
            sub:{num:2,sub:true},        //底部文字 false时为截取
            right: '5%',
            bottom: '5%',
            tops:'5%',
            "xAxisName":'',
            "yAxisName":'',
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
            tooltip : {//提示框样式
                trigger: 'axis',
                // borderColor:opts.toip.border,
                // backgroundColor:"#FFF",
                position: function (pt) {
                    return [pt[0], '10%'];
                },
                borderWidth:1,
                // textStyle:{
                //     color:'#333333',
                //     fontSize:12
                // }
            },
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
                    splitLine:{show: false},//去除网格线
                    show:opts.Axis,
                    type : 'category',
                    name:opts.xAxisName,
                    nameTextStyle:{
                      color:"#fff",
                      padding : [0, 0, -30, 0],
                    },
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
                      lineStyle: {
                          type: 'solid',
                          color: '#33426D',//左边线的颜色
                          width:'2'//坐标线的宽度
                      }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:opts.yAxisName,
                    nameTextStyle:{
                      color:"#fff"
                    },
                    axisLine:{
                      lineStyle: {
                          type: 'solid',
                          color: '#33426D',//左边线的颜色
                          width:'2'//坐标线的宽度
                      }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type: 'dashed',
                            color:'#33426D'
                        },
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

//  位置地图
position_map:function (option) {
  var defalue={
    "id":'',
    "data":[],
  }
  var opt=$.extend(defalue,option);
  var mychartmap = echarts.init(opt.id.get(0));
  var name=[],value=[];
  $.each(opt.data,function(val,dom){
      name.push(dom.name);
      value.push(dom.value)
  });

  var option={
    //  backgroundColor: '#404a59',
     title: {

     },
     tooltip: {
         show:false,
         trigger: 'item',
         formatter: function (params) {
             return params.name + ' : ' + params.value[2];
         }
     },
     legend: {
         orient: 'vertical',
         show:false,
         y: 'bottom',
         x:'right',
         data:['pm2.5'],
         textStyle: {
             color: '#fff'
         }
     },
     visualMap: {
         show:false,
         min: 0,
         max: 200,
         calculable: true,
         color: ['rgb(22,253,255)'],
         textStyle: {
             color: '#fff'
         }
     },
     geo: {
         map: 'china',
         label: {
             emphasis: {
                 show: true,
                 color:'#FFF'
             }
         },
         itemStyle: {
             normal: {
                 areaColor: 'rgba(6,11,17,0.1)',
                 borderColor: 'rgb(37,106,188)'
             },
             emphasis: {
               areaColor:{
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 0, color: 'rgb(108,180,249)' // 0% 处的颜色
                      }, {
                          offset: 1, color: 'rgb(43,150,241)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                  }
             }
         }
     },
     series: [
         {
             name: 'pm2.5',
             type: 'scatter',
             coordinateSystem: 'geo',
             data: opt.data,
             symbolSize: 3,
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             itemStyle: {
                 emphasis: {
                     borderColor: '#fff',
                     borderWidth: 1
                 }
             }
         }
     ]
  }
  mychartmap.setOption(option);
  window.onresize=mychartmap.resize;
},

// 车辆位置-百度地图
pos_bmap: function (opts) {
    var defual = {
        id: '',
        data: [],
        symbol: []
    };
    var opt = $.extend(defual, opts);
    var topmap = echarts.init(opt.id.get(0));
    var option = {
        bmap: {
            // center: [116.46, 39.92],
            center: [100.46, 39.92],
            zoom: 5,
            roam: true,
            enableMapClick: false,
            mapStyle: {
                'style':'clw',
                'styleJson': [
                    {
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#050c19'
                        }
                    },
                    {
                        'featureType': 'land',
                        'elementType': 'geometry',
                        'stylers': {
                            // 'color': '#060c19'
                            'color': '#050c19',
                            'fillOpacity': 0.3
                            // 'color':'rgba(6,12,25,0.1)'
                        }
                    },
                    {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#2870c6'
                        }
                    },
                    {
                        'featureType': 'arterial',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#060c19'
                        }
                    },
                    {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#08304b'
                        }
                    },
                    {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'lightness': -70
                        }
                    },
                    {
                        'featureType': 'building',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'all',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#857f7f'
                        }
                    },
                    {
                        'featureType': 'all',
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'building',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#022338'
                        }
                    },
                    {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#062032'
                        }
                    },
                    {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#266cbe'
                        }
                    },
                    {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#022338'
                        }
                    },
                    {
                        'featureType': 'label',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }
                ]
            }
        },
        series: [
            {
                name: '',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: opt.data[0],
                symbol: opt.symbol[0],
                // symbol:'circle',
                // symbolSize: [23,10],
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        color: "#fff",
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                }
            },
            {
                name: '',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: opt.data[1],
                symbol: opt.symbol[1],
                // symbol:'circle',
                // symbolSize: function (val) {
                //     return val[2];
                // },
                // symbolSize: [23,10],
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        color: "#fff",
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                }
            }
        ]
    };
    topmap.setOption(option);
    window.onresize = topmap.resize();
},
//  车辆位置-中国地图
pos_china_map:function(opts){
         var defual={
                 id:'',
                 // myChart:'',
                 series:[], //叠加的不同地图种类
                 tooltip:'', //提示框
                 visualMap:'',
                 regions:[] //geo中特殊区域
         };
         var opt=$.extend(defual,opts);
         var topmap = echarts.init(opt.id.get(0));
         // var topmap=opt.myChart;
         var option={
           tooltip:opt.tooltip,
           visualMap:opt.visualMap,
           geo: {
                     map: 'china',
                     label: {
                         emphasis: {
                             show: true,
                             color:'#fff'
                         }
                     },
                     roam: false,
                     zoom:1.2,
                     itemStyle: {
                       normal: {
                           areaColor: 'rgba(0,0,0,0.2)',
                           borderColor: '#2c7edf',
                           borderWidth:1.5
                       },
                        emphasis: {
                            // areaColor: '#369af2'
                            areaColor:{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgb(108,180,249)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgb(43,150,241)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                      },
                      regions:opt.regions

                 },
             series:opt.series

         };
         topmap.setOption(option);

         window.onresize =topmap.resize();
       },
// 中国地图-scatter
pos_china_map_scatter:function(opts){
         var defual={
                 id:'',
                 scatterData:[],//散点地图数据
                 effectSeData:[],//涟漪散点地图数据
                 tooltip:'', //提示框
                 visualMap:'',
                 regions:'' ,//geo中特殊区域
                 symSize:'',
                 move:''
         };
         var opt=$.extend(defual,opts);
         var topmap = echarts.init(opt.id.get(0));
         var option={
           tooltip:opt.tooltip,
           visualMap:opt.visualMap,
           geo: {
                     map: 'china',
                     label: {
                         emphasis: {
                             show: true,
                             color:'#fff'
                         }
                     },
                     roam: opt.move,
                     zoom:1.2,
                     itemStyle: {
                       normal: {
                           areaColor: 'rgba(0,0,0,0.2)',
                           borderColor: '#2c7edf',
                           borderWidth:1.5
                       },
                       emphasis: {
                           // areaColor: '#369af2'
                           areaColor:{
                               type: 'linear',
                               x: 0,
                               y: 0,
                               x2: 0,
                               y2: 1,
                               colorStops: [{
                                   offset: 0, color: 'rgb(108,180,249)' // 0% 处的颜色
                               }, {
                                   offset: 1, color: 'rgb(43,150,241)' // 100% 处的颜色
                               }],
                               globalCoord: false // 缺省为 false
                           }
                       }
                      },
                      regions:opt.regions

                 },
             series:[
                 {
                       name: '',
                       type: 'scatter',
                       coordinateSystem: 'geo',
                       data: opts.scatterData,
                       symbolSize:opt.symSize,
                       label: {
                           normal: {
                               formatter: '{b}',
                               position: 'right',
                               show: false
                           },
                           emphasis: {
                               show: true
                           }
                       },
                       itemStyle: {
                           normal: {
                               color: '#16fdff'
                           }
                       }
                   },
                   {
                       name: 'Top 5',
                       type: 'effectScatter',
                       coordinateSystem: 'geo',
                       data: opts.effectSeData,
                       symbolSize:opt.symSize,
                      //  symbolSize: function (val) {
                      //      return val[2]['frequency']*2;
                      //  },
                       showEffectOn: 'render',
                       rippleEffect: {
                           brushType: 'stroke'
                       },
                       hoverAnimation: true,
                       label: {
                           normal: {
                               formatter: '{b}',
                               position: 'right',
                               show: true
                           }
                       },
                       itemStyle: {
                           normal: {
                               color: '#16fdff',
                               shadowBlur: 10,
                               shadowColor: '#05C3F9'
                           }
                       },
                       zlevel: 1
                   },
                       ]

         };
         topmap.setOption(option);
         window.onresize =topmap.resize();
       },
// 中国地图-map
pos_china_map_cor:function(opts){
         var defual={
                 id:'',
                 data:[],
                 tooltip:'', //提示框
                 visualMap:'',
         };
         var opt=$.extend(defual,opts);
         var topmap = echarts.init(opt.id.get(0));
         // var topmap=opt.myChart;
         var option={
           tooltip:opt.tooltip,
           visualMap:opt.visualMap,
           series:[
                       {
                           type: 'map',
                           mapType: 'china',
                           // coordinateSystem:"geo",
                           selectedMode : 'single',
                           label: {
                               emphasis: {
                                   show: true,
                                   color:'#fff'
                               }
                           },
                           roam: false,
                           zoom:1.2,
                           itemStyle: {
                             normal: {
                                 areaColor: 'rgba(0,0,0,0.2)',
                                 borderColor: '#2c7edf',
                                 borderWidth:1.5
                             },
                               emphasis: {
                                 areaColor:{
                                     type: 'linear',
                                     x: 0,
                                     y: 0,
                                     x2: 0,
                                     y2: 1,
                                     colorStops: [{
                                         offset: 0, color: 'rgb(108,180,249)' // 0% 处的颜色
                                     }, {
                                         offset: 1, color: 'rgb(43,150,241)' // 100% 处的颜色
                                     }],
                                     globalCoord: false // 缺省为 false
                                 }
                               }
                           },
                           data:opt.data
                       }
                   ]
         };
         topmap.setOption(option);

         window.onresize =topmap.resize();
       },
// 计算地图seiries数据
dealSeriesData: function (data, opts, carSymbol) {
       // console.log("dfefef",clw.geoCoordMap('东城区'));
       // 判断是否为数组，数组是否有数据
       if (data === undefined || data.length== 0) {
           // array empty or does not exist
           // console.log("综合统计数据有误！");
           return false;
       }
         var res = [],//最终数据
             optsVal = '',//value值
             geoCoord='',//存储经纬度
             // [[11,6],[11,6],[7,11],[5,11],[5,11],[10,9],[10,9],[11,6]]
             // [[23,13],[22,11],[14,22],[10,22],[10,22],[21,18],[20,19],[23,13]]
             car_symbolSize = [[23, 13], [22, 11], [14, 22], [10, 22], [10, 22], [21, 18], [20, 19], [23, 13]];//启动状态和熄火状态下各个方向小车大小
         for (var i = 0; i < data.length; i++) {
           // 判断是否含有coord
            if(("coord" in data[i])){
              geoCoord = data[i].coord;
            }else{
              geoCoord=clw.geoCoordMap(data[i]["name"])
              // console.log(data[i]["name"],geoCoord);
            }
            // console.log("zmr",("coord" in data[i]));
             // 判断value[2]中值的类型
             if ($.isString(opts)) {
                 optsVal = data[i][opts];
             } else if ($.isArray(opts)) {
                 // console.log("ccc",opts.length);
                 optsVal = {};
                 for (var j = 0; j < opts.length; j++) {
                     optsVal[opts[j]] = data[i][opts[j]];
                 }
             }
             // 判断series-data数据中是否包含symbol的设置
             if (geoCoord && !carSymbol) {
                 res.push({
                     name: data[i].name,
                     value: geoCoord.concat(optsVal)
                 });
             } else if (geoCoord && carSymbol === "symbol_pos_qidong") {
                 res.push({
                     name: data[i].name,
                     value: geoCoord.concat(optsVal),
                     symbol: "image://../../../static/bigscreen/images/qidong" + i % 8 + ".png",
                     symbolSize: car_symbolSize[i % 8]
                 });
             } else if (geoCoord && carSymbol === "symbol_pos_xihuo") {
                 res.push({
                     name: data[i].name,
                     value: geoCoord.concat(optsVal),
                     symbol: "image://../../../static/bigscreen/images/xihuo" + i % 8 + ".png",
                     symbolSize: car_symbolSize[i % 8]
                 });
             }
         }
         return res;
     },
isArray:function(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
},
isString:function(obj){ //判断对象是否是字符串
    return Object.prototype.toString.call(obj) === "[object String]";
}
})
