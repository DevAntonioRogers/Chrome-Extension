


let myLeads = [1,2,3,4,5,6,7]
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const inputBTN = document.getElementById('input-btn')


inputBTN.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})


for(let i = 0; i < myLeads.length; i++){
  ulEl.textContent += myLeads[i]+ ' '
}