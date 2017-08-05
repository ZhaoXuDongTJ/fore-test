var car={
    speed:"4GHZ",
    hd:"500GB",
    ram:"8GB"
};
function Car(a,b,c) {
    this.seats = a;
    this.enhine = b;
    this.radio = c;
    this.describe = function () {
        document.write("seats："+this.seats+"enhine:"+this.enhine+"radio:"+this.radio);
    }
}
function Cars(a,b,c) {
    this.seats = a;
    this.enhine = b;
    this.radio = c;
}
Cars.prototype.locks = "automatic";
Cars.prototype.describe = function () {
    document.write("seats： "+this.seats+"enhine:  "+this.enhine+"radio: "+this.radio);
}
Cars.prototype.des = function (ob_name) {
    for(var prop_name in ob_name){
        if(ob_name.hasOwnProperty(prop_name)){
            document.write(prop_name+": "+ob_name[prop_name]+"<br>");
        }
    }
}
var cc = new Cars("sa","ds","aa");
document.write(cc.describe());
cc.des(cc);

