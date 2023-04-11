import React from "react";
import { Link } from "react-router-dom";
import Fetch from "../Fetch";
const Header = () => {
    const { header } = Fetch();
    return (
        <div className="navbar">
            <ul >
                {header[0] && header[0].map((h) => {
                    return (
                        <li key={h.uid}>
                            <Link to={h.class_id.href}>{h.class_id.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Header;


