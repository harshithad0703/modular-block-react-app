import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon  from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook"
const Contact = () => {
    return (
        <div id="contact">
            <div className="contact_details">
                <h2 className="headings">Contact Details</h2>
                <div className="contact-icons">
                    <a href="https://github.com" ><GitHubIcon fontSize="large"/></a>
                    <a href="https://www.linkedin.com" ><LinkedInIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com" ><FacebookIcon fontSize="large"/></a>
                    <a href="https://twitter.com" ><TwitterIcon fontSize="large"/></a>
                </div>
            </div>
        </div>
    )
}
export default Contact;