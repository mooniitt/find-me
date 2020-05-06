/**
 * 
 * 实现一个LazyMan，可以按照以下方式调用:
LazyMan("Hank")输出:
Hi! This is Hank!
 
LazyMan("Hank").sleep(10).eat("dinner")输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")输出
Hi This is Hank!
Eat dinner~
Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 */

class Process {
  constructor(name) {
    this.workQueue = [
      () => {
        this.initWork(name);
      }
    ];
    setTimeout(this.nextWork);
  }

  initWork = name => {
    console.log(`Hi This is ${name}!`);
    this.nextWork();
  };

  nextWork = () => {
    const work = this.workQueue.shift() || function() {};
    work();
  };

  sleepFirst = delay => {
    this.workQueue.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
        this.nextWork();
      }, delay);
    });
    return this;
  };

  sleep = delay => {
    this.workQueue.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
        this.nextWork();
      }, delay);
    });
    return this;
  };

  eat = food => {
    this.workQueue.push(() => {
      console.log(`Eat ${food}`);
      this.nextWork();
    });
    return this;
  };
}

function LazyMan(name) {
  return new Process(name);
}

// LazyMan("Hank")
//   .eat("dinner")
//   .eat("supper");

class EventEmitter {
  constructor() {
    this.task = {};
  }
  addListener(name, fn) {
    if (this.task[name]) {
      this.task[name] = fn;
    } else {
      this.task[name] = [fn];
    }
  }
  emit(name, ...args) {
    this.task[name].forEach(fn => fn(...args));
  }
  off(name, cb) {
    this.task[name] = this.task[name].filter(fn => {
      return fn !== cb;
    });
  }
}

function primisefy(fn, context) {
  return (...args) => {
    return new Promise((reslove, reject) => {
      fn.apply(context, [
        ...args,
        (err, data) => {
          return err ? reject(err) : reslove(data);
        }
      ]);
    });
  };
}

class Controller {
  constructor(max) {
    this.max = max;
    this.taskQueue = [];
  }

  nextWork() {
    const fn = this.taskQueue.shift();
    if (typeof fn === "function") {
      fn()
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log("error: ", e);
        })
        .finally(() => {
          this.nextWork();
        });
    }
  }

  runTask() {
    let i = this.max;
    while (i--) {
      this.nextWork();
    }
  }

  addTask(fn) {
    this.taskQueue.push(fn);
  }
}

// 测试用例
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 22, 234, 100, 99],
  controller = new Controller(5),
  sum = 0;
arr.forEach(item => {
  controller.addTask(() => {
    return new Promise(resolve => {
      sum++;
      setTimeout(() => {
        console.log("并发量", sum);
        sum--;
        resolve(item);
      }, 3000);
    });
  });
});
// controller.runTask();

Array.prototype.myReduce = function() {
  if (!Array.isArray(this)) {
    throw new TypeError("reduce muse be called by Array");
  }
  if (typeof arguments[0] !== "function") {
    throw new TypeError("this first argument muse be Function");
  }
  const arr = this;
  const fn = arguments[0];
  let accumlate = arguments[1] ? arguments[1] : arr[0];
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr.hasOwnProperty(i)) accumlate = fn(accumlate, arr[i], i, arr);
  }
  return accumlate;
};
// console.log(["1", null, undefined, , 3, 4].reduce((a, b) => a + b)); //"1nullundefined34"
// console.log(["1", null, undefined, , 3, 4].myReduce((a, b) => a + b)); //"1nullundefined34"

function myinstanceof(left, right) {
  let prototype = left.prototype,
    proto = Object.getPrototypeOf(right);
  while (proto) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

function A() {}
const a = new A();
function B() {}

// console.log(myinstanceof(B, a));

function mynew() {
  const args = [].slice.call(arguments);
  const constructor = args.pop();
  const ctx = Object.create(constructor.prototype);
  const ret = constructor(...args);
  return typeof ret === "object" ? ret : ctx;
}

const b = mynew(B);
console.log(b instanceof B);
