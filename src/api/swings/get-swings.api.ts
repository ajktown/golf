type IronNumber = 3 | 4 | 5 | 6 | 7 | 8 | 9;
type WedgeName = "Pitching" | "52" | "56" | "60";
type Club = "Driver" | `${IronNumber} Iron` | `${WedgeName} Wedge`;

type StandDistance = "Normal" | "Short";

type SwingType = "Full Swing" | "3/4 Swing" | "1/2 Swing";

type Grip = "+1" | "0" | "-1" | "-2" | "-3" | "-4";

export interface ISwing {
  club: Club;
  stanceDistance: StandDistance;
  swingType: SwingType;
  grip: Grip;
  carry: number;
  total: number;
}
interface GetSwingsApiResDTO {
  swings: ISwing[];
}

const rawData: ISwing[] = [
  {
    club: "Driver",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 250,
    total: 270,
  },
  {
    club: "3 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 210,
    total: 220,
  },
  {
    club: "4 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 190,
    total: 200,
  },
  {
    club: "5 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 180,
    total: 190,
  },
  {
    club: "6 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 170,
    total: 175,
  },
  {
    club: "7 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 160,
    total: 160,
  },
  {
    club: "8 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 150,
    total: 150,
  },
  {
    club: "9 Iron",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 140,
    total: 140,
  },
  {
    club: "Pitching Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 130,
    total: 130,
  },
  {
    club: "52 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 115,
    total: 115,
  },
  {
    club: "56 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 100,
    total: 100,
  },
  {
    club: "60 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 85,
    total: 85,
  },
  {
    club: "Pitching Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 130,
    total: 130,
  },
  {
    club: "52 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 115,
    total: 115,
  },
  {
    club: "52 Wedge",
    stanceDistance: "Short",
    swingType: "Full Swing",
    grip: "-4",
    carry: 40,
    total: 45,
  },
  {
    club: "56 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 100,
    total: 100,
  },
  {
    club: "56 Wedge",
    stanceDistance: "Short",
    swingType: "Full Swing",
    grip: "-4",
    carry: 35,
    total: 40,
  },
  {
    club: "60 Wedge",
    stanceDistance: "Normal",
    swingType: "Full Swing",
    grip: "+1",
    carry: 85,
    total: 85,
  },
  {
    club: "60 Wedge",
    stanceDistance: "Short",
    swingType: "Full Swing",
    grip: "-4",
    carry: 30,
    total: 35,
  },
];

export const getSwingsApi = (): GetSwingsApiResDTO => {
  return { swings: rawData };
};
