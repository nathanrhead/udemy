# Searching

## Types

- Linear (or sequential) search: a method of finding a target value within a list: O(n).
  - indexOf()
  - findIndex()
  - find()
  - includes()
- Binary search: when a list is sorted, half of the list may be discarded at each pass: O(log n).
- Breadth-first search: used with trees and graphs, this method visits each node from top to bottom and left to right: O(n).
- Depth-first search: used with trees and graphs, this method visits each node in a vertical traversal, instead of a horizontal one: O(n), but with less space complexity.
  - in-order DFS: visits nodes from bottom to top and left to right in the left subtree, then the root, then the right subtree; called in-order, because in a binary search tree, the returned values will be in ascending order, the smaller children always being on the left and the larger on the right.
  - pre-order DFS: visits the root first and works down the tree from left to right; useful for recreating a tree, because it starts with the root node.
  - post-order DFS: visit nodes from bottom to top and left to right in the left subtree, then the right subtree, and then the root; or, left child, right child, parent.

## Pros and Cons of BFS & DFS

1. Time complexity is the same for both; space complexity is not. Click [here](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr) for more information on this topic.
2. BFS:

    - is good for finding the shortest path (when edges aren't weighted), because the traversal always looks at the closest nodes (unless it's known that the target node is near the bottom of the tree).
    - requires more memory, because a node's children have to be tracked.
        - BFS uses a queue to track all nodes at the current level before moving to the next level.
        - In the worst case, it has to store all nodes at the deepest level simultaneously. For a balanced binary tree, the deepest level contains about n/2 nodes.
        - The memory usage for BFS can grow to O(n) in a binary tree, making it much more memory-intensive as n grows.

3. DFS:

    - is good for determining whether a path exists from a source node to a target node.
    - uses less memory.
        - DFS uses a stack (either explicitly with a data structure or implicitly with recursion) to keep track of nodes.
        - It follows a path from the root node down to a leaf node before backtracking. At any point, the maximum number of nodes it needs to remember is the depth of the tree or graph (in a binary tree, for instance, the memory usage is proportional to  O(d) , where  d  is the depth of the tree).
        - For a balanced tree, this depth  d  is around  \log n , making the memory use of DFS relatively low.
    - can be slow, especially if the tree is really deep.

## Exercise: BFS vs DFS

- If you know a solution is not far from the root of the tree: use BFS.
- If the tree is very deep and solutions are rare: use BFS, because DFS is slow in deep trees.
- If the tree is very wide: use DFS, becaue BFS will use too much memory.
- If solutions are frequent but located deep in the tree: use DFS, because finding an answer will be quicker than with BFS..
- Determining whether a path exists between two nodes: use DFS.
- Finding the shortest path: use BFS.
- Validating a binary search tree: use BFS.

## Bellman-Ford and Dijkstra

- When a graph us weighted, excellent for finding the shortest path.
- Bellman and Dijkstra are academics who figured out these algorithms.
- The Bellman-Ford algorithm can accommodate negative weights, while Dijkstra's cannot.
- The Bellman-Ford algorithm isn't very efficient at O(n^2), while Dijkstra's is more efficient.
