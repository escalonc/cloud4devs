import FileSystemTree, { Entry, EntryType, Directory } from './fileSystemTree';
import EntryFactory from './fileEntryFactory';

export default class InMemoryFileSystemTree implements FileSystemTree {
  private readonly rootEntry: Directory;
  private elementsQuantity: number;
  // path: string;

  constructor(rootEntryName: string) {
    this.rootEntry = EntryFactory.createDirectory(rootEntryName);
    this.elementsQuantity = 1;
  }

  add(path: string, entryType: EntryType): void {
    let entry: Entry;
    this.preparePath(path);
    if (entryType === EntryType.Directory) {
      entry = EntryFactory.createDirectory(path);
    } else {
      entry = EntryFactory.createFile(path);
    }
    this.rootEntry.children.push(entry);
    this.elementsQuantity++;
  }

  // remove(entry: Entry): void {
  //   throw new Error('Method not implemented.');
  // }

  // findEntry(path: string) {}

  get root(): Directory {
    return this.rootEntry;
  }

  get count(): number {
    return this.elementsQuantity;
  }

  get path() {
    return '';
  }

  private preparePath(path: string) {
    const preparedPath = path.replace(this.root.name, '');
    return preparedPath.split('/');
  }
}
