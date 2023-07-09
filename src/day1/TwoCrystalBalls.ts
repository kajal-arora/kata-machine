export default function two_crystal_balls(breaks: boolean[]): number {
    /*
    Generalised version - 
        When given two crystal balls that will break if dropped from a high 
        enough distance, determine the exact spot in which it will break in the 
        most optimized way.

    Interview Ques - 
        You are in 100 storey building and you have 2 crsytal balls. 
        Find out which floor do they break.     

    Solution - Had it been implemented in binary search by dividing in half for first ball, I might miss out on one ball and then had to do linear search since I'hv only two balls.  
    */
    let jumpCount = Math.floor(Math.sqrt(breaks.length)); 
    let i = jumpCount;
    for(; i<breaks.length ; i+=jumpCount) {
        if(breaks[i]) {
            break;
        }
    }

    i -=jumpCount;

    for(let j=0; j<jumpCount && i<breaks.length  ; j++, i++) {
        if(breaks[i]) {
            return i;
        }
    }
    return -1;
}