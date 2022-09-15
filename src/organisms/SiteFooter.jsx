import {Footer, Container, Content} from "react-bulma-components";

const SiteFooter = () => {
  const today = new Date();

  return (
    <div className="container">
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>&copy; <strong>Tom.Camp</strong> {today.getFullYear()}</p>
          </Content>
        </Container>
      </Footer>
    </div>
  );
}

export default SiteFooter;
