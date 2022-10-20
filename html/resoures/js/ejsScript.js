var c = 3;
var countdown = setInterval(timer,1000);

function timer(){
  $("p").text("redirecting in ... " + c + ".");
  if(c == 0){
    clearInterval(countdown);
    window.location.href = '/';
  }
  c--;
}
