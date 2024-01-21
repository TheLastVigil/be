export async function getRandomStaff() {
  const res = await fetch(
    "https://hp-api.onrender.com/api/characters/house/gryffindor"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const filteredResult = res.filter((item: any) => item.image !== "")
  const randomNumber = Math.floor(Math.random() * filteredResult.length);
  return filteredResult[randomNumber];
}
