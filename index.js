function produceDrivingRange(blockRange) {
  return function (block) {
    if (block > blockRange) {
      return `${block - blockRange} blocks out of range`
    }
    else{
      return `within range by ${blockRange - block}`
    }
  };
}
