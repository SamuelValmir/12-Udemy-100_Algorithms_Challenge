## Are Equally Strong
---
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

### Example
- For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

- For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

- For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

### Input/Output 
- **[time limit] 4000ms (js)**
- **[input] integer yourLeft**
A non-negative integer representing the heaviest weight you or your friend can lift with any your arm.

- **[output] boolean**
true if you and your friend are equally strong, false otherwise.

### Guaranteed constraints:
0 ≤ yourLeft ≤ 20.
0 ≤ yourRight ≤ 20.
0 ≤ friendsLeft ≤ 20.
0 ≤ friendsRight ≤ 20.


