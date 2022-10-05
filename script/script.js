$(document).ready(function(){
    let rotate1 = 0;
    let rotate2 = 0;
    setInterval(function(){
        rotate1 = rotate1 +2
        rotate2 = rotate2 +5
        $('#rotate1').css({'transform':'rotate('+ rotate1 + 'deg)'})
        $('#rotate2').css({'transform':'rotate('+ rotate2 + 'deg)'})
    },33)
})