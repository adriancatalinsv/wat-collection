[] + {}; // "[object Object]"
/*
  Explanation:
  When JavaScript needs to add "stuff" together it will covert the types to primitives.
  That usually means calling the `toString()` function.
  In this case:
    [].toString() produces an empty string
    {}.toString() produces "[object Object]"
    Which results in: "" + "[object Object]" -> "[object Object]"
*/

{} + []; // 0
{} + {}; // NaN
