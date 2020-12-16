function bar(y,x,z) {
  setTimeout(function() {
    z.innerHTML += x.charAt(y);
  }, 9 * y);
}
function foo(x,z){
  for(y in x){
    bar(y,x,z)
  }
}

function fooBar(x,y){
  var a = document.createElement(x);
  document.querySelector('section').appendChild(a);
  if(x == 'img'){
    a.setAttribute('src', y);
  }else{
    a.innerHTML = y;
  }
}

function home(){
  var a = '[heyclore@pages.github home]$';
  var b = 'https://www.linkedin.com/in/eko-purnomo-30bba6160';
  var c = 'https://github.com/heyclore';
  if (document.querySelector('section > p').innerHTML == a){
    return;
  }else{
    document.querySelector('section').innerHTML = '';
    fooBar('p', a);
    fooBar('img', 'source/pict.jpg');
    fooBar('p', 'Name: Eko Purnomo');
    fooBar('p', 'Skills: NodeJs, PHP, Python, Sql, Photoshop, Linux');
    fooBar('p', 'Programming Experience: 0 Year');
    fooBar('p', 'Email: cloore@gmail.com');
    fooBar('p', `Link: <a href="${b}" target="_blank">${b}</a>`);
    fooBar('p', `Link: <a href="${c}" target="_blank">${c}</a>`);
  }
}

function portfolio(){
  var a = ['[heyclore@pages.github portfolio]$',
    'https://heyclore-flask.herokuapp.com',
    'https://github.com/heyclore/htdocs/tree/master/flask',
    'http://heyclore-laravel.herokuapp.com',
    'https://github.com/heyclore/htdocs/tree/master/laravel',
    'https://github.com/heyclore/htdocs/tree/master/codeigniter',
    'https://github.com/heyclore/htdocs/tree/master/expressjs']
  if (document.querySelector('section > p').innerHTML == a){
    return;
  }else{
    document.querySelector('section').innerHTML = '';
    fooBar('p', a[0]);
    fooBar('p', `# Flask:`);
    fooBar('p', `Web: <a href="${a[1]}" target="_blank">${a[1]}</a>`);
    fooBar('p', `Source: <a href="${a[2]}" target="_blank">${a[2]}</a>`);
    fooBar('p', `# Laravel:`);
    fooBar('p', `Web: <a href="${a[3]}" target="_blank">${a[3]}</a>`);
    fooBar('p', `Source: <a href="${a[4]}" target="_blank">${a[4]}</a>`);
    fooBar('p', `# CodeIgniter:`);
    fooBar('p', `Source: <a href="${a[5]}" target="_blank">${a[5]}</a>`);
    fooBar('p', `# ExpressJs:`);
    fooBar('p', `Source: <a href="${a[6]}" target="_blank">${a[6]}</a>`);
  }
}

function about(){
  var a = '[heyclore@pages.github about]$';
  var b = ["Hello! my name is Eko and new into the world of programming",
    "it's been a year since I learn about programming and about 6 months moved onto linux OS",
    "currently I'm looking position as Junior Backend Developer or open for Internship as well",
    "Thank you",
    "~",
    "Best Regards,",
    "Eko Purnomo"]
  if (document.querySelector('section > p').innerHTML == a){
    return;
  }else{
    document.querySelector('section').innerHTML = '';
    fooBar('p', a);
    for(x of b){
      fooBar('p',x);
    }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  home();
})
