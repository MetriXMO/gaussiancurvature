import { React } from 'react'
import { Fade } from 'react-awesome-reveal'
import Container from 'react-bootstrap/esm/Container'




const Experience = ({ darkMode }) => {

    

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>Sponsors and Prizes</b></h2>
                    <br></br>
                  </Container>
            </Fade>
            <br></br>
        <h6 className="lead" align="center">
         Prizes will be sponsored by Wolfram Alpha and other organsiation, We will inform you about the prizes very soon.</h6>
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> 
         
            <br></br>
        </div>
    )
}

export default Experience
