//Problem- 1
/** ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে। */

function radianToDegree(radian){
        const getDegree = radian * 57.2958;
        const result = getDegree.toFixed(2);
        const getDegreeValue = parseFloat(result);

        // Validation Part 
        if(typeof radian !== 'number'){
            return 'Please Enter Radian Number';
        }
        else{
            return getDegreeValue;
        }             
}

const radianValue = 'fahim';
const radianConvertDegree = radianToDegree(radianValue);
console.log(radianConvertDegree);
