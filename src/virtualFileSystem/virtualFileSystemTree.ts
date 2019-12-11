import FileSystemTree, { FileEntryNode, EntryType } from "./fileSystemtree";

export default class VirtualFileSystemTree implements FileSystemTree {
  private readonly rootEntry: FileEntryNode;

  constructor(private readonly rootEntryName: string) {
    this.rootEntry = { name: rootEntryName } as FileEntryNode;
  }

  Add(path: string, entryType: EntryType): void {
    const pathSteps = path.split("/");
    let currentNode = this.rootEntry;
  }

  Remove(entry: FileEntryNode): void {
    throw new Error("Method not implemented.");
  }
}
