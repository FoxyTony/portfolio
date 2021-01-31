import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
import dope from "./dopepic.png";

class CV extends Component {
    state = {
        cv: [],
    };

    componentDidMount() {
        axios.get("./data/CV.json").then((response) => {
            this.setState({ cv: response.data });
        });
    };

    render() {
        const { cv } = this.state;

        const cvCard = (
            <Card>
                <Image src={dope} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Miran</Card.Header>
                    <Card.Description>{cv.experience}</Card.Description>
                    <Card.Description>{cv.education}</Card.Description>
                </Card.Content>
            </Card>
          );

        return (
            <Container>
                <h1 id="cv-header">{cv.title}</h1>
                <Grid>{cvCard}</Grid>
            </Container>
        );
    }
}

export default CV;