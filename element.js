(function($){
  $(window).load(function(){

    $("#content-1").mCustomScrollbar({
      theme:"minimal"
    });

  });
})(jQuery);
// 去掉__ob__: observer  

    //对象深复制，不考虑循环引用的情况
    function cloneObj(from) {
        return Object.keys(from)
            .reduce((obj, key) => (obj[key] = clone(from[key]), obj), {});
    }
    //数组深复制，不考虑循环引用的情况
    function cloneArr(from) {
        return from.map((n) => clone(n));
    }
    // 复制输入值
    function clone(from) {
        if (from instanceof Array) {
            return cloneArr(from);
        } else if (from instanceof Object) {
            return cloneObj(from);
        } else {
            return (from);
        }
    }

    const obj = [
        {
            name: '1'
        },
        {
            name: '2'
        }
    ];
    const obj2 = clone(obj);
    console.log(obj2);



// 时间格式转换
//
  function fermitTime(time){
     var now = new Date(time);
     var year = now.getFullYear();
     var mon = now.getMonth()+1;
     var date= now.getDate();
     if(mon<10){
     mon = '0'+mon;
     };
     if(date<10){
     date = '0'+date;
     }
     var postDate = year+'-'+mon+'-'+date;
     return postDate;
   }


  new Vue({
    el:'#tishi',
    methods: {
      // 点击查询按钮时调用加载中效果
      onSearch() {
          const loading = this.$loading({
            lock: true,
            text: '正在查询中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
            target: document.querySelector('.div1')
          });
          setTimeout(() => {
            // 取消加载状态

            loading.close();
          }, 2000);
      },
      open() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    },
     created:function(){
      this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
    }//消息提示

  })

  new Vue({
    el:'.fenqun',
    data() {
     return {
       dynamicValidateForm: {
         domains: [{
           value: ''
         }],
         email: ''
       },
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
     };
   },
   methods: {
     submitForm(formName) {
       this.$refs[formName].validate((valid) => {
         if (valid) {
           alert('submit!');
         } else {
           console.log('error submit!!');
           return false;
         }
       });
     },
      onSubmit() {
        console.log('submit!');
      },
     resetForm(formName) {
       this.$refs[formName].resetFields();
     },
     removeDomain(item) {
       var index = this.dynamicValidateForm.domains.indexOf(item)
       if (index !== -1) {
         this.dynamicValidateForm.domains.splice(index, 1)
       }
     },
     addDomain() {
       this.dynamicValidateForm.domains.push({
         value: '',
         key: Date.now()
       });
     }
   }
  })
//   const cityOptions = ['上海', '北京', '广州', '深圳']
//   new Vue({
//     el:'#indeterminate',
//     data() {
//       return {
//         checkAll: false,
//         checkedCities: ['上海'],
//         cities: cityOptions,
//         isIndeterminate: true
//       };
//     },
//     methods: {
//       handleCheckAllChange(val) {
//         this.checkedCities = val ? cityOptions : [];
//         this.isIndeterminate = false;
//         // console.log(val)
//       },
//       handleCheckedCitiesChange(value) {
//         let checkedCount = value.length;
//         console.log(value)
//         this.checkAll = checkedCount === this.cities.length;
//         this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//       }
//     }
//
//   })
//
//
//   new Vue({
//     el:'.block',
//     methods:{
//       getSTime(val) {
//               this.sTime=val;//这个sTime是在data中声明的，也就是v-model绑定的值
//               var starttime=fermitTime(val[0]);
//               var endtime=fermitTime(val[1])
//               console.log(starttime+'至'+endtime)
//           }
//     },
//     data() {
//        return {
//          pickerOptions2: {
//            shortcuts: [{
//              text: '最近一周',
//              onClick(picker) {
//                const end = new Date();
//                const start = new Date();
//                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
//                picker.$emit('pick', [start, end]);
//              }
//            }, {
//              text: '最近一个月',
//              onClick(picker) {
//                const end = new Date();
//                const start = new Date();
//                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
//                picker.$emit('pick', [start, end]);
//              }
//            }, {
//              text: '最近三个月',
//              onClick(picker) {
//                const end = new Date();
//                const start = new Date();
//                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
//                picker.$emit('pick', [start, end]);
//              }
//            }]
//          },
//          value6: '',
//          value7: ''
//        };
//      }
//   })
//
//   new Vue({
//     el:'.hanbao',
//     data() {
//       return {
//         currentDate: new Date()
//       };
//     }
//   })
//
//
//   new Vue({
//     el:'.biaoge',
//     data() {
//       return {
//         tableData: [{
//           date: '2016-05-02',
//           name: '王小虎',
//         }, {
//           date: '2016-05-04',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//         }]
//       }
//     }
//   })
//
//   new Vue({
//     el:'#bianqian',
//     data() {
//       return {
//         activeName: 'second'
//
//       };
//     },
//     methods: {
//       handleClick(tab, event) {
//         console.log(tab, event);
//       }
//     }
//   })
//
//   new Vue({
//     el:'#fenye',
//     methods: {
//        handleSizeChange(val) {
//          console.log(`每页 ${val} 条`);
//        },
//        handleCurrentChange(val) {
//          console.log(`当前页: ${val}`);
//        }
//      },
//      data() {
//        return {
//          currentPage1: 5,
//          currentPage2: 5,
//          currentPage3: 5,
//          currentPage4: 4
//        };
//      }
//   })
// var type=""
//   new Vue({
//     el:'#shurukuang',
//     data() {
//       return {
//         input: ''
//       }
//     },
//     methods:{
//       inputdata(val){
//         // alert('f');
//         // console.log(val)
//         type=val
//       }
//     }
//   })
// new Vue({
//   el:'.danxuan',
//   data () {
//      return {
//        radio7: '',
//      };
//    },
//    methods:{
//      inputs(val){
//       //  console.log(val)
//        type=val
//      }
//    }
// })
// $('.btt').click(function functionName() {
//     console.log(type)
// })
