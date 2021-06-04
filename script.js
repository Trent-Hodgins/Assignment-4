document.getElementById('are').addEventListener('click', are)
document.getElementById('education').addEventListener('click', education)
document.getElementById('help').addEventListener('click', help)
let answer
// The let answer, allows answer to be determined. The three event listers above the "let" statment allows teh Javascript to locate the information needed to gather from the HTML document.//

function are () {
  answer = confirm('What Are They')
  if (answer) {
    window.location = 'https://assignment-4.trenthodgins.repl.co'
  }
}

function education () {
  answer = confirm('Education')
  if (answer) {
    window.location = 'https://assignment-4.trenthodgins.repl.co/index2.html'
  }
}

function help () {
  answer = confirm('How do They Help')
  if (answer) {
    window.location = 'https://assignment-4.trenthodgins.repl.co/index3.html'
  }
}

// These three fuctions are similar, they do the same thing, the only difference is the name, button, and link. They make it that when a button is clicked you get taken to a different page on the website.//
