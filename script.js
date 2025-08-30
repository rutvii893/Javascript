const destinations=[
{name:"Maldives Beach",img:"https://tse4.mm.bing.net/th/id/OIP.ru3K0YjwH5EUYPhtFkwBCAHaIz?pid=Api&P=0&h=180"},
{name:"Bora Bora",img:"https://tse4.mm.bing.net/th/id/OIP.qWs3hYqinKxorD0VoxzVzwHaFS?pid=Api&P=0&h=180"},
{name:"Angkor Wat",img:"https://tse4.mm.bing.net/th/id/OIP.kBSWhJDuA3NIeJ4MNZ7G0AHaDt?pid=Api&P=0&h=180"},
{name:"Golden Temple",img:"https://tse1.mm.bing.net/th/id/OIP.vSVY97Yb79TZWNwJrVj7lAHaGe?pid=Api&P=0&h=180"},
{name:"Japan",img:"https://tse4.mm.bing.net/th/id/OIP.TW9sHFkpKCCZ37U8UZmaRgHaEu?pid=Api&P=0&h=180"},
{name:"Italy",img:"https://tse1.mm.bing.net/th/id/OIP.C417eCuy3gPlda6nVa8wmwHaFW?pid=Api&P=0&h=180"}];

function displayRecommendations(list){
const container=document.getElementById('recommendationContainer');
if(!container) return;
container.innerHTML='';
list.forEach(dest=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`<img src="${dest.img}" alt="${dest.name}"><h3>${dest.name}</h3>`;
container.appendChild(card);
});}

displayRecommendations(destinations);

function searchDestinations(){
const query=document.getElementById('searchInput').value.toLowerCase();
const filtered=destinations.filter(dest=>dest.name.toLowerCase().includes(query));
displayRecommendations(filtered);
}

function bookNow(){
alert("Thank you for choosing TravelBloom! We will contact you soon.");
}

const form=document.getElementById('contactForm');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
alert('Message sent! Thank you for contacting TravelBloom.');
this.reset();
});}
