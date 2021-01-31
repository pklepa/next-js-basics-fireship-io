import Link from "next/link";

export default function CarList({ carList }) {
  return (
    <div>
      <h1>my list of cars</h1>

      <ul>
        {carList.map((car, index) => {
          return (
            <li key={index}>
              <Link href={`/cars/${car}`}>{car}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  return {
    props: { carList: data },
  };
}
