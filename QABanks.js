/**
 * Created by amber on 11/5/2016.
 */

var stance = "T";

var cCount = 0;
var tCount = 0;
var sCount = 0;
var jCount = 0;

document.getElementById("Clinton").onclick = function() {stance = 'C';window.location.assign("TopicLoad.html");};
document.getElementById("Trump").onclick = function() {stance = 'T'; window.location.assign("TopicLoad.html");};
document.getElementById("Stein").onclick = function() {stance = 'S'; window.location.assign("TopicLoad.html");};
document.getElementById("Johnson").onclick = function() {stance = 'J'; window.location.assign("TopicLoad.html");};

var index = 0, index2 = 0;

var bank = new Array();
var comment = new Array();

comment1 = {tComment: "Well, I think there can be profiling. I mean… If they thought there was" +
" something wrong with that group and they saw what was happening, and they didn't want to call the police" +
" because they didn't want to be profiling, I think that's pretty bad. " +
"People are dead. A lot of people are dead right now. So everybody wants to be politically correct, and that's" +
" part of the problem that we have with our country…", cComment:"As president, Hillary will invest in law enforcement " +
"training programs on issues such as implicit bias, use of force, and de-escalation. She will also create national guidelines" +
" for use of force, provide federal matching funds to make body cameras available" +
" to every police department in America, and support legislation to ban racial profiling by federal, state, and local law enforcement" +
" officials.", sComment:"It's clear that we need to rein in police violence, we need to hold police forces accountable, the stop and frisk program in " +
"New York City which is all about racial profiling too, we need to put an end to racial profiling, they do not make us safer and are inherently violent and degrading..." +
" It's really important for people to acknowledge the institutional racism that is built into the functioning of our society. We need to " +
"talk about this so we can understand how tilted of a playing field we are on. We are not in a post racial era, these problems are alive " +
"and well and they are only getting worse.", jComment:"Stop and frisk policies in New York. 700,000 New Yorkers have been stopped " +
"in the last year and basically searched. And we're not talking about getting on an airplane here. We're talking about on the streets " +
"of New York and Mayor Bloomberg had criticism for Arizona's law [SB 1070] said it was going to lead to racial profiling. Well I have " +
"got to tell you in New York I think racial profiling is going on right now with regard to the whole stop and frisk. " +
"Isn't this why we fought wars when it comes to protecting our civil liberties? Well this is civil liberties out the window."};
comment2 = {tComment: "Donald Trump has no position on Native American treaties.", cComment:"...believes the United States should fulfill its treaty obligations and trust responsibilities to Tribal Nations. " +
"She believes we need to break down all the barriers that hold Native Americans back and build ladders of opportunity for all Native " +
"American people.That includes removing obstacles that contribute to addiction, high unemployment and poverty rates on many reservations.",
    sComment:"Native American land & treaty rights often stand as the front line against government & corporate attempts to exploit the " +
    "Earth's resources.", jComment:"Gary Johnson has no position on Native American treaties."};
comment3 = {tComment: "I support legislation which allows the NSA to hold the bulk metadata. For oversight, I propose that a court, which is available" +
" any time on any day, is created to issue individual rulings on when this metadata can be accessed.", cComment:"Congress should move ahead now " +
"with the USA Freedom Act [that would restrict NSA mass data collection]—a good step forward " +
"in ongoing efforts to protect our security & civil liberties.", sComment: "[Edward Snowden] has done the American people an incredible service by exposing the violations of the Constitution that have been" +
" perpetrated on us - which was taken very seriously around the world, where he has been vindicated. The kind of spying going on has not been" +
" protecting us - not one instance of a terrorist plot was found by these abuses - none, by mass spying.",
    jComment:"...he government is determined to insert itself into our freedom to communicate, conduct " +
"business and seek information via the Web. The government is even demanding that it be granted special 'back doors' into encrypted, private information" +
" held and moved by Internet providers. The excuse is security — a laughable concept from a government that has proven time after time to be incapable" +
" of protecting even the most basic data."};
comment4 = {tComment: "Let me just set it straight. I put in the biggest tax decrease of anyone running for office so far. And that really is a proposal because we have to go to Congress... I said I may have to increase it on the wealthy. I'm not going to allow it to be increased on the middle class. Now, if I increase on the wealthy, that means they're still going to being paying less than they pay now. I'm not talking about increasing [the tax rate] at this point. I'm talking about increasing [the numbers] from my tax proposal.", cComment:"Slashing taxes on the wealthy hasn't worked. And a lot of really smart, wealthy people know that. " +
"And they are saying, hey, we need to do more to make the contributions we should be making to rebuild the middle class." , sComment:"[W]e are calling for a fair tax system. So we have, for example, a financial transaction tax, which would bring hundreds of billions of dollars into the economy; an offshore tax haven tax; and a progressive tax on millionaires and billionaires.", jComment:"[W]e're calling for a fair tax system. So we have, for example, a financial transaction tax, which would bring hundreds of billions of dollars into the economy; an offshore tax haven tax; and a progressive tax on millionaires and billionaires."};
comment5 = {tComment: "Goofy Elizabeth Warren lied when she says I want to abolish the Federal Minimum Wage. See media—asking for increase! Based on his comments, Donald Trump shows that he is neither for or against an increase in minimum wage.", cComment:"“I want to raise the federal minimum wage to $12, and encourage other communities to go even higher.", sComment:"In the world's richest country, no one who works should live in poverty. Raising the federal minimum wage to $15 an hour is a simple and effective way to fight growing inequality and empower working people to provide a decent life for their families.", jComment:"...I just think when government gets involved in setting wages, there's no stopping what government will intervene in doing."};

comment6 = {tComment: "An amendment, pushed by Lyndon Johnson, many years ago, threatens religious institutions with a loss of their tax-exempt status if they openly advocate their political views. Their voice has been taken away. I will work hard to repeal that language and to protect free speech for all Americans.", cComment:"Hillary Clinton has shown no position on whether or not religious institutions should remain tax exempt.", sComment:"...I would agree with the principal here of separation of church and state, which would seem to say we should not give special favors to employees of religious institutions that certainly sounds true.", jComment:"As with almost all aspects of the current tax code, the granting of exemptions, credits, etc., to specific groups is a recipe for favoritism and government manipulation. That is one of the primary reasons I advocate a simple federal consumption tax to replace all income taxes - and eliminate all tax subsidies, credits and exemptions."};


/*
comment7 = {tComment: "Well, there's no such thing as free education, because you know that ultimately somebody else is going to be paying for that education...You take a look at how college costs are rising and there's no reason for it. They are letting them go up and the problem is the students are getting crushed because, again, the government just keeps giving them more and more money and the students give them to the college. So it's not fair.”", cComment:"Students should never have to borrow to pay for tuition, books, and fees to attend a four-year public college in their state under the New College Compact. Pell Grants are not included in the calculation of no-debt-tuition, so Pell recipients will be able to use their grants fully for living expenses. Students at community college will receive free tuition.", sComment:"Abolish student debt to free a generation of Americans from debt servitude. Guarantee tuition-free, world-class public education from pre-school through university. End high stakes testing and public school privatization",
jComment:"I would not believe that colleges or universities should be free. So from a federal standpoint… they would be too expensive from a federal standpoint. If states want to do that of course, that's their prerogative. But should they be free? No, they shouldn't be free… In my opinion the high cost of college tuition has everything to do with guaranteed student loans. I believe that if guaranteed government student loans were to have never existed then college tuition today would be half of what it is.""};
*/

/* comment8 = {tComment: "… I'm fine with affirmative action. We've lived with it for a long time. And I lived with it for a long time. And I've have great relationships with lots of people. So I'm fine with it.",
    cComment:"I think we've got to have affirmative action generally to try to give more opportunities to young people from disadvantaged backgrounds -- whoever they are.", sComment:"Jill has no position on affirmative action in the admissions process.", jComment:"OK, so I get elected President of the United States, and Congress somehow makes legislation to abolish affirmative action, I would sign that legislation. Would I actively seek that legislation? No, I wouldn't go out beating the drum on ending that. But if presented with the ability to end it I would."};

comment9 = {tComment: "Charter schools, in particular, have demonstrated amazing gains and results in providing education to disadvantaged children and the success of these schools will be a top priority for my Administration. They also produce competition that causes better outcomes for everyone.", cComment:"Well, I have for many years now, about 30 years, supported the idea of charter schools. But not as a substitute for the public schools. But as a supplement for the public schools.", sComment:"[C]harter schools are not better than public schools—and in many cases they are far worse. They cherry-pick their students so they can show better test scores. The treasure of our public schools system has been assaulted by the process of privatization.", jComment:"I am pleased to sign these bills [allowing more charter schools in New Mexico], which will allow some students in New Mexico to go to public schools that are freed from educational bureaucracy and free to be more innovative and focus on results."};
*/






var comments = [comment1, comment2, comment3, comment4];





var q1answer1 = {answerText: "Yes", answerType: "CS"};
var q1answer2 = {answerText: "No", answerType: "TJ"};
var q2answer1 = {answerText: "Yes", answerType: "CT"};
var q2answer2 = {answerText: "No", answerType: "J"};
var q3answer1 = {answerText: "Yes", answerType: "TJ"};
var q3answer2 = {answerText: "No", answerType: "S"};
var q4answer1 = {answerText: "Yes", answerType: "CS"};
var q4answer2 = {answerText: "No", answerType: "T"};
var q5answer1 = {answerText: "Yes", answerType: "CTS"};
var q5answer2 = {answerText: "No", answerType: "J"};
var q6answer1 = {answerText: "Yes", answerType: "T"};
var q6answer2 = {answerText: "No", answerType: "J"};
var q7answer1 = {answerText: "Yes", answerType: "CJS"};
var q7answer2 = {answerText: "No", answerType: "T"};
var q8answer1 = {answerText: "Yes", answerType: "CJS"};
var q8answer2 = {answerText: "No", answerType: "T"};
var q9answer1 = {answerText: "Yes", answerType: "CJS"};
var q9answer2 = {answerText: "No", answerType: "T"};
var q10answer1 = {answerText: "Yes", answerType: "T"};
var q10answer2 = {answerText: "No", answerType: "CJS"};
var q11answer1 = {answerText: "Yes", answerType: "CS"};
var q11answer2 = {answerText: "No", answerType: "Null"};
var q12answer1 = {answerText: "Yes", answerType: "T"};
var q12answer2 = {answerText: "No", answerType: "CJS"};
var q13answer1 = {answerText: "Yes", answerType: "CJS"};
var q13answer2 = {answerText: "No", answerType: "T"};
var q14answer1 = {answerText: "Yes", answerType: "CS"};
var q14answer2 = {answerText: "No", answerType: "J"};
var q15answer1 = {answerText: "Yes", answerType: "CJ"};
var q15answer2 = {answerText: "No", answerType: "T"};


//Education
var question1 = {
    qTopic: "Education",
    qText: "Should Public Colleges/Universities Be Tuition-Free?",
    Ans1: q1answer1,
    Ans2: q1answer2
};
var question2 = {
    qTopic: "Education",
    qText: "Should Colleges/Universities Use Affirmative Action for Admissions?",
    Ans1: q2answer1,
    Ans2: q2answer2
};
var question3 = {
    qTopic: "Education",
    qText: "Is the growth of charter schools good for education in America?",
    Ans1: q3answer1,
    Ans2: q3answer2
};


//Economy
var question4 = {
    qTopic: "Economy",
    qText: "Should Federal Taxes Be Increased?",
    Ans1: q4answer1,
    Ans2: q4answer2
};
var question5 = {
    qTopic: "Economy",
    qText: "Should Federal Minimum Wage Be Increased?",
    Ans1: q5answer1,
    Ans2: q5answer2
};
var question6 = {
    qTopic: "Economy",
    qText: "Should churches remain tax exempt",
    Ans1: q6answer1,
    Ans2: q6answer2
};


//Environment
var question7 = {
    qTopic: "Environment",
    qText: "Should Genetically Modified (GMO) Foods Have Mandatory Labeling?",
    Ans1: q7answer1,
    Ans2: q7answer2
};
var question8 = {
    qTopic: "Environment",
    qText: "Should the US Transition Away from Fossil Fuels and Towards Renewable Energy?",
    Ans1: q8answer1,
    Ans2: q8answer2
};
var question9 = {
    qTopic: "Environment",
    qText: "Are Humans Primarily Responsible for Global Climate Change?",
    Ans1: q9answer1,
    Ans2: q9answer2
};


//Civil Rights
var question10 = {
    qTopic: "Civil Rights",
    qText: "Should Law Enforcement Be Allowed to Use Racial Profiling?",
    Ans1: q10answer1,
    Ans2: q10answer2
};
var question11 = {
    qTopic: "Civil Rights",
    qText: "Should the US abide by its’ Treaties with Native American Tribes?",
    Ans1: q11answer1,
    Ans2: q11answer2
};
var question12 = {
    qTopic: "Civil Rights",
    qText: "Should the NSA continue to collect Phone and Email Metadata from US citizens?",
    Ans1: q12answer1,
    Ans2: q12answer2
};


//HealthCare
var question13 = {
    qTopic: "HealthCare",
    qText: "Should Abortion Be Legal?",
    Ans1: q13answer1,
    Ans2: q13answer2
};
var question14 = {
    qTopic: "HealthCare",
    qText: "Should All Americans Be Entitled to Health Care?",
    Ans1: q14answer1,
    Ans2: q14answer2
};
var question15 = {
    qTopic: "HealthCare",
    qText: "Should Planned Parenthood Receive Federal Funding?",
    Ans1: q15answer1,
    Ans2: q15answer2
};



bank = [question1, question2, question3, question4, question5];


document.getElementById("topic").innerHTML = bank[index]["qTopic"];
document.getElementById("header").innerHTML = bank[index]["qText"];
document.getElementById("answer1").innerHTML = bank[index]["Ans1"]["answerText"];
document.getElementById("answer2").innerHTML = bank[index]["Ans2"]["answerText"];



var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];





document.getElementById("answer1").onclick = function () {
    myFunction()
};


//document.getElementById("question").addEventListener("click", myFunction);

// When the user clicks the button, open the modal
/*btn1.onclick = function() {
    modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    //document.getElementById("answer1").innerHTML = "Your Stance is Hilary.";
    if (!bank[index]["Ans1"]["answerType"].includes(stance)) {
        if(stance == 'T'){
            document.getElementById("comment").innerHTML = comments[index2]['tComment'];
        }else if (stance == 'J'){
            document.getElementById("comment").innerHTML = comments[index2]['jComment'];
        }else if (stance == 'S'){
            document.getElementById("comment").innerHTML = comments[index2]['sComment'];
        }else if (stance == 'C') {
            document.getElementById("comment").innerHTML = comments[index2]['cComment'];
        }
        //document.getElementById("comment").innerHTML = "";

        modal.style.display = "block";


        //send comment on true stance
        if(bank[index]["Ans1"]["answerType"].includes('J')){
            jCount = jCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('C')){
            cCount = cCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('S')){
            sCount = sCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('T')){
            tCount = tCount + 1;
        }


    }else{
        if(bank[index]["Ans1"]["answerType"].includes('J')){
            jCount = jCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('C')){
            cCount = cCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('S')){
            sCount = sCount + 1;
        }
        if(bank[index]["Ans1"]["answerType"].includes('T')){
            tCount = tCount + 1;
        }

    }






    index = index + 1;
    index2 = index2 + 1;

    if(index > 4){
       window.location.assign("resultspage.html");


    }else {
        document.getElementById("topic").innerHTML = bank[index]["qTopic"];
        document.getElementById("header").innerHTML = bank[index]["qText"];
        document.getElementById("answer1").innerHTML = bank[index]["Ans1"]["answerText"];
        document.getElementById("answer2").innerHTML = bank[index]["Ans2"]["answerText"];
    }
    //document.getElementById("header").innerHTML = bank[qnum]["qText"];

  //  console.log("It Works!!!")

}



document.getElementById("answer2").onclick = function() {
    myFunction2()
};

function myFunction2() {
    //document.getElementById("answer1").innerHTML = "Your Stance is Hilary.";

    if (!bank[index]["Ans2"]["answerType"].includes(stance)) {
        //send comment on true stance
        if(stance == 'T'){
            document.getElementById("comment").innerHTML = comments[index2]['tComment'];
        }else if (stance == 'J'){
            document.getElementById("comment").innerHTML = comments[index2]['jComment'];
        }else if (stance == 'S'){
            document.getElementById("comment").innerHTML = comments[index2]['sComment'];
        }else if (stance == 'C') {
            document.getElementById("comment").innerHTML = comments[index2]['cComment'];
        }
        modal.style.display = "block";

        if(bank[index]["Ans2"]["answerType"].includes('J')){
            jCount = jCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('C')){
            cCount = cCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('S')){
            sCount = sCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('T')){
            tCount = tCount + 1;
        }
    }else{
        if(bank[index]["Ans2"]["answerType"].includes('J')){
            jCount = jCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('C')){
            cCount = cCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('S')){
            sCount = sCount + 1;
        }
        if(bank[index]["Ans2"]["answerType"].includes('T')){
            tCount = tCount + 1;
        }

    }


    index = index + 1;
    index2 = index2 + 1;
    if(index > 4){
       window.location.assign("resultspage.html");

    }else {


        document.getElementById("topic").innerHTML = bank[index]["qTopic"];
        document.getElementById("header").innerHTML = bank[index]["qText"];
        document.getElementById("answer1").innerHTML = bank[index]["Ans1"]["answerText"];
        document.getElementById("answer2").innerHTML = bank[index]["Ans2"]["answerText"];
        //document.getElementById("header").innerHTML = bank[qnum]["qText"];
    }
    //console.log("It Works!!!")

}



