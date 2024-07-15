import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <section id="faqs" className="faqs-section" style={{backgroundColor:"#FF8000"}}>
        <div className="container">
          <div
            className="section-title"
           
     
          >
            <h2 className="text-white">Tanya jawab </h2>
            <p className="text-white">
              Selamat datang di Toko Roti Fess! Kami senang Anda mengunjungi
              toko kami. Berikut ini adalah beberapa pertanyaan yang sering
              diajukan oleh pelanggan kami beserta jawabannya untuk memudahkan
              Anda mendapatkan informasi yang Anda butuhkan.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="text-center"
              
              >
                <Image
                  src="/images/donut.png"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div
                className="faq-content"
                
              >
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>1.</span> Jam operasional Toko Roti Fess&#128339;?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Toko Roti Fess buka setiap hari dari pukul 08.00 pagi
                        hingga 20.00 malam.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>2.</span> Apakah Toko Roti Fess menerima pesanan
                        khusus&#127874;?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya, kami menerima pesanan khusus untuk berbagai acara
                        seperti ulang tahun, pernikahan, dan acara spesial
                        lainnya. Silakan hubungi kami minimal 3 hari sebelum
                        acara untuk memastikan pesanan Anda dapat terpenuhi.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>3.</span> Bagaimana cara memesan secara online&#128241;?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya, kami menyediakan layanan pengiriman untuk wilayah
                        sekitar toko. Untuk informasi lebih lanjut mengenai area
                        pengiriman dan biaya, silakan hubungi kami
                        support@fessbakery.com.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>4.</span> Apakah Toko Roti Fess menyediakan
                        layanan pesan antar (takeaway&#128666;)?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya, kami menyediakan layanan pesan antar (takeaway).
                        Anda dapat memesan melalui telepon atau langsung datang
                        ke toko untuk mengambil pesanan Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>5.</span> Apakah ada rekomendasi produk
                        atau favorit dari Toko Roti Fess&#127849;?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya, kami selalu memiliki rekomendasi produk terbaru atau
                        favorit dari pelanggan kami. Tanyakan kepada staf kami
                        untuk saran atau rekomendasi produk yang sesuai dengan
                        selera Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>6.</span> Bagaimana cara menghubungi Toko Roti
                        Fess jika saya memiliki pertanyaan atau keluhan&#128226;?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Anda dapat menghubungi kami melalui telepon di nomor
                        (123) 456-7890 atau melalui email di
                        support@fessbakery.com. Kami juga tersedia di media
                        sosial untuk menanggapi pertanyaan atau keluhan Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
