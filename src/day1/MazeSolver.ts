/*base case 
1. on the wall
2. off the graph 
3. its the end
4. if we have already visited it 
*/
type Point = {
    x: number;
    y: number;
};
const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    //base case
    let path: Point[] = [];
    let crossedPaths: Point[] = [];
    solveMaze(maze, wall, start, end, path, crossedPaths);
    console.log(path);
    return path;
}

function isCrossedPath(crossedPaths: Point[], pos: Point) {
    const isCrossed = crossedPaths.find((p) => p.x === pos.x && p.y === pos.y);
    return isCrossed ? true : false;
}

function solveMaze(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    path: Point[],
    crossedPaths: Point[],
) {
    const { x, y } = start;
    console.log("******** new start: ", { start });
    console.log({ crossedPaths }, { path });

    //base cases

    if (y >= maze.length || x >= maze[y].length || x < 0 || y < 0) return; //off the graph

    if (maze[y][x] === wall) return; //wall

    if (y === end.y && x === end.x) {
        path.push(start);
        console.log("entered in match", path);
        // crossedPaths.push(start);
        return;
    } //reached end point

    crossedPaths.push(start);
    // path.push(start);

    const left = { y, x: x - 1 };
    const top = { y: y - 1, x };
    const right = { y, x: x + 1 };
    const bottom = { y: y + 1, x };

    if (maze[left.y][left.x] != wall && !isCrossedPath(crossedPaths, left)) {
        //left
        path.push({ y, x });
        start = { x: x - 1, y };
        solveMaze(maze, wall, start, end, [...path], crossedPaths);
    }
    if (maze[right.y][right.x] != wall && !isCrossedPath(crossedPaths, right)) {
        //right
        path.push({ y, x });
        start = { x: x + 1, y };
        solveMaze(maze, wall, start, end, [...path], crossedPaths);
    }
    if (
        maze[top.y] &&
        maze[top.y][top.x] != wall &&
        !isCrossedPath(crossedPaths, top)
    ) {
        //top
        path.push({ y, x });
        start = { x, y: y - 1 };
        solveMaze(maze, wall, start, end, [...path], crossedPaths);
    }
    if (
        maze[bottom.y][bottom.x] != wall &&
        !isCrossedPath(crossedPaths, bottom)
    ) {
        //bottom
        path.push({ y, x });
        start = { x, y: y + 1 };
        solveMaze(maze, wall, start, end, [...path], crossedPaths);
    }
    console.log("end", start);
    // crossedPaths.filter(p=> p.x !== x && p.y !== y);
    // }
}

solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
