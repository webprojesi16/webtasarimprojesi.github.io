
// Navbar Code 
var navlink = document.querySelectorAll( ".navlink" );
function activeLink()
{
    navlink.forEach( ( item ) =>
    {
        item.classList.remove( "active" );
    } ); this.classList.add( "active" );
}
navlink.forEach( ( item ) => item.addEventListener( 'click', activeLink ) );

// Scrolling Animation Code 
ScrollReveal( {
    reset: true,
    distance: '50px',
    duration: 1600,
    delay: 400
} );
ScrollReveal().reveal( '.navbar, .aboutimg-box', { origin: 'left' } );
ScrollReveal().reveal( '.details-box', { origin: 'right' } );
ScrollReveal().reveal( '.subHeading,  .heading, .scroll-down', { origin: 'top' } );
ScrollReveal().reveal( '.social-icons, .person-detail, .person-img, .service-box, .img-box, .text-box, .testi-container, .contact-container', { delay: 400, origin: 'bottom' } );
