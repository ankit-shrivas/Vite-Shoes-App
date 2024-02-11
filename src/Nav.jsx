function Nav() {


  return <>
    <nav className="pt-2 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <img src="public/images/brand_logo.png" alt="logo" />
          </div>
          <div className="col-md-6">
            <ul className="dis-flex list-unstyled">
              <li><a><b>Menu</b></a></li>
              <li><a><b>Location</b></a></li>
              <li><a><b>About</b></a></li>
              <li><a><b>Contact</b></a></li>
            </ul>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn text-light">Login</button>
          </div>
        </div>
      </div>
    </nav>

  </>

}

export default Nav;