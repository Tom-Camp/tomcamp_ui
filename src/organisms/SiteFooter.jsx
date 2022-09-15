import {Hero, Footer, Container, Content} from "react-bulma-components";

const SiteFooter = () => {
  const today = new Date();

  return (
    <div style={{ margin: '-1rem' }} className="is-grey">
      <Hero size="fullheight">
        <Hero.Header renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  &copy; <strong>Tom.Camp</strong> {today.getFullYear()}
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  );
}

export default SiteFooter;
