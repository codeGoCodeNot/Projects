const guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

// convert set to array
const setArr = Array.from(guitarists);
console.log(setArr);
