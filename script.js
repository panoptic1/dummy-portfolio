var verb = document.getElementById("verb");
var nowILikeTuh = 0;
var thingsILikeTuh = ["win", "slay", "make money", "get turnt", "crush a lot", "pow pow pow", "go to bed early", "eat tacos"];
function sayILikeTuh(){
  if(nowILikeTuh === thingsILikeTuh.length){
    nowILikeTuh = 0;
  }
  verb.innerText = thingsILikeTuh[nowILikeTuh];
  nowILikeTuh++;
}
var iLikeTuh = setInterval(sayILikeTuh, 500);