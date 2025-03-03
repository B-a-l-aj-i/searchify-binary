class BinarySearch {
  binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (arr[mid] > target) {
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
  }

  binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;

    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return this.binarySearchRecursive(arr, target, low, mid - 1);
    } else {
      return this.binarySearchRecursive(arr, target, mid + 1, high);
    }
  }
  lowerBound(arr, target) {
    let low = 0,
      high = arr.length;

    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);

      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  upperBound(arr, target) {
    let low = 0,
      high = arr.length;

    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);

      if (arr[mid] <= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }
}
