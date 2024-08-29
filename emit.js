class EventEmitter {
  eventObj = {};
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.eventObj.hasOwnProperty(eventName)) this.eventObj[eventName] = [];
    this.eventObj[eventName].push(callback);
    return {
      unsubscribe: () => {
        delete this.eventObj[eventName];
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let result = [];
    if (this.eventObj.hasOwnProperty(eventName)) {
      result = this.eventObj[eventName].map((callback) => callback(...args));
    }
    return result;
  }
}

// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1(...args) {
//   console.log(5, args);
//   return args.join(",");
// });
// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// console.log(emitter.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]

// const a = [1, 2, 3, 24];
// console.log(...a);
