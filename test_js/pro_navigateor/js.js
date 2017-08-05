for(var prop_name in navigator){
    if(typeof navigator[prop_name]=="function"){
        document.write(prop_name+": "+navigator[prop_name]()+"<br>");
    }else {
        document.write(prop_name+": "+navigator[prop_name]+"<br>");
    }

}