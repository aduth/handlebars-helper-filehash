# {{ fileHash }}

The {{ fileHash }} Handlebars helper generates an md5 hash from a specified file's content. Perfect for automatically cache-busting modified assets (e.g. stylesheets).

## Quickstart

In the root of your project, run the following in the command line:

```bash
npm install handlebars-helper-filehash --save-dev
```

### Assemble Usage

If you use [Assemble](http://assemble.io) and Grunt, add `handlebars-helper-filehash` to the `helpers` property in your Gruntfile's [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-filehash' module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-filehash', 'foo/*.js']
    }
    ...
  }
});
```

You can now use begin using the helper in your templates. To use the helper, pass a file path and optionally include a number as a second parameter if you wish to limit the output to a set length.

__Template__:

```html
<link rel="stylesheet" href="/assets/css/main.css?{{ fileHash './public/assets/css/main.css' 10 }}">
```

__Output__:

```html
<link rel="stylesheet" href="/assets/css/main.css?e5b5b3e0fc">
```

## License and Copyright

Copyright (c) 2014 Andrew Duthie

Released freely under the MIT License (refer to LICENSE.txt)