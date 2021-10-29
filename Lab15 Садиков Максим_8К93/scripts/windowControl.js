{
    let v_con = document.getElementById("v_container");
    let height = v_con.clientHeight;
    let width = v_con.clientWidth;
    if (height>width){
        v_con.style.height =width+ "px";
    }
    else {
        v_con.style.width =height+ "px";
    }
}
function next(n){
    const op = 0.7;
    const WIDTH = '35%'
    const font_up = "18px";
    const font_const = "16px";
    let demo_page  = document.getElementById("scroll-wind");
    let demo_button  =document.getElementById("sup");

    let body =document.getElementById("body")
    switch (n){

        case 1:{
            window.scrollTo(0, 0)

            demo_page.style.visibility = "visible";
            demo_page.style.top = "0%";
            demo_button.style.opacity = 1;
            demo_button.style.fontSize = font_up;
            body.style.overflow = "hidden";
            break;
        }
    }
}
{
    var t = 300;
    var i = 0;
    var k = 2;
    setInterval(function(){
        var form = document.getElementById("num1");
        if (i<k){
            form.placeholder="Введите матрицу";
            i++;
        }
        else{
            i=0;
            form.placeholder="";
        }
    },t);
}
