(function($){
  $(window).load(function(){

    $("#content-1").mCustomScrollbar({
      theme:"minimal"
    });

    });
  })(jQuery);

  // new Vue({
  //   el:'#bianqian',
  //   data() {
  //     return {
  //       activeName: 'second',
  //       radio7: ''
  //     };
  //   },
    // methods: {
    //   handleClick(tab, event) {
    //     // console.log(tab, event);
    //   },
    //   inputs(val){
    //    //  console.log(val)
    //     type=val
    //   },
    //   inputsa(val){
    //    //  console.log(val)
    //     type=val
    //   }
    // }
  // })

  new Vue({
    el:'#xuanze',
    data() {
      return {
        options: [{
          value: 'gongji',
          label: '攻击',
          children: [{
            value: 'dfd',
            label: 'qweqwe'
          }, {
            value: 'asa',
            label: 'asfadsfadsfa'
          }, {
            value: 'afdsafa ',
            label: 'cvcvxcx'
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],

        selectedOptions3: ['ziyuan']
      };
    },
    methods: {
      handleChange(value) {
        // var type=value
        console.log(value);
      }
    }
  })

  $('.btt').click(function functionName() {
      // console.log()
  })
