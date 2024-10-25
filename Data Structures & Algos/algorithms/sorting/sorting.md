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

## Rules for Determining which Algorithm to Use

1. Insertion

    a. Small data set.
    b. The data set is almost already sorted.

2. Bubble

    a. Only used for educational purposes to teach sorting.
    b. It's really too inefficient for real-world application.

3. Selection

    a. Only used for educational purposes to teach sorting.
    b. It's really too inefficient for real-world application.

4. Merge

    a. The best overall sort algorithm, because its time complexity is guaranteed to be O(n log n).
    b. If speed is the paramount concern, use merge sort.
    c. Drawback: its space complexity is expensive at O(n), because of the call stack created by recursion.
    d. Is stable.

5. Quick

    a. The most popular sorting algorithm, because it offers both fast sorting while using less space.
    b. However, if the wrong pivot is chosen or the data set is nearly sorted, its time complexity can be O(n^2).
    c. Is unstable.

6. [Heap](https://brilliant.org/wiki/heap-sort/)

    a. Its best-case scenario promises both the best time and space complexity, at O(n log n) and O(1), respectively.
    b. In reality, it tends to be [slower](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort) than merge or quick sort.
    c. Choose this algorithm when both time and space are equally important.

7. Timsort (used by JavaScript, at least in Chrome)

    - A hybrid sorting algorithm derived from merge sort and insertion sort.
    - It is designed to be very efficient for real-world data, especially datasets that are already partially ordered, which are common in practical use cases.
    - It works by dividing the array into small chunks, sorting those chunks (using insertion sort), and then merging them (using merge sort).
    - It has a worst-case time complexity of O(n log n), which is the same as other efficient algorithms like merge sort or quick sort, but it also performs well in best-case scenarios, like when the array is already sorted.
    - One key property of timsort, and the reason it was adopted, is that it is stable.

## Notes

1. A stable algorithm maintains the original order of items whose order in the context of the sort doesn't matter, e.g., when sorting alphabetically by the first letter of each word, in a stable alogrithm, `["peach," "straw", "apple", "spork"]` becomes `["apple", "peach," "straw", "spork"]`, where in an unstable algorithm, the resulting array could be `["apple", "peach," "spork", "straw"]`.

2. Mathematically, it is impossible to get a faster sort than O(n log n), making merge, quick, and heap sorts the fastest there is.

3. The exception to the above rule comes in not making comparisons at all. Rather, comparisons are made, but of the values stored in binary on the computer. This only works for numbers (fixed-length integers) in a certain range, however. The two methods are list below.

    - [Counting Sort](https://brilliant.org/wiki/counting-sort/) and [counting sort animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)
    - [Radix Sort](https://brilliant.org/wiki/radix-sort/) (and [radix sort animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html))
    - Bucket Sort
    - Cube Sort

## Sample Interview Questions

1. Sort 10 schools around your house by distance: Insertion sort could work, because the data set is small, so it'll be fast; the implementation is simple; and its space complexity is O(1).

2. eBay sorts listings by the current bid amount: Radix or counting sort, because the data set consists only of numbers within a certain range, e.g., $1 - $100, and so its likely that the algorithm can beat O(n log n).

3. Sport scores on ESPN: Quick sort, because there are different types of data; plus, it offers better space complexity, and because the scores are likely random, coming from various sources and sports, its unlikely that they'll come sorted or nearly so, which will obviate concerns about the worst-case time complexity.

4. Massive database (can't fit all into memory) needs to be sorted by past year's user data: Merge sort, because we won't be doing in-memory sorting (like quick sort) and we need a fast solution, given the size of the data set.

5. Almost-sorted Udemy review data needs to be updated with the addition of two new reviews: Insertion sort, because the data set is likely pre-sorted.

6. Temperature records for the past 50 years in Canada: Radix or counting sort, because the data set is finite and consists of numbers, and as long as the temperatures are integers (whole numbers); otherwise, quick sort for in-memory sorting and to save on memory.

7. Large username database needs to be sorted, and the data is random: Quick sort, because the data set is large and likely unsorted.

8. You want to teach sorting for the first time: Bubble sort or selection sort, which aren't used outside of education because, while simple, they're too inefficient.
