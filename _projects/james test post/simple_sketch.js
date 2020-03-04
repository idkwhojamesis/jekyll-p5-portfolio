/*
 * Pan words across the screen
 * When words reach the end of the screen
 * Change the words to something else
 */

// Look at draw() first so you understand what exactly these variables do
var lyric = "baby shark do do do do dodo dod od do od";
var lyricX = 0;
var moveRate = 10;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('simple-sketch-holder"')
  textSize(18);
  // Setting text box size (x2, y2) in proportion to the Canvas dimensions 'width' and 'height', so it resizes properly if the Canvas gets resized. See its usage in lyricBox inside draw().
  textBoxWidth = width * 0.9;
  textBoxHeight = height * 0.9;
}

function draw() {
  background(220);
  // X-position is set by lyricX, which moves every frame
  lyricBox = text(lyric, (lyricX), (height * 0.8), textBoxWidth, textBoxHeight);
  lyricX = lyricX - (deltaTime * moveRate / 100);
  // if the end of the textBox (lyricX is the beginning, then add the width) is at x-position 0, reset lyricX
  var end = lyricX + textBoxWidth;
  if (end < 0)
  {
    lyricX = width;
  }
  print(lyricX);
}