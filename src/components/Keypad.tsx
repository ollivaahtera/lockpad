import React from 'react';
import { connect } from 'react-redux';
import { addCode, clearCode } from '../actions';
import './Keypad.css';

export interface IKeypadProps {
  addCode: (value: string) => void;
  clearCode: () => void;
}

const Key = (props: {value: string, onClick: () => void}) => 
  <td>
    <button className="key" onClick={() => props.onClick()}>{props.value}</button>
  </td>

export const ConnectedKeyPad = (props: IKeypadProps) => {
  return (
    <div className="keypad">
      <table>
        <tbody>
          <tr>
            <Key value={'7'} onClick={() => props.addCode('7')}/>
            <Key value={'8'} onClick={() => props.addCode('8')}/>
            <Key value={'9'} onClick={() => props.addCode('9')}/>
          </tr>
          <tr>
            <Key value={'4'} onClick={() => props.addCode('4')}/>
            <Key value={'5'} onClick={() => props.addCode('5')}/>
            <Key value={'6'} onClick={() => props.addCode('6')}/>
          </tr>
          <tr>
            <Key value={'1'} onClick={() => props.addCode('1')}/>
            <Key value={'2'} onClick={() => props.addCode('2')}/>
            <Key value={'3'} onClick={() => props.addCode('3')}/>
          </tr>
          <tr>
            <td>
            </td>
            <Key value={'0'} onClick={() => props.addCode('0')}/>
            <td>
              <button className="key" onClick={() => props.clearCode()}>C</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => { 
  return {
    addCode: (code: string) => dispatch(addCode(code)),
    clearCode: () => dispatch(clearCode())
  };
}

const Keypad = connect(null, mapDispatchToProps)(ConnectedKeyPad);

export default Keypad;