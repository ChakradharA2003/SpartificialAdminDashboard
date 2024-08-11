import React from 'react'

const RouteContext = React.createContext({
    isDark: false,
    changeTheme:()=> {},
    activeRoute: '',
    changeActiveRoute: () => {},
    sampleData: [],
    onUpdateDummyData: () => {}
})
export default RouteContext