import { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormStep3 = ({ update }) => {
    const [city,setCity]= useState("Poznań");
    const [who,setWho] = useState("dzieciom")

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="step3Box">
            <div className="step">
                <p className="step_content">
                    Krok 3/4
                </p>
            </div>
            <div className="text">
                <p className="text_content">
                    Lokalizacja:
                </p>
            </div>
            <div className="step3Box_content">
                <div>
                    <FormControl
                        size="medium"
                    >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            size="large"
                            variant="standard"
                            sx = {{width:"150px"}}
                            onChange={handleChange}
                            onBlur={() => update("localization", city)}
                        >
                            <MenuItem value={"Poznań"}>Poznań</MenuItem>
                            <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
                            <MenuItem value={"Kraków"}>Kraków</MenuItem>
                            <MenuItem value={"Wrocław"}>Wrocław</MenuItem>
                            <MenuItem value={"Katowice"}>Katowice</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="content3Box" >
                    <p className="content3Box_text">
                        Komu chcesz pomóc?
                    </p>
                    <div className="content3Box_select">
                        <label className="container">
                        <span className="container_text">
                            dzieciom
                        </span>
                            <input
                                type="radio"
                                name="radio"
                                value={"dzieciom"}
                                onClick={() => setWho("dzieciom")}
                                onBlur={() => update("who",who)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="container">
                        <span className="container_text">
                            samotnym matkom
                        </span>
                            <input
                                type="radio"
                                name="radio"
                                value={"samotnym matkom"}
                                onClick={() => setWho("samotnym matkom")}
                                onBlur={() => update("who",who)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="container">
                        <span className="container_text">
                            bezdomnym
                        </span>
                            <input
                                type="radio"
                                name="radio"
                                value={"bezdomnym"}
                                onClick={() => setWho("bezdomnym")}
                                onBlur={() => update("who",who)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="container">
                        <span className="container_text">
                            niepełnosprawnym
                        </span>
                            <input
                                type="radio"
                                name="radio"
                                value={"niepełnosprawnym"}
                                onClick={() => setWho("niepełnosprawnym")}
                                onBlur={() => update("who",who)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
                <div>
                    <p className="content3Box_text">
                        Wpisz nazwę innej lokalizacji (opcjonalnie)
                    </p>
                    <input
                        className="content3Box_input"
                        onChange={handleChange}
                        onBlur={() => update("localization",city)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormStep3;