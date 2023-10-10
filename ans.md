# Question Answer

1. let greeting;
   greetign = {};
   console.log(greetign);

   A: {}
   B: ReferenceError: greetign is not defined
   C: undefined

   **Ans B**: because greetign are not defined here .

2. function sum(a, b) {
   return a + b;
   }

   sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

**Ans C**: because in js if one is string than it automatic conver the other types to string.

3. const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

   info.favoriteFood = "🍝";

   console.log(food);

   A: ['🍕', '🍫', '🥑', '🍔']
   B: ['🍝', '🍫', '🥑', '🍔']
   C: ['🍝', '🍕', '🍫', '🥑', '🍔']
   D: ReferenceError

**Ans A**: because we console food, which is array. ANd it not modified in code, just info property have modified.

4. function sayHi(name) {
   return `Hi there, ${name}`;
   }

   console.log(sayHi());

   A: Hi there,
   B: Hi there, undefined
   C: Hi there, null
   D: ReferenceError

**Ans B**: here name has no default value, and function has called with no parameter.

5. let count = 0;
   const nums = [0, 1, 2, 3];

   nums.forEach((num) => {
   if (num) count += 1;
   });

   console.log(count);
   A: 1
   B: 2
   C: 3
   D: 4

**Ans C**: As 0 is a falsy value, so count will not increment in first iterations.
