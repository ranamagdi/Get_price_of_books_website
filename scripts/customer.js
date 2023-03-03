var price = document.querySelectorAll(".price")
var content = document.querySelector("#content")
var bookName = document.querySelectorAll(".book-name")
var btn1=document.querySelector("#btn1")
var allPrices=document.querySelector("#all-price")
var contentSpan = document.querySelector("#content span")
var totalPrice = 0


bookName.forEach( function (item){

    item.onclick = function (){       
        totalPrice += +(item.getAttribute("price"))//get the integer value after summing
        contentSpan.style.display="none"
        content.innerHTML += item.textContent +"Book: \r"+ item.getAttribute("price")+" LE . <br> <br> " ;
       
        if (content.innerHTML != ""){        
           btn1.style.display = "block";         
           allPrices.style.display="none";
        }
    }})

    btn1.onclick = function (){        
        btn1.style.display="none";        
        allPrices.style.display="block";      
        allPrices.innerHTML="Your Price = "+totalPrice+" LE";

       }