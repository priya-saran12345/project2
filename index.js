var count = 0;
var b = ['https://ijtrs.com/upload_images/Google-Scholar-logo.png', 'https://ijtrs.com/upload_images/slide.jpg',
 'https://ijtrs.com/upload_images/unnamed.png', 'https://ijtrs.com/upload_images/45e99a0d-f0ca-4b17-951a-ed0947f3fd0e-1507734469967.png',
'https://ijtrs.com/upload_images/wroad.png'];
var c = document.querySelector('.img');
var before= document.querySelector('.before');
var after= document.querySelector('.after');

const t = b.length

const fun = () => {
    if (count > (t - 1))
        count = 0
    else {

        console.log(count);
        console.log(b[count])
        c.src = b[count];
        ++count;
    }   
}
setInterval(fun, 3000);




function previous(){
    if(count==0)
    {
        count=b.length
    }
    else{
        --count;
        c.src = b[count];
        
    }

}

function next(){
    if(count>=(b.length-1))
    {
        count=0;
    }

    else{
        ++count;
        c.src = b[count];
    
    }

    
    }
    