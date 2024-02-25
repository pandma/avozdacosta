import React from "react"

export default function Menu() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-[80px] my-4">A VOZ DA COSTA</h1>
      <div className="flex gap-4 bg-[#F2F2F2] py-4 px-8 text-[20px] rounded-[50px]">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Notes</p>
        <p className="cursor-pointer">Instagram</p>
        <p className="cursor-pointer">Revisions</p>
        <p className="cursor-pointer">Archive</p>
        <p className="cursor-pointer">About</p>
      </div>
    </div>
  )
}
