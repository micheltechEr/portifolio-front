const showMobileMenu = () => {
    window.addEventListener("load", function() {
        // Function to show the mobile menu and shadow effect
        function showMenu() {
            document.querySelector('.portifolio-header-mobile ul').classList.add('active');
            document.querySelector('.shadowEffect').classList.add('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'none';
        }
    
        function hideMenu() {
            let menu = document.querySelector('.portifolio-header-mobile ul');
            menu.classList.remove('active');
                document.querySelector('.shadowEffect').classList.remove('shadowOn');
                document.querySelector('.toggle-burger').style.display = 'block';
        }
    
        document.querySelector('.toggle-burger svg').addEventListener('click', showMenu);
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

