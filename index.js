function takeANumber(currentLine, newPerson) {
  if(currentLine.length>0);
  currentLine.push(newPerson);
  return ('Welcome, ' + newPerson + '. You are number ' + currentLine.length + ' in line.');
}

function nowServing (katzDeliLine) { 
    if(katzDeliLine.length===0) { 
    return 'There is nobody waiting to be served!'; 
}
    var customer = katzDeliLine.shift(); 
    return "Currently serving " + customer + "."; 
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
    var customerAndNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
