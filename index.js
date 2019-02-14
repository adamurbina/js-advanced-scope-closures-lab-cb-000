function produceDrivingRange(blockRange) {
  return function withinRange(bound) {
    return bound < blockRange;
  }
}
