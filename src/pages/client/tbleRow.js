 
import Image from "react-bootstrap/Image";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Switch } from 'antd';
import React from "react";

function row(props) {


    
  return (
    <tr>
      <td className="align-middle "> {props.id}</td>
      <td className="align-middle "> {props.Suscription}</td>
      <td className="align-middle ">
        <Image width={"100%"} src={toAbsoluteUrl(`${props.Client}`)} />
      </td>
      <td className="align-middle ">
        <div className="d-flex  justify-content-center align-items-center ">
          <Image
            width={"50px"}
            src={toAbsoluteUrl(`${props.ContactPerson.profil}`)}
          />
          <div className="d-flex  ml-3 my">
            <div>
              <h3 className="p-0 m-0">{props.ContactPerson.name}</h3>

              <p className="p-0 m-0 text-left">{props.ContactPerson.post}</p>
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle ">
        <div className="d-flex">
          <div className="  svg-icon svg-icon-2x">
            <SVG src={toAbsoluteUrl("/media/client/Vector.svg")} />
          </div>
          {props.Sites}
        </div>
      </td>
      <td className="align-middle ">
        <div
          className="border px-5 py-3 border-info  text-info font-size-19"
          style={{ borderRadius: 50, fontSize: 15 }}
        >
          {props.SubscriptionType}
        </div>
      </td>
      <td className="align-middle ">
        {props.NextBill.DAY > 10 ? (
          <div
            className={`btn btn-success  text-white  font-size-19`}
            style={{ borderRadius: 50, fontSize: 15 }}
          >
            {props.NextBill.DATE} <span className="px-2">.</span>
            {props.NextBill.DAY}
            <span className="px-2">Days Remaining</span>
          </div>
        ) : (
          <>
            {
              (props.NextBill.DAY = 1 ? (
                <div
                  className={`btn btn-danger text-white  font-size-19`}
                  style={{ borderRadius: 50, fontSize: 15 }}
                >
                  {props.NextBill.DATE} <span className="px-2">.</span>
                  {props.NextBill.DAY}
                  <span className="px-2">Days Remaining</span>
                </div>
              ) : (
                <div
                  className={`btn btn-warning   text-white  font-size-19`}
                  style={{ borderRadius: 50, fontSize: 15 }}
                >
                  {props.NextBill.DATE} <span className="px-2">.</span>
                  {props.NextBill.DAY}
                  <span className="px-2">Days Remaining</span>
                </div>
              ))
            }
          </>
        )}
      </td>
      <td className="align-middle text-success "> {props.Phone}</td>
      <td className="align-middle text-warning"> {props.Email}</td>
      <td className="align-middle ">
        <Switch
        className=" bg-success"
      checkedChildren={'Active'}
      unCheckedChildren={"Inactive"}
      defaultChecked
    />  </td>
      <td className="align-middle ">
        <LongMenu />
      </td>
    </tr>
  );
}

export default row;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        className="overflow-hidden mt-20"
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            overflow: "hidden",
            height: 200,
            width: 150,
          },
        }}
      >
        <div className=" d-flex justify-content-center ">
          <div>
            <h6 className=" d-flex justify-content-center py-3 ">Actions</h6>
            <div >
            
             <MenuItem
              onClick={handleClose}
              className=" d-flex justify-content-start   "
            >
              <div className=" svg-icon svg-icon-md  px-2">
                <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
              </div>
              <span>Preferences</span>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className=" d-flex justify-content-start    "
            >
              <div className=" svg-icon svg-icon-md  px-2 ">
                <Image src={toAbsoluteUrl("/media/client/edit.png")} />
              </div>
              <span className=" "> Edit</span>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className=" d-flex justify-content-start  "
            >
              <div className=" svg-icon svg-icon-md px-2  ">
                <SVG src={toAbsoluteUrl("/media/client/delete.svg")} />
              </div>
              <span>Delete</span>
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              className=" d-flex justify-content-start  "
            >
              <div className=" svg-icon svg-icon-md px-2 ">
                <SVG src={toAbsoluteUrl("/media/client/export.svg")} />
              </div>
              <span>Export</span>
            </MenuItem>
            </div>
           
          </div>
        </div>
      </Menu>
    </div>
  );
}
 