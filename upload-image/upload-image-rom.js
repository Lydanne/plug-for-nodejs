const cheerio = require('cheerio');
const request = require('request');

module.exports = (option) => {
    return new Promise(resolve => {
        //request.get(option).pipe(require("fs").createWriteStream('1.png'));
        let formData = {
            "name": "1.jpeg",
            "file": {
                value: request.get(option),
                options: {
                    filename: '1.jpeg'
                }
            }
        }
        request.post({
            url: 'http://www.romenote.com/tool/aeupload',
            //encoding:null,
            headers: {
                "Host": "www.romenote.com",
                "Connection": "keep-alive",
                "Origin": "http://www.romenote.com",
                "x-csrf-token": "9QQTwB_jUgd_uKZAmy0VjghuN6wIzlD4uj3NUhdbUHahdn9o8B8RcA_7hk6pD4D3gd5hFQ49-AvXV7se1H8VIg==",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryh0yE6jRBmBK24HrI",
                "Accept": "*/*",
                "Referer": "http://www.romenote.com/tool/image",
                "Cookie": " _csrf-frontend=6fee34fd1192fcab42c25e7016ef73e754779e8b6c860f3c37fefbe63eaebcdba%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%22Trl%A8%EF%FCCwpC+%0E2%22%95y%89%B0V%B9%06%F3%A8%F3mjvL%C3%24ET%22%3B%7D"
            },
            json: true,
            formData
        }, (err, res, body) => {
            //console.log(err, res, body)// require("iconv-lite").decode(body, 'utf-8').toString());
            if (err) {
                console.log(err);
                resolve(null);
            } else {
                let img = body.message;
                if (img) {
                    resolve(img);
                } else {
                    resolve(null);
                }
            }

        })
    });
}


