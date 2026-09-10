function averageOfSubtree(root: TreeNode | null): number {
    return getSumCount(root).avgSubTree;
}

function getSumCount(root: TreeNode | null) : {sum: number, count: number, avgSubTree: number} {
    if (root == null) {
        return {sum: 0, count: 0, avgSubTree: 0};
    }
    const left = getSumCount(root.left);
    const right = getSumCount(root.right);
    const sum = left.sum + root.val + right.sum;
    const count = left.count + 1 + right.count;
    const doesAvgMatch = root.val === Math.floor(sum / count); 
    const avgSubTree = left.avgSubTree + (doesAvgMatch ? 1 : 0) + right.avgSubTree;
    return {sum, count, avgSubTree};
}
