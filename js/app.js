const trigger = document.getElementById('dropdown-trigger');
const dropList = document.getElementById('checkbox-drop-list');
const secondaryForm = document.getElementById('furtherQuestions');
let caliChecked, nYChecked, washChecked, illiChecked, nJChecked;

trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  dropList.classList.toggle('show-hidden');
})

document.addEventListener('click', (e) => {
  if(!trigger.contains(e.target) && !dropList.contains(e.target)){
    dropList.classList.remove('show-hidden');
  }
})

const form = document.getElementById('statePage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const checkedStates = formData.getAll('State');

  form.classList.toggle('hide-visible');

  caliChecked = checkedStates.includes('California');
  console.log(caliChecked);
  nYChecked = checkedStates.includes('New York');
  washChecked = checkedStates.includes('Washington');
  illiChecked = checkedStates.includes('Illinois');
  nJChecked = checkedStates.includes('New Jersey');


  if(caliChecked || illiChecked || nJChecked || nYChecked) {
    const moneyQs = document.getElementById('moneyQuestions');
    moneyQs.classList.toggle('show-hidden');
  }

  if(nYChecked){
    const nYQs = document.getElementById('nYQuestions');
    nYQs.classList.toggle('show-hidden');

    const nYCoQs = document.getElementById('nyCo2Questions');
    nYCoQs.classList.toggle('show-hidden');
    console.log("code ran");
  }

  if(washChecked){
    const washQs = document.getElementById('washQuestions');
    washQs.classList.toggle('show-hidden');
    const washQs2 = document.getElementById('washQuestions2');
    washQs2.classList.toggle('show-hidden');
  }


  secondaryForm.classList.toggle('show-hidden');
  const button2 = document.getElementById("nextPage2");
  button2.classList.toggle('show-hidden');

})


secondaryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  secondaryForm.classList.toggle('hide-visible');
  const formData2 = new FormData(secondaryForm);
  const revenueLevel = formData2.get('revenue');
  const nyBuilding = formData2.get('nyBuild');
  const nyCo2Level = formData2.get('nyCo2Qs');
  const washEmissions = formData2.get('washCo2');
  const washBuilding = formData2.get('washBuild');




  if(revenueLevel === '500M' && caliChecked) {
    const cali500 = document.getElementById('cali500M');
    cali500.classList.toggle('show-hidden');
  }

  if(revenueLevel === '1B' && caliChecked) {
    const cali1B = document.getElementById('cali1B');
    cali1B.classList.toggle('show-hidden');
  }

  if(nyBuilding === '25kNY' && nYChecked) {
    const nY25K = document.getElementById('NYSquareFt');
    nY25K.classList.toggle('show-hidden');
  }

  if(revenueLevel === '1B' && nYChecked) {
    const nY1B = document.getElementById('NY1B');
    nY1B.classList.toggle('show-hidden');
  }

  if(nyCo2Level === '25k' && nYChecked) {
    const nY25KCo2 = document.getElementById('NYCO2');
    nY25KCo2.classList.toggle('show-hidden');
  }

  if(revenueLevel === '1B' && illiChecked) {
    const illi1B = document.getElementById('illi1B');
    illi1B.classList.toggle('show-hidden');
  }

  if(revenueLevel === '1B' && nJChecked) {
    const nJ1B = document.getElementById('nJ1B');
    nJ1B.classList.toggle('show-hidden');
  }

  if(washEmissions === '10k' && washChecked) {
    const wash10k = document.getElementById('wash10k');
    wash10k.classList.toggle('show-hidden');
  }

  if(washEmissions === '25k' && washChecked) {
    const wash25k = document.getElementById('wash25k');
    wash25k.classList.toggle('show-hidden');
  }

  if(washBuilding === 'Yes50k' && washChecked) {
    const wash50kfeet = document.getElementById('wash50k');
    wash50kfeet.classList.toggle('show-hidden');
  }

  const federalBlurb = document.getElementById('federal');
  federalBlurb.classList.toggle('show-hidden');


})

