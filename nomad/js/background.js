// 배경화면에 사용할 이미지들
const images = ["bg01.jpg", "bg02.jpg", "bg03.jpg"];

// quotes와 마찬가지로 이미지들을 Math함수 floor 사용하여 랜덤하게 나타내고 싶어서
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 기존과 다르게 자바스크립트에서 엘리먼트를 생성함
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// html body의 자식 요소를 생성함.
document.body.appendChild(bgImage);
