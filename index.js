 // welcher Tag ist heute?
 let date = new Date().getDate(); // => 16
 for(i=1; i<=date; i++) {
 document.getElementById(i).style = "background-color: #0d3311";
 }
 
 function showGift(indexTag){
     let modal = document.getElementById("myModal");
     // prüfen, ob der Tag in der Vergangenheit oder Gegenwart liegt, dann Zitat anzeigen, sost nicht
     if(indexTag > date){
         // Türchen ist noch nicht frei
         alert("Try again another day.")
     } else {
         modal.style.display = "block";
         console.log(indexTag);
         console.log(quotesArray);
         document.getElementById("quote").innerHTML = quotesArray[indexTag -1].text;
         document.getElementById("author").innerHTML = quotesArray[indexTag -1].author;
         document.getElementById("src").src = quotesArray[indexTag -1].src;

         // Zitat anzeigen
        // alert(quotesArray[indexTag -1].text + " von Author: " + quotesArray[indexTag -1].author);
     }
 }
 
 function closeModal(){
     let modal = document.getElementById("myModal");
     modal.style.display = "none";
 }

// quote = zitat 0> im array
let quotesArray = [];

 quotesArray.push ({
    text: "Schicksal - und gelobet sei der Mensch, der dies erkennt..",
    author: "Enza von metaTronics",
    src: "img/tag01.jpg"
});
quotesArray.push  ({
    text: "... denn Du Selbst bist Deines Lebens Schmied ...",
    author: "Enza von metaTronics",
    src: "img/tag02.jpg"
});
quotesArray.push  ({
    text: "... und weisst dennoch nicht, was morgen wird.",
    author: "Enza von metaTronics",
    src: "img/tag03.jpg"
});
quotesArray.push  ({
    text: "Lebe wohl - und glücklich,..",
    author: "Enza von metaTronics",
    src: "img/tag04.jpg"
});

//---------

quotesArray.push  ({
    text: "... denn du kannst nicht ändern, was bereits getan.",
    author: "Enza von metaTronics",
    src: "img/tag05.jpg"
});
quotesArray.push  ({
    text: "Dein Leben sei dir eine Schule,.."  ,
    author: "Enza von metaTronics",
    src: "img/tag06.jpg"
});
quotesArray.push  ({
    text: "Die Menschen seien deine Lehrer, ..",
    author: "Enza von metaTronics",
    src: "img/tag07.jpg"
});
quotesArray.push  ({
    text:"..die Tiere deine Freunde und Meister, .. " ,
    author: "Enza von metaTronics",
    src: "img/tag08.jpg"
});

//-------------

quotesArray.push  ({
    text:".. die ganze Welt ein grosses Internat." ,
    author: "Enza von metaTronics",
    src: "img/tag09.jpg"
});
quotesArray.push  ({
    text:"Sei heilsam für andere,.." ,
    author: "Enza von metaTronics",
    src: "img/tag10.jpg"
});
quotesArray.push  ({
    text:"..denn auch wenn du krank bist, leben deine Gedanken und sind wahr!" ,
    author: "Enza von metaTronics",
    src: "img/tag11.jpg"
});
quotesArray.push  ({
    text:"Sei DU - und nicht das Bild einer leeren Abziehbildgesellschaft,.."  ,
    author: "unknown",
    src: "img/tag12.jpg"
});

//-----------

quotesArray.push  ({
    text: ".. denn Du Bist, und das Bild verblasst schnell.",
    author: "Enza von metaTronics",
    src: "img/tag13.jpg"
});
quotesArray.push  ({
    text:"Vierhundertfünfzigtausend Worte, die vielleicht.." ,
    author: "Enza von metaTronics",
    src: "img/tag14.jpg"
});
quotesArray.push  ({
    text: ".. in einer Woche gesprochen worden sind.",
    author: "Enza von metaTronics",
    src: "img/tag15.png"
});
quotesArray.push  ({
    text: "Vierhundertfünfzigtausend ... ",
    author: "Enza von metaTronics",
    src: "img/tag16.jpg"
});

//----------

quotesArray.push  ({
    text: "..und ein paar Zerquetschte - einfach so.",
    author: "Enza von metaTronics",
    src: "img/tag17.png"
});
quotesArray.push  ({
    text: "Mögen sie durchdacht sein und möglichst rein von deiner Körperkreatur.",
    author: "Enza von metaTronics",
    src: "img/tag18.jpg"
});
quotesArray.push  ({
    text: "SEI DU ..",
    author: "Enza von metaTronics",
    src: "img/tag19.jpg"
});
quotesArray.push  ({
    text: ".. DIR SELBST, denn Freunde hast du wenig, die Dich in Dir verstehen.",
    author: "Enza von metaTronics",
    src: "img/tag20.jpg"
});
//-----------
quotesArray.push ({
    text: "Ein LICHT,..",
    author: "Enza von metaTronics",
    src: "img/tag21.jpg"
});
quotesArray.push  ({
    text: "..ein Baum..",
    author: "Enza von metaTronics",
    src: "img/tag22.jpg"
});
quotesArray.push  ({
    text: "..und Schnee im Wald.",
    author: "Enza von metaTronics",
    src: "img/tag23.jpg"
});
quotesArray.push  ({
    text: "Im Herzen warm, draussen ist´s kalt.",
    author: "Enza von metaTronics",
    src: "img/tag24.jpg"
});
