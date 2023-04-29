import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign_in/sign_in.component'
import Home from './routes/home/home.component';

const Shop = () => {
  return (
    <h1>I am shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
