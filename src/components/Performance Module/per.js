import React from 'react'

const performance = () => {
    return ( 
        <div>
            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div classNameName="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
        </div>
     );
}
 
export default performance;