
    //get the input,check button  elements
    const textElement  = document.getElementById("text-input");
    const checkbtn = document.getElementById("check-btn");
    const resultElement = document.getElementById("results");
    
    //attach an event listener to the "Check" button

    checkbtn.addEventListener(('click') , isEmpty => {

        //get the text from the input 
        const inputText = textElement.value.trim(); //trim whitespace all
            
        if(inputText ===''){
            alert("Please input a value");
            return;
        }
        if(inputText !== ''){
           
            const isItPalindrome = isPlaindrome(inputText);
            let resultText; // Create a variable to store the result message
            if(isItPalindrome){
                 resultText = 'is a palindrome';
            }else{
                 resultText = "is not a palindrome.";
            }

            resultElement.textContent = `${inputText} ${resultText}`;

        }

    });

    const isPlaindrome = (text) => {
        // Preprocess the text :convert to lowercase :remove non-alphanumeric characters
        const processedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        
        // Reverse the processed text:
        const reversedText = processedText.split('').reverse().join('');
       

        // Compare the original and reversed text:
        return processedText === reversedText;

    }
    










