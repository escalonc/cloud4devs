import InMemoryFileSystemTree from '../inMemoryFileSystem/inMemoryFileSystemTree';
import FileSystemTree, {
  EntryType
} from '../inMemoryFileSystem/fileSystemTree';

const basePath = '/mnt/sda1/Source';
let inMemoryFileSystem: FileSystemTree;

beforeEach(() => {
  inMemoryFileSystem = new InMemoryFileSystemTree(basePath);
});

test('add new entry increments quantity in two', () => {
  inMemoryFileSystem.add(`${basePath}/sample1`, EntryType.Directory);
  expect(inMemoryFileSystem.count).toBe(2);
});

test('add three new entries increments quantity in four', () => {
  inMemoryFileSystem.add(`${basePath}/sample1`, EntryType.Directory);
  inMemoryFileSystem.add(`${basePath}/sample2`, EntryType.Directory);
  inMemoryFileSystem.add(`${basePath}/sample3`, EntryType.Directory);
  expect(inMemoryFileSystem.count).toBe(4);
});

test('first new entry is child of root', () => {
  inMemoryFileSystem.add(`sample1`, EntryType.Directory);
  const sample1EntryExists = inMemoryFileSystem.root.children.some(
    entry => entry.name === 'sample1'
  );

  expect(sample1EntryExists).toBe(true);
});

test('add new entry in given path', () => {
  inMemoryFileSystem.add(`sample3`, EntryType.Directory);
  console.info('-------');
  console.log(inMemoryFileSystem.findPath(`sample3`));
});
