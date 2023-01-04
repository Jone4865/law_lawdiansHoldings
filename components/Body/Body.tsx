import Footer from "../Footer/Footer";
import Item from "./Item/Item";

type Props = {
  location: number;
  setLocation: (location: number) => void;
  position: boolean;
  positionSet: (position: boolean) => void;
}

export default function Body({location, setLocation, position, positionSet}:Props) {

  return (
    <div>
      <Item location={location} setLocation={setLocation} position={position} positionSet={positionSet} />
      <Footer />
    </div>
  );
}
