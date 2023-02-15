// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import houses from '../data/housesArray';
import startApp from '../utils/startApp';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';
import createId from '../utils/createId';
import renderToDOM from '../utils/renderToDom';
import form from '../utils/form';
import sortStudent from '../utils/sortingStudent';
import filterBtnRow from '../components/filterBtnRow';
import studentsOnDom from '../utils/studentsOnDom';
import studentAreas from '../utils/studentAreas';
import events from '../utils/events';

const students = [];
const voldysArmy = []; // starts as an empty array

renderToDOM();
startSortingBtn();
htmlStructure();
header();
houses();
studentAreas();
filterBtnRow();
events();

// target expel buttons to move to voldys army
document
  .querySelector('#student-container')
  .addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => student.id === Number(id));

      // move from one array to another
      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });

// target filter buttons on Dom
document.querySelector('#filter-container').addEventListener('click', (e) => {
  if (e.target.id.includes('filter')) {
    const [, house] = e.target.id.split('--');

    if (house === 'all') {
      studentsOnDom('#students', students);
    } else if (house) {
      const filter = students.filter((student) => student.house === house);
      studentsOnDom('#students', filter, house);
    }
  }
});

// ********** HTML Components  ********** //
// the basic HMTL structure of app

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array

sortStudent();

// Create a new ID for the students

createId();

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM

form();

startApp();
