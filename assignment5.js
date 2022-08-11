// Problem 5
/**তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে। তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা। যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে, না হলে false রিটার্ন করবে।*/
const firstFreind = {name: 'abul', freind:'kabul'};
const secondFreind = {name: 'kabul', freind: 'sabul'};

function isBestFriend (firstFreind, secondFreind){

    const firstFreindName = firstFreind.name;
    const secondFreindFreind = secondFreind.freind;

    const firstFreindFreind = firstFreind.freind;
    const secondFreindName = secondFreind.name;

    if(firstFreindName == secondFreindFreind && firstFreindFreind == secondFreindName){
        return true;
    }
    else{
        return false;
    }
}
const result = isBestFriend(firstFreind, secondFreind);
console.log(result);