class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        cur = head

        while cur and cur.next:
            # 값 교환
            cur.val, cur.next.val = cur.next.val, cur.val
            cur = cur.next.next

        return head