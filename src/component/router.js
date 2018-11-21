import React from 'react'

import { NavLink, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'


export const OwnLinkItem = (props) => {
    let Tag = props.tag || 'a'
    let _class = props.className || ''
    let _activeClassName = props.activeClassName || 'active'
    let isActive = props.exact ? props.location.pathname === props.to : props.location.pathname.startsWith(props.to)
    let className = (props.nav && isActive) ? _class + ' ' + _activeClassName : _class

    return <Tag className={className} onClick={() => { props.history.push(props.to) }}>{props.children}</Tag>

}
const OwnLink = props => {
    let Item = withRouter(OwnLinkItem)
    return <Item {...props} nav />
}
export const ACtiveOwnNavLink = styled(OwnLink) `
&.active{
    color: #11b57c;
}
 
color:#8d8a8a;
display:flex;
justify-content: space-around;
flex-direction:column;
align-content: center;
text-align:center;
width:25%;

`