// class Queue {
//   constructor(array = []) {
//     this.array = array;
//   }
//   enqueue(name) {
//     this.array.push(name);
//   }
//   dequeue() {
//     this.array.shift();
//   }
//   print() {
//     console.log(this.array);
//   }
// }
// const queue = new Queue();

// function check(check) {
//   let map = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   console.log(map);
//   let stack = [];
//   for (i = 0; i < check.length; i++) {
//     if (check[i] === "{" || check[i] === "[" || check[i] === "(") {
//       stack.push(check[i]);
//     } else if (stack[stack.length - 1] === map[check[i]]) {
//         let x = check[i]
//         console.log(stack[stack.length - 1]);
//         let y = stack[stack.length - 1]
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   return stack.length ? false : true;
// }

// let checkHight = (ara) => {
//   let arrHight = [0];
//   for (i = 0; i < ara.length; i++) {
//     if (ara[i] > ara[arrHight[arrHight.length - 1]]) {
//       arrHight.push(i);
//     }
//   }
//   return arrHight;
// };

// function selectionSort(sortArr) {
//   for (let i = 0; i < sortArr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < sortArr.length; j++) {
//       if (sortArr[j] < sortArr[min]) {
//         min = j;
//       }
//     }
//     let temp = sortArr[i];
//     sortArr[i] = sortArr[min];
//     sortArr[min] = temp;
//   }

//   return sortArr;
// }

// console.log(selectionSort([9, 8, 3, 5, 4, 6, 7, 1, 2, 0]));

let RepetitionCheck = (inputArr) => {
  // 1 ריצה על המערך שהתקבל בקריאה
  let checkArr = {};
  let x;
  for (i = 0; i < inputArr.length; i++) {
    // 2 אחסון כל הלאמנטים במערך בתוך אובייקטים
    if (checkArr[inputArr[i]]) {
      checkArr[inputArr[i]] += 1;
    } else {
      checkArr = { ...checkArr, [inputArr[i]]: 1 };
    }
    if(checkArr[inputArr[i]]>0){
      if(checkArr[inputArr[i]]>checkArr[inputArr[i+1]]){
        x = inputArr[i]
      }
    }
  }


  console.log( checkArr);
  console.log(x);
};

RepetitionCheck(["a", "b", "a", "b", "d", "f", "a"]);
