import englishImg from './assets/images/english.jpeg';
import hindiImg from './assets/images/hindi.jpeg';
import historyImg from './assets/images/history.jpeg';
import mathImg from './assets/images/math.jpeg';
import sceinceImg from './assets/images/sceince.jpeg';

const mockData = [
    { id: 1, name: 'Mathematics' , instructorName:'Rahul', description:'logistic and Statistic', age:26, price:1000, image: mathImg},
    { id: 2, name: 'Science' , instructorName:'Rakesh', description:'Research on Thermodynamics' , age:56, price:1000, image: sceinceImg },
    { id: 3, name: 'History' , instructorName:'Akash', description:'Sculpture' , age:65, price:1000, image: historyImg },
    { id: 4, name: 'English' , instructorName:'Ravi', description:'Noun and Verb' , age:18, price:1000, image: englishImg }, 
    { id: 5, name: 'Hindi' , instructorName:'Nishant', description:'Poem' , age:47, price:1000, image: hindiImg },
  ];
  
  export const fetchItems = (query = '') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockData.filter(item => {
          const searchText = query.toLowerCase();
          return (
            item.name.toLowerCase().includes(searchText) ||
            item.instructorName.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
          );
        });
        resolve(filtered);
      }, 500); // simulates network delay
    });
  };