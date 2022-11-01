interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/pools/count');
  const data = await res.json();

  console.log(data);

  return {
    props: {
      count: data.count
    }
  }
}
