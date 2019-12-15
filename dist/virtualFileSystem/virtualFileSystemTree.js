"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualFileSystemTree = (function () {
    function VirtualFileSystemTree() {
        this.rootEntry = {};
    }
    VirtualFileSystemTree.prototype.Add = function (_path, _entryType) {
        if (this.rootEntry.name === "") {
        }
    };
    VirtualFileSystemTree.prototype.Remove = function (_entry) {
        throw new Error("Method not implemented.");
    };
    VirtualFileSystemTree.prototype.getRoot = function () {
        return this.rootEntry;
    };
    return VirtualFileSystemTree;
}());
exports.default = VirtualFileSystemTree;
//# sourceMappingURL=virtualFileSystemTree.js.map