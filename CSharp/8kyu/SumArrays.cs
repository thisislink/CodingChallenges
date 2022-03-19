using System;

public class Kata
{
  public static double SumArray(double[] array)
  {
    //base case: array is empty return 0
    if(Convert.ToInt32(array.Length) == 0) return 0;
    
    //add all numbers in array and store in result variable
    double result = 0;
    
    foreach(double i in array) {
      result += i;
    }
    
    //return final sum
    return result;
  }
}