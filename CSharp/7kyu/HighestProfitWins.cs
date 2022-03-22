using System;
using System.Linq;

public class MinMax 
{
    public static int[] minMax(int[] lst) 
    {
        int min = lst.Min();
        int max = lst.Max();
        int[] result = {min, max};
        return result;
    }
}