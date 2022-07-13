import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormStep2 = ({ update }) => {
    const [bags,setBags] = useState("1");

    const handleChange = (event) => {
        setBags(event.target.value);
    };
    return (
        <div className="step2Box">
             <div className="step">
                    <p className="step_content">
                        Krok 2/4
                    </p>
             </div>
             <div className="text">
                 <p className="text_content">
                    Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                 </p>
             </div>
            <div className="step2Box_content">
                <p className="step2Box_content__text">
                    Liczba 60l worków:
                </p>
                <FormControl
                    size="medium"
                >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="step2Box_content__select"
                        value={bags}
                        size="large"
                        variant="standard"
                        onChange={handleChange}
                        onBlur={() => update("bags", bags)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default FormStep2;