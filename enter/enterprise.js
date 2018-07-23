(function(global) {
    var enterprise =enterprise || {};

    var prompt = function (message, style, time)
    {
      $('<div>')
          .appendTo('body')
          .addClass('alert ' + style)
          .html(message)
          .show()
          .delay(time)
          .fadeOut();
    };

    // 成功提示
    enterprise.success_prompt = function(message, time)
    {
        prompt(message, 'alert-success', time);
    };

    // 失败提示
    enterprise.fail_prompt = function(message, time)
    {
        prompt(message, 'alert-danger', time);
    };

    // 提醒
    enterprise.warning_prompt = function(message, time)
    {
        prompt(message, 'alert-warning', time);
    };

    // 信息提示
    enterprise.info_prompt = function(message, time)
    {
        prompt(message, 'alert-info', time);
    };


    global.enterprise =enterprise;

})(window);
