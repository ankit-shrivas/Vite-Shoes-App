function Section() {

  return <>
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="left-section col-md-6">
            <div>
              <h1 >
                <b>Your Feet Deserve The Best</b>
              </h1>
              <p className="pt-3">
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              </p>
            </div>
            <div className="pt-3">
              <button className="btn text-light">Shop Now</button>
              <button className="bg-primary btn text-light m-2">Category</button>
            </div>
            <div className="pt-3">
              <p>Also Available On</p>
              <a ><img src="public/images/amazon.png" alt="amazon" /></a>
              <a className="m-2"><img src="public/images/flipkart.png" alt="flipkart" /></a>
            </div>
          </div>
          <div className="right-section col-md-6">
            <div className="text-center">
              <img src="public/images/hero-image.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
export default Section;