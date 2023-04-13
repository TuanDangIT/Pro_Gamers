document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    function AddShadow(){
        if(window.scrollY>=100){
            nav.classList.add('shadow')
        }else{
            nav.classList.remove('shadow')
        }
    }
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))


    window.addEventListener('scroll', AddShadow)
})