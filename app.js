// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

// ATENCION: mi codigo esta en ingles porque estoy aprendiendo el idioma y quiero practicar

let friend = [];
let friendResult = "";

let list = document.getElementById("showFriendList");
let showResultsHtml = document.getElementById("showFriendlist");


function enterFriendName() 
   {
     let enterName = document.getElementById("amigo");
     let friendName = enterName.value;

       if (!friendName)
         {
            alert("Please enter a name");
         return;
         }

     friend.push(friendName);
     enterName.value = "";
     enterName.focus();

   
     
      let item = document.createElement("li");
      item.textContent = friendName;
      list.appendChild(item);
     
   }


   function sortFriendList()
   {
     let result = Math.floor (Math.random() * friend.length);
     friendResult = friend[result];
     

     showResults();
   }

   function showResults()
   {
      let showResultsHtml = document.getElementById("resultado");
      showResultsHtml.textContent = `The chosen friend is: ${friendResult}`;
   }
      
