import RouteContext from '../../context/RouteContext'
import {KPIBoxcontainer,BoxHeading,BoxValue} from './kpiboxStyled'

const KPIBox = (props) => (
    <RouteContext.Consumer>
        {
            values => {
                const {isDark} = values;
                const {heading,value} = props
                const currentTheme = isDark ? 'dark' : 'light'
                return (
                    <KPIBoxcontainer currentTheme={currentTheme}>
                        <BoxHeading currentTheme={currentTheme}>{heading}</BoxHeading>
                        <BoxValue>{value}</BoxValue>
                    </KPIBoxcontainer>
                )
            }
        }
    </RouteContext.Consumer>
)
export default KPIBox