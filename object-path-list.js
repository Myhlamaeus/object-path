import ObjectPath from "./object-path";

const pPaths = Symbol("paths"),
    mapFindAllIn = function(path) {
        return path.findIn(this);
    };

export default class ObjectPathList {
    construct(paths...) {
        this[pPaths] = paths.map(ObjectPath.from.bind(ObjectPath));
    }

    findAllIn(object) {
        this[pPaths].map(function() {

        });
    }

    get length() {
        return this[pParts].length;
    }

    set length(length) {
        this[pParts].length = length;
    }
};

ObjectPathList.parse = function(strings) {
    return new this(strings.map(ObjectPath.parse.bind(ObjectPath))...);
};

ObjectPathList.from = function(arrayLike) {
    if(arrayLike instanceof this) {
        return arrayLike;
    }

    return new this(Array.from(arrayLike)...);
};
