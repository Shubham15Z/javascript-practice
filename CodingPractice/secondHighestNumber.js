function findSecondHighest(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    console.log(sortedArr)
    return sortedArr[1];
  }
  

  const numbers = [10, 5, 20, 15, 8];
  console.log(findSecondHighest(numbers));
  