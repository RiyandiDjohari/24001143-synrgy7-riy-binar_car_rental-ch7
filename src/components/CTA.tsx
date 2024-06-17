
const CTA = () => {
  return (
    <section className="pt-[100px] px-4" id="cta">
      <div className="container bg-primary rounded-xl">
        <div className="flex justify-start items-center flex-col py-16 gap-9">
          <div className="text-white text-center">
            <h2 className="headline md:w-[80%] lg:w-full mx-auto">Sewa Mobil di Sulawesi Tengah Sekarang</h2>
            <p className="description w-[90%] md:w-[60%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <button type="button" className="btn-primary">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
