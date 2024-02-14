
    //get the input,check button  elements
    const textElement  = document.getElementById("text-input");
    const checkbtn = document.getElementById("check-btn");
    //attach an event listener to the "Check" button

    checkbtn.addEventListener(('click') , isEmpty => {

        //get the text from the input 
        const inputText = textElement.value.trim(); //trim whitespace all
            
        if(inputText ===''){
            alert("Enter some value");
            return;
        }
        if(inputText !== ''){
            const isItPalindrome = isPlaindrome(inputText);
            if(isItPalindrome){
                alert("yes a plaindrome");
            }else{
                alert("Nah, not a palindrome!");
            }
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
    










