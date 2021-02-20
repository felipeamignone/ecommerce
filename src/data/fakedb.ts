import { IProduct } from "./models/landing";

import americana from "../assets/images/americana.png";
import crespa from "../assets/images/crespa.png";
import frisee from "../assets/images/frisee.png";
import lisa from "../assets/images/lisa.png";
import mimosa from "../assets/images/mimosa.png";
import roxa from "../assets/images/roxa.png";

const Alface1: IProduct = {
  description:
    "A alface americana leva esse nome por seus primeiros cultivos terem sido realizados nos Estados Unidos. ",
  id: 1,
  name: "Alface Americana",
  price: 5.99,
  img: americana,
};

const Alface2: IProduct = {
  description:
    "Tão popular quanto a alface crespa, a alface lisa é um dos tipos de alface muito consumido nos pratos de salada dos brasileiros",
  id: 2,
  name: "Alface Lisa",
  price: 5.99,
  img: lisa,
};

const Alface3: IProduct = {
  description:
    "A alface crespa é o que gostamos de chamar de “alface tradicional”. É um dos tipos de alface que você sempre vê nas saladas de restaurantes ou nas casas de família.",
  id: 3,
  name: "Alface Crespa",
  price: 5.99,
  img: crespa,
};

const Alface4: IProduct = {
  description:
    "A alface frisée é um tipo menos popular dessa folha, mas muito elegante e saborosa.",
  id: 4,
  name: "Alface Frisée",
  price: 5.99,
  img: frisee,
};

const Alface5: IProduct = {
  description:
    "A alface mimosa é um tipo de folha bastante delicada. É também chamada de “alface baby” por conta de suas folhas.",
  id: 5,
  name: "Alface Mimosa",
  price: 5.99,
  img: mimosa,
};

const Alface6: IProduct = {
  description:
    "A alface roxa é um tipo bastante popular dessa folha, por conta de sua coloração diferenciada.",
  id: 6,
  name: "Alface Roxa",
  price: 5.99,
  img: roxa,
};

export const ListaAlfaces: Array<IProduct> = [
  Alface1,
  Alface2,
  Alface3,
  Alface4,
  Alface5,
  Alface6,
];
