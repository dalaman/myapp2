import { useState } from 'react';
import { Container, Paper, Button, Checkbox, TextField } from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

interface Props {
    foo: string;
}

function Layout(props: Props) {
    const [count, setCount] = useState(0);

    function increment():void {
        if (checked) {
            setCount(count + 1);
        }
    }

    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setDisabled(!disabled);
    };

    const [text, setText] = useState("");
    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const [selected, setSelected] = useState(false);

    return (
        <Container maxWidth="sm">
            <Paper>
                <div>
                    <h1>Hello!</h1>
                    <h2>{props.foo}</h2>
                    <Button onClick={increment} variant="contained" disabled={disabled} color="primary">ClickMe</Button>
                    <p>{count}</p>
                    <Checkbox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "primary checkbox" }} />
                </div>
                <div>
                    <TextField label="longitude" onChange={handleChangeText} />
                    <p>{text}</p>
                </div>
                <div>
                    <ToggleButton value="check" selected={selected} onChange={() => { setSelected(!selected) }} color="primary" >Awesome</ToggleButton>
                </div>
            </Paper>
        </Container>
    );
}
export default Layout;
