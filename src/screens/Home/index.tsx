import React from "react";

import { Container, Header, TotalCars, HeaderContant, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
  };
  return (
    <Container>
      <Header>
        <HeaderContant>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 200 carros</TotalCars>
        </HeaderContant>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
