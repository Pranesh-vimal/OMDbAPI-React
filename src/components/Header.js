import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <div id="bg" className="p-3 text-center text-white font-extrabold bg-brand fixed w-full z-10 top-0 shadow ">
                <a data-aos="zoom-in-up" href="/">OMDB</a>
            </div>
        )
    }
}
