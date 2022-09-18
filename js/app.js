// fetch('https://api.lorem.space/image/watch?w=150&h=150')
// .then(resp => resp.json())
// .then(data => console.log(data));

// let carouselImage = document.getElementById('images-carousel').src;
const nextBtn = document.getElementById('btn-next');


;let changeIt = () => {
    document.getElementById('images-carousel').src = 'https://api.lorem.space/image/furniture';
}

setInterval( () => {
changeIt();
},3000);