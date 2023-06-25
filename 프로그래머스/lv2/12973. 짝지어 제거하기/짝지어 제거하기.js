function solution(s)
{
  let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length !== 0 && stack[stack.length - 1] === s[i]) {
            // If the top of the stack is the same as the current character, pop from the stack
            stack.pop();
        } else {
            // If the stack is empty or the top of the stack is not the same as the current character, push onto the stack
            stack.push(s[i]);
        }
    }

    // If the stack is empty, return 1, else return 0
    return stack.length === 0 ? 1 : 0;
    
}