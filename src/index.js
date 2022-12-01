document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', e => 
    {
      e.preventDefault()
      textInput = document.querySelector("#new-task-description").value;
      itemToDo(textInput)
      form.reset()
       
     
    })
  });

// Function for adding to do items
function itemToDo(todo)
{
  let li = document.createElement('p');
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo);
  btn.textContent = "x"
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)

}

function deleteToDo(e)
{
  e.target.parentNode.remove()
}
