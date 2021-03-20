    var fs=require('fs')

   module.exports=function(url) {
    return new Promise(function (res,rej){
        fs.readFile(url,'utf-8',function (err,data){
            if (err){
                rej(err)
            }else {
                res(data)
            }
        })
    })
}

