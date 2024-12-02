function augmentingPath(graph, start, end) {
    if (start === end) return [start];

    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (visited.has(node)) continue;
        visited.add(node);

        for (let neighbor in graph[node]) {
            if (!visited.has(neighbor)) {
                let newPath = [...path, neighbor];
                if (neighbor === end) return newPath;
                queue.push(newPath);
            }
        }
    }

    return [];
}
