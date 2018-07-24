const React = require('react');
import {Button,FormControl} from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/eclipse';

class ArduinoPanelComponent extends React.Component {
    render() {
        const {
            code,
            ...componentProps
        } = this.props;
        var visible = this.props.visible?'block':'none';
        return (<div
                style={{
                    position: 'absolute',
                    display: visible,
                    zIndex: 9999,
                    right: 0,
                    width: 500,
                    height: 560,
                    top: 90,
                    bottom: 8,
                    backgroundColor: '#0097a7',
                }}
            >
            <div className="group" id="code-buttons" style={{top:4,left:4,width:480,position:'absolute'}}>
                <Button style={{marginLeft:5,height:34}}><input type="checkbox"/>Translate</Button>
                <Button style={{marginLeft:5}}>Restore</Button>
                <Button style={{marginLeft:5}}>Upload</Button>
                <Button style={{float:'right'}}>Open with arduino</Button>
            </div>
            <AceEditor
                style={{top:45,left:2,height:250,width:495}}
                mode="c_cpp"
                theme="eclipse"
                name="arduino-code"
                value={code}
                editorProps={{$blockScrolling: true}}
            />
            <div id="console-log"
            style={{
                position: 'absolute',
                left:2,
                width:470,
                height:200,
                top:300,
                overflowY: 'scroll',
                backgroundColor: '#000000',
                color: '#008000',
                fontSize:18
            }}
            >
            </div>
            <form className="form-inline" id="console-input"
                 style={{
                     position:'absolute',
                     top:500,
                     width:470,
                     marginLeft:4,
                     marginTop:8
                 }}
            >
                <FormControl
                    type="text"
                    style={{
                        width: '70%',
                        backgroundColor: '#FFFFFF',
                        border: '0px',
                        color: '#000000'
                    }}
                />
                <Button style={{marginLeft:3}}>Send</Button>
                <Button style={{marginLeft:2}}>C</Button>
            </form>

            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


