import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

export default class Bottom extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Container>
            <Grid centered columns={3}>
              <Grid.Column>
                Lunch
                <hr/>
                <List>
                  <List.Item>
                    Monday – Friday: 11:00am – 2:30pm
                  </List.Item>
                  <List.Item>
                    Saturday – Sunday: Not open for lunch
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                Bar
                <hr/>
                <List>
                  <List.Item>
                    Monday – Friday: From 11:00am
                  </List.Item>
                  <List.Item>
                    Saturday – Sunday: from 4:00pm
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                Dinner
                <hr/>
                <List>
                  <List.Item>
                  Monday – Saturday: 5:30pm – 10:00pm
                </List.Item>
                  <List.Item>
                    Sunday: 5:00pm – 9:00pm
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
