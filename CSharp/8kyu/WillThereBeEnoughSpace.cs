using System;

public static class Kata
{
  public static int Enough(int cap, int on, int wait)
  {
    //calculate how many seats are available
    int seatsAvailable = cap - on;
    
    //if more seats or equal seats as number of people waiting return 0 
    if(seatsAvailable >= wait) return 0;
    
    //if not enough seats, subtract available seat from those waiting
    return wait - seatsAvailable; 
  }
}