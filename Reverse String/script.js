 let  input = "hello stm!";

 function reverseString(str) {
    return str.split('').reverse().join('');
 }


 function reverseAfterDelay(inputString){
    setTimeout(function(){
        let reversedString = reverseString(inputString);
        console.log(("reverse String:" + reversedString ));
    }, 2000);
 }

 reverseAfterDelay(input);