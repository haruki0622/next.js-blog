import Container from "./container";
import Sns from "../components/Sns";

const Footer = () => {
  return (
    <footer className="py-3">
      <Container>
        <div className="flex flex-col">
          <p className="text-center">泉原 遥輝 | Haruki Izumihara</p>
          <Sns justifyStart='justify-center'/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
