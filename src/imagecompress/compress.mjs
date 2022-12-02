import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import * as fs from "fs";
import * as path from "path";
// var stats = fs.statSync("src/img/MNSAFETY-WEB-BANNER-1366-400.jpg");
// var fileSizeInBytes = stats.size;
// // Convert the file size to megabytes (optional)
// var fileSizeInkilobytes = fileSizeInBytes / 1024;
// console.log(fileSizeInkilobytes, fileSizeInBytes);
// const files = await imagemin(["src/img/company logos/*.{jpeg,png,jpg,svg}"], {
//   destination: "src/assets/company-logos/",
//   plugins: [
//     imageminMozjpeg({ quality: 50 }),
//     imageminPngquant({
//       quality: [0.5, 0.6],
//     }),
//   ],
// });
// console.log(files);

const getDirRecursively = (dir) => {
  const getChildrenRecursively = (dir) => {
    // Get child directories under the dir.
    const readdir = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory());

    if (readdir.length === 0) {
      // There're no directories under the dir.
      return dir;
    } else {
      // Get directories recursively. Require >=Node11
      return readdir
        .map((p) => getChildrenRecursively(`${dir}/${p.name}`))
        .flat();
    }
  };
  return [dir, ...getChildrenRecursively(dir)];
};

(async () => {
  const files = [];
  const sourceDirs = getDirRecursively("src/img");
  console.log("sourceDirs", sourceDirs);
  for (let inDir of sourceDirs) {
    // Make output path: demo/001 => dest/demo/001
    const destDir = "src/assets/" + inDir.split("src/")[1];
    const filesInDir = await imagemin([`${inDir}/*.{jpeg,png,jpg,svg}`], {
      destination: destDir,
      plugins: [
        imageminMozjpeg({ quality: 30 }),
        imageminPngquant({
          quality: [0.3, 0.4],
        }),
      ],
    });
    files.push(...filesInDir);
  }

  // Rename file
  files.map((file) => {
    const ext = path.extname(file.destinationPath);
    const filename = path.basename(file.destinationPath, ext);
    const newPath = path.join(
      path.dirname(file.destinationPath),
      `${filename}.min${ext}`
    );
    fs.renameSync(file.destinationPath, newPath);
  });
})();
