function findOutlier(integers){
     const evenNums = integers.filter(item => item % 2 === 0);
     const oddNums = integers.filter(item => item % 2 !== 0);

     return evenNums.length === 1 ? evenNums[0] : oddNums[0];
  }