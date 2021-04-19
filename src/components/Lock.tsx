import { connect } from 'react-redux';
import { IAppState } from '../reducer';
import { setLocked } from '../actions';
import './Lock.css';

export interface ILockProps {
  locked: boolean;
  setLocked: () => void;
}

export const ConnectedLock = (props: ILockProps) => {
  let statusText = 'Avattu';
  const classes = ['lock'];
  if (props.locked) {
    statusText = 'Lukossa';
    classes.push('locked');
  }

  return (
    <button 
      className={classes.join(' ')} 
      onClick={() => props.setLocked()}>
      { statusText }
    </button>
  );
}

const mapStateToProps = (state: IAppState) => {
  return { locked: state.locked };
};

const mapDispatchToProps = (dispatch: any) => { 
  return {
    setLocked: () => dispatch(setLocked(true))
  };
}

const Lock = connect(mapStateToProps, mapDispatchToProps)(ConnectedLock);

export default Lock;
