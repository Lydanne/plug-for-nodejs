const cheerio = require('cheerio');
const request = require('request');

module.exports = (option) => {
    return new Promise(resolve => {
        //request.get(option).pipe(require("fs").createWriteStream('1.png'));
        let formData = {
            uploadimg: {
                value:request.get(option),
                options:{
                    filename:'1.png'
                }
            },
            MAX_FILE_SIZE: 200000000
        }
        request.post({
            url: 'https://thyrsi.com/upload.php',
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary1AiL6liHgAvFLX9a",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Cookie": '__cfduid=dd471164a3383f02e7d81bc22c628828d1548489489; Hm_lvt_8c37727332894355e0e23138462805ac=1548317150,1548489456; Hm_lpvt_8c37727332894355e0e23138462805ac=1548489491'
            },
            formData
        }, (err, res, body) => {
        //    console.log(err, res, body);
            if (err) { 
                console.log(err);
                resolve(null);
            } else {
                let $ = cheerio.load(body);
                let img = $('input').attr('value');

                if(img){
                    resolve(img);
                }else{
                    resolve(null);
                }
            }

        })
    });
}


