//this is where all the DOM manipulation occurs

//run this whole page after the page loads

//on load do something
document.addEventListener("DOMContentLoaded", () => {
  //give the page a title
  const header = document.createElement('h1');
  header.innerText = `Your 90's style chat room`;
  document.querySelector('body').appendChild(header);

})