import java.util.*;

class Solution {
    public int solve(String[] ops) {
        Stack<Integer> stack = new Stack<>();
        for (String op : ops) {
            if (op.equals("POP")) {
                if (!stack.isEmpty()) {
                    stack.pop();
                } else {
                    return -1;
                }
            } else if (op.equals("DUP")) {
                if (!stack.isEmpty()) {
                    int a = stack.peek();
                    stack.push(a);
                } else {
                    return -1;
                }
            } else if (op.equals("+")) {
                if (stack.size() >= 2) {
                    int a = stack.pop();
                    int b = stack.pop();
                    int c = a + b;
                    stack.push(c);
                } else {
                    return -1;
                }
            } else if (op.equals("-")) {
                if (stack.size() >= 2) {
                    int a = stack.pop();
                    int b = stack.pop();
                    int c = a - b;
                    stack.push(c);
                } else {
                    return -1;
                }
            } else {
                try {
                    int a = Integer.parseInt(op);
                    stack.push(a);
                } catch (NumberFormatException e) {
                    // do nothing
                }
            }
        }
        if (!stack.isEmpty()) {
            return stack.peek();
        } else {
            return -1;
        }
    }
}
