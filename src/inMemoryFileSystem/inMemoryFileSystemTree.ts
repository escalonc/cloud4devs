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

  findPath(element: string): string {
    const elements: Entry[] = [];
    this.hasPath(this.rootEntry, elements, element);
    return elements.join('');
  }

  private preparePath(path: string) {
    const preparedPath = path.replace(this.rootEntry.name, '');
    return preparedPath.split('/');
  }

  private hasPath(rootNode: Entry, nodes: Entry[], element: string): boolean {
    if (rootNode.name !== element) {
      return false;
    }

    nodes.push(rootNode);

    for (const nodeEntry of nodes) {
      if (this.hasPath(nodeEntry, nodes, element)) {
        return true;
      }
    }

    nodes.pop();
    return false;
  }
}
