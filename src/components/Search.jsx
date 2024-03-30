import {
  CloseRounded,
  LockPersonRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const list = [
    {
      id: 1,
      name: "ali",
      description: "this is ali sorena",
    },
    {
      id: 2,
      name: "ali2",
      description: "this is ali sorena",
    },
    {
      id: 3,
      name: "ali3",
      description: "this is ali sorena",
    },
    {
      id: 4,
      name: "ali4",
      description: "this is ali sorena",
    },
    {
      id: 5,
      name: "ali5",
      description: "this is ali sorena",
    },
    {
      id: 6,
      name: "ali6",
      description: "this is ali sorena",
    },
    {
      id: 7,
      name: "ali7",
      description: "this is ali sorena",
    },
  ];
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const filteredData = list.filter((item) => {
    // جستجو بر اساس نام و یا توضیحات
    return (
      item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <>
      <IconButton
        onClick={() => setIsActive(true)}
        disableRipple
        color="light"
        className="rounded-md"
      >
        <SearchRounded className="ml-0 mx-2 text-6xl " />
      </IconButton>
      <div
        style={{ display: isActive ? "flex" : "none" }}
        className="w-full h-[100vh] cont-search flex justify-center items-center"
      >
        <div
          onClick={() => setIsActive(false)}
          className="exit-btn cursor-pointer"
        >
          <CloseRounded sx={{ fontSize: "40px" }} />
        </div>

        <Box onClick={(e) => e.stopPropagation()} className="w-[50%] ">
          <TextField
            variant="standard"
            color="secondary"
            placeholder="search . . . "
            onChange={onHandleChange}
            value={inputValue}
            sx={{
              width: "90%",
              "&.MuiInput-input": {
                height: "100px",
                bgcolor: "blue",
              },
            }}
          />
          <button className=" bg-btn-card">
            <SearchRounded className="m-1" />
          </button>
          <Box className=" w-[45%] p-4 min-h-14">
            {inputValue == ""  ? "" : filteredData.map((item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Search;
