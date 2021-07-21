class Exercise{
   constructor(
      id,
      name,
      diff,
      length,
      pullUp,
      pushUp,
      squats,
      mile,
      weight
   ){
      this.id = id;
      this.name = name;
      this.diff = diff;
      this.length = length;
      this.ammount = {
         huzo : pullUp,
         fekvo : pushUp,
         guggol : squats,
         futas : mile
      };
      this.weight = weight;

   };
   calcDiff(a, b, c, d) {
      this.ammount.huzo = a;
      this.ammount.fekvo = b;
      this.ammount.guggol = c;
      this.ammount.futas = d;

   };
};
const murph = new Exercise (
   "Default",
   "Murph",
   "Standard",
   "50 minutes to 1 hour",
   100,
   200,
   300,
   "4-5 minute mile",
   "10 kg"
);

const murphEasy = new Exercise (
   "Easy",
   "Murph",
   "Easy",
   "No limit",
   "As much as you can per rep",
   "As much as you can per rep",
   "As much as you can per rep",
   "As fast as you can",
   "No additional weight"

);

const murphMedium = new Exercise (
   "Medium",
   "Murph",
   "Medium",
   "2 hours",
   "10 reps for 10 rounds",
   "20 reps for 10 rounds",
   "30 reps for 10 rounds",
   "10 minute mile",
   "5 kg weighted vest (OPTIONAL)"

);

const murphHard = new Exercise (
   "Hard",
   "Murph",
   "Hard",
   "1 hour",
   "20 reps for 5 rounds",
   "40 reps for 5 rounds",
   "60 reps for 5 rounds",
   "5 minute mile",
   "10 kg weighted vest (MANDATORY)"
);


const murphObjectArray = [murph, murphEasy, murphMedium, murphHard];
console.log(murphObjectArray);
const murphList = murphObjectArray.map((workout) => {
   let murphArticle = document.createElement("article");
   murphArticle.classList.add("workout");
   murphArticle.setAttribute("id", workout.id);
   console.log(workout.id);

   murphArticle.innerHTML = `
   <h3 class="murph_name">Workout Plan</h3>
   <ul class="workout__specs" id="hmm">
      <li class="workout__diff">Difficulty:<span> ${workout.diff} </span></li>
      <li class="workout__length">Length:<span> ${workout.length} </span></li>
      <li class="workout__futas">Run:<span> ${workout.ammount.futas}</span></li>
      <li class="workout__huzo">Pull ups:<span> ${workout.ammount.huzo} </span></li>
      <li class="workout__fekvo">Push ups:<span> ${workout.ammount.fekvo} </span></li>
      <li class="workout__guggol">Squats:<span> ${workout.ammount.guggol} </span></li>
      <li class="workout__futas">Run:<span> ${workout.ammount.futas}</span></li>
      <li class="workout__suly">Plus weight:<span> ${workout.weight}</span></li>
   </ul>
`;

   return murphArticle;
});



   const main = document.querySelector(".maincontent");

      murphList.forEach((workout) => {
    
      main.append(workout);
   });  
   document.getElementById("Default").style.display = "none";
   document.getElementById("Easy").style.display = "none";
   document.getElementById("Medium").style.display = "none";
   document.getElementById("Hard").style.display = "none";

   var mySelect = document.getElementById("diff");
   mySelect.onchange = function() {

      let x = function() {
         return document.getElementById("diff").value == "Hard" ?
         document.getElementById("Hard").innerHTML : document.getElementById("diff").value == "Medium" ?
         document.getElementById("Medium").innerHTML : document.getElementById("diff").value == "Easy" ?
         document.getElementById("Easy").innerHTML : document.getElementById("diff").value == "Default" ?
         document.getElementById("Default").innerHTML : ""
      };
      document.getElementById("reps").innerHTML = x();

   };
