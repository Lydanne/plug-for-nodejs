# upload-image

> upload-image 是一个为nodejs打造的临时图片上传插件，他可以将某一站点的图片上传到公网的服务器里，并返回图片的公网链接，并且他可以支持自定义报文头。
>
> 注意：请不要上传敏感图片

## 插件包

- upload-image-rom.js
- upload-image-thyrsi.js

说明：这两个包是不同上传站点的服务器，使用其中一个即可。

## 使用

### 第一步、下载

```bash
git clone https://github.com/holleworldabc/plug-for-nodejs
# 下载插件包，或者你可以手动下载
# 将包里的文件upload-image-rom.js复制到你的工作目录
npm install -S chreeio request
# 安装依赖
```

### 第二步、使用

```js
const uploadImage = require('xx/upload-image-rom');

uploadImage({
            url:"",//请求的图片地址，可以是本地图片
            headers:{}//请求自定义头，可以不填
}).then(src=>{
    console.log(src);//图片的临时链接
});
```

## 作者

mark
