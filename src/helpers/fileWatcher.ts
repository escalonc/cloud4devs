import chokidar from "chokidar";
import fileDiscriminator from "./fileDiscriminator";

class FileWatcher {
  start() {
    const rootDirectory = process.env.ROOT_DIRECTORY || ".";

    chokidar.watch(rootDirectory, {}).on("all", (event, path) => {
      console.log(event, path);
    });
  }
}

export default FileWatcher;
