import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

const styles={
picker:{
    width:"100% !important",
    marginTop:"0.75rem"
},
addColor:{
    width:"100%",
    fontSize:"1rem" 
},
ColorNameInput:{
    width:"100%",
    height:"70px",
    marginBottom:"0.5rem",
    paddingTop:"12px"
    
}

}
class ChromePickerForm extends Component {
   constructor(props){
       super(props);
       this.state={
           colorCurrent: "teal",
           newColorName: ''
       }
       this.handleSubmit= this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);

   }
    componentDidMount() {

        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )

        );

        ValidatorForm.addValidationRule('isColorUnique', ()=>
            this.props.colors.every(
                ({ color }) => color !== this.state.colorCurrent)
        );


    }
    handleSubmit() {
        const newColor = { color: this.state.colorCurrent, name: this.state.newColorName };
        this.props.addNewColor(newColor);
         this.setState({  newColorName: '' });
        
    }
    updateColor(newColor) {
        this.setState({ colorCurrent: newColor.hex });

    }
    handleChange(evt) {
        this.setState({
            newColorName: evt.target.value
        });
    }
    render() {
        const {paletteIsFull,classes} = this.props;
        const {newColorName,colorCurrent}=this.state;
        return (
            <div>
                <ChromePicker
                    color={colorCurrent}
                    onChangeComplete={newColor => this.updateColor(newColor)}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator
                    className={classes.ColorNameInput}
                        value={newColorName}
                        name='newColorName'
                        placeholder='Color Name'
                        variant ='filled'
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['this field is required', 'ColorName should be unique', 'Color is already used']}
                    />

                    <Button
                        variant='contained'
                        color='secondary'
                        type='submit'
                        disabled={paletteIsFull}
                        className={classes.addColor}
                        style={{ backgroundColor: paletteIsFull ? 'grey' : this.state.colorCurrent }}>
                        {paletteIsFull ? 'Palette Full' : 'Add Colors'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}
export default withStyles(styles)(ChromePickerForm);