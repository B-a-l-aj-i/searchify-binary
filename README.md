# Binary Search Utility

A JavaScript utility class that provides binary search operations, including iterative and recursive search, lower bound, upper bound, and a toggle function that inserts or removes a target value from a sorted array.

## Installation

```sh
npm install searchify-binary
```

## Usage

Import the class in your JavaScript or TypeScript project:

```javascript
import { BinarySearch } from "searchify-binary";
```

### Methods

#### `binarySearch(arr, target)`

Performs an iterative binary search to find the `target` in a sorted array.

**Parameters:**

- `arr` (Array<number>) - Sorted array of numbers
- `target` (number) - Value to search for

**Returns:**

- Index of the `target` if found, otherwise `-1`

**Example:**

```javascript
const bs = new BinarySearch();
console.log(bs.binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(bs.binarySearch([1, 3, 5, 7, 9], 6)); // Output: -1
```

#### `binarySearchRecursive(arr, target, low, high)`

Recursively searches for `target` in a sorted array.

**Example:**

```javascript
console.log(bs.binarySearchRecursive([1, 3, 5, 7, 9], 7)); // Output: 3
```

#### `lowerBound(arr, target)`

Finds the first index where `target` can be inserted while maintaining order.

**Example:**

```javascript
console.log(bs.lowerBound([1, 3, 5, 7, 9], 6)); // Output: 3
```

#### `upperBound(arr, target) you can use this to find the ceil of number`

Finds the first index where `target` is strictly greater.

**Example:**

```javascript
console.log(bs.upperBound([1, 3, 5, 5, 7], 5)); // Output: 4
```

#### `binarySearchToggle(arr, target)`

Toggles the presence of `target` in a sorted array. If `target` exists, it is removed; if not, it is inserted in the correct position.

**Example:**

```javascript
let arr = [1, 3, 5, 7, 9];
console.log(bs.binarySearchToggle(arr, 5)); // Removes 5: [1, 3, 7, 9]
console.log(bs.binarySearchToggle(arr, 6)); // Inserts 6: [1, 3, 6, 7, 9]
```

## License

This package is licensed under the ISC License.
