const showMobileMenu = () => {
    window.addEventListener("load", function() {
        // Function to show the mobile menu and shadow effect
        function showMenu() {
            document.querySelector('.portifolio-header-mobile ul').classList.add('active');
            document.querySelector('.shadowEffect').classList.add('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'none';
        }
    
        // Function to hide the mobile menu and shadow effect
        function hideMenu() {
            document.querySelector('.portifolio-header-mobile ul').classList.remove('active');
            document.querySelector('.shadowEffect').classList.remove('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'block';
        }
    
        // Add click event to the burger icon to show the menu
        document.querySelector('.toggle-burger svg').addEventListener('click', showMenu);
    
        // Add click event to the shadow effect to hide the menu
        document.querySelector('.shadowEffect').addEventListener('click', hideMenu);
    });

    
};

const zoomImage = () => {
    window.addEventListener("load", function() {
        document.querySelector('.hidden_box').onclick=function(){
        document.querySelector('.curriculum-section .box-image img').classList.toggle('active-zoom')
        }
    })
}

export {showMobileMenu,zoomImage}

