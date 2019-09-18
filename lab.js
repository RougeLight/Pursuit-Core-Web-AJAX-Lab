// document.addEventListener("DOMContentLoaded", () => {
//    let button = document.querySelector('#hmph')
//    button.addEventListener('click', getRandomImage)
// })

// function press() {
//    console.log('Clicked!')
// }

// const getRandomImage = () => {
//    const gimme = new XMLHttpRequest()
//    gimme.onreadystatechange = function () {
//       if (this.readyState === this.DONE) {
//          let parsedResponse = JSON.parse(this.response)
//          let imgSo = parsedResponse.message
//          displayImage(imgSo)

//       }
//    }
//    gimme.open('GET', 'https://dog.ceo/api/breeds/image/random')
//    gimme.send()
// // }

// // const displayImage = (url) => {
// //    let prevImg = document.querySelector('img')
// //    if (!prevImg) {//Noimage in DOM. First time clicking}
// //       let dogImg = document.createElement('img')
// //       dogImg.src = url
// //       document.body.appendChild(dogImg)
// //    } else {
// //       let newDogImage = document.createElement('img')
// //       newDogImage.src = url
// //       prevImg.parentNode.replaceChild(newDogImage, prevImg)
// //       // img.src = url
// //       // document.body.replaceChild(img)
// //    }
// // }
// console.log('sup')
// const fetchDogImage = () => {
//    console.log('fetchogmage')
//    let fetchRequestPromise = fetch('https://dog.ceo/api/breeds/image/random')

// }

// const handlePromiseSuccess = (response) => {
//    console.log('Promise fulfiled. Response arrived!', response.json())
//    return response.json()
// }
// //fetchPromise.then(handlePromiseSuccess).then()
// const handleParsedResponse = (data) => {
//    console.log('Data converted/parsed', data)
//    displayImage(data.message)
// }
// fetchRequestPromise
//    .then(handlePromiseSuccess)
//    .then(handleParsedResponsedata)

document.addEventListener('DOMContentLoaded', () => {
   console.log('DOM Loaded')
   fetchDogImage();
   let button = document.querySelector('button');
   console.log('button grabbed')
   button.addEventListener('click', fetchDogImage);
   console.log('DOM Loaded listener is done')
})
const fetchDogImage = () => {
   console.log('fetchingDogImage started');
   let fetchRequestPromise = fetch('https://dog.ceo/api/breeds/image/random'); // get requests asre default
   //1st state of promise is pending
   //then, a new state happenes: resolved or rejected
   //promise is resolved --> fulfilled
   //promise is rejected --> unfulfilled
   console.log(fetchRequestPromise);
   const handlePromiseSuccess = (response) => {
       console.log('promised fulfilled. response arrived!', response);
       return response.json();
   }
   const handleParsedResponseData = (data) => {
       console.log('Data converted/parsed', data)
       displayImage(data.message)
   }
   fetchRequestPromise
       .then(handlePromiseSuccess)
       .then(handleParsedResponseData);
   //process respose without fetch
   //     const xhr = new XMLHttpRequest();
   //     xhr.onreadystatechange = function () {
   //         console.log('request state changed');
   //         if (this.readyState === this.DONE) {
   //             let parsedResponse = JSON.parse(this.response);
   //             let imageSrc = parsedResponse.message;
   //             console.log('request arrived. request state is done')
   //             displayImage(imageSrc);
   //         }
   //     }
   //     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
   //     console.log('request about to send');
   //     xhr.send();
   console.log('fetchDogImage finished');
}

fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => {
      //Recieves HTTP Response amd initiates parsing of data
      return  response.json();
   })
   .then(dataObj => {
      //Recieves the parsed data after succesful extractions/conversions
      displayImage(dataObj.message)
   })
const displayImage = (url) => {
   let prevImg = document.querySelector('img');
   if (!prevImg) {
       let dogImg = document.createElement('img');
       dogImg.src = url;
       document.body.appendChild(dogImg);
   } else {
       let newDogImg = document.createElement('img');
       newDogImg.src = url;
       prevImg.parentNode.replaceChild(newDogImg, prevImg);
   }
}
console.log('js file')
