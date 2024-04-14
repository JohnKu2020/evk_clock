# evk_clock
 a little jQuery-based script for Clock element in navbar
## Setup
```
<script type="text/javascript" src="evk_clock_jk.js"></script>
```
## Usage
```
<script type="text/javascript">
$(document).ready(function(){
  $('#clock').evkJKclock({lang: 'en' });
});
</script>

...

<li class="dropdown"><span id="evk_clock_ctrl"></span></li>
```
## Options
```
{ lang: 'ru|en|ua', width: '100%', backgroundcolor: 'transparent', color: '#000000'}
```
## How it looks like
![How it looks](https://evk.com.ua/demo/github/evk_clock.gif)

## License

(The MIT License)

Copyright (c) 2024 John Ku

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
