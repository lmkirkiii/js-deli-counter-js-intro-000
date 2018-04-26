

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name);

  var position = katzDeliLine.length


  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine){
  var index = 0;
  while( index < katzDeliLine.length){
      index++;
  }

  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

var list = [];

var katzDeliLine = [];

function currentLine(deli){
    for (let index=0; index < deli.length; index++){
        list.push(" "+ [index+1] + "." + deli[index])
    }
    if (deli === 0){
        return "no one in line"
    }
    else{
        return ("serving:" + list) 
    } 
}
