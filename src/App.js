import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/container/Navbar';
import Intro from './components/container/Intro';
import Feature from './components/container/Feature';
import MidPart1 from './components/container/Mid1';
import MidPart2 from './components/container/Mid2';
import Footer from './components/container/Footer';
import ToDoList from './components/container/toDoList/ToDoList';



const App = () => {
  return (
    <>
    <Navbar />
    <Intro />
    <ToDoList />
    <Feature />
    <MidPart1 />
    <MidPart2 />
    <Footer />
  </>
  );
}

export default App;
