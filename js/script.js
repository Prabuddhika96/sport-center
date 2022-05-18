// online form
var btn=document.getElementById('btn-cal');
var total=0;
var total_cost=0;
var tax_or_dis=0;

function caltotal(){
  total=0;
  // cricket
  var cricket_bat1=document.getElementById("cricket_bat_check").checked;

  if(cricket_bat1){
    var cricket_bat_radio_value = parseInt(document.querySelector('input[name="cricket_bat_radio"]:checked').value); 
    
    var cricket_bat_option = document.getElementById("cricket_bat_option").value;

    var cricket_bat_total=cricket_bat_radio_value*cricket_bat_option;
    total+=cricket_bat_total;
    document.getElementById('cricket_price').innerHTML=cricket_bat_total;
  }

  //badminton
  var badminton1=document.getElementById("badminton_check").checked;

  if(badminton1){
    var badminton_radio_value = parseInt(document.querySelector('input[name="badminton_radio"]:checked').value); 

    var badminton_option = document.getElementById("badminton_option").value;

    var badminton_total=badminton_radio_value*badminton_option;
    total+=badminton_total;
    document.getElementById('badminton_price').innerHTML=badminton_total;
  }

  //basketball
  var basketball1=document.getElementById("basketball_check").checked;

  if(basketball1){
    var basketball_radio_value = parseInt(document.querySelector('input[name="basketball_radio"]:checked').value); 

    var basketball_option = document.getElementById("basketball_option").value;

    var basketball_total=basketball_radio_value*basketball_option;
    total+=basketball_total;
    document.getElementById('basketball_price').innerHTML=basketball_total;
  }


  //football
  var football1=document.getElementById("football_check").checked;

  if(football1){
    var football_radio_value = parseInt(document.querySelector('input[name="football_radio"]:checked').value);

    var football_option = document.getElementById("football_option").value;

    var football_total=football_radio_value*football_option;
    total+=football_total;
    document.getElementById('football_price').innerHTML=football_total;
  }



  //hockey
  var hockey1=document.getElementById("hockey_check").checked;

  if(hockey1){
    var hockey_radio_value = parseInt(document.querySelector('input[name="hockey_radio"]:checked').value);

    var hockey_option = document.getElementById("hockey_option").value;

    var hockey_total=hockey_radio_value*hockey_option;
    total+=hockey_total;
    document.getElementById('hockey_price').innerHTML=hockey_total;
  }


  //tt
  var tt1=document.getElementById("tt_check").checked;

  if(tt1){
    var tt_radio_value = parseInt(document.querySelector('input[name="tt_radio"]:checked').value); 

    var tt_option = document.getElementById("tt_option").value;

    var tt_total=tt_radio_value*tt_option;
    total+=tt_total;
    document.getElementById('tt_price').innerHTML=tt_total;
  }

  tax_or_dis=total*0.15;
  total_cost=total;
  document.getElementById('total_cost').innerHTML='Total Cost : $ '+total;

  if(total<2000){
    document.getElementById('tax').innerHTML='Tax : $ '+tax_or_dis;
    document.getElementById('dis').innerHTML='Discount : $ 0';
    total+=tax_or_dis
  }
  else{
    document.getElementById('dis').innerHTML='Discount : $ '+tax_or_dis;
    document.getElementById('tax').innerHTML='Tax : $ 0';
    total-=tax_or_dis
  }

  document.getElementById('total_price').innerHTML='$ '+total;  


  if(total>0){
    var answer;
    if(total<2000){
      answer=confirm("Total Cost : $ "+total_cost+"\nTax : $  "+tax_or_dis+"\nTotal Price : $ "+total+"\nDo you accept the total amount calculated for payment?");
    }
    else{
      answer=confirm("Total Cost : $ "+total_cost+"\nDiscount : $  "+tax_or_dis+"\nTotal Price : $ "+total+"\nDo you accept the total amount calculated for payment?");
    }

    if(answer){
      alert("Thank You!");
    }
    else{
      alert("Your application withdrawed !");
      location.reload();
    }
  }
  
};