/*
                        Text Evaluator 
                    Created By Tabernacle8

Goal: Perdict which text out of a given list is the most important. Rank the others from most important to least important
Important is defined as: Quality / meaning of text. 
Acomplished by: Abstract
*/

//Array of text
var text = ["Was very good to watch anime and wide screen. 10/10 would do again","Super excited, it's my first VR headset, so hoping for the best :)",]


function evaltext(given_text){
    var counter = 0
    //Define no meaning words
    var no_meaning_words = ["was","a","again","about","all","also","and","as","at","be","because","but","by","can","come","could","day","do","even","find","first","for","from","get","give","go","have","he","her","here","him","his","how","I","if","in","into","it","its","just","know","like","look","make","man","many","me","more","my","new","no","not","now","of","on","one","only","or","other","our","out","people","say","see","she","so","some","take","tell","than","that","the","their","them","then","there","these","they","thing","think","this","those","time","to","two","up","use","very","want","way","we","well","what","when","which","who","will","with","would","year","you","your","aboard","above","across","after","against","along","amid","among","anti","around","before","behind","below","beneath","beside","besides","between","beyond","concerning","considering","despite","down","during","except","excepting","excluding","following","inside","minus","near","off","onto","opposite","outside","over","past","per","plus","regarding","round","save","since","through","toward","towards","under","underneath","unlike","until","upon","versus","via","within","without"]
    while(counter<given_text.length){
        var current_text = Array.from(new Set(given_text[counter].split(' '))).toString().replace(/,/g, " ").replace(/  /g, " ").toLowerCase();
        var counter2 = 0
        current_text = current_text.split(" ")
            while(counter2<current_text.length){

                for (word in no_meaning_words){
                    if(current_text[counter2] ==no_meaning_words[word]){
                        current_text[counter2] = ""
                    }
                }
                counter2+=1
            }
            counter2 = 0
            while(counter2<current_text.length){
            for (word in current_text){
                //DO things to each word here
                if(current_text[word] ==""){
                    current_text.splice(word,1)
                }
            }
            counter2+=1
        }
        console.log(current_text)
        counter= counter+1
    }

}

evaltext(text)