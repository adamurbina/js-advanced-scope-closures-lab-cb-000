function produceDrivingRange(blockRange) {
  return function (block1, block2) {
    if (block > blockRange) {
      return `${block - blockRange} blocks out of range`
    }
    else{
      return `within range by ${blockRange - block}`
    }
  };
}
