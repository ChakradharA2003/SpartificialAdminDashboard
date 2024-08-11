// import {Redirect} from 'react-router-dom'
// import Cookies from 'js-cookie'
import Header from '../Header/index'
import RouteContext from '../../context/RouteContext'
import NavBar from '../NavBar'
import KPIBox from '../KPIBox'
import { HomeContainer, HomeKpiBoxes, HomeSection, NavSection } from './homeStyled'
const Home = () => {
    return (
       <RouteContext.Consumer>
        {
            value=>{
                const {isDark,dummyData,activeUsers,publishedPosts} = value
                const toggleColor= isDark ? 'dark' : 'light'
                return (
                    <>
                    <Header />
                    <HomeContainer>
                        <NavSection>
                            <NavBar />
                        </NavSection>
                        <HomeSection changecolor={toggleColor}>
                        <HomeKpiBoxes>
                            <KPIBox key="1" heading="Total Users" value={dummyData.totalUsers.length} />
                            <KPIBox key="2" heading="Total Posts" value={dummyData.totalPosts.length} />
                            <KPIBox key="3" heading="Users Active in Last 24 Hours" value={activeUsers} />
                            <KPIBox key="4" heading="Posts Published in Last 24 Hours" value={publishedPosts} />
                        </HomeKpiBoxes>
                        </HomeSection>
                    </HomeContainer>
                    </>
                )
            }
        }
       </RouteContext.Consumer>    
    )
}
export default Home

