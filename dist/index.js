"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
var blackList = [".git", "node_modules", ".DS_Store"];
var basePath = process.env.SOURCE_PATH || "";
console.log(basePath);
function exploreFileSystem(filename) {
    var excludeble = filename
        .split("/")
        .some(function (exclusion) { return blackList.indexOf(exclusion) !== -1; });
    if (excludeble) {
        return;
    }
    var stats = fs_1.default.lstatSync(filename), info = {
        path: filename,
        name: path_1.default.basename(filename),
        type: "",
        children: {}
    };
    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs_1.default.readdirSync(filename).map(function (child) {
            return exploreFileSystem(filename + "/" + child);
        });
    }
    else {
        info.type = "file";
    }
    return info;
}
var tree = exploreFileSystem(basePath);
console.log(JSON.stringify(tree));
//# sourceMappingURL=index.js.map