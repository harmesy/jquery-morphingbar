jQuery Morphing Bar
==================

Easily create progress bars that morph depending on their value.

Call `.morphingBar()` on the jQuery object representing your progress bar. 
You can pass in an object which has properties corresponding to each "level" that you want to trigger a change. Each property should have a function that accepts the progress bar element.

When the progress bar reaches each "level" the corresponding function is called, allowing the progress bar to morph.
It's setup by default to work with twitter bootstrap, and has default levels at 25%, 50%, and 75% that will apply bootstrap classes.

You can see an example of the default behaviour with a bootstrap-designed progress bar in the `example/index.html` file.

Unfortunately there is no reliable way that I know of to detect changes in an element width (I realize that IE will trigger a resize event, but since Firefox/Chrome/Opera/Safari will not it's kind of useless) so you will have to trigger the `morphingbar.updated` event in whatever code you use to update the progressbar width. Again, see the `example/index.html` file for details.

##License details##

The MIT License (MIT)

Copyright (c) 2013 Matt Harmes

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
