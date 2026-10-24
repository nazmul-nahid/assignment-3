/*

Problem-01: New Price for Eid Sale
⚠️ Function Name Must be newPrice()

আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউন্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

📥 Input:
প্রথম ইনপুট: একটি সংখ্যা যা মূল দাম
(currentPrice : Number)
দ্বিতীয় ইনপুট: একটি সংখ্যা যা ডিসকাউন্ট
(discount : Number %)
🚀 Output:
ফাংশনটি ডিসকাউন্ট করে নতুন দাম return করবে (return type string হতে পারে!)
Output দশমিক সংখ্যা ও হতে পারে
দশমিক এর পর ৩ ঘর দেখাতে হবে

*/

function newPrice(currentPrice, discount){
    if(typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid";
    }
    if (discount < 0 || discount > 100 ) {
        return "Invalid";
    }
    const totalDiscount = currentPrice * discount / 100;
    const newPrice = currentPrice - totalDiscount;

    return newPrice.toFixed(3);

}
const totalPrice = newPrice(933, 10);
console.log(totalPrice);