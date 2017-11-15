var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var nights = document.getElementById("nights");
var arr = [];

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//////////////////////////////////////////

var btn = document.querySelectorAll(".btn");
var rows = document.querySelectorAll(".rows");
var itemCount = 0;

var selectBtn = function(){
  for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',callback);
  }
};

function callback(){

  var room_price =Number(this.parentElement.parentElement.children[2].innerHTML.slice(1));
  console.log(room_price);
  var room_capacity =this.parentElement.parentElement.children[1].innerHTML;
  console.log(room_capacity);
  var room_num =this.parentElement.parentElement.children[0].innerHTML;
  console.log(room_num);
  var price = arr.push(room_price);
  // console.log("testing price" + price.arr[0]);
  console.log(arr[0]);

  document.getElementById('nights').addEventListener('input', (event) => {
        let nights = event.target.value
        let total = FinalPrice(room_price, nights)
        document.getElementById('total').innerText = total.toFixed(2)
      })


  booking(room_price, room_num);
  //rates(room_price, arr);
};

function booking(room_price, room_num){
  modal.style.display = "block";
  document.getElementById("cart-room-price").innerHTML = room_price;
  document.getElementById("cart-room-num").innerHTML = room_num;
}

var FinalPrice = function(room_price, nights){
  return room_price * nights
}

var removeRoom = function(arr){
  document.getElementById('nights').value = 0
  document.getElementById('total').innerHTML = '0'
  arr.length = 0;
}
