import { useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup';
import RouteContext from "../../context/RouteContext";
import Header from "../Header";
import NavBar from "../NavBar";
import KPIBox from "../KPIBox";
// import sampleData from '../SampleData';
import Pagination from '../Pagination/index';
import {UsersMainContainer,NavSection,UsersSection,KpiBoxesList,
    Table,Thead,Td,Tr,Th,ControlButtons,EditButton,BanButton,PopUpContainer,PopUpButtonsContainer,ConfirmButton,CancelButton
} from './usersStyled'
import { PopUpMessage } from '../Posts/postsStyled';

const Users = () => {
    const [currentPage,setCuurentPage] = useState(1)
    const [postsPerPage] = useState(5)
    return (
    <RouteContext.Consumer>
        {
            values => {
                const {isDark,dummyData,activeUsers} = values
                const changecolor = isDark ? 'dark' : 'light'
                const lastPostIndex = currentPage*postsPerPage
                const firstPostIndex = lastPostIndex - postsPerPage
                const currentPosts = dummyData.totalUsers.slice(firstPostIndex,lastPostIndex)
                return(
                    <>
                    <Header />
                    <UsersMainContainer>
                        <NavSection>
                            <NavBar />
                        </NavSection>
                        <UsersSection changecolor={changecolor}>
                            <KpiBoxesList>
                                <KPIBox key={uuidv4()} heading="Total Users" value={dummyData.totalUsers.length} />
                                <KPIBox key={uuidv4()} heading="Users Active in Last 24 Hours" value={activeUsers} />
                            </KpiBoxesList>
                            <div>
                            <Table>
                                <Thead>
                                    <Tr>
                                    <Th>User ID</Th>
                                    <Th>Username</Th>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Actions</Th>
                                    </Tr>
                                </Thead>
                                <tbody>
                                    {currentPosts.map(user => (
                                    <Tr key={uuidv4()}>
                                        <Td>{user.user_id}</Td>
                                        <Td>{user.userName}</Td>
                                        <Td>{user.Name}</Td>
                                        <Td>{user.Email}</Td>
                                        <Td>
                                        <ControlButtons>
                                            <Popup
                                                modal
                                                trigger={<EditButton type="button">Edit</EditButton>}
                                            >
                                                {close => (
                                                <PopUpContainer changecolor={changecolor}>
                                                    <PopUpMessage changecolor={changecolor}>Edit Option is still in developing stage. Click Cancel to Close PopUp</PopUpMessage>
                                                    <PopUpButtonsContainer>
                                                    <CancelButton
                                                        as="button"
                                                        type="button"
                                                        onClick={() => close()}
                                                    >
                                                        Cancel
                                                    </CancelButton>
                                                    <ConfirmButton
                                                        as="button"
                                                        type="button"
                                                       
                                                    >
                                                        Confirm
                                                    </ConfirmButton>
                                                    </PopUpButtonsContainer>
                                                </PopUpContainer>
                                                )}
                                            </Popup>
                                            <Popup
                                                modal
                                                trigger={<BanButton type="button">Ban</BanButton>}
                                            >
                                                {close => (
                                                <PopUpContainer changecolor={changecolor}>
                                                    <PopUpMessage changecolor={changecolor}>The post will be Banned</PopUpMessage>
                                                    <PopUpButtonsContainer>
                                                    <CancelButton
                                                        as="button"
                                                        type="button"
                                                        onClick={() => close()}
                                                    >
                                                        Cancel
                                                    </CancelButton>
                                                    <ConfirmButton
                                                        as="button"
                                                        type="button"
                                                       
                                                    >
                                                        Confirm
                                                    </ConfirmButton>
                                                    </PopUpButtonsContainer>
                                                </PopUpContainer>
                                                )}
                                            </Popup>
                                            </ControlButtons>
                                        </Td>
                                    </Tr>
                                    ))}
                                </tbody>
                                </Table>
                                <Pagination totalPosts={dummyData.totalUsers.length} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentpage={setCuurentPage} />
                            </div>
                        </UsersSection>
                    </UsersMainContainer>
                    </>
                )
            }
        }
    </RouteContext.Consumer>
)
}
export default Users
