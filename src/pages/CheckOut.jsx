import { IconButton, Typography } from "@mui/material";
import "./CheckOut/style.css";
import { mouseCheckOut } from "../assets";
import FormCheckOut from "./CheckOut/FormCheckOut";
import { ArrowBackOutlined } from "@mui/icons-material";
const CheckOut = () => {
  function goBack() {
    window.history.back();
  }
  return (
    <>
      <div className="cont-check-out ">
        <div className="right-bgCheck-out flex flex-col  px-20 justify-center relative">
          <div className="btn-back-checkout">
            <IconButton onClick={goBack}>
              <ArrowBackOutlined />
            </IconButton>
          </div>
          <div className="information-text-checkout">
            <Typography
              variant="h3"
              sx={{ fontSize: { sm: "30px", xs: "30px" } }}
            >
              model of product
            </Typography>
            <Typography variant="caption" color="GrayText">
              information of product
            </Typography>
          </div>
          <div>
            <img src={mouseCheckOut} alt="image product" />
          </div>
        </div>
        <div className="form-check-out flex flex-col justify-center items-center gap-10">
          <FormCheckOut />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
