import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import RecipeMain from './RecipeMain'
import NoMatch from './NoMatch';
import RecipeCategory from './RecipeCategory'
import Recipe from './Recipe'

const ChildRoutes = () => { 
  return (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/recipe" element={<RecipeMain />} />
    <Route path="/recipe/:category" element={<RecipeCategory />} />
    <Route path="/recipe/:category/:num" element={<Recipe />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
)}

export default ChildRoutes
