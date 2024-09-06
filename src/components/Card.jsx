import React from "react"
import mobile from "../assets/images/image-product-mobile.jpg"
import desktop from "../assets/images/image-product-desktop.jpg"
import { MdOutlineShoppingCart } from "react-icons/md"

const Card = () => {
    return (
        <div className='flex flex-col  bg-white rounded-xl md:flex md:flex-row md:h-[450px] md:w-[600px] '>
            <img className='rounded-t-lg md:hidden' src={mobile} alt='' />
            <img className='hidden md:block md:rounded-l-lg' src={desktop} alt='' />
            <div className='flex flex-col py-6 px-4 p-4 gap-3 md:gap-5 md:w-[300px] '>
                <p
                    className='font-medium text-[#6c7289] tracking-widest'
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    PERFUME
                </p>
                <h1 className='font-bold text-3xl' style={{ fontFamily: "Fraunces, serif" }}>
                    Gabrielle Essence Eau De Parfum
                </h1>
                <p className='font-medium text-[#6c7289] ' style={{ fontFamily: "Montserrat, sans-serif" }}>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfurmer-Creater for the
                    House of CHANEL.
                </p>
                <div className='flex gap-5 items-center mt-2'>
                    <span className='text-4xl font-bold text-[#3c8067]' style={{ fontFamily: "Fraunces, serif" }}>
                        $149.99
                    </span>
                    <span
                        className='text-sm line-through text-[#6c7289]'
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        $169.99
                    </span>
                </div>
                <div>
                    <button className='bg-[#3c8067] w-full p-4 rounded-lg mt-2 text-white font-bold flex items-center justify-center gap-2 hover:bg-[#2d624f]'>
                        <MdOutlineShoppingCart style={{ fontSize: "20px" }} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
