const ul = document.querySelector('.nav-bar2-dropdown ul');
const buildingOption = document.querySelector('.options');
const dropdown_button = document.querySelector('.nav-bar2-dropdown');
const navbar = document.querySelector('.nav-bar2');
const tablet_button = document.querySelector('.tablet-svg');
const tabletUl = document.querySelector('#tablet-ul')


const liText = [
    'Big Boy Barndominiums',
    'Big Boy Carports',
    'Big Boy Metal Buildings',
    'Big Boy Concrete'
];

const ancHref = [
    './barn.html',
    'https://www.facebook.com/p/Big-Boy-Carports-100078877942333/',
    './metal.html',
    './concrete.html'
];
//                               computer or laptop drop down functions()
const createLi = (liArr, aArr) => {
    for (let i = 0; i < liArr.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = liArr[i];
        a.href = aArr[i];
        ul.append(li);
        li.append(a);
    }
}

const dropdown = (element) => {
    element.addEventListener('mouseenter', () => {
        dropdown_button.classList.remove('hidden');
    })
    element.addEventListener('touchend', () => {
        dropdown_button.classList.remove('hidden');
    })
    navbar.addEventListener('mouseleave', (e) => {
        if (!element.contains(e.target)) {
            dropdown_button.classList.add('hidden');
        }
    });
}


//  tablet or phone side panel functions()

//creating the side panel
const createSidePanel = (el) => {
    const tablet_sidebar_container = document.querySelector('.tablet-sidebar-container');
    const headerLogo = document.querySelector('.header-logo');
    const removal = document.querySelector('.body-information-container');
    const toggleSideBar = () => {

        tablet_sidebar_container.classList.toggle('active');
        removal.classList.toggle('hidden');
        headerLogo.classList.toggle('bar');
    }

    //toggling the sidebar when buttons pressed 
    el.addEventListener('touchend', toggleSideBar);
    document.addEventListener('touchend', (e) => {
        if (!tablet_sidebar_container.contains(e.target) && !el.contains(e.target)) {
            if (tablet_sidebar_container.classList.contains('active')) {
                toggleSideBar();
            }
        }
    })

}



//creating the content for the sidebar
const createSideBarContent = (liArr, aArr) => {
    const svgArr = [
        './assets/svg/barndo',
        './assets/svg/carport',
        './assets/svg/metal-building',
        './assets/svg/concrete'
    ];

    const divHeader = document.createElement('div');
    const img = document.createElement('img');
    const hr = document.createElement('hr');

    img.src = './assets/barn/logoImage.png';

    divHeader.classList.add('tablet-element-logo');
    img.classList.add('tablet-logo');

    divHeader.append(img);
    tabletUl.append(divHeader, hr);

    for (let i = 0; i < liArr.length; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const a = document.createElement('a');
        const div = document.createElement('div');


        a.innerText = liArr[i];
        a.href = aArr[i];
        console.log(a.href[i]);

        //assigning img
        img.src = `${svgArr[i]}.svg`;

        //adding class
        div.classList.add('tablet-element');

        //appending elements
        tabletUl.append(div);
        div.append(li);
        li.append(img, a);

        //hover effect for links
        hoverEffect(div);
    }
}


// HOVER EFFECT FOR ANCHOR ELEMENTS
const hoverEffect = (el) => {
    const sidebar = document.querySelector('.tablet-dropdown-button-container');

    el.addEventListener('touchstart', () => {
        el.classList.add('hover-effect');
    });
    el.addEventListener('touchend', (e) => {
        el.classList.remove('hover-effect');
    })

}

const resBgImage = () => {
    const bgImage = document.querySelector('#bg-image');
    const screenWidth = document.body.clientWidth;
    console.log(screenWidth);
    if (screenWidth <= 480) {
        bgImage.src = './assets/barn/house11.jpg';
    } else {
        bgImage.src = './assets/barn/house1.jpg';
    }
}

resBgImage();


createLi(liText, ancHref);
dropdown(buildingOption);
createSidePanel(tablet_button);
createSideBarContent(liText, ancHref);