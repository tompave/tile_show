#Tile Show

Simple implementation of a tile-based design.

##Live Demo
There is a [live demo](http://staticfiles.wonderingmachine.com/portfolio/tiles/tiles.html).

##We are dwarfs standing on the shoulders of giants

Implementing this kind of layout is quite simple.  
  
First off, you'll need some way to animate movements. I've used __CSS3 Transitions__, but you can achieve the same effects using JavaScript.  
A good place to get started on CSS3 transitions is the [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions) article on the __Mozilla Developer Network__.  
A more thourough and detailed resource is the [CSS transitions specification](http://www.w3.org/TR/css3-transitions/) on the __W3C__ website. It also contains a useful list of CSS properties that _should_ be animatable through CSS transitions, although web browsers might not support all of them quite yet.

Secondly, to obtain that cool __fill all the gaps__ effect you can't rely on CSS floats alone. You will need to listen for the [window resize event](https://developer.mozilla.org/en-US/docs/Web/API/window.onresize), accessible through JavaScript.  
The good news is that someone has already created an amazing library that takes care of that: [__Masonry__](http://masonry.desandro.com/). The default library works as a __JQuery__ plugin, but you can also use the independent version: [__Vanilla Masonry__](http://vanilla-masonry.desandro.com/).

Finally, you have to consider what parts of your design might or might not work on a touch screen.  
For example, I've used a `:hover` CSS selector to present a descriptive text over the tiles. This won't work well on a touch screen, so I've used [__Modernizr__](http://modernizr.com/) to detect the device type and JavaScript to adapt the triggers when necessary: from `.tile:hover` (mouse) to `$(".tile").click();` (finger).


##License

The MIT License (MIT)

Copyright (c) 2013 Tommaso Pavese

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
