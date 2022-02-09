
//jshint version:6
exports.getdate = getdate;  // no parenthesis because we are not running the function
// if we apply parenthesis then we are running the function
 function getdate(){

const today = new Date() ;
const options = {
  day : 'numeric',
  weekday: 'long',
  year : 'numeric',
  month : 'long'
}
return today.toLocaleDateString("en-US",options);  // 17 NOVEMBER MONDAY 2020

}

exports.getday = function(){
const today = new Date() ;
const options = {
  weekday: 'long',
}
return today.toLocaleDateString("hi-IN",options);  // 17 NOVEMBER MONDAY 2020

}
