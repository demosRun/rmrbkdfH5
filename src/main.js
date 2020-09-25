function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

window.onload = function(){
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}

function showInfo () {
  console.log('sd')
  // go('page3//rotatePushTop/rotatePullBottom&&ontop/true/rotatePushBottom/rotatePullTop&&ontop')
  owo.go('page3//rotatePushTop/rotatePullBottom&&ontop/true/rotatePushBottom/rotatePullTop&&ontop')
}

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端