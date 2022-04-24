   
/**
 * @param {number} capacity
 */
function LRUCache(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    const value = this.cache.get(key);
    
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return;
    }
    
    if (this.cache.size === this.capacity) {
        const [firstKey] = this.cache.keys();
        this.cache.delete(firstKey);
    }
    
    this.cache.set(key, value);
};