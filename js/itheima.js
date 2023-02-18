    function resolveData(data) {
        var arr = []
        for (var k in data) {
            arr.push(k + '=' + data[k])
        }
        return arr.join('&')
    }

    function itheima(options) {
        // 创建xhr对象
        var xhr = new XMLHttpRequest()
            // 发起get或post请求时，传递的参数
        var qs = resolveData(options.data)
            // 判断发起什么请求
        if (options.method.toUpperCase() == 'GET') {
            xhr.open(options.method.toUpperCase(), options.url + '?' + qs)
            xhr.send()
        } else if (options.method.toUpperCase() == 'post') {
            xhr.open('post', options.url)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(qs)
        }
        // 监听函数
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = JSON.parse(xhr.responseText)
                options.success(result)
            }
        }
    }