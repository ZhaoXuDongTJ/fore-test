var f; //Font 字体
var t = document.getElementsByTagName('img'); //Img 数组
var m; //比例
/**
 * @return {boolean}
 */
function NavCheck(check) {
    return navigator.userAgent.indexOf(check) != -1;
}
/**
 * @return {string}
 */
function GetBrowser() {
    if(NavCheck('iPhone')||NavCheck('iPod'))
        return 'iPhone';
    else if(NavCheck('iPad'))
        return 'iPad';
    else if(NavCheck('Android'))
        return 'Android';
}
function FontSwitch() {
    switch (GetBrowser()){
        case ('Android') : f = '24pt';break;
        case ('iPhone') : f = '21pt';break;
        case ('iPad') : f = '18pt';break;
        default : f = '12pt';break;
    }
}
function ImgSwitch() {
    switch (GetBrowser()){
        case ('Android') : m = 1.00 ;break;
        case ('iPhone') : m = 0.92 ;break;
        case ('iPad') : m = 0.75 ;break;
        default : m = 0.50 ;break;
    }
}



