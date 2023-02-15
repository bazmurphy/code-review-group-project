// First Try (with shift and concat method)

// const deepFlat = (arr, result = []) => {
//   if (!arr || arr.length === 0) {
//     return result;
//   }
//   const item = arr.shift();
//   if (!Array.isArray(item)) {
//     result.push(item);
//     deepFlat(arr, result);
//   } else {
//     deepFlat(item.concat(arr), result);
//   }
//   return result;
// };

/* ********************************************************************************************** */

// Second Try

// const deepFlat = (array, result = []) => {
//   if (!array || array.length === 0) {
//     return result;
//   }
//   const arr = [...array];
//   arr.forEach((item) => {
//     if (!Array.isArray(item)) {
//       result.push(item);
//     } else {
//       deepFlat(item, result);
//     }
//   });
//   return result;
// };

/* ********************************************************************************************** */

// Third Try (Baz)

// const deepFlat = (arr) => {
//   if (!arr) {
//     return [];
//   }
//   return [...arr].flat(Infinity);
// };

/* ********************************************************************************************** */

// Final Try (Baz)

export const deepFlat = (array) => {
  if (!array) {
    return [];
  }
  const newArray = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      newArray.push(...deepFlat(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

// 1. Start [1, [2, [3, [4]], 5]]
// 2. Check 1 is not an array so push it to newArr                         [1]

// 3. Check [2, [3, [4]], 5] is an array so recursion (start again)

// 4. Check 2 is not an array so push it  to newArr                        [2]

// 5. Check [3, [4]] is an array so recursion (start again)

// 6. Check 3 is not an array so push it to newArr                         [3]

// 7. Check [4] is an array so recursion (start again)

// 8. Check 4 is not an array so push it and because we don't              [4]
//    have more element, so return it to step 7

// 7. Now, recursion of [4] is finished, so we should spread
//    the newArr which returned and push it to newArr on
//    step 6 which was [3] and then return it to step 5                    [3,4]

// 5. now we receive [3,4] and newArr is [2], so spread it
//    and push it to the newArr on step 4 which was [2]                    [2,3,4]

// 9. now carry on [2, [3, [4]], 5] in forEach and we still
//    have 5 as the last element, so check 5 is not an array
//     so push it to the newArr and return to step 3                       [2,3,4,5]

// 3. now we receive [2,3,4,5] and we have to spread it and
//    push it to the newArr which was [1]                                  [1,2,3,4,5]

// 10.return newArr
