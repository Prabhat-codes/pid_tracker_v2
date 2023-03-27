import React from 'react'

const Developer = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <div className="accordion my-4" style={{ width: "160vh" }} id="accordionExample">
        <div className="accordion-item " >
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Pending Files
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{
            backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
            color: props.mode === 'light' ? '#262525' : 'white'
          }}>
            <div className="accordion-body">
              <div id="container" style={{ boxShadow: "0 5px 10px -5px rgba(0,0,0,0.5)",
  position: "relative",
  background: "white"}}>

               <table class="sortable" style={{backgroundColor: "#F3F3F3",borderCollapse: "collapse",width: "100%",margin: "15px 0"}}>
                  <thead style={{  backgroundColor:" #FE4902",color:" #FFF",cursor:" pointer",padding: "5px 10px"}}>
                    <tr>
                      <th>Filename</th>
                      <th>Type</th>
                      <th>Size <small style={{fontSize: "9px"}}>(bytes)</small></th>
                      <th>Date Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr styles={{textDecoration:"none", color:" #663300",display:" block",  padding:" 5px 10px"}}>
                      <td><a href='./$namehref'>name</a></td>
                      <td><a href='./$namehref'>extn</a></td>
                      <td><a href='./$namehref'>size</a></td>
                      <td sorttable_customkey='$timekey'><a href='./$namehref'>modtime</a></td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Uploaded Files
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{
              backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
              color: props.mode === 'light' ? '#262525' : 'white'
            }}>
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Approved Files
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{
              backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
              color: props.mode === 'light' ? '#262525' : 'white'
            }}>
              <div className="accordion-body" >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Developer