function produceDrivingRange(blockRange) {
  return function (block1, block2) {
    const blocks = parseInt(block2.substring(0,block2.length-2)) - parseInt(block1.substring(0,block1.length-2))

    if (blocks > blockRange) {
      return `${blocks - blockRange} blocks out of range`
    }
    else{
      return `within range by ${blockRange - blocks}`
    }
  };
}
