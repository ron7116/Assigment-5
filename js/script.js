const buttons = document.querySelectorAll('.completed-btn');

for (const element of buttons) {
    element.addEventListener('click',function(event){
        let d = new Date;
        let time = d.toLocaleTimeString();
        alert('Board updated Successfully');
        const taskNumber = document.getElementById('task-number').innerText;
        let convertedTaskNumber = parseInt(taskNumber);
        const totalNumber = document.getElementById('total-number').innerText;
        let convertedTotalNumber =parseInt(totalNumber);
        convertedTaskNumber--;
        document.getElementById('task-number').innerText = convertedTaskNumber;
        convertedTotalNumber++;
        document.getElementById('total-number').innerText = convertedTotalNumber;
        const secondTitle = event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
        const taskContainer = document.getElementById('completed-task-container');
        const p = document.createElement('p');
        p.innerText = `You have completed the task ${secondTitle} at ${time}`;
        p.classList.add('bg-slate-300', 'p-2', 'rounded-lg', 'mt-2');
        taskContainer.appendChild(p);
        event.target.setAttribute('disabled', '');
        if(convertedTaskNumber === 0){
            alert('congrats!!! You have completed all the current task')
        }
    })
}


document.getElementById('discover-btn')
    .addEventListener('click',function(){
        window.location.href = 'blog.html';
})

let d = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[d.getDay()];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
document.getElementById('date-text').innerText = `${day} ${month} ${date} ${year}`;