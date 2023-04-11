import React, { useState, useEffect } from "react";
import Contentstack from 'contentstack';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const API_KEY = process.env.REACT_APP_API_KEY;
const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN;
const CONTENT_TYPE = process.env.REACT_APP_CONTENT_TYPE;

const Fetch = () => {
    const [header, setHeader] = useState([])
    const [posts, setPosts] = useState([])
    const [homePage, setHomePages] = useState([])

    const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": "hd-prod" });
    const Blog = Stack.ContentType(CONTENT_TYPE).Query();
    const Header = Stack.ContentType("hd_header").Query();
    const Home = Stack.ContentType("hd_home_page").Query();

    const getContent = async () => {
        Blog
            .where("title")
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setPosts(result)

            },
                function error(err) {
                });
        Header
            .where("title")
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setHeader(result)

            },
                function error(err) {
                });
        Home
            .where("title")
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setHomePages(result)

            },
                function error(err) {
                });
    }
    useEffect(() => {
        getContent();
    })
    return { posts, header, homePage }
}
export default Fetch;