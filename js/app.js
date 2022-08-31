


showdiary()
let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", function(e){
    let addtxt = document.getElementById("addtxt")
    let diary = localStorage.getItem("diary")
    if (diary == null) {
        diaryobj = [];
    }
    else{
        diaryobj = JSON.parse(diary)
    }
    diaryobj.push(addtxt.value);
    localStorage.setItem("diary", JSON.stringify(diaryobj))
    addtxt.value = ""
    console.log(diaryobj)
    showdiary()
})

function showdiary() {
    let diary = localStorage.getItem("diary");
    if (diary == null) {
        diaryobj = [];
    }
    else{
        diaryobj = JSON.parse(diary);
    }
    let html = "";
    diaryobj.forEach(function(element, index) {
        html += `
        <div class="diarycard my-2 mx-2" style="width: 23rem;">
        <div class="card-body">
          <h5 class="card-title">my diary ${index + 1}</h5>
          <hr>
          <p id="coll"  class="card-text " >${element}</p>
          <button id="${index}" onclick="deletediary(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>
        `
    });
    let diaryelem = document.getElementById("diary")
    if (diaryobj.length != 0) {
        diaryelem.innerHTML = html;
    }
    else{
        diaryelem.innerHTML = `Nothing To Show ! use "Add Diary" section above to add diary.`
    }
};
 // delete a note

 function deletediary(index) {
    let diary = localStorage.getItem("diary");
    if (diary == null) {
        diaryobj = [];
    }
    else{
        diaryobj = JSON.parse(diary);
    }

    diaryobj.splice(index, 1);
    localStorage.setItem("diary", JSON.stringify(diaryobj))
    showdiary()
 }

let search = document.getElementById("searchtxt")
search.addEventListener("input", function () {
    let searchval = search.value;
    console.log("helo" ,searchval)
    let diarycard = document.getElementsByClassName("diarycard")
    Array.from(diarycard).forEach(function(element){
        let cardtext = element.getElementsByTagName("p")[0].innerText
        if (cardtext.includes(searchval)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})



