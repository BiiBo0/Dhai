
// (function(){
//     var imageCount = 3;
//     var itemsSection = document.querySelector('#items');
//     var cartoona = ` `;
//     for(var i=1;i<=imageCount;++i){
//         cartoona+=`
//         <div class="card mx-1 my-3 pb-0">
//             <img src="images/items/${i}.jfif" class="card-img-top" style="height: 250px;" alt="...">
//             <div class="card-body" style="padding: 0.5rem;">
//                 <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//             </div>
//         </div>`
//     }
//     itemsSection.innerHTML = cartoona;
// })();

// main.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }
    
    // Initial check in case some cards are already visible
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});


