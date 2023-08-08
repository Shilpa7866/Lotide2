# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pulipati_shilpa/lotide`

**Require it:**

`const _ = require('@pulipati_shilpa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(...): function takes in an array and returns the first element in the array.
* tail(...): function takes in an array and returns everything except the first element of the array, that is tail of the array.
* middle(...): function in an array and returns middle most element of the array.
* assertEqual(...): function takes in 2 values and returns true if they are equal otherwise false.
* assertArraysEqual(...): function prints an appropriate message after comparing the two arrays.
* assertObjectsEqual(...): function that takes in 2 objects and returns true if they are equal otherwise false.
* eqArrays(...): function takes in 2 arrays and returns true if the arrays are equal otherwise false.
* eqObjects(...): function takes in 2 objects and return true if they are equal otherwise false.
* countLetters(...): function counts the letters in the word and displays each letter count.
* countOnly(...): function that takes in a collection of items and returns a specific subset of those items.
* findKey(...): function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
* findKeyByValue(...): function that takes in an object and a value and returns the first key that corresponds to that value.
* flatten(...): function displays the nested array sorted and returns flatten version.
* letterPositions(...): function displays the postion of the letters in the given word.
* withOut(...): function returns the given array by removing the desired array element.
* takeUntil(...): function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* map(...): function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.