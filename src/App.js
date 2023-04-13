
import Axios from 'axios';
function App() {
  const getip = async()=>{
      await Axios.get("https://api.ipify.org?format=json").then((res)=>{
        document.getElementById('track').innerHTML=res.data.ip;
      })

  }
  return (
    <div className="App">
 <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Find Your Ip address</h3>


            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={getip}>Get your IP</button>

            <h3 className="mb-5" id="track"></h3>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
