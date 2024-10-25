// A graph is a collection of "nodes", or "vertices", and their connections, represented by "edges."
// A graph can by undirected, meaning that the relationship between two nodes is bi-directional, or directed, meaning that the relationship between two nodes is unidirectional.
// A graph can be cyclic, meaning that node A is connected to node B is connected back to node A; or acyclic, where there is no circular connection.
// A graph can be weighted, with the edges connecting the nodes having values that represent something, e.g., length of time to drive from point A to point B. 
// A graph can be connected, meaning there is at least one path between every pair of vertices. In other words, it is possible to travel from any vertex to any other vertex in the graph, possibly passing through other vertices along the way.
// A graph is great when relationships are a key characteristic of the data.
// A graph, because it can become complicated, is difficult to scale. It's unlikely you'll ever have to build your own graph for production. Tools such as Neo4j are used instead.

/* Example graph.
    2--0
   / \
  1---3
*/

// Edge list: shows the connections.
const edgeListGraph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent list: the index is the node and the value is the node's neighbors. Can be made with objects, too, which are especially useful when the values of the nodes aren't numbers or aren't in order.
// Index 0 = node 0; at 0 index is the value of the node that the zero node is connected to.
const adjacentListGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// The adjacent list above as an object instead of an array.
const adjacentListGraphObject = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
}

// Adjacent matrix: a nested array indicating whether there is a connection to another index (1 = yes) or not (0 = no).
const adjacentMatrixGraph = [
  [0, 0, 1, 0], // Index 0 = node 0. Zero is not connected to itself (0) or to 1 (0); is connected to 2 (1); not connected to 3 (0).
  [0, 0, 1, 1], // Index 1 = node 1.
  [1, 1, 0, 1], // Index 2 = node 2.
  [0, 1, 1, 0]  // Index 3 = node 3.
];

// The adjacent matrix above as an object instead of an array.
const adjacentMatrixGraphObject = {
  0: [0, 0, 1, 0], 
  1: [0, 0, 1, 1], 
  2: [1, 1, 0, 1], 
  3: [0, 1, 1, 0] 
};

/* Create this undirected, acyclic, unweighted graph.
    3-----4-----5
    |     |     |
    1-----2     6
    \     /
     \   /
       0
*/
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!node) return this.adjacentList;

    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    } else return this.adjacentList;
  }

  addEdge(node1, node2) {
    if (!node1 || !node2) return this.adjacentList;

    if (!this.adjacentList[node1]) this.addVertex(node1);
    if (!this.adjacentList[node2]) this.addVertex(node2);

    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);

    return this.adjacentList;
  }

  // Helper to view the graph.
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);

    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;

      for (let vertex of nodeConnections) {
        connections += vertex + ' ';
      }

      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 