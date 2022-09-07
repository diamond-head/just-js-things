var Subject = function () {
  this.observers = [];

  return {
    subscribeObserver: (observer) => {      
      this.observers.push(observer);
    },
    unsubscribeObserver: (observer) => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver:  (observer) => {
      const index = this.observers.indexOf(observer);
      this.observers[index] && this.observers[index].notify(index);
    },
    notifyAllObserver: () => {
      const Length = this.observers.length;
      for (let i = 0; i < Length; i++) {
        this.observers[i] && this.observers[i].notify(i);
      }
    }
  }
};

var Observer = function (name) {
  this.name = name;
  return {
    notify: (index) => {
      console.log("Observer " + this.name + " : " + index + " is notified!");
    }
  };
}

const subject = new Subject();
const observer1 = new Observer("observer 1");
const observer2 = new Observer("observer 2");
const observer3 = new Observer("observer 3");
const observer4 = new Observer("observer 4");
const observer5 = new Observer("observer 5");

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);
subject.subscribeObserver(observer5);


subject.notifyObserver(observer2);
subject.notifyObserver(observer4);

subject.notifyAllObserver();
