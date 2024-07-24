// document.querySelectorAll('.select').forEach(select => {
//     select.addEventListener('click', function() {
//         this.nextElementSibling.classList.toggle('menu-open');
//         this.querySelector('.caret').classList.toggle('caret-rotate');
//     });
// });

// document.querySelectorAll('.menu li').forEach(item => {
//     item.addEventListener('click', function() {
//         const dropdown = this.closest('.dropdown');
//         dropdown.querySelector('.selected').textContent = this.textContent;
//         dropdown.querySelector('.menu-open').classList.remove('menu-open');
//         dropdown.querySelector('.caret-rotate').classList.remove('caret-rotate');
//         dropdown.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

// document.addEventListener('click', function(e) {
//     if (!e.target.closest('.dropdown')) {
//         document.querySelectorAll('.menu-open').forEach(menu => menu.classList.remove('menu-open'));
//         document.querySelectorAll('.caret-rotate').forEach(caret => caret.classList.remove('caret-rotate'));
//     }
// });

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const selected = dropdown.querySelector('.selected');

//     select.addEventListener('click', () => {
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');
//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');

//             options.forEach(opt => {
//                 opt.classList.remove('active');
//             });
//             option.classList.add('active');
//         });
//     });
// });

// document.addEventListener('click', (e) => {
//     if (!e.target.closest('.dropdown')) {
//         document.querySelectorAll('.select').forEach(select => select.classList.remove('select-clicked'));
//         document.querySelectorAll('.caret').forEach(caret => caret.classList.remove('caret-rotate'));
//         document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('menu-open'));
//     }
// });



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.select').forEach(select => select.classList.remove('select-clicked'));
        document.querySelectorAll('.caret').forEach(caret => caret.classList.remove('caret-rotate'));
        document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('menu-open'));
    }
});
