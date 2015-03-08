const pParts = Symbol("parts"),
    reduceFindIn = function(object, key) {
        if(typeof(object) !== "object") {
            return false;
        }

        return key in object ? object[key] : false;
    };

export default class ObjectPath {
    construct(...parts) {
        this[pParts] = parts.map(String);
    }

    findIn(object) {
        object = Object(object);

        return this[pParts].reduce(reduceFindIn, object);
    }

    get length() {
        return this[pParts].length;
    }

    set length(length) {
        this[pParts].length = length;
    }
}

ObjectPath.parse = function(string) {
    return new this(string.split("."));
};

ObjectPath.from = function(iterable) {
    if(iterable instanceof this) {
        return iterable;
    }

    return new this(...iterable);
};
