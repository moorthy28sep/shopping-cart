import React from 'react';
import Counter from './counter';
import { connect} from 'react-redux';

const Counters  = (props) => {
    const {counters} = props;
    return (
      <React.Fragment>
        {counters.map((counter) => {
            return <Counter key={counter.id} counter={counter} />
        })}
      </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        counters : state.counters
    }
};

export default connect(mapStateToProps)(Counters);
