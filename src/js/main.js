/**
* Template Name: WeBuild - v4.6.1
* Template URL: https://bootstrapmade.com/free-bootstrap-coming-soon-template-countdwon/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Countdown timer
     */
  
    let countdown = select('.countdown');
  
    const countDownDate = function() {
      let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();
  
      let weeks = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 7));
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      
      let timeOfWedding = new Date(countdown.getAttribute('data-count')).getTime();
      let actualTime = new Date().getTime();

      // let daysName;
      // let hoursName;
      // let secondsName;

      // if(days === 1){
      //   daysName = "dzień"
      // }
      // else{
      //   daysName = "dni"
      // }

      // if(hours === 1){
      //   hoursName = "godzina"
      // }
      // else if(hours === 2 || hours === 3 || hours === 4){
      //   hoursName = "godziny"
      // }
      // else{
      //   hoursName = "godzin"
      // }

      // if(minutes === 1){
      //   minutesName = "minuta"
      // }
      // else if(hours === 2 || hours === 3 || hours === 4){
      //   minutesName = "godziny"
      // }
      // else{
      //   minutesName = "godzin"
      // }

      // if(seconds === 1){
      //   secondsName = "sekunda"
      // }
      // else if(seconds === 2 || seconds === 3 || seconds === 4){
      //   secondsName == "sekundy"
      // }
      // else{
      //   secondsName = "sekund"
      // }

      let output = countdown.getAttribute('data-template');
      // let output = `%d ${daysName} %h ${hoursName} %m ${minutesName} %s ${secondsName}`;
      output = output.replace('%w', weeks).replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
      countdown.innerHTML = output;
    }
    countDownDate();
    setInterval(countDownDate, 1000);
  
  })()