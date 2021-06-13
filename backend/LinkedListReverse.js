console.log("Reversing a Linked List")

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: null
                    }
                }
            }
        }
    }
};



function reverse(list) {
    let cur = list;
    let prev = null;
    while (cur != null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
console.log("original list", JSON.stringify(list, null, 2));

console.log("the reversed list", JSON.stringify(reverse(list), null, 2));
