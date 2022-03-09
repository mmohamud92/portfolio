import LayOut from "../Layout/Layout";
import BodyOne from "./BodyOne";

function PageOne() {
      return (
            <div id="home">
                  <LayOut Body={BodyOne} />
            </div>
      );
}

export default PageOne;
