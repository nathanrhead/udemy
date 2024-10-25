# Sorting Algorithms

## Introdouction

Sorting (and searching) are important actions in large companies because (a) they're expensive at scale and (b) data is less or inaccessible without effective sorting (and searching) methods.

While you may not be asked to implement your own version of a sorting algorithm in a technical interview, you may be asked to discuss the pros and cons of various algorithms in a particular context.

A great resource for a visual representation of which sorting algorithms work best when, [click here](https://www.toptal.com/developers/sorting-algorithms).

## Issues with Native Sorting Methods

If you're not implementing your own sorting method, you need to ensure that you understand how the native method you're using works. 

For example, take this array of numbers: `[2, 65, 34, 2, 1, 7, 8]`. JavaScript's sort() method will produce this result: `[1, 2, 2, 34, 65, 7, 8]`. This is unlikely the desired result, though the logic of the sort is clear: it converts numbers to strings before comparing them, measuring the character code. Another example is the sorting of symbols or words with foreign letters, which again will be sorted based on their unicode values.

In addition, JS's sort() method's time and space complexity cannot be guaranteed, because it is dependent on the browser's implementation.

## Basic Sorting Alogrithms

1. Basic: O(n^2)

    - Bubble Sort
    - Selection Sort
    - Insertion Sort

2. Divide and Conquer: O(n log n): Dividing the problem into subsets (e.g., by halves) and using recursion to process each subset.

    - Merge Sort
    - Quick Sort

## Notes

1. A stable algorithm maintains the original order of items whose order in the context of the sort doesn't matter, e.g., when sorting alphabetically by the first letter of each word, in a stable alogrithm, `["peach," "straw", "apple", "spork"]` becomes `["apple", "peach," "straw", "spork"]`, where in an unstable algorithm, the resulting array could be `["apple", "peach," "spork", "straw"]`.
