import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
export default class Footer extends React.Component {


    render() {
        return (
            <div style={{ height: '300px' }}>
                <div style={{ backgroundColor: '#171d29', height: '100%' }}>
                    <Segment placeholder>

                        <Grid columns={2} relaxed='very' stackable style={{ letterSpacing: 2 }}>
                            <Grid.Column>
                                <div style={{ marginTop: '30px', marginLeft: '45%' }}>
                                    <a href='' style={{ margin: '10px', textDecoration: 'underline' }}><span style={{ marginRight: '1em' }}>Terms</span> <span style={{ marginRight: '1em' }}>of</span>   <span>Use</span></a>
                                    <a href='' style={{ margin: '10px', textDecoration: 'underline' }}>FAQ</a>
                                    <a href='' style={{ margin: '10px', textDecoration: 'underline' }}>Careers</a>
                                    <a href='' style={{ margin: '10px', textDecoration: 'underline' }}>Press/PR</a>
                                    <a href='' style={{ margin: '10px', textDecoration: 'underline' }}>Contact</a>
                                </div>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' >
                                <Divider vertical>Connect</Divider>
                                <div style={{ display: 'flex', flexDirection: 'row', float: 'right', marginRight: '13%', }}>
                                    <img style={{ height: '80px', marginRight: '27%' }} src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"></img>
                                    <img style={{ height: '80px' }} src="https://www.stickpng.com/assets/images/584ac2d03ac3a570f94a666d.png"></img>
                                </div>
                            </Grid.Column>
                        </Grid>

                    </Segment>
                    <p style={{ color: 'white' }}>Copyright © 2020 Steady. All rights reserved.</p>
                </div>
            </div>
        )
    }
}