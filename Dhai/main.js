// Toggle mobile menu
// function toggleMobileMenu() {
//     const mobileNav = document.getElementById('mobileNav');
//     const menuBtn = document.getElementById('mobileMenuBtn');
//     const icon = menuBtn.querySelector('i');
    
//     if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
//         mobileNav.style.display = 'block';
//         icon.className = 'fas fa-times';
//     } else {
//         mobileNav.style.display = 'none';
//         icon.className = 'fas fa-bars';
//     }
// }

(function(){
    var imageCount = 3;
    var itemsSection = document.querySelector('#items');
    var cartoona = ` `;
    for(var i=1;i<=imageCount;++i){
        cartoona+=`
        <div class="card mx-1 my-3 pb-0">
            <img src="images/items/${i}.jfif" class="card-img-top" style="height: 250px;" alt="...">
            <div class="card-body" style="padding: 0.5rem;">
                <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
        </div>`
    }
    itemsSection.innerHTML = cartoona;
})();

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (!menuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
        if (mobileNav.style.display === 'block') {
            toggleMobileMenu();
        }
    }
});


// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Header loaded successfully');
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

