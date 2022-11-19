 // ihtiyaç duyulan elementler
 const fullnameInput=document.getElementById("fullname")
 const phoneInput=document.getElementById("phone")
 const saveBtn=document.getElementById("saveBtn")
 const listPeople=document.getElementById("listPeople")
 const searchInput=document.getElementById("search") 
 
 // initial people

 var people=[];

 // events
 saveBtn.addEventListener("click", function(){
    if(fullnameInput.value === "" ||phoneInput.value === "") {
        alert("Ad ve Telefon alanı zorunlu alanlardır");
    return;
}

const newPerson= {
    fullname:fullnameInput.value,
    phone:phoneInput.value,
};

people.push(newPerson);
listPeopleFunc(people);
fullnameInput.value="";
phpne.Input.value="";
 });

searchInput.addEventListener("keyup", function (event) {
    var tempArray = people.filter(item) => item.fullname.includes(event.target.value)
    );
     listPeopleFunc(tempArray)
})

people.push(newPerson)
listPeopleFunc()
fullnameInput.value=''
phpne.Input.value=''
})

//functions
function listPeopleFunc(parametre) {
    /*
    <div class="content">
                <h3>Gülistan Yılmazseyyidoğlu</h3>
                <p>05534487323</p>

    */



    listPeople.innerHTML="";
    
    if(parametre.lenght ===0) {
    listPeople.innerHTML=
    "<p style='text-align:center;>Gösterilecek Kayıt Yok</p"
    } else {
    for(let i=0; i<parametre.lenght; i+++) {
    const div=document.createElement("div")
    div.classList.add("content");
    const h3=document.createElement("h3")
    h3.innerText=people[i].fullname;
    const p=document.createElement("p")
    p.innerText=people[i].phone;
    div.appendChild(h3);
    div.appendChild(p);
    listPeople.appendChild(div);

  }
}




