

document.getElementById('check_button').addEventListener('click',function(){
  var value_to_be_checked1=document.getElementById("input_1").value;
  var value_to_be_checked2=document.getElementById("input_2").value;
  var value_to_be_checked3=document.getElementById("input_3").value;
  var value_to_be_checked4=document.getElementById("input_4").value;

  var array_to_be_checked=[value_to_be_checked1,value_to_be_checked2,value_to_be_checked3,value_to_be_checked4]
  var passed_value=_(array_to_be_checked).all(function(value){return value>70;});
  if(passed_value){
    document.getElementById('result').innerHTML="All the numbers you just typed in are greater than 70";
  }else{
    document.getElementById('result').innerHTML="Not all the numbers you just typed in are greater than 70";
  }
  console.log(passed_value);
//  console.log(typeof(parseInt(value_to_be_checked)));
},false);













//function bindEvents(){
//  document.getElementById('add').addEventListener('click', function(){
//    var users = JSON.parse(localStorage.users);
//    var userName = document.getElementById('user-name').value;
//    users.push(new User(userName));
//    localStorage.users = JSON.stringify(users);
//    require(['Controllers/ListController'], function(ListController){
//      ListController.start();
//    });
//  }, false);
//}
