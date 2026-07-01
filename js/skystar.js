// poem
var words = [
    '冰冰，你是我的一切。',
    '冰冰，你的笑容暖我心。',
    '冰冰，我愿做你的影子随行。',
    '冰冰，想你是我每日功课。',
    '冰冰，你的眼睛像星星。',
    '冰冰，我钟情于你。',
    '冰冰，你是我的全世界。',
    '冰冰，你的温柔让我醉。',
    '冰冰，愿与你共度此生。',
    '冰冰，你的声音如天籁。',
    '冰冰，想牵你的手看海。',
    '冰冰，你的美让我心动。',
    '冰冰，愿做你的守护者。',
    '冰冰，每天想你千百遍。',
    '冰冰，你的笑是最美风景。',
    '冰冰，你是我的唯一。',
    '冰冰，愿为你遮风挡雨。',
    '冰冰，你的名字刻在我心。',
    '冰冰，想和你慢慢变老。',
    '冰冰，你的眼里有星辰。',
    '冰冰，愿你每天都开心。',
    '冰冰，你的温柔治愈我。',
    '冰冰，想每天见到你。',
    '冰冰，你是我的小确幸。',
    '冰冰，愿陪你走过四季。',
    '冰冰，你的笑容如阳光。',
    '冰冰，想你是我最大幸福。',
    '冰冰，愿做你坚实依靠。',
    '冰冰，你的美无法形容。',
    '冰冰，想和你一起看日出。',
    '冰冰，你的声音最动听。',
    '冰冰，愿你永远快乐。',
    '冰冰，你是我的梦中人。',
    '冰冰，想紧紧拥抱你。',
    '冰冰，你的善良感动我。',
    '冰冰，愿与你携手一生。',
    '冰冰，你的眼睛会说话。',
    '冰冰，想每天对你说晚安。',
    '冰冰，你是我的小太阳。',
    '冰冰，愿为你付出一切。',
    '冰冰，你的笑容治愈我。',
    '冰冰，想和你一起去旅行。',
    '冰冰，你的美让我着迷。',
    '冰冰，愿你被温柔以待。',
    '冰冰，你是我的唯一挚爱。',
    '冰冰，想每天陪在你身边。',
    '冰冰，你的温柔如春风。',
    '冰冰，愿做你的避风港。',
    '冰冰，你的眼睛像湖水。',
    '冰冰，想牵你的手不放。',
    '冰冰，你是我的小公主。',
    '冰冰，愿你每天好心情。',
    '冰冰，你的笑容如花朵。',
    '冰冰，想和你一起看月亮。',
    '冰冰，你的声音如歌。',
    '冰冰，愿你一切安好。',
    '冰冰，你是我的全世界。',
    '冰冰，想紧紧握你的手。',
    '冰冰，你的善良如天使。',
    '冰冰，愿为你写下诗。',
    '冰冰，你的眼睛如星河。',
    '冰冰，想每天给你拥抱。',
    '冰冰，你是我的小可爱。',
    '冰冰，愿你梦想成真。',
    '冰冰，你的温柔如月光。',
    '冰冰，想和你一起做饭。',
    '冰冰，你的美如画。',
    '冰冰，愿你被爱包围。',
    '冰冰，你是我的小幸运。',
    '冰冰，想每天陪你说话。',
    '冰冰，你的笑容如春风。',
    '冰冰，愿做你的小跟班。',
    '冰冰，你的眼睛如宝石。',
    '冰冰，想和你一起听雨。',
    '冰冰，你是我的小天使。',
    '冰冰，愿你永远年轻。',
    '冰冰，你的温柔如暖阳。',
    '冰冰，想和你一起散步。',
    '冰冰，你的美如诗。',
    '冰冰，我爱你永远。'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
