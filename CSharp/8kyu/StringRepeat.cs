using System;

namespace Solution
{
  public static class Program
  {
    public static string RepeatStr(int n, string s)
    {
      //declare variable to hold repeated string
      String repeated = "";
      
      //loop n times to repeat string, update repeated variable and return
      for(int i = 0; i < n; i++) {
        repeated += s;
      }
      
      return repeated;
    }
  }
}