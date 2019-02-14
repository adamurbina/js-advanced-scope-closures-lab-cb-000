function produceDrivingRange(limit) {
  return function withinRange(bound) {
    return bound < limit;
  }
}
