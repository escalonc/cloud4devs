import FileSystemTree, { FileEntryNode, EntryType } from './fileSystemtree';

export default class InMemoryFileSystemTree implements FileSystemTree {
  private readonly rootEntry: FileEntryNode;
  private elementsQuantity: number;

  constructor(rootEntryName: string) {
    this.rootEntry = {
      name: rootEntryName
    } as FileEntryNode;
    this.elementsQuantity = 1;
  }

  add(path: string, entryType: EntryType): void {
    const fileEntry: FileEntryNode = {
      name: path,
      entryType,
      parent: this.rootEntry,
      children: []
    };
    this.rootEntry.children.push(fileEntry);
    this.elementsQuantity++;
  }

  remove(entry: FileEntryNode): void {
    throw new Error('Method not implemented.');
  }

  findEntry(path: string) {}

  get root(): FileEntryNode {
    return this.rootEntry;
  }

  get count(): number {
    return this.elementsQuantity;
  }
}
