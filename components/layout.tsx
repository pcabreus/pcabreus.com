import React from "react";
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({children}: any) {
    return (
        <>
            {/*TODO set the proper metas per page*/}
            <Meta description={"Description"} image={"image"}/>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}
