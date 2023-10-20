function convert(){
    var d=document.getElementById('data').value;
    var Type = document.getElementById('Type').value;
     if(Type === "Celcius")
     {
        var f=(d*1.8)+32;
        document.getElementById('res').innerText=`${f} F`;
     }
     else if (Type === "Fahrenheit") {
        var c=(d - 32) * 5/9;
        document.getElementById('res').innerText=`${c}° C`;
     }
    
}