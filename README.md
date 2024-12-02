# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Analysis 

The `augmentingPath` function uses the Breadth-First Search (BFS) algorithm to find a path in a graph represented by an adjacency list. The graph has \( n \) nodes (vertices) and \( E \) edges. In the worst case, BFS visits each node exactly once, resulting in a runtime of \( O(n) \). Additionally, it explores all edges connected to the visited nodes, which takes \( O(E) \). Therefore, the overall runtime complexity of the algorithm is:

$$
\Theta(n + E)
$$

This runtime is optimal for BFS, as it efficiently traverses the graph without redundant operations. The function performs well on both sparse and dense graphs, provided the graph is connected or has reachable nodes from the starting point.


## Sources  

For this I started with what was discussed in class and the video provided for the Ford-Fulkerson Algorithm. I then looked it up on geeks for geeks. https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/ that is where I got the idea to use the BFS or Breadth- First search. I looked that up on geeks for geeks https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/ .  The paths are maintained in the queue. This helped with the runtime analysis. 