const paragraphs=["All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
"Love isn't always a ray of sunshine. That's what the older girls kept telling her when she said she had found the perfect man. She had thought this was simply bitter talk on their part since they had been unable to find true love like hers. But now she had to face the fact that they may have been right. Love may not always be a ray of sunshine. That is unless they were referring to how the sun can burn.",
"The irony of the situation hadn't escaped her. She had taken years to sculpt the perfect persona with the perfect look that she shared on Instagram. She knew her hundreds of thousands of followers envied that life she showed and stayed engaged with her because they wanted that life too. The truth was that she wanted the perfect life she portrayed more than any of her fans. The fact was that despite all the perfection she shared on social media, her life was actually more of a mess than most.",
"They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you don't show the world what you're made of when they are all watching, you show that in your actions when nobody was looking. It was looking more and more like her brother was correct.",
"He swung back the fishing pole and cast the line which ell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear.",
"The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.",
"The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over a week since their last meal and they were getting desperate. The cubs would make a good meal, but there were high risks taking on the mother Grizzly. A decision had to be made and the wrong choice could signal the end of the pack.",	
"I've rented a car in Las Vegas and have reserved a hotel in Twentynine Palms which is just north of Joshua Tree. We'll drive from Las Vegas through Mojave National Preserve and possibly do a short hike on our way down. Then spend all day on Monday at Joshua Tree. We can decide the next morning if we want to do more in Joshua Tree or Mojave before we head back.",
"It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
"What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.",
"They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you don't show the world what you're made of when they are all watching, you show that in your actions when nobody was looking. It was looking more and more like her brother was correct.",
"How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.",
"He lifted the bottle to his lips and took a sip of the drink. He had tasted this before, but he couldn't quite remember the time and place it had happened. He desperately searched his mind trying to locate and remember where he had tasted this when the bicycle ran over his foot.",
"I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans.",
"Twenty seconds were all that was left and Richard could hear each one tick by. Fifteen seconds now remained and the panic began to fully set in. Ten seconds and he wasn't sure he had enough time. Five seconds, four, three, two, one...",
"He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
"She had been an angel for coming up on 10 years and in all that time nobody had told her this was possible. The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her. Angels could lose their wings.",
"The answer was within her reach. It was hidden in a box and now that box sat directly in front of her. She'd spent years searching for it and could hardly believe she'd finally managed to find it. She turned the key to unlock the box and then gently lifted the top. She held her breath in anticipation of finally knowing the answer she had spent so much of her time in search of. As the lid came off she could see that the box was empty.",
"Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.",
"There was a leak in the boat. Nobody had yet noticed it, and nobody would for the next couple of hours. This was a problem since the boat was heading out to sea and while the leak was quite small at the moment, it would be much larger when it was ultimately discovered. John had planned it exactly this way."]
const typingText=document.querySelector(".typing-text p"),inputfield=document.querySelector(".input-field"),
mistaketag=document.querySelector(".mistakes span"),
timetag=document.querySelector(".timeleft span b"),
wpmtag=document.querySelector(".wpm span"),
cpmtag=document.querySelector(".cpm span"),
tryagainBtn=document.querySelector("button");
let timer,maxTime=60,timeLeft=maxTime,wpm,
charIndex=mistakes=isTyping=0;

function randomParagraph(){
    //getting the random and it will always less than paragraphs length.
let randIndex=Math.floor(Math.random()*paragraphs.length);
typingText.innerHTML="";
//getting random items from the paragraphs array, splitting all characters,
//of it , adding each character inside span and then adding this span inside p.
paragraphs[randIndex].split("").forEach(span=>{
    let spanTag=`<span>${span}</span>`;
    typingText.innerHTML += spanTag;
});
//focusing input field on keydown
document.addEventListener("keydown",()=>inputfield.focus());
typingText.addEventListener("click",()=>inputfield.focus());

}

function initTyping(){
const characters=typingText.querySelectorAll("span");
let typedChar=inputfield.value.split("")[charIndex];
if(charIndex< characters.length && timeLeft >0){
if(!isTyping){
    timer=setInterval(inittimer,1000);
    isTyping=true;}
    //console.log(characters)
    if(typedChar == null){
        charIndex--;
        if( characters[charIndex].classList.add("correct")){
            mistakes--;  
        }
        characters[charIndex].classList.add("correct","incorrect");
    }
    else{
    if(characters[charIndex].innerText === typedChar){
       characters[charIndex].classList.add("correct");
        console.log("correct");
    }
    else{
        mistakes++;
        characters[charIndex].classList.add("incorrect");
        console.log("incorrect");
    }
    charIndex++;
    }
    characters.forEach(span=>span.classList.remove("active"));
    characters[charIndex].classList.add("active");
     wpm=Math.round((((charIndex-mistakes)/5)/(maxTime-timeLeft))*60);
    wpm=wpm<0||!wpm ===Infinity?0:wpm;
    wpmtag.innerText=wpm;
    mistaketag.innerText=mistakes;
    cpmtag.innerText=charIndex - mistakes;
   

}
else{
clearInterval(timer);
inputfield.value="";
}
}
function inittimer(){
    if(timeLeft>0){
        timeLeft--;
        timetag.innerText=timeLeft;
    }
    else{
        clearInterval(timer);
    }
}

function resetgame(){
   randomParagraph()
    timeLeft=maxTime;
    clearInterval(timer);
charIndex=mistakes=isTyping=0;
wpmtag.innerText=0;
mistaketag.innerText=mistakes;
cpmtag.innerText=0;
timetag.innerText=timeLeft;
}
inputfield.addEventListener("input",initTyping);
tryagainBtn.addEventListener("click",resetgame);
