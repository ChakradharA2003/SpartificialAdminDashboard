import React from 'react'
import {PaginationButtonsList,PageButton} from './paginationStyled.js'
import RouteContext from '../../context/RouteContext.js'

const Pagination = ({totalPosts,postsPerPage,setCurrentpage,currentPage}) => {
    const pages = []
     /* eslint-disable */
    for(let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }
    return (
        <RouteContext.Consumer>
            {
                value => {
                    const {isDark} = value
                    const theme = isDark ? 'dark' : 'light'
                    return(
                            <PaginationButtonsList>
                                {
                                    pages.map((page,index)=> (
                                        <li>
                                            <PageButton type="button" state={page===currentPage ? 'active': ''} theme={theme} key={index} onClick={()=> setCurrentpage(page)}>{page}</PageButton>
                                        </li>
                                    ))
                                }
                            </PaginationButtonsList>
                    )
                }
            }
        </RouteContext.Consumer>
    )
}
export default Pagination