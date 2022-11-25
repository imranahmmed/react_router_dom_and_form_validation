import './App.css';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UserList, { users, usersList } from './components/UserList';
import RootLayout from './components/RootLayout';
import PageNotFound from './components/PageNotFound';
import Contact, { data } from './components/Contact';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route path='*' element={<PageNotFound />}></Route>
    <Route index element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/userlist' element={<UserList />} loader={users}></Route>
    <Route path='/contact' element={<Contact />} action={data}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={routes} />
}

export default App;
