function replaceAll(){
    let str1=document.getElementById("txt-input").value;
    console.log(str1);
    let newStr = str1.replaceAll(' ', '')
    document.getElementById("txt-result").innerHTML=newStr;
}