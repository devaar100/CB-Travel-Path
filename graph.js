/**
 * Created by aarnavjindal on 19/03/20.
 */

function createGraph(V,E){
    // V - Number of vertices in graph
    // E - Number of edges in graph (u,v,w)
    let adj_list = []; // Adjacency list
    for(let i = 0 ; i < V ; i++){
        adj_list.push([]);
    }
    for(let i = 0 ; i < E.length ; i++){
        adj_list[E[i][0]].push([E[i][1],E[i][2]]);
        adj_list[E[i][1]].push([E[i][0],E[i][2]]);
    }
    return adj_list;
}

let V = 3;
let E = [[0,1,1],[0,2,2],[1,2,3]];
let graph = createGraph(V,E);
console.log(graph);
