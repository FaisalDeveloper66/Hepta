import React from 'react';

const Home = () =>{
    return(
        <>
    <div className="js-animsition animsition" id="site-wrap" data-animsition-in-className="fade-in" data-animsition-out-className="fade-out">
    
    <header className="site-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 site-logo" data-aos="fade"><a href="index.html" className="animsition-link">Hepta</a></div>
          <div className="col-8">


            <div className="site-menu-toggle js-site-menu-toggle"  data-aos="fade">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- END menu-toggle --> */}

            <div className="site-navbar js-site-navbar">
              <nav role="navigation">
                <div className="container">
                  <div className="row full-height align-items-center">
                    <div className="col-md-12 justify-content-center">
                      <ul className="list-unstyled menu">
                        <li className="active"><a href="index.html" className="animsition-link">Home</a></li>
                        <li><a href="hotel.html" className="animsition-link">Hotels</a></li>
                        <li><a href="about.html" className="animsition-link">About Us</a></li>
                        <li><a href="gallery.html" className="animsition-link">Gallery</a></li>
                        <li><a href="blog.html" className="animsition-link">News</a></li>
                        <li><a href="contact.html" className="animsition-link">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* <!-- END head --> */}

    <section className="site-hero overlay" style={{ backgroundImage: "url(assets/images/hero_1.jpg)"}}>
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center">
            <h1 className="heading mb-4" data-aos="fade-up">Travel &amp; Tours</h1>
            <p className="sub-heading mb-5" data-aos="fade-up" data-aos-delay="100">
              A free template by <a href="https://preview.colorlib.com/theme/hepta/index.html#" target="_blank" rel="noopener noreferrer">Colorlib</a>. Download and share!
            </p>
            <p className="pt-4" data-aos="fade-up" data-aos-delay="100">
              <a href="https://free-template.co/" target="_blank" rel="noopener noreferrer" className="btn uppercase btn-outline-light d-sm-inline d-block py-3">Visit Colorlib</a>
            </p>
          </div>
        </div>
        <p  data-aos="fade-up" data-aos-offset="-500"><a href="#next-section" className="scroll-down smoothscroll"> <span className="fa fa-play"></span> Scroll Down</a></p>
      </div>
    </section>
    {/* <!-- END section --> */}

    
    <section className="section" id="next-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4" data-aos="fade-up">
            <p><img src="assets/images/img_1_long.jpg" alt="Free Template by Free-Template.co" className="img-fluid" /></p>
          </div>
          <div className="col-lg-6 pl-lg-5" data-aos="fade-up">
            <h2 className="mb-4">Welcome To Our Website</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
            <p className="pt-4">
              <a href="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox className="btn-play d-flex">
                <span className="icon align-self-center mr-3"><span className="fa fa-play"></span></span>
                <span className="text align-self-center">Watch The Video</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-light-2">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading" data-aos="fade-up">Experience Once In Your Life Time</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/001-breakfast.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4" />
              <h3>Good Foods</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/002-planet-earth.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4"/>
              <h3>Travel Anywhere</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/003-airplane.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4" />
              <h3>Airplane</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/004-beach.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4" />
              <h3>Beach Resort</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/005-mountains.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4" />
              <h3>Mountain Climbing</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
            <div className="d-block ftco-img-flaticon">
              <img src="assets/fonts/flaticon/svg/006-hot-air-balloon.svg" alt="Free Template by Free-Template.co" className="img-fluid mb-4" />
              <h3>Hot Air Balloon</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="section slider-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading" data-aos="fade-up">International Tour Management.</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="home-slider major-caousel owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="slider-item">
                <img src="assets/images/slider-1.jpg" alt="The team at the office" className="img-fluid" />
              </div>
              <div className="slider-item">
                <img src="assets/images/slider-2.jpg" alt="slider 2" className="img-fluid" />
              </div>
              <div className="slider-item">
                <img src="assets/images/slider-3.jpg" alt="slider 3" className="img-fluid" />
              </div>
              <div className="slider-item">
                <img src="assets/images/slider-4.jpg" alt="slider 4" className="img-fluid" />
              </div>
              <div className="slider-item">
                <img src="assets/images/slider-5.jpg" alt="slider 5" className="img-fluid" />
              </div>
              <div className="slider-item">
                <img src="assets/images/slider-6.jpg" alt="slider 6" className="img-fluid" />
              </div>
            </div>
            {/* <!-- END slider --> */}
          </div>
        
        </div>
      </div>
    </section>
    {/* <!-- END section --> */}
    
    <section className="section blog-post-entry bg-light slant-top">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 primary-bg-text">
            <h2 className="heading" data-aos="fade-up">Recent Blog Post</h2>
            <p className="lead" data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">

            <div className="media media-custom d-block mb-4">
              <a href="https://preview.colorlib.com/theme/hepta/" className="mb-4 d-block"><img src="assets/images/img_1.jpg" alt="first img 1" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="https://preview.colorlib.com/theme/hepta/">45 Best Places To Unwind</a></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
            <div className="media media-custom d-block mb-4">
              <a href="https://preview.colorlib.com/theme/hepta/" className="mb-4 d-block"><img src="assets/images/img_2.jpg" alt="Imag 2" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="https://preview.colorlib.com/theme/hepta/">45 Best Places To Unwind</a></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 post" data-aos="fade-up" data-aos-delay="300">
            <div className="media media-custom d-block mb-4">
              <a href="https://preview.colorlib.com/theme/hepta/" className="mb-4 d-block"><img src="assets/images/img_3.jpg" alt="Imag 3" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="https://preview.colorlib.com/theme/hepta/">45 Best Places To Unwind</a></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- END section --> */}

    

    <section className="section testimonial-section bg-light-2">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading" data-aos="fade-up">Happy Customers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial">
              <div className="author-image mb-3">
                <img src="assets/images/person_1.jpg" alt="Imag placeholder" className="rounded-circle" />
              </div>
              <blockquote>

                <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Clare Gupta</em></p>
              
            </div>
          </div>
          {/* <!-- END col --> */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial">
              <div className="author-image mb-3">
                <img src="assets/images/person_2.jpg" alt="Imag placeholder" className="rounded-circle" />
              </div>
              <blockquote>
                <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;</p>
              </blockquote>
              <p><em>&mdash; Rogie Slater</em></p>
            </div>
          </div>
          {/* <!-- END col --> */}

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="testimonial">
              <div className="author-image mb-3">
                <img src="assets/images/person_3.jpg" alt="Imag placeholder" className="rounded-circle" />
              </div>
              <blockquote>

                <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>
          </div>
          {/* <!-- END col --> */}
        </div>
      </div>
    </section>

    <section className="section visit-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 ">
            <h2 className="heading" data-aos="fade-up">Top Destination</h2>
            <p className="lead" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 visit mb-3" data-aos="fade-right">
            <a href="https://preview.colorlib.com/theme/hepta/"><img src="assets/images/img_1.jpg" alt="Imag placeholder" className="img-fluid" /> </a>
            <h3><a href="https://preview.colorlib.com/theme/hepta/">Food &amp; Wines</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-half"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              3,239 reviews
            </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3" data-aos="fade-right" data-aos-delay="100">
            <a href="https://preview.colorlib.com/theme/hepta/"><img src="assets/images/img_2.jpg" alt="Imag placeholder" className="img-fluid" /> </a>
            <h3><a href="https://preview.colorlib.com/theme/hepta/">Resort &amp; Spa</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-half"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              4,921 reviews
            </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3" data-aos="fade-right" data-aos-delay="200">
            <a href="https://preview.colorlib.com/theme/hepta/"><img src="assets/images/img_4.jpg" alt="Imag placeholder" className="img-fluid" /> </a>
            <h3><a href="https://preview.colorlib.com/theme/hepta/">Hotel Rooms</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              2,112 reviews
            </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3" data-aos="fade-right" data-aos-delay="300">
            <a href="https://preview.colorlib.com/theme/hepta/"><img src="assets/images/img_5.jpg" alt="Imag placeholder" className="img-fluid" /> </a>
            <h3><a href="https://preview.colorlib.com/theme/hepta/">Mountain Climbing</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              6,421 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- END section --> */}

    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-5">
            <h3>Quick Link</h3>
            <ul className="list-unstyled link">
              <li><a href="https://preview.colorlib.com/theme/hepta/#">About Us</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Terms &amp; Conditions</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Privacy Policy</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Help</a></li>
             <li><a href="https://preview.colorlib.com/theme/hepta/#">Rooms</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h3>Support</h3>
            <ul className="list-unstyled link">
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Our Location</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">The Hosts</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">About</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Contact</a></li>
              <li><a href="https://preview.colorlib.com/theme/hepta/#">Restaurant</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5 pr-md-5 contact-info">
            <h3>Contact Info</h3>
            <p><span className="d-block">Address:</span> <span> 98 West 21th Street, Suite 721 New York NY 10016</span></p>
            <p><span className="d-block">Phone:</span> <span> +1 435 3533</span></p>
            <p><span className="d-block">Email:</span> <span> info@yourdomain.com</span></p>
          </div>
          <div className="col-md-3 mb-5">
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter</p>
            <form action="#" className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your email..." />
                <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row bordertop text-center pt-5">
          <p className="col-md-12">&copy; Copyright 2024 All rights reserved | This template is made with &#128420; by <a href="https://colorlib.com/">Colorlib</a></p>
            
          <p className="col-md-12 social">
            <a href="https://preview.colorlib.com/theme/hepta/#"><span className="fa fa-facebook"></span></a>
            <a href="https://preview.colorlib.com/theme/hepta/#"><span className="fa fa-twitter"></span></a>
            <a href="https://preview.colorlib.com/theme/hepta/#"><span className="fa fa-instagram"></span></a>
            <a href="https://preview.colorlib.com/theme/hepta/#"><span className="fa fa-linkedin"></span></a>
            <a href="https://preview.colorlib.com/theme/hepta/#"><span className="fa fa-youtube"></span></a>
            
          </p>
        </div>
      </div>
    </footer>
  </div> 
        </>
    )
}

export default Home;