
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); 
  }

  function startCountdownAndGenerateRandomNumber(delayInSeconds) {
  let remainingTime = delayInSeconds;
  
    
    let countdownInterval = setInterval(function() {
      console.log("Time remaining: " + remainingTime + " seconds");
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(countdownInterval); 
        let randomNum = generateRandomNumber();
        console.log("Random number generated: " + randomNum);
      }
    }, 1000); 
  
    
    setTimeout(function() {
      clearInterval(countdownInterval); 
      let randomNum = generateRandomNumber();
      console.log("Random number generated: " + randomNum);
    }, delayInSeconds * 1000); 
  }
  
  
  let  delayInSeconds = 4;
  

  startCountdownAndGenerateRandomNumber(delayInSeconds);
  