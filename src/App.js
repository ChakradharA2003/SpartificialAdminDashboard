import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';

import RouteContext from './context/RouteContext';
import Home from './components/Home/index'
import Login from './components/Login/index'
import NotFound from './components/NotFound/index'
import Posts from './components/Posts/index'
import Users from './components/Users/index'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import sampleData from './components/SampleData/index'

const activeRoutesConstants = {
  home: 'HOME',
  users: 'USERS',
  posts: 'POSTS'
}

const App = () => {
  const [activeRoute,changeActiveRoute] = useState(activeRoutesConstants.home)
  const onChangeActiveRoute = route => changeActiveRoute(route)
    const [isDark,changeTheme] = useState(false)
    const onClickedChangeTheme = () => {
      changeTheme(prevState => !prevState)
    }
    const [activeUsers] = useState(Math.floor(Math.random() * (sampleData.totalUsers.length - 0 + 1)) + 0)
    const [publishedPosts] = useState(Math.floor(Math.random() * (sampleData.totalPosts.length*3 - 0 + 1)) + 0)
    const [dummyData,updateSampleData] = useState(sampleData)
    const onUpdateDummyData = posts => updateSampleData(posts)
  return (
    <RouteContext.Provider value={{
      activeRoute,
      onChangeActiveRoute: onChangeActiveRoute,
      isDark,
      onClickedChangeTheme: onClickedChangeTheme,
      dummyData,
      activeUsers,
      publishedPosts,
      onUpdateDummyData: onUpdateDummyData
    }}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin/users" element={<Users />} />
          <Route exact path="/admin/posts" element={<Posts />} />
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RouteContext.Provider>
  )
}
export default App
