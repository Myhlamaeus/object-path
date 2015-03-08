import ObjectPath from "./object-path";

const pPaths = Symbol("paths"),
    mapFindAllIn = function(path) {
        return path.findIn(this);
    };

export default class ObjectPathList {
    construct(...paths) {
        this[pPaths] = paths.map(ObjectPath.from.bind(ObjectPath));
    }

    findAllIn(object) {
        this[pPaths].map(mapFindAllIn, object);
    }

    get length() {
        return this[pPaths].length;
    }

    set length(length) {
        this[pPaths].length = length;
    }
}

ObjectPathList.parse = function(strings) {
    return new this(...strings.map(ObjectPath.parse.bind(ObjectPath)));
};

ObjectPathList.from = function(iterable) {
    if(iterable instanceof this) {
        return iterable;
    }

    return new this(...iterable);
};
