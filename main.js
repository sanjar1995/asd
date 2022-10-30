function myRandom(min, max) {
    rnum1 = Math.floor(Math.random() * (max + 1 - min) + min);
    return rnum1;
  }
  let rand1 = myRandom(1, 10)
  let rand2 = myRandom(1, 10)
  let sym = myRandom(1, 4)
  let result = 0
  if (sym == 1) {
    sym = '+'
    result = rand1 + rand2
  }else if(sym == 2){
    sym = '-'
    result = rand1 - rand2
  }else if(sym == 3){
    sym = '*'
    result = rand1 * rand2
  }else{
    sym = '/'
    result = rand1 / rand2
  }
  let ans = prompt(`${rand1} ${sym} ${rand2}`)
  let answer = ans == result ? `sizni javob to'g'ri` : `siz notogri javob kiritdiz, togri javob esa: ${result}`
  
  console.log(answer);