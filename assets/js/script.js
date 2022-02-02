const cards = document.querySelectorAll(".section-line");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
});


cards.forEach(card => {
    observer.observe(card)
});
