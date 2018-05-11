const heapsort = function(arr) {
 
    var swap = function(arr, firstIndex, secondIndex) {
      var temp = arr[firstIndex];
      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = temp;
    };
    var maxHeap = function(arr, i) {
      var l = 2 * i;
      var r = l + 1;
      var largest;
      if (l < arr.heapSize && arr[l] > arr[i]) {
        largest = l;
      } else {
        largest = i;
      }
      if (r < arr.heapSize && arr[r] > arr[largest]) {
        largest = r;
      }
      if (largest != i) {
        swap(arr, i, largest);
        maxHeap(arr, largest);
      }
    };
    var buildHeap = function(arr) {
      arr.heapSize = arr.length;
      for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeap(arr, i);
      }
    };
    buildHeap(arr);
    for (var i = arr.length-1; i >= 1; i--) {
      swap(arr, 0, i);
      arr.heapSize--;
      maxHeap(arr, 0);
  
      document.getElementById("getHeapSort").innerHTML = document.getElementById("getHeapSort").innerHTML + a + "<br>";
    }
  };
  var a = [55, 67, 10, 34, 25, 523, 1, -2];
  document.getElementById("getHeapSort").innerHTML = a + "<br>";
  heapSort(a);







class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }
// heapsort Task 1. Taken from 
// function heapsort(scoreFunction){
//   this.content =[];
//   this.scoreFunction =scoreFunction;
// }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.size++;
    this.bubbleUp(index);
  }

  delete() {
    if (this.storage.length === 2) {
      this.size--;
      return this.storage.pop();
    } else if (this.storage.length === 1) {
      return this.storage[0];
    }
    this.size--;
    const max = this.storage[1];
    this.storage[1] = this.storage.pop();
    this.siftDown(1);
    return max;
  }

  getMax() {
    return this.storage[1];
  }

  getSize() {
    return this.size;
  }

  bubbleUp(index) {
    const parent = Math.floor(index/2);
    if (parent > 0 && this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const child1 = index * 2;
    const child2 = index * 2 + 1;
    let maxChild;

    if (this.storage[child1] !== undefined) {
      if (this.storage[child2] === undefined) {
        maxChild = child1;
      } else if (this.storage[child2] !== undefined) {
        maxChild = this.storage[child1] > this.storage[child2] ? child1 : child2;
      }

      if (this.storage[index] < this.storage[maxChild]) {
        [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
        this.siftDown(maxChild);
      }
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
