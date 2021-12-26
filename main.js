function motivationalSpeechWallpaper(wallpaperObject) {
  const innerFlex = document.createElement('div');
  innerFlex.classList.add('d-flex', 'img_frame');

  const imgFrame = document.createElement('div');
  innerFlex.append(imgFrame);
  imgFrame.classList.add(
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );

  const bgImage = document.createElement('img');
  bgImage.classList.add('bg_image', `wallpaper${wallpaperObject.id}`);
  bgImage.src = wallpaperObject.imgUrl;
  imgFrame.append(bgImage);

  const speechContainer = document.createElement('div');
  speechContainer.classList.add('d-flex');
  const speech = document.createElement('h1');
  speech.style.color = '#' + wallpaperObject.color;
  speech.classList.add(
    'speech',
    `${wallpaperObject.style}`,
    `wallpaper${wallpaperObject.id}`
  );
  speech.innerHTML = wallpaperObject.text;
  speechContainer.append(speech);
  imgFrame.append(speechContainer);

  return innerFlex;
}

class Wallpaper {
  constructor(text, color, imgUrl, id, style) {
    this.text = text;
    this.color = color;
    this.imgUrl = imgUrl;
    this.id = id;
    this.style = style;
  }
}

const domObj = document.getElementById('target');

//surrealさん
const wallpaper1 = new Wallpaper(
  'You can overcome anything, if and only if you love something enough.',
  'ecf0f1', //黒っぽい
  'images/surreal1.jpg',
  '1',
  'Comfortsurreal'
);

const wallpaper2 = new Wallpaper(
  'Every noble work is at first impossible.',
  'ecf0f1', //白っぽい
  'images/surreal2.jpg',
  '2',
  'Comfortsurreal'
);

const wallpaper3 = new Wallpaper(
  'All great achievements require time.',
  'ecf0f1',
  'images/surreal3.jpg',
  '3',
  'Comfortsurreal'
);

//tamaさん
const wallpaper4 = new Wallpaper(
  '基本に立ち返り関数の入出力を意識する。どのようなデータを受け取り、返すのか。しっかり意識すること。 - Wickey 超先生',
  'ecf0f1',
  'images/tama1.jpg',
  '4',
  'Rounded1c'
);

const wallpaper5 = new Wallpaper(
  'この時代に正しいことなんかない。自分が51%正しいと思ったら、やればいい。 - 立命館アジア太平洋大学 学長 出口治明',
  'fff',
  'images/tama2.jpg',
  '5',
  'NotoSans'
);

const wallpaper6 = new Wallpaper(
  '「ありがとう」以上の言葉が、あればいいのに。 - Perfume あ～ちゃん',
  'ecf0f1',
  'images/tama3.jpg',
  '6',
  'NotoSans'
);

//zillowさん
const wallpaper7 = new Wallpaper(
  'Continuous effort – not strength or intelligence – is the key to unlocking our potential.  -Winston Churchill-',
  'fff',
  'images/zillow1.jpg',
  '7',
  'Teko'
);

const wallpaper8 = new Wallpaper(
  'The greatest glory in living lies not in never falling, but in rising every time we fall.  -Nelson Mandela- ',
  'fff',
  'images/zillow2.jpg',
  '8',
  'Teko'
);

//hase
const wallpaper9 = new Wallpaper(
  '強さとは、身体能力ではなく、不屈の精神から生まれるものだ。-マハトマ・ガンディー~',
  'ecf0f1',
  'https://cdn.pixabay.com/photo/2019/08/09/17/29/rupee-4395462_1280.jpg',
  '9',
  'kosugi'
);

const wallpaper10 = new Wallpaper(
  '人生の失敗者の多くは、自分が成功にどれだけ近づいているか気がつかずにあきらめた人たちだ。-トーマス・エジソン',
  'ecf0f1',
  'https://cdn.pixabay.com/photo/2018/06/21/20/22/lamp-3489390_1280.jpg',
  '10',
  'kosugi'
);

domObj.append(motivationalSpeechWallpaper(wallpaper1));
domObj.append(motivationalSpeechWallpaper(wallpaper2));
domObj.append(motivationalSpeechWallpaper(wallpaper3));
domObj.append(motivationalSpeechWallpaper(wallpaper4));
domObj.append(motivationalSpeechWallpaper(wallpaper5));
domObj.append(motivationalSpeechWallpaper(wallpaper6));
domObj.append(motivationalSpeechWallpaper(wallpaper7));
domObj.append(motivationalSpeechWallpaper(wallpaper8));
domObj.append(motivationalSpeechWallpaper(wallpaper9));
domObj.append(motivationalSpeechWallpaper(wallpaper10));
