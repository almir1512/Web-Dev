var friends = ["almir","aahil","aayan","aleena"];
var no = Math.random();
no=no*friends.length;
no = Math.floor(no);

console.log(no);
var name = friends[no];
var first= name.slice(0,1);
first= first.toUpperCase();
var rest= name.slice(1,name.length);
rest= rest.toLowerCase();
name=first+rest;
console.log(name +" pays the bill.");
