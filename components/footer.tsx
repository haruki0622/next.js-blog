import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50">
      <Container>
        <div className="flex xl:py-20 w-[40%] justify-around">
          <p className="text-center">haruharu | 泉原 遥輝</p>
          <a href="https://next-js-portfolio-rouge.vercel.app/" className="hover:underline hover:text-gray-500"target="_blank">
            Portfolio
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
