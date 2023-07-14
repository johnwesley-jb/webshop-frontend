import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './header-component/MainHeader';

function App() {
  return (
    <div className="App">
      <Container>
       <MainHeader title="WebShop"/>
        <Statistic>
          <Statistic.Label>
            Our Sales
          </Statistic.Label>
          <Statistic.Value>
            2,990.63
          </Statistic.Value>
          <Segment textAlign='center'>
            <Grid columns={2} divided >
              <Grid.Row>
                <Grid.Column>
                  A
                </Grid.Column>

                <Grid.Column>
                  <Icon name='edit' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

        </Statistic>
        <Header as='h3'>Add New</Header>
        <Form unstackable>
          <Form.Group>
            {/* <Label textAlign='center'>My Label</Label> */}
            <Form.Input
              label='Description'
              icon='tags'
              width={6}
              placeholder="New content here"
            >
            </Form.Input>

            <Form.Input
              label='Value'
              icon='dollar'
              width={4}
              placeholder='100.00'
            >

            </Form.Input>
          </Form.Group>
          <Button.Group style={{marginTop:20}}>
            <Button >Cancel</Button>
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>

      </Container>
    </div>
  );
}

export default App;
