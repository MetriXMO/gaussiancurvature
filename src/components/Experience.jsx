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
                    <h2 className="lead" align="center"><b>Sponsors</b></h2>
                    <br></br>
                  </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
