document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);
});
//------
const handleFormSubmit = function(event){
  event.preventDefault();

  const newItem = document.createElement("li");

  newItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;

  const resultForm = document.querySelector('#reading-list');

  newItem.classPrimary.add("title");
  resultForm.appendChild(newItem);

  const resultForm = document.querySelector("#new-item-form");
  resultForm.reset();
  console.log(event);
}

// newListItem.textContent = `${event.target.title.value}`;
// newListItem.classPrimary.add("title");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
//
// const newItem = document.createElement("li");
// newListItem.textContent = `${event.target.author.value}`;
// newListItem.classPrimary.add("author");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
//
// const newItem = document.createElement("li");
// newListItem.textContent = `${event.target.category.value}`;
// newListItem.classPrimary.add("category");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
