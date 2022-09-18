// fetch('https://api.lorem.space/image/watch?w=150&h=150')
// .then(resp => resp.json())
// .then(data => console.log(data));

let carouselImage = document.getElementById('images-carousel');
const nextBtn = document.getElementById('btn-next');


;let changeIt = () => {
    carouselImage.innerHTML = '';
    carouselImage.innerHTML = `<img  src="https://api.lorem.space/image/furniture" alt="">`;
}

setInterval( () => {
changeIt();
},3000);