import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Feature() {
  return (
    <div className="feature">
      <div className="feature__top">
        <h1 className="feature__top-title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="feature__bottom">
        <div className="feature__bottom-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="feature__bottom-title">Total sales made today</p>
        <p className="feature__bottom-amount">$420</p>
        <p className="feature__bottom-desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="feature__bottom__summary">
          <div className="feature__bottom__summary-item">
            <div className="feature__bottom__summary-item--itemTitle">
              Target
            </div>
            <div className="feature__bottom__summary-item--itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$2.3k</div>
            </div>
          </div>
          <div className="feature__bottom__summary-item">
            <div className="feature__bottom__summary-item--itemTitle">
              Last Week
            </div>
            <div className="feature__bottom__summary-item--itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$3.7k</div>
            </div>
          </div>
          <div className="feature__bottom__summary-item">
            <div className="feature__bottom__summary-item--itemTitle">
              Last Month
            </div>
            <div className="feature__bottom__summary-item--itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$13.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
