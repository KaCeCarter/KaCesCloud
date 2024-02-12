import React from 'react'
// the core library that provides the functionality to define React components, manage component state, and handle component lifecycle methods, among other things.
import styled from 'styled-components'
// library for styling React components with CSS-in-JS syntax.
// With styled-components, you can create styled components by writing CSS directly inside your JavaScript or TypeScript files, which makes it easy to manage component-specific styles and eliminates the need for separate CSS files.
import MenuIcon from '@mui/icons-material/Menu';
// this is how you import an icon from the material ui website 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const LogoWrapper = styled.div`
// Every time you have a div you need to create a styled component or it
height: 45px;
display: grid;
grid-template-columns: 25% auto;
`;



function Header() {
  return (
    // Div is a generic container for associating similar content
 <Wrapper>

<LogoWrapper>
<div>
{/* menu icon */}
<FormatListBulletedIcon />
{/* menu icon */}
</div>

<Logo>
{/* gmail logo */}
<img src='https://static.vecteezy.com/system/resources/previews/024/758/497/non_2x/email-mail-icon-transparent-background-free-png.png' alt='Gmail Logo'/>
 {/* gmail logo */}
 </Logo>

  </LogoWrapper>

  <SearchWrapper>

<SearchBarWrapper>
<SearchIcon/>
{/* This is where the user enters the email of the addressee */}
<input type='text' placeholder='To:'/>
{/* This is where the user enters the email of the addressee */}
  <ExpandCircleDownIcon/>
</SearchBarWrapper>

  </SearchWrapper>

  <IconWrapper>


  </IconWrapper>


 </Wrapper>
  )
}

export default Header
const Wrapper = styled.div`
display: grid;
// 270px = width of first column in grid, auto = flex (adjusts based on user's screen), and 170px is last column width size
grid-template-columns: 270px auto 170px;
// 270px = width of first column in grid, auto = flex (adjusts based on user's screen), and 170px is last column width size
border-bottom: 1px solid lightgray;
height: 70px;
align-items: center;
`

const Logo = styled.div`
// This line automatically resizes the image to the dimensions specified in wrapper
display: flex;
// This line automatically resizes the image to the dimensions specified in wrapper

height: 45px;


`
const SearchWrapper = styled.div`
`
const SearchBarWrapper = styled.div`
`
const IconWrapper = styled.div`
`