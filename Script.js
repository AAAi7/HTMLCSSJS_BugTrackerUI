//Dissmiss Alerts
var alert_del=document.querySelectorAll('.fa-times');
console.log(alert_del);
alert_del.forEach(x => {
    console.log(x);
    x.addEventListener('click',()=> {
        console.log(x);
        x.parentElement.classList.add('hidden')
    })
});
//-------------------------------------------------

