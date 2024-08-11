import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import RouteContext from "../../context/RouteContext";
import Header from "../Header";
import NavBar from "../NavBar/index";
import KPIBox from "../KPIBox";
import Pagination from '../Pagination/index';
import { PostsMainContainer, NavSection, PostsSection, KpiBoxesList, Table, Thead, Td, Tr, Th, ControlButtons, DeleteButton, HideButton, PopUpContainer, PopUpButtonsContainer, ConfirmButton, CancelButton, PopUpMessage } from './postsStyled';

const Posts = () => {
  const [currentPage, setCuurentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const { isDark, dummyData, publishedPosts } = useContext(RouteContext);
  
  const changecolor = isDark ? 'dark' : 'light';
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dummyData.totalPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Header />
      <PostsMainContainer>
        <NavSection>
          <NavBar />
        </NavSection>
        <PostsSection changecolor={changecolor}>
          <KpiBoxesList>
            <KPIBox key={uuidv4()} heading="Total Users" value={dummyData.totalPosts.length} />
            <KPIBox key={uuidv4()} heading="Users Active in Last 24 Hours" value={publishedPosts} />
          </KpiBoxesList>
          <div>
            <Table>
              <Thead>
                <Tr>
                  <Th>Post ID</Th>
                  <Th>Caption</Th>
                  <Th>Media URL</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <tbody>
                {currentPosts.map(post => {
                  const uniqueId = uuidv4();
                  return (
                    <Tr key={uniqueId}>
                      <Td>{post.post_id}</Td>
                      <Td>{post.post_comment}</Td>
                      <Td>{post.media_url}</Td>
                      <Td>
                        <ControlButtons>
                          <Popup
                            modal
                            trigger={<DeleteButton type="button">Delete</DeleteButton>}
                          >
                            {close => (
                              <PopUpContainer changecolor={changecolor}>
                                <PopUpMessage changecolor={changecolor}>This Post will be deleted from DataBase. Click Confirm to Delete</PopUpMessage>
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
                                    onClick={()=> close()}
                                  >
                                    Confirm
                                  </ConfirmButton>
                                </PopUpButtonsContainer>
                              </PopUpContainer>
                            )}
                          </Popup>
                          <Popup
                            modal
                            trigger={<HideButton type="button">Hide</HideButton>}
                          >
                            {close => (
                              <PopUpContainer changecolor={changecolor}>
                                <PopUpMessage changecolor={changecolor}>The Message will be Hiden from posts</PopUpMessage>
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
                                    onClick={()=>close()}
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
                  );
                })}
              </tbody>
            </Table>
            <Pagination totalPosts={dummyData.totalUsers.length} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentpage={setCuurentPage} />
          </div>
        </PostsSection>
      </PostsMainContainer>
    </>
  );
}

export default Posts;
