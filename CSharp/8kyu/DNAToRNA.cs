using System;
namespace Converter {
  public class Converter
  {
    public string dnaToRna(string dna)
    {
      // Have fun! ^_^
      //declare convertedString
      string[] convertedRna = new string[dna.Length];
      
      //loop thru dna check for T and if T change to U
      for(int i = 0; i < dna.Length; i++) {
        if(dna[i] == 'T') {
          convertedRna[i] = "U";
        }
      }
      //convert array to string and return
      return string.Join("", convertedRna);
    }
  }
}