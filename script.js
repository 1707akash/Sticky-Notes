

let btn = document.querySelector(".btn");
// console.log(btn);

let notesSection = document.querySelector(".notesSection");
// console.log(notesSection);
let colorAndtext = document.querySelector(".colorAndtext");
// console.log(colorAndtext);
let colorVal= document.querySelector(".color");
// console.log(colorVal);
let textDiv = document.querySelector(".textDiv");
let noNoteAlert= document.querySelector(".noNote");

btn.addEventListener("click",()=>{
    let colorValue = colorVal.children[0].value;
    if(textDiv.children[0].value===""){
        alert("Enter Some Text");
        return;
    }
    makeStickyNotes(textDiv.children[0].value, colorValue);
    noNoteAlert.style.display = "none";
    removeStickyNotes();
})


function removeStickyNotes(){
    let btn2 = document.querySelectorAll(".btn2");
    // console.log(btn2);
    btn2.forEach((singleBtn)=>{
        singleBtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        });
    });
    // if(btn2.length===0){
    //     noNoteAlert.style.display = "block";
    // }
}

function makeStickyNotes(text, color){
    // console.log(text, color);
    let notesDiv= document.createElement("div");
    notesDiv.classList.add("notesDiv");
    notesDiv.innerHTML = `
    <p>${text}</p>
    <button class="btn2">x</button>
    `
   
    notesDiv.style.backgroundColor= color;
    notesSection.appendChild(notesDiv);
    textDiv.children[0].value="";
    
}