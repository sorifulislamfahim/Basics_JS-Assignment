// Problem- 2
/** ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */

function isJavaScriptFile(indexName){
   const indexExtension = indexName.endsWith('.js');

// Valadation Part 
    if(indexName === true){
        return indexExtension;
    }
    else{
        return 'Please Enter Your Correct File Name';
    } 
}
const myIndex = '12';
const result = isJavaScriptFile(myIndex);
console.log(result);