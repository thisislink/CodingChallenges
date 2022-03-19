using System;

public class SequenceSum
{
  public static string ShowSequence(int n)
  {    
    //edge cases n is 0 or negative
    if(n == 0) return "0=0";
    if(n < 0) return $"{n}<0";
    
    String sequenceResult = "";
    int sumNumbers = 0;
    //loop to create sequence
    for(int i = 0; i <= n; i++) {
      sumNumbers += i;
      if(i != n) {
        sequenceResult += $"{i}+";
      } else {
        sequenceResult += $"{i}";
      }
    }
    //concatenate final sum to string and return
    return sequenceResult + $" = {sumNumbers}";
  }
}