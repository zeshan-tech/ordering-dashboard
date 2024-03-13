// Interface for the mock data object
interface StoreMockData {
  logoUrl: string;
  name: string;
  type: string;
  hyperlink: string;
  active: boolean;
  ratings: number;
  ID: string;
}

// Function to generate random ratings
function generateRandomRating(): number {
  return Math.floor(Math.random() * 5) + 1; // Generating random ratings between 1 and 5
}

// Array to hold the mock data
const storeMockData: StoreMockData[] = [];

// Generate mock data
for (let i = 1; i <= 20; i++) {
  const logoUrl: string = `https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134213.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710201600&semt=ais`;
  const name: string = `Name ${i}`;
  const type: string = `Type ${i}`;
  const hyperlink: string = `http://example.com/${i}`;
  const active: boolean = Math.random() < 0.5;
  const ratings = generateRandomRating();

  const ID: string = i.toString();

  // Pushing mock data object to the array
  storeMockData.push({ logoUrl, name, type, hyperlink, active, ratings, ID });
}

export default storeMockData;
