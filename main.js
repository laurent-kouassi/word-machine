using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace console
{
    class Program
    {
        static void Main(string[] args)
        {
            //Your code goes here
            Console.WriteLine("Below is reults!");
            //Console.WriteLine(AssignmentWithArray("4 5 6 - 7 +"));
            Console.WriteLine(AssignmentWithArray("13 DUP 4 POP 5 DUP + DUP + -"));


        }
        public static int AssignmentWithArray(string instructions)
        {
            try
            {
                int index = 0;
                int[] stack = new int[instructions.Length - Regex.Matches(instructions, @"[^\d]").Count];

                //char[] instructionsArray = instructions.Replace(" " , "").ToCharArray();
                string[] instructionsArray = instructions.Split(' ');
                for (int i = 0; i < instructionsArray.Length; i++)
                {
                    switch (instructionsArray[i])
                    {
                        case "+":
                            stack[index - 2] = stack[index - 1] + stack[index - 2];
                            index--;
                            break;
                        case "*":
                            stack[index - 2] = stack[index - 1] * stack[index - 2];
                            index--;
                            break;
                        case "-":
                            stack[index - 2] = stack[index - 1] - stack[index - 2];
                            index--;
                            break;
                        case "DUP":
                            stack[index] = stack[index - 1];
                            index++;
                            break;
                        case "POP":
                            stack[index - 1] = 0;
                            index--;
                            break;
                        default:
                            stack[index] = Convert.ToInt32(instructionsArray[i].ToString());
                            index++;
                            break;
                    }
                }

                return stack[index - 1];
            }
            catch
            {

                return -1;
            }
        }
    }
}
