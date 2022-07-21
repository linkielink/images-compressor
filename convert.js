import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminJpegRecompress from "imagemin-jpeg-recompress";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminOptipng from "imagemin-optipng";
import imageminWebp from "imagemin-webp";
import fs from "fs";

console.log("-----------------");
console.log("WEBP CONVERTER");
console.log("-----------------");
const directory = async () => {
  const dir = "compressed-images";
  console.log(`start preparing folder "${dir}"`);

  setTimeout(() => {
    fs.mkdir(dir, { recursive: true }, (err) => {
      console.log(`finished preparing folder "${dir}"`);
    });
  }, 1000);
};

await directory().then(() => {
  setTimeout(() => {
    console.log("converting images...");
    imagemin(["original-images/**/*.{jpg,jpeg,png}"], {
      destination: "compressed-images",
      verbose: true,
      plugins: [
        imageminOptipng(),
        imageminPngquant({
          speed: 1,
        }),
        imageminJpegtran(),
        imageminMozjpeg({
          quality: 70,
        }),
        imageminJpegRecompress({
          loops: 4,
          min: 70,
          max: 95,
          quality: "high",
        }),
        imageminWebp({ quality: 50 }),
      ],
    }).finally(() => {
      console.log("finished image conversion!");
    });
  }, 3000);
});
