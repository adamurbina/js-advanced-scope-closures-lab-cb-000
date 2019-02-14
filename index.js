function produceDrivingRange(blockRange) {
  return function (bound) {
    if (bound > blockRange) {
      return `${bound - blockRange} blocks out of range`
    };
    else{
      return `within range by ${blockRange - block}`;
    }
  };
}
