const form1 = document.querySelector('.add');
const ul = document.querySelector('ul');

const search1 = document.querySelector('.search input');


const addTemplate = (contenue)=>{


   
       
        const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${contenue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
    ul.innerHTML += html ;


}

form1.addEventListener('submit' , (e)=>{
    e.preventDefault();
let v = form1.add.value.toLowerCase();



    addTemplate(v);
    form1.reset();

});

//delete todo 


ul.addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
        console.log('true');
        e.target.parentElement.remove();
    }
});

//update todo 

ul.addEventListener('dblclick' , (e)=>{
    if(e.target.querySelector('span')){
        let k = e.target.querySelector('span');
        console.log(k.textContent);
        form1.add.value = k.textContent;
        k.parentElement.remove();
        k.textContent=form1.add.value;
    }
}); 

//search todos 

const filterTerm = (term) =>{
     Array.from(ul.children).filter((todos)=>
       !todos.textContent.includes(term)).forEach((todos) =>
         todos.classList.add('filtred'));

     Array.from(ul.children).filter((todos)=>
       todos.textContent.includes(term)).forEach((todos) =>
         todos.classList.remove('filtred'));
   

};

search1.addEventListener('keyup' , ()=>{
    const term = search1.value.trim().toLowerCase();
    filterTerm(term)
})








