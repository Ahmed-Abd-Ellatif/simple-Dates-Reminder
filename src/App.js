import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { person } from "./Dates";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";

function App() {
  const [personDate, setPersonDate] = useState(person);
  const onDelete = () => {
    setPersonDate([]);
  };
  const onViewDates = () => {
    setPersonDate(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personDate} />
        <DatesList person={personDate} />
        <DatesAction onDelete={onDelete} onViewDates={onViewDates} />
      </Container>
    </div>
  );
}

export default App;
