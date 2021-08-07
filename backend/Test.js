console.log("================================================================");

const data = [
  {
    name: "Marie Cherie",
    age: 25,
    subjects: ["Math", "Greek", "Chemistry"],
  },
];

data.push({
  name: "Herbert Hoover",
  age: 78,
  subjects: ["Politics", "Italian", "Biology"],
});

console.log(
  data
    .map((d) => d.subjects)
    .flatMap((s) => s)
    .filter((s) => s.match("Ch"))
);
