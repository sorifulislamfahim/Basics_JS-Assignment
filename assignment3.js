// Problem-3 
/**ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে|
 1. প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
 2. প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
 3. প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

function oilPrice(diselQuantity, petroleQuantity, octaneQuantity){
    
    const perLiterDisel = 114;
    const diselTotal = diselQuantity * perLiterDisel;

    const perLiterPetrole = 130;
    const petroleTotal = petroleQuantity * perLiterPetrole;

    const perLiterOctane = 135;
    const octaneTotal = octaneQuantity * perLiterOctane;

    const totalAmount = diselTotal + petroleTotal + octaneTotal;

    // Validation Part 
    if(typeof diselQuantity !== 'number' ){
        return 'Please Enter Your Disel number';
    }
    else if(typeof petroleQuantity !=='number'){
        return 'Please Enter Your Petrole Number'
    }
    else if (typeof octaneQuantity !=='number') {
        return 'Please Enter Your Octane Number'
    }
    else{
        return totalAmount;
    }
    
}
const disel = '0';
const petrole = undefined;
const octane = 5;

const totalAmount = oilPrice(disel, petrole, octane);
console.log(totalAmount);