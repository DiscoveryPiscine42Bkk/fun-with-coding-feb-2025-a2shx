$(document).ready(function() {
    let size = 200;
    const maxSize = 420;
    const minSize = 200;
    let colors = ['red','green','blue'];
    let indexColor = 0;

    $('.balloon').click(function() {

        if (size < maxSize){
            size += 10;
            if (indexColor <2){
                indexColor ++;
            }
            else {
                indexColor = 0;
            }
        }
        else {size = minSize;}
        
        $(this).css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[indexColor]
        });
    });

    $('.balloon').mouseleave(function() {
        if (size > minSize){
            size -=5;
            if(indexColor > 0){
                indexColor --;
            }
            else {
                indexColor = 2;
            }
        }
        $(this).css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[indexColor]
        });
    });
});