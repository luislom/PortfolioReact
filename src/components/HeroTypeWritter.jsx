import React, {useEffect, useState} from "react";

const HeroTypeWritter = ({words, speed}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currenttext, setCurrenttext] = useState("");
    const currentWord = words[currentWordIndex];

    useEffect(() => {
        let charIndex = 0;

        const typingInterval = setInterval(() =>{
            if(charIndex <= currentWord.length){
                setCurrenttext(currentWord.slice(0, charIndex));
                charIndex++;
            }else {
            // word typed out, clear and move to the next word
                clearInterval(typingInterval)
                setTimeout(()=> {
                setCurrentWordIndex((prevIndex) => prevIndex === words.length -1 ? 0 : prevIndex + 1);
            },1000);
        }
    }, speed);

    return () => {
        clearInterval(typingInterval);
    };
    },[currentWord, speed, words]);
    return (
        <span className="font-bold text-principal"> {currenttext} </span>
    )
};

export default HeroTypeWritter;