import React from 'react'
import Header from '../Components/Header'
import Breadcrums from '../Components/Breadcrums'
export default function PdfPage() {
  return (
    <div>
      <Header />
      <section className='breadcrum-section pt-[64px] container mx-auto px-5'>
      <div className="justify-between items-center flex ">
        <p className='<div class="text-black text-2xl font-normal'>Your estimate</p>
      <Breadcrums />
</div>
</section>
<section className='container mx-auto px-5'>
  <div className='pt-[40px]'>
        <h2>Ihr Kostenvoranschlag wurde erfolgreich generiert und an folgende Email Adressen geschickt.</h2>
      </div>
      </section>
    </div>
  )
}
