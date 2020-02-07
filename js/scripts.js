let btnLimpar = document.querySelectorAll("CE");

let btnZero = document.querySelectorAll("0");
let btnUm = document.querySelectorAll("1");
let btnDois = document.querySelectorAll("2");
let btnTres = document.querySelectorAll("3");
let btnQuatro = document.querySelectorAll("4");
let btnCinco = document.querySelectorAll("5");
let btnSeis = document.querySelectorAll("6");
let btnSete = document.querySelectorAll("7");
let btnOito = document.querySelectorAll("8");
let btnNove = document.querySelectorAll("9");

let btnSoma = document.querySelectorAll("+");
let btnSubtracao = document.querySelectorAll("-");
let btnDivisao = document.querySelectorAll("/");
let btnMultiplicacao = document.querySelectorAll("*");
let btnigual = document.querySelectorAll("=");


const novaString = () =>{

   
    btnUm.click(function() {
     document.getElementById("textbox").value += '1';
    });
      
    btnDois.click(function() {
     document.getElementById("textbox").value += '2';
    });
      
    btnTres.click(function() {
     document.getElementById("textbox").value += '3';
    });
      
    btnQuatro.click(function() {
     document.getElementById("textbox").value += '4';
    });  
    
    btnCinco.click(function() {
     document.getElementById("textbox").value += '5';
    }); 
      
    btnSeis.click(function() {
     document.getElementById("textbox").value += '6';
    }); 
      
    btnSete.click(function() {
     document.getElementById("textbox").value += '7';
    }); 
      
    btnOito.click(function() {
     document.getElementById("textbox").value += '8';
    }); 
      
    btnNove.click(function() {
     document.getElementById("textbox").value += '9';
    }); 
      
    btnZero.click(function() {  document.getElementById("textbox").value += '0';
    }); 
      
    btnPonto.click(function() {  document.getElementById("textbox").value += '.';
    });
      
      
    $("#plus").click(function() {
     document.getElementById("textbox").value += ' + ';
    });
      
    $("#minus").click(function() {
     document.getElementById("textbox").value += ' - ';
    });
      
    $("#multiply").click(function() {
     document.getElementById("textbox").value += ' * ';
    });
      
    $("#divide").click(function() {
     document.getElementById("textbox").value += ' / ';
    });
      
    $("#modulus").click(function() {
     document.getElementById("textbox").value += ' % ';
    });
      
      
    $("#equals").click(function() {
     document.getElementById("textbox").value =  eval(document.getElementById("textbox").value);
    });  
      
    $("#clear").click(function() {
     document.getElementById("textbox").value =  '';
    });   
      
      
      
    }