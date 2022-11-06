let mainStack = [];
   
// stack to keep track of max element
let findStack = [];

function push(x)
{
    mainStack.push(x);
    if (mainStack.length == 1)
    {
        findStack.push(x);
        return;
    }

    // If current element is greater than
    // the top element of track stack, push
    // the current element to track stack
    // otherwise push the element at top of
    // track stack again into it.
    if (x > findStack[findStack.length - 1])
        findStack.push(x);
    else
        findStack.push(findStack[findStack.length - 1]);
}

function getMax()
{
    return findStack[findStack.length - 1];
}

function pop()
{
    mainStack.pop();
    findStack.pop();
}
 
push(20);
console.log(getMax());
push(10);
console.log(getMax());
push(50);
console.log(getMax());