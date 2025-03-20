import ColorImg from "./ColorImg";
import RightText from "./RightText";
const right = (props) => {
  const { show, setShow, bigimg, setBigimg } = props;
  return (
    <>
      <div>
        <RightText />
        <ColorImg
          bigimg={bigimg}
          setBigimg={setBigimg}
          show={show}
          setShow={setShow}
        />
      </div>
    </>
  );
};

export default right;
