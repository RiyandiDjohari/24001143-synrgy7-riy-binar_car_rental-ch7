import FilterCar from "../../components/FilterCar"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import ListCar from "../../components/ListCar"
import Navbar from "../../components/Navbar"
import axios from "axios";
import { useEffect, useState } from "react";

const FilterCars = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [filteredCars, setFilteredCars] = useState<any>();
  const token = localStorage.getItem("token");
  
  const fetchCars = async () => {
    const response = await axios.get("https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/cars", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.data;
    setCars(data.cars);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const filterCars = (tipe: any, tanggal: any, waktu: any, jumlah: any) => {
    console.log(tipe, waktu, tanggal)
    const filter = cars.filter((car) => car.availableAt <= tanggal && car.capacity == jumlah)
    
    setFilteredCars(filter)
  }

  return (
    <div>
        <Navbar />
        <Hero hideButton={true} />
        <FilterCar filterCars={filterCars}/>
        <ListCar cars={filteredCars ? filteredCars : cars} />
        <Footer />
    </div>
  )
}

export default FilterCars