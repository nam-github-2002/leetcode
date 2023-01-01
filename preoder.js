class Node{
   constructor(val,children) {
      this.val = val
      this.children = children
   }
}
var preorder = (root,result = []) => {
   if(!root) return result
    result.push(root.val)
    for(let child in root.children) {
        preorder(child, result)
    }
    return result
}
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')
let h = new Node('h')
let d = new Node('d',[h])
let c = new Node('c',[f,g])
let b = new Node('b',[d,e])
let a = new Node('a',[b,c])



preorder(a)