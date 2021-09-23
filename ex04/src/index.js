var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    
  var newMonitorsList = [...arr];
  monitorsList = [];
  var i;
  for (i = 0; i < 3; i++) {
    monitorsList.push([monitorsListArray[i], i + 1]);
  }
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
