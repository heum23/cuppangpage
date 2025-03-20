import Bigimg from "./BigImg";
import ShowImg from "./ShowImg";

const Left = (props) => {
  const { show, setShow, bigimg, setBigimg } = props;
  return (
    <>
      <div>gsd</div>
      <ShowImg
        bigimg={bigimg}
        setBigimg={setBigimg}
        show={show}
        setShow={setShow}
      />
      <Bigimg bigimg={bigimg} setBigimg={setBigimg} />
    </>
  );
};

export default Left;
