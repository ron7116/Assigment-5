document.getElementById('clear-history-btn')
    .addEventListener('click',function(event){
        const parent = document.getElementById('completed-task-container');
        const children =  parent.childNodes;
        if(children.length > 0){
            for(let element of children){
                element.style.display = 'none';
            }
        }
})