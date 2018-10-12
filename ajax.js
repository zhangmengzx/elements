<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试jquey的ajax方法</title>
    <style>
        *{
            padding:0;
            margin:0;
        }
        #test{
            padding: 0;
            margin: 0 auto;
            width:200px;
            height: 400px;
        }
        #test li{
            list-style: none;
            width:200px;
            text-align: center;
            height:30px;
            line-height:30px;
            border:1px dashed lightgrey;
        }
    </style>
</head>
<body>

<div id="test"></div>
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
</script>
<script>
    $(function(){
        $.ajax({
            //请求方式为get
            type:"GET",
            //json文件位置
            url:"../shuju.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function(data){
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str="<ul>";
                $.each(data.list,function(i,n){
                    str+="<li>"+n["item"]+"</li>";
                })
                str+="</ul>";
                $("#test").append(str);
            }
        });
    });
</script>
</body>
</html>
