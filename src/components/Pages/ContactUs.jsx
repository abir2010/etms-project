import GoogleMapReact from "google-map-react";
import React from "react";
import ContactInfo from "../Elements/ContactInfo";
import Banner from "./../Elements/Banner";

var bnrimg = require("./../../resources/contact-banner.png");

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
  render() {
    const defaultProps = {
      center: {
        lat: 34.07328,
        lng: -118.25141,
      },
      zoom: 12,
    };
    return (
      <>
        <div className="page-content">
          <Banner
            title="Putting a plan to action, to assure your satisfaction!"
            pagename="Contact Us"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            {/* LOCATION BLOCK*/}
            <div className="container">
              {/* GOOGLE MAP & CONTACT FORM */}
              <div className="section-content">
                {/* CONTACT FORM*/}
                <div className="row">
                  <div className="col-md-8 col-sm-6">
                    <form
                      className="contact-form cons-contact-form"
                      method="post"
                      action="form-handler.php"
                    >
                      <div className="contact-one m-b30">
                        {/* TITLE START */}
                        <div className="section-head">
                          <div className="mt-separator-outer separator-left">
                            <div className="mt-separator">
                              <h2 className="text-uppercase sep-line-one ">
                                <span className="font-weight-300 text-primary">
                                  Get
                                </span>{" "}
                                In touch
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/* TITLE END */}
                        <div className="form-group">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            rows={4}
                            className="form-control "
                            required
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="text-right">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="site-button btn-effect"
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info m-b30">
                      {/* TITLE START */}
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 text-primary">
                                Contact
                              </span>{" "}
                              Info
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* TITLE END */}
                      <div className="bg-dark p-a20 text-white">
                        <div className="mt-icon-box-wraper left p-b40">
                          <div className="icon-xs">
                            <i className="fa fa-phone" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0 font-weight-500">
                              Phone number
                            </h5>
                            <div>(+88) 031-616905</div>
                            <span>(+88) 031-2862624</span>
                          </div>
                        </div>
                        <div className="mt-icon-box-wraper left p-b40">
                          <div className="icon-xs">
                            <i className="fa fa-envelope" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0 font-weight-500">
                              Email address
                            </h5>
                            <p>infoetmsbd@gmail.com</p>
                          </div>
                        </div>
                        <div className="mt-icon-box-wraper left">
                          <div className="icon-xs">
                            <i className="fa fa-map-marker" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0 font-weight-500">
                              Address info
                            </h5>
                            <p>
                              Corporate Head Office : 282, Momin Road (2nd
                              Floor) Jamal Khan Lane Kotowali Chittagong-4000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gmap-outline">
                <div style={{ height: "400px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={34.07328}
                      lng={-118.25141}
                      text={<i className="fa fa-map-marker" />}
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}

          <ContactInfo />
        </div>
      </>
    );
  }
}

export default ContactUs;
