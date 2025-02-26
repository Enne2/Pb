# Pb
This is a library that allows you to embed a podcast in your web page.

# Enne2's customizations
- Reversed Episode order
- added episode image view
- removed printing of title and other infos of the podcast feed

## Features
- Provide a podcast URL, see a podcast rendered
- Total library size is `~4.5kb`
- Optionally provide a limit to the number of episodes displayed
- Each episode has its own audio player

__Note:__ To parse the RSS/podcast/XML feed into usable JSON, the podcast is loaded through [Narro](https://www.narro.co) (using a simple pass of the [rss-parser](https://github.com/rbren/rss-parser#readme) library). This avoids bloating the client library with an RSS parser.

## Usage
1. Create an element on your page with the class `pb-embed` and attribute `data-feed="<podcast-url-here>"`.
2. Include the `bundle.js` either in your own compiled js or as a `script` tag before the `body` closing tag.
3. Optionally, provide your own styling of the embed (see `./example/example.css`).
4. Optionally, provide an attribute of `data-limit="<some number>"` to limit the number of episodes displayed.

## Methods
~~~js
// Initialize all nodes with class 'pb-embed' on the page
pb.init();

// Initialize an embedded feed inside a given DOM node
var node = document.querySelector('#myId');
var embed = pb.createEmbed(node);

// Initialize an embedded feed inside a given DOM node, with a feed URL
var feed = 'http://mypodcast.com/feed.xml';
embed = pb.createEmbed(node, feed);

// Reload a given feed/embed
embed.reload();
~~~

### Example
See [https://github.com/NarroApp/Pb/tree/master/example](https://github.com/NarroApp/Pb/tree/master/example)

~~~html
<div class="pb-embed" data-feed="http://on.narro.co/foobar" data-limit="5">
</div>
~~~

Working usage: [https://narroapp.github.io/Pb/](https://narroapp.github.io/Pb/)
