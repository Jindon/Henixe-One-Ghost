# Henixe-One-Ghost
Henixe One Ghost Theme source files. You can view the demo of the theme at https://one.henixethemes.com

The files is the full development setup which I used while developing using Docker. Feel free to use the theme or fork it.

&nbsp;

![screenshot-desktop](https://raw.githubusercontent.com/Jindon/Henixe-One-Ghost/master/screenshot-desktop.jpg)

&nbsp;

## Features
1. Uses Bootstrap 4
2. Includes Live Search
3. Developer Friendly


# Development

Run

```bash
$ npm install
$ gulp
```
in the root folder and start building in the src folder.

#### _Important: Point your local Ghosts install's public folder to the dest/ folder._

Uses SCSS as the CSS preprocessor. Output files are minimized and auto prefixed in case of the CSS, while JS files are minimized and concatenated.

## Packaging the theme
Run 
```bash
$ gulp package
```
to package the theme in the dist/ folder.


# Copyright & License

Copyright (c) 2017 [Henixe Themes](https://www.henixethemes.com) - Released under the [MIT license](LICENSE).
