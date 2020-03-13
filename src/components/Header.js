import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <div id="bg" className="p-3 bg-red-400 text-center text-white font-extrabold">
                <a data-aos="zoom-in-up" href="/">OMDB</a>
            </div>
        )
    }
}
