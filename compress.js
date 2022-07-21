import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminJpegRecompress from "imagemin-jpeg-recompress";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminOptipng from "imagemin-optipng";
import imageminSvgo from "imagemin-svgo";
import imageminGifsicle from "imagemin-gifsicle";
import fs from "fs";

console.log("-----------------");
console.log("IMAGE COMPRESSOR");
console.log("-----------------");
const directory = async () => {
  const dir = "compressed-images";
  fs.rm(dir, { recursive: true }, () => {
    console.log(`start preparing folder "${dir}"`);
  });

  setTimeout(() => {
    fs.mkdir(dir, { recursive: true }, (err) => {
      console.log(`finished preparing folder "${dir}"`);
    });
  }, 1000);
};

await directory().then(() => {
  setTimeout(() => {
    console.log("compressing images...");
    imagemin(["original-images/**/*.{jpg,jpeg,png,svg,gif}"], {
      destination: "compressed-images",
      verbose: true,
      plugins: [
        imageminGifsicle(),
        imageminOptipng(),
        imageminSvgo(),
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
      ],
    }).finally(() => {
      console.log("finished image compression!");
    });
  }, 3000);
});
