import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <Box component="form" onSubmit={submitHandler}>
      <div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            fullWidth
            id="input-with-sx"
            label="Type your meal"
            variant="standard"
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
      </div>
    </Box>
  );
}

export default Search;
