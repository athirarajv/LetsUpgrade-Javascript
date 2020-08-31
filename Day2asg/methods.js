console.log("Methods of String and Array");

// Methods of String
let genre = "Biography is a type of genre";
console.log(genre.replace("Biography", "Sci-fi"));
console.log(genre.toLowerCase());
console.log(genre.split("a"));
console.log(genre.charAt(5));
console.log(genre.split(" "));

// Methods of Array
let genre1 = ['fiction', 'novel', 'sci-fi', 'mystery', 'thriller'];
let genre2 = ['narrative', 'horror', 'biography', 'poetry', 'humour'];
console.log(genre1);
console.log(genre2);

console.log(genre1.slice(1));
console.log(genre1.toString());
console.log(genre1.concat(genre2));
console.log(genre2.sort());
console.log(genre2.indexOf('poetry')); 
