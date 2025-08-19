let leads=[]

const inputEl=document.querySelector("#input-el")
const saveBtn=document.querySelector("#save-btn")
const deleteBtn=document.querySelector("#delete-btn")
const ulEl=document.querySelector("#ul-el")

saveBtn.addEventListener("click", function(){
    console.log("Button Clicked!")
    leads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(leads))
    render(leads)
    inputEl.value=""
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    leads=[]
    render(leads)
})

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    render(leadsFromLocalStorage)
}

function render(myArray){
let listItems=""
for(let i=0; i<myArray.length; i++){
    listItems+=`
    <li>
        <a href="${myArray[i]}" target="_blank">
            ${myArray[i]}
        </a>
    </li>
    `
}
ulEl.innerHTML=listItems
}

// let urlArray=[
//     {url: "https://linkedin.com/in/per-harald-borgen/"}
// ]

let tabBtn=document.querySelector("#tab-btn")
 tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    console.log(tabs)
    leads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(leads))
    render(leads)
})
})