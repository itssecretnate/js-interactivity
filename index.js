console.log("hello world");

const message = document.querySelector('#message');


const addMovie = (event) => {
    event.preventDefault();

    // Define the variables.
    let inputField = document.querySelector("input"); // Find the input field
    let movie = document.createElement("li"); // Create an li element
    let movieTitle = document.createElement('span'); // Create a span element
    
    // Modify and append variables.
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    
    movie.appendChild(movieTitle);
    
    // Create and append the delete button.
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    
    // Finally append the movie to the doucment and reset the input field.
    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
    
}

const deleteMovie = (event) => {
    console.log(event.target.parentNode.childNodes[0].textContent);
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} was deleted.`; // Not sure if I did this in the best way possible.
    event.target.parentNode.remove();
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')) message.textContent = `${event.target.textContent} has been watched.`;
    else message.textContent = `${event.target.textContent} was added back.`;
    revealMessage();
}

const revealMessage = () => {
    message.className = "";
    setTimeout(() => { message.className = "hide" }, 1000)
}

document.querySelector('form').addEventListener('submit', addMovie);