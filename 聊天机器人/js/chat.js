$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();
    $('.input_sub').click(function() {
        mySpeck();
    })
    $(window).keyup(function(e) {
        if (e.keyCode == 13) {
            mySpeck();
        }
    });

    function mySpeck() {
        if ($('.input_txt').val() != '') {
            var li = '<li class="right_word"><img src="img/person02.png" /><span>' + $('.input_txt').val().trim() + '</span></li>';
            $('.talk_list').append(li);
            $('.input_txt').val('');
            resetui();
        }
    }
    $.ajax({
        type: "GET",
        url: "http://ajax.frontend.itheima.net:3006/api/robot",
        // data: {
        //     spoken: text
        // },
        success: function(res) {
            console.log(res);
        }
    });
})