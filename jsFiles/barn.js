
const imageQuantity = 24;


//element variables
const container = document.querySelector('.barn-container-card');


//card function
const createCard = () => {
    //creating card
    for (let i = 1; i <= imageQuantity; i++) {
        const card = document.createElement('div');
        const cardImage = document.createElement('div');
        const cardTitle = document.createElement('div');
        const cardText = document.createElement('div');
        const cardP = document.createElement('p');
        const button = document.createElement('a');

        //adding classnames
        card.classList.add(`bn-card`, `card${i}`);
        cardImage.classList.add('bn-card-img');
        cardTitle.classList.add(`bn-card-title`, `title${i}`);
        cardText.classList.add('bn-card-text');
        cardP.classList.add('bn-card-p');
        button.classList.add('bn-card-button');

        createCardContent(cardImage, cardTitle, cardText, cardP, i, button);
        card.append(cardImage, cardTitle, cardText, cardP, button);
        container.appendChild(card);

    }
}

const createCardContent = (image, title, text, p, count, button) => {

    const img = document.createElement('img');
    img.src = `assets/barn/house${count}.jpg`;
    img.classList.add(`image${count}`, 'barn-image');

    const imageLogo = document.createElement('img');
    imageLogo.src = 'assets/barn/logoImage.png';
    imageLogo.classList.add('logo-image');

    const imageLogo2 = document.createElement('h2');
    imageLogo2.innerText = 'BIG BOY METAL BUILDINGS';
    imageLogo2.classList.add('logo-text');
    imageLogo2.id = 'h2';

    image.appendChild(img);
    image.appendChild(imageLogo);
    image.appendChild(imageLogo2);

    title.innerText = "TBD"
    text.innerText = 'Financing Available';
    p.innerText = "We will help you find the best option";
    button.href = "https://bigboymetalbuildings.sensei3d.com"
    button.innerHTML = "<img src='./assets/svg/mrFoxM01.svg' />Create your Building"
}



createCard();
