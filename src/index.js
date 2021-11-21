const init = () => {

  const formSection = document.querySelector('form');
  
  formSection.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('input#searchByID')

    
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(r => r.json())
    .then(moviesArr => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p')
        
        title.innerText = moviesArr.title;
        summary.innerText = moviesArr.summary;
  });
});
}

document.addEventListener('DOMContentLoaded', init);