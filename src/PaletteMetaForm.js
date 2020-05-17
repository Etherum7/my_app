import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
class PaletteMetaForm extends Component {
    constructor(props){
        super(props);
        this.state={
            stage:'form',
            newPaletteName: ''
        }
        this.savePalette = this.savePalette.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.allPalette.every((singlePalette) => singlePalette.paletteName.toLowerCase() !== value.toLowerCase())
        );
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    showEmojiPicker(){
        this.setState({
            stage:'emoji'
        })
    }
    handleChange(evt) {
        this.setState({
            newPaletteName: evt.target.value
        });
    }
    savePalette(emoji){
        const newPalette= {paletteName:this.state.newPaletteName,emoji:emoji.native};
        this.props.handleSubmit(newPalette);
    }
    render() {
        const { newPaletteName } = this.state;
        return (<div>
               <Dialog 
               open={this.state.stage==='emoji'}
               onClose={this.props.hideForm}
                >
                <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                <Picker title='Pick a Palette Emoji' onSelect={this.savePalette}/>
               </Dialog>
                <Dialog
                    open={this.state.stage==='form'}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title"
                >
                <ValidatorForm onSubmit={this.showEmojiPicker}>
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           Please choose a name for your beautiful palette. Make Sure it is unique.
                        </DialogContentText>
                         
                            <TextValidator
                                value={newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                fullWidth
                                placeholder='Palette Name'
                                margin='normal'
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['this field is required', 'PaletteName should be unique']}
                            />
                    
                    </DialogContent>
                       <DialogActions>
                        <Button onClick={this.props.hideForm} color="primary">
                            Cancel
                         </Button>
                        <Button
                            size='medium'
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            SavePalette
                        </Button>
                        
                    </DialogActions>
                     </ValidatorForm>
                </Dialog>
        </div>        
            
        )
    }
}
export default PaletteMetaForm;