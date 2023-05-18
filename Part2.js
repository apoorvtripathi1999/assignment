// In this question there is an array for airplanes with their respective 
// fuel capacities. To determine how many airplanes are required, we need 
// to first iterate through the array
// During Iterations we will be chceking on various conditions

function flight(airports)
{ 
    var counter = 0
    var fuel  = airports[0] //setting initial fuel value to first iteration
    
for (var i = 0; i < airports.length; i++) { //this will iterate through the array
    if (fuel === 0) {
      if (airports[i] === 0) {
        return -1; // returns  -1 if current fuel and the next iteration fuel is 0
      }
      fuel = airports[i]; // updating fuel value if fuel has been finished, hence changing the airplane
      counter++; // counting the change of airplane
    } else {
        fuel--; //incase there is still fuel decreasing the value for each iteration
      if (airports[i] > fuel) {
        fuel = airports[i]; // incase if the next iteration has a higher value of the fuel changing the airplane
        counter++ // counting the change of airplane
      }
    }
}

return counter-1 // decreasing value by 1 since first airplane change is not considered

}