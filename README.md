# Image Compressor

This is a lightweight image compressor (with little to no quality loss) using node.js. The compression-rate is optimized for the best image quality:size ratio, but do not expect file sizes to be as small as lossy compressed (e.g. [TinyPNG](http://tinypng.com)) images. However I managed to compress the included sample files to a lower file size than [TinyPNG](http://tinypng.com) risking a slightly higher quality loss.

This project was created to compress large amounts of files or images with a huge file size (e.g. 4K resolution images). Small images files are crutial for search engine optimization (SEO) these days, that's why I felt the need to create this project.

_NOTE: Images may appear not as sharp as you want them to. You can always adjust the settings inside the tasks/images.js file, to increase quality AND filesize._

## Development dependencies

Please be sure to have at least [NodeJS](http://nodejs.org/) v16.0.0 installed.

## Setup

You can setup the compressor by running

```
npm install
```

or

```
yarn install
```

## Using the compressor

To compress all images inside the `original-images` folder just run

```
npm run compress
```

or

```
yarn compress
```

The `compressed-images` folder will be cleared every time you run the `npm run compress` or `npm start` command.

### Convert

If you want to use the .webp converter, just use:

```
npm run convert
```

or

```
yarn convert
```

This command will generate `.webp` images from you .png, .jpg and .jpeg images.

### Compress AND Convert

If you want to compress and convert your images to `.webp` format use the command

```
npm start
```

or

```
yarn start
```

**!ATTENTION! You'll need imagemagick installed on your system**
To install imagemagick via homebrew use

```
brew install imagemagick
```
