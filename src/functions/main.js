const showMobileMenu = () => {
    window.addEventListener("load", function() {
        document.querySelector('.toggle-burger svg').onclick=function(){
            document.querySelector('.portifolio-header-mobile ul').classList.toggle('active');
            document.querySelector('.shadowEffect').classList.add('shadowOn');
            document.querySelector('.toggle-burger').setAttribute('style','display:none;')
        }
    });
};

export default showMobileMenu;
