console.log("hello")
const creams = [
    { name: 'Turmeric Cream', price: '$20', skinType:['normal','dry'] , image: 'image2.jpg', weight:'150ml' },
    { name: 'Night Serum', price: '$25', skinType: 'normal', image: 'image3.jpg', weight:'100ml' },
    { name: 'Toner', price: '$15', skinType: ['normal','oily'], image: 'image4.jpg', weight:'150ml' },
    { name: 'Aloevera Cream', price: '$18', skinType: ['oily','dry'], image: 'image5.jpg' , weight:'80ml'},
    { name: 'Chocolate mask', price: '$20', skinType: 'normal', image: 'image6.jpg', weight:'120ml' },
    { name: 'Clay Mask', price: '$25', skinType: 'oily', image: 'image7.jpg', weight:'150ml'},
    { name: 'Honey & Oats Cream', price: '$15', skinType: 'oily', image: 'image8.jpg', weight:'80ml'},
    { name: 'Body Butter', price: '$18', skinType: 'dry', image: 'image9.jpg', weight:'120ml'},
    { name: 'Papaya Face Wash', price: '$20', skinType: 'dry', image: 'image10.jpg', weight:'120ml' },
    { name: 'Hibiscus Cream', price: '$25', skinType: 'normal', image: 'image11.jpg' , weight:'150ml'},
    ];

   

    function showRecommendations(skinType) {
        const recommendationsParagraph = document.getElementById('recommendationsParagraph');
        const creamNames = getCreamNamesBySkinType(skinType);
    
        if (creamNames.length > 0) {
            const recommendationsList = document.createElement('ul');
    
            creamNames.forEach(creamName => {
                const listItem = document.createElement('li');
                listItem.textContent = creamName;
                recommendationsList.appendChild(listItem);
            });
    
            recommendationsParagraph.innerHTML = `Recommended creams for ${skinType} skin:`;
            recommendationsParagraph.appendChild(recommendationsList);
        } else {
            recommendationsParagraph.textContent = 'No recommendations for the selected skin type.';
        }
      }
    
      function getCreamNamesBySkinType(skinType) {
        const recommendedCreams = creams.filter(cream => cream.skinType.includes(skinType));
        return recommendedCreams.map(cream => cream.name);
      }
      const normalSkinCreamNames = getCreamNamesBySkinType('normal');
    console.log('Cream names for Normal skin:', normalSkinCreamNames);
    
    const oilySkinCreamNames = getCreamNamesBySkinType('oily');
    console.log('Cream names for Oily skin:', oilySkinCreamNames);
    
    const drySkinCreamNames = getCreamNamesBySkinType('dry');
    console.log('Cream names for Dry skin:', drySkinCreamNames);
    



let isBasketActive = false;

function toggleBasket() {
    const basketList = document.getElementById('basketList');
    const addToBasketButton = document.querySelector('#basket button');
    const recommendationsParagraph = document.getElementById('recommendationsParagraph');
    const creamNames = Array.from(recommendationsParagraph.querySelectorAll('li')).map(li => li.textContent);

    if (!isBasketActive && creamNames.length > 0) {
        // Add items to the basket
        creamNames.forEach(creamName => {
            const listItem = document.createElement('li');
            listItem.textContent = creamName;
            basketList.appendChild(listItem);
        });

        // Change the button color to indicate selection
        addToBasketButton.style.backgroundColor = 'blue';
        isBasketActive = true;
    } else {
        // Clear the basket and reset the button color
        basketList.innerHTML = '';
        addToBasketButton.style.backgroundColor = ''; // Reset to original color
        isBasketActive = false;
    }
}
// Call the function on button click
const addToBasketButton = document.querySelector('#basket button');
addToBasketButton.addEventListener('click', toggleBasket);