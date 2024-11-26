const getNodes = (input) => {
  const regex = /\[([\d\s,]+)\]/g;

  const connections = [];
  let match;
  while ((match = regex.exec(input)) !== null) {
    const [node1, node2] = match[1].split(",").map(Number);
    connections.push([node1, node2]);
  }

  const graph = new Map();
  connections.forEach(([a, b]) => {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  });

  const visited = new Set();
  const networks = [];

  const dfs = (node, network) => {
    if (visited.has(node)) return;
    visited.add(node);
    network.push(node);
    for (const neighbor of graph.get(node)) {
      dfs(neighbor, network);
    }
  };

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      const network = [];
      dfs(node, network);
      networks.push(network);
    }
  }

  const safeNodes = networks
    .filter((network) => network.length < 3)
    .flat()
    .sort((a, b) => a - b);

  return safeNodes.join(",");
};

module.exports = { getNodes };
