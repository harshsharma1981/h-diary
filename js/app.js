



showdiary()
let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", function(e){
    let addtxt = document.getElementById("addtxt");
    let title = document.getElementById("title");
    let date1 = document.getElementById("date1");
    let diary = localStorage.getItem("diary");
  
    if (diary == null) {
        diaryobj = [];
    }
    else{
        diaryobj = JSON.parse(diary)
    }
    diaryobj.push(title.value + date1.value + addtxt.value );
    localStorage.setItem("diary", JSON.stringify(diaryobj))
    addtxt.value = ""
    console.log(date1.value)
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
    let t2 = document.getElementById("title")
    let html = "";
    diaryobj.forEach(function(element, index) {
        let elee = element.substring(0, 10);
        let eleee = elee.replace(/[0-9]/g, '');
         let ele = eleee.replace(/[-]/g, '');

      let ele33 = element.slice(0, 16)
      let ele3 = ele33.replace(/[A-Za-z]/g, "") 
      let ele222 = element.replace(`${ele3}`, '');
    let ele22 = ele222.replace(`${ele}`, '');
      let ele2 = ele22.slice(0, 3000000);
    //   let ele333 = ele22.slice(0, 10);

     

        html += `
        <div class="diarycard my-2 mx-2" style="width: 23rem;">
        <div class="card-body">
          <h5 class="card-title" maxlength="10">${ele}</h5>
          <hr>
          <h5 class="card-date" >${ele3}</h5>
          <hr>
          <p id="coll"  class="card-text " >${ele2}</p>
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



