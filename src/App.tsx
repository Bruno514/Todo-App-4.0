import styled from "styled-components";

const Header = styled.header`
  padding: 2rem;
  margin: auto;
  max-width: 40rem;
  background-color: aliceblue;
`;

const PageTitle = styled.h1`
  font-size: clamp(1.5rem, calc(1.5rem + 1vw), 2.5rem);
  width: fit-content;
`;

const Main = styled.main`
  padding: 2rem;
  max-width: 70rem;

  margin: auto;
`;

const Button = styled.button`
  font-size: clamp(1.2rem, calc(1.2rem + 1vw), 1.5rem);
  margin: auto;
`;

const TasksContainer = styled.section`
  padding: 4em;
`;

function App() {
  return (
    <>
      <Header>
        <PageTitle>To-Do List</PageTitle>
      </Header>
      <Main>
        <Button>New task</Button>
        <TasksContainer></TasksContainer>
      </Main>
    </>
  );
}

export default App;
