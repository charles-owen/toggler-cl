# toggler-cl

This is a simple toggle open/closed package. Clicking on a link opens
 a block with a scaling motion. Given content like this in
HTML:

``` html
<div class="cl-toggle">
  <p><a>Click to expand</a></p>
  <div>This is the contents of the toggle block. 
  </div>
</div>
```

The content of the &lt;p&gt; tag appears with a + icon next to it (other tags such as 
h1-h8 work as well). The block below is initially hidden. Clicking on the link
opens that block for viewing. Clicking again closes it. 

I had something lie this that I used for years in jQuery. But, I'm trying to
phase out jQuery use and have fewer dependencies, so I rewrote this in pure
Javascript. I was never happy with the slide the jQuery provides and wanted something
more like expanding and shrinking, which is the behavior this example provides.
 
## Install

### CDN

``` html
<script src="https://unpkg.com/toggler-cl/dist/toggler-cl.js"></script>
<!-- or -->
<script src="https://unpkg.com/toggler-cl/dist/toggler-cl.min.js"></script>
```

### Package managers

[npm](https://www.npmjs.com/package/toggler-cl): `npm install toggler-cl --save`

## Using the Library

The library consists of only the single .js file toggler-cl.js or the
minimized version toggler-cl.min.js. The icon images and style sheets are
included in the .js file.

The icons are 18x18 pixels.

## License

Copyright 2018 Michigan State University

Cirsim is released under the MIT license. Image is Copyright jQuery Foundation.

* * *

Written and maintained by Charles B. Owen

