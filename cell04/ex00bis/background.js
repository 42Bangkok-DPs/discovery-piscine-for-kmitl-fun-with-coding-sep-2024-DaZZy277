$(document).ready(function() {
    $('#btn').on('click', function() {
      let randomNum = () => Math.floor(Math.random() * 256);
      let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
      $('body').css('background-color', randomColor);
    });
  });
  