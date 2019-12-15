import dotenv from "dotenv";
// import fetch from "node-fetch";
// import { Dropbox } from "dropbox";
import path from "path";
import fs from "fs";
// import FileSystemTree from "./virtualFileSystem/fileSystemtree";

dotenv.config();

// const dbx = new Dropbox({
//   accessToken: process.env.DROPBOX_ACCESS_TOKEN,
//   fetch
// });

// dbx
// const dbx = new Dropbox({
//   accessToken: process.env.DROPBOX_ACCESS_TOKEN,
//   fetch
// });

// const fileNames = dbx
//   .filesListFolder({ path: "" })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const blackList = [".git", "node_modules", ".DS_Store"];

const basePath = process.env.SOURCE_PATH || "";

// function exploreFileSystem(path: string) {
//   for (const file of readdirSync(path)) {
//     const absolutePath = resolve(path, file);
//     const isDir = lstatSync(absolutePath).isDirectory();

//     // add node entry to the tree

//     if (blackList.includes(file) || !isDir) {
//       continue;
//     }

//     for (const innerFile of readdirSync(absolutePath)) {
//       console.log(resolve(file, innerFile));
//     }
//   }
// }

// exploreFileSystem(basePath);

console.log(basePath);

function exploreFileSystem(filename: string) {
  const excludable = filename
    .split("/")
    .some(exclusion => blackList.indexOf(exclusion) !== -1);

  if (excludable) {
    return;
  }

  var stats = fs.lstatSync(filename),
    info = {
      path: filename,
      name: path.basename(filename),
      type: "",
      children: {}
    };

  if (stats.isDirectory()) {
    info.type = "folder";
    info.children = fs.readdirSync(filename).map(function(child) {
      return exploreFileSystem(filename + "/" + child);
    });
  } else {
    // Assuming it's a file. In real life it could be a symlink or
    // something else!
    info.type = "file";
  }

  return info;
}

const tree = exploreFileSystem(basePath);

console.log(JSON.stringify(tree));
