//captcha generator
function captchaGenerator()
{
    let alpha=new Array('a','B','C','1','2','3','D','R');
    let a=alpha[Math.floor(Math.random()*alpha.length)];
    let b=alpha[Math.floor(Math.random()*alpha.length)];
    let c=alpha[Math.floor(Math.random()*alpha.length)];
    let d=alpha[Math.floor(Math.random()*alpha.length)];
    let e=alpha[Math.floor(Math.random()*alpha.length)];
    let results=a+" "+b+""+c+""+d+""+e;
    document.getElementById('createCaptcha').value=results;
}
//isvalid
function isvalid()
{
    let one=removeSpaces(document.getElementById('createCaptcha').value);
    let two=removeSpaces(document.getElementById('inputCaptcha').value);
    if(one == two)
    {
           return true;
    }else{
        return false;
    }

}
//remove spaces
function removeSpaces()
{
    return s.split("").join('');
}

