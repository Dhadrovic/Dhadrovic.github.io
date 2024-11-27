let randomBetween = (min, max) => {
  let number = Math.floor(Math.random()*(max-min+1)+min);

  if ( number !== 0 ){
    return number;
  }else {
    return 0.5;
  }
}

let tl = new TimelineMax();

for(let i = 0; i < 20; i++) {

  const selector = '.bubble' + i
  const element = document.querySelector(selector);

  if(!element) continue;

  let t = TweenMax.to(element, randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * (randomBetween(-1, 1)),
    y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
    repeat:-1,
    repeatDelay:randomBetween(0.2, 0.5),
    yoyo:true,
    ease:Elastic.easeOut.config(1, 0.5)
  })

  tl.add(t, (i+1)/0.6)
}

tl.seek(50);
