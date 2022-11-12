/*Given an integer n, return the number of structurally unique BST's which have exactly n nodes of unique values from 1 to n.

    Input: n = 3
Output: 5*/


// node structure
class Node
{
constructor(data)
{
this.key = data;
this.left = null;
this.right = null;
}
};
function constructTrees(start, end)
{
var list = [];

if (start > end)
{
list.push(null);
return list;
}
for (var i = start; i <= end; i++)
{
/* constructing left subtree */
var leftSubtree = constructTrees(start, i - 1);
/* constructing right subtree */
var rightSubtree = constructTrees(i + 1, end);



for (var j = 0; j < leftSubtree.length; j++)
{
var left = leftSubtree[j];
for (var k = 0; k < rightSubtree.length; k++)
{
var right = rightSubtree[k];
// making value i as root
var node = new Node(i);
// connect left subtree
node.left = left;
// connect right subtree
node.right = right;
// push this tree to list
list.push(node);
}
}
}
return list;
}
function preorder(root)
{
if (root != null)
{
console.log(root);
preorder(root.left);
preorder(root.right);
}
}
let N=3
var totalTreesFrom1toN = constructTrees(1, N);
console.log("Pre-order traversal: ",totalTreesFrom1toN.length);