import dropbox from "dropbox";

class DropboxProvider implements Provider {
  init() {}

  upload(path: string): void {
    throw new Error("Method not implemented.");
  }
}

export default DropboxProvider;
