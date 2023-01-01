const mergeTwoLists = (list1,list2) => {
  if(!list1 || !list2) return list1 || list2

  if(list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next,list2)
      return list1
  }else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
  }
}

list1 = [4,1,2,7,3,6,1,9]
list2 = [90,65,23,76,34,5,7,2,2]
 
 let newlist = mergeTwoLists(list1, list2)
console.log(newlist);