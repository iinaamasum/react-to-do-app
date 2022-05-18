import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AddTask from './Pages/AddTask/AddTask';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home/Home';
import MyTask from './Pages/MyTask/MyTask';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <section className="bg-[#D4F1F4]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/myTask" element={<MyTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </section>
  );
}

export default App;
