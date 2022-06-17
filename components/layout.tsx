// import Alert from './alert'
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div className="px-3">
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
