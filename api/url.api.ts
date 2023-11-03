export const shorten = async (longUrl: string) => {
  const res = await fetch(
    `${process.env.HOST}/api/data/shorten`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
    },
  );

  return await res.json();
}
