
import moment from 'https://cdn.skypack.dev/moment';

let yrop = document.querySelector(".yearOp");
let mnop = document.querySelector(".monthOp");
let dyop = document.querySelector(".dayOp");

const date = new Date();
let preyr = date.getFullYear();
let premn = date.getMonth();
let preday = date.getDate()+1;
let btn = document.querySelector(".btn-icon");

btn.addEventListener('click', () => {
    let yearip = document.querySelector(".year");
    let mnip = document.querySelector(".month");
    let dayip = document.querySelector(".day");
    const presentyear = date.getFullYear();
    const totmon = date.getMonth();
    let d1 = new Date(preyr,premn,preday);
    let d2 = new Date(yearip.value,mnip.value - 1,dayip.value);

    // Initialize Moment.js without an array
    /*let startday = moment([yearip.value, mnip.value, dayip.value]);
    let endday = moment([date.getFullYear(), date.getMonth(), date.getDate() + 1]);*/

    let diff = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));
    let mndiff = d1.getMonth() - d2.getMonth();
    let yrdiff = d1.getFullYear() - d2.getFullYear();
    
    yrop.innerHTML = `<span class="digits">${presentyear - yearip.value}</span> <span class="text">Years</span>`;
    mnop.innerHTML = `<span class="digits">${mndiff + yrdiff * 12}</span> <span class="text">Months</span>`;
    dyop.innerHTML = `<span class="digits">${diff}</span> <span class="text">Days</span>`;
});
