$(document).ready(function () {
        var small={width: "50px",height: "50px"};
        var large={width: "100px",height: "100px"};
        var count=1;
        $("#navbar-toggler").css(small).on('click',function () {
            $("#mini_me").animate((count==1)?large:small);
            count = 1-count;
        });
    });

//const swim_path = {
//    curviness: 1.25,
//    autoRotate: true,
//    values:[{
//        x: 100, y:-20
//    }]
//};
//
//const tween = new TimelineLite();
//
//tween.add(
//    TweenLite.to(".dolphin", 1,{
//        bezier: swim_path,
//        ease: Power1.easeInOut
//    })
//);