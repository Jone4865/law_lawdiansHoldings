import Footer from "./Footer/Footer";
import Item from "./Item/Item";

type Props = {
  location: number;
}

export default function Body({location}:Props) {

  return (
    <div>
      <Item location={location} />
      <Footer />
    </div>
  );
}
