var flatten = function (root) {
    const prev = { node: null };
    helper(root, prev);
  };
  
  function helper(root, prev) {
    if (!root) return null;
  
    helper(root.right, prev);
    helper(root.left, prev);
  
    root.right = prev.node;
    root.left = null;
    prev.node = root;
  }