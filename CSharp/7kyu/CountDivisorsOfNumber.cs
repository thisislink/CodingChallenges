public class Kata
{
  public static int Divisors(int n)
  {
    int counter = 0;
    //loop from n to 1 checking each value is a divisor
    //if divisor, update count
    for(int i = n; i >= 1; i--) {
      if(n % i == 0) counter++;
    }
    return counter;
  }
}