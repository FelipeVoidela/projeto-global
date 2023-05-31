const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1; 
const year = now.getFullYear();
const date = `${day}/${month}/${year}`;
document.getElementById('data').innerText = date;