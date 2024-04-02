class EventEmitter {
  constructor() {
    this.events = [];
  }

  addEventListener(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listener);
  }

  emit(eventName, data) {
    let listeners = this.events[eventName];
    listeners.forEach((listener) => listener(data));
  }

  removeEventListener(eventName, thisListener) {
    let listeners = this.events[eventName];
    listeners.forEach((listener) => listener !== thisListener);
  }
}

const myEventEmitter = new EventEmitter();

const callback1 = (data) => {
  console.log(`hello world! ${data}`);
};

const callback2 = (data) => {
  console.log(`hello world! ${data}`);
};

myEventEmitter.addEventListener('event1', callback1);
myEventEmitter.addEventListener('event2', callback2);
myEventEmitter.emit('event2', 'callback2');
myEventEmitter.emit('event1', 'callback1');
myEventEmitter.removeEventListener('event2', callback2);
myEventEmitter.emit('event1', 'after removing 2');
