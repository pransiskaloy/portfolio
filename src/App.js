import {Route, Switch} from 'react-router'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme
  , darkTheme 
} from "./components/Themes"

//Componentss
import Main from './components/Main'
// import Login from './components/Login'
import Works from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Blog from './components/Blog'


function App() {
  return <>

  <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/work" component={Works}/>
        <Route exact path="/skills" component={Skills}/>
      </Switch>

    </ThemeProvider>
    </>
    
}
 
export default App

