import React from 'react';
export default ({app,onDelete})=> (<div style={{border:'1px solid #ccc',margin:10,padding:10}}>
<h3>{app.company}</h3><p>{app.role}</p><b>{app.status}</b><p>{app.notes}</p>
<button onClick={()=>onDelete(app._id)}>Delete</button></div>);