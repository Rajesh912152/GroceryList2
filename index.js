let bgContainerEl=document.createElement('div');
bgContainerEl.classList.add('bg1');
document.body.appendChild(bgContainerEl);

let headingEl=document.createElement('h1');
headingEl.textContent="Grocery List";
headingEl.classList.add('heading');
bgContainerEl.appendChild(headingEl);

let unOrderedEl=document.createElement('ul');
unOrderedEl.classList.add('list-container');
bgContainerEl.appendChild(unOrderedEl);

let listProducts=['Milk','Bread','Chocolates','Cakes','Butter'];
function appendProducts(product){
    let listEl=document.createElement('li');
    listEl.textContent=product;
    unOrderedEl.appendChild(listEl);
}
for(let product of listProducts){
    appendProducts(product);
}

let inputEl=document.createElement('input');
inputEl.type="checkbox";
inputEl.id="checkboxId";
inputEl.classList.add("mt-2");
bgContainerEl.appendChild(inputEl);

let labelEl=document.createElement('label');
labelEl.textContent="Need Home Delivary";
labelEl.setAttribute('for','checkboxId');
labelEl.classList.add("text","mt-2");
bgContainerEl.appendChild(labelEl);

let breakEl=document.createElement('br');
bgContainerEl.appendChild(breakEl);

let buttonBtn=document.createElement('button');
buttonBtn.classList.add('btn',"btn-primary");
buttonBtn.textContent="Proceed to Pay";
bgContainerEl.appendChild(buttonBtn);
