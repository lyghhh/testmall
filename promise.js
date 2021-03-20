// new Promise(function (res,rej){
//     setTimeout(function (){
//         res('hello')
//
//     },1000)
// }).then(function (res){
//     console.log(res);
//     return Promise.resolve('nihao')
// }).then(function (res){
//     console.log(res);
//     return Promise.resolve(Promise)
// }).then(function (res){
//     console.log(res);
// })

function pGet(url) {
    return new  Promise(function (res,rej) {
        var oRep= new XMLHttpRequest()
        oRep.onload=function () {
            res(oRep.responseText)
        }
        oRep.open('get',url,true)
        oRep.send()

    })
}