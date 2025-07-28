const files = [
  'bad_apple.mp3', //0
  'bikeee.jpg', //1
  'bocchi_passport.jpg', //2
  'Cirvana.jpg', //3
  'crispy.jpg', //4
  'dont_think.jpg', //5
  'embrace.jpg', //6
  'gasoline_yummy.jpg', //7
  'hello_hi.mp4', //8
  'magnetic.gif', //9
  'me_coding.mp4', //10
  'please.gif', //11
  'ryo_smart.jpg', //12
  'videocall.jpg', //13
];

const imgFormats = ['.jpg', '.gif', '.png', '.jpg'];
const audioFormats = ['.mp3', '.wav', '.ogg', '.aac', '.flac', '.m4a'];
const videoFormats = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];
const filesLength = files.length;
const slider = document.getElementById('slider');
const navBar = document.getElementById('navbar');
const displayZone = document.getElementById('display-zone');
const leftButton = document.getElementById('nav-left');
const rightButton = document.getElementById('nav-right');
const hideButtons = () => {
  currentIndex <= 0
    ? leftButton.classList.add('hidden')
    : leftButton.classList.remove('hidden');
  currentIndex >= filesLength - 1
    ? rightButton.classList.add('hidden')
    : rightButton.classList.remove('hidden');
};
let currentIndex = 0;
console.log(filesLength);

for (let i = 0; i < filesLength; i++) {
  const newButton = document.createElement('button');
  newButton.dataset.navId = i;
  navBar.appendChild(newButton);
}

navBar.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  } else {
    if (displayZone.firstElementChild) {
      displayZone.removeChild(displayZone.firstElementChild);
    }
    currentIndex = Number(event.target.dataset.navId);
    switchMedia();
    console.log(currentIndex);
  }
});

hideButtons();

const switchMedia = () => {
  hideButtons();
  slider.classList.remove('slider_audio');
  if (imgFormats.some((format) => files[currentIndex].endsWith(format))) {
    const newImg = document.createElement('img');
    newImg.src = `media/${files[currentIndex]}`;
    displayZone.appendChild(newImg);
  }
  if (audioFormats.some((format) => files[currentIndex].endsWith(format))) {
    const newAudio = document.createElement('audio');
    newAudio.controls = true;
    newAudio.volume = 0.2;
    newAudio.src = `media/${files[currentIndex]}`;
    slider.classList.add('slider_audio');
    displayZone.appendChild(newAudio);
  }
  if (videoFormats.some((format) => files[currentIndex].endsWith(format))) {
    const newVideo = document.createElement('video');
    newVideo.src = `media/${files[currentIndex]}`;
    newVideo.controls = true;
    newVideo.autoplay = true;
    newVideo.volume = 0.2;
    displayZone.appendChild(newVideo);
  }
};
switchMedia();
rightButton.addEventListener('click', () => {
  if (displayZone.firstElementChild) {
    displayZone.removeChild(displayZone.firstElementChild);
  }
  currentIndex++;
  console.log(currentIndex);
  switchMedia();
});

leftButton.addEventListener('click', () => {
  if (displayZone.firstElementChild) {
    displayZone.removeChild(displayZone.firstElementChild);
  }
  currentIndex--;
  console.log(currentIndex);
  switchMedia();
});
